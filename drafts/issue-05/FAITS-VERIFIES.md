# #5 — Dossier de faits vérifiés

> Relevés par la session principale les 2026-09-03 / 2026-09-04, sur **sources primaires**
> (DeFiLlama, API Hyperliquid, docs Liquity) + recoupement presse.
> ⚠️ Tout chiffre marqué 🔄 doit être RAFRAÎCHI le jour de l'envoi.

---

## ⚠️ CORRECTION DE DATE (10/09) — le pic à 81 000 $ est du 4 septembre, pas du 3

Historique BTC relevé sur `coins.llama.fi/prices/historical` (midi), le 2026-09-10 :
2 sept **76 707** · 3 sept **77 585** · 4 sept **81 050** · 5 sept **79 627** · 7 sept **79 353** ·
8 sept **78 718** · 9 sept **78 974** · 10 sept **77 945**.
→ Le « relevé du 3 septembre à 81 190 $ » ci-dessous était **daté d'un jour trop tôt** : le pic est le
**4 septembre**. Le décrochage réel se lit **du 4 au 10 septembre, environ −3,8 %**.
→ ⚠️ **Conséquence pour LES REPÈRES** : sur 7 jours glissants (3 → 10 sept), le bitcoin est en
**légère HAUSSE (+0,6 %)**, parce que le 3 septembre était déjà un point bas. Le tableau affichera donc
du vert alors que les actus décrivent une semaine tendue : ce n'est pas une contradiction, c'est un
aller-retour (creux le 2, pic le 4, redescente ensuite) — **l'avis des REPÈRES doit l'expliquer**,
sinon le lecteur croit à une erreur.

## Prix de référence (relevé 2026-09-03, DeFiLlama) 🔄

- BTC : **81 190 $**
- ETH : **2 508 $**
- HYPE : **84,30 $**

---

## ON ÉCLAIRE — le CDP

### Mécanique générale (à vulgariser)
Déposer un actif volatil en garantie → emprunter un stablecoin contre lui → la dette reste
libellée en dollars pendant que le collatéral bouge. Si le collatéral baisse trop, liquidation.
Terme déjà défini au #4 : `liquidation`, `levier`, `stablecoin`, `funding-rate`, `contrat-perpetuel`.

### Cas d'usage 1 — dépenser sans vendre (exemple chiffré validé)
Base : BTC à 81 190 $, besoin de 40 000 $.
- **Vendre** : céder 0,493 BTC → il reste **0,507 BTC**.
- **Emprunter** : déposer 1 BTC, emprunter 40 000 $ (LTV 49 %).
  Deux ans plus tard, BTC à 160 000 $ : dette ≈ **45 800 $** (40 000 × 1,07²).
  Remboursée en vendant **0,286 BTC** → il reste **0,714 BTC**.
- Écart : 0,714 vs 0,507 BTC, soit **~33 000 $** au prix de 160 000 $.
- ⚠️ REVERS À DIRE : liquidation autour de **44 000 $** le BTC (dette 40 000 $ / LTV max ~0,909)
  → perte du collatéral. Celui qui a vendu ne risquait rien. Ne pas survendre.
- ⚠️ Le 160 000 $ est une HYPOTHÈSE d'illustration, pas une prévision — l'écrire comme telle.

### Cas d'usage 2 — levier, et pourquoi pas simplement un perp
- **Coût du financement d'un long BTC sur Hyperliquid : 10,63 % annualisés**
  (moyenne des 24 points horaires des dernières 24 h, API `https://api.hyperliquid.xyz/info`,
  type `fundingHistory`, relevé 2026-09-03). Long ETH : 10,95 %. 🔄
- Avantages du CDP : coût **fixe et connu d'avance** (chez Liquity, fixé par l'emprunteur) ·
  **pas de funding qui s'emballe** quand tout le monde est long · on détient du **vrai spot
  en auto-garde**, pas une position chez un opérateur.
- Prix à payer : bien **moins efficient en capital** (110-200 % de collatéral contre quelques
  % de marge sur un perp) · frais de gaz · plus lent à déboucler.
- **f(x) Protocol** = le cas extrême de cet argument : levier jusqu'à ×7 sur stETH **et WBTC**,
  **zéro frais de financement**, mécanisme de « frein de liquidation ». TVL 126 M$ (dont 87 M$
  de pool2). À CITER ici en une phrase — ce n'est pas le sujet du Sous la loupe.

