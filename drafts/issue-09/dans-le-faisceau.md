# ✨ DANS LE FAISCEAU — numéro 9

> ✍️ Brouillon du Rédacteur (v5 : actu 1 retouchée d'après le communiqué DTCC ; actu 2 inchangée depuis la v3). Deux actus, marqueur ✦ doré, pas de numéro devant les titres. Notation des blocs : `[p]` paragraphe · `[st]` sous-titre · `[def | slug]` encadré de définition · `[liste]` puces · `[tableau]` tableau · `[avis]` encadré vert « 💡 Notre avis » (en puces, comme au numéro 8) · `[source]` ligne de sources. `[À VÉRIFIER]` = point à confirmer par le fact-checker. Italique = terme anglais à sa 1re occurrence.

---

## ✦ Actu 1

> Objectif (une phrase) : montrer que la tuyauterie historique de la Bourse américaine passe elle aussi sur la blockchain, mais entre institutions et sur des réseaux réservés : ce n'est pas une nouvelle plateforme pour particuliers.

**Titre (proposition)** : ✦ La DTCC passe les actions américaines sur la blockchain

[p]
Le 28 octobre 2026, la DTCC a lancé un service qui met des actions américaines sur une blockchain.

[st] **1. La DTCC, la tuyauterie de la Bourse américaine**

[def | `dtcc`] **DTCC**
L'organisme central qui conserve et règle les titres américains. Quand tu détiens une action Apple, chez n'importe quel courtier, elle est en réalité conservée chez sa filiale DTC, qui enregistre son passage d'un courtier à l'autre. DTC conserve **plus de 114 000 milliards de dollars** d'actifs. Équivalent européen : Euroclear.

[st] **2. Ce qu'elle lance**

[p]
Avec le *DTCC Tokenization Service*, ses membres (banques, courtiers) peuvent convertir des titres qu'ils détiennent déjà chez elle en jetons, et inversement. Les jetons sont livrés vers les wallets choisis par ces membres. Selon la DTCC, ces « jumeaux numériques » **conservent les droits de propriété, les protections des investisseurs et les droits économiques** des titres classiques. Concrètement :

[liste]
- la SEC a autorisé, par une lettre de non-action (décembre 2025), un périmètre qui couvre **les actions du Russell 1000** (les 1 000 plus grandes sociétés américaines), **des ETF indiciels et des bons du Trésor**. Au lancement, seuls **34 titres** sont éligibles (environ 30 000 Md$ de capitalisation, selon la DTCC citée par CoinDesk) ;
- **20 membres de DTC** ont signé, et plus de 30 entreprises avaient participé en juillet à un premier essai en conditions réelles ;
- les jetons vivent sur des **réseaux réservés à ses membres** : Canton Network, une blockchain conçue pour les institutions financières, et un réseau privé de la DTCC ; d'autres réseaux sont prévus en 2027.

[p]
Le but annoncé : donner aux institutions plus de liquidité et **mobiliser des garanties en quelques minutes**. Par exemple, une banque qui doit apporter une garantie à une autre institution pourrait le faire en quelques minutes, en jetons.

[st] **3. Ce que ce n'est pas**

[p]
Ce n'est **ni une plateforme d'échange, ni à destination des particuliers** : il n'y a rien à acheter pour un particulier, et ces jetons ne s'échangent sur aucune plateforme ouverte au public.

[p]
Côté particuliers, ce sont des plateformes crypto qui tokenisent des actions, et elles se heurtent aux entreprises : chez OKXICE, 33 d'entre elles avaient refusé fin octobre que leur action soit proposée (voir notre [numéro 8](https://www.cryptoluciole.com/numeros/8)).

[st] **4. Ce qu'il faut en retenir**

[p]
Après les plateformes pour particuliers, ce sont les institutions et les banques qui adoptent la technologie. C'est le même mouvement que dans notre ON ÉCLAIRE de cette semaine : les banques tokenisent leurs dépôts, la DTCC tokenise les actions.

[p]
Dans les deux cas, la blockchain sert de registre, mais **l'établissement garde la main sur qui peut détenir le jeton** (voir « jeton permissionné » dans les DÉFINITIONS, plus bas).

[avis]
💡 **Notre avis** :
- **La tokenisation des actions avance sur deux voies** : les plateformes pour particuliers d'un côté, la DTCC de l'autre, pour des titres qu'elle conserve déjà, pour des usages internes à la finance.
- **À l'avenir, le nombre de participants (20 aujourd'hui) et de titres concernés dira si l'usage s'installe.**

