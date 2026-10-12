# Notes de sources — Justin Drake et le « bunker mode » (vérif. 2026-10-12)

> Notes reformulées (zéro copie). Sources : couverture presse des posts X de Drake et Buterin (Forklog 8/10, CryptoSlate 8/10, Cointelegraph via TradingView, Yahoo/Cryptonews). Pas de transcription directe des fils X trouvée → citations exactes `[À VÉRIFIER]` sur X.

## Chronologie
- **6 oct. 2026** : OpenAI publie 722 résultats mathématiques produits par un modèle interne non publié (preuves formalisées en Lean). OpenAI prévient que certains peuvent contenir des erreurs. **Aucune attaque contre la cryptographie des blockchains** n'y figure.
- **7 oct. 2026** : Justin Drake (chercheur, Fondation Ethereum) poste sur X : se préparer « calmement » à un « bunker mode ».
- **7 oct. 2026** : Vitalik Buterin répond : il prend le risque au sérieux mais déconseille de se précipiter.

## Ce que dit Drake
- L'IA qui accélère les maths pourrait casser **ECDSA** (la signature qui protège les wallets Bitcoin et Ethereum) **avant les ordinateurs quantiques**. Pire cas selon lui : « en mois, pas en années ». Pas de date. C'est un **scénario**, pas une faille démontrée.
- Sa définition d'un « cassage » : retrouver une clé privée rapidement (≈ une semaine) avec du matériel accessible (un gros parc de cartes graphiques).
- Pourquoi les courbes elliptiques : elles ont beaucoup de structure mathématique, donc des angles d'attaque ; les fonctions de hachage sont conçues pour en avoir le moins possible.
- Exemples cités : des conjectures mathématiques tenues pour solides qui sont tombées récemment.
- « Bunker mode » = **migration contrôlée** des fonds vers des **adresses neuves**, qui n'ont jamais signé de transaction (leur clé publique reste cachée derrière un hachage). Après chaque signature, déplacer le reste vers une nouvelle adresse (possible depuis la même phrase de récupération).
- **Qui d'abord** : les gros détenteurs et acteurs techniques (il cite Binance, Tether, Robinhood, Bitfinex…) pour leurs portefeuilles froids. **« Ne vous précipitez pas »** : une migration bâclée ferait plus de mal que de bien.
- Long terme : passer à une cryptographie basée sur les fonctions de hachage. Il appelle à accélérer la feuille de route Ethereum.
- (Non repris : ses accusations de censure par le gouvernement américain — invérifiables.)

## Ce que dit Buterin
- « Je ne recommande à personne de se précipiter pour déplacer ses fonds aujourd'hui », mais il faut prendre au sérieux le risque d'une IA qui accélère les maths.
- Il élargit : la cryptographie « post-quantique » à base de réseaux euclidiens (lattices, ex. ML-DSA, standardisée par le NIST en 2024) pourrait aussi être affaiblie dans les **deux ans**. Ethereum s'oriente déjà vers des signatures basées uniquement sur le hachage.
- Phrase forte : il dit avoir personnellement **perdu plus d'argent dans des migrations ratées que dans tous les piratages réunis**.

## Pédagogie (faits stables)
- Clé privée → clé publique → adresse (= empreinte/hachage de la clé publique). On peut calculer la publique depuis la privée, pas l'inverse : c'est ce que « casser ECDSA » remettrait en cause.
- Tant qu'une adresse a seulement **reçu** des fonds, seule l'adresse (le hachage) est visible. Dès qu'elle **envoie** (signe), la clé publique est publiée sur la blockchain.
- Sur **Ethereum**, un compte qui a déjà envoyé une transaction (presque tous les comptes actifs) a sa clé publique exposée. Sur **Bitcoin**, cela dépend du type d'adresse et de la réutilisation.

## Chiffres
- « 7 M BTC exposés » : source unique → **ne pas citer**. Project Eleven tient une liste des clés BTC exposées (« risq list ») — aucune donnée chiffrée vérifiée ici.

## Liens
- https://forklog.com/en/justin-drake-says-ai-could-break-ecdsa-before-quantum-computers/
- https://cryptoslate.com/vitalik-buterin-urges-calm-as-ai-raises-new-fears-over-bitcoin-and-ethereum-cryptography-security/
- https://www.tradingview.com/news/cointelegraph:5dba6e7bf094b:0-vitalik-buterin-backs-crypto-bunker-mode-amid-rapid-ai-math-advances/
- https://finance.yahoo.com/markets/crypto/articles/crypto-bunker-mode-ethereum-justin-072614182.html
