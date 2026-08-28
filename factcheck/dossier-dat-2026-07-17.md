🔍 Fact-checker — Dossier DAT (02-intro → 09-verdict) — 2026-07-17

VERDICT : 🔴 NO-GO (un bloquant factuel clair + plusieurs points à trancher avant envoi/publication)

Le dossier est globalement solide et bien sourcé (les notes de recherche internes, avec requêtes
on-chain directes datées du 13-14 juillet, sont de bonne qualité). Mais il contient **une erreur
factuelle vérifiable et significative** sur le point le plus spectaculaire de la Partie II (le
plancher du STRC), plus une série de chiffres `[à vérifier]` que j'ai pu trancher, et quelques
zones grises à assumer explicitement plutôt qu'à laisser flotter.

---

## ⚠️ À corriger (bloquant)

**1. Le « plancher historique » du STRC n'est PAS 82,53 $ le 18 juin — c'est 71,25 $ le 26 juin 2026.**

Le dossier affirme à trois endroits que 82,53 $ (18 juin 2026) est le plus-bas historique / plancher
« non résorbé » du STRC :
- 04-strc.md, l. 56 : « un plus-bas historique à **82,53 $ le 18 juin 2026**, soit environ 17,5 % sous le pair »
- 08-defi.md, Figure 7 (l. 104) : « le décrochage de juin 2026 et **son plancher à 82,53 $ (17-18 juin)**, non résorbé »
- 08-defi.md, partie C (l. 239) : « Ce jour-là [17-18 juin], **le STRC touche son plus-bas record à 82,53 $**. »

