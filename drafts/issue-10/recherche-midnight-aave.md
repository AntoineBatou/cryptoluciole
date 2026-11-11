# Recherche SOUS LA LOUPE n°10 : prêt à taux fixe on-chain, Morpho Midnight vs Aave

Date de la recherche : 2026-11-10 (données API relevées vers 15:00 UTC). Pas de conseil d'investissement.

Légende : **[ÉTABLI]** = source primaire (doc, GitHub, whitepaper, API on-chain/DeFiLlama) lue directement. **[ANNONCÉ]** = déclaré par une des parties ou par la presse, non vérifiable on-chain. **[NON TROUVÉ]** = cherché, absent. **[INFÉRENCE]** = déduction de ma part, à ne pas citer comme fait.

---

## 0. Ce qu'il faut retenir (10 lignes)

1. Midnight = protocole de prêt **à taux fixe et à échéance fixe** de Morpho. Lancé sur Base le **21/07/2026**, étendu à Ethereum le **08/09/2026**. Contrats **immutables** (ni upgrade ni pause).
2. Ici, **pas de formule de taux** : le taux est le **prix d'une obligation zéro-coupon** (prêter à 0,95 pour recevoir 1,00 à l'échéance). Des « makers » signent des offres hors chaîne, des « takers » les exécutent on-chain.
3. DeFiLlama (10/11/2026) : **TVL 165,6 M$** (collatéral déposé), **encours emprunté ≈ 92,1 M$**, dont ~94 % sur Ethereum. Mais l'encours est **très concentré** : ~66 M$ sur les marchés USDC à échéance 25/12/2026 sur Ethereum.
4. Taux observés dans les carnets (Ethereum, USDC, 17 à 45 jours) : **emprunteur ~4,2-4,8 % APR**, **prêteur ~4,0-4,3 % APR**. À comparer à Aave v3 Ethereum USDC : emprunt variable **4,45 % APY**, dépôt **3,73 %** (même jour).
5. Les limites du modèle sont écrites par Morpho lui-même : complexité, offres jamais exécutées, **sortie anticipée dépendante de la demande**.
6. **Aave n'a aujourd'hui aucun produit à taux fixe réel** : le « stable rate » a été désactivé en nov. 2023 après un bug critique, puis supprimé du code. Le rachat d'Avon (06/11/2026) est une **intention** sans calendrier ni produit.
7. Attention aux articles de presse qui écrivent « Aave a ajouté le taux fixe » : c'est **faux ou non étayé** (voir 3.5).
8. Pour un particulier : c'est faisable en direct via l'app Morpho (markets.morpho.org/fixed), **mais** je n'ai pas pu charger l'interface ; les montants minimums et le parcours exact sont **[NON TROUVÉ]**.
9. Niveau de risque proposé : **🟡 Moyen** (voir 5).
10. Une donnée manque pour le Coinbase : **les taux proposés aux clients ne sont pas publics** (Coinbase a refusé de les communiquer).

---

## 1. Morpho Midnight : le mécanisme (doc officielle)

### 1.1 Sources lues
- Doc concept : https://docs.morpho.org/learn/concepts/midnight/ (lue 2026-11-10)
- Doc offres : https://docs.morpho.org/learn/concepts/midnight/offers/ (2026-11-10)
- Doc liquidations : https://docs.morpho.org/learn/concepts/midnight/liquidations/ (2026-11-10)
- Doc dev : https://docs.morpho.org/developers/midnight/get-started/ (2026-11-10)
- Doc API : https://docs.morpho.org/developers/api/morpho-midnight/ (2026-11-10)
- Whitepaper, **mai 2026**, 11 pages, 8 auteurs de la Morpho Association (dont Paul Frambot, Matthieu Lesbre) : https://morpho.org/whitepapers/midnight-whitepaper.pdf (texte extrait localement avec pdftotext)
- GitHub : https://github.com/morpho-org/midnight (README + dossier `audits`)
- Blog « Securing Morpho Midnight » : https://morpho.org/blog/securing-morpho-midnight
- Blog « Now Live: Morpho Midnight & New Markets App » : https://morpho.org/blog/now-live-morpho-midnight
- Blog « Connecting Morpho Vaults to Morpho Midnight » : https://morpho.org/blog/connecting-morpho-vaults-to-midnight
- Blog « How onchain credit is evolving with offer-based markets » : https://morpho.org/blog/how-onchain-credit-is-evolving-with-offer-based-markets

### 1.2 Le principe, étape par étape [ÉTABLI, whitepaper §2-3 et doc]
- **Un marché = 1 actif prêté + 1 échéance + un jeu de collatéraux** (1 à 128), **isolé et immutable** ; création **sans permission**. Les paramètres ne changent jamais après création (changer un paramètre = nouvel ID de marché).
- Les positions sont comptées en **unités**. **1 unité de dette** = obligation de rembourser 1 token à l'échéance. **1 unité de crédit** = créance sur 1 token remboursé. Prêter = **acheter** des unités de crédit ; emprunter = **vendre** des unités (donc s'endetter).
- **Le taux = le prix.** Pour un prix P d'unité, le taux simple sur la durée restante est `r = 1/P − 1`. Exemple de la doc : acheter à 0,95 donne ~5,26 % sur la période. Le contrat **ne stocke aucun taux**, seulement des prix d'exécution.
- Les créances sont **fongibles à l'intérieur d'un marché** : pas de relation bilatérale prêteur-emprunteur. Les échéances sont des **dates calendaires fixes**, pas des durées glissantes (des positions ouvertes à des dates différentes mais de même échéance sont interchangeables).
- Le taux est « verrouillé » au moment où l'exécution est réglée (« Rates are locked at the moment a take settles », doc dev).
- Depuis le **09/10/2026** Morpho affiche les taux de Midnight en **APR** (avant : APY). Affichage seulement, pas le règlement. Blue et les Vaults restent en APY : ne pas comparer sans convertir (doc concept).

