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
      "Créer de nouveaux jetons. Pour un stablecoin adossé à des dollars : tu déposes des dollars et le protocole « frappe » l'équivalent en jetons ; quand tu les rends, il les « rachète » (redeem) et te rend tes dollars. Le mécanisme est le même sur un CDP, avec une différence de taille : ce que tu déposes n'est pas du dollar mais une crypto volatile mise en garantie, et les jetons frappés sont une dette que tu devras rembourser pour récupérer ton dépôt.",
    numero: 3,
  },
  {
    slug: "contrat-perpetuel",
    terme: "Contrat perpétuel (« perp »)",
    definition:
      "Un contrat qui suit le prix d'un actif (bitcoin, ether…) sans qu'on le possède. On choisit un sens : à la hausse (long) ou à la baisse (short). Si le prix va dans ton sens, tu gagnes la différence ; sinon tu la perds. Sa particularité : il n'a pas de date d'expiration, contrairement à un contrat à terme classique — d'où « perpétuel ».",
    numero: 4,
  },
  {
    slug: "levier",
    terme: "Levier",
    definition:
      "Le rapport entre la taille de ta position et l'argent que tu as réellement déposé. Avec 100 € de garantie et un levier de 20×, tu pilotes une position de 2 000 € : gains et pertes se calculent sur les 2 000 €, pas sur tes 100 €. Repère utile : 100 ÷ ton levier donne le mouvement de prix, en pourcentage, qui suffit à effacer ta mise.",
    numero: 4,
  },
  {
    slug: "liquidation",
    terme: "Liquidation",
    definition:
      "La vente forcée d'une garantie, quand elle ne couvre plus suffisamment la dette ou la perte. Elle est automatique : personne ne prévient, il n'y a rien à valider. Le mot recouvre deux situations qu'il ne faut pas confondre. Sur un contrat perpétuel, la position est fermée et l'essentiel de la mise est perdu ; la plateforme n'attend pas que la garantie soit à zéro pour couper, elle impose d'en conserver un petit reliquat appelé marge de maintenance. Sur un CDP, en revanche, c'est le collatéral qui est vendu pour solder l'emprunt : une pénalité est prélevée, mais ce qui reste après remboursement de la dette te revient. On ne perd donc pas tout — on perd la pénalité, et surtout le bénéfice d'un éventuel rebond.",
    numero: 4,
  },
  {
    slug: "funding-rate",
    terme: "Funding rate",
    definition:
      "Un paiement récurrent entre les deux camps d'un marché de contrats perpétuels : le camp majoritaire paie l'autre. Comme ces contrats n'expirent jamais, rien ne force leur prix à rejoindre celui de l'actif réel — le funding sert à recoller les deux. Si les acheteurs dominent, ils paient les vendeurs, ce qui décourage le déséquilibre. Ce n'est jamais la plateforme qui l'encaisse : l'argent circule d'un utilisateur à l'autre.",
    numero: 4,
  },
  {
    slug: "mica",
    terme: "MiCA (Markets in Crypto-Assets)",
    definition:
      "Le règlement européen qui encadre les crypto-actifs. Pour émettre un stablecoin dans l'Union, il impose un agrément, des réserves cantonnées et un droit au remboursement à tout moment. Sans agrément, un stablecoin ne peut plus être proposé aux clients européens — ce qui a conduit plusieurs plateformes à retirer l'USDT de Tether à leurs utilisateurs européens en 2026.",
    numero: 4,
  },
  {
    slug: "safe-harbor",
    terme: "Safe harbor",
    definition:
      "Littéralement « port d'abri ». Une zone de tolérance réglementaire : tant qu'un projet respecte les conditions fixées, le régulateur s'engage à ne pas le poursuivre. Dans la proposition de la SEC d'août 2026, un projet cesse d'être traité comme un contrat d'investissement — donc comme un titre financier — une fois qu'il fonctionne sans dépendre des efforts de son équipe fondatrice.",
    numero: 4,
  },
  {
    slug: "delta-neutre",
    terme: "Delta-neutre",
    definition:
      "Une position construite pour ne plus dépendre du prix. On combine deux positions opposées de même taille — par exemple vendre un contrat perpétuel bitcoin tout en achetant la même quantité de bitcoin au comptant : ce que l'une perd, l'autre le gagne. Le prix n'a donc plus d'effet sur le résultat, et ce qui reste est le revenu produit par la position elle-même (ici le funding). Neutre au prix ne veut pas dire sans risque : le funding peut s'inverser, et la jambe vendeuse peut être liquidée si sa marge n'est pas réalimentée.",
    numero: 4,
  },
  {
    slug: "carnet-ordres",
    terme: "Carnet d'ordres",
    definition:
      "La liste, en temps réel, de tous ceux qui veulent acheter et de tous ceux qui veulent vendre un actif, avec leur prix et leur quantité. Une transaction a lieu quand un acheteur et un vendeur tombent d'accord. C'est le fonctionnement historique des Bourses, repris par la plupart des plateformes d'échange crypto. La particularité d'Hyperliquid est que son carnet est inscrit sur la blockchain, et non dans les serveurs privés d'une entreprise.",
    numero: 4,
  },
  {
    slug: "market-making",
    terme: "Market making",
    definition:
      "Le métier qui consiste à afficher en permanence un prix à l'achat et un prix à la vente, pour que quiconque veut échanger trouve toujours une contrepartie. Le market maker se rémunère sur l'écart entre ces deux prix (le spread). En contrepartie, il accepte de prendre l'autre côté de chaque transaction — y compris lorsque le marché part violemment contre lui.",
    numero: 4,
  },
  {
    slug: "etf",
    terme: "ETF (fonds coté en Bourse)",
    definition:
      "Un fonds coté en Bourse qui détient un actif pour toi. Un ETF Bitcoin ou Ethereum achète et conserve de vrais bitcoins ou ethers ; en achetant une part du fonds depuis un compte-titres classique, on s'expose au cours de l'actif sans ouvrir de portefeuille crypto ni gérer de clés privées. C'est le véhicule par lequel passe l'essentiel de l'argent institutionnel, ce qui explique que les entrées et sorties de ces fonds pèsent sur les cours.",
    numero: 4,
  },
  {
    slug: "open-interest",
    terme: "Open interest (positions ouvertes)",
    definition:
      "La valeur totale des positions encore ouvertes sur un marché de dérivés, à un instant donné. Ce n'est pas un volume : le volume mesure ce qui a été échangé sur une période, l'open interest ce qui reste ouvert. Ce n'est pas non plus l'argent déposé : avec 1 000 $ de marge et un levier ×10, on ouvre une position de 10 000 $, et c'est ce montant qui entre dans l'open interest. Un volume élevé accompagné d'un open interest en baisse indique que les traders soldent leurs positions ; un open interest en hausse indique que de nouvelles positions s'ouvrent, et que le montant susceptible d'être liquidé grossit d'autant.",
    numero: 4,
  },
  {
    slug: "oracle",
    terme: "Oracle",
    definition:
      "Le mécanisme qui fournit à une blockchain une information qu'elle ne peut pas obtenir seule — au premier rang desquelles le prix d'un actif. Une blockchain ne « voit » pas le cours du bitcoin : il faut le lui livrer depuis l'extérieur. Les principaux fournisseurs sont Chainlink, de loin le plus utilisé (il alimente Aave, Compound et l'essentiel de la DeFi), Pyth, spécialisé dans les mises à jour en moins d'une seconde — ce qui en fait la référence des plateformes de contrats perpétuels —, ainsi que RedStone et Chronicle. C'est un point critique de la DeFi : qui contrôle l'oracle contrôle les liquidations.",
    numero: 4,
  },
  {
    slug: "cdp",
    terme: "CDP (Collateralized Debt Position)",
    definition:
      "Une position de dette garantie par un dépôt. Tu bloques une crypto que tu possèdes, et le protocole te prête des stablecoins en échange — toujours moins, en valeur, que ce que tu as déposé. Ton dépôt n'est pas prêté à quelqu'un d'autre : il reste à toi, simplement immobilisé jusqu'au remboursement. L'équivalent en banque privée s'appelle le crédit lombard. Les protocoles les plus connus sont Sky (ex-MakerDAO), Liquity et Spark.",
    numero: 5,
  },
  {
    slug: "collateral",
    terme: "Collatéral",
    definition:
      "L'actif que tu bloques en garantie d'un emprunt. Il reste ta propriété, mais tu ne peux plus y toucher tant que la dette n'est pas remboursée. S'il perd trop de valeur, le protocole peut le vendre pour se rembourser : c'est la liquidation.",
    numero: 5,
  },
  {
    slug: "ltv",
    terme: "LTV (Loan-to-Value)",
    definition:
      "Ta dette rapportée à la valeur de ta garantie. Emprunter 60 $ contre 100 $ de dépôt, c'est un LTV de 60 %. Point important : tu ne le contrôles qu'à moitié — si le prix de ton collatéral baisse, ton LTV remonte tout seul. Chaque protocole fixe un plafond, le LLTV, au-delà duquel la position est liquidée.",
    numero: 5,
  },
  {
    slug: "long",
    terme: "Long (être long)",
    definition:
      "Parier à la hausse : on est long quand on gagne si le prix monte et qu'on perd s'il baisse. Détenir du bitcoin, c'est déjà être long. L'inverse — parier à la baisse — s'appelle être short. Sur les contrats perpétuels, les deux positions se prennent avec du levier, ce qui les expose à la liquidation.",
    numero: 5,
  },
  {
    slug: "taux-directeur",
    terme: "Taux directeur",
    definition:
      "Le taux auquel la banque centrale prête aux banques. C'est le prix de départ de l'argent : tout le reste s'en déduit, du crédit immobilier au rendement d'une obligation d'État. Quand il monte, emprunter coûte plus cher partout et placer « sans risque » rapporte davantage — ce qui rend les actifs qui ne versent rien par eux-mêmes, bitcoin compris, relativement moins attractifs. Aux États-Unis, il est fixé par la Fed et se situe à 3,50-3,75 % (septembre 2026).",
    numero: 5,
  },
  {
    slug: "pool-de-stabilite",
    terme: "Pool de stabilité",
    definition:
      "La réserve dans laquelle un protocole puise pour absorber les liquidations. Tu y déposes un stablecoin ; le jour où un emprunteur passe sous son seuil, ton dépôt sert à solder sa dette et tu récupères son collatéral, avec une décote en ta faveur. C'est de là que vient le rendement — et c'est aussi le risque : tu peux te retrouver avec de l'ether au lieu de tes stablecoins, précisément le jour où le marché s'effondre. Liquity en fait un usage central, avec un pool séparé par collatéral.",
    numero: 5,
  },
  {
    slug: "cpi",
    terme: "CPI (Consumer Price Index)",
    definition:
      "L'indice des prix à la consommation américain, la mesure officielle de l'inflation aux États-Unis. Publié chaque mois, il conditionne les décisions de la Réserve fédérale : une inflation qui remonte pousse à relever les taux, ce qui rend les actifs qui ne versent aucun revenu — bitcoin compris — relativement moins attractifs. C'est pour cette raison qu'une publication de CPI fait souvent bouger le marché crypto le jour même.",
    numero: 5,
  },
  {
    slug: "marche-de-prediction",
    terme: "Marché de prédiction",
    definition:
      "Une plateforme où l'on achète et vend des contrats liés au résultat d'un événement : élection, match, décision de la Fed, prix du bitcoin à une date donnée… Chaque question se répond par oui ou par non. Le prix du contrat se forme entre participants, selon l'offre et la demande, et la valeur du OUI plus celle du NON font toujours 1 $. Une fois la réponse connue, le contrat gagnant vaut 1 $ et le perdant ne vaut plus rien. Les plus connus sont Polymarket et Kalshi.",
    numero: 6,
  },
  {
    slug: "probabilite-implicite",
    terme: "Probabilité implicite",
    definition:
      "La probabilité qu'un prix « sous-entend ». Sur un marché de prédiction, un contrat qui paie 1 $ et s'échange à 0,62 $ traduit une estimation collective de 62 % de chances. Ce n'est pas une prévision scientifique : c'est ce que les participants de cette plateforme sont prêts à payer, compte tenu de ce qu'ils savent. En pratique, les frais, l'écart entre prix d'achat et prix de vente et le petit nombre de participants sur certains marchés éloignent un peu le prix de cette probabilité.",
    numero: 6,
  },
  {
    slug: "cle-privee",
    terme: "Clé privée",
    definition:
      "Le secret qui sert à signer chaque envoi depuis une adresse : qui la connaît peut vider cette adresse. Ta phrase de récupération permet de la retrouver. De la clé privée, on calcule une clé publique, puis, par hachage (une empreinte qu'on ne calcule que dans un sens), ton adresse. Retrouver la clé privée à partir de la clé publique est aujourd'hui hors de portée : c'est ce qui protège les wallets.",
    numero: 6,
  },
  {
    slug: "eoa",
    terme: "EOA (Externally Owned Account)",
    definition:
      "Le compte « classique » d'une blockchain comme Ethereum : une adresse contrôlée par une seule clé privée, sans aucune règle supplémentaire. C'est le cas de la plupart des wallets (MetaMask, Rabby…) dans leur configuration d'origine. Celui qui détient la clé privée peut tout faire, chaque action demande sa propre signature, et le gas se paie en ETH.",
    numero: 7,
  },
  {
    slug: "smart-account",
    terme: "Smart account",
    definition:
      "Un compte dont les règles sont écrites dans un smart contract. C'est ce contrat qui décide qui peut signer (une clé, plusieurs (multisig), une empreinte digitale…), jusqu'à quel montant et pendant combien de temps, avec quel jeton on paie le gas, et qui le paie. Ces règles ne sont pas figées à la création : le code fixe ce qui est possible, et tu ajustes ensuite les réglages (ajouter un signataire, changer un plafond) par une transaction. Deux façons d'y passer : ERC-4337 (un nouveau compte) ou EIP-7702 (ton compte actuel équipé d'un smart contract).",
    numero: 7,
  },
  {
    slug: "abstraction-de-compte",
    terme: "Abstraction de compte",
    definition:
      "L'idée de rendre programmables les règles d'un compte. Sur un compte classique (EOA), la blockchain impose une seule règle : la clé privée signe, et elle peut tout faire. Avec l'abstraction de compte, c'est un smart contract qui fixe les règles : qui peut signer (une clé, plusieurs, une passkey), jusqu'à quel montant, pendant combien de temps, avec quel jeton on paie le gas. Les smart accounts en sont l'application concrète, via ERC-4337 (un nouveau compte) ou EIP-7702 (ton compte actuel équipé d'un smart contract). Comme la vérification de la signature devient du code, on pourrait aussi y brancher des signatures conçues pour résister au quantique : c'est possible en théorie, pas encore en pratique.",
    numero: 7,
  },
  {
    slug: "erc-4337",
    terme: "ERC-4337",
    definition:
      "Le standard (mars 2023) avec lequel tu ouvres un nouveau compte : le smart account est un contrat dès sa création, avec une nouvelle adresse, et tu y transfères tes fonds depuis ton ancien wallet. Aucune clé maîtresse : seules les règles du contrat comptent, si bien que plusieurs signataires ou des gardiens y protègent vraiment.",
    numero: 7,
  },
  {
    slug: "eip-7702",
    terme: "EIP-7702",
    definition:
      "Le standard (mai 2025, arrivé avec la mise à jour Pectra d'Ethereum) avec lequel tu équipes ton compte actuel : tu signes, avec ta clé privée, une délégation qui dit « mon adresse exécute désormais le code de tel smart contract ». Ton adresse devient alors un smart account : même adresse, mêmes fonds, rien à transférer. Mais ta clé privée d'origine garde tous ses pouvoirs : si ta seed phrase fuite, le smart account ne te protège pas.",
    numero: 7,
  },
  {
    slug: "delegation-7702",
    terme: "Délégation (EIP-7702)",
    definition:
      "La signature qui relie ton adresse à un smart contract. EIP-7702 est la règle d'Ethereum qui l'autorise ; la délégation est l'acte que tu signes. Sans délégation, ton compte reste un EOA classique. Avec ERC-4337, il n'y en a pas : le compte est un contrat dès le départ. Une délégation confie toute ton adresse au contrat désigné : le risque est de signer une délégation sur un faux site.",
    numero: 7,
  },
  {
    slug: "paymaster",
    terme: "Paymaster",
    definition:
      "Un smart contract qui avance le gas à ta place. Soit il se rembourse en prélevant l'équivalent dans un autre jeton (des USDC, par exemple), soit il est financé par une application qui offre les frais à ses utilisateurs.",
    numero: 7,
  },
  {
    slug: "session-key",
    terme: "Session key",
    definition:
      "Une clé temporaire, aux pouvoirs limités, que ton smart account accorde à une application : un plafond de montant, une durée, parfois une liste d'opérations autorisées. Une fois la limite atteinte ou la durée écoulée, elle ne sert plus à rien.",
    numero: 7,
  },
  {
    slug: "passkey",
    terme: "Passkey et social recovery",
    definition:
      "La passkey est une clé de connexion générée et stockée dans la puce sécurisée de ton téléphone ou de ton ordinateur ; elle se déverrouille par empreinte, visage ou code de l'appareil. Le social recovery permet de remplacer cette clé si tu la perds, avec l'accord d'un nombre minimum de gardiens désignés à l'avance.",
    numero: 7,
  },
  {
    slug: "sursis-imposition",
    terme: "Sursis d'imposition",
    definition:
      "L'impôt n'est pas supprimé, il est reporté : l'échange n'est pas taxé au moment où il a lieu, et la plus-value n'est calculée que lors de la conversion en euros ou de l'achat d'un bien. C'est le régime actuel des échanges entre cryptos en France.",
    numero: 7,
  },
  {
    slug: "societe-non-operationnelle",
    terme: "Société non opérationnelle",
    definition:
      "Pour MSCI, une société dont la valeur repose surtout sur des actifs qu'elle détient (bitcoin, uranium, or…) plutôt que sur une activité qui produit des revenus. MSCI la considère comme plus proche d'un fonds d'investissement que d'une entreprise, et peut l'écarter de ses indices actions. Les mesures visent tout bilan dominé par un stock : Yellow Cake, qui détient de l'uranium physique, est concerné au même titre que les sociétés qui détiennent du bitcoin.",
    numero: 7,
  },
  {
    slug: "subnet",
    terme: "Subnet (Bittensor)",
    definition:
      "Sur Bittensor, chacun des sous-réseaux entre lesquels la blockchain est découpée : chaque subnet est un marché spécialisé dans une tâche (générer du texte, entraîner un modèle, fournir de la puissance de calcul…). Les mineurs y produisent le travail, les validateurs le notent, et les TAO nouvellement créés sont répartis selon ces notes.",
    numero: 7,
  },
  {
    slug: "yuma-consensus",
    terme: "Yuma Consensus",
    definition:
      "Le mécanisme standard de Bittensor pour transformer les notes des validateurs en récompenses. Plusieurs validateurs notent les mêmes mineurs, et c'est le consensus entre leurs notes, pondéré par le stake de chacun, qui compte. Un validateur isolé ou malhonnête pèse donc peu : s'il surnote un mineur ami, les autres ne suivent pas.",
    numero: 7,
  },
  {
    slug: "perp-synthetique",
    terme: "Perp synthétique",
    definition:
      "Un perp qui n'existe que dans les comptes du protocole : il suit un prix de référence, sans qu'aucun ordre soit passé sur un marché, et la plateforme règle elle-même gains et pertes.",
    numero: 7,
  },
  {
    slug: "bbo",
    terme: "BBO (Best Bid and Offer)",
    definition:
      "Le meilleur prix d'achat (bid) et le meilleur prix de vente (offer) proposés à un instant donné dans un carnet d'ordres. Le mid est leur milieu : acheteur à 99,8, vendeur à 100,2, le mid vaut 100.",
    numero: 7,
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
