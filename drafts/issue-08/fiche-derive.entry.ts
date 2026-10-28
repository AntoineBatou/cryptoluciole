// ===== Entrée `derive` pour site/app/protocoles/protocols.ts =====
// Brouillon du Rédacteur (Mode B, 28/10/2026, boucle 2) — À INSÉRER par la session principale
// dans le tableau PROTOCOLES (après "papertrade"), APRÈS validation de Marc.
// Fact-check du 28/10/2026 appliqué (factcheck/2026-10-28-numero-08.md) : plus aucun marqueur.
// Sources : annonce V3 (insights.derive.xyz/v3), blog Derive (10/02/2026), forum Derive
// (DIP 303, 309, 313, 324, 329), L2Beat (28/10/2026), DeFiLlama (28/10/2026), presse V3
// (CoinInsider, TokenPost, CryptoBriefing) ; wiki de veille (OAK Research) comme liste de faits.

import type { ProtocoleFiche } from "./protocols";

export const DERIVE: ProtocoleFiche = {
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
};
