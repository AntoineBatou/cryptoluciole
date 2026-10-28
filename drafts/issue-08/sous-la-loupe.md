# 🔍 SOUS LA LOUPE — numéro 8 : Derive V3

> ✍️ Brouillon du Rédacteur (v3 boucle 2, réécrite de zéro le 28/10 puis corrigée après le 7,5/10 du vérificateur selon le plan imposé par Marc + ses consignes complémentaires : vulgarisation, 4 choses à retenir, risques jamais techniques sans contexte). Notation des blocs : `[p]` paragraphe · `[st]` sous-titre · `[def | slug]` encadré de définition · `[liste]` puces · `[avis]` encadré vert « 💡 Notre avis » · `[À VÉRIFIER]` chiffre/fait à confirmer. Italique = terme anglais à sa 1re occurrence. Correspondance avec le type `protocole` de `issues.ts` : En bref → `bref` · Comment marchent les options + V3 → `etapes` · Ce que tu peux y placer → `rendement` · Le jeton DRV → `etapes` ou `importance` (à trancher à l'assemblage) · Les risques → `risques` + `risqueSens: "moyen"` · Pourquoi ça compte (builder codes + chiffres) + avis → `importance` / `avis` · `slug: "derive"`.
>
> Objectif (une phrase) : que le lecteur sache comment marche une option sur Derive, ce que change la V3, ce qu'il peut y placer (et qui le paie), et quels risques il prend.

**Titre (validé par Marc, 28/10)** : Derive : acheter et vendre des options on-chain

---

[st] En bref

[p]
Derive (ex-Lyra, lancé en 2021) est la plus grosse plateforme d'options de la DeFi : environ **80 % des volumes sur 30 jours** (DeFiLlama, 28 octobre) [À VÉRIFIER le jour de l'envoi]. On y trouve aussi des perps, du prêt et des *vaults*. Sa V3 est en ligne depuis le **7 octobre 2026**.

[st] Comment marchent les options

[def | `option`] **Option**
Un contrat qui donne le **droit, sans l'obligation**, d'acheter (*call*) ou de vendre (*put*) un actif à un prix fixé d'avance (le *strike*), à une date donnée. L'acheteur paie ce droit au vendeur : c'est la **prime**.

[p]
**⬡ Acheter un put : se protéger.** Ton ETH vaut 3 000 $ et tu crains une baisse. Tu achètes un put de strike 2 700 $ à un mois, pour 60 $ de prime.

[p]
Autrement dit, tu achètes **le droit de vendre ton ETH à 2 700 $ à l'échéance**, quoi qu'il arrive : si l'ETH tombe à 2 000 $, tu seras content de pouvoir le vendre à 2 700 $. (En pratique, Derive te verse la différence en USDC.)

[liste]
- L'ETH tombe à 2 000 $ : ton put vaut **700 $** (2 700 − 2 000). Ta perte est limitée à **360 $** (1 000 − 700 + 60 de prime) au lieu de 1 000 $.
- L'ETH reste au-dessus de 2 700 $ : le put ne vaut rien. Tu perds 60 $, mais **tu gardes la hausse**.

[p]
**⬡ Acheter un call : parier sur la hausse.** L'ETH vaut 3 000 $ et tu penses qu'il va monter. Tu achètes un call de strike 3 300 $ à un mois, pour 100 $ de prime.

[p]
Autrement dit, tu achètes **le droit d'acheter de l'ETH à 3 300 $ à l'échéance**, quoi qu'il arrive : si l'ETH monte à 4 800 $, tu seras content de pouvoir l'acheter à 3 300 $. (Là encore, on te verse la différence en USDC.)

[liste]
- L'ETH monte à 4 800 $ : ton call vaut **1 500 $** (4 800 − 3 300). Ton gain net est de **1 400 $** (1 500 − 100 de prime).
- L'ETH reste sous 3 300 $ : le call ne vaut rien. Tu perds 100 $, **rien de plus**.

