// ===== PROPOSITION — fiche site Pendle (slug "pendle") — v2 =====
// Rédacteur, Mode B. Objet à coller dans PROTOCOLES (site/app/protocoles/protocols.ts)
// après validation de Marc. NE PAS importer tel quel : les [À VÉRIFIER] doivent être
// levés avant publication.
//
// Câblage à faire à l'assemblage :
//   • live : TVL protocole = [CHIFFRE LIVE — DeFiLlama] via api.llama.fi/tvl/pendle
//     (slug vérifié le 4/11/2026 : l'endpoint renvoie bien un nombre ; c'est l'entrée
//     « parent#pendle » qui agrège toutes les chaînes). Pas de pool câblé pour l'instant.
//   • pas de champ pharos : Pendle n'émet pas de stablecoin.
//   • la page porte le bandeau « rédigé avec l'aide de l'IA » (iaGenere: true), jamais le mail.
//
// Sources lues : _wiki/protocoles/Pendle.md ; Crypto/Protocoles/Dérivés - PERP - Options/
// Pendle - Monétisation du rendement.md ; _wiki/protocoles/Apyx.md (oracles Morpho) ;
// drafts/issue-09/sous-la-loupe.md (PendleLoop) ; veille/2026-10-10.md et 2026-10-19-B.md
// (Boros). v3 (4/11) : 8 correctifs du vérificateur ; Penpie et cofondateurs non sourcés
// (recherche web bloquée). v2 (4/11/2026) : documentation officielle Pendle (dépôt GitHub
// pendle-finance/documentation : Security, sPENDLE, Tokenomics, Fees, Incentives,
// PTLooping, HighLevelArchitecture, Oracles/PTAsCollateral, LinearDiscountOracle) ;
// dossier d'audits pendle-core-v2-public/audits ; DeFiLlama /protocol/pendle (levées de
// fonds) ; onglet « Looping Info » de app.pendle.finance relevé par la session principale
// le 4/11/2026.

import type { ProtocoleFiche } from "../../site/app/protocoles/protocols";

export const fichePendle: ProtocoleFiche = {
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
};
