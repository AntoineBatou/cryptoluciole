# 🔍 SOUS LA LOUPE — numéro 12 : Strata

> ✍️ Brouillon du Rédacteur (v3, après la boucle 1 du vérificateur). Notation des blocs : `[p]` paragraphe · `[st]` sous-titre / amorce dorée « ⬡ … » · `[def | slug]` encadré de définition · `[liste]` puces · `[tableau]` tableau · `[note]` méthode en petit · `[image | chemin | légende]` · `[avis]` encadré vert « 💡 Notre avis » · `[À VÉRIFIER]` chiffre/fait à confirmer.
>
> Correspondance avec `issues.ts` : En bref → `bref` (un seul paragraphe) · tout jusqu'à « Le rendement » → `etapesCorps` (marchés, Neutrl, trois chiffres compris) · Le rendement → `rendementCorps` · Les risques → `risques` + `risquesCorps` · Pourquoi ça compte (dépôts, Mezzanine, avis) → `importanceCorps`.
>
> **Objectif** : comprendre comment Strata découpe un rendement en tranche senior et tranche junior, et savoir lire les chiffres qui disent si la senior est vraiment couverte.
> **Thèse** : la senior n'est protégée que dans la limite du coussin junior ; Neutrl l'a montré (seniors à −37 % environ contre −46 % en direct).
> **Ce qui reste dehors** : les formules (prime x + y × part senior^k), le détail de l'affaire Neutrl (dossier Risque), les frais de rachat, les points, Pendle, LayerZero, les rôles admin en détail.

**Titre (proposition)** : Strata : comment choisir son niveau de risque sur un même placement

---

[st] En bref

