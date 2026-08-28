## Les conséquences en DeFi de la chute du STRC

En juin 2026, le STRC a signé sa plus forte baisse sous le pair jamais enregistrée. On a construit l'édifice étage par étage ; on va maintenant le redescendre sous le choc, dans l'ordre inverse — du stablecoin de base jusqu'aux positions loopées — pour voir ce qui a cédé et ce qui a tenu.

---

### Étage 1 — le stablecoin : l'`apxUSD` a décroché, et il n'est pas remonté

L'`apxUSD` est le maillon exposé en premier, puisque c'est lui que le STRC est censé couvrir. Début juin, il est tombé jusqu'à **0,90 $** sur le marché secondaire. Apyx a traité la vague de rachats qui a suivi en restant solvable — sur ce point, le mécanisme a tenu.

Ce qui change de tous les épisodes précédents, c'est la suite. Le STRC était déjà passé **quatre fois** sous −5 % de son pair depuis juillet 2025, et à chaque fois le dividende avait ramené le prix vers 100 $, entraînant l'`apxUSD` avec lui. Cette fois, non : à juillet 2026, l'`apxUSD` traite toujours autour de **0,88–0,92 $**, soit ~10 % sous le pair, parce que le STRC lui-même reste déprimé. La décote ne s'est pas résorbée. [à vérifier le jour de la publication]

C'est l'information la plus importante de cet épisode : un « dollar » adossé au STRC peut passer un mois, et plus, à 0,90 $.

**Le décrochage n'est pas un accident de tuyauterie — il est prévu par le design.**

L'`apxUSD` n'est pas conçu pour défendre 1 $ coûte que coûte. Il vise un rendement plus élevé que son panier sous-jacent, avec une volatilité plus basse (amortie par une poche de cash). Flotter fait partie du contrat.

Le cœur du raisonnement, expliqué par Apyx dans son propre post-mortem, c'est ce qu'ils appellent le **« free put option »** — l'option gratuite offerte à ceux qui sortent en premier.

> **📖 L'option gratuite du premier sorti**
> Un stablecoin sur-collatéralisé garde un coussin de réserve au-dessus de sa valeur affichée. Si le protocole rembourse toujours à cette valeur affichée pendant un décrochage, le premier arrivé fait une opération sans risque. Exemple chiffré donné par Apyx : le panier tombe à **0,98 $**, mais le buffer maintient la valeur affichée à **1 $**. Un porteur rachète alors son `apxUSD` à 1 $, rachète le panier à 0,98 $, et empoche **2 %** au repeg. Ces 2 % sortent du coussin de sur-collatéralisation — donc ils sont pris à ceux qui restent. Répété à chaque stress, le coussin se vide.

Ce mécanisme récompense les sorties les plus rapides, pénalise ceux qui restent, et donne même une raison à des acteurs hostiles de fabriquer du stress pour déclencher l'arbitrage. Ce qu'Apyx a fait en juin, c'est **coter ses rachats sous cette valeur affichée pendant le stress, exprès**, pour empêcher ce drain. Le coussin a survécu à la plus forte baisse jamais vue du STRC.

La faille était ailleurs — dans la communication. Les utilisateurs lisaient une valeur sur le tableau de bord et un autre chiffre, plus bas, sur leur devis de rachat. C'est ce que corrige **Apyx 2.0**, en affichant désormais deux métriques distinctes :

- **La Redemption Value** : le prix auquel se font tous les mint et rachats, en calme comme en crise, pour tout le monde. Elle suit le panier (préférentielles + cash), amortie par la poche de cash. C'est le **plancher** de rachat.
- **La Total Collateral Value** : la valeur totale de la réserve, coussin inclus. Elle peut afficher **1,02 $** quand la Redemption Value affiche 1 $ — l'écart, c'est le coussin, désormais **visible par tous**.

Comme les rachats se font à la Redemption Value et non contre le coussin, le drain du premier sorti disparaît, et le coussin peut enfin grossir à travers les stress au lieu de fondre à chaque secousse.

**Le contraste avec Saturn dit l'essentiel.**

Saturn Credit, le concurrent direct en dollar, **n'a pas décroché** pendant le même épisode. La raison n'est pas une meilleure gestion de crise : c'est un choix de construction. Son dollar de base, l'`USDat`, est adossé à des **bons du Trésor**, pas au STRC. L'exposition au STRC est rangée à part, dans le jeton staké `sUSDat`, celui que l'on choisit explicitement quand on veut le rendement et le risque qui va avec.

La leçon tient en une phrase : **où l'on range le STRC décide si le « dollar » casse.** Apyx l'a placé sous son dollar de base — le dollar décroche avec lui. Saturn l'a isolé au-dessus — le dollar de base ne bouge pas.

---

### Étage 2 — les PT sur Pendle : ils ont fait leur travail, sur un jeton qui n'a pas tenu

Un cran au-dessus, les positions Pendle (PT et YT). Elles ont fonctionné comme prévu tout du long, sans incident propre.

