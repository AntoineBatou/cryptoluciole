# Notes de sources — Robinhood Chain après la fin du gaz offert (vérif. 2026-10-12)

## Rappel de la promesse du #5 (ÇA BRILLE, envoyé le 10/09)
« 480 M$ de frais en dix semaines » ; volume 12,2 Md$ sur 7 jours ; frais 13,0 M$ sur 24 h ; dépôts 897 M$. Carburant = memecoins sur Pons. Robinhood paie le gaz pendant 90 jours, jusque vers le 29/09 : « Que restera-t-il du volume quand l'utilisateur paiera son gaz lui-même ? »

## Chiffres DeFiLlama (API, relevés le 12/10) — MÊME mesure que le #5
- **Frais payés par les utilisateurs aux applis de la chaîne** (`/overview/fees/Robinhood Chain`) :
  - montée fin août, plus de 20 M$/jour début septembre (pic selon DeFiLlama le 4/09 ; les chiffres de début septembre ont été révisés depuis le #5 → ne pas citer de pic précis) ;
  - ~13-14 M$/jour au moment du #5 (10/09) ;
  - ~5-6 M$/jour fin septembre (28-30/09, juste avant/après la fin de la subvention) ;
  - **~2-2,6 M$/jour le 10-12/10** → environ **−80 % depuis le #5**.
  - 7 derniers jours : ~20 M$, −40 % sur une semaine.
- **Gaz payé à la chaîne elle-même** (`/summary/fees/robinhood-chain`) : ~4,6 M$ le 3/09 → ~170 k$ le 29/09 → ~35-50 k$/jour mi-octobre. **Pas de cassure visible au 29/09** : la chute était déjà faite.
- **Volume des échanges (DEX)** : **6,4 Md$ sur 7 jours** (au 12/10) contre 12,2 Md$ au #5 → **à peu près divisé par deux**. Semaine précédente : 9,3 Md$.
- **Dépôts (TVL)** : **≈ 1,04 Md$** le 10-12/10, contre 897 M$ au #5 → **en hausse** et stable au-dessus du milliard depuis le 20/09.
- Top applis par frais (7 j) : Uniswap V4 ~9,2 M$, **Pons V2 ~4,0 M$**, Uniswap V3 ~1,4 M$.

## Sources secondaires
- Fin de la subvention : **29/09** (majorité) — subvention de 90 jours réservée aux transactions depuis le Robinhood Wallet (seuil relevé à > 0,50 $ dès le 8/08, KuCoin).
- Analyse : la vague memecoins s'est essoufflée **avant** la fin de la subvention ; frais quotidiens de Pons déjà tombés à ~1,24 M$ le 28/09 (Memeburn / crypto.news).
- Au 1/10 : frais chaîne −31 % sur une semaine, Pons −43 % (Memeburn).
- Actions tokenisées : petite part de l'activité — échanges d'actifs réels < 30 M$ mi-septembre, < 0,1 % du volume (une source) ; avoirs en actions tokenisées ≈ 146 M$ (Cryptonews). `[À VÉRIFIER]`, sources uniques.
- Aucune annonce officielle de Robinhood après le 29/09 trouvée. La doc officielle (gas-and-fees) ne parle plus de subvention ; gaz payé en ETH.

## Liens
- DeFiLlama API : overview/fees, summary/fees/robinhood-chain, overview/dexs, v2/historicalChainTvl
- https://memeburn.com/pons-made-124m-in-fees-in-30-days/
- https://crypto.news/robinhood-chain-flipped-solana-revenue-gas-subsidy-expires/
- https://cryptonews.com/news/robinhood-crypto-chain-gas-subsidy/
- https://cryptoticker.io/en/robinhood-chain-gas-subsidy-ends-memecoins/
- https://docs.robinhood.com/chain/gas-and-fees

## Actions tokenisées : Solana vs Robinhood Chain (vérif. 2026-10-12, demandée par Marc)
- Solana : 5,8 Md$ d'échanges d'actions tokenisées au T2 2026, ≈ 95 % du total (Crypto Briefing, plusieurs articles).
- Grayscale (Zach Pandl, note du 3/09, données Allium au 27/08) : pic ≈ 3 Md$/semaine ; Robinhood Chain, BNB Chain et Solana = les 3 leaders.
- Robinhood Chain > Solana en volume : fin juillet ≈ 29,7 M$/jour, plus que xStocks (11,1 M$) + Backpack/Sunrise (13,4 M$) réunis (Dune via The Defiant / Crypto Briefing) ; week-end de Labor Day ≈ 573 M$, ~57-60 % (Crypto Briefing 12/09, source des chiffres non nommée).
- « Solana 35 % vs Robinhood 39 % » : article unique sans source → NON repris.
- Une partie du volume Robinhood Chain passe par des paires actions/memecoins (The Defiant).
- Valeur détenue : Solana ≈ 501 M$ = 19 % (3/09) ; rwa.xyz au 12/10 : total distribué 3,34 Md$, Ondo 930 M$, bStocks 923 M$, xStocks 593 M$, Robinhood (plateforme) 136 M$.
- Liens : thedefiant.io/news/blockchains/robinhood-chain-tops-solana-in-tokenized-stock-volume-via-memecoin-pairs · cryptobriefing.com/tokenized-stocks-labor-day-weekend-trading-volume/ · news.bitcoin.com/grayscale-robinhood-chain-bnb-solana-lead-3b-weekly-stock-trade/ · app.rwa.xyz/stocks

## ✅ MÉTRIQUE RETENUE (décision Marc 2026-10-12) : VALEUR DÉTENUE, pas le volume
Le volume compte chaque échange (une même action échangée 100 fois = 100 fois) et se gonfle (wash trading, primes, paires memecoins). On retient la valeur détenue (rwa.xyz « distributed value », au 12/10/2026) :
- Total actions tokenisées : ≈ 3,34 Md$.
- Ondo ≈ 930 M$ (Ethereum, BNB, Solana… répartition par chaîne non publique).
- bStocks (BTech, filiale Binance) ≈ 923 M$, 100 % BNB Chain.
- xStocks ≈ 618 M$ : Solana 413,8 M$, Ethereum 160,4 M$, Ink 23,4 M$, reste < 5 M$ chacun.
- Robinhood (plateforme) ≈ 142 M$, 100 % réseau Robinhood (Robinhood Chain).
- Pages : app.rwa.xyz/stocks · /platforms/xstocks · /platforms/bstocks · /platforms/robinhood · /networks/robinhood

## ✅✅ DONNÉES PAR CHAÎNE (rwa.xyz connecté, relevé le 13/10, données au 12/10) — À UTILISER
Tous émetteurs confondus, actions + ETF tokenisés, « Distributed ».

### Valeur détenue (Total Value, Group by Network)
| Chaîne | 5/07/2026 | 12/10/2026 | part au 12/10 |
|---|---|---|---|
| BNB Chain | 544 M$ | 1,2 Md$ | 36,6 % |
| Ethereum | 659 M$ | 764,7 M$ | 22,9 % |
| Solana | 348 M$ | 499,6 M$ | 14,9 % |
| Avalanche | 272 M$ | 359,1 M$ | 10,7 % |
| Arbitrum | 95 M$ | 160,7 M$ | 4,8 % |
| Robinhood | 10,6 M$ | 136,7 M$ | 4,1 % |
| **Total** | **2,26 Md$** | **3,34 Md$** | |

### Volume de transferts mensuel (Transfer Volume, Monthly, Group by Network)
⚠️ « transfer volume » = tous les transferts on-chain (dont échanges), compte chaque passage → mesure d'agitation.
| Mois | Total | Robinhood | BNB Chain | Solana |
|---|---|---|---|---|
| Juin 2026 | 9,8 Md$ | 0,01 | 2,2 | **6,4 (66 %)** |
| Juillet | 40,7 Md$ | 1,2 | **35,3 (87 %)** | 3,1 |
| Août | 38,1 Md$ | 5,0 | **29,0** | 2,9 |
| Septembre | 40,9 Md$ | **19,3 (47 %)** | 14,3 | 5,6 (14 %) |
| Oct. (1-12) | 12,4 Md$ | **5,7** | 3,7 | 1,7 |
- ⚠️ Incohérence rwa.xyz : la page /networks/robinhood affichait « 30D transfer volume 23,9 M$, −99,84 % » (toutes RWA) — contradictoire avec ces chiffres actions ; à signaler au fact-check.

## BNB Chain : pourquoi le volume a explosé en juillet-août (vérif. 2026-10-13)
- bStocks lancé le 11/06/2026 par Binance (émetteur BTech Holdings, affilié Binance) : certificats (cadre ADGM) adossés à des actions détenues chez un courtier US, pas de propriété directe. 5 titres au lancement → 46+ fin juillet.
- QQQB (ETF Nasdaq-100 tokenisé, coté sur Binance le 30/06) ≈ 9,27 Md$ = ~82 % du volume d'actions tokenisées de juillet ; hors QQQB, juillet < juin (CoinDesk, 1/08).
- Incitations : frais maker à zéro jusqu'au 31/08 + multiplicateur de volume VIP dès le 23/07 (gonfle le volume compté, pas le volume réel) (CoinDesk).
- 62 % du volume bStocks quand les marchés US sont fermés (Crypto Briefing, d'après Binance).
- Fin de la gratuité au 31/08 → volume BNB Chain sur rwa.xyz : 29,0 Md$ (août) → 14,3 Md$ (sept.). Valeur détenue BNB : 544 M$ (5/07) → 1,2 Md$ (12/10).
- Liens : coindesk.com/markets/2026/08/01/tokenized-stock-trading-surged-288-in-july-but-one-qqq-token-drove-most-of-it · blockchain.news/news/binance-bstocks-tokenized-securities-expansion · cryptobriefing.com/qqqb-tokenized-stocks-dex-trading-volume/ · cryptobriefing.com/binance-bstocks-volume-us-market-closures/
- ✅ Incohérence résolue (13/10) : la page rwa.xyz /platforms/robinhood indique « Monthly Transfer Volume 17,34 Md$ (+16 %) », cohérent avec 19,3 Md$ en septembre (stocks, Group by Network). Le « 23,9 M$ −99,84 % » de /networks/robinhood est une anomalie d'affichage de la page réseau.
- Solana « actions utilisables dans sa DeFi » : ≈ 75 M$ d'actions tokenisées déposées dans la DeFi de Solana, 1re avec Robinhood Chain (~73 M$) (Crypto Briefing, 5/09). « Sans grosse prime » : non sourcé → formuler « sans programme de primes comparable » ou couper.
- Ondo présent sur Solana : rwa.xyz /platforms/ondo, 454 actifs sur Solana (12/10).

### Valeur détenue en fin de mois (rwa.xyz, relevé 13/10) — base du graphique « valeur détenue »
| Date | Total | BNB | Ethereum | Solana | Robinhood |
|---|---|---|---|---|---|
| 30/05 | 1,75 Md$ | 567 | 632 | 388 | 0 |
| 5/07 | 2,26 Md$ | 544 | 659 | 348 | 10,6 |
| 2/08 | 2,35 Md$ | 824 | 652 | 404 | 25,4 |
| 1/09 | 2,77 Md$ | 938 | 665 | 507 | 77,1 |
| 30/09 | 3,22 Md$ | 1 104 | 750 | 453 | 145,4 |
| 12/10 | 3,34 Md$ | 1 200 | 765 | 500 | 137 |
Volume Ethereum (transferts) : juin 0,58 · juillet 0,69 · août 0,39 · sept. 0,69 Md$.
