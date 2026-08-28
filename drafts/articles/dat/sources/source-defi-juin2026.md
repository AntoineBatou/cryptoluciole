# Faits vérifiés — conséquences DeFi de la chute du STRC (juin 2026)

Source-mère pour la réécriture de la sous-partie « conséquences » de la section 7 (DeFi).
Tout est sourcé ; ne rien ajouter d'inventé. Chiffres volatils = « à vérifier le jour de la publication ».

## ÉTAGE 1 — Les stablecoins (apxUSD / apyUSD)

**Ce qu'est l'apxUSD** (article Apyx « Apyx 2.0 », 15 juin 2026 ; docs Apyx ; CoinDesk)
- Un « dividend-backed dollar » : dollar adossé à un panier d'**actions préférentielles de DAT génératrices de dividendes**, plus des bons du Trésor et du cash. **Collatéral prédominant = STRC** (préférentielle de Strategy).
- Modèle à deux jetons : `apxUSD` (dollar de base, non rémunéré, censé valoir 1 $) ; `apyUSD` (version épargne, capte le rendement des dividendes).
- Réserve **attestée chaque mois** par Wolf & Co. (cabinet enregistré PCAOB) + Proof-of-Reserves cryptographique on-chain.
- À son pic, Apyx a atteint **~500 M$ de supply en circulation** (juin 2026). (Rappel : ~29 M$ de STRC en mars → croissance très rapide.)

**Le décrochage de juin 2026**
- Le STRC a signé **sa plus forte baisse sous le pair jamais enregistrée**. L'`apxUSD` est tombé jusqu'à **0,90 $** sur le marché secondaire (début juin, 3-5 juin). Apyx a traité une **vague de rachats en restant solvable**.
- Contexte : le STRC a franchi les **−5 % sous le pair quatre fois depuis juillet 2025** ; **chaque épisode précédent** s'était résorbé, le mécanisme de dividende ramenant le prix vers 100 $.
- ⚠️ **MAIS cette fois, pas de repeg** : à juillet 2026, l'`apxUSD` traite toujours autour de **0,88–0,92 $** (~10 % sous le pair), car le STRC lui-même reste déprimé. Contrairement aux épisodes précédents, celui-ci ne s'est pas (encore) résorbé. [à vérifier le jour de la publication]

**Le mécanisme (le « feature not bug », version honnête)**
- L'`apxUSD` est **conçu** pour flotter, pas pour tenir 1 $ coûte que coûte. Objectif affiché : rendement plus élevé ET volatilité plus basse que le panier sous-jacent (rendement via les deux jetons ; volatilité amortie par la poche de cash).
- **Le « free put option » (cœur du post-mortem)** : rembourser au NAV (buffer inclus) pendant un décrochage = offrir une option gratuite. Exemple chiffré donné par Apyx : le panier tombe à 0,98 $ mais le buffer maintient le NAV affiché à 1 $ → un premier arrivé rachète l'apxUSD à 1 $, achète le panier à 0,98 $, et empoche 2 % quand ça repeg. Ces 2 % **sortent du coussin de sur-collatéralisation** = pris à ceux qui restent. Répété à chaque stress, le buffer se vide à zéro à chaque fois. Mécanisme **prédateur** : récompense les sorties les plus rapides, punit les fidèles, incite des acteurs hostiles à fabriquer du stress.
- **Ce qu'Apyx a fait en juin** : coter les rachats **sous le NAV** pendant le stress, exprès, pour protéger le buffer. Le mécanisme a marché, le buffer a survécu à la plus forte baisse du STRC. **Mais** communication ratée : les utilisateurs voyaient le NAV sur le dashboard et un autre chiffre sur leur devis de rachat.

**Le correctif « Apyx 2.0 »** (deux métriques)
- **Redemption Value** : le prix auquel se font TOUS les mint/rachats (petit spread), en calme comme en crise, pour tout le monde. Suit le panier prefs+cash, amorti par le cash. Sert de **plancher** où les arbitragistes interviennent.
- **Total Collateral Value** (remplace le NAV) : valeur totale de la réserve, buffer inclus. Peut afficher 1,02 $ quand la Redemption Value affiche 1 $ ; l'écart = le buffer, visible par tous.
- Comme les rachats se font à la Redemption Value (pas contre le buffer), le drain du premier arrivé **disparaît**. Le buffer peut enfin croître à travers les stress.
- Nouvel outil : **RFQ (Request for Quote)** — les utilisateurs soumettent une demande de rachat, des contreparties agréées cotent en concurrence.
- Émission neuve toujours au prix de **1 $** (ancre pour le secondaire). En pratique l'apxUSD doit s'échanger **entre Redemption Value et Total Collateral Value**.

