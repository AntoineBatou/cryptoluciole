# Numéro 11 — ON ÉCLAIRE : les blockchains de stablecoins (brief validé par Marc le 16/11/2026)

## Mini-brief (validé)
- **Objectif** : comparer les blockchains de stablecoins du point de vue de celui qui envoie (coût d'un envoi, qui est derrière, ce qui est vraiment neuf), puis montrer pourquoi chacune existe.
- **Thèse** : trois émetteurs, trois stratégies. Tether défend son stock d'USDT contre Tron avec des frais quasi nuls, sans y parvenir pour l'instant. Circle veut moins dépendre de ses distributeurs (Coinbase) et a déjà tiré 182 M$ du jeton de sa chaîne. Stripe fait l'inverse : il partage la rente pour attirer les entreprises. Seul Tempo innove vraiment. Et la gratuité ne fait pas venir les utilisateurs : 93 Md$ restent sur Tron, une chaîne payante.
- **Dehors** : la démonstration « stock contre flux » (au plus UNE phrase, avec nos chiffres), Berachain, Hyperliquid, la chaîne de Google, tout pronostic sur la gagnante, tout conseil.

## Ce que Marc veut (ses mots, 16/11)
« Pas uniquement descriptive, mais aussi une réflexion, et une comparaison des coûts de tx, des acteurs, une spécificité de chacun. Que le lecteur puisse se demander lesquelles innovent vraiment, lesquelles fonctionnent ou pas et pourquoi, et qu'on comprenne que derrière il y a des enjeux importants pour les émetteurs (les blockchains en elles-mêmes ne rapportent pas forcément, par contre les émetteurs de stablecoin eux gagnent ; est-ce qu'à travers ces blockchains ils cherchent à garder de la TVL sur leur stablecoin ?). »
C'est la section longue du numéro (pas de SOUS LA LOUPE cette semaine). Rester lisible : sous-titres, un tableau comparatif, encadrés de définition.

## ⚠️ Originalité (bloquant)
OAK Research a publié le 30/10/2026 « Les stablecoins rapportent des milliards, mais pas aux blockchains » (stock contre flux, Tron 10× moins que Tether, Tron baisse ses frais de 40 % après Plasma, les distributeurs gagnent). Leur équipe nous lit. **Ne pas reprendre leur structure ni leurs formules, ni leurs chiffres propres** (2,1 Md$ contre 285 M$ ; 3,3 centimes contre 0,33 centime ; « le flux paiera toujours moins que le stock »). Notre angle = le coût réel d'un envoi (mesuré par nous) + les trois stratégies d'émetteurs + qui innove vraiment.

## Faits vérifiés (source primaire, relevés le 16/11/2026)

**Stablecoins hébergés (API DeFiLlama `stablecoins.llama.fi/stablecoinchains`, 16/11)** : Tron 93,2 Md$ (33 % du total de 283 Md$) ; Plasma 1,61 Md$ ; Arc 1,47 Md$ ; Tempo 0,80 Md$ ; Stable 0,03 Md$. Les quatre nouvelles réunies ≈ 3,9 Md$.
TVL (DeFiLlama `/v2/chains`) : Plasma 0,41 Md$ ; Arc 0,6 Md$ ; Tempo 0,09 ; Stable 0,07.

**Frais encaissés par les chaînes sur un an (DeFiLlama `/overview/fees`, 16/11)** : Tron 331,5 M$ ; Plasma 0,1 M$ ; Tempo 0,1 M$. Revenus estimés des émetteurs sur un an (même source) : Tether 5,96 Md$ ; Circle (USDC) 2,38 Md$ (avant reversements aux distributeurs).

