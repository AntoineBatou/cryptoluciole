### A. Le stablecoin — l'`apxUSD` a décroché, et il n'est pas remonté

L'`apxUSD` est le maillon exposé en premier, puisque c'est lui que le STRC est censé couvrir. Début juin, sur le marché secondaire, il est tombé jusqu'à **0,90 $**. Apyx a absorbé la vague de rachats qui a suivi en restant solvable — sur ce point, le mécanisme a tenu.

Ce qui distingue cet épisode de tous les précédents, c'est qu'il ne s'est pas refermé. Le STRC était déjà passé **quatre fois** sous 95 $ depuis juillet 2025, et à chaque fois le dividende l'avait ramené vers 100 $, entraînant l'`apxUSD` avec lui. Cette fois, non : un mois plus tard, en juillet 2026, l'`apxUSD` traite toujours autour de **0,88–0,92 $**, parce que le STRC lui-même reste en dessous de 100$. [à vérifier le jour de la publication]

C'est toutefois cohérent avec sa construction. L'`apxUSD` est le stablecoin **de base**, non rémunéré — le rendement, c'est l'`apyUSD`, sa version épargne, qui le capte. l'apxUSD n'est pas fait pour défendre 1 $ coûte que coûte : il **reflète la valeur de son panier de collatéral**, aujourd'hui bourré de STRC. Quand ce panier baisse, l'`apxUSD` baisse avec lui ; la poche de cash amortit le mouvement, sans l'annuler. Tant que le STRC ne remonte pas, il n'y a aucune raison mécanique que l'`apxUSD` revienne à 1 $.

**Le contraste avec Saturn**

Saturn Credit, le concurrent direct avec son USDat, **n'a pas décroché** pendant le même épisode. Ce n'est pas une meilleure gestion de crise, c'est un choix de construction. Son stablecoin dollar de base, l'`USDat`, est adossé à des **bons du Trésor**, pas au STRC (Bitget News, Chainlink). L'exposition au STRC est rangée à part, dans le jeton staké `sUSDat`, celui que l'on choisit explicitement pour aller chercher le rendement et le risque associé.

La leçon : **tout se décide à la construction — par quoi le stablecoin de base et le yield bearing token sont backés.** Chez Apyx, le stablecoin de base est backé par le STRC : il décroche avec lui. Chez Saturn, l'`USDat` est backé par des bons du Trésor, et l'exposition au STRC est réservée au yield bearing token, le `sUSDat` : le stablecoin de base ne bouge pas.

---

**Pour aller plus loin : pourquoi les rachats ont coté sous la valeur affichée.**

Prenons un porteur d'`apxUSD` qui, au plus fort du stress de début juin, veut sortir — non pas en revendant son jeton sur le marché, mais en le rendant directement à Apyx contre son collatéral. Sur le tableau de bord du protocole, la valeur de la réserve (le NAV) lui indique que son jeton est couvert à hauteur d'environ 1 $. Mais quand il lance sa demande de rachat, le prix que lui propose le protocole est **plus bas** que cette valeur affichée. Deux chiffres, pour le même jeton, au même instant : d'où l'incompréhension. Ce n'était pas un bug — Apyx cotait ses rachats **sous le NAV, délibérément**, pour une raison précise, qu'il détaille dans son post-mortem sous le nom de « free put option ».

> **📖 Free put option**
> Un stablecoin sur-collatéralisé garde un coussin de réserve au-dessus de sa valeur affichée. Si le protocole rembourse toujours à cette valeur affichée pendant un décrochage, le premier à sortir réalise une opération sans risque. Exemple chiffré donné par Apyx : le panier tombe à **0,98 $**, mais le coussin maintient la valeur affichée à **1 $**. Un porteur rachète alors son `apxUSD` à 1 $ et empoche **2 %**. Ces 2 % sortent du coussin de sur-collatéralisation — donc ils sont pris à ceux qui restent. Répété à chaque secousse, le coussin se vide.

Coter les rachats sous la valeur affichée permet d'éviter cette fuite. On l'a constaté en juin : la vague de rachats a été absorbée **sans que le coussin soit vidé**, alors que lors des épisodes précédents il fondait à chaque secousse, siphonné par les premiers sortis. Le correctif **Apyx 2.0** rend l'affichage cohérent avec cette pratique, en séparant deux métriques :

- **La Redemption Value** — le prix auquel se font tous les mint et rachats, en calme comme en crise ; elle suit le panier.
- **La Total Collateral Value** (elle remplace le NAV) — la valeur totale de la réserve, coussin inclus. L'écart entre les deux, c'est le coussin, désormais **visible par tous**.

Comme les rachats se font à la Redemption Value et non contre le coussin, le problème disparaît. Le rachat direct auprès du protocole, à la Redemption Value, reste ouvert à tous — c'est le plancher. Apyx ajoute par-dessus le **RFQ** (*Request for Quote*) : plutôt que d'accepter ce plancher, le porteur peut soumettre sa demande de rachat à des contreparties agréées, qui proposent chacune un prix en concurrence — il retient la meilleure offre, forcément au-dessus du plancher.

**« Mais alors, à quoi sert le coussin, si ce n'est pas à protéger en cas de coup dur ? »**

La question est légitime, et la réponse tient dans une distinction : le coussin protège toujours — mais contre les **pertes**, pas contre les **sorties**. Deux situations se ressemblent et n'ont pourtant rien à voir :