### 1.3 Offres, takers, solveurs, intentions [ÉTABLI]
- Un **maker** publie une **offre** = prix + taille max, sur un marché. Il la **signe hors chaîne** ; Midnight **ne diffuse pas** les offres : elles circulent par des canaux externes (mempool d'offres, RFQ, cotations directes…).
- Un **taker** soumet l'offre au contrat ; règlement **atomique** ; exécutions **partielles** possibles ; une offre peut être consommée par plusieurs takers.
- Chaque offre a un **ratifier** (contrat de validation, en général : vérifie la signature du maker).
- **Callbacks** : le maker peut ne sortir les fonds qu'au moment de l'exécution. Un prêteur peut donc garder son capital **dans Morpho Blue (taux variable)** tant que son offre à taux fixe n'est pas prise. Les callbacks servent aussi au **roll** (rembourser l'échéance courante et entrer dans la suivante en une transaction).
- **Offres multi-marchés** : un budget partagé (« consumption group ») entre plusieurs offres ; une signature peut ratifier une racine de Merkle d'offres.
- **Routing (≈ « solveurs »)** : la recherche des meilleures offres exécutables est faite **hors protocole, par n'importe qui** (whitepaper §3.4). Le mot « solver » n'est pas utilisé dans la doc ; l'équivalent est « router ». Le protocole n'a **ni file d'ordres, ni priorité prix-temps, ni réservation de capital** : « fondamentalement différent d'un carnet d'ordres central ».
- **Qui sont les makers en pratique** : [NON TROUVÉ] (la doc définit « maker » comme un rôle d'exécution, pas une catégorie d'acteurs).
- **Grille de prix (ticks)** : pas de rate-sniping de 0,0001 % ; chaque tick = +2 % de rendement relatif au départ (réglable à 1 % ou 0,5 % par un rôle `tickSpacingSetter`).

### 1.4 Échéance, défaut, liquidation [ÉTABLI, doc liquidations + whitepaper §4]
- **Avant l'échéance** : liquidation seulement si la dette dépasse `maxDebt` (somme collatéral × prix oracle × LLTV). Plafonnée par un « close factor » (RCF) pour ne pas liquider toute la position pour un petit dépassement.
- **Après l'échéance** : toute dette impayée est liquidable **même si le borrower est sain** (pour permettre aux prêteurs de récupérer leur argent). L'incitation du liquidateur démarre à 1,0 (aucun bonus) et monte **linéairement jusqu'au max sur 60 minutes** (enchère hollandaise).
- Bonus max : `LIFmax = 1 / (1 − curseur × (1 − LLTV))`, curseur actuel **0,3**. Exemple de la doc : LLTV 86 % -> bonus max ~4,4 %.
- **Pas de pénalité de retard, pas de taux de pénalité, pas de prolongation automatique** : la doc ne mentionne aucun de ces mécanismes (la doc liquidations le dit explicitement : aucune pénalité mentionnée). La « prolongation » est un **roll volontaire** via callback.
- **Mauvaise dette** : si même en saisissant tout le collatéral il reste de la dette, la perte est **enregistrée immédiatement** et **répartie au prorata sur les prêteurs du marché** (« les tokens correspondants sont perdus »). Cela n'affecte pas les autres marchés. Le whitepaper souligne que c'est plus rapide que sur Blue (fenêtre de sortie des prêteurs « informés » réduite).
- LLTV autorisés (liste « ajout seulement », jamais retirés) : 38,5 / 62,5 / 77 / 86 / 91,5 / 94,5 / 96,5 / 98 / 100 %. Activés sur Ethereum, Base, Tempo, Robinhood Chain, Arc.

### 1.5 Remboursement anticipé et sortie du prêteur [ÉTABLI]
- **Emprunteur** : peut rembourser **à tout moment** (1 token = 1 unité de dette) ou **racheter des unités** à des offres de vente avant l'échéance.
- **Prêteur** : peut **vendre ses unités de crédit** en prenant une offre d'achat (bid). Il n'existe pas de place de marché secondaire distincte : la sortie se fait **dans le même carnet d'offres**, au prix qu'un maker accepte (peut être décoté).
- Sinon, rachat 1:1 à l'échéance, net de frais et de pertes, **limité aux tokens réellement revenus** dans le marché (remboursements ou liquidations).
- Après l'échéance, on peut continuer à acheter/vendre des unités, mais **pas augmenter sa dette**.

### 1.6 Collatéraux, oracles, frais [ÉTABLI]
- Collatéraux : fixés à la création du marché (1 à 128 actifs, chacun avec son oracle, LLTV, curseur). Les prêteurs sont exposés à **tout l'ensemble accepté**, pas seulement à ce que les emprunteurs ont posé.
- Oracles : un oracle **par collatéral**, spécifié à la création. La doc ne décrit pas leur conception. (Sujet réservé à un dossier.)
- **Frais** (plafonds immuables) : frais de règlement payé par le taker, variable selon la durée restante, plafonné à **50 pb annualisés** ; frais continu sur le crédit des prêteurs plafonné à **1 %/an** (whitepaper §7). Dans l'API (10/11/2026), les marchés lus montraient **des frais à 0** (`current_settlement_fee_cbp` = 0, `continuous_fee_rate` = 0). [ÉTABLI sur l'échantillon lu ; je n'ai pas vérifié les 186 marchés actifs un par un.]
- **Gates** (optionnels, fixes à la création) : `enter gate` (qui peut augmenter crédit/dette) et `liquidator gate`. Un gate ne peut pas bloquer les sorties. Permet des marchés avec KYC.

