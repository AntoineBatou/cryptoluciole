# Notes de lecture — OAK Research, « Qu'est-ce que HIP-4 ? »

- URL : https://oakresearch.io/fr/reports/protocols/quest-ce-que-hip-4-fonctionnement-cas-usage-outcome-markets-hyperliquid
- Auteur : Lilian Aliaga (OAK Research) · publié le **26 mai 2026** → AVANT l'ouverture de la phase 2 (29/08/2026 selon la veille du 10/10).
- ⚠️ Ces notes sont une **extraction reformulée** (pas le texte d'OAK) : dépôt public, et consigne de Marc = zéro copier-coller. On reprend le MÉCANISME, jamais l'opinion ni les formulations.

## Mécanisme
- Contrats entièrement collatéralisés, réglés entre 0 et 1. YES et NO sur des carnets séparés mais reliés (opérations *negate* / *merge*) → liquidité partagée, YES + NO = 1.
- Création par une requête `OutcomeDeploy` : condition de résolution, expiration, source de règlement, collatéral, « broadcaster » autorisé.
- Cycle : déploiement → **enchère d'ouverture ~15 min** (prix unique d'équilibre) → trading continu sur carnet d'ordres → règlement.
- **Résolution** : pas d'oracle décentralisé type UMA. Un **broadcaster autorisé**, désigné au déploiement, publie le résultat depuis la source déclarée ; le protocole règle automatiquement. (Contraste utile avec Polymarket/UMA vu dans ON ÉCLAIRE.)
- **Collatéral** : USDC, **le même compte que les perps et le spot** (marge unifiée).
- Marchés multi-issues possibles (une seule issue résolue OUI).

## Qui peut déployer — et l'« incohérence » 500 000 / 1 M HYPE (résolue)
- Phase 1 : marchés « canoniques » lancés par l'équipe Hyperliquid seulement.
- Phase 2 : ouverte aux builders (permissionless).
- **500 000 HYPE** = un deployer HIP-3 existant réutilise son slot (et son stake) pour un marché HIP-4.
- **1 000 000 HYPE** = un slot de phase 2 qui fait tourner une **série** de marchés (« slot recycling »).
- → Les deux chiffres ne se contredisent pas : ce sont deux cas différents. Durée de blocage non précisée par OAK (la veille cite 6 mois, à vérifier).

## Frais (selon OAK, à vérifier)
- Ouverture / mint gratuits ; frais à la fermeture ou au règlement au barème spot HyperCore (7 bps taker / 4 bps maker) ; frais à zéro sur les marchés canoniques.
- Comparaison OAK : Polymarket jusqu'à 2 % sur les gains ; Kalshi frais par paliers.

## Ce qu'Hyperliquid apporte (thèse OAK — à présenter comme leur thèse, pas la nôtre)
- Même carnet d'ordres / moteur que les perps et le spot (OAK : 200 000 ordres/s théoriques).
- **Couverture** : un trader long sur un perp peut acheter un NON pour se protéger d'un événement sans fermer sa position.
- Composabilité : les builders combinent perps et paiements conditionnels.
- Positionnement : **infrastructure** pour d'autres acteurs (« AWS de la liquidité ») vs Polymarket/Kalshi = applis grand public. Moins de marchés, plus récurrents et plus liquides.
- Démarrage facilité par une base de traders et de market makers déjà présente.

