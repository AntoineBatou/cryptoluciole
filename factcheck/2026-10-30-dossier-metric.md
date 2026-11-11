🔍 Fact-checker — dossier Metric (drafts/articles/metric/dossier.md) — 2026-10-30

VERDICT : 🔴 NO-GO léger — 3 points à corriger (quelques lignes), le reste tient. Arithmétique et cohérence interne : aucune erreur trouvée.

Limites : doc officielle lue en 3 tranches (0-100k, 100k-200k, 200k+ ; résumés par un modèle, pas intégralement verbatim). API Metric : seuls les 18 premiers pools BNB Chain lisibles (réponse tronquée). Relevés de l'app (WETH-USDG, bins, markouts, 02 à 08.png) = non recoupables.

## ⚠️ À corriger

1. **Part de Metric « 15 % de ce que paie chaque trade » (I.2 étape 4, I.4, II.5, tableau 81/15/4, ~2,7 M$/an)**
   - La doc (page Fees) dit : « Metric's default share is 7.5% of the overall spread » (docs.metric.xyz/llms-full.txt, 30/10).
   - L'API donne `spreadProtocolFeeE6 = 150000` (15 %) sur les 18 pools BNB lisibles (api.metric.xyz/public/v1/evm/56/metadata, 30/10). Je n'ai pas pu recompter les « 895 sur 902 ».
   - La conciliation « 7,5 % du spread complet = 15 % du demi-spread » est une hypothèse de l'analyste (« interprétation à confirmer »). La doc ne définit pas « overall spread ».
   - Le dossier ne mentionne pas l'écart et affirme 15 %.
   - Reco : écrire « 15 % selon l'API (la doc parle de 7,5 % du spread total ; nous interprétons…) » et signaler que le chiffre ~7,5 k$/jour et ~2,7 M$/an en dépend.

2. **Équipe : « Aucun fondateur n'est nommé » / « le seul membre identifié est le CTO »**
   - RootData (mis à jour le 4/09/2026, via recherche web) liste Christos Gkolias comme « Co-founder and CTO ». Si c'est exact, un fondateur est nommé.
   - L'ex-Uniswap Labs (Director of Engineering) reste introuvable : ni iq.wiki, ni RootData, ni recherche web. La fiche d'identité dit « présenté comme un ancien d'Uniswap Labs » et le corps dit « sources secondaires ». C'est acceptable seulement si cette source existe vraiment dans vos notes. Sinon : « non confirmé ».
   - Reco : remplacer par « Christos Gkolias, cofondateur et CTO selon RootData ; son passage chez Uniswap Labs n'est pas confirmé ». Un gist GitHub antérieur (ancien nom Axima Labs) disait que les fondateurs n'étaient pas nommés. La situation a peut-être changé.

3. **Citations entre guillemets pas verbatim**
   - *« Verified doesn't mean endorsed »* : la doc dit « Verification identifies the curator; it doesn't vouch for the strategy » et « Metric doesn't endorse any operator, curator or strategy ». La phrase exacte n'a pas été retrouvée.
   - *« Positive Edge doesn't mean you're making money. »* et *« Traders pay zero fees »* : non retrouvées verbatim dans les tranches lues (la doc dit « Traders pay no trading or frontend fee »). Elles viennent de l'analyste, donc ❓.
   - *« award points on executed amounts »* : même cas, ❓.
   - Confirmés verbatim : *« can block LP exits »* (« It can block LP exits, so it makes a pool High Risk ») ; *« soon »* (« More details will be revealed soon »).
   - Reco : citer exactement ou paraphraser sans guillemets.

4. **StopLoss « plafonne la perte de chaque bin sur une journée » (I.5)**
   - La doc dit que le StopLoss suit le pic de valeur de chaque bin, rejette les swaps qui font trop baisser sous ce pic, avec une décroissance (« decay ») du pic. Elle précise « It rejects trades; it doesn't sell positions or cap total losses ».
   - « Plafonne la perte … sur une journée » est une surinterprétation. Reco : « refuse les trades qui font trop reculer la valeur d'un bin par rapport à son pic récent ».

