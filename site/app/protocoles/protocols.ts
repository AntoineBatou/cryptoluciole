// ===== Fiches Protocoles : source unique (version détaillée du SITE) =====
//
// ⚠️ Deux niveaux de contenu à ne pas confondre :
//   • La NEWSLETTER (app/emails + app/numeros) reste COURTE et succincte.
//   • La fiche du SITE (ici) va PLUS LOIN : plus technique, plus longue, pour
//     le lecteur qui clique « → Voir la fiche complète ». On y reverse le
//     contenu du WIKI de veille (~/.../Obsidian/.../_wiki + analyses
//     analyste-defi). On vulgarise, mais on n'élague pas comme dans l'email.
//
// Méthode pour ajouter un protocole :
//   1. Partir de la fiche wiki correspondante (déjà fact-checkée, sourcée).
//   2. La traduire en blocs (voir type ProtoBloc) : paragraphes, sous-titres,
//      encadrés de définition, tableaux, encadrés d'alerte/avis.
//   3. Garder l'esprit du site : clair, aéré, expliqué — mais on peut assumer
//      le détail technique (chiffres, mécanismes, risques nuancés).
//   4. Slug INVARIABLE (minuscules, sans accent, tirets). iaGenere => bandeau.

// --- Blocs de contenu réutilisables (souples : l'ordre et le mix changent
//     d'un protocole à l'autre) ---
export type ProtoBloc =
  | { type: "p"; texte: string } // paragraphe
  | { type: "st"; texte: string } // sous-titre interne à une section
  | { type: "liste"; items: string[] } // liste à puces
  | { type: "def"; terme: string; slug?: string; texte: string } // encadré définition
  | { type: "note"; ton: "info" | "alerte" | "avis"; titre?: string; texte: string }
  | { type: "tableau"; entetes: string[]; lignes: string[][] };

export type ProtoSection = { titre: string; blocs: ProtoBloc[] };

import type { ProtoLiveConfig } from "./live";

export type ProtocoleFiche = {
  slug: string;
  nom: string;
  type: string;
  chains?: string;
  resume: string;
  // Chiffres LIVE (TVL/APY) récupérés via DeFiLlama — JAMAIS recopiés du wiki.
  // Voir live.ts. À renseigner pour CHAQUE protocole.
  live?: ProtoLiveConfig;
  // Note de risque indépendante Pharos.watch (live). id = format ticker-issuer.
  pharos?: { id: string };
  // « Carte d'identité » affichée en haut (label → valeur) — faits DURABLES
  // uniquement (type, date de lancement, équipe…). Pas de TVL/APY ici : c'est live.
  enBref?: { label: string; valeur: string }[];
  // Badge de score maison (échelle de risque CryptoLuciole).
  score?: { valeur: number; sur: number; mention: string; sens: "faible" | "moyen" | "eleve" };
  sections: ProtoSection[];
  pointsCles?: string[]; // « à retenir » en fin de fiche
  verdict?: string;
  sources?: { label: string; href?: string }[];
  iaGenere: boolean;
  sourceNumero?: number;
};