## Cas d'usage cités
Pari sur un catalyseur court terme (YES à 0,02 → jusqu'à 50× la mise) · couverture d'un événement · fourchettes de prix (« BTC entre deux bornes ») · seuils touchés au moins une fois · risque protocolaire (exploit, depeg) · métriques on-chain · gouvernance (futarchy, MetaDAO).

## Chiffres cités par OAK (tous à vérifier avant usage)
- Cboe 2025 : 15,2 Md de contrats d'options US, 61 M/jour ; 0DTE = 59 % du volume SPX.
- Deribit 2025 : 1 875 Md$ de volume, > 85 % de part de marché des options crypto.
- **Marchés de prédiction : 63,5 Md$ en 2025 vs 15,8 Md$ en 2024 — source citée : Token Terminal** ; run rate 2026 ~250 Md$. (Piste ÇA BRILLE.)

## Réserves
- Encarts promotionnels (« Commencez à trader sur Hyperliquid », Premium, affiliation) → l'opinion n'est pas neutre.
- Thèse et avantages (frais, liquidité) affirmés sans données comparatives.
- Écrit avant la phase 2 → tout ce qui concerne la phase 2 doit être complété par la veille du 10/10 (Outcome, trade.xyz, volumes de septembre).

---

# ✅ VÉRIFICATION — doc officielle + API en direct (2026-10-11)

Sources : `hyperliquid.gitbook.io/hyperliquid-docs/llms-full.txt` (doc complète, lue le 11/10) +
`POST api.hyperliquid.xyz/info {"type":"outcomeMeta"}` (marchés actifs en direct).

## Ce qui est CONFIRMÉ
- Contrats entièrement collatéralisés, sans levier ni liquidation. Carnets OUI et NON **fusionnés** : acheter OUI à p = vendre NON à 1−p (doc HIP-4, « Mechanics »).
- Questions à plusieurs issues : une seule passe à OUI, les autres à NON.
- **Déploiement par des tiers = BIEN EN PRODUCTION** (malgré la mention « Testnet-only » restée sur la page de doc) : au 11/10, **309 marchés actifs**, dont **147 chez Outcome** (venue `out`), **93 chez trade.xyz** (`txyz`), **61 chez Skew** (`skew`) et seulement **8 lancés par le protocole** (les marchés « récurrents »).
- Ce qu'on y trouve : surtout des **paris sur des prix** (99 marchés « binaryPrice », ex. « l'ETH sera-t-il au-dessus de 2 311 $ le 16/10 ? », y compris sur actions tokenisées xyz:TSM, xyz:MU, l'argent métal), et beaucoup de **sport** (NFL, foot, MLB), quelques IPO et récompenses.
- **Qui crée et qui tranche** : les marchés partent de **modèles (templates) votés par les validateurs**. C'est le **deployer lui-même qui règle le résultat** (actions `settleOutcome` dans l'API). Garde-fou : un marché qui contredit son modèle est **« slashable »** par vote des validateurs (le deployer perd une partie de sa mise). → Pas d'oracle à vote type UMA.
- **Mise bloquée minimum 183 jours** (~6 mois) avant de pouvoir arrêter. Les mises **ne se cumulent PAS** avec celle de HIP-3 (« stake that counts towards HIP-3 deployment does not double-count ») → ⚠️ **CONTREDIT OAK** (« le même stake de 500 000 HYPE réutilisé »).
- **Montant de la mise pour HIP-4 : NON PRÉCISÉ dans la doc.** (500 000 HYPE = mise HIP-3 pour un perp DEX.) → **ne citer aucun montant.**
- Frais : la doc parle de frais « actuellement nuls pour les tests » ; mais les marchés tiers affichent `deployerFeeScale 1.0` → le joueur paie 2× le taux de base, partagé moitié deployer / moitié protocole. Taux de base non donné → **ne pas citer 7/4 bps** sans confirmation.