**Coût d'un envoi, MESURÉ par nous sur la blockchain le 16/11** (notre matière originale) :
- Tron : un envoi d'USDT consomme 64 285 unités d'« énergie » (130 285 vers une adresse qui n'a jamais eu d'USDT). Prix officiel : 100 sun par unité (developers.tron.network). Sans énergie, on brûle 6,43 TRX + 0,345 TRX de bande passante ≈ 6,77 TRX ≈ **2,07 $** (TRX à 0,306 $, DeFiLlama) ; ≈ 4,1 $ vers une adresse neuve. 13 envois sur 15 observés étaient payés avec de l'énergie stakée ou louée (coût bien moindre, variable selon le marché de location). → Tron est cher pour qui n'a pas d'énergie, bon marché pour les habitués : c'est une barrière d'apprentissage.
- Plasma : sur 40 transferts de jetons récents, frais au plus 0,00008 XPL ≈ 0,000003 $ (XPL à 0,044 $). **Pas « gratuit » au sens strict dans les blocs mesurés, mais quasi nul.** La doc officielle dit « la plupart des transactions coûtent moins d'un centime » et présente le paiement des frais par un contrat du protocole (paymaster) comme en cours de construction ; la presse parle de transferts d'USDT « gratuits ». → écrire « quasi gratuits », pas « gratuits ».
- Tempo : 0,00016 à 0,00028 $ sur 2 transferts (activité faible) ; doc officielle : plafond ≈ 0,0006 $ pour un transfert standard ; FAQ : « sub-cent fees ».
- Arc : doc officielle, cible de base ≈ 0,001 $ par transfert ERC-20, payée en USDC. (Pas de mesure : point d'accès public introuvable.)
- Stable : aucun transfert de jeton dans les 40 derniers blocs observés (activité quasi nulle). Frais payés en USDT0 ; gratuit seulement si une application paie pour l'utilisateur (« gas waiver », doc officielle), pas une règle générale.

**Les acteurs et ce qui est vraiment nouveau**
- **Tron** (Justin Sun) : frais en TRX/énergie ; le rail historique de l'USDT, surtout dans les pays émergents et sur les plateformes d'échange. Rien de neuf, mais l'habitude.
- **Plasma** (écosystème Tether, Bitfinex, Founders Fund ; jeton XPL ; lancée le 25/09/2025) : frais quasi nuls. Peu de neuf (Tron propose déjà des envois sans TRX via GasFree, payants). Pic à environ 6 Md$ de stablecoins au lancement, venus chercher des récompenses en XPL, aujourd'hui 1,61 Md$ ; XPL ≈ −96 % depuis son plus haut [chiffre de presse : à recouper ou ne pas citer].
- **Stable** (écosystème Tether ; frais en USDT0 ; jeton STABLE de gouvernance) : quasi rien de plus que Plasma ; 0,03 Md$ hébergés.
- **Arc** (Circle ; mainnet le 16/09/2026) : frais en USDC, validateurs institutionnels choisis (« Proof-of-Authority », institutions régulées), finalité en moins d'une seconde, service de change entre stablecoins (StableFX) ; confidentialité annoncée mais **pas encore disponible** (doc : « Planned »). Jeton ARC : 10 Md créés à la genèse ; **prévente qui a rapporté 182 M$ à Circle au T3 2026** (communiqué Circle du 4/11 : « from the ARC token presale ($182 million) »).
- **Tempo** (Stripe et Paradigm ; mainnet le 18/03/2026) : **aucun jeton natif** ; frais payables en n'importe quel stablecoin en dollars, convertis automatiquement (Fee AMM) ; validateurs issus du paiement : Stripe, Visa, Zodia Custody (Standard Chartered), MoneyGram (FAQ, liste partielle). Son stablecoin phare, l'Open USD (OUSD, consortium Open Standard) : « les partenaires reçoivent la totalité des revenus des réserves, moins de petits frais de gestion » (blog Open Standard). → le seul vraiment différent : pas de jeton à spéculer, un modèle tourné vers les entreprises.

**Les émetteurs (ce qui se joue)**
- Un émetteur place les dollars reçus (bons du Trésor) et garde les intérêts ; le détenteur ne touche rien. Tether : profit d'environ 1,5 Md$ au T3 2026 (chiffre de Tether, non audité ; l'attestation BDO porte sur les réserves, pas sur le profit).
- Circle T3 2026 (communiqué officiel) : revenus totaux et revenus des réserves 865 M$, dont revenus des réserves 658 M$ et **182 M$ de prévente ARC** ; coûts de distribution, de transaction et autres **412 M$** (surtout reversés à Coinbase). Sans la prévente, revenus en baisse d'environ 8 % (presse) [à recouper : sinon ne pas citer le −8 %].
- Lecture (analyse CryptoLuciole, à présenter comme telle) :
  - Tether : chaque envoi d'USDT sur Tron paie Tron (en TRX), pas Tether. Plasma et Stable = tenter de reprendre la route sur laquelle roule son produit, et garder l'USDT en usage.
  - Circle : il reverse près de la moitié de ses revenus à ceux qui distribuent l'USDC. Arc = une route à soi pour moins dépendre des distributeurs, et un jeton qui rapporte déjà.
  - Stripe : il ne vit pas des réserves mais des paiements ; il redistribue la rente pour attirer les entreprises.
- Réponse à la question de Marc (« garder la TVL sur leur stablecoin ? ») : oui, c'est le but, mais une chaîne ne crée pas de demande pour un stablecoin, elle change seulement l'endroit où il circule. Les quatre réunies ≈ 3,9 Md$, alors que l'offre totale de stablecoins a perdu 15,7 Md$ en un mois (302,7 → 287,1 Md$, DeFiLlama, 17/10 → 16/11). Le capital venu pour des récompenses repart quand elles baissent (Plasma).

