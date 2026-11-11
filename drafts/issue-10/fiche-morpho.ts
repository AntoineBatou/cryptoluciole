// ===== PROPOSITION — fiche site Morpho (slug "morpho") — v2 (boucle 1 du vérificateur) =====
// Rédacteur, Mode B. Objet à coller dans PROTOCOLES (site/app/protocoles/protocols.ts)
// après validation de Marc. NE PAS importer tel quel : les doivent être
// levés avant publication. Page cible du « → Voir la fiche complète » du SOUS LA LOUPE
// du numéro 10 (Morpho Midnight).
//
// Câblage à faire à l'assemblage :
//   • live : slugs DeFiLlama vérifiés le 10/11/2026 sur https://api.llama.fi/protocols :
//       - "morpho"          → agrégat de tout Morpho (Blue + Midnight + anciens Optimizers) ;
//       - "morpho-blue"     → Morpho Blue seul (l'alias "morpho-v1" renvoie le même nombre) ;
//       - "morpho-midnight" → Midnight seul.
//     Le type ProtoLiveConfig n'accepte qu'UN slug : je propose "morpho" (la fiche couvre
//     tout Morpho). Si Marc veut afficher la TVL de Midnight à part, il faut étendre
//     ProtoLiveConfig à plusieurs slugs (modif de code, session principale).
//     DeFiLlama Yields ne publie AUCUN pool Midnight (aucun projet « morpho-midnight »
//     dans yields.llama.fi/pools) : le taux fixe ne peut pas être affiché en direct.
//     Pool proposé pour comparer avec un taux variable : le plus gros vault USDC sur
//     Ethereum (Steakhouse, steakUSDC). Il existe DEUX pools « STEAKUSDC » Ethereum
//     (931ea9be… et b55f43a8…) : vérifier lequel est le vault de référence avant câblage.
//   • pas de champ pharos : Morpho n'émet pas de stablecoin.
//   • la page porte le bandeau « rédigé avec l'aide de l'IA » (iaGenere: true), jamais le mail.
//   • aucune TVL ni aucun APY écrits en dur dans le texte : renvoi à la carte
//     « 📊 Chiffres en direct ». Les taux de Midnight sont décrits qualitativement.
//
// Captures (le type ProtoBloc ne gère pas les images ; emplacements proposés, repérés par
// des commentaires « [IMAGE] » dans le corps) :
//   • 03-midnight-liste-marches.jpg → section « Midnight », étape 1 (les marchés) ;
//   • 04-midnight-echeances-usdc-cbbtc.jpg → même étape, juste après (un marché par échéance) ;
//   • 06-midnight-courbe-taux.jpg → section « Ce que ça rapporte, ce que ça coûte » ;
//   • 05-midnight-carnet-ordres-25dec.jpg → étape 5 (sortie du prêteur) ;
//   • 01-defillama-midnight.jpg → section « Pourquoi ça compte » (taille et méthode DeFiLlama).
//   Si on ajoute un bloc image au type, proposition : { type: "image"; src; legende }.
//
// Sources lues : _wiki/protocoles/Morpho.md (13/06/2026) ; drafts/issue-10/
// recherche-midnight-aave.md (doc, whitepaper mai 2026, GitHub, API Morpho, DeFiLlama,
// 10/11/2026) ; drafts/issue-10/avis-taux-fixe.md ; drafts/issue-10/sous-la-loupe.md (v4).
// Vérifié en plus le 10/11/2026 : billet « The Morpho Effect: September 2026 » (Midnight
// en ligne sur Ethereum en septembre, jour exact non donné) ; programme de bug bounty
// Morpho sur Cantina (Midnight dans le périmètre, plafond affiché 2,5 M$ pour une faille
// critique) ; DeFiLlama : Blue listé le 14/01/2024, Midnight actif sur Ethereum et Base,
// revenu du protocole Midnight à 0 $ sur 30 jours ; notional-v3 quasi vide sur DeFiLlama.
// Écart avec le wiki : le wiki parle de « solveurs » ; la doc Midnight dit « routers ».

import type { ProtocoleFiche } from "../../site/app/protocoles/protocols";

