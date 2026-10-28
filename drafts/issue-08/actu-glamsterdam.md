# ✨ DANS LE FAISCEAU — numéro 8 — Actu ② : Ethereum repousse Glamsterdam

> ✍️ Brouillon du Rédacteur (v2, réécrite d'un trait après la boucle 2 du vérificateur : 7,5/10). Notation des blocs : `[p]` paragraphe · `[st]` sous-titre · `[def | slug]` encadré de définition · `[liste]` puces · `[avis]` encadré vert « 💡 Notre avis ». `[À VÉRIFIER]` = point à confirmer par le fact-checker. Italique = terme anglais à sa 1re occurrence.
>
> Objectif (une phrase) : expliquer pourquoi Ethereum a repoussé sa prochaine grande mise à jour, en langage simple, et ce que ça change pour le lecteur.

**Titre (proposition)** : ✦ Ethereum met en pause Glamsterdam, sa prochaine grande mise à jour

---

[p]
Glamsterdam est la prochaine grande mise à jour d'Ethereum, un *hard fork* initialement prévu pour fin 2026. Le 13 octobre, une étude de sécurité a montré qu'un de ses changements pouvait dérégler des contrats déjà en place.

[def | `hard-fork`] **Hard fork**
Une mise à jour des règles d'une blockchain que tous les ordinateurs du réseau (les nœuds) doivent appliquer à la même date.

[st] **1. Ce que Glamsterdam doit apporter**

[liste]
- **Amélioration de la scalabilité** : la limite de [gas](https://www.cryptoluciole.com/glossaire/gas) par bloc, c'est-à-dire la quantité de calcul qu'un bloc peut contenir, passerait de **60 M aujourd'hui à 200 M** dans les tests, soit plus de 3×. Chaque transaction consommant du gas, un bloc pourra donc contenir environ 3 fois plus de transactions, et les frais devraient baisser quand le réseau est chargé.
- **Des transactions traitées en parallèle** : chaque bloc annoncera à l'avance les données que ses transactions vont lire et modifier. Les nœuds pourront alors en traiter plusieurs en même temps, au lieu de l'une après l'autre. C'est ce qui rend la hausse de capacité tenable.
- **L'enchère des blocs intégrée au protocole** (*ePBS*) : aujourd'hui, le validateur qui publie un bloc l'achète en général tout fait à des constructeurs spécialisés (les *block builders*), via des intermédiaires extérieurs à Ethereum. Glamsterdam inscrit cette enchère dans les règles du réseau, sans intermédiaire à qui faire confiance.

[st] **2. Pourquoi des contrats pourraient dérailler**

[p]
Une transaction peut consommer deux choses : du **calcul**, que le nœud effectue une fois puis oublie, et de la **mémoire permanente**, quand elle crée une donnée nouvelle (un solde, un compte…) que **chaque nœud doit stocker pour toujours**.

[p]
Tripler la capacité de transaction sans rien changer ferait aussi grossir cette mémoire environ 3 fois plus vite : de ~116 Go à ~387 Go par an [À VÉRIFIER]. Faire tourner un nœud deviendrait trop coûteux pour un particulier, et le réseau se centraliserait.

[p]
Glamsterdam rend donc plus cher le seul fait de **créer une donnée permanente** (EIP-8037) et d'**y accéder** (EIP-8038), deux EIP (les propositions de modification d'Ethereum) afin de décourager l'augmentation de la taille de la chaîne.

[p]
**Dit simplement : on veut 3 fois plus de transactions, pas 3 fois plus de stockage. C'est ce changement de prix sur la donnée permanente qui pose problème.**

[p]
En effet, certains contrats réservent à une étape un montant de gas fixe, écrit dans leur code. Or la plupart de ces contrats ne se modifient plus une fois déployés. Prenons un contrat qui réserve 30 000 gas pour une étape qui écrit une donnée neuve :

[liste]
- **aujourd'hui**, cette écriture coûte 22 100 gas : le budget suffit, l'étape passe ;
- **après Glamsterdam**, elle coûterait 110 020 gas, environ 5 fois plus : le budget ne suffit plus, l'étape échoue.

[p]
C'est ChainSecurity, une société d'audit, qui a mis le problème au jour : **13 cas réels**, sans publier les noms des projets.

[p]
**Dit simplement : sans changer une ligne de leur code, des contrats en place pourraient se comporter autrement après la mise à jour.**

[st] **3. Le test sur Hoodi est suspendu**

[p]
Glamsterdam tourne depuis le 6 octobre sur Sepolia, un *testnet*. Il devait arriver le lundi 26 octobre sur Hoodi, le testnet le plus proche du réseau réel.

[def | `testnet`] **Testnet**
Une copie d'une blockchain où les jetons n'ont pas de valeur, qui sert à essayer une mise à jour avant le réseau réel (le *mainnet*).

[p]
Le jeudi 22 octobre, les développeurs ont retiré cette activation et le passage à 200 M de gas, sans nouvelle date ni pour Hoodi ni pour le mainnet. Un développeur cité par Bankless juge un report à 2027 « très probable » : c'est son avis, pas une décision [À VÉRIFIER].

[st] **Ce que ça change pour toi**

[liste]
- **Rien à faire**, confirme la Fondation Ethereum, pour les utilisateurs comme pour les détenteurs d'ETH.
- **Un calendrier qui glisse** : la hausse de capacité, et la baisse des frais attendue à terme, arriveront plus tard.
- **Côté DeFi** : ChainSecurity a prévenu les projets concernés ; si un protocole que tu utilises l'est, c'est à lui d'annoncer un correctif.

[avis]
💡 **Notre avis** :
- **Le garde-fou a fonctionné** : une étude externe a repéré le problème avant le mainnet.
- **Le vrai sujet : grandir sans casser l'existant.** Plus de capacité oblige à faire payer le stockage plus cher, mais des contrats écrits il y a des années ne peuvent pas s'adapter. Chaque hausse de capacité reposera la question.
- **À suivre : une nouvelle date pour Hoodi, et le sort d'EIP-8037** (modifiée ou retirée). Ce choix dira si le report se compte en semaines ou en mois.

**Source** : ChainSecurity (étude du 13/10) · Decrypt (23/10) · Bankless (~23/10) · TechReport · CryptoTicker · KuCoin · CoinAcademy (26/10)

---

## Notes du Rédacteur (hors texte, à ne pas assembler)

### Exemple chiffré de la partie 2
- **Les 30 000 gas réservés sont une illustration CryptoLuciole**, pas un cas tiré de l'étude. Les deux coûts (22 100 aujourd'hui, 110 020 après) sont, eux, ceux de l'étude ChainSecurity pour une écriture dans un emplacement neuf.
- L'image de l'enveloppe a été supprimée (remplacée par ce pas-à-pas).

