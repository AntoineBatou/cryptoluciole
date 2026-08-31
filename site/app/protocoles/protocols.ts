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
              "Ethena Labs est fondée en 2023 par Guy Young, ancien de la finance traditionnelle (fonds d'investissement). L'équipe est identifiée et publique — un point positif, beaucoup de protocoles de cette taille restent anonymes.",
          },
          {
            type: "p",
            texte:
              "L'origine de l'idée est publique elle aussi : Arthur Hayes, fondateur de la plateforme BitMEX, décrivait dès 2023 dans un article de blog un « dollar synthétique » construit exactement de cette façon. Ethena l'a construit, et Hayes en est devenu investisseur via son family office Maelstrom.",
          },
          {
            type: "p",
            texte:
              "Côté financement, environ 156 M$ levés en cinq tours depuis juillet 2023 : Dragonfly Capital en amorçage, puis Brevan Howard Digital, Galaxy Digital, Franklin Templeton et la branche capital-risque de Fidelity. La présence de gérants d'actifs traditionnels de ce calibre est notable — mais attention, une bonne table d'investisseurs ne dit rien de la solidité du mécanisme lui-même.",
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
              "3. Ethena ouvre en face une position de vente à découvert sur contrats perpétuels, du même montant. Les deux jambes s'annulent : la position vaut la même chose en dollars, que le marché monte ou descende.",
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
              "Prenons 1 000 $ d'ether et une vente à découvert de 1 000 $ d'ether. Si l'ether monte de 20 %, l'ether détenu vaut 1 200 $ mais la position à découvert perd 200 $ : total 1 000 $. S'il chute de 30 %, l'ether détenu ne vaut plus que 700 $, mais la position à découvert gagne 300 $ : toujours 1 000 $. La garantie derrière chaque USDe reste stable en dollars — c'est cela qui tient le prix, pas une promesse de rachat par une banque.",
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
              "Le mécanisme du sUSDe mérite qu'on s'y arrête : son prix n'est pas fixe. Un sUSDe vaut de plus en plus d'USDe au fil du temps, à mesure que le rendement s'accumule dedans. C'est le même principe que le stETH de Lido. Ne t'inquiète donc pas si tu vois un sUSDe coté au-dessus de 1 $ : c'est normal, c'est le rendement déjà encaissé.",
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
            type: "p",
            texte:
              "C'est exactement ce qui s'est produit à partir de fin 2025. Les taux de funding se sont comprimés durablement, et la part du basis trade crypto dans la garantie de l'USDe est tombée jusqu'à environ 1 % au cours de l'été 2026 (elle est remontée autour de 13 % fin août, dans le sillage de l'amélioration du sentiment de marché). Autrement dit : la stratégie fondatrice du protocole a cessé, pendant plusieurs mois, d'être l'essentiel de son moteur.",
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
              "Et depuis le 28 août 2026, une nouvelle verticale annoncée : les contrats perpétuels sur ACTIONS. L'intérêt ouvert sur ces marchés a été multiplié par dix depuis mars 2026 pour atteindre ~6,2 Md$ — un gisement de funding neuf, hors du cycle crypto.",
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
              "Le 27 août 2026, une proposition de gouvernance a été mise au vote pour changer cela : activer un « robinet de frais » qui prélèverait entre 5 % et plus de 15 % du revenu brut du protocole, dont 95 % serviraient à racheter de l'ENA sur le marché. Le tout déclenché par paliers de croissance de l'USDe, à partir de 7,5 Md$ en circulation.",
          },
          {
            type: "note",
            ton: "alerte",
            titre: "Le problème de ce calendrier",
            texte:
              "Le premier palier est fixé à 7,5 Md$ d'USDe en circulation, alors que le protocole tourne autour de 4 Md$ fin août 2026. Le déclencheur est donc quelque 50 % au-dessus du niveau actuel — la mesure est annoncée aujourd'hui, mais ne s'appliquerait pas avant une forte reprise. Et surtout : chaque dollar redirigé vers le rachat d'ENA est un dollar qui ne va pas au rendement du sUSDe, or c'est ce rendement qui attire les dépôts nécessaires pour atteindre le palier. Les deux leviers se contrarient.",
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
              "C'est le risque de base. Si les parieurs à la baisse deviennent majoritaires, la position d'Ethena coûte de l'argent au lieu d'en rapporter. Un fonds de réserve, dimensionné à environ 1 % de la taille du protocole, sert d'amortisseur — utile pour un passage à vide de quelques semaines, insuffisant pour une année entière. La compression de 2025-2026 a montré que ce scénario n'est pas théorique.",
          },
          {
            type: "st",
            texte: "2. La dépendance aux plateformes d'échange centralisées",
          },
          {
            type: "p",
            texte:
              "Les positions sont ouvertes sur Binance, Bybit, OKX, Deribit. Le collatéral, lui, est chez des dépositaires tiers, ce qui limite la casse en cas de faillite d'une plateforme — c'est une vraie précaution, apprise de l'effondrement de FTX. Mais la concentration reste forte, et une plateforme majeure qui ferme ses portes du jour au lendemain immobiliserait une part importante du dispositif. Ce n'est pas un risque de code, c'est un risque de contrepartie : le genre que les audits de smart contracts ne détectent pas.",
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
              "En cas de mouvement violent, l'USDe peut s'écarter de son dollar sur le marché secondaire, le temps que les arbitragistes rétablissent l'équilibre. Lors de la cascade de liquidations du 10 octobre 2025 — la plus grosse de l'histoire de la crypto — l'USDe est resté surcollatéralisé, mais l'épisode a fait fuir les capitaux : la valeur déposée dans le protocole est passée d'environ 14,8 Md$ en octobre 2025 à moins de 4 Md$ au printemps 2026. Le protocole n'a pas cassé ; la confiance, elle, a été repricée.",
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
              "Ethena a réussi quelque chose que personne n'avait fait : rendre accessible en un clic une stratégie qui était jusqu'ici réservée aux salles de marché. C'est le meilleur exemple de ce que la DeFi sait faire de mieux — emballer une opération financière complexe dans un jeton que n'importe qui peut détenir.",
          },
          {
            type: "p",
            texte:
              "C'est aussi, pour la même raison, le meilleur exemple du danger de cette facilité : la complexité n'a pas disparu, elle a juste été cachée sous une interface. Un jeton qui affiche « 1 $ » à l'écran ressemble à tous les autres jetons qui affichent 1 $. Le travail de l'épargnant est de savoir lequel il tient.",
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
              "Hyperliquid est né en 2023, porté par Jeff Yan et un associé connu sous le pseudonyme Iliensinc, tous deux venus du trading haute fréquence — Jeff Yan est passé par Hudson River Trading, l'une des plus grosses firmes de trading algorithmique au monde. Ce n'est pas un détail : la plateforme est conçue par des gens dont le métier était de trader sur des carnets d'ordres, pas d'écrire des smart contracts.",
          },
          {
            type: "p",
            texte:
              "Le fait le plus singulier du projet tient en une phrase : l'équipe n'a jamais levé un centime auprès d'investisseurs extérieurs. Pas de fonds de capital-risque au capital, donc aucune allocation de jetons à débloquer au détriment des utilisateurs — une anomalie dans un secteur où les fonds détiennent couramment 20 à 40 % de la réserve initiale.",
          },
          {
            type: "note",
            ton: "info",
            titre: "L'airdrop de novembre 2024",
            texte:
              "À la place d'une levée de fonds, Hyperliquid a distribué 31 % de la réserve totale de HYPE à ses premiers utilisateurs, sans période de blocage. C'est l'une des plus grosses distributions gratuites de l'histoire de la crypto — plus de 620 M$ au cours de l'époque. Le pari : aligner les utilisateurs plutôt que des investisseurs. Il a plutôt bien fonctionné.",
          },
        ],
      },
      {
        titre: "Comment ça marche",
        blocs: [
          {
            type: "p",
            texte:
              "Pour comprendre l'intérêt d'Hyperliquid, il faut comprendre le problème qu'elle résout. Les plateformes décentralisées classiques, comme Uniswap, utilisent des pools de liquidité : une formule mathématique fixe le prix en fonction des quantités déposées. C'est ingénieux, mais mal adapté aux dérivés, où les traders professionnels veulent poser et retirer des ordres à un prix précis, des centaines de fois par minute.",
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
              "HyperEVM — la couche pour les applications. Compatible avec Ethereum, elle permet à d'autres développeurs de construire par-dessus (prêt, staking, coffres automatisés) en lisant en direct l'état du carnet d'ordres.",
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
            texte: "Le funding, et ce qu'on peut en faire",
          },
          {
            type: "p",
            texte:
              "Comme sur toute plateforme de perpétuels, un paiement récurrent circule entre les parieurs à la hausse et ceux à la baisse pour recoller le prix du contrat sur le prix réel : le funding. Sur Hyperliquid, il est versé toutes les heures, et le protocole n'en prélève rien — il passe intégralement d'un camp à l'autre.",
          },
          {
            type: "def",
            terme: "Funding (taux de financement)",
            slug: "funding-rate",
            texte:
              "La commission périodique que verse le camp majoritaire à l'autre. En crypto, les parieurs à la hausse sont habituellement les plus nombreux : ce sont donc eux qui paient. C'est ce flux qui rend possible la stratégie delta-neutre — détenir l'actif au comptant, parier à la baisse dessus pour le même montant, et encaisser le funding sans subir le mouvement du prix.",
          },
          {
            type: "note",
            ton: "info",
            titre: "Le lien avec Ethena",
            texte:
              "C'est exactement le mécanisme que nous avons détaillé dans le numéro #4. Hyperliquid n'a rien inventé de cette stratégie : elle en fournit le terrain de jeu. Ethena, elle, l'a industrialisée à grande échelle et emballée dans un jeton, l'USDe — voir notre fiche Ethena. Retiens la distinction : Hyperliquid est l'endroit où l'opération se fait, Ethena est l'un des acteurs qui la font.",
          },
        ],
      },
      {
        titre: "Le HLP — devenir le teneur de marché",
        blocs: [
          {
            type: "p",
            texte:
              "Le HLP est le coffre communautaire d'Hyperliquid : tu y déposes des stablecoins, et le coffre s'en sert pour tenir le marché — poser en continu des ordres d'achat et de vente — et pour reprendre les positions des traders liquidés.",
          },
          {
            type: "def",
            terme: "Teneur de marché (market maker)",
            slug: "market-making",
            texte:
              "Un acteur qui affiche en permanence un prix d'achat et un prix de vente, et gagne l'écart entre les deux. L'analogie : le bureau de change d'aéroport, qui achète l'euro un peu moins cher qu'il ne le vend, des milliers de fois par jour. Il ne parie pas sur le sens du marché ; il vit du passage.",
          },
          {
            type: "p",
            texte:
              "Trois sources de gain pour le HLP : l'écart entre le prix d'achat et le prix de vente ; la structure des frais, qui récompense celui qui pose un ordre plutôt que celui qui le consomme ; et la reprise des positions liquidées, souvent à prix avantageux — d'autant que les traders à fort effet de levier perdent en moyenne, et que le HLP est en face d'eux.",
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
              "HYPE est le jeton de la chaîne, et son modèle est l'un des plus simples du secteur : 99 % des revenus du protocole partent dans un fonds qui rachète du HYPE sur le marché et le détruit. Le rachat est quotidien et automatisé — aucune décision humaine, aucun vote nécessaire. Le fonds a accumulé plus de 45 millions de jetons.",
          },
          {
            type: "liste",
            items: [
              "Rachat et destruction — 99 % des revenus, en continu.",
              "Réduction de frais — les firmes de trading doivent immobiliser du HYPE pour obtenir des tarifs préférentiels.",
              "Carburant de la chaîne — toute opération sur HyperEVM consomme du HYPE.",
              "Sécurité — les validateurs immobilisent du HYPE pour valider les blocs.",
              "Gouvernance — les votes sont pondérés par les jetons immobilisés.",
            ],
          },
          {
            type: "note",
            ton: "alerte",
            titre: "La pression vendeuse à connaître",
            texte:
              "Les fondateurs et contributeurs débloquent environ 9,9 millions de HYPE par mois jusqu'en 2028. Le rachat automatique ne compense cette pression que si les revenus progressent assez vite — ce qui n'est pas le cas actuellement (voir ci-dessous). Signal d'alignement à mettre au crédit de l'équipe : après avoir libéré 1,2 million de jetons en janvier 2026, elle a réduit son propre déblocage du mois suivant d'environ 90 %.",
          },
        ],
      },
      {
        titre: "HIP-3 : le succès qui coûte cher",
        blocs: [
          {
            type: "p",
            texte:
              "Depuis octobre 2025, n'importe qui immobilisant 500 000 HYPE peut déployer son propre marché de perpétuels sur le carnet d'ordres d'Hyperliquid — et garder jusqu'à la moitié des frais générés. C'est ce qu'on appelle HIP-3.",
          },
          {
            type: "p",
            texte:
              "L'effet a dépassé toutes les prévisions. Ces marchés déployés par des tiers pesaient environ 2 % du volume de la plateforme début 2026 ; ils en représentent aujourd'hui à peu près la moitié. Et surtout, ils ont fait sortir Hyperliquid du périmètre crypto : on y trade désormais le pétrole, l'or, l'argent, le S&P 500, le Nasdaq et des actions individuelles. Un déployeur a même obtenu une licence officielle de S&P Dow Jones pour son marché sur le S&P 500.",
          },
          {
            type: "p",
            texte:
              "L'illustration la plus parlante date de février 2026. Un choc géopolitique éclate un week-end, alors que les bourses de matières premières sont fermées — comme elles le sont chaque samedi et dimanche. Les traders qui voulaient se positionner sur le pétrole n'avaient nulle part où aller… sauf sur les perpétuels pétrole d'Hyperliquid, ouverts en permanence. Plus d'1,2 Md$ de volume en une journée, et une couverture dans le Wall Street Journal. Une plateforme DeFi servant de référence de prix mondiale un dimanche : c'est nouveau.",
          },
          {
            type: "note",
            ton: "avis",
            titre: "Notre lecture : le revers de la médaille",
            texte:
              "C'est ici que le dossier se corse, et c'est le point que beaucoup d'analyses enthousiastes passent sous silence. Comme les déployeurs conservent la moitié des frais, la bascule du volume vers HIP-3 fait mécaniquement baisser ce que le protocole encaisse — et donc ce qu'il consacre au rachat de HYPE. Le revenu brut trimestriel est passé d'environ 357 M$ au troisième trimestre 2025 à ~202 M$ au deuxième trimestre 2026, soit −43 %, et le rachat de jetons a chuté d'environ 290 M$ à ~149 M$ sur la même période (−51 %). Le tout PENDANT que l'activité battait des records : ~13 Md$ de positions ouvertes le 23 août 2026, environ 63 % de tout le marché des perpétuels décentralisés. Autrement dit, la plateforme gagne la bataille des parts de marché et perd, en même temps, en capacité à soutenir son jeton. C'est une distinction essentielle : Hyperliquid le produit et HYPE l'investissement ne racontent pas la même histoire en ce moment.",
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
              "Environ 27 validateurs sécurisent la chaîne, contre des centaines de milliers sur Ethereum. Et ce petit groupe ne fait pas que valider les blocs : ce sont eux qui publient les prix utilisés pour te liquider. Là où la plupart des plateformes s'appuient sur un oracle externe comme Chainlink, Hyperliquid fait soumettre le prix par ses propres validateurs et en prend la médiane. L'avantage est réel — zéro latence, pas de dépendance à un tiers. L'inconvénient l'est tout autant : le même petit groupe sécurise la chaîne et fournit les prix qui déclenchent les liquidations.",
          },
          {
            type: "note",
            ton: "alerte",
            titre: "L'incident JELLY (mars 2025) — le cas d'école",
            texte:
              "Un attaquant manipule le cours d'un memecoin, JELLY. Le coffre HLP se retrouve avec une position toxique et environ 13,5 M$ de pertes latentes. En quelques minutes, les validateurs se réunissent, votent le retrait du marché et fixent eux-mêmes un prix de règlement antérieur à la manipulation. Les utilisateurs sont indemnisés et le HLP termine la journée en bénéfice. Deux lectures coexistent, et elles sont toutes les deux justes : la réaction a été rapide et entièrement publique, mais elle prouve aussi qu'un petit groupe peut changer les règles d'un marché en temps réel. Plus transparent qu'une plateforme centralisée, loin de la neutralité d'Ethereum.",
          },
          {
            type: "st",
            texte: "2. La dette irrécouvrable",
          },
          {
            type: "p",
            texte:
              "N'importe qui peut déposer une garantie et prendre du levier, sans vérification d'identité ni recours juridique possible. Sur les marchés peu liquides — ceux déployés via HIP-3, notamment — il arrive que le prix saute d'un coup au-delà du seuil de liquidation d'un gros trader, sans qu'aucun ordre ne s'exécute entre les deux : la position est fermée trop tard, et la perte que personne ne couvre reste à la charge du protocole. À mettre au crédit de la plateforme : elle a traversé la cascade de liquidations du 10 octobre 2025, la plus grosse de l'histoire de la crypto, en restant solvable.",
          },
          {
            type: "st",
            texte: "3. La concurrence",
          },
          {
            type: "p",
            texte:
              "Côté décentralisé, Aster et Lighter attaquent avec des distributions de jetons agressives — mais leurs parts de marché s'effondrent une fois la distribution passée. La vraie menace est ailleurs : Binance reste de loin le premier acteur mondial des dérivés, et des plateformes régulées américaines commencent à proposer de vrais perpétuels, alors même que l'accès direct à Hyperliquid reste fermé aux résidents américains.",
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
              "La plateforme fonctionne, elle a encaissé sans casser des chocs qui en auraient tué d'autres, l'équipe est compétente et son jeton est adossé à de vrais revenus — c'est rare. Ce qui l'empêche de descendre plus bas : 27 validateurs qui sont à la fois juges et oracles, un cadre réglementaire non stabilisé, et une trajectoire de revenus actuellement baissière malgré des volumes record. Le risque de trader dessus n'est pas le même que celui de détenir HYPE — ce sont deux décisions distinctes.",
          },
        ],
      },
      {
        titre: "Pourquoi ça compte",
        blocs: [
          {
            type: "p",
            texte:
              "Hyperliquid a réglé la question qui bloquait la DeFi depuis des années : peut-on offrir l'expérience d'une plateforme centralisée — rapide, liquide, avec un vrai carnet d'ordres — sans demander aux utilisateurs de confier leurs fonds à une entreprise ? La réponse est oui, à condition d'accepter un compromis clair : une chaîne beaucoup plus centralisée qu'Ethereum.",
          },
          {
            type: "p",
            texte:
              "Et la suite est peut-être plus importante encore. Avec les marchés déployés par des tiers, la plateforme est en train de devenir une infrastructure sur laquelle on peut lister n'importe quel actif — pétrole, actions, indices — sans autorisation préalable. Les volumes des marchés traditionnels écrasent ceux de la crypto ; si une fraction seulement bascule, le sujet dépasse largement le secteur.",
          },
        ],
      },
    ],
    pointsCles: [
      "Hyperliquid est une blockchain construite pour une seule chose : faire tourner un carnet d'ordres aussi vite qu'une plateforme centralisée.",
      "Aucun investisseur extérieur, aucune allocation de jetons aux fonds : 31 % de la réserve a été distribuée aux utilisateurs.",
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
];

export function getProtocole(slug: string): ProtocoleFiche | undefined {
  return PROTOCOLES.find((p) => p.slug === slug);
}