**Le contraste concurrent — Saturn (le point de design)**
- **Saturn n'a PAS dépeg.** Raison structurelle : son dollar de base, l'`USDat`, est adossé à des **bons du Trésor**, PAS au STRC. L'exposition STRC est **isolée** dans le jeton staké `sUSDat` (« risk isolation design »). (Bitget News ; Chainlink ; docs Strata.)
- Leçon : **où l'on range le STRC décide si le « dollar » casse.** Apyx l'a mis SOUS son dollar de base ; Saturn l'a mis DE CÔTÉ.
- Autres acteurs : **Hermetica** (hBTC, libellé BTC, accède au STRC via le sUSDat de Saturn) ; **Strata** (tranches senior/junior `srUSDat` / `jrUSDat` bâties sur le sUSDat).

## ÉTAGE 2 — Les PT sur Pendle

- Les positions Pendle (PT et YT) « ont fonctionné comme prévu » tout du long (post-mortem Apyx ; Steakhouse).
- Le **PT se rachète 1:1 en apxUSD à l'échéance** (échéance de la série concernée = 18 juin 2026), quelle que soit la décote temporaire du marché secondaire. Le YT est valorisé sur le **notionnel**, pas sur la valeur de marché.
- ⚠️ **Nuance capitale** : 1:1 **en apxUSD** ≠ 1:1 **en dollars**, puisque l'apxUSD vaut lui-même ~0,90 $. Le PT a tenu **par rapport à un jeton qui, lui, n'a pas tenu**.
- Sur le marché secondaire (étroit), le PT a pu se négocier avec une décote temporaire sous la pression vendeuse.

## DÉTAIL DES MARCHÉS PT (ajout — proportions et sorts)

**Deux PT distincts existent**, à ne pas confondre :
- **PT-apyUSD** (Pendle emballe le jeton de rendement `apyUSD`), échéance **18 juin 2026**. C'est LE gros pool : ~**62 M$ de TVL**, ~45 M$ de liquidité ; fixed APY ~13-18 % (le dossier dit 14,84 %, dans la fourchette). **C'est le marché du looping vedette** : on dépose le PT-apyUSD sur Morpho, on emprunte de l'USDC à **~1,6 %** (confirmé, 1,59 %), on boucle → jusqu'à 64 % APY. Marchés Morpho : `PT-apyUSD/USDC` (~9 M$ de TVL) et `PT-apyUSD/apxUSD`.
- **PT-apxUSD** (Pendle emballe le jeton de base `apxUSD`), échéance **17 juin 2026**. Marché distinct, plus petit ; ~13 % APR sur Pendle, 88 % LTV contre USDC sur Fira.

**Proportions (Apyx, juin 2026)** : Pendle = **73,5 % du TVL DeFi** d'Apyx (~161 M$), loin devant Curve (~34 M$) et Uniswap (~20 M$). Trois marchés Pendle, >237 M$ de TVL cumulée depuis le lancement. → **Le looping s'est massivement concentré sur les marchés PT, pas sur le marché de base apyUSD/apxUSD.**

**Qui a été liquidé, précisément** :
- Liquidés (documentés, Steakhouse + TID) : `apxUSD/USDC` et **`PT-apxUSD/USDC`** — collatéral côté apxUSD, dette en USDC. >4 M$ le 5 juin, ordonné, sans créance douteuse.
- Épargné (documenté) : `apyUSD/apxUSD` — collatéral apyUSD, dette apxUSD, oracle sur le taux de rachat → zéro liquidation. **Mais c'est un marché de base, plus petit que les marchés PT.**
- ⚠️ **NON DOCUMENTÉ = le marché du looping vedette lui-même** : `PT-apyUSD/USDC` (collatéral PT-apyUSD, dette USDC). Aucune source ne dit ce qui lui est arrivé en juin. Mécaniquement il est ENTRE les deux cas : dette en USDC (facteur de risque, comme les marchés liquidés) MAIS collatéral PT dont l'oracle Pendle price vers la valeur de rachat à l'échéance (facteur protecteur, comme le marché épargné). → NE PAS lui inventer d'issue ; dire honnêtement que son sort n'a pas été publié.

