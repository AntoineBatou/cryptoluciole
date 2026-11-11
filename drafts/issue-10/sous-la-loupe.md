# 🔍 SOUS LA LOUPE — numéro 10 : Morpho Midnight

> ✍️ Brouillon du Rédacteur (v4, boucle 2 ; v3 après le 7,5/10 du vérificateur et la demande de Marc : chiffres commentés, avis extérieurs). Notation des blocs : `[p]` paragraphe · `[st]` sous-titre / amorce dorée « ⬡ … » · `[def | slug]` encadré de définition · `[liste]` puces · `[tableau]` tableau · `[image | chemin | légende]` capture d'écran · `[avis]` encadré vert « 💡 Notre avis » · `[À VÉRIFIER]` chiffre/fait à confirmer.
>
> Correspondance avec le type `protocole` de `issues.ts` : En bref → `bref` · Comment ça marche → `etapesCorps` · Le rendement → `rendementCorps` · Les risques → `risques` + `risquesItems` + `risqueNiveau: "moyen"` · Pourquoi ça compte + avis → `importanceCorps` · `slug: "morpho"`.
>
> Objectif (une phrase) : que le lecteur comprenne comment marche un prêt à taux fixe sur Midnight, ce qu'il rapporte ou coûte face au variable d'Aave, quels risques il prend, et pourquoi le taux fixe, qui n'a jamais pris en DeFi, pourrait cette fois s'installer.

**Titre (proposition)** : Morpho Midnight : comment prêter et emprunter à taux fixe

---

[st] En bref

[p]
**Morpho** est le **numéro 2 du prêt DeFi**, derrière Aave. Il a été cofondé notamment par deux Français. Sur son protocole principal, comme sur Aave, le taux d'un prêt est **variable** : il bouge en permanence selon l'offre et la demande.

[p]
**Midnight** est sa version **à taux fixe**. Lancé sur **Base** (la blockchain de Coinbase) le **21 juillet 2026**, puis sur **Ethereum** en septembre, il permet de prêter ou d'emprunter à un taux connu dès le départ, jusqu'à une date fixée à l'avance.

[def | `taux-fixe`] **Taux fixe**
Un taux d'intérêt connu dès le départ, qui ne bouge plus jusqu'à la date de remboursement prévue, l'**échéance**. L'emprunteur sait ce qu'il paiera, le prêteur ce qu'il touchera. 
[st] Comment ça marche

[p]
**⬡ 1. Des offres plutôt qu'une formule.**  Sur Midnight, ce sont les participants qui proposent des offres : un prêteur publie une offre (« je prête tant d'USDC, à tel taux, jusqu'à telle date »), un emprunteur aussi. Le taux naît de la rencontre entre l'offre et la demande.

[p]
Chaque offre porte sur un **marché** précis, défini par trois éléments qui ne changent jamais :

[liste]
- **l'actif prêté**, le plus souvent de l'USDC ;
- **les garanties acceptées** : du bitcoin, de l'ETH… ;
- **l'échéance**, en pratique le dernier vendredi d'un mois : 27 novembre, 25 décembre, 26 mars 2027…

[image | drafts/issue-10/captures/04-midnight-echeances-usdc-cbbtc.jpg | Sur l'app Morpho le 10 novembre, le prêt d'USDC contre du bitcoin (cbBTC) sur Ethereum se décline en un marché par échéance : 5,48 M$ prêtés au 27 novembre, 37,23 M$ au 25 décembre, rien encore au 26 mars 2027.]

[p]
**⬡ 2. Le taux est fixé au moment de l'échange.** Quand quelqu'un accepte une offre, le taux est verrouillé. En réalité, Midnight n'enregistre pas un taux mais un prix : prêter, c'est acheter aujourd'hui, un peu moins cher, le droit de recevoir 1 USDC à l'échéance. Tu prêtes **99 USDC**, on t'en rend **100 dans trois mois** : ton gain d'environ 1 % sur la période (**environ 4 % par an**) est connu dès le départ.

[p]
C'est le principe d'une **obligation zéro-coupon** : aucun intérêt en cours de route, ton gain est l'écart entre le prix payé et ce qui est remboursé. Sur l'app Morpho le 10 novembre, les prêteurs proposaient de payer **0,9948 USDC** pour en recevoir 1 au 25 décembre, soit **environ 4,3 % par an**.