### Cas d'usage 3 — emprunter pour placer plus cher (LE PORTAGE) — version honnête
Rendements stables réellement disponibles au 2026-09-03 (DeFiLlama yields, pools les plus gros) 🔄 :
| Où | APY réel |
|---|---|
| Pool de stabilité fxUSD (f(x)) | 6,98 % |
| sUSDe (Ethena) | 4,66 % |
| Coffres USDC Morpho (Base/Ethereum, les gros) | 3,20 % → 5,65 % |
| sUSDS (Sky) | 3,60 % |

→ Face à un coût d'emprunt de l'ordre de 6-7 %, **l'écart est nul ou négatif aujourd'hui**.
Angle retenu : expliquer que le portage a bien fonctionné, qu'il est **écrasé en ce moment**,
et **à quelle condition il redevient intéressant** (baisse des taux d'emprunt, ou prise de
risque supplémentaire assumée). NE PAS servir un rendement que le lecteur ne trouvera pas.

❌ **Le « 10,8 % APY sur les coffres USDC de Morpho » est FAUX** (donnée périmée reprise par
la veille). Maximum live constaté : 5,65 %. Ne jamais l'écrire.

---

## SOUS LA LOUPE — Liquity V2

- **Catégorie DeFiLlama : CDP.** Ethereum uniquement. **2 audits.**
- **TVL : 94,5 M$** 🔄 (Liquity V1, toujours en vie, pèse 278 M$ à part).
- **Collatéraux : ETH, wstETH (Lido), rETH (Rocket Pool). PAS de bitcoin** — à dire clairement,
  c'est une limite réelle du protocole au regard du cas d'usage 1.
- **Stablecoin émis : BOLD.**
- **LTV maximum : 90,91 % sur la branche ETH · 83,33 % sur wstETH et rETH.** Au-delà → liquidation.
- **Particularité centrale : l'emprunteur fixe lui-même son taux d'intérêt**, dans une
  **fourchette de 0,5 % à 25 % par an**, et peut l'ajuster à tout moment (pénalité si
  l'ajustement intervient moins de 7 jours après le précédent). Ni DAO, ni courbe d'utilisation.
- **100 % des revenus du protocole vont aux utilisateurs** (pools de stabilité).
- **Contrepartie de ce choix — les « redemptions »** : n'importe qui peut échanger 1 BOLD contre
  1 $ de collatéral, et les prêts sont ponctionnés **du taux le plus bas vers le plus haut**.
  Fixer un taux bas = payer moins mais risquer d'être remboursé d'office par anticipation.
  C'est le vrai arbitrage du protocole, et c'est ÇA qu'il faut expliquer simplement.