### Notes pour le fact-checker
- **Nouveautés ajoutées (27/10, demande de Marc)** : vérifier que Glamsterdam contient bien (1) les *block-level access lists* (EIP-7928 : liste des comptes/emplacements lus et modifiés, permet l'exécution parallèle) et (2) l'ePBS (EIP-7732, côté consensus « Gloas »). Decrypt (23/10) cite les deux sans numéro d'EIP. Vérifier aussi que le problème ChainSecurity ne touche **que** le repricing (EIP-8037/8038), pas ces deux nouveautés — formulation « et lui seul ».
- **Dates de Glamsterdam sur le mainnet** : 1er, 8 ou 9 décembre discutés ; le texte dit seulement « d'ici fin 2026 ».
- **60 M → 200 M** : 60 M = limite actuelle du mainnet ; 200 M = valeur testée sur Sepolia. Vérifier que « dans les tests » est exact (Sepolia) et que 200 M était bien la cible retirée pour Hoodi le 22/10.
- **22 100 → 110 020 gas** : chiffres de l'étude ChainSecurity (13/10) pour une écriture dans un emplacement neuf.
- **« Sur certains contrats, cet échec ne serait plus annulé mais enregistré comme définitif »** : reformulation de la citation ChainSecurity (« un chemin d'échec qui annulait auparavant peut désormais aller au bout »). Le « pourquoi » du lien avec la hausse de prix est volontairement tu (pas dicible simplement).
- **« La plupart des contrats ne se modifient plus une fois déployés »** : formulation prudente (il existe des contrats modifiables par leurs équipes). À valider.
- **Raison d'être d'EIP-8037/8038 (freiner la croissance des données stockées)** : à confirmer dans le texte des EIP.
- **Report à 2027** : avis du développeur Nixo cité par Bankless, pas une décision (marqué [À VÉRIFIER]). Le nom n'est pas dans le texte ; à ajouter si Marc le souhaite.
- **« Rien à faire »** : déclaration de la Fondation Ethereum, à retrouver dans la source primaire.

### Volontairement laissé hors du texte
- La 3e nouveauté de Glamsterdam (enchère de construction des blocs intégrée au protocole, ePBS) et les noms techniques (*block-level access lists*, vérification en parallèle), le mécanisme interne de l'attaque (règle des 63/64, try/catch), le chiffre de croissance de l'état (~116 Go/an, CoinAcademy), les agents d'IA qui scannent les contrats, la Fast Confirmation Rule. Utiles pour une fiche ou un futur ON ÉCLAIRE, pas pour comprendre le report.

### Termes glossaire proposés
| Terme | Slug | Forme dans le texte | Statut |
|---|---|---|---|
| Hard fork | `hard-fork` | encadré | NOUVEAU |
| Testnet | `testnet` | encadré | NOUVEAU (pas encore défini ailleurs dans le numéro 8 ; ON ÉCLAIRE ne l'utilise pas en encadré) |
| Gas | `gas` | lien dans le corps, sans encadré (le lecteur connaît le gas) | NOUVEAU (absent de `terms.ts`, alors que plusieurs définitions l'emploient) |

### Volontairement laissé hors du texte
- ePBS (enchère de construction des blocs), la vérification en parallèle (*block-level access lists*), le mécanisme interne de l'attaque (règle des 63/64, try/catch) et le « pourquoi » du lien entre hausse de prix et attaque, le chiffre de croissance de l'état (~116 Go/an, CoinAcademy), les agents d'IA qui scannent les contrats, la Fast Confirmation Rule.

### Termes glossaire proposés
| Terme | Slug | Forme dans le texte | Statut |
|---|---|---|---|
| Hard fork | `hard-fork` | encadré | NOUVEAU |
| Testnet | `testnet` | encadré | NOUVEAU (pas défini ailleurs dans le numéro 8) |
| Gas | `gas` | lien dans le corps, sans encadré | NOUVEAU (absent de `terms.ts`) |
| EIP | `eip` | glose dans le corps | NOUVEAU (facultatif) |

### Longueur
≈ 550 mots titres, encadrés et avis compris ; ≈ 480 sans les titres ni les encadrés de définition. Coupe possible si besoin : le « Dit simplement » de la partie 1.