export const ficheMorpho: ProtocoleFiche = {
  slug: "morpho",
  nom: "Morpho (Blue, Vaults, Midnight)",
  type: "Prêt sur gage : marchés isolés à taux variable, vaults gérés, prêts à taux fixe",
  chains:
    "Midnight : Ethereum et Base. Morpho Blue : Ethereum et Base surtout, et une quarantaine d'autres blockchains selon DeFiLlama",
  resume:
    "Morpho est, avec Aave, l'un des deux plus gros protocoles de prêt de la DeFi. Il propose trois façons de prêter ou d'emprunter : Morpho Blue, des marchés de prêt isolés à taux variable ; les Vaults, où un gérant de risque, le curateur, place tes dépôts pour toi ; et depuis juillet 2026 Midnight, des prêts à taux fixe jusqu'à une date fixée, où le taux naît des offres des participants. Cette fiche détaille surtout Midnight.",
  live: {
    defillamaSlug: "morpho",
    pools: [
      {
        label: "Vault USDC Steakhouse sur Ethereum (taux variable, pour comparer)",
        id: "931ea9be-5f4d-428e-beaf-205fc5b4e2b5",
      },
    ],
  },
  enBref: [
    { label: "Type", valeur: "Infrastructure de prêt sur gage : marchés isolés (Blue), vaults gérés par des curateurs, marchés à taux fixe (Midnight)" },
    { label: "Lancement", valeur: "Optimizer en 2022 ; Morpho Blue début 2024 ; Midnight le 21 juillet 2026 sur Base, en septembre 2026 sur Ethereum" },
    { label: "Équipe", valeur: "Publique ; parmi les cofondateurs, les Français Paul Frambot (directeur général) et Merlin Égalité ; plus de 80 M$ levés (a16z, Variant, Ribbit…)" },
    { label: "Structure", valeur: "Morpho Labs, la société, est une filiale de l'Association Morpho ; jeton de gouvernance MORPHO" },
    { label: "Contrats", valeur: "Blue et Midnight sont immuables : personne, pas même Morpho, ne peut les modifier ni les mettre en pause" },
    { label: "Sécurité de Midnight", valeur: "Audits Spearbit, Stermi, Blackthorn et Trust Security ; vérification formelle Certora ; compétition publique sur Cantina ; bug bounty permanent" },
    { label: "Qui l'utilise", valeur: "Coinbase (prêts à taux fixe contre du bitcoin depuis le 22 septembre 2026), la plateforme de crédit Tenor ; Blue sert d'infrastructure à Coinbase, Apollo, Bitwise" },
  ],
  score: { mention: "MOYEN", sens: "moyen" },
  sections: [
    {
      titre: "Le principe",
      blocs: [
        {
          type: "p",
          texte:
            "Morpho fait du prêt sur gage. Un emprunteur dépose une garantie, du bitcoin ou de l'ETH par exemple, et emprunte des stablecoins pour une valeur inférieure. Le prêteur fournit ces stablecoins et touche les intérêts que paie l'emprunteur. Si la garantie perd trop de valeur, elle est vendue pour rembourser le prêteur : c'est la liquidation.",
        },
        {
          type: "p",
          texte:
            "Ce qui distingue Morpho, c'est la façon dont il organise ces prêts. Il propose trois produits, qui s'empilent :",
        },
        {
          type: "tableau",
          entetes: ["Produit", "Ce que tu fais", "Le taux", "Pour qui"],
          lignes: [
            [
              "Morpho Blue",
              "Tu prêtes ou empruntes sur un marché précis (un actif prêté, une garantie)",
              "Variable, calculé par une formule selon la part de l'argent déjà empruntée",
              "Ceux qui veulent choisir eux-mêmes leur marché",
            ],
            [
              "Vaults",
              "Tu déposes, un curateur répartit ton argent entre plusieurs marchés Blue",
              "Variable : la moyenne des marchés choisis par le curateur",
              "Le prêteur qui veut déléguer",
            ],
            [
              "Midnight",
              "Tu prêtes ou empruntes jusqu'à une date fixée (l'échéance)",
              "Fixe, connu dès le départ : il naît des offres des participants",
              "L'emprunteur qui veut connaître son coût, le prêteur qui accepte de bloquer son argent jusqu'à une date",
            ],
          ],
        },
        {
          type: "p",
          texte:
            "Dit simplement : Blue et les Vaults font la même chose qu'Aave, à taux variable, mais en marchés séparés. Midnight fait ce qu'Aave ne propose pas aujourd'hui : un prêt à taux fixe.",
        },
      ],
    },
    {
      titre: "Équipe & origine",
      blocs: [
        {
          type: "p",
          texte:
            "Morpho a été cofondé notamment par les Français Paul Frambot, son directeur général, et Merlin Égalité. L'équipe est publique. Elle a levé plus de 80 M$ auprès de fonds comme a16z, Variant et Ribbit.",
        },
        {
          type: "p",
          texte:
            "Le produit s'est construit en trois temps :",
        },
        {
          type: "liste",
          items: [
            "2022 : l'Optimizer, une couche posée sur Aave et Compound, qui mettait directement en relation prêteurs et emprunteurs pour leur offrir un meilleur taux que la pool.",
            "Début 2024 : Morpho Blue, reconstruit de zéro. Ce n'est plus une surcouche d'Aave mais un protocole de prêt à part entière, avec ses propres marchés. Les Vaults (d'abord appelés MetaMorpho) arrivent au-dessus, puis leur version 2.",
            "2026 : Midnight, le prêt à taux fixe. Livre blanc publié en mai, lancement sur Base le 21 juillet, puis sur Ethereum en septembre.",
          ],
        },
        {
          type: "p",
          texte:
            "Morpho est devenu une infrastructure que d'autres utilisent sous leur propre marque : Coinbase pour les prêts en USDC adossés au bitcoin de ses clients, Apollo pour des vaults de crédit institutionnel, Bitwise.",
        },
      ],
    },
    {
      titre: "Morpho Blue : des marchés de prêt isolés",
      blocs: [
        {
          type: "p",
          texte:
            "Sur Aave V3, tous les dépôts d'un même réseau vont dans un grand pot commun (Aave V4 commence à séparer les marchés), et chaque garantie acceptée peut, en théorie, faire perdre de l'argent à tous les prêteurs. Morpho Blue fait l'inverse : chaque marché est une case séparée, avec ses propres règles.",
        },
        {
          type: "def",
          terme: "Marché isolé",
          texte:
            "Un marché de prêt qui ne partage ni ses dépôts ni ses pertes avec les autres. Si la garantie ou la source de prix d'un marché déraille, seuls les prêteurs de ce marché perdent.",
        },
        {
          type: "p",
          texte: "Chaque marché Blue est défini par cinq paramètres, fixés à sa création et qui ne changent plus jamais :",
        },
        {
          type: "tableau",
          entetes: ["Paramètre", "Son rôle"],
          lignes: [
            ["Actif prêté", "Ce que l'emprunteur reçoit (ex. USDC)"],
            ["Garantie", "Ce que l'emprunteur dépose (ex. wstETH)"],
            ["Oracle", "La source qui donne le prix de la garantie"],
            ["Modèle de taux", "La formule qui fait monter le taux quand une grande part des dépôts est empruntée"],
            ["LLTV", "Le seuil de liquidation"],
          ],
        },
        {
          type: "def",
          terme: "LLTV (seuil de liquidation)",
          slug: "ltv",
          texte:
            "La part maximale de la valeur de ta garantie que ta dette peut atteindre. À 86 %, avec 100 $ de garantie, ta dette ne doit pas dépasser 86 $ : au-delà, ta garantie est vendue pour rembourser le prêteur.",
        },
        {
          type: "def",
          terme: "Oracle",
          slug: "oracle",
          texte:
            "Le service qui fournit à un contrat le prix d'un actif. Sur un marché de prêt, c'est lui qui dit combien vaut ta garantie, donc à quel moment tu es liquidé.",
        },
        {
          type: "p",
          texte:
            "Deux conséquences. N'importe qui peut créer un marché, sans vote de gouvernance : là où Aave met des semaines à accepter un nouvel actif, Morpho en accueille tout de suite. En contrepartie, un marché peut être mal paramétré, et c'est au prêteur, ou à son curateur, de faire le tri.",
        },
        {
          type: "p",
          texte:
            "Le contrat de Morpho Blue, immuable, est très audité et n'a jamais été compromis à ce jour : les incidents connus ont touché un marché mal paramétré et l'interface, pas le contrat (voir « Les risques »).",
        },
      ],
    },
    {
      titre: "Les Vaults : déléguer le choix à un curateur",
      blocs: [
        {
          type: "p",
          texte:
            "Choisir soi-même parmi des centaines de marchés Blue demande du temps et des compétences. Les Vaults font ce travail : tu déposes de l'USDC, et un curateur le répartit entre plusieurs marchés, selon sa propre politique de risque.",
        },
        {
          type: "def",
          terme: "Curateur",
          texte:
            "Le gérant d'un vault Morpho. Il choisit les marchés où va l'argent des déposants, fixe des plafonds par marché et ajuste la répartition. Ce sont des sociétés spécialisées dans l'analyse de risque, comme Gauntlet ou Steakhouse.",
        },
        {
          type: "p",
          texte:
            "Ton rendement s'accumule dans la valeur de ta part, qui monte avec les intérêts encaissés. Il vient uniquement des intérêts payés par les emprunteurs, éventuellement complétés par des récompenses en jetons MORPHO quand une campagne est en cours.",
        },
        {
          type: "p",
          texte:
            "Morpho fournit les contrats, pas les choix d'investissement : la qualité d'un vault dépend de son curateur, et un mauvais choix de garantie se paie (voir « Ce que Morpho a déjà connu »).",
        },
        {
          type: "p",
          texte:
            "Les Vaults V2, la version actuelle, peuvent placer l'argent ailleurs que sur Blue grâce à des adaptateurs. L'adaptateur vers Midnight est annoncé pour le quatrième trimestre 2026, mais il n'est pas encore en ligne : aujourd'hui, l'argent des vaults ne va pas sur Midnight.",
        },
      ],
    },
    {
      titre: "Midnight : le taux fixe, étape par étape",
      blocs: [
        {
          type: "def",
          terme: "Taux fixe",
          slug: "taux-fixe",
          texte:
            "Un taux d'intérêt connu dès le départ, qui ne bouge plus jusqu'à la date de remboursement prévue, l'échéance. L'emprunteur sait ce qu'il paiera, le prêteur ce qu'il touchera.",
        },
        {
          type: "p",
          texte:
            "Midnight reprend la logique de Blue (des marchés isolés, immuables, que n'importe qui peut créer), avec une différence de taille : il n'y a plus de formule de taux. Ce sont les participants qui proposent un prix, et le taux en découle.",
        },
        {
          type: "st",
          texte: "1. Un marché : un actif, des garanties, une échéance",
        },
        {
          type: "p",
          texte: "Un marché Midnight est défini par :",
        },
        {
          type: "liste",
          items: [
            "l'actif prêté, le plus souvent de l'USDC ;",
            "les garanties acceptées, de 1 à 128 actifs, chacun avec son oracle et son seuil de liquidation (souvent 86 % pour le bitcoin et l'ETH) ;",
            "l'échéance, une date fixe : en pratique le dernier vendredi d'un mois, à 15 h UTC.",
          ],
        },
        {
          type: "p",
          texte:
            "Changer un seul de ces paramètres crée un autre marché. Le prêt d'USDC contre du bitcoin existe donc en plusieurs exemplaires, un par échéance.",
        },
        // [IMAGE] 03-midnight-liste-marches.jpg — légende proposée : « La page des marchés à
        // taux fixe de l'app Morpho, le 10 novembre 2026 : chaque ligne est une famille de
        // marchés (actif prêté, garantie, blockchain, seuil de liquidation de 86 %). »
        // [IMAGE] 04-midnight-echeances-usdc-cbbtc.jpg — légende proposée : « En dépliant une
        // famille (ici l'USDC contre du bitcoin sur Ethereum), on voit un marché par
        // échéance. Instantané du 10 novembre 2026. »
        {
          type: "st",
          texte: "2. Le taux est un prix",
        },
        {
          type: "p",
          texte:
            "Midnight n'enregistre aucun taux. Il compte des unités : une unité de dette, c'est l'obligation de rembourser 1 USDC à l'échéance ; une unité de crédit, c'est le droit de recevoir 1 USDC à l'échéance. Prêter, c'est acheter des unités de crédit aujourd'hui, un peu moins d'1 USDC chacune. Emprunter, c'est en vendre.",
        },
        {
          type: "def",
          terme: "Obligation zéro-coupon",
          slug: "zero-coupon",
          texte:
            "Un titre de dette qui ne verse aucun intérêt en cours de route : il s'achète moins cher que sa valeur de remboursement, et le gain est l'écart entre les deux. Les bons du Trésor américains à court terme fonctionnent ainsi. Une unité de crédit Midnight en est l'équivalent.",
        },
        {
          type: "p",
          texte:
            "Le taux se déduit du prix. Si tu paies 0,95 USDC pour recevoir 1 USDC, tu gagnes 0,05 sur 0,95, soit environ 5,26 % sur la période (1 ÷ 0,95 − 1). Ramené à l'année, ce taux dépend de la durée : payer 0,99 pour recevoir 1 dans trois mois rapporte environ 1 % sur la période, soit environ 4 % par an (1 % × 4).",
        },
        {
          type: "p",
          texte:
            "Le taux est verrouillé au moment où l'échange est réglé. Ensuite, tu ne prêtes pas à une personne : ta créance porte sur l'ensemble du marché, que tu partages avec les autres prêteurs de la même échéance.",
        },
        {
          type: "def",
          terme: "APR et APY",
          texte:
            "Deux façons d'annualiser un taux. L'APR multiplie simplement le taux de la période (1 % sur trois mois = 4 % d'APR) ; l'APY suppose que les intérêts sont réinvestis et produisent eux-mêmes des intérêts. À taux égal, l'APY est un peu plus élevé.",
        },
        {
          type: "note",
          ton: "info",
          titre: "Comparer Midnight à Blue ou à Aave",
          texte:
            "Depuis le 9 octobre 2026, l'app Morpho affiche les taux de Midnight en APR, alors que Blue, les Vaults et Aave affichent un APY. Autour de 4 à 5 %, l'écart ne dépasse pas 0,1 point (un APY de 4,5 % correspond à un APR d'environ 4,4 %), mais il faut le savoir avant de comparer.",
        },
        {
          type: "st",
          texte: "3. Makers, takers et routers : qui propose, qui accepte",
        },
        {
          type: "p",
          texte:
            "Le taux naît de la rencontre de deux rôles :",
        },
        {
          type: "liste",
          items: [
            "le maker publie une offre : un prix et un montant maximum, sur un marché donné. Il la signe dans son wallet, sans transaction ni frais de réseau : l'offre circule hors de la blockchain, par l'app Morpho ou par d'autres canaux ;",
            "le taker accepte une offre en la soumettant au contrat, qui règle l'échange d'un bloc. Il peut n'en prendre qu'une partie, et plusieurs takers peuvent se partager la même offre.",
          ],
        },
        {
          type: "p",
          texte:
            "Concrètement, un prêteur qui veut un taux précis publie une offre et attend qu'un emprunteur l'accepte ; un prêteur pressé accepte l'offre d'un emprunteur déjà publiée. Il en va de même côté emprunteur.",
        },
        {
          type: "p",
          texte:
            "Midnight ne tient pas de carnet d'ordres central : il ne classe pas les offres et ne réserve pas l'argent des makers. Chercher les meilleures offres exécutables est le travail des routers, des programmes extérieurs au protocole que n'importe qui peut écrire (on parle ailleurs de solveurs) ; l'app Morpho en fait office pour l'utilisateur.",
        },
        {
          type: "p",
          texte:
            "Une même signature peut aussi couvrir plusieurs marchés et échéances, avec un budget commun : le prêteur n'a pas à répartir son argent d'avance entre les échéances.",
        },
        {
          type: "st",
          texte: "4. Prêter sans immobiliser son argent en attendant",
        },
        {
          type: "p",
          texte:
            "Un maker peut demander que ses fonds ne soient prélevés qu'au moment où son offre est acceptée (un mécanisme appelé callback). En attendant, son USDC peut rester déposé sur Morpho Blue, où il rapporte le taux variable. Paul Frambot en tire un plancher : au pire, le prêteur touche le variable ; au mieux, un taux fixe plus élevé s'il trouve preneur.",
        },
        {
          type: "p",
          texte:
            "Deux limites. C'est une possibilité, pas un réglage automatique : il faut que l'interface utilisée le propose. Et comme rien n'est réservé, une offre visible n'est pas forcément exécutable au moment où on veut la prendre : l'argent peut être parti ailleurs entre-temps.",
        },
        {
          type: "st",
          texte: "5. Pendant le prêt",
        },
        {
          type: "p",
          texte:
            "Côté emprunteur, le taux est fixe, pas la valeur de la garantie. Si elle baisse trop, l'emprunteur est liquidé avant l'échéance, comme sur Blue. Exemple, en chiffres ronds : tu déposes 150 $ de bitcoin sur un marché à 86 % et tu empruntes 100 USDC. Tu es liquidé si ta garantie tombe sous environ 116 $ (100 ÷ 0,86), soit une baisse d'environ 22 %. La liquidation est alors plafonnée : un petit dépassement du seuil ne fait pas vendre toute la garantie.",
        },
        {
          type: "p",
          texte:
            "L'emprunteur peut aussi rembourser à tout moment (1 USDC efface 1 unité de dette), ou racheter des unités à un prêteur qui veut sortir.",
        },
        {
          type: "p",
          texte:
            "Côté prêteur, il n'y a pas de bouton « retirer ». Pour sortir avant l'échéance, il revend ses unités de crédit dans le même système d'offres, au prix qu'un acheteur accepte. Si les taux ont monté entre-temps, ce prix a baissé.",
        },
        {
          type: "p",
          texte:
            "Exemple : tu as payé 99 pour recevoir 100 dans trois mois. Un mois plus tard, les prêteurs exigent désormais 8 % par an. Pour les deux mois restants, cela fait environ 1,33 % (8 % × 2 ÷ 12) : ta créance ne se revend plus qu'environ 98,7 (100 ÷ 1,0133), moins que tes 99. Dit simplement : le taux est fixe si tu vas jusqu'à l'échéance ; si tu sors avant, tu sors au prix du jour, et à condition de trouver un acheteur.",
        },
        // [IMAGE] 05-midnight-carnet-ordres-25dec.jpg — légende proposée : « Les offres du
        // marché du 25 décembre (USDC contre bitcoin, Ethereum), sur l'app Morpho le 10 novembre
        // 2026 : un bloc d'offres au prix du marché, puis quelques offres à des prix bien plus
        // bas. Au-delà du premier bloc, revendre sa créance coûte cher. Instantané. »
        {
          type: "st",
          texte: "6. À l'échéance : rembourser, reconduire ou être liquidé",
        },
        {
          type: "p",
          texte:
            "Midnight ne prévoit ni pénalité de retard ni prolongation automatique. Passé l'échéance, toute dette non remboursée peut être liquidée, même si la garantie vaut largement plus que la dette : c'est ce qui permet aux prêteurs de récupérer leur argent à la date promise.",
        },
        {
          type: "p",
          texte:
            "Cette liquidation se fait par une enchère hollandaise, dont le prix évolue en faveur de l'acheteur jusqu'à ce que quelqu'un se présente. À l'échéance, le liquidateur rembourse la dette et reçoit en échange autant de garantie, sans bonus. Puis son bonus monte régulièrement pendant 60 minutes, jusqu'à un plafond qui dépend du seuil de liquidation : environ 4,4 % sur un marché à 86 %.",
        },
        {
          type: "p",
          texte:
            "Exemple : tu dois 100 USDC à l'échéance et ta garantie vaut 150 $ de bitcoin. Si personne ne liquide tout de suite, un liquidateur peut, au bout d'une heure, rembourser tes 100 USDC et prendre environ 104,4 $ de bitcoin. Il te reste environ 45,6 $ de garantie, au lieu des 50 $ que tu aurais gardés en remboursant toi-même.",
        },
        {
          type: "p",
          texte:
            "Pour continuer après l'échéance, l'emprunteur peut reconduire son prêt (le roll) : en une transaction, il rembourse l'échéance en cours et emprunte sur la suivante. Ce n'est pas automatique, et il lui faut une offre de prêteur en face, au taux du moment, qui peut être plus élevé.",
        },
        {
          type: "p",
          texte:
            "Le prêteur, lui, récupère 1 USDC par unité de crédit, mais seulement à mesure que l'argent revient dans le marché, par les remboursements ou les liquidations. Après l'échéance, on peut encore échanger des unités, mais plus augmenter sa dette.",
        },
        {
          type: "st",
          texte: "7. Si la garantie ne couvre pas la dette",
        },
        {
          type: "def",
          terme: "Bad debt (mauvaise dette)",
          texte:
            "La part d'un prêt qui reste impayée une fois toute la garantie vendue. Elle apparaît quand le prix de la garantie chute trop vite pour que la liquidation suffise.",
        },
        {
          type: "p",
          texte:
            "Sur Midnight, la perte est constatée tout de suite et répartie entre tous les prêteurs du marché, au prorata de leurs créances. Exemple : un emprunteur doit 100 000 USDC, sa garantie ne rapporte que 90 000 USDC une fois vendue. Les 10 000 manquants sont répartis : si tu détiens 5 % des créances du marché, tu perds 500 USDC. Les autres marchés ne sont pas touchés.",
        },
        {
          type: "p",
          texte:
            "Un point moins visible : un prêteur est exposé à toutes les garanties que son marché accepte, pas seulement à celles que les emprunteurs ont déposées le jour où il prête. Sur un marché qui accepte plusieurs actifs, le plus fragile fixe le niveau de risque.",
        },
        {
          type: "st",
          texte: "8. Ce que personne ne peut changer, et ce qui peut l'être",
        },
        {
          type: "p",
          texte:
            "Les contrats de Midnight sont immuables : personne ne peut les modifier, les mettre en pause ni changer les règles d'un marché existant. Le pouvoir de la gouvernance (les détenteurs de MORPHO) se limite à :",
        },
        {
          type: "liste",
          items: [
            "ajouter de nouveaux seuils de liquidation à une liste fermée (de 38,5 % à 100 %), jamais en retirer ;",
            "activer des frais, dans des plafonds inscrits dans le code : au plus 0,5 % par an sur chaque échange, payé par le taker, et au plus 1 % par an sur les créances des prêteurs.",
          ],
        },
        {
          type: "p",
          texte:
            "Au 10 novembre 2026, le protocole ne prélevait rien : les marchés consultés affichaient des frais à zéro, et DeFiLlama ne lui attribuait aucun revenu sur 30 jours. Les rôles techniques prévus par le livre blanc (réglage des frais, de la grille de prix) existent, mais nous n'avons pas trouvé qui les détient.",
        },
        {
          type: "p",
          texte:
            "Un créateur de marché peut aussi en restreindre l'accès dès sa création, par exemple aux seules adresses vérifiées (KYC). Cette restriction ne peut pas empêcher quelqu'un de sortir d'un marché.",
        },
      ],
    },
    {
      titre: "Le taux fixe en DeFi : qui fait quoi",
      blocs: [
        {
          type: "p",
          texte:
            "Le prêt à taux fixe n'est pas une idée neuve en DeFi, mais il n'a jamais décollé : plus de 95 % des prêts des grands protocoles étaient à taux variable et sans échéance début 2026, selon Four Pillars. Voici où en sont les principales offres au 10 novembre 2026.",
        },
        {
          type: "tableau",
          entetes: ["Protocole", "Comment le taux est fixé", "Taux fixe pour l'emprunteur ?", "Où il en est"],
          lignes: [
            [
              "Morpho Midnight",
              "Offres signées par les participants ; le taux est le prix d'une créance zéro-coupon",
              "Oui, jusqu'à l'échéance",
              "En ligne depuis juillet 2026 (Base) et septembre 2026 (Ethereum) ; distribué par Coinbase",
            ],
            [
              "Aave",
              "Formule selon l'utilisation : taux variable. Le taux du GHO, son stablecoin, est fixé par la gouvernance et modifiable, sans échéance",
              "Non",
              "Son « taux stable », réajustable, a été coupé en novembre 2023 après un bug critique signalé. Rachat de l'équipe d'Avon le 6 novembre 2026, sans produit ni date annoncés",
            ],
            [
              "Spark (IRIS)",
              "Cotations proposées au-dessus de SparkLend",
              "Oui, d'après l'annonce",
              "Annoncé le 9 novembre 2026, pas encore étudié en détail",
            ],
            [
              "Pendle",
              "Achat d'un PT avec une décote, remboursé à l'échéance",
              "Non : le taux est fixe pour le prêteur (l'acheteur de PT) seulement",
              "En ligne depuis 2021 ; marchés sur l'USDe de 3 à 12 mois ouverts avec Ethena le 10 novembre 2026",
            ],
            [
              "Term Finance",
              "Enchères périodiques, une par échéance",
              "Oui",
              "En ligne, mais ses dépôts sont aujourd'hui faibles",
            ],
            [
              "Notional V3",
              "Marchés à échéance",
              "Oui",
              "A cessé ses activités fin 2025 après de la bad debt",
            ],
            [
              "Yield Protocol",
              "Marchés à échéance",
              "Oui",
              "Fermé fin 2023, faute de demande durable d'emprunt à taux fixe",
            ],
          ],
        },
        {
          type: "p",
          texte:
            "Dit simplement : parmi les offres en ligne que nous avons étudiées, Midnight est aujourd'hui la seule de taille notable à proposer un vrai taux fixe des deux côtés, prêteur et emprunteur. Pendle fixe le rendement du prêteur, pas le coût de l'emprunteur ; Aave n'a rien de comparable en service.",
        },
        {
          type: "st",
          texte: "Pourquoi le taux fixe n'avait jamais pris",
        },
        {
          type: "p",
          texte: "D'après Four Pillars et Blockstories, trois raisons :",
        },
        {
          type: "liste",
          items: [
            "les emprunteurs étaient surtout des spéculateurs, qui voulaient ouvrir et fermer un levier à tout moment : payer pour figer un taux ne leur servait à rien ;",
            "le prêteur était perdant face à Aave : il bloquait son argent pour un taux à peine meilleur, quand Aave payait à peu près autant avec un retrait immédiat ;",
            "la liquidité était émiettée : chaque couple actif × échéance formait un petit marché peu profond, aux écarts de prix importants.",
          ],
        },
        {
          type: "st",
          texte: "Ce que Midnight change, et ce qu'il ne change pas",
        },
        {
          type: "liste",
          items: [
            "Le prêteur n'immobilise plus son argent en attendant preneur (étape 4).",
            "Une même offre peut couvrir plusieurs échéances (étape 3) : une réponse au morcellement, encore à prouver à grande échelle.",
            "Coinbase apporte une distribution grand public : depuis le 22 septembre 2026, ses clients empruntent de l'USDC contre leur bitcoin à taux fixe, remboursable en fin de mois, via Midnight sur Base. Taux non publiés ; pays couverts non confirmés.",
            "Ce qui ne change pas : la sortie du prêteur avant l'échéance « dépend de la demande disponible sur le marché secondaire », écrit Morpho lui-même.",
          ],
        },
        {
          type: "p",
          texte:
            "Paul Frambot présente Midnight comme un produit pour les institutions, qui veulent maîtriser leurs contreparties et surtout leur coût, plutôt que pour les particuliers. Sentora, qui analyse la DeFi et gère des vaults, rappelle le revers : la liquidité affichée dans les offres n'est pas réservée, donc pas forcément exécutable, et la croissance devra venir d'une demande récurrente des emprunteurs, pas d'incitations.",
        },
      ],
    },
    {
      titre: "Ce que ça rapporte, ce que ça coûte",
      blocs: [
        {
          type: "p",
          texte:
            "Le rendement du prêteur vient entièrement de l'emprunteur : c'est la décote à laquelle il achète ses unités de crédit, payée par celui qui les vend pour emprunter. Il n'y a pas d'émission de jetons derrière, et le protocole ne prélève pas de frais pour l'instant (voir l'étape 8).",
        },
        {
          type: "p",
          texte:
            "Les taux changent à chaque nouvelle offre, et DeFiLlama ne les publie pas : on les lit sur l'app Morpho, marché par marché. Au relevé du 10 novembre 2026, sur les marchés principaux (USDC contre du bitcoin ou de l'ETH, sur Ethereum) :",
        },
        {
          type: "liste",
          items: [
            "le taux fixe d'emprunt était dans la même zone que le taux variable d'Aave sur l'USDC : l'emprunteur ne paie pas moins cher, il paie pour savoir ;",
            "le prêteur touchait un peu plus que sur Aave, en échange d'un argent bloqué jusqu'à l'échéance, sauf revente : l'écart était mince ;",
            "plus l'échéance est lointaine, plus emprunter coûte cher, comme pour les obligations.",
          ],
        },
        // [IMAGE] 06-midnight-courbe-taux.jpg — légende proposée : « La courbe des taux d'un
        // marché Midnight (USDC contre bitcoin, Ethereum) sur l'app Morpho, le 10 novembre
        // 2026 : emprunter coûte plus cher à mesure que l'échéance s'éloigne. Instantané. »
        {
          type: "p",
          texte:
            "Pour une fourchette sur un an, il est trop tôt : Midnight n'a que quatre mois d'existence. Pour comparer avec un placement à taux variable sur Morpho, la carte « Chiffres en direct » en haut de page donne le rendement actuel d'un grand vault USDC.",
        },
        {
          type: "note",
          ton: "alerte",
          titre: "Les offres à taux très élevés",
          texte:
            "Sur certains marchés, l'app affiche des offres à des taux trois ou quatre fois plus élevés que le reste du marché. Elles portent sur de petits montants, ou peuvent être des offres anciennes jamais retirées : ce n'est pas le taux du marché. Regarde toujours le montant disponible au taux affiché.",
        },
      ],
    },
    {
      titre: "Le jeton MORPHO",
      blocs: [
        {
          type: "p",
          texte:
            "Le MORPHO est un jeton de gouvernance. Sur des contrats immuables, la gouvernance contrôle peu de chose (étape 8).",
        },
        {
          type: "p",
          texte:
            "Morpho a réorganisé sa structure avec l'objectif affiché de faire revenir la valeur de l'entreprise au jeton : Morpho Labs, la société qui développe le protocole, est devenue une filiale de l'Association Morpho, contrôlée par les détenteurs de MORPHO. Le jeton ne donne pas droit, à ce jour, à une part des revenus, à notre connaissance.",
        },
      ],
    },
    {
      titre: "Les risques",
      blocs: [
        {
          type: "p",
          texte:
            "Niveau proposé : 🟡 Moyen pour prêter ou emprunter sur les marchés principaux de Midnight (USDC contre du bitcoin ou de l'ETH) ; nous le justifions en fin de section. Les marchés sur des jetons peu échangés, que n'importe qui peut créer, relèvent d'un risque élevé.",
        },
        {
          type: "st",
          texte: "1. Si tu prêtes à taux fixe",
        },
        {
          type: "liste",
          items: [
            "Une sortie anticipée qui dépend des acheteurs (étape 5). Au 10 novembre 2026, les offres capables de racheter une créance au prix du marché se comptaient en quelques millions de dollars par marché.",
            "Un remboursement au rythme des emprunteurs : à l'échéance, ton argent revient à mesure que les prêts sont remboursés ou liquidés (étape 6).",
            "Des pertes partagées : la bad debt de ton marché est répartie entre tous ses prêteurs, toi compris, et plus vite que sur Blue (étape 7).",
            "Toutes les garanties du marché, y compris la plus fragile (étape 7).",
          ],
        },
        {
          type: "st",
          texte: "2. Si tu empruntes à taux fixe",
        },
        {
          type: "liste",
          items: [
            "Le taux est fixe, pas ta garantie : tu peux être liquidé avant l'échéance (étape 5).",
            "Rembourser à la date, quoi qu'il arrive : sans les USDC le jour de l'échéance, ta garantie est mise aux enchères, même si ton prêt est sain, et tu perds jusqu'à environ 4,4 % de la dette remboursée, sous forme de garantie cédée en plus au liquidateur (voir l'exemple de l'étape 6).",
            "Une reconduction non garantie : il faut une offre de prêteur sur l'échéance suivante (étape 6).",
          ],
        },
        {
          type: "st",
          texte: "3. Les contrats",
        },
        {
          type: "p",
          texte:
            "Midnight a été audité par quatre sociétés (Spearbit, Stermi, Blackthorn, Trust Security), vérifié formellement avec Certora, et soumis à une compétition publique sur Cantina en mai 2026, dotée de jusqu'à 400 000 $ de prix d'après le blog de Morpho. Il est couvert par le programme de bug bounty permanent de Morpho sur Cantina, qui affiche jusqu'à 2,5 M$ pour une faille critique.",
        },
        {
          type: "p",
          texte:
            "Le revers de l'immuabilité : si une faille apparaît, personne ne peut mettre le contrat en pause. Et le code est jeune : un peu moins de quatre mois sur Base, deux mois sur Ethereum. Comme pour tout protocole DeFi, le risque de hack n'est jamais à exclure.",
        },
        {
          type: "st",
          texte: "4. Ce que Morpho a déjà connu",
        },
        {
          type: "liste",
          items: [
            "Octobre 2024 : environ 230 000 $ ont été retirés d'un marché Blue PAXG/USDC, dont l'oracle avait été mal configuré et surévaluait l'or. Seul ce marché a perdu : c'est le revers de la création libre de marchés.",
            "Avril 2025 : une faille dans l'interface de Morpho, pas dans les contrats, a permis une attaque d'environ 2,6 M$. La transaction a été interceptée par un hacker éthique (c0ffeebabe.eth) avant le vol, et les fonds ont été sauvés.",
            // Sous-puces : le type « liste » est plat ; les deux items « ↳ » suivants sont les sous-puces de celui-ci (à rendre en retrait si on ajoute ce cas au type).
            "Novembre 2025 : Stream Finance annonce la perte de 93 M$ confiés à un gérant externe, et son stablecoin xUSD perd environ 77 %. Beaucoup de marchés qui l'acceptaient en garantie utilisaient un oracle qui affichait un prix fixe, sans suivre sa chute. Selon les analyses publiées après l'incident, deux effets sur Morpho :",
            "↳ une exposition limitée : un seul vault sur environ 320 (celui de MEV Capital), avec environ 700 000 $ de bad debt ;",
            "↳ un choc de liquidité : face aux retraits simultanés, même des vaults USDC non exposés (Steakhouse, Gauntlet) sont devenus temporairement impossibles à vider, par prudence et non à cause de pertes. L'isolation des marchés limite les pertes, pas le risque de ne pas pouvoir retirer tout de suite.",
          ],
        },
        {
          type: "p",
          texte:
            "Dit simplement : le cœur de Morpho n'a jamais été piraté. Les pertes sont venues des bords : un marché mal paramétré, une interface, une garantie fragile choisie par certains curateurs, et un épisode où des vaults sains sont restés un temps impossibles à vider.",
        },
        {
          type: "st",
          texte: "5. La concentration et la liquidité affichée",
        },
        {
          type: "liste",
          items: [
            "L'activité est concentrée : au 10 novembre 2026, environ les trois quarts des prêts en cours sur Midnight arrivaient à échéance le même jour, le 25 décembre 2026, sur quelques marchés. Beaucoup d'emprunteurs devront rembourser ou reconduire au même moment.",
            "Les offres ne bloquent pas d'argent : les montants affichés peuvent surestimer ce qui est réellement mobilisable (voir l'étape 4).",
            "Les oracles : choisis par le créateur de chaque marché, établis sur les marchés principaux, de qualité variable ailleurs.",
          ],
        },
        {
          type: "note",
          ton: "avis",
          titre: "Pourquoi « moyen »",
          texte:
            "Nous ne le classons pas en risque faible parce que Midnight n'a que quelques mois, sans période de stress traversée, que la sortie avant l'échéance dépend d'acheteurs encore peu nombreux, et qu'aucune pause n'est possible en cas de faille. Nous ne le classons pas en risque élevé parce que, sur les marchés principaux, le prêteur est couvert par du bitcoin ou de l'ETH qui valent nettement plus que le prêt, et que le code a été examiné de près. Sur les marchés exotiques, le niveau passe à élevé.",
        },
      ],
    },
    {
      titre: "Pourquoi ça compte",
      blocs: [
        {
          type: "p",
          texte:
            "Aux États-Unis, environ 96 % des crédits immobiliers en cours sont à taux fixe (FHFA) ; en DeFi, plus de 95 % des prêts sont à taux variable (Four Pillars). Les deux crédits ne sont pas de même nature, mais l'écart dit ce qui manque à la DeFi pour servir des entreprises, des fonds ou des trésoriers, qui ont besoin de connaître leur coût à l'avance.",
        },
        {
          type: "p",
          texte:
            "Midnight est la tentative la plus avancée pour combler ce manque, et la concurrence a réagi la même semaine (voir le tableau). Le taux fixe devient une catégorie. Le risque, c'est que chaque acteur ouvre son propre carnet et recrée, entre protocoles, le morcellement qui a tué les tentatives précédentes.",
        },
        // [IMAGE] 01-defillama-midnight.jpg — légende proposée : « Midnight sur DeFiLlama, le
        // 10 novembre 2026 : la TVL compte les garanties déposées, les prêts en cours sont
        // mesurés à part. La forte hausse date de fin octobre 2026. » (Ne pas citer les
        // montants dans la légende : ils sont dans la carte « Chiffres en direct ».)
        {
          type: "p",
          texte:
            "Côté taille, Midnight reste petit à côté de Morpho Blue (voir les chiffres en direct en haut de page).",
        },
        {
          type: "st",
          texte: "Ce qu'on surveillera",
        },
        {
          type: "liste",
          items: [
            "le branchement des Vaults sur Midnight, annoncé pour le quatrième trimestre 2026 : il ouvrirait le taux fixe aux milliards déjà déposés dans les vaults, côté prêteurs, là où l'offre manque ;",
            "la profondeur des offres capables de racheter la créance d'un prêteur avant l'échéance : c'est elle qui dira si l'on peut sortir sans perte notable ;",
            "le passage de la grosse échéance du 25 décembre 2026 : combien de prêts seront reconduits, et à quel taux.",
          ],
        },
        {
          type: "note",
          ton: "avis",
          titre: "Notre lecture",
          texte:
            "Midnight résout bien le problème de l'entrée : prêter à taux fixe ne coûte plus rien en attendant preneur, et emprunter à taux connu coûte à peu près le prix du variable. Le vrai test est la sortie. Tant que revendre sa créance repose sur quelques millions de dollars d'offres par marché, Midnight est un outil pour qui peut attendre l'échéance : un emprunteur qui veut fixer son coût, un prêteur dont l'argent n'a pas besoin de bouger. Le branchement des vaults dira si des prêteurs passifs arrivent en nombre.",
        },
      ],
    },
  ],
  pointsCles: [
    "Morpho propose trois produits : Blue (marchés isolés à taux variable), les Vaults (un curateur place tes dépôts pour toi) et Midnight (prêt à taux fixe jusqu'à une échéance).",
    "Sur Midnight, le taux est un prix : prêter, c'est acheter à moins d'1 USDC le droit de recevoir 1 USDC à l'échéance, comme une obligation zéro-coupon.",
    "Les participants publient des offres signées, d'autres les acceptent ; le taux est verrouillé à l'échange. En attendant preneur, l'argent d'un prêteur peut rester sur Blue, au taux variable.",
    "À l'échéance, rien n'est prolongé : une dette non remboursée est mise aux enchères pendant 60 minutes, même si le prêt est sain. Reconduire demande une offre en face.",
    "Le prêteur peut sortir avant l'échéance seulement en revendant sa créance, au prix du jour et s'il trouve un acheteur ; la bad debt est partagée entre les prêteurs du marché.",
    "Contrats immuables et très audités, sans pause possible ; Coinbase distribue Midnight, Aave n'a pas de taux fixe en service.",
  ],
  verdict:
    "Risque proposé : MOYEN sur les marchés principaux, élevé sur les marchés exotiques. Morpho a construit un socle de prêt solide, dont le cœur n'a jamais été piraté ; Midnight y ajoute un taux fixe distribué à grande échelle grâce à Coinbase. C'est un outil lisible pour qui peut attendre l'échéance ; pour retirer son argent à tout moment, le variable de Blue ou d'un vault reste plus adapté, tant que la revente des créances reste peu profonde. Ce contenu n'est pas un conseil en investissement.",
  sources: [
    { label: "Documentation Morpho — Midnight : concept, offres, liquidations, API", href: "https://docs.morpho.org/learn/concepts/midnight/" },
    { label: "Livre blanc de Midnight (Morpho Association, mai 2026)", href: "https://morpho.org/whitepapers/midnight-whitepaper.pdf" },
    { label: "GitHub Morpho — Midnight et rapports d'audit", href: "https://github.com/morpho-org/midnight/tree/main/audits" },
    { label: "Blog Morpho — « Securing Morpho Midnight »", href: "https://morpho.org/blog/securing-morpho-midnight" },
    { label: "Blog Morpho — « How onchain credit is evolving with offer-based markets »", href: "https://morpho.org/blog/how-onchain-credit-is-evolving-with-offer-based-markets" },
    { label: "Blog Morpho — « Connecting Morpho Vaults to Morpho Midnight »", href: "https://morpho.org/blog/connecting-morpho-vaults-to-midnight" },
    { label: "Blog Morpho — « The Morpho Effect: September 2026 »", href: "https://morpho.org/blog/the-morpho-effect-september-2026" },
    { label: "Blog Morpho — Coinbase lance des prêts à taux fixe avec Midnight (22 septembre 2026)", href: "https://morpho.org/blog/coinbase-launches-fixed-rate-crypto-backed-loans-powered-by-morpho-midnight" },
    { label: "The Block — lancement de Midnight sur Base (21 juillet 2026)", href: "https://www.theblock.co/news/defi/2026-07-21-morpho-midnight-fixed-rate-lending-protocol-base-onchain-credit-markets-409062" },
    { label: "Programme de bug bounty Morpho (Cantina)", href: "https://cantina.xyz/bounties/35a5f0a1-2ffd-432c-8f3b-77d169add8c3" },
    { label: "Application Morpho — marchés à taux fixe, écrans relevés le 10 novembre 2026", href: "https://markets.morpho.org/fixed" },
    { label: "DeFiLlama — Morpho Midnight (méthodologie TVL et prêts en cours)", href: "https://defillama.com/protocol/morpho-midnight" },
    { label: "Aave — rachat d'Avon (6 novembre 2026)", href: "https://aave.com/blog/avon-acquisition" },
    { label: "Aave — proposition 358, désactivation du taux stable (novembre 2023)", href: "https://governance-v2.aave.com/governance/proposal/358/" },
    { label: "Four Pillars — « Fixed rates failed in the past, now it has real needs » (août 2026)", href: "https://research.4pillars.io/en/research/fixed-rates-failed-in-the-past-now-it-has-real-needs" },
    { label: "Sentora — Morpho Midnight sur Base (juillet 2026)", href: "https://sentora.com/research/articles/morpho-midnight-fixed-rate-credit-goes-live-on-base" },
    { label: "Decrypt — le xUSD de Stream Finance chute de 77 % après la perte de 93 M$ (novembre 2025)", href: "https://decrypt.co/347285/stream-finance-stablecoin-plunges-77-protocol-fund-manager-loses-93-million" },
    { label: "Sentora — la crise de liquidité DeFi de novembre 2025 : causes et effets", href: "https://sentora.com/research/articles/defi-s-november-liquidity-crunch-causes-and-impacts" },
    { label: "The Defiant — l'effondrement de Stream Finance et la bulle du looping", href: "https://thedefiant.io/news/defi/how-stream-finance-s-collapse-exposed-defi-s-looping-yield-bubble" },
    { label: "QuillAudits — analyse de l'incident PAXG/USDC (octobre 2024)", href: "https://medium.com/coinmonks/decoding-morphoblues-230k-exploit-6296565ced40" },
    { label: "Wolf Street, d'après la FHFA — part des crédits immobiliers américains à taux variable (mars 2026)", href: "https://wolfstreet.com/?p=111102" },
  ],
  iaGenere: true,
  sourceNumero: 10,
};
