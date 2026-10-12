# 🔍 Fact-checker — Numéro #6 — 13 octobre 2026

**VERDICT : 🔴 NO-GO (5 points bloquants, tous corrigeables en une ligne ; le reste est solide)**

Fichier contrôlé : `site/app/emails/issues/issue-06.ts`. Notes de sources relues : `drafts/issue-06/sources/*`. Aucune de mes vérifications web ne contredit frontalement ces notes ; les écarts relevés sont signalés ci-dessous. Cours (REPÈRES) non bloquants, à rafraîchir à l'envoi.

---

## ⚠️ À corriger (bloquant)

**1. Marque `[À VÉRIFIER]` (a) — marché Polymarket « minerais Ukraine ».** Le fait est vrai, mais la partie « de gros détenteurs d'UMA soupçonnés d'avoir eux-mêmes parié sur le OUI » n'est étayée par aucune source.
- Ce qui est établi : marché sur l'accord minerais Ukraine–États-Unis « avant avril », résolu OUI le 25/03/2025 alors qu'aucun accord n'était signé, plus de 7 M$ échangés. Vote UMA contesté. Un chercheur affirme qu'un seul détenteur pesait ~5 M de jetons UMA, soit ~25 % des voix. Un autre utilisateur (Tenadome) parle de négligence plutôt que de manipulation. Polymarket a refusé tout remboursement (« pas une défaillance du marché »).
- Aucune source ne démontre que les votants avaient parié.
- Sources : [Cointelegraph, 26/03/2025](https://cointelegraph.com/news/polymarket-trump-ukraine-bet-whale-governance-attack) · [Web3 is Going Great, 27/03/2025](https://web3isgoinggreat.com/single/polymarket-governance-attack) · [The Defiant](https://thedefiant.io/news/defi/polymarket-s-usd7m-ukraine-mineral-deal-debacle-traced-to-oracle-whale). Consultées le 13/10/2026.
- **Formulation proposée** : « En mars 2025, un marché Polymarket (plus de 7 M$ échangés) demandait si l'Ukraine accepterait l'accord sur les minerais proposé par les États-Unis. Il a été résolu OUI alors qu'aucun accord n'avait été signé, à l'issue d'un vote UMA contesté, où un seul gros détenteur de jetons pesait à lui seul environ un quart des voix, selon un chercheur. Polymarket a refusé de rembourser. » Puis la phrase existante « Avant d'acheter… ».

**2. Marque `[À VÉRIFIER]` (b) — Polymarket bloqué en France.**
- Confirmé : le président de l'ANJ a ordonné le 16/07/2026 aux fournisseurs d'accès de bloquer le site. Polymarket avait déjà coupé l'accès depuis la France en novembre 2024, jugé contourné. Polymarket a déposé un recours le 21/08/2026 (Conseil d'État). Je n'ai trouvé aucune décision ni levée du blocage (dernière couverture : fin août). Selon une source, l'application mobile restait accessible.
- Sources : [Gambling Insider FR](https://www.gamblinginsider.com/fr/actualites/106304/anj-ordonne-blocage-polymarket-france) · [Gaming Intelligence, 20/07/2026](https://www.gamingintelligence.com/legal/233597-france-blocks-polymarket-citing-weak-integrity/) · [PR Newswire, 21/08/2026](https://tools.prnewswire.com/en-us/live/20813/release/20260821EN28992) · [Journal du Geek, 20/07/2026](https://www.journaldugeek.com/2026/07/20/polymarket-est-desormais-bloque-en-france-on-vous-explique-les-raisons-de-cette-decision/).
- **Formulation proposée** : « La plateforme est en revanche bloquée en France : l'ANJ a ordonné en juillet 2026 aux fournisseurs d'accès de bloquer le site, ce que Polymarket conteste en justice. » (Pas de « toujours en vigueur en octobre » affirmé : aucune levée trouvée, mais pas de source d'octobre.)

**3. « N'importe qui peut proposer le résultat en déposant une caution » (UMA).** Faux depuis 2025 pour la plupart des marchés.
- UMA a annoncé le 12/08/2025 (vote UMIP-189 du 06/08) les « proposeurs gérés ». L'application a commencé le **5 septembre 2025**. Polymarket décide marché par marché d'utiliser ou non la liste blanche. Critères : au lancement 20+ propositions sur 3 mois à plus de 95 % de justesse (37 adresses). Ensuite 5+ propositions sur 6 mois à plus de 95 % (177 adresses en novembre 2025). La **contestation reste ouverte à tous**.
- Sources : [UMA, Managed proposers (12/08/2025)](https://blog.uma.xyz/articles/managed-proposers) · [UMA, Managed proposers update](https://blog.uma.xyz/articles/managed-proposers-update) · [The Block, 12/08/2025](https://www.theblock.co/post/366507/polymarket-uma-oracle-update).
- **Correction minimale** : « Sur Polymarket, c'est un oracle décentralisé, UMA. Un proposeur agréé par UMA (liste blanche, depuis septembre 2025) propose le résultat en déposant une caution. Si personne ne le conteste dans un court délai, il est validé ; la contestation, elle, reste ouverte à tous, et ce sont alors les détenteurs du jeton UMA qui votent. »
- **À répercuter dans l'actu HIP-4** : « Sur Polymarket, un participant propose le résultat » devient « un proposeur agréé propose le résultat ».
- Option : préciser que le cas de mars 2025 date d'avant la liste blanche (la remarque renforce la correction).

**4. « l'inflation américaine (indice CPI) remonte à 3,4 % sur un an en août ».** « Remonte » est faux. Le CPI d'août est à 3,4 %, **au même rythme qu'en juillet** (+0,4 % sur le mois, après +0,1 % en juillet), tiré par l'essence. L'inflation sous-jacente est à 2,4 %.
- Sources : [BLS, communiqué du 11/09/2026](https://www.bls.gov/regions/mid-atlantic/news-release/2026/consumerpriceindex_baltimore_20260911.htm) · [Forex Fundamentals, 11/09](https://forexfundamentals.com/economic-calendar/us-cpi/2026-09-11).
- **Correction** : « l'inflation américaine (indice CPI) reste élevée, à 3,4 % sur un an en août, tirée par l'essence. »

**5. « environ 51 M$ (HIP-4) contre 4,7 Md$ (Polymarket) : à peu près 1 % ». Les deux chiffres ne sont pas sur la même base.**
- DeFi Rate donne pour Polymarket en septembre 2026 : 4,7 Md$ en « valeur faciale » (chaque contrat compté 1 $) mais **2,3 Md$ en dollars réellement dépensés**. Le site précise que l'écart est le plus large sur les contrats à faible probabilité.
- La base des 51 M$ de HIP-4 (TokenPost, 07/10) n'est pas précisée. Probablement des dollars échangés, donc le ratio serait plutôt ≈ 2 %.
- Sources : [DeFi Rate, Polymarket](https://defirate.com/prediction-markets/volume/polymarket) · [TokenPost, 07/10/2026](https://tokenpost.com/news/investing/27723).
- **Correction** : « contre 2,3 à 4,7 Md$ selon la mesure pour Polymarket : de l'ordre de 1 à 2 % », ou « quelques pourcents au plus ».

---

## ❓ À sourcer / incertain (non bloquant, à trancher)

- **« Première hausse… sur fond de tensions au Moyen-Orient »** (Fed 16/09). Hausse, 3,75–4,00 %, vote 12-0, première depuis 2023 : confirmés. Le **motif « Moyen-Orient »** n'apparaît dans aucune couverture que j'ai pu lire ([InvestingLive, 16/09](https://investinglive.com/central-banks/fed-dot-plot-backs-hawks-as-warsh-tone-rattles-markets-more-than-the-hike/) ; les autres articles citent l'inflation et l'énergie). CNBC (cité dans les notes) renvoie 403. → Remplacer par « dans un contexte de prix de l'énergie élevés » (énergie +16,3 % sur un an en août), ou couper.
- **Buterin** : sa citation est « I personally have lost more money in botched migrations than I have lost in all hacks combined » ([Forklog](https://forklog.com/en/justin-drake-says-ai-could-break-ecdsa-before-quantum-computers/), [Cointelegraph/TradingView](https://www.tradingview.com/news/cointelegraph:5dba6e7bf094b:0-vitalik-buterin-backs-crypto-bunker-mode-amid-rapid-ai-math-advances/)).
  - « **ou précipitées** » est un ajout : il parle de « botched ».
  - « déconseille de **déplacer** ses fonds aujourd'hui » est plus fort que son « I don't recommend anyone **scramble/rush** to move their funds today » (CryptoSlate, 08/10).
  - → « …déconseille de se précipiter pour déplacer ses fonds : il dit avoir perdu plus d'argent dans des migrations ratées que dans tous les piratages réunis. »
- **Avis Drake : « garder une adresse de stockage n'ayant jamais signé »**. Exact pour Ethereum (le paragraphe précédent le restreint à Ethereum). Mais l'avis n'est pas restreint : sur Bitcoin, une adresse Taproot (P2TR) expose sa clé publique dès la réception, avant toute signature ([Spark](https://www.spark.money/research/bitcoin-taproot-quantum-vulnerability), [BitMEX](https://www.bitmex.com/blog/Taproot-Quantum-Spend-Paths)). Un lecteur Bitcoin pourrait se croire protégé à tort. → Soit « (sur Ethereum) » dans l'avis, soit « (sur Bitcoin, évite les adresses Taproot et la réutilisation) ». Pas bloquant puisque la nuance a été retirée volontairement et que le texte parle d'Ethereum.
- **Actu HIP-4, « le sport arrive en tête, puis les prix ».** Le football pèse 28 % du volume cumulé (TokenPost), mais au 11/10 les marchés de prix sont la catégorie la plus nombreuse que les notes aient comptée (99 marchés de prix sur 309). L'ordre n'est donc pas démontré. → « On y parie sur du sport (NFL, football, base-ball) et sur des prix… » sans classement.
- **« la plateforme ne tient pas compte de ta protection : ton perp exige toujours la même marge »**. La doc ne documente pas de réduction de marge (absence de preuve, pas preuve d'absence). Galaxy ([09/06/2026](https://www.galaxy.com/insights/research/hyperliquid-hip-4-prediction-markets-polymarket-kalshi-analysis)) parle d'un compte de marge unique mais ne décrit pas de compensation. → « à ce jour, rien n'indique que… » ou « la doc ne prévoit pas… ».
- **309 marchés au 11/10**. Non reproductible par moi (appel API en POST). Cohérent avec les notes, mais le chiffre bouge chaque jour (321 le 12/10, trade.xyz 93 → 53). La mention « Le 11 octobre » est correcte telle quelle.
- **Chiffres par chaîne rwa.xyz (ÇA BRILLE et graphiques)**. Le détail par réseau est derrière un login, donc **non recoupé indépendamment**. Recoupé sur les pages publiques (13/10) :
  - valeur distribuée totale 3,34 Md$ ✅
  - bStocks 923,4 M$, 100 % BNB Chain ✅
  - Robinhood (plateforme) 142 M$ distribués (136,4 M$ affichés sur /stocks) ✅
  - Robinhood : transferts mensuels 17,34 Md$ (+16 %), cohérent avec 19,3 Md$ en septembre (fenêtres différentes) ✅
  - **Anomalie** : la page publique /stocks affiche un « monthly transfer volume » de 9,88 Md$ (−72 % sur 30 j), qui ne correspond ni aux 40,9 Md$ de septembre ni aux 12,4 Md$ d'octobre (1–12) des graphiques. Probablement un autre filtre, mais non élucidé → garder la capture connectée comme preuve.
  - Le total de début juillet (2,26 Md$) n'est confirmé que par la série connectée. Un relevé tiers tardif (« 2,54 Md$ fin août », Blockonomi) est cohérent. Je n'ai pas retrouvé la source d'un « 1,86 Md$ fin juillet » (Odaily, via recherche) : à ignorer sauf preuve.
- **QQQB ≈ 82 % « des échanges d'actions tokenisées de juillet, selon CoinDesk »** : exact et bien attribué (9,27 Md$ sur 11,3 Md$). Mais CoinDesk mesure des échanges (11,3 Md$ en juillet), alors que le graphique compte des transferts rwa.xyz (40,7 Md$). Deux bases différentes dans le même encadré. → Ajouter « selon CoinDesk, qui mesure les échanges » ou éviter de laisser croire que 82 % s'applique aux 35 Md$ de BNB.
- **« sans programme de primes comparable » (Solana)**. Non sourcé (déjà signalé dans les notes). Reste un jugement éditorial ; couper ou garder « à notre connaissance ».
- **Harmonisation interne** : « environ 140 M$ » (actu Robinhood) vs « 137 M$ (4 % du total) » (ÇA BRILLE). Compatible (136,4–142 M$ selon la mesure), mais harmoniser (« environ 137 M$ » partout) pour éviter un « incohérence » de lecteur.
- **« dépôts… restent au-dessus du milliard depuis le 20 septembre »**. DeFiLlama : 1,004 Md$ le 20/09, puis 991, 995, 1 009, 997 M$ les 21–24/09 (sous le milliard le 21, 22 et 24), puis au-dessus de façon continue depuis le **25/09** (1,002 Md$). → « autour du milliard depuis le 20 septembre » ou « au-dessus depuis le 25 ». (Le #5 avait 897 M$ ; DeFiLlama a révisé à 891,6 M$ pour le 10/09, négligeable.)
- **Date bStocks** : le communiqué Binance est daté du **12/06/2026** (admission à la négociation), pas le 11/06 des notes. Le texte dit seulement « en juin » : OK. À corriger dans les notes si réutilisé.

---

## ✅ Vérifié

**ON ÉCLAIRE**
- Polymarket sur UMA, vote des détenteurs en cas de contestation ✅. Marché Ukraine : voir ⚠️1.
- Kalshi, bourse américaine régulée : Kalshi a dépassé Polymarket en notionnel en avril 2026 (14,81 Md$ vs 9,01 Md$, [Galaxy](https://www.galaxy.com/insights/research/hyperliquid-hip-4-prediction-markets-polymarket-kalshi-analysis)). « Bien au-delà » de HIP-4 ✅.

**Actu HIP-4**
- Lancement mainnet **2 mai 2026** ✅ ([Dwellir](https://www.dwellir.com/blog/hyperliquid-hip-4-mainnet-outcomes), Galaxy). Ouverture aux créateurs externes **29 août** ✅ ([crypto.news 03/09](https://crypto.news/hyperliquid-hip-4-volume-triples-after-open-rollout/), [KuCoin](https://www.kucoin.com/news/flash/hyperliquid-hip-4-deployment-begins-outcome-becomes-first-builder) : Outcome premier créateur le 29/08).
- Volumes ✅. Août ≈ 545 k$/jour et 1,97 M$ le 31/08 (crypto.news, Hyperliquid Research Collective). Septembre ≈ 51 M$ (≈ 1,7 M$/jour). Début octobre ≈ 1,25 M$/jour (premiers 5 jours). Cumul ≈ 317 M$ au 05/10 (TokenPost, 07/10/2026).
- Football 28 % du cumul (89,5 M$) ✅ (TokenPost).
- Primes d'Outcome ✅ : programme de rebates de 1 M$ (≈ 1 cent par dollar échangé), 273 409 $ versés à 2 487 wallets au 05/10. Outcome ≈ 92 % du volume des créateurs externes.
- Mise ≥ 183 jours (doc, d'après les notes) ; la presse parle de « six mois » ([Unchained](https://unchainedcrypto.com/hyperliquid-to-open-prediction-markets-to-anyone-who-stakes-500000-hype/), [The Block](https://theblock.co/news/defi/2026-07-20-hyperliquid-hip-4-permissionless-deployment-408875)). Modèles votés par les validateurs ✅. Slashing par vote des validateurs ✅. Le créateur règle le résultat ✅ (Galaxy : « builder defines the oracle source »). Pas d'UMA ✅. Pas de levier ni liquidation ✅ ([Hyperliquid docs](https://hyperliquid.gitbook.io/hyperliquid-docs/hyperliquid-improvement-proposals-hips/hip-4-outcome-markets)).
- Collatéral ✅. Les jetons OUI/NON ne sont pas listés parmi les collatéraux éligibles. La page portfolio margin cite HYPE (LTV 0,65) et BTC (0,5). La page indique que les futures classes d'actifs HyperCore supporteront le portfolio margin ([doc](https://hyperliquid.gitbook.io/hyperliquid-docs/trading/portfolio-margin)), donc « annoncé pour plus tard » est correct. Le 500 000 HYPE n'est (justement) pas cité dans le texte.
- L'analyste Mario Chow : « options ticket sitting next to your perpetual position » ✅ (TokenPost). La paraphrase du « Notre avis » est fidèle.

**Actu Drake**
- 6/10 : OpenAI publie 722 résultats mathématiques (modèle interne non publié ; aucune attaque contre la crypto de blockchain rapportée) ✅. 7/10 : Drake (mercredi) appelle à préparer « calmly » un « bunker mode » ✅. Il cite lui-même les 722 résultats d'OpenAI, donc le lien de causalité écrit est étayé ([Decrypt, 07/10](https://decrypt.co/380363/ethereum-researcher-ai-break-encryption-before-quantum), [Forklog, 08/10](https://forklog.com/en/justin-drake-says-ai-could-break-ecdsa-before-quantum-computers/)).
- « in months, not years » (pire cas) ✅. Définition du cassage = clé privée en environ une semaine avec un gros parc de GPU ✅. Migration vers des adresses neuves, gros détenteurs d'abord ✅ (Forklog/CryptoSlate). Cryptographie fondée sur le hachage à long terme ✅. C'est un scénario, aucune attaque démontrée ✅ ; les cryptographes ont réagi de façon partagée.

**Actu Robinhood Chain** (DeFiLlama API, relevés du 13/10)
- Commissions applicatives : 13,58 M$ le 10/09, ~5–6 M$ les 28–30/09, 2,66 M$ le 12/10 (1,85 M$ le 11/10) → **−80 %** ✅. Volume DEX 7 j : **6,41 Md$** (−31 % semaine/semaine) ✅. TVL : 891,6 M$ (10/09) → **1,054 Md$** (12/10) ✅.
- Fin de la subvention du gaz le **29/09** ✅ (plusieurs médias ; pas d'annonce officielle trouvée ; la subvention ne couvrait que les transactions via Robinhood Wallet, détail non contradictoire avec le texte). Chaîne lancée le 1ᵉʳ juillet ✅.
- Actions tokenisées : valeur détenue ≈ 140 M$ ✅ (rwa.xyz 136,4–142 M$). Volume 19,3 Md$ en septembre cohérent avec la page Robinhood (17,34 Md$ sur 30 j). Voir ❓ pour le détail par chaîne.

**ÇA BRILLE**
- Total 3,34 Md$ au 12/10 ✅ (rwa.xyz /stocks). bStocks : BTech Holdings (société affiliée à Binance, cadre ADGM), certificats adossés à des actions, pas de propriété directe ✅ ([communiqué Binance du 12/06/2026](https://www.aap.com.au/aapreleases/cision20260612ae82369/)).
- Frais maker à zéro jusqu'au **31/08** ✅ ([CoinDesk, 01/08/2026](https://www.coindesk.com/markets/2026/08/01/tokenized-stock-trading-surged-288-in-july-but-one-qqq-token-drove-most-of-it)). bStocks acceptés comme collatéral sur Binance ✅ : DJTB depuis le 26/08, étendu à tous les utilisateurs éligibles le 21/09 ([Bitcoin.com](https://news.bitcoin.com/crypto-news/binance-expands-bstocks-collateral-as-tokenized-stock-volumes-jump-33x/), [Crypto Briefing](https://cryptobriefing.com/binance-bstocks-margin-collateral/), [The Defiant](https://www.thedefiant.io/binance-adds-jpmorgan-and-eli-lilly-bstocks-as-margin-collateral)).
- Solana : actions tokenisées utilisables dans sa DeFi (≈ 75–79 M$ déposés, [Crypto Briefing](https://cryptobriefing.com/solana-robinhood-chain-tokenized-stocks-defi/)) ✅. xStocks sur Solana ✅ (413,8 M$ selon les notes). Ondo sur Solana : notes rwa.xyz uniquement.
- Calculs internes cohérents : BNB 544 M$ → 1,2 Md$ (×2,2 ✅) ; Solana 348 → 500 M$ (+44 % ✅) ; Robinhood 4,1 % ✅ ; BNB volume 29 → 14,3 Md$ (−51 % ✅) ; Robinhood 47 % du volume de septembre (19,3/40,9 ✅). Les deux graphiques sont conformes aux tableaux des notes.

**LES REPÈRES** (hors cours)
- Fed du 16/09 : +0,25 pt à 3,75–4,00 %, première hausse depuis juillet 2023, vote unanime 12-0 (président Warsh) ✅ ([Central Banking](https://www.centralbanking.com/central-banking/monetary-policy/7976918/federal-reserve-delivers-first-rate-hike-since-2023), [InvestingLive](https://investinglive.com/central-banks/fed-dot-plot-backs-hawks-as-warsh-tone-rattles-markets-more-than-the-hike/), [Allianz Trade](https://www.allianz-trade.com/en_US/insights/fed-lifting-rates.html)). **Projection médiane : une hausse de plus en 2026** ✅ (InvestingLive).
- CPI août publié le 11/09 ✅ (voir ⚠️4 pour « remonte »).
- Emploi publié le 02/10 : **+29 000**, chômage **4,2 %** (4,1 % en août), salaires +3,0 % sur un an ✅ ([Fox Business](https://www.foxbusiness.com/economy/us-jobs-report-september-2026), [First Trust](https://www.ftportfolios.com/Commentary/EconomicResearch/2026/10/2/nonfarm-payrolls-increased-29,000-in-september)).
- Compte rendu de la Fed publié le **07/10** : « most officials still viewed another hike this year as appropriate » ✅ ([Coinpedia](https://coinpedia.org/research-report/bitcoin-uptober-2026-at-risk-price-fights-etf-drain-as-fed-odds-re-price-ahead-of-oct-28/)). Formulation du texte (« laisse entrevoir une autre hausse d'ici la fin de l'année ») fidèle.
- ETF bitcoin : somme des flux nets du 05 au 09/10 = **−681,1 M$** ✅ ([TFTC, flux quotidiens](https://www.tftc.io/bitcoin-etf-flows/october-2026) : −89,9 ; +118,9 ; −487,1 ; −244,1 ; +21,1). Chiffres de FXStreet/coinpedia cohérents. Un autre relevé donne −407 M$ sur 1–8/10 (fenêtre différente).
- Liquidations > 1 Md$ en 24 h le 8/10 ✅ (CoinGlass : 0,97 à 1,16 Md$ selon l'heure et le média : [CryptoSlate](https://cryptoslate.com/bitcoin-crashes-through-81000-buy-wall-as-1-billion-crypto-liquidation-bloodbath-unfolds/), [Cointelegraph](https://cointelegraph.com/markets/bitcoin-speculators-btc-exchanges-crypto-liquidation), [Stocktwits](https://stocktwits.com/news-articles/markets/cryptocurrency/btc-price-drops-below-81k-1b-crypto-liquidations-stock-selloff/cZDUYIYRBNU)). « plus de 1 Md$ » est un peu juste sur le point bas (974 M$ selon un instantané) : acceptable, ou écrire « environ 1 Md$ ».
- CPI de septembre attendu à 3,6–3,7 %, publication **mercredi 14/10** à 8h30 ET ✅ (Admiral Markets ; nowcast Cleveland Fed 3,60 %). Décision de la Fed le **28/10** (réunion des 27–28) ✅. Probabilité de pause ≈ 81 % / hausse ≈ 19 % au 12/10 ✅ (CME FedWatch via Coinpedia).
- Cohérence interne : BTC +6,0 % depuis le #5, HYPE ≈ 0 %, « HYPE perd 13 % sur la semaine », conformes au tableau.

---

## 🧩 Manque éventuel / actualité

- **⚠️ Péremption** : le texte écrit « le prochain chiffre d'inflation tombe le 14 octobre ». **Si l'envoi a lieu après la publication du 14/10 8h30 ET, il faut réécrire** (valeur réelle vs 3,6–3,7 % attendu). Idem « pause attendue le 28 octobre » si les probabilités bougent.
- **Pic HIP-4 de juin** : Crypto Briefing (29/06/2026) parlait de « plus de 80 M$ de volume quotidien » pour les marchés de prédiction de Hyperliquid, base non précisée (notionnel ?). Incompatible avec un cumul de 317 M$ au 05/10 si c'est en dollars échangés. Rien à changer, mais si un lecteur cite ce chiffre, la réponse est : mesure non comparable. Cohérent avec « Pas encore vraiment ».
- **Contrainte réglementaire HIP-4** : le Hyperliquid Research Collective et TechFlow signalent que le déploiement n'a pas satisfait les critères de la CFTC et que l'accès des utilisateurs américains dépend de l'enregistrement. Pas dans le texte ; non indispensable, mais utile en 1 ligne dans l'actu HIP-4, d'autant que Polymarket est bloqué en France pour ce motif.
- **Péremption des chiffres du jour** : les cours (82 507 $ BTC, etc.) sont au 12/10 ; à rafraîchir à l'envoi comme convenu (non bloquant).
- Les « … » du fichier sont des points de suspension volontaires (lignes 66, 86, 147, 196, 225), pas des troncatures.
- Cohérence avec les numéros précédents : le #1 annonçait bien « Hyperliquid lance les marchés de prédiction (HIP-4) » ; le #5 annonçait bien la fin du gaz offert vers le 29/09 ✅.

---

**Synthèse pour la session principale** : corriger les 5 points bloquants (⚠️1 à 5), puis trancher les ❓ (notamment le motif « Moyen-Orient », la paraphrase de Buterin et la nuance Taproot). Après corrections, **GO**, sous réserve d'un envoi avant la publication du CPI du 14/10.
