# Notes de recherche — ON ÉCLAIRE n°12 : emprunter contre des actions tokenisées sur Aave (relevé 2026-11-23)

Demande de Marc : « bien expliquer comment ça marche par rapport au Aave classique ». Sources primaires : drafts/issue-12/sources/aave/ (25690 = évaluation technique et juridique LlamaRisk, 26441 = ajout de 6 actions le 18/11, 26482 = baisse des facteurs le 23/11). Statut : propositions (ARFC), pas encore votées.

## Le produit
- Aave V4 sur Base : un « Equities Hub » (réserve de liquidité dédiée) avec un « spoke » (marché) « Mag-7 Spoke ». Garanties acceptées : 8 actions tokenisées par Coinbase (Apple, Amazon, Alphabet, Meta, Microsoft, Nvidia, Tesla + SpaceX). Seul actif empruntable : USDC. Les garanties ne rapportent pas d'intérêts (collateral only).
- Proposition du 18/11 : +6 actions (Netflix, Oracle, Palantir, AMD, ServiceNow, Strategy), plafond 5 M$ chacune, 30 M$ au total, soutenant au plus 16,3 M$ de dette USDC. Le spoke ne peut tirer que 21 M$ d'USDC du hub (« draw cap ») → ce qu'on prête contre des actions est borné.
- Proposition du 23/11 : la volatilité des actions a monté (action typique du S&P 500 : 27,9 % → 34,1 %/an depuis début 2026) → 6 des 8 facteurs baissent, ex. Microsoft 79 % → 65 %, Apple 78 % → 65 %, Nvidia 70 % → 65 %. « Aucune position ne sera liquidée par la mise à jour » (s'applique aux nouvelles configs).
- Tableau facteurs proposés pour les nouvelles : Netflix 65 %, Oracle 58 %, Palantir 58 %, AMD 49 %, ServiceNow 50 %, Strategy 47 % (plus volatile = facteur plus bas, plafonné à 65 %).

## Différences avec Aave « classique » (V3, crypto)
1. Un seul chiffre : en V4, le « collateral factor » est À LA FOIS la limite d'emprunt et le seuil de liquidation (en V3 : LTV et seuil de liquidation séparés, ex. ETH ~80 % / ~83 % — À VÉRIFIER chiffres V3 actuels).
2. Le prix dort la nuit et le week-end : l'oracle Chainlink publie 24h/24 du dimanche 20h au vendredi 20h (heure de New York), 120 h sur 168, puis se fige. La crypto, elle, a un prix 24/7. Le facteur est calibré pour couvrir la pire chute entre un prix « hors séance » et le plus bas atteint jusqu'à 5 minutes après l'ouverture suivante, + 0,5 % (seuil de mise à jour du flux), dimensionné pour un choc qui n'arrive qu'une nuit tous les dix ans par action. Plus longue fermeture : 92 h 35 (week-end prolongé) ; on y facture 24 %/an d'intérêts.
3. Liquidation plus délicate : le liquidateur ne peut pas rendre les jetons à l'émetteur (rachat réservé à 5 adresses autorisées) → il doit revendre sur le marché secondaire ou se couvrir (perps sur Hyperliquid, Binance, OKX). Bonus de liquidation 5,5 % (6,5 % pour Strategy et SpaceX : leurs écarts de week-end touchent toutes les positions d'un coup à la réouverture). Frais de liquidation 10 %.
4. L'émetteur a des pouvoirs : liste noire, gel, pause des transferts (une pause des transferts fait échouer liquidations, retraits, dépôts), pause du flux de prix pendant les opérations sur titres (dividendes réinvestis via un « multiplicateur »). Le jeton n'est pas le titre de propriété : la propriété légale est inscrite dans un registre tenu à Abu Dhabi (ADGM).
5. Taille : petite. Plafonds de quelques M$ par action, draw cap 21 M$.

## Accès depuis la France (à dire honnêtement)
- Titres émis sous droit d'Abu Dhabi (ADGM), interdits aux personnes américaines de façon absolue ; offre primaire réservée à des participants professionnels ; « aucune offre publique » ailleurs, chaque acquisition doit respecter le droit local. Donc : pour un particulier français, accès juridiquement incertain → ne pas présenter comme un geste à faire ; c'est un mécanisme à comprendre (ce qui arrivera ailleurs).

## Liens avec nos numéros
n°8 (tokenisation d'actions contestée), n°10 (perps sur actions), n°11 Ça brille (actions tokenisées qui perdent des utilisateurs) et notre vidéo/idée Anthropic (droits différents selon les jetons). Renvois « notre numéro X » + lien.
