// ===== Note de risque Pharos.watch =====
//
// Pharos (pharos.watch) est un service INDÉPENDANT qui note la sécurité des
// stablecoins : note globale (F → A+) + breakdown par dimension (stabilité du
// peg, liquidité de sortie, résilience, décentralisation, dépendances).
// On l'affiche dans la catégorie « risques » de chaque fiche protocole pour
// donner un second avis chiffré, à côté de notre score maison.
//
// Source : GET https://api.pharos.watch/api/report-cards  (renvoie TOUTES les
// cartes ; on filtre par id). Auth : header X-API-Key = process.env.PHAROS_API_KEY.
// ⚠️ La clé vit dans site/.env.local (gitignored) + Vercel — JAMAIS commitée.
// Identifiant Pharos = format `ticker-issuer` (ex. "reusd-re-protocol").
// Fetch côté serveur, revalidation ISR horaire. Dégrade proprement si la clé
// manque ou si l'API échoue (la carte ne s'affiche simplement pas).

export type PharosDimension = {
  cle: string;
  label: string;
  grade: string;
  score: number | null;
};

export type PharosCard = {
  id: string;
  grade: string; // ex. "B-"
  score: number; // ex. 65
  dimensions: PharosDimension[];
  url: string; // page publique Pharos
};

// Libellés FR des dimensions Pharos (clés de l'API → français).
const DIM_LABELS: Record<string, string> = {
  pegStability: "Stabilité du peg",
  liquidity: "Liquidité de sortie",
  resilience: "Résilience",
  decentralization: "Décentralisation",
  dependencyRisk: "Risque de dépendances",
};

type RawDim = { grade?: string; score?: number | null };
type RawCard = {
  id: string;
  overallGrade?: string;
  overallScore?: number;
  dimensions?: Record<string, RawDim>;
};

export async function fetchPharosCard(id: string): Promise<PharosCard | null> {
  const key = process.env.PHAROS_API_KEY;
  if (!key) return null; // pas de clé => on n'affiche rien (build local sans secret)
  try {
    const res = await fetch("https://api.pharos.watch/api/report-cards", {
      headers: { "X-API-Key": key, Accept: "application/json" },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const json = (await res.json()) as { cards?: RawCard[] };
    const card = json.cards?.find((c) => c.id === id);
    if (!card || card.overallScore == null || !card.overallGrade) return null;

    const dims = card.dimensions ?? {};
    const dimensions: PharosDimension[] = Object.entries(dims)
      .filter(([, v]) => v && v.grade) // on saute les dimensions vides
      .map(([cle, v]) => ({
        cle,
        label: DIM_LABELS[cle] ?? cle,
        grade: v.grade as string,
        score: typeof v.score === "number" ? v.score : null,
      }));

    return {
      id: card.id,
      grade: card.overallGrade,
      score: card.overallScore,
      dimensions,
      url: `https://pharos.watch/stablecoin/${card.id}`,
    };
  } catch {
    return null;
  }
}

// Couleur d'un grade Pharos (A+ … F, ou NR = non noté).
export function pharosGradeColor(grade: string): string {
  const g = grade.toUpperCase();
  if (g.startsWith("A")) return "bg-green-100 text-green-700";
  if (g.startsWith("B")) return "bg-teal/15 text-teal";
  if (g.startsWith("C")) return "bg-yellow-100 text-yellow-700";
  if (g.startsWith("D")) return "bg-orange-100 text-orange-700";
  if (g.startsWith("F")) return "bg-red-100 text-red-700";
  return "bg-nuit/10 text-nuit/50"; // NR / inconnu
}