export const PROTOCOLES: ProtocoleFiche[] = [
  {
    slug: "re",
    nom: "Re Protocol (reUSD & reUSDe)",
    type: "Réassurance tokenisée (RWA / assurance)",
    chains: "Ethereum (principal), Avalanche, Arbitrum, Base",
    resume:
      "Re (re.xyz) est un réassureur sur blockchain : ton argent finance de vraies compagnies d'assurance, et en échange tu touches une part des primes payées par leurs clients. Deux jetons selon le risque voulu — reUSD (prudent) et reUSDe (risqué). Sa promesse : un rendement qui ne dépend PAS du prix du Bitcoin, mais de la sinistralité des assurances du monde réel.",
    live: {
      defillamaSlug: "re",
      pools: [
        { label: "reUSD (senior)", id: "1c312830-ee96-40c9-b55f-b0f209ca6ebd" },
        { label: "reUSDe (junior)", id: "145810df-dc01-43e7-8033-e0aa5dceb767" },
      ],
    },
    pharos: { id: "reusd-re-protocol" },
    enBref: [
      { label: "Type", valeur: "Réassurance tokenisée (RWA), structure en tranches" },
      { label: "Lancement on-chain", valeur: "21 janvier 2025" },
      { label: "Combined ratio", valeur: "92 % au T3 2025 (donc profitable)" },
      { label: "Équipe", valeur: "Identifiée — Karn Saroya (ex-assurtech Cover)" },
    ],
    score: { valeur: 54, sur: 100, mention: "MODÉRÉ", sens: "moyen" },
    sections: [
      {
        titre: "Équipe & origine",
        blocs: [
          {
            type: "p",
            texte:
              "Équipe identifiée (un bon point en DeFi), menée par Karn Saroya, déjà fondateur de l'assurtech Cover et de Stylekick (racheté par Shopify). À ses côtés, Blanca Qin gère les sinistres, après un passage chez le réassureur institutionnel RenaissanceRe.",
          },
          {
            type: "p",
            texte:
              "Levée d'amorçage de 14 M$ en septembre 2022, avec des noms solides : Morgan Creek Digital, Exor, Tribe Capital, Framework Ventures — et surtout SiriusPoint, un vrai réassureur coté. Cet adossement à un acteur traditionnel de l'assurance est un signal d'alignement fort : ce n'est pas qu'un projet « crypto natif » déguisé.",
          },
        ],
      },
      {
        titre: "Comment ça marche, étape par étape",
        blocs: [
          {
            type: "def",
            terme: "Réassurance",
            texte:
              "C'est « l'assurance des assureurs ». Une compagnie d'assurance encaisse des primes mais craint les mauvaises années ; pour ne pas couler, elle transfère une partie de son risque (et des primes) à un réassureur. Avec Re, c'est TOI le réassureur.",
          },
          {
            type: "liste",
            items: [
              "1. Tu déposes un stablecoin (USDC, USDe ou sUSDe) et tu reçois reUSD ou reUSDe selon le risque que tu acceptes.",
              "2. Les fonds sont balayés chaque jour vers un coffre sécurisé (Fireblocks) puis engagés, via des contrats juridiques américains (les « §114 Trusts »), auprès de vrais réassureurs.",
              "3. Ces réassureurs couvrent des risques non-catastrophiques : assurance auto, responsabilité civile d'entreprises, immobilier court terme.",
              "4. Le capital pas encore déployé ne dort pas : il est placé en sUSDe (Ethena) pour générer un rendement d'attente.",
              "5. Les primes encaissées sont reversées en cascade : d'abord à reUSD (coupon stable), puis le surplus à reUSDe.",
              "6. Les sinistres, eux, sont absorbés dans l'autre sens : d'abord par les fonds propres de Re, puis par reUSDe, et seulement en dernier recours par reUSD.",
            ],
          },
          {
            type: "def",
            terme: "Combined ratio",
            texte:
              "L'indicateur-clé de toute assurance. En dessous de 100 %, l'activité gagne de l'argent (les primes encaissées dépassent les sinistres payés). Au T3 2025, Re affichait 92 % — donc une activité profitable. C'est LE chiffre à surveiller pour ce protocole.",
          },
        ],
      },
      {
        titre: "Les deux jetons : une question de risque",
        blocs: [
          {
            type: "def",
            terme: "Tranche senior / junior",
            slug: "tranching",
            texte:
              "On découpe un même investissement en niveaux de risque. La tranche junior encaisse les premières pertes (« first loss ») et est mieux payée ; la tranche senior n'est touchée qu'en dernier. Chez Re : reUSDe = junior, reUSD = senior.",
          },
          {
            type: "tableau",
            entetes: ["", "reUSD (senior)", "reUSDe (junior)"],
            lignes: [
              ["Rôle", "Capital protégé, coupon stable", "Capital « first loss », rendement amplifié"],
              ["Rendement", "Plancher SOFR + 2,5 %", "Variable (surplus de souscription)"],
              ["Perte en cas de sinistre", "En dernier", "En premier"],
              ["Prix", "Stable ~1 $", "Variable (peut baisser)"],
              ["Sortie", "Quasi instantanée (buffer)", "40 j min. + fenêtres trimestrielles"],
            ],
          },
          {
            type: "note",
            ton: "alerte",
            titre: "Le point de vigilance n°1",
            texte:
              "La tranche junior (reUSDe) ne pèse que ~10,5 % du capital total. C'est le matelas censé encaisser les pertes avant de toucher les prudents (reUSD). Pour une mauvaise année d'assurance « normale », ça suffit ; pour un scénario catastrophique prolongé, c'est mince. Une première ligne de défense existe (les fonds propres de Re), mais sa taille exacte n'est pas publiée — donc impossible de la chiffrer.",
          },
        ],
      },
      {
        titre: "D'où vient vraiment le rendement",
        blocs: [
          {
            type: "p",
            texte:
              "Deux sources, et c'est important de les distinguer car elles n'ont pas la même solidité.",
          },
          {
            type: "st",
            texte: "1. Les primes d'assurance (source principale)",
          },
          {
            type: "p",
            texte:
              "C'est le cœur du modèle, et sa vraie force : ce rendement vient d'une activité économique réelle, décorrélée des marchés crypto. Que le Bitcoin monte ou s'effondre, les gens continuent d'assurer leur voiture. Pas d'émission inflationniste de jetons, pas de Ponzi : tu es payé parce que tu portes un vrai risque d'assurance.",
          },
          {
            type: "st",
            texte: "2. Le rendement Ethena sur le capital en attente (secondaire)",
          },
          {
            type: "p",
            texte:
              "Le capital pas encore déployé est placé en sUSDe (Ethena). Le coupon de reUSD est garanti par une formule plancher : au minimum le taux SOFR + 2,5 %. Revers de la médaille : si Ethena déraille (dépeg, exploit), cette partie du rendement est touchée.",
          },
          {
            type: "note",
            ton: "info",
            texte:
              "À garder en tête : le rendement de reUSDe est très variable (il dépend de l'année de souscription) et la cible marketing de 12–25 % n'est pas garantie. Fie-toi au chiffre « en direct » affiché en haut de la fiche plutôt qu'à la fourchette annoncée.",
          },
        ],
      },
      {
        titre: "La liquidité : lis bien avant de déposer",
        blocs: [
          {
            type: "p",
            texte:
              "C'est sans doute le piège le plus sous-estimé. Déposer est facile ; ressortir, beaucoup moins, surtout pour reUSDe.",
          },
          {
            type: "liste",
            items: [
              "reUSD : rachat quasi instantané tant que le « buffer » on-chain (cible 50 % des dépôts) n'est pas vidé. Si trop de monde sort en même temps, on bascule en file d'attente trimestrielle.",
              "reUSDe : illiquidité structurelle assumée. 40 jours de détention minimum, puis sorties uniquement pendant une fenêtre de 72 h à chaque trimestre, avec jusqu'à 15 jours de traitement — et aucun plafond de blocage documenté en cas de stress.",
            ],
          },
          {
            type: "note",
            ton: "alerte",
            titre: "Scénario de panique (bank run)",
            texte:
              "Si les détenteurs de reUSDe anticipent une mauvaise année et veulent tous sortir, la fenêtre de 72 h sature : chacun n'est remboursé qu'au prorata, le reste est reporté. Beaucoup brade alors son reUSDe sur le marché secondaire (pool Curve) avec une décote — ce qui peut, par contagion, faire douter les détenteurs de reUSD et vider leur buffer à son tour. Règle simple : ne jamais mettre en reUSDe des fonds dont tu pourrais avoir besoin avant 6 mois.",
          },
        ],
      },
      {
        titre: "Les risques, classés",
        blocs: [
          {
            type: "st",
            texte: "Risque d'assurance (le vrai risque central)",
          },
          {
            type: "p",
            texte:
              "Ce n'est pas un risque « DeFi », c'est un risque de réassureur : une accumulation de sinistres (année à fort accidentologie, vague de litiges) peut dépasser les fonds propres + le matelas reUSDe de 10,5 %, et alors entamer même reUSD.",
          },
          {
            type: "st",
            texte: "Capital off-chain, invérifiable",
          },
          {
            type: "p",
            texte:
              "L'essentiel des actifs (~409 M$) vit dans des structures juridiques hors blockchain (trusts américains, Cover Re aux Caïmans). Tu ne peux pas les inspecter sur un explorateur : tu fais confiance à un attestateur centralisé (The Network Firm) qui publie des preuves quotidiennes via Chainlink. C'est la rançon du modèle RWA.",
          },
          {
            type: "st",
            texte: "Gouvernance centralisée",
          },
          {
            type: "p",
            texte:
              "Aucun jeton de gouvernance, aucun vote on-chain. Les paramètres (buffer, fenêtres, allocation) sont entre les mains de l'équipe via des portefeuilles multi-signatures, avec un délai de sécurité de seulement 48 h. Concrètement : tu dois faire confiance à l'équipe.",
          },
          {
            type: "st",
            texte: "Smart contracts",
          },
          {
            type: "p",
            texte:
              "Plutôt rassurant côté audits : trois passages (Hacken ×2, Certora), zéro faille critique ouverte. Mais nuances à connaître : couverture de tests de ~42 % seulement sur le cœur, code source privé (on ne peut pas comparer la version auditée à la version déployée), et pas de bug bounty Immunefi.",
          },
          {
            type: "note",
            ton: "alerte",
            titre: "Confusion de ticker à éviter",
            texte:
              "Le reUSD de Re (re.xyz) n'a RIEN à voir avec le « reUSD » de Resupply, un autre protocole victime d'un exploit d'environ 10 M$ en juin 2025. Toute alerte « reUSD hack » concerne ce second protocole, pas Re.",
          },
        ],
      },
    ],
    pointsCles: [
      "Le rendement de reUSD est décorrélé des marchés crypto — c'est sa vraie valeur pour diversifier des stablecoins.",
      "Le seul chiffre à suivre dans le temps : le combined ratio. Tant qu'il reste < 100 %, l'activité est saine.",
      "Le matelas junior (reUSDe = 10,5 % du total) est le point faible en cas de catastrophe.",
      "reUSDe n'est pas fait pour de l'argent dont tu peux avoir besoin sous 6 mois : l'illiquidité est voulue.",
      "Le programme de points récompense les mentions positives sur X → méfie-toi des avis « communautaires » trop enthousiastes.",
    ],
    verdict:
      "Score maison 54/100 — MODÉRÉ. Re est l'un des rares vrais rendements « du monde réel » en DeFi, et la structure en tranches est élégante. Trois points l'empêchent de monter plus haut : un matelas junior fin (10,5 %), un capital off-chain qu'on ne peut que croire sur parole, et une gouvernance entièrement centralisée. Pour qui comprend ces limites : reUSD est intéressant pour diversifier des stablecoins ; reUSDe est un pari sur la profitabilité de l'assurance, à doser et à n'engager que sur le long terme. Ce contenu n'est pas un conseil en investissement.",
    sources: [
      { label: "Documentation officielle re.xyz", href: "https://docs.re.xyz" },
      { label: "DeFiLlama — Re Protocol", href: "https://defillama.com/protocol/re" },
      { label: "Audits Hacken & Certora" },
      { label: "Analyse de veille CryptoLuciole (17 mai 2026)" },
    ],
    iaGenere: true,
    sourceNumero: 2,
  },
];

export function getProtocole(slug: string): ProtocoleFiche | undefined {
  return PROTOCOLES.find((p) => p.slug === slug);
}