Le **PT-apxUSD** se rachète **1:1 en `apxUSD` à son échéance** (18 juin 2026 pour la série concernée), quelle que soit la décote temporaire du marché secondaire. Sur ce marché secondaire — étroit — le PT a bien subi une décote passagère sous la pression vendeuse, mais à l'échéance il a rendu ce qu'il promettait.

> **📖 Ce que « le PT a tenu » veut vraiment dire**
> Le PT rend 1 unité d'`apxUSD` par unité, à l'échéance. Mais **1:1 en `apxUSD` n'est pas 1:1 en dollars**, puisque l'`apxUSD` vaut lui-même ~0,90 $. Le PT a donc parfaitement tenu **par rapport à un jeton qui, lui, n'a pas tenu**. Celui qui avait figé son rendement en PT a récupéré ses `apxUSD` comme prévu — et hérité de leur décote.

Autrement dit, le PT n'ajoute ni ne retire de risque au niveau du dessous : il transmet fidèlement la valeur de l'`apxUSD`, décote comprise. La perte, quand il y en a une, remonte de l'Étage 1, pas de Pendle.

---

### Étage 3 — le looping et les oracles : ce que dit la blockchain

C'est l'étage le plus exposé, et c'est ici que le bilan se joue. Une précision de proportion d'abord : le looping ne s'est pas fait sur le marché de base, mais sur les **PT de Pendle**, qui concentraient à eux seuls **73,5 % du TVL DeFi** d'Apyx (~161 M$). C'est là qu'étaient l'argent et le levier.

La presse a raconté un décrochage et « plus de 4 millions de dollars de liquidations le 5 juin », sans détailler les marchés. En interrogeant directement la blockchain — l'API du protocole de prêt Morpho —, on peut aller plus loin, et documenter ce qu'aucun article n'a couvert : le sort du marché de looping le plus utilisé.

**Le facteur qui a tout décidé : la monnaie de la dette.**

> **📖 Emprunter la même monnaie, ou de vrais dollars**
> Dans une boucle, on dépose un collatéral et on emprunte contre lui. Deux cas, opposés :
> - Si on **emprunte le jeton qui décroche lui-même** (ici l'`apxUSD`), collatéral et dette perdent de la valeur ensemble. Le rapport entre les deux ne bouge pas — rien ne se liquide.
> - Si on **emprunte de vrais dollars** (l'USDC, qui ne bouge pas), seul le collatéral fond. La dette reste due au même montant, le seuil est franchi, la position saute.

Les chiffres le confirment, marché par marché. Le marché `apyUSD/apxUSD`, où l'on emprunte de l'`apxUSD`, n'a subi **aucune liquidation** : le décrochage s'annule des deux côtés, et selon Steakhouse Financial ces loopeurs étaient « structurellement isolés ». À l'inverse, **tous les marchés qui empruntaient de l'USDC ont sauté** — y compris le plus gros, celui de la boucle vedette.

**Le marché de looping vedette, vu de la blockchain.** Le marché `PT-apyUSD / USDC` (déposer le PT-apyUSD, emprunter de l'USDC — la boucle décrite plus haut) n'a rien eu d'épargné. Les données on-chain de Morpho recensent **90 liquidations, environ 4,26 millions de dollars**, en trois vagues :

| Vague | Quand | Montant liquidé |
|---|---|---|
| Le décrochage aigu | 3-5 juin | **3,42 M$** (80 %) |
| L'échéance du PT | 17-18 juin | 446 k$ |
| Après l'échéance | 24-26 juin | 399 k$ |

L'essentiel a frappé pendant le décrochage. Mais la deuxième vague, à l'**échéance du PT** le 18 juin, apprend quelque chose : un PT qui « se rachète au pair » ne protège pas un prêt en USDC — parce qu'il se rachète au pair dans un `apxUSD` qui, lui, valait ~0,90 $. Le collatéral a rendu ce qu'il promettait, en un jeton qui n'était plus à un dollar.

Un point rassure malgré tout : sur l'ensemble de ces liquidations, **la créance douteuse est quasi nulle** — moins d'un dollar au total. Le collatéral a couvert la dette à chaque fois. C'est là que l'oracle a joué son rôle : non pas empêcher les liquidations, mais les rendre **ordonnées**. En lisant une valeur de rachat qui tombe plus lentement que le prix de panique, il a évité la spirale où chaque vente forcée en déclenche une autre.

D'où une hiérarchie claire, chiffres à l'appui : **la monnaie de la dette décide *si* on est liquidé, l'oracle décide *comment*** — dans l'ordre ou dans la panique. Celui qui empile les boucles ne parie donc pas seulement sur le bitcoin et sur Strategy : il parie aussi sur la plomberie du protocole où il a déposé.

Ces choix de plomberie — quelle monnaie de dette, quel oracle, où ranger le collatéral risqué — ne sont qu'une partie du tableau. Ils s'ajoutent à une série de risques propres à la DeFi, qu'il faut maintenant nommer un par un.