**Argument critique à intégrer (repéré sur X, reformulé)** : la couche de transport risque de devenir un service banal, sans valeur, parce que l'utilisateur s'attache au stablecoin et aux services, pas à la chaîne.

## Termes à définir (encadrés, slug glossaire)
- frais de gas / gas → slug existant `gas`
- paymaster (le protocole paie les frais à la place de l'utilisateur) → `paymaster`
- validateur permissionné / Proof of Authority → `proof-of-authority`
- énergie (Tron) → `energie-tron`
Vérifier dans `site/app/glossaire` ce qui existe déjà.

## Renvois à nos numéros
- Numéro 9 : l'encours des stablecoins recule depuis mai (ÇA BRILLE) → « notre numéro 9 » + lien /numeros/9.
- Numéro 10 : wallets à connexion Google/Apple (si utile, sinon rien).

## Sources (pour la ligne [source])
DeFiLlama (stablecoins par chaîne, frais) ; communiqué Circle T3 2026 ; docs officielles Tempo, Arc, Plasma, Stable, Tron ; blog Open Standard ; mesures CryptoLuciole sur la blockchain (16/11).

## Compléments du 16/11 (après le vérificateur, boucle 1)

**Repères : ce que coûte un transfert sur les chaînes que le lecteur connaît déjà (relevé le 16/11)**
- Solana : frais de base 5 000 lamports par signature = 0,000005 SOL ≈ **0,0004 $** (SOL à 72,4 $, DeFiLlama) ; frais de priorité médians nuls sur 150 créneaux relevés (RPC public).
- Base : un transfert d'USDC relevé : 0,00000038 ETH ≈ **0,0007 $** (ETH à 1 852 $) — un seul transfert, ordre de grandeur.
→ Les frais quasi nuls ne sont PAS une nouveauté des stablechains : Plasma, Tempo, Arc sont dans le même ordre de grandeur que Solana ou Base. Ce qui les différencie est ailleurs.

**Tron avec énergie louée** : location d'environ 65 000 unités d'énergie pour 1 h à 1,37 TRX ≈ 0,42 $ (forum BitcoinTalk, 10/11) ; prix du marché de 30 à 50 sun par unité selon GetBlock (≈ 1,9 à 3,2 TRX, soit ≈ 0,6 à 1 $). → écrire « environ 0,4 à 1 $ avec de l'énergie louée, selon le loueur » (sources commerciales : ordre de grandeur).

**OUSD (corrige le brief initial)** : émis par **Bridge, filiale de Stripe** (émetteur légal ; agrément d'émetteur de monnaie électronique au Luxembourg) ; gouverné par Open Standard, société détenue à parts égales par Coinbase, Mastercard, Shopify, Stripe et Visa ; réserves chez BlackRock, Lead Bank et BNY ; lancé le 30/09/2026 sur Ethereum, Solana, Base et Tempo. Les partenaires reçoivent la totalité des revenus des réserves moins de petits frais de gestion (blog Open Standard). → Stripe EST émetteur (via Bridge) : son choix est de renoncer à la rente au profit des entreprises qui utilisent l'OUSD, pour gagner sur le volume de paiements.

**Circle, le maillon Arc ↔ distributeurs** : les versements à Coinbase sont fixés par contrat (accord de distribution renouvelé jusqu'en 2029), quelle que soit la blockchain où circule l'USDC : Arc ne les réduit PAS mécaniquement. Ne pas écrire « Arc pour moins dépendre de Coinbase ». Lecture sourcée : les revenus des réserves de Circle baissent avec les taux (658 M$ au T3 2026, rendement des réserves 3,54 %, communiqué Circle) ; Arc lui apporte des revenus qui ne dépendent pas des taux de la Fed : la prévente du jeton (182 M$, ponctuelle), des services comme StableFX, et une place directe auprès des institutions et des paiements branchés sur sa chaîne.

**Tempo, validateurs** : liste fermée de partenaires choisis à ce stade (Stripe, Visa, Zodia/Standard Chartered, MoneyGram), comme Arc → la liste fermée n'est PAS une rupture propre à Tempo. Ce qui est propre à Tempo : pas de jeton, et frais payables avec le stablecoin de n'importe quel émetteur (route « neutre »), quand Arc fait payer en USDC et Stable en USDT0.

**Tron** : le rail historique de l'USDT (l'USDT existe depuis 2014, Tron depuis 2018) ; ne pas écrire « lancée bien avant qu'on parle de stablecoins ».