[source] DTCC (communiqué du 28/10) · Cointelegraph · CoinDesk (via Northeast Times) · notre numéro 8 (OKXICE)

---

## ✦ Actu 2

> Objectif (une phrase) : faire comprendre ce que l'on achète vraiment avec un ETF bitcoin « protégé » (une perte maximale contre un gain maximal, tranche par tranche) et à qui ce produit s'adresse.

**Titre (proposition)** : ✦ BlackRock dépose un ETF bitcoin « protégé », aux gains plafonnés

[p]
Le 19 octobre, BlackRock a déposé auprès de la SEC le dossier d'un nouvel [ETF](https://www.cryptoluciole.com/glossaire/etf) : l'*iShares Bitcoin Managed Protection ETF* (ticker **PBIT**). C'est un dépôt, pas un lancement : le fonds n'est pas encore disponible et ses frais ne sont pas renseignés.

[p]
Le principe : tu t'exposes au bitcoin avec une **perte limitée à environ 10 % sur chaque tranche**, mais en échange **tes gains sont plafonnés**.

[st] **1. Comment ça marche**

[p]
PBIT ne détient pas de bitcoin. Il utilise des **options** sur IBIT, l'ETF bitcoin classique de BlackRock (ou une exposition similaire).

[def | `option`] **Option**
Un contrat qui donne le droit, sans l'obligation, d'acheter (*call*) ou de vendre (*put*) un actif à un prix fixé d'avance, à une date donnée. L'acheteur paie ce droit au vendeur : c'est la prime.

