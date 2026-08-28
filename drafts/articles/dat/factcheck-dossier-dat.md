# 🔍 Fact-checker — Dossier DAT (03 à 09) — 2026-07-10

Vérification faite par recherche web réelle (sources datées, ci-dessous). Rappel : le
dossier fixe volontairement beaucoup de repères à « mi-2026 » — or nous sommes le
10 juillet 2026 et plusieurs chiffres ont déjà bougé depuis la rédaction. Le classement
« bloquant / à trancher » tient compte de ça.

---

## 03-mecanisme.md

VERDICT : 🟡 GO avec corrections mineures (rien de faux, mais plusieurs chiffres à
actualiser/préciser)

### ⚠️ À corriger (bloquant)
1. « mNAV... environ **0,80x fin juin** » → à la date de rédaction du dossier c'était juste
   (mNAV enterprise proche de 1 fin juin, en repli). Mais **au 6-7 juillet 2026**, les
   agrégateurs donnent des chiffres très dispersés selon la méthode : mNAV « enterprise »
   ≈ **1,04x**, mNAV « basique » ≈ **0,65x**, mNAV « diluée » ≈ **0,70x**, et un article
   Coindesk parle de **0,68x** de décote. → **Ne pas figer un seul chiffre « 0,80x »** :
   soit dater précisément (« au 27 juin, le mNAV enterprise est passé sous 1 » — Coindesk),
   soit donner une fourchette avec la méthode de calcul. [CoinDesk, 27/06/2026](https://www.coindesk.com/markets/2026/06/27/strategy-s-valuation-has-fallen-below-the-value-of-its-bitcoin-holdings) ; [mnav.com](https://www.mnav.com/mnav/strategy) ; [Investing.com, WSJ report début juillet](https://www.tradingkey.com/analysis/stocks/us-stocks/262009812-strategy-inc-mstr-stock-forecast-2026-bitcoin-capital-framework-tradingkey).

### ❓ À sourcer / incertain
- « Levier net ~9 % / Amplification ~34 % » (dette + préférentielles / trésor) — non
  recalculable de façon fiable sans le détail exact des préférentielles au jour J, mais le
  **numérateur dette a changé** (voir 04-strc, dette passée de ~8 Md$ à ~6,7 Md$ après le
  rachat de mai 2026) : ces deux ratios sont donc **mécaniquement plus bas aujourd'hui**
  qu'au moment où ils ont été calculés. À recalculer avant publication.
- « Les préférentielles ont dépassé sa dette convertible » — non retrouvé formellement
  chiffré dans une source datée ; plausible vu la baisse de la dette (6,7 Md$) face à
  l'encours cumulé des 5 séries préférentielles, mais **à vérifier avec les chiffres
  exacts du dernier 10-Q** avant de l'affirmer comme un fait établi.

### ✅ Vérifié
- BTC Yield 2025 = **22,8 %** (objectif annuel révisé 22-26 %, résultat officiel Strategy).
  [Strategy, résultats Q4 2025, 05/02/2026](https://www.strategy.com/press/strategy-announces-fourth-quarter-2025-financial-results_02-05-2026)
- BTC Yield 2026 : **13,3 %** YTD au 25 mai 2026 (le dossier dit « ~13 % » — cohérent, mais
  précisez la date d'arrêt, car ça continue de bouger toute l'année). [CryptoRank](https://cryptorank.io/news/feed/115ce-how-much-bitcoin-yield-has-michael-saylor-s-strategy-achieved-in-2026)
- Les 5 séries de préférentielles (STRF/STRC/STRK/STRD/STRE) : structure confirmée.

---

## 04-strc.md

VERDICT : 🔴 NO-GO en l'état — un point précis (réserve de cash) est **matériellement
faux/périmé** et change le sens du texte ; le reste est mineur.

### ⚠️ À corriger (bloquant)

1. **« Réserve de cash ~2,25 Md$ fin 2025 vs ~871 M$ plus récent — écart à trancher »**
   → **Les deux chiffres sont dépassés.** Il existe une troisième valeur, **postérieure aux
   deux et bien plus récente** : au **28 juin 2026**, Strategy a annoncé une réserve USD de
   **2,55 Md$**, dans le cadre du nouveau « Digital Credit Capital Framework ». Base de
   dividendes+intérêts annuels ≈ **1,76 Md$** → couverture ≈ **17,4 mois**. Le montage :
   871 M$ (post-rachat de dette de mai) était un creux **temporaire**, reconstitué depuis
   par vente de BTC + ATM. **Le dossier doit remplacer l'« écart à trancher » par la
   séquence chronologique** : 2,25 Md$ (1ᵉʳ fév. 2026, ~2,5 ans de couverture selon
   politique alors en vigueur) → 871 M$ (25 mai 2026, après rachat de 1,5 Md$ de
   convertibles, ~6 mois) → **2,55 Md$ (28 juin 2026, ~17,4 mois, nouvelle politique
   cible 2-3 ans)**. Ce n'est pas un signal de tension figé, c'est une reconstitution
   annoncée publiquement. [Businesswire, 29/06/2026 — communiqué officiel Strategy](https://www.businesswire.com/news/home/20260629032351/en/Strategy-Announces-Digital-Credit-Capital-Framework-USD-Reserve-Policy-STRC-Dividend-Policy-Digital-Credit-and-MSTR-Repurchase-Authorizations-and-BTC-Monetization-Program) ; [SEC 8-K 29/06/2026](https://www.sec.gov/Archives/edgar/data/1050446/000119312526286871/mstr-20260629.htm) ; [CoinDesk sur les 871 M$, 29/05/2026](https://www.coindesk.com/markets/2026/05/29/strategy-s-strc-slips-below-usd99-as-strive-captures-investor-attention).

2. **« Charge annuelle de dividendes ~1,5-1,7 Md$ »** → la source officielle la plus
   récente (29/06/2026) chiffre **~1,76 Md$/an** (dividendes préférentiels + intérêts).
   Écart minime mais à aligner sur le chiffre officiel le plus frais. Même source que
   ci-dessus.

3. **« Cadre permanent... jusqu'à ~1,25 Md$ de bitcoin (≈2,5 % du stock) »** → confirmé,
   mais ce même communiqué du 29/06/2026 ajoute un **deuxième niveau de vente possible** :
   ce n'est plus une hypothèse, la vente a déjà eu lieu à plus grande échelle début
   juillet : **3 588 BTC vendus pour ~216 M$ début juillet 2026**, explicitement pour
   payer les dividendes préférentiels et reconstituer la réserve. Le dossier dit
   « [montants à vérifier] » — voici le chiffre concret à intégrer.
   [CoinDesk, 06/07/2026](https://www.coindesk.com/markets/2026/07/06/michael-saylor-s-strategy-dramatically-ups-pace-of-bitcoin-sales-raising-usd216-million)

4. **Taux STRC — trajectoire** → confirmée mais **le taux au jour de la publication (juillet
   2026) est 12,00 %, pas « ~12 % »** approximatif : Strategy a officiellement relevé le
   taux à **12,00 % à effet du 1er juillet 2026** (7ᵉ hausse en un an, après 11,50 % tenu
   4 mois). Donc « ~12 % à la mi-2026 » est **juste mais imprécis** — remplacez par le
   chiffre exact et la date. [CoinDesk, 26/06/2026](https://www.coindesk.com/markets/2026/06/26/all-eyes-on-strategy-s-june-30-ex-dividend-date-and-monthly-strc-dividend-rate-reset)

### ✅ Vérifié
- **Prix STRC le 18 juin 2026 : creux intraday à 82,53 $** (clôture 88,59 $), soit ~17,5 %
  sous le pair. Le dossier cite bien 82,53 $ à un endroit et « ~82,50 $ » à un autre — les
  deux versions sont correctes, gardez 82,53 $ partout pour la cohérence interne.
  [CoinDesk, 18/06/2026](https://www.coindesk.com/markets/2026/06/18/strategy-s-strc-preferred-stock-hits-a-record-low-below-par) ; [CryptoBriefing](https://cryptobriefing.com/strategy-strc-preferred-stock-all-time-low/)
- **Seuil de relution ~1,22x mNAV** : confirmé par plusieurs analyses spécialisées
  (BitMEX Research, NYDIG) — le seuil est bien lié à la structure ADSO (dilution
  potentielle des convertibles/préférentielles/RSU), pas une simple parité à 1,0x.
  [BitMEX Research, Q1 2026](https://www.bitmex.com/blog/strategy-earning-recap) ; [NYDIG](https://www.nydig.com/research/strategys-results-highlight-a-structural-shift-in-dats)
- **Plan « 42/42 » — 23 mars 2026** (le dossier dit 23 mars ; les sources datent le
  dépôt SEC du 22 mars et l'annonce du 23 mars — cohérent), 21 Md$ MSTR + 21 Md$ STRC,
  holdings au moment de l'annonce ≈ **762 099 BTC** (dossier : ~762 000 — ✅ bon).
  [Bitcointreasuries](https://bitcointreasuries.net/news/strategy-inc-announces-plan-to-raise-dollar42-billion-to-buy-btc)
- **Peter Schiff « Ponzi le plus évident »** : confirmé, formule datée du **23 avril 2026**
  sur X (« the most obvious Ponzi that has ever existed ») — le dossier dit « fin avril »,
  c'est cohérent (Schiff a répété l'attaque plusieurs fois en mai-juin aussi, donc « fin
  avril » n'est qu'une des occurrences, mais elle est bien datée et citable).
  [Yahoo/Benzinga, avril-juin 2026](https://finance.yahoo.com/markets/crypto/articles/peter-schiff-michael-saylor-crossed-163111012.html)

### ❓ À sourcer / incertain
- « Encours du STRC en DeFi... plus de 270 M$ au printemps 2026 » → **des sources
  divergent fortement** sur ce total. Une source (KuCoin) parle de **~260 M$ rien que pour
  Saturn + Apyx**. Une autre (bitcointreasuries.net, article de fond) chiffre l'ensemble
  des 9 sociétés à **« plus de 200 M$ »** — un total inférieur à la somme de deux
  protocoles seulement, ce qui est incohérent. Une troisième piste montre qu'Apyx seul est
  passé de 29 M$ (mi-mars) à **80-110 M$ dès la mi-avril 2026** (croissance très rapide).
  → **Ne pas garder « 270 M$ » sans le dater précisément ni préciser le périmètre**
  (combien de protocoles ? à quelle date ?) : c'est un chiffre volatile qui a probablement
  déjà bougé depuis. [KuCoin, printemps 2026](https://www.kucoin.com/news/flash/strc-tokenization-projects-saturn-and-apyx-attract-260m-tvl-amid-market-volatility) ; [Bitcointreasuries.net](https://bitcointreasuries.net/news/whos-building-on-strategys-strcand-what-theyre-making)

---

## 05-acteurs.md

VERDICT : 🟡 GO avec corrections (un chiffre Strive à vérifier avant publication, le
reste mineur)

### ⚠️ À corriger (bloquant)

1. **Strive — coût moyen d'acquisition** : le dossier affiche « ~72 000 $/BTC ». Les
   sources récentes divergent nettement selon la période et la méthode de calcul :
   - Un article (bitcoinmagazine, achat spécifique) : achat de 32 BTC à **63 900 $** de
     moyenne (achat ponctuel, pas le coût moyen global).
   - Un autre (via un 8-K, fin Q2) : « acquis à un coût moyen de **94 761 $/BTC** » au
     30 juin 2026 pour le stock total.
   - Le trimestre Q2 lui-même (avril-juin) a été acheté en moyenne à **74 290 $/BTC**.
   → Ces trois chiffres ne peuvent pas tous représenter le même agrégat « coût moyen total » :
   **72 000 $ (dossier) est plausible mais pas confirmé par la source la plus fraîche
   trouvée (94 761 $), qui semble elle-même suspecte** (trop élevée par rapport aux BTC
   achetés en 2026 autour de 60-75k$). **À trancher directement sur le 10-Q ou le tableau
   de bord officiel de Strive avant publication** — ne pas garder un chiffre non confirmé
   par une source primaire claire. [Cryptotimes, 06/07/2026](https://www.cryptotimes.io/2026/07/06/strive-nears-20000-btc-after-its-latest-bitcoin-purchase/) ; [Minichart (8-K Q2)](https://www.minichart.com.sg/2026/07/06/strive-inc-sata-reports-q2-2026-bitcoin-holdings-and-financial-highlights-in-latest-8-k-filing/) ; [Bitcoin Magazine](https://bitcoinmagazine.com/news/strive-buys-32-bitcoin-at-63900-average)

2. **Strive — holdings** : le dossier dit **~19 900 BTC**. Au 6-10 juillet 2026, le chiffre
   exact est **19 882 BTC** (achat de 17,76 BTC entre le 29 juin et le 2 juillet). Écart
   négligeable, mais à ajuster à ~19 882 pour être exact au jour près.
   [Cryptobriefing, 06/07/2026](https://cryptobriefing.com/strive-bitcoin-holdings-19882-btc/)

### ✅ Vérifié
- **Bitmine — Tom Lee** : confirmé « Head of Research » chez Fundstrat **et** CIO de
  Fundstrat Capital **et** Chairman du board de Bitmine — le rôle décrit dans le dossier
  (« patron de la recherche ») est correct mais incomplet (il cumule aussi la présidence
  du board de Bitmine, pas seulement une figure de proue externe).
  [Arkm research](https://info.arkm.com/research/who-is-tom-lee-fundstrat-bitmine-ethereum) ; [Fundstrat Capital](https://fundstratcapital.com/team/)
- **Architect Partners — ~la moitié des DAT disparaissent à 5 ans** : confirmé, citation
  d'Elliot Chun (Architect Partners) — « half of today's... DATs will disappear within
  five years through failure, delisting, mergers or acquisitions ». Le chiffre « ~200 DAT »
  est cohérent avec l'« over 200 digital asset treasury companies » mentionné dans la même
  couverture. [Coindesk, 30/11/2025](https://www.coindesk.com/business/2025/11/30/is-the-bitcoin-digital-asset-treasury-model-broken-architect-partners-says-no)
- **MSCI n'exclut pas les DAT** (annoncé début janvier 2026, ~6/01/2026) : confirmé.
  [Bloomberg, 06/01/2026](https://www.bloomberg.com/news/articles/2026-01-06/msci-backs-off-on-crypto-exclusion-plan-but-signals-wider-review)
- **JPMorgan — 2,5-3 Md$ / 8-9 Md$** : cohérent avec les chiffres précis trouvés
  (**2,8 Md$** pour le seul MSCI, **~8,8 Md$** si tous les indexeurs suivent).
  [Roic/Coindesk, nov. 2025](https://www.coindesk.com/markets/2025/11/20/jpmorgan-warns-msci-decision-could-force-strategy-out-of-top-equity-indices)

### ❓ À sourcer / incertain
- **Bitmine — 5,67 M ETH / 4,7 %** : périmé. Au 8 juillet 2026, Bitmine détient
  **5,74 M ETH, ~4,8 %** de l'offre en circulation (et vise 5 %). À rafraîchir avant
  publication (le tableau dit lui-même « à rafraîchir le jour de la publication » — bon
  réflexe, juste noter la valeur cible). [Kucoin, 08/07/2026](https://www.kucoin.com/news/flash/bitmine-acquires-42-197-eth-now-holds-4-8-of-ethereum-supply)
- **Strategy — ~847 000 BTC** dans le tableau : légèrement daté. Au 6 juillet 2026, après
  la vente de 3 588 BTC, le total est **843 775 BTC**. Différence mineure (~0,4 %) mais à
  aligner avec 04-strc.md pour la cohérence interne du dossier (idem coût moyen ~75 476 $,
  très proche du ~75 600 $ affiché — ✅ ok).
- **Hyperliquid Strategies (PURR) — mNAV ~1,01x, « au pair »** : les données trouvées sont
  contradictoires et plus volatiles que ne le suggère le tableau : mNAV moyen ~1,04x depuis
  décembre, mais une **fourchette large 0,77x-1,3x**, et un chiffre isolé à 1,92x en
  janvier. Ne pas présenter « ~1,01x, l'un des rares au pair » comme un état stable — c'est
  un point mobile. [Capital Flows Research](https://www.capitalflowsresearch.com/p/my-update-on-purr-and-the-future) ; [X/Crypto_McKenna](https://x.com/Crypto_McKenna/status/2008888328549187882)
- Metaplanet, Twenty One : mNAV non recoupé sur 2 sources indépendantes dans le temps
  imparti — à vérifier le jour J via mnav.com/DefiLlama comme indiqué dans la note du
  tableau (le dossier le dit déjà lui-même, bon réflexe).

---

## 06-indicateurs.md

VERDICT : 🟢 GO — c'est une section méthodologique (formules, définitions), peu de
chiffres datés propres à vérifier ; ceux qui y figurent sont des rappels des sections 03/04
déjà traités ci-dessus (mNAV 0,80x, BTC Yield 22,8/13 %, réserve de cash, charge de
dividendes, mur 2029-2030, ratios 9 %/34 %). **Mêmes corrections que 03/04 à répercuter ici**
pour la cohérence interne — notamment :
- la réserve de cash (2,25 Md$ / 871 M$) doit être mise à jour avec le 3ᵉ chiffre
  (2,55 Md$, 28/06/2026) partout où elle apparaît, y compris section 4 de ce fichier ;
- « mNAV a longtemps oscillé autour de 1,9x, dépassé 3x » : non vérifié faute de temps
  (série historique complète non recoupée sur 2 sources) → ❓ à sourcer, mais c'est un
  ordre de grandeur plausible et non structurant pour le raisonnement.

---

## 07-risques.md

VERDICT : 🟡 GO avec une précision à ajouter (mur de dette)

### ❓ À sourcer / incertain
- **« Mur d'échéances 2029-2030 »** répété dans le tableau récapitulatif : les notes
  convertibles de Strategy actuellement identifiées via dépôts SEC couvrent en fait un
  **éventail plus large — 2027, 2028 et 2030** (tranches de 1,15 Md$ à 2027, 1,5 Md$ à
  2028, 750 M$ et 2 Md$ à 2030, entre autres). Il est possible que les tranches 2027/2028
  aient déjà été en partie rachetées lors du rachat de 1,5 Md$ de mai 2026, ce qui
  concentrerait mécaniquement ce qui reste sur 2029-2030 — mais **cela n'a pas pu être
  confirmé avec une source datée précise sur le stock résiduel post-rachat**. À vérifier
  sur le dernier 10-Q avant de figer « 2029-2030 » comme unique horizon.
  [SEC filings convertibles notes (2025)](https://www.sec.gov/Archives/edgar/data/1050446/000095017025025233/mstr-20250224.htm)

### ✅ Vérifié
- Le raisonnement (pas de collatéral bitcoin identifié, pas de liquidation automatique)
  est cohérent avec le fonctionnement documenté des convertibles Strategy et des
  préférentielles (créance de rang prioritaire sur l'actif résiduel, pas un gage direct).
  Aucune source trouvée ne contredit cette description structurelle.

---

## 08-defi.md

VERDICT : 🟡 GO avec un point de cohérence à trancher (déjà repéré comme item #11 dans
la consigne)

### ⚠️ À corriger (bloquant sur la cohérence interne)
1. **Chiffres Apyx / total DeFi STRC** : comme relevé plus haut (04-strc), les sources
   disponibles sur l'encours total sont **incohérentes entre elles** :
   - Apyx seul : 29 M$ (288 888 actions, **mi-mars 2026** — bien confirmé et bien daté par
     le dossier) puis **80-110 M$ dès mi-avril 2026** (croissance x3-4 en un mois).
   - Saturn + Apyx ensemble : ~260 M$ (source KuCoin, non daté précisément, printemps 2026).
   - Total des 9 sociétés citées par un article de fond : « plus de 200 M$ » — **chiffre
     plus bas que Saturn+Apyx seuls (260 M$)**, donc soit le périmètre des « 9 sociétés »
     est différent (peut-être une photo plus ancienne), soit une confusion de source.
   → **Le dossier doit soit choisir une date unique et citer une seule source cohérente,
   soit expliciter que le total DeFi est un chiffre mouvant qui a probablement dépassé
   300 M$ courant 2026** (vu la trajectoire Apyx seul). Ne pas présenter « 29 M$ » et
   « >200 M$ » comme une photo figée et cohérente sans préciser que le premier date de
   mars et a fortement grossi depuis. [Bitcointreasuries.net](https://bitcointreasuries.net/news/whos-building-on-strategys-strcand-what-theyre-making) ; [KuCoin](https://www.kucoin.com/news/flash/strc-tokenization-projects-saturn-and-apyx-attract-260m-tvl-amid-market-volatility)

### ✅ Vérifié
- **STRC creux à 82,53 $ le 18 juin 2026** : confirmé (voir 04-strc).
- **Roxom, Hermetica, Saturn Credit existent bel et bien** et le mécanisme décrit (USDat/
  sUSDat, rotation Trésor→STRC) est cohérent avec la documentation Saturn/Apyx trouvée.
  Hermetica détient sa position via Saturn (~4 M$), confirmé.
- Le mécanisme du looping Pendle/Morpho et l'enchaînement du 18 juin (watermark Pendle,
  seuils de liquidation Morpho) est cohérent avec le déroulé rapporté par Coindesk/The
  Defiant sur cette date — aucune source ne contredit la mécanique décrite, même si
  l'ampleur exacte des liquidations n'a pas pu être chiffrée (le dossier le reconnaît déjà
  lui-même en « [à vérifier] », bon réflexe).

### ❓ À sourcer / incertain
- Rendements loopés « 25 % (2-3 tours) à 64 % (5 tours) » : non retrouvés dans une source
  datée indépendante pendant cette session (recherche non concluante dans le temps
  imparti) → à laisser en `[à vérifier]` tel quel, ou sourcer précisément avant publication.

---

## 09-verdict.md

VERDICT : 🟢 GO — section de synthèse, pas de nouveau chiffre propre ; elle hérite des
points déjà traités (Architect Partners ✅, seuil 1,22x ✅, STRC 9%→~12% — à préciser
12,00 % exact au 1ᵉʳ juillet comme indiqué en 04-strc).

### ⚠️ À corriger (répercussion, pas un nouveau problème)
- « Strive, sans dette, cote plus bas que Strategy » — toujours vrai en tendance (mNAV
  Strive ~0,72x < Strategy ~0,80x selon le dossier), mais **les deux valeurs mNAV doivent
  être rafraîchies au jour de publication** (voir 03-mecanisme, le 0,80x est déjà daté et
  mouvant).

---

# Synthèse globale — GO / NO-GO par fichier

| Fichier | Verdict | Bloquant principal |
|---|---|---|
| 03-mecanisme.md | 🟡 GO avec corrections | mNAV 0,80x à requalifier avec date/méthode ; ratios levier/amplification à recalculer (dette a baissé) |
| 04-strc.md | 🔴 **NO-GO** | Réserve de cash : remplacer l'« écart à trancher » 2,25 Md$/871 M$ par la séquence complète incluant le 3ᵉ chiffre officiel **2,55 Md$ (28/06/2026)**, sinon le texte laisse croire à une tension non résolue alors que Strategy a communiqué une reconstitution |
| 05-acteurs.md | 🟡 GO avec corrections | Coût moyen Strive (72 000 $ non confirmé par la source la plus récente, 94 761 $, à trancher sur le 10-Q) ; Bitmine ETH à rafraîchir (5,74M/4,8%) |
| 06-indicateurs.md | 🟢 GO | Hérite des corrections 03/04 (réserve de cash, mNAV) |
| 07-risques.md | 🟡 GO | Nuancer « mur 2029-2030 » (notes aussi en 2027/2028) |
| 08-defi.md | 🟡 GO | Cohérence des chiffres d'encours DeFi (29 M$ / 200 M$ / 260 M$) à clarifier avec dates |
| 09-verdict.md | 🟢 GO | Aligner sur les corrections en amont |

**Le seul point vraiment bloquant pour publier en l'état est dans 04-strc.md** : la
réserve de cash de Strategy a un troisième chiffre, plus récent et public (2,55 Md$ au
28 juin 2026), qui change le sens du passage — ce n'est plus un écart de sources à
trancher, c'est une séquence documentée qui montre une reconstitution volontaire du
coussin, pas une fuite en avant. Tout le reste est correctible par de simples mises à jour
de chiffres (le dossier a d'ailleurs déjà l'excellent réflexe de marquer `[à vérifier]`
partout où c'était nécessaire).

*Ce contenu n'est pas un conseil en investissement.*
