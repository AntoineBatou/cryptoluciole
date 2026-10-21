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
  | { type: "avis"; texte: string; items?: string[]; suite?: string[] }
  | { type: "image"; src: string; legende: string }
  // Tableau simple (#7+) : en-têtes + lignes de cellules (texte brut).
  | { type: "tableau"; entetes: string[]; lignes: string[][] };

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
  // avisItems (#7+) : « Notre avis » en puces, affichées sous `avis` (qui peut alors être vide).
  actus: { titre: string; texte?: string; corps?: NotionEl[]; avis: string; avisItems?: string[]; source: string; defs?: { terme: string; slug: string; texte: string }[]; lien?: { label: string; href: string } }[];
  // protocole : optionnel — un numéro peut ne pas avoir de SOUS LA LOUPE (ex. #6).
  protocole?: {
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
    // Variantes riches (#7+), toutes optionnelles — les numéros 1-5 n'en ont pas besoin.
    etapesCorps?: NotionEl[]; // « Comment ça marche » en blocs (sous-titres, encadrés, listes)
    rendementLabel?: string; // libellé du bloc rendement (défaut « Le rendement »)
    rendementCorps?: NotionEl[]; // bloc rendement en plusieurs paragraphes / listes
    risquesItems?: string[]; // risques en puces, sous `risques`
    importanceSuite?: string[]; // paragraphes supplémentaires de « Pourquoi ça compte »
  };
  // varRef / sensRef : 2e colonne de variation, optionnelle — utilisée quand l'écart
  // entre deux numéros dépasse ~2 semaines (ex. #4 : « depuis le #3 »). Libellé = coursRefLabel.
  cours: { actif: string; nom?: string; prix: string; var7j: string; sens: "up" | "down" | "flat"; varRef?: string; sensRef?: "up" | "down" | "flat" }[];
  // cours7jLabel (#7+) : remplace l'en-tête « 7 jours » quand l'écart réel diffère (ex. « Depuis notre n°6 (8 jours) »).
  cours7jLabel?: string;
  coursRefLabel?: string; // en-tête de la 2e colonne, ex. "Depuis le #3 (4 juillet)"
  coursHeure?: string; // heure de prise des cours (ex. "17h24")
  coursAvis?: string; // encadré « Notre avis » sous le tableau des cours
  coursAvisCorps?: NotionEl[]; // variante riche (puces, plusieurs paragraphes), ex. #6
  // data.corps : suite riche de ÇA BRILLE (graphiques, sous-titres, avis), rendue sous la carte (#6+).
  // data.def : encadré de définition affiché DANS la carte, sous le texte (#7+).
  data: { titre: string; texte: string; def?: { terme: string; slug: string; texte: string }; points?: string[]; texteFin?: string; corps?: NotionEl[] };
  // À toi de jouer (optionnel) : appel à répondre + sondage A/B.
  jeu?: { cta: string; question: string; a: string; b: string };
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
  {
    id: "5",
    numero: 5,
    date: "Jeudi 10 septembre 2026",
    titre: "Emprunter contre ses cryptos",
    excerpt: "Le CDP expliqué simplement, Strategy vend bas et rachète haut, le pétrole pousse la Fed vers une hausse des taux, et Liquity V2 — le protocole où c'est toi qui fixes ton taux.",
    notion: {
      titre: "Le CDP : emprunter contre ses cryptos au lieu de les vendre",
      corps: [
        {
          type: "p",
          texte: "Au #4, on expliquait comment parier sur le prix du bitcoin sans jamais le détenir. Cette semaine, l'inverse : comment te servir des cryptos que tu détiens comme garantie pour emprunter."
        },
        {
          type: "st",
          texte: "Le principe"
        },
        {
          type: "p",
          texte: "Tu bloques des cryptos que tu possèdes pour obtenir un prêt. Le protocole garde tes bitcoins ou tes ethers, et te prête en échange des stablecoins, que tu peux dépenser librement. Il est certain d'être remboursé pour une raison simple : il te prête toujours moins, en valeur, que ce que tu as déposé. Le jour où tu rembourses, tu récupères ton dépôt."
        },
        {
          type: "def",
          terme: "CDP",
          slug: "cdp",
          texte: "Une position de dette garantie par un dépôt. Ton dépôt n'est pas prêté à quelqu'un d'autre : il reste à toi, simplement immobilisé jusqu'au remboursement."
        },
        {
          type: "p",
          texte: "L'équivalent existe depuis longtemps en banque privée française : le crédit lombard. Tu nantis ton portefeuille de titres auprès de ta banque, elle te consent une ligne de liquidités, et tu n'as rien vendu. Même logique — et, comme en banque, l'établissement peut vendre les titres si leur valeur passe sous un seuil."
        },
        {
          type: "st",
          texte: "Comment ça marche, étape par étape"
        },
        {
          type: "p",
          texte: "Prenons un exemple : tu déposes 100 $ de bitcoin sur un protocole de CDP. Ta crypto devient ta garantie, on appelle cela ton collatéral."
        },
        {
          type: "def",
          terme: "Collatéral",
          slug: "collateral",
          texte: "L'actif que tu bloques en garantie de ton emprunt. Tu ne peux plus y toucher tant que la dette n'est pas remboursée."
        },
        {
          type: "p",
          texte: "Tu choisis ensuite combien tu empruntes. Le rapport entre ce que tu empruntes et ce que tu as déposé s'appelle le LTV. Chaque protocole fixe un plafond, le LLTV : le LTV maximum au-delà duquel ta position est liquidée."
        },
        {
          type: "def",
          terme: "LTV",
          slug: "ltv",
          texte: "Ta dette rapportée à la valeur de ta garantie. Emprunter 60 $ contre 100 $ de dépôt, c'est un LTV de 60 % (60 ÷ 100). Le LLTV est le plafond à ne pas franchir : souvent de l'ordre de 80 % pour un actif liquide comme le bitcoin ou l'ether."
        },
        {
          type: "p",
          texte: "Avec un plafond à 80 %, tu peux emprunter jusqu'à 80 $. Admettons que tu n'en empruntes que 60 $, par sécurité. Le protocole émet alors les 60 $ de stablecoins : il ne pioche pas dans une réserve existante, il crée les jetons à cet instant, adossés à ton dépôt. C'est le mint."
        },
        {
          type: "def",
          terme: "Mint",
          slug: "mint",
          texte: "La création de nouveaux jetons par un protocole, à la demande. À l'inverse, quand tu rembourses, les jetons sont détruits (burn) : ils cessent d'exister."
        },
        {
          type: "p",
          texte: "Ton collatéral peut baisser. Ta dette, elle, reste figée à 60 $ : elle est libellée en dollars. Ici, tu es liquidé si ton bitcoin tombe à 75 $ — à ce moment-là, ta dette de 60 $ atteint 80 % de ton collatéral (60 ÷ 75 = 0,80). Soit une baisse de 25 % par rapport à ton dépôt de départ."
        },
        {
          type: "def",
          terme: "Liquidation",
          slug: "liquidation",
          texte: "La vente forcée de ta garantie par le protocole, automatiquement et sans préavis, dès que ton LTV dépasse le plafond. Sur un CDP, tu ne perds pas ton dépôt : une fois la dette remboursée et la pénalité prélevée, ce qui reste te revient."
        },
        {
          type: "liste",
          items: [
            "Le protocole vend ton collatéral — une partie seulement ou la totalité selon les protocoles, de quoi rembourser les 60 $ de dette ;",
            "Il prélève une pénalité, de l'ordre de 5 à 10 % de la dette, soit 3 à 6 $ ici ;",
            "Le reste te revient : une dizaine de dollars de bitcoin, auxquels s'ajoutent les 60 $ empruntés — soit environ 70 $ là où ton bitcoin en valait 75."
          ]
        },
        {
          type: "p",
          texte: "Le vrai coût n'est pas la pénalité : c'est que la vente a eu lieu au plus bas, et que tu ne profiteras pas du rebond."
        },
        {
          type: "p",
          texte: "Tu paies un intérêt sur le montant emprunté tant que la position est ouverte. Sur la quasi-totalité des CDP, ce taux t'est imposé — voté par une DAO ou calculé par une formule. Liquity fait exception. D'un protocole à l'autre, l'écart est énorme : du quasi-gratuit à plus de 10 % par an. Et en ce moment, c'est cher presque partout, pour une raison simple : personne ne prête un dollar en DeFi moins cher que ce que rapporte un dollar placé sans risque."
        },
        {
          type: "p",
          texte: "Tu rembourses quand tu veux : tu rends les 60 $ plus les intérêts courus, le protocole détruit les jetons, et tu récupères tes 100 $ de bitcoin — quelle que soit leur valeur du jour."
        },
        {
          type: "st",
          texte: "À quoi ça sert : trois usages"
        },
        {
          type: "p",
          texte: "1. Dépenser sans vendre. Ton bitcoin vaut 100, tu empruntes 60 et tu les dépenses. Demain il vaut 200 : tu vends juste de quoi rembourser les 60, il te reste 140. Si tu avais vendu 60 de bitcoin au départ, il ne t'en resterait que 40 — qui vaudraient 80 aujourd'hui. 140 contre 80."
        },
        {
          type: "def",
          terme: "Long (haussier)",
          slug: "long",
          texte: "Être positionné pour gagner si le prix monte. Emprunter du stablecoin contre du bitcoin, c'est parier que ton collatéral va monter face au dollar : ta dette reste figée en dollars, donc la hausse de l'actif suffit à la solder."
        },
        {
          type: "p",
          texte: "2. Prendre du levier. Le stablecoin emprunté sert à racheter de la crypto, qu'on redépose en garantie. Tu déposes 100, tu empruntes 60, tu rachètes 60 de bitcoin : te voilà exposé à 160 avec 100 de capital. Face à un contrat perpétuel, deux avantages : le coût est connu d'avance (tenir une position à la hausse sur le bitcoin coûte actuellement 10,63 % annualisés de funding), et tu détiens de vrais bitcoins. Le prix à payer est réel : il faut immobiliser bien plus que ce qu'on emprunte."
        },
        {
          type: "p",
          texte: "3. Emprunter à un taux pour placer à un taux plus élevé — le carry trade. Sur f(x) Protocol, tu déposes des bitcoins et empruntes des fxUSD (0,5 % à l'ouverture, 0,2 % à la fermeture), que tu places à 6,71 % dans le pool de stabilité. Avec 100 000 $ déposés et 60 000 $ empruntés : 4 030 $ de gains sur l'année, moins 420 $ de frais, soit environ 3 610 $ — sans avoir vendu un seul bitcoin."
        },
        {
          type: "p",
          texte: "Ce rendement n'est pas magique : le pool de stabilité sert à absorber les liquidations. Tu es payé pour ce service, et pour le risque qui va avec. Trois réserves : ton bitcoin reste liquidable, le 6,71 % n'est pas garanti, et f(x) est un petit protocole (~126 M$) face à des Sky ou Morpho qui comptent en milliards."
        },
        {
          type: "avis",
          texte: "on décrit ici une stratégie pour l'expliquer, pas pour la recommander. Chaque fois que tu vises un rendement, pose-toi la même question : qui paie, et pour quel risque ?"
        }
      ]
    },
    actus: [
      {
        titre: "Strategy a vendu du bitcoin à 60 200 $, elle en rachète à 80 320 $",
        corps: [
          {
            type: "p",
            texte: "Fin juin, Strategy — la société de Michael Saylor — avait besoin de liquidités pour payer les dividendes de ses titres STRC. Elle a vendu 3 588 BTC en deux fois, le 30 juin et le 6 juillet, à environ 60 200 $ de moyenne."
          },
          {
            type: "p",
            texte: "Sept semaines plus tard, du 24 au 30 août, elle est revenue à l'achat : 4 603 BTC pour 369,7 M$, soit environ 80 320 $ par bitcoin. L'écart fait +33 %, soit environ 20 100 $ de plus par bitcoin racheté. Le rachat a été financé par une émission de 4,53 millions d'actions MSTR."
          },
          {
            type: "p",
            texte: "Dit simplement : Strategy a vendu bas et racheté haut. Racheter les 3 588 bitcoins cédés cet été lui a coûté environ 72 M$ de plus que ce qu'ils lui avaient rapporté."
          },
          {
            type: "liste",
            items: [
              "La vente portait sur moins de 0,5 % de la réserve, qui atteint 845 050 BTC — à cette échelle, l'opération ne change rien au bilan ;",
              "Au #3, on décrivait le Digital Credit Capital Framework, ce cadre par lequel Strategy s'autorise à céder du bitcoin pour honorer ses engagements. Ce n'est pas un accident : c'est le dispositif qui a fonctionné comme annoncé."
            ]
          },
          {
            type: "p",
            texte: "Avoir besoin de dollars sans vouloir se séparer de son bitcoin, c'est précisément ce à quoi le CDP répond. Une société cotée ne peut pas simplement faire ça : la comptabilité et l'audit d'abord, une dette contractée auprès d'un contrat automatisé étant difficile à faire valider par des commissaires aux comptes ; la liquidation ensuite, un collatéral vendu de force par un protocole lui retirant la maîtrise du moment et du montant."
          }
        ],
        avis: "on ne juge pas la décision : payer un dividende dû n'est pas facultatif, et 3 588 bitcoins sur 845 050 ne pèsent rien. Ce qui se voit ici, c'est le coût du calendrier : moins de deux mois ont suffi à rendre le rachat 33 % plus cher. Et le bitcoin s'échange aujourd'hui autour de 77 300 $, soit bien sous le prix de ce rachat — et à peine au-dessus du prix de revient moyen de toute la réserve, 75 412 $ selon le dernier dépôt de la société.",
        source: "Communiqués et dépôts SEC de Strategy · CryptoBriefing",
        defs: [
          {
            terme: "STRC (Digital Credit)",
            slug: "dat",
            texte: "Des titres émis par Strategy qui versent un dividende régulier, un peu comme une obligation. C'est de l'argent qui doit sortir chaque trimestre, quoi qu'il arrive, alors que le bitcoin détenu en face ne rapporte rien tant qu'on ne le vend pas."
          }
        ]
      },
      {
        titre: "Le pétrole s'envole, et la Fed pourrait remonter ses taux",
        corps: [
          {
            type: "p",
            texte: "L'escalade militaire entre les États-Unis et l'Iran a fait repasser le baril de Brent au-dessus de 100 $ le 9 septembre, en hausse de près de 3 % sur la seule journée, après que Téhéran a annoncé avoir frappé deux navires américains et huit pétroliers dans le Golfe. Un pétrole cher renchérit le transport, l'énergie et la production : c'est de l'inflation qui arrive dans les mois qui suivent."
          },
          {
            type: "liste",
            items: [
              "Le 11 septembre, la publication du CPI d'août — la mesure officielle de l'inflation américaine ;",
              "Le 16 septembre, la décision de la Fed sur une éventuelle hausse de son taux directeur, aujourd'hui à 3,50-3,75 %."
            ]
          },
          {
            type: "def",
            terme: "Taux directeur",
            slug: "taux-directeur",
            texte: "Le taux auquel la banque centrale prête aux banques. C'est le prix de départ de l'argent : tout le reste s'en déduit, du crédit immobilier au rendement d'une obligation d'État."
          },
          {
            type: "p",
            texte: "On parle d'une hausse, pas d'une baisse — à rebours de ce que le marché anticipait depuis des mois. Au 9 septembre, les relevés donnaient entre 56 % et 65 % de probabilité d'une hausse de 0,25 point."
          },
          {
            type: "p",
            texte: "Ce que ça changerait : une obligation d'État mieux rémunérée rend moins attractif un actif qui ne verse rien par lui-même, bitcoin compris. Attention, rappel : si tu as réalisé un emprunt sur un CDP et que le prix de ton collatéral baisse, ton LTV remonte tout seul — tu te rapproches du seuil de liquidation sans avoir rien fait. À l'inverse, un maintien des taux retirerait cette pression, sans garantie non plus : le marché lui donne un peu plus d'une chance sur trois."
          }
        ],
        avis: "un CPI plus doux que prévu le 11 suffirait à tout renverser : personne ne sait ce que fera la Fed le 16. Ce qui est certain, c'est que le prix de l'argent redevient le sujet, en bourse comme en DeFi. C'est ce qui donne sa valeur pratique à la notion vue plus haut : le LTV que tu choisis n'est pas un réglage abstrait, c'est la marge que tu te laisses le jour où une tension géopolitique fait décrocher ton collatéral.",
        source: "CNBC · Yahoo Finance · Vantage Markets"
      },
      {
        titre: "Hyperliquid pourrait ouvrir ses marchés aux Américains",
        corps: [
          {
            type: "p",
            texte: "D'après Bloomberg, Hyperliquid Labs discute avec Payward, la maison-mère de Kraken, pour donner accès à ses marchés depuis les États-Unis. Le véhicule serait Bitnomial, une filiale de Payward rachetée début 2026, qui dispose déjà des agréments américains de bourse, de compensation et de courtage."
          },
          {
            type: "p",
            texte: "Le dossier est politique autant que technique : le 19 août, Donald Trump a déclaré que la CFTC travaillait à faire entrer Hyperliquid aux États-Unis « de manière pleinement conforme et légale » — en nommant Hyperliquid, et elle seule, devant des représentants de Coinbase, Kraken, du Nasdaq et du CME."
          },
          {
            type: "liste",
            items: [
              "La structure a été présentée à la CFTC, mais l'approbation n'est pas obtenue : une ancienne juriste de la SEC estime le processus à 10 à 12 mois ;",
              "Ni Hyperliquid ni Payward n'ont commenté ;",
              "Les termes financiers ne sont pas connus."
            ]
          },
          {
            type: "p",
            texte: "Hyperliquid traite plus de 4 milliards de dollars de volume par jour sans opérateur central : on s'y connecte avec un portefeuille, sans compte ni vérification d'identité. C'est exactement ce fonctionnement qui l'a tenue hors des États-Unis jusqu'ici — un cadre réglementé suppose quelqu'un d'identifiable pour répondre au régulateur."
          }
        ],
        avis: "pour Hyperliquid, ce serait une très bonne affaire : le modèle qui se dessine n'est pas d'ouvrir son propre site aux Américains, mais de laisser des acteurs agréés brancher leurs clients sur son infrastructure — et ces marchés délégués sont déjà sa deuxième source de revenus. Pour l'utilisateur de ces marchés-là, en revanche, les garanties changent : pour être conforme, l'opérateur doit pouvoir filtrer les inscrits, fermer une position et déplacer un collatéral. La promesse « personne ne peut toucher à tes fonds » ne vaudrait plus pour qui passe par cette porte.",
        source: "Bloomberg · Blockhead · CoinDesk",
        lien: {
          label: "Voir la fiche Hyperliquid",
          href: "/protocoles/hyperliquid"
        }
      }
    ],
    protocole: {
      nom: "Liquity V2",
      bref: "Un protocole de CDP sur Ethereum. Tu y déposes de l'ether, du wstETH ou du rETH — pas de bitcoin — et tu empruntes en échange le stablecoin maison, le BOLD. Mise en ligne en janvier 2025, contrats actuels redéployés en mai 2025. 95,6 M$ déposés. Contrats immuables et sans gouvernance, audités par six cabinets dont un en vérification formelle, plus un concours ouvert de cinq semaines (800 chercheurs, 350 000 $ de primes).",
      etapes: [
        "Ce qui rend Liquity différent tient en une phrase : c'est l'emprunteur qui fixe le taux d'intérêt qu'il paiera, entre 0,5 % et 25 % par an, modifiable à tout moment.",
        "La contrepartie s'appelle la redemption : n'importe qui peut apporter 1 BOLD au protocole et repartir avec 1 $ de collatéral. C'est ce qui tient le prix du BOLD collé au dollar.",
        "Et le protocole ponctionne d'abord les emprunteurs qui ont fixé le taux le plus bas. Payer moins cher, c'est accepter de se faire rembourser d'office avant les autres ; payer plus cher, c'est acheter la tranquillité.",
        "Exemple : Alix fixe 5 % (2,50 $ par an sur 50 BOLD), Bruno fixe 9 % (4,50 $). Une redemption de 20 $ tape Alix la première : elle ne perd pas d'argent, mais n'a plus que 80 $ d'ether exposés à la hausse au lieu de 100. Bruno, lui, n'a rien vu passer.",
        "Résultat mesurable : les taux réellement payés aujourd'hui sont de 3,21 % sur la branche ETH, 1,09 % sur wstETH et 5,77 % sur rETH — soit 2,36 % en moyenne sur 34,3 M BOLD de dette."
      ],
      rendement: "L'autre côté du marché : déposer ses BOLD dans les pools de stabilité rapporte aujourd'hui 2,17 % (ETH), 3,88 % (wstETH) et 3,94 % (rETH). Cet argent vient entièrement des emprunteurs, par deux canaux — les intérêts qu'ils paient, et le collatéral récupéré avec une décote quand l'un d'eux se fait liquider. Aucune société ne prélève sa part : les 100 % repartent vers les utilisateurs. Sur les douze derniers mois, ces pools ont passé l'essentiel du temps entre 1 % et 5 %, avec une médiane de 3 % à 4,3 % selon la branche.",
      risqueNiveau: "moyen",
      risqueSens: "moyen",
      risques: "Ce qui rassure : personne ne peut changer les règles pendant que ton argent est là. Ce qui l'empêche de descendre à « faible » : ce qui ne peut pas être modifié ne peut pas non plus être corrigé. Trois semaines après le lancement de janvier 2025, un bug critique a été découvert dans les pools de stabilité malgré six audits — contrats immuables obligent, le protocole a dû être entièrement redéployé, sans perte de fonds. La liquidation est bien réelle (LTV plafonné à 90,91 % sur ETH, 83,33 % sur wstETH et rETH). La redemption est le risque propre à Liquity : une position ouverte à taux bas et jamais surveillée peut se retrouver largement remboursée d'office. Tout est adossé à l'ether, sans diversification du collatéral. Et le protocole reste petit (95,6 M$), donc moins liquide pour entrer et sortir en montant.",
      importance: "Presque tous les protocoles de prêt te servent un taux calculé par une formule ou voté par une DAO : tu le subis, et il peut doubler du jour au lendemain. Liquity fait l'inverse. Et le résultat n'est pas cosmétique : 2,36 % en moyenne contre 9 à 15 % chez Sky selon le collatéral — f(x), lui, ne facture aucun intérêt annuel, mais sur un modèle différent."
    },
    cours: [
      {
        actif: "BTC",
        nom: "Bitcoin",
        prix: "~77 268 $",
        var7j: "−3,2 %",
        sens: "down"
      },
      {
        actif: "ETH",
        nom: "Ethereum",
        prix: "~2 440 $",
        var7j: "−0,8 %",
        sens: "down"
      },
      {
        actif: "SOL",
        nom: "Solana",
        prix: "~100,2 $",
        var7j: "−2,6 %",
        sens: "down"
      },
      {
        actif: "HYPE",
        nom: "Hyperliquid",
        prix: "~81,1 $",
        var7j: "−3,0 %",
        sens: "down"
      },
      {
        actif: "BNB",
        nom: "",
        prix: "~710 $",
        var7j: "−1,3 %",
        sens: "down"
      }
    ],
    coursAvis: "Semaine rouge sur toute la ligne : le bitcoin s'échange autour de 77 300 $, après être monté jusqu'à 81 000 $ le 4 septembre — soit près de 5 % perdus depuis ce sommet. Deux causes se cumulent : le pétrole repassé au-dessus de 100 $ sur fond d'escalade entre les États-Unis et l'Iran, et l'attente du chiffre de l'inflation américaine. Quand le marché redoute une hausse des taux, il vend d'abord ce qui ne rapporte rien par soi-même.",
    data: {
      titre: "480 M$ de frais en dix semaines",
      texte: "C'est ce que les utilisateurs de Robinhood Chain ont payé depuis le lancement de la chaîne, le 1er juillet. Et la trajectoire mérite un coup d'œil de près :",
      points: [
        "Le volume monte : 12,2 Md$ échangés sur les sept derniers jours, contre 8,9 Md$ la semaine précédente ;",
        "Les frais quotidiens, eux, redescendent : 13,0 M$ sur 24 h, contre un pic à 19,1 M$ le 2 septembre ;",
        "Les dépôts progressent : 897 M$ immobilisés sur la chaîne, contre 820 M$ une semaine plus tôt."
      ],
      texteFin: "Le carburant, ce sont les memecoins lancés sur Pons — alors que la chaîne avait été bâtie pour tout autre chose. Robinhood est d'abord un courtier en Bourse : sa blockchain devait servir à faire circuler des actions tokenisées. Un détail qui compte : Robinhood paie le gaz de ses utilisateurs depuis le lancement, une promotion de 90 jours qui s'arrête vers le 29 septembre. Que restera-t-il du volume quand l'utilisateur paiera son gaz lui-même ? Sur ce terrain, la place est déjà prise : Solana concentre plus de 96 % des échanges d'actions tokenisées, avec 4,9 Md$ traités au premier semestre 2026."
    },
    definitions: [
      {
        terme: "Pool de stabilité",
        slug: "pool-de-stabilite",
        def: "La réserve dans laquelle un protocole puise pour absorber les liquidations. Tu y déposes un stablecoin ; le jour où un emprunteur passe sous son seuil, ton dépôt sert à solder sa dette et tu récupères son collatéral, avec une décote en ta faveur. C'est de là que vient le rendement — et c'est aussi le risque : tu peux te retrouver avec de l'ether au lieu de tes stablecoins, précisément le jour où le marché s'effondre."
      },
      {
        terme: "CPI",
        en: "Consumer Price Index",
        slug: "cpi",
        def: "L'indice des prix à la consommation américain, la mesure officielle de l'inflation là-bas. Publié chaque mois, il conditionne les décisions de la banque centrale : une inflation qui remonte pousse à monter les taux, ce qui rend les actifs sans rendement — bitcoin compris — relativement moins attractifs."
      }
    ]
  },
  // ===== #6 — généré depuis drafts/issue-06 (pas de SOUS LA LOUPE) =====
  {
    id: "6",
    numero: 6,
    date: "Mardi 13 octobre 2026",
    titre: "Les marchés de prédiction",
    excerpt: "Les marchés de prédiction expliqués simplement, les débuts d'Hyperliquid sur ce terrain, l'IA face à la sécurité des wallets, un bilan de l'activité de la Robinhood Chain et la carte des actions tokenisées par blockchain.",
    notion: {
      titre: "Les marchés de prédiction : quand un prix devient une probabilité",
      corps: [
        {
          type: "p",
          texte: "Qui va gagner l'élection ? La Fed va-t-elle relever ses taux ? La France va-t-elle battre l'Espagne ? Sur un marché de prédiction, on mise de l'argent sur la réponse à ce genre de questions. Le plus connu dans la crypto s'appelle Polymarket ; son grand concurrent, Kalshi, est une bourse américaine régulée qui fonctionne surtout en dollars."
        },
        {
          type: "def",
          terme: "Marché de prédiction",
          slug: "marche-de-prediction",
          texte: "Une plateforme où l'on achète et vend des contrats liés au résultat d'un événement : élection, match, décision de la Fed, prix du bitcoin à une date donnée…"
        },
        {
          type: "p",
          texte: "Dans notre numéro 1, on t'annonçait qu'Hyperliquid se lançait à son tour, sans expliquer comment ça marche. On rattrape ça cette semaine."
        },
        {
          type: "st",
          texte: "Le principe"
        },
        {
          type: "p",
          texte: "Tu achètes un contrat lié à une question, à laquelle on peut répondre par oui ou par non à une date connue : « L'équipe de France gagnera-t-elle le match du 10 novembre ? ». Tu peux choisir d'acheter le OUI ou le NON."
        },
        {
          type: "p",
          texte: "Ce n'est pas un bookmaker qui fixe la cote et parie contre toi : le prix se forme entre participants, comme en Bourse, selon l'offre et la demande, et continue d'évoluer pendant toute la durée du contrat, sachant que valeur du OUI + valeur du NON = 1 $. Tu peux revendre ton contrat à tout moment avant la fin."
        },
        {
          type: "p",
          texte: "Une fois la réponse connue : si la réponse est oui, chaque contrat OUI vaut 1 dollar ; sinon, il ne vaut plus rien. Le contrat NON fonctionne à l'inverse."
        },
        {
          type: "st",
          texte: "Le prix est une probabilité"
        },
        {
          type: "p",
          texte: "Reprenons l'exemple du match (marché « La France remportera-t-elle le match ? »). Imaginons que, quelques jours avant celui-ci, le contrat OUI s'échange à 0,62 USDC. Tu veux parier sur la victoire de la France : tu achètes 100 OUI, tu paies 62 USDC (100 × 0,62)."
        },
        {
          type: "liste",
          items: [
            "La France gagne : tes 100 contrats valent 100 USDC. Tu gagnes 38 USDC (100 − 62).",
            "La France ne gagne pas : ils valent zéro. Tu perds tes 62 USDC."
          ]
        },
        {
          type: "p",
          texte: "Ta perte maximale est donc ta mise, et ton gain maximal est connu dès l'achat."
        },
        {
          type: "p",
          texte: "Le prix étant uniquement déterminé par l'offre et la demande (et non par un bookmaker), ce prix de 0,62 se lit directement comme une probabilité : le marché des parieurs sur cette plateforme estime à 62 % les chances que la France gagne. Si plus de gens pensent qu'elle va gagner, ils achètent du OUI, le prix monte, et la probabilité affichée avec."
        },
        {
          type: "def",
          terme: "Probabilité implicite",
          slug: "probabilite-implicite",
          texte: "La probabilité qu'un prix « sous-entend ». Un contrat qui paie 1 $ et s'échange à 0,62 $ traduit une estimation collective de 62 % de chances. Ce n'est pas une prévision scientifique : c'est ce que les participants sont prêts à payer, compte tenu de ce qu'ils savent."
        },
        {
          type: "p",
          texte: "En théorie, prix et probabilité ne font qu'un. En pratique, l'écart existe, pour trois raisons :"
        },
        {
          type: "liste",
          items: [
            "les frais prélevés par la plateforme ;",
            "l'écart entre prix d'achat et prix de vente : on achète souvent un peu au-dessus de 0,62 et on revend un peu en dessous ;",
            "les petits marchés, où quelques acheteurs suffisent à déplacer le prix."
          ]
        },
        {
          type: "p",
          texte: "Sur une question très suivie, le prix reste un bon repère. Sur une question peu suivie, beaucoup moins."
        },
        {
          type: "st",
          texte: "OUI + NON = 1"
        },
        {
          type: "p",
          texte: "Chaque contrat a deux côtés. Les deux prix s'additionnent à 1. Si le OUI vaut 0,62, le NON vaut 0,38. À eux deux, ils totalisent exactement 1 USDC (0,62 + 0,38). À la fin, ce dollar revient en entier au camp gagnant."
        },
        {
          type: "st",
          texte: "D'où vient l'argent ?"
        },
        {
          type: "p",
          texte: "De la poche des perdants. Un marché de prédiction ne produit rien : chaque dollar gagné par un camp a été perdu par l'autre."
        },
        {
          type: "st",
          texte: "Comment le marché se termine"
        },
        {
          type: "p",
          texte: "À sa création, chaque marché fixe sa règle : la question exacte, l'échéance, et la source qui fera foi (un résultat officiel, une publication de la Fed…). À l'échéance, on constate le résultat, et le marché est « résolu » : les contrats gagnants passent à 1, les perdants à 0, et chacun reçoit ce qui lui revient."
        },
        {
          type: "p",
          texte: "Reste une question : qui constate le résultat ? Une blockchain ne sait pas qui a gagné un match : il faut le lui dire. C'est le rôle de l'oracle."
        },
        {
          type: "def",
          terme: "Oracle",
          slug: "oracle",
          texte: "Le mécanisme qui fournit à une blockchain une information qu'elle ne peut pas obtenir seule. Il faut distinguer deux cas. Quand le marché porte sur un prix (par exemple « Le bitcoin vaudra-t-il plus de 80 000 $ le 1er janvier ? »), l'information vient de flux automatiques (Chainlink ou Pyth). Quand il porte sur un fait du monde réel (qui a gagné l'élection ?), il faut quelqu'un pour l'établir."
        },
        {
          type: "p",
          texte: "Sur Polymarket, c'est un oracle décentralisé, UMA. Un proposeur agréé par UMA propose le résultat en déposant une caution. Si personne ne le conteste dans un court délai (et tout le monde peut contester), il est validé ; s'il est contesté, ce sont les détenteurs du jeton UMA qui votent."
        },
        {
          type: "p",
          texte: "D'où un risque propre à ces marchés : on peut avoir raison sur l'événement et perdre quand même, si la question est ambiguë ou si le vote tranche mal."
        },
        {
          type: "p",
          texte: "En mars 2025, un marché Polymarket demandait si l'Ukraine accepterait l'accord sur les minerais proposé par les États-Unis : il a été résolu OUI alors qu'aucun accord n'avait été signé, à l'issue d'un vote UMA contesté où un seul gros détenteur de jetons pesait environ un quart des voix, selon un chercheur. Polymarket a refusé de rembourser. Avant d'acheter, la règle de résolution se lit aussi attentivement que la question."
        },
        {
          type: "p",
          texte: "Bon à savoir : sur Polymarket, on parie en USDC depuis un wallet, et toutes les positions sont visibles sur la blockchain. La plateforme est en revanche bloquée en France : l'ANJ a ordonné en juillet 2026 aux fournisseurs d'accès de bloquer le site, ce que Polymarket conteste en justice."
        },
        {
          type: "avis",
          texte: "un marché de prédiction n'est pas un placement, il s'agit d'un pari. Mais au delà de cet aspect, son prix est utile : il donne en temps réel l'estimation d'une foule qui engage son propre argent, souvent plus réactive que les sondages ou les commentaires d'experts. À lire comme un indicateur, pas comme une certitude — surtout sur les petits marchés. C'est un formidable outil d'analyse du sentiment de marché."
        },
        {
          type: "p",
          texte: "Polymarket reste une application où l'on parie. Hyperliquid a pris une autre voie : c'est notre première actu."
        }
      ]
    },
    actus: [
      {
        titre: "HIP-4 : où en sont les marchés de prédiction d'Hyperliquid ?",
        corps: [
          {
            type: "p",
            texte: "Hyperliquid, la plateforme d'échange de perps, propose des marchés de prédiction depuis le 2 mai (le dispositif HIP-4). Au début, seule son équipe pouvait en créer. Depuis le 29 août, d'autres acteurs le peuvent aussi."
          },
          {
            type: "p",
            texte: "Le 11 octobre, on comptait 309 marchés ouverts :"
          },
          {
            type: "liste",
            items: [
              "147 créés par Outcome, un projet spécialisé dans les marchés de prédiction ;",
              "93 par trade.xyz, connu sur Hyperliquid pour ses perps qui suivent le cours d'actions, de l'or ou du pétrole ;",
              "61 par Skew, un autre créateur ;",
              "8 seulement par Hyperliquid."
            ]
          },
          {
            type: "p",
            texte: "L'essentiel de l'offre vient d'acteurs externes, qui se servent d'Hyperliquid comme d'une infrastructure. Le créateur d'un marché touche une part des frais payés par les parieurs : c'est ce qui l'incite à en ouvrir."
          },
          {
            type: "p",
            texte: "On y parie sur deux grandes familles de questions. Le sport arrive en tête (NFL, football, base-ball), puis les prix : « le bitcoin sera-t-il au-dessus de tel prix vendredi ? ». S'y ajoutent quelques introductions en Bourse et cérémonies de récompenses."
          },
          {
            type: "st",
            texte: "Qui tranche le résultat ?"
          },
          {
            type: "p",
            texte: "Sur Polymarket, un proposeur agréé propose le résultat, et on ne passe au vote que si quelqu'un le conteste. Ici, c'est le créateur du marché (le deployer) qui l'annonce lui-même. Il est encadré de trois façons :"
          },
          {
            type: "liste",
            items: [
              "chaque marché suit un modèle (type de question, source qui fait foi) approuvé par le vote des validateurs, les acteurs qui font tourner la blockchain d'Hyperliquid ;",
              "pour devenir créateur, il faut bloquer des HYPE pendant au moins 183 jours (environ 6 mois) ;",
              "si son marché ne respecte pas le modèle, les validateurs peuvent voter pour lui confisquer une partie de cette mise."
            ]
          },
          {
            type: "p",
            texte: "Autrement dit : pas de contestation ouverte à tous ; on fait confiance à un acteur désigné, tenu par l'argent qu'il a mis en jeu."
          },
          {
            type: "p",
            texte: "Côté parieur, tout se fait au même endroit que les perps, et les paris se règlent en USDC. Pas de levier ni de liquidation : tu paies ton pari en entier à l'achat."
          },
          {
            type: "st",
            texte: "Et ça marche ?"
          },
          {
            type: "p",
            texte: "Pas encore vraiment. Le football a porté les premiers mois (28 % du volume depuis le lancement). Ensuite, en volume échangé par jour :"
          },
          {
            type: "liste",
            items: [
              "août : environ 0,5 M$ ;",
              "31 août, deux jours après l'arrivée des créateurs extérieurs : près de 2 M$, sur cette seule journée ;",
              "septembre : environ 1,7 M$ ;",
              "début octobre : 1,25 M$."
            ]
          },
          {
            type: "p",
            texte: "L'arrivée de créateurs autres qu'Hyperliquid a relancé l'activité, mais depuis, elle reflue."
          },
          {
            type: "p",
            texte: "En septembre, HIP-4 a traité environ 51 M$, contre 2,3 à 4,7 Md$ pour Polymarket selon la mesure retenue : de l'ordre de 1 à 2 %, et Kalshi est bien au-delà."
          },
          {
            type: "p",
            texte: "Et ce volume est en partie dopé : Outcome, qui concentre l'essentiel de l'activité, verse des primes à ses parieurs pour les attirer."
          },
          {
            type: "st",
            texte: "L'intérêt pour un trader"
          },
          {
            type: "p",
            texte: "Tu as un perp acheteur sur le bitcoin et tu crains une baisse d'ici vendredi. Sans fermer ton perp, tu achètes depuis le même compte 1 000 NON à 0,20 USDC (1 000 × 0,20 = 200 USDC) sur « le bitcoin sera-t-il au-dessus de tel prix vendredi ? » :"
          },
          {
            type: "liste",
            items: [
              "si vendredi le bitcoin termine sous ce prix, tes NON valent 1 000 USDC, soit 800 USDC de gain net (1 000 − 200) : de quoi compenser une partie de ta perte sur le perp ;",
              "s'il reste au-dessus, même après avoir baissé, ils ne valent rien : 200 USDC perdus, comme une assurance qui n'a pas servi."
            ]
          },
          {
            type: "p",
            texte: "Le pari est tout ou rien, à une date donnée : il ne protège pas en proportion de la baisse. Ce montage est possible dès aujourd'hui, avec ses limites :"
          },
          {
            type: "liste",
            items: [
              "rien n'indique à ce jour que la plateforme tienne compte de ta protection : ton perp exige la même marge ;",
              "les USDC dépensés en paris ne servent plus de marge à ton perp, et ton pari ne compte pas comme collatéral ;",
              "faire de tout ton compte un seul collatéral, paris compris : Hyperliquid l'annonce pour plus tard."
            ]
          }
        ],
        avis: "le mécanisme fonctionne, mais l'usage ne suit pas encore. Comme le résume un analyste, c'est moins un concurrent de Polymarket qu'une protection ponctuelle posée à côté de ton perp. Et si Hyperliquid tient sa promesse d'un collatéral commun, ça deviendra vraiment intéressant : la même somme servira à la fois à prendre position et à se couvrir, au lieu d'être bloquée deux fois.",
        source: "documentation Hyperliquid · API Hyperliquid (marchés ouverts au 11/10) · TokenPost (7/10) · crypto.news (3/09) · DeFi Rate · ChainCatcher · KuCoin/Odaily",
        lien: {
          label: "→ Voir la fiche Hyperliquid",
          href: "/protocoles/hyperliquid"
        }
      },
      {
        titre: "IA et sécurité des wallets : un chercheur d'Ethereum propose un « bunker mode »",
        corps: [
          {
            type: "p",
            texte: "Le 6 octobre, OpenAI a publié plusieurs centaines de résultats mathématiques obtenus par une IA, sans rien sur la cryptographie des blockchains. C'est la vitesse de ces progrès qui a fait réagir, le lendemain, Justin Drake, chercheur à la Fondation Ethereum : il a appelé à se préparer « calmement » à un « bunker mode »."
          },
          {
            type: "p",
            texte: "Selon lui, l'IA pourrait casser ECDSA, la signature qui protège les wallets, avant les ordinateurs quantiques. Au pire, « en mois, pas en années »."
          },
          {
            type: "st",
            texte: "Ce qui serait menacé"
          },
          {
            type: "def",
            terme: "Clé privée",
            slug: "cle-privee",
            texte: "Le secret qui sert à signer chaque envoi depuis une adresse : qui la connaît peut la vider. Ta phrase de récupération permet de la retrouver."
          },
          {
            type: "p",
            texte: "De ta clé privée, on calcule une clé publique, puis, par un hachage (une empreinte qu'on ne calcule que dans un sens), ton adresse. Casser ECDSA, ce serait remonter de la clé publique à la clé privée. Drake parlerait de cassage le jour où on pourrait le faire en une semaine environ, avec un gros parc de cartes graphiques."
          },
          {
            type: "p",
            texte: "Sur Ethereum, ta clé publique n'apparaît sur la blockchain qu'au moment où ton adresse envoie une transaction : une adresse qui n'a fait que recevoir mais n'a jamais signé de transaction garde sa clé cachée. Mais presque tous les comptes actifs ont déjà envoyé : leur clé publique est visible."
          },
          {
            type: "st",
            texte: "Le « bunker mode »"
          },
          {
            type: "p",
            texte: "Il s'agit de déplacer ses fonds, sans précipitation, vers des adresses neuves qui n'ont jamais envoyé de transaction, en commençant par les gros détenteurs (plateformes d'échange, émetteurs de stablecoins). À long terme, il faudrait une cryptographie fondée uniquement sur le hachage, qui offre beaucoup moins de prise à ce type d'attaque."
          },
          {
            type: "p",
            texte: "Vitalik Buterin, cofondateur d'Ethereum, prend le risque au sérieux mais déconseille de se précipiter pour déplacer ses fonds : il dit avoir perdu plus d'argent dans des migrations ratées que dans tous les piratages réunis."
          }
        ],
        avis: "rien n'est cassé à ce jour, il ne s'agit que d'hypothèses de scénario à venir. Le réflexe simple (sur Ethereum) : garder une adresse de stockage n'ayant jamais signé de transaction, distincte de celle qui sert aux opérations.",
        source: "Forklog (8/10) · CryptoSlate (8/10) · Cointelegraph via TradingView · Yahoo Finance / Cryptonews"
      },
      {
        titre: "Robinhood Chain : la spéculation reculait déjà avant la fin du gas offert",
        corps: [
          {
            type: "p",
            texte: "Dans notre numéro 5, on observait l'activité de Robinhood Chain, la blockchain lancée par le courtier le 1er juillet. Elle était portée surtout par les memecoins (des jetons sans autre usage que la spéculation) lancés sur Pons, une plateforme de création de jetons."
          },
          {
            type: "p",
            texte: "On se demandait ce qu'il en resterait une fois que l'utilisateur paierait lui-même son gas (les frais versés au réseau pour chaque transaction). Robinhood l'offrait depuis le lancement ; l'offre a pris fin le 29 septembre."
          },
          {
            type: "p",
            texte: "Depuis ce numéro 5, l'activité a nettement reculé :"
          },
          {
            type: "liste",
            items: [
              "les commissions payées aux applications de la chaîne (Uniswap, Pons…), en plus du gas, sont passées d'environ 13 M$ par jour à 2 à 2,5 M$ par jour, soit à peu près −80 % ;",
              "le volume échangé sur sept jours est tombé de 12,2 Md$ à 6,4 Md$ : à peu près divisé par deux ;",
              "les dépôts, eux, ont progressé, de 897 M$ à environ 1,04 Md$, et tournent autour du milliard depuis le 20 septembre."
            ]
          },
          {
            type: "p",
            texte: "L'essentiel du recul s'est produit avant la fin du gas offert : les commissions étaient déjà tombées d'environ 13 à 5-6 M$ par jour fin septembre. La baisse s'est poursuivie ensuite, sans qu'on puisse dire quelle part revient à la fin de l'offre et quelle part à l'essoufflement des memecoins."
          },
          {
            type: "p",
            texte: "Quant aux actions tokenisées (des actions de Bourse représentées par un jeton sur la blockchain), la raison d'être de la chaîne, elles ont bien décollé : leur volume de transferts y est passé de 1,2 Md$ en juillet à 19,3 Md$ en septembre, et les montants réellement détenus d'une dizaine de millions début juillet à 137 M$. On compare avec les autres blockchains plus bas, dans ÇA BRILLE."
          }
        ],
        avis: "l'activité a fondu mais les dépôts ont augmenté : de l'argent reste sur la chaîne même quand la spéculation reflue. Reste sa promesse de départ, les actions tokenisées : le volume est élevé, mais la valeur détenue sur la chaîne reste faible. C'est sur ce terrain qu'il faudra la juger.",
        source: "DeFiLlama (frais, volume et dépôts, relevés le 12/10) · Memeburn · crypto.news · Cryptonews · documentation Robinhood Chain"
      }
    ],
    cours: [
      {
        actif: "BTC",
        nom: "Bitcoin",
        prix: "~83 574 $",
        var7j: "▼ −3 %",
        sens: "down",
        varRef: "▲ +7 %",
        sensRef: "up"
      },
      {
        actif: "ETH",
        nom: "Ethereum",
        prix: "~2 513 $",
        var7j: "▼ −7 %",
        sens: "down",
        varRef: "▲ +2 %",
        sensRef: "up"
      },
      {
        actif: "SOL",
        nom: "Solana",
        prix: "~107 $",
        var7j: "▼ −11 %",
        sens: "down",
        varRef: "▲ +6 %",
        sensRef: "up"
      },
      {
        actif: "HYPE",
        nom: "Hyperliquid",
        prix: "~82 $",
        var7j: "▼ −12 %",
        sens: "down",
        varRef: "▼ −1 %",
        sensRef: "down"
      },
      {
        actif: "BNB",
        prix: "~742 $",
        var7j: "▼ −5 %",
        sens: "down",
        varRef: "▲ +4 %",
        sensRef: "up"
      }
    ],
    coursRefLabel: "Depuis notre n°5 (10 sept.)",
    coursAvisCorps: [
      {
        type: "st",
        texte: "Ce qui a fait bouger les prix"
      },
      {
        type: "p",
        texte: "Depuis notre numéro 5 du 10 septembre, le bitcoin gagne 7 %, mais la dernière semaine est rouge. Hyperliquid y perd 12 % et revient à son niveau du 10 septembre. Derrière ces mouvements, ce sont surtout les nouvelles macroéconomiques américaines qui ont pesé sur les prix ce mois-ci :"
      },
      {
        type: "liste",
        items: [
          "11 septembre : l'inflation américaine (indice CPI) reste élevée, à 3,4 % sur un an en août, tirée par l'essence.",
          "16 septembre : la Fed relève son taux directeur de 0,25 point, à 3,75-4,00 %. Première hausse depuis 2023, pour contenir cette inflation.",
          "2 octobre : l'emploi ralentit, avec seulement 29 000 emplois créés en septembre et un chômage à 4,2 %.",
          "Semaine du 6 octobre : le compte rendu de la dernière réunion de la Fed laisse entrevoir une autre hausse d'ici la fin de l'année. Dans la foulée, les ETF bitcoin perdent environ 680 M$ et plus de 1 Md$ de positions à levier sont liquidées (fermées de force) en 24 h, ce qui accélère la baisse."
        ]
      },
      {
        type: "p",
        texte: "Le lien avec la crypto : des taux plus hauts rendent plus attractifs les placements qui versent un intérêt, au détriment du bitcoin, qui n'en verse aucun."
      },
      {
        type: "avis",
        texte: "la Fed est coincée. Relever encore ses taux freinerait un emploi déjà fragile, s'arrêter laisserait filer l'inflation. Les marchés parient sur une pause le 28 octobre, mais le prochain chiffre d'inflation tombe le 14 octobre : un chiffre au-dessus des 3,6-3,7 % attendus pourrait relancer l'idée d'une nouvelle hausse. La Fed elle-même prévoit encore une hausse d'ici la fin de l'année : inutile de compter sur une baisse des taux en 2026."
      }
    ],
    data: {
      titre: "3,3 Md$ d'actions tokenisées : analyse de l'état du marché",
      texte: "3,3 Md$ : c'est la valeur des actions tokenisées détenues au 12 octobre, contre 2,26 Md$ début juillet. Deux mesures permettent de classer les blockchains, et elles ne disent pas la même chose :",
      points: [
        "le volume additionne chaque transfert : la même action échangée 100 fois compte 100 fois. Il se gonfle donc facilement avec des primes (frais offerts, bonus) ;",
        "la valeur détenue mesure ce qui reste réellement dans les wallets (elle bouge aussi avec le cours des actions)."
      ],
      corps: [
        {
          type: "st",
          texte: "Le volume : trois leaders depuis juin"
        },
        {
          type: "image",
          src: "/numeros/6/ca-brille-actions-tokenisees.png",
          legende: "Part de chaque blockchain dans le volume mensuel de transferts d'actions tokenisées, de juin à mi-octobre 2026 (octobre : du 1er au 12)."
        },
        {
          type: "p",
          texte: "Solana menait en juin. En juillet et en août, place à BNB Chain : Binance y a lancé en juin bStocks, sa gamme d'actions tokenisées. Un seul jeton, QQQB (qui suit l'indice Nasdaq-100), a représenté environ 82 % des échanges d'actions tokenisées de juillet, selon CoinDesk (qui mesure les échanges, pas les transferts de nos graphiques). Binance avait aussi supprimé une partie de ses frais jusqu'au 31 août."
        },
        {
          type: "p",
          texte: "En septembre, sans la gratuité, le volume de BNB Chain a été divisé par deux (de 29 à 14,3 Md$), et Robinhood Chain a pris la tête avec 47 % du volume."
        },
        {
          type: "st",
          texte: "La valeur détenue : un autre classement"
        },
        {
          type: "image",
          src: "/numeros/6/ca-brille-valeur-detenue.png",
          legende: "Part de chaque blockchain dans la valeur d'actions tokenisées détenue en fin de mois, de juin à mi-octobre 2026 (octobre : au 12). Mêmes couleurs que le graphique du volume ; « Autres » : surtout Avalanche et Arbitrum."
        },
        {
          type: "p",
          texte: "Dit simplement : sur BNB Chain, le volume a été divisé par deux à la fin de la gratuité, mais la valeur détenue est restée, et elle a plus que doublé depuis juillet. À l'inverse, Robinhood Chain, première en volume en septembre, ne pèse que 4 à 5 % de ce qui est détenu."
        },
        {
          type: "p",
          texte: "Côté volume, c'est un jeu de chaises musicales, et ce sont les primes qui tiennent la musique. En quatre mois, trois leaders différents se sont succédé. Deux d'entre eux ont profité d'une incitation : la gratuité chez Binance, le gas offert chez Robinhood, où une partie des échanges d'actions passait en plus par des paires avec des memecoins, très spéculatives. Chez Binance, le volume a été divisé par deux dès la fin de l'offre. Être n°1 du volume un mois donné ne dit presque rien de la suite."
        },
        {
          type: "avis",
          texte: "Temporaire ou durable ? Le volume de BNB Chain est en partie temporaire, on l'a vu retomber ; celui de Robinhood Chain reste à éprouver. Leur modèle, lui, peut durer : il repose sur une base de clients existants. La vraie question n'est pas « quelle chaîne ? » mais « qui a les clients ? ». Et à 3,3 Md$, tout le secteur reste une goutte d'eau face aux Bourses classiques.",
          items: [
            "Le grand gagnant aujourd'hui, c'est BNB Chain, grâce à Binance plus qu'à la technologie. Sa valeur détenue a plus que doublé, et elle est restée après la fin de la gratuité. Sa force, c'est la distribution : des millions de clients à qui Binance propose ces actions en un clic, et qui peuvent les utiliser comme collatéral sur son exchange. Ses limites : ce sont des certificats émis par une société affiliée à Binance, pas des actions détenues en propre ; ; tout dépend d'un seul acteur ; ; le volume est très concentré sur un seul jeton, QQQB..",
            "Solana n'est pas renversée, elle est diluée. Elle perd la domination du volume, mais sa valeur détenue progresse de 44 % depuis juillet (de 348 à 500 M$). C'est l'écosystème le plus ouvert : plusieurs émetteurs (xStocks, Ondo…) et des actions tokenisées utilisables dans sa DeFi. Moins spectaculaire, mais un usage plus organique : à nos yeux, le profil le plus durable.",
            "Robinhood Chain a un atout pas encore joué : des millions de clients courtage, avec des actions déjà en portefeuille. Mais sa chaîne a surtout attiré la spéculation sur les memecoins, et on n'y détient que 137 M$ d'actions tokenisées (4 % du total). Son avenir dépend de la capacité de Robinhood à pousser ses clients vers sa chaîne."
          ]
        }
      ]
    },
    definitions: [
      {
        terme: "Probabilité implicite",
        def: "la probabilité qu'un prix « sous-entend ». Sur un marché de prédiction, un contrat qui paie 1 $ et s'échange à 0,62 $ traduit une estimation de 62 % : c'est l'avis des participants de cette plateforme, pas une prévision scientifique.",
        slug: "probabilite-implicite"
      },
      {
        terme: "Clé privée",
        def: "le secret qui sert à signer chaque envoi depuis une adresse : qui la connaît peut vider cette adresse. Ta phrase de récupération permet de la retrouver ; ni l'une ni l'autre ne se communique, à personne.",
        slug: "cle-privee"
      }
    ],
    jeu: {
      cta: "Une question sur ce numéro, un point qui reste flou, un sujet que tu aimerais qu'on creuse ? Réponds directement à ce mail : je lis tout, et je réponds.",
      question: "Un marché de prédiction, pour toi, c'est plutôt…",
      a: "Un pari, avec de l'argent en jeu",
      b: "Un indicateur, à consulter sans miser"
    }
  },
  {
    id: "7",
    numero: 7,
    date: "Mercredi 21 octobre 2026",
    titre: "Les smart accounts",
    excerpt: "Les smart accounts expliqués, où en sont les mesures crypto du budget 2027, MSCI face à Strategy, le nouveau mode de notation de Bittensor, Papertrade sous la loupe et 15 Md$ de positions ouvertes sur Hyperliquid.",
    notion: {
      titre: "Les smart accounts : un wallet qui applique tes règles",
      corps: [
        {
          type: "p",
          texte: "Depuis mai 2025, ton wallet peut devenir un smart account. Décryptons ensemble comment cela fonctionne et ce que ça apporte."
        },
        {
          type: "st",
          texte: "Le principe"
        },
        {
          type: "p",
          texte: "Le wallet que tu utilises est ce qu'on appelle un EOA. Celui qui détient la clé privée peut tout faire, chaque action demande sa propre signature, et le gas se paie en ETH."
        },
        {
          type: "def",
          terme: "EOA (Externally Owned Account)",
          slug: "eoa",
          texte: "Le compte « classique » d'une blockchain comme Ethereum : une adresse contrôlée par une seule clé privée, sans aucune règle supplémentaire. C'est le cas de la plupart des wallets (MetaMask, Rabby…) dans leur configuration d'origine."
        },
        {
          type: "p",
          texte: "Un smart account est un compte dont les règles sont écrites dans un smart contract. C'est ce contrat qui décide :"
        },
        {
          type: "liste",
          items: [
            "qui peut signer (une clé, plusieurs (multisig), une empreinte digitale…) ;",
            "jusqu'à quel montant et pendant combien de temps ;",
            "avec quel jeton on paie le gas, et qui le paie."
          ]
        },
        {
          type: "p",
          texte: "Ces règles ne sont pas figées à la création : le code fixe ce qui est possible, et tu ajustes ensuite les réglages (ajouter un signataire, changer un plafond) par une transaction. Cette idée de rendre le compte programmable porte un nom : l'abstraction de compte."
        },
        {
          type: "p",
          texte: "L'EOA est comme un coffre à clé unique : qui a la clé maîtrise tout, qui la perd perd tout. Le smart account se rapproche plutôt d'un compte bancaire, avec ses plafonds, ses procurations et ses cartes à usage limité."
        },
        {
          type: "st",
          texte: "Deux façons d'y passer"
        },
        {
          type: "liste",
          items: [
            "ERC-4337 (mars 2023) : tu ouvres un nouveau compte. Le smart account est un contrat dès sa création, avec une nouvelle adresse. Tu y transfères tes fonds depuis ton ancien wallet.",
            "EIP-7702 (mai 2025) : tu équipes ton compte actuel. Arrivé avec la mise à jour Pectra d'Ethereum, ce standard rend possible une opération nouvelle : la délégation. Tu signes, avec ta clé privée, une autorisation qui dit « mon adresse exécute désormais le code de tel smart contract ». Ton adresse devient alors un smart account : même adresse, mêmes fonds, rien à transférer."
          ]
        },
        {
          type: "def",
          terme: "Délégation (EIP-7702)",
          slug: "delegation-7702",
          texte: "La signature qui relie ton adresse à un smart contract. EIP-7702 est la règle d'Ethereum qui l'autorise ; la délégation est l'acte que tu signes. Sans délégation, ton compte reste un EOA classique. Avec ERC-4337, il n'y en a pas : le compte est un contrat dès le départ."
        },
        {
          type: "p",
          texte: "Avec EIP-7702, ta clé privée d'origine garde tous ses pouvoirs : elle peut toujours tout signer seule, et aucune délégation ne peut la lui retirer. Conséquence : si ta seed phrase fuite, le smart account ne te protège pas. Son intérêt est ailleurs : le confort, et une clé que tu sors moins souvent au quotidien."
        },
        {
          type: "p",
          texte: "Une fois le compte en place, les fonctions sont presque les mêmes avec les deux standards. La vraie différence, c'est qui garde le dernier mot :"
        },
        {
          type: "tableau",
          entetes: [
            "",
            "ERC-4337",
            "EIP-7702"
          ],
          lignes: [
            [
              "Adresse",
              "Nouvelle",
              "La tienne"
            ],
            [
              "Clé maîtresse",
              "Aucune : seules les règles du contrat comptent",
              "Ta clé d'origine, pour toujours"
            ],
            [
              "Plusieurs signataires, gardiens",
              "Protègent vraiment",
              "Contournables par ta clé d'origine"
            ],
            [
              "Usage type",
              "Sécurité",
              "Confort, sans migrer"
            ]
          ]
        },
        {
          type: "p",
          texte: "Dit simplement : ERC-4337 apporte une vraie sécurité, car aucune clé maîtresse ne subsiste ; EIP-7702 apporte le confort du smart account sur ton compte actuel."
        },
        {
          type: "p",
          texte: "Et Safe ? Safe (ex-Gnosis Safe, 2018) est un smart account plus ancien que ces deux standards, conçu pour le multisig. Il se range du côté d'ERC-4337 : nouvelle adresse, aucune clé maîtresse, et des signataires multiples qui protègent vraiment. Il peut d'ailleurs utiliser l'infrastructure d'ERC-4337 (paymasters, batching) grâce à un module."
        },
        {
          type: "st",
          texte: "Ce que ça change, concrètement"
        },
        {
          type: "p",
          texte: "Batching de transactions. Tu veux déposer 1 000 USDC dans un vault. Avec un EOA, il faut deux transactions : l'approve, puis le dépôt. Deux signatures, deux fois du gas. Avec un smart account, les deux opérations partent dans une seule transaction : on parle de batch (regroupement). L'approve peut alors porter sur le montant exact du dépôt et être consommé aussitôt, sans laisser d'autorisation ouverte derrière toi."
        },
        {
          type: "p",
          texte: "Payer le gas en USDC. Tu as 500 USDC et 0 ETH sur ton wallet. Avec un EOA, tu es bloqué : pour envoyer tes USDC, il faut d'abord faire venir de l'ETH pour le gas. Avec un smart account, les frais peuvent être prélevés directement sur tes USDC, ou pris en charge par l'application que tu utilises. C'est le rôle du paymaster."
        },
        {
          type: "def",
          terme: "Paymaster",
          slug: "paymaster",
          texte: "Un smart contract qui avance le gas à ta place. Soit il se rembourse en prélevant l'équivalent dans un autre jeton (des USDC, par exemple), soit il est financé par une application qui offre les frais à ses utilisateurs."
        },
        {
          type: "p",
          texte: "Laisser une appli agir pour toi, sans lui confier tes fonds. Tu veux acheter de l'ETH automatiquement chaque semaine. Aujourd'hui, deux options :"
        },
        {
          type: "liste",
          items: [
            "signer chaque achat à la main ;",
            "déposer tes USDC chez un service qui les gère à ta place."
          ]
        },
        {
          type: "p",
          texte: "Avec un smart account, tu accordes à l'appli une session key : 50 USDC par semaine, uniquement pour acheter de l'ETH sur Uniswap, pendant 3 mois. Tes fonds restent dans ton wallet, et l'appli ne peut rien faire d'autre."
        },
        {
          type: "def",
          terme: "Session key",
          slug: "session-key",
          texte: "Une clé temporaire, aux pouvoirs limités, que ton smart account accorde à une application : un plafond de montant, une durée, parfois une liste d'opérations autorisées. Une fois la limite atteinte ou la durée écoulée, elle ne sert plus à rien."
        },
        {
          type: "p",
          texte: "Ne plus dépendre d'une seule seed phrase. Selon le wallet, un smart account peut aussi changer la façon dont tu contrôles ton compte :"
        },
        {
          type: "liste",
          items: [
            "pour te connecter, une passkey : ton empreinte ou la reconnaissance faciale de ton téléphone, sans seed phrase à recopier ;",
            "pour récupérer ton compte, des gardiens : par exemple 3 appareils ou personnes de confiance, dont 2 suffisent pour remplacer ta clé si tu perds ton téléphone. C'est ce qu'on appelle le social recovery."
          ]
        },
        {
          type: "def",
          terme: "Passkey et social recovery",
          slug: "passkey",
          texte: "La passkey est une clé de connexion générée et stockée dans la puce sécurisée de ton téléphone ou de ton ordinateur ; elle se déverrouille par empreinte, visage ou code de l'appareil. Le social recovery permet de remplacer cette clé si tu la perds, avec l'accord d'un nombre minimum de gardiens désignés à l'avance."
        },
        {
          type: "p",
          texte: "Ces protections existent avec les deux standards, mais elles ne servent vraiment que sur un compte sans clé maîtresse (ERC-4337, Safe). Sur un compte EIP-7702, ta clé d'origine peut toujours tout faire seule : si ta seed phrase fuite, les gardiens n'y changent rien."
        },
        {
          type: "p",
          texte: "Préparer l'après-quantique. Un ordinateur quantique assez puissant pourrait un jour retrouver une clé privée à partir de la clé publique, visible dès ta première transaction. Sur un EOA, Ethereum impose un seul type de signature, celui qui est menacé. Sur un smart account, la vérification de la signature est du code : on peut y brancher des signatures conçues pour résister au quantique. C'est possible en théorie sur un compte ERC-4337, pas encore en pratique. Avec EIP-7702, en revanche, ça ne protège pas : ta clé d'origine reste maîtresse, et elle n'est pas résistante au quantique."
        },
        {
          type: "st",
          texte: "Le revers : le piège de la délégation"
        },
        {
          type: "p",
          texte: "Une délégation EIP-7702 confie toute ton adresse au contrat désigné. Une seule signature suffit, il faut donc être vigilant face aux contrats malveillants. Le risque est de signer une délégation sur un faux site."
        },
        {
          type: "st",
          texte: "L'activer prudemment"
        },
        {
          type: "p",
          texte: "Quelques wallets qui proposent des smart accounts :"
        },
        {
          type: "liste",
          items: [
            "MetaMask : propose de basculer ton compte en smart account (via EIP-7702, même adresse) quand une application demande une transaction groupée, sur un réseau compatible.",
            "Safe : le smart account multisig historique, avec plusieurs signataires (par exemple 2 signatures sur 3 pour valider un paiement). Très utilisé pour les gros montants et les trésoreries de projets. Nouvelle adresse.",
            "Ambire : wallet construit autour des smart accounts, compatible EIP-7702.",
            "Base Account (ex-Coinbase Smart Wallet) : smart account ERC-4337 avec connexion par passkey, sans seed phrase."
          ]
        },
        {
          type: "p",
          texte: "Si on te propose de « mettre à niveau » ton wallet, trois réflexes :"
        },
        {
          type: "liste",
          items: [
            "Une demande d'upgrade reçue par mail, message ou sur un site = du phishing. Ton wallet ne te contacte pas pour ça.",
            "Ne délègue qu'au contrat officiel proposé par ton wallet, depuis son interface.",
            "Si ton wallet affiche une délégation vers un contrat inconnu, refuse."
          ]
        },
        {
          type: "avis",
          texte: "pour un usage DeFi régulier, le smart account est un vrai progrès : moins de signatures, moins d'approves qui traînent, des plafonds qui limitent la casse. L'activer via le parcours officiel de ton wallet vaut le coup."
        },
        {
          type: "st",
          texte: "Ce qu'il faut retenir"
        },
        {
          type: "liste",
          items: [
            "Un smart account est un wallet programmable : plafonds, opérations groupées, gas payé en USDC, récupération sans seed phrase selon le wallet.",
            "Deux voies : ERC-4337 crée un nouveau compte sans clé maîtresse, donc vraiment plus sûr ; EIP-7702 équipe ton compte actuel pour le confort, mais ta seed phrase y garde tous les pouvoirs."
          ]
        }
      ]
    },
    actus: [
      {
        titre: "Budget 2027 : où en sont les mesures crypto ?",
        corps: [
          {
            type: "p",
            texte: "Les députés examinent depuis début octobre le projet de loi de finances pour 2027 (PLF), qui fixe les impôts de l'an prochain. Plusieurs amendements visent les cryptos. Voici où ils en sont, en gardant en tête qu'à ce stade rien n'est définitif."
          },
          {
            type: "st",
            texte: "Ce qui a été voté, rejeté ou reste en suspens"
          },
          {
            type: "tableau",
            entetes: [
              "Mesure",
              "Où on en est",
              "Ce que ça changerait pour toi"
            ],
            lignes: [
              [
                "Taxer les échanges crypto → stablecoins (USDC, EURC…)",
                "Votée par les députés en séance (16/10)",
                "Sécuriser ses gains en stablecoin deviendrait imposable, à partir du 1er janvier 2027"
              ],
              [
                "Reporter les moins-values crypto sur 10 ans, comme pour les actions",
                "Rejetée en séance (16/10, 75 contre, 18 pour)",
                "Rien : la règle actuelle reste"
              ],
              [
                "Augmenter la flat tax",
                "Plusieurs amendements rejetés en séance (16/10)",
                "Rien"
              ],
              [
                "Déclarer ses wallets en self-custody au-delà de 100 000 €",
                "Débattue en séance le 16/10, résultat à confirmer (adoptée en commission le 9/10)",
                "Une déclaration de plus si tu gères toi-même tes clés au-delà de ce montant"
              ],
              [
                "Soumettre les cryptos à l'exit tax au-delà de 800 000 €",
                "Sans effet pour l'instant : adoptée en commission (8/10), à revoter en séance",
                "Ne concerne que les gros patrimoines qui quittent la France"
              ]
            ]
          },
          {
            type: "p",
            texte: "La mesure sur les stablecoins, d'abord. Aujourd'hui, échanger une crypto contre une autre, stablecoins compris, n'est pas imposable : c'est le sursis d'imposition."
          },
          {
            type: "def",
            terme: "Sursis d'imposition",
            slug: "sursis-imposition",
            texte: "L'impôt n'est pas supprimé, il est reporté : l'échange n'est pas taxé au moment où il a lieu, et la plus-value n'est calculée que lors de la conversion en euros ou de l'achat d'un bien. C'est le régime actuel des échanges entre cryptos en France."
          },
          {
            type: "p",
            texte: "L'amendement voté supprimerait ce sursis pour les échanges contre des stablecoins adossés à une seule monnaie, ce que MiCA appelle des « tokens de monnaie électronique » (EMT), comme l'USDC ou l'EURC de Circle."
          },
          {
            type: "p",
            texte: "Dit simplement : passer ton ETH en USDC après une hausse serait taxé comme une vente en euros. Exemple simplifié : tu as acheté de l'ETH pour 100, tu le passes en USDC quand il vaut 200. Tu aurais 100 de plus-value imposable (200 − 100), même sans repasser en euros. (Le calcul réel porte sur l'ensemble de ton portefeuille crypto, pas sur cette seule ligne.)"
          },
          {
            type: "p",
            texte: "Reste une question ouverte : quid des stablecoins qui ne sont pas agréés MiCA ? Le texte vise la définition juridique d'un EMT, pas l'agrément de l'émetteur : l'USDT pourrait donc être concerné. Pour les stablecoins décentralisés comme le BOLD, adossé à de la crypto, ou l'USDe, adossé à des positions delta neutre, le texte ne permet pas de trancher."
          },
          {
            type: "p",
            texte: "Le report des moins-values, ensuite. Aujourd'hui, une perte sur tes cryptos ne s'impute que sur les gains de la même année. Si tu perds 1 000 € en 2026 et gagnes 1 000 € en 2027, tu paies l'impôt sur les 1 000 € de 2027. Avec le report, tu n'aurais rien payé (1 000 − 1 000 = 0). Le rejet maintient l'écart avec les actions, dont les pertes se reportent sur 10 ans."
          },
          {
            type: "st",
            texte: "La suite du calendrier"
          },
          {
            type: "liste",
            items: [
              "20 octobre : le vote de l'ensemble de la partie recettes est reporté sans date (près de 2 800 amendements restaient à examiner). Les députés passent au budget de la Sécurité sociale.",
              "27 octobre : reprise du budget de l'État.",
              "Avant le 17 novembre : la première lecture complète doit être bouclée."
            ]
          },
          {
            type: "p",
            texte: "Deux scénarios peuvent tout changer :"
          },
          {
            type: "liste",
            items: [
              "si la partie recettes est rejetée, le texte part au Sénat dans sa version initiale, sans aucun des amendements des députés ;",
              "si le gouvernement utilise le 49.3, le texte passe sans vote (sauf motion de censure), avec les seuls amendements qu'il a choisi de garder."
            ]
          }
        ],
        avis: "",
        avisItems: [
          "La mesure qui compte, c'est celle sur les stablecoins. Elle vise le geste le plus courant : prendre ses gains en USDC ou en EURC sans repasser en euros. Combinée au rejet du report, elle ferait taxer les gains plus tôt sans permettre de reporter les pertes.",
          "Un vote en séance n'est qu'une étape. La mesure sur les stablecoins peut disparaître avec la partie recettes ou au Sénat. À nos yeux, c'est le texte final qui dira s'il y a quelque chose à changer dans sa manière de gérer ses cryptos."
        ],
        source: "Cryptoast (direct PLF 2027 et article du 20/10) · amendements I-3898, I-3653, I-CF821, I-CF1822 (Assemblée nationale)"
      },
      {
        titre: "MSCI change ses règles : Strategy pourrait sortir de ses indices en novembre",
        corps: [
          {
            type: "p",
            texte: "MSCI, l'un des grands fournisseurs d'indices boursiers que répliquent les ETFs, se demande depuis un an s'il faut garder les DAT (Digital Asset Treasuries, ces sociétés cotées qui accumulent des cryptos en trésorerie) dans ses indices. Dans notre dossier sur les trésoreries crypto, on écrivait que la menace était « suspendue, pas levée ». Elle revient."
          },
          {
            type: "p",
            texte: "Le 6 janvier, MSCI avait renoncé à exclure ces sociétés en gardant une mesure provisoire pour celles dont les crypto pèsent au moins 50 % des actifs : elles restaient dans les indices, mais sans prise en compte de leurs nouvelles actions émises."
          },
          {
            type: "p",
            texte: "MSCI avait également lancé une consultation plus large, qui a débouché sur une proposition en août, puis sur une décision le 15 octobre instituant une nouvelle méthode pour repérer les « sociétés non opérationnelles »."
          },
          {
            type: "def",
            terme: "Société non opérationnelle",
            slug: "societe-non-operationnelle",
            texte: "Pour MSCI, une société dont la valeur repose surtout sur des actifs qu'elle détient (bitcoin, uranium, or…) plutôt que sur une activité qui produit des revenus. MSCI la considère comme plus proche d'un fonds d'investissement que d'une entreprise, et peut l'écarter de ses indices actions. Pour rappel, les mesures visent tout bilan dominé par un stock : Yellow Cake, qui détient de l'uranium physique, est concerné au même titre que les sociétés qui détiennent du bitcoin."
          },
          {
            type: "st",
            texte: "Ce qui change"
          },
          {
            type: "p",
            texte: "Le seuil de 50 % de crypto disparaît, remplacé par un test en deux étapes :"
          },
          {
            type: "liste",
            items: [
              "un filtre sur les actifs opérationnels : la société possède-t-elle assez d'actifs qui servent à une activité réelle ? (Chez Strategy, l'activité logicielle pèse très peu face aux bitcoins.)",
              "si elle échoue, cinq ratios financiers sont examinés pour trancher (il faudrait en déclencher quatre sur cinq pour être classé non opérationnel)."
            ]
          },
          {
            type: "p",
            texte: "La règle regarde les deux derniers exercices annuels :"
          },
          {
            type: "liste",
            items: [
              "un candidat n'entre pas s'il échoue sur l'un des deux ;",
              "un membre actuel n'est retiré que s'il échoue sur les deux."
            ]
          },
          {
            type: "st",
            texte: "Qui est concerné, et quand"
          },
          {
            type: "p",
            texte: "Une simulation de MSCI publiée en mai citait Strategy et Metaplanet, en plus de Yellow Cake ; SharpLink, qui détient de l'ETH, pourrait aussi être touchée. Rien n'est tranché société par société : la liste des sociétés potentiellement concernées sera publiée le 11 novembre, pour une application en novembre."
          },
          {
            type: "p",
            texte: "Strategy (environ 848 000 BTC, action en baisse d'environ 54 % sur un an) conteste et juge l'approche « discriminatoire » ; dans une lettre de septembre, la société estimait qu'une exclusion n'aurait pas d'impact significatif sur son activité, mais nuirait à la réputation de MSCI."
          },
          {
            type: "p",
            texte: "Dit simplement : une exclusion ne coûterait pas un seul bitcoin à Strategy. Elle obligerait les ETFs qui suivent les indices MSCI à revendre l'action, et lui retirerait ces acheteurs automatiques. C'est donc la valeur de l'action qui en pâtirait, et avec elle la prime, c'est-à-dire l'écart entre la valeur de l'action en Bourse et celle de ses bitcoins (ce que mesure la mNAV). Chez Strategy, la mNAV tourne aujourd'hui autour de 0,9 (relevé du 20 octobre) : l'action vaut même un peu moins que ses bitcoins, la prime a disparu."
          }
        ],
        avis: "",
        avisItems: [
          "Pour Strategy, une exclusion serait durable. Le délai des deux exercices aide une société qui change de modèle, pas elle. Une fois sortie, Strategy redeviendrait candidate et devrait présenter deux exercices propres pour revenir : impossible tant que son bilan reste du bitcoin.",
          "Pour les petites trésoreries, la porte se ferme. Entrer dans un indice était leur espoir d'attirer des acheteurs réguliers ; un seul exercice raté suffit désormais à les en écarter.",
          "Le coup porte sur le financement, pas sur le trésor. Le modèle repose sur la capacité à lever des fonds en vendant des actions plus cher que les bitcoins qu'elles représentent (on le détaille dans notre dossier sur les trésoreries crypto). C'est la mNAV qu'il faut surveiller après le 11 novembre, plus que le nombre de bitcoins."
        ],
        source: "The Block (15/10) · CoinAcademy (16/10) · annonces MSCI · dépôts et lettre de Strategy"
      },
      {
        titre: "Bittensor : des subnets dix fois plus grands, notés par un seul acteur",
        corps: [
          {
            type: "p",
            texte: "Bittensor est une blockchain qui rémunère du travail d'intelligence artificielle avec son token, le TAO. Elle est découpée en subnets : chacun est un marché spécialisé dans une tâche (générer du texte, entraîner un modèle, fournir de la puissance de calcul…)."
          },
          {
            type: "p",
            texte: "Sur chaque subnet, deux rôles :"
          },
          {
            type: "liste",
            items: [
              "les mineurs produisent le travail ;",
              "les validateurs le notent, en publiant des weights (poids), c'est-à-dire une note attribuée à chaque mineur."
            ]
          },
          {
            type: "p",
            texte: "Les TAO nouvellement créés à chaque bloc sont ensuite répartis selon ces notes. (Rien à voir avec les validateurs d'une blockchain en proof of stake : ici, ils évaluent un travail, ils ne valident pas des blocs.)"
          },
          {
            type: "def",
            terme: "Yuma Consensus",
            slug: "yuma-consensus",
            texte: "Le mécanisme standard de Bittensor pour transformer les notes des validateurs en récompenses. Plusieurs validateurs notent les mêmes mineurs, et c'est le consensus entre leurs notes, pondéré par le stake de chacun, qui compte. Un validateur isolé ou malhonnête pèse donc peu : s'il surnote un mineur ami, les autres ne suivent pas."
          },
          {
            type: "st",
            texte: "Ce que change Null Consensus"
          },
          {
            type: "p",
            texte: "Début octobre (mise à jour publiée le 7 octobre), Bittensor a ajouté un second mode, Null Consensus. Il est optionnel : c'est le propriétaire de chaque subnet qui décide de l'activer, et Yuma reste le mode par défaut, y compris pour les nouveaux subnets."
          },
          {
            type: "p",
            texte: "Pourquoi ce mode ? Yuma a un coût : pour comparer les notes de tous les validateurs, le réseau fait un calcul qui grossit très vite avec leur nombre (de façon quadratique : deux fois plus de validateurs, environ quatre fois plus de calcul). C'est ce qui plafonne un subnet à 256 participants. Null supprime ce calcul, et donc ce plafond. Il vise les subnets où le travail se mesure sans débat, comme de la puissance de calcul fournie : là, croiser plusieurs notes apporte peu, et le nombre de participants compte davantage."
          },
          {
            type: "tableau",
            entetes: [
              "",
              "Yuma Consensus",
              "Null Consensus"
            ],
            lignes: [
              [
                "Qui note les mineurs",
                "Tous les validateurs, consensus pondéré par le stake",
                "Un seul : le validateur qui détient le plus de stake sur le subnet"
              ],
              [
                "Garde-fou",
                "Le consensus entre validateurs : une note isolée est corrigée par celles des autres",
                "Aucun : le calcul de consensus est contourné"
              ],
              [
                "Participants max par subnet",
                "256",
                "2 500 (à partager si le subnet a plusieurs mécanismes d'émission)"
              ],
              [
                "Par défaut ?",
                "Oui",
                "Non, activé par le propriétaire du subnet"
              ]
            ]
          },
          {
            type: "p",
            texte: "Dit simplement : un subnet peut accueillir environ dix fois plus de participants (2 500 ÷ 256 ≈ 10), mais il dépend alors de l'honnêteté d'un seul validateur. C'est utile pour les tâches qui demandent beaucoup de mineurs, par exemple un subnet de puissance de calcul qui veut réunir 2 000 machines au lieu de 250. En contrepartie, plus rien ne corrige ce validateur s'il favorise certains mineurs."
          },
          {
            type: "liste",
            items: [
              "Ceux qui ont staké leurs TAO auprès d'un validateur du subnet continuent de toucher leur part.",
              "Revenir à Yuma est possible, mais suppose de redescendre à 256 participants au plus."
            ]
          },
          {
            type: "st",
            texte: "Six mois après une crise sur la centralisation"
          },
          {
            type: "p",
            texte: "En avril, Covenant AI, l'un des plus gros opérateurs de subnets, a quitté Bittensor en dénonçant une « décentralisation de façade » : selon lui, le cofondateur du réseau contrôlait de fait le triumvirat, l'organe qui décide des mises à jour. Le cofondateur a démenti plusieurs de ces accusations. La question de la concentration du pouvoir sur le réseau était donc déjà posée."
          }
        ],
        avis: "",
        avisItems: [
          "Le propriétaire choisit, le plus gros validateur note. Le propriétaire qui active Null y gagne de la capacité : plus de mineurs, donc plus de travail produit. Le pouvoir de noter, lui, revient au validateur qui détient le plus de stake, et rien ne garantit que ce soit le propriétaire. Ce n'est pas forcément un défaut si la tâche exige beaucoup de participants et que ce validateur est compétent.",
          "Six mois après des accusations de centralisation de la gouvernance, le réseau ajoute un mode qui centralise, lui, la notation. L'option a au moins le mérite d'être choisie subnet par subnet, sans toucher au reste du réseau.",
          "La métrique à suivre : combien de subnets passent en Null, et lesquels. Quelques petits subnets, c'est une option de niche. Si ceux qui reçoivent le plus de TAO basculent, la critique prendra du poids."
        ],
        source: "notes de version Opentensor (Runtime 475) · The Block, Cointelegraph, Decrypt (avril 2026, départ de Covenant AI)"
      }
    ],
    protocole: {
      nom: "Papertrade",
      slug: "papertrade",
      bref: "Papertrade est une plateforme de perps lancée le 10 octobre sur HyperEVM, la couche d'Hyperliquid qui accueille les applications tierces (voir notre fiche Hyperliquid). On n'y trade que deux marchés, le bitcoin et l'ether, avec un levier jusqu'à ×1000. Son modèle ressemble à celui d'un casino : la banque n'est financée que par les pertes des joueurs, avec la particularité que chaque perdant reçoit un jeton qui, une fois staké, rapporte une part des pertes futures des autres.",
      etapes: [],
      etapesCorps: [
        {
          type: "p",
          texte: "Tu déposes des USDC en marge, tu choisis le bitcoin ou l'ether, un sens (long ou short) et un levier. Mais aucune position n'est ouverte sur un marché : Papertrade lit le prix d'Hyperliquid et calcule lui-même ton résultat. C'est un perp synthétique."
        },
        {
          type: "def",
          terme: "Perp synthétique",
          slug: "perp-synthetique",
          texte: "Un perp qui n'existe que dans les comptes du protocole : il suit un prix de référence, sans qu'aucun ordre soit passé sur un marché, et la plateforme règle elle-même gains et pertes."
        },
        {
          type: "p",
          texte: "Sur Papertrade, le prix de référence est le milieu du BBO du carnet d'ordres d'Hyperliquid. Et comme rien ne s'échange réellement, il n'y a ni funding, ni frais d'ouverture, ni slippage."
        },
        {
          type: "def",
          terme: "BBO (Best Bid and Offer)",
          slug: "bbo",
          texte: "Le meilleur prix d'achat (bid) et le meilleur prix de vente (offer) proposés à un instant donné dans un carnet d'ordres. Le mid est leur milieu : acheteur à 99,8, vendeur à 100,2, le mid vaut 100."
        },
        {
          type: "p",
          texte: "À ×1000, 100 USDC ouvrent une position de 100 000 $ (100 × 1 000), et environ 0,1 % de mouvement contre toi suffit à effacer la marge et à liquider la position : c'est la règle « 100 ÷ ton levier » de notre numéro 4."
        },
        {
          type: "st",
          texte: "La faille : un prix facile à pousser"
        },
        {
          type: "p",
          texte: "Déplacer le mid d'Hyperliquid (donc le prix de référence sur Papertrade) coûte peu, et à ×1000 ça rapporte gros. Pas à pas, avec un carnet volontairement élargi :"
        },
        {
          type: "liste",
          items: [
            "Le mid est à 100. Sur Papertrade, tu ouvres un long de 1 M$ avec 1 000 $ de marge (×1000).",
            "Sur Hyperliquid (carnet à 99,8 / 100,2), tu places un ordre d'achat à 100,0. Le mid passe à 100,1, soit +0,1 %, sans que ton ordre soit exécuté.",
            "Tu clôtures ton long sur Papertrade : 1 000 $ de gain avant décote (1 000 000 × 0,1 %), environ 700 $ après. Tu gagnes environ 70 % de ta mise en quelques secondes : c'est pourquoi la décote ne suffit pas à protéger la LP.",
            "Puis tu annules ton ordre sur Hyperliquid."
          ]
        },
        {
          type: "p",
          texte: "C'est ce qui s'est passé le jour du lancement, avec un wallet :"
        },
        {
          type: "liste",
          items: [
            "les ordres posés : de gros achats sur le carnet ETH d'Hyperliquid, environ 6 000 ETH, soit près de 15 M$ (The Block) ;",
            "l'effet : un mid relevé de 0,1 à 0,2 %, encaissé par de gros longs à ×1000 sur Papertrade ;",
            "le gain : environ 1,28 M$ en huit heures, sur environ 300 trades ;",
            "reperdu le soir même : environ 450 k$. Une trentaine de positions short à ×660, laissées ouvertes plus de trois heures, ont été liquidées. À ce levier, un mouvement d'environ 0,15 % contre soi suffit : un mouvement ordinaire du marché, sans aucune manipulation."
          ]
        },
        {
          type: "p",
          texte: "La LP, partie de zéro, a pu payer parce qu'elle s'était déjà remplie de plusieurs millions de pertes en quelques heures. Pas un bug : le mécanisme a marché comme écrit ; il manquait les garde-fous classiques (comparer avec un second prix, lisser sur une durée). L'équipe a depuis resserré les plafonds de position."
        }
      ],
      rendementLabel: "D'où vient l'argent ?",
      rendement: "",
      rendementCorps: [
        {
          type: "p",
          texte: "Tous les traders ont la même contrepartie : une réserve d'USDC, la LP. Partie de zéro, elle n'accepte aucun dépôt et se remplit uniquement :"
        },
        {
          type: "liste",
          items: [
            "des marges des traders liquidés ;",
            "des pertes des positions clôturées dans le rouge."
          ]
        },
        {
          type: "p",
          texte: "C'est elle qui paie les gagnants, mais pas en totalité. Elle applique d'abord une décote sur le gain : plus le prix a peu bougé entre l'ouverture et la clôture, plus la décote est forte. Un gain tiré d'un mouvement de 0,1 % est donc davantage rogné qu'un gain tiré d'un mouvement de 2 %. Le but : décourager les gains sur de tout petits écarts, les plus faciles à provoquer. Elle prélève ensuite 2 % de frais sur ce qui reste."
        },
        {
          type: "p",
          texte: "Si la LP est vide, tu récupères ta marge et ton profit attend dans une file d'attente, réglé dans l'ordre d'arrivée. La LP ne peut donc jamais s'endetter."
        },
        {
          type: "p",
          texte: "Le protocole repose ainsi sur une thèse : les traders à fort levier finissent par perdre, et leurs pertes suffisent à alimenter la réserve qui sert de contrepartie, sans avoir besoin de liquidity providers extérieurs."
        },
        {
          type: "p",
          texte: "Les perdants reçoivent du PAPER, le jeton du protocole : 100 PAPER par dollar perdu au départ, puis de moins en moins (environ 17 par dollar mi-octobre). Le PAPER n'est pas encore vendable : sa seule utilité est d'être staké."
        },
        {
          type: "p",
          texte: "Les stakers sont payés en USDC, au prorata du PAPER qu'ils ont staké, à partir de deux sources :"
        },
        {
          type: "liste",
          items: [
            "l'excédent de la LP : au-delà d'environ 5 M$, la réserve ne grossit plus, et ce qu'elle gagne en plus est reversé aux stakers ;",
            "la moitié des 2 % de frais prélevés sur les gains des traders (l'autre moitié va aux développeurs)."
          ]
        },
        {
          type: "p",
          texte: "Ces versements ne tombent que si personne n'attend dans la file et que la LP reste au-dessus de son plafond. Au 20 octobre, environ 58 M$ avaient été versés ainsi (DefiLlama)."
        },
        {
          type: "p",
          texte: "Dit simplement : le PAPER est un droit sur les pertes futures des autres traders."
        }
      ],
      risqueNiveau: "élevé",
      risqueSens: "eleve",
      risques: "",
      risquesItems: [
        "Pour le trader : un ×1000 se fait liquider sur un mouvement de quelques secondes.",
        "Pour le staker : ses revenus sont conditionnés par les pertes des traders.",
        "Le contrôle : un multisig 2-sur-3 (les deux fondateurs, semi-pseudonymes, et un tiers) peut suspendre le trading, geler un marché ou changer les frais. Un audit (Guardian) a été publié le 17 octobre, mais la manipulation du prix y est classée comme risque connu, hors du périmètre corrigé."
      ],
      importance: "Papertrade est un cas d'école : un dérivé synthétique ne vaut que ce que vaut sa source de prix, et plus le levier est haut, moins il faut la déformer pour qu'une manipulation paie. C'était déjà la question des marchés de prédiction d'Hyperliquid dans notre numéro 6 : qui fixe le prix de règlement, et combien coûte-t-il de le fausser ?",
      importanceSuite: [
        "L'affluence retombe déjà : l'argent déposé sur la plateforme est passé d'environ 102 M$ au lendemain du lancement à environ 45 M$ le 21 octobre (DeFiLlama).",
        "À nos yeux, ce n'est pas un outil de trading mais un jeu dont l'avantage de la maison est en grande partie reversé aux stakers. Et le PAPER n'est pas un rendement : c'est un pari sur l'affluence future de la plateforme."
      ]
    },
    cours: [
      {
        actif: "BTC",
        nom: "Bitcoin",
        prix: "~83 979 $",
        var7j: "▲ +0,9 %",
        sens: "up"
      },
      {
        actif: "ETH",
        nom: "Ethereum",
        prix: "~2 477 $",
        var7j: "▼ −1,0 %",
        sens: "down"
      },
      {
        actif: "SOL",
        nom: "Solana",
        prix: "~107 $",
        var7j: "▲ +0,4 %",
        sens: "up"
      },
      {
        actif: "HYPE",
        nom: "Hyperliquid",
        prix: "~81 $",
        var7j: "▼ −0,9 %",
        sens: "down"
      },
      {
        actif: "BNB",
        prix: "~746 $",
        var7j: "▲ +0,8 %",
        sens: "up"
      }
    ],
    cours7jLabel: "Depuis notre n°6 (8 jours)",
    coursAvisCorps: [
      {
        type: "st",
        texte: "Ce qui a fait bouger les prix"
      },
      {
        type: "p",
        texte: "Une semaine en aller-retour : le bitcoin est retombé à environ 80 000 $ le 15 octobre, puis il est remonté. Au final, la sélection est quasi stable depuis notre numéro 6 (entre −1,0 % et +0,9 %), l'ether un peu en retrait. Comme la semaine dernière, c'est d'abord l'inflation américaine qui a pesé, puis ses effets sur le marché, avant un rebond en fin de période :"
      },
      {
        type: "liste",
        items: [
          "14 octobre : l'inflation (indice CPI) monte à 3,7 % sur un an en septembre, contre 3,4 % en août et 3,6 % attendus. L'essence explique plus de la moitié de la hausse du mois.",
          "15 octobre : le bitcoin retombe à environ 80 000 $, son plus bas depuis la mi-septembre. Près de 1 Md$ de positions à levier sont liquidées (fermées de force) en 24 h.",
          "Semaine du 12 au 16 octobre : les ETF bitcoin perdent environ 230 M$, ceux sur l'ether 320 M$. Rapportées à leur taille, bien plus petite, ces sorties pèsent nettement plus lourd côté ether : c'est une piste pour expliquer pourquoi il recule davantage.",
          "19-21 octobre : le rebond. Il est probablement dû à la baisse du pétrole : elle apaise la crainte d'inflation et fait remonter les actions américaines, que le bitcoin suit en ce moment. Les ETF bitcoin en profitent, avec environ +527 M$ d'entrées nettes le 19 octobre."
        ]
      },
      {
        type: "p",
        texte: "Prochaine étape : la décision de la Fed le 28 octobre. Elle a déjà relevé ses taux le 16 septembre, une première depuis 2023. Les marchés n'y attendent pas de hausse des taux, mais parient sur une hausse d'ici la fin de l'année."
      },
      {
        type: "avis",
        texte: "avec une inflation qui accélère encore, le vrai sujet du 28 octobre est de savoir si la Fed confirmera une hausse en décembre. Une baisse des taux n'est pas à l'horizon, et le contexte reste défavorable aux actifs sans rendement comme le bitcoin."
      }
    ],
    data: {
      titre: "15 Md$ de positions ouvertes sur Hyperliquid, dont un quart sur l'or, le pétrole et les actions",
      texte: "Environ 15 Md$ : c'est l'open interest d'Hyperliquid relevé le 20 octobre. C'est un niveau élevé, mais en retrait par rapport au record d'environ 18 Md$ du 23 septembre.",
      def: {
        terme: "Open interest (positions ouvertes)",
        slug: "open-interest",
        texte: "la valeur totale des positions encore ouvertes à un instant donné. Ce n'est pas un volume : une position compte une fois tant qu'elle reste ouverte, qu'elle ait été ouverte hier ou il y a trois mois. Ce n'est pas non plus l'argent déposé : avec 1 000 $ de marge et un levier ×10, tu ouvres une position de 10 000 $ (1 000 × 10), et c'est ce montant qui entre dans l'open interest."
      },
      corps: [
        {
          type: "st",
          texte: "D'où viennent ces 15 Md$"
        },
        {
          type: "liste",
          items: [
            "≈ 11,1 Md$ sur les perps natifs, ceux qu'Hyperliquid liste lui-même. Le bitcoin (3,4 Md$) et l'ether (2,6 Md$) en font plus de la moitié ;",
            "≈ 4 Md$ sur les marchés HIP-3, des perps déployés par des sociétés tierces sur le carnet d'ordres d'Hyperliquid (voir notre fiche Hyperliquid). La grosse majorité passe par un seul déployeur, trade.xyz (≈ 3,9 Md$), sur les actifs suivants :"
          ]
        },
        {
          type: "liste",
          items: [
            "≈ 3 Md$ sur des actions et des indices boursiers : le S&P 500 en tête, puis SK Hynix, Google, Micron, Nvidia… ;",
            "≈ 0,8 Md$ sur les matières premières : l'or, le pétrole, l'argent."
          ]
        },
        {
          type: "p",
          texte: "Environ un quart des positions ouvertes sur Hyperliquid porte sur des marchés créés par d'autres que lui, et en grande majorité sur des actifs de la finance traditionnelle."
        },
        {
          type: "avis",
          texte: "",
          items: [
            "Le signal est plus solide que le volume : l'open interest compte des positions qui restent ouvertes, pas des allers-retours qui gonflent les chiffres (voir notre numéro 6).",
            "Le vrai enjeu est la dépendance à trade.xyz : presque toute la croissance hors crypto repose sur un seul déployeur à ce stade."
          ]
        }
      ]
    },
    definitions: [
      {
        terme: "Abstraction de compte",
        def: "rendre programmables les règles d'un compte. Au lieu d'une seule clé imposée par la blockchain, un smart contract décide qui peut signer, jusqu'à quel montant et comment se paie le gas. C'est ce qui rend possibles les smart accounts, et une piste, encore théorique, vers des signatures résistantes au quantique.",
        slug: "abstraction-de-compte"
      },
      {
        terme: "Open interest",
        def: "la valeur totale des positions encore ouvertes sur un marché de dérivés, levier compris. Il mesure ce qui reste ouvert, pas ce qui s'échange (le volume) ni ce qui est déposé (la marge).",
        slug: "open-interest"
      }
    ],
    jeu: {
      cta: "Une question sur ce numéro, un point qui reste flou, un sujet que tu aimerais qu'on creuse ? Réponds directement à ce mail : je lis tout, et je réponds.",
      question: "Les smart accounts, tu en es où ?",
      a: "J'en utilise déjà un, ou mon wallet a basculé",
      b: "Pas encore, je garde mon wallet classique"
    }
  }
];

// Petite fonction utilitaire : retrouver un numéro par son id.
export function getIssue(id: string): Issue | undefined {
  return issues.find((n) => n.id === id);
}
