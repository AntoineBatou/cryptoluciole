### B. Le PT sur Pendle — ce que vaut vraiment un « rendement figé » quand le sous-jacent décroche

Pour rappel, le loopeur a acheté un **PT-apyUSD** sur Pendle : il a échangé son `apyUSD` contre un jeton qui lui rendra un montant connu d'avance à une échéance fixe — le 18 juin 2026 pour la série qui nous intéresse. C'est le geste qui « fige le rendement » : au lieu d'un taux qui flotte, il achète un remboursement daté. À l'échéance, ce remboursement se fait en `apxUSD` pour le montant déposé auquel s'ajoute le gain fixé lors de l'achat du PT.

La question, quand le STRC décroche, est simple : **combien vaut ce PT entre-temps, sur le marché ?** Et surtout, sa valeur dépend-elle vraiment de l'`apxUSD` en dessous ? Pour y répondre, il faut d'abord comprendre comment se forme le prix d'un PT sur Pendle.

**Comment se fixe le prix d'un PT.**

Le plus simple est de repartir de ce que fait Pendle : **séparer la possession du rendement**. Un `apyUSD` contient les deux — le capital, et le flux de dividende qu'il produit. Pendle le découpe en deux jetons vendables séparément : le **PT**, c'est la possession (remboursée en plein à l'échéance, mais qui ne verse rien entre-temps) ; le **YT**, c'est le rendement (tout le flux jusqu'à l'échéance, puis plus rien). Le droit français a un mot pour ce découpage : le PT est la **nue-propriété** du dépôt, le YT son **usufruit**.

Ces deux jetons s'échangent ensuite sur le marché de Pendle, où le prix se règle par l'offre et la demande (les échanges passent par une réserve de liquidité commune — un AMM — complétée par un carnet d'ordres à cours limité). Ce qui compte pour la suite : Pendle est une **place d'échange**, pas une place de prêt. Il n'existe **aucun mécanisme de liquidation** à ce niveau : personne n'est forcé de vendre. Quand les détenteurs de PT se ruent vers la sortie, ce qui se produit, c'est une **décote** (le PT se brade) et une **fuite de liquidité** (les apporteurs retirent leurs fonds) — pas une vente forcée.

Le prix d'un PT en dollars se décompose en **deux composantes** qu'il faut bien séparer :

- **La décote de taux.** Le PT promet un remboursement *plus tard* (à l'échéance) ; on l'achète donc *aujourd'hui* un peu moins cher que ce qu'il rendra. Cet écart, c'est le rendement fixe de l'opération, exprimé sur Pendle en **taux implicite**. Ce prix vit ensuite sa vie sur le marché secondaire, au gré de l'offre et de la demande — et pas seulement celle du PT : PT et YT s'échangent dans **le même pool**, donc acheter du YT pousse le prix du PT vers le bas, en vendre le pousse vers le haut. Mais ces variations ne concernent que celui qui **revend son PT avant l'échéance**, ou qui trade les PT. Une fois acheté, le rendement est **fixe, à condition de garder le PT jusqu'à l'échéance** : plus elle approche, plus le prix **converge mécaniquement** vers sa valeur de rachat à l'échéance, jusqu'à la rejoindre le jour du remboursement.
- **La valeur en dollars du jeton de rachat.** À l'échéance, le PT donne droit à une quantité fixe d'`apxUSD`. Mais si cet `apxUSD` ne vaut plus 1 $, la valeur en dollars du PT baisse d'autant. Cette composante-là n'a rien à voir avec Pendle — sur Pendle, tout est libellé en `apxUSD`, le dollar n'existe pas dans ce marché. C'est une **conversion**, pas un échange.

La formule tient en une ligne : **prix du PT en dollars = prix Pendle du PT (en `apxUSD`) × prix de l'`apxUSD` (en dollars)**. Un exemple chiffré : un PT à cinq mois de l'échéance cote 0,965 `apxUSD` sur Pendle. Avec un `apxUSD` à 1 $, il vaut 0,965 $. Si l'`apxUSD` tombe à 0,90 $, le PT cote **toujours 0,965 `apxUSD`** — rien n'a bougé sur Pendle — mais il ne vaut plus que ~0,87 $.


**Ce qui s'est passé en juin, chiffres à l'appui.**

Début juin, le STRC décroche et entraîne l'`apxUSD` vers 0,90 $, chacun réagit selon sa position. Les **loopeurs** cherchent à couper leur levier avant d'être liquidés — et pour rembourser une dette en USDC, on revend ses PT : c'est la **vente directe de PT** qui domine le mouvement. Les **apporteurs de liquidité**, eux, retirent leurs fonds pour ne pas rester en face des vendeurs. Sur le pool du PT-apyUSD à échéance 18 juin :

- la liquidité est passée de **13,7 M$** le 1er juin à **8,6 M$** le 5 juin, soit **−37 %** en quatre jours ;
- le prix du PT, lui, a baissé sous le poids de ces ventes — vendeurs plus nombreux qu'acheteurs sur un marché étroit. Le montant remboursé à l'échéance ne change pas, donc plus le PT s'achète bas, plus le rendement est grand pour celui qui achète à ce moment-là : **un prix qui baisse, c'est un rendement qui monte**. Il a bondi de **21 % à 31 %** sur la période. (Pour rappel, ce rendement est exprimé en `apxUSD` : le chiffre ne prend pas en compte la baisse de l'`apxUSD`.)

Ce bond du taux implicite fait peur sur le papier, mais **à deux semaines de l'échéance, il ne pèse presque rien sur le prix** : passer de 21 % à 31 % de taux annualisé sur les treize jours restants ne représente qu'environ **−0,3 %** de prix. Il faut alors être précis sur les unités, parce que tout se joue là. **Sur Pendle, en `apxUSD`, le PT n'a presque pas bougé** : l'offre et la demande de PT et de YT sont les seules forces qui fixent ce prix-là, et malgré les ventes, elles n'ont produit que ce −0,3 %. Ce qui a chuté, c'est la **valeur en dollars** de ce même PT — et elle ne se joue pas sur Pendle : le PT est une créance sur une quantité fixe d'`apxUSD`, donc en dollars, il vaut ce que valent ces `apxUSD`. Chaque jeton promis valant ~0,90 $ au lieu de 1 $, la créance a perdu ~10 % — sans qu'un seul échange sur Pendle n'y soit pour quelque chose.

> **📖 Ce que « le PT a tenu » veut vraiment dire**
> Le PT se rachète **1 pour 1 en `apxUSD`** à son échéance, quelle que soit la décote temporaire du secondaire. Mais **1:1 en `apxUSD` n'est pas 1:1 en dollars**, puisque l'`apxUSD` vaut lui-même ~0,90 $. Celui qui avait figé son rendement en PT a récupéré ses `apxUSD` comme promis — et hérité de leur décote. Le PT a parfaitement tenu **par rapport à un jeton qui, lui, n'a pas tenu**.

Un dernier point, pour éviter une confusion de lecture. Sur Pendle, aujourd'hui, un PT-apyUSD cote **autour de 0,86 $** [à vérifier le jour de la publication] — ce prix n'est pas celui de la série du 18 juin. Celle-ci est arrivée à échéance — elle ne s'échange plus, chaque PT a été remboursé 1 pour 1 en `apxUSD`, soit ~0,88 à 0,92 $ au cours actuel [à vérifier le jour de la publication]. Le 0,86 $ affiché appartient au PT-apyUSD à échéance du 5 novembre**, qui a encore cinq mois à courir. Son prix se lit avec les deux composantes vues plus haut : la valeur de l'`apxUSD` qu'elle remboursera (~0,89 $), moins une décote de taux étalée sur les cinq mois restants.

Une chose compte pour la suite. Ce prix affiché sur Pendle — décote comprise — **n'est pas exactement le chiffre que Morpho regarde** pour décider de liquider une position. Et c'est précisément à ce décalage que se joue l'étage suivant.

---

### C. Les liquidations sur Morpho — la chaîne complète, du STRC au seuil de 86 % - Etude du sort du PT-apyUSD

Il y a une autre partie à analyser ensuite : que se passe-t-il à l'échelle du protocole de lending, (en l'ocurrence ici nous analysons Morpho) qui permet de réaliser le levier. Rappelons le montage, parce que tout en découle. Le loopeur a pris son **PT-apyUSD** (le jeton de rendement figé de l'étage 2) et l'a **déposé en collatéral sur Morpho**, une place de prêt. Contre ce collatéral, il a **emprunté de l'USDC** — de vrais dollars — qu'il a réinjectés dans la boucle pour racheter encore du rendement. C'est le marché vedette du looping apyUSD : collatéral **PT-apyUSD**, dette **USDC**. Cette stratégie était très prisée des loopeurs avant la chute du STRC de début Juin car elle offre un rendement élevé.

**Comment Morpho décide de liquider.**

Une position sur Morpho tient tant que la dette reste couverte par le collatéral. Le protocole compare donc en permanence deux nombres : d'un côté la **dette** (ici, le montant d'USDC emprunté), de l'autre la **valeur du collatéral estimée par son oracle** (ici le PT-apyUSD). Quand le rapport dette/valeur franchit un seuil — le **LLTV**, fixé ici à **86 %** —, la position est liquidée : le protocole vend le collatéral pour rembourser le prêt.

Le mot important est *estimée par son oracle*. Morpho ne regarde pas le prix affiché sur Pendle : il consulte **sa propre source de prix**, réglée à la création du marché. Et cette source ne fonctionne pas comme on pourrait le croire.

**L'oracle du marché vedette, et lequel de ses deux taux a bougé.**

L'oracle de ce marché `PT-apyUSD / USDC` ne lit pas un prix unique : il **se base sur deux taux de change, multipliés l'un par l'autre** — :

- **Taux n°1 — le PT-apyUSD exprimé en `apxUSD`.** Il traduit le prix du PT via une **moyenne lissée dans le temps** (un TWAP) du taux implicite du pool. Volontairement, il ignore les à-coups de très court terme.
- **Taux n°2 — l'`apxUSD` en dollars.** Une valeur de type NAV publiée par Apyx — lissée et plafonnée par prudence : un oracle de prêt préfère sous-estimer le collatéral (l'emprunteur est liquidé un peu tôt) que le surestimer (les prêteurs héritent de bad debt) — qui dit combien vaut réellement un `apxUSD` en dollars : autour de **0,86** pendant l'épisode.

Mis bout à bout : valeur du collatéral = nombre de PT × (taux n°1 : PT→`apxUSD`) × (taux n°2 : `apxUSD`→$), le tout comparé à l'USDC de la dette. Quand le STRC a chuté, **c'est le taux n°2 qui a bougé** — l'`apxUSD` valant moins de dollars — pendant que le taux n°1 (le prix Pendle du PT) restait quasi immobile, à ~−0,3 % comme on l'a vu en partie B. Le décrochage arrive donc par le bas, par le collatéral fondamental, pas par le marché Pendle.

**La chaîne, étape par étape.**

Voici comment la baisse du STRC remonte jusqu'à la liquidation :

1. **La position.** Le loopeur a du PT-apyUSD en collatéral et une dette en USDC. Morpho surveille en continu le rapport entre les deux, en valorisant le collatéral avec son oracle.
2. **Le calcul de l'oracle.** Valeur du collatéral = nombre de PT × [taux n°1 : le prix d'un PT-apyUSD **exprimé en `apxUSD`** — le prix Pendle lissé par le TWAP, ~0,965 dans notre exemple] × [taux n°2 : la valeur d'un `apxUSD` **en dollars** — le ratio Apyx, ~0,86]. Pour 100 000 PT déposés : 100 000 × 0,965 × 0,86 ≈ 83 000 $ de collatéral aux yeux de Morpho.
3. **Le STRC baisse.** Le panier d'Apyx est bourré de STRC ; il vaut donc moins. Le taux `apxUSD`→dollars baisse. C'est **lui** qui entraîne tout — le taux PT n'a presque pas joué.
4. **La dette, elle, ne bouge pas.** L'USDC reste dû au même montant. Collatéral revalorisé à la baisse face à une dette fixe : le rapport dette/collatéral franchit les 86 %, et la position est liquidée. Ce sont **les positions les plus leviées** — celles dont la marge de sécurité était la plus mince — qui sautent en premier.
5. **Pourquoi c'est resté ordonné.** Le taux `apxUSD`→dollars est une valeur de type NAV, **plus lente** que le prix de panique du marché secondaire. Les liquidations se sont donc enchaînées une par une, dans un ordre mécanique, sans partir en spirale — et sans laisser de **bad debt** (une dette que le collatéral liquidé ne suffit plus à rembourser).
6. **Le cas des 17-18 juin.** Ce jour-là, le STRC touche son **plus-bas record à 82,53 $**. Le taux `apxUSD`→dollars tombe au plus bas, et **1,61 M$** sont liquidés sur le PT-**5NOV** — un PT qui n'arrive pourtant à échéance qu'en novembre, à cinq mois de là. Preuve directe que ce qui liquide, c'est la **valeur en dollars de l'`apxUSD`**, pas le calendrier du PT.

**Ce que dit la blockchain, marché par marché.**

En interrogeant directement Morpho, on obtient un total bien supérieur aux estimations relayées par la presse : **plus de 13 millions de dollars liquidés** sur les marchés exposés au STRC en juin, contre les ~4 M$ rapportés autour du 5 juin.

| Marché (collatéral / dette) | Protocole | Liquidations | Montant | Bad debt |
|---|---|---|---|---|
| apyUSD / **USDC** | Apyx | 62 | **5,21 M$** | 0 |
| PT-apyUSD-18JUN / **USDC** | Apyx | 90 | **4,26 M$** | ~0 |
| PT-apyUSD-5NOV / **USDC** | Apyx | 23 | **1,61 M$** | 0 |
| sUSDat / **AUSD** | Saturn | 47 | **1,93 M$** | 0 |
| apyUSD / **apxUSD** (même monnaie) | Apyx | 6 | **0,076 M$** | 0 |

Le tableau dit deux choses.

**Premier point : la monnaie de la dette décide de tout.**

- **Les marchés en vrais dollars** (dette en USDC ou AUSD) ont tous sauté, y compris le plus gros marché de looping, le `PT-apyUSD / USDC`.
- **Le marché en même monnaie**, `apyUSD / apxUSD`, est quasi épargné : quand `apxUSD` décroche, collatéral et dette perdent de la valeur *ensemble*, et le rapport entre les deux ne bouge pas — d'où **0,076 M$** liquidés seulement, contre des millions ailleurs.

**Second point : la bad debt est nulle partout.** Les positions ont été liquidées, mais à chaque fois le collatéral a suffi à couvrir la dette. Aucun prêteur ne s'est retrouvé avec une créance impossible à recouvrer. 

**Qui règle l'oracle, et pour protéger qui.**

Ce réglage — quel oracle sur quel marché, c'est le curateur qui liste le marché sur Morpho qui le choisi **une fois pour toutes, à la création**. 

Et ce choix protège d'abord une catégorie précise : les **prêteurs**. Un oracle aveugle au décrochage — qui croirait le collatéral à 1 $ alors qu'il en vaut 0,90 — ne déclencherait jamais de liquidation ; le jour où le collatéral ne couvre plus la dette, c'est le prêteur qui encaisse la perte. Pour l'**emprunteur** (le loopeur), le même oracle détermine le moment exact où sa position saute. Un seul réglage, deux camps aux intérêts opposés.

> **📖 Accorder l'oracle à la monnaie de la dette** - Etude des oracles de quelques marchés Morpho
> Le bon réglage dépend de ce qu'on emprunte :
> - **Dette en `apxUSD` (même monnaie que le collatéral) - Marché apyUSD / apxUSD.** Ici, ce qui est réglé « en dur », ce n'est pas la valeur du collatéral : l'`apyUSD` déposé est bien évalué, via le **taux du vault** (`apyUSD`→`apxUSD`), qui ne fait que monter avec le dividende. C'est la conversion `apxUSD`→dollars qui est figée à 1 — et ce n'est pas une négligence : les deux côtés sont en `apxUSD`, il n'y a rien à convertir en dollars, et le rapport collatéral/dette ne bouge pas quand l'`apxUSD` décroche. La position est immunisée **contre le dépeg** — d'où les 0,076 M$ liquidés seulement sur ce type de marché. Les rares liquidations résiduelles relèvent d'un autre canal, qui ne doit rien au prix : sur Morpho, la dette grossit en continu avec les intérêts d'emprunt — une position déjà collée au seuil peut le franchir par simple accumulation d'intérêts.
>
> Cette immunité a toutefois un angle mort. Ce taux est un **taux de rachat**, pas un prix de marché : le marché secondaire n'entre jamais dans son calcul (confirmé on-chain — ce marché n'a pas de second feed). Si le marché se mettait à douter de l'`apyUSD` lui-même — un problème propre au vault du protocole, sans que l'`apxUSD` soit touché — et le bradait sur le secondaire, l'oracle n'en verrait rien : aucune liquidation, et si le doute était fondé, la perte finirait chez les **prêteurs d'`apxUSD`**. Un oracle qui ignore le marché ignore la panique — c'est sa force — mais aussi les signaux d'alarme : si un exploit vidait réellement le vault, le taux de rachat officiel le refléterait-il ? 
> - **Dette en USDC (vrais dollars).** Là, il **faut** un vrai prix de l'`apxUSD`. Sinon l'oracle le croit à 1 $ alors qu'il en vaut 0,90, ne liquide jamais, et laisse le prêteur seul face à la perte le jour où le collatéral ne couvre plus rien.

Ce second scénario — un oracle figé à 1 $ sur une dette en vrais dollars — a un précédent : le dépeg de l'**USD0++** début 2025, où un oracle aveugle au décrochage avait laissé s'accumuler de la bad debt. Apyx l'a évité : ses marchés en USDC utilisaient un **vrai feed de prix** (le ratio Apyx du taux n°2), pas un « 1 $ » en dur. C'est exactement pour cette raison que juin a produit des liquidations **mais zéro bad debt**.

**Ce que le stress a fait changer.**

Sur les marchés en USDC — ceux du looping —, le pricing de l'`apxUSD` en dollars (le **taux n°2**) a d'ailleurs été rendu **plus dynamique** après l'épisode. Les marchés qui ont liquidé en juin lisaient la valeur lissée et semi-figée qu'on vient de voir (~0,86) : peu réactive à la panique de court terme, elle explique en partie le caractère ordonné des liquidations. Les marchés ouverts *après* l'épisode (les séries de PT d'août et de novembre) lisent un taux **vivant** (~0,89), qui suit le décrochage réel en continu : il liquide plus tôt et plus juste, au prix d'être plus sensible aux à-coups. La révision s'est accompagnée d'un relèvement du seuil d'emprunt : **LLTV porté à 91,5 %** sur les marchés de novembre, contre 86 % en juin.

**La leçon.**

Le zéro bad debt ne tient pas à la chance. Il tient au fait que la combinaison dangereuse — dette en USDC **et** oracle figé à 1 $ — n'a jamais été utilisée sur ces marchés. Le bon appariement oracle/dette a protégé les **prêteurs**. Il n'a protégé ni les **loopeurs**, liquidés pour plus de 4 M$ sur le seul marché vedette, ni les **porteurs d'`apxUSD`**, toujours à −10 %. Un bon design d'oracle évite l'effondrement systémique ; il n'annule pas la perte individuelle. Pour le déposant, la sûreté d'un « rendement stable » en DeFi se joue sur un choix technique qu'il ne voit jamais : l'oracle price-t-il le collatéral en vrais dollars, ou dans le même jeton bancal auquel il est déjà exposé ?
