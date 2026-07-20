// ===== Dossiers : source unique (format long d'analyse) =====
//
// Un « Dossier » est un article de fond (≠ numéro de newsletter, ≠ fiche
// protocole) : long, structuré en grandes parties, illustré (box + figures).
//
// Méthode : le contenu vient des drafts markdown (drafts/articles/<slug>/),
// validés section par section puis fact-checkés. La conversion en blocs se
// fait VERBATIM — on ne reformule jamais ici. Les figures sont d'abord des
// placeholders (type "figure"), remplacées ensuite par de vrais graphiques.

export type DossierBloc =
  | { type: "p"; texte: string } // paragraphe (gras **x**, code `x`)
  | { type: "st"; texte: string } // sous-titre interne à une section
  | { type: "liste"; items: string[] } // liste à puces
  | { type: "listenum"; items: string[] } // liste numérotée (étapes ordonnées)
  | { type: "def"; terme: string; slug?: string; texte: string } // 📖 encadré définition (slug → glossaire)
  | {
      // 💡 l'essentiel · ⚠️ le piège · 🔍 exemple chiffré
      type: "box";
      ton: "essentiel" | "piege" | "exemple";
      titre?: string;
      texte?: string;
      items?: string[];
    }
  | { type: "tableau"; entetes: string[]; lignes: string[][] }
  | {
      // Placeholder d'illustration — remplacé plus tard par un vrai graphique.
      type: "figure";
      id: number;
      titre: string;
      legende: string;
    };

export type DossierSection = {
  id: string; // ancre (slug court, invariable)
  titre?: string; // absent = chapô sans titre
  blocs: DossierBloc[];
};

export type DossierPartie = {
  id: string; // "introduction" | "partie-1" | "partie-2" | "verdict"
  bandeau?: string; // "PARTIE I — La machine DAT" (absent pour intro/verdict)
  sousTitre?: string; // phrase d'accroche sous le bandeau
  titre?: string; // titre H1 (intro/verdict)
  sections: DossierSection[];
};

export type Dossier = {
  slug: string; // invariable, minuscules, sans accent
  titre: string;
  accroche: string; // 2-3 phrases pour la carte de l'index
  emoji: string;
  date: string; // première publication
  majDate?: string;
  tempsLecture: string;
  scope?: string[]; // acteurs/protocoles couverts — affichés en tags sur la couverture
  statut: "en-construction" | "publie";
  parties: DossierPartie[];
  sources?: { label: string; href?: string }[];
};