[p]
Le dépôt ne détaille pas toute la combinaison  ; selon la presse spécialisée (The Block, Unchained), elle repose sur trois éléments (les calls ont été vus dans notre [numéro 8](https://www.cryptoluciole.com/numeros/8)) :

[liste]
- **une grande partie de l'argent est placée en obligations**, qui rapportent des intérêts ;
- **le fonds achète des options d'achat (calls) sur IBIT**, à un prix d'exercice proche du plancher : c'est ce qui lui donne la hausse du bitcoin sans en détenir ;
- **il vend des options d'achat à un prix plus élevé** pour financer cet achat : au-delà de ce prix, la hausse revient à celui qui les a achetées. C'est ce qui plafonne ton gain.

[p]
Le plancher, en général autour de **90 % de la valeur de départ**, découle de ce montage : si le bitcoin baisse, les calls achetés ne valent plus rien, mais tu ne perds au plus que la somme payée pour ces calls, en partie compensée par les intérêts des obligations. Le plafond est fixé selon les conditions de marché, et son niveau n'est pas publié. Le fonds garde une large latitude pour modifier ces deux bornes.

[p]
Ces bornes valent **par tranche**. Trois tranches se chevauchent : chaque mois, l'une arrive à échéance et une nouvelle démarre. Comme le fonds détient trois tranches à la fois, tu hérites toujours de bornes en partie entamées : les 10 % sont un repère, pas une garantie à partir de ton point d'entrée.

[st] **2. Ce que ça donne, en chiffres**

[p]
Exemple simplifié sur une seule tranche : tu places 100, avec un plancher à 90 et un plafond hypothétique à 115 (le vrai n'est pas publié). Avant frais :

[liste]
- le bitcoin baisse de 40 % : IBIT tombe à 60 ; les calls achetés ne valent plus rien, il te reste la partie obligataire, **environ 90** ;
- le bitcoin monte de 10 % : les calls achetés suivent la hausse, tu passes à **110, comme IBIT** ;
- le bitcoin monte de 60 % : IBIT passe à 160 ; tes calls achetés rapportent, mais les calls vendus te coûtent tout ce qui dépasse 115 : **toi à 115**.

[p]
Attention toutefois : la limite de 10 % vaut pour une tranche, pas pour toute la durée de ton placement. Si le bitcoin chute pendant deux tranches de suite, tu perds environ 10 % à chaque fois : **100 → 90 → 81** (90 − 10 % de 90).

[p]
Dit simplement : **tu échanges les grosses baisses contre les grosses hausses.** Et comme le plafond s'applique à chaque tranche, donc plusieurs fois par an, chaque grosse hausse au-delà du plafond est cédée.

[st] **3. Pas une première, mais une gamme**

[p]
Le concept existe déjà : Calamos et Innovator proposent des fonds bitcoin « à résultat défini ».

[def | `etf-a-resultat-defini`] **ETF à résultat défini (*defined outcome ETF*)**
Un ETF qui utilise des options pour fixer à l'avance, sur une période donnée, une perte maximale et un gain maximal. Le format existe depuis des années sur les indices boursiers comme le S&P 500.

[p]
Avec PBIT, BlackRock déclinerait le bitcoin en trois profils :

[liste]
- **IBIT** : le bitcoin brut, hausses et baisses comprises ;
- **BITA** (*iShares Bitcoin Premium Income*), lancé en juin 2026 : le fonds vend des options d'achat sur sa position en bitcoin pour verser un **revenu régulier élevé**, en renonçant à une partie de la hausse ;
- **PBIT**, s'il est lancé : une **protection contre les baisses**, en renonçant aussi au haut de la hausse.

[p]
Depuis la France, ces ETF américains ne sont en général pas accessibles aux particuliers (réglementation européenne PRIIPs) [À VÉRIFIER].

[avis]
💡 **Notre avis** :
- **Ce que tu achètes : un bitcoin assuré, payé avec sa partie la plus rentable.** C'est cohérent si ta priorité est de limiter chaque baisse à environ 10 % ; ça l'est beaucoup moins si tu détiens du bitcoin pour son potentiel de hausse.
- **À qui ça s'adresse : à l'épargnant prudent américain**, qui veut placer du bitcoin dans un compte-titres avec une perte maximale connue d'avance. Pour toi, depuis la France, avec des options on-chain (comme sur Derive, vu dans notre [numéro 8](https://www.cryptoluciole.com/numeros/8)), tu peux construire un montage équivalent toi-même, un « tunnel » : tu gardes ton bitcoin, tu achètes un put au plancher et tu le finances en vendant un call au plafond, en choisissant tes bornes, à condition de le renouveler à chaque échéance.
- **Le signal : Wall Street traite désormais le bitcoin comme le S&P 500**, avec les mêmes produits structurés. Il devient une brique de la gestion classique, plus seulement un actif à part.

[source] dépôt SEC de BlackRock (19/10) · The Block · Unchained · Crypto Briefing

---

## Notes du Rédacteur (hors texte, à ne pas assembler)

### Ce qui change en v5
- Actu 1 : faits recalés sur le communiqué DTCC du 28/10 (but annoncé = liquidité et garanties en quelques minutes, sans « règlement » ni « hors heures de Bourse » ; droits conservés selon la DTCC ; périmètre Russell 1000, ETF indiciels et bons du Trésor à la place des « 34 titres » ; 20 participants et plus de 30 entreprises). Correctifs 1 à 7 du vérificateur appliqués : tableau coupé, paragraphe « tuyauterie » et 2e phrase du chapeau coupés, Besu retiré, « réseaux réservés à ses membres », avis en « deux voies », signal = un courtier qui propose le jeton à des particuliers.

### Ce qui avait changé en v4
- Actu 1 réécrite en entier (option A de Marc) avec un fil directeur : la DTCC (tuyauterie), ce qu'elle lance et dans quel but, ce que ce n'est pas (pas une plateforme, pas un concurrent d'OKXICE, rien à acheter), puis le lien avec ON ÉCLAIRE (les institutions tokenisent, sur des réseaux fermés). Sont supprimés : les 84,5 %, la règle des 30 jours détaillée et l'ancien tableau. Le nouveau tableau compare en 2 colonnes les plateformes pour particuliers et la DTCC. Actu 2 inchangée.

### Ce qui avait changé en v3
- Mécanisme PBIT réécrit selon Decrypt (obligations + calls achetés + calls vendus plus haut), plancher expliqué par ce montage, exemple « sur une seule tranche » qui découle des 3 puces ; phrase sur les tranches entamées ; avis « épargnant prudent américain et son conseiller », le montage DIY pour le lecteur français ; PRIIPs raccourci. Actu 1 : « 33 fin octobre » seul, « la direction d'OKXICE », avis au conditionnel (« si le jeton DTCC est bien le titre lui-même »), « Au lancement : ».

### Ce qui avait changé en v2 (correctifs 1 à 12 du vérificateur)
- **Actu 1** : le paragraphe AMC/Robinhood est supprimé ; la partie 1 s'ouvre sur 2,43 Md$ / 84,5 % et porte un nouveau titre. La règle des 30 jours tient en 2 phrases, avec le lien vers le numéro 8. Le décompte suit celui du numéro 8 (33 fin octobre, peut-être 38 [À VÉRIFIER]), avec la nuance d'Andrew Cuomo. Wells Fargo, Arm et Intuit sont retirés ; les noms viennent maintenant du numéro 8. La DTCC passe au conditionnel (« selon la DTCC »), et aucun accord des émetteurs ne lui est attribué. Le paragraphe sur la lettre de non-action et le pilote est coupé. Après le tableau, la liste ne garde que deux précisions : les 34 titres (un seul chiffre) et la conversion de 2 h à 18 h. Robinhood est retiré de la colonne « plateforme » du tableau, puisque le paragraphe AMC n'y est plus. La ligne de sources est complétée.
- **Actu 2** : on parle de « perte limitée à environ 10 % sur chaque tranche », avec l'exemple 100 → 90 → 81. Le mécanisme est présenté en 2 puces : le put au plancher, puis le call au plafond, avec la réserve que le dépôt ne détaille pas la combinaison. Les obligations sont mentionnées, ainsi que la conséquence d'une entrée en cours de tranche. Le « plus de 100 % sur un an » est remplacé par la formulation par tranche. Le point PRIIPs passe de l'avis au corps. Le titre perd ses « … ». BITA est présenté comme lancé en juin 2026, et PBIT est au conditionnel (« s'il est lancé »). Aucune durée de tranche, aucun niveau de plafond, aucune date de lancement de PBIT.

### Notes pour le fact-checker
- **33 refus fin octobre** : à recaler le jour de l'envoi.
- **Actu 1 v5** : chiffres et but repris du communiqué DTCC (28/10) ; à confirmer : « aucune plateforme ouverte au public », Euroclear comme équivalent européen, plage 2 h-18 h (absente du communiqué ? source : brief), slug du terme « jeton permissionné » dans les DÉFINITIONS.
- **DTCC** : date du 28/10 (la veille du 03/11 indiquait le 29/10) ; plage 2 h-18 h ; « plus de 114 000 Md$ ».
- **PBIT** : plancher « typiquement ~90 % » ; 3 tranches à départs mensuels ; frais absents du dépôt ; mécanisme repris de Decrypt (obligations + calls achetés + calls vendus) : vérifier dans le dépôt que le plancher vient bien de ce montage.
- **BITA** : lancé en juin 2026 (dépôt en janvier) ; frais de 0,65 % non cités.
- **PRIIPs** : vérifier que les ETF américains sont bien inaccessibles aux particuliers français.
- **ETF à résultat défini sur le S&P 500 « depuis des années »** : Innovator, depuis 2018 environ.

### Termes glossaire proposés
| Terme | Slug | Forme dans le texte | Statut |
|---|---|---|---|
| DTCC | `dtcc` | encadré | NOUVEAU |
| ETF à résultat défini | `etf-a-resultat-defini` | encadré | NOUVEAU |
| Option | `option` | encadré (texte raccourci du glossaire) | EXISTANT (numéro 8) |
| Action tokenisée | `action-tokenisee` | lien + glose en ligne | EXISTANT |
| ETF | `etf` | lien | EXISTANT |
