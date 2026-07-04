// ===== Glossaire : SOURCE UNIQUE des définitions =====
// Toute définition publiée (newsletter ou article) vit ICI, une seule fois.
// Les pages /glossaire et /glossaire/<slug> lisent ces données.
// 👉 Quand on définit un terme dans un numéro, on l'ajoute ici avec son `numero`.
// Slug = minuscules, sans accent, tirets (invariable, cf. CLAUDE.md).

export type GlossaireTerme = {
  slug: string;
  terme: string;
  definition: string;
  numero?: number; // numéro où le terme a été introduit
};

export const TERMES: GlossaireTerme[] = [
  {
    slug: "staking",
    terme: "Staking",
    definition:
      "Bloquer ses cryptos (par ex. des ethers) pour aider à sécuriser une blockchain en Proof of Stake. En échange, le réseau verse une récompense (~2,6 %/an sur Ethereum aujourd'hui). Les acteurs qui font ce travail sont les validateurs.",
    numero: 1,
  },
  {
    slug: "validateur",
    terme: "Validateur",
    definition:
      "L'acteur (souvent un opérateur technique) qui valide les transactions et sécurise une blockchain en Proof of Stake. En cas de faute ou de panne, il peut être sanctionné (slashing).",
    numero: 1,
  },
  {
    slug: "restaking",
    terme: "Restaking",
    definition:
      "Réutiliser des ethers déjà mis en staking pour sécuriser, en plus, d'autres services (les AVS) et toucher un rendement supplémentaire. Le protocole leader est EigenLayer.",
    numero: 2,
  },
  {
    slug: "avs",
    terme: "AVS (Actively Validated Service)",
    definition:
      "Un service tiers (pont entre blockchains, oracle, couche de données…) qui « loue » la sécurité d'Ethereum via le restaking, plutôt que de bâtir la sienne.",
    numero: 2,
  },
  {
    slug: "lst",
    terme: "LST (Liquid Staking Token)",
    definition:
      "Un jeton qui représente des ethers en staking (ex. stETH de Lido). Il rapporte le rendement du staking tout en restant librement échangeable : le reçu est lui-même un actif.",
    numero: 2,
  },
  {
    slug: "lrt",
    terme: "LRT (Liquid Restaking Token)",
    definition:
      "Le reçu d'une position de restaking (ex. eETH d'ether.fi). Comme le LST, il reste liquide et réutilisable ailleurs en DeFi.",
    numero: 2,
  },
  {
    slug: "slashing",
    terme: "Slashing",
    definition:
      "La sanction d'un validateur qui se comporte mal ou tombe en panne : une partie des fonds est confisquée. Avec le restaking, on s'expose en plus aux règles de pénalité de chaque AVS.",
    numero: 2,
  },
  {
    slug: "ipo",
    terme: "IPO (introduction en bourse)",
    definition:
      "La première mise en vente publique des actions d'une entreprise sur un marché boursier.",
    numero: 2,
  },
  {
    slug: "action-tokenisee",
    terme: "Action tokenisée",
    definition:
      "Une action classique (Apple, SpaceX…) représentée par un jeton sur une blockchain, qu'on peut donc échanger 24h/24 sans passer par un courtier traditionnel.",
    numero: 2,
  },
  {
    slug: "tranching",
    terme: "Tranching",
    definition:
      "Découper un même investissement en plusieurs niveaux de risque (les « tranches »). La tranche junior (risquée) encaisse les premières pertes et est mieux payée ; la senior (prudente) n'est touchée qu'en dernier.",
    numero: 2,
  },
  {
    slug: "reassurance",
    terme: "Réassurance",
    definition:
      "« L'assurance des assureurs » : une compagnie d'assurance transfère une partie de son risque (et des primes encaissées) à un réassureur, qui paie en cas de gros sinistres.",
    numero: 2,
  },
  {
    slug: "tvl",
    terme: "TVL (Total Value Locked)",
    definition:
      "Le montant total des fonds déposés dans un protocole DeFi. Un indicateur de sa taille et de la confiance qu'on lui accorde.",
    numero: 1,
  },
  {
    slug: "dat",
    terme: "DAT (Digital Asset Treasury)",
    definition:
      "Littéralement « trésorerie d'actifs numériques ». Une société cotée en bourse dont la trésorerie est massivement investie en crypto-actifs (le plus souvent du bitcoin), au point d'en faire le cœur de son activité. Acheter son action revient à s'exposer indirectement à sa réserve de cryptos. Exemple emblématique : Strategy (ex-MicroStrategy).",
    numero: 1,
  },
  {
    slug: "stablecoin",
    terme: "Stablecoin",
    definition:
      "Une cryptomonnaie conçue pour garder une valeur stable, généralement adossée au dollar (1 jeton ≈ 1 $). Ex. : USDC, USDT.",
    numero: 1,
  },
  {
    slug: "dollar-synthetique",
    terme: "Dollar synthétique",
    definition:
      "Un jeton qui vise 1 $ sans détenir de vrais dollars en réserve. Sa stabilité ne vient pas d'un compte en banque, mais d'une combinaison de placements et de positions de marché qui se compensent (par ex. détenir de l'ETH et parier à la baisse dessus pour le même montant). Plus rémunérateur qu'un stablecoin classique, mais dépendant du bon fonctionnement de cette mécanique. Exemple : l'USDe d'Ethena.",
    numero: 3,
  },
  {
    slug: "depeg",
    terme: "Dépeg",
    definition:
      "Quand un stablecoin décroche de sa valeur cible : un jeton censé valoir 1 $ qui tombe, par exemple, à 0,95 $. C'est le signal d'une perte de confiance ou d'un problème sur les réserves — et rien ne garantit le retour à 1 $. (« Peg » = l'ancrage à la valeur cible ; « dé-peg » = il lâche.) Cas célèbres : l'UST de Terra qui s'effondre à zéro en mai 2022 (~40 milliards de dollars partis en fumée), l'USDC brièvement tombé à 0,87 $ en mars 2023 lors de la faillite de la banque SVB, ou plus récemment l'USD0++ de Usual.",
    numero: 3,
  },
  {
    slug: "reserves",
    terme: "Réserves (d'un stablecoin)",
    definition:
      "L'ensemble des dollars (ou actifs sûrs, comme des bons du Trésor) mis de côté par l'émetteur pour garantir que chaque jeton reste échangeable contre 1 $. C'est ce qui empêche le stablecoin de s'effondrer.",
    numero: 3,
  },
  {
    slug: "bons-du-tresor",
    terme: "Bons du Trésor US",
    definition:
      "Des reconnaissances de dette de l'État américain. Le placement « sans risque » de référence en finance : on prête son argent au gouvernement, il verse un intérêt. C'est là que dorment la plupart des réserves des grands stablecoins.",
    numero: 3,
  },
  {
    slug: "mnav",
    terme: "mNAV (multiple of Net Asset Value)",
    definition:
      "Pour une DAT (entreprise à trésorerie crypto), le rapport entre sa valeur en Bourse et la valeur totale des cryptos qu'elle détient. Au-dessus de 1, l'entreprise vaut plus que ses bitcoins : elle peut émettre des actions « chères » et les convertir en bitcoin « au prix réel » — chaque levée achète plus de BTC qu'elle ne dilue les actionnaires, donc lever des fonds crée de la valeur. À 1, elle vaut pile ses bitcoins. En dessous de 1, elle vaut moins que son trésor : émettre des actions détruit de la valeur (autant acheter le bitcoin en direct). C'est l'indicateur-clé pour juger une DAT comme Strategy.",
    numero: 3,
  },
  {
    slug: "mint",
    terme: "Mint (frapper)",
    definition:
      "Créer de nouveaux jetons. Pour un stablecoin : tu déposes des dollars et le protocole « frappe » l'équivalent en jetons ; à l'inverse, quand tu les rends, il les « rachète » (redeem) et te rend tes dollars.",
    numero: 3,
  },
];

// Retrouver un terme par son slug.
export function getTerme(slug: string): GlossaireTerme | undefined {
  return TERMES.find((t) => t.slug === slug);
}

// Liste triée alphabétiquement (pour la page index).
export const TERMES_TRIES = [...TERMES].sort((a, b) =>
  a.terme.localeCompare(b.terme, "fr")
);
