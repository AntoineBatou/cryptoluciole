# PARTIE II — Les DAT en DeFi

*Ce que la finance décentralisée construit par-dessus les DAT — et ce que le décrochage du STRC, en juin 2026, en a révélé.*

Acheter une action Strategy en bourse suppose un compte-titres, des horaires d'ouverture et parfois un ticket d'entrée. La DeFi lève ces contraintes : on peut acquérir et détenir une exposition à une DAT 24 h/24, en fractions, depuis un simple portefeuille crypto. Elle ajoute surtout deux usages que la bourse classique ne permet pas — **servir de collatéral** pour emprunter, et **empiler du rendement** couche après couche (looping). C'est ce second usage qui est le plus intéressant — et le plus dangereux.

# II.1 La construction — les trois étages

---

## Étage 1 — détenir une action de DAT sans passer par la bourse

La brique de base, c'est la version tokenisée de l'action elle-même.

> **📖 Action tokenisée**
> Un jeton crypto adossé, un pour un, à une action réelle conservée chez un dépositaire régulé. Détenir le jeton revient à détenir un droit sur l'action correspondante. Le numéro 2 de la newsletter les abordait déjà, via la plateforme Backpack — c'est la même brique de départ.

> **📖 Wrapper (« enveloppe »)**
> Le terme générique pour un jeton qui **emballe** un actif existant — ici une action, plus loin le dividende d'un STRC — afin de le rendre utilisable en DeFi. Point important : le jeton **n'est pas** l'actif, c'est une créance sur lui. Son prix peut donc s'écarter de celui de l'actif emballé (voir « dépeg du wrapper » plus bas).

Pour Strategy, plusieurs émetteurs proposent une action MSTR tokenisée :

- **MSTRx**, émis par **Backed Finance** (gamme xStocks) et accessible via **Kraken**, sur la blockchain Solana ;
- **MSTRon**, émis par **Ondo** ;
- d'autres acteurs comme **Dinari**, entre autres.

Dans chaque cas, le jeton est censé être couvert à 100 % par de vraies actions MSTR déposées chez un dépositaire. Ce que ça permet : détenir l'action hors des heures de bourse, la fractionner, mais surtout **la déposer en collatéral** pour emprunter, ou la placer dans un pool de liquidité.

---

## Étage 2 — transformer le dividende du STRC en « stablecoin à rendement »

L'autre stratégie ne tokenise pas l'action, mais le **dividende du STRC** (la préférentielle détaillée en I.2). Le principe de base est le même chez tous ces protocoles : ils achètent des actions préférentielles de DAT et encaissent le dividende en cash. Ce qu'ils en font ensuite diverge — certains le reversent en dollar rémunéré, d'autres en bitcoin. Quatre acteurs illustrent ces variantes :