[p]
Tu ne prêtes pas à une personne en particulier : ta créance porte sur l'ensemble du marché, partagé avec tous les autres prêteurs du même marché (même actif, même garantie, même échéance), quel que soit le taux que chacun a obtenu : chacun a payé son propre prix, mais toutes les créances valent 1 USDC à l'échéance.

[p]
**⬡ 3. Pendant le prêt.** Comme sur Aave, l'emprunteur dépose une garantie, le [collatéral](https://www.cryptoluciole.com/glossaire/collateral), qui vaut plus que ce qu'il emprunte. Si sa valeur baisse trop, il est [liquidé](https://www.cryptoluciole.com/glossaire/liquidation), même avant l'échéance : le taux est fixe, pas la valeur de la garantie. Il peut aussi rembourser à tout moment.

[p]
**⬡ 4. À l'échéance, l'emprunteur doit rembourser.** Il n'y a pas de prolongation automatique : passé la date, un prêt non remboursé est liquidé, **même s'il est sain**. Pour continuer, l'emprunteur peut reconduire son prêt sur l'échéance suivante, s'il trouve en face l'offre d'un prêteur, au taux que propose cette offre, qui n'est pas forcément celui de son premier prêt. Le prêteur récupère ses 100 USDC une fois les emprunteurs remboursés ou liquidés (voir les risques).

[p]
**⬡ 5. Le prêteur peut sortir avant l'échéance**, en revendant sa créance à quelqu'un qui veut prêter à sa place. Le risque : si les taux montent juste après ton achat, par exemple si les prêteurs exigent désormais 5 % au lieu de 4 %, personne ne rachètera ta créance à 4 % au prix que tu l'as payée. Pour qu'elle rapporte 5 % à son acheteur, il faut la lui céder moins cher : environ 98,8 au lieu de 99, et tu sors à perte. Et encore faut-il trouver un acheteur.

[st] Le rendement

[p]
**⬡ Le taux du moment.** Relevés sur l'app Morpho le 10 novembre, pour le marché le plus actif (prêt d'USDC contre du bitcoin, sur Ethereum), face à l'USDC sur Aave le même jour :

[tableau]
| | Prêter | Emprunter |
|---|---|---|
| **Midnight** (taux fixe) | environ 4,1 % (27/11) ; aucune offre à saisir au 25/12 ce jour-là | 4,26 % (27/11) ; 4,27 % (25/12) |
| **Aave** (taux variable) | 3,73 % | 4,45 % |

[p]
Les deux taux sont proches du taux variable d'Aave. L'emprunteur paie à peu près le même prix, mais il le connaît à l'avance. Le prêteur gagne un peu plus (4,1 % contre 3,73 %), en échange d'un argent bloqué jusqu'à l'échéance, sauf revente : l'écart est mince.

[p]
Plus l'échéance est lointaine, plus emprunter coûte cher, comme pour les obligations : **5,27 %** jusqu'au 26 mars 2027.

