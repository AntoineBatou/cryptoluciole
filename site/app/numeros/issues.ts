// ===== Les données de tes numéros =====
// Chaque numéro est un objet rangé dans le tableau "issues".
// Pour ajouter le #2 plus tard : tu copies un objet et tu changes le contenu.
// L'affichage (les pages) lit ces données — il ne faut donc PAS toucher au design ici.

// Élément du corps d'une notion (format aéré, #2+) : paragraphe, sous-titre,
// ou encadré de définition (terme lié au glossaire).
export type NotionEl =
  | { type: "p"; texte: string }
  | { type: "st"; texte: string }
  | { type: "def"; terme: string; slug: string; texte: string };

// Le "type" décrit la forme d'un numéro (les garde-fous TypeScript).
export type Issue = {
  id: string; // identifiant dans l'URL, ex. "1" -> /numeros/1
  numero: number;
  date: string;
  titre: string;
  excerpt: string; // petit résumé affiché sur la carte
  // notion : ancien format (blocs ⬡, #1) OU nouveau format aéré (corps, #2+).
  notion: { titre: string; blocs?: { label: string; texte: string }[]; corps?: NotionEl[] };
  // une actu peut porter des encadrés de définition (termes liés au glossaire).
  actus: { titre: string; texte: string; avis: string; source: string; defs?: { terme: string; slug: string; texte: string }[]; lien?: { label: string; href: string } }[];
  protocole: {
    nom: string;
    slug?: string; // -> /protocoles/<slug>
    bref: string;
    etapes: string[];
    rendement: string;
    // Cas simple (un seul produit, comme Lido au #1) : un badge unique.
    risqueNiveau?: string; // ex. "faible"
    risqueSens?: "faible" | "moyen" | "eleve";
    // Cas avancé (plusieurs produits/tranches, comme Re au #2) : plusieurs badges.
    badges?: { label: string; niveau: string; sens: "faible" | "moyen" | "eleve" }[];
    risques: string;
    importance: string;
  };
  cours: { actif: string; nom?: string; prix: string; var7j: string; sens: "up" | "down" }[];
  coursHeure?: string; // heure de prise des cours (ex. "17h24")
  coursAvis?: string; // encadré « Notre avis » sous le tableau des cours
  data: { titre: string; texte: string; points?: string[]; texteFin?: string };
  definitions: { terme: string; en: string; def: string; avis?: string; slug?: string }[];
};

