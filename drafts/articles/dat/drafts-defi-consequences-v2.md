## Les conséquences en DeFi de la chute du STRC

En juin 2026, le STRC a signé sa plus forte baisse sous le pair jamais enregistrée. Nous avons étudié l'édifice étage par étage — l'action tokenisée, le stablecoin adossé au dividende, le looping par-dessus. On va maintenant étudier les conséquences de cette baisse sur chacun de ces éléments avec deux questions : qu'est-ce qui a cédé, et **pourquoi** le protocole était réglé comme il l'était.

---

### A. Le stablecoin — l'`apxUSD` a décroché, et il n'est pas remonté

L'`apxUSD` est le maillon exposé en premier, puisque c'est lui que le STRC est censé couvrir. Début juin, sur le marché secondaire, il est tombé jusqu'à **0,90 $**. Apyx a absorbé la vague de rachats qui a suivi en restant solvable — sur ce point, le mécanisme a tenu.

Ce qui distingue cet épisode de tous les précédents, c'est la suite. Le STRC était déjà passé **quatre fois** sous 95$ depuis juillet 2025, et à chaque fois le dividende avait ramené le prix vers 100 $, entraînant l'`apxUSD` avec lui. Cette fois, non : un mois plus tard, à juillet 2026, l'`apxUSD` traite toujours autour de **0,88–0,92 $**, parce que le STRC lui-même reste déprimé. [à vérifier le jour de la publication]

**Le décrochage est prévu par le design, pas subi.**

L'`apxUSD` n'est pas construit pour défendre 1 $ à tout prix : c'est un dollar de base qui **reflète la valeur de son panier de collatéral** (préférentielles + cash). Quand ce panier baisse, l'`apxUSD` baisse avec lui — la poche de cash amortit le mouvement, sans l'annuler.

Ce flottement crée un piège au moment du **rachat** : c'est le cœur de ce qu'Apyx appelle, dans son post-mortem, le « free put option ».

> **📖 L'option gratuite du premier sorti**
> Un stablecoin sur-collatéralisé garde un coussin de réserve au-dessus de sa valeur affichée. Si le protocole rembourse toujours à cette valeur affichée pendant un décrochage, le premier à sortir réalise une opération sans risque. Exemple chiffré donné par Apyx : le panier tombe à **0,98 $**, mais le coussin maintient la valeur affichée à **1 $**. Un porteur rachète alors son `apxUSD` à 1 $ et empoche **2 %** au retour à l'équilibre. Ces 2 % sortent du coussin de sur-collatéralisation — donc ils sont pris à ceux qui restent. Répété à chaque secousse, le coussin se vide.

Ce mécanisme récompense les sorties les plus rapides, pénalise ceux qui restent, et donne une raison à des acteurs hostiles de provoquer du stress pour déclencher l'arbitrage. Ce qu'Apyx a fait en juin, c'est **coter ses rachats sous la valeur affichée pendant le stress, délibérément**, pour couper ce drain. Le coussin a survécu à la plus forte baisse jamais vue du STRC.

La faille était ailleurs — dans l'affichage. Les utilisateurs lisaient une valeur sur le tableau de bord et un autre chiffre, plus bas, sur leur devis de rachat. C'est ce que corrige **Apyx 2.0**, en exposant désormais deux métriques distinctes :

- **La Redemption Value** — le prix auquel se font tous les mint et rachats, en calme comme en crise, pour tout le monde. Elle suit le panier (préférentielles + cash), amortie par la poche de cash, et sert de **plancher** où les arbitragistes interviennent.
- **La Total Collateral Value** (elle remplace le NAV) — la valeur totale de la réserve, coussin inclus. Elle peut afficher **1,02 $** quand la Redemption Value affiche 1 $ ; l'écart, c'est le coussin, désormais **visible par tous**.

Comme les rachats se font à la Redemption Value et non contre le coussin, le drain du premier sorti disparaît, et le coussin peut enfin grossir à travers les stress au lieu de fondre à chaque secousse. Apyx y ajoute un système de devis en concurrence (RFQ), où des contreparties agréées cotent le rachat demandé.

**Le contraste avec Saturn dit l'essentiel.**

Saturn Credit, le concurrent direct en dollar, **n'a pas décroché** pendant le même épisode. Ce n'est pas une meilleure gestion de crise, c'est un choix de construction. Son dollar de base, l'`USDat`, est adossé à des **bons du Trésor**, pas au STRC (Bitget News, Chainlink). L'exposition au STRC est rangée à part, dans le jeton staké `sUSDat`, celui que l'on choisit explicitement pour aller chercher le rendement et le risque associé.

La leçon tient en une phrase : **où l'on range le STRC décide si le « dollar » casse.** Apyx l'a placé sous son dollar de base — le dollar décroche avec lui. Saturn l'a isolé au-dessus — le dollar de base ne bouge pas.

---