[image | drafts/issue-10/captures/06-midnight-courbe-taux.jpg | La courbe des taux du même marché, sur l'app Morpho le 10 novembre : 4,26 % pour emprunter à 16 jours, 4,27 % à 44 jours, 5,27 % à 135 jours. Côté prêteur, une seule échéance proposait un taux ce jour-là : 4,09 % à 16 jours.]

[p]
Ce ne sont pas des moyennes : ce sont les meilleures offres disponibles ce jour-là sur ce marché précis (même garantie, même échéance). Chaque prêt se conclut au taux de l'offre acceptée, et ces taux changent à chaque nouvelle offre.

[p]
**⬡ La taille.** Le 10 novembre, Midnight comptait **92 M$ de prêts en cours** (DeFiLlama), dont environ **les trois quarts sur une seule échéance**, le 25 décembre. C'est encore peu : environ **1,6 %** des prêts en cours sur Morpho Blue, le protocole à taux variable de Morpho (5,6 Md$).

[st] Les risques — 🟡 Moyen

[p]
**Moyen pour les marchés principaux** (prêter de l'USDC contre du bitcoin ou de l'ETH) : les garanties sont liquides et valent plus que les prêts, mais le produit est neuf et la sortie avant l'échéance n'est pas garantie. Les marchés sur des jetons plus confidentiels, que n'importe qui peut créer, relèvent d'un risque **élevé**.

[liste]
- **Une sortie anticipée qui dépend des acheteurs.** Pour sortir avant l'échéance, il faut revendre ta créance à un nouveau prêteur. Morpho l'écrit lui-même : cette sortie « dépend de la demande ». Le 10 novembre, sur le marché du 25 décembre, les offres de prêteurs couvraient environ **6 M$** au prix du marché ; au-delà, le prix proposé chutait nettement.
- **Rembourser à la date, quoi qu'il arrive.** L'emprunteur qui n'a pas ses USDC le jour J est liquidé, même avec un prêt sain.
- **Des pertes partagées.** Si la vente d'une garantie ne couvre pas la dette, la perte (la *bad debt*) est répartie entre tous les prêteurs du marché, au prorata. Les autres marchés ne sont pas touchés.
- **Des contrats neufs que personne ne peut modifier.** Le code a été audité à plusieurs reprises. Il est immuable : personne, pas même Morpho, ne peut changer les règles d'un marché ni mettre le protocole en pause si une faille apparaît.
- **Une activité concentrée.** Le 25 décembre, beaucoup d'emprunteurs devront rembourser ou reconduire leur prêt au même moment.

[image | drafts/issue-10/captures/05-midnight-carnet-ordres-25dec.jpg | Les offres du marché du 25 décembre sur l'app Morpho, le 10 novembre (un instantané). Seulement des offres de prêteurs : environ 6 M$ à 4,3 % (prix de 0,99476 USDC pour 1 USDC à l'échéance), puis quelques centaines de dollars à 6,9 % et 0,5 M$ à 17 %. Plus le taux est élevé, plus le prix est bas.]

[st] Pourquoi ça compte

[p]
Aux États-Unis, environ **96 % des crédits immobiliers en cours sont à taux fixe** (FHFA) ; en DeFi, plus de **95 % des prêts sont à taux variable** (Four Pillars). Les deux crédits ne sont pas de même nature. Pourquoi le taux fixe n'a-t-il jamais pris en DeFi ?

[p]
**⬡ Les échecs passés.** Yield Protocol a fermé fin 2023 faute de demande durable, Notional V3 a quasiment cessé son activité fin 2025, et Aave a coupé en 2023 son « taux stable », réajustable, après un bug. Pour le cabinet d'analyse Four Pillars, la cause de fond est que les emprunteurs, surtout des spéculateurs, voulaient pouvoir sortir à tout moment, et qu'un prêteur gagnait à peu près autant sur Aave sans bloquer son argent.

[p]
**⬡ Ce qui change cette fois.**

