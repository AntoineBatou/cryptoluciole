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
  // valeur/sur absents = pas encore d'analyse /100 : on n'affiche que le niveau de risque.
  score?: { valeur?: number; sur?: number; mention: string; sens: "faible" | "moyen" | "eleve" };
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
  {
    slug: "ethena",
    nom: "Ethena (USDe & sUSDe)",
    type: "Dollar synthétique adossé à une stratégie de marché (delta-neutre)",
    chains: "Ethereum (principal), et une trentaine de réseaux via des ponts",
    resume:
      "Ethena fabrique un dollar numérique, l'USDe, qui n'est adossé ni à des dollars en banque ni à des bons du Trésor, mais à une position de marché : détenir un actif au comptant et parier à la baisse dessus pour le même montant. Les deux mouvements s'annulent, la valeur reste collée au dollar — et l'opération est rémunérée. C'est le protocole qui a industrialisé cette vieille stratégie de trading et l'a emballée dans un jeton que n'importe qui peut acheter.",
    live: {
      defillamaSlug: "ethena",
      pools: [{ label: "sUSDe (USDe staké)", id: "66985a81-9c51-46ca-9977-42b4fe7bc6df" }],
    },
    pharos: { id: "usde-ethena" },
    enBref: [
      { label: "Type", valeur: "Dollar synthétique (pas un stablecoin adossé à des dollars en banque)" },
      { label: "Lancement public", valeur: "Février 2024" },
      { label: "Équipe", valeur: "Identifiée — Guy Young (fondateur), société Ethena Labs" },
      { label: "Financement", valeur: "~156 M$ levés (Dragonfly, Maelstrom/Arthur Hayes, Brevan Howard, Franklin Templeton, Fidelity)" },
      { label: "Jeton de gouvernance", valeur: "ENA" },
    ],
    score: { valeur: 58, sur: 100, mention: "MODÉRÉ", sens: "moyen" },
    sections: [
      {
        titre: "Équipe & origine",
        blocs: [
          {
            type: "p",
            texte:
              "Ethena Labs est fondée en 2023 par Guy Young, ancien de la finance traditionnelle (fonds d'investissement). L'équipe est identifiée et publique — un point positif, beaucoup de protocoles de cette taille restent anonymes. La présence de gérants d'actifs traditionnels comme Franklin Templeton ou Fidelity au capital est notable, mais elle ne dit rien de la solidité du mécanisme lui-même.",
          },
          {
            type: "p",
            texte:
              "L'origine de l'idée est publique elle aussi : Arthur Hayes, fondateur de la plateforme BitMEX, décrivait dès 2023 dans un article de blog un « dollar synthétique » construit exactement de cette façon. Ethena l'a construit, et Hayes en est devenu investisseur via son family office Maelstrom.",
          },
          {
            type: "note",
            ton: "info",
            titre: "Un détail qui compte",
            texte:
              "Parmi les tout premiers investisseurs figurent Deribit, Bybit, OKX, Huobi et Gemini — c'est-à-dire les plateformes d'échange sur lesquelles Ethena ouvre ses positions. Les partenaires commerciaux du protocole sont aussi ses actionnaires. C'est un puissant facteur d'alignement, et en même temps une raison de plus de regarder de près la dépendance d'Ethena à ces plateformes (voir la section risques).",
          },
        ],
      },
      {
        titre: "Comment ça marche, étape par étape",
        blocs: [
          {
            type: "p",
            texte:
              "Toute la mécanique tient dans une idée : neutraliser le prix. Si tu possèdes 1 ether ET que tu paries à la baisse sur 1 ether en même temps, la valeur de l'ensemble ne bouge plus, quoi qu'il arrive au cours. Tu as fabriqué du dollar à partir de crypto.",
          },
          {
            type: "def",
            terme: "Delta-neutre",
            slug: "delta-neutre",
            texte:
              "Une position dont la valeur ne bouge pas quand le prix de l'actif sous-jacent bouge. « Delta » désigne la sensibilité au prix ; « neutre » veut dire qu'on l'a ramenée à zéro. On détient l'actif d'un côté, on parie à la baisse dessus de l'autre, pour le même montant.",
          },
          {
            type: "liste",
            items: [
              "1. Tu déposes de la crypto (ether, bitcoin, jetons de staking) ou des stablecoins, et tu reçois des USDe en échange, à hauteur d'un dollar par jeton.",
              "2. Le collatéral est confié à des dépositaires spécialisés (Copper, Ceffu, Cobo) qui le conservent hors des plateformes d'échange, mais permettent de s'en servir comme garantie sur ces plateformes.",
              "3. Ethena ouvre en face un short (un pari à la baisse) sur contrats perpétuels — les « perps » — du même montant. Les deux positions s'annulent : l'ensemble vaut la même chose en dollars, que le marché monte ou descende.",
              "4. Cette position rapporte, principalement grâce au funding — la commission que les parieurs à la hausse versent aux parieurs à la baisse.",
              "5. Ce rendement ne va PAS automatiquement aux détenteurs d'USDe. Il faut « staker » ses USDe pour recevoir du sUSDe, qui capte le rendement.",
            ],
          },
          {
            type: "def",
            terme: "Funding (taux de financement)",
            slug: "funding-rate",
            texte:
              "Sur un contrat perpétuel, un paiement récurrent (toutes les 1 à 8 heures) entre acheteurs et vendeurs, qui sert à recoller le prix du contrat sur le prix réel. Quand il y a plus de parieurs à la hausse que de parieurs à la baisse — la situation habituelle en crypto — ce sont les haussiers qui paient. Ethena, structurellement du côté baissier, est du côté qui encaisse.",
          },
          {
            type: "st",
            texte: "Pourquoi le prix tient à 1 dollar",
          },
          {
            type: "p",
            texte:
              "Prenons un ether à 4 000 $. Ethena détient pour 1 000 $ d'ether (soit 0,25 ether) et vend en face pour 1 000 $ d'ether.",
          },
          {
            type: "liste",
            items: [
              "L'ether monte de 20 %, à 4 800 $ : l'ether détenu vaut 1 200 $ (1 000 × 1,2), le short perd 200 $ → total 1 000 $.",
              "L'ether chute de 30 %, à 2 800 $ : l'ether détenu ne vaut plus que 700 $ (1 000 × 0,7), le short gagne 300 $ → total 1 000 $.",
            ],
          },
          {
            type: "p",
            texte:
              "Quoi qu'il arrive au cours, la garantie derrière chaque USDe reste stable en dollars. C'est cela qui tient le prix, pas une promesse de rachat par une banque.",
          },
          {
            type: "note",
            ton: "alerte",
            titre: "USDe n'est pas un stablecoin comme l'USDC",
            texte:
              "Derrière un USDC, il y a des dollars et des bons du Trésor américain déposés chez un dépositaire régulé. Derrière un USDe, il y a une position de trading ouverte, qui doit être maintenue en permanence et qui dépend de plateformes d'échange. Les deux valent un dollar à l'écran, mais ce ne sont pas du tout les mêmes objets. C'est la chose la plus importante à comprendre sur ce protocole.",
          },
        ],
      },
      {
        titre: "USDe ou sUSDe : ce n'est pas la même chose",
        blocs: [
          {
            type: "tableau",
            entetes: ["", "USDe", "sUSDe"],
            lignes: [
              ["À quoi ça sert", "Détenir, payer, servir de garantie ailleurs", "Toucher le rendement de la stratégie"],
              ["Rendement", "Aucun", "Variable, distribué en continu"],
              ["Prix", "~1 $", "Monte lentement face à l'USDe (la valeur du jeton grossit)"],
              ["Sortie", "Immédiate", "Délai de retrait de 7 jours"],
            ],
          },
          {
            type: "p",
            texte:
              "Le prix du sUSDe n'est pas fixe : un sUSDe vaut de plus en plus d'USDe au fil du temps, à mesure que le rendement s'accumule dedans. C'est le même principe que le stETH de Lido. Ne t'inquiète pas si tu vois un sUSDe coté au-dessus de 1 $ : c'est le rendement déjà encaissé.",
          },
          {
            type: "note",
            ton: "info",
            titre: "Le délai de 7 jours n'est pas un détail",
            texte:
              "Passer de sUSDe à USDe prend une semaine. En cas de panique de marché, c'est précisément le moment où l'on voudrait sortir vite — et où l'on ne peut pas. Les détenteurs pressés doivent alors vendre leur sUSDe sur le marché, souvent avec une décote. Ce délai existe pour éviter que le protocole soit vidé en quelques heures, mais il se paie en flexibilité.",
          },
        ],
      },
      {
        titre: "D'où vient vraiment le rendement (et ce qui a changé en 2026)",
        blocs: [
          {
            type: "p",
            texte:
              "À l'origine, une source unique : le funding des contrats perpétuels sur l'ether et le bitcoin. En marché haussier, les parieurs à la hausse sont majoritaires et paient cher pour le rester — le rendement peut alors atteindre 20, 30 %, parfois davantage. En marché calme ou baissier, ce flux s'assèche, et il peut même s'inverser : c'est alors Ethena qui paie.",
          },
          {
            type: "def",
            terme: "Basis trade",
            texte:
              "La stratégie fondatrice d'Ethena : acheter un actif au comptant et vendre le perp correspondant en face, pour encaisser le funding sans s'exposer aux variations de l'actif.",
          },
          {
            type: "p",
            texte:
              "Le scénario du funding qui s'assèche n'est pas théorique : il s'est produit à partir de fin 2025. Les taux de funding se sont comprimés durablement, et la part du basis trade crypto dans la garantie de l'USDe est tombée jusqu'à environ 1 % au cours de l'été 2026 (elle est remontée autour de 13 % fin août, dans le sillage de l'amélioration du sentiment de marché). Autrement dit : la stratégie fondatrice du protocole a cessé, pendant plusieurs mois, d'être l'essentiel de son moteur.",
          },
          {
            type: "st",
            texte: "Ce qui a pris le relais",
          },
          {
            type: "liste",
            items: [
              "Des stablecoins liquides classiques, placés pour un rendement modeste mais sûr.",
              "Du prêt en DeFi (déposer des stablecoins sur des marchés de prêt et encaisser les intérêts).",
              "Des positions du même type sur d'autres actifs que la crypto : l'or tokenisé (PAXG, XAUT) a été étudié pour son funding structurellement plus élevé et sa quasi-absence de corrélation avec le bitcoin.",
              "Et depuis le 28 août 2026, un nouveau terrain : les contrats perpétuels sur actions. L'open interest (le montant total des positions ouvertes) y a été multiplié par dix depuis mars 2026, à ~6,2 Md$ — un gisement de funding hors du cycle crypto.",
            ],
          },
          {
            type: "note",
            ton: "avis",
            titre: "Notre lecture",
            texte:
              "Cette recomposition se lit de deux manières, et les deux sont vraies. Côté positif : Ethena a prouvé qu'elle savait se réallouer plutôt que de servir un rendement à perte, et la diversification vers l'or puis les actions élargit réellement son gisement au-delà des cycles crypto. Côté vigilance : l'acheteur d'USDe pense souvent acheter « la stratégie delta-neutre sur l'ether », alors qu'il achète en réalité un portefeuille multi-stratégies dont la composition change tous les trimestres. Le rendement affiché n'a pas la même signification selon ce qu'il y a dessous — et un protocole qui doit constamment chercher de nouveaux moteurs pose, à terme, la question de la durabilité du premier.",
          },
        ],
      },
      {
        titre: "Le jeton ENA et le débat du moment",
        blocs: [
          {
            type: "p",
            texte:
              "ENA est le jeton de gouvernance. Longtemps, son utilité réelle a été le principal reproche fait au protocole : Ethena générait des revenus considérables, mais ces revenus allaient aux détenteurs de sUSDe, pas aux détenteurs d'ENA, qui ne possédaient guère qu'un droit de vote.",
          },
          {
            type: "p",
            texte:
              "Le 27 août 2026, une proposition de gouvernance a été mise au vote pour changer cela : activer le fee switch (le « robinet à frais » du protocole), un prélèvement pouvant aller de 5 % à plus de 15 % du revenu brut, reversé pour l'essentiel au rachat d'ENA sur le marché. Le tout déclenché par paliers de croissance de l'USDe, à partir de 7,5 Md$ en circulation.",
          },
          {
            type: "note",
            ton: "alerte",
            titre: "Le problème de ce calendrier",
            texte:
              "Le premier palier est fixé à 7,5 Md$ d'USDe en circulation, alors que le protocole tourne autour de 4 Md$ fin août 2026 (voir le chiffre à jour en haut de fiche) : il faudrait que l'USDe en circulation double, ou presque (7,5 ÷ 4 ≈ 1,9), pour que la mesure s'applique. Elle est annoncée aujourd'hui, mais ne mordrait pas avant une forte reprise. Et surtout : chaque dollar redirigé vers le rachat d'ENA est un dollar qui ne va pas au rendement du sUSDe, or c'est ce rendement qui attire les dépôts nécessaires pour atteindre le palier. Les deux leviers se contrarient.",
          },
        ],
      },
      {
        titre: "Les risques",
        blocs: [
          {
            type: "p",
            texte:
              "Ethena n'est ni un montage frauduleux ni un stablecoin algorithmique bancal du type Terra/UST — la garantie existe vraiment et elle est vérifiable. Mais les risques sont réels et de nature très différente de ceux d'un USDC.",
          },
          {
            type: "st",
            texte: "1. Le funding peut devenir négatif",
          },
          {
            type: "p",
            texte:
              "C'est le risque de base. Si les parieurs à la baisse deviennent majoritaires, la position d'Ethena coûte de l'argent au lieu d'en rapporter. C'est ce qui s'est produit pendant une grande partie de 2026.",
          },
          {
            type: "note",
            ton: "info",
            titre: "L'amortisseur, et sa limite",
            texte:
              "Un fonds de réserve est dimensionné à environ 1 % de la taille du protocole. Sur 4 Md$, cela fait ~40 M$ : de quoi absorber un passage à vide de quelques semaines, pas une année entière de funding négatif.",
          },
          {
            type: "st",
            texte: "2. La dépendance aux plateformes d'échange centralisées",
          },
          {
            type: "p",
            texte:
              "Les positions sont ouvertes sur Binance, Bybit, OKX et Deribit. Ce n'est pas un risque de code, c'est un risque de contrepartie — le genre que les audits de smart contracts ne détectent pas.",
          },
          {
            type: "liste",
            items: [
              "Ce qui protège : le collatéral n'est pas sur les plateformes mais chez des dépositaires tiers. Une vraie précaution, apprise de l'effondrement de FTX.",
              "Ce qui reste exposé : la concentration. Une plateforme majeure qui ferme du jour au lendemain immobiliserait une part importante du dispositif, collatéral en sécurité ou non.",
            ],
          },
          {
            type: "st",
            texte: "3. Le risque de dépositaire",
          },
          {
            type: "p",
            texte:
              "Copper, Ceffu et Cobo détiennent les actifs hors de la blockchain. Tu ne peux pas vérifier toi-même, à la seconde, que tout est là : tu fais confiance à des attestations. C'est le compromis assumé du modèle — impossible d'ouvrir des positions sur des plateformes centralisées en restant totalement on-chain.",
          },
          {
            type: "st",
            texte: "4. Le décrochage en cas de stress extrême",
          },
          {
            type: "p",
            texte:
              "En cas de mouvement violent, l'USDe peut s'écarter de son dollar sur le marché secondaire, le temps que les arbitragistes rétablissent l'équilibre. Lors de la cascade de liquidations du 10 octobre 2025 — la plus grosse de l'histoire de la crypto — l'USDe est resté surcollatéralisé, mais l'épisode a fait fuir les capitaux : la valeur déposée dans le protocole est passée d'environ 14,8 Md$ en octobre 2025 à moins de 4 Md$ au printemps 2026. Le protocole n'a pas cassé, mais les déposants sont partis.",
          },
          {
            type: "st",
            texte: "5. Le risque réglementaire",
          },
          {
            type: "p",
            texte:
              "Un dollar synthétique adossé à des dérivés ne rentre proprement dans aucune case existante. Le règlement européen MiCA ne le traite pas comme un stablecoin classique, et le statut américain reste flou. C'est un risque de fond, difficile à dater, mais qui ne disparaîtra pas tout seul.",
          },
          {
            type: "note",
            ton: "avis",
            titre: "Pourquoi « modéré » et pas « élevé »",
            texte:
              "Trois raisons : la garantie est réelle et vérifiable, le protocole a traversé plusieurs crises violentes sans casser son ancrage, et il dispose d'un fonds de réserve. Ce qui l'empêche d'être classé « faible » : sa dépendance à des plateformes centralisées et à un funding qui peut se tarir — deux choses hors de son contrôle. Et rappelons-le : « modéré » ne veut pas dire « sans risque ».",
          },
        ],
      },
      {
        titre: "Pourquoi ça compte",
        blocs: [
          {
            type: "p",
            texte:
              "L'intérêt d'Ethena est d'avoir rendu accessible en un clic une stratégie jusque-là réservée aux salles de marché. Son danger tient à la même facilité : la complexité n'a pas disparu, elle a été cachée sous une interface. Un jeton qui affiche 1 $ à l'écran ressemble à tous les autres jetons qui affichent 1 $ — à toi de savoir lequel tu tiens.",
          },
        ],
      },
    ],
    pointsCles: [
      "USDe n'est pas adossé à des dollars en banque mais à une position de trading maintenue en permanence — c'est le point à comprendre avant tout le reste.",
      "Détenir de l'USDe ne rapporte rien : il faut le staker en sUSDe, avec un délai de sortie de 7 jours.",
      "Le rendement dépend du funding, qui suit l'humeur du marché : élevé en marché haussier, quasi nul — voire négatif — en marché calme.",
      "En 2026, la stratégie fondatrice sur le crypto est tombée à ~1 % de la garantie avant de remonter vers 13 % : ce que tu achètes aujourd'hui est un portefeuille multi-stratégies, pas le pur basis trade des débuts.",
      "Les vrais risques ne sont pas dans le code : ce sont les plateformes d'échange, les dépositaires et le régulateur.",
    ],
    verdict:
      "Score maison 58/100 — MODÉRÉ. Ethena est un objet financier sérieux, transparent sur son mécanisme, mené par une équipe identifiée, et il a encaissé sans casser la pire cascade de liquidations de l'histoire de la crypto. Ce n'est pas un stablecoin de trésorerie : c'est l'exposition à une stratégie de marché, dont le rendement suit l'appétit pour le risque du marché et dont la composition change au fil des trimestres. À traiter comme une ligne d'investissement à surveiller, pas comme l'endroit où dormir son argent de précaution — et à ne pas confondre, dans un portefeuille, avec de l'USDC. Ce contenu n'est pas un conseil en investissement.",
    sources: [
      { label: "Documentation officielle Ethena", href: "https://docs.ethena.fi" },
      { label: "DeFiLlama — Ethena", href: "https://defillama.com/protocol/ethena" },
      { label: "Forum de gouvernance Ethena — proposition de fee switch (27 août 2026)", href: "https://forum.ethena.fi" },
      { label: "CryptoSlate — Ethena étend son basis trade aux perps sur actions (28 août 2026)", href: "https://cryptoslate.com/ethena-is-targeting-the-120-trillion-wall-street-stocks-market-to-hunt-yields-5x-higher-than-bitcoin/" },
      { label: "OAK Research — analyse du fee switch Ethena", href: "https://oakresearch.io/en/analyses/investigations/ethena-fee-switch-our-models-proposal-and-doubts" },
      { label: "Analyse de veille CryptoLuciole (wiki Ethena, mai 2026)" },
    ],
    iaGenere: true,
    sourceNumero: 3,
  },
  {
    slug: "hyperliquid",
    nom: "Hyperliquid (HYPE, HLP, HIP-3)",
    type: "Blockchain dédiée au trading de contrats perpétuels",
    chains: "Hyperliquid L1 (chaîne propre : HyperCore + HyperEVM)",
    resume:
      "Hyperliquid est une plateforme d'échange de produits dérivés qui a fait un choix inhabituel : plutôt que de se construire sur une blockchain existante, elle a construit sa propre blockchain, taillée pour une seule chose — faire tourner un carnet d'ordres aussi vite qu'une plateforme centralisée, mais entièrement en public. C'est aujourd'hui, de loin, le leader du trading de perpétuels décentralisé, et l'un des rares protocoles DeFi à générer de vrais revenus.",
    live: {
      defillamaSlug: "hyperliquid",
      pools: [{ label: "kHYPE (HYPE staké via Kinetiq)", id: "9f25a954-db87-4bb2-a8b2-4be0b843a44c" }],
    },
    enBref: [
      { label: "Type", valeur: "Blockchain L1 + plateforme de dérivés à carnet d'ordres" },
      { label: "Lancement", valeur: "Plateforme en 2023, blockchain et jeton HYPE en novembre 2024" },
      { label: "Équipe", valeur: "Jeff Yan et Iliensinc, issus du trading haute fréquence (Hudson River Trading)" },
      { label: "Levée de fonds", valeur: "Aucune — pas d'investisseur extérieur, pas d'allocation de jetons aux fonds" },
      { label: "Validateurs", valeur: "~27 (point de centralisation majeur)" },
    ],
    score: { valeur: 61, sur: 100, mention: "MODÉRÉ", sens: "moyen" },
    sections: [
      {
        titre: "Équipe & origine",
        blocs: [
          {
            type: "p",
            texte:
              "Hyperliquid est né en 2023, porté par Jeff Yan et un associé connu sous le pseudonyme Iliensinc, tous deux venus du trading haute fréquence — Jeff Yan est passé par Hudson River Trading, l'une des plus grosses firmes de trading algorithmique au monde. La plateforme est conçue par des gens dont le métier était de trader sur des carnets d'ordres, pas d'écrire des smart contracts.",
          },
          {
            type: "p",
            texte:
              "L'équipe n'a jamais levé un centime auprès d'investisseurs extérieurs. Pas de fonds de capital-risque au capital, donc aucune allocation de jetons à débloquer au détriment des utilisateurs — une anomalie dans un secteur où les fonds détiennent couramment 20 à 40 % de l'offre initiale.",
          },
          {
            type: "note",
            ton: "info",
            titre: "L'airdrop de novembre 2024",
            texte:
              "À la place d'une levée de fonds, Hyperliquid a distribué 31 % de l'offre totale de HYPE à ses premiers utilisateurs, sans période de blocage. C'est l'un des plus gros airdrops de l'histoire de la crypto — plus de 620 M$ au cours de l'époque. Le pari : aligner les utilisateurs plutôt que des investisseurs. Il a plutôt bien fonctionné.",
          },
        ],
      },
      {
        titre: "Comment ça marche",
        blocs: [
          {
            type: "p",
            texte:
              "Les plateformes décentralisées classiques, comme Uniswap, utilisent des pools de liquidité : une formule mathématique fixe le prix en fonction des quantités déposées. C'est ingénieux, mais mal adapté aux dérivés, où les traders professionnels veulent poser et retirer des ordres à un prix précis, des centaines de fois par minute.",
          },
          {
            type: "def",
            terme: "Carnet d'ordres",
            slug: "carnet-ordres",
            texte:
              "La liste de tous les ordres d'achat et de vente en attente, classés par prix. C'est le fonctionnement de toutes les bourses traditionnelles et des grandes plateformes crypto centralisées. Mettre un carnet d'ordres entièrement sur une blockchain est difficile : chaque ajout ou annulation d'ordre est une transaction, et la plupart des blockchains sont trop lentes ou trop chères pour ça.",
          },
          {
            type: "p",
            texte:
              "La réponse d'Hyperliquid : construire une blockchain dont c'est le seul métier. Le résultat s'organise en deux couches.",
          },
          {
            type: "liste",
            items: [
              "HyperCore — le moteur de trading. Le carnet d'ordres y vit entièrement sur la chaîne, avec une validation en moins d'une seconde et des ordres qui ne coûtent pas de frais de transaction. C'est ce qui rend l'expérience comparable à celle d'une plateforme centralisée.",
              "HyperEVM — la couche pour les applications. Compatible avec Ethereum, elle permet à d'autres développeurs de construire par-dessus (prêt, staking, vaults automatisés) en lisant en direct l'état du carnet d'ordres.",
            ],
          },
          {
            type: "note",
            ton: "alerte",
            titre: "Une composabilité encore inachevée",
            texte:
              "HyperEVM peut LIRE HyperCore, mais ne peut pas encore y ÉCRIRE librement. Concrètement, une application tierce peut consulter les prix et les positions du carnet, mais ne peut pas encore passer d'ordres pour toi de façon totalement automatisée. La brique manquante est en développement — c'est aujourd'hui la principale limite de l'écosystème.",
          },
          {
            type: "st",
            texte: "Le funding sur Hyperliquid",
          },
          {
            type: "p",
            texte:
              "Sur Hyperliquid, le funding est versé toutes les heures, et le protocole n'en prélève rien : il passe intégralement d'un camp à l'autre.",
          },
          {
            type: "def",
            terme: "Funding rate",
            slug: "funding-rate",
            texte:
              "La commission périodique que verse le camp majoritaire à l'autre. En crypto, les parieurs à la hausse sont habituellement les plus nombreux : ce sont donc eux qui paient. C'est ce flux qui rend possible la stratégie delta-neutre — détenir l'actif au comptant, parier à la baisse dessus pour le même montant, et encaisser le funding sans subir le mouvement du prix.",
          },
          {
            type: "note",
            ton: "info",
            titre: "Le lien avec Ethena",
            texte:
              "C'est le mécanisme détaillé dans le numéro #4. Hyperliquid n'a rien inventé de cette stratégie, elle en fournit le terrain de jeu ; Ethena l'a industrialisée et emballée dans un jeton, l'USDe (voir notre fiche Ethena).",
          },
        ],
      },
      {
        titre: "Le HLP — devenir market maker",
        blocs: [
          {
            type: "p",
            texte:
              "Le HLP est le vault communautaire d'Hyperliquid (le « coffre » du protocole) : tu y déposes des stablecoins, et le vault s'en sert pour faire le marché — poser en continu des ordres d'achat et de vente — et pour reprendre les positions des traders liquidés.",
          },
          {
            type: "def",
            terme: "Market making",
            slug: "market-making",
            texte:
              "Afficher en permanence un prix d'achat et un prix de vente, et gagner l'écart entre les deux — le spread. L'analogie : le bureau de change d'aéroport, qui achète l'euro un peu moins cher qu'il ne le vend, des milliers de fois par jour. Il ne parie pas sur le sens du marché ; il vit du passage.",
          },
          {
            type: "p",
            texte: "Trois sources de gain pour le HLP :",
          },
          {
            type: "liste",
            items: [
              "Le spread — l'écart entre son prix d'achat et son prix de vente, encaissé à chaque passage.",
              "La structure des frais — elle récompense celui qui pose un ordre dans le carnet plutôt que celui qui le consomme.",
              "La reprise des positions liquidées, souvent à prix avantageux : les traders à fort levier perdent en moyenne, et le HLP est en face d'eux.",
            ],
          },
          {
            type: "note",
            ton: "alerte",
            titre: "Déposer dans le HLP n'est pas un placement à rendement",
            texte:
              "C'est confier son argent à un fonds de trading. Son résultat peut être négatif : si les traders sont collectivement bien positionnés, le HLP, qui est en face, perd. Sa rentabilité a d'ailleurs nettement baissé — non pas par défaillance, mais parce que les firmes professionnelles sont arrivées sur la plateforme et captent désormais l'essentiel du flux profitable. Le HLP glisse vers un rôle de filet de sécurité : absorber les liquidations, faire le marché là où c'est peu rentable. C'est bon pour la plateforme, moins pour le rendement du déposant.",
          },
        ],
      },
      {
        titre: "Le jeton HYPE : le rachat automatique",
        blocs: [
          {
            type: "p",
            texte:
              "HYPE est le jeton de la chaîne, et son modèle est l'un des plus simples du secteur : 99 % des revenus du protocole partent dans un fonds qui rachète du HYPE sur le marché et le détruit. Le rachat est quotidien et automatisé — aucune décision humaine, aucun vote nécessaire. Mi-2026, ce fonds avait accumulé plus de 45 millions de HYPE.",
          },
          {
            type: "liste",
            items: [
              "Rachat et destruction — 99 % des revenus, en continu.",
              "Réduction de frais — les firmes de trading doivent staker du HYPE pour obtenir des tarifs préférentiels.",
              "Carburant de la chaîne — toute opération sur HyperEVM consomme du HYPE.",
              "Sécurité — les validateurs stakent du HYPE pour valider les blocs.",
              "Gouvernance — les votes sont pondérés par les jetons stakés.",
            ],
          },
          {
            type: "note",
            ton: "alerte",
            titre: "La pression vendeuse à connaître",
            texte:
              "Les fondateurs et contributeurs débloquent environ 9,9 millions de HYPE par mois jusqu'en 2028. Le rachat automatique ne compense cette pression que si les revenus progressent assez vite — ce qui n'est plus le cas depuis le T3 2025 (voir ci-dessous). Signal d'alignement à mettre au crédit de l'équipe : après avoir libéré 1,2 million de jetons en janvier 2026, elle a réduit son propre déblocage du mois suivant d'environ 90 %.",
          },
        ],
      },
      {
        titre: "HIP-3 : le succès qui coûte cher",
        blocs: [
          {
            type: "p",
            texte:
              "Depuis octobre 2025, n'importe qui peut déployer son propre marché de perpétuels sur le carnet d'ordres d'Hyperliquid, et garder jusqu'à la moitié des frais qu'il génère. Il faut pour cela staker 500 000 HYPE — une somme qui se chiffre en dizaines de millions de dollars au cours actuel — autant dire que les déployeurs sont des sociétés, pas des particuliers. C'est ce qu'on appelle HIP-3.",
          },
          {
            type: "p",
            texte:
              "Ces marchés déployés par des tiers pesaient environ 2 % du volume de la plateforme début 2026 ; ils en représentent aujourd'hui à peu près la moitié. Et surtout, ils ont fait sortir Hyperliquid du périmètre crypto : on y trade désormais le pétrole, l'or, l'argent, le S&P 500, le Nasdaq et des actions individuelles. Un déployeur a même obtenu une licence officielle de S&P Dow Jones pour son marché sur le S&P 500.",
          },
          {
            type: "p",
            texte:
              "L'illustration la plus parlante date de février 2026. Un choc géopolitique éclate un week-end, bourses de matières premières fermées. Les traders qui voulaient se positionner sur le pétrole n'avaient nulle part où aller… sauf sur les perpétuels pétrole d'Hyperliquid, ouverts en permanence. Plus d'1,2 Md$ de volume en une journée, et une couverture dans le Wall Street Journal.",
          },
          {
            type: "p",
            texte:
              "Deux effets se cumulent. Le déployeur garde la moitié des frais ; et il peut activer un « growth mode » qui abaisse les frais de plus de 90 % pour attirer les traders sur son marché. Sur 1 Md$ de volume, ce que le protocole encaisse devient :",
          },
          {
            type: "liste",
            items: [
              "Marché natif — 450 000 $ (0,045 % de frais, gardés en entier).",
              "Marché HIP-3 classique — 225 000 $ (mêmes frais, mais la moitié va au déployeur).",
              "Marché HIP-3 en growth mode — 22 500 $ (0,0045 % de frais, dont la moitié) : vingt fois moins qu'un marché natif.",
            ],
          },
          {
            type: "p",
            texte:
              "C'est là que le volume a migré. Le résultat se lit dans les comptes du protocole :",
          },
          {
            type: "tableau",
            entetes: ["", "T3 2025", "T2 2026", "Écart"],
            lignes: [
              ["Revenu brut du protocole", "~357 M$", "~202 M$", "−155 M$ (−43 %)"],
              ["Dont rachat de HYPE", "~290 M$", "~149 M$", "−141 M$ (−51 %)"],
            ],
          },
          {
            type: "p",
            texte:
              "Le tout pendant que l'activité battait des records : ~13 Md$ de positions ouvertes le 23 août 2026, environ 63 % de tout le marché des perpétuels décentralisés.",
          },
          {
            type: "p",
            texte:
              "La plateforme en a conscience : Jeff Yan a proposé de tripler les frais HIP-3. La mesure divise — certains analystes y voient un signal haussier pour le jeton, d'autres estiment que les frais bas sont précisément l'arme d'Hyperliquid face à Binance et aux courtiers traditionnels. À ce stade, elle n'a aucun calendrier.",
          },
          {
            type: "note",
            ton: "avis",
            titre: "Notre lecture",
            texte:
              "Hyperliquid le produit et HYPE l'investissement ne racontent pas la même histoire en ce moment, et méritent d'être jugés séparément. Céder la moitié des frais n'est pas forcément une erreur : la plateforme n'aurait jamais listé elle-même des perpétuels sur le pétrole ou le S&P 500, et ces revenus-là ne dépendent pas du cycle crypto. Le problème est le décalage — la perte de marge est immédiate, le bénéfice est futur et hypothétique, et les déblocages de jetons, eux, continuent chaque mois.",
          },
        ],
      },
      {
        titre: "Les risques",
        blocs: [
          {
            type: "st",
            texte: "1. La centralisation (le risque principal)",
          },
          {
            type: "p",
            texte:
              "Environ 27 validateurs sécurisent la chaîne, contre des centaines de milliers sur Ethereum. Et ce petit groupe ne fait pas que valider les blocs : ce sont eux qui publient les prix utilisés pour te liquider.",
          },
          {
            type: "p",
            texte:
              "Là où la plupart des plateformes s'appuient sur un oracle externe comme Chainlink, Hyperliquid fait soumettre le prix par ses propres validateurs et en prend la médiane. Zéro latence, aucune dépendance à un tiers — mais juge et partie.",
          },
          {
            type: "note",
            ton: "alerte",
            titre: "L'incident JELLY (mars 2025) — le cas d'école",
            texte:
              "Un attaquant manipule le cours d'un memecoin, JELLY. Le vault HLP se retrouve avec une position toxique et environ 13,5 M$ de pertes latentes. En quelques minutes, les validateurs se réunissent, votent le retrait du marché et fixent eux-mêmes un prix de règlement antérieur à la manipulation. Les utilisateurs sont indemnisés et le HLP termine la journée en bénéfice. Deux lectures coexistent, et elles sont toutes les deux justes : la réaction a été rapide et entièrement publique, mais elle prouve aussi qu'un petit groupe peut changer les règles d'un marché en temps réel. Plus transparent qu'une plateforme centralisée, loin de la neutralité d'Ethereum.",
          },
          {
            type: "st",
            texte: "2. Le bad debt",
          },
          {
            type: "p",
            texte:
              "N'importe qui peut déposer une garantie et prendre du levier, sans vérification d'identité ni recours juridique possible. Sur les marchés peu liquides — ceux déployés via HIP-3, notamment — il arrive que le prix saute d'un coup au-delà du seuil de liquidation d'un gros trader, sans qu'aucun ordre ne s'exécute entre les deux : la position est fermée trop tard, et la perte que personne ne couvre reste à la charge du protocole. C'est ce qu'on appelle du bad debt. À mettre au crédit de la plateforme : elle a traversé la cascade de liquidations du 10 octobre 2025, la plus grosse de l'histoire de la crypto, en restant solvable.",
          },
          {
            type: "st",
            texte: "3. La concurrence",
          },
          {
            type: "p",
            texte:
              "Côté décentralisé, Aster et Lighter attaquent avec des airdrops agressifs — mais leurs parts de marché s'effondrent une fois l'airdrop passé. La vraie menace est ailleurs : Binance reste de loin le premier acteur mondial des dérivés, et des plateformes régulées américaines commencent à proposer de vrais perpétuels, alors même que l'accès direct à Hyperliquid reste fermé aux résidents américains.",
          },
          {
            type: "st",
            texte: "4. Le cadre réglementaire",
          },
          {
            type: "p",
            texte:
              "Le statut juridique des contrats perpétuels n'est pas stabilisé, y compris aux États-Unis, où le CME a engagé une action contre le régulateur des dérivés à ce sujet. Une action à l'encontre du protocole, de ses développeurs ou de ses validateurs pèserait lourdement sur HYPE.",
          },
          {
            type: "note",
            ton: "avis",
            titre: "Pourquoi « modéré »",
            texte:
              "La plateforme fonctionne, elle a encaissé sans casser des chocs qui en auraient tué d'autres, l'équipe est compétente et son jeton est adossé à de vrais revenus — c'est rare. Ce qui l'empêche de descendre plus bas : 27 validateurs qui sont à la fois juges et oracles, un cadre réglementaire non stabilisé, et une trajectoire de revenus baissière depuis le T3 2025 malgré des volumes record. Le risque de trader dessus n'est pas le même que celui de détenir HYPE — ce sont deux décisions distinctes.",
          },
        ],
      },
      {
        titre: "Pourquoi ça compte",
        blocs: [
          {
            type: "p",
            texte:
              "Hyperliquid a tranché une question qui bloquait la DeFi depuis des années : peut-on offrir l'expérience d'une plateforme centralisée — rapide, liquide, avec un vrai carnet d'ordres — sans demander aux utilisateurs de confier leurs fonds à une entreprise ? La réponse est oui, au prix d'une chaîne beaucoup plus centralisée qu'Ethereum.",
          },
          {
            type: "p",
            texte:
              "Avec les marchés déployés par des tiers, elle devient en plus une infrastructure sur laquelle on peut lister n'importe quel actif — pétrole, actions, indices — sans autorisation préalable. C'est ce qui la rend intéressante à suivre même si tu ne trades pas.",
          },
        ],
      },
    ],
    pointsCles: [
      "Hyperliquid est une blockchain construite pour une seule chose : faire tourner un carnet d'ordres aussi vite qu'une plateforme centralisée.",
      "Aucun investisseur extérieur, aucune allocation de jetons aux fonds : 31 % de l'offre totale a été distribuée aux utilisateurs.",
      "Déposer dans le HLP, c'est entrer dans un fonds de trading — le résultat peut être négatif, ce n'est pas un rendement.",
      "HIP-3 a fait exploser les volumes ET baisser les revenus du protocole (−43 % depuis le pic) : les déployeurs gardent la moitié des frais.",
      "Le vrai point faible n'est pas technique mais politique : 27 validateurs qui fournissent aussi les prix qui te liquident.",
    ],
    verdict:
      "Score maison 61/100 — MODÉRÉ. C'est l'un des rares protocoles DeFi à faire un vrai chiffre d'affaires avec de vrais clients, sans subventionner son activité par de l'émission de jetons — et le seul à avoir vraiment battu les plateformes centralisées sur leur propre terrain. Deux réserves solides : la chaîne est beaucoup plus centralisée qu'elle n'en a l'air, et la thèse d'investissement sur HYPE s'est nettement compliquée en 2026, les revenus du protocole reculant pendant que les volumes montent. Le produit et le jeton méritent d'être jugés séparément. Ce contenu n'est pas un conseil en investissement.",
    sources: [
      { label: "Documentation officielle Hyperliquid", href: "https://hyperliquid.gitbook.io/hyperliquid-docs" },
      { label: "DeFiLlama — Hyperliquid", href: "https://defillama.com/protocol/hyperliquid" },
      { label: "CoinDesk — l'essor des perps RWA rogne les revenus qui soutiennent HYPE (9 août 2026)", href: "https://www.coindesk.com/business/2026/08/09/hyperliquid-s-rwa-perps-boom-is-eating-into-the-revenue-that-backs-hype" },
      { label: "Multicoin Capital — analyse et valorisation de HYPE (juin 2026) — source détenant du HYPE, à lire comme un argumentaire" },
      { label: "Analyse de veille CryptoLuciole (wiki HyperLiquid, juin 2026)" },
    ],
    iaGenere: true,
    sourceNumero: 4,
  },
  {
    // Fiche complète (Mode B), rédigée le 21/10/2026 depuis l'analyse analyste-defi
    // PAPER-papertrade-2026-10-21 + wiki Papertrade / Perp-Contrepartie-Auto-Financee +
    // doc officielle. ⚠️ À RÉVISER après la mise à jour des contrats programmée le
    // 21/10/2026 à 21h35 UTC. Chiffres volatils : TVL en live ; les montants datés
    // (LP, taux d'émission, dividendes) sont explicitement datés dans le texte.
    slug: "papertrade",
    nom: "Papertrade (PAPER)",
    type: "Perps synthétiques sur HyperEVM, contrepartie financée par les pertes",
    chains: "HyperEVM (Hyperliquid) — prix lu sur le carnet d'ordres d'Hyperliquid",
    resume:
      "Papertrade est une plateforme de perps lancée le 10 octobre 2026 sur HyperEVM, la couche d'Hyperliquid qui accueille les applications tierces. On n'y trade que deux marchés, le bitcoin et l'ether, avec un levier jusqu'à ×1000. Sa particularité : personne ne finance la contrepartie. La réserve qui paie les gagnants se remplit uniquement des pertes des perdants, et chaque perdant reçoit un jeton, le PAPER, qui donne droit, une fois staké, à une part des pertes futures des autres.",
    live: { defillamaSlug: "papertrade", pools: [] },
    enBref: [
      { label: "Type", valeur: "Perps synthétiques : tu trades contre une réserve du protocole, pas contre d'autres traders" },
      { label: "Marchés", valeur: "Bitcoin et ether uniquement, levier jusqu'à ×1000" },
      { label: "Chaîne", valeur: "HyperEVM (Hyperliquid), prix lu sur le carnet d'ordres d'Hyperliquid" },
      { label: "Lancement", valeur: "Contrats déployés le 6 octobre 2026, trading ouvert le 10 octobre 2026" },
      { label: "Équipe", valeur: "Jez et Blurr, semi-pseudonymes ; aucun investisseur divulgué" },
      { label: "Jeton", valeur: "PAPER, distribué aux seuls traders perdants ; non transférable, sans droit de vote" },
      { label: "Audit", valeur: "Guardian Audits (rapport publié mi-octobre 2026, version finale le 17 octobre)" },
    ],
    score: { valeur: 32, sur: 100, mention: "ÉLEVÉ", sens: "eleve" },
    sections: [
      {
        titre: "Le principe",
        blocs: [
          {
            type: "note",
            ton: "alerte",
            titre: "Une fiche datée, sur un protocole de onze jours",
            texte:
              "Cette fiche décrit Papertrade au 21 octobre 2026, onze jours après son lancement. Une mise à jour de trois de ses contrats, programmée le 20 octobre, peut changer une partie de ce qui suit (détails dans « Qui contrôle quoi »).",
          },
          {
            type: "p",
            texte:
              "Sur une plateforme de perps classique comme Hyperliquid, ton ordre rencontre celui d'un autre trader dans un carnet d'ordres. Sur Papertrade, il n'y a personne en face : tu trades contre une réserve d'USDC appartenant au protocole, qui encaisse tes pertes et paie tes gains.",
          },
          {
            type: "p",
            texte:
              "Cette réserve est partie de zéro. Personne n'y a déposé de capital, et personne ne peut le faire : elle se remplit uniquement des pertes des traders. Le protocole repose sur une thèse : les traders à fort levier finissent par perdre, et leurs pertes suffisent à payer ceux qui gagnent, sans avoir besoin de liquidity providers extérieurs. Les premières données vont dans ce sens : sur les 212 premières heures de trading, les traders n'ont été gagnants, collectivement, que pendant 41 heures (étude IOSG, publiée le 20 octobre).",
          },
          {
            type: "p",
            texte:
              "Pour attirer du monde, Papertrade donne aux perdants un jeton, le PAPER. Une fois staké, il rapporte des USDC, prélevés sur les pertes des traders suivants.",
          },
          {
            type: "p",
            texte:
              "Le parallèle le plus juste est celui d'un bookmaker qui ouvrirait sans capital propre : il paie les gagnants avec la mise des perdants et, quand la caisse est vide, leur remet une reconnaissance de dette payable quand d'autres auront perdu.",
          },
        ],
      },
      {
        titre: "Équipe & origine",
        blocs: [
          {
            type: "p",
            texte:
              "Papertrade est porté par deux traders semi-pseudonymes, Jez et Blurr. Un troisième nom, UngusTrade, est cité par la presse comme détenteur d'une des clés de contrôle, sans confirmation officielle. Aucun d'eux n'a de parcours vérifiable, et aucune société n'est déclarée derrière le protocole. Selon Jez, l'interface du site a été développée avec des outils d'IA.",
          },
          {
            type: "p",
            texte:
              "Aucun fonds n'est entré au capital, et aucun PAPER n'a été réservé à l'équipe ou à des investisseurs. L'équipe se rémunère autrement : elle touche la moitié des frais prélevés sur les trades, en USDC.",
          },
          {
            type: "liste",
            items: [
              "Mai 2026 : annonce du projet, puis publication du whitepaper de la réserve, baptisée « Martingaler LP ».",
              "6 octobre 2026 : déploiement des contrats.",
              "10 octobre 2026 : ouverture du trading, et manipulation de prix le soir même (voir plus bas).",
              "20 octobre 2026 : le PAPER est déclaré non transférable « pour une durée indéterminée », et le délai de sécurité sur les mises à jour passe de 7 jours à 24 heures.",
            ],
          },
        ],
      },
      {
        titre: "Comment ça marche : la vie d'un trade",
        blocs: [
          {
            type: "p",
            texte:
              "Tu déposes des USDC (10 au minimum, depuis Hyperliquid, Ethereum, Arbitrum, Solana…), tu choisis le bitcoin ou l'ether, un sens (long ou short) et un levier jusqu'à ×1000. Chaque position a sa propre marge, que tu ne peux ni compléter ni retirer en cours de route.",
          },
          {
            type: "p",
            texte:
              "Mais aucun ordre n'est passé sur un marché. Papertrade lit le prix d'Hyperliquid à l'ouverture, puis à la clôture, et calcule lui-même ton résultat. C'est un perp synthétique.",
          },
          {
            type: "def",
            terme: "Perp synthétique",
            slug: "perp-synthetique",
            texte:
              "Un perp qui n'existe que dans les comptes du protocole : il suit un prix de référence, sans qu'aucun ordre soit passé sur un marché, et la plateforme règle elle-même gains et pertes.",
          },
          {
            type: "st",
            texte: "Le prix : le milieu du carnet d'Hyperliquid",
          },
          {
            type: "p",
            texte: "Le prix de référence est le mid du BBO du carnet d'ordres d'Hyperliquid, relu à chaque bloc.",
          },
          {
            type: "def",
            terme: "BBO (Best Bid and Offer)",
            slug: "bbo",
            texte:
              "Le meilleur prix d'achat (bid) et le meilleur prix de vente (offer) proposés à un instant donné dans un carnet d'ordres. Le mid est leur milieu : acheteur à 99,8, vendeur à 100,2, le mid vaut 100.",
          },
          {
            type: "p",
            texte:
              "Pour lire ce prix, le contrat de Papertrade, qui vit sur HyperEVM, interroge directement HyperCore, la couche où se trouve le carnet d'Hyperliquid (voir notre fiche Hyperliquid). Il passe pour cela par un precompile.",
          },
          {
            type: "def",
            terme: "Precompile",
            texte:
              "Un contrat « système » intégré à la blockchain, que les autres contrats peuvent appeler. Sur HyperEVM, certains precompiles donnent accès en lecture à l'état de HyperCore : prix, carnets, soldes.",
          },
          {
            type: "p",
            texte: "Ce choix a deux conséquences :",
          },
          {
            type: "liste",
            items: [
              "comme rien ne s'échange réellement, il n'y a ni funding, ni frais calculés sur la taille de la position, ni slippage : tu entres et tu sors exactement au mid ;",
              "en contrepartie, tout repose sur un seul prix, instantané, tiré d'un seul carnet, sans moyenne dans le temps ni seconde source pour le contrôler. C'est le point faible du protocole (voir la manipulation du 10 octobre).",
            ],
          },
          {
            type: "st",
            texte: "Les ordres passent par un serveur de l'équipe",
          },
          {
            type: "p",
            texte:
              "Tu ne parles pas directement au contrat : tu signes une instruction (« ouvrir un long de 1 000 $ sur l'ether »), et c'est un serveur de l'équipe, le relayer, qui la transmet. Lui seul est autorisé à ouvrir et fermer des positions. Les retraits et les liquidations, eux, fonctionnent sans lui.",
          },
          {
            type: "st",
            texte: "La liquidation : plus tôt qu'on ne croit",
          },
          {
            type: "p",
            texte:
              "La règle de notre numéro 4 donne le repère : à ×1000, un mouvement de 0,1 % contre toi (100 ÷ 1 000) efface toute ta marge. Sur Papertrade, la liquidation tombe avant : le seuil est placé 0,05 % plus près de ton prix d'entrée que le point où ta marge est à zéro.",
          },
          {
            type: "p",
            texte:
              "À ×1000, tu es donc liquidé sur un mouvement d'environ 0,05 % (0,1 % − 0,05 %), alors qu'une clôture volontaire à ce moment-là t'aurait encore rendu environ la moitié de ta marge : la liquidation, elle, confisque tout. Dit simplement : à ce levier, un mouvement de 50 $ sur un bitcoin à 100 000 $ suffit à tout perdre.",
          },
          {
            type: "p",
            texte: "Liquidé ou non, le perdant reçoit du PAPER sur la totalité de sa perte (voir plus bas).",
          },
        ],
      },
      {
        titre: "Quand tu gagnes : ce qui est retenu sur ton gain",
        blocs: [
          {
            type: "p",
            texte: "La réserve paie les gagnants, mais pas en totalité. Trois retenues s'appliquent, dans cet ordre :",
          },
          {
            type: "liste",
            items: [
              "Une franchise : les premiers 0,002 % de mouvement ne comptent pas (0,2 point de base, un point de base valant 0,01 %). Un gain plus petit que ça vaut zéro.",
              "Une décote : le gain restant est multiplié par un coefficient qui dépend de l'ampleur du mouvement. Plus le prix a peu bougé entre l'ouverture et la clôture, plus la décote est forte. Elle n'est jamais inférieure à 10 %.",
              "Des frais de 2 % sur ce qui reste.",
            ],
          },
          {
            type: "p",
            texte:
              "Papertrade appelle cette décote un « impact asymétrique » : asymétrique, parce qu'elle ne touche que les gains, jamais les pertes. Elle remplace le slippage qu'aurait un gros ordre sur un vrai marché, et ce qu'elle retient reste dans la réserve.",
          },
          {
            type: "tableau",
            entetes: ["Mouvement du prix", "Part du gain brut conservée (bitcoin)", "Part du gain brut conservée (ether)"],
            lignes: [
              ["0,1 %", "~74 %", "~70 %"],
              ["0,5 %", "~87 %", "~85 %"],
              ["1 %", "~88 %", "~88 %"],
              ["2 %", "~89 %", "~89 %"],
            ],
          },
          {
            type: "p",
            texte:
              "Avant les 2 % de frais. Calculs CryptoLuciole à partir des paramètres publiés dans la documentation (la ligne bitcoin à 0,1 % et 1 % correspond aux exemples de la doc).",
          },
          {
            type: "st",
            texte: "Un exemple chiffré",
          },
          {
            type: "p",
            texte:
              "Tu ouvres un long sur le bitcoin avec 100 $ de marge à ×1000, soit une position de 100 000 $ (100 × 1 000). Le bitcoin monte de 0,1 % et tu clôtures :",
          },
          {
            type: "liste",
            items: [
              "gain brut : 100 $ (100 000 × 0,1 %) ;",
              "après la franchise : 98 $ ;",
              "après la décote : environ 74 $ (98 × 0,754) ;",
              "après les 2 % de frais : environ 72 $.",
            ],
          },
          {
            type: "p",
            texte:
              "Dit simplement : sur un petit mouvement, tu gardes à peu près les trois quarts de ce qu'un vrai marché t'aurait payé. Sur un mouvement de 1 %, la décote ne prend plus qu'environ 12 %. En échange, tu n'as payé ni frais d'ouverture ni funding : tout le coût est concentré sur le gain.",
          },
          {
            type: "p",
            texte:
              "Quand tu perds, tu ne paies rien de plus que ta perte. Les 2 % de frais sont alors prélevés sur la part qui revient à la réserve, pas dans ta poche.",
          },
          {
            type: "note",
            ton: "info",
            titre: "Un détail qui compte pour la suite",
            texte:
              "Dans le modèle dont Papertrade s'inspire, celui de la plateforme de casino et de trading Rollbit, la décote grossit avec la taille de la position : un gros gain est plus rogné qu'un petit. Papertrade a retiré cette propriété, pour ne pas pousser les traders à découper leurs positions en dizaines de petites. Résultat : la décote est la même pour 100 $ que pour 100 000 $ de position. Un gros trade sur un petit mouvement est donc aussi rentable, en proportion, qu'un petit, y compris quand ce petit mouvement a été provoqué.",
          },
        ],
      },
      {
        titre: "La réserve (LP) : qui paie les gagnants",
        blocs: [
          {
            type: "p",
            texte:
              "La réserve qui sert de contrepartie à tous les traders s'appelle la LP (pour liquidity pool). Elle n'accepte aucun dépôt et se remplit uniquement :",
          },
          {
            type: "liste",
            items: [
              "des marges des traders liquidés ;",
              "des pertes des positions clôturées dans le rouge ;",
              "des décotes retenues sur les gains.",
            ],
          },
          {
            type: "p",
            texte:
              "Elle a un plafond : au-delà de 5 M$, elle ne grossit plus, et tout ce qu'elle gagne en plus est reversé aux stakers de PAPER (voir plus bas). Un relèvement à 10 M$ a été annoncé dans la presse le 17 octobre, mais le contrat affichait toujours 5 M$ le 21 octobre.",
          },
          {
            type: "st",
            texte: "Quand la réserve est vide : la file d'attente",
          },
          {
            type: "p",
            texte:
              "Si la LP n'a pas de quoi payer un gagnant, elle ne fait pas faillite et ne rogne pas son gain. Elle lui rend immédiatement sa marge et inscrit le profit impayé dans une file d'attente.",
          },
          {
            type: "def",
            terme: "File d'attente FIFO",
            texte:
              "« Premier arrivé, premier servi » (first in, first out). Les gains impayés sont rangés dans l'ordre des clôtures, et remboursés dans cet ordre, au fur et à mesure que de nouvelles pertes remplissent la réserve.",
          },
          {
            type: "p",
            texte:
              "Un exemple en chiffres ronds. La LP contient 3 M$. Beaucoup de traders sont long sur l'ether, l'ether monte de 2 %, et ils clôturent avec 5 M$ de gains à payer après décote :",
          },
          {
            type: "liste",
            items: [
              "les premiers à clôturer sont payés, pour 3 M$ : la LP est à zéro ;",
              "les 2 M$ restants (5 − 3) partent dans la file ;",
              "ils seront payés quand les traders suivants auront perdu 2 M$ ;",
              "pendant ce temps, les stakers ne touchent plus rien : la file passe avant eux.",
            ],
          },
          {
            type: "p",
            texte:
              "La dette de la LP envers les gagnants n'a pas d'échéance. Si l'activité se tarit, il n'y a plus de pertes, et la file ne se rembourse plus. Le 21 octobre, la file était vide.",
          },
          {
            type: "st",
            texte: "Une réserve minuscule face aux montants qu'elle couvre",
          },
          {
            type: "note",
            ton: "alerte",
            titre: "Le chiffre « en direct » n'est pas la réserve",
            texte:
              "La valeur déposée (TVL) affichée en haut de cette fiche additionne tout l'USDC présent sur le compte de Papertrade. Le 21 octobre, environ 92 % de ce montant appartenait aux traders eux-mêmes (leurs soldes libres et leurs marges). La LP, celle qui paie vraiment les gagnants, ne pesait qu'environ 3 M$. Tout est sur un seul compte : la séparation entre l'argent des traders et celui de la réserve n'existe que dans la comptabilité du contrat.",
          },
          {
            type: "p",
            texte:
              "Les plafonds de positions visés au lancement étaient de l'ordre d'un milliard de dollars par côté. Ils ont été resserrés depuis, sans que les nouvelles valeurs soient publiées. Avec une LP de 3 M$, il suffirait que 1 Md$ de positions soient du même côté et que le prix bouge d'environ 0,3 % en leur faveur pour que leurs gains bruts atteignent 3 M$ (1 000 M$ × 0,3 %) et vident la réserve.",
          },
          {
            type: "p",
            texte:
              "La LP n'est pas non plus couverte : Papertrade ne prend aucune position inverse sur Hyperliquid pour neutraliser son exposition. Ce n'est donc pas le capital de la réserve qui garantit sa solvabilité, c'est la file d'attente.",
          },
        ],
      },
      {
        titre: "Le PAPER : un droit sur les pertes des autres",
        blocs: [
          {
            type: "st",
            texte: "Comment il est émis",
          },
          {
            type: "p",
            texte:
              "Le PAPER n'est ni vendu, ni réservé à l'équipe ou à des investisseurs, ni offert par airdrop : il n'existe que parce qu'un trader a perdu. Chaque dollar perdu, en clôture dans le rouge ou en liquidation, donne droit à une quantité de PAPER qui baisse avec le temps :",
          },
          {
            type: "liste",
            items: [
              "tant que la LP est sous 2 M$ (y compris quand elle est négative), le taux est fixe : 100 PAPER par dollar perdu ;",
              "au-delà, le taux baisse à mesure que s'accumulent les gains de la LP au-dessus de ce seuil. Ce compteur ne redescend jamais, même quand la LP est vidée au profit des stakers : chaque baisse est définitive.",
            ],
          },
          {
            type: "p",
            texte: "La formule est publique : 100 × (120 M$ ÷ (120 M$ + H))², où H est ce compteur. Concrètement :",
          },
          {
            type: "tableau",
            entetes: ["Gains cumulés de la LP au-dessus de 2 M$ (H)", "PAPER reçus par dollar perdu"],
            lignes: [
              ["0", "100"],
              ["40 M$", "~56"],
              ["120 M$", "25"],
              ["240 M$", "~11"],
              ["360 M$", "~6"],
            ],
          },
          {
            type: "p",
            texte:
              "Le 21 octobre, H dépassait 260 M$ et le taux était tombé à environ 10 PAPER par dollar, contre 100 au lancement. Dit simplement : ceux qui ont perdu le premier jour ont reçu dix fois plus de PAPER que ceux qui perdent aujourd'hui, pour la même somme. C'est voulu, la documentation l'assume.",
          },
          {
            type: "note",
            ton: "alerte",
            titre: "Pas de plafond strict",
            texte:
              "Si la courbe était la seule règle, l'offre tendrait vers environ 12,7 milliards de PAPER. Mais dès que la LP repasse sous 2 M$, l'émission revient à 100 PAPER par dollar, dix fois le taux du 21 octobre. Ce jour-là, la LP n'était qu'à environ 1,3 M$ de ce seuil. Une série de gains des traders suffirait donc à relancer une émission massive, qui diluerait les stakers en place.",
          },
          {
            type: "st",
            texte: "Comment les stakers sont payés",
          },
          {
            type: "p",
            texte:
              "Le PAPER n'a qu'un usage : être staké. Le staking est instantané, sans période de blocage, et il rapporte des USDC, répartis entre les stakers au prorata du PAPER qu'ils ont staké. Deux sources alimentent ces versements :",
          },
          {
            type: "liste",
            items: [
              "la moitié des frais de 2 % : ceux prélevés sur les gains des traders, et ceux prélevés sur la part de la LP quand un trader perd ou est liquidé (l'autre moitié va à l'équipe) ;",
              "l'excédent de la LP : tout ce qu'elle gagne au-delà de son plafond de 5 M$ est reversé aux stakers.",
            ],
          },
          {
            type: "p",
            texte: "Deux conditions encadrent ces versements :",
          },
          {
            type: "liste",
            items: [
              "si des gagnants attendent dans la file, ils passent en premier, et les stakers ne touchent rien ;",
              "si la LP est sous son plafond, seule la part des frais est versée.",
            ],
          },
          {
            type: "p",
            texte:
              "C'est l'excédent de la LP qui a payé l'essentiel, de l'ordre de 85 % des versements à la mi-octobre selon la presse spécialisée. Le premier jour, près de 24 M$ ont été reversés aux stakers, pendant que des milliers de traders perdaient volontairement pour récolter du PAPER à 100 par dollar. Les versements sont retombés entre 1 et 2 M$ par jour autour du 20 octobre, et le 21, la LP était repassée sous son plafond : l'excédent ne coulait plus.",
          },
          {
            type: "p",
            texte:
              "Le PAPER est donc un droit sur les pertes futures des autres traders de cette seule plateforme. Son revenu suit l'affluence, et l'affluence retombe.",
          },
          {
            type: "st",
            texte: "« Perdre pour gagner » : une stratégie qui ne paie plus",
          },
          {
            type: "p",
            texte:
              "Les premiers jours, certains ont perdu exprès pour récolter du PAPER et toucher les dividendes. L'exemple le plus cité (Lookonchain, un compte d'analyse on-chain) : un wallet a enchaîné un millier de trades, perdu environ 979 k$, reçu 252 millions de PAPER, puis encaissé environ 997 k$ de dividendes en USDC. Bilan : environ +18 k$ (997 − 979).",
          },
          {
            type: "p",
            texte:
              "Ce calcul ne marche plus. Le 21 octobre, à environ 10 PAPER par dollar, un PAPER « coûtait » 0,10 $ de perte (1 ÷ 10), alors que son dernier prix de référence était d'environ 0,026 $ : perdre 1 $ rapportait l'équivalent de 0,26 $ de PAPER (10 × 0,026). Selon Lookonchain, 21 des 25 plus gros perdants restaient en perte nette au 20 octobre, dividendes compris.",
          },
          {
            type: "st",
            texte: "Non transférable, et pour longtemps",
          },
          {
            type: "p",
            texte:
              "On ne peut ni envoyer ni vendre de PAPER : seuls l'émission, le staking, le retrait du staking et la réclamation des dividendes fonctionnent. L'ouverture des transferts était prévue dans une « phase 4 » sans date. Le 20 octobre, l'équipe a annoncé que le PAPER resterait non transférable « pour une durée indéterminée », revenant sur ses annonces de début octobre.",
          },
          {
            type: "p",
            texte:
              "Un marché parallèle avait commencé à le coter : un perp de pré-marché sur le PAPER, ouvert le 18 octobre sur Paragon (un marché créé par un tiers sur Hyperliquid, via le standard HIP-3) et sur Aster (une autre plateforme de perps), a été retiré après cette annonce. Son dernier prix, environ 0,026 $, valorisait l'ensemble du PAPER à quelques mois de dividendes seulement : ceux qui le tradaient ne croyaient pas à la durée de ces revenus.",
          },
          {
            type: "p",
            texte:
              "Le jour où les transferts ouvriront, la quasi-totalité de l'offre (plus de 99 % était stakée le 21 octobre) sera entre les mains de traders qui l'ont « payée » en pertes. La pression vendeuse potentielle est considérable.",
          },
          {
            type: "note",
            ton: "alerte",
            titre: "Les jetons dérivés",
            texte:
              "Des jetons tiers (PSTR, PULP) proposent une exposition indirecte au PAPER. Ils sont créés par des équipes anonymes, non affiliées à Papertrade : c'est un risque de plus, empilé sur celui du PAPER.",
          },
        ],
      },
      {
        titre: "La manipulation du 10 octobre, en détail",
        blocs: [
          {
            type: "p",
            texte:
              "Déplacer le mid d'Hyperliquid (donc le prix de référence sur Papertrade) pendant quelques secondes coûte peu, et à ×1000 ce petit écart rapporte gros. Pas à pas, avec un carnet volontairement élargi pour garder des chiffres ronds :",
          },
          {
            type: "liste",
            items: [
              "Le mid est à 100. Sur Papertrade, tu ouvres un long de 1 M$ sur l'ether avec 1 000 $ de marge (×1000).",
              "Sur Hyperliquid, le carnet affiche 99,8 à l'achat et 100,2 à la vente. Tu y places un ordre d'achat à 100,0 : le meilleur prix d'achat devient 100,0, et le mid passe à 100,1 (soit +0,1 %), sans même que ton ordre soit exécuté.",
              "Tu clôtures ton long sur Papertrade : 1 000 $ de gain brut (1 000 000 × 0,1 %), environ 700 $ après franchise, décote et frais.",
              "Tu annules ton ordre sur Hyperliquid.",
            ],
          },
          {
            type: "p",
            texte:
              "Tu as gagné environ 70 % de ta mise en quelques secondes. Dans la réalité, le carnet d'Hyperliquid est bien plus serré, et il faut réellement acheter pour faire bouger le prix, ce qui coûte des frais et du slippage. Mais à ×1000, il suffit que le gain sur Papertrade dépasse ce coût.",
          },
          {
            type: "st",
            texte: "Ce qui s'est passé le jour du lancement",
          },
          {
            type: "liste",
            items: [
              "Le soir du 10 octobre, un wallet achète environ 6 000 ETH sur Hyperliquid en deux minutes, pour près de 15 M$. Le prix monte d'environ 0,12 %, et il revend l'essentiel une minute plus tard (séquence vérifiable sur l'API d'Hyperliquid).",
              "En face, de gros longs à ×1000 sur Papertrade encaissent la hausse.",
              "Sur environ huit heures : 305 trades, dont 296 gagnants, pour environ 1,28 M$ de gain net, contre environ 52 k$ de frais payés sur Hyperliquid.",
              "Sur la période, la LP, qui s'était remplie d'environ 5 M$ de pertes dans les premières heures, tombe à environ 2,4 M$.",
            ],
          },
          {
            type: "p",
            texte:
              "Le même wallet reperd ensuite environ 450 k$. Il ouvre une trentaine de shorts à ×660 et les laisse ouverts plus de trois heures. À ce levier, la marge est effacée par un mouvement d'environ 0,15 % (100 ÷ 660), et la liquidation tombe encore avant, vers 0,1 % (0,15 % − 0,05 %). Un mouvement ordinaire de l'ether suffit : ces positions ont été liquidées sans aucune manipulation. Comme tout perdant, il a reçu du PAPER sur ces pertes, environ 17,6 millions.",
          },
          {
            type: "p",
            texte:
              "La manipulation a rapporté parce qu'elle durait quelques secondes ; la perte est venue d'avoir gardé de gros leviers ouverts pendant des heures, comme n'importe quel trader.",
          },
          {
            type: "st",
            texte: "La réponse de l'équipe",
          },
          {
            type: "liste",
            items: [
              "Le 11 octobre, elle affirme que ce n'est « pas un oubli dans la conception du mécanisme » : le risque était listé dans sa documentation, et l'audit le classait comme « vecteur connu ».",
              "Elle resserre les plafonds de position, sans publier les nouvelles valeurs.",
              "Elle affirme que le trader a rendu ses gains via d'autres comptes ; The Block n'a pas pu le vérifier.",
              "Aucun post-mortem (rapport public d'incident) n'a été publié. DeFiLlama recense l'épisode dans sa base des piratages, comme une manipulation d'oracle.",
            ],
          },
          {
            type: "note",
            ton: "avis",
            titre: "Notre lecture",
            texte:
              "Ce n'est pas un bug : le contrat a fait exactement ce qui était écrit. C'est un choix de conception assumé, et c'est justement ce qui pose problème. Les plafonds resserrés réduisent le gain possible d'une attaque, ils ne la rendent pas impossible : le prix reste un mid instantané, sans moyenne dans le temps ni comparaison avec une seconde source. Tant que ces deux garde-fous classiques manquent, le même scénario reste ouvert, à plus petite échelle.",
          },
        ],
      },
      {
        titre: "Qui contrôle quoi",
        blocs: [
          {
            type: "p",
            texte:
              "Papertrade n'a aucune gouvernance par vote : le PAPER ne donne aucun droit de vote. Les décisions sont prises par l'équipe, via une chaîne de contrôle qu'on peut lire directement sur la blockchain.",
          },
          {
            type: "def",
            terme: "Multisig",
            texte:
              "Un portefeuille qui exige plusieurs signatures pour agir. En « 2-sur-3 », trois clés existent et deux suffisent à valider une opération.",
          },
          {
            type: "p",
            texte:
              "Tout en haut se trouve un multisig 2-sur-3, développé par l'équipe elle-même plutôt que sur Safe, l'outil standard du secteur. Ses trois signataires sont de simples adresses (EOA) qui ne sont pas attribuées publiquement : des noms circulent, mais rien ne relie officiellement une clé à une personne.",
          },
          {
            type: "def",
            terme: "Timelock",
            texte:
              "Un contrat qui impose un délai fixe entre la programmation d'une modification et son exécution. Ce délai laisse aux utilisateurs le temps de voir venir un changement, et de partir s'il ne leur convient pas.",
          },
          {
            type: "p",
            texte:
              "Ce multisig contrôle un timelock. La documentation et la presse annonçaient un délai de 7 jours. Le 20 octobre, il a été ramené à 24 heures, par une opération programmée dès le 12 octobre, sans que la documentation soit mise à jour. 24 heures laissent peu de temps pour réagir, et l'audit note que ce délai n'a aucun minimum : il peut encore être raccourci.",
          },
          {
            type: "def",
            terme: "Contrat upgradable",
            texte:
              "Un contrat dont le code peut être remplacé sans changer d'adresse : l'adresse que tu utilises (le proxy) renvoie vers un code (l'implémentation) que son propriétaire peut changer. Pratique pour corriger un bug, mais tout ce que fait le contrat peut alors changer.",
          },
          {
            type: "p",
            texte:
              "Le timelock, enfin, est propriétaire de tous les contrats, et tous sont upgradables, y compris celui du jeton PAPER.",
          },
          {
            type: "st",
            texte: "Ce que l'équipe peut faire sans délai",
          },
          {
            type: "liste",
            items: [
              "Suspendre les ouvertures de positions, ou retirer définitivement un marché en figeant son prix au mid du moment : le multisig a ce pouvoir sans passer par le timelock.",
              "Ramener à zéro le plafond de positions d'un marché, via une adresse de l'équipe dédiée à la gestion des marchés.",
              "Choisir l'ordre dans lequel le relayer transmet les instructions des traders, ce qui ne peut pas être contrôlé de l'extérieur.",
            ],
          },
          {
            type: "p",
            texte:
              "Les retraits des soldes, eux, ne passent pas par l'équipe. Ils ont été honorés sans interruption, y compris quand plus de la moitié des dépôts sont repartis dans les dix jours qui ont suivi le lancement.",
          },
          {
            type: "st",
            texte: "Un code qu'on ne peut pas lire",
          },
          {
            type: "p",
            texte:
              "Aucun contrat de Papertrade n'est vérifié sur l'explorateur de HyperEVM : on voit les adresses et les soldes, pas le code qui les gère. Personne ne peut donc comparer le code déployé à celui que l'auditeur a relu.",
          },
          {
            type: "note",
            ton: "alerte",
            titre: "Une mise à jour exécutable dès le 21 octobre",
            texte:
              "Le 20 octobre à 21h35 UTC, l'équipe a programmé dans le timelock le remplacement de trois contrats : le moteur de trading, la gestion des session keys (les clés temporaires qui permettent de trader sans signer chaque ordre, voir notre numéro 7) et la mécanique d'émission du PAPER, ainsi qu'une nouvelle adresse de gestion des marchés. L'opération est exécutable à partir du 21 octobre, 21h35 UTC. Le nouveau code n'est pas vérifié, et aucun audit n'a été annoncé pour ces versions. Cette fiche sera révisée une fois la mise à jour exécutée.",
          },
        ],
      },
      {
        titre: "L'audit",
        blocs: [
          {
            type: "p",
            texte:
              "Papertrade a été audité par Guardian Audits, de juin au 9 octobre 2026, en deux passes. Le rapport a été publié sur le dépôt GitHub de l'auditeur le 15 octobre, puis en version finale le 17. Il recense 42 constats :",
          },
          {
            type: "liste",
            items: [
              "aucun critique ;",
              "2 élevés, corrigés : l'un permettait de détourner les frais via la file d'attente, l'autre de payer des gains en file sans les débiter de la LP ;",
              "5 moyens, corrigés ;",
              "11 faibles, dont 8 acceptés sans correction ;",
              "24 informatifs.",
            ],
          },
          {
            type: "p",
            texte:
              "Au total, une vingtaine de constats ont été acceptés en l'état. Le bilan paraît propre, mais trois points comptent plus que le décompte :",
          },
          {
            type: "liste",
            items: [
              "La manipulation du prix ne figure pas parmi les constats : l'auditeur l'a classée à part, comme « vecteur connu ». La source de prix ne rejette qu'un prix nul ou un carnet incohérent (meilleur prix d'achat au-dessus du meilleur prix de vente) ; elle n'a ni moyenne dans le temps, ni contrôle d'écart.",
              "Un constat accepté permet au propriétaire des contrats de désigner une adresse capable de transférer le PAPER de n'importe quel détenteur. L'auditeur le résume ainsi : si la clé de gouvernance est compromise, tous les PAPER peuvent être vidés.",
              "Le délai du timelock n'a pas de plancher, autre constat accepté.",
            ],
          },
          {
            type: "p",
            texte:
              "S'y ajoutent les limites déjà vues : code non vérifié sur l'explorateur, dépôt audité privé, mise à jour en attente sans audit public. Il n'existe pas non plus de bug bounty (récompense publique pour qui signale une faille).",
          },
        ],
      },
      {
        titre: "Les risques, classés",
        blocs: [
          {
            type: "st",
            texte: "1. La manipulation du prix (le risque central)",
          },
          {
            type: "p",
            texte:
              "Un seul prix instantané, tiré d'un seul carnet, un levier ×1000 et une réserve de quelques millions : la combinaison rend la manipulation rentable par construction. Elle a déjà eu lieu, et le vecteur reste ouvert. Le carnet d'Hyperliquid a d'ailleurs déjà été manipulé sur des actifs moins liquides (JELLY en mars 2025, voir notre fiche Hyperliquid ; XPL en août 2025 ; POPCAT en novembre 2025).",
          },
          {
            type: "st",
            texte: "2. La solvabilité de la réserve",
          },
          {
            type: "p",
            texte:
              "La LP ne pèse que quelques millions face à des positions qui peuvent se compter en centaines de millions. Si les traders gagnent ensemble, c'est la file d'attente qui absorbe, sans échéance. Si tu as des gains en attente, ton risque n'est pas de perdre ta marge (elle t'est rendue), mais d'attendre ton profit indéfiniment.",
          },
          {
            type: "st",
            texte: "3. Le contrôle et le code",
          },
          {
            type: "p",
            texte:
              "Une équipe de deux ou trois personnes semi-pseudonymes, un timelock de 24 heures, un code illisible et modifiable, y compris celui du jeton. En dix jours, l'équipe a déjà raccourci son délai de sécurité et gelé les transferts du PAPER, par décision unilatérale. Rien n'indique une intention frauduleuse, mais tout repose sur la confiance.",
          },
          {
            type: "st",
            texte: "4. Le jeton",
          },
          {
            type: "p",
            texte:
              "Si tu as reçu du PAPER et que tu le stakes, ton revenu dépend uniquement de l'arrivée de nouveaux perdants, que le mécanisme attire de moins en moins à mesure que l'émission baisse. S'y ajoutent la dilution possible si la LP repasse sous 2 M$, l'absence de marché pour le revendre, et le pouvoir, documenté par l'audit, de déplacer les soldes.",
          },
          {
            type: "st",
            texte: "5. Le statut juridique",
          },
          {
            type: "p",
            texte:
              "Une plateforme où la maison paie les gagnants avec les pertes des perdants, à ×1000, ressemble à ce que de nombreux régulateurs qualifient de bucket shop (une officine qui prend les ordres sans jamais les exécuter sur un vrai marché) ou de jeu d'argent. Aucune entité juridique n'est déclarée, et nous n'avons trouvé ni restriction géographique documentée, ni prise de position d'un régulateur. Un jeton distribué pour des pertes et donnant droit aux revenus de la plateforme pourrait aussi relever du droit des valeurs mobilières : c'est une hypothèse, rien n'est tranché.",
          },
          {
            type: "p",
            texte: "Enfin, comme pour tout protocole DeFi, le risque de hack n'est jamais à exclure.",
          },
          {
            type: "st",
            texte: "Ce qui rassure",
          },
          {
            type: "liste",
            items: [
              "Les comptes tombent juste : le 21 octobre, l'USDC réellement présent correspondait au dollar près à la somme des soldes, des marges et de la LP.",
              "Les retraits ont été honorés sans interruption, alors que plus de la moitié des dépôts sont repartis en dix jours.",
              "La documentation est honnête : elle liste elle-même la manipulation du prix comme un risque résiduel réel, et publie ses formules.",
              "Aucun jeton n'a été réservé à l'équipe ou à des investisseurs, et les dividendes versés en USDC sont réels : ils viennent des pertes des traders, pas d'une émission.",
            ],
          },
          {
            type: "note",
            ton: "avis",
            titre: "Pourquoi « élevé »",
            texte:
              "Notre grille donne 32/100. Plus le score est bas, plus le risque est grand : à 30 et moins, c'est « élevé » ; de 31 à 60, « modéré ». Papertrade tombe donc en « modéré », à deux points de la limite. Nous le classons pourtant en risque élevé, comme dans notre numéro 7, parce que trois fragilités se renforcent : une réserve minuscule face à un levier ×1000, un prix tiré d'un seul carnet déjà manipulé, et une équipe qui a raccourci ses propres garde-fous en dix jours. Élevé ne veut pas dire frauduleux : les comptes sont justes et les retraits fonctionnent. Cela veut dire qu'une nouvelle attaque de prix, ou une mise à jour mal intentionnée, suffirait à faire tomber les pertes sur les traders et les stakers.",
          },
        ],
      },
      {
        titre: "Pourquoi ça compte",
        blocs: [
          {
            type: "p",
            texte:
              "Papertrade est un cas d'école : un dérivé synthétique ne vaut que ce que vaut sa source de prix, et plus le levier est haut, moins il faut la déformer pour qu'une manipulation paie. C'était déjà la question des marchés de prédiction d'Hyperliquid dans notre numéro 6 : qui fixe le prix de règlement, et combien coûte-t-il de le fausser ?",
          },
          {
            type: "p",
            texte: "La comparaison avec deux modèles voisins montre où se situe la différence :",
          },
          {
            type: "tableau",
            entetes: ["", "Papertrade", "gTrade (Gains Network)", "Hyperliquid"],
            lignes: [
              ["Qui est en face du trader", "La LP du protocole, sans aucun dépôt extérieur", "Un vault alimenté par des déposants", "D'autres traders, via le carnet d'ordres (le vault HLP n'est qu'un market maker parmi d'autres)"],
              ["Source du prix", "Mid instantané d'un seul carnet", "Oracle à plusieurs sources (Chainlink), avec un spread qui s'ajuste", "Le carnet lui-même ; prix de liquidation publié par les validateurs (médiane)"],
              ["Si la contrepartie ne suffit pas", "Les gains attendent dans une file sans échéance", "Le protocole émet du GNS, son jeton, pour recapitaliser le vault", "Le vault HLP reprend les positions liquidées ; en dernier recours, des positions gagnantes sont réduites d'office (ADL)"],
            ],
          },
          {
            type: "p",
            texte:
              "Autre enseignement, utile bien au-delà de Papertrade : les « frais » affichés par ce type de plateforme sont surtout des pertes de traders redistribuées. Sur ses onze premiers jours, Papertrade affichait sur DeFiLlama plus de frais que GMX, Jupiter et gTrade réunis sur trente jours. Ce chiffre ne mesure pas une activité commerciale récurrente, et ne se compare pas aux frais de trading d'une plateforme classique.",
          },
          {
            type: "p",
            texte:
              "Enfin, les garde-fous annoncés (délai de sécurité, transférabilité du jeton) se vérifient sur la blockchain, pas dans la documentation. Chez Papertrade, les deux ont changé en dix jours.",
          },
        ],
      },
    ],
    pointsCles: [
      "Papertrade ne propose que deux marchés, le bitcoin et l'ether, jusqu'à ×1000 : aucun ordre n'est passé sur un vrai marché, tout se calcule à partir du mid d'Hyperliquid.",
      "À ×1000, la liquidation tombe sur un mouvement d'environ 0,05 % : 50 $ sur un bitcoin à 100 000 $.",
      "La réserve qui paie les gagnants n'est financée que par les pertes ; quand elle est vide, les gains attendent dans une file sans échéance.",
      "Le PAPER est un droit sur les pertes futures des autres traders : non transférable, sans droit de vote, émis de moins en moins généreusement, et sans plafond strict.",
      "Le prix reste manipulable comme le 10 octobre : l'audit l'a classé « vecteur connu », il n'a pas été corrigé.",
      "Timelock réduit à 24 heures, contrats upgradables et non vérifiés : tout repose sur la confiance dans une petite équipe semi-pseudonyme.",
    ],
    verdict:
      "Score maison 32/100 — risque ÉLEVÉ. Papertrade est une expérience de mécanisme originale, mais ce n'est pas un outil de trading : c'est un casino à circuit fermé, où les pertes rémunèrent le jeton et où le jeton attire les pertes. Ce n'est pas un Ponzi au sens strict (personne ne promet de taux, et ce ne sont pas les nouveaux dépôts qui paient les anciens), mais tout dépend d'un flux continu de perdants que le mécanisme attire de moins en moins. Pour le trader, le jeu est défavorable par construction : décote sur les gains, frais, liquidation anticipée. Pour le détenteur de PAPER, c'est un pari sur l'affluence future de la plateforme, sans marché pour en sortir. Le scénario le plus probable n'est pas un effondrement brutal, mais une lente évaporation de l'activité et des dividendes, sauf nouvelle attaque de prix ou mise à jour malveillante. Ce contenu n'est pas un conseil en investissement.",
    sources: [
      { label: "Documentation officielle Papertrade (lue le 21 octobre 2026)", href: "https://docs.papertrade.xyz" },
      { label: "Guardian Audits — rapport d'audit Papertrade (publié le 15 octobre 2026)", href: "https://github.com/GuardianAudits/Audits/tree/main/Papertrade" },
      { label: "DeFiLlama — Papertrade", href: "https://defillama.com/protocol/papertrade" },
      { label: "The Block — la manipulation du 10 octobre (11 octobre 2026)", href: "https://www.theblock.co/news/defi/2026-10-11-trader-nets-1-28-million-on-new-1000x-exchange-papertrade-by-moving-hyperliquids-eth-prices-418239" },
      { label: "Bankless — ce qu'il faut savoir sur le lancement (9 octobre 2026)", href: "https://www.bankless.com/read/what-to-know-about-papertrade-s-launch" },
      { label: "Bankless — pourquoi le PAPER reste non transférable (20 octobre 2026)", href: "https://www.bankless.com/read/why-papertrade-wont-let-paper-trade" },
      { label: "ChainCatcher — étude IOSG sur Papertrade (20 octobre 2026)", href: "https://www.chaincatcher.com/en/article/2297496" },
      { label: "Datawallet — Papertrade explained (mise à jour du 17 octobre 2026)", href: "https://www.datawallet.com/crypto/papertrade-explained" },
      { label: "Lectures on-chain HyperEVM et API Hyperliquid (21 octobre 2026)" },
      { label: "Analyse de veille CryptoLuciole (21 octobre 2026)" },
    ],
    iaGenere: true,
    sourceNumero: 7,
  },
  {
    slug: "derive",
    nom: "Derive (ex-Lyra, DRV)",
    type: "Plateforme d'options (et de perps, prêt, vaults), fonds gardés sur Ethereum",
    chains: "Ethereum (garde des fonds et vérification des preuves) — exécution hors chaîne, données publiées sur Celestia",
    resume:
      "Derive, anciennement Lyra, est la principale plateforme d'options de la DeFi. Tu peux y acheter ou vendre des options sur l'ETH, le BTC et d'autres actifs, mais aussi trader des perps, prêter, emprunter ou déposer dans des vaults. Depuis sa V3, lancée le 7 octobre 2026, tes fonds sont gardés dans des contrats sur Ethereum : les ordres sont exécutés hors chaîne, puis leur résultat est prouvé sur Ethereum. La confiance porte surtout sur l'équipe, qui garde la main sur les contrats.",
    live: { defillamaSlug: "derive-v3-options", pools: [] },
    enBref: [
      { label: "Type", valeur: "Plateforme de dérivés à carnet d'ordres : options d'abord, plus perps, spot, prêt et vaults" },
      { label: "Lancement", valeur: "Lyra en 2021 ; Lyra V2 en décembre 2023 ; renommé Derive en août 2024 ; V3 le 7 octobre 2026" },
      { label: "Équipe", valeur: "Identifiée, cofondée par Nick Forster ; carnet d'ordres opéré par la société Lyra Technologies Corp." },
      { label: "Options", valeur: "Européennes (exercées à l'échéance seulement), réglées en USDC, échéances jusqu'à 400 jours" },
      { label: "Garde des fonds", valeur: "Contrats sur Ethereum (depuis la V3)" },
      { label: "Jeton", valeur: "DRV ; on vote avec le DRV staké (stDRV)" },
      { label: "Accès", valeur: "Résidents américains exclus" },
    ],
    score: { mention: "MOYEN", sens: "moyen" },
    sections: [
      {
        titre: "Le principe",
        blocs: [
          {
            type: "def",
            terme: "Option",
            slug: "option",
            texte:
              "Un contrat qui donne le droit, sans l'obligation, d'acheter (call) ou de vendre (put) un actif à un prix fixé d'avance (le strike), à une date donnée. L'acheteur paie ce droit au vendeur : c'est la prime.",
          },
          {
            type: "p",
            texte:
              "Nous avons expliqué le fonctionnement des options, exemples chiffrés à l'appui, dans notre numéro 8 (lien en bas de page). Cette fiche part de là et va plus loin sur la plateforme elle-même.",
          },
          {
            type: "p",
            texte:
              "Derive est une bourse d'options. Comme sur une plateforme centralisée, les acheteurs et les vendeurs se rencontrent dans un carnet d'ordres, et des market makers (des professionnels qui affichent en permanence un prix d'achat et un prix de vente) assurent l'essentiel de la liquidité. La différence avec une plateforme centralisée : tes fonds restent dans des contrats publics sur Ethereum, et chaque opération est vérifiée par ces contrats.",
          },
          {
            type: "p",
            texte: "Sur Derive, selon ton objectif, tu peux :",
          },
          {
            type: "liste",
            items: [
              "acheter une option, pour te protéger contre une baisse (put) ou parier sur une hausse (call) : ta perte est limitée à la prime payée ;",
              "vendre une option, pour encaisser la prime : tu prends alors le risque d'une grosse perte si le marché va contre toi ;",
              "prêter tes USDC ou tes cryptos aux traders qui empruntent, ou emprunter toi-même ;",
              "déposer dans un vault, un fonds géré par une stratégie automatique (le plus souvent, la vente d'options) ;",
              "trader des perps (contrats perpétuels) et des cryptos au comptant.",
            ],
          },
        ],
      },
      {
        titre: "Équipe & origine",
        blocs: [
          {
            type: "p",
            texte:
              "Derive est l'ancien Lyra, cofondé par Nick Forster. Le carnet d'ordres est opéré par une société identifiée, Lyra Technologies Corp. Nos sources ne détaillent pas les investisseurs du projet.",
          },
          {
            type: "p",
            texte:
              "Lyra démarre en 2021 sur Optimism avec un AMM : une formule fixe le prix des options, et ce sont les déposants du pool qui jouent le rôle de vendeur. Le prix est mis à jour trop lentement, les déposants perdent de façon répétée, et la plateforme ne peut pas traiter de gros ordres. Début 2023, une version déployée sur d'autres blockchains, couverte sur GMX, garde le même défaut.",
          },
          {
            type: "def",
            terme: "AMM (automated market maker)",
            texte:
              "Un pool de liquidité où une formule fixe le prix à la place d'un carnet d'ordres. Pratique pour échanger des cryptos, beaucoup moins pour des options, dont le prix dépend de la volatilité attendue et doit être recalculé en permanence.",
          },
          {
            type: "p",
            texte:
              "En décembre 2023, Lyra V2 passe à un carnet d'ordres tenu par des market makers professionnels, sur sa propre blockchain (la future Derive Chain), et le projet est renommé Derive le 28 août 2024. Il fallait alors transférer ses fonds vers cette chaîne par un bridge, tous les actifs partageaient une seule réserve de risque, et seul l'USDC se prêtait. La V3, le 7 octobre 2026, ferme cette chaîne et ramène les fonds sur Ethereum.",
          },
          {
            type: "p",
            texte:
              "Dit simplement : Derive a fini par reprendre le modèle des grandes plateformes d'options centralisées (un carnet d'ordres et des professionnels qui cotent en continu), en gardant de la DeFi la garde des fonds sur une blockchain publique.",
          },
          {
            type: "st",
            texte: "La structure juridique",
          },
          {
            type: "liste",
            items: [
              "Lyra Technologies Corp. opère le carnet d'ordres, le matching (la mise en relation des ordres) et le contrôle d'accès.",
              "Depuis février 2026 (proposition de gouvernance DIP 309, posée le 27 janvier, vote clos le 16 février), les paramètres du protocole et la trésorerie sont confiés à une filiale de la fondation, établie aux îles Vierges britanniques.",
              "Les résidents américains sont exclus. Une proposition du 12 octobre 2026 (DIP 329) autorise seulement la fondation à explorer un accès aux marchés régulés américains : elle n'engage ni lancement ni structure, et aucun vote n'est affiché.",
            ],
          },
        ],
      },
      {
        titre: "Comment ça marche depuis la V3",
        blocs: [
          {
            type: "p",
            texte:
              "Avec la V3, la plateforme fonctionne comme une application dont les fonds et les règles vivent sur Ethereum, mais dont les calculs se font ailleurs, pour aller vite. Voici le trajet d'un ordre :",
          },
          {
            type: "liste",
            items: [
              "1. Tu déposes tes fonds dans un contrat de Derive sur Ethereum, et tu signes tes ordres depuis ton propre wallet (ou un multisig).",
              "2. Ton ordre arrive au carnet d'ordres, tenu hors chaîne par Lyra Technologies Corp., qui le fait correspondre avec un ordre en face en moins d'une milliseconde.",
              "3. Un séquenceur range les opérations dans l'ordre et les regroupe par lots.",
              "4. Un programme exécuté dans un zkVM (une machine qui produit une preuve de chaque calcul) rejoue chaque lot (soldes, garanties, liquidations) et produit une preuve zk que tout a respecté les règles.",
              "5. Un contrat sur Ethereum vérifie cette preuve, puis enregistre le nouvel état des comptes. Le détail des opérations est publié sur Celestia.",
            ],
          },
          {
            type: "def",
            terme: "Preuve zk",
            texte:
              "Une preuve mathématique, rapide à vérifier, qu'un calcul a suivi des règles fixées d'avance. Ici, elle certifie que chaque lot a appliqué les règles de garantie et de règlement de Derive, sans qu'Ethereum ait à refaire tous les calculs.",
          },
          {
            type: "def",
            terme: "Séquenceur",
            texte:
              "L'opérateur qui reçoit les opérations, fixe leur ordre de passage et les regroupe en lots. Chez Derive, il est désigné par la fondation. Il ne peut pas inventer un ordre, mais il peut en ignorer un.",
          },
          {
            type: "def",
            terme: "Disponibilité des données (data availability)",
            texte:
              "Pour que n'importe qui puisse recalculer les soldes de chacun sans l'opérateur, le détail des opérations doit être publié quelque part. Derive le publie sur Celestia, une blockchain spécialisée dans ce stockage et moins chère qu'Ethereum.",
          },
          {
            type: "st",
            texte: "Ce que la V3 change pour toi",
          },
          {
            type: "liste",
            items: [
              "Plus de bridge maison ni de chaîne à part : tes fonds arrivent sur Ethereum par n'importe quel bridge.",
              "Plus de wallet intermédiaire imposé : tu déposes et signes depuis ton wallet ou ton multisig, et ton sous-compte est créé à ton premier dépôt.",
              "Dépôt possible sans payer de gas, en envoyant tes fonds à une adresse de dépôt dédiée.",
              "L'emprunt n'est plus réservé à l'USDC : ETH, WBTC et HYPE s'empruntent aussi.",
              "Les positions ETH et BTC peuvent partager une même marge (pour les traders éligibles, voir plus bas).",
              "Les vaults se créent sans code, et un compte peut donner des permissions limitées à un bot ou à un membre d'équipe.",
              "La migration s'est faite automatiquement, mais les ordres conditionnels (déclenchés à un prix donné) et les ordres TWAP (qui étalent un gros ordre en petites tranches dans le temps) ont dû être soumis à nouveau.",
            ],
          },
        ],
      },
      {
        titre: "Les options sur Derive, en pratique",
        blocs: [
          {
            type: "liste",
            items: [
              "Options européennes : elles ne s'exercent qu'à l'échéance, pas avant (tu peux en revanche les revendre à tout moment sur le carnet).",
              "Règlement en USDC : on ne te livre pas l'ETH ou le BTC, on te verse la différence entre le prix du marché et le strike.",
              "Prix de règlement : la moyenne du prix sur les 30 minutes qui précèdent l'échéance (un TWAP), pour qu'il soit plus difficile de manipuler le prix à l'instant décisif.",
              "Échéances jusqu'à 400 jours.",
            ],
          },
          {
            type: "p",
            texte:
              "Pour un petit ordre, tu passes par le carnet. Pour un gros ordre, tu peux faire une demande de cotation (RFQ) : plusieurs market makers te proposent un prix, sans que ton ordre traverse le carnet et fasse bouger les prix affichés.",
          },
          {
            type: "p",
            texte:
              "Cette liquidité est en partie subventionnée. Les market makers reçoivent des remises de frais et des jetons DRV, et 50 000 DRV sont distribués chaque semaine aux traders en incitations. C'est courant au lancement d'un marché d'options, mais cela veut dire que la profondeur du carnet dépend aujourd'hui aussi de ces aides. Depuis le 9 octobre 2025, un market maker institutionnel, FalconX, cote aussi sur la plateforme, en gardant ses propres garanties hors chaîne.",
          },
        ],
      },
      {
        titre: "La marge : bloquer moins pour vendre des options",
        blocs: [
          {
            type: "p",
            texte:
              "Acheter une option se paie comptant : seule la prime est en jeu, aucune garantie n'est demandée. La question de la garantie concerne le vendeur, qui devra peut-être payer l'acheteur à l'échéance.",
          },
          {
            type: "def",
            terme: "Marge",
            texte:
              "La garantie que tu dois bloquer quand tu prends une position qui peut te faire perdre plus que ta mise, par exemple quand tu vends une option. Si elle ne suffit plus, ta position est liquidée (fermée de force).",
          },
          {
            type: "st",
            texte: "Pourquoi c'était le point bloquant",
          },
          {
            type: "p",
            texte:
              "Les premières plateformes d'options en DeFi demandaient de bloquer toute la perte possible. Exemple, en chiffres d'illustration : tu vends un call ETH de strike 3 300 $ pour 100 $ de prime, et tu dois bloquer 1 ETH (3 000 $) en garantie. Tu gagnes 100 $ pour 3 000 $ immobilisés, soit environ 3,3 % sur le mois (100 ÷ 3 000), en acceptant une grosse perte si l'ETH s'envole. Ce rapport n'attire pas les professionnels.",
          },
          {
            type: "st",
            texte: "Une position couverte coûte beaucoup moins cher",
          },
          {
            type: "p",
            texte:
              "Exemple : tu vends un put ETH de strike 2 700 $ et tu achètes un put de strike 2 500 $ pour te couvrir. Quoi qu'il arrive, ta perte maximale est de 200 $ (2 700 − 2 500). Derive propose deux modes de calcul :",
          },
          {
            type: "liste",
            items: [
              "en mode standard (par défaut), chaque position est évaluée seule, sauf les spreads de même échéance, dont la marge est compensée : notre spread est donc déjà reconnu, et tu bloques environ 200 $ au lieu de 2 700 $ ;",
              "en mode portefeuille (à activer), le moteur va plus loin : il compense des combinaisons plus complexes, des échéances différentes et, pour les traders éligibles, des positions ETH et BTC entre elles.",
            ],
          },
          {
            type: "st",
            texte: "Vendre sans couverture",
          },
          {
            type: "p",
            texte:
              "Si tu vends une option sans couverture, le moteur ne bloque pas la perte maximale (illimitée pour un call vendu). Il bloque la perte qu'entraînerait un mouvement brutal mais plausible ; Derive ne publie pas le niveau exact de ce choc.",
          },
          {
            type: "p",
            texte:
              "Ce montant est recalculé en continu. Si le prix va contre toi, on te demande d'ajouter de la garantie ; faute de quoi ta position est liquidée avant que la perte ne dépasse ton dépôt. Le prix ne passe pas de 3 000 $ à 6 000 $ d'un coup : il traverse les niveaux intermédiaires, et la liquidation intervient en chemin.",
          },
          {
            type: "st",
            texte: "Et si la liquidation ne suffit pas ?",
          },
          {
            type: "p",
            texte:
              "Si le prix saute plus vite que la liquidation, l'acheteur est payé dans cet ordre :",
          },
          {
            type: "liste",
            items: [
              "d'abord par le compte du vendeur ;",
              "si ce compte est vide, par le fonds de sécurité du compartiment concerné ;",
              "si ce fonds est épuisé, par une perte répartie entre tous les comptes du compartiment (on parle de perte socialisée).",
            ],
          },
          {
            type: "def",
            terme: "Fonds de sécurité",
            texte:
              "Une réserve alimentée par une part des frais et des intérêts, qui paie l'acheteur quand le compte d'un vendeur liquidé ne suffit pas. Chaque compartiment de Derive a le sien.",
          },
          {
            type: "p",
            texte:
              "Si tu as acheté une option et que ton vendeur est liquidé, ton option n'est pas annulée : un liquidateur reprend la position du vendeur, et tu gardes ton contrat. Ton seul risque de contrepartie, c'est le troisième niveau, la perte socialisée.",
          },
          {
            type: "st",
            texte: "ETH et BTC : ce que change la V3",
          },
          {
            type: "p",
            texte:
              "Selon l'annonce de la V3, des positions ETH et BTC qui se couvrent réduisent la garantie demandée. Exemple : tu as vendu un put BTC (tu perds si le BTC baisse) et acheté un put ETH (tu gagnes si l'ETH baisse) ; comme les deux baissent souvent ensemble, le moteur compte l'un contre l'autre. Cette possibilité est réservée aux traders éligibles, dont Derive n'a pas publié les critères.",
          },
        ],
      },
      {
        titre: "Des compartiments de risque séparés",
        blocs: [
          {
            type: "p",
            texte:
              "En V2, tous les actifs partageaient une seule réserve de risque : ajouter une petite crypto volatile exposait tous les utilisateurs. En V3, chaque actif appartient à un seul compartiment (Derive parle d'« univers »), qui a ses propres marchés, ses règles de marge, son fonds de sécurité et ses plafonds. Quatre compartiments existaient au lancement : BTC et ETH, HYPE, les autres cryptos, et l'or tokenisé. Les marchés les plus risqués sont ainsi tenus à part, et les nouveaux marchés sont cotés par étapes.",
          },
          {
            type: "p",
            texte:
              "Exemple : tu as 100 de capital, 60 dans le compartiment BTC/ETH et 40 dans le compartiment HYPE. Si ta position HYPE perd 50, ses 40 de garantie ne suffisent pas, et tes 60 du compartiment BTC/ETH ne viennent pas la renflouer : elle est liquidée. À l'inverse, si d'autres traders font faillite dans le compartiment HYPE, les pertes socialisées restent dans ce compartiment : tes 60 n'en paient rien.",
          },
          {
            type: "p",
            texte:
              "Dit simplement : tu dois répartir ton capital entre compartiments, mais une crise sur une petite crypto ne contamine pas le reste.",
          },
        ],
      },
      {
        titre: "Ce que tu peux y placer, et qui te paie",
        blocs: [
          {
            type: "tableau",
            entetes: ["Placement", "Qui te paie", "Durable ?", "Ce que tu risques"],
            lignes: [
              [
                "Prêter (USDC, ETH, WBTC, HYPE)",
                "Les traders qui empruntent ; 20 % des intérêts vont au fonds de sécurité (100 % s'il est vide)",
                "Oui, tant que la demande d'emprunt existe",
                "Retrait bloqué temporairement si presque tout est emprunté ; perte socialisée en dernier recours",
              ],
              [
                "Déposer dans un vault qui vend des options",
                "Les acheteurs d'options, via les primes, moins les frais du gérant",
                "Dépend du prix auquel le vault vend",
                "Une grosse perte lors d'un mouvement brutal",
              ],
              [
                "Vendre toi-même des options",
                "Les acheteurs d'options, via les primes",
                "Oui, c'est un vrai service (l'assurance)",
                "Idem, plus la liquidation si tu ne surveilles pas ta marge",
              ],
              [
                "Staker du DRV",
                "Des DRV nouvellement créés (100 000 par semaine pour les stakers)",
                "Non : c'est de l'émission de jetons",
                "La baisse du DRV, qui réduit la valeur de ce que tu touches",
              ],
            ],
          },
          {
            type: "p",
            texte:
              "Nous n'affichons pas de taux ici : la V3 est trop récente pour qu'un taux de prêt ou de vault soit suivi de façon fiable. Les dépôts totaux, eux, sont mis à jour en direct en haut de cette page.",
          },
          {
            type: "def",
            terme: "Taux d'utilisation",
            texte:
              "La part des fonds prêtés qui est effectivement empruntée. Quand elle approche 100 %, il ne reste presque rien dans la réserve pour les retraits des prêteurs : le taux d'intérêt monte alors fortement pour pousser les emprunteurs à rembourser.",
          },
          {
            type: "st",
            texte: "Les vaults : ce qu'il faut regarder avant de déposer",
          },
          {
            type: "p",
            texte:
              "Depuis la V3, n'importe qui peut créer un vault sans écrire de code. Les règles imposées au créateur (on parle de curateur) :",
          },
          {
            type: "liste",
            items: [
              "création : 500 $ de frais ;",
              "dépôt et part gardée : 10 000 $ déposés au départ, puis le plus élevé de 10 000 $ ou 1 % de la valeur du vault à garder dedans, pour qu'il ait son propre argent en jeu ;",
              "frais maximum : 3 % par an de frais de gestion, et jusqu'à 50 % des gains réalisés au-delà du plus haut historique du vault ;",
              "paramètres figés : les conditions économiques ne peuvent plus être modifiées après la création.",
            ],
          },
          {
            type: "p",
            texte:
              "Exemple, en chiffres d'illustration : tu déposes 1 ETH à 3 000 $ dans un vault qui vend chaque mois un call de strike 3 300 $ pour 100 $. Si l'ETH reste sous 3 300 $, tu encaisses 100 $, soit environ 3 % sur le mois avant frais. S'il monte à 4 800 $, le vault verse 1 500 $ à l'acheteur (4 800 − 3 300) : tu gardes ton ETH, mais tu as cédé 1 500 $ de hausse contre 100 $ de prime. Dit simplement : ce type de vault échange la grosse hausse contre un petit revenu régulier.",
          },
          {
            type: "note",
            ton: "alerte",
            titre: "Ce que l'histoire des vaults d'options enseigne",
            texte:
              "Entre 2021 et 2023, plusieurs protocoles (Ribbon, Friktion, Dopex) ont proposé des vaults qui vendaient des options chaque semaine. Plus les dépôts affluaient, plus il y avait de vendeurs pour peu d'acheteurs : les primes ont baissé, alors que le risque de perte, lui, restait entier. Friktion a fermé, les autres se sont transformés. Avant de déposer, regarde donc à quel prix la stratégie vend, depuis combien de temps elle tourne et comment elle a traversé une forte hausse ou une forte baisse.",
          },
        ],
      },
      {
        titre: "Les builder codes : d'autres applis pour vendre les options",
        blocs: [
          {
            type: "p",
            texte:
              "Une option demande de choisir un strike, une échéance, et de comprendre pourquoi on peut avoir raison sur la direction et perdre quand même (si la hausse arrive après l'échéance, ou ne couvre pas la prime). C'est trop pour la plupart des utilisateurs. Derive mise donc sur d'autres applis pour rendre ses options simples à utiliser, à l'image de ce qu'Hyperliquid a fait avec les perps (voir notre fiche Hyperliquid).",
          },
          {
            type: "def",
            terme: "Builder code",
            texte:
              "Un identifiant qu'une appli tierce joint aux ordres qu'elle envoie à une plateforme. Il permet à l'appli d'ajouter ses propres frais par-dessus ceux de la plateforme, et de les toucher.",
          },
          {
            type: "p",
            texte: "Chez Derive, le dispositif existe depuis février 2026 :",
          },
          {
            type: "liste",
            items: [
              "l'appli fixe un supplément de frais, ajouté aux frais de Derive ;",
              "ce supplément lui est versé toutes les quatre semaines, sur son wallet ;",
              "aucune exclusivité : l'activation passe par une inscription au programme API Broker de Derive, sans volume minimum, mais soumise à examen ;",
              "ce programme reverse en plus aux applis de 10 à 50 % des frais de matching nets, selon leur volume et le DRV staké qu'elles détiennent.",
            ],
          },
          {
            type: "p",
            texte:
              "La V3 facilite le travail de ces applis : le sous-compte se crée au premier dépôt, le dépôt peut se faire sans gas, et des clés de session limitées (trading seul, gestion de vaults, ou lecture seule) permettent de déléguer une partie des droits sans donner accès à tout le compte. Concrètement, un wallet pourrait proposer un bouton « Protéger mon ETH contre une baisse de plus de 10 % » qui, en coulisse, achète un put sur Derive.",
          },
          {
            type: "p",
            texte:
              "Fin octobre 2026, l'adoption reste embryonnaire : aucun intégrateur d'ampleur n'est cité par Derive à ce jour.",
          },
        ],
      },
      {
        titre: "Le jeton DRV : rachats et émissions proches de l'équilibre",
        blocs: [
          {
            type: "p",
            texte:
              "Le DRV sert à voter sur les propositions de gouvernance (les DIP), une fois staké en stDRV. Il donne aussi droit à des récompenses de staking et améliore la part de frais reversée aux applis du programme API Broker. Nos sources ne détaillent ni la distribution initiale ni le calendrier de déblocage des jetons de l'équipe et des investisseurs.",
          },
          {
            type: "p",
            texte: "Deux flux jouent en sens contraire sur la quantité de DRV en circulation.",
          },
          {
            type: "st",
            texte: "Les rachats (buybacks)",
          },
          {
            type: "p",
            texte:
              "Une part des frais encaissés (frais de protocole, de matching, de liquidation, et écart entre intérêts payés et reçus) sert à racheter du DRV sur le marché. Cette part a augmenté deux fois en 2026 :",
          },
          {
            type: "liste",
            items: [
              "avril 2026 (DIP 313) : de 25 % à 35 % ;",
              "octobre 2026 (DIP 324, proposée le 24 septembre) : de 35 % à 50 %, l'autre moitié allant au fonds de sécurité (appelé « fonds d'assurance » dans la proposition). Selon la presse crypto, elle a été adoptée début octobre avec effet au 14 octobre ; Derive n'affiche pas le résultat.",
            ],
          },
          {
            type: "p",
            texte: "Au total, environ 28 millions de DRV avaient été rachetés début octobre 2026.",
          },
          {
            type: "st",
            texte: "Les émissions",
          },
          {
            type: "p",
            texte:
              "En face, 150 000 DRV sont créés chaque semaine : 100 000 pour les stakers, 50 000 en incitations au trading. Et en septembre 2025, la gouvernance a voté la création de 500 millions de DRV supplémentaires (DIP 303, « Strategic Mint for Institutional Expansion »), soit 50 % d'offre en plus (sur 1 milliard). Sur ces 500 millions, 230 millions (46 %) sont destinés aux contributeurs, sur quatre ans ; le reste est qualifié de « stratégique ». Le résultat du vote n'est pas affiché, mais au 28 octobre l'écart entre la capitalisation (551 M$) et la valorisation totale diluée, qui compte tous les jetons existants (827 M$), indique que la création a bien eu lieu.",
          },
          {
            type: "st",
            texte: "Le calcul, au 28 octobre 2026",
          },
          {
            type: "liste",
            items: [
              "Revenus de Derive, tous produits : environ 417 000 $ sur 30 jours (DeFiLlama ; frais bruts d'environ 507 000 $). À 50 %, cela fait environ 210 000 $ de rachats par mois.",
              "Émissions : environ 650 000 DRV par mois (150 000 × 52 semaines ÷ 12 mois), soit environ 241 000 $ au cours de 0,37 $.",
            ],
          },
          {
            type: "p",
            texte:
              "Dit simplement : les rachats couvrent presque les émissions. Il reste environ 30 000 $ de DRV nouveaux nets par mois (241 000 − 210 000). C'est la hausse à 50 % qui a rapproché l'équilibre : à 35 %, les rachats feraient environ 146 000 $, soit environ 95 000 $ d'émissions nettes. Pour que les rachats compensent entièrement les émissions au cours actuel, il faudrait environ 480 000 $ de revenus par mois (241 000 ÷ 50 %). Et ce calcul n'inclut pas la réserve de 500 millions de DRV : sa distribution pèsera sur la dilution réelle.",
          },
          {
            type: "note",
            ton: "info",
            titre: "Qui décide",
            texte:
              "Les détenteurs de stDRV votent les propositions, mais le contrôle des contrats sur Ethereum n'est pas encore entre leurs mains : il reste à un multisig de la filiale de la fondation (voir « Les risques »). Le transfert à la gouvernance est renvoyé à une proposition ultérieure.",
          },
        ],
      },
      {
        titre: "Les risques",
        blocs: [
          {
            type: "p",
            texte:
              "Niveau proposé : 🟡 Moyen. Si tu achètes des options, ta perte liée au prix se limite à la prime ; si tu en vends, ou passes par un vault qui en vend, le risque monte nettement. Dans tous les cas, tu dépends de la plateforme. Tes fonds sont sur Ethereum ; mais qui peut trader, dans quel ordre passent les ordres et quelles règles s'appliquent, cela dépend encore de l'équipe.",
          },
          {
            type: "st",
            texte: "1. Selon ton usage",
          },
          {
            type: "liste",
            items: [
              "Si tu as acheté une option : ton seul risque de contrepartie est la perte socialisée, quand un vendeur liquidé et le fonds de sécurité ne suffisent pas à te payer.",
              "Si tu vends des options : ta position peut être liquidée si tu ne complètes pas ta garantie quand le prix va contre toi.",
              "Si tu déposes dans un vault : tu dépends en plus des choix du curateur, sur une stratégie qui n'a que quelques semaines d'historique.",
              "Si tu prêtes : tes retraits peuvent être bloqués temporairement quand le taux d'utilisation est élevé.",
              "Si tu détiens du DRV : les émissions dépassent encore légèrement les rachats, et une réserve de 500 millions de DRV peut encore être distribuée.",
            ],
          },
          {
            type: "st",
            texte: "2. La plateforme : trois scénarios",
          },
          {
            type: "liste",
            items: [
              "Tu peux être exclu du carnet : c'est Lyra Technologies qui décide qui trade. Tes fonds, eux, restent sur Ethereum.",
              "Ton retrait peut ne pas être traité : le séquenceur peut ignorer une transaction, mais pas en inventer une (voir la sortie de secours, point 3).",
              "Les règles peuvent changer : le multisig de la filiale de la fondation peut remplacer la clé de vérification.",
            ],
          },
          {
            type: "def",
            terme: "Multisig",
            texte:
              "Un wallet qui exige plusieurs signatures pour agir, par exemple 3 sur 5. Plus sûr qu'une clé unique, mais c'est toujours un petit groupe de personnes qui décide.",
          },
          {
            type: "p",
            texte:
              "Le contrat sur Ethereum n'accepte une preuve zk que si elle correspond à une « clé de vérification », qui encode les règles du programme. Celui qui peut remplacer cette clé peut donc changer les règles, et la preuve ne protège plus de rien face à lui. Le multisig peut aussi remplacer l'état enregistré, c'est-à-dire les soldes de référence.",
          },
          {
            type: "p",
            texte:
              "Normalement, une mise à jour des contrats doit attendre un délai avant de s'appliquer, ce qui laisse aux utilisateurs le temps de retirer leurs fonds s'ils ne sont pas d'accord. Chez Derive, ce délai peut être contourné si 6 des 8 signataires du multisig sont d'accord. Rien n'indique une intention malveillante, mais tu fais confiance à l'équipe, pas seulement au code.",
          },
          {
            type: "st",
            texte: "3. La sortie de secours (escape hatch)",
          },
          {
            type: "p",
            texte: "Si le séquenceur ignore tes transactions, la V3 prévoit une sortie en trois temps :",
          },
          {
            type: "liste",
            items: [
              "tu déposes ta demande (un retrait, par exemple) directement dans le contrat sur Ethereum ; elle entre dans une file que le séquenceur doit traiter dans l'ordre ;",
              "si elle reste sans traitement au-delà d'un délai prévu par le protocole (initialement deux semaines, selon la proposition de lancement de la V3) ;",
              "n'importe qui peut prendre le relais du séquenceur : relire les données publiées sur Celestia, recalculer les soldes, produire la preuve et faire passer les retraits.",
            ],
          },
          {
            type: "p",
            texte:
              "Deux limites. Tu restes bloqué pendant tout ce délai, ce qui peut coûter cher si le marché bouge fort. Et produire une preuve demande une vraie compétence technique : en pratique, la sortie de secours dépend de quelqu'un qui sait le faire. Le multisig, lui, peut toujours mettre à jour les contrats pendant ce temps.",
          },
          {
            type: "st",
            texte: "4. L'infrastructure",
          },
          {
            type: "p",
            texte:
              "Les données nécessaires pour reconstruire les soldes sont publiées sur Celestia, pas sur Ethereum. C'est moins cher, mais ta capacité de sortie dépend aussi de Celestia. Techniquement, cette architecture se rapproche d'un validium (un système prouvé sur Ethereum mais dont les données sont stockées ailleurs) plutôt que d'un rollup.",
          },
          {
            type: "p",
            texte:
              "L2Beat n'a pas encore évalué la V3 ; l'ancienne chaîne n'atteignait même pas le Stage 0 (le premier niveau de son échelle, qui mesure si les utilisateurs peuvent sortir sans dépendre de l'équipe).",
          },
          {
            type: "def",
            terme: "Prouveur",
            texte:
              "Le serveur qui fabrique les preuves zk. S'il tombe en panne, plus aucun lot n'est validé sur Ethereum, et les soldes ne bougent plus tant qu'il n'est pas relancé.",
          },
          {
            type: "p",
            texte:
              "Le moteur de marge peut aussi se tromper. Supposons que la garantie d'un vendeur soit calibrée pour encaisser une chute de 15 %. Si l'ETH perd 25 % d'un coup, la liquidation arrive trop tard : la garantie ne couvre pas la perte, et le reste remonte au fonds de sécurité, puis aux autres comptes du compartiment. La preuve zk, elle, reste valide : le moteur a bien appliqué ses règles, ce sont les règles qui étaient trop justes.",
          },
          {
            type: "st",
            texte: "5. Les dépendances",
          },
          {
            type: "liste",
            items: [
              "Celestia, pour les données (voir le point 4).",
              "L'infrastructure de preuve (le zkVM et son prouveur).",
              "L'USDC, monnaie de règlement de tous les compartiments.",
            ],
          },
          {
            type: "st",
            texte: "6. Le cadre juridique",
          },
          {
            type: "p",
            texte:
              "Une société identifiée filtre l'accès au carnet d'ordres et exclut déjà les résidents américains : c'est un point d'entrée simple pour un régulateur qui voudrait imposer des restrictions. La réflexion en cours sur les marchés régulés américains (DIP 329) pourrait faire évoluer ce cadre.",
          },
          {
            type: "p",
            texte:
              "La V3 n'a que quelques semaines de fonctionnement. Et comme pour tout protocole DeFi, le risque de hack n'est jamais à exclure.",
          },
          {
            type: "st",
            texte: "Ce qui rassure",
          },
          {
            type: "liste",
            items: [
              "Les fonds sont gardés sur Ethereum, et non plus sur une petite chaîne propre à Derive.",
              "La preuve zk empêche l'opérateur de fabriquer des ordres ou d'ignorer les règles de marge.",
              "Les compartiments séparés limitent la contagion d'une crise sur une petite crypto.",
              "La migration vers la V3 s'est faite en une nuit, sans incident signalé.",
              "La même équipe tient la plateforme depuis 2021, à travers quatre architectures, sans avoir quitté le marché des options.",
            ],
          },
          {
            type: "note",
            ton: "avis",
            titre: "Pourquoi « moyen »",
            texte:
              "Si tu achètes des options sur Derive, ton risque se limite pour l'essentiel à la prime et à la confiance dans la plateforme. Si tu vends des options ou passes par un vault, le niveau monte nettement. Nous ne le classons pas en risque faible parce que l'équipe peut encore changer les règles via un multisig, que la sortie de secours n'intervient qu'après un délai, initialement de deux semaines, et que la V3 n'a pas d'historique. Nous ne le classons pas en risque élevé parce que les fonds sont sur Ethereum, que le moteur de risque est sérieux, et que les compartiments limitent la contagion.",
          },
        ],
      },
      {
        titre: "Pourquoi ça compte",
        blocs: [
          {
            type: "p",
            texte:
              "Au 28 octobre 2026, Derive concentre 81,8 % du volume d'options DeFi sur 30 jours (environ 3,2 Md$, dont environ 2,1 Md$ depuis la V3) et 90,8 % des primes payées, selon DeFiLlama.",
          },
          {
            type: "p",
            texte:
              "Ses revenus, environ 417 000 $ sur 30 jours à la même date (tous produits), couvrent désormais presque les émissions de DRV : il manque environ 30 000 $ par mois. Sa croissance dépend désormais des applis qui le rendront simple.",
          },
          {
            type: "st",
            texte: "Ce qu'on surveillera",
          },
          {
            type: "liste",
            items: [
              "les rachats mensuels de DRV face aux émissions ;",
              "la part du volume qui passe par des applis tierces (builder codes) ;",
              "le transfert du contrôle des contrats à la gouvernance, et l'évaluation de la V3 par L2Beat.",
            ],
          },
          {
            type: "note",
            ton: "avis",
            titre: "Notre lecture",
            texte:
              "Pour un lecteur qui comprend les options, c'est aujourd'hui l'endroit le plus liquide pour s'en servir en gardant la main sur ses fonds, à condition d'accepter la confiance dans l'équipe. Pour le détenteur de DRV, la hausse des rachats à 50 % a presque comblé l'écart avec les émissions ; reste la réserve de 500 millions, dont l'usage décidera de la dilution réelle.",
          },
        ],
      },
    ],
    pointsCles: [
      "Derive (ex-Lyra, 2021) est la principale plateforme d'options de la DeFi : carnet d'ordres, market makers professionnels, règlement en USDC.",
      "Depuis la V3 (7 octobre 2026), les fonds sont gardés sur Ethereum ; les ordres sont exécutés hors chaîne, puis prouvés sur Ethereum par une preuve zk.",
      "Le calcul de marge réduit fortement la garantie à bloquer pour vendre des options couvertes, y compris entre ETH et BTC pour les traders éligibles (mode portefeuille) ; les compartiments séparés isolent les petites cryptos.",
      "Acheter une option limite ta perte à la prime ; la vendre, ou passer par un vault qui vend, expose à de grosses pertes.",
      "Le multisig de la filiale de la fondation peut changer les règles, et la sortie de secours n'intervient qu'après un délai, initialement de deux semaines : tu fais confiance à l'équipe.",
      "Le DRV est proche de l'équilibre : fin octobre 2026, les rachats (environ 210 000 $ par mois) couvrent presque les émissions (environ 241 000 $), hors réserve de 500 millions.",
    ],
    verdict:
      "Risque proposé : MOYEN. Derive est la plateforme d'options la plus aboutie de la DeFi : un moteur de marge sérieux, des compartiments séparés et des fonds revenus sur Ethereum. Côté contrôle, l'équipe garde la main sur l'accès au carnet, l'ordre de passage des ordres et les règles, même si les fonds sont sur Ethereum. Pour acheter des options en gardant la main sur ses fonds, c'est aujourd'hui l'option la plus liquide ; pour les vaults, mieux vaut attendre un historique. Côté jeton, rachats et émissions sont presque à l'équilibre, mais la réserve de 500 millions de DRV pèsera sur la dilution à venir. Ce contenu n'est pas un conseil en investissement.",
    sources: [
      { label: "Blog Derive — annonce de la V3", href: "https://insights.derive.xyz/v3/" },
      { label: "Blog Derive — les builder codes (10 février 2026)" },
      { label: "Forum Derive — propositions DIP 303, 309, 313, 322 (lancement de la V3), 324 et 329", href: "https://forums.derive.xyz" },
      { label: "Documentation Derive — marge standard et vaults", href: "https://help.derive.xyz/en/articles/9119748-standard-margin" },
      { label: "DeFiLlama — Derive V3 options (données du 28 octobre 2026)", href: "https://defillama.com/protocol/derive-v3-options" },
      { label: "L2Beat — page Derive (consultée le 28 octobre 2026)", href: "https://l2beat.com" },
      { label: "CoinInsider — le lancement de Derive V3 (9 octobre 2026)" },
      { label: "TokenPost et CryptoBriefing — couverture de la V3 (octobre 2026)" },
      { label: "OAK Research — série sur les options et Derive (octobre 2026 ; série favorable au protocole, faits recoupés quand c'était possible)" },
    ],
    iaGenere: true,
    sourceNumero: 8,
  },
  // Pendle — ajouté avec le numéro 9 (drafts/issue-09/fiche-pendle.ts, vérificateur + fact-check 4/11)
  {
    slug: "pendle",
    nom: "Pendle (PENDLE)",
    type: "Marché de taux : rendement fixe, pari sur le rendement, looping",
    chains:
      "Ethereum surtout, et une douzaine d'autres blockchains (Arbitrum, Base, BNB Chain, Hyperliquid…), selon DeFiLlama",
    resume:
      "Pendle découpe un actif à rendement (un dollar à rendement comme le sUSDe, de l'ETH staké comme le wstETH) en deux jetons qui s'échangent séparément : le PT, qui te rend l'actif à une date fixée et t'offre un rendement fixe, et le YT, qui touche le rendement variable d'ici là. C'est le principal endroit de la DeFi où l'on peut fixer un taux. Depuis octobre 2026, PendleLoop permet aussi de prendre du levier en une transaction, en empruntant sur Morpho et Aave, y compris sur des actions tokenisées.",
    live: { defillamaSlug: "pendle", pools: [] },
    enBref: [
      { label: "Type", valeur: "Marché de taux décentralisé : découpage du rendement (PT / YT) et AMM dédié" },
      { label: "Lancement", valeur: "Pendle V1 en juin 2021, V2 en novembre 2022 ; PendleLoop le 22 octobre 2026" },
      { label: "Équipe", valeur: "Publique, menée par TN Lee (ex-Kyber Network) et Vu Nguyen (ex-DigixDAO) ; tour d'amorçage de 3,7 M$ en 2021 (Mechanism Capital, The Spartan Group…), puis Binance Labs en 2023" },
      { label: "Accès", valeur: "Sans autorisation : n'importe qui peut acheter, vendre ou fournir de la liquidité" },
      { label: "Produits", valeur: "Marchés PT / YT, liquidité (LP), PendleLoop (looping), Boros (funding rates)" },
      { label: "Jeton", valeur: "PENDLE ; sa version stakée, le sPENDLE, remplace le vePENDLE depuis janvier 2026" },
      { label: "Audits", valeur: "Ackee, Dedaub, Dingbats, ChainSecurity, Spearbit, WatchPug et plusieurs auditeurs indépendants ; code public" },
      { label: "Emprunt (PendleLoop)", valeur: "Pendle ne prête rien : l'emprunt passe par Morpho et Aave" },
    ],
    score: { mention: "MOYEN", sens: "moyen" },
    sections: [
      {
        titre: "Le principe",
        blocs: [
          {
            type: "p",
            texte:
              "Pendle sépare la possession d'un actif à rendement de son rendement, comme le droit français sépare la nue-propriété de l'usufruit. Le nu-propriétaire récupère le bien à une date donnée ; l'usufruitier en touche les revenus d'ici là. Sur Pendle, ces deux droits deviennent deux jetons, qui s'achètent et se vendent séparément.",
          },
          {
            type: "def",
            terme: "PT (Principal Token)",
            texte:
              "La « nue-propriété » : un jeton qui te rend l'actif de départ à une date fixée, l'échéance. Il s'achète moins cher que l'actif aujourd'hui ; l'écart entre son prix d'achat et ce qu'il te rend à l'échéance, c'est ton rendement fixe.",
          },
          {
            type: "def",
            terme: "YT (Yield Token)",
            texte:
              "L'« usufruit » : un jeton qui touche tout le rendement produit par l'actif jusqu'à l'échéance. À l'échéance, il ne vaut plus rien : il ne reste que le rendement qu'il a encaissé.",
          },
          {
            type: "p",
            texte:
              "La règle qui tient tout le reste : un PT plus un YT redonnent toujours une unité de l'actif de départ. Le prix du YT est donc le complément du prix du PT. Si le PT vaut 95 % de l'actif, le YT en vaut 5 %.",
          },
          {
            type: "p",
            texte:
              "Exemple, en chiffres ronds : un PT de dollar à rendement, à échéance dans un an, s'échange à 95 $. Tu l'achètes, tu attends, et à l'échéance il se rachète pour l'équivalent de 100 $. Tu gagnes 5 $ sur 95 $, soit environ 5,3 % (5 ÷ 95), quoi qu'il arrive au rendement réel de l'actif pendant l'année. En face, celui qui a acheté le YT 5 $ touche le rendement réel : si l'actif rapporte 8 % sur l'année, il encaisse 8 $ ; s'il ne rapporte que 3 %, il encaisse 3 $ et perd 2 $.",
          },
          {
            type: "p",
            texte:
              "Dit simplement : le rendement fixe du PT est payé par l'acheteur du YT, qui prend le pari que le rendement réel sera plus élevé que ce que le marché anticipe. Pendle ne crée pas de rendement : il le répartit entre ceux qui veulent un taux connu et ceux qui veulent parier sur le taux.",
          },
          {
            type: "p",
            texte:
              "Ce rendement anticipé s'appelle l'implied APY (le taux implicite). C'est aussi le rendement fixe du PT : environ 5,3 % dans notre exemple. Ramené à l'année, il dépend de la durée restante : le même écart de 5 $ vaut environ 5,3 % par an à un an, et environ 21 % par an à trois mois (5,3 × 4, calcul simplifié).",
          },
        ],
      },
      {
        titre: "Équipe & origine",
        blocs: [
          {
            type: "p",
            texte:
              "Pendle V1 est lancé en juin 2021, après un tour d'amorçage de 3,7 M$ au printemps 2021 auquel participent notamment Mechanism Capital, Crypto.com Capital, HashKey et LedgerPrime (selon DeFiLlama). La V2, celle qui fonctionne aujourd'hui, est en ligne depuis novembre 2022. Binance Labs investit en 2023, puis The Spartan Group, sans montant publié.",
          },
          {
            type: "p",
            texte: "Équipe publique, cofondée notamment par TN Lee, passé par Kyber Network, et Vu Nguyen, ancien directeur technique de DigixDAO.",
          },
          {
            type: "p",
            texte:
              "Le produit s'est étendu par étapes : Boros (un marché pour parier sur les frais de financement des perps, voir plus bas) en août 2025, le sPENDLE en janvier 2026, le PT Looping en bêta en juillet 2026, puis PendleLoop en octobre 2026.",
          },
        ],
      },
      {
        titre: "Comment ça marche",
        blocs: [
          {
            type: "st",
            texte: "1. L'emballage : le SY",
          },
          {
            type: "p",
            texte:
              "Chaque actif à rendement verse son rendement à sa façon : certains augmentent le nombre de jetons, d'autres leur valeur. Pour traiter tout le monde pareil, Pendle commence par emballer l'actif dans un jeton standard, le SY.",
          },
          {
            type: "def",
            terme: "SY (Standardized Yield)",
            texte:
              "Un emballage standard autour d'un actif à rendement (le sUSDe devient SY-sUSDe, par exemple). Il ne change ni la valeur ni le rendement de l'actif : il permet seulement à Pendle de le découper de la même façon, quel que soit l'actif.",
          },
          {
            type: "p",
            texte:
              "Ensuite, 1 SY se découpe en 1 PT et 1 YT, d'une même échéance. Il y a un marché par actif et par échéance : un PT-sUSDe de novembre et un PT-sUSDe de février sont deux marchés différents.",
          },
          {
            type: "note",
            ton: "info",
            titre: "Fixe… dans quelle monnaie ?",
            texte:
              "Le PT te rend l'actif de référence du marché, pas forcément des dollars. Un PT-wstETH te rend de l'ETH : ton rendement est fixe en ETH, mais ta position suit le prix de l'ETH. Seuls les marchés de dollars à rendement donnent un rendement fixe en dollars.",
          },
          {
            type: "st",
            texte: "2. L'AMM : une pool sans YT",
          },
          {
            type: "p",
            texte:
              "PT et YT s'échangent dans un AMM conçu par Pendle. Particularité : cette pool ne contient que du SY et du PT, jamais de YT.",
          },
          {
            type: "def",
            terme: "AMM (automated market maker)",
            texte:
              "Une pool de liquidité où une formule fixe le prix à la place d'un carnet d'ordres. Celle de Pendle est adaptée à des jetons qui convergent vers une valeur connue à une date connue (le PT vers l'actif de départ).",
          },
          {
            type: "p",
            texte:
              "Comment acheter un YT s'il n'y en a pas dans la pool ? Le contrat fabrique ce qui manque, dans la même transaction :",
          },
          {
            type: "liste",
            items: [
              "quand tu achètes un YT, le contrat emprunte du SY à la pool, le découpe en PT + YT, te donne le YT et rend le PT à la pool (ce qui revient à vendre du PT) ;",
              "quand tu vends un YT, le contrat prend du PT dans la pool, le recolle à ton YT pour reformer du SY, et rembourse la pool.",
            ],
          },
          {
            type: "p",
            texte:
              "Dit simplement : chaque achat de YT fait entrer du PT dans la pool, chaque vente de YT en fait sortir. C'est ce qui explique le risque propre aux fournisseurs de liquidité (voir plus bas).",
          },
          {
            type: "st",
            texte: "3. L'échéance : rien n'est reconduit tout seul",
          },
          {
            type: "p",
            texte:
              "Un marché Pendle a une date de fin. À l'échéance, il passe en statut « Matured » et disparaît de la liste des marchés actifs : ce n'est pas un retrait de cotation, c'est sa fin normale. Pour un actif à courte durée (des bons du Trésor, par exemple), un marché peut expirer tous les un à trois mois.",
          },
          {
            type: "liste",
            items: [
              "Rachat (Redeem) : 1 PT se rachète contre l'actif de départ, sans perte liée à la taille de l'ordre, depuis la page du marché échu. Ton rendement fixe est alors encaissé.",
              "Sortie en USDC : Pendle peut aussi te verser directement de l'USDC, mais il revend alors l'actif sur un DEX, au prix du marché, souvent un peu sous sa valeur de rachat chez l'émetteur (qui demande souvent un KYC et un délai).",
              "Roll Over : convertir ton PT échu vers un PT d'une nouvelle échéance. Possible seulement si ce nouveau marché existe : en juin 2026, le marché thBILL de Theo (un jeton adossé à des bons du Trésor américains) est arrivé à échéance sans successeur sur aucune blockchain, et il fallait sortir.",
              "Liquidité : si tu fournis de la liquidité, tu dois retirer toi-même ta position à l'échéance.",
            ],
          },
        ],
      },
      {
        titre: "Les trois façons de s'en servir",
        blocs: [
          {
            type: "tableau",
            entetes: ["Tu achètes…", "Pour…", "Qui te paie", "Ce que tu risques"],
            lignes: [
              [
                "Du PT",
                "Un rendement fixe, connu à l'achat, si tu gardes jusqu'à l'échéance",
                "L'acheteur du YT",
                "Le défaut de l'actif de départ ; une perte si tu revends avant l'échéance après une hausse des taux",
              ],
              [
                "Du YT",
                "Parier que le rendement réel dépassera le taux implicite",
                "L'actif de départ, via son rendement",
                "Toute ta mise si le rendement s'effondre : le YT finit à zéro",
              ],
              [
                "De la liquidité (LP)",
                "Cumuler plusieurs sources de rendement",
                "L'actif de départ, les traders (frais), Pendle (récompenses)",
                "Un rendement moins bon que le PT si les taux baissent ; la baisse du PENDLE versé en récompense",
              ],
            ],
          },
          {
            type: "st",
            texte: "Le PT : un taux fixe",
          },
          {
            type: "p",
            texte:
              "C'est l'usage le plus simple : tu achètes, tu attends l'échéance, tu rachètes. Pas de suivi, pas de surprise sur le taux. Le prix du PT dépend uniquement de l'offre et de la demande : quand beaucoup de monde veut du YT (parce qu'on attend des récompenses ou des funding rates élevés sur l'actif), le PT est bon marché et son rendement fixe est élevé ; dans le cas inverse, il peut être inférieur au rendement actuel de l'actif.",
          },
          {
            type: "def",
            terme: "Funding rate",
            slug: "funding-rate",
            texte:
              "Le paiement régulier échangé entre acheteurs et vendeurs d'un perp pour que son prix reste proche du prix au comptant. Quand il est positif, les acheteurs paient les vendeurs. C'est lui qui fait l'essentiel du rendement du sUSDe.",
          },
          {
            type: "p",
            texte: "Deux nuances :",
          },
          {
            type: "liste",
            items: [
              "Fixe ≠ garanti : le PT te rend l'actif de départ, et si cet actif perd sa valeur (un dollar à rendement qui décroche, par exemple), ton PT la perd avec lui.",
              "Fixe seulement jusqu'à l'échéance : si tu revends avant, tu revends au prix du jour.",
            ],
          },
          {
            type: "p",
            texte:
              "Par exemple, tu as acheté à 95 un PT qui vaudra 100 dans un an. Six mois plus tard, si le marché exige un rendement plus élevé, ton PT peut ne valoir que 96 au lieu des 97,5 attendus.",
          },
          {
            type: "st",
            texte: "Le YT : un pari sur le rendement, avec effet de levier",
          },
          {
            type: "p",
            texte:
              "Avec 5 $ de YT, tu touches le rendement de 100 $ d'actif. Reprenons l'exemple du principe : à 8 % de rendement réel, tes 5 $ en rapportent 8 (+60 %) ; à 3 %, tu récupères 3 $ (−40 %) ; si le rendement tombe à zéro, tu perds tout. Le YT intéresse ceux qui attendent une hausse du rendement : la reprise des funding rates pour le sUSDe, ou une distribution de points, ces programmes de fidélité des protocoles souvent convertis plus tard en jetons, que le YT capte aussi.",
          },
          {
            type: "st",
            texte: "La liquidité (LP) : plusieurs rendements empilés",
          },
          {
            type: "p",
            texte:
              "Fournir de la liquidité revient à détenir un mélange de SY et de PT. Ton rendement additionne :",
          },
          {
            type: "liste",
            items: [
              "le rendement de l'actif, sur la part en SY ;",
              "le rendement fixe, sur la part en PT ;",
              "les frais payés par les traders de PT et de YT ;",
              "des récompenses en PENDLE.",
            ],
          },
          {
            type: "p",
            texte:
              "Le piège : la proportion de SY et de PT change avec les échanges. Si tout le monde vend du YT, parce qu'on anticipe une baisse du rendement ou la fin d'une campagne de récompenses, la pool reçoit du SY et cède du PT. Tu te retrouves chargé en SY, qui ne rapporte plus que son rendement du jour, justement au moment où celui-ci baisse.",
          },
          {
            type: "p",
            texte:
              "Dans ce scénario, tu fais moins bien que si tu avais simplement acheté du PT au départ. À l'inverse, la LP fait mieux que le PT quand le rendement de l'actif reste élevé, que les volumes sont forts et que les récompenses tournent.",
          },
          {
            type: "note",
            ton: "alerte",
            titre: "Lire un rendement affiché sur Pendle",
            texte:
              "Le taux affiché pour une LP additionne des choses de nature différente : du rendement fixe, du rendement variable, des frais, et des récompenses en PENDLE dont la valeur dépend du cours du jeton. Avant de comparer, décompose. Seul le PT gardé jusqu'à l'échéance donne un rendement entièrement prévisible.",
          },
          {
            type: "st",
            texte: "Un usage avancé : le rendement sans le prix",
          },
          {
            type: "p",
            texte:
              "Si tu veux faire travailler 3 000 $ en rendement ETH sans t'exposer aux variations de l'ETH, tu peux acheter pour 3 000 $ de PT-wstETH et ouvrir en face un short (une position qui gagne quand le prix baisse) de 1 ETH sur un perp (un contrat qui suit le prix de l'ETH, sans échéance). Si l'ETH baisse, ce que perd ton PT, le short le gagne, et inversement : il te reste le rendement fixe du PT, plus ou moins le funding rate du short. Neutre au prix, pas sans risque : le funding peut te coûter, et ton short peut être liquidé si l'ETH s'envole et que tu ne complètes pas sa garantie.",
          },
        ],
      },
      {
        titre: "PendleLoop : le levier en une transaction",
        blocs: [
          {
            type: "def",
            terme: "Looping",
            slug: "looping",
            texte:
              "Répéter le cycle « déposer un actif en garantie → emprunter → racheter du même actif → le redéposer ». Chaque tour grossit ta position, donc tes gains comme tes pertes, et rapproche ton seuil de liquidation.",
          },
          {
            type: "p",
            texte:
              "Pendle proposait déjà de boucler des PT (PT Looping). PendleLoop, lancé le 22 octobre 2026, généralise l'idée : ce qui demandait une dizaine de transactions à la main se fait en une seule.",
          },
          {
            type: "p",
            texte:
              "Pendle ne prête rien lui-même : l'emprunt passe par Morpho ou par Aave selon les marchés (Aave V4 sur Base pour les actions). Les frais de PendleLoop sont offerts jusqu'au 31 décembre 2026, sauf pour le looping de PT ; le niveau des frais après cette date n'est pas annoncé.",
          },
          {
            type: "st",
            texte: "Loop to Earn : multiplier un écart de taux",
          },
          {
            type: "p",
            texte:
              "Ici, ta garantie et ta dette sont liées au même actif : du sUSDS (un dollar à rendement) contre de l'USDT emprunté, du wstETH contre de l'ETH emprunté, ou un PT contre l'actif dont il est issu. Tu ne paries pas sur le prix de l'actif : ta garantie prend lentement de la valeur par rapport à ta dette grâce à son rendement, et c'est ce que tu gagnes. On y trouve des PT (rendement fixe jusqu'à l'échéance) et des actifs sans échéance (rendement variable).",
          },
          {
            type: "p",
            texte:
              "Exemple, en chiffres ronds : un actif qui rapporte 10 %, de l'USDC emprunté à 6 %, un levier de 3x. Avec 100 $, tu détiens 300 $ et tu dois 200 $ :",
          },
          {
            type: "liste",
            items: [
              "tu touches 30 $ de rendement (300 × 10 %) ;",
              "tu paies 12 $ d'intérêts (200 × 6 %) ;",
              "il te reste 18 $, soit 18 % par an, au lieu de 10 % sans boucle.",
            ],
          },
          {
            type: "p",
            texte:
              "Si le taux d'emprunt monte à 12 %, il ne te reste que 6 $ (30 − 24) : moins que sans levier. Boucler un PT fige le rendement de ta garantie, mais pas le coût de ta dette, qui reste variable. Le chiffre à surveiller, c'est donc l'écart entre le taux d'emprunt et le rendement.",
          },
          {
            type: "p",
            texte: "Le risque de liquidation dépend de ce que tu boucles :",
          },
          {
            type: "liste",
            items: [
              "un actif sans échéance (sUSDS, wstETH) : il faudrait qu'il décroche par rapport à ta dette (le sUSDS par rapport au dollar, le wstETH par rapport à l'ETH), ce qui n'est pas censé arriver ;",
              "un PT : son prix bouge avec les taux implicites jusqu'à l'échéance. S'ils montent, le PT baisse face à ta dette, et si le marché de prêt évalue ton PT au prix de marché (un TWAP, voir la section sur les oracles), tu peux être liquidé avant l'échéance.",
            ],
          },
          {
            type: "p",
            texte:
              "Exemple, en chiffres d'illustration : tu boucles un PT à 5x, sur un marché de prêt qui liquide à 90 %. Avec 100 $, tu détiens 500 $ de PT et tu dois 400 $ : tu es liquidé quand tes 500 $ tombent à environ 444 $ (400 ÷ 0,9), soit une baisse d'environ 11 %. Ton PT vaut 90 à un an de l'échéance (environ 11 % de rendement fixe). Si le taux implicite monte à 25 %, son prix tombe vers 80 (100 ÷ 1,25), soit −11 % : tu es liquidé, alors qu'à l'échéance ce PT aurait valu 100. Dit simplement : boucler un PT revient aussi à parier que les taux ne s'envoleront pas avant l'échéance.",
          },
          {
            type: "p",
            texte:
              "Les actions n'existent pas en Loop to Earn, puisqu'elles ne versent pas de rendement à multiplier (au mieux un petit dividende).",
          },
          {
            type: "st",
            texte: "Loop to Long/Short : parier sur le prix",
          },
          {
            type: "p",
            texte:
              "Ici, garantie et dette ne sont pas liées au même actif, et il n'y a ni PT ni YT. En long, tu déposes un actif dont le prix varie (ETH, bitcoin, ou une action) et tu empruntes de l'USDC : si le prix monte, ta garantie prend de la valeur alors que ta dette reste la même. En short, tu déposes des dollars et tu empruntes de l'ETH : si l'ETH baisse, ta dette diminue en valeur. Au 4 novembre 2026, le short ne concerne que l'ETH, pas les actions. Le chiffre à surveiller, c'est le prix de liquidation.",
          },
          {
            type: "p",
            texte:
              "La nouveauté, ce sont 7 actions tokenisées émises par Coinbase sur Base, sa blockchain : Tesla, Google, Nvidia, Microsoft, Apple, Amazon et Meta (TSLAc, GOOGLc, etc.). Une action tokenisée est une action représentée par un jeton sur une blockchain. Chaque jeton est émis par une entité de Coinbase et adossé à une action conservée chez Alpaca ; ils sont réservés aux non-Américains, et leur accès depuis la France n'est pas confirmé.",
          },
          {
            type: "def",
            terme: "LLTV (seuil de liquidation)",
            slug: "ltv",
            texte:
              "La part maximale de la valeur de ta garantie que ta dette peut atteindre. Au-delà, la plateforme vend ta garantie pour rembourser le prêteur : c'est la liquidation. Le levier maximum proposé découle directement de ce seuil, fixé par Aave pour chaque action.",
          },
          {
            type: "p",
            texte:
              "Exemple, en base 100, avec le seuil de 65 % fixé pour TSLAc : tu déposes 100 $ et choisis 2x. PendleLoop emprunte 100 $ d'USDC et t'achète 200 $ de TSLAc, placés en garantie. Tu es liquidé quand 65 % de ta garantie ne couvre plus tes 100 $ de dette, soit quand tes 200 $ tombent à environ 154 $ (100 ÷ 0,65) : une baisse d'environ 23 %. Plus tu montes le levier, plus la marge fond :",
          },
          {
            type: "liste",
            items: [
              "à 1,5x : liquidation après une baisse d'environ 49 % ;",
              "à 2x : environ 23 % ;",
              "à 2,6x (le maximum sur Tesla) : environ 5 %.",
            ],
          },
          {
            type: "p",
            texte:
              "Ce que ça coûte : normalement, tenir une action à crédit te coûte le taux d'emprunt de l'USDC, puisque l'action ne rapporte presque rien. Au lancement, des récompenses temporaires (un bonus Pendle sur l'USDC emprunté pour les actions sur Base jusqu'au 6 novembre 2026, et des campagnes de récompenses à durée limitée, versées via Merkl) rendaient la position rémunératrice : nous avons détaillé ce calcul dans notre numéro 9 (lien en bas de page). Le bon calcul, pour une position durable, reste celui sans récompenses.",
          },
        ],
      },
      {
        titre: "Les oracles : qui décide du prix de ta garantie",
        blocs: [
          {
            type: "def",
            terme: "Oracle",
            slug: "oracle",
            texte:
              "Le service qui fournit à un contrat le prix d'un actif. Sur une plateforme de prêt, c'est lui qui dit combien vaut ta garantie, donc à quel moment tu es liquidé.",
          },
          {
            type: "p",
            texte:
              "Dès que tu boucles, ce n'est plus seulement le marché qui compte, mais le prix que l'oracle donne à ta garantie. Sur les marchés de prêt où l'on dépose des PT et des dollars à rendement, il existe trois façons de le calculer, qui ne protègent pas des mêmes choses.",
          },
          {
            type: "st",
            texte: "1. Le prix de marché, lissé",
          },
          {
            type: "p",
            texte:
              "L'oracle lit le prix du PT dans la pool Pendle, en moyenne sur une période (30 minutes, par exemple : c'est un TWAP). Il suit la réalité, mais un décrochage passager de l'actif, une hausse des taux implicites ou une pool peu profonde peuvent déclencher des liquidations.",
          },
          {
            type: "st",
            texte: "2. Une formule",
          },
          {
            type: "p",
            texte:
              "L'oracle ne regarde pas le marché : il fait monter la valeur du PT régulièrement, de son prix de départ vers sa valeur à l'échéance, selon un calendrier fixé d'avance (Pendle le fournit sous le nom de « linear discount oracle »). Tu ne peux pas être liquidé sur un mouvement de marché passager. Mais si l'actif s'effondre vraiment, la formule continue d'afficher une garantie saine.",
          },
          {
            type: "st",
            texte: "3. Un prix fixé en dur",
          },
          {
            type: "p",
            texte:
              "Il faut aussi convertir l'actif de départ en dollars, et certains oracles supposent simplement qu'il vaut toujours 1 $. Exemple relevé en mai 2026 sur Morpho : un marché de PT d'un dollar à rendement récent comptait ce dollar à 1 $ en dur, sans source de prix.",
          },
          {
            type: "note",
            ton: "info",
            titre: "Le cas relevé",
            texte:
              "Il s'agissait du marché PT-apxUSD, le dollar d'Apyx adossé à des actions préférentielles de Strategy. L'apxUSD décroche pourtant ponctuellement au détachement des dividendes (incident du 14 avril 2026).",
          },
          {
            type: "p",
            texte:
              "Dit simplement : les oracles 2 et 3 évitent à l'emprunteur d'être liquidé sur un trou d'air, mais reportent le risque d'effondrement sur les prêteurs. C'est ce qui s'est passé en novembre 2025 : le xUSD de Stream Finance est tombé vers 0,17 $ alors que des marchés le comptaient encore à prix fixe, et les prêteurs de Morpho et d'Euler se sont retrouvés avec des créances impayées (bad debt).",
          },
          {
            type: "st",
            texte: "Les actions : un prix gelé le week-end",
          },
          {
            type: "p",
            texte:
              "Pour les actions tokenisées, l'oracle est fourni par Chainlink et suit le cours de Bourse de l'action (Tesla au Nasdaq), pas le prix du jeton sur un DEX. Il garde son dernier prix le week-end et les jours fériés. Pendle le signale lui-même : son panneau de risque d'oracle pour TSLAc marque la mise à jour des prix « Requires Attention ».",
          },
          {
            type: "p",
            texte:
              "Exemple : tu es à 2,6x sur TSLAc, avec environ 5 % de marge. Tesla termine la semaine à 100 et une mauvaise nouvelle tombe le samedi. Le lundi, l'action rouvre à 94 : le prix de l'oracle saute de 100 à 94 sans passer par les niveaux intermédiaires, et tu es liquidé à la première mise à jour, sans avoir pu ajouter de garantie ni fermer ta position. Le jeton a beau s'échanger le week-end, le prix qui décide de ta liquidation, lui, s'arrête le vendredi soir.",
          },
          {
            type: "st",
            texte: "Avant de boucler : l'onglet « Looping Info »",
          },
          {
            type: "p",
            texte:
              "Sur PendleLoop, chaque marché a un onglet « Looping Info » qui résume son oracle et lui attribue une note de risque. Exemple relevé le 4 novembre 2026 sur le marché apyUSD (la version à rendement de l'apxUSD) / USDC, noté « Oracle Type Risk: High ». Ce n'est pas le marché relevé en mai, et la méthode n'est pas la même : ici, l'apxUSD n'est plus compté à 1 $ en dur, mais d'après les réserves d'Apyx :",
          },
          {
            type: "liste",
            items: [
              "ta garantie est évaluée d'après les réserves d'Apyx, jamais au-dessus de 1 $ : elle peut perdre de la valeur, pas en gagner ;",
              "si le prix de l'USDC cesse d'être mis à jour, Morpho ne s'en aperçoit pas ;",
              "un multisig de 4 signataires sur 6 peut changer la source de ce ratio, sans délai.",
            ],
          },
          {
            type: "def",
            terme: "Multisig",
            texte:
              "Un wallet qui exige plusieurs signatures pour agir, par exemple 4 sur 6. Plus sûr qu'une clé unique, mais c'est toujours un petit groupe de personnes qui décide.",
          },
          {
            type: "note",
            ton: "info",
            titre: "Notre conseil",
            texte:
              "Ouvre cet onglet avant chaque boucle. Demande-toi : est-ce un prix de marché, une formule, ou une valeur fixée en dur ? Qui peut la changer, et avec quel délai ? Et pour les actions : à quelle heure le prix cesse-t-il de bouger (l'écran affiche par exemple « Closes Fri 22:00 ») ?",
          },
        ],
      },
      {
        titre: "Boros : un marché des funding rates",
        blocs: [
          {
            type: "p",
            texte:
              "Lancé en août 2025 sur Arbitrum, Boros applique la logique du YT aux funding rates des perps : tu peux parier sur le funding d'un actif, ou t'en couvrir, avec un levier. Une unité représente le funding versé sur une position de 1 ETH (par exemple) jusqu'à une échéance, sans détenir l'ETH.",
          },
          {
            type: "p",
            texte:
              "Exemple, en chiffres ronds : tu paries que le funding de l'ETH restera au-dessus de 10 % par an d'ici mars, soit environ quatre mois. Sur une position de 1 ETH à 3 000 $, tu t'engages à payer 10 % par an, soit environ 100 $ sur la période (3 000 × 10 % ÷ 3), et tu reçois en échange le funding réellement versé. S'il tourne en moyenne à 16 %, tu reçois environ 160 $ et gagnes 60 $ ; s'il retombe à 4 %, tu ne reçois qu'environ 40 $ et perds 60 $.",
          },
          {
            type: "p",
            texte:
              "Depuis le 15 octobre 2026, des Spread Markets permettent de parier sur l'écart de funding entre deux plateformes de perps, sur le BTC et l'ETH, entre Hyperliquid et Gate.",
          },
          {
            type: "p",
            texte:
              "C'est un produit pour traders : son résultat dépend entièrement du régime de marché, et un funding peut changer de signe en quelques jours.",
          },
        ],
      },
      {
        titre: "Le jeton PENDLE et le sPENDLE",
        blocs: [
          {
            type: "p",
            texte:
              "Pendle gagne de l'argent de deux façons :",
          },
          {
            type: "liste",
            items: [
              "5 % de tout ce que touchent les YT, points compris ;",
              "des frais sur les échanges de PT, dont 20 % vont aux fournisseurs de liquidité.",
            ],
          },
          {
            type: "p",
            texte: "Le reste de ces revenus est réparti ainsi :",
          },
          {
            type: "liste",
            items: [
              "80 % pour racheter du PENDLE ;",
              "10 % pour la trésorerie ;",
              "10 % pour le fonctionnement du protocole.",
            ],
          },
          {
            type: "p",
            texte:
              "Jusqu'en janvier 2026, on bloquait du PENDLE pour une durée choisie (vePENDLE) afin de voter et de toucher une part des revenus. Ce système a été remplacé par le sPENDLE, du PENDLE staké, ouvert le 20 janvier 2026. Selon la documentation officielle :",
          },
          {
            type: "liste",
            items: [
              "le sPENDLE s'obtient 1 pour 1 contre du PENDLE, et se retire après 14 jours, ou tout de suite avec 5 % de frais ;",
              "le PENDLE racheté est redistribué toutes les deux semaines aux détenteurs de sPENDLE « actifs », c'est-à-dire qui ont voté quand une proposition de gouvernance était ouverte ;",
              "les anciens détenteurs de vePENDLE ont reçu, à la photographie des positions (snapshot) du 29 janvier 2026, un solde virtuel de sPENDLE, avec un multiplicateur allant jusqu'à ×4 selon la durée de blocage qu'il leur restait, qui redescend à ×1 à la date de déblocage.",
            ],
          },
          {
            type: "p",
            texte:
              "Les récompenses en PENDLE versées aux fournisseurs de liquidité sont désormais calculées automatiquement pour chaque pool, selon sa liquidité et les frais qu'elle génère (Pendle parle d'Algorithmic Incentive Model). Elles restent de l'émission de jetons : leur valeur suit le cours du PENDLE.",
          },
          {
            type: "p",
            texte:
              "Côté offre, tous les jetons de l'équipe et des investisseurs sont débloqués depuis septembre 2024, selon Pendle : il n'y a plus de calendrier de déblocage qui pèse sur le cours. Les nouveaux jetons viennent uniquement des récompenses et du financement de l'écosystème, avec une inflation de long terme prévue à 2 % par an depuis avril 2026.",
          },
        ],
      },
      {
        titre: "Les risques",
        blocs: [
          {
            type: "p",
            texte:
              "Niveau proposé : 🟡 Moyen pour Pendle dans son usage de base, mais très variable selon ce que tu fais. Un PT gardé jusqu'à l'échéance sur un actif solide est un placement simple. Un YT, une boucle ou un long à levier sur une action est un pari, et nous avons classé ce dernier usage en risque élevé dans notre numéro 9.",
          },
          {
            type: "st",
            texte: "1. Selon ton usage",
          },
          {
            type: "liste",
            items: [
              "Si tu achètes du PT : ton risque principal est celui de l'actif de départ. Le PT ne vaut que ce que vaut l'émetteur du sUSDe, de l'apxUSD ou du wstETH. Pendle te fixe un taux, il ne garantit pas le dollar à rendement que tu as choisi.",
              "Si tu achètes du YT : tu peux perdre toute ta mise si le rendement baisse ou si une campagne de récompenses s'arrête.",
              "Si tu fournis de la liquidité : ton rendement peut finir sous celui du PT (voir plus haut), et une part dépend du cours du PENDLE.",
              "Si tu boucles un actif sans échéance (sUSDS, wstETH) : la liquidation demande que ta garantie décroche par rapport à ta dette, ce qui n'est pas censé arriver. Le risque courant est ailleurs : un taux d'emprunt qui grimpe peut rendre la boucle perdante.",
              "Si tu boucles un PT : en plus du taux d'emprunt, une hausse des taux implicites fait baisser ton PT avant l'échéance. Dans notre exemple à 5x, un PT qui passe de 90 à 80 suffit à te liquider avec un oracle de marché.",
              "Si tu es long à levier sur une action : tu cumules le levier, un prix qui peut baisser et un oracle gelé le week-end. C'est l'usage le plus risqué de la plateforme.",
              "Dès que tu empruntes, l'oracle du marché de prêt décide du moment de ta liquidation : voir la section « Les oracles » plus haut.",
            ],
          },
          {
            type: "st",
            texte: "2. Les dépendances",
          },
          {
            type: "p",
            texte: "Une position PendleLoop empile plusieurs protocoles, et dépend de chacun :",
          },
          {
            type: "liste",
            items: [
              "Pendle, pour le découpage PT / YT et l'exécution de la boucle ;",
              "Morpho ou Aave, qui prêtent et liquident ;",
              "Chainlink, qui fournit le prix des actions ;",
              "Coinbase, dont une entité (Coinbase Onchain SPV, à Abou Dabi) émet les actions tokenisées, et Alpaca, le courtier américain qui conserve les actions réelles ;",
              "l'émetteur de l'actif de départ (Ethena pour le sUSDe, Sky pour le sUSDS, Lido pour le wstETH…).",
            ],
          },
          {
            type: "st",
            texte: "3. Ceux qui peuvent changer les règles",
          },
          {
            type: "p",
            texte:
              "Côté Pendle, les contrats de marché sont immuables : une fois déployés, leurs paramètres ne peuvent plus changer. En revanche, les emballages SY récents sont des contrats modifiables : Pendle peut les mettre à jour (pour accepter un nouvel actif en dépôt, par exemple) et les mettre en pause. Le protocole dispose d'un multisig de gouvernance, dont la documentation ne précise pas la composition.",
          },
          {
            type: "p",
            texte:
              "Côté Aave, des administrateurs et la gouvernance peuvent modifier la source de prix et le seuil de liquidation d'un marché, donc déplacer ton prix de liquidation. Côté oracles, certaines sources de prix peuvent elles aussi être changées sans délai (voir l'exemple apyUSD plus haut).",
          },
          {
            type: "st",
            texte: "4. La liquidité",
          },
          {
            type: "liste",
            items: [
              "Avant l'échéance, tu sors au prix de la pool : sur un petit marché, un gros ordre fait bouger le prix contre toi.",
              "À l'échéance, sortir directement en USDC passe par un DEX, souvent un peu sous la valeur de rachat chez l'émetteur.",
              "Côté PendleLoop actions, le montant d'USDC disponible à l'emprunt par action se compte en centaines de milliers ou en millions de dollars : de quoi servir des particuliers, pas de gros montants.",
            ],
          },
          {
            type: "p",
            texte:
              "Le cœur de Pendle a été audité à plusieurs reprises (Ackee, Dedaub, Dingbats, ChainSecurity, Spearbit, entre autres), et WatchPug a audité le sPENDLE et le PT Looping. PendleLoop, lui, n'a que deux semaines, et nous n'avons pas trouvé d'audit qui lui soit propre. Et comme pour tout protocole DeFi, le risque de hack n'est jamais à exclure.",
          },
          {
            type: "st",
            texte: "Ce qui rassure",
          },
          {
            type: "liste",
            items: [
              "Le mécanisme est simple dans son principe et sans levier caché : 1 PT + 1 YT = 1 SY, et le PT se rachète contre l'actif à l'échéance.",
              "Il n'y a pas de bank run possible sur un PT : il n'a pas besoin de liquidité pour être racheté à l'échéance, seulement de l'actif de départ.",
              "Les contrats de marché sont immuables : une fois déployés, personne ne peut en changer les règles.",
              "En septembre 2024, le piratage de Penpie visait un protocole tiers construit sur Pendle, pas Pendle lui-même ; Pendle avait mis tous ses contrats en pause environ une heure après le début de l'attaque : Penpie a perdu environ 27 M$, et Pendle dit avoir ainsi protégé environ 105 M$ (The Block, 4/09/2024).",
              "Pendle ne prête pas lui-même : PendleLoop s'appuie sur Morpho et Aave, deux des plus gros marchés de prêt de la DeFi.",
              "Pendle affiche lui-même le risque d'oracle de chaque marché de looping, ce que peu d'interfaces font.",
            ],
          },
          {
            type: "note",
            ton: "avis",
            titre: "Pourquoi « moyen »",
            texte:
              "Nous ne le classons pas en risque faible parce que presque tout ce que Pendle propose dépend d'un autre protocole : l'émetteur de l'actif pour le PT, Morpho ou Aave et leurs oracles pour le looping, Coinbase et Chainlink pour les actions. Nous ne le classons pas en risque élevé parce qu'un PT gardé jusqu'à l'échéance sur un actif solide reste l'un des placements les plus lisibles de la DeFi. Le niveau réel dépend donc surtout de ton usage : faible à moyen pour un PT, élevé pour un long à levier sur une action.",
          },
        ],
      },
      {
        titre: "Pourquoi ça compte",
        blocs: [
          {
            type: "p",
            texte:
              "Pendle est le principal endroit de la DeFi où l'on peut fixer un taux. C'est pour ça que les nouveaux dollars à rendement y arrivent presque tous : les PT et YT de l'USDe d'Ethena, des dollars adossés au dividende des actions préférentielles de Strategy (Apyx, par exemple). Un trésorier ou un fonds qui veut un taux connu passe par là.",
          },
          {
            type: "p",
            texte:
              "Ses dépôts ont fortement baissé depuis le pic de 2025 (chiffre en direct en haut de cette page). Une partie de cette baisse est mécanique : chaque marché arrivé à échéance fait sortir des fonds, sans que les utilisateurs quittent forcément la plateforme. La vraie question est de savoir s'ils réinvestissent dans les nouvelles échéances.",
          },
          {
            type: "st",
            texte: "Ce qu'on surveillera",
          },
          {
            type: "liste",
            items: [
              "les frais générés par Pendle, plus parlants que ses dépôts, qui baissent mécaniquement à chaque échéance ;",
              "l'usage de PendleLoop une fois les récompenses de lancement terminées ;",
              "les oracles utilisés par les marchés de prêt sur PT, surtout pour les dollars à rendement récents.",
            ],
          },
          {
            type: "note",
            ton: "avis",
            titre: "Notre lecture",
            texte:
              "Pour un lecteur qui veut un rendement connu, le PT gardé jusqu'à l'échéance est l'usage le plus utile de Pendle, à condition de bien choisir l'actif de départ : le taux fixe ne protège pas de son défaut. PendleLoop rend le levier accessible en un clic, mais n'enlève aucun risque à la boucle faite à la main : regarde l'oracle avant d'emprunter, et ne garde pas une position sur action proche du levier maximum le vendredi soir.",
          },
        ],
      },
    ],
    pointsCles: [
      "Pendle découpe un actif à rendement en PT (l'actif rendu à une date fixée, avec un rendement fixe) et YT (le rendement variable d'ici là), comme la nue-propriété et l'usufruit.",
      "1 PT + 1 YT = 1 unité de l'actif : le rendement fixe du PT est payé par les acheteurs de YT, qui parient sur un rendement plus élevé.",
      "Le taux du PT n'est fixe que si tu le gardes jusqu'à l'échéance, et seulement dans l'unité de l'actif (en ETH pour un PT-wstETH) ; il ne protège pas d'un défaut de l'actif de départ.",
      "Rien n'est reconduit à l'échéance : il faut racheter, sortir ou basculer vers un nouveau marché, s'il existe.",
      "PendleLoop (22 octobre 2026) boucle en une transaction, avec un emprunt sur Morpho ou Aave : Loop to Earn multiplie un écart de taux, Loop to Long/Short parie sur le prix, y compris sur 7 actions tokenisées de Coinbase.",
      "Dès qu'on emprunte, l'oracle décide de tout : prix fixé en dur, formule ou prix d'action gelé le week-end peuvent liquider tard, ou trop vite. L'onglet « Looping Info » le résume pour chaque marché.",
    ],
    verdict:
      "Risque proposé : MOYEN, variable selon l'usage. Pendle est l'outil de référence pour fixer un taux en DeFi, avec un mécanisme simple et sans levier caché ; son risque principal est celui des actifs qu'on y découpe. Pour un rendement connu, un PT gardé jusqu'à l'échéance sur un actif solide est un usage sensé. YT, liquidité et PendleLoop demandent de comprendre d'où vient chaque morceau du rendement affiché et quel oracle évalue ta garantie ; le long à levier sur actions reste un pari risqué, surtout à l'approche du week-end. Ce contenu n'est pas un conseil en investissement.",
    sources: [
      { label: "Documentation Pendle — sécurité, sPENDLE, tokenomics, frais, récompenses, PT Looping, oracles", href: "https://docs.pendle.finance" },
      { label: "GitHub Pendle — rapports d'audit", href: "https://github.com/pendle-finance/pendle-core-v2-public/tree/main/audits" },
      { label: "Application Pendle — PendleLoop et onglet « Looping Info », écrans relevés les 3 et 4 novembre 2026", href: "https://app.pendle.finance" },
      { label: "API Pendle — marchés actifs", href: "https://api-v2.pendle.finance/core/v1/1/markets/active" },
      { label: "CryptoBriefing — lancement de PendleLoop (octobre 2026)" },
      { label: "Crypto Briefing — Boros lance les Spread Markets (octobre 2026)", href: "https://cryptobriefing.com/boros-launches-funding-rate-spread-markets/" },
      { label: "Morpho — oracles des marchés PT-apxUSD et PT-apyUSD (lus sur Ethereum, mai 2026)" },
      { label: "DeFiLlama — Pendle (levées de fonds, chaînes)", href: "https://defillama.com/protocol/pendle" },
    ],
    iaGenere: true,
    sourceNumero: 9,
  }
];

export function getProtocole(slug: string): ProtocoleFiche | undefined {
  return PROTOCOLES.find((p) => p.slug === slug);
}
