// ===== Les données de tes numéros =====
// Chaque numéro est un objet rangé dans le tableau "issues".
// Pour ajouter le #2 plus tard : tu copies un objet et tu changes le contenu.
// L'affichage (les pages) lit ces données — il ne faut donc PAS toucher au design ici.

// Élément du corps d'une notion (format aéré, #2+) : paragraphe, sous-titre,
// ou encadré de définition (terme lié au glossaire).
export type NotionEl =
  | { type: "p"; texte: string }
  | { type: "st"; texte: string }
  | { type: "def"; terme: string; slug: string; texte: string }
  | { type: "liste"; items: string[] }
  | { type: "avis"; texte: string };

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
  actus: { titre: string; texte?: string; corps?: NotionEl[]; avis: string; source: string; defs?: { terme: string; slug: string; texte: string }[]; lien?: { label: string; href: string } }[];
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
  // varRef / sensRef : 2e colonne de variation, optionnelle — utilisée quand l'écart
  // entre deux numéros dépasse ~2 semaines (ex. #4 : « depuis le #3 »). Libellé = coursRefLabel.
  cours: { actif: string; nom?: string; prix: string; var7j: string; sens: "up" | "down"; varRef?: string; sensRef?: "up" | "down" }[];
  coursRefLabel?: string; // en-tête de la 2e colonne, ex. "Depuis le #3 (4 juillet)"
  coursHeure?: string; // heure de prise des cours (ex. "17h24")
  coursAvis?: string; // encadré « Notre avis » sous le tableau des cours
  data: { titre: string; texte: string; points?: string[]; texteFin?: string };
  definitions: { terme: string; en?: string; def: string; avis?: string; slug?: string }[];
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
  {
    id: "3",
    numero: 3,
    date: "Samedi 4 juillet 2026",
    titre: "La guerre des stablecoins",
    excerpt:
      "D'où vient l'argent des stablecoins, Open USD (le stablecoin des géants), Strategy s'autorise à vendre du bitcoin, et Ethena débarque chez BlackRock.",
    notion: {
      titre: "Un stablecoin, d'où vient l'argent qu'il rapporte ?",
      corps: [
        { type: "p", texte: "Cette semaine, tout le monde se bat pour lancer son stablecoin — Visa, Stripe, BlackRock… Pour comprendre pourquoi c'est devenu un tel enjeu, il faut regarder une chose : ce que peuvent rapporter les stablecoins, et qui empoche ces gains." },
        { type: "def", terme: "Rappel : les stablecoins (USDT / USDC / etc.)", slug: "stablecoin", texte: "conservent une valeur stable (celle d'une monnaie de référence), presque toujours le dollar. 1 USDC ≈ 1 $, en permanence. C'est le « cash » de la crypto." },
        { type: "st", texte: "Un jeton = un dollar bien réel quelque part" },
        { type: "p", texte: "Les stablecoins classiques fonctionnent comme un reçu : tu donnes 1 $ à l'émetteur (Tether pour l'USDT, Circle pour l'USDC), il te remet 1 jeton qui vaut 1 $, remboursable à tout moment. Pour que le système tienne, il faut que l'émetteur conserve le dollar qui a été apporté (ce sont les réserves), et qu'il ne crée pas plus de jetons (n'imprime pas plus de reçus) qu'il n'a de dollars en réserve." },
        { type: "p", texte: "Ces réserves ne dorment pas : elles sont placées." },
        { type: "st", texte: "D'où vient le rendement" },
        { type: "p", texte: "Un émetteur ne laisse pas des milliards de dollars sans les faire travailler. Il les place dans l'actif le plus sûr qui existe : les bons du Trésor américain, qui rapportent aujourd'hui autour de 3,75 % par an." },
        { type: "def", terme: "Bons du Trésor US", slug: "bons-du-tresor", texte: "des reconnaissances de dette de l'État américain. Le placement « sans risque » de référence en finance : on prête son argent au gouvernement, il verse un intérêt." },
        { type: "p", texte: "Sur des montants pareils, ça change tout. Un exemple concret :" },
        { type: "liste", items: [
          "l'USDT (Tether) pèse environ 185 milliards de dollars ;",
          "placés à ~3,75 %, ça produit de l'ordre de 7 milliards de dollars par an — c'est exactement ce que Tether a tiré de ses bons du Trésor en 2024 ;",
          "le tout avec une équipe minuscule et quasiment aucun coût.",
        ] },
        { type: "p", texte: "Résultat : sur l'ensemble de 2024, Tether a dégagé plus de 13 milliards de dollars de profit (le reste venant de l'or et du Bitcoin qu'il détient aussi) — l'un des bénéfices par salarié les plus élevés du monde." },
        { type: "st", texte: "Qui empoche ce rendement ?" },
        { type: "p", texte: "Toi, tu détiens le jeton ; l'émetteur détient ton dollar et touche les intérêts. Aujourd'hui, avec l'USDT et l'USDC, tout ce rendement va dans la poche de l'émetteur. Tu as un dollar stable, pratique — mais tu ne vois pas un centime de ce qu'il rapporte." },
        { type: "p", texte: "Ce n'est pourtant pas une fatalité : toute une génération de stablecoins reverse déjà tout ou partie de ce rendement aux détenteurs — l'USDe (Ethena), l'USD0 (Usual), l'USDY (Ondo)… Mais ils restent une petite fraction du marché et n'ont pas détrôné le duopole. Pourquoi ce succès limité ? Trois raisons :" },
        { type: "liste", items: [
          "Réglementaire — partager le rendement fait courir le risque d'être requalifié en titre financier (« security »). Résultat : accès restreint (souvent hors-US ou investisseurs qualifiés), donc mauvaise « monnaie du quotidien ».",
          "Effet de réseau / liquidité — l'USDT et l'USDC sont LA paire de base partout (exchanges, marchands, DeFi). Un jeton qui rapporte est un mauvais moyen d'échange → il reste un produit de placement, pas un « cash ».",
          "Complexité / risque — il faut souvent staker ses jetons (les bloquer : sUSDe, USD0++) pour toucher le rendement, celui-ci peut être spéculatif (parfois payé dans un token maison), et certains ont déjà dépeggé (perdu leur ancrage à 1 $) — l'USD0++ de Usual, sans oublier le krach de l'UST en 2022.",
        ] },
        { type: "avis", texte: "c'est LE modèle économique du secteur, et il est très rentable. Émettre un stablecoin, c'est encaisser les intérêts d'un placement fait avec l'argent des autres. On comprend que tant de géants de la finance veuillent leur part — et la nouveauté de la semaine, c'est justement qui débarque pour bousculer cette rente. On en parle juste en dessous." },
        { type: "st", texte: "Et les modèles plus compliqués ?" },
        { type: "p", texte: "Tous ne se valent pas côté risque. L'USDe d'Ethena, qu'on vient de citer, tire par exemple son rendement d'une stratégie de marché plutôt que de simples bons du Trésor — plus rémunérateur, mais aussi plus risqué. On le creuse plus loin (c'est notre protocole Sous la loupe) : retiens juste que la source du rendement change tout, et le risque avec." },
      ],
    },
    actus: [
      {
        titre: "Un stablecoin des géants de la finance pour concurrencer Tether et Circle",
        corps: [
          { type: "p", texte: "Une alliance de plus de 140 poids lourds de la finance traditionnelle — Visa, Mastercard, Stripe, BlackRock, BNY Mellon — lance son propre stablecoin, Open USD (projet « Open Standard »). Objectif affiché : casser le duopole de l'USDT (Tether) et de l'USDC (Circle)." },
          { type: "p", texte: "Le point qui nous intéresse, c'est son modèle de partage des revenus. On l'a vu juste au-dessus : les réserves d'un stablecoin sont placées en bons du Trésor et rapportent, et aujourd'hui Tether et Circle gardent l'intégralité de ce rendement. Open USD prend le contre-pied : les plateformes et protocoles qui l'intègrent touchent une part des revenus des réserves, moins une petite commission de gestion. Frapper et racheter des Open USD se fait par ailleurs sans frais." },
          { type: "p", texte: "Des stablecoins qui partagent leur rendement, il en existe pourtant déjà (USDe, USD0…) — et aucun n'a détrôné le duopole, faute de distribution. C'est là qu'Open USD peut changer la donne : Visa, Stripe ou Mastercard peuvent l'intégrer directement dans leurs produits, auprès de millions de commerçants et d'utilisateurs, à une échelle qu'aucun challenger crypto n'atteint. Le nerf de la guerre n'est plus la technologie, mais la puissance de déploiement." },
          { type: "def", terme: "Mint / frapper", slug: "mint", texte: "créer de nouveaux jetons. Pour un stablecoin, tu déposes des dollars et le protocole « frappe » l'équivalent en jetons ; à l'inverse, quand tu les rends, il les « rachète » (redeem) et te rend tes dollars." },
        ],
        avis:
          "l'important n'est pas qu'Open USD gagne, mais qu'il force Tether et Circle à partager le rendement qu'ils empochent seuls jusqu'ici. Rien que la concurrence peut suffire à faire bouger les lignes — et les gagnants seraient alors les plateformes et protocoles DeFi qui détiennent de gros dépôts en stablecoins (Aave, par exemple), avec au bout de la chaîne des rendements potentiellement meilleurs pour l'utilisateur. Beaucoup de ces géants ont longtemps combattu la crypto, et les voir débarquer en émetteurs a de quoi rendre méfiant. L'idéal ne serait pas qu'un mastodonte de la TradFi rafle la mise, mais qu'un émetteur né dans la crypto (Sky, Ethena, ou le GHO d'Aave) s'impose.",
        source: "joinopenstandard.com, The DeFi Investor",
      },
      {
        titre: "Le plus gros détenteur de bitcoin au monde s'autorise à en vendre",
        corps: [
          { type: "p", texte: "Strategy (ex-MicroStrategy, dirigée par Michael Saylor) est la plus grande DAT du monde : une société cotée en bourse qui, depuis 2020, lève des capitaux à une seule fin — accumuler du bitcoin. Elle en détient aujourd'hui environ 847 000, soit près de 52 milliards de dollars au cours actuel." },
          { type: "p", texte: "Le 29 juin, Strategy officialise un cadre qui l'autorise à vendre jusqu'à 1,25 milliard de dollars de bitcoin (~2,5 % de son stock). Ça te dit quelque chose ? On en parlait déjà dans notre tout premier numéro : fin mai, Strategy cédait 32 bitcoins (~2,5 M$) pour honorer un paiement — une goutte d'eau, disions-nous. La nouveauté n'est donc pas la vente en soi, mais qu'elle devienne une politique permanente, votée par le conseil, au plafond ~500 fois plus élevé." },
          { type: "p", texte: "Pourquoi maintenant ? Son moteur historique tournait tant que son action valait, en Bourse, bien plus cher que les bitcoins qu'elle détient. Cet écart a un nom : le mNAV — le rapport entre la valeur boursière de Strategy et celle de son trésor. Tant qu'il dépasse largement 1, l'entreprise peut émettre des actions « à prime » pour racheter encore plus de BTC : chaque levée crée de la valeur. Sauf que ce mNAV est aujourd'hui retombé autour de 1, et le moteur cale : autrement dit, Strategy vaut désormais en Bourse à peu près ce que valent ses bitcoins — la prime qui faisait toute la magie a disparu." },
          { type: "p", texte: "Pendant ce temps, Strategy doit verser chaque année environ 1,8 milliard de dollars de dividendes et d'intérêts sur ses actions préférentielles (dont les fameuses STRC, qui ont beaucoup fait parler ces dernières semaines). D'où le filet de sécurité annoncé :" },
          { type: "liste", items: [
            "une réserve en dollars (plus de 12 mois de dividendes d'avance) ;",
            "et, si besoin, la possibilité de vendre un peu de bitcoin.",
          ] },
          { type: "def", terme: "DAT (Digital Asset Treasury)", slug: "dat", texte: "littéralement « trésorerie d'actifs numériques ». Une société cotée en bourse dont la trésorerie est massivement investie en crypto-actifs (le plus souvent du bitcoin), au point d'en faire le cœur de son activité. Acheter son action revient à s'exposer indirectement à sa réserve." },
        ],
        avis:
          "faiblesse ou maturité ? Plutôt une maturation qu'une capitulation. Strategy ne renie pas le bitcoin — elle le réaffirme comme actif de réserve principal ; elle passe simplement d'un modèle « accumuler à tout prix » à un modèle « gérer son bilan sur la durée ». C'est plus sain : ça réduit le risque d'une vente forcée en catastrophe le jour où le marché baisse. Mais l'annonce révèle aussi les limites du modèle : il n'est invincible que tant que le bitcoin monte et que la prime tient. Dans un prochain article, on décortiquera en détail comment Strategy a fait évoluer ses méthodes pour lever des fonds — et quels indicateurs surveiller pour juger une DAT, à commencer par le mNAV.",
        source: "communiqué Strategy du 29 juin 2026 + dépôt 8-K (SEC) ; CoinDesk, The Block, Bitcoin Magazine",
      },
    ],
    protocole: {
      nom: "Ethena (USDe & sUSDe)",
      slug: "ethena",
      bref:
        "Ethena émet l'USDe, un « dollar synthétique » qui vaut environ 1 $. Contrairement aux stablecoins classiques (adossés à du vrai cash ou des bons du Trésor), l'USDe n'est pas garanti par des dollars en banque : il tient sa valeur grâce à une stratégie de marché.",
      etapes: [
        "Le protocole détient de l'ETH et, en même temps, parie à la baisse sur l'ETH pour le même montant (une position « short » sur des contrats à terme).",
        "Résultat : si le prix de l'ETH monte, il gagne d'un côté et perd de l'autre ; s'il baisse, l'inverse. Les deux se neutralisent, et la valeur reste stable — c'est la stratégie dite « delta-neutre ».",
      ],
      rendement:
        "En stakant ton USDe, tu reçois du sUSDe — c'est lui qui capte le rendement. Celui-ci vient de deux sources : les intérêts que paient les traders qui parient à la hausse sur l'ETH (ce qu'on appelle le funding), et le rendement du staking de l'ETH détenu. Le sUSDe rapporte actuellement ~3,8 % par an — un niveau bas, cohérent avec la correction de marché du moment. Ce rendement suit le sentiment du marché : il grimpe quand tout le monde est haussier (beaucoup de traders paient pour parier à la hausse). Historiquement, il a été beaucoup plus élevé en période de hausse des marchés.",
      risqueNiveau: "moyen",
      risqueSens: "moyen",
      risques:
        "Trois risques principaux. Funding négatif : en marché baissier durable, le funding peut devenir négatif — le rendement s'effondre, voire coûte au protocole (un fonds de réserve d'environ 1 % de la taille amortit ce genre de passage, mais seulement de façon temporaire). Dépendance aux plateformes : les positions sont ouvertes sur des plateformes d'échange ; si l'une fait défaut, une partie du dispositif est menacée. Dépeg : en cas de stress extrême, l'USDe peut décrocher de son dollar. Pourquoi « moyen » et pas « élevé » ? L'USDe n'est pas un stablecoin algorithmique bancal : il est réellement collatéralisé, c'est l'un des plus gros du secteur, il a traversé plusieurs cycles sans casser son ancrage et dispose d'un fonds de réserve. Ce qui l'empêche d'être « faible », c'est surtout sa dépendance à des plateformes d'échange centralisées et à un funding qui peut se tarir. Bref : une stratégie de marché, pas un dollar dormant à la banque — un risque réel, mais maîtrisé.",
      importance:
        "Cette semaine, l'USDe est désormais intégré chez BlackRock, via Aladdin, sa plateforme de gestion d'actifs (plus de 20 000 milliards de dollars d'actifs suivis), avec son fonds tokenisé BUIDL comme collatéral.",
    },
    cours: [
      { actif: "BTC", nom: "Bitcoin", prix: "~63 370 $", var7j: "▲ +5,0 %", sens: "up" },
      { actif: "ETH", nom: "Ethereum", prix: "~1 791 $", var7j: "▲ +13,3 %", sens: "up" },
      { actif: "SOL", nom: "Solana", prix: "~82,0 $", var7j: "▲ +14,9 %", sens: "up" },
      { actif: "HYPE", nom: "Hyperliquid", prix: "~70,1 $", var7j: "▲ +11,9 %", sens: "up" },
      { actif: "BNB", prix: "~574 $", var7j: "▲ +2,2 %", sens: "up" },
    ],
    coursAvis:
      "rebond quasi général cette semaine, porté surtout par la Fed — un rapport sur l'emploi américain décevant a éloigné la menace d'une hausse des taux. Côté ETF Bitcoin, prudence : après un mois de juin de sorties massives, les flux ne font que commencer à se stabiliser, rien de plus. Les « alts » (ETH, SOL, HYPE) rebondissent plus fort que le bitcoin, comme souvent quand l'appétit pour le risque revient. Attention toutefois : ça ne suffit pas à décréter la fin du marché baissier — un juillet haussier pourrait très bien précéder un nouveau point bas cet été avant une reprise à l'automne.",
    data: {
      titre: "ETF Bitcoin US : −4 milliards de dollars en juin 2026",
      texte:
        "C'est le pire mois de sorties depuis le lancement de ces ETF (janvier 2024). Les flux nets mensuels des ETF Bitcoin spot US en 2026 :",
      points: [
        "Janvier : −1,6 Md$",
        "Février : −0,2 Md$",
        "Mars : +1,3 Md$",
        "Avril : +2,4 Md$",
        "Mai : −3,2 Md$",
        "Juin : −4,1 Md$",
      ],
      texteFin:
        "Le printemps encore positif (mars-avril) s'est brutalement inversé en mai-juin. Notre avis : depuis leur pic, ces ETF ont rendu près de 10 Md$ — environ 15 % de tout ce qu'ils avaient accumulé. Ce niveau de capitulation s'observe souvent à l'approche d'un point bas de marché, et nous pensons que nous en sommes proches.",
    },
    definitions: [
      {
        terme: "Dépeg",
        slug: "depeg",
        def: "quand un stablecoin décroche de sa valeur cible : un jeton censé valoir 1 $ qui tombe, par exemple, à 0,95 $. Signe d'une perte de confiance ou d'un problème sur les réserves — et rien ne garantit le retour à 1 $. Cas célèbres : l'UST de Terra effondré à zéro en 2022, ou l'USDC brièvement tombé à 0,87 $ en 2023.",
      },
      {
        terme: "mNAV",
        slug: "mnav",
        def: "pour une DAT (comme Strategy), le rapport entre sa valeur en Bourse et la valeur totale des cryptos qu'elle détient. Au-dessus de 1 : l'entreprise vaut plus que ses bitcoins — elle peut émettre des actions « chères » et les convertir en bitcoin « au prix réel », donc lever des fonds crée de la valeur. À 1 : elle vaut pile ses bitcoins. En dessous de 1 : elle vaut moins que son trésor, et émettre des actions détruit alors de la valeur (autant acheter le bitcoin en direct).",
      },
    ],
  },
  {
    id: "4",
    numero: 4,
    date: "Vendredi 28 août 2026",
    titre: "Les perps, décryptés",
    excerpt:
      "Le contrat perpétuel expliqué simplement, Revolut lance son stablecoin euro pendant que Tether quitte l'Europe, la SEC écrit ses propres règles, et comment encaisser le funding sans s'exposer au prix du bitcoin.",
    notion: {
      titre: "Le contrat perpétuel : parier sur un prix sans jamais posséder l'actif",
      corps: [
        { type: "p", texte: "À l'inverse d'un investissement classique où on achète un jeton, une action ou un actif, avec un contrat perpétuel — un « perp » —, tu ne détiens rien du tout : tu passes un accord dont le gain ou la perte dépend uniquement du mouvement d'un prix, mais ni l'acheteur ni le vendeur ne détient l'actif en question." },
        { type: "def", terme: "Contrat perpétuel (« perp »)", slug: "contrat-perpetuel", texte: "Un contrat qui suit le prix d'un actif (bitcoin, ether…) sans qu'on le possède. On choisit un sens : à la hausse (long) ou à la baisse (short). Si le prix va dans ton sens, tu gagnes la différence ; sinon tu la perds. Particularité : il n'a pas de date d'expiration — d'où « perpétuel » — et surtout il n'y a pas de sous-jacent réel : lorsqu'on parie sur la hausse du BTC, on ne détient pas de BTC." },
        { type: "p", texte: "Le mécanisme n'est pas une invention de la crypto : en Bourse, un contrat à terme (future) sur le pétrole ou le blé fait la même chose depuis toujours — deux parties fixent un prix de référence et, à l'échéance, ne se règlent que l'écart entre ce prix et le prix réel. Ce qui distingue le perp, c'est justement l'absence d'échéance : un future classique expire à une date connue et doit être renouvelé, là où un perp reste ouvert indéfiniment." },
        { type: "st", texte: "Alors d'où sort l'argent gagné ?" },
        { type: "p", texte: "Puisque personne ne détient de bitcoin, il faut bien que les gains viennent de quelque part. Ils viennent de la poche d'un autre parieur. Chaque contrat a deux côtés : un parieur à la hausse, un parieur à la baisse. Et les deux camps s'équilibrent toujours exactement, par construction — pour payer une position gagnante, il faut quelqu'un d'autre en face dans une position inverse." },
        { type: "p", texte: "Si le bitcoin monte, l'acheteur gagne ce que le vendeur perd. Rien n'est créé, rien ne disparaît." },
        { type: "st", texte: "En pratique : le levier" },
        { type: "p", texte: "Tu n'as pas besoin d'avancer la totalité de la somme. Tu déposes une garantie — la marge — et la plateforme te laisse contrôler une position bien plus grosse." },
        { type: "def", terme: "Levier", slug: "levier", texte: "Le rapport entre la taille de ta position et l'argent que tu as réellement déposé. Avec 100 € de garantie et un levier de 20×, tu pilotes une position de 2 000 € (100 € × 20 = 2 000 €)." },
        { type: "p", texte: "Les gains comme les pertes se calculent sur les 2 000 €, pas sur tes 100 €. Un mouvement de 5 % dans le bon sens te fait gagner 100 € — tu doubles ta mise de base. Le même mouvement de 5 % dans le mauvais sens te fait perdre la totalité de ta mise." },
        { type: "liste", items: ["40× au maximum sur le bitcoin, chez Hyperliquid", "25× sur l'ether", "20× sur Solana"] },
        { type: "p", texte: "Plus l'actif est volatil, plus le levier autorisé est bas." },
        { type: "st", texte: "Là où ça casse : la liquidation" },
        { type: "p", texte: "Ta marge sert d'amortisseur : quand ce qu'il en reste passe sous un seuil minimum, la plateforme ferme la position d'office. C'est la liquidation." },
        { type: "def", terme: "Liquidation", slug: "liquidation", texte: "Fermeture forcée d'une position par la plateforme quand la marge ne couvre plus suffisamment la perte. Elle est automatique : personne ne t'appelle, il n'y a rien à valider, et l'essentiel de ta mise est perdu." },
        { type: "p", texte: "La règle à retenir tient en une division : 100 ÷ ton levier. Le résultat, c'est le mouvement de prix — en pourcentage, et dans le mauvais sens — qui suffit à effacer ta mise." },
        { type: "liste", items: ["à 5×, il faut une baisse de 20 %", "à 20×, 5 % suffisent", "à 40×, 2,5 % suffisent"] },
        { type: "p", texte: "En pratique, tu seras liquidé un peu avant d'atteindre ce niveau : Hyperliquid t'oblige à conserver en permanence un petit reliquat. Dans l'exemple à 20×, la fermeture intervient plutôt vers 3,75 % de baisse, et il te restera une vingtaine d'euros sur ton compte." },
        { type: "p", texte: "Conséquence : le prix peut te donner raison quand même — s'il baisse de 5 % puis remonte, peu importe : la position a été fermée au passage, tu n'es plus dedans." },
        { type: "st", texte: "Le funding rate : ce qui tient le prix en place" },
        { type: "p", texte: "Comme personne ne détient l'actif, comment s'assurer que le prix du perp colle à celui de l'actif ? Sur Hyperliquid, le prix du perp est fixé par l'offre et la demande entre les utilisateurs : le carnet d'ordres fonctionne comme celui d'une plateforme d'échange classique, à ceci près qu'il est entièrement inscrit sur la blockchain." },
        { type: "p", texte: "Or rien ne relie mécaniquement les deux prix. Imagine que le bitcoin vaille 80 000 $ et que tout le monde se précipite pour acheter le contrat à la hausse : le perp va rapidement coûter bien plus cher que le bitcoin lui-même. Il a donc fallu inventer un système pour recréer l'équilibre : le funding rate." },
        { type: "def", terme: "Funding rate", slug: "funding-rate", texte: "Un paiement récurrent entre les deux camps du marché : le camp majoritaire paie l'autre. Ce n'est jamais la plateforme qui l'encaisse, l'argent circule d'un utilisateur à l'autre. Chez Hyperliquid, il est prélevé toutes les heures ; ailleurs, le standard est toutes les 8 heures." },
        { type: "p", texte: "S'il y a beaucoup de demande à la hausse sur le bitcoin, le prix du contrat monte au-dessus du prix réel (une référence reconstituée à partir des grandes plateformes d'échange — Binance, OKX, Kraken, Huobi — et republiée toutes les 3 secondes). Le funding devient alors positif et les parieurs à la hausse paient une sorte de « taxe » aux parieurs à la baisse, toutes les heures tant que la position est ouverte." },
        { type: "p", texte: "Parier à la hausse coûte donc de l'argent en continu, tandis que parier à la baisse en rapporte. Ce qui décourage les premiers, attire les seconds, et ramène mécaniquement les deux prix l'un vers l'autre. Voilà comment un contrat qui ne repose sur rien de tangible reste malgré tout collé au prix réel du bitcoin." },
        { type: "st", texte: "Pourquoi ça compte maintenant" },
        { type: "p", texte: "Les perps sont devenus le produit le plus utilisé de la crypto, très loin devant l'achat de jetons au comptant : on peut y gagner à la baisse, et il n'y a rien à détenir ni à stocker. Ce succès produit deux flux bien réels — les frais de transaction payés à chaque ordre, et le funding que le camp majoritaire verse à l'autre." },
        { type: "avis", texte: "Le levier ne pardonne pas. À 40×, un mouvement contraire de 2,5 % suffit à effacer la mise — et le bitcoin franchit ce seuil environ cinq fois par mois. Ce n'est pas un outil pour investir sur la durée, mais pour tenter des coups courts, avec tout l'aléa que ça suppose. Le funding, lui, ouvre une piste nettement plus intéressante : encaisser un rendement sans s'exposer aux variations du bitcoin." },
      ],
    },
    actus: [
      {
        titre: "Tether quitte l'Europe, Revolut en profite pour lancer son stablecoin euro",
        corps: [
          { type: "p", texte: "Pour être proposé aux clients européens, un stablecoin doit avoir un agrément MiCA. Tether, l'émetteur de l'USDT — le plus gros stablecoin du monde — a fait savoir qu'il ne le demanderait pas : ses dirigeants jugent les exigences européennes incompatibles avec leur modèle." },
          { type: "p", texte: "Depuis, les plateformes régulées en Europe retirent l'USDT une par une. Coinbase avait ouvert le bal dès décembre 2024, et le mouvement était pratiquement terminé au 1er juillet 2026, la date limite fixée par le règlement." },
          { type: "p", texte: "Revolut ferme la marche : le 31 août, l'USDT disparaît de son application pour les clients européens." },
          { type: "p", texte: "Et cinq jours avant cette échéance, la fintech a lancé son propre stablecoin : EURR, adossé à l'euro (1 EURR = 1 €). Elle ne l'émet pas elle-même — c'est Bridge, la société d'infrastructure rachetée par Stripe, qui l'émet depuis le Luxembourg et gère les réserves sous le régime MiCA." },
          { type: "p", texte: "Le déploiement commence par des clients sélectionnés au Danemark, en Pologne et au Portugal, avant le reste de l'Espace économique européen, annoncé pour plus tard cette année." },
          { type: "st", texte: "Si tu détiens des USDT chez Revolut" },
          { type: "liste", items: ["les transférer vers ton propre portefeuille", "les échanger contre des euros ou un autre stablecoin agréé", "ne rien faire — Revolut les convertira automatiquement dans la devise de ton compte après le 31 août"] },
        ],
        defs: [{ terme: "MiCA", slug: "mica", texte: "Le règlement européen qui encadre les crypto-actifs. Pour émettre un stablecoin dans l'Union, il impose un agrément, des réserves cantonnées et un droit au remboursement à tout moment. Sans agrément, un stablecoin ne peut plus être proposé aux clients européens." }],
        avis: "Revolut ne fait pas que se mettre en règle : émettre un stablecoin, c'est placer l'argent déposé et en encaisser les intérêts — on expliquait ce modèle dans le numéro #3. Avec quelque 75 millions de clients déjà à l'aise avec ce type d'outils, la fintech a les moyens de devenir un acteur qui compte dans la crypto européenne.",
        source: "PYMNTS, CoinDesk, Cointelegraph, crypto.news, Yahoo Finance",
      },
      {
        titre: "La SEC a cessé d'attendre le Congrès et a écrit ses propres règles",
        corps: [
          { type: "p", texte: "Aux États-Unis, deux voies très différentes permettent d'encadrer la crypto : une loi doit être votée par le Congrès — la Chambre, puis le Sénat ; un règlement est écrit par une agence, ici la SEC (le gendarme de la Bourse américaine), sans passer par le moindre vote parlementaire." },
          { type: "p", texte: "La loi attendue, c'est le Clarity Act : elle tranche qui surveille quoi entre la SEC et la CFTC (l'autorité des marchés de matières premières). Adoptée par la Chambre, passée en commission au Sénat, elle n'a pas été votée avant l'été. Un vote est programmé le 15 septembre, mais ce n'est pas le vote final : seulement l'autorisation d'ouvrir le débat, et elle exige 60 voix." },
          { type: "p", texte: "Ce qui bloque est précis : le texte interdirait aux responsables fédéraux, président compris, d'émettre ou de parrainer un crypto-actif. Or Donald Trump a tiré plus de 1,4 milliard de dollars de la crypto en 2025 — près des deux tiers de ses revenus — notamment via World Liberty Financial, la société cofondée par des membres de sa famille. Des élus démocrates jugent la clause trop permissive : elle expirerait en 2029 et laisse, selon eux, assez d'échappatoires pour que rien ne change vraiment." },
          { type: "p", texte: "Le marché n'y croit plus : sur Polymarket, la probabilité d'une signature en 2026 est tombée à environ 15 %." },
          { type: "p", texte: "D'où la manœuvre du 18 août : la SEC a proposé seule « Regulation Crypto Assets », sa première grande réglementation crypto depuis dix ans." },
          { type: "liste", items: ["une exemption de levée de fonds — un projet peut lever jusqu'à 75 M$ par période de 12 mois sans la procédure complète imposée aux titres financiers", "un safe harbor — passé un certain stade, la SEC s'engage à ne plus traiter le jeton d'un projet comme un titre financier"] },
        ],
        defs: [{ terme: "Safe harbor", slug: "safe-harbor", texte: "Littéralement « port d'abri ». Vendre un titre financier aux États-Unis impose des obligations lourdes (prospectus, enregistrement, rapports), et la SEC considérait jusqu'ici que la plupart des jetons en relevaient. Le safe harbor fixe le moment où ça s'arrête : dès que le projet tourne sans dépendre du travail de son équipe fondatrice, son jeton cesse d'être traité comme un titre financier." }],
        avis: "Le secteur obtient enfin des repères écrits, et c'est la vraie nouvelle : les projets américains pourront lever des fonds sans être traités d'office comme des titres financiers — donc davantage de jetons accessibles, dans un cadre plus lisible, y compris depuis l'Europe. Mais un règlement d'agence n'a pas le poids d'une loi : il est plus rapide à obtenir, et tout aussi rapide à défaire. La clarté existe donc, mais elle reste réversible.",
        source: "SEC.gov (proposition du 18 août 2026) ; CoinDesk ; Latham & Watkins ; Troutman ; Quartz ; Polymarket",
      },
    ],
    protocole: {
      nom: "La stratégie delta-neutre sur Hyperliquid",
      slug: "hyperliquid",
      bref: "Sur les perp DEX qui fonctionnent avec des funding fees, comme Hyperliquid, dès que la demande penche d'un côté, le camp majoritaire verse un funding à l'autre. Comme les acheteurs sont majoritaires la plupart du temps, ce sont généralement eux qui paient. D'où l'idée : se placer du côté qui encaisse, sans s'exposer à l'évolution du prix. Hyperliquid est la plus grosse plateforme de contrats perpétuels — 8,3 Md$ échangés en 24 h, près de 10 Md$ de positions ouvertes — et son carnet d'ordres est entièrement inscrit sur la blockchain.",
      etapes: [
        "Quand le marché s'emballe, le funding grimpe : jusqu'à 33 % par an sur le bitcoin ces six derniers mois, et jusqu'à 73 % sur l'ether. À ces niveaux, être vendeur rapporte gros — mais signifie normalement parier contre le bitcoin.",
        "Sauf si on annule ce risque : on ouvre une position vendeuse (short) sur le perp bitcoin chez Hyperliquid, ET on achète le même montant de bitcoin au comptant sur une plateforme d'échange (Kraken, Binance…).",
        "Si le bitcoin monte, le short perd exactement ce que le comptant gagne. S'il baisse, l'inverse. Les deux jambes s'annulent : on n'est plus exposé au prix. C'est ce qu'on appelle être delta-neutre.",
        "Ce qui n'est pas annulé, c'est le funding : il continue de tomber sur la jambe vendeuse, quoi qu'il arrive au prix.",
        "Exemple chiffré : 10 000 $ de bitcoin au comptant + 2 000 $ de marge chez Hyperliquid pour un short de 10 000 $ (levier 5×) = 12 000 $ engagés. Le levier ne sert pas à amplifier le gain — déjà annulé par la jambe au comptant — mais à éviter d'immobiliser 10 000 $ de plus : le funding se calcule sur la taille de la position, pas sur la marge déposée.",
        "En contrepartie, à 5×, une hausse de 20 % du bitcoin liquide la position vendeuse.",
      ],
      rendement:
        "Avec un funding à 30 % par an, la position de 10 000 $ rapporte 3 000 $ sur un an, soit environ 25 % des 12 000 $ réellement immobilisés. Sauf que ces niveaux ne durent pas : sur les six derniers mois, le funding du bitcoin chez Hyperliquid a rapporté 4,2 % par an en moyenne, et il est resté négatif un quart du temps — c'est-à-dire que le vendeur payait au lieu d'encaisser. Le rendement existe vraiment, mais il est irrégulier : c'est une stratégie d'opportunité, à ouvrir quand le funding est haut. Certains actifs offrent un funding plus stable que d'autres, et les taux varient fortement d'une plateforme à l'autre.",
      risqueNiveau: "moyen",
      risqueSens: "moyen",
      risques:
        "Pourquoi « moyen » et pas « élevé » ? Parce que le risque principal en crypto — celui du prix — est justement neutralisé. Même le pire scénario reste amorti : si le short est liquidé parce que le bitcoin s'envole, on perd sa marge, mais le bitcoin au comptant a gagné autant en face. On ne perd pas son capital, on perd sa couverture. Ce qui l'empêche d'être « faible », c'est le reste : neutraliser le prix ne neutralise ni les plateformes, ni le rendement. Et ce niveau suppose une exécution correcte : deux jambes strictement de même taille, ouvertes en même temps, et une marge surveillée — sinon il ne reste qu'une position à levier ordinaire. Trois risques concrets : le funding peut s'inverser (c'est alors toi qui paies) ; la jambe vendeuse peut être liquidée, et comme les deux jambes sont sur deux plateformes différentes, le gain sur le comptant ne renfloue pas automatiquement la marge du short — on se retrouve alors avec du bitcoin non couvert sans s'en rendre compte ; enfin, les fonds sont exposés à deux plateformes à la fois.",
      importance:
        "C'est exactement la stratégie qu'on a présentée dans le numéro #3 avec Ethena : détenir l'actif au comptant, le shorter en perp, encaisser le funding. Ethena n'a rien inventé — elle a industrialisé l'opération à grande échelle et emballé le résultat dans un jeton, l'USDe. Le funding est la matière première d'un des plus gros protocoles du secteur.",
    },
    cours: [
      { actif: "BTC", nom: "Bitcoin", prix: "~79 415 $", var7j: "▲ +2,2 %", sens: "up", varRef: "▲ +25 %", sensRef: "up" },
      { actif: "ETH", nom: "Ethereum", prix: "~2 491 $", var7j: "▲ +4,2 %", sens: "up", varRef: "▲ +39 %", sensRef: "up" },
      { actif: "SOL", nom: "Solana", prix: "~106,5 $", var7j: "▲ +16,8 %", sens: "up", varRef: "▲ +30 %", sensRef: "up" },
      { actif: "HYPE", nom: "Hyperliquid", prix: "~83,3 $", var7j: "▲ +12,8 %", sens: "up", varRef: "▲ +19 %", sensRef: "up" },
      { actif: "BNB", prix: "~705 $", var7j: "▲ +5,0 %", sens: "up", varRef: "▲ +23 %", sensRef: "up" },
    ],
    coursRefLabel: "Depuis le #3 (4 juillet)",
    coursAvis:
      "Deux lectures très différentes selon la colonne. Sur sept jours, le bitcoin ne fait que consolider : le gros du mouvement date de la semaine précédente, quand la SEC a publié ses propres règles le 18 août. Solana et Hyperliquid, eux, continuent de grimper — signe classique d'un appétit pour le risque qui se déplace vers les actifs plus nerveux. Mais c'est la colonne de droite qui raconte l'été : tout est en hausse de 19 à 39 % depuis notre dernier numéro.",
    data: {
      titre: "Sur 5 dollars qui entrent dans un ETF Ethereum, 4 vont chez BlackRock",
      texte:
        "Les ETF Ethereum américains viennent d'enchaîner 9 séances positives d'affilée. La dernière, mercredi, a été la plus forte du mois : 234 millions de dollars en une journée. Sur l'ensemble d'août, ces fonds ont attiré 1,66 milliard de dollars.",
      points: [
        "Le 24 août, sur 116 M$ entrés dans l'ensemble des ETF Ethereum, 90,9 M$ sont allés dans un seul fonds : l'ETHA de BlackRock. Soit près de 80 %.",
        "Même schéma sur la semaine du 17 au 21 août : 697 M$ d'entrées, dont 537 M$ pour BlackRock.",
      ],
      texteFin:
        "Ce flux a alimenté la remontée de l'ether cet été. Mais il dit aussi autre chose : l'argent institutionnel qui arrive sur l'ethereum ne se répartit pas entre une dizaine d'acteurs. Il se concentre chez un seul gestionnaire, qui devient mécaniquement l'un des plus gros détenteurs d'ether de la planète.",
    },
    definitions: [
      { terme: "Open interest", en: "positions ouvertes", slug: "open-interest", def: "Le montant total des paris encore ouverts sur un marché, à un instant donné. À ne pas confondre avec le volume : le volume dit combien on a échangé sur la journée, l'open interest dit combien d'argent est toujours engagé. Un volume élevé avec un open interest qui baisse signale que les traders soldent leurs positions ; un open interest qui grimpe signale au contraire que de l'argent frais entre — et que les liquidations potentielles grossissent d'autant." },
      { terme: "Oracle", slug: "oracle", def: "Le mécanisme qui apporte à une blockchain une information qu'elle ne peut pas connaître seule, à commencer par le prix d'un actif. Une blockchain ne « voit » pas le cours du bitcoin : il faut le lui livrer. Les principaux fournisseurs sont Chainlink, de loin le plus utilisé — il alimente Aave, Compound et l'essentiel de la DeFi —, Pyth, spécialisé dans les mises à jour en moins d'une seconde, ce qui en fait la référence des plateformes de perps, ainsi que RedStone et Chronicle." },
    ],
  },
];

// Petite fonction utilitaire : retrouver un numéro par son id.
export function getIssue(id: string): Issue | undefined {
  return issues.find((n) => n.id === id);
}