### B. Le PT sur Pendle — décote et fuite, pas de liquidation

Un cran au-dessus, les positions Pendle. Elles ont fonctionné comme prévu tout du long. Pendle est un marché automatisé, pas une place de prêt : il n'y a **aucun mécanisme de liquidation** à son niveau. Ce qui s'y joue, c'est une décote et une fuite de liquidité, pas une vente forcée.

Les chiffres du pool le montrent. Sur le PT-apyUSD à échéance 18 juin :

- la liquidité est passée de **13,7 M$** le 1er juin à **8,6 M$** le 5 juin, soit **−37 %** en quatre jours ;
- le rendement implicite du PT a bondi de **21 % à 31 %** sur la même période, non parce que le sous-jacent rapportait davantage — il restait autour de **11,4 %** — mais parce que le PT se bradait sur un marché secondaire étroit, vendeurs plus nombreux qu'acheteurs, et que la rentabilité du PT dépends du marché du YT

> **📖 Ce que « le PT a tenu » veut vraiment dire**
> Le PT se rachète **1 pour 1 en `apxUSD`** à son échéance (18 juin), quelle que soit la décote temporaire du secondaire avant l'échéance. Mais **1:1 en `apxUSD` n'est pas 1:1 en dollars**, puisque l'`apxUSD` vaut lui-même ~0,90 $. Le PT a donc parfaitement tenu **par rapport à un jeton qui, lui, n'a pas tenu**. Celui qui avait figé son rendement en PT a récupéré ses `apxUSD` comme promis — et hérité de leur décote.

Le PT n'ajoute ni ne retire de risque au niveau du dessous : il transmet fidèlement la valeur de l'`apxUSD`, décote comprise. C'est ce que reflète sa cote aujourd'hui, autour de **0,856 $** — l'`apxUSD` décroché, vu à travers son enveloppe Pendle. [à vérifier le jour de la publication]

---

### C. Le looping, les oracles et les liquidations

C'est l'étage le plus exposé, et celui où le bilan se joue. Le looping ne s'est pas concentré sur le marché de base, mais sur les **PT de Pendle**, qui représentaient à eux seuls **73,5 % du TVL DeFi** d'Apyx (~161 M$). C'est là qu'étaient l'argent et le levier.

**Ce que dit la blockchain, marché par marché.** En interrogeant directement Morpho, on obtient un total bien supérieur aux estimations de presse : **plus de 13 millions de dollars liquidés** sur les marchés exposés au STRC en juin, contre les ~4 M$ rapportés le 5 juin.

| Marché (collatéral / dette) | Protocole | Liquidations | Montant | Bad debt|
|---|---|---|---|---|
| apyUSD / **USDC** | Apyx | 62 | **5,21 M$** | 0 |
| PT-apyUSD-18JUN / **USDC** | Apyx | 90 | **4,26 M$** | ~0 |
| sUSDat / **AUSD** | Saturn | 47 | **1,93 M$** | 0 |
| PT-apyUSD-5NOV / **USDC** | Apyx | 23 | **1,61 M$** | 0 |
| apyUSD / **apxUSD** (même monnaie) | Apyx | 6 | **0,076 M$** | 0 |

Deux enseignements sautent aux yeux.

Premier point : **tous les marchés qui empruntaient de vrais dollars** (USDC, AUSD) ont sauté, y compris le plus gros marché de looping, le `PT-apyUSD / USDC`. Le seul marché quasi épargné, `apyUSD / apxUSD`, est celui où l'on empruntait la **même monnaie** que le collatéral — 0,076 M$ liquidés, contre des millions ailleurs. Même Saturn, qui a protégé son dollar de base, a vu son jeton exposé au STRC (`sUSDat`) liquidé à hauteur de 1,93 M$ : le design d'isolation protège le « dollar », pas la poche de risque assumée à côté.

Second point : **la bad debt est nulle sur tous les marchés**. Les positions ont été liquidées, mais le collatéral a couvert la dette à chaque fois. Personne, côté prêteur, ne s'est retrouvé avec une créance impossible à recouvrer.

**Le déclencheur n'est pas l'échéance du PT, c'est le STRC lui-même.** Les liquidations sont venues en deux vagues :

- **3–5 juin** — le décrochage initial, qui concentre l'essentiel des montants ;
- **17–18 juin** — jour où le STRC touche son **plus-bas record à 82,53 $**. Le marché PT-apyUSD-**5NOV**, qui n'arrive à échéance qu'en novembre, saute lui aussi ce jour-là. Preuve que ce qui liquide, c'est le prix du STRC, pas l'arrivée à terme d'un PT.

**Pourquoi tel oracle, et quelle conséquence.** Un marché de prêt a besoin de savoir combien vaut le collatéral déposé. C'est le rôle de l'oracle — et son réglage a décidé de tout. Le principe qui organise tout le tableau tient en une règle : **l'oracle doit être accordé à la monnaie dans laquelle la dette est libellée.**