5. **Déductions écrites comme des faits**
   - II.1 : « …à 30 minutes, ceux qui ont tradé contre la pool avaient souvent raison ; à la fin de la semaine, une partie de ces pertes s'était effacée, parce que le prix était revenu ». L'analyste n'a qu'un ⚠️ « horizons différents ». Passer au conditionnel (« probablement »).
   - Légende de la capture 08 : « Les grosses barres rouges des 24, 25 et 26 octobre sont les moments où le flux a été “toxique” ». Interprétation, à nuancer.
   - I.4 : « Rien … ne rééquilibre automatiquement : ce retour repose sur les arbitrageurs et les agrégateurs ». C'est « ma lecture » selon l'analyste ; la doc dit seulement que rien ne rééquilibre automatiquement.
   - II.1 : « Pourquoi la déviation reste-t-elle collée… ? Parce que… les arbitrageurs… » est une explication plausible, pas un fait relevé.
   - Déjà bien hedgés : propAMM V0, « très probablement des pools privées », lecture des gaps d'ouverture, risque curator.

## ❓ À sourcer / incertain

- **Priorité 1 : APR Uniswap v3 ETH/USDC 0,05 % ≈ 45 % (7 j), rotation ~3×/jour, frais 5 pb**
  - Non recoupé : l'API yields.llama.fi/pools est trop lourde pour mon outil (>10 Mo), les pages DefiLlama/yields renvoient 403.
  - Contre-indice GeckoTerminal (pool 0x88e6…5640, TVL 79,1 M$, 30/10) : volume 24 h 382,6 M$, mais bougies journalières 23→28/10 de 21 à 41 M$/j, 250 M$ le 29/10 et 150 M$ le 30/10 (le 30 n'est pas terminé).
  - Moyenne sur 23-29/10 ≈ 65 M$/j, soit ≈ 0,8×/jour et ≈ 15 % d'APR de frais bruts. C'est incompatible avec « ~3×/jour / ~45 % » (l'analyste citait 232 M$/j).
  - Écart non expliqué : volume spike ou fenêtre différente. À trancher en ouvrant la pool sur DefiLlama (Uniswap V3 USDC-WETH 0,05 %, Ethereum) et en notant APY base 7 j + volume 7 j. Sinon, l'écrire « ~45 % selon DefiLlama, fenêtre mobile, à titre indicatif ».
- **Priorité 4 : bStocks BNB Chain, « la doc ne dit pas comment leur prix est construit »**
  - Exact pour la doc (le Multiplier Oracle ne couvre que Base B20 et Robinhood Stock Tokens). Mais le point peut être documenté :
  - API (BSC, 18 pools lisibles, dont 15 bStocks, 30/10) : `providerType: anchored`, `feedMode: "synthetic"`, un oracle partagé 0x30a8…7102, `maxRefStaleness` 10 s, `mutableParams: false`, état healthy.
  - Presse (Crypto Briefing, 14/10 et 25/08/2026) : Metric s'ancre à Chainlink Data Streams. RootData : « Chainlink Data Streams recommended price oracle ».
  - Sources secondaires, et le sens exact de « synthetic » n'est pas défini. On peut réécrire : « ancrés (API) ; presse : Chainlink Data Streams ; multiplicateur non documenté ».
  - À noter : la doc classe 🔴 les pools qui prennent le prix d'un token d'action sans tenir compte du multiplicateur, et ces pools bStocks sont 🟢 (selon le dossier).
- **Curator « 0 à 20 % selon les pools » (I.4)** : l'API ne donne que 0 % et 5 % sur les 18 pools BNB lisibles ; la doc donne 20 % en exemple de champ. Fourchette non recoupée.
- **Audits (5, Zellic juin+sept., Sherlock mai-juin, juillet, sept.)** : le nombre et les périodes sont confirmés par la doc (« audited five times »). Les qualificatifs « audit collaboratif / concours public / revue des contrats périphériques » ne sont pas dans ce que j'ai lu. Aucun rapport n'apparaît dans les index publics Zellic/Sherlock via la recherche. Le dossier dit déjà qu'il n'a pas relu les rapports : OK.
- **« propAMM… l'un des deux grands types de pools Metric »** : non retrouvé dans la doc lue.
- **Relevés app / analyste (non recoupables)** : pool WETH-USDG (69,2 M$ de volume, 2,13 M$ de fonds, 13/87 %, Edge 9 790 $, bins −2/−4/+2, APR 258,9/30,9 %), Edge 7 j ≈ 19 k$, markout 30 min −24,7 k$, Trading PnL +9,8 k$, ~361 WETH, Trading PnL APR SKHYB +356 %, GOOGL −243 %, CRCLB −207 %, coûts en pb, les 22 pools (~40 % / ~15 %).
  - Cohérents entre eux : 813 k$/361 WETH ≈ 2 252 $/ETH, cohérent avec 0,445 WETH ≈ 1 000 $. L'API ne se lit qu'en partie.
- **API : 902 pools, 124/282/496, labels 188/308/406, curators 63/33/4 %, 22 pools = 90 %, 85 % en 🟢** : non recomptable (réponse tronquée). Arithmétique interne vérifiée (voir ✅).
- **Robinhood Chain : Metric ~3,9 % du volume DEX sur 7 j (181 M$ sur 4,68 Md$) et Uniswap ~74 %** : relevé analyste. DefiLlama affiche aujourd'hui 250 M$ de volume Metric sur 7 j sur Robinhood Chain (fenêtre glissante qui inclut le 30/10). Recalculer avec la fenêtre du 29/10 ou dater.
- **Parrainage « actif depuis le 21 ou 22 octobre »** : dates issues de sources tierces ; formulation prudente déjà dans le texte. Contenu de la doc confirmé (« Create your referral code… », « More details will be revealed soon », peut être annulé ou arrêté).
- **Financement 2,5 M$ et phase discrète de ~7 mois** : non confirmé, et le dossier le dit. iq.wiki n'en parle pas.

## ✅ Vérifié

- **DefiLlama TVL (API /protocol/metric, 30/10 12:07 UTC)** : 17,11 M$ total, 30/10. Par chaîne : Robinhood 6,92, BSC 5,89, Ethereum 2,42, Base 0,78, Polygon 0,43, Arbitrum 0,36, Hyperliquid 0,16, Avalanche 0,12, Monad 0,04. Cohérent avec le tableau « 29 oct. » (17,9 M$ ; 7,29/6,23/2,47/0,79/0,43/0,36). Pas de token (symbol « - », pas de gecko_id/CMC). Les parts 41/35/14/4/2/2/2 % recalculées sont justes. Les montants dérivent d'un jour à l'autre, d'où la date 29/10 à garder.
- **DefiLlama volumes (API /summary/dexs/metric)** : cumul 25,06 Md$ (« près de 25 »), 30 j 5,24 Md$ (« 5,2 »). Mensuel : avr. 1,38 / mai 1,88 / juin 2,43 / juil. 2,14 / août 6,66 / sept. 5,40 / oct. 5,57 (graphe jusqu'au 30/10 ; le dossier a 5,1 « au 29 », cohérent).
  - 30 j par chaîne : BSC 1,69, Base 0,91, Ethereum 0,79, Robinhood 0,78, Polygon 0,63, Arbitrum 0,33, autres ≈ 0,10. Le dossier est correct.
  - 18,8 + 6,3 ≈ 25,1 Md$.
- **Doc officielle (30/10)** :
  - Anchored Price Provider : bid/ask bornés par Chainlink ou Pyth (exemple 99/101 $ ✅).
  - Multiplier Oracle : prix de l'action Pyth × multiplicateur de l'émetteur, B20 Base + Robinhood Stock Tokens, flux suspendu quand l'émetteur met en pause, retraits ouverts.
  - 🟢 : flux ≤ 15 s ; « a Chainlink market-closed update stops the pool as soon as it lands ».
  - Frais notionnel off par défaut, plafonné à 1 % ; parts curator/Metric modifiables sans timelock.
  - APR de la liste = Edge APR 7 j (`aprBps7d`), exclut les mouvements de prix.
  - Trading PnL = valeur actuelle moins HODL ; exemple 10 ETH/20 000 USDC → −950 $ vs HODL / +1 050 $ vs dépôt ✅.
  - Verified curator = KYB + registre Metric + créateur de la pool.
  - Autres extensions : Velocity Guard, allowlist ; jusqu'à 7 extensions.
  - Exemple de doc « 5 ETH à 2 010 $ » repris tel quel.
- **Lancement** : BNB Chain ouvert le 14/10/2026, annonce « live sur Ethereum, Robinhood Chain et BNB Chain » le 15/10 (Crypto Briefing 14/10 ; iq.wiki). Cohérent avec « lancement public le 15 octobre » (nuance : BNB Chain la veille).
- **Priorité 3 : DODO** : Decrypt (28 août 2020) : DODO « integrates with Chainlink » sur mainnet, lancement public le 25 août 2020 après bêta fermée le 15 août. L'affirmation « dès son lancement, en août 2020 » est correcte (daté de la semaine du lancement). Seul l'article tiers le dit ; pas d'annonce officielle datée trouvée. Reco : « fin août 2020 » + lien Decrypt déjà cité.
- **Priorité 2 : propAMM Solana** : Blockworks Research (repris le 30 oct. 2025) et The Coin Republic (7 nov. 2025, titre « Prop AMMs capture 50 % of Solana DEX volume ») : plus de 50 %. Autres estimations : ~30 % (DLNews, via Figment), jusqu'à ~70 % (DefiLlama). HumidiFi et Tessera sont cités (Tessera 7-18 % des propAMM) ; SolFi non retrouvé dans mes résultats. « Environ la moitié » est défendable.
  - Je n'ai pas pu ouvrir les articles : lien Blockworks redirigé vers un 404, Coin Republic en timeout. Seuls les extraits de recherche sont vus.
  - Reco : écrire « de l'ordre de la moitié, selon Blockworks Research (estimations variables) ».
- **Priorité 5 : cohérence interne (recalculée)** :
  - 902 = 124+282+496 = 188+308+406 = 320+526+56 ; TVL labels 13,4+2,0+0,4 = 15,8.
  - 85 % = 13,4/15,8 ; 90 % = 14,2/15,8 ; 63+33+4 = 100, d'où 96 %.
  - ×3,5 = 17,9/5,1 ; 6,3 Md$ (V1 totale, y compris chaînes hors app) vs 3,1 Md$ (1,24+1,01+0,85, pools publiques 3 chaînes) : expliqué dans le texte, cohérent.
  - Cible 60 % reperdu = (40−15)/40 ≈ 62 %, « ~25 points » ✓. 32×/jour = 69,2/2,13. 0,014 % = 9 790/69,2 M. 0,46 % = 9 790/2,13 M. 258,9/30,9 ≈ 8,4 (« divisé par 8 »).
  - Spread 50 200 $ → Metric 15 % ≈ 7 530, ×365 ≈ 2,7 M$ ; 81+15+4 = 100.
  - Demi-spread 0,010-0,036 % vs « 0,2 à 0,8 $ » (ETH ≈ 2 250 $) ✓. Pb : 1,8 / 0,9 / 0,05-0,1 / 1,5-5 cohérents avec 0,014 % (1,4 pb) pour WETH-USDG.
  - Exemples pédagogiques recalculés exacts (arbitrage v2 48/45/93 $, aller-retour 6 075−6 015 = 60, tableau −950/+50/+1 050, markout −50, split 204 $, bins 2 020-2 040 → 2 222-2 244).
  - « Public depuis deux semaines » = 15→30/10 ✓. Chaîne Robinhood+BNB = 76 % ✓ (13,52/17,9).
- **Priorité 6 : absence de token** : DefiLlama (aucun identifiant de token) ; doc sans token ; aucune des sources secondaires lues n'en annonce. Programme de parrainage confirmé par la doc.
- **Mise en garde « n'est pas un conseil en investissement »** présente.

## 🧩 Manque éventuel / actualité

- Le dossier est cohérent avec un ancrage Chainlink Data Streams pour BNB Chain : à citer comme piste (voir ❓ bStocks).
- Nom précédent « Axima Labs » (gist) : contexte de transparence équipe, non vérifié.
- Les chiffres DefiLlama bougent déjà (TVL −0,8 M$ en un jour, 17,9→17,1) : garder la mention « au 29/30 octobre » et ne pas écrire « ~18 M$ » sans date.
- Rien trouvé de nature à changer la lecture (pas d'incident, pas de token annoncé) dans mes recherches du 30/10.

Sources consultées le 30/10/2026 : docs.metric.xyz/llms-full.txt · api.llama.fi/protocol/metric · api.llama.fi/summary/dexs/metric · api.metric.xyz/public/v1/evm/56/metadata?include24h=true · api.geckoterminal.com (pool 0x88e6…5640) · decrypt.co/40117 · cryptobriefing.com/bnb-chain-bstocks-metric-dex · cryptobriefing.com/metric-dex-chainlink-data-streams · iq.wiki/wiki/metric · rootdata.com (via recherche) · recherches web propAMM Solana (Blockworks, Coin Republic, Figment).