export const issues: Issue[] = [
  {
    id: "1",
    numero: 1,
    date: "Mercredi 3 juin 2026",
    titre: "Le staking, sans le jargon",
    excerpt:
      "C'est quoi le staking, Strategy vend du bitcoin, Hyperliquid lance les marchés de prédiction, et Lido décrypté.",
    notion: {
      titre: "Le staking, en clair",
      blocs: [
        {
          label: "Le principe",
          texte:
            "Tu acceptes de bloquer une partie de tes cryptos pour participer à la sécurisation d'une blockchain (par ex. des ethers pour Ethereum). En échange, le réseau te récompense. Ça ne fonctionne que sur les blockchains en Proof of Stake (preuve d'enjeu), comme Ethereum — pas sur celles en Proof of Work comme Bitcoin, où ce sont des mineurs avec des machines qui sécurisent le réseau. On ne peut donc pas staker de bitcoin.",
        },
        {
          label: "La métaphore",
          texte:
            "C'est comme déposer une caution pour devenir juré certifié dans un tribunal numérique. Tant que tu juges honnêtement, la collectivité te verse une prime. Si tu triches ou ne fais pas le travail, le tribunal saisit ta caution.",
        },
        {
          label: "La délégation",
          texte:
            "En pratique, la plupart des gens ne valident pas eux-mêmes. Ils délèguent leurs jetons à un acteur technique (Lido, Binance…) qui gère l'infrastructure à leur place, contre une commission.",
        },
        {
          label: "Combien ça rapporte",
          texte:
            "En général 2 % à 10 % par an, versés en jetons supplémentaires (tu stakes de l'ETH, tu reçois de l'ETH). Aujourd'hui : ~2,7 % net sur Ethereum et 6 à 7 % net sur Solana.",
        },
      ],
    },
    actus: [
      {
        titre: "Strategy vend du bitcoin — première fois depuis 2022",
        texte:
          "Strategy (ex-MicroStrategy) est la plus grosse DAT (Digital Asset Treasury — une entreprise dont le métier est de détenir des crypto-actifs en trésorerie). Elle accumule du bitcoin depuis des années avec une promesse : ne jamais en vendre. L'annonce d'une vente a donc créé des inquiétudes. Les faits : 32 BTC vendus pour ~2,5 M$ fin mai, pour financer les distributions versées sur ses actions de préférence (preferred stock).",
        avis:
          "Sur le même mois de mai, Strategy a acheté ~24 869 BTC (≈ 2 Mds$)… et n'en a vendu que 32. Sur un trésor de ~843 700 BTC, cette vente pèse 0,004 %. Autrement dit : une goutte d'eau. Plutôt sain de pouvoir mobiliser une miette de son trésor pour tenir ses engagements.",
        source: "CoinDesk, Phemex",
      },
      {
        titre: "Hyperliquid lance les marchés de prédiction (HIP-4)",
        texte:
          "Hyperliquid élargit encore sa plateforme. Après les futures perpétuels (qui permettent de parier avec levier sur la hausse ou la baisse d'un actif sans le détenir), le spot, puis les marchés déployables par des tiers et actions tokenisées, voici les marchés de prédiction (HIP-4) : des contrats qui parient sur le résultat d'un événement (inflation, sport, « le BTC touchera-t-il X$ ce mois-ci ? ») et se règlent entre 0 et 1 — soit oui, soit non. Premier marché le 25 mai (inflation US) ; 6 M de contrats en 24 h.",
        avis:
          "En plus de marcher sur le business des « paris » (comme ceux qu'on voit sur Polymarket), il y a un réel intérêt trading : pouvoir se couvrir. Par ex. un trader exposé à la hausse du Bitcoin via un future perp sur Hyperliquid peut acheter un contrat NON sur « le BTC clôturera au-dessus de 110 000 $ vendredi » afin de se couvrir à court terme dans le cas où le BTC baisserait (une partie de sa perte serait compensée par le gain sur ce marché prédictif), sans fermer son exposition principale, et même à partir du même collatéral. De nombreux cas d'usage qui restent dans le spectre d'Hyperliquid.",
        source: "CoinGecko, CryptoBriefing",
      },
    ],
    protocole: {
      nom: "Lido",
      bref:
        "Lido te permet de staker tes ethers sans les immobiliser : tu gardes un jeton qui représente tes ethers stakés et leurs récompenses.",
      etapes: [
        "Tu déposes tes ethers dans Lido (en connectant ton wallet via leur application).",
        "Lido te remet un jeton, le stETH, qui représente tes ethers stakés et accumule les récompenses.",
        "Ce stETH est reconnu partout dans la DeFi : tu peux le garder, le transférer, ou t'en servir comme garantie pour emprunter des dollars — pendant que tes ethers continuent de te rapporter.",
      ],
      rendement:
        "Aujourd'hui, environ 2,6 % par an (versé en stETH). Sur les 12 derniers mois, il a oscillé entre ~2,5 % et 3,5 % : ce n'est pas un taux fixe garanti, il dépend de l'activité du réseau Ethereum.",
      risqueNiveau: "faible",
      risqueSens: "faible",
      risques:
        "À notre avis, l'un des risques les plus faibles de la DeFi : stETH est le jeton de staking liquide le plus ancien et le plus éprouvé, audité plusieurs fois, avec la plus grosse TVL et une liquidité profonde. Les risques résiduels restent réels mais limités : un bug de smart contract (faible, jamais nul), un léger décrochage temporaire du stETH face à l'ETH, et la concentration (Lido gère une grande part du staking d'Ethereum).",
      importance:
        "Lido a rendu le staking liquide : tes fonds sécurisent Ethereum tout en restant utilisables ailleurs. C'est le n°1 du staking liquide, avec une TVL d'environ 38 Mds$ (~73 % du marché).",
    },
    cours: [
      { actif: "BTC", nom: "Bitcoin", prix: "~67 562 $", var7j: "▼ -5,5 %", sens: "down" },
      { actif: "ETH", nom: "Ethereum", prix: "~1 925 $", var7j: "▼ -3,0 %", sens: "down" },
      { actif: "SOL", nom: "Solana", prix: "~77,0 $", var7j: "▼ -4,5 %", sens: "down" },
      { actif: "HYPE", nom: "Hyperliquid", prix: "~72,2 $", var7j: "▲ +11,6 %", sens: "up" },
      { actif: "BNB", prix: "~665 $", var7j: "▼ -3,0 %", sens: "down" },
    ],
    data: {
      titre: "HYPE : +142 % depuis janvier",
      texte:
        "Pendant qu'ETH et SOL stagnent, HYPE a dépassé Dogecoin et est entré dans le top 10. Avec le lancement des marchés de prédiction (6 M de contrats en 24 h), Hyperliquid grignote tous les segments à la fois. À surveiller.",
    },
    definitions: [
      {
        terme: "DAT",
        en: "Digital Asset Treasury",
        def: "Une entreprise dont l'activité est de détenir des crypto-actifs en trésorerie. Ex. : Strategy, qui accumule du bitcoin.",
      },
      {
        terme: "TVL",
        en: "Total Value Locked",
        def: "Le montant total des fonds déposés dans un protocole DeFi. Ex. : Lido affiche ~38 Mds$, surtout des ethers stakés.",
      },
    ],
  },
  {
    id: "2",
    numero: 2,
    date: "Mercredi 24 juin 2026",
    titre: "Le restaking, décrypté",
    excerpt:
      "C'est quoi le restaking, Backpack lance les vraies actions tokenisées, Binance face au compte à rebours MiCA, et un protocole qui fait travailler tes stablecoins dans l'assurance.",
    notion: {
      titre: "Le restaking, en clair",
      corps: [
        { type: "p", texte: "Pour comprendre le restaking, il faut d'abord se rappeler le staking." },
        { type: "def", terme: "Staking", slug: "staking", texte: "Sur Ethereum, on « bloque » ses ethers pour aider à sécuriser le réseau. En échange, on touche une récompense (~2,6 % par an aujourd'hui chez Lido), un peu comme un livret d'épargne. Ceux qui font ce travail sont les validateurs." },
        { type: "p", texte: "Le restaking, c'est aller un cran plus loin : reprendre des ethers déjà mis en staking et les réutiliser pour sécuriser, en plus, d'autres services. Le même capital sert donc deux fois, d'où un rendement supplémentaire. Le protocole leader est EigenLayer (~94 % du marché)." },
        { type: "def", terme: "AVS (Actively Validated Service)", slug: "avs", texte: "Des services tiers (ponts entre blockchains, oracles, couches de données…) qui ont besoin d'un gardien fiable mais n'ont pas les moyens de bâtir leur propre armée de validateurs. Ils « louent » la sécurité d'Ethereum." },
        { type: "st", texte: "En pratique, comment ça marche ?" },
        { type: "p", texte: "1. Tu stakes tes ethers via un protocole de liquid staking comme Lido. Tu reçois un jeton liquide (un LST), chez Lido le stETH." },
        { type: "def", terme: "LST (Liquid Staking Token)", slug: "lst", texte: "Un jeton qui prouve que tu as des ethers en staking (ex. stETH). Il rapporte le rendement du staking et peut circuler librement : le reçu est lui-même un actif." },
        { type: "p", texte: "2. Tu déposes ce stETH dans EigenLayer (l'opération de restaking) : ton capital sert alors aussi à sécuriser des AVS, contre une prime." },
        { type: "p", texte: "3. Souvent, tu passes par un protocole de restaking (ether.fi, Renzo, Kelp…) qui fait le dépôt pour toi et te remet encore un nouveau jeton." },
        { type: "def", terme: "LRT (Liquid Restaking Token)", slug: "lrt", texte: "Le reçu de ta position de restaking (ex. eETH, ~3 % aujourd'hui). Comme le LST, il reste liquide : tu peux le replacer ailleurs en DeFi." },
        { type: "p", texte: "Le même ether de départ porte donc deux étages de rendement empilés : staking → restaking. Et comme le LRT reste liquide, tu peux en plus l'employer ailleurs en DeFi — par exemple le prêter contre un rendement, ou le bloquer en garantie pour emprunter contre lui et faire du levier. C'est cette superposition qui fait l'attrait… et le danger : à chaque étage, un jeton est dérivé d'un autre, et un problème à la base se répercute sur tous les étages au-dessus." },
        { type: "st", texte: "Combien ça rapporte ?" },
        { type: "p", texte: "En théorie : ~2,6 % de base + 1 à 3 % de prime de restaking, soit ~4 à 6 %. En pratique, l'écart est minime : un jeton de restaking comme l'eETH tourne autour de 3 %, à peine au-dessus du simple staking (~0,3 point). La prime promise existe surtout sur le papier, et elle est souvent versée en points ou en jetons plutôt qu'en vrais revenus." },
        { type: "st", texte: "Les risques" },
        { type: "p", texte: "Le principal est le slashing." },
        { type: "def", terme: "Slashing", slug: "slashing", texte: "La sanction d'un validateur (l'opérateur technique) qui se comporte mal ou tombe en panne : une partie des fonds est confisquée. Tu ne fais pas tourner de validateur toi-même, tu délègues à un opérateur — tu n'as rien à gérer, le risque c'est que cet opérateur fasse n'importe quoi. Avec le restaking, tu t'exposes en plus aux règles de pénalité de chaque AVS." },
        { type: "p", texte: "En pratique, ce risque est-il réel ? Oui en théorie, mais à ce jour quasi inexistant : le slashing n'a été activé sur EigenLayer qu'en avril 2025, et aucun cas n'a été recensé chez les opérateurs sérieux depuis. Pas nul, mais jamais matérialisé pour l'instant." },
        { type: "p", texte: "S'ajoutent l'empilement de risques (chaque étage dérive un jeton d'un autre) et l'immaturité du secteur : la TVL du restaking a fondu d'environ 15-20 Md$ en début d'année à ~5 Md$ à la mi-2026." },
        { type: "st", texte: "Notre avis" },
        { type: "p", texte: "Pour le moment, le restaking ne vaut pas le coup : ~0,3 point de mieux ne justifie pas un risque plus élevé et bien plus difficile à évaluer qu'un simple staking. C'est un pari sur l'avenir — quand les AVS seront assez nombreux et rentables pour payer une vraie prime. En revanche, le staking simple, lui, vaut le coup : peu risqué et éprouvé, il rapporte un rendement natif sur tes ethers à moindre risque. Si tu débutes, commence par là." },
      ],
    },
    actus: [
      {
        titre: "Backpack lance les premières vraies actions tokenisées — et rafle la mise",
        texte:
          "Tout part de l'IPO de SpaceX. Lancée à 135 $, l'action a flambé jusqu'à 225 $ le 16 juin, propulsant brièvement l'entreprise au rang de 5e valorisation mondiale, devant Amazon ; depuis, elle est retombée autour de 160 $. La frénésie a débordé sur la blockchain : les volumes d'actions tokenisées ont explosé sur Solana. Backpack a capté 74 % du volume le 16 juin, avec plus de 105 M$ à elle seule. Mais l'exploit, c'est la nature du produit : là où xStocks ou Ondo ne proposaient que des emballages synthétiques, Backpack offre une vraie propriété de l'action, encadrée par le droit de l'État de New York (le même cadre que Robinhood ou Fidelity). Concrètement : tu touches de vrais dividendes (versés en stablecoin), tu peux transférer tes actions vers un vrai courtier, et les échanger 1:1 contre la vraie action (la « redemption »), via un partenariat avec Sunrise (un produit de Wormhole).",
        defs: [
          { terme: "IPO (introduction en bourse)", slug: "ipo", texte: "La première mise en vente publique des actions d'une entreprise." },
          { terme: "Action tokenisée", slug: "action-tokenisee", texte: "Une action classique (Apple, SpaceX…) représentée par un jeton sur une blockchain, qu'on peut donc échanger 24h/24 sans passer par un courtier traditionnel." },
        ],
        avis:
          "C'est un vrai jalon, pas un coup de buzz. La grande objection aux actions sur blockchain — pourquoi acheter ici plutôt que chez un courtier régulé ? — trouve enfin une réponse : on possède réellement l'action, pas une copie synthétique. C'est ce qui pourrait, un jour, faire basculer des milliers de milliards de dollars sur la blockchain. En revanche, nous ne recommandons pas d'investir dans SpaceX à ce stade : sa valorisation est déjà très élevée et la baisse amorcée (de 225 $ à ~160 $) pourrait se poursuivre à court terme.",
        source: "CoinAcademy, The Block, The DeFi Investor",
      },
      {
        titre: "Binance quitte la France : ce qui change pour tes cryptos",
        texte:
          "C'est désormais officiel : Binance n'obtiendra pas l'agrément MiCA et cessera de proposer ses services crypto en France à partir du 1er juillet 2026 — plus de nouveaux utilisateurs, et services progressivement restreints. (Rappel : MiCA est le règlement européen ; sans agrément, une plateforme ne peut plus, légalement, servir les résidents de l'UE.) Point rassurant, et Binance le confirme : aucun gel soudain. Tu pourras retirer tes actifs à tout moment, en crypto comme en euros, y compris après le 1er juillet ; passé cette date, les opérations se limiteront à réduire tes positions et retirer tes fonds. Deux échéances à retenir : le 1er juillet (arrêt du trading Spot et des nouveaux ordres) et le 1er octobre (liquidation des positions sur marge et des prêts encore ouverts).",
        avis:
          "Pas de panique : cette fois Binance le confirme noir sur blanc — aucun gel, tes retraits restent ouverts même après le 1er juillet. Mais comme la plateforme ferme en France, tu devras de toute façon déplacer tes cryptos. Deux options propres : les transférer vers ton propre portefeuille auto-géré (un Ledger par exemple — tu détiens toi-même tes clés, plus sûr mais plus responsabilisant), ou vers une autre plateforme déjà agréée MiCA.",
        lien: {
          label: "Voir la liste officielle des plateformes agréées (AMF)",
          href: "https://www.amf-france.org/fr/espace-epargnants/proteger-son-epargne/listes-blanches",
        },
        source: "Communication officielle Binance France (e-mail aux utilisateurs)",
      },
    ],
    protocole: {
      nom: "Re Protocol (reUSD & reUSDe)",
      slug: "re",
      bref:
        "Re est un réassureur sur blockchain : ton argent sert à financer de vraies compagnies d'assurance, et en échange tu touches une partie des primes payées par leurs clients.",
      etapes: [
        "La réassurance, c'est « l'assurance des assureurs » : une compagnie d'assurance encaisse des primes mais redoute les mauvaises années ; pour ne pas couler, elle transfère une partie de son risque (et des primes) à un réassureur.",
        "Avec Re, c'est toi le réassureur : tu déposes des dollars numériques (un stablecoin comme l'USDC), et ton dépôt sert de réserve de sécurité pour de vraies assurances (auto, responsabilité d'entreprises…). En attendant d'être mobilisé, il génère du rendement.",
        "Tu peux investir de deux façons selon le jeton choisi : reUSD (prudent, capital protégé en priorité) ou reUSDe (risqué, premier à éponger les pertes mais bien mieux payé). En coulisses, ce sont deux « tranches » (voir Définitions).",
      ],
      rendement:
        "reUSD : ~6,7 % par an. reUSDe : ~12 % par an (variable). Ce rendement plus élevé n'est pas magique : c'est la rémunération du risque de sinistre. Tant qu'il n'y a pas trop de sinistres, reUSDe paie davantage ; une mauvaise année, il absorbe les pertes.",
      badges: [
        { label: "reUSD", niveau: "moyen", sens: "moyen" },
        { label: "reUSDe", niveau: "élevé", sens: "eleve" },
      ],
      risques:
        "Si les assureurs doivent indemniser beaucoup de sinistres d'un coup (une année à nombreux accidents ou dégâts), la réserve doit payer — et une partie de ton dépôt peut y passer. En cas de sinistre, ce sont d'abord les détenteurs de reUSDe qui perdent ; si la perte est trop grosse, on rabote ensuite les détenteurs de reUSD. Et comme pour tout protocole DeFi, le risque de hack reste inhérent au secteur.",
      importance:
        "Ici, l'argent vient d'une vraie activité économique : l'assurance. À notre avis, Re peut être une bonne piste de diversification pour faire travailler ses stablecoins au-delà des stratégies classiques (prêt, staking de stablecoins) : son rendement dépend de la sinistralité des assurances, pas des mêmes facteurs que le reste de la DeFi, ce qui répartit les risques. À doser, surtout pour reUSDe : un rendement de 12 % n'est jamais un cadeau, c'est le prix d'un risque.",
    },
    cours: [
      { actif: "BTC", nom: "Bitcoin", prix: "~60 981 $", var7j: "▼ -6,6 %", sens: "down" },
      { actif: "ETH", nom: "Ethereum", prix: "~1 646 $", var7j: "▼ -6,5 %", sens: "down" },
      { actif: "SOL", nom: "Solana", prix: "~68,4 $", var7j: "▼ -6,0 %", sens: "down" },
      { actif: "HYPE", nom: "Hyperliquid", prix: "~60,6 $", var7j: "▼ -16,1 %", sens: "down" },
      { actif: "BNB", prix: "~568 $", var7j: "▼ -5,7 %", sens: "down" },
    ],
    coursHeure: "17h24",
    coursAvis:
      "La crypto, vue comme un actif risqué, suit le décrochage des marchés actions (surtout la tech), dans un climat de défiance « risk-off ». En cause : la banque centrale américaine (la Fed), qui a douché les espoirs de baisse de taux face à une inflation tenace, poussant les investisseurs à fuir les placements risqués.",
    data: {
      titre: "80 % des plateformes crypto pourraient disparaître avec MiCA",
      texte:
        "C'est l'estimation d'Erald Ghoos, patron d'OKX Europe — et elle colle aux faits : seules ~200 plateformes ont décroché leur agrément MiCA, sur plus de 1 000 qui opéraient en Europe. Au programme, sans doute en même temps :",
      points: [
        "fermetures des petits acteurs ;",
        "rachats et consolidation ;",
        "repli géographique pour ceux qui n'obtiennent pas leur licence.",
      ],
      texteFin: "L'ESMA a exclu tout délai : moins d'acteurs, mieux régulés.",
    },
    definitions: [
      {
        terme: "Tranching",
        slug: "tranching",
        en: "découpage en tranches",
        def: "Découper un même investissement en plusieurs niveaux de risque (les « tranches »), classés par priorité face aux pertes. La tranche junior (risquée) encaisse les premières pertes et est mieux payée ; la senior (prudente) n'est touchée qu'en dernier. Chez Re : reUSDe = junior, reUSD = senior.",
        avis: "Depuis quelques mois, de plus en plus de protocoles adoptent ce modèle de tranches — et c'est intéressant, car il te permet de t'exposer à une même stratégie avec plus ou moins de risque selon la tranche choisie. Le hic : ils précisent rarement les règles exactes de répartition des pertes, donc tu ne sais pas toujours combien tu perdrais ni à partir de quand. L'impact dépend aussi de la taille de chaque tranche : sur 100 € de pertes, si la tranche risquée ne contient que 60 €, elle est vidée et les 40 € restants rognent la tranche prudente ; si elle en contient 300 €, la prudente n'est pas touchée. D'où le réflexe : regarder la TVL de chaque tranche avant de déposer.",
      },
    ],
  },
];

// Petite fonction utilitaire : retrouver un numéro par son id.
export function getIssue(id: string): Issue | undefined {
  return issues.find((n) => n.id === id);
}