> **📖 Accorder l'oracle à la monnaie de la dette**
> - **Dette en `apxUSD` (même monnaie que le collatéral).** Ici, l'oracle du collatéral est réglé en dur sur 1 $. Ce n'est pas une négligence : les deux côtés sont en `apxUSD`, il n'y a rien à convertir en dollars, donc le rapport collatéral/dette ne bouge pas quand l'`apxUSD` décroche. La position est immunisée au dépeg — d'où les 0,076 M$ liquidés seulement.
> - **Dette en USDC (vrais dollars).** Là, il **faut** priser la vraie valeur de l'`apxUSD`. Sinon l'oracle croit le collatéral à 1 $ alors qu'il en vaut 0,90 — il ne liquide jamais, et le jour où le collatéral ne couvre plus la dette, c'est le prêteur qui encaisse la perte.

Ce second scénario — un oracle figé à 1 $ sur une dette en vrais dollars — a un précédent : la mécanique du dépeg de l'USD0++ début 2025, où un oracle aveugle au décrochage avait laissé s'accumuler de la créance douteuse. Apyx l'a évité : ses marchés en USDC utilisaient un **vrai feed de prix**, pas un « 1 $ » en dur. C'est précisément pour cette raison que juin a produit des liquidations **mais zéro créance douteuse**.

Ce vrai feed a d'ailleurs évolué après le stress. Les marchés qui ont liquidé en juin lisaient un **ratio de collatéralisation plafonné**, semi-figé autour de **0,86** — peu réactif à la panique de court terme, il n'évalue pas au prix spot instantané. Les marchés ouverts après l'épisode (échéances d'août et de novembre) sont passés à un **taux de change vivant** (`APXUSD / USD`, autour de **0,89**), qui price le décrochage réel : il liquide plus tôt et plus juste, au prix d'être plus sensible aux à-coups. La révision s'est accompagnée d'un relèvement du seuil d'emprunt (LLTV porté à 92 %).

**La leçon.** Le zéro créance douteuse ne tient pas à la chance : il tient au fait que la combinaison dangereuse — dette en USDC **et** oracle figé à 1 $ — n'a jamais été utilisée. Le bon appariement oracle/dette a protégé les **prêteurs**. Il n'a protégé ni les **loopeurs**, liquidés pour plus de 4 M$ sur le seul marché vedette, ni les **porteurs d'`apxUSD`**, toujours à −10 %. Un bon design d'oracle évite l'effondrement systémique ; il n'annule pas la perte individuelle. Pour le déposant, la sûreté d'un « rendement stable » DeFi se joue sur un choix technique qu'il ne voit jamais : l'oracle price-t-il le collatéral en vrais dollars, ou dans le même jeton bancal auquel il est déjà exposé ?

---

### D. Alors, gagné ou perdu ?

Reste à répondre à la question que se pose le lecteur qui, un mois plus tôt, voyait s'afficher **64 % par an**. Le piège est dans l'unité de compte : ce 64 % était un rendement **en `apxUSD`**, avec une hypothèse tacite — que l'`apxUSD` vaut 1 $. Il est tombé à 0,90 $ et n'est pas remonté. Le rendement n'était donc « en dollars » que tant que le jeton restait un dollar.

Trois profils, trois issues :

- **Le loopeur à levier** — celui qui empilait les boucles en empruntant de l'USDC — **a été liquidé**. Le levier a multiplié le rendement affiché à la hausse ; il a multiplié le décrochage à la baisse, dans les mêmes proportions. C'est mécaniquement lui, dont la marge de sécurité était la plus mince, qui saute en premier.
- **Le porteur non levié**, qui détenait simplement de l'`apyUSD` ou du PT, **n'a pas été liquidé** — mais il a récupéré des `apxUSD` valant ~0,90 $. Il a gardé sa position, pas sa valeur.
- **Celui qui empruntait dans la même monnaie** (collatéral `apyUSD`, dette `apxUSD`) **est passé à travers** sans liquidation, parce que collatéral et dette décrochaient ensemble. Mais son gain reste libellé en `apxUSD` : ramené en dollars, il est lui aussi à environ **−10 %**.

Le verdict est net. Personne, dans cet épisode, n'a réalisé un « 64 % en dollars ». Le survivant le mieux placé — celui qui avait choisi la même monnaie des deux côtés — a évité la liquidation, pas la décote. Un rendement à deux chiffres construit sur un jeton qui cesse d'être un dollar n'est pas un rendement en dollars : c'est un pari sur le fait qu'il le redeviendra. En juin 2026, un mois plus tard, ce n'était toujours pas le cas.

---

Ces choix de plomberie — quelle monnaie de dette, quel oracle, où ranger le collatéral risqué — ne sont qu'une partie du tableau. Ils s'ajoutent à une série de risques propres à la DeFi, qu'il faut maintenant nommer un par un.