### 1.7 Rapport avec Morpho Blue et Vaults V2 [ÉTABLI / ANNONCÉ]
- Midnight reprend la philosophie de Blue (marchés isolés, immutables, sans permission), mais remplace la **formule de taux selon l'utilisation** par des **offres à prix**.
- **Lien actuel** : callbacks (le capital d'un prêteur peut rester dans Blue en attendant). [ÉTABLI]
- **Vaults V2 -> Midnight** : l'**adaptateur Midnight n'est PAS encore en ligne**. Annoncé « Q4 2026 » (blog Morpho « Connecting Morpho Vaults to Midnight »). Les Vaults (~5 Md$) ne peuvent aujourd'hui allouer qu'à Blue. [ANNONCÉ] Limites prévues : plafonds d'exposition, plafond au-delà de 90 jours, interdiction par défaut de vendre sous la valeur amortie, valorisation à la valeur d'échéance actualisée au taux d'entrée.
- Morpho défend l'idée de bâtir les vaults variables **sur** des marchés à taux fixe plutôt que l'inverse : https://morpho.org/blog/fixed-rates-are-how-defi-moves-beyond-crypto/ (sans date affichée).

### 1.8 Les limites du modèle à offres, selon Morpho [ÉTABLI]
Source : https://morpho.org/blog/how-onchain-credit-is-evolving-with-offer-based-markets (**la page n'affiche pas de date** ; je n'ai pas pu confirmer qu'il s'agit du billet « du 30/09 » mentionné dans la demande. Il apparaît dans l'index du blog parmi les billets de septembre 2026 ; à vérifier.)
- Complexité : « That control is valuable for sophisticated participants, but it is additional complexity for passive users » (taux, échéance, collatéral, et « que se passe-t-il à l'échéance » sont à choisir).
- Exécution incertaine : « Posting an offer does not mean anyone will take it » ; les callbacks « do not guarantee a match ».
- Sortie anticipée : « Participants can exit positions early, but that depends on available secondary market demand. »
- Autre aveu dans « Fixed rates are how DeFi moves beyond crypto » : « Fixed-rate markets only work if sophisticated actors show up to trade them. »
- Dans le whitepaper : les prix proches de 1 s'écrasent sur la grille minimale (le taux devient peu pertinent près de l'échéance).

---

## 2. Midnight : état actuel en chiffres

### 2.1 Lancement, chaînes
- **Base : 21/07/2026** (The Block, https://www.theblock.co/news/defi/2026-07-21-morpho-midnight-fixed-rate-lending-protocol-base-onchain-credit-markets-409062 ; DeFiLlama `listedAt` = 22/07/2026). Lancement avec **un seul marché cbBTC/USDC, un réseau, quelques échéances** (blog « Now Live »). [ÉTABLI]
- **Ethereum : 08/09/2026** (KuCoin News / CryptoBriefing, secondaire : https://www.kucoin.com/news/flash/morpho-launches-midnight-fixed-rate-lending-on-ethereum ; à croiser avec la source primaire). Marchés de départ USDC/cbBTC et USDC/WBTC. [ANNONCÉ]
- Chaînes autorisées pour les LLTV et l'API : Ethereum, Base, Arc, Robinhood Chain, Tempo (doc API). **Positions actives constatées via DeFiLlama : Ethereum + Base seulement.**
- Dans le Midnight actuel, DeFiLlama affiche slug **`morpho-midnight`** (adresse Base listée : `0x58D97B57BB95320F9a05dC918Aef65434969c2B2` ; sur Ethereum l'API Morpho indique le contrat `0x471686c42792f93528b000bef54bc10e3aa2045f`).

### 2.2 TVL et encours (DeFiLlama, 10/11/2026) [ÉTABLI]
Sources : https://api.llama.fi/protocol/morpho-midnight et https://api.llama.fi/tvl/morpho-midnight

| Mesure | Valeur |
|---|---|
| TVL totale (méthodologie DeFiLlama : **collatéral détenu** par le contrat) | **165,6 M$** |
| dont Ethereum / Base | 156,6 M$ / 9,0 M$ |
| Encours emprunté (« borrowed » = totalUnits − withdrawable) | **92,1 M$** (Ethereum 86,1 M$ / Base 6,0 M$) |
| Contexte : TVL Morpho Blue (même jour) | 10,7 Md$ |

Trajectoire de la TVL DeFiLlama : ~0,9 M$ (22/07) -> ~4 M$ (août-sept) -> ~10,6 M$ (20/10) -> **~121 M$ (30/10)** -> 151,6 M$ (06/11) -> 165,6 M$ (10/11). **Le saut du 20 au 30/10 (×11) n'est pas expliqué dans mes sources** [NON TROUVÉ : cause du saut ; piste : gros emprunteurs/collatéral arrivés fin octobre, à confirmer]. Un article de CryptoBriefing du 23/10 cite « plus de 100 M$ de dépôts » selon Morpho mais **19,5 M$ de TVL** selon DeFiLlama au 22/10 (https://cryptobriefing.com/morpho-midnight-100-million-deposits/) : les deux mesures ne comptent pas la même chose (les offres ne bloquent pas de capital).

Autres chiffres annoncés : ~30 M$ de dépôts à la date du 22/09 (The Block, article Coinbase). [ANNONCÉ]

### 2.3 Les marchés actifs (API publique Morpho, accessible SANS clé) [ÉTABLI]
- API : `https://api.morpho.org/v0/midnight/markets?chain_ids=1&limit=20` (cursor pour paginer ; **1 seule chaîne par appel, 20 max par page**) et `/books?chain_ids=1&limit=20`. Détail : https://docs.morpho.org/developers/api/morpho-midnight/
- Comptage relevé le 10/11/2026 : Ethereum **1 610 marchés créés**, 50 avec une position non nulle, 1 189 « listed » ; Base **1 302 créés**, 117 avec position, 1 081 listed. (Des centaines de marchés vides : création sans permission, une combinaison actif x collatéraux x échéance = un marché.)
- Marchés avec au moins une offre dans le carnet : **54 sur Ethereum, 132 sur Base** (parmi 710 / 238 carnets lus).
- **Échéances** : dernier vendredi du mois à 15:00 UTC : 27/11/2026, 25/12/2026, 26/03/2027, etc. (cohérent avec la définition « End of Month = dernier vendredi » de Coinbase).
- Actif prêté dominant : **USDC** (et un marché EURC sur Base). Collatéraux : cbBTC, WBTC, WETH, wstETH, weETH, PT-tokens (Pendle), et quelques tokens Base (AERO, cbXRP, cbHYPE, cbZEC, mGLO…). LLTV typiques : 86 % pour BTC/ETH ; 98 % sur l'USDC listé en collatéral (cf. paires USDC/USDC, qui servent probablement la mécanique multi-collatéral [INFÉRENCE]).

**Où est l'encours (somme des « total_units » USDC/EURC, 10/11)** : Ethereum ≈ 85,3 M$ (dont **65,9 M$** sur l'échéance 25/12/2026 et 17,0 M$ sur le 27/11/2026) ; Base ≈ 5,8 M$ (3,4 M$ le 27/11, 2,2 M$ le 25/12). Cela recoupe les 92,1 M$ « borrowed » de DeFiLlama. **Top marchés Ethereum (USDC) par encours** : USDC/cbBTC 25/12 : 37,2 M$ ; USDC/weETH 25/12 : 19,4 M$ ; USDC/weETH 27/11 : 8,8 M$ ; USDC/cbBTC 27/11 : 5,5 M$ ; USDC/WBTC 25/12 : 5,2 M$ ; USDC/wstETH 25/12 : 4,0 M$.

**Carnets : taux et profondeur (USDC, Ethereum, relevé du 10/11/2026)**
Convention : « ask » = vente d'unités (côté emprunteur ; **un prêteur le prend** et reçoit `1/P−1`) ; « bid » = achat d'unités (côté prêteur ; **un emprunteur le prend** et paie `1/P−1`). APR = `(1/P−1)/T`. Profondeur = somme des **3 premiers niveaux** seulement (c'est ce que l'API renvoie).

| Marché (Ethereum, prêt USDC) | Échéance | Reste | Meilleur ask (le prêteur reçoit) | Meilleur bid (l'emprunteur paie) |
|---|---|---|---|---|
| wstETH + USDC | 25/12/2026 | 45 j | 4,27 % APR (≈ 4,0 M$) | 4,81 % APR (≈ 6,5 M$) |
| weETH + USDC | 27/11/2026 | 17 j | 4,00 % (≈ 3,8 M$) | 4,79 % (≈ 6,5 M$) |
| cbBTC + USDC | 27/11/2026 | 17 j | 4,08 % (0,28 M$) | 4,25 % (≈ 6,2 M$) |
| cbBTC + USDC | 25/12/2026 | 45 j | pas d'ask | 4,27 % (≈ 6,5 M$) |
| cbBTC + USDC | 26/03/2027 | 136 j | pas d'ask | 5,27 % (≈ 6,0 M$) |
| WETH + USDC | 26/03/2027 | 136 j | pas d'ask | 5,27 % (≈ 6,0 M$) |

Sur Base (USDC/cbBTC 25/12 : ask 5,42 %, bid 5,53 % ; profondeur 78 k$/60 k$) les chiffres sont beaucoup plus petits. Des bids à **~6,0-6,4 % APR avec ~21,9 M$ de profondeur** apparaissent sur plusieurs marchés Base (WETH/cbBTC, échéances 27/11/2026 à 26/03/2027) avec une profondeur quasi identique : ce peut être **un même budget d'un maker partagé entre marchés** (whitepaper §3.3), donc **non additionnable** [INFÉRENCE]. Quelques bids affichent **13-17 % APR** sur ~0,5 M$ : outliers (offres agressives ou périmées), **non utilisables comme taux de marché** [INFÉRENCE]. Certains marchés ont des ask à 13 % avec 25 $ de profondeur : bruit.

À retenir : **côté ask (prêteur), la profondeur est faible (0,3 à 4 M$)** ; côté bid, plusieurs millions. Le spread bid/ask est de **0,2 à 0,8 point d'APR**.

Cote marchés / volumes : **volume d'échange (trades) [NON TROUVÉ]** : l'endpoint `transactions` existe (`/markets/{id}/transactions`) mais je ne l'ai pas agrégé ; DeFiLlama n'expose pas le volume de Midnight dans ce que j'ai lu.

### 2.4 Cas d'usage : Coinbase [ÉTABLI/ANNONCÉ]
- Annonce **22/09/2026**. Blog Morpho : https://morpho.org/blog/coinbase-launches-fixed-rate-crypto-backed-loans-powered-by-morpho-midnight ; The Block : https://www.theblock.co/news/defi/2026-09-22-coinbase-fixed-rate-bitcoin-loans-morpho-midnight-416050
- Produit : « emprunter de l'USDC contre son BTC, avec taux et date de remboursement fixés dès le départ ». Coinbase garde l'expérience utilisateur, Morpho fournit l'infrastructure, **Base** sert de couche de règlement.
- **Durées** (porte-parole Coinbase via The Block) : fin du mois en cours ou fin du mois suivant ; « End of Month » = **dernier vendredi du mois**. En cas de non-remboursement, « le prêteur a un droit sur le collatéral ».
- **Taux : NON PUBLICS.** Coinbase « a refusé de partager les taux proposés aux emprunteurs » (The Block). Les taux sont « fixés par l'offre et la demande sur un carnet on-chain ».
- Collatéral : Coinbase convertit le BTC en **cbBTC** et le place dans un contrat Morpho sur Base (relais de presse : https://crypto.news/coinbase-adds-fixed-rate-usdc-loans-backed-by-cbbtc/ ; je n'ai pas relu cet article moi-même, [ANNONCÉ] secondaire).
- Éligibilité : « utilisateurs américains éligibles hors New York » dans un relais de presse secondaire [ANNONCÉ, non confirmé par la source primaire]. Plafond « 5 M$ » cité par un seul média (Crypto Daily) : **non confirmé**.
- Encours variable Coinbase/Morpho Blue : « plus de 1,4 Md$ de prêts pour ~3 Md$ de collatéral » (Coinbase/Morpho) ; **part du taux fixe : [NON TROUVÉ]**.
- Autres utilisateurs de Midnight cités : **Tenor** (plateforme de crédit « construite exclusivement sur Midnight », blog « It's After Midnight » https://morpho.org/blog/morpho-effect-july-2026-its-after-midnight). Robinhood et Uniswap Earn sont cités comme propulsés par Morpho mais **pas explicitement par Midnight**.

### 2.5 Sécurité [ÉTABLI sauf mention]
- **Audits** (dossier `audits` du repo GitHub, dates des noms de fichier) : **Spearbit** (07/04, 13/05, 02/07/2026, + modules suivants), **Stermi** (19/05), **Blackthorn** (02/07, puis 03/08, 02/09, 15/09, 24/09), **Trust Security** (02/07, 02/09, 24/09). **Compétition publique Cantina** (29/05/2026, « jusqu'à 400 000 $ de prix » d'après le blog « Securing Morpho Midnight »). Les audits récents (03/08 à 24/09) portent sur des **modules périphériques** (blue-buy-callback, fallback-rolling, whitelist-enter-gate, rate-ratifier). Source : https://github.com/morpho-org/midnight/tree/main/audits (liste de 15 fichiers vue ; la page indique « View all files », il pourrait y en avoir plus).
- **Vérification formelle** : Certora, « en continu avec l'équipe » ; specs dans `certora/` du repo.
- **Admin / upgradabilité** : « Once deployed, no one can upgrade, pause, or alter them » (blog sécurité). Contrats **non upgradables**. La gouvernance (détenteurs MORPHO) peut seulement ajouter des LLTV/curseurs et activer les frais **dans les plafonds immuables**. Des rôles existent dans le whitepaper (`tickSpacingSetter`, rôle de réglage des frais, rôle de réception des frais) : **qui les détient (multisig, timelock) : [NON TROUVÉ]**.
- **Bug bounty permanent : [NON TROUVÉ]** (seul chiffre trouvé : la compétition Cantina). À vérifier sur https://immunefi.com ou la page sécurité de Morpho.
- Licence : BUSL-1.1 sur `src/Midnight.sol`, MIT pour le reste (README).
- Anomalie à signaler au rédacteur : DeFiLlama liste **un seul audit** (`audit_links`) alors que le dépôt en contient 15.

---

## 3. Aave et le taux fixe

### 3.1 Rachat d'Avon [ÉTABLI sur la nature de l'annonce, rien sur les chiffres d'Avon]
- Annonce primaire : https://aave.com/blog/avon-acquisition (**06/11/2026**, lue le 10/11).
- Ce qu'Aave Labs a acquis : **l'équipe et la technologie** d'Avon (protocoles de prêt à taux fixe **et** à taux flottant, **carnet d'ordres on-chain**, domaines et actifs associés). Conditions financières **non divulguées**.
- Équipe : Prince Sinha (fondateur) et Ayush Kaul rejoignent l'ingénierie ; Omar el-Ashaal le développement commercial.
- **Aucun calendrier de produit** ; **l'annonce ne mentionne pas Aave v4**. Citation de Stani Kulechov : offrir « les produits que les utilisateurs utilisent déjà, y compris les taux fixes ». Aave y cite « plus de 33 Md$ de dépôts et 13 Md$ de prêts actifs » (la section « À propos d'Aave Labs » dit « plus de 30 Md$ » de dépôts nets : deux chiffres différents dans la même page).
- Produits d'Aave Labs listés : Aave App, Aave Pro, Aave Kit, Aave Horizon.
- **Ce qu'était Avon** : petit. Son seul produit visible sur DeFiLlama est **`avon-megavault`, 10 346 $ de TVL sur MegaETH** (https://api.llama.fi/tvl/avon-megavault, 10/11/2026). Autre descriptif trouvé (X) : prêt avec pools concentrés + carnet d'ordres unifié sur MegaETH. Sources hétérogènes sur « taux fixe vs variable » : le communiqué d'Aave dit les deux. **Chiffres de volume : [NON TROUVÉ].** => Le rachat est un **recrutement / acquisition de technologie**, pas l'acquisition d'un marché existant.
- Presse : The Block (https://cryptorank.io/insights/deals/avon-m-a-2026-11-06 en relais), NewsBTC, TokenPost. Une presse prudente rappelle que l'annonce ne prouve pas que le design ait été audité ni qu'il soit accessible au public.

### 3.2 Le « stable rate » d'Aave : histoire [ÉTABLI en grande partie]
- **V1 (2021)** : proposition de gouvernance n°7, exécutée le **08/04/2021**, désactive les nouveaux emprunts « stable » sur v1 (V2 concentrait déjà la liquidité ; l'oracle de taux v1 donnait des taux trop bas). https://governance-v2.aave.com/governance/proposal/7/
- **V2/V3** : le « stable rate » n'était **pas un vrai taux fixe** : c'était un taux **rebalançable** (il pouvait être réajusté par le protocole), avec une prime par rapport au variable. V3 a abandonné l'oracle de taux dédié (Aave V3 Technical Paper).
- **Nov. 2023** : un chercheur white-hat signale via **Immunefi** (4 nov. 2023) un **bug critique** lié au taux stable. Gel des marchés concernés, puis proposition de gouvernance **358** : **désactivation des emprunts stables sur tous les actifs, toutes les chaînes**, exécutée le **09/11/2023**. https://governance-v2.aave.com/governance/proposal/358/
- **2024** : proposition BGD « Full deprecation of stable rate » (basculer les positions résiduelles en variable) : https://governance.aave.com/t/bgd-full-deprecation-of-stable-rate/16473 (page **bloquée en 403** pour mon outil ; résumé via moteur de recherche). Aave v3.1 a ajouté `swapToVariable()` permissionless ; **v3.2 a supprimé la logique stable du code** (billet BGD). **Date d'exécution et nombre de positions basculées : [NON TROUVÉ].**
- Raison de la suppression : **bug critique** (déclencheur), mais aussi un mécanisme **peu utilisé et complexe** (rebalancing). Je n'ai trouvé **aucun exploit ayant coûté des fonds** : le bug a été signalé en bug bounty. Ne pas écrire « exploit » dans la newsletter.
- Conclusion : **« taux fixe » chez Aave aujourd'hui n'existe pas.**

### 3.3 GHO : taux « fixe » à nuancer [ANNONCÉ / ÉTABLI partiel]
- La page https://aave.com/gho annonce « Fixed rate, lower than USDC or USDT » et précise que **l'Aave DAO gère les taux** : c'est un **taux fixé par la gouvernance, modifiable**, pas un taux verrouillé pour une durée (pas d'échéance).
- Un rapport d'octobre 2026 cité par un guide indique 4,5 % pour le GHO Core (secondaire, [ANNONCÉ] ; je ne l'ai pas vérifié à la source). Dans DeFiLlama, le GHO affiche 3,25 % à 4,5 % selon les pools d'Aave v3 Ethereum (10/11).
- À qualifier dans la newsletter : « taux administré », pas « taux fixe à échéance ».

### 3.4 Aave v4 (hub and spoke) et taux fixe [ÉTABLI sur le déploiement, NON TROUVÉ sur le taux fixe]
- Changelog Aave (https://aave.com/docs/resources/changelog) : **v4 mainnet Ethereum le 30/03/2026** (3 hubs : Core, Plus, Prime ; 11 spokes), USDG 25/06, **Avalanche 15/07**, **Arc 16/09**, **Base 07/10/2026** (hub Actions tokenisées, spoke « MAG7 »). V3.7 en avril-mai 2026.
- DeFiLlama (10/11/2026) : Aave v4 **TVL 795 M$**, encours emprunté ~519 M$ ; Aave v3 TVL ~15,1 Md$, encours ~11,2 Md$ (https://api.llama.fi/protocol/aave-v4, `/protocol/aave-v3`).
- **Fixed rate dans v4 / changelog / docs : [NON TROUVÉ].** Le changelog ne contient **aucune** entrée « fixed-rate », « term » ou « Avon ». Des articles de blog analysent que le modèle hub and spoke « pourrait » héberger un spoke à taux fixe : ce sont des **cadrages d'analystes, pas une annonce**.
- Piège de presse : TokenPost (09/11/2026, https://www.tokenpost.com/news/technology/52082) titre « Aave Adds Fixed-Rate Lending » et parle de « rollout » sans source primaire ni détail : **ne pas relayer** ; le communiqué primaire parle d'**acquisition d'équipe**, sans lancement.

### 3.5 Taux Aave aujourd'hui (DeFiLlama, 10/11/2026 ~14:50 UTC) [ÉTABLI]
Sources : https://yields.llama.fi/pools et https://yields.llama.fi/lendBorrow (pool id `aa70268e-4b52-42bf-a116-608b370f9501`).

| Marché | Dépôt (APY) | Emprunt variable (APY) | Encours emprunté |
|---|---|---|---|
| Aave v3 Ethereum USDC | 3,73 % | **4,45 %** | ~2,65 Md$ |
| Aave v3 Ethereum USDT | 5,24 % | 6,13 % | ~2,38 Md$ |
| Aave v3 Base USDC | 5,16 % | 6,26 % | ~0,18 Md$ |
| Aave v3 Ethereum GHO (pool principal) | 0,5-1,96 % | 3,25-3,78 % | |

Comparaison honnête avec Midnight : Midnight cote en **APR** (non composé) pour 17 à 136 jours ; Aave en **APY** variable instantané. Un 4,45 % APY correspond à ~4,36 % APR. Sur Ethereum USDC, les taux **fixes** côté emprunteur (4,2-4,8 % APR) sont donc **dans la même zone que le variable d'Aave**, un peu au-dessus à 45 jours (4,8 %) : le fixe n'est pas « moins cher », il achète de la **visibilité**. Côté prêteur : 4,0-4,3 % APR (ask) contre 3,73 % de dépôt variable sur Aave, mais à **échéance fixe** et avec une profondeur limitée à ~4 M$.

---

## 4. Comparatif

| | **Morpho Midnight** | **Aave aujourd'hui** | **Aave annoncé** | Term Finance | Pendle (côté prêteur) |
|---|---|---|---|---|---|
| Mécanisme | Offres signées, prix = taux, unités de crédit/dette zéro-coupon, marchés isolés immutables | Pool variable (formule de taux selon utilisation). Pas de taux fixe. GHO : taux administré par la DAO | Rachat de l'équipe Avon (carnet d'ordres, fixe + flottant) ; aucun produit annoncé | Enchères à échéance (taux fixe par terme), dépôts et emprunts collatéralisés | Séparation principal/rendement : le **PT** s'achète à une décote = **taux fixe pour le prêteur** ; pas de taux fixe pour l'emprunteur |
| Statut | **Live** depuis 21/07/2026 (Base), 08/09 (Ethereum) | **Live** (v3, v4) | **Annoncé 06/11/2026**, pas de date | Live, mais en **forte baisse** (TVL DeFiLlama `termfinance-lend` ~3,4 M$) | **Live**, TVL `pendle-v2` ~1,0 Md$ |
| Encours / TVL | TVL 165,6 M$ ; emprunté ~92 M$ | v3 : TVL 15,1 Md$ / emprunté 11,2 Md$ ; v4 : 795 M$ / ~519 M$ | n/a (Avon : 10 k$ de TVL sur MegaETH) | 3,4 M$ (+ vaults 1,7 M$) | ~1,0 Md$ (TVL) |
| Taux typiques | 4-6 % APR (USDC, 17-136 j) ; outliers hors marché | 4,45 % (emprunt) / 3,73 % (dépôt) variable, USDC Ethereum | n/a | Page app : lend 8,50 % sur un marché PT-strUSD (échéance 26/11/2026) [ANNONCÉ, snapshot non daté] | Variable selon le sous-jacent et l'échéance (non relevé) |
| Durées | Fin de mois (dernier vendredi) : 17 à 136 j dans les carnets ; jusqu'à 360 j dans la grille de frais | Aucune (variable) | n/a | Termes courts (semaines-mois) [ANNONCÉ] | Échéances fixes par marché |
| Qui l'utilise | **Coinbase** (BTC -> USDC), Tenor, utilisateurs DeFi via app Morpho | Particuliers, institutions, Horizon (RWA) | n/a | Peu (TVL en baisse) | Chasseurs de rendement, stratégies sur actifs à rendement |
| Statut des alternatives | Notional V3 a **cessé ses opérations** (fin 2025, mauvaise dette liée à une vulnérabilité de Balancer) ; **TermMax** actif mais petit (TVL DeFiLlama ~0,68 M$ au 10/11 ; une autre page cite 26,7 M$ : **sources incohérentes**). | | | | |

Sources : DeFiLlama `https://api.llama.fi/protocols` (10/11/2026) ; Notional V3 : https://phemex.com/news/article/notional-v3-to-shut-down-on-mainnet-and-arbitrum-amid-bad-debt-issues-33221 ; Term : https://defillama.com/protocol/termfinance (snapshot cité dans la recherche : 5,44 M$ le 18/10/2026 vs 19,6 M$ fin janvier 2026).

Observation : le taux fixe on-chain a un historique difficile (Notional V3 arrêté, Term en forte baisse). Le whitepaper de Midnight dit lui-même : les protocoles précédents scindaient la liquidité en un pool par échéance, ce qui laissait les marchés minces (« most died » dans l'interview de Paul Frambot relayée par Simon Taylor sur X, https://x.com/sytaylor/status/2079554350343479528).

---

## 5. Risques et échelle de risque proposée

### 5.1 Risques propres au taux fixe on-chain
1. **Sortie anticipée du prêteur** : possible, mais **au prix du bid** (donc potentiellement décoté), et **dépend de la demande** (aveu de Morpho). Profondeur réelle côté prêteur observée : 0,3-4 M$ par marché (ask) ; plus côté bid. En cas de stress, la décote peut être forte.
2. **Remboursement limité à ce qui est revenu** : avant l'échéance, un prêteur ne peut retirer que ce qui a été remboursé ou liquidé (doc dev).
3. **Refinancement à l'échéance** : l'emprunteur doit disposer de l'USDC à la date ; sinon liquidation post-échéance (bonus qui monte jusqu'à ~4,4 % sur 60 min à LLTV 86 %). Le **roll** n'est pas garanti : il faut une offre en face à l'échéance suivante. **Le taux fixe ne protège pas du risque de prix du collatéral** (le collatéral reste liquidable avant l'échéance).
4. **Profondeur des offres / concentration** : ~77 % de l'encours Ethereum est sur une seule échéance (25/12/2026) ; grande partie dans 3-4 marchés. Une offre peut être retirée ou périmée.
5. **Solveurs / routers** : hors protocole ; la qualité d'exécution dépend de l'app ou du router utilisé. Les offres ne sont pas toutes visibles on-chain (pas de liste globale).
6. **Smart contracts neufs** : ~3,5 mois sur Base, ~2 mois sur Ethereum. Mitigation : 4 sociétés d'audit + Certora + compétition Cantina, code petit, immutable. **Immutable = aucune pause d'urgence** : en cas de bug, personne ne peut arrêter le contrat.
7. **Mauvaise dette socialisée** sur les prêteurs d'un marché, **plus vite** réalisée que sur Blue ; et les prêteurs sont exposés à **tous les collatéraux acceptés** du marché, y compris ceux que personne n'a posés.
8. **Oracles** (une ligne) : chaque collatéral a son oracle ; marchés créés sans permission, donc qualité hétérogène. Sujet réservé au dossier.
9. **Liquidité fantôme** : les offres ne bloquent pas de capital, donc les chiffres de « dépôts » ou de profondeur peuvent surestimer le capital réellement mobilisé (rappel CryptoBriefing 23/10 : 100 M$ de dépôts vs 19,5 M$ de TVL).
10. **Dépendances Base/Ethereum** : à chaque chaîne son risque.

### 5.2 Échelle maison proposée
- **Prêter à taux fixe sur un marché Midnight majeur (USDC contre BTC/ETH, LLTV 86 %)** : **🟡 Moyen.** Justification : structure simple, immutable, très auditée, exposition crédit limitée à un collatéral liquide et surcollatéralisé ; mais produit **neuf**, sortie anticipée **conditionnelle**, profondeur limitée, risque de contrat sans mécanisme de pause. « Moyen » ≠ « faible » : l'absence d'historique de stress pèse.
- **Emprunter** (BTC en garantie, USDC) : **🟡 Moyen** : taux et date connus, mais **risque de liquidation** inchangé (LLTV 86 % ≈ marge de 14 % avant liquidation) et obligation de rembourser à date.
- **Marchés exotiques créés sans permission (collatéraux de petite capitalisation)** : **🔴 Élevé**.
- Proposition de note pour la fiche site : « Faible » ne se justifierait pas aujourd'hui.

---

## 6. Pour le lecteur : comment faire (« Comment ça se fait en pratique »)

### 6.1 Ce que je peux affirmer
- Un particulier **peut** lire et agir directement : l'app officielle est **markets.morpho.org/fixed** (cité dans le blog « Now Live »). **Je n'ai pas pu la charger** (erreur 429 « Too Many Requests » de mon outil), donc **le parcours exact, les minimums et les écrans sont [NON TROUVÉ]**.
- La doc dit : « les prêteurs prennent des asks, les emprunteurs prennent des bids » ; on prend une offre à un prix, l'app montre généralement le taux fixe implicite ; **pas de montant minimum d'offre ou d'exécution dans la doc** (seulement des maximums). Pas de KYC au niveau du protocole **sauf** si le marché a un **gate** (marchés à accès contrôlé).
- Marché de référence pour illustrer : Ethereum, prêt **USDC**, collatéral **cbBTC**, échéance **27/11/2026** (17 jours) ou **25/12/2026** (45 jours), taux relevés au 10/11 : prêteur ~4,1 %, emprunteur ~4,25 % APR.

### 6.2 Étapes générales (reconstituées depuis la doc, à valider par capture / test)
1. Portefeuille compatible (réseau **Ethereum** ou **Base**), USDC en main, et un peu d'ETH (Ethereum) ou ETH sur Base pour le gaz.
2. Ouvrir l'app Morpho (page « fixed ») et choisir **un marché** : actif prêté, collatéral, **échéance**.
3. **Prêteur** : prendre une offre de vente (ask) ; l'app affiche le taux fixe. Vous recevrez 1 USDC par unité à l'échéance (ou vous revendez avant, à un prix de marché).
4. **Emprunteur** : déposer le collatéral, puis prendre une offre d'achat (bid) ; le taux est figé. Rembourser avant ou à l'échéance ; sinon liquidation.
5. **Sortie** : vendre ses unités (prêteur) / racheter ou rembourser (emprunteur) ; ou attendre l'échéance.
- Voie alternative **grand public** : **Coinbase Borrow** (BTC -> USDC, fin du mois courant ou suivant, taux non publics, disponibilité géographique restreinte) ; ou la plateforme **Tenor** (non étudiée en détail).
- À bien dire au lecteur : les **taux de ce rapport sont des instantanés du 10/11/2026**, changent à chaque offre.

---

## 7. URLs à capturer en image
**Midnight (taux et durées)**
1. https://markets.morpho.org/fixed : vue d'ensemble des marchés à taux fixe (à capturer avec navigateur ; non lisible par mon outil).
2. La page d'un marché Ethereum USDC/cbBTC échéance 25/12/2026 depuis cette liste (ID complet : `0xcf447db8cff164867b02edbf7ee7af06d241d4f3a44b34d6e3a3ea872ddea5d6`) ; idem 27/11/2026 (`0xa6454499939a47927d3d27d65dce18486cc2aabbf75f8f5f8482e93567f4a183`) et 26/03/2027 si dispo (`0x2adde4b2...`, ID complet via l'API).
3. Marché Ethereum USDC/wstETH 25/12/2026 : `0x20db6336fa557dab4d29e3d6c3eaca63d99911b8d9106c4642c165b054ce4f03` (ask et bid les mieux fournis).
4. Marché Base USDC/cbBTC 25/12/2026 : `0x9593c3a6dba45b6106af8dc8b45ba8c505d90d3d68a3d33f7c278dd921b637da`.
5. DeFiLlama : https://defillama.com/protocol/morpho-midnight (TVL, emprunté, graphique du saut d'octobre).
6. (Facultatif) API brute lisible : https://api.morpho.org/v0/midnight/books?chain_ids=1&limit=20

**Aave**
7. https://aave.com/blog/avon-acquisition (l'annonce).
8. Aave v3 Ethereum, page de l'USDC (taux variable emprunt/dépôt) : app.aave.com, marché « Core » Ethereum, actif USDC (l'URL de ce type est `https://app.aave.com/reserve-overview/?underlyingAsset=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&marketName=proto_mainnet_v3` : **schéma d'URL non vérifié**).
9. https://aave.com/docs/resources/changelog (preuve qu'aucune entrée « fixed rate » n'existe à ce jour).
10. Pour l'historique : https://governance-v2.aave.com/governance/proposal/358/ (désactivation du stable rate, nov. 2023).

---

## 8. Points à faire vérifier / non résolus
- **Saut de TVL du 20 au 30/10/2026** (10,6 M$ -> 121 M$) : cause inconnue ; à vérifier avant d'écrire « croissance ».
- **Date du billet Morpho sur les limites du modèle à offres** (« 30/09 » demandé) : la page n'a pas de date visible.
- **Taux Coinbase** : non publics ; ne rien chiffrer.
- **Date de lancement Ethereum (08/09)** : source secondaire (KuCoin News relayant CryptoBriefing) ; à confirmer sur le blog officiel (https://morpho.org/blog/the-morpho-effect-september-2026).
- **Bug bounty permanent, détenteurs des rôles** : non trouvés.
- **Interface app Morpho non consultée** (429) : parcours et minimums non vérifiés.
- Le whitepaper date de **mai 2026** (confirmé en première page).
- Pour le fact-checker : Aave « 33 Md$ de dépôts et 13 Md$ de prêts » est un chiffre d'Aave Labs ; DeFiLlama donne v3 ~15,1 Md$ de TVL et ~11,2 Md$ d'emprunts (périmètres différents).
