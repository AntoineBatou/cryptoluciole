import type { ReactNode } from "react";

// Illustrations simples (SVG dessiné à la main) des miniatures de l'accueil.
// Une entrée par numéro / dossier : la clé est référencée par le champ
// `vignette` de issues.ts ou dossiers.ts. Pour un nouveau numéro, on ajoute
// un dessin ici (viewBox 120×120, traits arrondis, 3 couleurs max).
//
// Couleurs : le trait principal suit `currentColor` (blanc sur les tuiles
// nuit, nuit sur les cartes claires) ; or-luciole et teal en accents.
const OR = "#F5A623";
const TEAL = "#2ABFAB";

const DESSINS: Record<string, ReactNode> = {
  // N°1 — staking : une pile de jetons verrouillée
  staking: (
    <>
      <ellipse cx="48" cy="86" rx="26" ry="8" />
      <path d="M22 86v-10M74 86v-10" />
      <ellipse cx="48" cy="76" rx="26" ry="8" />
      <path d="M22 76v-10M74 76v-10" />
      <ellipse cx="48" cy="66" rx="26" ry="8" fill={OR} fillOpacity=".2" stroke={OR} />
      <rect x="70" y="40" width="30" height="26" rx="5" stroke={TEAL} />
      <path d="M77 40v-7a8 8 0 0 1 16 0v7" stroke={TEAL} />
      <circle cx="85" cy="53" r="3" fill={TEAL} stroke="none" />
    </>
  ),
  // N°2 — restaking : un jeton remis en circulation (flèches circulaires)
  restaking: (
    <>
      <circle cx="60" cy="60" r="18" fill={OR} fillOpacity=".2" stroke={OR} />
      <path d="M53 60h14M60 53v14" stroke={OR} />
      <path d="M28 52a34 34 0 0 1 58-20" stroke={TEAL} />
      <path d="M86 20v12H74" stroke={TEAL} />
      <path d="M92 68a34 34 0 0 1-58 20" />
      <path d="M34 100V88h12" />
    </>
  ),
  // N°3 — stablecoins : un dollar arrimé à une ligne plate (le « peg »)
  stablecoins: (
    <>
      <circle cx="60" cy="50" r="26" fill={OR} fillOpacity=".2" stroke={OR} />
      <path d="M68 40c-2-4-6-5-9-5-5 0-9 3-9 7 0 10 19 5 19 15 0 4-4 7-10 7-4 0-8-2-10-5M60 30v6M60 64v6" stroke={OR} />
      <path d="M16 96h88" stroke={TEAL} />
      <path d="M16 96h10l4-4 4 8 4-4h66" strokeOpacity=".35" />
    </>
  ),
  // N°4 — perps : bougies + flèche, avec l'effet de levier « ×5 »
  perps: (
    <>
      <path d="M20 100h80" strokeOpacity=".4" />
      <path d="M32 62v32M52 50v36M72 34v40" />
      <rect x="26" y="70" width="12" height="16" rx="2" fill={TEAL} fillOpacity=".25" stroke={TEAL} />
      <rect x="46" y="58" width="12" height="20" rx="2" fill={TEAL} fillOpacity=".25" stroke={TEAL} />
      <rect x="66" y="42" width="12" height="24" rx="2" fill={TEAL} fillOpacity=".25" stroke={TEAL} />
      <path d="M24 56 L56 34 L74 24 L98 16" stroke={OR} />
      <path d="M86 14h12v12" stroke={OR} />
      <path d="M88 52l10 12M98 52l-10 12" stroke={OR} />
    </>
  ),
  // N°5 — emprunter contre ses cryptos : un coffre (le collatéral) qui libère des dollars
  emprunt: (
    <>
      <rect x="18" y="34" width="56" height="56" rx="8" />
      <circle cx="46" cy="62" r="13" stroke={TEAL} />
      <path d="M46 49v6M46 69v6M33 62h6M53 62h6" stroke={TEAL} />
      <path d="M24 90v6M68 90v6" />
      <path d="M80 62h12" strokeDasharray="2 6" />
      <circle cx="98" cy="46" r="10" fill={OR} fillOpacity=".2" stroke={OR} />
      <circle cx="98" cy="74" r="10" fill={OR} fillOpacity=".2" stroke={OR} />
      <path d="M98 41v10M98 69v10" stroke={OR} />
    </>
  ),
  // N°6 — marchés de prédiction : une jauge OUI / NON
  prediction: (
    <>
      <path d="M20 78a40 40 0 0 1 80 0" strokeOpacity=".35" />
      <path d="M20 78a40 40 0 0 1 58-35.6" stroke={TEAL} strokeWidth="8" />
      <path d="M60 78l18-26" stroke={OR} />
      <circle cx="60" cy="78" r="5" fill={OR} stroke="none" />
      <path d="M26 96h22M72 96h22" />
      <rect x="20" y="88" width="34" height="16" rx="8" fill={TEAL} fillOpacity=".25" stroke={TEAL} />
      <rect x="66" y="88" width="34" height="16" rx="8" strokeOpacity=".5" />
    </>
  ),
  // N°7 — smart accounts : un portefeuille protégé par un bouclier
  "smart-accounts": (
    <>
      <path d="M22 40h56a8 8 0 0 1 8 8v40a8 8 0 0 1-8 8H22a6 6 0 0 1-6-6V46a6 6 0 0 1 6-6z" />
      <path d="M16 46l44-20 8 14" />
      <rect x="62" y="58" width="24" height="18" rx="6" stroke={TEAL} />
      <circle cx="72" cy="67" r="3" fill={TEAL} stroke="none" />
      <path d="M96 44l14 5v12c0 10-6 17-14 20-8-3-14-10-14-20V49z" fill={OR} fillOpacity=".2" stroke={OR} />
      <path d="M90 61l4 4 8-8" stroke={OR} />
    </>
  ),
  // N°8 — preuve de travail utile : une pioche sur une puce de calcul
  pouw: (
    <>
      <rect x="40" y="52" width="44" height="44" rx="6" stroke={TEAL} />
      <rect x="52" y="64" width="20" height="20" rx="3" fill={TEAL} fillOpacity=".25" stroke={TEAL} />
      <path d="M50 52v-8M62 52v-8M74 52v-8M50 96v8M62 96v8M74 96v8M40 64h-8M40 76h-8M40 88h-8M84 64h8M84 76h8M84 88h8" stroke={TEAL} strokeOpacity=".6" />
      <path d="M24 18c14-6 32-4 44 6" stroke={OR} />
      <path d="M46 14 L30 46" stroke={OR} strokeWidth="6" />
    </>
  ),
  // Dossier DAT — une société cotée (colonnes) adossée à un bitcoin
  dat: (
    <>
      <path d="M14 46 L48 26 L82 46z" />
      <path d="M18 92h60M22 52v34M38 52v34M58 52v34M74 52v34" />
      <path d="M14 100h68" />
      <circle cx="90" cy="76" r="20" fill={OR} fillOpacity=".2" stroke={OR} />
      <path d="M85 66v20M85 66h7a5 5 0 0 1 0 10h-7M85 76h8a5 5 0 0 1 0 10h-8M88 62v4M88 86v4" stroke={OR} strokeWidth="3.5" />
    </>
  ),
  // Emplacement « à venir » — une lampe dont le faisceau éclaire
  avenir: (
    <>
      <rect x="18" y="52" width="34" height="18" rx="4" />
      <path d="M52 50l16-8v38l-16-8" />
      <path d="M76 44l26-14M76 61h30M76 78l26 14" stroke={OR} strokeOpacity=".7" />
    </>
  ),
};

export default function Vignette({ id, className }: { id?: string; className?: string }) {
  const dessin = (id && DESSINS[id]) ?? DESSINS.avenir;
  return (
    <svg
      viewBox="0 0 120 120"
      aria-hidden
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {dessin}
    </svg>
  );
}