[p]
**⬡ Vendre une option : encaisser la prime.** En face de chaque acheteur, un vendeur encaisse la prime. Dans l'exemple du put, il garde tes 60 $ si l'ETH reste au-dessus de 2 700 $, mais te verse 700 $ s'il tombe à 2 000 $. **Le vendeur joue l'assureur : de petites primes régulières, de grosses pertes possibles.** Ce rôle est tenu surtout par des *market makers* (des professionnels qui affichent en permanence un prix d'achat et de vente) et par les vaults.

[p]
Les options restent un outil technique : **il faut les avoir bien comprises avant de s'y mettre.**

[st] Ce qui change avec la V3

[liste]
- **Tes fonds sont gardés sur Ethereum.** Derive a fermé sa propre blockchain : tes dépôts reposent désormais sur la sécurité d'Ethereum plutôt que sur une petite chaîne propre à Derive. Les ordres restent exécutés vite, hors chaîne, puis le résultat est prouvé sur Ethereum via une preuve zk (une preuve mathématique que les calculs ont respecté les règles).
- **Moins d'argent bloqué pour vendre des options, désormais aussi entre ETH et BTC.** Quand tu vends une option, tu dois bloquer une garantie (la *marge*) au cas où tu devrais payer l'acheteur. Sur les premières plateformes d'options on-chain, il fallait souvent bloquer toute la perte possible. Derive calcule plutôt la garantie sur l'ensemble de tes positions. Exemple : tu vends un put ETH de strike 2 700 $ et tu en achètes un de strike 2 500 $ pour te couvrir. Ta perte maximale est de 200 $ (2 700 − 2 500) : c'est à peu près ce qu'on te demande de bloquer, au lieu de 2 700 $. La V3 étend ce calcul à l'ETH et au BTC ensemble : des positions sur les deux cryptos peuvent se compenser. (Acheter une option, en revanche, se paie comptant : seule la prime est en jeu.)
- **N'importe qui peut créer un vault sans coder** : 500 $ de frais, et 10 000 $ de dépôt initial que le créateur doit laisser dedans, pour qu'il ait son propre argent en jeu.
- **Des compartiments isolés** (BTC/ETH, HYPE, autres cryptos, or tokenisé) : un problème dans l'un ne contamine pas les autres.

[st] Ce que tu peux y placer

[liste]
- **Prêter** tes USDC ou tes cryptos (ETH, WBTC, HYPE depuis la V3) : ce sont **les traders qui empruntent** qui te paient un intérêt.
- **Déposer dans un vault** qui vend des options : tu touches **les primes payées par les acheteurs**, moins les frais du gérant, et tu portes le risque du vendeur.
- **Staker du DRV**, le jeton de Derive : tu es payé en **DRV nouvellement créés**, donc ton rendement dépend de ce que valent ces jetons.

[p]
(Acheter un put, lui, coûte une prime : c'est une protection, pas un placement.)

[p]
Pas de taux fiable publié pour le prêt et les vaults au 28 octobre : la V3 n'a que trois semaines [À VÉRIFIER le jour de l'envoi].

[st] Le jeton DRV : des émissions à peine couvertes par les rachats

[p]
Deux flux jouent en sens contraire sur la quantité de DRV en circulation :

[liste]
- **Des rachats** : Derive a encaissé environ 420 k$ de revenus sur 30 jours, tous produits confondus (DeFiLlama, 28 octobre). Depuis mi-octobre, la moitié sert à racheter du DRV sur le marché, contre 35 % avant, selon la presse crypto : soit environ 210 k$ par mois.
- **Des émissions** : 150 000 DRV sont créés chaque semaine pour les stakers et les traders, soit environ 240 k$ par mois au cours de 0,37 $ [À VÉRIFIER le jour de l'envoi].

[p]
**Les émissions de DRV restent donc un peu au-dessus des buybacks**, d'environ 30 k$ par mois (240 − 210) : on est proche de l'équilibre, tant que les revenus tiennent. S'y ajoutent 500 millions de DRV créés en 2025, dont près de la moitié pour l'équipe sur quatre ans, non comptés ici : la dilution réelle peut être plus forte.

[st] Les risques — 🟡 Moyen

[p]
Moyen : acheter une option limite à la prime ta perte liée au prix ; le risque monte si tu vends des options ou passes par un vault. Et quel que soit ton usage, tu dépends de la plateforme :

[liste]
- **Tu fais confiance à l'équipe** : elle garde la main pour modifier les contrats, la décentralisation n'est pas terminée.
- **La V3 est toute neuve** : trois semaines de recul.
- **Vendre des options, ou passer par un vault qui en vend, est plus risqué qu'en acheter** : une forte baisse peut coûter bien plus que les primes encaissées.

[p]
Et comme pour tout protocole DeFi, le risque de hack n'est jamais à exclure.

[st] Pourquoi ça compte

[p]
Derive mise aussi sur d'autres applis pour toucher le grand public. Depuis février 2026, un *builder code* permet à n'importe quelle appli de proposer les options de Derive à ses propres utilisateurs, avec son interface, en **ajoutant ses propres frais**, sans autorisation à demander. Hyperliquid fait déjà pareil avec les perps.

[p]
**L'objectif : laisser d'autres équipes (les *builders*) faire le travail de simplification.** Un wallet pourrait par exemple proposer des boutons qui ne prononcent jamais le mot « option » :

[liste]
- « Protéger mon ETH contre une baisse de plus de 10 % » : derrière, l'appli t'achète un put sur Derive ;
- « Acheter du BTC s'il baisse de 10 %, et être payé en attendant » : derrière, l'appli vend un put pour toi. Tu touches la prime, mais si le BTC passe sous ce prix, tu l'achètes à ce prix, même s'il continue de chuter.

[p]
L'adoption reste embryonnaire.

[p]
Côté chiffres, depuis la V3, l'argent déposé est passé d'environ **111 M$ à 177 M$**, pour **~3,2 Md$ d'options échangées** sur 30 jours, dont ~2,1 Md$ sur la V3 (DeFiLlama, 28 octobre) [À VÉRIFIER le jour de l'envoi].

[avis]
💡 **Notre avis :**

- **Derive domine les options DeFi ; sa croissance dépend désormais des applis qui le rendront simple.**
- **Les rachats couvrent presque les émissions, mais pas encore : les détenteurs de DRV restent un peu dilués.** Le chiffre à suivre : rachats mensuels contre émissions.
- **Pour l'usage :** acheter des options en petites mises, pour se protéger ou parier à perte plafonnée, a du sens. Prudence sur les vaults tant qu'ils n'ont pas d'historique.

[p]
[→ Voir la fiche complète](https://www.cryptoluciole.com/protocoles/derive)

---

## Notes du Rédacteur (hors texte, à ne pas assembler)

### Notes pour le fact-checker
- **Exemples put/call** = illustrations inventées en chiffres ronds (ETH 3 000 $). Put strike 2 700 / prime 60 $ à un mois : chute à 2 000 → put 700 $, perte 360 $ (1 000 − 700 + 60) ; hausse à 3 500 → perte 60 $. Call strike 3 300 / prime 100 $ : 3 800 → call 500 $, gain net 400 $ ; sous 3 300 → perte 100 $. Vérifier que 60 $ (~2 %) et 100 $ (~3 %) sont des ordres de grandeur réalistes sur Derive (put ~10 % hors de la monnaie, call ~10 % hors de la monnaie, 1 mois).
- Règlement en USDC, options européennes réglées en cash : doc Derive.
- **V3 (6/10/2026)** : fin de la chaîne propre, fonds gardés sur Ethereum, exécution hors chaîne + preuve sur Ethereum ; marge ETH/BTC commune ; emprunt ETH/WBTC/HYPE ; vaults sans code (500 $ / 10 000 $ / min. 10 000 $ ou 1 %) ; compartiments isolés (BTC/ETH, HYPE, autres cryptos, or tokenisé). Sources : CoinInsider (9/10), TokenPost, CryptoBriefing, Phemex ; compartiments recoupés partiellement (« isolated risk groups », CoinInsider). **Ambiguïté** : « au moins 10 000 $ ou 1 % » = le plus élevé des deux ? À confirmer.
- **Builder codes** : blog Derive 10/02/2026 (frais ajoutés, reversement toutes les 4 semaines, sans exclusivité/autorisation/volume minimum). Dream et LEVR (options 0 jour) : vérifier qu'ils sont bien intégrés.
- **DRV** : DIP 324 (35 % → 50 % des frais en rachats, proposée 24/09, effective 14/10 selon OAK, résultat du vote non affiché sur le forum) ; 150 000 DRV/sem. (100 000 stakers + 50 000 traders, texte DIP 324) ; DIP 303 « Strategic Mint » 500 M DRV (sept. 2025), ≈ +50 % d'offre selon OAK. Calcul (session principale, DeFiLlama 28/10) : 150 000 × 0,365 × 52 ÷ 12 ≈ 237 k$/mois (arrondi 235) ; rachats 50 % × ~250 k$ ≈ 125 k$ ; net ≈ 110 k$. Vérifier que les « revenus » DeFiLlama (~250 k$/30 j, désormais posés dans la partie DRV et retirés de « Pourquoi ça compte ») = la base des rachats. Réserve de 500 M DRV mentionnée « non comptée » dans le calcul. Cours DRV à rafraîchir.
- **Marge commune ETH/BTC (boucle 2)** : (v3 après remarque de Marc, 28/10) l'exemple de marge porte désormais sur les options : vente d'un put ETH 2 700 $ couverte par l'achat d'un put 2 500 $ → perte max 200 $, marge ≈ 200 $ au lieu de 2 700 $ (marge de portefeuille). Vérifier : (1) que la marge de portefeuille de Derive s'applique bien ainsi aux spreads ; (2) que la nouveauté V3 est l'extension ETH + BTC (CoinInsider 9/10 : cross-asset margining) ; (3) « les premières plateformes exigeaient toute la perte possible » (Lyra v1 / Opyn : options entièrement collatéralisées).
- **Builder codes** : en place depuis février 2026 (blog Derive 10/02/2026), donc PAS une nouveauté V3 ; déplacés dans « Pourquoi ça compte ».
- **Staking DRV** : récompenses en DRV nouvellement émis (100 000/sem. sur les 150 000, texte DIP 324) ; vérifier qu'il n'y a pas aussi une part de frais versée aux stakers.
- Fonds d'assurance retiré du texte (boucle 2) : l'autre moitié des frais y va (DIP 324), détail renvoyé à la fiche site.
- Risque « l'équipe peut modifier les contrats » = vulgarisation du multisig pouvant remplacer racine d'état / clé de vérification (wiki/OAK, L2Beat).
- Chiffres LIVE DeFiLlama (28/10) : part ~80 % volumes options DeFi 30 j ; TVL ≈ 111 → 177 M$ ; ≈ 2,0 Md$ / 30 j ; revenus ≈ 0,25 M$ / 30 j. Rafraîchir.
- Aucun taux public fiable pour le prêt et les vaults au 28/10.

### Termes glossaire proposés
| Terme | Slug | Forme dans le texte | Statut |
|---|---|---|---|
| Option | `option` | encadré | NOUVEAU |
| Put | `put` | défini dans l'encadré option + exemple | NOUVEAU (facultatif, peut renvoyer à `option`) |
| Call | `call` | défini dans l'encadré option + exemple | NOUVEAU (facultatif, peut renvoyer à `option`) |
| Builder code | `builder-code` | défini dans le texte | NOUVEAU (proposé) |
| Vault | `vault` | mention + usage décrit | NOUVEAU (facultatif) |
| Marge | `marge` | définie dans le texte | à vérifier si existant |
| Market making | `market-making` | « market makers », glosé | EXISTANT |
| Contrat perpétuel | `contrat-perpetuel` | « perps » | EXISTANT |

### Coupé volontairement (fiche site `/protocoles/derive`)
- Détail technique de la V3 : preuves zk (SP1 + PLONK), calcul par lots, multisig et délais, *escape hatch* (retrait de secours), L2Beat, Celestia, carnet opéré par Lyra Technologies.
- Historique des options DeFi, V2 et sa blockchain, marge de portefeuille détaillée, TWAP, collatéraux (USDe…), FalconX.
- Frais chiffrés des vaults, part des intérêts au fonds de sécurité, débat détaillé sur la DIP 303.
- Mention « rédigé avec l'aide de l'IA » à poser sur la page site (jamais dans le mail).
