# 🔍 SOUS LA LOUPE — numéro 12 : Strata

> ✍️ Brouillon du Rédacteur (v1). Notation des blocs : `[p]` paragraphe · `[st]` sous-titre / amorce dorée « ⬡ … » · `[def | slug]` encadré de définition · `[liste]` puces · `[tableau]` tableau · `[note]` méthode en petit · `[image | chemin | légende]` · `[avis]` encadré vert « 💡 Notre avis » · `[À VÉRIFIER]` chiffre/fait à confirmer.
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
**Strata** découpe un placement à rendement en **deux jetons**, sur Ethereum : une tranche **senior**, moins payée mais protégée en priorité, et une tranche **junior**, mieux payée, qui encaisse les pertes en premier. Le protocole propose **sept placements**, des [dollars synthétiques](https://www.cryptoluciole.com/glossaire/dollar-synthetique) au crédit immobilier américain. Il est développé par Frontera Labs, qui a levé 3 M$, et fonctionne depuis 2025.

[st] Comment ça marche

[p]
On a présenté le principe du tranching dans [notre numéro 2](https://www.cryptoluciole.com/numeros/2), avec Re : un même placement, découpé en tranches qui n'ont pas la même priorité face aux pertes. Strata applique ce découpage à des placements existants, qu'il ne gère pas lui-même.

[p]
**⬡ 1. Tu choisis ta tranche.** Tu déposes l'actif du marché, par exemple de l'USDe pour le marché Ethena. Strata le place dans le produit à rendement (ici le sUSDe, l'USDe staké) et te remet un jeton : **srUSDe** si tu choisis la senior, **jrUSDe** si tu choisis le junior. Les deux tranches partagent le même pot.

[p]
**⬡ 2. Le rendement est partagé.** La senior a un **plancher**, un taux de référence propre à chaque marché : pour l'USDe, le taux de prêt de l'USDC et de l'USDT sur Aave. Au-dessus, elle touche une part du rendement, après avoir cédé une prime au junior. Plus la senior pèse lourd dans le pot, plus cette prime augmente : le junior est mieux payé quand il protège davantage de monde. Si le placement rapporte moins que le plancher, c'est le junior qui complète.

[p]
**⬡ 3. Les pertes suivent l'ordre inverse.** Si le placement perd de la valeur, le junior absorbe la perte en premier. La senior n'est touchée qu'une fois le junior vidé. Exemple en chiffres ronds : un pot de 100 $, dont 80 $ en senior et 20 $ en junior, dans un placement qui rapporte 10 % par an.

[liste]
- **Une année normale** : le pot gagne 10 $. Si la senior reçoit 7 % (5,60 $ sur 80 $), le junior garde 4,40 $ sur 20 $, soit **22 %**.
- **Une perte de 15 %** : les 15 $ sont pris sur le junior, à qui il reste 5 $. La senior n'est pas touchée.
- **Une perte de 30 %** : le junior perd ses 20 $, les 10 $ restants tombent sur la senior, qui perd **12,5 %** (10 sur 80).

[def | `ratio-de-couverture`] **Ratio de couverture**
Le rapport entre tous les dépôts d'un marché et ceux de la senior. Dans l'exemple, 100 ÷ 80 = 125 % : le junior pèse 20 % du pot, donc la senior résiste à une perte allant jusqu'à 20 % du total. À 110 %, ce coussin n'est plus que d'environ 9 %.

[p]
**⬡ 4. Le junior ne part pas quand il veut.** Quand la couverture baisse, Strata retient le junior, afin que le coussin ne disparaisse pas au moment où il sert. Sur le marché NUSD, par exemple, sa sortie est immédiate au-dessus de 120 % de couverture, prend 7 jours entre 110 et 120 %, et 35 jours en dessous. Sur le marché USDe, elle est suspendue sous 105 %. La senior, elle, sort sans délai.

[p]
**⬡ Les sept marchés.** Le même mécanisme s'applique à des placements très différents, d'après la documentation de Strata :

[tableau]
| Marché | Le placement | Plancher de la senior |
|---|---|---|
| Ethena USDe | Dollar synthétique d'Ethena, rémunéré par des positions [delta-neutres](https://www.cryptoluciole.com/glossaire/delta-neutre) | Taux de prêt USDC/USDT sur Aave |
| Neutrl NUSD | Dollar synthétique de Neutrl : arbitrages de gré à gré, [funding](https://www.cryptoluciole.com/glossaire/funding-rate), DeFi | Rendement du sUSDe |
| Midas mHYPER | Stratégie sur stablecoins, sur plusieurs blockchains, gérée par Hyperithm | Taux Aave + 3 points |
| Midas mM1-USD | Fonds neutre au marché de M1 Capital | Aucun |
| Saturn USDat | Dividendes du STRC, l'[action privilégiée](https://www.cryptoluciole.com/glossaire/action-privilegiee-perpetuelle) de Strategy | Taux fixe : 65 % du dividende ; le junior encaisse les variations du prix du STRC |
| Hastra PRIME | Lignes de crédit adossées à la valeur de logements américains, accordées par Figure | Aucun |
| Plume nOPAL | Créances de cartes bancaires brésiliennes (paiements en plusieurs fois) | Aucun |

[st] **⬡ En pratique : est-ce que ça marche ? L'épreuve Neutrl.**

[p]
Dans notre numéro 2, on conseillait de regarder la taille de chaque tranche avant de déposer. Neutrl en a fait la démonstration. Ce n'est pas un piratage : une partie de la stratégie derrière le NUSD a perdu de la valeur et ne pouvait plus être revendue. Le 13 août, Neutrl a suspendu les créations et les rachats de NUSD ; le 17 septembre, les rachats ont rouvert à **0,51 USDC par NUSD**.

[p]
Chez Strata, la mécanique a joué dans l'ordre prévu. D'après Strata, le srNUSD a été réglé **0,63 $ par part**, contre **0,54 $** pour le sNUSD détenu en direct. Le junior, premier touché, a été vidé [À VÉRIFIER : jrNUSD ramené à zéro, d'après Merkle.Press] : c'est la seule situation où la senior perd du capital.

[p]
**La senior a perdu environ 37 %, contre 46 % en direct : la protection a fonctionné, mais elle n'a couvert qu'une petite partie de la perte.** Pour qu'une chute de 46 % épargne entièrement la senior, il aurait fallu que le junior pèse au moins 46 % du pot, soit une couverture d'environ 185 % (100 ÷ 54). [À VÉRIFIER : couverture réelle du marché NUSD avant la perte, ne pas l'estimer]

[p]
La même perte a eu une autre issue chez Lulo, un agrégateur de prêt sur Solana qui propose lui aussi deux niveaux de dépôts : d'après Lulo, ses dépôts « Boost », qui jouent le rôle du junior, ont perdu 6,4 %, et ses dépôts « Protected » sont restés intacts. Là, le coussin était assez épais par rapport à la perte.

[st] **⬡ Ce qui fait vraiment la couverture : trois chiffres.**

[liste]
- **La couverture du marché** : la taille du coussin. À 125 %, la senior résiste à une perte de 20 % du pot ; à 110 %, d'environ 9 %.
- **Ce que le placement peut perdre** dans un mauvais scénario, à comparer au coussin. Pour un dollar synthétique qui dépend de stratégies hors blockchain, Neutrl a montré que la perte peut dépasser 40 %.
- **Le délai de sortie du junior** quand la couverture baisse : plus il est long, moins le coussin peut fondre juste avant une perte.

[st] Le rendement

[p]
Sur le marché USDe, le plus simple à comparer, au 23 novembre d'après DeFiLlama [À VÉRIFIER le jour de l'envoi] :

[liste]
- **le sUSDe détenu en direct** rapporte environ **4,9 %** par an ;
- **la senior** (srUSDe), environ **3,9 %** ;
- **le junior** (jrUSDe), environ **5,9 %**.

[p]
**La senior cède environ un point de rendement pour sa protection ; le junior en gagne environ un pour prendre le premier risque.** L'écart est faible parce que le rendement de l'USDe est bas en ce moment : quand il monte au-dessus du plancher, la part du junior grossit plus vite. Sur un an, d'après DeFiLlama, la senior a rapporté le plus souvent entre **2,7 et 4,1 %**, le junior entre **5,6 et 11,5 %**.

[tableau]
| Marché | Senior | Junior | Couverture (au 23/11) |
|---|---|---|---|
| Ethena USDe | 3,9 % | 5,9 % | 168 % |
| Saturn USDat | 8,1 % (fixe) | Varie avec le prix du STRC | 119 % |
| Midas mHYPER | 6,4 % | 17,1 % | 120 % |
| Hastra PRIME | 6,9 % | 7,4 % | 358 % |
| Plume nOPAL | 8,4 % | 10,6 % | 454 % |

[note]
Rendements annuels et dépôts au 23 novembre, d'après DeFiLlama ; couverture = dépôts totaux ÷ dépôts de la senior. [À VÉRIFIER le jour de l'envoi sur app.strata.markets]

[p]
**Le marché où la senior détient le plus d'argent, USDat (environ 4,3 M$), est aussi l'un des moins couverts : son coussin absorbe une perte d'environ 16 % du pot.** À l'inverse, sur PRIME et nOPAL, le junior est abondant et la senior ne pèse qu'environ 0,1 M$ : le junior protège beaucoup, et il est peu payé pour ça (7,4 % contre 6,9 % pour la senior sur PRIME).

[st] Les risques — 🟡 Moyen

[p]
**Moyen pour la senior d'un marché bien couvert, élevé pour le junior**, qui peut perdre tout son capital : c'est son rôle. La senior n'est pas sans risque pour autant : Neutrl l'a montré, sa protection s'arrête au coussin.

[liste]
- **Le placement de départ.** Strata n'en gère aucun : chaque marché ajoute les risques de son émetteur, dont des stratégies et des crédits hors blockchain qu'on ne peut pas vérifier soi-même. Strata dit ne retenir que des protocoles ayant prouvé leur solvabilité ; la veille de sa suspension, Neutrl affichait des réserves supérieures à ses NUSD en circulation.
- **Un coussin qui peut fondre.** Si des junior partent, la couverture baisse. Les délais de sortie freinent ce mouvement, mais seulement sous certains seuils.
- **Des marchés petits.** Quelques millions de dollars par marché, parfois moins : un gros retrait suffit à déplacer la couverture et les rendements.
- **Les contrats et l'équipe.** Le code a été audité plusieurs fois (Cyfrin, Guardian, Quantstamp). L'équipe garde la main sur les réglages, avec un préavis d'un à deux jours, et peut tout mettre en pause sans délai.

[st] Pourquoi ça compte

[p]
Le tranching permet de proposer un même placement à des épargnants prudents et à des chercheurs de rendement, et les protocoles qui l'adoptent se multiplient. Strata en a été l'un des plus gros : **276 M$ de dépôts au 21 mars**, d'après DeFiLlama. Il en reste **13,5 M$**.

[image | drafts/issue-12/captures/strata-tvl.png | Dépôts sur Strata, d'après DeFiLlama, relevés le 23 novembre 2026. La ligne pointillée marque le gel des rachats de Neutrl.]

[p]
Les dépôts ont surtout fondu **en avril**, quatre mois avant Neutrl : d'environ 250 M$ début avril à environ 80 M$ en mai, presque entièrement sur le marché USDe. Ils ont ensuite été divisés par cinq environ après le gel de Neutrl, d'environ 75 M$ fin août à 13,5 M$. Le marché NUSD, lui, ne pesait plus qu'environ **1,7 M$** au moment de la perte : ces sorties viennent elles aussi surtout du marché USDe. D'après Yearn, qui note le protocole, il s'agit de **cinq vagues de retraits depuis janvier**, faites de quelques très gros dépôts qui partent d'un coup : en septembre, une seule adresse a retiré 63 % de ce qui est sorti de la senior USDe. Aucune n'a bloqué les rachats ni décroché le prix des parts.

[p]
**⬡ Un nouveau concurrent : Mezzanine.** En ligne depuis début novembre, Mezzanine (6,4 M$ de dépôts sur Ethereum et Solana, d'après DeFiLlama) reprend l'idée avec un coffre par placement. Son premier marché porte sur Hastra PRIME, le même placement que le marché PRIME de Strata, avec un junior qui pèse 20 % du coffre d'après son fondateur, soit une couverture de 125 %. Au 23 novembre, d'après DeFiLlama :

[liste]
- **PRIME détenu en direct** rapporte environ **7,3 %** ;
- **la senior de Mezzanine**, environ **10,5 %** ;
- **son junior**, environ **26 %**.

[p]
**En moyenne, ses deux tranches rapportent environ 13,6 % (0,8 × 10,5 + 0,2 × 26), presque le double du placement lui-même : ce surplus ne peut pas venir du découpage, qui partage un rendement sans le créer.** Il vient d'une autre source, levier ou récompenses, à identifier avant de comparer les deux protocoles. [À VÉRIFIER : source du surplus de Mezzanine]

[avis]
💡 **Notre avis :**
Une senior n'est pas un placement sans risque : elle est protégée jusqu'à une perte égale au poids du junior, pas au-delà. Le tranching protège bien contre une année de rendement faible ou une petite perte, mal contre l'effondrement du placement. Avant de choisir une senior pour sa sécurité, la question utile est donc : ce placement peut-il perdre plus que le coussin ?

[p]
[→ Voir la fiche complète](https://www.cryptoluciole.com/protocoles/strata)

---

## Notes du Rédacteur (hors texte, à ne pas assembler)

### Pour `meta.json`
- `loupeNom` : « Strata » · `loupeSlug` : « strata » · `loupeSousTitre` : « choisir son niveau de risque sur un même placement » · `risqueNiveau` / `risqueSens` : « moyen ».
- La fiche `/protocoles/strata` n'existe pas : page « en construction » à prévoir avant l'envoi, sinon retirer le lien. Mention « rédigé avec l'aide de l'IA » sur la future fiche site.

### Contrainte de l'assembleur
- `build_issue.py` impose les titres fixes En bref / Comment ça marche / Le rendement / Les risques / Pourquoi ça compte. D'où : marchés, Neutrl et « trois chiffres » sous « Comment ça marche » (sous-titres dorés), Mezzanine et l'avis sous « Pourquoi ça compte » (la concurrence reste en dernier, comme demandé). « En bref » doit rester un seul paragraphe.

### Constat qui modifie la thèse du brief (à trancher par Marc)
- D'après la répartition par jeton de DeFiLlama (`api.llama.fi/protocol/strata-markets`), la fonte des dépôts vient **du marché USDe** (259,6 M$ le 21/03 ; 234,8 le 01/04 ; 68,6 le 01/05 ; 26,0 le 01/10 ; 8,2 le 01/11 ; 5,5 le 23/11). Le marché NUSD pesait **1,7 M$ le 12/08** (16,6 M$ au pic). Juxtaposer Neutrl et la courbe aurait laissé croire à une cause : je l'écris explicitement. Cause des sorties USDe (fin d'une saison de points ? baisse du rendement de l'USDe ?) : **non sourcée**, marquée [À VÉRIFIER]. Une phrase de cause est nécessaire avant publication (règle « un chiffre surprenant appelle sa cause »).
- Correction de la session principale intégrée : chute surtout en avril (avant Neutrl), puis division par cinq environ après le gel du 13/08 (≈ 75 M$ fin août → 13,5 M$) ; légende du graphique reprise telle que proposée. Le lien temporel avec Neutrl est écrit sans causalité ; la précision « NUSD = 1,7 M$ » montre que même les sorties d'après août viennent surtout du marché USDe.

### Chiffres et sources (pour le fact-checker)
- Rendements et dépôts par tranche : `yields.llama.fi/pools`, projet `strata-markets`, relevé du 23/11 : srUSDe 3,89 % (3,28 M$), jrUSDe 5,85 % (2,22 M$), sUSDe 4,93 % ; srUSDat 8,11 % (4,25 M$), jrUSDat 0,79 M$ (APY affiché 0, non cité) ; srmHYPER 6,39 % (0,61 M$), jrmHYPER 17,09 % (0,12 M$, moyenne 30 j 7,27 % : volatil) ; srPRIME 6,88 % (0,10 M$), jrPRIME 7,44 % (0,27 M$) ; srnOPAL 8,42 % (0,09 M$), jrnOPAL 10,63 % (0,31 M$). mM1-USD et NUSD non repris (APY affiché nul ; NUSD absent).
- Couvertures calculées : USDe 5,50/3,28 = 168 % ; USDat 5,05/4,25 = 119 % (coussin 16 %) ; mHYPER 0,73/0,61 = 120 % ; PRIME 0,37/0,10 = 358 % ; nOPAL 0,39/0,09 = 454 %. Ce sont des TVL DeFiLlama, pas la couverture affichée par l'app : à recouper.
- Recoupement du mécanisme : avec la formule de la doc (x 10 %, y 12,5 %, k 0,3, part senior 0,597), senior = 4,93 × (1 − 0,207) ≈ 3,91 %, conforme aux 3,89 % relevés.
- Fourchette sur un an (10e et 90e centiles des valeurs quotidiennes, 23/11/2025 au 23/11/2026, `yields.llama.fi/chart/<pool>`) : srUSDe 2,70 à 4,06 % (min 1,97, max 13,43) ; jrUSDe 5,59 à 11,49 % (min 0, max 21,06).
- Neutrl : −37 % et −46 % calculés sur une base de 1 $ par part (0,6323 et 0,5426, tweet @strata_markets). La valeur des parts avant la perte était sans doute un peu au-dessus de 1 $ (rendement accumulé) : les pourcentages sont des ordres de grandeur, d'où « environ ».
- Coussin implicite : si l'on prend −46 % et −37 % au pied de la lettre, le junior aurait pesé environ 14 % du pot (couverture environ 117 %). **Calcul non publié** (base des parts incertaine) : à confirmer par une source avant tout usage.
- Réserves de Neutrl le 12/08 (54,4 M$ pour 53,7 M$) : source = capture partagée sur X (@0xPratter). Citée seulement en une demi-phrase dans les risques ; à recouper sur le tableau Accountable.
- Lulo : « agrégateur de prêt sur Solana » à confirmer ; −6,4 % Boost / Protected intact : tweet @uselulo.
- Mezzanine : 6,4 M$ (DeFiLlama) ; pools MSHASTRA 10,52 % (5,11 M$, « Senior Hastra ») et MJHASTRA 25,91 % (1,25 M$, « Junior Hastra ») → junior 19,6 % du coffre, cohérent avec les 20 % annoncés. PRIME direct (projet hastra) 7,29 %. Le fondateur annonçait 13,5 % / 33 % le 12/11 : je donne le relevé DeFiLlama du jour, pas le tweet (lien de parrainage, non repris). DeFiLlama attribue aussi à Mezzanine 15,3 M$ « borrowed », ce qui pointe vers du levier : **non écrit** faute de doc, d'où « levier ou récompenses ».
- Préavis « un à deux jours » : 24 h pour les paramètres de risque, 48 h pour le reste (`technical-documentation_roles-and-permissions.md`, `security.md`).

### Points qui demandent l'avis de Marc
1. **La courbe** : les dépôts ont surtout fondu en avril, avant Neutrl ; cause non établie. Il faut une phrase de cause sourcée avant l'envoi, ou assumer « cause non établie » (ce que la règle « pas de non-information » déconseille).
2. **Le badge** : 🟡 Moyen pour la senior des marchés bien couverts, avec le junior dit « élevé » dans le texte. Un 🔴 se défendrait vu Neutrl et la taille des marchés.
3. **Mezzanine** : le calcul de la moyenne pondérée (13,6 % contre 7,3 %) est la partie la plus tranchée ; elle ne dit pas d'où vient le surplus. Tu valides le ton ?

### Passages que Marc couperait le plus probablement
- **Lulo** (paragraphe entier) : un acteur de plus. Gardé parce que c'est la contre-épreuve directe de la thèse (même perte, coussin épais, senior intacte) ; coupable sans casser la logique.
- **La demi-phrase sur les réserves de Neutrl la veille** (dans les risques) : proche du détail d'affaire réservé au dossier Risque. Gardée parce qu'elle montre que la sélection des placements par Strata ne remplace pas le coussin.
- **Le paragraphe PRIME / nOPAL sous le tableau** (« le junior est peu payé ») : précision de second ordre. Gardé parce qu'il illustre la prime qui varie avec la part de la senior, posée à l'étape 2.

### Glossaire
| Terme | Slug | Statut |
|---|---|---|
| Ratio de couverture | `ratio-de-couverture` | NOUVEAU (absent de `terms.ts`) |
| Tranching | `tranching` | EXISTANT (numéro 2), renvoi par lien vers le numéro 2 |
| Dollar synthétique, delta-neutre, funding rate, action privilégiée perpétuelle | existants | liens |