- **Une baisse temporaire de marché** (le cas de juin). Le panier cote 0,98 $ au lieu de 1 $, mais rien n'est perdu : les actions sont toujours là, le dividende tombe toujours. Rembourser à 1 $ dans ce cas, ce n'est pas protéger le porteur — c'est prélever 2 cents sur le coussin pour les remettre à celui qui part, en pariant à sa place que le prix remontera. C'est ce biais-là qu'Apyx a coupé.
- **Une perte réelle et durable.** Strategy suspend le dividende du STRC, ou le protocole doit brader ses actions pour honorer une vague de rachats. Là, de la valeur a bel et bien disparu — et c'est précisément ce que le coussin encaisse, en premier, avant les porteurs. 

C'est le rôle des fonds propres d'un assureur : ils sont là pour payer les sinistres réels, pas pour offrir un meilleur prix de sortie à ceux qui résilient pendant la tempête. Le coussin protège donc bien « en cas de complication » — mais il protège **ceux qui restent** (leur plancher de valeur), pas **ceux qui sortent** (leur prix de sortie). L'ancien système faisait l'inverse : il finançait le prix de sortie des premiers partis.

**Ce que ce choix change vraiment : un « dollar » qui assume d'être une part de fonds.**

Coter les rachats à la valeur réelle du panier n'est pas un ajustement technique, c'est un changement de nature. On passe d'une logique de **dépôt bancaire** — *ton jeton vaut 1 $, quoi qu'il arrive* — à une logique de **part de fonds** — *ton jeton vaut ce que vaut la réserve*. La finance traditionnelle a fait exactement ce chemin après 2008. Les régulateurs ont poussé les fonds monétaires de la **valeur constante** — dite CNAV, qui affiche un prix fixe et fabrique des ruées, le premier sorti récupérant 1 $ plein pendant que le fonds se vide — vers la **valeur variable** et le **swing pricing**, où celui qui sort paie le coût de sa propre sortie au lieu de le faire porter à ceux qui restent. Apyx a, en somme, réinventé le swing pricing en version on-chain.

Les gains sont réels :

- **Il tue le moteur du bank run.** Une ruée se nourrit d'une asymétrie : sortir tôt rapporte plus que rester. Au rachat à la valeur réelle, cette prime de panique disparaît — le premier et le dernier sorti obtiennent le même prix. Un mécanisme testé grandeur nature en juin.
- **Le coussin peut enfin croître à travers les crises.** N'étant plus siphonné par les premiers sortis, il reste entier pour ce à quoi il sert vraiment — absorber les pertes réelles.
- **Il décourage les attaques.** Fabriquer du stress — vendre du STRC pour déclencher une vague de rachats — n'offre plus de profit garanti, puisqu'il n'y a plus de 1 $ plein à capter en sortie.
- **Il rend la confiance vérifiable.** Le prix de rachat suit un panier réel et le coussin est affiché pour tous (la Total Collateral Value) : on ne demande plus de croire une promesse, on peut lire l'état de la réserve.

Mais le choix a un coût structurel, et plusieurs angles morts :

- **Ce n'est plus un stablecoin au sens fort.** Le rachat à 1 $ exactement est précisément le mécanisme qui force le retour au pair chez un USDC ou un USDT : dès que le prix s'écarte, l'arbitrage le referme. En cotant à la valeur du panier, Apyx renonce à cette ancre —
- **Le stress se déplace vers le marché secondaire.** Si le rachat direct « cote juste », ceux qui veulent sortir vite passent par le marché — et la décote y devient publique et durable. Tout ce qui lit ensuite ce prix le répercute, à commencer par les marchés de prêt où l'`apxUSD` (ou un PT qui en dépend) sert de collatéral.
- **Le juge reste partie.** Qui calcule la Redemption Value ? Apyx lui-même. En juin, la cotation sous le NAV était discrétionnaire et opaque — c'est elle qui a nourri l'incompréhension décrite plus haut. Le 2.0 formalise la métrique, mais le protocole garde un intérêt à coter bas pendant le stress : sous-coter de trop spolie les sortants, coter trop haut rouvre le drain. Et la frontière entre baisse temporaire et perte durable est floue — juin le prouve : un mois sous le pair sans repeg, est-ce temporaire ou durable ? Personne ne le sait encore, et c'est Apyx qui tranche, via son calcul de la Redemption Value.
- **Le coussin visible peut devenir un point de panique** — et là, c'est **notre hypothèse**, pas un constat. Rendre public l'écart entre Total Collateral Value et Redemption Value en fait un indicateur suivi de tous ; s'il fondait vers zéro sous les yeux du marché, cette transparence même pourrait déclencher la sortie qu'elle était censée prévenir.

> **📖 Le trilemme du « dollar » adossé à un actif risqué**
> Au fond, un « dollar » adossé à un actif risqué doit choisir entre trois cases, sans pouvoir les cumuler :
> 1. **Promettre 1 $** coûte que coûte — et fabriquer une ruée le jour où le panier ne vaut plus 1 $. C'était Apyx avant son correctif, remboursant au 1 $ affiché pendant que le coussin se vidait — et, en version extrême, le Terra/UST de 2022, mort d'une ruée en une semaine.
> 2. **Coter la vraie valeur** du panier — et assumer de flotter, sans ancre qui ramène au pair. C'est le choix d'Apyx depuis son correctif.
> 3. **Ne pas backer le stablecoin de base par l'actif risqué** — le réserver au yield bearing token. C'est le choix de Saturn, décrit plus haut.

Juin 2026 a mis les trois cases à l'épreuve en même temps — ce qui est rare.