export const DOSSIERS: Dossier[] = [
  {
    slug: "dat",
    titre: "Les DAT — ces sociétés cotées qui ne vivent que pour leur trésor crypto",
    accroche:
      "Strategy et ses imitateurs achètent des milliards de dollars de cryptomonnaies, via différents montages boursiers ingénieux. Qui sont ces entreprises, comment les analyser, que se passe-t-il quand la machine s'enraye, et jusqu'où sa fragilité se propage-t-elle dans la DeFi ?",
    emoji: "🏦",
    date: "2026-07",
    tempsLecture: "45 min",
    scope: ["Strategy", "Bitmine", "Strive", "Apyx", "Pendle", "Morpho"],
    statut: "publie",
    parties: [
      {
        id: "introduction",
        titre:
          "Introduction — une entreprise cotée dont le vrai métier est de détenir de la crypto",
        sections: [
          {
            id: "chapo",
            blocs: [
              {
                type: "p",
                texte:
                  "Depuis 2020, une nouvelle catégorie de sociétés cotées a émergé : des entreprises dont l'actif principal est un stock de cryptomonnaies. On les appelle les **DAT**, pour *Digital Asset Treasury companies*. La plus connue, Strategy (l'ex-MicroStrategy de Michael Saylor), détient à elle seule plus de **843 000 bitcoins** — davantage que n'importe quel fonds, banque ou État sur la planète.",
              },
              {
                type: "p",
                texte:
                  "Pendant cinq ans, le modèle a paru increvable : plus le bitcoin montait, plus ces sociétés valaient cher, plus elles pouvaient lever de l'argent pour acheter encore du bitcoin. Une mécanique qui s'auto-entretient. Puis, à partir de fin 2025, la machine s'est enrayée.",
              },
              {
                type: "p",
                texte:
                  "Ce dossier suit trois fils. **Comment fonctionne ce modèle** ; **ce qui lui arrive** quand on le soumet, pour la première fois, au test de résistance de 2026 ; et où il a essaimé. Car le montage né en bourse a été reconditionné dans la **DeFi**, en produits présentés comme des dollars « stables ». On peut aujourd'hui s'exposer au rendement d'une DAT sans compte-titres et sans acheter la moindre action — en détenant ce qu'on prend pour un stablecoin. C'est le bout de chaîne vers lequel tout le dossier avance.",
              },
            ],
          },
          {
            id: "quest-ce-quune-dat",
            titre: "Qu'est-ce qu'une DAT, exactement ?",
            blocs: [
              {
                type: "def",
                terme: "Digital Asset Treasury company (DAT)",
                texte:
                  "Une société **cotée en bourse** dont le bilan est massivement adossé à de la cryptomonnaie. Au lieu de garder sa trésorerie en dollars sur un compte, elle la convertit en crypto (bitcoin le plus souvent) et en fait le cœur de son activité. Son cours de bourse devient alors une façon, pour un investisseur classique, de s'exposer à la crypto **sans jamais toucher à un portefeuille numérique**.",
              },
              {
                type: "p",
                texte:
                  "Acheter une action de DAT, c'est donc acheter une part d'un stock de crypto, mais **empaqueté dans un titre boursier ordinaire**. On peut le loger dans un compte-titres.",
              },
              {
                type: "p",
                texte:
                  "Mais une DAT n'est pas un coffre-fort passif. Elles cherchent activement à **augmenter la quantité de crypto qui revient à chaque action**. C'est l'objet de la section suivante. Une DAT vit d'un aller-retour permanent : elle **lève des capitaux** sur les marchés (en émettant des actions, de la dette ou des titres hybrides), et elle **achète de la crypto** avec.",
              },
            ],
          },
          {
            id: "idee-fondatrice",
            titre: "L'idée fondatrice : Michael Saylor, août 2020",
            blocs: [
              {
                type: "p",
                texte:
                  "Tout part d'une décision de trésorerie qui semblait excentrique à l'époque. En **août 2020**, MicroStrategy — un éditeur de logiciels d'analyse d'entreprise sans grand relief boursier — annonce qu'elle place une partie de sa trésorerie en bitcoin. Son patron, **Michael Saylor**, développe un raisonnement simple : garder du cash qui perd de sa valeur avec l'inflation n'a pas de sens ; autant le convertir en un actif rare dont l'offre est plafonnée.",
              },
              {
                type: "p",
                texte:
                  "L'entreprise ne s'arrête pas là. Elle comprend vite que son statut de société cotée lui donne un levier qu'un simple particulier n'a pas : **l'accès aux marchés de capitaux**. Elle peut emprunter à taux très bas, émettre de nouvelles actions, et transformer tout cet argent en bitcoin. MicroStrategy cesse alors d'être un éditeur de logiciels qui détient du bitcoin pour devenir une machine à accumuler du bitcoin. En 2025, elle acte le changement jusque dans son nom : **MicroStrategy devient Strategy**.",
              },
              {
                type: "p",
                texte:
                  "Le pari a fonctionné au-delà de toute attente. Le titre est devenu l'un des plus performants de la bourse américaine sur la période, précisément parce qu'il offrait quelque chose que rien d'autre ne proposait aussi facilement : une exposition **amplifiée** au bitcoin, cotée sur le Nasdaq.",
              },
            ],
          },
          {
            id: "dat-vs-etf",
            titre: "Ce qui distingue une DAT d'un ETF ou d'un simple détenteur de crypto",
            blocs: [
              {
                type: "def",
                terme: "ETF crypto (fonds indiciel coté)",
                slug: "etf",
                texte:
                  "Un ETF est un fonds qui détient de la crypto et dont les parts se négocient en bourse. Chaque part vaut, à tout instant, **exactement** la valeur de la crypto sous-jacente qu'elle représente (à des frais près). Un ETF bitcoin ne cherche pas à posséder plus de bitcoin au fil du temps : il suit passivement le prix, un point c'est tout.",
              },
              {
                type: "p",
                texte: "La différence tient en un mot : **l'effet de levier structurel**.",
              },
              {
                type: "liste",
                items: [
                  "**Un ETF** est un miroir. Il vaut sa crypto, ni plus ni moins. Si le bitcoin fait +10 %, l'ETF fait +10 %. Sa mission est de coller au prix, pas de le battre.",
                  "**Un simple détenteur** — une entreprise « lambda » qui garde un peu de bitcoin au bilan sans en faire son métier (Tesla en son temps, par exemple) — n'a aucune stratégie d'accumulation. La crypto n'est qu'une ligne parmi d'autres.",
                  "**Une DAT**, elle, utilise sa cote boursière comme un **moteur de financement**. Elle emprunte et émet des actions pour acheter toujours plus de crypto par action. Résultat : son cours peut monter (ou chuter) plus vite que la crypto qu'elle détient. C'est ce qui explique qu'une action Strategy se soit longtemps échangée au-dessus de la simple valeur de ses bitcoins — un écart qu'on appelle la **prime**, et sur lequel repose tout le modèle.",
                ],
              },
              {
                type: "def",
                terme: "Prime / mNAV (aperçu)",
                slug: "mnav",
                texte:
                  "La **mNAV** (*market Net Asset Value*) mesure le rapport entre ce que vaut l'entreprise en bourse et la valeur des cryptos qu'elle détient.\n• **mNAV supérieure à 1** = le marché paie l'action **plus cher** que sa crypto : c'est la *prime*. Tant qu'elle existe, la DAT peut émettre des actions et s'enrichir en crypto à chaque levée.\n• **mNAV inférieure à 1** = le marché valorise l'entreprise **moins** que sa crypto : c'est la *décote*. Le moteur cale.\n*(Formule complète et cas concrets en I.4.)*",
              },
              {
                type: "p",
                texte:
                  "Cette prime est le **carburant** de tout le modèle — et, on le verra, sa principale faiblesse.",
              },
            ],
          },
          {
            id: "explosion-retournement",
            titre: "L'explosion de 2025, puis le retournement de 2026",
            blocs: [
              {
                type: "p",
                texte:
                  "Pendant longtemps, Strategy est restée un cas isolé. Puis, en **2024-2025**, la formule a fait des émules à une vitesse spectaculaire.",
              },
              {
                type: "p",
                texte:
                  "L'idée s'est d'abord dupliquée sur d'autres cryptos que le bitcoin. **Bitmine** s'est constituée en trésorerie géante d'Ethereum ; son cours a été **multiplié par 40 en quatre jours** à l'annonce de sa stratégie, mi-2025. D'autres ont suivi sur Solana (Forward Industries), puis sur des actifs plus confidentiels comme BNB ou HYPE. Fin 2025, on recensait **plus de 200 DAT** dans le monde, détenant collectivement **plus de 115 milliards de dollars** de crypto — soit, pour le seul bitcoin, autour de **5 % de tout le bitcoin en circulation**. La capitalisation totale du secteur avait été multipliée par trois en un an.",
              },
              { type: "p", texte: "Et puis la marée s'est retirée." },
              {
                type: "box",
                ton: "piege",
                titre: "Le retournement, en quelques chiffres",
                items: [
                  "Depuis son pic du **6 octobre 2025**, le secteur DAT a perdu environ **62 milliards de dollars** de capitalisation.",
                  "Strategy elle-même, la référence du secteur, est passée **sous une mNAV de 1** le 27 juin 2026 : le marché la valorisait moins que ses propres bitcoins.",
                  "Pour la première fois de son histoire, Strategy a **vendu du bitcoin** — 3 588 unités début juillet 2026, un geste jusque-là impensable dans sa doctrine.",
                  "Le cabinet Architect Partners estime qu'**environ la moitié** des DAT actuelles pourraient disparaître d'ici cinq ans (faillite, retrait de la cote, absorption).",
                ],
              },
              {
                type: "p",
                texte:
                  "La question qui traverse tout le dossier n'est donc plus « le modèle est-il génial ? ». Elle est double : **le modèle tient-il quand la prime disparaît ?** — ce qui se joue en 2026 — et **jusqu'où sa fragilité se propage-t-elle** une fois qu'elle a quitté la bourse pour se diffuser dans la crypto, jusqu'à des détenteurs qui ignorent y être exposés ?",
              },
            ],
          },
          {
            id: "trois-temps",
            titre: "Trois temps pour comprendre l'histoire",
            blocs: [
              { type: "p", texte: "L'histoire des DAT se découpe en trois temps." },
              {
                type: "p",
                texte:
                  "**1. La diversification de trésorerie (2020-2021).** À l'origine, une poignée d'entreprises — MicroStrategy en tête, rejointe un temps par Tesla ou Square — placent une part de leur cash en bitcoin. La logique est défensive : protéger sa trésorerie contre l'inflation. Le bitcoin reste un actif secondaire au bilan.",
              },
              {
                type: "p",
                texte:
                  "**2. L'accumulation systémique (2024-2025).** Le modèle mûrit et se professionnalise. La crypto n'est plus une réserve d'appoint, c'est **la raison d'être** de l'entreprise. On lève massivement des capitaux — dette convertible, actions, puis titres hybrides sophistiqués — dans le seul but d'acheter plus de crypto par action. La formule se copie sur Ethereum, Solana et au-delà. C'est la ruée.",
              },
              {
                type: "p",
                texte:
                  "**3. Le test de résistance (2026).** Le prix des cryptos reflue, les primes se compressent, et les DAT les plus fragiles basculent en décote. Le moteur qui tournait tout seul à la hausse se met à tourner à l'envers. Certaines sociétés ont vu leur action passer **sous la valeur de leur trésorerie en moins d'une semaine** après leur entrée en bourse. La phase d'euphorie laisse place à une sélection : qui survivra, qui disparaîtra.",
              },
              {
                type: "figure",
                id: 1,
                titre: "Les trois temps des DAT",
                legende:
                  "Le modèle DAT en trois âges : de la diversification de trésorerie à la ruée, puis au test de résistance de 2026.",
              },
            ],
          },
          {
            id: "ou-lon-va",
            titre: "Où l'on va, à partir d'ici",
            blocs: [
              {
                type: "p",
                texte:
                  "Avant de pouvoir juger si ce modèle est solide ou bâti sur du sable, il faut comprendre précisément **comment une DAT crée — ou détruit — de la valeur** pour ses actionnaires. Car tout repose sur un mécanisme central, souvent mal expliqué, qu'on appelle la *flywheel*. C'est l'objet de la section suivante.",
              },
              {
                type: "p",
                texte:
                  "Notre dossier se compose de deux parties. **Première partie — la machine DAT** : la mécanique de la société cotée, les acteurs, les outils pour la juger et ses risques propres. **Seconde partie — les DAT en DeFi** : ce que la finance décentralisée construit par-dessus, et ce que le décrochage du STRC, en juin 2026, en a révélé — le risque y change de nature.",
              },
            ],
          },
        ],
      },
      {
        id: "partie-1",
        bandeau: "PARTIE I — La machine DAT",
        sousTitre:
          "Comprendre la société cotée : son moteur, ses acteurs, ses instruments de mesure et ses risques propres.",
        sections: [
  {
    id: "i-1-le-mecanisme-cur-la-flywheel",
    titre: `I.1 Le mécanisme cœur — la « flywheel »`, blocs: [
      { type: "p", texte: `Une DAT ne cherche pas seulement à détenir de la crypto : elle cherche à **augmenter la quantité de crypto par action**. Cet objectif porte un nom chez Strategy : le *BTC Yield* — la **progression du nombre de bitcoins par action**.` },
      { type: "p", texte: `En 2025, ce chiffre a atteint **22,8 %** ; en 2026, la progression a nettement ralenti — **13,3 %** au 25 mai. Un BTC Yield de +13 % signifie **13 % de bitcoins par action en plus** qu'en début d'année : la croissance a ralenti, mais elle reste positive. Elle ne deviendrait négative que si l'entreprise émettait des actions sous la valeur de sa crypto — le cas que nous étudierons juste après.` }
    ],
  },
  {
    id: "le-moteur-emettre-cher-acheter-moins-cher",
    titre: `Le moteur : émettre cher, acheter moins cher`, blocs: [
      { type: "p", texte: `Le mécanisme s'auto-entretient. Il repose sur la **mNAV**.` },
      { type: "def", terme: `Rappel — mNAV`, texte: `La **mNAV** compare la valeur de l'entreprise en bourse à la valeur des cryptos qu'elle détient.
• **mNAV supérieure à 1** = le marché paie l'action plus cher que la crypto qu'elle représente (la *prime*).
• **mNAV inférieure à 1** = le marché paie l'action moins cher que la crypto qu'elle représente (la *décote*).
*(Formule complète et cas chiffrés en I.4.)*` },
      { type: "p", texte: `Tant que la prime existe, la DAT peut faire tourner la boucle :` },
      { type: "listenum", items: [`Son action se paie **au-dessus** de la valeur de sa crypto (mNAV > 1).`, `Elle **émet de nouvelles actions** à ce prix élevé.`, `Elle **achète de la crypto** avec l'argent levé.`, `Comme elle a vendu du papier surévalué pour acheter un actif à sa vraie valeur, chaque action se retrouve adossée à **davantage de crypto qu'avant**.`, `Ce gain nourrit la confiance dans le modèle, ce qui **soutient la prime** — et la boucle repart.`] },
      { type: "figure", id: 2, titre: `La flywheel`, legende: `Tant que l'action se paie au-dessus de sa crypto, chaque tour de roue ajoute de la crypto par action — et nourrit la prime qui fait tourner le tour suivant.` },
      { type: "box", ton: "exemple", titre: `émettre à mNAV 2`, texte: `Une DAT détient 100 bitcoins et compte 100 actions : chaque action donne droit à 1 bitcoin. Le marché la valorise à une mNAV de 2, donc le double de ses bitcoins. L'entreprise émet 10 actions nouvelles à ce prix gonflé et récolte de quoi acheter 20 bitcoins de plus.
Résultat : elle détient maintenant **120 bitcoins** pour **110 actions**, soit **1,09 bitcoin par action**. Les anciens actionnaires sont passés de 1 à 1,09 bitcoin par action sans lever le petit doigt.` },
      { type: "p", texte: `**Le moteur ne fonctionne que dans un sens.** Dès que la mNAV passe sous 1, tout s'inverse : émettre des actions revient à vendre du papier **moins cher** que la crypto qu'il représente, et chaque levée **retirerait** du bitcoin par action au lieu d'en ajouter. La réaction logique est donc d'**arrêter d'émettre**.` },
      { type: "box", ton: "piege", titre: `mNAV sous 1 ne fait pas fondre le trésor`, texte: `Passer sous une mNAV de 1 ne fait **pas baisser** le bitcoin par action — cela **l'empêche de croître**. La roue ne tourne plus toute seule, le canal d'accumulation est gelé, mais le trésor par action ne fond pas pour autant. La seule chose qui le fait réellement reculer, c'est de **vendre du bitcoin** (sans réduire le nombre d'actions) pour honorer ses engagements.` },
      { type: "p", texte: `C'est exactement là qu'en est Strategy en 2026 : le **27 juin**, sa valorisation est passée **sous la valeur de ses propres bitcoins**. La flywheel est à l'arrêt, et l'entreprise s'est mise à vendre du bitcoin pour payer ses dividendes — 3 588 unités début juillet, ce qui n'est plus tout à fait une dose homéopathique.` }
    ],
  },
  {
    id: "amplification-n-est-pas-levier",
    titre: `Amplification n'est pas levier`, blocs: [
      { type: "p", texte: `« Amplification » n'est pas un terme d'analyste extérieur : c'est une **métrique que Strategy publie elle-même**, popularisée par Michael Saylor, qui la distingue explicitement du levier classique. On reprend donc ici son propre vocabulaire pour opposer deux façons, très différentes, de lever de l'argent.` },
      { type: "def", terme: `Levier`, texte: `De la **dette** : de l'argent emprunté qu'il faudra **rembourser à une date fixe** (l'échéance). Si le prêteur n'est pas remboursé, il y a défaut. Le levier crée donc une contrainte de calendrier.` },
      { type: "def", terme: `Amplification`, texte: `Du **capital permanent** levé via des **actions préférentielles perpétuelles** (voir plus bas) : de l'argent qui **n'a pas d'échéance** et **n'est jamais à rembourser**. En échange, l'entreprise verse un dividende régulier. Pas d'échéance de remboursement.` },
      { type: "p", texte: `Une dette à échéance fixe **doit** être remboursée ou refinancée le jour dit, quel que soit le cours du bitcoin ce jour-là. Un capital perpétuel, lui, ne peut pas être « rappelé » : au pire, l'entreprise doit continuer à en payer le dividende.` },
      { type: "p", texte: `Chez Strategy, les deux coexistent, mais dans des proportions révélatrices. Au début de 2026 :` },
      { type: "liste", items: [`**Levier net** — la seule dette, c'est-à-dire les **obligations convertibles**, rapportée à la réserve de bitcoins : environ **9 %**.`, `**Amplification** — cette même dette **plus les actions préférentielles** (STRF, STRC, STRK, STRD, STRE), rapportées à la réserve : environ **34 %**.`] },
      { type: "p", texte: `Ces deux ratios ont bougé depuis : la dette convertible est tombée d'environ 8 à **6,7 milliards de dollars** après un rachat de 1,5 milliard en mai 2026.` },
      { type: "p", texte: `L'essentiel de l'amplification de Strategy ne vient donc **pas** de la dette, mais du capital perpétuel. C'est un choix délibéré, et il explique le grand basculement de son financement.` }
    ],
  },
  {
    id: "du-credit-convertible-aux-actions-perpetuelles",
    titre: `Du crédit convertible aux actions perpétuelles`, blocs: [
      { type: "p", texte: `Au départ, les DAT se sont financées surtout par **dette convertible**.` },
      { type: "def", terme: `Dette convertible`, texte: `Une obligation (un emprunt) que le prêteur peut, à terme, **convertir en actions** plutôt que se faire rembourser en cash, si le cours a suffisamment monté. L'avantage pour l'entreprise : un taux d'intérêt très faible (souvent moins de 1 %), car le prêteur parie sur la hausse de l'action. L'inconvénient : c'est une dette, avec une **échéance à honorer**.` },
      { type: "p", texte: `Strategy en a émis pour environ **8 milliards de dollars**, à des taux quasi nuls — suite à des remboursements en mai 2026 il en reste aujourd'hui **6,7 milliards**. Le problème est apparu avec le temps : ces obligations arrivent à échéance par vagues, échelonnées jusqu'au début des années 2030. Cela crée ce qu'on appelle un **« mur d'échéances »** — une série de remboursements massifs concentrés sur quelques années.` },
      { type: "p", texte: `Or ce calendrier est **incompatible avec la doctrine même d'une DAT** : détenir son bitcoin *indéfiniment*, sans jamais être forcé de le vendre. Une dette qui arrive à échéance oblige, le jour venu, soit à trouver de nouveaux prêteurs (refinancer), soit à vendre des bitcoins pour rembourser — précisément ce qu'une DAT veut éviter.` },
      { type: "p", texte: `D'où le basculement, à partir de 2025, vers les **actions préférentielles perpétuelles**.` },
      { type: "def", terme: `Action préférentielle perpétuelle`, texte: `Un titre à mi-chemin entre l'action et l'obligation. Il verse un **dividende régulier** (comme un intérêt) et passe **avant les actions ordinaires** en cas de coup dur — d'où « préférentielle ». Mais contrairement à une dette, il **n'a pas d'échéance** : l'entreprise ne rembourse jamais le capital, elle se contente de payer le dividende aussi longtemps qu'elle le décide. C'est du financement permanent.` },
      { type: "p", texte: `Le raisonnement est cohérent : puisque le bitcoin est censé rester au bilan pour toujours, on le finance avec un capital qui, lui aussi, reste là pour toujours. Et le constat fait consensus chez les analystes : en supprimant les échéances, le perpétuel supprime le risque de refinancement et calme la volatilité de crédit. Dylan LeClair (responsable de la stratégie bitcoin chez Metaplanet) le résume ainsi : sans dette convertible senior aux préférentielles, les spreads de crédit se resserrent et se stabilisent. Le basculement est déjà chiffrable : dès janvier 2026, la valeur des préférentielles de Strategy a **dépassé celle de sa dette convertible** (CoinDesk).` },
      { type: "p", texte: `Mais présenter le perpétuel comme « la solution » serait trop simple, et c'est là qu'il faut nuancer ce que la plupart des analyses laissent de côté : **on n'a pas supprimé le risque, on l'a échangé.** La dette imposait une date ; le préférentiel impose un dividende — à verser indéfiniment, mois après mois, sans date de fin. Strategy a troqué un mur d'échéances contre une rente perpétuelle à honorer. Tant que l'entreprise peut lever du capital, la rente se paie sans douleur ; le jour où l'accès au marché se ferme, cette obligation sans fin peut, elle aussi, forcer la vente de bitcoin qu'elle était censée éviter. Le calendrier a disparu ; la contrainte, non. On retrouvera exactement cette tension en I.5.` }
    ],
  },
  {
    id: "la-famille-des-preferentielles-bitcoin",
    titre: `La famille des préférentielles Bitcoin`, blocs: [
      { type: "p", texte: `Strategy n'a pas émis un seul titre préférentiel, mais **cinq séries** — reconnaissables à leur préfixe commun (STRF, STRC, STRK, STRD, STRE) — toutes vendues par tranches de 100 $. Inutile d'en retenir le détail : ce qui compte, c'est de comprendre qu'elles forment un **escalier de risque**.` },
      { type: "p", texte: `Elles se classent en effet par **séniorité**, c'est-à-dire l'ordre dans lequel on est payé si la société traverse une mauvaise passe : d'abord la dette, puis les préférentielles de la plus senior (STRF) à la plus junior (STRD), et enfin, tout en bas, l'actionnaire ordinaire. Plus on accepte de passer tard dans la file, plus on est rémunéré pour ce risque — les séries les plus juniors affichent les rendements les plus élevés.` },
      { type: "figure", id: 3, titre: `L'escalier de séniorité`, legende: `L'ordre dans lequel on est payé en cas de coup dur : la dette d'abord, l'actionnaire ordinaire en dernier. Plus on descend, plus le rendement paie le risque.` },
      { type: "p", texte: `Une seule de ces cinq séries nous intéresse vraiment ici : le **STRC**. C'est la plus aboutie, un mécanisme entier est dédié à le maintenir à 100 $, et c'est aujourd'hui le modèle le plus imité du secteur. C'est l'objet de la section suivante.` }
    ],
  },
  {
    id: "i-2-le-strc-stretch-la-machine-a-capital-de-strategy",
    titre: `I.2 Le STRC (« Stretch ») — la machine à capital de Strategy`, blocs: [
      { type: "p", texte: `Là où STRF, STRK et STRD versent un dividende fixe et laissent leur cours évoluer librement en fonction de l'offre et de la demande, le STRC est **piloté** : Strategy actionne en permanence deux leviers pour le maintenir collé à **100 $**. C'est ce qui en fait un objet à part.` }
    ],
  },
  {
    id: "ce-que-le-strc-cherche-a-etre-un-placement-de-tresorerie-a-h",
    titre: `Ce que le STRC cherche à être : un placement de trésorerie à haut rendement`, blocs: [
      { type: "p", texte: `Une action Strategy ordinaire (MSTR) est un pari directionnel sur le bitcoin, amplifié et très volatil : elle peut prendre ou perdre 10 % dans la journée. Le STRC vise exactement l'inverse. Son cours n'a à la base pas vocation à bouger ; ce qu'on achète, c'est un **dividende**, versé périodiquement, sur un titre qui est censé conserver sa valeur de 100 $.` },
      { type: "def", terme: `STRC (« Stretch »)`, texte: `Une **action préférentielle perpétuelle à taux flottant**, cotée sur le Nasdaq et vendue par tranches de 100 $. « Perpétuelle » : elle n'a pas d'échéance, Strategy ne rembourse jamais le capital. « À taux flottant » : le dividende est révisé régulièrement au lieu d'être gravé une fois pour toutes. Elle est conçue pour s'échanger autour de **100 $** en permanence, de sorte que le détenteur touche son dividende sans subir de variation de cours.` },
      { type: "p", texte: `Saylor l'a présenté comme le « moment iPhone » de Strategy. Formule marketing, mais l'idée derrière est réelle : le STRC ne s'adresse pas aux parieurs sur le bitcoin, il vise les investisseurs « revenus » — trésoreries d'entreprise, gérants obligataires, épargnants qui cherchent du rendement régulier. Le concurrent dans leur tête, ce n'est pas MSTR, ce sont les **placements monétaires** : fonds de trésorerie, bons du Trésor, comptes à terme.` },
      { type: "p", texte: `Sur ce terrain, l'argument est simple. Un fonds monétaire américain rapporte de l'ordre de 3,6 % ; le STRC affiche **12,00 %** depuis le 1er juillet 2026. Le pari du produit : offrir un rendement de type « crédit à haut rendement » avec une stabilité de cours proche de celle du monétaire. Sur ses premiers mois, il a plutôt tenu cette promesse — mais cette stabilité est *artificielle*, pas garantie.` }
    ],
  },
  {
    id: "le-cur-du-mecanisme-deux-leviers-pour-tenir-100",
    titre: `Le cœur du mécanisme : deux leviers pour tenir 100 $`, blocs: [
      { type: "p", texte: `Maintenir un titre coté à un prix fixe n'a rien d'automatique : c'est le marché qui fixe le cours à chaque instant. Strategy y parvient en agissant sur deux leviers à la fois.` },
      { type: "p", texte: `**1. Le dividende, révisé à intervalle régulier.** C'est le prix que Strategy paie pour rendre le titre attractif. Si le STRC décroche sous 100 $, on monte le dividende pour attirer des acheteurs et faire remonter le cours ; s'il déborde au-dessus, on peut le baisser.` },
      { type: "p", texte: `**2. Le programme d'émission continue (ATM).** C'est le levier le plus subtil.` },
      { type: "def", terme: `Programme ATM (*At-The-Market*)`, texte: `Un dispositif qui permet à l'entreprise de **vendre de nouvelles actions directement sur le marché**, au fil de l'eau, au cours du moment — sans organiser une grosse opération ponctuelle. Pour le STRC, l'ATM sert de soupape : quand le titre monte au-dessus de 100 $, Strategy en émet davantage, ce qui **augmente l'offre** et repousse le cours vers 100 $.` },
      { type: "p", texte: `L'ATM est **suspendu dès qu'on passe sous 99 $**. La raison est purement comptable : émettre à 95 $ un titre dont le dividende est calculé sur une base de 100 $ reviendrait à vendre à perte.` },
      { type: "p", texte: `Le cadre d'ajustement est public, et volontairement asymétrique :` },
      { type: "liste", items: [`**cours au-dessus de 101 $** (en moyenne sur le mois) → le dividende peut être **baissé**, et l'ATM émet ;`, `**cours entre 95 et 99 $** → le dividende est **relevé d'au moins 0,25 point** ;`, `**cours sous 95 $** → hausse d'au moins **0,50 point**.`] },
      { type: "figure", id: 4, titre: `Les deux leviers du STRC`, legende: `Pour tenir le titre à 100 $, Strategy joue deux leviers opposés : l'émission (ATM) quand il déborde, le dividende quand il décroche.` },
      { type: "p", texte: `Deux garde-fous encadrent la baisse : le taux ne peut pas descendre de plus de 0,25 point par période, ni passer sous le taux de référence interbancaire américain (le SOFR). À la hausse, en revanche, **aucun plafond**. Cette asymétrie protège le détenteur : le rendement peut grimper autant que nécessaire pour défendre le cours, mais il ne peut pas s'effondrer d'un coup.` },
      { type: "p", texte: `L'historique du taux raconte à lui seul la difficulté de l'exercice :` },
      { type: "liste", items: [`**9,00 %** au lancement (IPO de juillet 2025) ;`, `**11,50 %** au 1er mars 2026, taux tenu quatre mois ;`, `**12,00 %** au 1er juillet 2026.`] },
      { type: "p", texte: `Sept hausses en un an, aucune baisse. Un dividende qu'on doit relever aussi souvent n'est pas le signe d'un produit qui séduit sans effort : c'est le signe qu'il faut payer de plus en plus cher pour maintenir la demande et défendre les 100 $.` }
    ],
  },
  {
    id: "ce-qui-se-passe-quand-le-strc-casse-sous-100",
    titre: `Ce qui se passe quand le STRC casse sous 100 $`, blocs: [
      { type: "p", texte: `C'est la question décisive, parce que c'est arrivé plusieurs fois — creux autour de **92 $** fin 2025, puis la chute de juin 2026 : **82,53 $ le 18 juin**, et un plus-bas historique à **71,25 $ le 26 juin**, soit près de 29 % sous le pair. À la date de publication, le STRC cote autour de **87,75 $**, encore près de 12 % sous le pair.` },
      { type: "p", texte: `Quand le cours passe durablement sous le pair, une réaction en chaîne se déclenche, en quatre maillons :` },
      { type: "liste", items: [`**L'ATM se coupe.** C'est mécanique : sous 99 $, Strategy cesse d'émettre. Elle perd du coup son canal de financement le plus efficace — celui qui transformait chaque STRC vendu au pair en cash prêt à acheter du bitcoin.`, `**Le dividende monte, donc le coût monte.** Pour ramener le titre vers 100 $, il faut relever le taux. Chaque hausse alourdit la facture annuelle de Strategy — non seulement sur les nouveaux titres, mais sur *tout* le stock de STRC déjà en circulation.`, `**Le marché primaire se ferme tout seul.** Personne n'achète un STRC neuf à 100 $ auprès de Strategy si le même titre s'échange à 85 $ sur le marché de seconde main. Tant que le cours reste sous le pair, l'entreprise ne peut plus lever un dollar par ce canal, quel que soit le dividende affiché.`, `**Le signal envoyé est coûteux.** Un STRC durablement sous 100 $ dit au marché que Strategy peine à défendre son propre produit. Cela renchérit tout son coût du capital, STRC compris — un cercle qui s'auto-aggrave.`] },
      { type: "p", texte: `Face à cette spirale, il existe néanmoins une **force de rappel**, et elle tient à la façon dont le dividende est calculé.` },
      { type: "def", terme: `La convexité du dividende`, texte: `Le dividende du STRC est toujours calculé sur une **valeur nominale de 100 $**, quel que soit le prix réel du titre. Un dividende de 12 % vaut donc 12 $ par an, versés à qui détient le titre. Si le cours tombe à 80 $, ces 12 $ représentent alors un rendement effectif de **15 %** pour l'acheteur à 80 $ ; à 50 $, on grimperait vers 24 %. Plus le titre baisse, plus il devient rémunérateur à l'achat — ce qui attire des acheteurs et tend à le faire remonter.` },
      { type: "p", texte: `Cette force de rappel est réelle, mais **conditionnelle**. Elle ne joue que si deux choses tiennent : la **confiance** dans le fait que le dividende sera bel et bien versé (le conseil d'administration peut le réduire, rien ne l'en empêche contractuellement), et la **liquidité** (assez d'acheteurs pour absorber la baisse). Le jour où le marché doute de l'un ou de l'autre, un rendement effectif de 15 % ne rappelle plus personne : il se lit alors comme une prime de risque, pas comme une aubaine.` }
    ],
  },
  {
    id: "d-ou-vient-l-argent-des-dividendes-souvent-mal-compris",
    titre: `D'où vient l'argent des dividendes (souvent mal compris)`, blocs: [
      { type: "p", texte: `**Strategy n'émet PAS de STRC pour payer les dividendes du STRC.** L'argent récolté quand elle vend des STRC ne sert qu'à une chose : **acheter du bitcoin**. Il ne repart jamais dans la poche des détenteurs de STRC sous forme de dividende. ` },
      { type: "p", texte: `Les dividendes viennent d'ailleurs — de trois sources distinctes.` },
      { type: "liste", items: [`**L'émission d'actions ordinaires MSTR.** Tant que l'action se paie assez cher par rapport à ses bitcoins, Strategy vend un peu de MSTR sur le marché et utilise le produit pour honorer les dividendes préférentiels. C'est la source principale, mais elle dépend entièrement de la santé de la prime (on y revient juste après).`] },
      { type: "liste", items: [`**Une réserve de cash en dollars.** Strategy a mis de côté un coussin pour couvrir les dividendes même quand l'émission d'actions se grippe. Son montant n'a rien d'un chiffre stable : il raconte à lui seul l'année 2026.`] },
      { type: "tableau", entetes: [`Date`, `Réserve`, `Couverture`], lignes: [[`1er février 2026`, `**2,25 Md$**`, `selon la politique d'alors`], [`25 mai 2026`, `**871 M$**`, `~6 mois`], [`28 juin 2026`, `**2,55 Md$**`, `~17,4 mois`]] },
      { type: "p", texte: `  Le creux de mai n'est pas un signal d'épuisement : il suit le rachat de 1,5 milliard de dollars d'obligations convertibles. La reconstitution qui a suivi est, elle, revendiquée publiquement — le 28 juin 2026, Strategy annonce un « Digital Credit Capital Framework » qui fixe une cible de **2 à 3 ans** de couverture. Rapportée à une charge annuelle d'environ **1,76 milliard de dollars** (dividendes préférentiels et intérêts confondus), la réserve actuelle représente un peu plus de dix-sept mois de versements.` },
      { type: "liste", items: [`**La vente de bitcoins, depuis 2026.** Nouveauté doctrinale majeure. Strategy a d'abord vendu une trentaine de bitcoins fin mai 2026, à dose symbolique, pour honorer un paiement. Puis elle a **officialisé le mécanisme** : le 28 juin 2026, son conseil d'administration adopte un cadre permanent l'autorisant à céder jusqu'à **~1,25 milliard de dollars** de bitcoin (environ 2,5 % de son stock) pour servir ses engagements quand c'est avantageux. Le passage à l'acte n'a pas tardé : début juillet 2026, **3 588 bitcoins vendus pour environ 216 millions de dollars**, explicitement destinés à payer les dividendes préférentiels et à regarnir la réserve. La société qui jurait de ne jamais vendre a non seulement franchi le pas, mais l'a inscrit dans sa doctrine.`] }
    ],
  },
  {
    id: "pourquoi-les-actionnaires-mstr-acceptent-de-financer-ce-divi",
    titre: `Pourquoi les actionnaires MSTR acceptent de financer ce dividende`, blocs: [
      { type: "p", texte: `Une question logique se pose : pourquoi les détenteurs d'actions ordinaires accepteraient-ils que Strategy émette du MSTR — ce qui les dilue — pour payer le dividende d'une *autre* catégorie d'investisseurs ? La réponse tient dans le seuil de rentabilité de l'opération.` },
      { type: "def", terme: `Dilution relutive et seuil de ~1,22x`, texte: `Émettre des actions dilue, en principe, les actionnaires existants. Mais si le marché paie l'action nettement plus cher que la valeur des bitcoins qu'elle représente, vendre cette action « chère » pour acheter du bitcoin « à sa vraie valeur » fait *monter* le bitcoin par action. La dilution devient alors **relutive** : elle enrichit ceux qu'elle dilue. Pour Strategy, ce basculement se produit au-dessus d'une **mNAV d'environ 1,22x** — un seuil plus élevé que le simple « 1 », car le calcul intègre la dilution potentielle liée aux convertibles, aux préférentielles et aux actions attribuées aux salariés.` },
      { type: "p", texte: `Tant que la mNAV dépasse ce seuil, l'équation est favorable aux deux camps : Strategy lève de quoi payer les dividendes STRC *et* augmente le bitcoin par action de ses actionnaires ordinaires. C'est ce que Saylor décrit comme un **carry trade**.` },
      { type: "def", terme: `Carry trade`, texte: `Emprunter (ou lever du capital) à un coût donné pour le placer dans un actif dont on espère un rendement supérieur — et empocher l'écart. Ici : payer 12 % de dividende sur le STRC pour acheter un bitcoin dont Strategy projette une appréciation à long terme bien supérieure. Exemple chiffré : si le bitcoin rapporte **20 %** par an quand le STRC en coûte **12 %**, l'écart — **8 points** — revient à la société et à ses actionnaires MSTR. Si le pari sur le bitcoin échoue, en revanche, c'est un coût net.` },
      { type: "p", texte: `Tout l'édifice repose donc sur cette hypothèse : le bitcoin rapportera, dans la durée, davantage que les 12 % versés au STRC. C'est vrai « sur le papier » et selon les projections de Saylor ; en pratique, cela dépend d'un bitcoin qui monte *et* d'une mNAV qui reste au-dessus du seuil.` },
      { type: "p", texte: `Or le **27 juin 2026**, la valorisation de Strategy est passée **sous la valeur de ses propres bitcoins** : sa mNAV est tombée en dessous de 1, donc très loin sous le seuil de 1,22x. Un avertissement de lecture, ici : la mNAV se calcule de plusieurs façons, et les écarts sont considérables — début juillet 2026, selon qu'on retient la version « enterprise », « basique » ou « diluée », on lit entre **0,65x et 1,04x** pour la même société. Peu importe la méthode retenue : dans toutes, le carry trade est à l'arrêt.` }
    ],
  },
  {
    id: "le-plan-42-42-et-son-blocage",
    titre: `Le plan « 42/42 » et son blocage`, blocs: [
      { type: "p", texte: `Le 23 mars 2026, Strategy a annoncé le plan **« 42/42 »** : 42 milliards de dollars d'autorisations d'émission supplémentaires, répartis pour moitié en actions MSTR et pour moitié en STRC, avec un objectif affiché — franchir le **million de bitcoins détenus d'ici fin 2026** (contre ~762 000 à l'annonce).` },
      { type: "p", texte: `Le problème saute aux yeux quand on relie ce plan au seuil précédent. Les deux moitiés du « 42/42 » supposent une mNAV **au-dessus de 1,22x** pour rester créatrices de valeur : l'émission de MSTR n'est relutive qu'au-dessus du seuil, et l'émission de STRC exige un cours au pair. Avec une mNAV passée sous 1 fin juin 2026, **les deux canaux sont gelés**. L'accumulation ralentit fortement : Strategy est passée d'environ 762 000 bitcoins en mars à **843 775 au 6 juillet 2026** — un chiffre désormais en recul, puisque la société vend. Elle a parcouru moins du tiers du chemin vers le million, alors que la moitié de l'année est écoulée. Le plan est, dans les faits, à l'arrêt tant que la prime ne revient pas.` },
      { type: "p", texte: `C'est dans ce contexte que Strategy a formalisé, courant 2026, une série de manœuvres défensives : racheter une partie de sa dette convertible en la remplaçant par du capital perpétuel — 1,5 milliard de dollars rachetés en mai 2026, ramenant l'encours d'environ 8 à **6,7 milliards** —, alimenter sa réserve en dollars, et vendre par petites touches des bitcoins acquis à prix élevé, au passage pour capter des moins-values fiscales. Autant de signes qu'on est passé du mode « accumulation offensive » au mode « défense du bilan ».` }
    ],
  },
  {
    id: "le-strc-entre-dans-la-defi",
    titre: `Le STRC entre dans la DeFi`, blocs: [
      { type: "p", texte: `Le STRC ne circule plus seulement en bourse. Depuis début 2026, des protocoles crypto s'en servent comme **brique de rendement** : ils achètent du STRC, en captent le dividende et le reversent, sous forme de dollars numériques rémunérés ou de bitcoin. La croissance a été fulgurante : le seul Apyx est passé d'environ **29 millions de dollars** de STRC à la mi-mars 2026 à plusieurs fois ce montant en quelques semaines, et une petite dizaine de sociétés bâtissent aujourd'hui des produits sur cette brique. Les totaux publiés varient trop d'une source à l'autre pour être cités comme un chiffre unique — mais l'ordre de grandeur, quelques centaines de millions de dollars, est acquis. Parmi les acteurs impliqués : Apyx, Roxom, Hermetica, Saturn Credit.` },
      { type: "p", texte: `Pour Strategy, c'est une nouvelle source de demande. Mais c'est aussi une nouvelle chaîne de dépendances. Des détenteurs de stablecoins « à rendement » se retrouvent, sans toujours en avoir conscience, exposés au bitcoin, à Strategy et à la liquidité du STRC. Le jour où le STRC décroche de son pair — comme en juin 2026 —, ce risque, jusque-là invisible, remonte à la surface de produits vendus comme stables. Comment ces montages sont construits, et ce qu'il advient de ceux qui y ajoutent du levier : c'est tout l'objet de la seconde partie du dossier.` }
    ],
  },
  {
    id: "ponzi-ou-structure-reflexive-trancher-proprement",
    titre: `« Ponzi » ou structure réflexive ? Trancher proprement`, blocs: [
      { type: "p", texte: `Fin avril 2026, Peter Schiff a qualifié le STRC de « schéma pyramidal le plus évident » qui soit, avec un argument précis : le dividende de 12 % serait, selon lui, payé en vendant toujours plus de STRC à de nouveaux entrants.` },
      { type: "p", texte: `**Cet argument est factuellement faux**, et le circuit de financement décrit plus haut suffit à le démonter : le produit des ventes de STRC part acheter du bitcoin, jamais payer les dividendes du STRC. Ceux-ci sont servis par l'émission de MSTR, la réserve en dollars et, désormais, des ventes marginales de bitcoins. Ajoutons que tout est public — prospectus, déclarations hebdomadaires à la SEC — et qu'aucun remboursement de capital n'est promis (donc pas de « dette cachée » à faire rouler). Un Ponzi paie les anciens avec l'argent des nouveaux en dissimulant l'origine des fonds ; ici, l'origine est documentée et distincte.` },
      { type: "p", texte: `Reste une critique bien plus sérieuse, qui n'est pas celle de Schiff : le STRC n'est pas une fraude, c'est une **structure réflexive**. Sa viabilité repose sur trois primes qui doivent tenir *en même temps* :` },
      { type: "liste", items: [`**la prime de MSTR** (une mNAV assez haute pour que l'émission d'actions reste relutive et finance les dividendes) ;`, `**la prime de confiance sur le STRC** (les détenteurs continuent de croire que le dividende sera versé et le pair défendu) ;`, `**la prime de croissance du bitcoin** (le bitcoin monte assez pour justifier le carry trade).`] },
      { type: "p", texte: `Le danger n'est pas la fraude, c'est le **couplage**. Chaque nouvelle tranche de STRC émise alourdit le service annuel des dividendes — déjà d'environ **1,76 milliard de dollars par an**, intérêts compris — et exige donc *davantage* de performance du bitcoin pour rester tenable. Si le plan « 42/42 » était exécuté jusqu'au bout, cette charge dépasserait plusieurs milliards annuels. Rapporté au trésor de la société, ce montant reste modeste : il suffirait que le bitcoin progresse de quelques points par an pour que Strategy puisse théoriquement couvrir ses dividendes en vendant cette seule fraction. Modeste en apparence — mais tout l'édifice revient alors à parier que le bitcoin fera, année après année, mieux que ce plancher, tout en gardant intactes les deux autres primes. Ce n'est pas un Ponzi ; c'est un pari à trois conditions, dont aucune n'est garantie.` },
      { type: "box", ton: "essentiel", texte: `Le STRC est un quasi-placement monétaire à **12 %**, maintenu à 100 $ par deux leviers (dividende révisable à la hausse sans plafond, émission ATM coupée sous 99 $). Ce n'est pas un Ponzi — le circuit de financement est public et les dividendes ne viennent jamais des ventes de STRC — mais une **structure réflexive** : elle tient tant que trois primes tiennent *en même temps* (la prime de MSTR, la confiance dans le dividende, la croissance du bitcoin).` },
      { type: "p", texte: `Le STRC est donc un produit brillant tant que les trois primes tiennent. Mais Strategy n'est plus seule à jouer cette partition. D'autres sociétés courent désormais après le même trésor, avec des actifs, des structures et des paris différents — Bitmine sur l'Ethereum, Strive et son préférentiel SATA taillé sur le modèle du STRC, et quelques autres. C'est l'objet de la section suivante.` }
    ],
  },
  {
    id: "i-3-les-acteurs-et-leur-course",
    titre: `I.3 Les acteurs et leur course`, blocs: [
      
    ],
  },
  {
    id: "une-course-qui-s-est-retournee",
    titre: `Une course qui s'est retournée`, blocs: [
      { type: "p", texte: `Strategy a fait des émules, mais tous subissent actuellement des conditions dégradées. Depuis le pic d'octobre 2025, le secteur a perdu de l'ordre de **62 milliards de dollars** de capitalisation, et la prime a fondu pour la quasi-totalité des sociétés : la plupart s'échangent désormais **sous la valeur de leur propre trésor** (mNAV inférieure à 1). Le moteur décrit dans les sections précédentes — émettre des actions au-dessus de la **NAV**, la valeur de marché des cryptos détenues, pour acheter plus de crypto par action — s'est donc grippé partout à la fois. Le cabinet Architect Partners estime qu'**environ la moitié** des DAT actuelles pourraient disparaître d'ici cinq ans.` }
    ],
  },
  {
    id: "le-panorama-des-principaux-acteurs",
    titre: `Le panorama des principaux acteurs`, blocs: [
      { type: "box", ton: "piege", texte: `**Tous les chiffres du tableau ci-dessous sont datés et bougent en permanence** (holdings, valeurs, mNAV). Ils reflètent l'état du secteur au début de juillet 2026.` },
      { type: "tableau", entetes: [`Société (ticker)`, `Actif`, `Holdings (≈ valeur)`, `Coût moyen`, `Financement`, `mNAV`, `Particularité`], lignes: [[`**Strategy** (MSTR)`, `BTC`, `~843 800 BTC`, `~75 500 $/BTC`, `Convertibles + préférentielles + ATM`, `sous 1`, `Le prototype ; 5 séries de préférentielles`], [`**Bitmine** (BMNR)`, `ETH`, `~5,74 M ETH (~10 Md$)`, `~3 450–4 000 $/ETH (contesté)`, `Actions (ATM + placements privés), pas de dette`, `*n.d.*`, `2ᵉ du secteur ; **stake son ETH** ; Tom Lee`], [`**Metaplanet** (3350)`, `BTC`, `~43 000 BTC (~2,6 Md$)`, `~95 000 $/BTC`, `Warrants « à strike mobile » + obligations à 0 %`, `~0,92x`, `Cotée au Japon ; **passée sous sa NAV**`], [`**Twenty One / XXI**`, `BTC`, `~43 500 BTC (~2,7 Md$)`, `~85 000 $/BTC`, `Actions ; adossée à Tether, Bitfinex, SoftBank`, `~1,24x`, `Jack Mallers (Strike) ; **rare à tenir une prime**`], [`**Strive** (ASST)`, `BTC`, `~19 882 BTC (~1,2 Md$)`, `*sources divergentes*`, `Préférentielles (SATA), **zéro dette**`, `~0,72x`, `Aussi **gérant d'actifs** (>2 Md$ d'encours) ; BTC non gagés`], [`**Forward Industries** (FWDI)`, `SOL`, `~7,55 M SOL (~575 M$)`, `~79 $/SOL (dernier lot)`, `Actions + staking`, `~1x`, `1ʳᵉ trésorerie Solana ; rachète ses actions sous 1`], [`**Hyperliquid Strategies** (PURR)`, `HYPE`, `~20 M HYPE (~800 M$)`, `~46 $/HYPE`, `Actions, zéro dette`, `autour de 1x`, `Issue d'une coquille cotée, liée à Paradigm`]] },
      { type: "def", terme: `Trois termes du tableau`, texte: `**ATM** (*at-the-market*) : vendre des actions nouvelles au fil de l'eau, au cours du jour, sans opération ponctuelle — le mécanisme décrit en I.2.
**Placement privé** (*PIPE*) : vendre d'un coup un gros bloc d'actions à quelques investisseurs choisis, à un prix négocié d'avance.
**Warrant à strike mobile** : un bon donnant le droit d'acheter l'action plus tard, à un prix qui n'est pas figé mais suit le cours — Metaplanet en a fait son outil de financement principal.` },
      { type: "p", texte: `*Sources : holdings et coût moyen sont **publiés par les sociétés** (communiqués, dépôts SEC, tableaux de bord officiels type strategy.com), recoupés via bitcointreasuries.net et CoinGecko ; la **mNAV n'est pas un chiffre officiel** — elle est recalculée par des tiers (mnav.com, DefiLlama, CoinGecko), d'où de légers écarts entre sources, et elle bouge vite. Données du printemps/été 2026. Deux cas de moindre transparence : le coût moyen de **Bitmine** est contesté (société ~3 450 $ vs analystes ~4 000 $/ETH) et le coût agrégé de **Forward** n'est pas publié (seul son dernier lot, ~79 $, l'est). Dans ce marché en repli, **Twenty One** est la seule à tenir une prime nette ; **Hyperliquid Strategies** oscille autour du pair, sans s'y installer ; les autres cotent sous leur NAV.*` }
    ],
  },
  {
    id: "ce-que-le-tableau-raconte-trois-lignes-de-partage",
    titre: `Ce que le tableau raconte : trois lignes de partage`, blocs: [
      { type: "p", texte: `Derrière ces chiffres, les DAT se distinguent sur trois axes qui décident, en pratique, de leur solidité.` },
      { type: "st", texte: `1. Accumulateur actif ou simple détenteur` },
      { type: "p", texte: `Une poignée de sociétés — Strategy en tête — **monétisent activement leur bilan** : elles émettent en continu, empilent les instruments de financement, et cherchent à faire monter la crypto par action. C'est un métier à part entière.` },
      { type: "p", texte: `La plupart des autres ne sont, dans les faits, que des **coffres passifs**. Elles ont levé une fois, acheté de la crypto, et se contentent de la détenir. Sans machine d'accumulation ni prime durable, leur cours n'a plus de raison de s'écarter de la valeur de leur trésor : il **converge vers la NAV**, voire tombe en dessous. ` },
      { type: "st", texte: `2. BTC sans rendement contre actifs à rendement natif` },
      { type: "p", texte: `Le bitcoin, une fois détenu, ne produit rien : il dort au bilan. Les DAT bitcoin ne peuvent donc justifier leur valorisation que par la volatilité, l'accès « packagé » au BTC et le levier.` },
      { type: "p", texte: `Les DAT bâties sur l'Ethereum ou le Solana disposent d'un argument que les premières n'ont pas : **un rendement natif**.` },
      { type: "def", terme: `Rendement natif (staking)`, texte: `Sur des réseaux comme Ethereum ou Solana, immobiliser ses jetons pour aider à sécuriser la blockchain donne droit à une rémunération, versée dans la même crypto — c'est le **staking**. Une trésorerie qui détient ces actifs peut donc les faire travailler et encaisser un revenu régulier (de l'ordre de 3 à 5 % par an), là où un stock de bitcoin reste inerte.` },
      { type: "p", texte: `Ce revenu versé par le réseau permet à ces sociétés d'argumenter qu'elles méritent un **multiple** (leur trésor produit un flux) plutôt qu'une simple prime narrative. En marché baissier, toutefois, quelques pour cent de rendement annuel ne compensent pas une forte baisse du prix de l'actif sous-jacent.` },
      { type: "st", texte: `3. Comment est financée l'amplification` },
      { type: "p", texte: `Trois modèles coexistent, chacun avec sa faiblesse propre :` },
      { type: "liste", items: [`**Par la prime (émission d'actions)** : tant que la mNAV dépasse 1, on émet et on achète. Simple, mais **le canal se ferme net dès que la décote s'installe** — le cas de la majorité aujourd'hui.`, `**Par le crédit (dette convertible)** : des taux très bas, mais un **mur d'échéances** à honorer à date fixe (le cas historique de Strategy).`, `**Par les préférentielles perpétuelles** : pas de remboursement de capital, mais un **dividende à servir indéfiniment**, d'autant plus lourd que le titre se paie cher (Strategy et Strive).`] }
    ],
  },
  {
    id: "focus-bitmine-la-grande-tresorerie-ethereum",
    titre: `Focus — Bitmine, la grande trésorerie Ethereum`, blocs: [
      { type: "p", texte: `Bitmine est la deuxième DAT du secteur et, de loin, la première sur l'Ethereum, avec **5,74 millions d'ETH** au 8 juillet 2026 — soit **4,8 % de tout l'ETH en circulation**, et un objectif affiché de 5 %. Elle a pour figure de proue **Tom Lee**, patron de la recherche chez Fundstrat et président du conseil d'administration de Bitmine, dont la notoriété joue le même rôle de récit que celle de Saylor pour Strategy.` },
      { type: "p", texte: `Sa différence de fond avec Strategy tient à l'actif choisi. Bitmine ne laisse pas son ETH dormir : elle en **stake** la quasi-totalité (autour de 4,7 millions d'ETH immobilisés), pour un revenu projeté à pleine capacité de l'ordre de **226 à 253 millions de dollars par an**. C'est l'argument différenciant : là où le bitcoin de Strategy ne rapporte rien, la trésorerie de Bitmine génère un flux.` },
      { type: "p", texte: `Côté financement, elle suit le modèle « à la MicroStrategy » mais **sans dette** : quasi exclusivement des actions (programme d'émission au fil de l'eau et placements privés). Pas de mur d'échéances, donc, mais une dépendance totale à la prime pour rester en régime d'accumulation. Sa mNAV actuelle n'a pas pu être trouvée dans une source datée fiable — à récupérer en direct.` },
      { type: "p", texte: `Sa santé à la mi-2026 illustre la limite du rendement natif : Bitmine a publié une **lourde perte comptable**, tirée par les moins-values latentes sur un ETH qui a baissé, **malgré la hausse de ses revenus de staking**. Le flux du staking n'a pas compensé la chute du prix de l'actif. Le rendement natif améliore l'équation à la marge ; il ne protège pas d'un marché baissier.` }
    ],
  },
  {
    id: "focus-strive-contre-strategy-plus-petite-mais-plus-simple",
    titre: `Focus — Strive contre Strategy : plus petite, mais plus simple`, blocs: [
      { type: "p", texte: `C'est la comparaison la plus instructive du secteur, parce que les deux sociétés jouent le même actif — le bitcoin — avec des structures opposées.` },
      { type: "p", texte: `**Strive** (ex-Asset Entities, ticker ASST), dirigée par Matt Cole, détient **19 882 bitcoins** au début de juillet 2026. Deux traits la définissent :` },
      { type: "liste", items: [`**Zéro dette.** Après remboursement de son prêt Coinbase, la société n'a aucun emprunt à échéance, et **100 % de ses bitcoins sont non gagés** — aucun créancier ne peut en réclamer la vente.`, `**Un financement 100 % préférentielles**, via son instrument **SATA**, calqué sur le STRC de Strategy : une préférentielle perpétuelle qui vise à coter autour de 100 $, mais qui verse **~13 % par an** — contre 12,00 % pour le STRC — avec un dividende payé **quotidiennement** (les jours ouvrés), là où le STRC verse deux fois par mois.`] },
      { type: "p", texte: `En face, **Strategy** est incomparablement plus grosse (~843 800 BTC), mais traîne **6,7 milliards de dollars de dette convertible** et un mur d'échéances étalé jusqu'au début des années 2030.` },
      { type: "st", texte: `Strive est-elle « plus viable » ? Réponse nuancée` },
      { type: "p", texte: `L'intuition « moins de dette = plus solide » a du vrai, mais ne suffit pas à trancher.` },
      { type: "p", texte: `**Ce qui joue en faveur de Strive :**` },
      { type: "liste", items: [`**Pas de mur de dette** : elle ne sera jamais forcée de refinancer un emprunt ou de vendre du bitcoin à date fixe pour rembourser. Un défaut ne peut venir que d'un dividende non payé, pas d'une échéance couperet.`, `**Des bitcoins non gagés** : plus de flexibilité, aucun collatéral rappelable.`] },
      { type: "p", texte: `**Ce qui tempère fortement :**` },
      { type: "liste", items: [`**Sa décote est plus profonde encore que celle de Strategy** : le marché la valorise, relativement à ses bitcoins, encore moins que le prototype. Le « bilan plus propre » ne lui a pas valu une meilleure prime.`, `**Un titre plus petit et moins liquide**, donc une prime plus fragile et une porte de sortie plus étroite.`, `**Un capital plus cher** : le SATA à ~13 % coûte davantage que le STRC — c'est le prix à payer pour compenser sa taille et sa liquidité inférieures, et cela alourdit d'autant sa charge de dividende.`] },
      { type: "p", texte: `La contrainte réelle est la même pour les deux, et elle n'est ni la dette ni le cash-flow : c'est **l'accès continu aux marchés de capitaux**. Tant que l'une comme l'autre peut émettre près du pair, elle tient ; le jour où le bitcoin baisse et où la prime s'évapore, ni le bilan sans dette de Strive ni la taille de Strategy ne changent l'équation de fond. Strive est **plus simple et moins exposée à un refinancement forcé** — un vrai atout — mais elle a échangé la dette contre une dépendance totale à un préférentiel plus coûteux.` },
      { type: "p", texte: `Une idée reçue mérite d'être corrigée : on imagine souvent Strategy adossée à un vrai métier logiciel, et Strive à rien d'autre que du bitcoin. En 2026, c'est presque l'inverse. Le logiciel de Strategy — quelques centaines de millions de dollars de chiffre d'affaires, une marge opérationnelle négative, une fraction infime de l'actif — ne génère plus aucun flux de trésorerie. Strive, elle, abrite **Strive Asset Management**, un gérant d'actifs enregistré à la SEC (plus de 2 Md$ d'encours, de vrais revenus de gestion) — modeste au regard de sa trésorerie bitcoin, mais que Strategy n'a pas. Aucune des deux ne vit vraiment de son métier historique : les deux dépendent avant tout de leur bitcoin et de leur capacité à lever du capital.` },
      { type: "p", texte: `Comparer ces sociétés à l'œil nu, via leur taille ou leur récit, ne suffit donc pas : les mêmes chiffres bruts peuvent cacher des situations très différentes. Reste à savoir avec quels **indicateurs** on jauge et on classe réellement une DAT — mNAV, rendement en crypto par action, couverture des dividendes, délai pour combler la décote — et comment les lire ensemble sans se faire piéger. C'est l'objet de la section suivante.` }
    ],
  },
  {
    id: "i-4-comment-analyser-une-dat-la-boite-a-outils",
    titre: `I.4 Comment analyser une DAT — la boîte à outils`, blocs: [
      { type: "p", texte: `Deux sociétés qui détiennent le même bitcoin peuvent être dans des situations radicalement différentes. Pour les départager, il faut une poignée d'indicateurs — et surtout savoir les **lire ensemble**. ` }
    ],
  },
  {
    id: "1-la-nav-la-valeur-du-tresor-point-de-depart-de-tout",
    titre: `1. La NAV — la valeur du trésor, point de départ de tout`, blocs: [
      { type: "p", texte: `Avant de juger si une DAT est chère ou bon marché, il faut savoir ce que vaut son trésor. C'est la **NAV**.` },
      { type: "def", terme: `NAV (*Net Asset Value*) crypto`, texte: `La valeur de marché des cryptos détenues : **quantité × prix du jour**. Pour une DAT bitcoin, on parle parfois de **BTC NAV**. Une société qui détient 20 000 bitcoins avec un bitcoin à 90 000 $ a une NAV de **1,8 milliard de dollars** — un chiffre qui bouge à chaque tick du cours.` },
      { type: "p", texte: `Deux nombres se rattachent à la NAV et méritent d'être distingués :` },
      { type: "liste", items: [`**La NAV elle-même** : ce que le trésor vaut *maintenant*, au prix du marché.`, `**Le coût moyen d'acquisition** : le prix *auquel* la société a acheté ses cryptos, en moyenne. Strategy tourne autour de **75 500 $/BTC**, Metaplanet autour de **95 000 $/BTC**.`] },
      { type: "p", texte: `L'écart entre les deux dit si la trésorerie est en plus-value ou en moins-value latente. Une DAT dont le coût moyen est *au-dessus* du prix actuel détient un trésor qui vaut, sur le papier, moins que ce qu'il a coûté — un coussin plus mince pour absorber les chocs.` },
      { type: "p", texte: `La NAV est la fondation : tous les indicateurs qui suivent la mettent en rapport avec autre chose — le prix de bourse, la dette, les dividendes.` }
    ],
  },
  {
    id: "2-la-mnav-la-formule-complete",
    titre: `2. La mNAV — la formule complète`, blocs: [
      { type: "p", texte: `La mNAV est apparue dès I.1, en concept : au-dessus de 1, prime ; en dessous, décote. Voici enfin le calcul exact — et il ne se résume pas à « capitalisation boursière ÷ valeur du trésor ».` },
      { type: "p", texte: `Le numérateur correct n'est pas la simple capitalisation, mais la **valeur d'entreprise** (EV), qui tient compte de tout ce que la société doit avant que l'actionnaire ordinaire ne touche quoi que ce soit.` },
      { type: "p", texte: `**La formule**
**mNAV = valeur d'entreprise (EV) ÷ valeur de marché des cryptos détenues**
avec :
**EV = capitalisation des actions ordinaires + dette totale + total des préférentielles − trésorerie**` },
      { type: "p", texte: `Chaque terme, décomposé :` },
      { type: "liste", items: [`**Capitalisation des actions ordinaires** : cours de l'action × nombre d'actions.`, `**+ dette totale** : les emprunts (obligations convertibles…) — de l'argent dû à des créanciers.`, `**+ total des préférentielles** : les STRC, STRF et consorts, qui passent avant les actionnaires ordinaires.`, `**− trésorerie** : le cash disponible, qui vient en déduction (il pourrait rembourser une partie des dettes).`] },
      { type: "p", texte: `**Pourquoi ajouter dette et préférentielles ?** Parce qu'elles ont un droit *prioritaire* sur le trésor. Une DAT peut afficher une capitalisation modeste tout en étant lourdement endettée : sa valeur d'entreprise — donc sa mNAV — sera bien plus élevée que la seule capitalisation ne le laisse croire. Ignorer la dette, c'est sous-estimer ce que le marché valorise réellement.` },
      { type: "box", ton: "exemple", titre: `la formule complète change le verdict`, texte: `Une DAT détient pour 1 000 M$ de bitcoin. Son action capitalise 900 M$, elle a 200 M$ de dette, 300 M$ de préférentielles et 100 M$ de cash.
EV = 900 + 200 + 300 − 100 = **1 300 M$** · mNAV = 1 300 ÷ 1 000 = **1,30x**
En regardant la seule capitalisation (900 M$ contre 1 000 M$ de trésor), on aurait conclu à une **décote** de 0,90x. La formule complète révèle l'inverse : une **prime** de 1,30x. La dette et les préférentielles font toute la différence.` },
      { type: "p", texte: `Pour l'interprétation, rien de neuf par rapport aux sections précédentes : au-dessus de 1, le marché paie l'action plus cher que le trésor net (l'émission d'actions enrichit les actionnaires) ; en dessous, l'inverse, et le moteur d'accumulation cale.` },
      { type: "figure", id: 5, titre: `Lire une mNAV`, legende: `Au-dessus de 1,22×, émettre des actions enrichit l'actionnaire ; sous 1, la machine d'accumulation cale. Strategy est repassée sous 1 le 27 juin 2026.` }
    ],
  },
  {
    id: "3-le-rendement-en-crypto-par-action-btc-eth-yield-et-ses-deu",
    titre: `3. Le rendement en crypto par action (BTC / ETH Yield) — et ses deux angles morts`, blocs: [
      { type: "p", texte: `Le *BTC Yield* a été défini en I.1 : la **progression du nombre de bitcoins par action** sur une période. Strategy affichait **+22,8 %** en 2025 et **+13,3 %** au 25 mai 2026. C'est la métrique que ces sociétés brandissent pour prouver que leurs émissions créent de la valeur.` },
      { type: "box", ton: "piege", titre: `un « yield » qui ne verse rien`, texte: `Le nom trompe : **ce n'est pas un rendement versé en cash.** Personne ne reçoit 13 % sur son compte. C'est une mesure comptable de croissance : chaque action donne droit à 13 % de bitcoins en plus qu'en début d'année.` },
      { type: "p", texte: `Deux limites en font un indicateur à ne jamais lire seul.` },
      { type: "p", texte: `**Il ne dit rien du prix de la crypto.** Le BTC Yield mesure une *quantité* par action, pas une valeur. On peut afficher un +13 % magnifique pendant que le bitcoin chute de 30 % — auquel cas l'actionnaire, qui possède davantage de bitcoins par action mais chacun valant beaucoup moins, est en **perte sèche**. Un beau BTC Yield sur fond de marché baissier n'est pas une bonne nouvelle.` },
      { type: "p", texte: `**Il ignore ce qui est dû aux créanciers et aux préférentielles.** Le « bitcoin par action » compte *tous* les bitcoins du trésor, comme s'ils revenaient intégralement à l'actionnaire ordinaire. Or une partie est promise, en priorité, aux détenteurs de dette et de préférentielles. Sur un bilan chargé, le bitcoin réellement attribuable à l'actionnaire ordinaire — une fois ces créanciers servis — est inférieur au chiffre affiché.` },
      { type: "p", texte: `Le BTC Yield répond à une seule question : « la société accumule-t-elle plus vite que sa dilution ? » — à croiser toujours avec le prix de l'actif et la structure du bilan.` }
    ],
  },
  {
    id: "4-la-couverture-des-dividendes-le-test-de-resistance",
    titre: `4. La couverture des dividendes — le test de résistance`, blocs: [
      { type: "p", texte: `Une DAT financée par préférentielles doit verser un dividende, trimestre après trimestre, que le marché soit porteur ou non. La question de survie devient : **combien de temps peut-elle tenir ?**` },
      { type: "p", texte: `**La formule**
**Couverture (en mois) = réserve de cash ÷ charge annuelle (dividendes + intérêts) × 12**` },
      { type: "p", texte: `C'est le nombre de mois pendant lesquels la société peut honorer ses engagements **sans lever un dollar de plus**, en puisant dans son coussin de trésorerie. Plus le chiffre est élevé, plus elle encaisse une fermeture prolongée du marché sans être forcée de vendre ses cryptos.` },
      { type: "p", texte: `Le cas de Strategy montre à quel point ce chiffre bouge vite. Sa charge annuelle — dividendes préférentiels et intérêts confondus — s'élève à environ **1,76 milliard de dollars**. Sa réserve de cash, elle, a fait le grand écart en cinq mois : **2,25 milliards** début février, **871 millions** fin mai (après le rachat de 1,5 milliard de dette convertible), puis **2,55 milliards** au 28 juin.` },
      { type: "p", texte: `Appliquons la formule à ces deux extrêmes. Avec 871 millions, la couverture tombe à **six mois** : une fermeture prolongée du marché forcerait la société à vendre du bitcoin. Avec 2,55 milliards, elle remonte à **plus de dix-sept mois**. Ce n'est pas la même société — et c'est précisément pourquoi Strategy a formalisé, fin juin, une politique de réserve visant deux à trois ans de couverture. L'indicateur ne se lit jamais seul : il se lit à une date, et dans une trajectoire.` }
    ],
  },
  {
    id: "5-le-mur-de-dette-quand-combien-refinancable",
    titre: `5. Le mur de dette — quand, combien, refinançable ?`, blocs: [
      { type: "p", texte: `Les préférentielles n'ont pas d'échéance ; la **dette**, si. C'est elle qui impose un calendrier, et une date de remboursement tombe qu'on le veuille ou non. Trois questions à se poser :` },
      { type: "liste", items: [`**Quand ?** Les échéances sont-elles proches, ou lointaines et étalées ? Les obligations convertibles de Strategy s'échelonnent par tranches jusqu'au début des années 2030 — un « mur » identifiable des années à l'avance, et que la société a commencé à démonter en rachetant sa dette par avance.`, `**Combien ?** Le montant à rembourser rapporté au trésor. Une échéance de quelques centaines de millions face à un trésor de dizaines de milliards se refinance sans drame ; l'inverse est un piège.`, `**Refinançable ?** Le jour venu, la société pourra-t-elle réemprunter (ou réémettre) pour rouler la dette — ou devra-t-elle **vendre des cryptos** pour rembourser ? C'est là que le prix de la crypto et l'état de la prime, à cette date précise, décident de tout.`] },
      { type: "p", texte: `Une DAT **sans dette** — comme Strive — échappe entièrement à ce risque : aucun mur, aucun refinancement forcé. Un défaut ne peut alors venir que d'un dividende impayé, jamais d'une échéance couperet. Ce qui, on l'a vu en I.2, ne la met pas pour autant à l'abri : elle a troqué le risque de calendrier contre une dépendance totale à un préférentiel plus coûteux.` }
    ],
  },
  {
    id: "6-levier-et-amplification-deux-ratios-a-comparer-entre-socie",
    titre: `6. Levier et amplification — deux ratios à comparer entre sociétés`, blocs: [
      { type: "p", texte: `Ces deux mesures ont été définies en I.1 ; on les retrouve ici comme outils de comparaison. Rappel en une ligne :` },
      { type: "liste", items: [`**Levier** = la seule **dette**, rapportée à la valeur du trésor. Chez Strategy, environ **9 %** début 2026.`, `**Amplification** = dette **+ préférentielles**, rapportées au trésor. Chez Strategy, environ **34 %** à la même date.`] },
      { type: "p", texte: `*(Ces ratios bougent avec le cours du bitcoin, qui est au dénominateur : ce qu'il faut retenir n'est pas leur niveau exact un jour donné, mais l'écart entre les deux.)*` },
      { type: "p", texte: `Comparés d'une société à l'autre, ces deux ratios révèlent *comment* l'amplification est financée. Un écart énorme entre les deux — comme chez Strategy — signale une amplification bâtie surtout sur du **capital perpétuel** (pas de remboursement, mais un dividende à servir). Deux ratios proches signaleraient au contraire une exposition dominée par la **dette** (avec ses échéances). Le total dit l'ampleur du pari ; l'écart dit sa nature.` }
    ],
  },
  {
    id: "7-la-prime-dans-le-temps-pas-seulement-son-niveau",
    titre: `7. La prime dans le temps, pas seulement son niveau`, blocs: [
      { type: "p", texte: `Une mNAV sous 1 ne veut pas dire la même chose selon d'où elle vient : une société qui y tombe après des années de prime confortable ne raconte pas la même histoire qu'une autre qui n'a jamais réussi à s'en détacher. Un chiffre ponctuel ne suffit pas — il faut regarder la **trajectoire**.` },
      { type: "p", texte: `Strategy a longtemps traité bien au-dessus du pair, avec des pics où le marché payait plus du double de la valeur de son trésor. Chacun de ces sommets a été suivi d'une rechute marquée. Deux enseignements pour l'analyse :` },
      { type: "liste", items: [`**Une prime très élevée peut constituer un signal d'alerte.** Les pics historiques de mNAV ont précédé des corrections violentes. Payer une DAT plusieurs fois la valeur de son trésor, c'est parier que le récit tiendra.`, `**La volatilité de la prime compte autant que son niveau.** Une mNAV qui reste stable autour de 1,1x inspire plus confiance qu'une autre qui zigzague entre 0,7x et 2,5x, même si la seconde affiche une moyenne plus flatteuse.`] }
    ],
  },
  {
    id: "8-combien-de-temps-pour-justifier-la-prime",
    titre: `8. Combien de temps pour justifier la prime ?`, blocs: [
      { type: "p", texte: `Un dernier indicateur relie la prime au rythme d'accumulation. La question qu'il pose : au train où la société accumule des cryptos par action, **combien de temps faut-il pour que la croissance du trésor « rattrape » le prix payé aujourd'hui** ?` },
      { type: "p", texte: `**La formule**
**Délai (en années) = ln(mNAV) ÷ ln(1 + rendement crypto par action)**
*(ln = logarithme népérien ; il traduit une croissance qui se cumule année après année.)*` },
      { type: "p", texte: `**Mini-exemple.** Une DAT se paie à une mNAV de 2x (le double de son trésor) et accumule à un rythme de +13 % de crypto par action par an.` },
      { type: "p", texte: `Délai = ln(2) ÷ ln(1,13) ≈ 0,69 ÷ 0,12 ≈ **5,7 ans**` },
      { type: "p", texte: `Autrement dit, il faudrait près de six ans, au rythme actuel, pour que le bitcoin par action double et « justifie » par les fondamentaux la prime de 2x payée aujourd'hui.` },
      { type: "p", texte: `Comment le lire :` },
      { type: "liste", items: [`**Délai court** = la stratégie d'accumulation justifie assez vite la prime → valorisation plutôt raisonnable.`, `**Délai très long** = le marché paie une prime que la croissance ne rattrapera pas avant des années → valorisation spéculative, portée par le récit plus que par les fondamentaux.`] },
      { type: "p", texte: `Son intérêt : il **normalise** la comparaison. Deux sociétés à mNAV identique n'ont pas la même valeur si l'une accumule deux fois plus vite que l'autre — ce ratio le fait apparaître.` }
    ],
  },
  {
    id: "9-comment-comparer-deux-dat-sans-se-faire-pieger",
    titre: `9. Comment comparer deux DAT sans se faire piéger`, blocs: [
      { type: "p", texte: `Comparer deux DAT, c'est les lire **ensemble** — et connaître les pièges de chacun.` },
      { type: "p", texte: `Les trois réflexes de comparaison :` },
      { type: "listenum", items: [`**La mNAV situe le point de départ** (prime ou décote), mais ne dit rien de la qualité du bilan. À croiser aussitôt avec la structure de financement.`, `**Le rythme d'accumulation nuance la mNAV** : à prime égale, la société qui accumule le plus vite « mérite » mieux sa valorisation (c'est le sens de l'indicateur précédent).`, `**La nature de l'actif et du financement décide de la résilience** : un trésor à rendement natif (ETH, SOL stakés) tient un argument que le bitcoin dormant n'a pas ; une DAT sans dette échappe au mur d'échéances, mais dépend d'un préférentiel à servir.`] },
      { type: "p", texte: `Les pièges à éviter, indicateur par indicateur :` },
      { type: "tableau", entetes: [`Indicateur`, `Ce qu'il mesure`, `Le piège à éviter`], lignes: [[`**NAV / coût moyen**`, `Valeur du trésor et prix d'achat`, `Une grosse NAV ne dit rien de la valorisation : une DAT énorme peut se payer en décote`], [`**mNAV**`, `Prime ou décote sur le trésor net`, `La lire sans la dette ni les préférentielles (prendre la capitalisation pour l'EV) fausse tout`], [`**Rendement par action (BTC Yield)**`, `Croissance de la crypto par action`, `Un beau chiffre masque une chute du prix de l'actif — l'actionnaire peut être en perte`], [`**Couverture des dividendes**`, `Mois de survie sans lever de capital`, `Très sensible aux hypothèses de réserve : un même bilan peut afficher 6 ou 18 mois`], [`**Mur de dette**`, `Échéances à honorer`, `Zéro dette n'égale pas zéro risque : le préférentiel reste à servir`], [`**Prime historique**`, `Trajectoire de la mNAV`, `Une prime très haute est un signal de sommet, pas de solidité`]] },
      { type: "p", texte: `Concrètement, sur un tableau de bord public — comme le site officiel de Strategy — on croise en un coup d'œil holdings, coût moyen, mNAV, rendement par action et dette. Le bon réflexe n'est pas de regarder le plus gros chiffre, mais de vérifier qu'ils **racontent la même histoire** : une taille imposante ne compense pas une décote profonde, et un rendement par action flatteur ne rachète pas un trésor qui perd de la valeur.` },
      { type: "p", texte: `Comparer un accumulateur actif (qui fait tourner la machine) et un coffre passif (qui détient sans plus émettre) via la même mNAV n'a d'ailleurs pas le même sens : chez le premier, la prime finance la croissance future ; chez le second, elle n'a aucune raison de tenir et converge vers 1.` },
      { type: "p", texte: `Ces indicateurs mesurent une santé à un instant donné. Reste à comprendre ce qui peut la **dégrader** : compression durable de la prime, dilution, mur de dette, perte d'accès au capital — et pourquoi ce dernier, plus que le prix de la crypto lui-même, est le vrai point de rupture d'une DAT. C'est l'objet de la section suivante.` }
    ],
  },
  {
    id: "i-5-les-risques",
    titre: `I.5 Les risques`, blocs: [
      { type: "p", texte: `Les risques d'une DAT ne sont pas une liste d'aléas indépendants : ils s'enchaînent tous à partir d'un seul point, la **compression de la prime**. Une mNAV qui s'installe sous 1 gèle l'émission d'actions (I.1), rend la dilution destructrice (I.1) et rapproche l'échéance du mur de dette (I.2 et I.4) — des mécaniques déjà décrites, qu'on ne réexplique pas ici.` },
      { type: "p", texte: `Les analyses sérieuses du sujet — d'OAK Research à VanEck — convergent sur un point qui va à l'encontre du récit grand public : **ce n'est pas une baisse du bitcoin qui tue une DAT**, c'est la **fermeture de l'accès au capital**. Une société bien gérée traverse un marché baissier sans vendre son trésor sous la contrainte ; ce qui la tue, c'est le jour où *plusieurs canaux de financement se ferment en même temps* — prime effondrée, marché des préférentielles fermé, flux passifs coupés, réserve de cash épuisée. Le prix de la crypto est un facteur de stress ; l'accès au capital est la condition de survie. On part de ce constat.` },
      { type: "p", texte: `Mais ce constat, décrit partout du point de vue de la société cotée, ne nous suffit pas. Car ce risque ne reste plus confiné au bilan de Strategy : il **se propage** hors de la bourse. C'est le fil de cette section. On traite d'abord trois risques encore intacts — l'exclusion des indices, le faux « risque de liquidation », la contagion — avant de tout hiérarchiser, puis (seconde partie du dossier) de suivre ce risque jusque dans la DeFi, où il prend une forme entièrement différente.` }
    ],
  },
  {
    id: "l-exclusion-des-indices-boursiers",
    titre: `L'exclusion des indices boursiers`, blocs: [
      { type: "p", texte: `Une part énorme de l'épargne mondiale dort dans des **fonds indiciels (ETF)** qui répliquent mécaniquement un indice : ils achètent, et gardent, toute action qui y figure — sans se poser de question. Strategy est entrée dans plusieurs de ces indices (les **MSCI** notamment). Le jour où elle en sortirait, ces fonds devraient la **revendre automatiquement, tous en même temps**.` },
      { type: "p", texte: `Et l'ordre de grandeur est chiffrable : une exclusion des seuls indices MSCI forcerait, selon JPMorgan, environ **2,8 milliards de dollars** de ventes ; si tous les indexeurs suivaient, près de **8,8 milliards**. Des ventes sans aucun rapport avec les fondamentaux de Strategy — juste des robots qui liquident une ligne devenue inéligible —, mais qui écraseraient le cours et la prime au passage.` },
      { type: "p", texte: `Deux décisions ont marqué 2026 :` },
      { type: "liste", items: [`**MSCI a renoncé, pour l'instant, à exclure les DAT.** Fin 2025, l'indexeur avait envisagé d'écarter les sociétés dont **plus de 50 % de l'actif** est en crypto. Le **6 janvier 2026**, il a décidé de **ne pas les exclure** — tout en ouvrant une revue plus large. La menace est suspendue, pas levée.`, `**Le S&P 500 a de nouveau écarté Strategy** (fin 2025) : éligible sur les critères techniques, mais jugée trop assimilable à un pari sur le bitcoin.`] },
      { type: "p", texte: `Une exclusion ne rendrait pourtant Strategy ni moins solvable ni moins riche en bitcoins. Elle lui retirerait une demande captive, celle des fonds qui achètent sans se poser de question — et c'est la prime, donc l'accès au capital, qui en paierait le prix.` }
    ],
  },
  {
    id: "le-faux-risque-la-liquidation-forcee",
    titre: `Le faux risque : la « liquidation forcée »`, blocs: [
      { type: "p", texte: `Un récit revient sans cesse dans le débat public : si le bitcoin baisse trop, Strategy serait **liquidée de force**, comme une position DeFi sur-collatéralisée qui « saute » automatiquement dès que la valeur du collatéral passe sous un seuil. Appliqué à Strategy, ce scénario est **faux** — un point que les analyses spécialisées (OAK Research, NYDIG) documentent depuis un moment, mais qui peine à percer face au récit dominant.` },
      { type: "liste", items: [`**La dette convertible** n'est pas gagée sur des bitcoins identifiés : les prêteurs n'ont aucun droit de saisir tel ou tel bitcoin si le cours baisse.`, `**Les préférentielles ne sont pas collatéralisées par le bitcoin.** Elles ne donnent qu'une **créance prioritaire sur l'actif résiduel** de la société, pas un droit direct sur des bitcoins.`] },
      { type: "p", texte: `Il n'existe donc **aucun mécanisme automatique** qui forcerait Strategy à vendre son bitcoin à un cours déterminé. Le vrai risque est **corporate**, pas mécanique : il s'agit d'honorer les dividendes et les intérêts. Si l'accès au capital se ferme et que la réserve de cash s'épuise, la société *peut choisir* de vendre du bitcoin pour tenir ses engagements — c'est d'ailleurs ce qu'elle a commencé à faire en 2026. Mais c'est une **décision de dernier recours**, pas un couperet déclenché par un prix.` }
    ],
  },
  {
    id: "la-contagion-un-risque-a-l-echelle-du-secteur",
    titre: `La contagion : un risque à l'échelle du secteur`, blocs: [
      { type: "p", texte: `Deux canaux éventuels de propagation :` },
      { type: "liste", items: [`**Entre DAT.** Les plus fragiles cèdent d'abord. Contraintes de vendre leur crypto pour tenir, ces ventes pèsent sur le prix de l'actif — ce qui dégrade la NAV des autres, enfonce leur mNAV, et propage le stress.`, `**Vers la DeFi.** Le STRC et les autres préférentielles servent désormais de brique de rendement à des stablecoins « à rendement ». Le stress d'une DAT ne reste plus confiné à la bourse : il remonte dans des produits crypto vendus comme stables, jusqu'à des détenteurs qui ignoraient y être exposés — mécanisme détaillé dans la seconde partie.`] }
    ],
  },
  {
    id: "recapitulatif-hierarchiser-les-risques",
    titre: `Récapitulatif : hiérarchiser les risques`, blocs: [
      { type: "tableau", entetes: [`Risque`, `Nature`, `Ce qui le déclenche`, `Gravité`], lignes: [[`**mNAV < 1 durable**`, `Financement`, `Baisse de la crypto + perte de confiance`, `Élevée — c'est la source des autres`], [`**Dilution de l'actionnaire ordinaire**`, `Valeur par action`, `Émission en décote`, `Élevée pour l'actionnaire ordinaire`], [`**Fermeture de l'accès au capital**`, `Survie`, `Cumul : décote + indices + marché fermé`, `**Fatale** — le vrai point de rupture`], [`**Mur de dette**`, `Calendrier`, `Échéance fixe (2029-2030 pour Strategy)`, `Moyenne, datée et anticipable`], [`**Exclusion des indices**`, `Coût du capital`, `Décision MSCI / S&P`, `Moyenne — renchérit, ne tue pas`], [`**Contagion sectorielle**`, `Systémique`, `Ventes forcées + liens DeFi`, `Variable, monte en marché baissier`], [`**« Liquidation forcée » automatique**`, `—`, `*N'existe pas* pour Strategy`, `Faux risque à écarter`]] },
      { type: "box", ton: "essentiel", texte: `La plupart de ces risques découlent du même point (la mNAV sous 1), un seul est fatal (la fermeture de l'accès au capital), et le plus médiatisé (la liquidation forcée) n'existe pas.` },
      { type: "p", texte: `Ces risques restent, jusqu'ici, décrits du point de vue de la société cotée. Ils prennent un tout autre relief quand un particulier s'expose à une DAT **via la DeFi** — en empilant des couches de tokenisation, de rendement et de levier sur un titre déjà volatil. Ce qui s'y construit, et ce qui s'est concrètement passé pour ces investisseurs lors du décrochage du STRC de juin 2026 : c'est l'objet de la **seconde partie**.` }
    ],
  }
]  as DossierSection[],
      },
      {
        id: "partie-2",
        bandeau: "PARTIE II — Les DAT en DeFi",
        sousTitre:
          "Ce que la finance décentralisée construit par-dessus les DAT — et ce que le décrochage du STRC, en juin 2026, en a révélé.",
        sections: [
  {
    id: "chapo",
    blocs: [
      { type: "p", texte: `Acheter une action Strategy en bourse suppose un compte-titres, des horaires d'ouverture et parfois un ticket d'entrée. La DeFi lève ces contraintes : on peut acquérir et détenir une exposition à une DAT 24 h/24, en fractions, depuis un simple portefeuille crypto. Elle ajoute surtout deux usages que la bourse classique ne permet pas — **servir de collatéral** pour emprunter, et **empiler du rendement** couche après couche (looping). C'est ce second usage qui est le plus intéressant — et le plus dangereux.` }
    ],
  },
  {
    id: "ii-1-la-construction-les-trois-etages",
    titre: `II.1 La construction — les trois étages`, blocs: [
      
    ],
  },
  {
    id: "etage-1-detenir-une-action-de-dat-sans-passer-par-la-bourse",
    titre: `Étage 1 — détenir une action de DAT sans passer par la bourse`, blocs: [
      { type: "p", texte: `La brique de base, c'est la version tokenisée de l'action elle-même.` },
      { type: "def", terme: `Action tokenisée`, texte: `Un jeton crypto adossé, un pour un, à une action réelle conservée chez un dépositaire régulé. Détenir le jeton revient à détenir un droit sur l'action correspondante. Le numéro 2 de la newsletter les abordait déjà, via la plateforme Backpack — c'est la même brique de départ.` },
      { type: "def", terme: `Wrapper (« enveloppe »)`, texte: `Le terme générique pour un jeton qui **emballe** un actif existant — ici une action, plus loin le dividende d'un STRC — afin de le rendre utilisable en DeFi. Point important : le jeton **n'est pas** l'actif, c'est une créance sur lui. Son prix peut donc s'écarter de celui de l'actif emballé (voir « dépeg du wrapper » plus bas).` },
      { type: "p", texte: `Pour Strategy, plusieurs émetteurs proposent une action MSTR tokenisée :` },
      { type: "liste", items: [`**MSTRx**, émis par **Backed Finance** (gamme xStocks) et accessible via **Kraken**, sur la blockchain Solana ;`, `**MSTRon**, émis par **Ondo** ;`, `d'autres acteurs comme **Dinari**, entre autres.`] },
      { type: "p", texte: `Dans chaque cas, le jeton est censé être couvert à 100 % par de vraies actions MSTR déposées chez un dépositaire. Ce que ça permet : détenir l'action hors des heures de bourse, la fractionner, mais surtout **la déposer en collatéral** pour emprunter, ou la placer dans un pool de liquidité.` }
    ],
  },
  {
    id: "etage-2-transformer-le-dividende-du-strc-en-stablecoin-a-ren",
    titre: `Étage 2 — transformer le dividende du STRC en « stablecoin à rendement »`, blocs: [
      { type: "p", texte: `L'autre stratégie ne tokenise pas l'action, mais le **dividende du STRC** (la préférentielle détaillée en I.2). Le principe de base est le même chez tous ces protocoles : ils achètent des actions préférentielles de DAT et encaissent le dividende en cash. Ce qu'ils en font ensuite diverge — certains le reversent en dollar rémunéré, d'autres en bitcoin. Quatre acteurs illustrent ces variantes :` },
      { type: "liste", items: [`**Apyx** (apyx.fi) : l'un des plus gros détenteurs externes de STRC en DeFi, autour de **29 M$** (288 888 actions, mars 2026). Il émet deux jetons — l'\`apxUSD\` (dollar de base, non rémunéré) et l'\`apyUSD\` (sa version rémunérée), qui affiche **13 à 20 % de rendement annuel** selon la participation.`, `**Saturn Credit** : même logique en dollar, avec l'\`USDat\` (base) et sa version stakée \`sUSDat\` (rémunérée), qui vise **11 % et plus**.`, `**Roxom** : un montage différent, à effet de levier — on poste du **bitcoin en collatéral**, on emprunte du cash à un taux bas (~7 %), et on utilise ce cash pour acheter du STRC (~11,5 % de rendement). Le profit vient de l'écart entre les deux taux ; le dividende capté est reconverti en bitcoin via un jeton \`xSTRC\`. Position réduite face à Apyx ou Saturn.`, `**Hermetica** : encore une autre variante, et plus modeste en taille (position STRC indirecte d'environ **4 M$**, via Saturn). Son vault \`hBTC\` n'émet aucun dollar : c'est un produit **libellé en bitcoin**, qui capte ce rendement STRC et d'autres sources, et reconvertit tout en BTC chaque jour.`] },
      { type: "p", texte: `**Comment ça marche, concrètement — l'exemple d'Apyx :**` },
      { type: "listenum", items: [`**On échange des dollars contre de l'\`apxUSD\`**, comme n'importe quel jeton. C'est le dollar « brique de base » — non rémunéré, il sert surtout de collatéral.`, `**On dépose (« lock ») cet \`apxUSD\` dans le vault de rendement** (le « coffre » du protocole), et on reçoit en échange de l'\`apyUSD\` au taux de change du moment du dépôt.`, `**En coulisse, Apyx détient des actions STRC**, achetées avec la trésorerie du protocole. Strategy verse le dividende STRC en cash — mensuellement à l'origine, deux fois par mois depuis juillet 2026 ; Apyx convertit ce cash en \`apxUSD\` et le crédite au vault.`, `**Concrètement, le *nombre* d'\`apyUSD\` que l'on détient ne bouge plus après le dépôt** — c'est son **taux de change face à l'\`apxUSD\` qui continue de grimper** jour après jour, y compris pour ceux qui sont arrivés après le lancement.`, `**Pour encaisser le gain, il faut échanger son \`apyUSD\`** contre de l'\`apxUSD\` (puis, si besoin, contre des dollars classiques) — au taux en vigueur ce jour-là, plus élevé qu'à l'achat.`] },
      { type: "def", terme: `Vault à taux de change croissant`, texte: `Contrairement à un livret qui ajoute des intérêts à votre solde, ce type de vault laisse le *nombre* de jetons détenus inchangé après l'achat et fait grimper leur **valeur d'échange**. ` },
      { type: "p", texte: `Une chose devrait surprendre à ce stade : le dividende source, celui du STRC, tourne autour de **11-12 %** (I.2) — et pourtant, on vient de voir que l'\`apyUSD\` peut afficher jusqu'à **20 %**, sans aucun levier ni emprunt dans ce montage. D'où vient l'écart ?` },
      { type: "def", terme: `Pourquoi 20 % sans le moindre levier ?`, texte: `Ce n'est pas un levier caché — c'est un **effet de participation**. Le vault encaisse le dividende de *tout* le STRC détenu par le protocole (financé par l'ensemble de l'\`apxUSD\` en circulation, verrouillé ou non). Mais il ne partage ce flux qu'entre les détenteurs qui ont choisi de **verrouiller** leur \`apxUSD\` en \`apyUSD\` pour recevoir du rendement. Si seule une partie de l'\`apxUSD\` en circulation est verrouillée, le même dividende se répartit sur un bassin plus restreint de bénéficiaires — ce qui gonfle mécaniquement leur taux affiché. Moins de gens participent, plus le taux grimpe pour ceux qui restent ; et inversement, si tout le monde se met à verrouiller en même temps, le taux affiché retombe vers celui du STRC lui-même.` },
      { type: "p", texte: `Seuls Apyx et Saturn Credit correspondent vraiment à l'étiquette « dollar stable à rendement » : Roxom et Hermetica reversent en bitcoin, pas en dollar, et restent des acteurs nettement plus petits. Le point commun, lui, tient pour tous : leur rendement vient du même endroit — le dividende du STRC — et leur détenteur hérite, souvent sans le savoir, de la fragilité de Strategy, du bitcoin et de la liquidité du STRC. C'est la chaîne de dépendance annoncée en I.2. Reste à voir ce qu'elle donne quand on ajoute du levier par-dessus.` }
    ],
  },
  {
    id: "etage-3-le-montage-a-effet-de-levier",
    titre: `Étage 3 — le montage à effet de levier`, blocs: [
      { type: "p", texte: `Ici, on part d'un stablecoin à rendement adossé au STRC (\`apyUSD\` ou \`sUSDat\`) et on cherche à en pousser le rendement le plus loin possible. La source du rendement reste la même — le dividende du STRC — mais on l'amplifie en empruntant des dollars bon marché pour racheter encore de la position. Trois briques, empilées dans cet ordre.` },
      { type: "p", texte: `**1. Figer le rendement avec Pendle.**` },
      { type: "def", terme: `Pendle (PT / YT)`, texte: `Pendle coupe un actif à rendement en deux jetons distincts. Le **PT** (*Principal Token*) rend un montant fixe à une échéance donnée : c'est le rendement figé d'avance, connu au moment de l'achat (un PT-apyUSD autour de **14,84 %** fixe, par exemple). Le **YT** (*Yield Token*) capte, lui, le rendement variable jusqu'à l'échéance. Le fonctionnement fin de ce découpage est décortiqué plus loin, quand on étudiera ce que vaut un PT dans la tempête.` },
      { type: "p", texte: `**2. Emprunter contre ce PT sur Morpho.**` },
      { type: "def", terme: `Morpho (prêt / collatéral)`, texte: `Une place de prêt on-chain. On y dépose un actif en **collatéral** — ici le PT-apyUSD — pour **emprunter** un autre actif — ici des dollars (USDC) — à un taux plus bas que le rendement du collatéral (le PT). Tant que la valeur du collatéral couvre largement l'emprunt, la position tient. Si elle passe sous un seuil, elle est **liquidée** : le protocole vend le collatéral pour rembourser le prêt.` },
      { type: "p", texte: `**3. Recommencer — le looping.**` },
      { type: "p", texte: `Avec les dollars empruntés à l'étape 2, on ne s'arrête pas là : on **rachète de l'\`apyUSD\`** avec ce cash, on le **redépose sur Pendle** pour obtenir un nouveau PT (toujours autour de 14,84 % fixe), on **redépose ce PT sur Morpho** comme collatéral, on **réemprunte** des dollars contre lui — et on recommence. Chaque tour du cycle (acheter → figer sur Pendle → déposer en collatéral sur Morpho → emprunter → racheter) ajoute une couche d'exposition au même dividende STRC.` },
      { type: "p", texte: `Le calcul qui pousse à boucler est simple : tant que le PT-\`apyUSD\` rapporte plus (~14,84 %) que ce que coûte l'emprunt sur Morpho, chaque tour supplémentaire capte un nouvel écart positif — donc **chaque boucle augmente le rendement global de la position**. C'est cet écart, répété à chaque tour, qui pousse à multiplier les cycles plutôt qu'à s'arrêter au premier.` },
      { type: "def", terme: `Looping (levier)`, texte: `Répéter un même cycle d'achat / dépôt en collatéral / emprunt plusieurs fois de suite, en réinjectant à chaque tour les dollars empruntés dans le même actif. Chaque tour ajoute de l'exposition — donc du rendement — mais rétrécit la marge de sécurité avant liquidation, puisque chaque position ajoutée est elle-même adossée à un collatéral qui peut décrocher.` },
      { type: "p", texte: `Le rendement affiché grimpait avec le nombre de tours : autour de **25 %** par an pour deux ou trois tours, et jusqu'à **~64 %** pour cinq tours — des chiffres relayés par les plateformes elles-mêmes, que nous n'avons pas pu recouper auprès d'une source indépendante. Mathématiquement, c'est l'écart entre le dividende capté (11,5 à 12 %) et le coût d'emprunt sur Morpho, multiplié par le levier.` }
    ],
  },
  {
    id: "ii-2-le-crash-test-de-juin-2026",
    titre: `II.2 Le crash-test de juin 2026`, blocs: [
      { type: "p", texte: `En juin 2026, le STRC a signé sa plus forte baisse sous le pair jamais enregistrée. Or tout le montage qu'on vient de décrire repose sur une condition tacite : que le STRC reste collé à ses 100 $. Les actions **STRC** couvrent l'**\`apxUSD\`**, qui garantit l'**\`apyUSD\`**, sur lequel est bâti le **PT** — que le premier maillon cède, et tout ce qui pend au bout perd de la valeur. On va donc remonter l'édifice étage par étage, avec deux questions à chaque fois : qu'est-ce qui a cédé, et **pourquoi** le protocole était réglé comme il l'était.` },
      { type: "figure", id: 6, titre: `L'édifice complet`, legende: `Cinq étages empilés sur une même fondation, le STRC. Quand elle cède, la fissure remonte : chaque étage hérite de la décote du dessous.` },
      { type: "def", terme: `Dépeg du wrapper`, texte: `Le décrochage entre un jeton et la valeur qu'il est censé représenter. Le jeton n'est qu'une créance sur l'actif du dessous — si cet actif perd de la valeur, ou si les acheteurs disparaissent, le jeton décroche. C'est arrivé en juin 2026 : l'\`apxUSD\`, censé valoir 1 $, est tombé à **0,90 $** dans le sillage du STRC.` }
    ],
  },
  {
    id: "a-le-stablecoin-l-apxusd-a-decroche-et-il-n-est-pas-remonte",
    titre: `A. Le stablecoin — l'\`apxUSD\` a décroché, et il n'est pas remonté`, blocs: [
      { type: "p", texte: `L'\`apxUSD\` est le maillon exposé en premier, puisque c'est lui que le STRC est censé couvrir. Début juin, sur le marché secondaire, il est tombé jusqu'à **0,90 $**. Apyx a absorbé la vague de rachats qui a suivi en restant solvable — sur ce point, le mécanisme a tenu.` },
      { type: "p", texte: `Ce qui distingue cet épisode de tous les précédents, c'est qu'il ne s'est pas refermé. Le STRC était déjà passé **plusieurs fois** sous 95 $ depuis juillet 2025, et à chaque fois le dividende l'avait ramené vers 100 $, entraînant l'\`apxUSD\` avec lui. Cette fois, non : un mois plus tard, en juillet 2026, l'\`apxUSD\` traite toujours autour de **0,88–0,92 $**, parce que le STRC lui-même reste en dessous de 100 $. [à vérifier le jour de la publication]` },
      { type: "figure", id: 7, titre: `Un an de STRC sous tension`, legende: `Après plusieurs alertes résorbées, le décrochage de juin 2026 n'est pas revenu : plancher historique à 71,25 $ le 26 juin, près de 29 % sous le pair.` },
      { type: "p", texte: `C'est toutefois cohérent avec sa construction. L'\`apxUSD\` est le stablecoin **de base**, non rémunéré — le rendement, c'est l'\`apyUSD\`, sa version épargne, qui le capte. L'\`apxUSD\` n'est pas fait pour défendre 1 $ coûte que coûte : il **reflète la valeur de son panier de collatéral**, aujourd'hui bourré de STRC. Quand ce panier baisse, l'\`apxUSD\` baisse avec lui ; la poche de cash amortit le mouvement, sans l'annuler. Tant que le STRC ne remonte pas, il n'y a aucune raison mécanique que l'\`apxUSD\` revienne à 1 $.` },
      { type: "p", texte: `**Le contraste avec Saturn**` },
      { type: "p", texte: `Saturn Credit, le concurrent direct avec son USDat, **n'a pas décroché** pendant le même épisode. Ce n'est pas une meilleure gestion de crise, c'est un choix de construction. Son stablecoin dollar de base, l'\`USDat\`, est adossé à des **bons du Trésor**, pas au STRC (Bitget News, Chainlink). L'exposition au STRC est rangée à part, dans le jeton staké \`sUSDat\`, celui que l'on choisit explicitement pour aller chercher le rendement et le risque associé.` },
      { type: "p", texte: `La leçon : **tout se décide à la construction — par quoi le stablecoin de base et le yield bearing token sont backés.** Chez Apyx, le stablecoin de base est backé par le STRC : il décroche avec lui. Chez Saturn, l'\`USDat\` est backé par des bons du Trésor, et l'exposition au STRC est réservée au yield bearing token, le \`sUSDat\` : le stablecoin de base ne bouge pas.` },
      { type: "figure", id: 8, titre: `Deux « dollars » dans la même tempête`, legende: `Deux « dollars » dans la même tempête : l'apxUSD, adossé au STRC, décroche ; l'USDat, adossé à des bons du Trésor, ne bouge pas.` },
      { type: "p", texte: `**Pour aller plus loin : pourquoi les rachats ont coté sous la valeur affichée.**` },
      { type: "p", texte: `Prenons un porteur d'\`apxUSD\` qui, au plus fort du stress de début juin, veut sortir — non pas en revendant son jeton sur le marché, mais en le rendant directement à Apyx contre son collatéral. Sur le tableau de bord du protocole, la valeur de la réserve (le NAV) lui indique que son jeton est couvert à hauteur d'environ 1 $. Mais quand il lance sa demande de rachat, le prix que lui propose le protocole est **plus bas** que cette valeur affichée. Deux chiffres, pour le même jeton, au même instant : d'où l'incompréhension. Ce n'était pas un bug — Apyx cotait ses rachats **sous le NAV, délibérément**, pour une raison précise, qu'il détaille dans son post-mortem sous le nom de « free put option ».` },
      { type: "def", terme: `Free put option`, texte: `Un stablecoin sur-collatéralisé garde un coussin de réserve au-dessus de sa valeur affichée. Si le protocole rembourse toujours à cette valeur affichée pendant un décrochage, le premier à sortir réalise une opération sans risque. Exemple chiffré donné par Apyx : le panier tombe à **0,98 $**, mais le coussin maintient la valeur affichée à **1 $**. Un porteur rachète alors son \`apxUSD\` à 1 $ et empoche **2 %**. Ces 2 % sortent du coussin de sur-collatéralisation — donc ils sont pris à ceux qui restent. Répété à chaque secousse, le coussin se vide.` },
      { type: "p", texte: `Coter les rachats sous la valeur affichée permet d'éviter cette fuite. On l'a constaté en juin : la vague de rachats a été absorbée **sans que le coussin soit vidé**, alors que lors des épisodes précédents il fondait à chaque secousse, siphonné par les premiers sortis. Le correctif **Apyx 2.0** rend l'affichage cohérent avec cette pratique, en séparant deux métriques :` },
      { type: "liste", items: [`**La Redemption Value** — le prix auquel se font tous les mint et rachats, en calme comme en crise ; elle suit le panier.`, `**La Total Collateral Value** (elle remplace le NAV) — la valeur totale de la réserve, coussin inclus. L'écart entre les deux, c'est le coussin, désormais **visible par tous**.`] },
      { type: "p", texte: `Comme les rachats se font à la Redemption Value et non contre le coussin, le problème disparaît. Le rachat direct auprès du protocole, à la Redemption Value, reste ouvert à tous — c'est le plancher. Apyx ajoute par-dessus le **RFQ** (*Request for Quote*) : plutôt que d'accepter ce plancher, le porteur peut soumettre sa demande de rachat à des contreparties agréées, qui proposent chacune un prix en concurrence — il retient la meilleure offre, forcément au-dessus du plancher.` },
      { type: "p", texte: `**« Mais alors, à quoi sert le coussin, si ce n'est pas à protéger en cas de coup dur ? »**` },
      { type: "p", texte: `La question est légitime, et la réponse tient dans une distinction : le coussin protège toujours — mais contre les **pertes**, pas contre les **sorties**. Deux situations se ressemblent et n'ont pourtant rien à voir :` },
      { type: "liste", items: [`**Une baisse temporaire de marché** (le cas de juin). Le panier cote 0,98 $ au lieu de 1 $, mais rien n'est perdu : les actions sont toujours là, le dividende tombe toujours. Rembourser à 1 $ dans ce cas, ce n'est pas protéger le porteur — c'est prélever 2 cents sur le coussin pour les remettre à celui qui part, en pariant à sa place que le prix remontera. C'est ce biais-là qu'Apyx a coupé.`, `**Une perte réelle et durable.** Strategy suspend le dividende du STRC, ou le protocole doit brader ses actions pour honorer une vague de rachats. Là, de la valeur a bel et bien disparu — et c'est précisément ce que le coussin encaisse, en premier, avant les porteurs.`] },
      { type: "p", texte: `C'est le rôle des fonds propres d'un assureur : ils sont là pour payer les sinistres réels, pas pour offrir un meilleur prix de sortie à ceux qui résilient pendant la tempête. Le coussin protège donc bien « en cas de complication » — mais il protège **ceux qui restent** (leur plancher de valeur), pas **ceux qui sortent** (leur prix de sortie). L'ancien système faisait l'inverse : il finançait le prix de sortie des premiers partis.` },
      { type: "p", texte: `**Ce que ce choix change vraiment : un « dollar » qui assume d'être une part de fonds.**` },
      { type: "p", texte: `Coter les rachats à la valeur réelle du panier n'est pas un ajustement technique, c'est un changement de nature. On passe d'une logique de **dépôt bancaire** — *ton jeton vaut 1 $, quoi qu'il arrive* — à une logique de **part de fonds** — *ton jeton vaut ce que vaut la réserve*. La finance traditionnelle a fait exactement ce chemin après 2008. Les régulateurs ont poussé les fonds monétaires de la **valeur constante** — dite CNAV, qui affiche un prix fixe et fabrique des ruées, le premier sorti récupérant 1 $ plein pendant que le fonds se vide — vers la **valeur variable** et le **swing pricing**, où celui qui sort paie le coût de sa propre sortie au lieu de le faire porter à ceux qui restent. Apyx a, en somme, réinventé le swing pricing en version on-chain.` },
      { type: "p", texte: `Les gains sont réels :` },
      { type: "liste", items: [`**Il tue le moteur du bank run.** Une ruée se nourrit d'une asymétrie : sortir tôt rapporte plus que rester. Au rachat à la valeur réelle, cette prime de panique disparaît — le premier et le dernier sorti obtiennent le même prix. Un mécanisme testé grandeur nature en juin.`, `**Le coussin peut enfin croître à travers les crises.** N'étant plus siphonné par les premiers sortis, il reste entier pour ce à quoi il sert vraiment — absorber les pertes réelles.`, `**Il décourage les attaques.** Fabriquer du stress — vendre du STRC pour déclencher une vague de rachats — n'offre plus de profit garanti, puisqu'il n'y a plus de 1 $ plein à capter en sortie.`, `**Il rend la confiance vérifiable.** Le prix de rachat suit un panier réel et le coussin est affiché pour tous (la Total Collateral Value) : on ne demande plus de croire une promesse, on peut lire l'état de la réserve.`] },
      { type: "p", texte: `Mais le choix a un coût structurel, et plusieurs angles morts :` },
      { type: "liste", items: [`**Ce n'est plus un stablecoin au sens fort.** Le rachat à 1 $ exactement est précisément le mécanisme qui force le retour au pair chez un USDC ou un USDT : dès que le prix s'écarte, l'arbitrage le referme. En cotant à la valeur du panier, Apyx renonce à cette ancre — rien ne ramène mécaniquement l'\`apxUSD\` à 1 $. C'est ce qu'on observe : un mois sous le pair sans repeg. **La solvabilité a été achetée au prix de la stabilité.**`, `**Le stress se déplace vers le marché secondaire.** Si le rachat direct « cote juste », ceux qui veulent sortir vite passent par le marché — et la décote y devient publique et durable. Tout ce qui lit ensuite ce prix le répercute, à commencer par les marchés de prêt où l'\`apxUSD\` (ou un PT qui en dépend) sert de collatéral.`, `**Le juge reste partie.** Qui calcule la Redemption Value ? Apyx lui-même. En juin, la cotation sous le NAV était discrétionnaire et opaque — c'est elle qui a nourri l'incompréhension décrite plus haut. Le 2.0 formalise la métrique, mais le protocole garde un intérêt à coter bas pendant le stress : sous-coter de trop spolie les sortants, coter trop haut rouvre le drain. Et la frontière entre baisse temporaire et perte durable est floue — juin le prouve : un mois sous le pair sans repeg, est-ce temporaire ou durable ? Personne ne le sait encore, et c'est Apyx qui tranche, via son calcul de la Redemption Value.`, `**Le coussin visible peut devenir un point de panique** — et là, c'est **notre hypothèse**, pas un constat. Rendre public l'écart entre Total Collateral Value et Redemption Value en fait un indicateur suivi de tous ; s'il fondait vers zéro sous les yeux du marché, cette transparence même pourrait déclencher la sortie qu'elle était censée prévenir.`] },
      { type: "def", terme: `Le trilemme du « dollar » adossé à un actif risqué`, texte: `Au fond, un « dollar » adossé à un actif risqué doit choisir entre trois cases, sans pouvoir les cumuler :
1. **Promettre 1 $** coûte que coûte — et fabriquer une ruée le jour où le panier ne vaut plus 1 $. C'était Apyx avant son correctif, remboursant au 1 $ affiché pendant que le coussin se vidait — et, en version extrême, le Terra/UST de 2022, mort d'une ruée en une semaine.
2. **Coter la vraie valeur** du panier — et assumer de flotter, sans ancre qui ramène au pair. C'est le choix d'Apyx depuis son correctif.
3. **Ne pas backer le stablecoin de base par l'actif risqué** — le réserver au yield bearing token. C'est le choix de Saturn, décrit plus haut.` },
      { type: "p", texte: `Juin 2026 a mis les trois cases à l'épreuve en même temps — ce qui est rare.` }
    ],
  },
  {
    id: "b-le-pt-sur-pendle-ce-que-vaut-vraiment-un-rendement-fige-qu",
    titre: `B. Le PT sur Pendle — ce que vaut vraiment un « rendement figé » quand le sous-jacent décroche`, blocs: [
      { type: "p", texte: `Pour rappel, le loopeur a acheté un **PT-apyUSD** sur Pendle : il a échangé son \`apyUSD\` contre un jeton qui lui rendra un montant connu d'avance à une échéance fixe — le 18 juin 2026 pour la série qui nous intéresse. C'est le geste qui « fige le rendement » : au lieu d'un taux qui flotte, il achète un remboursement daté. À l'échéance, ce remboursement se fait en \`apxUSD\` pour le montant déposé auquel s'ajoute le gain fixé lors de l'achat du PT.` },
      { type: "p", texte: `La question, quand le STRC décroche, est simple : **combien vaut ce PT entre-temps, sur le marché ?** Et surtout, sa valeur dépend-elle vraiment de l'\`apxUSD\` en dessous ? Pour y répondre, il faut d'abord comprendre comment se forme le prix d'un PT sur Pendle.` },
      { type: "p", texte: `**Comment se fixe le prix d'un PT.**` },
      { type: "p", texte: `Le plus simple est de repartir de ce que fait Pendle : **séparer la possession du rendement**. Un \`apyUSD\` contient les deux — le capital, et le flux de dividende qu'il produit. Pendle le découpe en deux jetons vendables séparément : le **PT**, c'est la possession (remboursée en plein à l'échéance, mais qui ne verse rien entre-temps) ; le **YT**, c'est le rendement (tout le flux jusqu'à l'échéance, puis plus rien). Le droit français a un mot pour ce découpage : le PT est la **nue-propriété** du dépôt, le YT son **usufruit**.` },
      { type: "p", texte: `Ces deux jetons s'échangent ensuite sur le marché de Pendle, où le prix se règle par l'offre et la demande (les échanges passent par une réserve de liquidité commune — un AMM — complétée par un carnet d'ordres à cours limité). Ce qui compte pour la suite : Pendle est une **place d'échange**, pas une place de prêt. Il n'existe **aucun mécanisme de liquidation** à ce niveau : personne n'est forcé de vendre. Quand les détenteurs de PT se ruent vers la sortie, ce qui se produit, c'est une **décote** (le PT se brade) et une **fuite de liquidité** (les apporteurs retirent leurs fonds) — pas une vente forcée.` },
      { type: "p", texte: `Le prix d'un PT en dollars se décompose en **deux composantes** qu'il faut bien séparer :` },
      { type: "liste", items: [`**La décote de taux.** Le PT promet un remboursement *plus tard* (à l'échéance) ; on l'achète donc *aujourd'hui* un peu moins cher que ce qu'il rendra. Cet écart, c'est le rendement fixe de l'opération, exprimé sur Pendle en **taux implicite**. Ce prix vit ensuite sa vie sur le marché secondaire, au gré de l'offre et de la demande — et pas seulement celle du PT : PT et YT s'échangent dans **le même pool**, donc acheter du YT pousse le prix du PT vers le bas, en vendre le pousse vers le haut. Mais ces variations ne concernent que celui qui **revend son PT avant l'échéance**, ou qui trade les PT. Une fois acheté, le rendement est **fixe, à condition de garder le PT jusqu'à l'échéance** : plus elle approche, plus le prix **converge mécaniquement** vers sa valeur de rachat à l'échéance, jusqu'à la rejoindre le jour du remboursement.`, `**La valeur en dollars du jeton de rachat.** À l'échéance, le PT donne droit à une quantité fixe d'\`apxUSD\`. Mais si cet \`apxUSD\` ne vaut plus 1 $, la valeur en dollars du PT baisse d'autant. Cette composante-là n'a rien à voir avec Pendle — sur Pendle, tout est libellé en \`apxUSD\`, le dollar n'existe pas dans ce marché. C'est une **conversion**, pas un échange.`] },
      { type: "p", texte: `La formule tient en une ligne : **prix du PT en dollars = prix Pendle du PT (en \`apxUSD\`) × prix de l'\`apxUSD\` (en dollars)**. Un exemple chiffré : un PT à cinq mois de l'échéance cote 0,965 \`apxUSD\` sur Pendle. Avec un \`apxUSD\` à 1 $, il vaut 0,965 $. Si l'\`apxUSD\` tombe à 0,90 $, le PT cote **toujours 0,965 \`apxUSD\`** — rien n'a bougé sur Pendle — mais il ne vaut plus que ~0,87 $.` },
      { type: "p", texte: `**Ce qui s'est passé en juin, chiffres à l'appui.**` },
      { type: "p", texte: `Début juin, le STRC décroche et entraîne l'\`apxUSD\` vers 0,90 $, chacun réagit selon sa position. Les **loopeurs** cherchent à couper leur levier avant d'être liquidés — et pour rembourser une dette en USDC, on revend ses PT : c'est la **vente directe de PT** qui domine le mouvement. Les **apporteurs de liquidité**, eux, retirent leurs fonds pour ne pas rester en face des vendeurs. Sur le pool du PT-apyUSD à échéance 18 juin :` },
      { type: "liste", items: [`la liquidité est passée de **13,7 M$** le 1er juin à **8,6 M$** le 5 juin, soit **−37 %** en quatre jours ;`, `le prix du PT, lui, a baissé sous le poids de ces ventes — vendeurs plus nombreux qu'acheteurs sur un marché étroit. Le montant remboursé à l'échéance ne change pas, donc plus le PT s'achète bas, plus le rendement est grand pour celui qui achète à ce moment-là : **un prix qui baisse, c'est un rendement qui monte**. Il a bondi de **21 % à 31 %** sur la période. (Pour rappel, ce rendement est exprimé en \`apxUSD\` : le chiffre ne prend pas en compte la baisse de l'\`apxUSD\`.)`] },
      { type: "figure", id: 9, titre: `Le pool Pendle pendant la première semaine de juin`, legende: `En quatre jours, la liquidité du pool fond de 37 % et le rendement affiché du PT bondit — non parce qu'il rapporte plus, mais parce qu'il se brade.` },
      { type: "p", texte: `Ce bond du taux implicite fait peur sur le papier, mais **à deux semaines de l'échéance, il ne pèse presque rien sur le prix** : passer de 21 % à 31 % de taux annualisé sur les treize jours restants ne représente qu'environ **−0,3 %** de prix. Il faut alors être précis sur les unités, parce que tout se joue là. **Sur Pendle, en \`apxUSD\`, le PT n'a presque pas bougé** : l'offre et la demande de PT et de YT sont les seules forces qui fixent ce prix-là, et malgré les ventes, elles n'ont produit que ce −0,3 %. Ce qui a chuté, c'est la **valeur en dollars** de ce même PT — et elle ne se joue pas sur Pendle : le PT est une créance sur une quantité fixe d'\`apxUSD\`, donc en dollars, il vaut ce que valent ces \`apxUSD\`. Chaque jeton promis valant ~0,90 $ au lieu de 1 $, la créance a perdu ~10 % — sans qu'un seul échange sur Pendle n'y soit pour quelque chose.` },
      { type: "def", terme: `Ce que « le PT a tenu » veut vraiment dire`, texte: `Le PT se rachète **1 pour 1 en \`apxUSD\`** à son échéance, quelle que soit la décote temporaire du secondaire. Mais **1:1 en \`apxUSD\` n'est pas 1:1 en dollars**, puisque l'\`apxUSD\` vaut lui-même ~0,90 $. Celui qui avait figé son rendement en PT a récupéré ses \`apxUSD\` comme promis — et hérité de leur décote. Le PT a parfaitement tenu **par rapport à un jeton qui, lui, n'a pas tenu**.` },
      { type: "p", texte: `Un dernier point, pour éviter une confusion de lecture. Sur Pendle, aujourd'hui, un PT-apyUSD cote **autour de 0,86 $** [à vérifier le jour de la publication] — ce prix n'est pas celui de la série du 18 juin. Celle-ci est arrivée à échéance — elle ne s'échange plus, chaque PT a été remboursé 1 pour 1 en \`apxUSD\`, soit ~0,88 à 0,92 $ au cours actuel [à vérifier le jour de la publication]. Le 0,86 $ affiché appartient au PT-apyUSD à échéance du **5 novembre**, qui a encore cinq mois à courir. Son prix se lit avec les deux composantes vues plus haut : la valeur de l'\`apxUSD\` qu'elle remboursera (~0,89 $), moins une décote de taux étalée sur les cinq mois restants.` },
      { type: "p", texte: `Une chose compte pour la suite. Ce prix affiché sur Pendle — décote comprise — **n'est pas exactement le chiffre que Morpho regarde** pour décider de liquider une position. Et c'est précisément à ce décalage que se joue l'étage suivant.` }
    ],
  },
  {
    id: "c-les-liquidations-sur-morpho-la-chaine-complete-du-strc-au-",
    titre: `C. Les liquidations sur Morpho — la chaîne complète, du STRC au seuil de 86 % — étude du sort du PT-apyUSD`, blocs: [
      { type: "p", texte: `Il y a une autre partie à analyser ensuite : que se passe-t-il à l'échelle du protocole de lending qui permet de réaliser le levier — en l'occurrence ici, Morpho ? Rappelons le montage, parce que tout en découle. Le loopeur a pris son **PT-apyUSD** (le jeton de rendement figé de l'étage 2) et l'a **déposé en collatéral sur Morpho**, une place de prêt. Contre ce collatéral, il a **emprunté de l'USDC** — de vrais dollars — qu'il a réinjectés dans la boucle pour racheter encore du rendement. C'est le marché vedette du looping apyUSD : collatéral **PT-apyUSD**, dette **USDC**. Cette stratégie était très prisée des loopeurs avant la chute du STRC de début juin car elle offre un rendement élevé.` },
      { type: "p", texte: `**Comment Morpho décide de liquider.**` },
      { type: "p", texte: `Une position sur Morpho tient tant que la dette reste couverte par le collatéral. Le protocole compare donc en permanence deux nombres : d'un côté la **dette** (ici, le montant d'USDC emprunté), de l'autre la **valeur du collatéral estimée par son oracle** (ici le PT-apyUSD). Quand le rapport dette/valeur franchit un seuil — le **LLTV**, fixé ici à **86 %** —, la position est liquidée : le protocole vend le collatéral pour rembourser le prêt.` },
      { type: "p", texte: `Le mot important est *estimée par son oracle*. Morpho ne regarde pas le prix affiché sur Pendle : il consulte **sa propre source de prix**, réglée à la création du marché. Et cette source ne fonctionne pas comme on pourrait le croire.` },
      { type: "p", texte: `**L'oracle du marché vedette, et lequel de ses deux taux a bougé.**` },
      { type: "p", texte: `L'oracle de ce marché \`PT-apyUSD / USDC\` ne lit pas un prix unique : il **se base sur deux taux de change, multipliés l'un par l'autre** :` },
      { type: "liste", items: [`**Taux n°1 — le PT-apyUSD exprimé en \`apxUSD\`.** Il traduit le prix du PT via une **moyenne lissée dans le temps** (un TWAP) du taux implicite du pool. Volontairement, il ignore les à-coups de très court terme.`, `**Taux n°2 — l'\`apxUSD\` en dollars.** Une valeur de type NAV publiée par Apyx — lissée et plafonnée par prudence : un oracle de prêt préfère sous-estimer le collatéral (l'emprunteur est liquidé un peu tôt) que le surestimer (les prêteurs héritent de bad debt) — qui dit combien vaut réellement un \`apxUSD\` en dollars : autour de **0,86** pendant l'épisode. (Même chiffre que le prix du PT-5NOV croisé en partie B — pure coïncidence : là c'était le prix en dollars d'un PT, ici c'est la valeur en dollars d'un \`apxUSD\`.)`] },
      { type: "p", texte: `Mis bout à bout : valeur du collatéral = nombre de PT × (taux n°1 : PT→\`apxUSD\`) × (taux n°2 : \`apxUSD\`→$), le tout comparé à l'USDC de la dette. Quand le STRC a chuté, **c'est le taux n°2 qui a bougé** — l'\`apxUSD\` valant moins de dollars — pendant que le taux n°1 (le prix Pendle du PT) restait quasi immobile, à ~−0,3 % comme on l'a vu en partie B. Le décrochage arrive donc par le bas, par le collatéral fondamental, pas par le marché Pendle.` },
      { type: "p", texte: `**La chaîne, étape par étape.**` },
      { type: "p", texte: `Voici comment la baisse du STRC remonte jusqu'à la liquidation :` },
      { type: "listenum", items: [`**La position.** Le loopeur a du PT-apyUSD en collatéral et une dette en USDC. Morpho surveille en continu le rapport entre les deux, en valorisant le collatéral avec son oracle.`, `**Le calcul de l'oracle.** Valeur du collatéral = nombre de PT × [taux n°1 : le prix d'un PT-apyUSD **exprimé en \`apxUSD\`** — le prix Pendle lissé par le TWAP, ~0,965 dans notre exemple] × [taux n°2 : la valeur d'un \`apxUSD\` **en dollars** — le ratio Apyx, ~0,86]. Pour 100 000 PT déposés : 100 000 × 0,965 × 0,86 ≈ 83 000 $ de collatéral aux yeux de Morpho.`, `**Le STRC baisse.** Le panier d'Apyx est bourré de STRC ; il vaut donc moins. Le taux \`apxUSD\`→dollars baisse. C'est **lui** qui entraîne tout — le taux PT n'a presque pas joué.`, `**La dette, elle, ne bouge pas.** L'USDC reste dû au même montant. Collatéral revalorisé à la baisse face à une dette fixe : le rapport dette/collatéral franchit les 86 %, et la position est liquidée. Ce sont **les positions les plus leviées** — celles dont la marge de sécurité était la plus mince — qui sautent en premier.`, `**Pourquoi c'est resté ordonné.** Le taux \`apxUSD\`→dollars est une valeur de type NAV, **plus lente** que le prix de panique du marché secondaire — et même plus basse que lui (~0,86 contre ~0,90) : c'est le plafonnement prudent vu plus haut, qui préfère sous-estimer le collatéral plutôt que le surestimer. Les liquidations se sont donc enchaînées une par une, dans un ordre mécanique, sans partir en spirale — et sans laisser de **bad debt** (une dette que le collatéral liquidé ne suffit plus à rembourser).`, `**Le cas de la fin juin.** Le STRC s'enfonce alors jusqu'à son **plus-bas historique — 71,25 $ le 26 juin**, près de 29 % sous le pair. Le taux \`apxUSD\`→dollars tombe au plus bas, et **1,61 M$** sont liquidés sur le PT-**5NOV** — un PT qui n'arrive pourtant à échéance qu'en novembre, à plus de quatre mois de là. Preuve directe que ce qui liquide, c'est la **valeur en dollars de l'\`apxUSD\`**, pas le calendrier du PT.`] },
      { type: "p", texte: `**Ce que dit la blockchain, marché par marché.**` },
      { type: "p", texte: `En interrogeant directement Morpho (requête on-chain de la rédaction, API GraphQL Morpho, 13 juillet 2026), on obtient un total bien supérieur aux estimations relayées par la presse : **plus de 13 millions de dollars liquidés** sur les marchés exposés au STRC en juin, contre les ~4 M$ rapportés par Steakhouse Financial autour du 5 juin — un chiffre qui ne couvrait que le pic du premier jour sur une partie des marchés. Cette mesure de 13 M$ et sa répartition par marché sont une **mesure primaire** : nous n'avons pas trouvé de second dashboard public permettant de la recouper de façon indépendante.` },
      { type: "tableau", entetes: [`Marché (collatéral / dette)`, `Protocole`, `Liquidations`, `Montant`, `Bad debt`], lignes: [[`apyUSD / **USDC**`, `Apyx`, `62`, `**5,21 M$**`, `0`], [`PT-apyUSD-18JUN / **USDC**`, `Apyx`, `90`, `**4,26 M$**`, `~0`], [`PT-apyUSD-5NOV / **USDC**`, `Apyx`, `23`, `**1,61 M$**`, `0`], [`sUSDat / **AUSD**`, `Saturn`, `47`, `**1,93 M$**`, `0`], [`apyUSD / **apxUSD** (même monnaie)`, `Apyx`, `6`, `**0,076 M$**`, `0`]] },
      { type: "figure", id: 10, titre: `Les liquidations de juin, marché par marché`, legende: `Tous les marchés qui empruntaient de vrais dollars ont sauté ; celui qui empruntait la même monnaie que son collatéral est resté quasi intact.` },
      { type: "p", texte: `Le tableau dit deux choses.` },
      { type: "p", texte: `**Premier point : la monnaie de la dette décide de tout.**` },
      { type: "liste", items: [`**Les marchés en vrais dollars** (dette en USDC ou AUSD) ont tous sauté, y compris le plus gros marché de looping, le \`PT-apyUSD / USDC\`.`, `**Le marché en même monnaie**, \`apyUSD / apxUSD\`, est quasi épargné : quand \`apxUSD\` décroche, collatéral et dette perdent de la valeur *ensemble*, et le rapport entre les deux ne bouge pas — d'où **0,076 M$** liquidés seulement, contre des millions ailleurs.`] },
      { type: "p", texte: `**Second point : la bad debt est nulle partout.** Les positions ont été liquidées, mais à chaque fois le collatéral a suffi à couvrir la dette. Aucun prêteur ne s'est retrouvé avec une créance impossible à recouvrer. ` },
      { type: "p", texte: `**Qui règle l'oracle, et pour protéger qui.**` },
      { type: "p", texte: `Ce réglage — quel oracle sur quel marché — est choisi par le **curateur** qui liste le marché sur Morpho, **une fois pour toutes, à la création**. ` },
      { type: "p", texte: `Et ce choix protège d'abord une catégorie précise : les **prêteurs**. Un oracle aveugle au décrochage — qui croirait le collatéral à 1 $ alors qu'il en vaut 0,90 — ne déclencherait jamais de liquidation ; le jour où le collatéral ne couvre plus la dette, c'est le prêteur qui encaisse la perte. Pour l'**emprunteur** (le loopeur), le même oracle détermine le moment exact où sa position saute. Un seul réglage, deux camps aux intérêts opposés.` },
      { type: "def", terme: `Accorder l'oracle à la monnaie de la dette — étude des oracles de quelques marchés Morpho`, texte: `Le bon réglage dépend de ce qu'on emprunte :
• **Dette en \`apxUSD\` (même monnaie que le collatéral) - Marché apyUSD / apxUSD.** Ici, ce qui est réglé « en dur », ce n'est pas la valeur du collatéral : l'\`apyUSD\` déposé est bien évalué, via le **taux du vault** (\`apyUSD\`→\`apxUSD\`), qui ne fait que monter avec le dividende. C'est la conversion \`apxUSD\`→dollars qui est figée à 1 — et ce n'est pas une négligence : les deux côtés sont en \`apxUSD\`, il n'y a rien à convertir en dollars, et le rapport collatéral/dette ne bouge pas quand l'\`apxUSD\` décroche. La position est immunisée **contre le dépeg** — d'où les 0,076 M$ liquidés seulement sur ce type de marché. Les rares liquidations résiduelles relèvent d'un autre canal, qui ne doit rien au prix : sur Morpho, la dette grossit en continu avec les intérêts d'emprunt — une position déjà collée au seuil peut le franchir par simple accumulation d'intérêts.

Cette immunité a toutefois un angle mort. Ce taux est un **taux de rachat**, pas un prix de marché : le marché secondaire n'entre jamais dans son calcul (confirmé on-chain — ce marché n'a pas de second feed). Si le marché se mettait à douter de l'\`apyUSD\` lui-même — un problème propre au vault du protocole, sans que l'\`apxUSD\` soit touché — et le bradait sur le secondaire, l'oracle n'en verrait rien : aucune liquidation, et si le doute était fondé, la perte finirait chez les **prêteurs d'\`apxUSD\`**. Un oracle qui ignore le marché ignore la panique — c'est sa force — mais aussi les signaux d'alarme : si un exploit vidait réellement le vault, le taux de rachat officiel le refléterait-il ? 
• **Dette en USDC (vrais dollars).** Là, il **faut** un vrai prix de l'\`apxUSD\`. Sinon l'oracle le croit à 1 $ alors qu'il en vaut 0,90, ne liquide jamais, et laisse le prêteur seul face à la perte le jour où le collatéral ne couvre plus rien.` },
      { type: "p", texte: `Ce second scénario — un oracle figé à 1 $ sur une dette en vrais dollars — a un précédent : le dépeg de l'**USD0++** début 2025, où un oracle aveugle au décrochage avait laissé s'accumuler de la bad debt. Apyx l'a évité : ses marchés en USDC utilisaient un **vrai feed de prix** (le ratio Apyx du taux n°2), pas un « 1 $ » en dur. C'est exactement pour cette raison que juin a produit des liquidations **mais zéro bad debt**.` },
      { type: "p", texte: `**Ce que le stress a fait changer.**` },
      { type: "p", texte: `Sur les marchés en USDC — ceux du looping —, le pricing de l'\`apxUSD\` en dollars (le **taux n°2**) a d'ailleurs été rendu **plus dynamique** après l'épisode. Les marchés qui ont liquidé en juin lisaient la valeur lissée et semi-figée qu'on vient de voir (~0,86) : peu réactive à la panique de court terme, elle explique en partie le caractère ordonné des liquidations. Les marchés ouverts *après* l'épisode (les séries de PT d'août et de novembre) lisent un taux **vivant** (~0,89), qui suit le décrochage réel en continu : il liquide plus tôt et plus juste, au prix d'être plus sensible aux à-coups. La révision s'est accompagnée d'un relèvement du seuil d'emprunt : **LLTV porté à 91,5 %** sur les marchés de novembre, contre 86 % en juin.` },
      { type: "p", texte: `**La leçon.**` },
      { type: "p", texte: `Le zéro bad debt ne tient pas à la chance. Il tient au fait que la combinaison dangereuse — dette en USDC **et** oracle figé à 1 $ — n'a jamais été utilisée sur ces marchés. Le bon appariement oracle/dette a protégé les **prêteurs**. Il n'a protégé ni les **loopeurs**, liquidés pour plus de 4 M$ sur le seul marché vedette, ni les **porteurs d'\`apxUSD\`**, toujours à −10 %. Un bon design d'oracle évite l'effondrement systémique ; il n'annule pas la perte individuelle. Pour le déposant, la sûreté d'un « rendement stable » en DeFi se joue sur un choix technique qu'il ne voit jamais : l'oracle price-t-il le collatéral en vrais dollars, ou dans le même jeton bancal auquel il est déjà exposé ?` }
    ],
  },
  {
    id: "d-alors-gagne-ou-perdu",
    titre: `D. Alors, gagné ou perdu ?`, blocs: [
      { type: "p", texte: `Reste à répondre à la question que se pose le lecteur qui, un mois plus tôt, voyait s'afficher **64 % par an**.` },
      { type: "box", ton: "piege", titre: `64 %, mais en quoi ?`, texte: `Ce 64 % était un rendement **en \`apxUSD\`**, avec une hypothèse tacite — que l'\`apxUSD\` vaut 1 $. Il est tombé à 0,90 $ et n'est pas remonté. Le rendement n'était donc « en dollars » que tant que le jeton restait un dollar.` },
      { type: "p", texte: `Trois profils, trois issues :` },
      { type: "liste", items: [`**Le loopeur à levier** — celui qui empilait les boucles en empruntant de l'USDC — **a été liquidé**. Le levier a multiplié le rendement affiché à la hausse ; il a multiplié le décrochage à la baisse, dans les mêmes proportions. C'est mécaniquement lui, dont la marge de sécurité était la plus mince, qui saute en premier.`, `**Le porteur non levié**, qui détenait simplement de l'\`apyUSD\` ou du PT, **n'a pas été liquidé** — mais il a récupéré des \`apxUSD\` valant ~0,90 $. Il a gardé sa position, pas sa valeur.`, `**Celui qui empruntait dans la même monnaie** (collatéral \`apyUSD\`, dette \`apxUSD\`) **est passé à travers** — à quelques positions près, rattrapées par leurs intérêts d'emprunt. Mais son gain reste libellé en \`apxUSD\` : ramené en dollars, il est lui aussi à environ **−10 %**.`] },
      { type: "p", texte: `Le verdict est net. Personne, dans cet épisode, n'a réalisé un « 64 % en dollars ». Le survivant le mieux placé — celui qui avait choisi la même monnaie des deux côtés — a évité la liquidation, pas la décote. Un rendement à deux chiffres construit sur un jeton qui cesse d'être un dollar n'est pas un rendement en dollars : c'est un pari sur le fait qu'il le redeviendra. En juillet 2026, un mois plus tard, ce n'était toujours pas le cas.` },
      { type: "p", texte: `Ces choix de plomberie — la monnaie de la dette, le réglage de l'oracle, par quoi chaque jeton est backé — ne sont qu'une partie du tableau. Ils s'ajoutent à une série de risques propres à la DeFi, qu'il faut maintenant nommer un par un.` }
    ],
  },
  {
    id: "ii-3-les-risques-propres-a-la-defi",
    titre: `II.3 Les risques propres à la DeFi`, blocs: [
      { type: "p", texte: `Quatre risques se cumulent :` },
      { type: "liste", items: [`**La liquidation.** Dès qu'il y a levier, une baisse du collatéral peut forcer la vente de la position au pire moment. Plus le looping est agressif, plus la marge de sécurité est mince, et plus le seuil est proche.`, `**Le dépeg du wrapper.** Le jeton n'est pas l'actif : action tokenisée comme stablecoin adossé au STRC peuvent s'écarter de leur valeur théorique, et l'ont fait — l'\`apxUSD\` est descendu à 0,90 $.`, `**L'illiquidité.** Ces jetons s'échangent sur des marchés secondaires étroits. Le jour où tout le monde veut sortir, il n'y a pas assez d'acheteurs, ce qui amplifie le décrochage — et creuse l'écart entre le prix de marché et la valeur théorique.`, `**Le risque d'oracle.** Le plus discret, et pourtant décisif — la partie C vient de le montrer en détail : le réglage de l'oracle et la monnaie de la dette décident qui est liquidé, qui traverse, et qui hérite de la bad debt. Un paramètre choisi une fois pour toutes par le créateur du marché, invisible pour le déposant.`] },
      { type: "p", texte: `Ces montages ne sont pas des arnaques : ils tiennent, et rapportent, tant que le STRC tient son pair. Le problème est ailleurs : ils vendent de la **stabilité** sur un actif qui n'en offre aucune garantie, et celui qui achète un jeton nommé « USD » ignore le plus souvent qu'il détient, quatre couches plus bas, le dividende d'une société cotée qui emprunte pour acheter du bitcoin.` },
      { type: "p", texte: `Reste la question qui traverse tout le dossier : ce modèle, de la société cotée jusqu'à ses prolongements en DeFi, tient-il à long terme ? C'est l'objet du verdict.` }
    ],
  }
]  as DossierSection[],
      },
      {
        id: "verdict",
        titre: "Verdict",
        sections: [
        {
          id: "verdict-chapo",
          blocs: [
          { type: "p", texte: `Le modèle DAT n'est ni une arnaque ni une martingale. C'est une **structure de capital viable sous conditions** — et ces conditions ne sont pas les mêmes pour tous. La vraie question n'est pas « est-ce que ça marche ? » mais « pour qui, et tant que quoi tient ? ».` },
          { type: "p", texte: `Deux cas, à ne surtout pas confondre.` },
          { type: "p", texte: `**Strategy — et une poignée d'autres.** Une DAT qui sait monétiser son bilan — émettre au bon moment, arbitrer entre actions, préférentielles et dette, capter des flux passifs, exploiter un avantage fiscal — peut soutenir une prime durable. La prime s'est comprimée en 2026, l'accumulation est gelée, mais la machine existe : elle a de quoi tenir un marché baissier sans vendre son trésor sous la contrainte. Le modèle est réel.` },
          { type: "p", texte: `**La longue traîne des DAT passives.** La majorité des quelque 200 sociétés recensées n'ont pas de machine d'accumulation : elles ont levé une fois, acheté de la crypto, et la détiennent. Sans prime durable, leur cours n'a aucune raison de s'écarter de la valeur de leur trésor — il converge vers la NAV, souvent en dessous. Pour celles-là, l'estimation d'Architect Partners — environ la moitié disparues d'ici cinq ans — n'est pas du catastrophisme : c'est la conséquence arithmétique d'un coffre sans moteur.` }
          ],
        },
        {
          id: "ce-qui-fait-tenir-le-modele-ce-qui-le-casse",
          titre: `Ce qui fait tenir le modèle, ce qui le casse`, blocs: [
          { type: "p", texte: `Ce qui le fait tenir :` },
          { type: "liste", items: [`un **accès continu au capital** près du pair (le nerf de la guerre, plus que le prix de la crypto) ;`, `une **prime durablement au-dessus de 1** — et, pour financer des préférentielles, au-dessus du seuil de relution (~1,22x chez Strategy) ;`, `une **taille et une liquidité** suffisantes pour que la prime ne s'évapore pas au premier choc ;`, `un **vrai différenciateur** : rendement natif d'un actif stakable, métier opérationnel générateur de flux, avantage fiscal — quelque chose qui justifie un multiple, pas seulement un récit.`] },
          { type: "p", texte: `Ce qui le casse :` },
          { type: "liste", items: [`une **décote installée** (pas un passage ponctuel sous 1, mais des mois de mNAV < 1) ;`, `la **fermeture simultanée de plusieurs canaux** de financement — c'est la rupture du capital décrite en I.5, le seul vrai point de mort ;`, `l'**exclusion des indices**, qui renchérit le coût du capital sans tuer directement ;`, `un **surendettement à échéance fixe** face à un marché fermé le jour du remboursement.`] }
          ],
        },
        {
          id: "points-forts-points-faibles-signaux-d-alerte",
          titre: `Points forts, points faibles, signaux d'alerte`, blocs: [
          { type: "p", texte: `**Ce que le modèle apporte réellement.** Une exposition crypto amplifiée, logeable dans un compte-titres classique ; un accès aux marchés de capitaux qu'aucun particulier n'a ; et, chez les meilleurs, une ingénierie financière qui transforme la volatilité du bitcoin en crypto par action supplémentaire. Ce n'est pas rien, et ça explique cinq ans de surperformance.` },
          { type: "p", texte: `**Ce qui reste fragile.** Tout repose sur des primes qui doivent tenir **ensemble** — celle de l'action, la confiance dans les préférentielles, la croissance de la crypto sous-jacente. L'actionnaire ordinaire est le dernier servi et absorbe à la fois la volatilité et la dilution. Et le « bilan propre » n'est pas un blanc-seing : Strive, pourtant sans dette, se négocie avec une décote plus profonde encore que celle de Strategy — l'absence de mur d'échéances a été troquée contre une dépendance totale à un préférentiel plus coûteux.` },
          { type: "p", texte: `**Les signaux qu'un lecteur peut surveiller lui-même**, sans modèle compliqué :` },
          { type: "liste", items: [`une **mNAV qui s'installe sous 1** trimestre après trimestre — le signal le plus simple à suivre ;`, `une **réserve de cash qui fond** d'un trimestre à l'autre (la couverture des dividendes se réduit) ;`, `un **dividende préférentiel qu'il faut relever sans cesse** pour défendre le pair (le STRC passé de 9,00 % à 12,00 % en un an, en sept hausses = coût de la demande qui monte) ;`, `un **préférentiel qui décroche de son pair** (un STRC sous 100 $, un SATA qui s'écarte) — le canal d'émission se ferme de lui-même ;`, `un **recours croissant à la vente de crypto** pour honorer les engagements (la doctrine « on ne vend jamais » a déjà cédé en 2026 ; ce qui compte, c'est la dose).`] },
          { type: "p", texte: `Aucun de ces signaux n'est fatal isolément. C'est leur **accumulation** qui fait basculer une DAT de la volatilité survivable à la rupture.` }
          ],
        },
        {
          id: "le-mot-de-la-fin",
          titre: `Le mot de la fin`, blocs: [
          { type: "p", texte: `Une DAT ne se juge pas comme on regarde le prix du bitcoin — « ça monte, donc c'est bon ». L'essentiel se joue ailleurs : dans la prime, le financement et la couverture des dividendes. Et 2026 est le moment où cette théorie passe son premier vrai test — la flywheel qui tournait à la hausse tourne désormais à l'envers pour la plupart.` },
          { type: "p", texte: `Reste le prolongement qui concerne le plus directement un lecteur crypto : ce modèle ne vit plus seulement en bourse. Son rendement a été reconditionné en produits DeFi présentés comme des dollars « stables », et empilé sous des couches de levier. Qui s'y expose n'achète pas « un stablecoin » : il achète, quatre étages plus bas, le dividende d'une société cotée qui emprunte pour acheter du bitcoin — avec, en prime, un risque de liquidation qui dépend du paramétrage d'un oracle. C'est jouable et ça a rapporté ; mais c'est exactement l'inverse de ce que le mot « stable » laisse croire. Savoir dans quoi on met vraiment son argent, ici, ne relève pas du détail.` },
          { type: "p", texte: `*Ce contenu n'est pas un conseil en investissement.*` }
          ],
        },
        {
          id: "sources",
          titre: `Sources`, blocs: [
          { type: "p", texte: `Ce dossier s'appuie sur nos propres données, actualisées à juillet 2026, et sur une lecture croisée de plusieurs analyses indépendantes. Aucune n'en constitue le plan : elles nourrissent des points précis, signalés dans le texte.` },
          { type: "p", texte: `**Analyses de fond**` },
          { type: "liste", items: [`**OAK Research** — *Les Cryptos en 2026*, section « Strategy et les autres DATs » (cadre d'analyse du modèle, faux risque de liquidation).`, `**VanEck** (Matthew Sigel) — *Deconstructing Strategy: Premium, Leverage, and Capital Structure*.`, `**NYDIG** — analyses sur le glissement structurel des DATs et les limites de la mNAV.`, `**BitMEX Research** — seuil de relution (~1,22x).`, `**Steakhouse Financial** — post-mortem du décrochage DeFi de juin 2026 (oracles, liquidations).`] },
          { type: "p", texte: `**Presse et données**` },
          { type: "liste", items: [`**CoinDesk** — mNAV sous 1 (27 juin), préférentielles dépassant la dette convertible (22 janvier), métrique d'amplification, prix et taux du STRC.`, `**Architect Partners** (Elliot Chun) — estimation « ~la moitié des DATs disparues à cinq ans ».`, `**JPMorgan** — estimation des ventes forcées en cas d'exclusion des indices.`, `**Dylan LeClair** (Metaplanet) — sur l'effet des préférentielles sur les spreads de crédit.`, `**Communiqués Strategy et dépôts SEC** — réserve de trésorerie, ventes de bitcoin, plan « 42/42 », taux du STRC.`, `**DeFiLlama, mnav.com, bitcointreasuries.net, CoinGecko** — holdings, mNAV et rendements en direct.`] }
          ],
        }
        ],
      },
    ],
  },
];

export function getDossier(slug: string): Dossier | undefined {
  return DOSSIERS.find((d) => d.slug === slug);
}