**Nuance clé** : notre Étage 3 « construction » décrit le loop sur **PT-apyUSD** (c'est bien la stratégie vedette, cf. CoinGecko). Or les liquidations *documentées par la presse* ont frappé **PT-apxUSD**. MAIS — voir données on-chain ci-dessous — le marché PT-apyUSD/USDC a lui aussi été massivement liquidé ; la presse ne l'avait juste pas couvert.

### DONNÉES ON-CHAIN — marché `PT-apyUSD-18JUN2026 / USDC` (récupérées via l'API GraphQL Morpho, blue-api.morpho.org, 2026-07-13)
Marché id `0xa75bb490…cab124`, collatéral **PT-apyUSD**, dette **USDC**, **LLTV 86 %**. C'est LE marché du looping vedette.
- **Total : 90 liquidations, ~4,26 M$ remboursés, créance douteuse ~0 (0,75 $).**
- **Vague 1 — décrochage aigu (3-5 juin) : 30 liq., 3,42 M$ (80 % du total).**
- **Vague 2 — échéance du PT (17-18 juin) : 45 liq., 446 k$.**
- **Vague 3 — après échéance (24-26 juin) : 15 liq., 399 k$.**
- État actuel (juillet) : supply 3,28 M$, borrow 2,87 M$, utilisation 87,5 %.
- **Interprétation** : ce marché (dette en USDC) a bel et bien sauté, surtout au décrochage du 3-5 juin. → Le **facteur décisif est la monnaie de la dette** : emprunter de l'USDC (vrais dollars) = liquidé quand le collatéral décroche, quel que soit le PT ; emprunter de l'apxUSD (la monnaie qui décroche, cas du marché apyUSD/apxUSD) = épargné (collatéral et dette bougent ensemble). La vague 2 (échéance) montre qu'un PT « qui se rachète au pair » ne sauve pas un prêt en USDC, car il se rachète au pair dans un apxUSD qui vaut lui-même ~0,90 $.
- **Source = requête on-chain directe** (plus autoritaire que les estimations de presse) ; le « >4 M$ le 5 juin » de Steakhouse portait sur plusieurs marchés et sous-estimait le total réel.

## CARTE ON-CHAIN COMPLÈTE (recherche primaire — API Morpho + RPC, 2026-07-13)

**Liquidations par marché (juin 2026) — collatéral exposé au STRC :**

| Marché (collatéral / dette) | Protocole | Échéance | Liquidations | Montant | Créance douteuse |
|---|---|---|---|---|---|
| apyUSD / **USDC** | Apyx | — | 62 | **5,21 M$** | 0 |
| PT-apyUSD-18JUN / **USDC** | Apyx | 18 juin | 90 | **4,26 M$** | ~0 (0,75 $) |
| PT-apyUSD-5NOV / **USDC** | Apyx | 5 nov | 23 | **1,61 M$** | 0 |
| sUSDat / **AUSD** | Saturn | — | 47 | **1,93 M$** | 0 |
| PT-sUSDat-27AUG / **USDC** | Saturn | 27 août | 4 | **0,012 M$** | 0 |
| **apyUSD / apxUSD** (même monnaie) | Apyx | — | 6 | **0,076 M$** | 0 |

- **Total mesuré > 13 M$** (vs « ~4 M$ le 5 juin » rapporté par la presse → l'épisode était plusieurs fois plus gros).
- **Deux vagues systémiques** : (1) **3-5 juin** = décrochage initial ; (2) **17-18 juin** = **plus-bas record du STRC à 82,53 $** (PAS l'échéance du PT : le marché PT-5NOV, qui n'échoit qu'en novembre, saute aussi le 18 juin). + traîne 24-26 juin.
- **Le facteur décisif = la monnaie de la dette** : tous les marchés en **USDC/AUSD** (vrais dollars) ont sauté ; le seul en **apxUSD** (la monnaie qui décroche) est quasi épargné (0,076 M$ vs millions).
- **Saturn** : son PT est petit (0,012 M$) MAIS son sUSDat a été liquidé 1,93 M$ → Saturn n'a protégé que son **dollar de base** (USDat = Treasuries) ; son jeton exposé STRC (sUSDat) a sauté comme les autres.

**Oracles — carte définitive (énumération complète des marchés PT-ap*, API Morpho + RPC) :**
- Le feed **« hardcodé $1 »** (feed apxUSD = address(0), oracle type `0x9acf…`) n'apparaît QUE sur les marchés où la **dette est en apxUSD** (même monnaie) → bénin, c'est la monnaie de compte. Créés dès le 19 mars.
- **Tous les marchés en USDC** (les levier ×5) utilisent un vrai feed : `0x2037` (« Capped Collateralization Ratio », ~0,86, marchés de mars) puis `0x651b` (« APXUSD / USD Exchange Rate », ~0,89 vivant, marchés de mai-juin).
- **Créance douteuse = 0 sur TOUS les marchés** → le scénario USD0++ (oracle aveugle → pas de liquidation → bad debt) N'A PAS eu lieu : les marchés USDC avaient un vrai feed et ont liquidé proprement.
- ⚠️ Correction d'un raccourci antérieur : « l'oracle PT-apxUSD hardcodé $1 = DANGER USD0++ » était une **mauvaise attribution** (le hardcodé est sur du même-monnaie, pas sur le marché de looping USDC).

**Évolution du second feed (marchés USDC) — ce qui a changé après le stress :**
Chaque oracle = 2 jambes : (a) prix du PT via **Pendle** (valeur de marché) × (b) un second feed.
- **Marchés de JUIN** (PT-apxUSD-18JUN ET PT-apyUSD-18JUN, même feed `0x2037a5Eb`) : feed2 = **« Apyx Capped Collateralization Ratio »**, valeur plafonnée ~**0,86** (semi-figée).
- **Marchés RÉCENTS** (août + nov, apxUSD et apyUSD, feed `0x651b101f`) : feed2 = **« APXUSD / USD Exchange Rate »**, valeur vivante ~**0,89** (price le décrochage réel).
- → **Oracle révisé après le stress de juin** : passage d'un **ratio plafonné** à un **taux de change vivant**. LLTV du marché de nov relevé à 92 % (vs 86 %).
- Non confirmé (nécessiterait la source Etherscan) : la logique exacte du « Capped Collateralization Ratio ».

**Étage 2 — PT sur Pendle (API Pendle) :** pool PT-apyUSD-18JUN, TVL 13,7 M$ (1er juin) → 8,6 M$ (5 juin, ~−37 %) ; rendement implicite 21 % → 31 % (le PT bradé) alors que le sous-jacent restait ~11,4 %. Pas de liquidation sur Pendle (AMM) : décote + fuite de liquidité. PT cote ~0,856 $ aujourd'hui (reflète l'apxUSD décroché).

## VÉRIFIÉ 2026-07-14 — Comment se forme le prix d'un PT (doc Pendle, relue sur demande de Marc)

- **Le pool Pendle = PT/SY** (SY = enveloppe standardisée du jeton de rendement, ici l'apyUSD). Les LP déposent PT + SY et touchent les frais des deux flux (PT et YT).
- **Le prix du PT se fixe dans ce pool par l'offre et la demande**, exprimé en **rendement implicite** : PT ≈ valeur de rachat à l'échéance, actualisée au taux implicite sur le temps restant. La courbe AMM (héritée de Notional) **se resserre à l'approche de l'échéance** → le prix du PT converge mécaniquement vers sa valeur de rachat.
- **Les YT s'échangent via le MÊME pool** (flash swaps) : acheter du YT fait baisser le PT (taux implicite monte), vendre du YT le fait monter. → Réponse à la question de Marc : oui, le prix du PT dépend de la demande de PT **et** de YT — deux faces du même marché. En juin, le mouvement dominant = vente directe de PT (débouclage) + retrait de liquidité des LP.
- **Prix du PT en dollars = DEUX composantes** : (a) la décote de taux (marché secondaire, temps restant) × (b) la valeur en $ du jeton de rachat (l'apxUSD). Le PT ne « transmet » PAS passivement l'apxUSD avant l'échéance — formulation à corriger dans le brouillon B.
- **Ordres de grandeur juin** : (a) taux implicite 21 → 31 %, mais à ~2 semaines de l'échéance ça ne vaut que ~−0,3 % de prix ((1,31)^(−13/365) ≈ 0,990 vs 0,993) ; (b) apxUSD −10 %. En dollars, l'essentiel du mouvement = la jambe (b).
- ⚠️ **Le « 0,856 $ » cité en Étage 2 est à RÉATTRIBUER** : incohérent avec le PT-18JUN (échu le 18 juin, se rachète 1:1 en apxUSD ≈ 0,88–0,92 $) ; cohérent avec le PT-**5NOV** aujourd'hui (≈ 0,89 × décote ~4 mois à ~12 % ≈ 0,86). [à vérifier le jour de la publication]

## VÉRIFIÉ 2026-07-14 — Oracles Morpho, chaîne de liquidation complète (API Morpho + RPC `description()`)

**Marché vedette `PT-apyUSD-18JUN / USDC`** (id `0xa75bb490…cab124`, LLTV 86 % confirmé) — oracle `ChainlinkOracleV2` à deux jambes, identités confirmées on-chain :
- Jambe PT = `0x115aFecc` → `description()` = **« Pendle Chainlink-compatible Oracle »** = TWAP du taux implicite du pool Pendle (lissé, PAS le prix spot de panique). [fenêtre TWAP exacte non confirmée]
- Jambe apxUSD→$ = `0x2037a5Eb` → **« Apyx Capped Collateralization Ratio »** (~0,86, type NAV plafonnée, lissée).
- Marchés même-monnaie (dette apxUSD) : **jambe PT SEULE, pas de feed2** (confirmé on-chain : baseFeedTwo = null) — rien à convertir, les deux côtés sont en apxUSD.
- Marchés 27AUG et 5NOV en USDC : feed2 = `0x651b101f` → **« APXUSD / USD Exchange Rate »** (vivant). Leur jambe PT (`0x5a35…`, `0xBDF4…`) : `description()` revert — type exact non confirmé.
- ⚠️ **LLTV des marchés 5NOV = 91,5 %** (915000000000000000), pas « 92 % » — corriger le brouillon.

**La chaîne de liquidation, étape par étape (à dérouler telle quelle dans le texte)** :
1. Sur Morpho, la position du loopeur = collatéral en PT-apyUSD, dette en USDC. Morpho compare en continu la dette à la **valeur du collatéral selon SON oracle** (pas selon le prix affiché sur Pendle).
2. Valeur oracle du collatéral = nb de PT × [PT→apxUSD, TWAP Pendle] × [apxUSD→$, ratio Apyx] ÷ [USDC→$].
3. STRC baisse → le panier d'Apyx (bourré de STRC) vaut moins → la jambe **apxUSD→$** baisse. C'est ELLE qui bouge — la jambe PT n'a quasi pas joué (~−0,3 %).
4. La dette USDC, elle, ne bouge pas. Collatéral revalorisé à la baisse contre dette fixe → le ratio dette/collatéral franchit 86 % → liquidation. Les positions les plus leviées (marge la plus mince) sautent en premier.
5. Ordonné car la jambe apxUSD→$ est une valeur type NAV, **plus lente que le prix de panique du secondaire** → liquidations séquentielles, zéro créance douteuse.
6. **17–18 juin (explication du "saut" du marché 5NOV)** : STRC au plus-bas record (82,53 $) → jambe apxUSD→$ au plus bas → 1,61 M$ liquidés sur un PT pourtant à ~5 mois de son échéance. Ce qui liquide = la valeur en $ de l'apxUSD, pas le calendrier du PT.

**Formulation « l'oracle accordé à la monnaie de la dette » — préciser QUI et POUR QUI** : c'est le **créateur du marché** (le curateur qui liste le marché sur Morpho) qui choisit l'oracle, à la création, une fois pour toutes. Le bon appariement protège d'abord les **prêteurs** (un oracle aveugle au dépeg = pas de liquidation = créance douteuse pour eux, scénario USD0++). Pour l'**emprunteur/loopeur**, il détermine quand sa position saute. Le déposant lambda ne voit jamais ce réglage.

## POURQUOI CES ORACLES, ET QUELLES CONSÉQUENCES (cœur analytique)

**Principe unificateur : l'oracle doit être accordé à la MONNAIE DE LA DETTE.**
- **Dette en apxUSD (même monnaie)** → on hardcode apxUSD=$1. *Pourquoi* : les deux côtés sont en apxUSD, pas besoin de convertir en dollars. *Conséquence* : immunisé au dépeg, pas de liquidation. Sûr par construction. Le hardcodage n'est PAS un défaut ici.
- **Dette en USDC (vrais dollars)** → il FAUT priser la vraie valeur de l'apxUSD. *Pourquoi* : sinon l'oracle croit le collatéral à $1 alors qu'il vaut 0,90 $. *Conséquence si on hardcodait* : scénario USD0++ (oracle aveugle → pas de liquidation → créance douteuse pour les prêteurs). Apyx l'a évité (vrai feed sur les marchés USDC).
- **Le choix ratio plafonné (mars) vs taux de change vivant (mai-juin)** : le plafonné est moins réactif à la panique de court terme (n'évalue pas au prix spot instantané) ; le taux vivant price le dépeg réel, plus honnête, liquide plus tôt et plus juste. Passage de l'un à l'autre = révision post-stress.

**LA LEÇON (conséquence d'ensemble) :** c'est parce que la combinaison dangereuse (dette USDC + oracle hardcodé $1) n'a JAMAIS été utilisée que juin a donné des liquidations MAIS zéro créance douteuse. Le bon appariement oracle/dette a protégé les **prêteurs**. Il n'a protégé ni les **loopeurs** (liquidés, cf. 4,26 M$) ni les **porteurs d'apxUSD** (−10 %, toujours décroché). Bon design d'oracle = pas d'effondrement systémique ; ≠ pas de perte individuelle. Pour le lecteur : la sûreté d'un « rendement stable » DeFi tient à un choix technique qu'il ne voit jamais — l'oracle price-t-il le collatéral en vrais dollars, ou dans le même jeton bancal auquel tu es déjà exposé ?

## ÉTAGE 3 — Le looping et les oracles

- **Marchés liquidés** (Morpho) : `apxUSD/USDC` et **`PT-apxUSD/USDC`** — collatéral apxUSD (ou PT-apxUSD), emprunt en **USDC** (vrais dollars). **Plus de 4 M$ liquidés le 5 juin.** (TID Research ; Steakhouse.)
- **Pourquoi ça a liquidé** : l'USDC ne bouge pas (dette fixe), l'adossement de l'apxUSD (le STRC) fond réellement, et l'oracle de ces marchés lit une **valeur nette d'actif (NAV)** qui reflète cette baisse. Garantie qui fond contre dette fixe → seuil franchi.
- **Pourquoi c'est resté ordonné, sans créance douteuse** : la NAV de l'oracle tombait **plus lentement** que le prix de panique du marché → liquidations séquentielles, pas de spirale.
- **Marché épargné** : `apyUSD/apxUSD` (collatéral apyUSD, emprunt apxUSD) — **zéro liquidation**, parce que son oracle lit le **taux de rachat** (apyUSD→apxUSD), qui ne fait que monter, pas le prix spot. Loopeurs « structurellement isolés ». (Steakhouse ; post-mortem Apyx.)
- ⚠️ **Non documenté** : le sort du marché `PT-apyUSD/USDC` (celui décrit à notre Étage 3). Le post-mortem dit explicitement ne pas le préciser. → NE PAS lui prêter d'issue en juin.
- **Le facteur décisif** = ce que l'oracle est réglé pour lire (valeur de rachat/notionnelle, insensible à la panique VS valeur qui reflète l'affaiblissement réel), renforcé par la monnaie de la dette (USDC fixe VS apxUSD qui bouge avec le collatéral). Choix techniques invisibles au déposant.

## Sources (pour le bloc Sources / crédits inline)
- **Apyx Foundation** — « Apyx 2.0: Redemption Value, Total Collateralization… » (X, 15 juin 2026) ; post-mortem blog.apyx.fi.
- **Steakhouse Financial** — DeFi Markets Update, 10 juin 2026.
- **TID Research** — apxUSD Risk Assessment.
- **CoinDesk** — apxUSD depeg, 4 juin 2026.
- **Bitget News / Chainlink / Strata docs** — Saturn non affecté (USDat = Treasuries, sUSDat isolé).
- **CoinGecko / OAK Research asset tracker** — cotation apxUSD ~0,90 $ (juillet 2026).