[p]
**Strata** découpe un placement à rendement en **deux jetons** : une tranche **senior**, moins payée mais protégée en priorité, et une tranche **junior**, mieux payée, qui encaisse les pertes en premier. Le protocole propose **sept placements**, des [dollars synthétiques](https://www.cryptoluciole.com/glossaire/dollar-synthetique) au crédit immobilier américain. Il est développé par Frontera Labs, qui a levé 3 M$, et fonctionne depuis 2025.

[st] Comment ça marche

[p]
On a présenté le principe du tranching dans [notre numéro 2](https://www.cryptoluciole.com/numeros/2), avec Re : un même placement, découpé en tranches qui n'ont pas la même priorité face aux pertes. Strata applique ce découpage à des placements existants, qu'il ne gère pas lui-même.

[p]
**⬡ 1. Tu choisis ta tranche.** Tu déposes l'actif du marché sur l'application de Strata, par exemple de l'USDe pour le marché Ethena, Strata le place dans le produit à rendement (ici le sUSDe) et te remet un jeton : **srUSDe** si tu choisis la senior, **jrUSDe** si tu choisis le junior. Les deux tranches partagent le même pot.

[p]
**⬡ 2. Le rendement est partagé.** La senior cède au junior une **prime** : un pourcentage du rendement, environ 21 % aujourd'hui sur le marché USDe. Plus la senior pèse lourd dans le pot, plus cette prime augmente. La senior touche donc :

[liste]
- **le rendement du placement, moins la prime** ;
- **mais jamais moins qu'un plancher** : un taux minimum propre à chaque marché (pour l'USDe, ce que rapporte un prêt d'USDC ou d'USDT sur Aave). Si le placement rapporte moins que ce plancher, c'est le junior qui paie la différence, sur son propre capital. Donc la tanche junior protège d'une baisse de valeur, mais également d'une absence de rendement, puisqu'elle paiera sur son capital la tranche senior s'il y a une absence de rendement.

[p]
Exemple en chiffres ronds : un pot commun de 100 $, dont 80 $ en senior et 20 $ en junior, dans un placement qui rapporte 10 % par an, avec une prime de 20 %. Le pot commun gagne 10 $ par an (10% de 100$). La senior touchera donc 8 % (10 % moins 20 % de 10 %), soit 6,40 $ sur 80 $. Le junior garde le reste, 3,60 $ sur 20 $, soit **18 %**.

[p]
Une année faible, avec le même pot : le placement ne rapporte que 2 % et le plancher est à 3 %. Le pot gagne 2 $, mais la senior doit toucher 3 % de 80 $, soit 2,40 $. Les 0,40 $ manquants sont pris sur le capital du junior, qui passe de 20 $ à **19,60 $** : il perd de l'argent alors que le placement en a gagné. Le junior ne protège donc pas seulement la senior contre les pertes (étape 3) : il lui garantit aussi un rendement minimum. Une fois le junior vidé, la senior ne touche plus que ce que rapporte le placement.

[p]
**⬡ 3. Les pertes suivent l'ordre inverse.** Si le placement perd de la valeur, le junior absorbe la perte en premier. La senior n'est touchée qu'une fois le junior vidé. Avec le même pot :

[liste]
- **une perte de 15 %** : les 15 $ sont pris sur la partie junior, à qui il reste 5 $. La senior n'est pas touchée ;
- **une perte de 30 %** : le junior perd ses 20 $, les 10 $ restants tombent sur la senior, qui perd **12,5 %** (10 sur 80).

[def | `ratio-de-couverture`] **Ratio de couverture**
Le total des dépôts d'un marché divisé par les dépôts de la senior. Dans l'exemple, 100 $ ÷ 80 $ = 125 % : derrière les 80 $ de la senior, il y a 25 % de dépôts en plus, les 20 $ du junior. En pratique, la senior ne perd rien tant que la perte du pot ne dépasse pas ces 20 $, soit 20 % du pot. Plus la couverture est haute, plus ce coussin est épais.

[p]
**⬡ 4. Des garde-fous sur les sorties.** Quand la couverture baisse, Strata retient le junior ou empêche de déposer sur la senior, afin que le coussin ne disparaisse pas au moment où il sert. Les seuils et les délais de sortie de la tranche junior varient selon le marché :

[liste]
- **mHYPER** : sortie du junior immédiate au-dessus de 120 % de couverture, 7 jours entre 110 et 120 %, 21 jours en dessous ;
- **USDat** : 7 jours même au-dessus de 130 %, jusqu'à 28 jours sous 115 % ;
- **USDe** : pas de délai progressif, mais sous 105 % de couverture, les rachats du junior et les nouveaux dépôts en senior sont suspendus.

[p]
La senior sort sans délai chez Strata, mais elle reçoit l'actif du placement (du sUSDe sur le marché USDe) : pour récupérer des dollars, il faut ensuite passer par le délai de cet actif, 7 jours pour le sUSDe.

[p]
**⬡ Les sept marchés.** Le même mécanisme s'applique à des placements très différents, d'après la documentation de Strata :

[tableau]
| Marché | Le placement | Plancher de la senior |
|---|---|---|
| Ethena USDe | Dollar synthétique d'Ethena, rémunéré par des positions [delta-neutres](https://www.cryptoluciole.com/glossaire/delta-neutre) | Taux de prêt USDC/USDT sur Aave |
| Neutrl NUSD | Dollar synthétique de Neutrl : arbitrages de gré à gré, [funding](https://www.cryptoluciole.com/glossaire/funding-rate), DeFi | Rendement du sUSDe |
| Midas mHYPER | Stratégie sur stablecoins, sur plusieurs blockchains, gérée par Hyperithm | Taux Aave + 3 points |
| Midas mM1-USD | Fonds neutre au marché de M1 Capital | Aucun |
| Saturn USDat | Dividendes du STRC, l'[action privilégiée](https://www.cryptoluciole.com/glossaire/action-privilegiee-perpetuelle) de Strategy | • 65 % du dividende du STRC • le junior encaisse les variations de prix |
| Hastra PRIME | Lignes de crédit adossées à la valeur de logements américains, accordées par Figure | Aucun |
| Plume nOPAL | Créances de cartes bancaires brésiliennes (paiements en plusieurs fois) | Aucun |

[st] **⬡ L'épreuve Neutrl : la protection a-t-elle joué ?**

[p]
Ce n'est pas un piratage : une partie de la stratégie derrière le NUSD a perdu de la valeur et ne pouvait plus être revendue. Le 13 août, Neutrl a suspendu les créations et les rachats de NUSD ; le 17 septembre, les rachats ont rouvert à **0,51 USDC par NUSD**.

[p]
D'après Strata, le srNUSD (tranche senior) a été réglé **0,63 $ par part**, contre **0,54 $** pour le sNUSD détenu en direct. Le jrNUSD (tranche junior) a été ramené à zéro, d'après Merkle.Press [À VÉRIFIER].

[image | drafts/issue-12/captures/neutrl-reglement.png | Ce qu'a récupéré chaque détenteur pour 1 $ de départ, d'après Strata et Neutrl.]

[p]
**La senior a perdu environ 37 %, contre environ 46 % en direct : la protection a fonctionné, mais elle n'a couvert qu'une petite partie de la perte.** Pour qu'une perte de l'ordre de 46 % épargne la senior, il aurait fallu un junior d'au moins 46 % du pot, soit une couverture d'au moins 185 % (100 ÷ 54). [À VÉRIFIER : couverture réelle du marché NUSD avant la perte, ne pas l'estimer] Depuis le 19 septembre, ce marché est fermé aux nouveaux dépôts en senior, d'après Yearn, qui note les protocoles avant d'y placer ses fonds.

[st] **⬡ Ce qui fait vraiment la protection : trois chiffres.**

[liste]
- **La couverture du marché**, qui donne l'épaisseur du coussin (voir l'encadré plus haut).
- **Ce que le placement peut perdre** dans un mauvais scénario, à comparer au coussin. Pour un dollar synthétique qui dépend de stratégies hors blockchain, Neutrl a montré que la perte peut dépasser 40 %.
- **Le délai de sortie du junior** quand la couverture baisse : plus il est long, moins le coussin peut partir juste avant une perte.

[st] Le rendement

[p]
Sur le marché USDe, le plus simple à comparer, au 23 novembre d'après DeFiLlama [À VÉRIFIER le jour de l'envoi] :

[liste]
- **le sUSDe détenu en direct** rapporte environ **4,9 %** par an ;
- **la senior** (srUSDe), environ **3,9 %** ;
- **le junior** (jrUSDe), environ **5,9 %**.

[p]
**La senior cède environ un point (21 % d'un USDe à 4,9 %) ; le junior en gagne environ un.** Le plancher n'intervient pas aujourd'hui : la senior touche plus que le taux d'Aave. Sur un an, d'après DeFiLlama, la senior a rapporté le plus souvent entre **2,7 et 4,1 %**, le junior entre **5,6 et 11,5 %**.

[tableau]
| Marché | Senior | Junior | Couverture (au 23/11) |
|---|---|---|---|
| Ethena USDe | 3,9 % | 5,9 % | 168 % |
| Saturn USDat | 8,1 % | Varie avec le prix du STRC | 119 % |
| Midas mHYPER | 6,4 % | environ 7 % | 120 % |
| Hastra PRIME | 6,9 % | 7,4 % | 358 % |
| Plume nOPAL | 8,4 % | 10,6 % | 454 % |

[note]
Rendements annuels et dépôts au 23 novembre, d'après DeFiLlama ; couverture = dépôts totaux ÷ dépôts de la senior. DeFiLlama n'affiche pas de rendement pour mM1-USD (couverture 353 %) ; NUSD est fermé aux dépôts senior. Junior mHYPER : moyenne sur 30 jours (17,1 % au pic). [À VÉRIFIER le jour de l'envoi sur app.strata.markets]

[p]
**Le marché où la senior détient le plus d'argent, USDat (environ 4,3 M$), est aussi l'un des moins couverts : son coussin absorbe une perte d'environ 16 % du pot.** La prime dépend du seul poids de la senior, pas de ce que le placement peut perdre : sur PRIME, du crédit immobilier hors blockchain, le junior ne touche qu'environ un demi-point de plus que la senior.

[st] Les risques — 🟡 Moyen (senior) · 🔴 Élevé (juniors, autres marchés)

[p]
**Le risque dépend d'abord du marché**, pour deux raisons : le placement de départ (ce que fait le jeton de ton argent, et ce qu'il peut perdre) et la couverture (l'épaisseur du coussin). On le note ici sur la senior du marché USDe.

[p]
**🟡 Moyen pour la senior du marché USDe** : son coussin absorbe une perte d'environ 40 % du pot. **🔴 Élevé pour les juniors**, qui peuvent perdre tout leur capital (c'est leur rôle), **et pour les marchés adossés à des placements risqués**.

[liste]
- **Le placement de départ.** Strata n'en gère aucun : chaque marché ajoute les risques de son émetteur, dont des stratégies et des crédits hors blockchain qu'on ne peut pas vérifier soi-même.
- **Un coussin qui peut fondre.** Il s'use quand des juniors partent, mais aussi quand le placement rapporte moins que le plancher, puisque le junior paie alors la différence sur son capital.
- **Des marchés petits.** Quelques millions de dollars par marché, parfois moins : un gros retrait suffit à déplacer la couverture et les rendements.
- **Les contrats et l'équipe.** Les contrats de Strata ont été audités plusieurs fois ; d'après Yearn, aucun audit public ne couvre les marchés Neutrl, Midas, Saturn et Hastra. L'équipe garde la main sur les réglages, délais de sortie compris, avec un préavis d'un à deux jours, et peut tout mettre en pause sans délai.

[st] Pourquoi ça compte

[p]
Strata a compté **276 M$ de dépôts en mars**, d'après DeFiLlama ; il en reste **13,5 M$**. **Avec si peu d'argent en jeu, la couverture et les rendements de chaque marché peuvent bouger vite.**

[image | drafts/issue-12/captures/strata-tvl.png | Dépôts sur Strata, d'après DeFiLlama, relevés le 23 novembre 2026. La ligne pointillée marque le gel des rachats de Neutrl.]

[p]

[p]
**⬡ Un nouveau concurrent : Mezzanine.** En ligne depuis début novembre, Mezzanine compte 6,4 M$ de dépôts sur Ethereum et Solana, d'après DeFiLlama. Il fonctionne sur le même modèle. Son premier marché porte sur Hastra PRIME, le même placement que le marché PRIME de Strata, avec un junior qui pèse 20 % du *vault* (le fonds commun où sont déposées les deux tranches) d'après son fondateur, soit une couverture de 125 %. Au 23 novembre, d'après DeFiLlama (un relevé sur quelques semaines d'existence) :

[liste]
- **PRIME détenu en direct** rapporte environ **7,3 %** ;
- **la senior de Mezzanine**, environ **10,5 %** ;
- **son junior**, environ **26 %**.

[p]

[avis]
💡 **Notre avis :**
Aucun des marchés où les seniors ont vraiment déposé n'aurait couvert une perte de type Neutrl : les coussins vont d'environ 16 % (USDat) à 40 % (USDe). Les seuls assez épais, sur PRIME, nOPAL et mM1-USD, protègent environ 600 000 $ de seniors à eux trois. Le tranching de Strata amortit aujourd'hui les petites pertes et les années de rendement faible, pas l'effondrement d'un placement.

[p]
[→ Voir la fiche complète](https://www.cryptoluciole.com/protocoles/strata)

---

## Notes du Rédacteur (hors texte, à ne pas assembler)

### Ce qui change en v4 (boucle 2, corrections locales)
- Phrase PRIME remplacée (écart réel 7,44 − 6,88 = 0,56 point, d'où « environ un demi-point ») ; « Pourquoi ça compte » ouvre sur peu de déposants → couverture et rendements qui bougent vite ; « et alors » après les 141 % ; mHYPER junior « pic ; environ 7 % sur 30 jours » (apyMean30d 7,27 %) ; Mezzanine : raisonnement sur le pot (0,8 × 10,5 + 0,2 × 26 ≈ 13,6 %) et coussin 20 % contre plus de 70 % (PRIME Strata : 72 %) ; *vault* glosé chez Mezzanine (la glose a quitté la présentation de Yearn) ; sous-titre « protection » ; redite du point fusionnée ; avis « où les seniors ont vraiment déposé » ; coupes du renvoi au numéro 2 dans le bloc Neutrl (le lien au numéro 2 reste au début de « Comment ça marche ») et de la phrase d'échafaudage du badge ; Yearn présenté en court.

### Ce qui change en v3 (boucle 1 du vérificateur, 7,5/10)
1. **Badge** : critère réécrit (coussin comparé à ce que CE placement peut perdre) ; USDe : coussin ≈ 40 % (1 − 1/1,68), pire épisode 0,977 $ après Bybit (février 2025, Chaos Labs, fourni par la session principale, à sourcer) ; phrase franche sur un accident de type Neutrl.
2. **PRIME** : phrase « la prime suit le poids de la senior » ; coussin PRIME = 1 − 1/3,58 ≈ 72 %, d'où « plus de 70 % ».
3. **Neutrl** : maillon de la conversion en dollars (texte de la session principale) ; junior à zéro d'après Merkle.Press [À VÉRIFIER] ; fermeture des dépôts senior au 19/09 déplacée ici, avec la présentation de Yearn et la glose de *vault*.
4. **Avril** : plus d'ouverture en énigme ; une phrase sur les cinq vagues et la poignée de gros déposants ; « une adresse, 63 % » coupé.
5. **Mezzanine** : « sur le même modèle », phrase de présentation reprise, « levier » retiré, *vault* au lieu de « coffre ».
6. **Rythme** : étape 2 en puces ; exemple « année normale » sous l'étape 2 avec une prime de 20 % (senior 8 % = 6,40 $ ; junior 3,60 $ sur 20 $ = 18 %) ; gras retiré de la phrase sur le plancher ; image `neutrl-reglement.png` dans le bloc Neutrl.
7. **Redites** : puce couverture renvoie à l'encadré ; « la prime est un pourcentage » dit une fois (étape 2) ; réserves de Neutrl la veille et noms d'auditeurs coupés ; antithèse remplacée par une phrase à plat.
8. **Avis** : nouvelle thèse, chiffres vérifiés sur le tableau : coussins USDat 16 %, mHYPER 17 %, USDe 40 %, tous < 46 % ; PRIME 72 %, nOPAL 78 %, mM1-USD 72 % (353 %) ; seniors 0,10 + 0,09 + 0,42 ≈ 0,6 M$. J'ai ajouté mM1-USD, sinon « les seuls » était faux.
9. **Détails** : case Saturn en puces ; sous-titre Neutrl ; « l'un des plus gros » retiré (non sourcé) ; note sur mM1-USD et NUSD ; accès depuis la France en [À VÉRIFIER] (retiré du texte publié si non confirmé, la phrase reste correcte) ; « nets des frais de performance » **retiré** : non confirmé (la formule de la doc retrouve la senior USDe sans frais, 3,91 % contre 3,89 %, mais pas le junior : 6,4 % calculé contre 5,9 % affiché, donc DeFiLlama applique peut-être des frais au seul junior : méthode non établie).
10. Note interne Neutrl n° 0 supprimée (résolue).

### Pour `meta.json` et l'assembleur
- `loupeNom` « Strata » · `loupeSlug` « strata » · `loupeSousTitre` « choisir son niveau de risque sur un même placement ».
- **Deux badges** : `build_issue.py` n'en affiche qu'un (`risqueSens`) et le titre « Les risques » est fixe dans l'email ; il faut le cas multi-badges (comme Re au numéro 2) ou se contenter des badges écrits dans le premier paragraphe des risques.
- Titres fixes : marchés, Neutrl et « trois chiffres » sous « Comment ça marche » ; Mezzanine et l'avis sous « Pourquoi ça compte ». « En bref » = un seul paragraphe.
- Fiche `/protocoles/strata` inexistante : page « en construction » ou retirer le lien. Mention « rédigé avec l'aide de l'IA » sur la fiche site.

### Chiffres et sources (pour le fact-checker)
- **Yearn** et **Chaos Labs** : aucun fichier source dans `sources/` ; faits fournis par la session principale (note « faible », cinq vagues, poignée de gros déposants, 141 % au 11/10, fermeture NUSD le 19/09, audits manquants ; 0,977 $ après Bybit). URLs à rattacher.
- Prime ≈ 21 % : formule de la doc (x 10 %, y 12,5 %, k 0,3, part senior 0,597) → 0,207.
- DeFiLlama `yields.llama.fi/pools`, `strata-markets`, 23/11 : srUSDe 3,89 % (3,28 M$), jrUSDe 5,85 % (2,22 M$), sUSDe 4,93 % ; srUSDat 8,11 % (4,25 M$), jrUSDat 0,79 M$ ; srmHYPER 6,39 % (0,61 M$), jrmHYPER 17,09 % (0,12 M$, moyenne 30 j 7,27 %) ; srmM1USD 0,42 M$ et jrmM1USD 1,07 M$ (APY affiché 0) ; srPRIME 6,88 % (0,10 M$), jrPRIME 7,44 % (0,27 M$) ; srnOPAL 8,42 % (0,09 M$), jrnOPAL 10,63 % (0,31 M$).
- Couvertures calculées sur les TVL DeFiLlama : à recouper sur l'app.
- Aave v3 Ethereum au 23/11 : USDC 2,62 %, USDT 3,03 % → plancher USDe ≈ 2,7-2,8 %.
- Fourchette sur un an (10e-90e centiles) : srUSDe 2,70-4,06 % ; jrUSDe 5,59-11,49 %.
- Neutrl : 0,6323 et 0,5426 (tweet @strata_markets), base 1 $ par part, d'où « environ ».
- Dépôts par jeton (`api.llama.fi/protocol/strata-markets`) : NUSD 1,7 M$ le 12/08 ; USDe 234,8 M$ le 01/04 → 68,6 le 01/05 → 5,5 le 23/11.
- Mezzanine : MSHASTRA 10,52 %, MJHASTRA 25,91 % ; PRIME direct 7,29 %.
- Délais de sortie : fiches marchés et FAQ de la doc.

### Points qui demandent l'avis de Marc
1. **L'avis** : il tranche fort (« aucun marché bien rempli n'aurait couvert… »). Il repose sur des couvertures calculées à partir de DeFiLlama, à recaler sur l'app le jour de l'envoi.
2. **Les deux badges** : à valider avec l'adaptation de l'assembleur.
3. **Accès depuis la France** : non vérifié ; si on ne trouve rien, le marqueur disparaît et la phrase reste neutre.

### Passages que Marc couperait le plus probablement
- **La phrase sur le pire épisode de l'USDe (Bybit, 0,977 $)** : un chiffre de plus. Gardée parce qu'elle justifie le 🟡 de la senior USDe.
- **La phrase Yearn sur les vagues de retraits** : description sans cause. Gardée parce qu'elle explique la courbe et montre que la couverture a monté pendant les sorties.
- **La puce « Des marchés petits »** : recoupe en partie « Un coussin qui peut fondre ». Gardée parce qu'elle porte sur la volatilité des rendements, pas seulement sur le coussin.

### Glossaire
| Terme | Slug | Statut |
|---|---|---|
| Ratio de couverture | `ratio-de-couverture` | NOUVEAU (absent de `terms.ts`) |
| Tranching | `tranching` | EXISTANT (numéro 2), renvoi par lien |
| Dollar synthétique, delta-neutre, funding rate, action privilégiée perpétuelle | existants | liens |