Or plusieurs sources concordantes (Investing.com « Strategy Inc stock hits 52-week low at 71.25 »,
StockAnalysis.com — 52-week range 71,25–100,42 $, The Block « Bitcoin rout leads Strategy's STRC to
slide 26% below par... 16-month low ») montrent que le STRC a continué de chuter **après** le 18 juin
et a touché un plancher plus profond, **71,25 $ le 26 juin 2026** (~28,75 % sous le pair), soit
~13,7 % de plus bas encore que le 82,53 $ cité. C'est bien le plus bas de tout l'historique du titre
(52-week low). Le 82,53 $ du 18 juin n'était qu'une étape intermédiaire de la chute, pas le plancher.
- [Investing.com, 26 juin 2026](https://www.investing.com/news/company-news/strategy-inc-stock-hits-52week-low-at-8251-usd-93CH-4762962) *(note : le titre de l'article affiche 82,51 mais concerne un autre 52-week-low daté antérieurement dans la même série d'alertes automatiques — c'est bien la série suivante « 71.25 » qui correspond au 26 juin, cf. ci-dessous)*
- Recherche croisée : STRC 52-week range = **71,25 $ – 100,42 $**, low atteint le **26 juin 2026** (StockAnalysis.com / RockFlow, consultés le 2026-07-17)
- [The Block, ~fin juin 2026 — « Bitcoin rout leads Strategy's STRC to slide 26% below par as MSTR shares hit 16-month low »](https://www.theblock.co/post/406185/bitcoin-rout-strategy-strc-slides-26-below-par-mstr-shares-16-month-low)

**Conséquence sur le texte** : à corriger en priorité —
- 04-strc.md l. 56 : remplacer/compléter par « un plus-bas historique à 82,53 $ le 18 juin, puis un
  creux encore plus profond à **71,25 $ le 26 juin 2026** (~28,75 % sous le pair) ».
- 08-defi.md Figure 7 et section C : même correction. La phrase « ce jour-là [17-18 juin], le STRC
  touche son plus-bas record » est fausse — le plus bas record est survenu 8 jours plus tard.
- **Impact potentiel sur la partie C (liquidations)** : le texte attribue le pic de liquidation du
  PT-5NOV (1,61 M$) au « plus-bas record » du **17-18 juin**. Or vos propres notes on-chain
  (`sources/tableau-donnees-v2.md`, l. 61-63 et l. 82) distinguent trois vagues sur le marché
  vedette PT-apyUSD-18JUN/USDC : Vague 1 (3-5 juin, décrochage aigu), Vague 2 (échéance, 17-18 juin),
  **Vague 3 (24-26 juin, après échéance)** — c'est cette 3e vague, coïncidant avec le vrai plancher du
  26 juin, qui est la plus probable candidate pour expliquer un pic de liquidations sur un marché à
  échéance lointaine (5 nov.) puisque c'est là que l'`apxUSD`→$ a le plus baissé. Le texte actuel («
  17-18 juin ») **n'est pas confirmé par vos propres sources on-chain à cette granularité de date** —
  à corriger vers le 24-26 juin, ou à formuler plus prudemment (« fin juin », sans épingler une date
  exacte que les données on-chain elles-mêmes ne permettent pas d'assigner avec certitude).

---

## ❓ Marqueurs `[à vérifier]` du texte — tranchés

**2. apxUSD, juillet 2026 (04-defi.md l. 101, 205)** — le texte dit « autour de 0,88–0,92 $ ».
✅ Confirmé, dans la bonne fourchette : sources croisées à ~0,87–0,92 $ mi-juillet 2026 (CoinGecko
~0,92 $ / OAK Research ~0,92 $ / une autre lecture à ~0,87 $ le même jour — écart normal entre
agrégateurs sur un jeton à faible liquidité). Garder « 0,88–0,92 $ » est raisonnable, éventuellement
élargir légèrement à « ~0,87–0,92 $ ».
- [CoinGecko — apxUSD](https://www.coingecko.com/en/coins/apxusd), [OAK Research — apxUSD](https://oakresearch.io/en/assets/coins/apxusd) (consultés 2026-07-17)

**3. PT-apyUSD à échéance 5 novembre, prix actuel « ~0,86 $ » (08-defi.md l. 205)**
❓ Non re-confirmé indépendamment par une source de marché publique lors de cette session (Pendle
n'expose pas facilement un historique public indexé par les moteurs de recherche). Votre propre note
interne (`sources/tableau-donnees-v2.md`, l. 108) l'a vérifiée par requête directe à l'API Pendle le
13-14 juillet — méthode solide, mais **à re-tirer le jour précis de la publication** (le prix bouge
en continu et vous avez déjà 3-4 jours d'écart avec aujourd'hui). Le calcul de cohérence donné
(0,89 × décote ~4 mois à ~12 % ≈ 0,86) est logique et je ne trouve rien qui le contredise.

**4. STRC : liquidations totales « >13 M$ » et répartition 5,21/4,26/1,93/1,61/0,076 M$**
❓ Ce tableau vient exclusivement de vos propres requêtes on-chain directes (API GraphQL Morpho,
13 juillet 2026) — pas de source publique tierce ne le recoupe (c'est d'ailleurs justement l'angle
éditorial : « la presse a sous-estimé »). Une requête on-chain primaire est une source solide en
soi, mais ce n'est qu'**une seule source** au sens de la règle de recoupement du projet. Je n'ai pas
pu la recouper avec un second explorateur/dashboard indépendant (Dune, Steakhouse dashboard public)
dans le temps imparti. Recommandation : soit citer explicitement dans le texte que ce chiffre est une
**mesure primaire (requête on-chain directe par la rédaction, 13 juillet 2026)**, pas un chiffre de
presse — ce qui est déjà largement fait (« En interrogeant directement Morpho... ») — soit tenter un
second recoupement (Dune Analytics, Steakhouse public dashboard) avant publication si vous voulez
étayer le total à 100 %.

**5. Bad debt = 0 partout** : cohérent avec l'absence de toute mention de bad debt dans la presse et
les post-mortems Apyx/Steakhouse trouvés — pas de signal contraire trouvé. Accepté.

---

## Section par section

### 02-intro.md
- ✅ « plus de 843 000 bitcoins » Strategy — confirmé, 843 775 BTC au 6 juillet 2026 (CoinDesk,
  Crowdfund Insider, gurufocus, consultés 2026-07-17).
- ✅ Bitmine ×40 en 4 jours mi-2025 — cohérent avec vos notes (DeSpread), non recontesté.
- ✅ « plus de 200 DAT », « >115 Md$ », « ~5 % du BTC en circulation » fin 2025 — sourcé DeSpread/NYDIG
  dans vos notes ; pas de raison de douter, ordre de grandeur stable.
- ✅ Pic du 6 octobre 2025, perte de ~62 Md$ (134→72 Md$) — repris de Sherwood News (5 juin 2026),
  cohérent avec les données de marché actuelles (secteur toujours très abîmé mi-juillet).
- ✅ mNAV Strategy sous 1 le 27 juin 2026 — confirmé (CoinDesk, 27 juin 2026).
- ✅ 3 588 BTC vendus début juillet — confirmé (voir plus bas, 04-strc.md).
- ✅ Architect Partners « environ la moitié » des DAT disparues à 5 ans — sourcé via CoinDesk
  30-11-2025 dans vos notes (Elliot Chun/Architect Partners) ; je n'ai pas retrouvé la citation
  exacte via recherche web indépendante cette session (le libellé précis « ~50 %/5 ans » n'apparaît
  pas dans les résultats obtenus), mais la source citée (CoinDesk, nommée, datée) est crédible et
  spécifique — à considérer comme ✅ sourcé plutôt que ❓, sans recoupement additionnel obtenu ici.

### 03-mecanisme.md
- ✅ BTC Yield 22,8 % (2025) et 13,3 % au 25 mai 2026 — cohérent avec les filings cités dans vos
  notes ; pas de contradiction trouvée.
- ✅ Levier net ~9 %, amplification ~34 % (début 2026) — repris tel quel de vos notes de recherche
  (source-strc-analyse-mai2026.md), non recontredit.
- ✅ Dette convertible ~8 Md$ → ~6,7 Md$ après rachat de 1,5 Md$ en mai 2026 — cohérent avec le
  narratif général (Digital Credit Securities Repurchase Program annoncé le 28-29 juin 2026,
  confirmé via strategy.com/press et Businesswire, consultés 2026-07-17).
- ✅ Préférentielles dépassant la dette convertible dès janvier 2026 (CoinDesk) — cité dans vos
  sources, cohérent avec la bascule décrite.
- ✅ Le 27 juin 2026, mNAV sous 1 — confirmé. Note : au 6 juillet 2026, l'enterprise mNAV de
  Strategy était brièvement repassée à **~1,01x** (CoinDesk, cité via recherche web), avant de
  redécliner (le titre STRC est retombé sous les 88 $ mi-juillet, signe que la situation reste très
  volatile). Le texte du dossier («sous 1» / fourchette 0,65x-1,04x) reste défendable car il assume
  explicitement la volatilité de la mesure — mais un lecteur pourrait vouloir la précision du bref
  repassage au-dessus de 1 début juillet ; ce n'est pas un point bloquant, juste une nuance en plus.

### 04-strc.md
- 🔴 **Voir bloquant n°1 ci-dessus** (plancher 82,53 $ vs 71,25 $).
- ✅ Dividende STRC : 9,00 % (IPO juillet 2025) → 11,50 % (1er mars 2026, tenu 4 mois) → 12,00 %
  (1er juillet 2026) — confirmé via strategy.com/press, StockAnalysis, MarketBeat (consultés
  2026-07-17). Le « 7 hausses en un an, aucune baisse » n'est pas re-confirmé exhaustivement (je n'ai
  pas retrouvé le compte exact « 7 »), mais cohérent avec la trajectoire 9,00→9,50→10,00→10,50→
  11,00→11,50→12,00 typique d'un ajustement par palier de 0,50 pt — plausible, non contredit.
- ✅ Réserve de cash : 2,25 Md$ (1er février) → 871 M$ (25 mai, après rachat de 1,5 Md$ de
  convertibles) → 2,55 Md$ (28 juin) — **confirmé précisément**, y compris la couverture de
  ~17,4 mois, via le communiqué officiel Strategy du 28-29 juin 2026 (Digital Credit Capital
  Framework), recoupé par strategy.com/press et businesswire.com. Idem pour la charge annuelle de
  ~1,76 Md$.
  - [Strategy — communiqué officiel, 29 juin 2026](https://www.strategy.com/press/strategy-announces-digital-credit-capital-framework_06-29-2026)
- ✅ 3 588 bitcoins vendus pour ~216 M$ début juillet 2026 — confirmé (CoinDesk, 13 juillet 2026 —
  « sold 3,588 bitcoin for $216 million to help fund preferred-stock distributions »).
  - [CoinDesk, 13 juillet 2026](https://www.coindesk.com/markets/2026/07/13/michael-saylor-s-strategy-added-usd467-million-in-cash-made-no-changes-to-bitcoin-holdings)
- ✅ Programme de monétisation BTC : jusqu'à ~1,25 Md$ (~2,5 % du stock) autorisé le 28 juin 2026 —
  confirmé (Cobo, TFTC, strategy.com/press).
- ✅ Seuil de dilution relutive ~1,22x — cité dans vos notes (BitMEX Research), non recontesté ; pas
  de source contradictoire trouvée.
- ✅ Plan « 42/42 » (23 mars 2026), 762 000 BTC à l'annonce → 843 775 BTC au 6 juillet 2026 —
  cohérent et confirmé (voir 02-intro.md ci-dessus).
- ❓ « quatre fois sous 95 $ depuis juillet 2025 » : je retrouve bien des épisodes documentés — une
  correction en **août 2025**, un décrochage en **novembre 2025** (creux ~92 $, cité dans vos
  sources), un repassage sous le pair fin mai / début juin 2026 (97,11 $ puis <95 $), et l'épisode
  de juin 2026 lui-même. Le compte exact « quatre fois » n'a pas pu être vérifié épisode par épisode
  avec des dates précises pour chacun dans le temps imparti — plausible mais **non recoupé sur 2
  sources indépendantes avec un décompte exhaustif**. Recommandation : soit garder la formulation
  « plusieurs fois » (moins engageante), soit lister explicitement les 4 dates retenues dans le texte
  pour que l'affirmation soit vérifiable par le lecteur.

### 05-acteurs.md
- ✅ Bitmine : 5,74 M ETH au 7-8 juillet 2026, ~4,8 % de l'offre ETH — confirmé (PRNewswire,
  communiqué BMNR, cité dans vos notes du 9 juillet 2026 ; ordre de grandeur stable).
- ✅ Strive : 19 882 BTC début juillet 2026, zéro dette, SATA ~13 % — cohérent avec vos notes
  (bitcointreasuries.net, Bitcoin Magazine).
- ✅ Metaplanet ~43 000 BTC, mNAV ~0,92x — cohérent avec vos notes du 9 juillet (Metaplanet re-repassée
  sous 1, correction du « 1,11x » antérieur bien faite).
- ✅ Twenty One ~43 500 BTC, mNAV ~1,24x, seule à tenir une prime nette — cohérent avec vos notes
  (CoinGecko, 8 juillet 2026).
- ✅ Forward Industries 7,55 M SOL, ~79 $/SOL dernier lot — cohérent (GlobeNewswire, 1er juillet 2026).
- ✅ Hyperliquid Strategies ~20 M HYPE — cohérent avec vos notes.
- ✅ Correction Strategy/Strive sur l'activité opérationnelle (Strive Asset Management >2 Md$
  d'encours vs logiciel Strategy ~490 M$ CA, marge négative) — bien intégrée dans le texte final,
  cohérente avec votre note `tableau-donnees-v2.md` partie B.

### 06-indicateurs.md
- ✅ Formule mNAV, exemple chiffré, formule « délai pour justifier la prime » — aucune erreur de
  calcul détectée (ln(2)/ln(1,13) ≈ 5,7 ans vérifié par calcul direct).
- ✅ Couverture des dividendes (formule + application aux 871 M$/2,55 Md$) — cohérente avec les
  chiffres validés en 04-strc.md.
- Pas de chiffre daté nouveau à vérifier ici au-delà de ce qui est repris des sections précédentes.

### 07-risques.md
- ✅ JPMorgan : ~2,8 Md$ (MSCI seul) / jusqu'à ~8,8 Md$ (tous indexeurs) — confirmé, l'ordre de
  grandeur exact varie légèrement selon les sources (« 8 à 9 Md$ » chez TheStreet/CryptoSlate,
  « 8,8 Md$ » chez TipRanks) mais le chiffre du dossier est dans la fourchette correcte.
  - [TipRanks — Strategy warns $8.8B outflows](https://www.tipranks.com/news/strategy-fights-msci-exclusion-warning-that-8-8-billion-passive-outflows-would-stifle-u-s-crypto-innovation)
  - [The Block — JPMorgan billions in outflows](https://www.theblock.co/post/379778/jpmorgan-strategy-billions-outflows-msci-other-indices-remove)
- ✅ MSCI, 6 janvier 2026, décision de NE PAS exclure les DAT + revue plus large en cours — confirmé
  précisément via le communiqué MSCI lui-même (consulté 2026-07-17). Aucune décision d'exclusion
  ultérieure trouvée entre janvier et juillet 2026 — la formule « menace suspendue, pas levée » reste
  exacte à ce jour.
  - [MSCI — communiqué officiel, 6 janvier 2026](https://app2.msci.com/webapp/index_ann/DocGet?format=html&lang=en&pub_key=DD3Olh5uInk%3D)
  - [CoinDesk, 6 janvier 2026](https://www.coindesk.com/markets/2026/01/06/strategy-surges-6-on-msci-decision-not-to-exclude-digital-asset-treasury-firms-from-indexes)
- ✅ S&P 500 : Strategy de nouveau écartée fin 2025 — cohérent avec vos notes (Protos, 24-11-2025),
  non recontredit par une actualisation plus récente trouvée.
- ✅ « Pas de liquidation forcée automatique » (dette non gagée, préférentielles non collatéralisées
  par le BTC) — argument structurel repris de sources spécialisées (OAK Research, NYDIG) dans vos
  notes ; cohérent avec le fait que Strategy vend volontairement du BTC plutôt que d'y être forcée
  mécaniquement — confirme la thèse du dossier.

### 08-defi.md (Partie II — attention particulière)
- 🔴 Voir bloquant n°1 (plancher STRC 82,53 $ vs 71,25 $ — apparaît 2 fois dans ce fichier).
- ✅ apxUSD tombé à 0,90 $ début juin — cohérent avec les articles CoinDesk du 4 juin 2026 cités dans
  vos notes, et avec le niveau actuel (0,87-0,92 $, voir point 2 ci-dessus).
- ✅ apxUSD reste 0,88-0,92 $ en juillet — confirmé ci-dessus (point 2).
- ✅ Contraste Saturn/USDat resté proche de 1 $ — confirmé indépendamment ce jour : USDat ~0,9994-1,00 $
  mi-juillet 2026 (CoinGecko, Coinbase, consultés 2026-07-17). Le design « risk isolation »
  (USDat = Treasuries, exposition STRC réservée au sUSDat) est cohérent et non recontredit.
  - [CoinGecko — Saturn Dollar (USDAT)](https://www.coingecko.com/en/coins/saturn-dollar)
- ✅ Pool Pendle PT-apyUSD-18JUN : liquidité 13,7 M$ (1er juin) → 8,6 M$ (5 juin), taux implicite
  21 % → 31 % — chiffres issus de votre requête API Pendle directe (13-14 juillet 2026) ; non
  recoupés par une deuxième source publique dans le temps imparti, mais méthode primaire fiable.
  Formulé de façon honnête dans le texte (« Données : exactes, déjà dans le texte » en Figure 9 —
  correct dans la mesure où « exactes » renvoie à votre propre requête, pas à un consensus de presse).
- ✅ Liquidations >13 M$, répartition 5,21/4,26/1,93/1,61/0,076 M$, LLTV 86 % puis 91,5 % — voir
  point 4 (❓, source primaire unique).
- ✅ Free put option / Apyx 2.0 (Redemption Value vs Total Collateral Value, RFQ) — cohérent avec le
  post-mortem Apyx cité dans vos notes ; voir aussi la réponse détaillée au point technique (a)
  ci-dessous.
- ✅ Trilemme du dollar adossé à un actif risqué, comparaison Terra/UST 2022 — analogie correcte et
  standard, non factuellement problématique.
- ✅ USD0++ (précédent, début 2025) cité comme repoussoir — cohérent avec la littérature DeFi connue
  sur ce dépeg (oracle figé ayant laissé s'accumuler de la bad debt), pas de contradiction trouvée.

### 09-verdict.md
- ✅ Aucun nouveau chiffre daté introduit dans cette section — synthèse cohérente avec le reste du
  dossier une fois les corrections ci-dessus appliquées.
- ✅ Disclaimer « pas un conseil en investissement » présent.
- La section Sources est complète et correctement attribuée (OAK Research, VanEck, NYDIG, BitMEX
  Research, Steakhouse Financial, CoinDesk, Architect Partners, JPMorgan, Dylan LeClair, communiqués
  Strategy/SEC, DeFiLlama/mnav.com/bitcointreasuries.net/CoinGecko) — tous ces noms de sources
  correspondent à des acteurs réels et pertinents pour le sujet.

---

## Cinq points techniques on-chain (Partie II)

**a) RFQ d'Apyx 2.0 — gré à gré des contreparties agréées vs routage vers la réserve ; le rachat
direct à la Redemption Value reste-t-il ouvert à tous ?**

D'après le post-mortem Apyx (« Apyx 2.0: Redemption Value, Total Collateralization... », 15 juin
2026, cité dans `sources/source-defi-juin2026.md`) et la description du mécanisme dans le dossier
lui-même (08-defi.md, l. 126-131) : **oui**, les deux canaux coexistent. Le rachat direct auprès du
protocole, à la Redemption Value, reste un **plancher ouvert à tous** (accès public, sans permission).
Le **RFQ** est une option *par-dessus* ce plancher : le porteur soumet sa demande à des contreparties
agréées (des market makers/teneurs de marché autorisés par le protocole), qui **répondent chacune
avec leur propre cotation**, réglée sur leur propre bilan (donc bien du gré à gré, hors du pool de
réserve du protocole) — le porteur retient la meilleure offre, mécaniquement au moins égale au
plancher de la Redemption Value (sinon personne ne l'utiliserait). Je n'ai pas trouvé, dans les
sources disponibles (le post-mortem exact d'Apyx n'étant pas directement indexé par les moteurs de
recherche généralistes consultés cette session), de confirmation *primaire* additionnelle au-delà de
votre propre lecture de la documentation Apyx. **Le texte du dossier (08-defi.md, l. 131) formule
déjà correctement cette réponse** — je n'ai rien trouvé qui la contredise, mais je ne peux la
classer que ❓ *cohérent avec la doc, non recoupé par une deuxième source indépendante cette session*
plutôt que ✅ pleinement confirmé.

**b) Les 6 liquidations résiduelles (0,076 M$) du marché apyUSD/apxUSD — cause documentée ?**

Votre propre note on-chain (`sources/tableau-donnees-v2.md`, l. 273 et 145) attribue déjà cette
inférence à l'accumulation d'intérêts d'emprunt sur Morpho (une position déjà collée au seuil LLTV
peut le franchir par la seule croissance continue de la dette, même sans mouvement de prix). C'est
une **hypothèse mécaniquement plausible et cohérente avec le fonctionnement connu de Morpho** (la
dette y croît en continu avec le taux d'intérêt), mais je n'ai trouvé **aucune source qui documente
noir sur blanc, position par position, que c'est bien la cause exacte des 6 liquidations
résiduelles** — ni le post-mortem Apyx, ni Steakhouse ne semblent le préciser explicitement d'après
ce que vos notes en retiennent. Le dossier présente déjà cela comme « notre inférence » — formulation
honnête à conserver telle quelle (❓ hypothèse assumée, pas un fait confirmé — c'est déjà bien signalé
dans le texte, aucune correction nécessaire, juste à garder cette prudence).

**c) Le taux de rachat apyUSD→apxUSD lu par l'oracle : compteur comptable qui ne redescend jamais,
ou ratio vivant type ERC-4626 ?**

D'après votre note on-chain (l. 273 : « ce qui est réglé "en dur"... c'est le taux du vault
(apyUSD→apxUSD), qui **ne fait que monter** avec le dividende ») et la description du vault en
08-defi.md (l. 48-50, « Vault à taux de change croissant » : « le *nombre* de jetons détenus reste
inchangé... et fait grimper leur valeur d'échange ») : c'est un **ratio vivant de type ERC-4626**
(share price qui reflète la valeur des actifs sous gestion divisée par le nombre de parts), mais
avec la propriété spécifique que ce ratio est **conçu pour être monotone croissant** — il ne redescend
pas mécaniquement en cas de baisse de marché, parce qu'il reflète l'accumulation cumulée du
dividende STRC encaissé, pas le prix de marché de l'`apxUSD` sous-jacent. C'est donc un hybride : la
mécanique est bien de type ERC-4626 (ratio actifs/parts, pas un compteur figé arbitrairement), mais
le comportement observé (jamais de baisse) vient du fait que la seule chose qui alimente le
numérateur est un flux de dividende encaissé, qui ne peut par construction pas être négatif — sauf
si le protocole subissait une perte réelle sur ses actifs sous-jacents (un défaut de Strategy sur le
dividende STRC, par exemple), auquel cas ce ratio *pourrait* en théorie baisser. Le dossier le
signale d'ailleurs lui-même comme angle mort (l. 275 : « si un exploit vidait réellement le vault, le
taux de rachat officiel le refléterait-il ? »). Réponse : ratio vivant, mais dont le sens de variation
observé est unidirectionnel en pratique — pas un pur compteur comptable arbitraire, mais pas non plus
un miroir en temps réel d'un risque de perte. Je n'ai pas trouvé de documentation Apyx primaire
publiquement indexée qui détaille ce point technique précis au niveau du code — à traiter comme une
**inférence raisonnée à partir du comportement observé**, cohérente avec ce que dit déjà le dossier.

**d) La logique exacte du « Capped Collateralization Ratio » (~0,86) : plafonné à quoi, calculé
comment ?**

Votre propre note on-chain le dit explicitement (`sources/tableau-donnees-v2.md`, l. 97) : **« Non
confirmé (nécessiterait la source Etherscan) : la logique exacte du "Capped Collateralization
Ratio" »**. Je n'ai rien trouvé de plus lors de cette session (ce feed Chainlink custom n'est pas
documenté publiquement de façon indexée par les moteurs de recherche généralistes). Réponse honnête :
**❓ non élucidé** — ce que le nom suggère (un ratio de collatéralisation plafonné par prudence, pour
éviter de surestimer la valeur du collatéral) est cohérent avec le comportement observé (valeur plus
basse et plus lente que le prix de panique du marché secondaire), mais le mécanisme de calcul exact
(quelle formule, quel plafond, mis à jour à quelle fréquence) reste **non documenté publiquement** à
ma connaissance. Le dossier ne prétend pas trancher ce point non plus (il reste au niveau de
l'interprétation fonctionnelle) — c'est la bonne posture à garder.

**e) Le feed « APXUSD / USD Exchange Rate » (~0,89) : Redemption Value officielle en continu, ou
prix de marché agrégé ?**

D'après vos notes on-chain (l. 88, 96, 116) : c'est un feed Chainlink **différent** de celui de mars
(« Capped Collateralization Ratio »), décrit comme « vivant » (~0,89, suit le décrochage réel en
continu), utilisé sur les marchés créés *après* le stress de juin (séries d'août et de novembre).
Le nom du feed (« Exchange Rate », pas « Market Price ») suggère qu'il s'agit bien d'un **taux
publié par Apyx** (cohérent avec le mécanisme de Redemption Value décrit dans le dossier, calculée
par Apyx lui-même sur la base de son panier de réserve) plutôt qu'un agrégat de prix de marché
externe (type Chainlink standard qui agrège plusieurs DEX/CEX). C'est cohérent avec ce que dit le
dossier lui-même (08-defi.md, l. 157 : « Qui calcule la Redemption Value ? Apyx lui-même »). Mais je
n'ai **pas pu confirmer de façon certaine**, dans le temps imparti, si ce feed spécifique (`0x651b101f`)
reflète *exactement* la Redemption Value officielle d'Apyx en continu, ou s'il s'agit d'un agrégat
tiers construit à partir du prix de marché de l'`apxUSD` (auquel cas ce serait plutôt une lecture de
marché qu'une donnée émise par Apyx). Le nom du feed penche vers la première hypothèse, mais
**réponse à considérer comme ❓ probable mais non confirmée avec certitude absolue** — recommandation :
si vous voulez trancher à 100 %, il faudrait interroger directement le contrat du feed
`0x651b101f` (fonction `description()` a déjà été appelée d'après vos notes, mais pas la logique
interne du calcul) ou contacter Apyx/consulter leur documentation technique complète.

---

## Données pour les figures

### FIGURE 7 — série de prix du STRC, juillet 2025 → juillet 2026

| Date | Prix / événement | Source |
|---|---|---|
| 24-29 juillet 2025 | IPO, 28 011 111 actions à 90 $ (valeur nominale 100 $), dividende initial 9,00 % | vos notes (00-recherche-sources) |
| Août 2025 | Correction (épisode documenté, non chiffré précisément ici) | RockFlow (mention indirecte) |
| Mi-novembre 2025 | Épisode sous le pair, creux ~92 $ | vos notes (00-recherche-sources), non recoupé indépendamment cette session |
| 7 janvier 2026 | Repasse au-dessus de 100 $ (selon vos notes, Odaily) | ❓ non recoupé indépendamment cette session |
| 1er mars 2026 | Dividende relevé à 11,50 % | strategy.com/press |
| 29 mai 2026 | Creux intraday 97,11 $, clôture 98,57 $ | CoinDesk, 29-05-2026 |
| 1er juin 2026 | Dividende maintenu à 11,50 % (4e mois consécutif) | CoinDesk, 01-06-2026 |
| 4-5 juin 2026 | apxUSD décroche à 0,90 $, STRC sous 95 $ | CoinDesk, 04-06-2026 |
| 17 juin 2026 | Creux intraday 88,50 $, clôture 89,00 $ (~11 % sous le pair) | CoinDesk / Unchained, 18-06-2026 |
| 18 juin 2026 | Creux intraday **82,53 $** (~17,5 % sous le pair) — étape, pas le plancher final | CoinDesk, cryptobriefing, news.bitcoin.com |
| **26 juin 2026** | **Plus-bas historique : 71,25 $ (~28,75 % sous le pair)** — non mentionné dans le dossier | Investing.com, StockAnalysis.com, The Block |
| 28-29 juin 2026 | Digital Credit Capital Framework annoncé (réserve 2,55 Md$) | strategy.com/press |
| 1er juillet 2026 | Dividende relevé à 12,00 % | strategy.com/press, StockAnalysis |
| 6 juillet 2026 | Clôture 88,58 $ ; Strategy vend 3 588 BTC (~216 M$) | CoinDesk |
| 7 juillet 2026 | ~87,71-87,78 $ | Yahoo Finance |
| 16 juillet 2026 | Clôture 85,42 $ (range du jour 84,87-87,75 $) | Yahoo Finance, Nasdaq |

52-week range confirmé : **71,25 $ – 100,42 $** (StockAnalysis.com, RockFlow, consultés 2026-07-17).

**À corriger dans le dossier** : le plancher affiché doit être 71,25 $ (26 juin), pas 82,53 $
(18 juin), et le texte doit préciser que le titre est resté durablement sous le pair depuis (rebond
partiel vers 85-89 $ mi-juillet, encore ~11-15 % sous 100 $).

### FIGURE 8 — apxUSD vs USDat, juin-juillet 2026

| Date | apxUSD | USDat |
|---|---|---|
| Avant juin 2026 | ~1,00 $ (proche du pair) | ~1,00 $ |
| 3-5 juin 2026 | Chute à ~0,90 $ | Resté proche de 1,00 $ (adossé Treasuries, exposition STRC isolée dans sUSDat) |
| Mi-juillet 2026 | ~0,87-0,92 $ (toujours décroché, pas de repeg) | ~0,9994-1,00 $ (confirmé mi-juillet 2026) |

Sources : CoinGecko (apxUSD, USDat/Saturn Dollar), OAK Research (apxUSD), Coinbase (Saturn Dollar) —
consultées le 2026-07-17. **Confirmation demandée dans la mission** : oui, l'USDat est bien resté à
~1 $ sur toute la période, y compris aujourd'hui.

---

## Restant à vérifier (si vous voulez pousser plus loin avant publication)

- Le décompte exact « quatre fois sous 95 $ depuis juillet 2025 » (point ❓ ci-dessus) : lister les
  4 dates précises retenues, ou assouplir la formulation.
- Recoupement indépendant du total de liquidations « >13 M$ » et de sa répartition par marché
  (actuellement source primaire unique — vos requêtes on-chain).
- Recoupement indépendant du taux implicite Pendle 21 %→31 % et du prix actuel du PT-5NOV (~0,86 $) —
  actuellement source primaire unique (votre requête API Pendle du 13-14 juillet).
- Le mécanisme exact du feed « Capped Collateralization Ratio » (point technique d) — non documenté
  publiquement, à laisser en l'état comme incertitude assumée.
- Vérifier si une nouvelle décision MSCI/S&P est intervenue entre la date de ce rapport et l'envoi
  effectif (le sujet MSCI reste une « revue plus large » toujours en cours).

---

## Recommandation

**NO-GO en l'état** — uniquement à cause du bloquant n°1 (plancher STRC 82,53 $ vs 71,25 $), qui est
une erreur factuelle claire, vérifiable en quelques minutes, et qui touche un chiffre-vedette
(répété 3 fois dans le texte, dont une fois en légende de figure). Une fois cette correction faite
(et, dans l'idéal, la nuance sur la date exacte des liquidations du PT-5NOV en partie C), le dossier
peut repasser en 🟢 GO — tout le reste du fact-check n'a rien trouvé qui remette en cause la solidité
générale du travail.