[liste]
- **Le prêteur ne bloque plus son argent en attendant** : tant que son offre n'est pas acceptée, ses fonds peuvent continuer de rapporter le taux variable de Morpho.
- **Un distributeur grand public** : depuis le 22 septembre, Coinbase propose à ses clients d'emprunter de l'USDC contre leur bitcoin, à taux fixe et à rembourser en fin de mois ; les prêts passent par Midnight. 
- **Les concurrents bougent, en cinq jours** :
  - le 6 novembre, Aave rachète Avon (voir DANS LE FAISCEAU) ; Stani Kulechov dit que l'équipe bâtira le crédit sur Aave V4, sans calendrier ni forme précise annoncés ;
  - le 9, Spark (l'écosystème Sky, ex-MakerDAO) annonce IRIS, une couche à taux fixe posée sur son protocole de prêt SparkLend : d'après son annonce, l'emprunteur demande une cotation et obtient un taux fixe pour une durée donnée ([annonce](https://x.com/sparkfinance/status/2119781718785679548)) ;
  - le 10, Pendle et Ethena ouvrent des échéances à 3, 6, 9 et 12 mois sur l'USDe : on achète un jeton moins cher aujourd'hui, remboursé 1 pour 1 à l'échéance. C'est le même principe zéro-coupon que Midnight, mais côté épargne seulement : on ne peut pas y emprunter ([annonce](https://x.com/pendle_fi/status/2120155914993066201)).

[avis]
💡 **Notre avis :**
Le taux fixe de Midnight coûte à peu près le prix du variable d'Aave et apporte de la certitude : entrer est désormais simple. Le vrai test, c'est de sortir. Tant que revendre sa créance avant l'échéance repose sur quelques millions de dollars d'offres par marché, c'est à nos yeux un outil pour qui peut attendre l'échéance, pas encore un placement qu'on quitte quand on veut.

[p]
[→ Voir la fiche complète](https://www.cryptoluciole.com/protocoles/morpho)

---

## Notes du Rédacteur (hors texte, à ne pas assembler)

### Ce qui change en v4 (boucle 2)
- Échecs passés avec leur cause (Notional « après une mauvaise dette » [À VÉRIFIER]) ; « peuvent continuer de rapporter » ; concurrents en sous-puces, Pendle/Ethena précisés, Aave « sans calendrier ni forme précise annoncés » (aligné sur l'actu 1).
- « Comment s'y prendre » déplacé après l'étape 5 ; « Pourquoi ça compte » s'enchaîne sur l'avis.
- Voix sceptique : Sentora (blog du 24/07/2026, sentora.com/research/articles/morpho-midnight-fixed-rate-credit-goes-live-on-base) à la place de belizardd.
- Espaces insécables à l'intérieur de tous les guillemets.

### Ce qui change en v3
- **Correctifs du vérificateur, 1 à 8** :
  - taux prêteur recalé sur le marché des captures (4,1 % au 27/11, aucune offre au 25/12) ; tableau limité au marché USDC/cbBTC Ethereum, conclusion « l'écart est mince » ;
  - Avon sans les 10 k$ ni le jugement « une équipe, pas un marché » ; propos de Kulechov sur Aave V4 ;
  - « taux stable » réduit à une demi-phrase dans les échecs passés ;
  - « cofondé notamment par » ;
  - une seule mesure de taille : les prêts en cours (92 M$ contre 5,6 Md$, environ 1,6 %) ;
  - audits en une phrase, sans les noms ; puce « oracles » supprimée ;
  - remboursement du prêteur conditionné aux emprunteurs (étape 4) ;
  - parenthèse taux simples / composés déplacée ci-dessous.
- **Avis extérieurs** : accroche FHFA / Four Pillars, échecs passés, trois différences, deux voix (Frambot, Sentora depuis la v4).
- **Avis** : thèse B (« le vrai test, c'est de sortir ») fondue avec « outil pour qui peut attendre l'échéance ».
- **Coupes pour compenser** : le cas Coinbase passe dans « Ce qui change » ; le paragraphe « Et Aave ? » est supprimé ; les captions et les étapes sont raccourcies.
- **Taux simples / composés** : Midnight affiche des taux simples (APR), Aave des taux composés (APY). 4,45 % APY ≈ 4,36 % APR : à ces niveaux, l'écart ne dépasse pas 0,1 point.

### Choix faits
- Le cumul « 100 M$ de prêts accordés » (Morpho, 10/11) n'est pas cité, pour ne pas le confondre avec les 92 M$ en cours. Le « Total deposits » de l'app (286 M$) et la TVL DeFiLlama (165,6 M$) ne sont pas cités non plus (une seule mesure).
- **Capture 05** : les offres affichées sont des offres de prêteurs, donc des contreparties pour un prêteur qui revend sa créance (environ 6 M$ à 4,3 %, puis un prix qui chute). D'où « environ 6 M$ au prix du marché », et non « presque personne en face ». À confirmer.
- **Tableau** : seulement le marché USDC/cbBTC. Ailleurs, l'API donnait le 10/11 une offre prêteur à 4,27 % sur USDC/wstETH au 25/12, ce qui interdit de généraliser « aucune offre au 25/12 ».
- **Avance de Morpho** : ce n'est plus affirmé dans le texte. Les turbulences de fin octobre (« hack Binance » sur X) ne sont pas utilisées : non vérifiées.
- **Captures** : 04, 06 et 05 dans la newsletter ; 01 (DeFiLlama) et 03 (liste des familles) pour la fiche site.

### Coupé volontairement (pour la fiche site `/protocoles/morpho`)
- Makers, takers et routeurs ; callbacks en détail ; ticks ; enchère de liquidation sur 60 min ; LLTV ; frais plafonnés ; gates KYC ; exposition des prêteurs à tous les collatéraux acceptés ; adaptateur Vaults (environ 5 Md$, annoncé) ; Tenor ; Term Finance ; IRIS en détail ; arbitrage de taux entre chaînes ; noms des auditeurs (Spearbit, Stermi, Blackthorn, Trust Security, Certora, Cantina) ; oracles ; avis Sentora, Blockstories et Spine.
- Mention « rédigé avec l'aide de l'IA » à poser sur la page site (jamais dans le mail). La fiche `morpho` n'existe pas encore dans `protocols.ts` : page « en construction » à prévoir avant l'envoi.

### Notes pour le fact-checker
- **Captures de l'app Morpho (10/11)** :
  - 04 : 27/11, 5,48 M$ à 4,26 % ; 25/12, 37,23 M$ à 4,27 % ; 26/03/2027, 0 $ à 5,27 % ;
  - 05 : prix 0,99476, soit (1/0,99476 − 1) × 365/44 ≈ 4,37 % ; offres de 6,02 M$ à 4,3 %, 474 $ à 6,9 %, 503,75 k$ à 17 % ;
  - 06 : prêteur 4,09 % à 16 j. 0,995 est l'arrondi de 0,99476.
- **Aave v3 Ethereum USDC (DeFiLlama, 10/11)** : 3,73 % en dépôt, 4,45 % en emprunt. À rafraîchir le jour de l'envoi.
- **Taille (DeFiLlama, 10/11)** : 92,1 M$ de prêts en cours ; Morpho Blue 5,61 Md$ empruntés, soit un ratio de 1,6 %.
  - « Trois quarts sur le 25/12 » : 65,9 M$ sur 85,3 M$ côté Ethereum (77 %), 68,1 M$ sur 92,1 M$ toutes chaînes (74 %).
- **Accroche** :
  - FHFA via Wolf Street (27/03/2026) : environ 4 % des crédits immobiliers EN COURS à taux variable ;
  - Four Pillars (07/08/2026) : plus de 95 % des ~25 Md$ de prêts actifs à taux variable, début 2026.
- **Échecs passés** :
  - Yield Protocol (fermeture fin 2023, Cointelegraph) ;
  - Notional V3 (fin 2025, source secondaire Phemex, à confirmer) ;
  - « taux stable » d'Aave désactivé le 09/11/2023 (proposition 358).
  - Le « selon Four Pillars » porte sur l'explication (spéculateurs, prêteur perdant face à Aave).
- **Concurrents** :
  - Kulechov, X du 06/11 (crédit sur Aave V4) ;
  - Spark IRIS, X officiel du 09/11 ;
  - Pendle et Ethena, USDe à 3/6/9/12 mois, X officiel du 10/11.
  - « En cinq jours » = du 6 au 10 novembre.
- **Voix** :
  - Frambot, X du 03/11 (« Your fixed rate stays… fixed ») ;
  - Sentora, article du 24/07/2026 (liquiditÃ© affichÃ©e non forcÃ©ment exÃ©cutable, fonds non rÃ©servÃ©s Ã  la signature) ;
  - Les deux sont reformulées.
- **Prêteur non bloqué** : callbacks (whitepaper §3, Frambot 24/08). C'est possible, mais pas automatique pour tout prêteur : à nuancer si l'app ne le propose pas par défaut [À VÉRIFIER].
- **Autres points** :
  - Coinbase : annonce du 22/09/2026 ; taux non publics (The Block) ; remboursement « fin du mois en cours ou suivant ».
  - Lancement sur Ethereum : « en septembre » (08/09, source secondaire).
  - « Numéro 2 du prêt DeFi » : DeFiLlama, 10/11.
- **Citation Morpho** « dépend de la demande » : blog « How onchain credit is evolving with offer-based markets » (date non affichée).

### Termes glossaire proposés
| Terme | Slug | Forme dans le texte | Statut |
|---|---|---|---|
| Taux fixe | `taux-fixe` | encadré (explique aussi l'échéance) | NOUVEAU (vérifié : absent de `terms.ts`) |
| Obligation zéro-coupon | `zero-coupon` | explication dans la phrase | NOUVEAU (facultatif) |
| Collatéral | `collateral` | lien | EXISTANT (numéro 5) |
| Liquidation | `liquidation` | lien | EXISTANT (numéro 4) |
