// GÉNÉRÉ par drafts/articles/convert_dossier.py depuis drafts/articles/metric/dossier.md — ne pas éditer à la main,
// modifier le markdown puis relancer le script.
import type { DossierPartie } from "./dossiers";

export const METRIC_PARTIES: DossierPartie[] = [
  {
    id: "introduction",
    titre: "Introduction — un DEX qui fixe le prix des pools via Oracle",
    sections: [
      {
        id: "introduction-chapo",
        blocs: [
          {
            type: "p",
            texte: "Metric est une plateforme d'échange décentralisée (un DEX) lancée publiquement le 15 octobre 2026. On y échange des cryptos (ETH, BNB, BTC, stablecoins), mais surtout des **actions tokenisées** : des jetons qui représentent des actions Apple, Nvidia, Tesla, SpaceX ou Meta, et qui s'échangent sur la blockchain.",
          },
          {
            type: "p",
            texte: "Sur Uniswap, une pool calcule son prix à partir de son propre stock de tokens. Sur Metric, la pool reçoit le prix du marché depuis l'extérieur, par un oracle (Pyth ou Chainlink par exemple), et se contente d'ajouter une petite marge autour. Pour une action dont le vrai prix se forme à la bourse de New York, l'idée tombe sous le sens.",
          },
          {
            type: "tableau",
            entetes: [
              "Fiche d'identité",
              "",
            ],
            lignes: [
              [
                "Lancement public",
                "15 octobre 2026, après une phase privée commencée en mars 2026",
              ],
              [
                "Blockchains",
                "Robinhood Chain, BNB Chain et Ethereum (plus quelques autres hors de l'app publique)",
              ],
              [
                "Taille",
                "~18 M$ déposés, ~5 Md$ échangés par mois",
              ],
              [
                "Spécialité",
                "les actions tokenisées : près des 2/3 des fonds déposés",
              ],
              [
                "Token",
                "aucun pour l'instant",
              ],
              [
                "Équipe",
                "peu connue : seul le cofondateur et CTO est identifié publiquement",
              ],
            ],
          },
          {
            type: "p",
            texte: "Trois types d'acteurs s'y croisent :",
          },
          {
            type: "liste",
            items: [
              "**les traders**, souvent sans le savoir : les agrégateurs (1inch, CoW Swap, 0x, PancakeSwap…) les envoient automatiquement vers Metric quand c'est le moins cher ;",
              "**les fournisseurs de liquidité (LP)**, qui déposent leurs tokens dans une pool et touchent une part de la marge payée par les traders ;",
              "**les curators**, en pratique des market makers, qui créent les pools et en fixent les règles : d'où vient le prix, quels frais, quelles protections.",
            ],
          },
          {
            type: "box",
            ton: "essentiel",
            items: [
              "Les pools suivent un oracle au lieu de calculer leur prix. Quand le marché bouge, elles se recalent seules : contrairement à Uniswap, le LP ne se fait plus vider par les arbitrageurs à chaque mouvement.",
              "Le revenu du LP est une toute petite marge (~0,01 à 0,03 % sur les grosses pools), cachée dans le prix : il n'y a pas de frais affiché.",
              "Le risque change de place. Il vient de la qualité de l'oracle et des traders mieux informés que lui (la « sélection adverse »). Sur les grosses pools, environ 60 % de la marge gagnée a été reperdue ensuite.",
              "Le protocole est très jeune et très concentré : public depuis deux semaines, avec 96 % des fonds dans les pools de deux market makers, dont un anonyme.",
              "Pas de token, donc pas de rendement subventionné. Un programme de parrainage aux règles floues entretient toutefois une attente d'airdrop.",
            ],
          },
          {
            type: "p",
            texte: "Notre dossier se compose de deux parties. La **première** démonte la mécanique : le problème que Metric veut régler, la vie d'un trade, la grille de liquidité, ce que gagne et ce que risque un LP, et qui fixe le prix. La **seconde** passe le protocole aux chiffres : une pool réelle à la loupe, la croissance, la concentration, la comparaison avec Uniswap et le modèle économique. Le verdict vient à la fin.",
          },
          {
            type: "p",
            texte: "*Ce dossier n'est pas un conseil en investissement. Les chiffres sont arrêtés au 30 octobre 2026 ; la méthode et les sources sont détaillées à la fin.*",
          },
        ],
      },
    ],
  },
  {
    id: "partie-1",
    bandeau: "PARTIE I — La mécanique",
    sections: [
      {
        id: "i-1-le-probleme-sur-un-amm-classique-la-pool-est-toujours-en",
        titre: "I.1 Le problème : sur un AMM classique, la pool est toujours en retard",
        blocs: [
          {
            type: "p",
            texte: "Prenons une pool Uniswap v2 qui contient 10 ETH et 20 000 USDC. Son prix, c'est le rapport entre ses deux stocks : 20 000 ÷ 10 = 2 000 $ l'ETH. Elle ne regarde rien d'autre.",
          },
          {
            type: "p",
            texte: "Sur Binance, l'ETH passe d'un coup à 2 200 $. La pool, elle, affiche toujours 2 000 $, puisque personne n'y a encore tradé.",
          },
          {
            type: "p",
            texte: "Un arbitrageur en profite : il achète 0,465 ETH à la pool pour 976 USDC, soit environ 2 098 $ l'unité, et les revend 1 024 $ sur Binance. Il empoche 48 $. Ces 48 $ sortent de la poche du LP, qui a vendu son ETH sous le prix du marché.",
          },
          {
            type: "def",
            terme: "LVR (loss-versus-rebalancing), rappel",
            texte: "Ce que perd un LP parce que sa pool traite à un prix en retard sur le marché. On le mesure en comparant le LP à quelqu'un qui aurait fait exactement les mêmes échanges, mais au vrai prix du marché. Contrairement à l'impermanent loss, la LVR s'additionne à chaque mouvement et ne revient jamais à zéro.",
          },
          {
            type: "box",
            ton: "exemple",
            titre: "L'aller-retour qui ne coûte rien en IL, mais 93 $ en LVR",
            texte: "L'ETH redescend ensuite à 2 000 $. L'arbitrageur fait l'opération inverse : il revend ses 0,465 ETH à la pool contre 976 USDC, alors qu'ils ne valent plus que 930 $ sur le marché. Il empoche 45 $ de plus.\nLa pool retrouve exactement 10 ETH et 20 000 USDC : l'impermanent loss revient à 0.\nLa LVR, elle, vaut 48 + 45 = 93 $ : c'est ce qu'aurait gagné quelqu'un qui aurait vendu à 2 200 $ puis racheté à 2 000 $. Le LP a fait les mêmes échanges, mais aux mauvais prix, et termine à 0.",
          },
          {
            type: "p",
            texte: "Dit simplement : sur un AMM classique, les frais payés par les traders doivent d'abord rembourser ce que les arbitrageurs prennent au LP à chaque mouvement du marché. Tout ce qui suit part de ce constat.",
          },
        ],
      },
      {
        id: "i-2-l-idee-de-metric-et-la-vie-d-un-trade",
        titre: "I.2 L'idée de Metric, et la vie d'un trade",
        blocs: [
          {
            type: "st",
            texte: "Une pool qui reçoit son prix",
          },
          {
            type: "p",
            texte: "Une pool Metric ne cherche pas son prix : elle le reçoit d'un contrat appelé **Price Provider**, qui lui transmet à chaque instant trois prix.",
          },
          {
            type: "tableau",
            entetes: [
              "Prix",
              "Rôle",
              "Exemple ETH",
            ],
            lignes: [
              [
                "Référence",
                "le « juste prix », le centre de la grille",
                "2 000 $",
              ],
              [
                "Ask",
                "le prix auquel la pool **vend** l'ETH",
                "2 000,40 $",
              ],
              [
                "Bid",
                "le prix auquel la pool **achète** l'ETH",
                "1 999,60 $",
              ],
            ],
          },
          {
            type: "p",
            texte: "L'écart entre la référence et l'ask (ou le bid) s'appelle le **demi-spread** : ici 0,40 $, soit 0,02 %, l'ordre de grandeur observé sur les grosses pools. C'est lui qui rémunère les LP.",
          },
          {
            type: "def",
            terme: "Oracle",
            texte: "Un service qui publie sur la blockchain un prix venu de l'extérieur (Binance, Coinbase, la bourse de New York…). Pyth et Chainlink sont les deux plus utilisés.",
            slug: "oracle",
          },
          {
            type: "st",
            texte: "La vie d'un trade, étape par étape",
          },
          {
            type: "listenum",
            items: [
              "Tu veux acheter 1 ETH sur 1inch. L'agrégateur interroge tous les DEX qu'il connaît, dont Metric.",
              "La pool Metric ETH/USDC cote à l'ask : 2 000,40 $. C'est le moins cher, 1inch y envoie ton ordre.",
              "Ton achat traverse la liquidité déposée juste au-dessus du prix (on verra en I.3 comment elle est rangée).",
              "Les 0,40 $ de demi-spread sont partagés : environ 80 % pour les LP, 15 % pour Metric, le reste pour le curator, soit à peu près 0,32 $ pour les LP.",
              "Une seconde plus tard, l'ETH passe à 2 010 $ sur Binance. L'oracle met à jour la référence : la pool cote désormais 2 010,40 $ à l'achat, sans que personne n'ait eu besoin de trader.",
            ],
          },
          {
            type: "p",
            texte: "L'étape 5 change tout. Sur Uniswap, c'est un arbitrageur qui aurait réaligné le prix, en achetant de l'ETH au LP sous le prix du marché : c'était la LVR de I.1. Ici, tant que l'oracle est à jour, le réalignement est gratuit (on verra en I.5 ce qui se passe quand il ne l'est pas).",
          },
          {
            type: "figure",
            id: 1,
            cle: "metric-1",
            titre: "Quand le marché monte",
            legende: "À gauche, Uniswap : la pool reste à 2 000 $ tant qu'un arbitrageur ne vient pas lui acheter de l'ETH sous le prix du marché. À droite, Metric : l'oracle déplace toute la grille de liquidité à 2 200 $, sans qu'aucun token ne change de main.",
          },
          {
            type: "st",
            texte: "Ce n'est pas une idée neuve",
          },
          {
            type: "p",
            texte: "DODO faisait déjà coter ses pools à partir de Chainlink dès son lancement, en août 2020. Sur Solana, les « propAMM », des pools privées de market makers qui publient leur propre prix (HumidiFi, SolFi, Tessera…), traitaient fin 2025 de l'ordre de la moitié du volume des DEX de la chaîne (les estimations varient selon les sources). Ce que Metric ajoute, c'est d'**ouvrir ce modèle à des LP extérieurs** sur des pools publiques, avec un oracle adapté aux actions tokenisées.",
          },
          {
            type: "st",
            texte: "En résumé : Uniswap et Metric côte à côte",
          },
          {
            type: "tableau",
            entetes: [
              "",
              "Uniswap v2",
              "Uniswap v3",
              "Metric",
            ],
            lignes: [
              [
                "Origine du prix",
                "stock de la pool",
                "stock de la pool, par range",
                "oracle / Price Provider",
              ],
              [
                "Unité des ranges",
                "aucun range",
                "prix absolu (1 800–2 200 $)",
                "écart à la référence (+1 %/+2 %, voir I.3)",
              ],
              [
                "Le marché monte ailleurs",
                "les arbitrageurs t'achètent de l'ETH : tu vends",
                "idem, amplifié",
                "la grille suit l'oracle, tu ne vends rien",
              ],
              [
                "Rebalancement manuel",
                "non",
                "oui, quand le prix sort du range",
                "non",
              ],
              [
                "Revenu du LP",
                "frais explicite (0,3 %)",
                "frais explicite (0,01 à 1 %)",
                "spread inclus dans le prix, partagé LP / curator / Metric",
              ],
              [
                "Principale source de perte",
                "LVR",
                "LVR, amplifiée",
                "retard de l'oracle et traders mieux informés (voir I.5)",
              ],
              [
                "Tiers de confiance",
                "aucun",
                "aucun",
                "l'oracle et le curator",
              ],
            ],
          },
        ],
      },
      {
        id: "i-3-les-bins-une-grille-qui-se-deplace-avec-l-oracle",
        titre: "I.3 Les bins : une grille qui se déplace avec l'oracle",
        blocs: [
          {
            type: "st",
            texte: "Ce qu'est un bin",
          },
          {
            type: "p",
            texte: "La liquidité d'une pool est rangée dans des **bins** : des tranches d'écart par rapport à la référence. De 0 à +1 %, de +1 à +2 %, de −1 % à 0, etc.",
          },
          {
            type: "p",
            texte: "L'idée ressemble aux ranges d'Uniswap v3, avec une différence clé :",
          },
          {
            type: "liste",
            items: [
              "sur **Uniswap v3**, un range est défini en **prix absolu** (par exemple 1 800 à 2 200 $) ;",
              "sur **Metric**, un bin est défini en **écart relatif à l'oracle** (par exemple +1 à +2 % au-dessus de la référence, quelle qu'elle soit).",
            ],
          },
          {
            type: "p",
            texte: "Quand l'oracle passe de 2 000 à 2 200 $, toute la grille se déplace avec lui. Le bin « +1 %/+2 % » couvrait 2 020 à 2 040 $ ; il couvre maintenant 2 222 à 2 244 $. Aucun token n'a bougé, et le LP n'a rien eu à faire.",
          },
          {
            type: "st",
            texte: "La déviation : le seul curseur qui bouge avec les trades",
          },
          {
            type: "p",
            texte: "La **déviation**, c'est l'écart entre le prix actuel de la pool et la référence. Elle ne bouge qu'avec les trades faits **dans** la pool, jamais avec le marché :",
          },
          {
            type: "liste",
            items: [
              "quand quelqu'un achète de l'ETH à la pool, la déviation monte ;",
              "quand quelqu'un vend de l'ETH à la pool, la déviation descend.",
            ],
          },
          {
            type: "p",
            texte: "Prix de la pool (avant spread) = référence × (1 + déviation). Avec une référence à 2 000 $ et une déviation de +1,5 %, la pool cote 2 030 $ avant spread. Cela veut dire que des acheteurs ont déjà consommé une partie de la liquidité au-dessus du prix, pas que l'oracle a monté.",
          },
          {
            type: "p",
            texte: "C'est la même logique qu'Uniswap v3 :",
          },
          {
            type: "liste",
            items: [
              "les bins **au-dessus** de la déviation ne contiennent que de l'ETH : ils servent à vendre de l'ETH aux acheteurs ;",
              "les bins **en dessous** ne contiennent que de l'USDC : ils servent à acheter de l'ETH aux vendeurs ;",
              "le bin **actif**, celui où se trouve la déviation, contient les deux.",
            ],
          },
          {
            type: "figure",
            id: 2,
            cle: "metric-2",
            titre: "La grille de bins autour de l'oracle",
            legende: "Chaque barre est un bin. Au-dessus de la déviation, de l'ETH à vendre ; en dessous, de l'USDC pour acheter. La grille entière est accrochée à l'oracle : si la référence bouge, tout se déplace d'un bloc. Seuls les trades dans la pool font glisser le curseur de déviation.",
          },
          {
            type: "st",
            texte: "Où déposer",
          },
          {
            type: "p",
            texte: "Le LP choisit librement un ou plusieurs bins, d'un côté ou des deux. Le token à apporter en découle :",
          },
          {
            type: "tableau",
            entetes: [
              "Ton choix",
              "Ce que tu apportes",
              "Ton rôle",
            ],
            lignes: [
              [
                "Bin −2 %/−1 %",
                "uniquement de l'USDC",
                "tu achètes de l'ETH quand des vendeurs ont poussé la déviation jusqu'à −1 %",
              ],
              [
                "Bins +1 % à +3 %",
                "uniquement de l'ETH",
                "tu vends de l'ETH quand des acheteurs ont poussé la déviation au-delà de +1 %",
              ],
              [
                "Bins −1 % à +1 %",
                "ETH et USDC",
                "tu es au centre, tu participes à presque tous les trades",
              ],
            ],
          },
          {
            type: "box",
            ton: "piege",
            titre: "Un bin à −2 % n'achète pas « quand l'ETH baisse de 2 % »",
            texte: "Si le marché baisse de 2 %, l'oracle baisse et la grille entière descend avec lui : ton bin reste à −2 % de la nouvelle référence, et ne travaille pas. Il ne sert que si un flux de ventes **dans la pool** pousse la déviation jusque-là.",
          },
          {
            type: "p",
            texte: "Un LP ne gagne que sur les trades qui traversent **ses** bins. S'il a déposé dans +3 %/+4 % et que la déviation ne dépasse jamais +2 %, sa liquidité dort et ne rapporte rien. Les gains restent dans les bins et se capitalisent tout seuls : il n'y a rien à réclamer.",
          },
          {
            type: "p",
            texte: "Dans l'application, on sélectionne les bins en cliquant sur un histogramme, puis on choisit comment répartir son dépôt entre eux : à parts égales (*Flat*), concentré au centre (*Exponential*), concentré sur les bords (*Inverted*), au prorata du volume ou du rendement des dernières 24 h, ou dans un seul bin. L'app calcule les tokens nécessaires.",
          },
          {
            type: "image",
            src: "/dossiers/metric/05-depot-deux-bins-1000-usdg.png",
            legende: "Dépôt test sur la pool WETH-USDG : deux bins sélectionnés, un de chaque côté du prix. Pour 1 000 USDG saisis, l'app demande ~0,445 WETH, soit une position d'environ 2 000 $. L'infobulle du bin +6 (+0,065 %) montre 3,63 WETH sans aucun volume sur 24 h : un bin qui dort. Capture du 30 oct. 2026, wallet de test vide.",
          },
        ],
      },
      {
        id: "i-4-comment-le-lp-gagne-le-spread-remplace-les-frais",
        titre: "I.4 Comment le LP gagne : le spread remplace les frais",
        blocs: [
          {
            type: "st",
            texte: "Pas de frais affiché, mais un prix moins bon",
          },
          {
            type: "p",
            texte: "Sur Uniswap, le trader paie un frais explicite (0,05 %, 0,3 %…) **en plus** du prix. Metric annonce *« Traders pay zero fees »* : le coût est inclus dans le prix coté, sous trois formes :",
          },
          {
            type: "listenum",
            items: [
              "le **demi-spread**, fixé par le Price Provider ;",
              "un **frais par bin**, optionnel, que le curator peut ajouter sur certaines tranches ;",
              "un **frais notionnel**, fixé par Metric, désactivé par défaut et plafonné à 1 %.",
            ],
          },
          {
            type: "p",
            texte: "Le spread et les frais de bin sont partagés entre les LP, le curator (0 ou 5 % sur les pools observées) et Metric. L'API affiche une part de Metric de 15 % sur 895 des 902 pools publiques, quand la doc parle de « 7,5 % du spread complet » : notre lecture est que c'est la même chose, puisqu'un trade ne paie qu'un demi-spread (7,5 % de l'écart entre bid et ask = 15 % d'un demi-spread). Le frais notionnel, s'il était activé, irait au protocole.",
          },
          {
            type: "p",
            texte: "Prenons la pool ETH/USDC de I.2 : prix de l'oracle 2 000 $, la pool vend l'ETH 2 000,40 $ et le rachète 1 999,60 $. Si tu achètes 1 ETH et le revends aussitôt, tu récupères 0,80 $ de moins que ce que tu as payé, soit 0,04 % : c'est la commission, cachée dans l'écart entre achat et vente. « Zero fees » veut dire « pas de frais affiché à part », pas « gratuit ».",
          },
          {
            type: "st",
            texte: "Un aller-retour chiffré",
          },
          {
            type: "p",
            texte: "Pour que le calcul soit lisible, on grossit les chiffres : bins de 1 %, demi-spread de 0,5 % (les vraies valeurs sont bien plus petites : des bins de 0,01 % et un demi-spread de l'ordre de 0,02 %, on y revient en II.1).",
          },
          {
            type: "box",
            ton: "exemple",
            titre: "L'aller-retour ne laisse que le spread",
            texte: "Pool : référence 2 000 $, demi-spread 0,5 %, 2 ETH dans le bin 0/+1 %, 2 ETH dans le bin +1/+2 %, de l'USDC en dessous.\n**Un acheteur prend 3 ETH.** Les 2 premiers dans le bin 0/+1 % (déviation moyenne +0,5 %, plus 0,5 % de spread) : 2 × 2 020 = 4 040 $. Le 3e dans le bin +1/+2 % (déviation moyenne +1,25 %, plus 0,5 %) : 2 035 $. Total payé : 6 075 USDC. La déviation finit à +1,5 %.\n**La pool attire les vendeurs.** À +1,5 % de déviation, elle rachète l'ETH au-dessus de la référence. Un vendeur lui rend 3 ETH : 1 à 2 015 $, puis 2 à 2 000 $. Total reçu par le vendeur : 6 015 USDC.\n**Bilan pour les LP :** le même stock d'ETH qu'au départ, et 6 075 − 6 015 = **60 USDC** de plus, soit exactement 2 × 10 $ de demi-spread × 3 ETH. L'effet de la déviation s'est annulé sur l'aller-retour ; seul le spread reste.",
          },
          {
            type: "figure",
            id: 3,
            cle: "metric-3",
            titre: "L'aller-retour d'une pool Metric",
            legende: "L'acheteur fait monter la déviation et paie, le vendeur la ramène et encaisse. Les deux chemins se compensent, sauf l'écart de spread prélevé à chaque passage : 60 USDC pour les LP.",
          },
          {
            type: "p",
            texte: "Le calcul suppose que le prix payé vaut référence × (1 + déviation ± demi-spread). C'est une simplification : la doc ne donne pas la formule exacte qui combine les deux.",
          },
          {
            type: "p",
            texte: "Le déséquilibre lui-même n'arrange pas le LP : c'est l'aller-retour qui paie. Tant que la pool manque d'ETH, il porte un risque : si l'ETH monte avant que le stock soit reconstitué, il a vendu trop tôt. La prime offerte aux vendeurs (qui revendent au-dessus de la référence) est le prix à payer pour revenir vite à l'équilibre. Rien, dans le protocole, ne rééquilibre automatiquement ; selon notre lecture, ce retour repose sur les arbitrageurs et les agrégateurs.",
          },
        ],
      },
      {
        id: "i-5-comment-le-lp-perd-la-selection-adverse",
        titre: "I.5 Comment le LP perd : la sélection adverse",
        blocs: [
          {
            type: "st",
            texte: "Est-ce que tu vends quand ça monte ?",
          },
          {
            type: "p",
            texte: "Sur Uniswap, oui, mécaniquement : le prix de la pool ne peut monter que si quelqu'un t'achète de l'ETH. Sur Metric, la hausse du marché seule ne te fait rien vendre ; tu ne vends que si quelqu'un t'achète réellement de l'ETH.",
          },
          {
            type: "p",
            texte: "**Cas 1 : le marché monte de 10 %, aucun trade dans ta pool.** Tu gardes 10 ETH et 20 000 USDC, soit 42 000 $ à 2 200 $ : exactement comme si tu avais gardé tes tokens. Pas d'impermanent loss, mais pas de revenu non plus.",
          },
          {
            type: "p",
            texte: "**Cas 2 : un acheteur te prend 5 ETH, puis le marché bouge** (c'est l'exemple de la documentation). Tu pars de 10 ETH et 20 000 USDC, soit 40 000 $ à 2 000 $. Des acheteurs prennent 5 ETH à 2 010 $ : tu as maintenant 5 ETH et 30 050 USDC, et tu as gagné 5 × 10 = **50 $ de spread**. Ensuite, plus aucun trade.",
          },
          {
            type: "tableau",
            entetes: [
              "Prix de l'ETH",
              "Ta position (5 ETH + 30 050 USDC)",
              "Si tu avais gardé (10 ETH + 20 000 USDC)",
              "Toi vs garder",
              "Toi vs ton dépôt",
            ],
            lignes: [
              [
                "2 200 $",
                "41 050 $",
                "42 000 $",
                "**−950 $**",
                "+1 050 $",
              ],
              [
                "2 000 $",
                "40 050 $",
                "40 000 $",
                "+50 $",
                "+50 $",
              ],
              [
                "1 800 $",
                "39 050 $",
                "38 000 $",
                "+1 050 $",
                "−950 $",
              ],
            ],
          },
          {
            type: "p",
            texte: "À 2 200 $, les −950 $ se décomposent ainsi : +50 $ de spread, moins 1 000 $ parce que les 5 ETH vendus ont pris 200 $ chacun sans toi.",
          },
          {
            type: "p",
            texte: "Dit simplement : sur Metric, ta perte ne vient plus du seul mouvement du marché, elle vient des trades qui le précèdent. Avoir vendu 5 ETH juste avant une hausse coûte cher ; la question devient donc **qui** trade avec toi, et à quel moment.",
          },
          {
            type: "def",
            terme: "Sélection adverse (ou flux toxique)",
            texte: "Si les acheteurs d'ETH achètent parce qu'ils voient déjà la hausse arriver (l'ETH a bougé sur Binance et l'oracle n'a pas encore suivi), chaque trade qu'ils font contre ta pool est un trade perdant pour toi.",
          },
          {
            type: "st",
            texte: "Trois façons de compter ce que gagne un LP",
          },
          {
            type: "p",
            texte: "C'est le point le plus important pour lire les chiffres de la seconde partie. Metric en affiche trois, qui ne disent pas la même chose.",
          },
          {
            type: "box",
            ton: "exemple",
            titre: "Le même trade, compté de trois façons",
            texte: "Reprenons le cas 2 : 5 ETH vendus à 2 010 $ alors que la référence était à 2 000 $.\n**L'Edge** : ce que la pool a gagné au moment du trade, par rapport à la référence. Ici, 5 × 10 = +50 $. C'est la base de l'« APR » affiché dans la liste des pools.\n**Le markout** : la même vente, jugée quelques minutes plus tard. Si 30 minutes après, la référence est à 2 020 $, ces 5 ETH vendus à 2 010 $ valent 50 $ de plus que leur prix de vente : markout à 30 min = 5 × (2 010 − 2 020) = **−50 $**. Le markout mesure si les acheteurs étaient mieux informés que toi.\n**Le Trading PnL** : toute ta position comparée au fait d'avoir simplement gardé tes tokens, aux prix d'aujourd'hui. À 2 200 $, c'est −950 $. C'est la seule mesure qui ressemble à ton résultat réel. La doc le résume elle-même : *« Positive Edge doesn't mean you're making money. »*",
          },
          {
            type: "p",
            texte: "Le markout et le Trading PnL peuvent avoir des signes opposés : le markout regarde chaque trade quelques minutes après, le Trading PnL regarde toute la période à la fin. Une pool peut perdre sur ses trades à 30 minutes, puis retrouver du terrain si le prix revient. On en verra un exemple réel en II.1.",
          },
          {
            type: "p",
            texte: "Pour limiter la casse, les pools les plus sûres (les labels sont détaillés en I.6) activent une **extension** (un module de code optionnel que le curator ajoute à sa pool) appelée StopLoss : elle refuse les échanges qui feraient trop reculer la valeur d'un bin par rapport à son plus haut récent. Elle limite la vitesse à laquelle un bin perd de la valeur, mais, la doc le précise, elle ne plafonne pas toutes les pertes.",
          },
        ],
      },
      {
        id: "i-6-qui-fixe-le-prix-et-peut-on-lui-faire-confiance",
        titre: "I.6 Qui fixe le prix, et peut-on lui faire confiance ?",
        blocs: [
          {
            type: "p",
            texte: "Tout repose sur le prix de référence. Il peut venir de trois endroits, et le risque n'est pas du tout le même selon le cas :",
          },
          {
            type: "liste",
            items: [
              "**un oracle standard**, Chainlink ou Pyth : la solution classique pour les cryptos ;",
              "**le Multiplier Oracle**, une variante de Pyth pour les actions tokenisées ;",
              "**un prix programmé par le curator** lui-même.",
            ],
          },
          {
            type: "st",
            texte: "Le Multiplier Oracle, pour les actions tokenisées",
          },
          {
            type: "p",
            texte: "Pyth donne le prix **d'une action**, pas celui **du token**. Or un token d'action peut valoir plus d'une action, parce que l'émetteur ajuste un **multiplicateur** : un dividende réinvesti l'augmente légèrement, un split N:1 le multiplie par N. Le prix du token vaut donc : prix de l'action × multiplicateur.",
          },
          {
            type: "box",
            ton: "exemple",
            titre: "Un split sans multiplicateur (chiffres illustratifs)",
            texte: "L'action cote 200 $. Après des dividendes réinvestis, 1 token donne droit à 1,02 action : il vaut 204 $. L'entreprise fait un split 4:1 : l'action tombe à 50 $ et le multiplicateur passe à 4,08. Le token vaut toujours 50 × 4,08 = 204 $.\nSans multiplicateur, l'oracle afficherait 50 $, et la pool vendrait le token quatre fois trop bas.",
          },
          {
            type: "p",
            texte: "Pendant un split, l'émetteur suspend le flux de prix : la pool arrête alors les échanges, mais les retraits restent ouverts. Le Multiplier Oracle n'est déployé, selon la doc, que pour les B20 Assets sur Base et les Robinhood Stock Tokens sur Robinhood Chain. Pour les bStocks de BNB Chain, qui pèsent pourtant un tiers des fonds (voir II.3), la doc ne dit pas comment leur prix est construit. L'API indique seulement que leurs pools sont ancrées, avec un flux « synthétique » partagé, mis à jour toutes les 10 secondes et figé à la création ; la presse spécialisée parle de Chainlink Data Streams, sans confirmation officielle.",
          },
          {
            type: "st",
            texte: "Un prix programmé par le curator",
          },
          {
            type: "p",
            texte: "Le Price Provider est un contrat que le curator peut écrire lui-même. Il n'est pas obligé de recopier Chainlink :",
          },
          {
            type: "tableau",
            entetes: [
              "Stratégie",
              "Exemple",
            ],
            lignes: [
              [
                "Publier ses propres prix",
                "un market maker calcule son prix à partir de ses carnets d'ordres sur Binance et Coinbase, et le publie à chaque bloc",
              ],
              [
                "Suivre un autre DEX",
                "prendre comme référence le prix moyen d'une pool Uniswap",
              ],
              [
                "Prix fixe + spread variable",
                "pool USDC/USDT : référence à 1,0000, spread qui s'élargit si le stock se déséquilibre",
              ],
              [
                "Taux de change d'un vault",
                "pool wstETH/ETH : référence = nombre d'ETH par wstETH, lu dans le contrat de Lido",
              ],
              [
                "Modèle mathématique",
                "prix d'une option calculé par Black-Scholes",
              ],
            ],
          },
          {
            type: "st",
            texte: "Le garde-fou : le prix « ancré »",
          },
          {
            type: "p",
            texte: "Avec un **Anchored Price Provider**, la référence vient obligatoirement de Chainlink ou de Pyth. Le curator peut élargir sa fourchette, mais jamais la resserrer en deçà de bornes fixées autour de l'oracle. Exemple de la doc : oracle à 100 $, bornes à 99 et 101 $. Si le curator propose 99,50 / 100,50 $, la pool applique 99 / 101 $.",
          },
          {
            type: "p",
            texte: "Dit simplement : une pool Metric peut être solidement ancrée sur Pyth, ou dépendre entièrement des prix publiés par un seul market maker. C'est la première chose à vérifier avant de déposer.",
          },
          {
            type: "st",
            texte: "Les labels de l'app",
          },
          {
            type: "p",
            texte: "L'application classe chaque pool : 🟢 Best Practices, 🟡 Neutral, 🔴 High Risk, 🟣 Private.",
          },
          {
            type: "liste",
            items: [
              "**Le socle commun** au 🟢 et au 🟡 : Price Provider immuable, bins de 1 % maximum, StopLoss en place, aucune extension de retrait (un module qui s'exécute à chaque retrait et peut le bloquer, voir plus bas) et, pour un prix ancré, des flux de 15 secondes maximum.",
              "**🟢** exige en plus un prix ancré sur Chainlink ou Pyth, un curator vérifié (identité contrôlée) et un StopLoss immuable.",
              "**🟡** exige un prix ancré **ou** un curator vérifié.",
              "Tout le reste est 🔴.",
            ],
          },
          {
            type: "p",
            texte: "Ces labels mesurent des garde-fous, pas la rentabilité. Et « vérifié » veut dire identifié, pas recommandé : *« Verified doesn't mean endorsed »*.",
          },
          {
            type: "st",
            texte: "Et quand la bourse est fermée ?",
          },
          {
            type: "p",
            texte: "C'est la question propre aux actions tokenisées. D'après la doc, une pool ancrée s'arrête de trader dès que Chainlink publie le signal « marché fermé », ou dès que son dernier prix devient trop vieux (15 secondes maximum pour les pools ancrées labellisées 🟢 ou 🟡). Elle reprend quand le flux reprend. Un curator peut aussi brancher une extension « heures de marché » qui refuse les échanges hors séance. Une pool **privée**, en revanche, peut coter une action marché fermé si son curator le décide.",
          },
          {
            type: "p",
            texte: "Notre lecture : le moment délicat, c'est la réouverture. Si une action ouvre en forte hausse ou en forte baisse (un « gap »), les premières secondes sont celles où l'oracle risque le plus d'être en retard, donc où la sélection adverse coûte le plus cher. Les fortes pertes observées sur certaines actions en II.4 vont dans ce sens, sans que nous puissions le démontrer trade par trade.",
          },
          {
            type: "st",
            texte: "Le curator a-t-il intérêt à jouer contre ses LP ?",
          },
          {
            type: "p",
            texte: "La question n'est pas traitée dans la doc, mais elle se pose. Dans une pool publique, le curator fixe le prix et peut y ajouter son propre capital à côté de celui des LP. S'il dispose d'une information plus fraîche que le prix qu'il publie, rien ne l'empêche techniquement de trader contre la pool comme n'importe quel autre arbitrageur.",
          },
          {
            type: "p",
            texte: "Les protections existantes ne couvrent ce risque qu'en partie :",
          },
          {
            type: "liste",
            items: [
              "l'**ancrage** empêche le curator de publier un prix aberrant, mais pas de profiter d'un oracle en retard ;",
              "seul le **StopLoss** limite ce second cas, en plafonnant les pertes quotidiennes de chaque bin.",
            ],
          },
          {
            type: "p",
            texte: "Nous n'avons aucun élément indiquant qu'un curator le fasse ; c'est une question de structure, à garder en tête quand 96 % des fonds dépendent de deux d'entre eux (voir II.3).",
          },
          {
            type: "st",
            texte: "Les autres risques à connaître",
          },
          {
            type: "tableau",
            entetes: [
              "Risque",
              "Ce qu'il faut savoir",
            ],
            lignes: [
              [
                "Oracle en retard",
                "la sélection adverse de I.5 : c'est la LVR qui revient par la porte de l'oracle",
              ],
              [
                "Oracle bloqué",
                "la pool refuse les échanges tant que le prix n'est pas frais. Cela protège d'un mauvais prix, mais la liquidité ne travaille plus",
              ],
              [
                "Parts de frais",
                "le curator et Metric peuvent changer leur part du spread **sans délai** (pas de timelock), même sur une pool 🟢",
              ],
              [
                "Changement d'oracle",
                "le curator peut proposer un nouveau Price Provider, sauf s'il a été figé ; le délai d'un tel changement n'est pas vérifié",
              ],
              [
                "Extension de retrait",
                "un morceau de code qui s'exécute avant ou après chaque retrait, et qui, selon la doc, *« can block LP exits »*. Toute pool qui en a une est classée 🔴",
              ],
            ],
          },
        ],
      },
    ],
    sousTitre: "Un prix venu de l'extérieur, une liquidité qui suit",
  },
  {
    id: "partie-2",
    bandeau: "PARTIE II — Le protocole en chiffres",
    sections: [
      {
        id: "ii-1-une-pool-reelle-a-la-loupe-weth-usdg",
        titre: "II.1 Une pool réelle à la loupe : WETH-USDG",
        blocs: [
          {
            type: "p",
            texte: "Les bins de 1 % et le spread de 0,5 % de la première partie étaient grossis pour le calcul. Voici ce qu'affichait la plus grosse pool de Metric, **WETH-USDG** (curator Carcosa, Robinhood Chain), le 30 octobre 2026.",
          },
          {
            type: "tableau",
            entetes: [
              "",
              "Exemple de la partie I",
              "WETH-USDG, en vrai",
            ],
            lignes: [
              [
                "Largeur d'un bin",
                "1 %",
                "**0,01 %**",
              ],
              [
                "Grille utilisée",
                "quelques %",
                "de −0,12 % à +0,12 % autour de l'oracle",
              ],
              [
                "Demi-spread",
                "0,5 %",
                "**~0,010 à ~0,036 %**, soit 0,2 à 0,8 $ par ETH",
              ],
              [
                "Oracle",
                "—",
                "ancré sur Pyth, label 🟢, curator 5 %",
              ],
            ],
          },
          {
            type: "p",
            texte: "Le reste des paramètres observés :",
          },
          {
            type: "liste",
            items: [
              "**volume 24 h / fonds déposés** : 69,2 M$ pour 2,13 M$, donc la liquidité tourne environ **32 fois par jour** ;",
              "**Edge 24 h** : 9 790 $, soit ~0,014 % du volume. C'est déjà la moitié de l'Edge de toute la semaine précédente (~19 k$, voir plus bas) : l'activité de la pool accélère vite ;",
              "**composition** : 13 % WETH, 87 % USDG ;",
              "la liquidité est concentrée **entre −0,04 % et 0 %** : le plus gros bin (n° −2, à −0,015 %) contient ~695 000 USDG.",
            ],
          },
          {
            type: "image",
            src: "/dossiers/metric/02-pool-weth-usdg-bins.png",
            legende: "La pool WETH-USDG. En vert, les bins sous le prix (de l'USDG) ; en gris, ceux au-dessus (du WETH). L'axe est en % d'écart à l'oracle : toute la grille tient entre −0,12 % et +0,12 %. En haut, le label 🟢, l'oracle (Anchored · Pyth), le demi-spread du moment et la part du curator. Capture du 30 oct. 2026.",
          },
          {
            type: "p",
            texte: "Pourquoi la déviation reste-t-elle collée à l'oracle, à quelques centièmes de % près ? Notre explication : dès que la pool s'écarte du marché de plus que le spread, les arbitrageurs et les agrégateurs viennent la ramener. Un bin placé à ±2 % sur cette pool ne serait quasiment jamais utilisé.",
          },
          {
            type: "p",
            texte: "Dit simplement : le métier de LP sur Metric consiste à encaisser une marge minuscule (~0,01 %) sur un volume énorme, pas à « vendre en haut d'un range ».",
          },
          {
            type: "st",
            texte: "Deux centièmes de % qui changent tout",
          },
          {
            type: "p",
            texte: "En survolant les bins, l'app affiche leur rendement sur 24 h. Le même jour :",
          },
          {
            type: "tableau",
            entetes: [
              "Bin",
              "Position",
              "Contenu",
              "Edge APR 24 h",
              "Volume 24 h",
            ],
            lignes: [
              [
                "n° −2",
                "−0,015 %",
                "695 102 USDG",
                "**258,9 %**",
                "34,8 M$",
              ],
              [
                "n° −4",
                "−0,035 %",
                "165 098 USDG",
                "30,9 %",
                "1,1 M$",
              ],
              [
                "n° +2",
                "+0,025 %",
                "18,17 WETH",
                "—",
                "aucun",
              ],
            ],
          },
          {
            type: "p",
            texte: "Être deux centièmes de % trop loin de l'oracle suffit à diviser le rendement par 8, ou à ne plus rien gagner. Ces APR sur 24 h bougent d'heure en heure, et ne tiennent pas compte de la sélection adverse : ce sont des Edge, pas des résultats.",
          },
          {
            type: "image",
            src: "/dossiers/metric/07-profondeur-carnet.png",
            legende: "Profondeur cumulée de part et d'autre du prix. Le côté achat (vert, la pool achète du WETH avec ses USDG) dépasse 1,7 M$, le côté vente (rouge) est bien plus mince : c'est la composition 87 % USDG / 13 % WETH. La pool absorbe bien mieux des ventes d'ETH que des achats. Capture du 30 oct. 2026.",
          },
          {
            type: "st",
            texte: "Le markout et le résultat net : la même semaine, deux signes opposés",
          },
          {
            type: "p",
            texte: "Metric publie, pour chaque pool, ses **markouts** à 1, 5 et 30 minutes : c'est rare, et précieux. Sur WETH-USDG, du 23 au 29 octobre :",
          },
          {
            type: "liste",
            items: [
              "**Edge** : ~19 k$ ;",
              "**markout à 30 minutes** : **−24,7 k$** ;",
              "**résultat net de la semaine** (le Trading PnL, onglet Performance) : **+9,8 k$**.",
            ],
          },
          {
            type: "p",
            texte: "Comment la même pool peut-elle perdre 24,7 k$ sur ses trades et finir la semaine à +9,8 k$ ? Les deux chiffres ne regardent pas au même moment (voir I.5) : à 30 minutes, ceux qui ont tradé contre la pool semblent avoir souvent eu raison ; à la fin de la semaine, une partie de ces pertes s'était effacée, vraisemblablement parce que le prix était revenu.",
          },
          {
            type: "image",
            src: "/dossiers/metric/08-performance-lp-7j.png",
            legende: "Onglet Performance, 7 jours (23 → 29 oct. 2026). Chaque barre est le résultat d'une tranche de temps : vert = gain, rouge = perte. Net de la semaine : +9,8 k$, environ la moitié de l'Edge. Sur la période, la pool a vendu en net ~361 WETH (−813 k$) et encaissé ~822 k$ d'USDG. Les grosses barres rouges des 24, 25 et 26 octobre sont, selon toute vraisemblance, des moments de flux « toxique ».",
          },
          {
            type: "p",
            texte: "Dit simplement : sur sa plus grosse pool, Metric a rendu aux traders bien informés, à court terme, plus que tout le spread gagné ; sur la semaine, les LP gardent environ la moitié de l'Edge. Nous ne pouvons pas dire, sur sept jours, laquelle des deux lectures est la plus représentative.",
          },
        ],
      },
      {
        id: "ii-2-croissance-d-une-phase-privee-a-l-ouverture-publique",
        titre: "II.2 Croissance : d'une phase privée à l'ouverture publique",
        blocs: [
          {
            type: "st",
            texte: "Deux versions",
          },
          {
            type: "liste",
            items: [
              "**V0 (mars → début octobre 2026)** : pas de pool publique dans l'app. **18,8 Md$ de volume cumulé, avec au plus 4,8 M$ déposés.** Un tel ratio est typique de pools privées de market makers, les propAMM, que la doc décrit comme l'un des deux grands types de pools Metric. Que la V0 ait été *uniquement* du propAMM reste une déduction.",
              "**V1** : premières pools le 15 septembre 2026, migration terminée le 9 octobre (la V0 tombe à 0), ouverture publique le **15 octobre**. Volume cumulé de la V1 : 6,3 Md$.",
            ],
          },
          {
            type: "tableau",
            entetes: [
              "Période",
              "Fonds déposés (DefiLlama, toutes versions)",
            ],
            lignes: [
              [
                "Avril 2026",
                "0,1 → 0,8 M$",
              ],
              [
                "Juin – août 2026",
                "~3,6 → 4,7 M$",
              ],
              [
                "Mi-sept. – mi-oct.",
                "creux à ~1 – 2,5 M$ (migration V0 → V1)",
              ],
              [
                "16 → 29 oct.",
                "**5,1 → 17,9 M$**",
              ],
            ],
          },
          {
            type: "tableau",
            entetes: [
              "Volume mensuel (Md$)",
              "Avr.",
              "Mai",
              "Juin",
              "Juil.",
              "Août",
              "Sept.",
              "Oct. (au 29)",
            ],
            lignes: [
              [
                "",
                "1,4",
                "1,9",
                "2,4",
                "2,1",
                "6,6",
                "5,4",
                "5,1",
              ],
            ],
          },
          {
            type: "p",
            texte: "Dit simplement : le volume existait avant l'ouverture (près de 25 Md$ cumulés depuis mars, porté par des pools privées) ; ce qui a explosé avec l'ouverture publique, ce sont les **fonds déposés**, multipliés par 3,5 en deux semaines. Le volume, lui, n'a pas suivi : octobre est au niveau de septembre.",
          },
          {
            type: "st",
            texte: "Répartition par blockchain",
          },
          {
            type: "tableau",
            entetes: [
              "Chaîne",
              "Fonds déposés (29 oct.)",
              "Part",
              "Volume 30 j",
              "Dans l'app publique ?",
            ],
            lignes: [
              [
                "Robinhood Chain",
                "7,29 M$",
                "41 %",
                "0,78 Md$",
                "✓ (depuis le 12 oct.)",
              ],
              [
                "BNB Chain",
                "6,23 M$",
                "35 %",
                "**1,69 Md$**",
                "✓",
              ],
              [
                "Ethereum",
                "2,47 M$",
                "14 %",
                "0,79 Md$",
                "✓",
              ],
              [
                "Base",
                "0,79 M$",
                "4 %",
                "**0,91 Md$**",
                "✗",
              ],
              [
                "Polygon",
                "0,43 M$",
                "2 %",
                "0,63 Md$",
                "✗",
              ],
              [
                "Arbitrum",
                "0,36 M$",
                "2 %",
                "0,32 Md$",
                "✗",
              ],
              [
                "Autres (Hyperliquid L1, Avalanche, Monad, MegaETH)",
                "0,32 M$",
                "2 %",
                "0,10 Md$",
                "✗",
              ],
              [
                "**Total**",
                "**17,9 M$**",
                "",
                "**5,2 Md$**",
                "",
              ],
            ],
          },
          {
            type: "p",
            texte: "Deux lectures :",
          },
          {
            type: "liste",
            items: [
              "**Robinhood Chain et BNB Chain font 76 % des fonds.** Ce sont les deux chaînes des actions tokenisées (Robinhood Stock Tokens, et bStocks de Binance) : Metric est d'abord un DEX d'actions.",
              "**Sur Base, Polygon et Arbitrum, le volume est énorme rapporté aux fonds** (Base : 0,9 Md$ par mois pour 0,8 M$). Ces chaînes ne sont pas dans l'app publique : très probablement des pools privées de market makers.",
            ],
          },
          {
            type: "p",
            texte: "Sur Robinhood Chain, Metric pèse ~0,6 % des fonds DeFi de la chaîne (7,3 M$ sur 1 125 M$), mais ~3,9 % du volume des DEX sur 7 jours et ~13 % sur la dernière journée (relevés du 30 octobre). Uniswap y domine encore très largement (~74 % du volume sur 7 jours).",
          },
        ],
      },
      {
        id: "ii-3-beaucoup-de-pools-deux-curators",
        titre: "II.3 Beaucoup de pools, deux curators",
        blocs: [
          {
            type: "tableau",
            entetes: [
              "",
              "Nombre",
              "Fonds déposés",
            ],
            lignes: [
              [
                "Pools publiques (V1)",
                "902 (Ethereum 124 · BNB Chain 282 · Robinhood Chain 496)",
                "15,8 M$",
              ],
              [
                "Pools > 10 k$",
                "61",
                "—",
              ],
              [
                "Pools > 100 k$",
                "22",
                "14,2 M$ (90 %)",
              ],
              [
                "Labels 🟢 / 🟡 / 🔴",
                "188 / 308 / 406",
                "13,4 / 2,0 / 0,4 M$",
              ],
            ],
          },
          {
            type: "p",
            texte: "La plupart des 902 pools sont des coquilles vides ou des memecoins (surtout sur Robinhood Chain). 22 pools concentrent 90 % des fonds, et 85 % des fonds sont dans des pools 🟢.",
          },
          {
            type: "st",
            texte: "Deux market makers font presque tout",
          },
          {
            type: "tableau",
            entetes: [
              "Curator",
              "Vérifié",
              "Pools",
              "Part des fonds",
              "Volume 7 j",
            ],
            lignes: [
              [
                "Carcosa",
                "✓",
                "141",
                "**63 %**",
                "720 M$ (69 %)",
              ],
              [
                "0x3216FB… (pas de nom public)",
                "✓",
                "77, uniquement des bStocks sur BNB Chain",
                "**33 %**",
                "237 M$",
              ],
              [
                "327 autres",
                "2 vérifiés",
                "~680",
                "~4 %",
                "—",
              ],
            ],
          },
          {
            type: "figure",
            id: 4,
            cle: "metric-4",
            titre: "Qui pilote la liquidité",
            legende: "Répartition des 15,8 M$ déposés sur les pools publiques, selon le curator de la pool, au 30 oct. 2026. Deux market makers gèrent les pools qui portent 96 % des fonds.",
          },
          {
            type: "p",
            texte: "Nous n'avons trouvé **aucune information publique sur Carcosa**, ni aucun market maker connu (Wintermute, GSR, Flowdesk…) parmi les curators, et nous ne pouvons pas dire si Carcosa est lié à l'équipe de Metric.",
          },
          {
            type: "p",
            texte: "Chez Metric, il n'y a **pas de vault** : tu déposes toi-même dans une pool, tu choisis tes bins, et le curator ne déplace jamais ton argent. Il fixe seulement les règles de la pool dans laquelle tu es entré.",
          },
          {
            type: "image",
            src: "/dossiers/metric/01-liste-pools.png",
            legende: "La page Pools, triée par fonds déposés : les plus grosses pools sont toutes gérées par Carcosa ou par 0x3216F…0787. La colonne APR est l'Edge APR sur 7 jours, qui ignore les mouvements de prix. Capture du 30 oct. 2026.",
          },
          {
            type: "st",
            texte: "Les actions tokenisées, cœur du capital",
          },
          {
            type: "tableau",
            entetes: [
              "Catégorie",
              "Pools",
              "Fonds déposés",
              "Volume 7 j",
              "Volume cumulé V1",
            ],
            lignes: [
              [
                "Actions tokenisées",
                "320",
                "**10,0 M$ (63 %)**",
                "327 M$ (32 %)",
                "1,24 Md$ (40 %)",
              ],
              [
                "Crypto (ETH, BNB, BTC…)",
                "526",
                "4,1 M$ (26 %)",
                "337 M$ (32 %)",
                "1,01 Md$ (33 %)",
              ],
              [
                "Stablecoins",
                "56",
                "1,8 M$ (11 %)",
                "373 M$ (36 %)",
                "0,85 Md$ (27 %)",
              ],
            ],
          },
          {
            type: "p",
            texte: "Ce tableau ne couvre que les pools publiques des trois chaînes de l'app (3,1 Md$ de volume cumulé) ; le reste des 6,3 Md$ de la V1 passe par les chaînes hors app. Les actions portent près des deux tiers du capital, mais seulement un tiers du volume : le volume se répartit à peu près en trois parts égales. Les pools principales : SPCX (SpaceX), META, NVDA, TSLA, GOOGL et AAPL côté Robinhood ; QQQB, NVDAB, SKHYB et SPCXB côté BNB Chain.",
          },
        ],
      },
      {
        id: "ii-4-face-a-uniswap-ce-que-paie-le-trader-ce-que-garde-le-lp",
        titre: "II.4 Face à Uniswap : ce que paie le trader, ce que garde le LP",
        blocs: [
          {
            type: "st",
            texte: "Le coût d'un swap",
          },
          {
            type: "p",
            texte: "Méthode : l'Edge versé aux LP divisé par le volume, ramené au montant brut (avant les parts du curator et de Metric). C'est un coût **moyen** par rapport à l'oracle sur 24 h, pas le prix d'un ordre précis. 1 point de base (pb) = 0,01 %.",
          },
          {
            type: "tableau",
            entetes: [
              "Paire",
              "Metric (coût moyen)",
              "Uniswap (frais de la pool)",
            ],
            lignes: [
              [
                "ETH/USD",
                "~1,8 pb",
                "1 pb (pool 0,01 %) ou 5 pb (pool 0,05 %), Ethereum",
              ],
              [
                "BNB/USDT",
                "~0,9 pb",
                "5 pb (Uniswap v3, BNB Chain)",
              ],
              [
                "USDC/USDT",
                "**~0,05 à 0,1 pb**",
                "1 pb (v3) ; 0 ou frais dynamique sur certaines pools v4",
              ],
              [
                "Actions tokenisées",
                "~1,5 à 5 pb selon la pool",
                "pas de comparable fiable",
              ],
            ],
          },
          {
            type: "p",
            texte: "Dit simplement : Metric est au niveau des pools les plus compétitives d'Uniswap. Sur l'ETH, la pool Uniswap à 0,01 % reste moins chère en frais purs ; sur les stablecoins, Metric est nettement moins cher. L'impact de prix sur de gros ordres n'a pas été comparé.",
          },
          {
            type: "st",
            texte: "Ce que garde le LP",
          },
          {
            type: "tableau",
            entetes: [
              "",
              "Metric (22 pools > 100 k$, 7 j)",
              "Uniswap v3 ETH/USDC 0,05 %, Ethereum (7 j)",
            ],
            lignes: [
              [
                "APR affiché (Edge / frais)",
                "**~40 %**",
                "~45 à 60 % selon le jour du relevé",
              ],
              [
                "Résultat incluant les mouvements de prix",
                "**Trading PnL ~15 %**",
                "non publié",
              ],
              [
                "Rotation du capital (volume ÷ fonds)",
                "~15 à 30 fois par jour",
                "~1 fois par jour",
              ],
            ],
          },
          {
            type: "figure",
            id: 5,
            cle: "metric-5",
            titre: "De l'APR affiché au résultat réel",
            legende: "Sur les 22 plus grosses pools de Metric, 7 jours : ~40 % d'Edge APR affiché, dont ~25 points reperdus en sélection adverse, pour ~15 % de Trading PnL.",
          },
          {
            type: "p",
            texte: "Trois remarques :",
          },
          {
            type: "listenum",
            items: [
              "**Le chiffre affiché trompe des deux côtés.** Chez Metric, l'écart entre 40 % d'Edge et 15 % de Trading PnL montre qu'environ 60 % du spread a été reperdu dans les mouvements qui suivent les trades. Chez Uniswap, les 45 à 60 % de frais ignorent la LVR, que personne n'affiche. Metric a au moins le mérite de publier le second chiffre.",
              "**La rotation explique les gros APR malgré une marge minuscule.** Sur WETH-USDG, 9 790 $ d'Edge en une journée pour 2,13 M$ déposés, c'est 0,46 % du capital en 24 heures. C'est aussi pourquoi le moindre flux toxique pèse lourd : il s'applique, lui aussi, 30 fois par jour.",
              "**La dispersion est énorme.** Trading PnL APR sur 7 jours : +356 % sur SKHYB, mais −243 % sur GOOGL et −207 % sur CRCLB. Ces pertes vont dans le sens de notre lecture sur les réouvertures de marché (I.6), sans démonstration trade par trade.",
            ],
          },
        ],
      },
      {
        id: "ii-5-pas-de-token-ce-que-ca-change",
        titre: "II.5 Pas de token : ce que ça change",
        blocs: [
          {
            type: "st",
            texte: "Pas de token, pas de points visibles",
          },
          {
            type: "p",
            texte: "Au 30 octobre 2026, Metric n'a **pas de token**, et aucun n'est annoncé (ni répartition, ni date, ni airdrop). Les sites qui suivent les airdrops arrivent à la même conclusion : un airdrop éventuel relève de la spéculation.",
          },
          {
            type: "p",
            texte: "Les conséquences :",
          },
          {
            type: "liste",
            items: [
              "**pas d'inflation** : aucune émission ne subventionne les rendements, les APR viennent uniquement du spread payé par les traders ;",
              "**pas de rachat de token**, puisqu'il n'y a rien à racheter ;",
              "**pas de gouvernance décentralisée** : les paramètres du protocole (part de Metric, frais notionnel) sont fixés par l'équipe, sans vote et sans timelock sur les parts de frais.",
            ],
          },
          {
            type: "p",
            texte: "Ce qui existe, c'est un **programme de parrainage**, actif depuis le 21 ou 22 octobre : il faut signer un message pour obtenir son lien, et la doc indique seulement que les détails viendront *« soon »*, en se réservant le droit d'annuler les récompenses issues d'auto-parrainage. Avec un wallet connecté, nous n'avons trouvé aucun tableau de points. La doc décrit toutefois une extension capable d'*« award points on executed amounts »* : la technique est prête.",
          },
          {
            type: "p",
            texte: "Sans token, ce parrainage entretient une attente d'airdrop. Une partie de l'activité actuelle (petits dépôts, pools créées « pour être là tôt ») peut être motivée par cette attente plutôt que par le rendement.",
          },
          {
            type: "st",
            texte: "Comment Metric gagne de l'argent",
          },
          {
            type: "p",
            texte: "Metric prélève **15 % de ce que paie chaque trade** (voir I.4). Sur les dernières 24 heures (902 pools publiques) :",
          },
          {
            type: "tableau",
            entetes: [
              "Bénéficiaire",
              "Montant sur 24 h",
              "Part",
            ],
            lignes: [
              [
                "Spread total payé par les traders",
                "~50 200 $",
                "100 %",
              ],
              [
                "LP",
                "~40 750 $",
                "81 %",
              ],
              [
                "**Metric**",
                "**~7 500 $**, soit ~2,7 M$ par an en annualisant",
                "15 %",
              ],
              [
                "Curators",
                "~1 900 $",
                "4 %",
              ],
            ],
          },
          {
            type: "p",
            texte: "Une seule journée ne fait pas une tendance, et les chaînes hors app publique ne sont pas incluses.",
          },
          {
            type: "st",
            texte: "Sécurité, financement et équipe",
          },
          {
            type: "p",
            texte: "Côté code, Metric publie **cinq audits** : deux de Zellic (juin et septembre 2026) et trois de Sherlock (un audit collaboratif en mai-juin, un concours public en juillet, une revue des contrats périphériques en septembre). Nous n'avons pas relu les rapports eux-mêmes.",
          },
          {
            type: "p",
            texte: "Aucun investisseur n'est annoncé. Une revue tierce affirme que Metric s'est autofinancé, avec 2,5 M$ de fonds propres pendant une phase discrète d'environ sept mois : ce n'est pas vérifié. Le seul membre identifié publiquement est Christos Gkolias, présenté par RootData comme cofondateur et CTO ; son passage chez Uniswap Labs, cité par certaines sources secondaires, n'est pas confirmé. Les autres fondateurs ne sont pas nommés.",
          },
        ],
      },
    ],
    sousTitre: "Deux semaines de vie publique, et déjà des signaux à surveiller",
  },
  {
    id: "verdict",
    titre: "Verdict — une bonne idée, portée par deux acteurs",
    sections: [
      {
        id: "ce-que-metric-fait-bien",
        titre: "Ce que Metric fait bien",
        blocs: [
          {
            type: "p",
            texte: "L'idée est solide. Séparer le prix (l'oracle) de la liquidité (les bins) supprime le principal défaut des AMM classiques : payer les arbitrageurs à chaque mouvement du marché. Pour des actions dont le vrai prix se forme en bourse, c'est une réponse plus adaptée qu'une courbe x·y=k.",
          },
          {
            type: "p",
            texte: "Côté traders, les coûts sont au niveau des meilleures pools Uniswap, et nettement plus bas sur les stablecoins. Côté transparence, Metric est au-dessus de la moyenne : labels de risque, markouts et Trading PnL publiés, API ouverte, cinq audits publiés (Zellic et Sherlock).",
          },
        ],
      },
      {
        id: "ce-qui-reste-a-prouver",
        titre: "Ce qui reste à prouver",
        blocs: [
          {
            type: "listenum",
            items: [
              "**La dépendance aux curators.** Aujourd'hui, Metric ressemble moins à une place de marché ouverte qu'à l'infrastructure de deux market makers. Si Carcosa se retire, les pools qui portent près des deux tiers des fonds perdent celui qui les fait tourner : le prix, les paramètres, et peut-être une partie du capital, dont nous ne connaissons pas la part. Si c'est 0x3216FB…, un tiers.",
              "**La rentabilité réelle des LP extérieurs.** L'APR affiché (~40 %) surestime nettement le résultat après sélection adverse (~15 % sur 7 jours, avec de fortes pertes sur certaines actions). Sur une période aussi courte, ces chiffres ne permettent pas de conclure.",
              "**La résistance aux chocs.** Pas encore de test grandeur nature : gros gap d'ouverture sur une action, oracle gelé, retrait massif.",
            ],
          },
          {
            type: "p",
            texte: "Dit simplement : aujourd'hui, déposer sur Metric, c'est surtout faire confiance à Carcosa (ou, sur les bStocks, à 0x3216FB…) et à la qualité de son prix. Les seuls chiffres qui disent si ce pari paie sont le markout et le Trading PnL de la pool, pas l'APR affiché.",
          },
          {
            type: "box",
            ton: "piege",
            titre: "Les signaux à surveiller",
            items: [
              "96 % des fonds dans les pools de deux curators, dont un sans nom public, et aucun market maker connu identifié.",
              "Un protocole public depuis deux semaines, dont les fonds ont été multipliés par 3,5 sur la période : rien n'a encore été éprouvé par une crise.",
              "Des markouts négatifs, dont celui de la plus grosse pool (−24,7 k$ à 30 minutes sur une semaine) : le spread ne couvre pas toujours la sélection adverse.",
              "Des parts de frais modifiables sans délai, même sur une pool 🟢.",
              "Une équipe et un financement peu documentés, et un parrainage qui entretient une attente d'airdrop.",
            ],
          },
        ],
      },
      {
        id: "avant-de-deposer-les-questions-a-se-poser",
        titre: "Avant de déposer, les questions à se poser",
        blocs: [
          {
            type: "liste",
            items: [
              "Quel Price Provider ? Ancré sur Pyth ou Chainlink, et immuable ?",
              "Quel label ? Y a-t-il une extension de retrait ?",
              "Quelles parts prennent le curator et Metric, sachant qu'elles peuvent changer à tout moment ?",
              "Le markout et le Trading PnL de la pool sont-ils positifs, et pas seulement l'Edge APR ?",
              "Mes bins sont-ils là où passe le volume ?",
            ],
          },
        ],
      },
      {
        id: "ce-que-nous-n-avons-pas-verifie",
        titre: "Ce que nous n'avons pas vérifié",
        blocs: [
          {
            type: "liste",
            items: [
              "les contrats on-chain (administrateur de la factory, possibilité de mise à jour) ;",
              "le contenu des rapports d'audit ;",
              "l'identité des curators ;",
              "l'impact de prix sur de gros ordres.",
            ],
          },
        ],
      },
      {
        id: "methode-et-sources",
        titre: "Méthode et sources",
        blocs: [
          {
            type: "p",
            texte: "Dossier rédigé le 30 octobre 2026, à partir de la documentation officielle de Metric, de son API publique (902 pools extraites), des données de DefiLlama et de l'observation directe de l'application avec un wallet de test vide (aucune transaction signée). Tous les calculs ont été refaits par la rédaction à partir de ces données.",
          },
          {
            type: "liste",
            items: [
              "[Documentation Metric](https://docs.metric.xyz/llms-full.txt), version complète, consultée le 30 oct. 2026",
              "API publique Metric : `api.metric.xyz/public/v1`, extraction du 30 oct. 2026 (902 pools, 3 chaînes)",
              "DefiLlama : [fonds déposés](https://defillama.com/protocol/metric), [volumes](https://defillama.com/dexs/metric), [rendements des pools](https://defillama.com/yields), [Robinhood Chain](https://defillama.com/chain/robinhood-chain)",
              "Milionis, Moallemi, Roughgarden, Zhang, [*Automated Market Making and Loss-Versus-Rebalancing*](https://arxiv.org/abs/2208.06046) (2022)",
              "Contexte DODO : [Decrypt](https://decrypt.co/40117/dodo-chinas-new-hot-defi-startup-gets-a-seed-round) (2020) · propAMM sur Solana : [Blockworks Research](https://app.blockworksresearch.com/unlocked/solana-dex-winners-all-about-order-flow), [The Coin Republic](https://www.thecoinrepublic.com/2025/11/07/prop-amms-capture-50-of-solana-dex-volume-why-you-should-care/) (nov. 2025)",
              "Lancement, équipe, financement, airdrop (sources secondaires, fiabilité limitée) : [iq.wiki](https://iq.wiki/wiki/metric), [airdrops.com](https://airdrops.com/reviews/metric-airdrop), [DROPiT](https://dropit.space/en/airdrop/metric), [Castle Labs](https://research.castlelabs.io/p/ai-exposure-onchain-metric-airdrop), [Crypto Briefing](https://cryptobriefing.com/bnb-chain-bstocks-metric-dex/), [TokenPost](https://www.tokenpost.com/news/business/31630)",
              "Observation directe : pool [WETH-USDG](https://app.metric.xyz/pool/4663/0x1E8Fc442AD3606719F7016DED6C17B56C3cA7386), onglets Liquidity et Analytics, 30 oct. 2026",
            ],
          },
        ],
      },
    ],
  },
];