- **Apyx** (apyx.fi) : l'un des plus gros détenteurs externes de STRC en DeFi, autour de **29 M$** (288 888 actions, mars 2026). Il émet deux jetons — l'`apxUSD` (dollar de base, non rémunéré) et l'`apyUSD` (sa version rémunérée), qui affiche **13 à 20 % de rendement annuel** selon la participation.
- **Saturn Credit** : même logique en dollar, avec l'`USDat` (base) et sa version stakée `sUSDat` (rémunérée), qui vise **11 % et plus**.
- **Roxom** : un montage différent, à effet de levier — on poste du **bitcoin en collatéral**, on emprunte du cash à un taux bas (~7 %), et on utilise ce cash pour acheter du STRC (~11,5 % de rendement). Le profit vient de l'écart entre les deux taux ; le dividende capté est reconverti en bitcoin via un jeton `xSTRC`. Position réduite face à Apyx ou Saturn.
- **Hermetica** : encore une autre variante, et plus modeste en taille (position STRC indirecte d'environ **4 M$**, via Saturn). Son vault `hBTC` n'émet aucun dollar : c'est un produit **libellé en bitcoin**, qui capte ce rendement STRC et d'autres sources, et reconvertit tout en BTC chaque jour.

**Comment ça marche, concrètement — l'exemple d'Apyx :**

1. **On échange des dollars contre de l'`apxUSD`**, comme n'importe quel jeton. C'est le dollar « brique de base » — non rémunéré, il sert surtout de collatéral.
2. **On dépose (« lock ») cet `apxUSD` dans le vault de rendement** (le « coffre » du protocole), et on reçoit en échange de l'`apyUSD` au taux de change du moment du dépôt. 
3. **En coulisse, Apyx détient des actions STRC**, achetées avec la trésorerie du protocole. Strategy verse le dividende STRC en cash — mensuellement à l'origine, deux fois par mois depuis juillet 2026 ; Apyx convertit ce cash en `apxUSD` et le crédite au vault.
4. **Concrètement, le *nombre* d'`apyUSD` que l'on détient ne bouge plus après le dépôt** — c'est son **taux de change face à l'`apxUSD` qui continue de grimper** jour après jour, y compris pour ceux qui sont arrivés après le lancement.
5. **Pour encaisser le gain, il faut échanger son `apyUSD`** contre de l'`apxUSD` (puis, si besoin, contre des dollars classiques) — au taux en vigueur ce jour-là, plus élevé qu'à l'achat.

> **📖 Vault à taux de change croissant**
> Contrairement à un livret qui ajoute des intérêts à votre solde, ce type de vault laisse le *nombre* de jetons détenus inchangé après l'achat et fait grimper leur **valeur d'échange**. 

Une chose devrait surprendre à ce stade : le dividende source, celui du STRC, tourne autour de **11-12 %** (I.2) — et pourtant, on vient de voir que l'`apyUSD` peut afficher jusqu'à **20 %**, sans aucun levier ni emprunt dans ce montage. D'où vient l'écart ?

> **📖 Pourquoi 20 % sans le moindre levier ?**
> Ce n'est pas un levier caché — c'est un **effet de participation**. Le vault encaisse le dividende de *tout* le STRC détenu par le protocole (financé par l'ensemble de l'`apxUSD` en circulation, verrouillé ou non). Mais il ne partage ce flux qu'entre les détenteurs qui ont choisi de **verrouiller** leur `apxUSD` en `apyUSD` pour recevoir du rendement. Si seule une partie de l'`apxUSD` en circulation est verrouillée, le même dividende se répartit sur un bassin plus restreint de bénéficiaires — ce qui gonfle mécaniquement leur taux affiché. Moins de gens participent, plus le taux grimpe pour ceux qui restent ; et inversement, si tout le monde se met à verrouiller en même temps, le taux affiché retombe vers celui du STRC lui-même.

Seuls Apyx et Saturn Credit correspondent vraiment à l'étiquette « dollar stable à rendement » : Roxom et Hermetica reversent en bitcoin, pas en dollar, et restent des acteurs nettement plus petits. Le point commun, lui, tient pour tous : leur rendement vient du même endroit — le dividende du STRC — et leur détenteur hérite, souvent sans le savoir, de la fragilité de Strategy, du bitcoin et de la liquidité du STRC. C'est la chaîne de dépendance annoncée en I.2. Reste à voir ce qu'elle donne quand on ajoute du levier par-dessus.

---

## Étage 3 — le montage à effet de levier

Ici, on part d'un stablecoin à rendement adossé au STRC (`apyUSD` ou `sUSDat`) et on cherche à en pousser le rendement le plus loin possible. La source du rendement reste la même — le dividende du STRC — mais on l'amplifie en empruntant des dollars bon marché pour racheter encore de la position. Trois briques, empilées dans cet ordre.

**1. Figer le rendement avec Pendle.**

> **📖 Pendle (PT / YT)**
> Pendle coupe un actif à rendement en deux jetons distincts. Le **PT** (*Principal Token*) rend un montant fixe à une échéance donnée : c'est le rendement figé d'avance, connu au moment de l'achat (un PT-apyUSD autour de **14,84 %** fixe, par exemple). Le **YT** (*Yield Token*) capte, lui, le rendement variable jusqu'à l'échéance. Le fonctionnement fin de ce découpage est décortiqué plus loin, quand on étudiera ce que vaut un PT dans la tempête.

**2. Emprunter contre ce PT sur Morpho.**

> **📖 Morpho (prêt / collatéral)**
> Une place de prêt on-chain. On y dépose un actif en **collatéral** — ici le PT-apyUSD — pour **emprunter** un autre actif — ici des dollars (USDC) — à un taux plus bas que le rendement du collatéral (le PT). Tant que la valeur du collatéral couvre largement l'emprunt, la position tient. Si elle passe sous un seuil, elle est **liquidée** : le protocole vend le collatéral pour rembourser le prêt.

**3. Recommencer — le looping.**

Avec les dollars empruntés à l'étape 2, on ne s'arrête pas là : on **rachète de l'`apyUSD`** avec ce cash, on le **redépose sur Pendle** pour obtenir un nouveau PT (toujours autour de 14,84 % fixe), on **redépose ce PT sur Morpho** comme collatéral, on **réemprunte** des dollars contre lui — et on recommence. Chaque tour du cycle (acheter → figer sur Pendle → déposer en collatéral sur Morpho → emprunter → racheter) ajoute une couche d'exposition au même dividende STRC.

Le calcul qui pousse à boucler est simple : tant que le PT-`apyUSD` rapporte plus (~14,84 %) que ce que coûte l'emprunt sur Morpho, chaque tour supplémentaire capte un nouvel écart positif — donc **chaque boucle augmente le rendement global de la position**. C'est cet écart, répété à chaque tour, qui pousse à multiplier les cycles plutôt qu'à s'arrêter au premier.

> **📖 Looping (levier)**
> Répéter un même cycle d'achat / dépôt en collatéral / emprunt plusieurs fois de suite, en réinjectant à chaque tour les dollars empruntés dans le même actif. Chaque tour ajoute de l'exposition — donc du rendement — mais rétrécit la marge de sécurité avant liquidation, puisque chaque position ajoutée est elle-même adossée à un collatéral qui peut décrocher.

Le rendement affiché grimpait avec le nombre de tours : autour de **25 %** par an pour deux ou trois tours, et jusqu'à **~64 %** pour cinq tours — des chiffres relayés par les plateformes elles-mêmes, que nous n'avons pas pu recouper auprès d'une source indépendante. Mathématiquement, c'est l'écart entre le dividende capté (11,5 à 12 %) et le coût d'emprunt sur Morpho, multiplié par le levier.

---

# II.2 Le crash-test de juin 2026

En juin 2026, le STRC a signé sa plus forte baisse sous le pair jamais enregistrée. Or tout le montage qu'on vient de décrire repose sur une condition tacite : que le STRC reste collé à ses 100 $. Les actions **STRC** couvrent l'**`apxUSD`**, qui garantit l'**`apyUSD`**, sur lequel est bâti le **PT** — que le premier maillon cède, et tout ce qui pend au bout perd de la valeur. On va donc remonter l'édifice étage par étage, avec deux questions à chaque fois : qu'est-ce qui a cédé, et **pourquoi** le protocole était réglé comme il l'était.

> 🖼️ **[FIGURE 6 — L'édifice complet]**
> *Schéma vertical en étages : action STRC (bourse) → `apxUSD` (stablecoin de base) → `apyUSD` (yield bearing token) → PT-apyUSD (rendement figé, Pendle) → collatéral sur Morpho + dette USDC (levier). En regard de chaque étage : ce qui a cédé en juin. Données : aucune (schéma).*

> **📖 Dépeg du wrapper**
> Le décrochage entre un jeton et la valeur qu'il est censé représenter. Le jeton n'est qu'une créance sur l'actif du dessous — si cet actif perd de la valeur, ou si les acheteurs disparaissent, le jeton décroche. C'est arrivé en juin 2026 : l'`apxUSD`, censé valoir 1 $, est tombé à **0,90 $** dans le sillage du STRC.

## A. Le stablecoin — l'`apxUSD` a décroché, et il n'est pas remonté

L'`apxUSD` est le maillon exposé en premier, puisque c'est lui que le STRC est censé couvrir. Début juin, sur le marché secondaire, il est tombé jusqu'à **0,90 $**. Apyx a absorbé la vague de rachats qui a suivi en restant solvable — sur ce point, le mécanisme a tenu.

Ce qui distingue cet épisode de tous les précédents, c'est qu'il ne s'est pas refermé. Le STRC était déjà passé **plusieurs fois** sous 95 $ depuis juillet 2025, et à chaque fois le dividende l'avait ramené vers 100 $, entraînant l'`apxUSD` avec lui. Cette fois, non : un mois plus tard, en juillet 2026, l'`apxUSD` traite toujours autour de **0,88–0,92 $**, parce que le STRC lui-même reste en dessous de 100 $. [à vérifier le jour de la publication]

> 🖼️ **[FIGURE 7 — Un an de STRC sous tension]**
> *Courbe du cours du STRC, juillet 2025 → juillet 2026 : les passages sous 95 $ résorbés par le dividende, puis le décrochage de juin 2026 — 82,53 $ le 18 juin, plancher historique à 71,25 $ le 26 juin — non résorbé (rebond partiel vers 85-89 $ mi-juillet). Données : série datée disponible (rapport fact-check du 2026-07-17).*

C'est toutefois cohérent avec sa construction. L'`apxUSD` est le stablecoin **de base**, non rémunéré — le rendement, c'est l'`apyUSD`, sa version épargne, qui le capte. L'`apxUSD` n'est pas fait pour défendre 1 $ coûte que coûte : il **reflète la valeur de son panier de collatéral**, aujourd'hui bourré de STRC. Quand ce panier baisse, l'`apxUSD` baisse avec lui ; la poche de cash amortit le mouvement, sans l'annuler. Tant que le STRC ne remonte pas, il n'y a aucune raison mécanique que l'`apxUSD` revienne à 1 $.

**Le contraste avec Saturn**

Saturn Credit, le concurrent direct avec son USDat, **n'a pas décroché** pendant le même épisode. Ce n'est pas une meilleure gestion de crise, c'est un choix de construction. Son stablecoin dollar de base, l'`USDat`, est adossé à des **bons du Trésor**, pas au STRC (Bitget News, Chainlink). L'exposition au STRC est rangée à part, dans le jeton staké `sUSDat`, celui que l'on choisit explicitement pour aller chercher le rendement et le risque associé.

La leçon : **tout se décide à la construction — par quoi le stablecoin de base et le yield bearing token sont backés.** Chez Apyx, le stablecoin de base est backé par le STRC : il décroche avec lui. Chez Saturn, l'`USDat` est backé par des bons du Trésor, et l'exposition au STRC est réservée au yield bearing token, le `sUSDat` : le stablecoin de base ne bouge pas.

> 🖼️ **[FIGURE 8 — Deux « dollars » dans la même tempête]**
> *Deux courbes, juin-juillet 2026 : l'`apxUSD` qui décroche vers 0,90 $ puis s'installe entre 0,88 et 0,92, et l'`USDat` qui reste collé à 1 $. Version schématique acceptable. Données : points connus + à compléter — mission fact-checker.*

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

- **Ce n'est plus un stablecoin au sens fort.** Le rachat à 1 $ exactement est précisément le mécanisme qui force le retour au pair chez un USDC ou un USDT : dès que le prix s'écarte, l'arbitrage le referme. En cotant à la valeur du panier, Apyx renonce à cette ancre — rien ne ramène mécaniquement l'`apxUSD` à 1 $. C'est ce qu'on observe : un mois sous le pair sans repeg. **La solvabilité a été achetée au prix de la stabilité.**
- **Le stress se déplace vers le marché secondaire.** Si le rachat direct « cote juste », ceux qui veulent sortir vite passent par le marché — et la décote y devient publique et durable. Tout ce qui lit ensuite ce prix le répercute, à commencer par les marchés de prêt où l'`apxUSD` (ou un PT qui en dépend) sert de collatéral.
- **Le juge reste partie.** Qui calcule la Redemption Value ? Apyx lui-même. En juin, la cotation sous le NAV était discrétionnaire et opaque — c'est elle qui a nourri l'incompréhension décrite plus haut. Le 2.0 formalise la métrique, mais le protocole garde un intérêt à coter bas pendant le stress : sous-coter de trop spolie les sortants, coter trop haut rouvre le drain. Et la frontière entre baisse temporaire et perte durable est floue — juin le prouve : un mois sous le pair sans repeg, est-ce temporaire ou durable ? Personne ne le sait encore, et c'est Apyx qui tranche, via son calcul de la Redemption Value.
- **Le coussin visible peut devenir un point de panique** — et là, c'est **notre hypothèse**, pas un constat. Rendre public l'écart entre Total Collateral Value et Redemption Value en fait un indicateur suivi de tous ; s'il fondait vers zéro sous les yeux du marché, cette transparence même pourrait déclencher la sortie qu'elle était censée prévenir.

> **📖 Le trilemme du « dollar » adossé à un actif risqué**
> Au fond, un « dollar » adossé à un actif risqué doit choisir entre trois cases, sans pouvoir les cumuler :
> 1. **Promettre 1 $** coûte que coûte — et fabriquer une ruée le jour où le panier ne vaut plus 1 $. C'était Apyx avant son correctif, remboursant au 1 $ affiché pendant que le coussin se vidait — et, en version extrême, le Terra/UST de 2022, mort d'une ruée en une semaine.
> 2. **Coter la vraie valeur** du panier — et assumer de flotter, sans ancre qui ramène au pair. C'est le choix d'Apyx depuis son correctif.
> 3. **Ne pas backer le stablecoin de base par l'actif risqué** — le réserver au yield bearing token. C'est le choix de Saturn, décrit plus haut.

Juin 2026 a mis les trois cases à l'épreuve en même temps — ce qui est rare.

---

## B. Le PT sur Pendle — ce que vaut vraiment un « rendement figé » quand le sous-jacent décroche

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

> 🖼️ **[FIGURE 9 — Le pool Pendle pendant la première semaine de juin]**
> *Double lecture, 1er → 5 juin : la liquidité du pool (13,7 → 8,6 M$, −37 %) et le taux implicite du PT (21 % → 31 %). Données : exactes, déjà dans le texte.*

Ce bond du taux implicite fait peur sur le papier, mais **à deux semaines de l'échéance, il ne pèse presque rien sur le prix** : passer de 21 % à 31 % de taux annualisé sur les treize jours restants ne représente qu'environ **−0,3 %** de prix. Il faut alors être précis sur les unités, parce que tout se joue là. **Sur Pendle, en `apxUSD`, le PT n'a presque pas bougé** : l'offre et la demande de PT et de YT sont les seules forces qui fixent ce prix-là, et malgré les ventes, elles n'ont produit que ce −0,3 %. Ce qui a chuté, c'est la **valeur en dollars** de ce même PT — et elle ne se joue pas sur Pendle : le PT est une créance sur une quantité fixe d'`apxUSD`, donc en dollars, il vaut ce que valent ces `apxUSD`. Chaque jeton promis valant ~0,90 $ au lieu de 1 $, la créance a perdu ~10 % — sans qu'un seul échange sur Pendle n'y soit pour quelque chose.

> **📖 Ce que « le PT a tenu » veut vraiment dire**
> Le PT se rachète **1 pour 1 en `apxUSD`** à son échéance, quelle que soit la décote temporaire du secondaire. Mais **1:1 en `apxUSD` n'est pas 1:1 en dollars**, puisque l'`apxUSD` vaut lui-même ~0,90 $. Celui qui avait figé son rendement en PT a récupéré ses `apxUSD` comme promis — et hérité de leur décote. Le PT a parfaitement tenu **par rapport à un jeton qui, lui, n'a pas tenu**.

Un dernier point, pour éviter une confusion de lecture. Sur Pendle, aujourd'hui, un PT-apyUSD cote **autour de 0,86 $** [à vérifier le jour de la publication] — ce prix n'est pas celui de la série du 18 juin. Celle-ci est arrivée à échéance — elle ne s'échange plus, chaque PT a été remboursé 1 pour 1 en `apxUSD`, soit ~0,88 à 0,92 $ au cours actuel [à vérifier le jour de la publication]. Le 0,86 $ affiché appartient au PT-apyUSD à échéance du **5 novembre**, qui a encore cinq mois à courir. Son prix se lit avec les deux composantes vues plus haut : la valeur de l'`apxUSD` qu'elle remboursera (~0,89 $), moins une décote de taux étalée sur les cinq mois restants.

Une chose compte pour la suite. Ce prix affiché sur Pendle — décote comprise — **n'est pas exactement le chiffre que Morpho regarde** pour décider de liquider une position. Et c'est précisément à ce décalage que se joue l'étage suivant.

---

## C. Les liquidations sur Morpho — la chaîne complète, du STRC au seuil de 86 % — étude du sort du PT-apyUSD

Il y a une autre partie à analyser ensuite : que se passe-t-il à l'échelle du protocole de lending qui permet de réaliser le levier — en l'occurrence ici, Morpho ? Rappelons le montage, parce que tout en découle. Le loopeur a pris son **PT-apyUSD** (le jeton de rendement figé de l'étage 2) et l'a **déposé en collatéral sur Morpho**, une place de prêt. Contre ce collatéral, il a **emprunté de l'USDC** — de vrais dollars — qu'il a réinjectés dans la boucle pour racheter encore du rendement. C'est le marché vedette du looping apyUSD : collatéral **PT-apyUSD**, dette **USDC**. Cette stratégie était très prisée des loopeurs avant la chute du STRC de début juin car elle offre un rendement élevé.

**Comment Morpho décide de liquider.**

Une position sur Morpho tient tant que la dette reste couverte par le collatéral. Le protocole compare donc en permanence deux nombres : d'un côté la **dette** (ici, le montant d'USDC emprunté), de l'autre la **valeur du collatéral estimée par son oracle** (ici le PT-apyUSD). Quand le rapport dette/valeur franchit un seuil — le **LLTV**, fixé ici à **86 %** —, la position est liquidée : le protocole vend le collatéral pour rembourser le prêt.

Le mot important est *estimée par son oracle*. Morpho ne regarde pas le prix affiché sur Pendle : il consulte **sa propre source de prix**, réglée à la création du marché. Et cette source ne fonctionne pas comme on pourrait le croire.

**L'oracle du marché vedette, et lequel de ses deux taux a bougé.**

L'oracle de ce marché `PT-apyUSD / USDC` ne lit pas un prix unique : il **se base sur deux taux de change, multipliés l'un par l'autre** :

- **Taux n°1 — le PT-apyUSD exprimé en `apxUSD`.** Il traduit le prix du PT via une **moyenne lissée dans le temps** (un TWAP) du taux implicite du pool. Volontairement, il ignore les à-coups de très court terme.
- **Taux n°2 — l'`apxUSD` en dollars.** Une valeur de type NAV publiée par Apyx — lissée et plafonnée par prudence : un oracle de prêt préfère sous-estimer le collatéral (l'emprunteur est liquidé un peu tôt) que le surestimer (les prêteurs héritent de bad debt) — qui dit combien vaut réellement un `apxUSD` en dollars : autour de **0,86** pendant l'épisode. (Même chiffre que le prix du PT-5NOV croisé en partie B — pure coïncidence : là c'était le prix en dollars d'un PT, ici c'est la valeur en dollars d'un `apxUSD`.)

Mis bout à bout : valeur du collatéral = nombre de PT × (taux n°1 : PT→`apxUSD`) × (taux n°2 : `apxUSD`→$), le tout comparé à l'USDC de la dette. Quand le STRC a chuté, **c'est le taux n°2 qui a bougé** — l'`apxUSD` valant moins de dollars — pendant que le taux n°1 (le prix Pendle du PT) restait quasi immobile, à ~−0,3 % comme on l'a vu en partie B. Le décrochage arrive donc par le bas, par le collatéral fondamental, pas par le marché Pendle.

**La chaîne, étape par étape.**

Voici comment la baisse du STRC remonte jusqu'à la liquidation :

1. **La position.** Le loopeur a du PT-apyUSD en collatéral et une dette en USDC. Morpho surveille en continu le rapport entre les deux, en valorisant le collatéral avec son oracle.
2. **Le calcul de l'oracle.** Valeur du collatéral = nombre de PT × [taux n°1 : le prix d'un PT-apyUSD **exprimé en `apxUSD`** — le prix Pendle lissé par le TWAP, ~0,965 dans notre exemple] × [taux n°2 : la valeur d'un `apxUSD` **en dollars** — le ratio Apyx, ~0,86]. Pour 100 000 PT déposés : 100 000 × 0,965 × 0,86 ≈ 83 000 $ de collatéral aux yeux de Morpho.
3. **Le STRC baisse.** Le panier d'Apyx est bourré de STRC ; il vaut donc moins. Le taux `apxUSD`→dollars baisse. C'est **lui** qui entraîne tout — le taux PT n'a presque pas joué.
4. **La dette, elle, ne bouge pas.** L'USDC reste dû au même montant. Collatéral revalorisé à la baisse face à une dette fixe : le rapport dette/collatéral franchit les 86 %, et la position est liquidée. Ce sont **les positions les plus leviées** — celles dont la marge de sécurité était la plus mince — qui sautent en premier.
5. **Pourquoi c'est resté ordonné.** Le taux `apxUSD`→dollars est une valeur de type NAV, **plus lente** que le prix de panique du marché secondaire — et même plus basse que lui (~0,86 contre ~0,90) : c'est le plafonnement prudent vu plus haut, qui préfère sous-estimer le collatéral plutôt que le surestimer. Les liquidations se sont donc enchaînées une par une, dans un ordre mécanique, sans partir en spirale — et sans laisser de **bad debt** (une dette que le collatéral liquidé ne suffit plus à rembourser).
6. **Le cas de la fin juin.** Le STRC s'enfonce alors jusqu'à son **plus-bas historique — 71,25 $ le 26 juin**, près de 29 % sous le pair. Le taux `apxUSD`→dollars tombe au plus bas, et **1,61 M$** sont liquidés sur le PT-**5NOV** — un PT qui n'arrive pourtant à échéance qu'en novembre, à plus de quatre mois de là. Preuve directe que ce qui liquide, c'est la **valeur en dollars de l'`apxUSD`**, pas le calendrier du PT.

**Ce que dit la blockchain, marché par marché.**

En interrogeant directement Morpho (requête on-chain de la rédaction, API GraphQL Morpho, 13 juillet 2026), on obtient un total bien supérieur aux estimations relayées par la presse : **plus de 13 millions de dollars liquidés** sur les marchés exposés au STRC en juin, contre les ~4 M$ rapportés par Steakhouse Financial autour du 5 juin — un chiffre qui ne couvrait que le pic du premier jour sur une partie des marchés. Cette mesure de 13 M$ et sa répartition par marché sont une **mesure primaire** : nous n'avons pas trouvé de second dashboard public permettant de la recouper de façon indépendante.

| Marché (collatéral / dette) | Protocole | Liquidations | Montant | Bad debt |
|---|---|---|---|---|
| apyUSD / **USDC** | Apyx | 62 | **5,21 M$** | 0 |
| PT-apyUSD-18JUN / **USDC** | Apyx | 90 | **4,26 M$** | ~0 |
| PT-apyUSD-5NOV / **USDC** | Apyx | 23 | **1,61 M$** | 0 |
| sUSDat / **AUSD** | Saturn | 47 | **1,93 M$** | 0 |
| apyUSD / **apxUSD** (même monnaie) | Apyx | 6 | **0,076 M$** | 0 |

> 🖼️ **[FIGURE 10 — Les liquidations de juin, marché par marché]**
> *Barres horizontales : 5,21 / 4,26 / 1,93 / 1,61 / 0,076 M$, colorées selon la monnaie de la dette (vrais dollars vs même monnaie) — la lecture visuelle du « facteur décisif ». Données : exactes (tableau ci-dessus).*

Le tableau dit deux choses.

**Premier point : la monnaie de la dette décide de tout.**

- **Les marchés en vrais dollars** (dette en USDC ou AUSD) ont tous sauté, y compris le plus gros marché de looping, le `PT-apyUSD / USDC`.
- **Le marché en même monnaie**, `apyUSD / apxUSD`, est quasi épargné : quand `apxUSD` décroche, collatéral et dette perdent de la valeur *ensemble*, et le rapport entre les deux ne bouge pas — d'où **0,076 M$** liquidés seulement, contre des millions ailleurs.

**Second point : la bad debt est nulle partout.** Les positions ont été liquidées, mais à chaque fois le collatéral a suffi à couvrir la dette. Aucun prêteur ne s'est retrouvé avec une créance impossible à recouvrer. 

**Qui règle l'oracle, et pour protéger qui.**

Ce réglage — quel oracle sur quel marché — est choisi par le **curateur** qui liste le marché sur Morpho, **une fois pour toutes, à la création**. 

Et ce choix protège d'abord une catégorie précise : les **prêteurs**. Un oracle aveugle au décrochage — qui croirait le collatéral à 1 $ alors qu'il en vaut 0,90 — ne déclencherait jamais de liquidation ; le jour où le collatéral ne couvre plus la dette, c'est le prêteur qui encaisse la perte. Pour l'**emprunteur** (le loopeur), le même oracle détermine le moment exact où sa position saute. Un seul réglage, deux camps aux intérêts opposés.

> **📖 Accorder l'oracle à la monnaie de la dette — étude des oracles de quelques marchés Morpho**
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

---

## D. Alors, gagné ou perdu ?

Reste à répondre à la question que se pose le lecteur qui, un mois plus tôt, voyait s'afficher **64 % par an**.

> **⚠️ Le piège — 64 %, mais en quoi ?**
> Ce 64 % était un rendement **en `apxUSD`**, avec une hypothèse tacite — que l'`apxUSD` vaut 1 $. Il est tombé à 0,90 $ et n'est pas remonté. Le rendement n'était donc « en dollars » que tant que le jeton restait un dollar.

Trois profils, trois issues :

- **Le loopeur à levier** — celui qui empilait les boucles en empruntant de l'USDC — **a été liquidé**. Le levier a multiplié le rendement affiché à la hausse ; il a multiplié le décrochage à la baisse, dans les mêmes proportions. C'est mécaniquement lui, dont la marge de sécurité était la plus mince, qui saute en premier.
- **Le porteur non levié**, qui détenait simplement de l'`apyUSD` ou du PT, **n'a pas été liquidé** — mais il a récupéré des `apxUSD` valant ~0,90 $. Il a gardé sa position, pas sa valeur.
- **Celui qui empruntait dans la même monnaie** (collatéral `apyUSD`, dette `apxUSD`) **est passé à travers** — à quelques positions près, rattrapées par leurs intérêts d'emprunt. Mais son gain reste libellé en `apxUSD` : ramené en dollars, il est lui aussi à environ **−10 %**.

Le verdict est net. Personne, dans cet épisode, n'a réalisé un « 64 % en dollars ». Le survivant le mieux placé — celui qui avait choisi la même monnaie des deux côtés — a évité la liquidation, pas la décote. Un rendement à deux chiffres construit sur un jeton qui cesse d'être un dollar n'est pas un rendement en dollars : c'est un pari sur le fait qu'il le redeviendra. En juillet 2026, un mois plus tard, ce n'était toujours pas le cas.

---

Ces choix de plomberie — la monnaie de la dette, le réglage de l'oracle, par quoi chaque jeton est backé — ne sont qu'une partie du tableau. Ils s'ajoutent à une série de risques propres à la DeFi, qu'il faut maintenant nommer un par un.

# II.3 Les risques propres à la DeFi

Quatre risques se cumulent :

- **La liquidation.** Dès qu'il y a levier, une baisse du collatéral peut forcer la vente de la position au pire moment. Plus le looping est agressif, plus la marge de sécurité est mince, et plus le seuil est proche.
- **Le dépeg du wrapper.** Le jeton n'est pas l'actif : action tokenisée comme stablecoin adossé au STRC peuvent s'écarter de leur valeur théorique, et l'ont fait — l'`apxUSD` est descendu à 0,90 $.
- **L'illiquidité.** Ces jetons s'échangent sur des marchés secondaires étroits. Le jour où tout le monde veut sortir, il n'y a pas assez d'acheteurs, ce qui amplifie le décrochage — et creuse l'écart entre le prix de marché et la valeur théorique.
- **Le risque d'oracle.** Le plus discret, et pourtant décisif — la partie C vient de le montrer en détail : le réglage de l'oracle et la monnaie de la dette décident qui est liquidé, qui traverse, et qui hérite de la bad debt. Un paramètre choisi une fois pour toutes par le créateur du marché, invisible pour le déposant.

Ces montages ne sont pas des arnaques : ils tiennent, et rapportent, tant que le STRC tient son pair. Le problème est ailleurs : ils vendent de la **stabilité** sur un actif qui n'en offre aucune garantie, et celui qui achète un jeton nommé « USD » ignore le plus souvent qu'il détient, quatre couches plus bas, le dividende d'une société cotée qui emprunte pour acheter du bitcoin.

Reste la question qui traverse tout le dossier : ce modèle, de la société cotée jusqu'à ses prolongements en DeFi, tient-il à long terme ? C'est l'objet du verdict.
