// ===== Données LIVE des fiches protocoles =====
//
// Règle (figée le 2026-06-25) : sur les fiches protocoles du site, les chiffres
// qui périment vite — TVL, APY/rendement — ne sont JAMAIS recopiés du wiki en
// dur. Ils sont récupérés EN DIRECT depuis DeFiLlama (recette confirmée par le
// projet trackpaw). Le wiki reste la source de l'ANALYSE (qualitatif, durable),
// pas des montants. À appliquer à CHAQUE protocole.
//
// Sources DeFiLlama :
//   • TVL protocole  → https://api.llama.fi/tvl/<slug>            (renvoie un nombre)
//   • APY + TVL pool → https://yields.llama.fi/chart/<poolUUID>   (dernier point)
//
// Fetch côté serveur avec revalidation ISR (voir `revalidate` dans la page).
// En cas d'échec réseau : on renvoie ce qu'on a (champs à null) et l'UI dégrade
// proprement — on n'affiche jamais un chiffre faux.

export type ProtoLiveConfig = {
  defillamaSlug?: string; // ex. "re" -> api.llama.fi/tvl/re
  pools?: { label: string; id: string }[]; // UUID DeFiLlama yields
};

export type ProtoPoolLive = {
  label: string;
  tvlUsd: number | null;
  apy: number | null;
};

export type ProtoLiveData = {
  tvlUsd: number | null;
  pools: ProtoPoolLive[];
  fetchedAt: number;
};

const REVALIDATE = 3600; // 1 h

async function fetchProtocolTvl(slug: string): Promise<number | null> {
  try {
    const res = await fetch(`https://api.llama.fi/tvl/${slug}`, {
      next: { revalidate: REVALIDATE },
    });
    if (!res.ok) return null;
    const n = (await res.json()) as number;
    return typeof n === "number" && isFinite(n) ? n : null;
  } catch {
    return null;
  }
}

type LlamaChart = { status?: string; data?: { tvlUsd?: number; apy?: number }[] };

async function fetchPoolLive(id: string): Promise<{ tvlUsd: number | null; apy: number | null }> {
  try {
    const res = await fetch(`https://yields.llama.fi/chart/${id}`, {
      next: { revalidate: REVALIDATE },
    });
    if (!res.ok) return { tvlUsd: null, apy: null };
    const json = (await res.json()) as LlamaChart;
    const last = json.data?.[json.data.length - 1];
    return {
      tvlUsd: typeof last?.tvlUsd === "number" ? last.tvlUsd : null,
      apy: typeof last?.apy === "number" ? last.apy : null,
    };
  } catch {
    return { tvlUsd: null, apy: null };
  }
}

// Récupère toutes les données live d'un protocole (TVL + pools), en parallèle.
export async function fetchProtoLive(cfg: ProtoLiveConfig): Promise<ProtoLiveData> {
  const [tvlUsd, pools] = await Promise.all([
    cfg.defillamaSlug ? fetchProtocolTvl(cfg.defillamaSlug) : Promise.resolve(null),
    Promise.all(
      (cfg.pools ?? []).map(async (p) => ({
        label: p.label,
        ...(await fetchPoolLive(p.id)),
      })),
    ),
  ]);
  return { tvlUsd, pools, fetchedAt: Date.now() };
}

// --- Formatage FR ---

// 272892069 -> "273 M$" ; 1_900_000_000 -> "1,9 Md$"
export function formatUsd(n: number | null): string {
  if (n == null) return "—";
  if (n >= 1e9) return `${(n / 1e9).toFixed(1).replace(".", ",")} Md$`;
  if (n >= 1e6) return `${Math.round(n / 1e6)} M$`;
  if (n >= 1e3) return `${Math.round(n / 1e3)} k$`;
  return `${Math.round(n)} $`;
}

// 6.59831 -> "6,6 %"
export function formatApy(n: number | null): string {
  if (n == null) return "—";
  return `${n.toFixed(1).replace(".", ",")} %`;
}