- **Frais d'ouverture** : « Upfront Borrowing Fee » = 7 jours d'intérêt moyen de la branche.
- **Dette minimum : 2 000 BOLD.**
- **Pools de stabilité BOLD** (là où va l'intérêt payé par les emprunteurs), APY constatés
  2026-09-03 : **2,41 % · 3,75 % · 4,05 %** selon la branche 🔄.
- ❓ **À PINNER LE JOUR DE L'ENVOI** : le taux d'emprunt moyen effectif par branche. Non
  récupérable par API publique ce jour (api.liquity.org et le subgraph Goldsky répondent 404).
  → à relever à la main sur https://www.liquity.org/borrow avant l'envoi. Ne PAS inventer.
- Badge de risque : à décider par le rédacteur, argumenté. Piste 🟡 Moyen (immuable, sans
  gouvernance, 2 audits, mécanisme éprouvé depuis V1 — mais liquidation réelle + redemptions
  + collatéral 100 % ETH).

---

## DANS LE FAISCEAU 1 — Hyperliquid entre aux États-Unis

- **Bloomberg, 31 août 2026** : Hyperliquid Labs en **discussions avancées** avec **Payward**
  (maison-mère de Kraken) pour entrer sur le marché américain.
- Le véhicule : **Bitnomial**, filiale de Payward, **agréée CFTC** (bourse + chambre de
  compensation + courtage). Payward l'a rachetée début 2026 pour **jusqu'à 550 M$**.
- Ce qui serait offert : à des utilisateurs américains enregistrés, **une sélection de contrats
  perpétuels** adossés aux marchés de Hyperliquid et de sa blockchain.
- **Statut : structure présentée à la CFTC, approbation NON acquise.** Une ex-juriste de la SEC
  (Ashley Ebersole) estime le processus à **10 à 12 mois**, impliquant SEC et CFTC.
- Contexte : Hyperliquid traite **plus de 4 Md$ de volume quotidien**, sans opérateur central —
  c'est précisément ce design permissionless qui l'a tenu hors des États-Unis jusqu'ici.
- Ni Hyperliquid ni Payward n'ont commenté ; termes financiers non divulgués.
- **Angle de l'avis** : on a expliqué les perps au #4 et publié la fiche Hyperliquid. La question
  à poser : un protocole sans opérateur peut-il entrer aux US **sans se recentraliser** ?
  (Rappel utile : l'épisode JELLY de mars 2025, où les validateurs ont voté en ~2 min.)
- À signaler aussi, même semaine : **unlock de 9,92 M HYPE le 6 septembre** (~808 M$ nominal),
  vesting linéaire des contributeurs ; historiquement ~1,75 % seulement sont réellement
  réclamés/vendus → dilution réelle bien moindre que le chiffre nominal. ⚠️ Ce chiffre de 1,75 %
  vient de la veille et n'est PAS recoupé — à faire vérifier ou à ne pas utiliser.
- Sources : Bloomberg 31/08 · CoinMarketCap Academy · Blockhead 01/09 · FinanceFeeds · CryptoBriefing.

## DANS LE FAISCEAU 2 — Strategy vend bas, rachète haut

| | Vendu | Racheté |
|---|---|---|
| Quand | 30 juin (1 363 BTC) + 6 juillet (2 225 BTC) | 24 → 30 août |
| Combien | **3 588 BTC** | **4 603 BTC** |
| Montant | ~216 M$ | **369,7 M$** |
| Prix moyen | **~60 200 $** | **~80 320 $** |

- Écart : **+33 %**, soit **~20 100 $ de plus par bitcoin**.
- ⚠️ **CORRIGÉ le 2026-09-09** : l'écart vente → rachat est de **sept semaines** (6 juillet → 24 août,
  49 jours ; huit semaines et demie si on part du 30 juin). Les « dix semaines » ci-dessous désignent la
  **pause d'ACHAT**, pas l'écart entre la vente et le rachat — ne pas confondre les deux (erreur commise
  une première fois dans ce dossier, repérée par le vérificateur).
- **Motif de la vente** (Saylor) : lever ~216 M$ pour **payer les dividendes des titres
  Digital Credit (STRC)**. Représentait < 0,5 % de la réserve.
- **Financement du rachat** : émission de **4,53 M d'actions MSTR** → **602,8 M$** nets, répartis
  en 369,7 M$ de bitcoin + 151,8 M$ de rachat de STRC + 50,7 M$ de dividendes STRC + 30 M$ de cash.
- **Fin d'une pause de 10 semaines** ; Saylor : « We're back ».
- **Réserve totale : 845 050 BTC.**
- ❓ **CONTRADICTION À TRANCHER PAR LE FACT-CHECKER** : prix de revient moyen cumulé.
  CryptoBriefing dit **75 412 $** ; Bitbo dit 66 384 $ pour un coût total de 33,139 Md$
  (incohérent : 845 050 × 66 384 = 56 Md$). Ne pas citer tant que ce n'est pas tranché.
- **Lien avec ON ÉCLAIRE** : Strategy avait du bitcoin et besoin de cash → elle a **vendu**.
  La réponse DeFi au même problème, c'est le CDP : emprunter contre le collatéral. Dire aussi
  honnêtement **pourquoi une société cotée ne peut pas simplement faire ça** (comptabilité,
  garde, et surtout risque de liquidation sur un actif qu'on jure ne jamais vendre).
- Rappels des numéros précédents : Strategy au #1 et au #3 (Digital Credit Capital Framework,
  s'autorise à vendre du BTC — c'est exactement ce qui s'est produit). Termes déjà définis :
  `dat`, `mnav`.

---

## ÇA BRILLE — Robinhood Chain, Pons et les memecoins

Relevés DeFiLlama 2026-09-03 (API primaire, pas la presse) 🔄 :

| Donnée | Valeur |
|---|---|
| Frais de la chaîne, 2 septembre | **19,1 M$ en une journée** |
| Frais le 23 août | 2,1 M$ (→ **×9 en 10 jours**) |
| Frais cumulés depuis le lancement (juillet) | **333 M$** |
| Revenu net de la chaîne, 24 h | **4,0 M$** |
| Idem, Ethereum / Solana | **61 k$ / 82 k$** |
| Volume DEX, 24 h | **1,55 Md$** (8,9 Md$ sur 7 j) |
| TVL | **820 M$** (Base 5,66 Md$ · Solana 5,89 Md$ · Hyperliquid 1,52 Md$ · Arbitrum 1,42 Md$) |
| **Pons V2, frais 24 h** | **6,09 M$** — plus que le revenu de la chaîne elle-même |
| Répartition du volume DEX | Uniswap V4 779 M$ · GMGN 445 M$ · Uniswap V3 189 M$ · Pons V2 128 M$ |

- **Lancements de jetons sur Pons : ~22 600 le 30 août, ~25 000 le 2 septembre.**
- **Le business de base de Robinhood Chain, ce sont les actions tokenisées** (lancement
  juillet 2026), et c'est le memecoin qui a pris la chaîne. ~500 000 détenteurs d'actions
  tokenisées ; chaîne EVM la plus rapide de l'histoire à atteindre 100 M de transactions.
- **L'idée de Pons — appairer un memecoin à une action tokenisée** : au 1er septembre,
  **17,2 % de l'offre on-chain de 19 actions tokenisées** est immobilisée dans **432 pools**
  où l'action sert d'actif de cotation ; ces pools font **31,3 % du volume** de ces actions.
### 🔄 RELEVÉ DU 2026-09-10 (API DeFiLlama) — chiffres à utiliser pour l'envoi

| Donnée | 3 sept | **10 sept** | Tendance |
|---|---|---|---|
| Frais de la chaîne, 24 h | 19,1 M$ | **13,0 M$** | en baisse depuis le pic |
| Frais cumulés depuis juillet | 333 M$ | **480 M$** | +147 M$ en une semaine |
| Revenu net de la chaîne, 24 h | 4,0 M$ | **2,75 M$** | en baisse |
| Volume DEX, 24 h | 1,55 Md$ | **1,89 Md$** | en hausse |
| Volume DEX, 7 j | 8,9 Md$ | **12,2 Md$** | en hausse |
| TVL | 820 M$ | **897 M$** | en hausse |

### 🔴 ERREUR DU DOSSIER À NE PAS REPRODUIRE — la comparaison Ethereum / Solana

Le tableau du 3 septembre annonçait « revenu 24 h : Ethereum **61 k$** / Solana **82 k$** » face aux
4,0 M$ de Robinhood Chain. **C'est faux.** Relevé du 10 septembre sur la même API (`dailyRevenue`) :
**Ethereum 1,99 M$** et **Solana 6,95 M$** sur 24 h — soit 30 à 85 fois plus que les chiffres notés.
→ **Conséquence éditoriale** : l'angle « Robinhood Chain gagne plus qu'Ethereum et Solana » **ne tient
pas**. Aujourd'hui Solana gagne **plus du double** de Robinhood Chain (6,95 contre 2,75 M$).
→ **Ne PAS écrire cette comparaison.** L'angle qui reste solide et vérifiable : la chaîne a encaissé
**480 M$ de frais cumulés en dix semaines d'existence**, son volume DEX **monte** (12,2 Md$ sur 7 j)
pendant que ses frais quotidiens **retombent** depuis le pic du 2 septembre — et le gaz offert
s'éteint vers le 29 septembre. C'est la question « que restera-t-il quand la rente s'arrête ? »,
qui est justement l'angle voulu par Marc.
⚠️ Si une comparaison entre chaînes est malgré tout souhaitée, elle doit être **relevée le jour même
sur `dailyRevenue`** et non reprise du dossier.

### ⚠️ RÉSOLU le 2026-09-04 — « frais de la chaîne » ≠ « ce que Robinhood gagne »
Distinction à NE PAS rater, elle change le sens du chiffre principal :
- Les **19,1 M$ de « frais »** relevés sur DeFiLlama = **le total payé par les utilisateurs à
  toutes les applications de la chaîne**, Pons compris. Ce n'est PAS le revenu de Robinhood.
- **Robinhood encaisse le revenu du séquenceur**, c'est-à-dire les frais de gaz — la ligne
  « revenue » de DeFiLlama (**4,0 M$ sur 24 h** au 2026-09-03), et encore **nette du coût des
  données sur Ethereum et d'une redevance de licence de 10 % versée à l'écosystème Arbitrum**.
- ✅ **Confirmé du coup : Robinhood Chain est bâtie sur la pile Arbitrum** (d'où la redevance).
  Le chiffre « 35 % des revenus d'Arbitrum en juillet » devient plausible, mais reste **non
  recoupé** — à vérifier avant usage.
- Ordre de grandeur cité par crypto.news vers le 31/08-01/09 (volume DEX à 945 M$) :
  gaz mesuré à **963 612 $ sur la journée** et 4,04 M$ sur le mois glissant, quand **Pons**
  faisait 5,34 M$ de frais bruts sur la journée. Illustre bien l'écart entre les deux mesures.

### Le gaz offert — confirmé, et il s'arrête bientôt
- **Robinhood paie le gaz des utilisateurs qui passent par le Robinhood Wallet**, promotion de
  **90 jours démarrée au lancement du mainnet le 1er juillet 2026**, courant jusqu'au
  **~29 septembre 2026**.
- **La sortie a déjà commencé** : à la mi-août, le seuil de prise en charge est passé de
  **5 $ à 0,50 $ par transaction** — extinction progressive, pas coupure brutale.
- → C'est l'argument concret pour la chute de l'avis : on saura d'ici fin septembre si le
  volume tient quand l'utilisateur paie son gaz lui-même.
- Sources : cryptonews.com · startupfortune · crypto.news · CryptoTimes 01/09.
- **Angle de l'avis, donné par Marc** : le flux et les revenus sont impressionnants ; mais
  **nous, on évite les memecoins** ; et on est **très curieux de voir si la chaîne conservera
  du volume et de la liquidité une fois la mode passée** — peut-être en revenant à son marché
  d'origine, les actions tokenisées.
- ❌ **NE PAS TRAITER** : la stratégie de liquidité concentrée HOOD/USDG à 4 000 % d'APY.
  Trop technique pour cette rubrique et trop proche d'une recommandation. Sujet possible pour
  un futur Sous la loupe.
- Sources : DeFiLlama (API) · CoinDesk 31/08 et 03/09 · The Defiant 02/09 · CryptoBriefing ·
  CryptoTimes 01/09 (le gaz offert).

---

## Contexte marché pour LES REPÈRES 🔄
- Août 2026 : **BTC +24,95 %**, **ETH +32,5 %** (ETH surperforme).
- Fed à **3,5-3,75 %** ; décision de septembre suspendue à l'emploi et à l'inflation.
- ETF Bitcoin : **+217 M$ le 1er septembre**, après 9 jours de sorties.
- ETF Ethereum : **12e journée consécutive d'entrées**.
- Brent autour de **96 $** (tensions États-Unis/Iran).
- Tous les cours du tableau sont à relever le jour de l'envoi (DeFiLlama, cf. mémoire
  [[cours-defillama]] — pas de WebSearch pour ça).

---

## Relevé Liquity V2 du 2026-09-07 (pour SOUS LA LOUPE) 🔄

- **TVL : 95,6 M$** (Ethereum uniquement). Liquity **V1**, toujours vivant à côté, pèse **180,4 M$**.
- **2 audits.** Mise en ligne de la V2 : **janvier 2025** (horodatage DeFiLlama 1737631098).
- **Répartition du collatéral V2** : wstETH 51,6 M$ · ETH 25,8 M$ · rETH 16,9 M$.
- **Pools de stabilité BOLD** (là où atterrit l'intérêt payé par les emprunteurs), APY du jour :
  **2,17 % · 3,88 % · 3,94 %** selon la branche. Encours : 7,1 · 7,0 · 4,6 M$.
- **Taux d'emprunt : fixé par l'emprunteur, entre 0,5 % et 25 % par an**, ajustable à tout moment
  (pénalité si l'ajustement intervient moins de 7 jours après le précédent). Ni DAO, ni courbe
  d'utilisation. **100 % des revenus du protocole vont aux utilisateurs.**
- **LTV maximum : 90,91 % sur la branche ETH · 83,33 % sur wstETH et rETH.**
- **Frais d'ouverture** : « Upfront Borrowing Fee » = 7 jours d'intérêt moyen de la branche.
- **Dette minimum : 2 000 BOLD.**
- **Redemptions** : n'importe qui peut échanger 1 BOLD contre 1 $ de collatéral ; les prêts sont
  ponctionnés **du taux le plus bas vers le plus haut**. C'est le vrai arbitrage du protocole.
- ❓ **Taux d'emprunt moyen effectif : toujours non exposé par API publique** (api.liquity.org et
  le subgraph Goldsky répondent 404, DeFiLlama ne suit pas le borrow de Liquity). À relever à la
  main sur https://www.liquity.org/borrow avant l'envoi. NE PAS INVENTER.

### Points de comparaison utiles (relevés le 2026-09-07)
- Coût de l'emprunt ailleurs : **Sky 5,5-8 %/an · Spark ~6-7 %/an · f(x) 0 %/an** (0,5 % à
  l'ouverture + 0,2 % à la fermeture).
- f(x) Protocol : TVL 126 M$, accepte stETH **et WBTC**, levier 1,1× à 7×, Rebalance Line
  LTV 88 %, Liquidation Line LTV 95 %.

### Historique des pools de stabilité BOLD sur 12 mois (relevé 2026-09-07, API DeFiLlama `yields/chart`)
| Branche | Actuel | Minimum | Médiane | Maximum |
|---|---|---|---|---|
| ETH (7,1 M$) | 2,17 % | 1,07 % | 4,25 % | 66,24 % |
| wstETH (7,0 M$) | 3,87 % | 1,40 % | 3,04 % | 178,86 % |
| rETH (4,6 M$) | 3,94 % | 1,04 % | 3,84 % | 48,64 % |
→ Les maximums sont des **pointes de quelques heures = jours de liquidation** (le pool encaisse
le collatéral décoté). À présenter comme telles, jamais comme un rendement atteignable.

### ⚠️ Liquity V2 — l'historique réel (vérifié le 2026-09-07). CORRIGE deux erreurs du brouillon.

**1. Les audits : bien plus que les « 2 » affichés par DeFiLlama.** Pour la V2 redéployée :
**Trail of Bits · ChainSecurity · Dedaub (2 tours) · Coinspect · Certora (vérification
formelle) · Recon**, plus un **concours Cantina de 5 semaines** (800+ chercheurs, 350 k$ de
prime). Ne pas écrire « 2 audits » : c'est faux et ça dessert le protocole.

**2. « V1 sans incident majeur » ne peut PAS servir d'argument pour la V2 — et la V2, elle,
a eu un incident sérieux :**
- V2 lancée en **janvier 2025**.
- **Mi-février 2025, soit ~3 semaines après le lancement** : découverte d'un **bug critique dans
  les pools de stabilité**, malgré tous les audits ci-dessus ET la vérification formelle.
  → **~30 M$ de sorties.**
- **Le protocole a dû être intégralement REDÉPLOYÉ** : nouveaux contrats, et les utilisateurs
  invités à rouvrir leurs positions. **Relance le 19 mai 2025.**
- Le bug portait sur le **calcul de l'accumulation des intérêts** dans le pool de stabilité,
  pas sur un vol : **pas de perte de fonds** documentée.
- ⚠️ Conséquence sur le récit : **le code actuel n'a qu'environ 1 an et 4 mois de recul**
  (depuis mai 2025), pas « cinq ans ».

**3. 🎯 C'est L'ILLUSTRATION PARFAITE du revers de l'immuabilité**, que le vérificateur
demandait : des contrats immuables ne se corrigent pas. Quand un bug sort, la seule issue est
de **redéployer tout le protocole et de demander à chacun de déménager ses positions**. C'est
arrivé à Liquity, pour de vrai, en 2025. À utiliser dans la section risques — c'est concret,
documenté, et honnête.

**4. Risque d'oracle relevé par Coinspect (BOLD-05)** : la défaillance d'un **seul** oracle peut
**bloquer les redemptions sur TOUTES les branches**. Vu que la redemption est le mécanisme qui
tient le peg du BOLD, c'est un point de fragilité à mentionner. ❓ À confirmer : le risque
a-t-il été corrigé au redéploiement de mai 2025 ?

Sources : docs.liquity.org (technical docs & audits) · liquity.org/blog/liquity-v2-redeployment ·
coinspect.com (audit gouvernance V2) · dedaub.com (Cantina fixes review, mai 2025).

### 🎯 COÛT D'EMPRUNT RÉEL SUR LIQUITY V2 — lu ON-CHAIN le 2026-09-07
Aucune API ne l'expose : lecture directe des contrats `ActivePool` de chaque branche via un
nœud Ethereum public. Taux moyen pondéré = `aggWeightedDebtSum()` ÷ `aggRecordedDebt()`.

| Branche | Dette (BOLD) | **Taux moyen réellement payé** |
|---|---|---|
| ETH | 11 244 418 | **3,21 %** |
| wstETH | 18 870 275 | **1,09 %** |
| rETH | 4 222 883 | **5,77 %** |
| **Ensemble** | **34 337 576** | **2,36 %** |

**Recoupements qui valident la lecture** :
- La dette totale (34,34 M BOLD) colle au **BOLD en circulation relevé par DeFiLlama : 34 315 445**.
- Intérêts payés par les emprunteurs sur un an : **~809 000 $**. Rapportés aux 18,7 M$ déposés
  dans les trois pools de stabilité → ~4,3 % brut ; Liquity en reverse ~75 % au pool → **~3,25 %**,
  ce qui correspond aux rendements observés (2,17 / 3,88 / 3,94 %). La boucle est cohérente.

**Ce que ça veut dire, et c'est l'info forte de la section** : emprunter sur Liquity coûte
aujourd'hui **2,36 % en moyenne**, contre **5,5-8 % chez Sky** et **6-7 % chez Spark**. Liquity
est donc l'un des endroits les moins chers où emprunter contre de l'ether — parce que ce sont
les emprunteurs eux-mêmes qui fixent leur taux, et qu'ils le tiennent bas.

⚠️ Contrepartie à rappeler : un taux bas = première place dans la file des redemptions.
L'écart entre branches (1,09 % sur wstETH contre 5,77 % sur rETH) le montre bien — plus la
branche est demandée et liquide, plus les emprunteurs peuvent se permettre un taux bas.

**Reproductible** : RPC `https://ethereum-rpc.publicnode.com` · ActivePool ETH
`0xeb5a8c825582965f1d84606e078620a84ab16afe` · wstETH `0x531a8f99c70d6a56a7cee02d6b4281650d7919a0` ·
rETH `0x9074d72cc82dad1e13e454755aa8f144c479532f` · sélecteurs `0x42635a95` et `0x8d5c1d4c`.
🔄 À relancer le jour de l'envoi (la commande est dans l'historique de la session).

### Répartition des intérêts sur Liquity V2 (vérifié 2026-09-07)
Les intérêts payés par les emprunteurs (en BOLD) sont partagés :
- **75 % → pools de stabilité** (les déposants) ;
- **25 % → PIL** (*Protocol Incentivised Liquidity*) = rémunération des apporteurs de liquidité
  BOLD sur Curve / Uniswap, cible ~10 % de l'offre de BOLD. Fléchage dirigé par les stakers LQTY.
→ **Aucune société ni fonds ne prélève de part.** Formulation à garder exacte : dire « aucune
trésorerie » était imprécis et contredisait le passage sur les 75 %.
Source : Liquity (compte officiel + blog « Directing Protocol Incentivized Liquidity with LQTY »).

### 📉 Le taux d'emprunt actuel EST une anomalie — historique reconstitué (2026-09-08)
Les appels d'archive étant refusés par les nœuds publics, l'historique a été **reconstitué** :
taux ≈ (Σ apy_pool × TVL_pool) ÷ 0,75 ÷ encours BOLD. Contrôle de validité : la dernière valeur
reconstituée (**2,37 %**) colle à la lecture on-chain directe (**2,36 %**).

**Depuis la relance de mai 2025** : min **1,27 %** · **médiane 4,06 %** · max hors normes.
Trajectoire 2026 : ~4,2 % en janvier → creux à **1,8-2,3 %** de mars à juin → remontée à
**4,2-5,3 %** en juillet-août → **chute à 2,37 % en dix jours**.

| Date | Dette | Taux moyen |
|---|---|---|
| 26 août | 30,9 M | **5,27 %** |
| 31 août | 31,9 M | 3,26 % |
| 3 sept | 32,2 M | 2,59 % |
| 8 sept | **34,2 M** | **2,37 %** |

**Lecture** : la dette a grimpé de +11 % (30,9 → 34,2 M BOLD) pendant que le taux moyen
s'effondrait → de gros emprunteurs sont entrés en fixant des taux planchers, et la moyenne
étant pondérée par les montants, ils l'ont tirée vers le bas. La branche wstETH (>55 % de la
dette) affiche 1,08 %.

**Cause plausible, à formuler prudemment** : le BOLD cote **0,9994 $**, quasiment à parité →
quasiment aucune redemption → fixer un taux plancher ne coûte presque rien. Dès que le BOLD
décroche, les redemptions repartent et tout le monde relève son taux (c'est ce qui s'est passé
fin août). ⚠️ Mécanisme cohérent avec les données, mais **je n'ai pas de preuve directe** de
l'identité ou du motif des nouveaux emprunteurs — ne pas l'affirmer comme un fait établi.

---

## DANS LE FAISCEAU 3 — La macro reprend la main (ajoutée le 2026-09-09 à la demande de Marc)

> Actu « chaude » demandée pour ancrer le numéro dans l'actualité immédiate.
> ⚠️ **Actu à date de péremption fixe** : CPI le **11 septembre**, décision Fed le **16 septembre**.
> Tout ce qui suit est un relevé du **9 septembre**. Si le numéro part après le 16, cette
> section doit être RÉÉCRITE avec le résultat connu, pas rafraîchie.

### Le calendrier
- **11 septembre 2026** : publication du CPI d'août (inflation US).
- **15-16 septembre 2026** : réunion du FOMC, décision annoncée le **16**.
- Taux directeur actuel : **3,50-3,75 %**.

### Ce que le marché price (au 9 septembre) 🔄
- Probabilité d'une **hausse de 0,25 point** : les sources divergent entre **56 % et 65 %**.
  CNBC (28/08) parlait de « coin flip » ; les futures fed funds donnaient ~56 % ; d'autres
  relevés 60-65 %. ⚠️ **Ne pas citer un chiffre unique sans dire qu'il bouge tous les jours** —
  donner une fourchette ou la source + la date exacte du relevé.
- Fait notable et pédagogique : on parle d'une **HAUSSE**, pas d'une baisse. Trois dissidents
  poussaient déjà pour une hausse en juillet (Hammack/Cleveland, Kashkari/Minneapolis,
  Logan/Dallas). ⚠️ à recouper avant citation (vient de la veille Haiku).
- Emploi d'août : **+162 000 postes**, chômage stable à **4,1 %** → un marché du travail assez
  solide pour encaisser un resserrement. ⚠️ à recouper (source presse unique).

### Le déclencheur géopolitique
- **Escalade militaire US-Iran** début septembre → le **pétrole (Brent) repasse près de 100 $**
  le baril. Mécanisme à expliquer : pétrole cher → inflation → la Fed a une raison de monter
  les taux → actif sans rendement = moins attractif.

### L'effet sur le marché crypto (relevés 9 septembre) 🔄
- **BTC 78 283 $ · ETH 2 469 $ · SOL 102,6 $ · HYPE 85,16 $ · BNB 735,5 $**
  (API DeFiLlama `coins.llama.fi`, relevé du 2026-09-09 — source primaire, à refaire le jour J).
- BTC est passé de ~81 000 $ (3 sept) à ~78 400 $, avec un passage sous 77 000 $ signalé.
- ⚠️ **LIQUIDATIONS — DISPERSION MAJEURE DES SOURCES, PIÈGE À ÉVITER** :
  PANews/CoinGlass donnent **231 M$ sur 24 h** (120 M$ de longs, 111 M$ de shorts ;
  BTC 60,3 M$, ETH 36,9 M$) ; d'autres titres annoncent 115 M$, 400 M$, 497 M$, voire
  « près d'1 Md$ ». L'écart vient de la **fenêtre** et de l'**agrégateur** retenus.
  → **Ne citer qu'un chiffre horodaté avec sa source**, ou renoncer au chiffre et garder le
  mécanisme. Ne jamais écrire « environ X » sur cette donnée.

### Angle éditorial proposé (à valider par Marc)
Le fil du numéro, c'est le CDP. Cette actu en est l'illustration grandeur nature :
1. **Le coût de l'argent monte partout, y compris on-chain** — quand le taux sans risque
   américain monte, le rendement demandé sur un prêt en stablecoin monte aussi. Lien direct
   avec le #3 (d'où vient le rendement des réserves) et avec le taux qu'on choisit sur Liquity.
2. **Quand le prix du collatéral baisse, les positions se rapprochent du seuil de liquidation** —
   exactement le mécanisme expliqué dans ON ÉCLAIRE, observable en direct cette semaine.
3. Chute possible : ce n'est pas un conseil de trading, c'est la démonstration que **le LTV
   qu'on choisit n'est pas un chiffre abstrait** : c'est la marge qu'on se laisse le jour où
   le pétrole monte à Bagdad.

### Sources
- [CNBC 28/08](https://www.cnbc.com/2026/08/28/-september-fed-decision-now-a-coin-flip-as-rate-hike-odds-increase.html)
- [Yahoo Finance 08/09](https://finance.yahoo.com/personal-finance/investing/article/bitcoin-and-ethereum-prices-today-tuesday-september-8-2026-crypto-prices-sliding-as-us-iran-fighting-continues-113441984.html)
- [PANews / CoinGlass](https://panews.io/articles/01a086ca-4d7e-72e4-a0ce-42e582f2a414)
- [Vantage Markets 07/09](https://www.vantagemarkets.com/market-news/fed-rate-decision-inflation-jobs-report-september-7-2026/)
- API DeFiLlama `coins.llama.fi` (prix, relevé 2026-09-09)