## Collatéral — réponse à la question de Marc
La doc décrit **3 modes de compte** :
1. **Standard / manuel** : soldes spot et perps **séparés** (c'est ce que Marc a constaté : ses ETH spot ne servent pas à shorter).
2. **Compte unifié** (recommandé par défaut) : **un seul solde par actif**. Le même USDC sert aux perps cross ET au spot (et donc aux marchés de prédiction, cotés en USDC). Mais un ETH reste un ETH : il ne sert pas de marge.
3. **Portfolio margin** : spot et perps vraiment unifiés, mais **seuls HYPE, BTC, USDC et USDT** sont acceptés comme collatéral (LTV HYPE 0,65, BTC 0,5). **ETH n'en fait pas partie.** Conditions d'accès (compte > 10 k$ ou gros volume).
→ « Les mêmes USDC servent aux perps et aux paris » = vrai **en compte unifié seulement**. « Tes cryptos servent de collatéral » = **faux** en général (sauf HYPE/BTC en portfolio margin).

---

## 📈 ACTIVITÉ + COLLATÉRAL — vérifs du 2026-10-12 (pour l'analyse demandée par Marc)

### Évolution de l'activité (sources secondaires, recoupées)
- Lancement mainnet 2 mai 2026 (marchés du protocole uniquement). Gros pic pendant la Coupe du monde (juin-juillet) : le foot = 89,5 M$, 28 % du cumul (TokenPost).
- Août : ~545 k$/jour en moyenne. Ouverture aux créateurs extérieurs le **29/08** → 1,97 M$ le 31/08 (crypto.news, 3/09, d'après le Hyperliquid Research Collective).
- Septembre : **~51 M$** sur le mois (~1,7 M$/jour). Début octobre : **~1,25 M$/jour** (TokenPost, 7/10, données au 5/10). Cumul ≈ 317 M$ au 5/10.
- Le marché BTC quotidien du protocole : −93 % depuis son pic de mai (TokenPost).
- Outcome = ~92 % du volume des créateurs extérieurs depuis le 29/08 (TokenPost) ; ~85 % selon le Research Collective (début sept.).
- **Volume soutenu par des primes** : Outcome finance un programme de récompenses de 1 M$ (273 k$ versés à 2 487 wallets au 5/10, ~7 400 $/jour). Frais HIP-4 annualisés ≈ 480 k$ vs primes annualisées ≈ 2,7 M$ (TokenPost).
- Liquidité : un achat de 10 000 $ paie typiquement 2-3 % au-dessus du meilleur prix (TokenPost, 25 carnets les plus actifs).
- Mise des créateurs : le Research Collective et TokenPost disent que les 2 premiers créateurs extérieurs ont posté **500 000 HYPE**. La doc officielle ne donne pas de montant → si cité : « selon des analystes », `[À VÉRIFIER]`.

### Comparaison (septembre 2026)
- HIP-4 ≈ 51 M$ · Polymarket ≈ 4,7 Md$ (DeFi Rate, volume en dollars) · Kalshi ≈ 60 Md$ en volume « notionnel » (Prediction News — mesure différente, non comparable 1:1).
- → HIP-4 ≈ **1 % de Polymarket**. Ordre de grandeur suffisant, pas de ratio précis vs Kalshi (mesures différentes).

### Photo API (12/10)
- 321 marchés actifs (Outcome 199, Skew 61, trade.xyz 53, protocole 8). La veille : 309 (trade.xyz 93). **Le nombre de marchés ouverts bouge chaque jour** (marchés de prix à quelques jours) → mauvais indicateur ; préférer le volume.
- ~11 650 marchés créés au total depuis mai (identifiants), dont ~7 500 depuis mi-septembre.
- Volume 24 h : Outcome ≈ 98 %, trade.xyz et Skew quasi nuls. Les plus échangés : vainqueur de la Ligue des champions (Bayern, Real, Barça), NFL, meilleur buteur. Engagement ouvert ≈ 2,3 M$.

### Voix de la communauté
- Mario Chow (cité par TokenPost) : HIP-4 ressemble moins à Polymarket qu'à « un ticket d'option posé à côté de ta position en perp » ; « les briques sont bien construites, le marché n'est pas venu » ; à construire, mais à ne pas valoriser comme un business de marché de prédiction.
- Research Collective : la contrainte restante est réglementaire.

### Collatéral — réponse définitive (doc officielle)
- Outcomes = **entièrement collatéralisés**, sans levier : on paie le prix plein (doc HIP-4). Les jetons OUI/NON ne figurent PAS parmi les collatéraux éligibles (seuls HYPE, BTC, USDC, USDT en portfolio margin).
- **Standard** : soldes séparés → il faut transférer des USDC.
- **Compte unifié** : un seul solde USDC finance la marge des perps ET l'achat de paris. Pratique, mais l'USDC dépensé sur un pari ne sert plus de marge, et la plateforme ne « reconnaît » pas que le pari couvre le perp (pas de réduction de marge documentée).
- **Portfolio margin** : la doc dit que les ordres spot/perps empruntent automatiquement des USDC contre HYPE/BTC (LTV 0,65/0,5), que les outcomes « partagent l'essentiel de l'implémentation du spot » et « se composent avec le portfolio margin ». → acheter un pari avec des USDC empruntés contre ses BTC/HYPE est plausible mais **pas écrit noir sur blanc pour les outcomes** `[À VÉRIFIER]`. Accès : compte > 10 k$ ou 5 M$ de volume. ETH jamais.
- Les guides marketing (Chainstack, Bex, Frenflow…) qui annoncent « marge réduite car positions qui se couvrent » ou « PnL latent des perps comme collatéral des paris » ne sont **pas confirmés par la doc** → ne pas reprendre.
- La doc annonce : « Future HyperCore asset classes and primitives will support portfolio margin » → la vision « un seul collatéral pour tout » = **à venir**, pas aujourd'hui.

Sources : tokenpost.com/news/investing/27723 · crypto.news/hyperliquid-hip-4-volume-triples-after-open-rollout · defirate.com/prediction-markets/volume/polymarket · predictionnews.com (Kalshi 60 Md$) · doc Hyperliquid (Account abstraction modes, Portfolio margin, HIP-4, Asset IDs) · API info (outcomeMeta, spotMetaAndAssetCtxs, settledOutcome).
