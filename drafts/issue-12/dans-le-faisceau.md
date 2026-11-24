# ✨ DANS LE FAISCEAU — numéro 12

> ✍️ Brouillon du Rédacteur (v4 : boucle 2 du vérificateur ; v3 : boucle 1 du vérificateur ; v2 : mécanique corrigée d'après le rapport Chainflip). Deux actus, marqueur ✦ doré, pas de numéro devant les titres. Notation des blocs : `[p]` paragraphe · `[st]` sous-titre · `[def | slug]` encadré de définition · `[liste]` puces · `[avis]` encadré vert « 💡 Notre avis » · `[source]` ligne de sources. `[À VÉRIFIER]` = point à confirmer par le fact-checker. Italique = terme anglais à sa 1re occurrence.

---

## ✦ Actu 1

> **Objectif** : comprendre comment fonctionne le *vault* d'un protocole d'échange entre blockchains gardé par une *threshold signature*, et comment Chainflip a pu être vidé par une signature que le réseau n'avait jamais demandée.
> **Thèse** : le seuil protège contre des validateurs qui trichent un par un, pas contre un défaut commun à tous les nœuds : si une même faille livre assez de morceaux de clé d'un coup, le seuil est contourné.
> **Dehors** : FROST, la nature précise de la faille, Tornado Cash, le vol de septembre, la partie 2 du rapport et l'indemnisation.

**Titre (proposition)** : ✦ Chainflip vidé d'environ 12,6 M$ par une faille commune à tous ses validateurs

[p]
Le 21 novembre 2026, environ **12,6 M$** ont été volés à Chainflip, un *bridge*, concurrent de THORChain.

[st] **1. Un vault gardé par une centaine de validateurs**

[p]
Chainflip tient un *vault*, le portefeuille du protocole, sur chaque blockchain : une adresse sur Bitcoin, un contrat sur Ethereum, etc. Quand tu échanges du BTC contre de l'ETH, tu envoies tes BTC dans le vault Bitcoin, et le vault Ethereum t'envoie les ETH.

[p]
Personne ne détient la clé de ces vaults : elle est découpée en morceaux, répartis entre les [validateurs](https://www.cryptoluciole.com/glossaire/validateur) du réseau (jusqu'à 150), des opérateurs qui immobilisent des jetons FLIP pour obtenir leur place. Pour sortir des fonds, il faut qu'**environ 100 d'entre eux** signent ensemble. Pour voler un vault, il faudrait donc en corrompre les deux tiers en même temps.

[def | `threshold-signature`] ***Threshold signature* (signature à seuil)**
Une signature produite à plusieurs sans que la clé privée existe jamais en entier : chaque participant détient un morceau de clé, et un nombre minimum d'entre eux (le seuil) doit coopérer pour signer. Chaque morceau reste sur la machine de son validateur : c'est donc une cible. Contrairement à un [multisig](https://www.cryptoluciole.com/glossaire/multisig), la blockchain ne voit qu'une seule signature ordinaire : elle ne sait pas combien de participants l'ont produite. C'est une application du [MPC](https://www.cryptoluciole.com/glossaire/mpc).

[st] **2. Ce qui s'est passé**

[p]
D'après le rapport publié par Chainflip le 23 novembre, un compte de validateur enregistré la veille du vol, avec la mise minimale, a servi de point d'entrée : il permettait de se connecter aux autres validateurs. Via une faille dans une bibliothèque réseau commune à tous les nœuds, l'attaquant a pris la main sur des machines de validateurs et en a extrait les morceaux de clé.

[p]
Avec assez de morceaux pour atteindre le seuil, il a fabriqué hors du réseau une signature que celui-ci n'avait jamais demandée : elle était valide. **Les vaults n'avaient donc aucun moyen de refuser le retrait.**

[p]
Le vault Bitcoin a été vidé, puis le vault Ethereum peu après :

[liste]
- **133,34 BTC** côté Bitcoin ;
- **520,2 ETH**, **≈ 3,25 M USDC** et **≈ 758 000 USDT** côté Ethereum.

[p]
Cet argent était d'abord celui des fournisseurs de liquidité, qui déposent leurs jetons dans les vaults pour servir les échanges : d'après Chainflip, la perte touche ces fournisseurs, les acteurs de l'écosystème et les détenteurs de FLIP. L'indemnisation n'est pas encore annoncée.

[st] **3. La réponse**

[p]
Chainflip a suspendu les échanges, les dépôts et les retraits, puis publié un correctif le 21 novembre, actif chez tous les validateurs le 23. Une alerte avait sonné côté Bitcoin 8 minutes après le vol, sans déclencher d'arrêt : elle n'était pas reliée à la procédure d'arrêt automatique. Le FLIP, le jeton que les validateurs immobilisent, est passé d'environ 0,48 $ à 0,31 $ le jour du vol, puis à 0,20 $ le 24 novembre.

[avis]
💡 **Notre avis** :
**Le seuil protège contre des validateurs qui trichent un par un, pas contre un défaut commun à tous les nœuds.** Ajouter des validateurs n'y change rien. Pour juger un *bridge* qui se dit décentralisé, la question utile n'est donc pas seulement « combien de signataires ? », mais « tournent-ils tous le même logiciel ? ».

[source] Chainflip, rapport d'incident partie 1 (23/11, chainflip.io/blog/incident-report-vault-exploit-21-november-2026-part-1) · The Block (22/11) · FinanceFeeds · Cryptoticker

---

## ✦ Actu 2

> **Objectif** : savoir où en est le bras de fer entre Kalshi et New York, et ce que la semaine du 18 au 23 novembre change au conflit entre la CFTC et les États.
> **Thèse** : New York vise potentiellement le siège de Kalshi, pas seulement des clients ; le répit du 23/11 ne règle rien, et cette semaine les juges fédéraux ont laissé les États mener la bataille.
> **Dehors** : les noms de la juge, de la procureure et du juge fédéral, le rappel détaillé du numéro 11, les autres États, Polymarket.

**Titre (proposition)** : ✦ Marchés de prédiction : Kalshi peut rester à New York, pour l'instant

[p]
Notre [numéro 11](https://www.cryptoluciole.com/numeros/11) racontait le procès de la CFTC contre la Louisiane : le régulateur fédéral y défend la [préemption fédérale](https://www.cryptoluciole.com/glossaire/preemption-federale), le principe selon lequel sa loi sur les produits dérivés l'emporte sur les lois des États sur le jeu. Le même conflit se joue désormais à New York : Kalshi, plateforme de marchés de prédiction agréée par la CFTC, y a son siège.

[st] **1. Ce que veut l'État de New York**

[p]
La procureure générale de New York poursuit Kalshi et demande au juge de lui interdire d'opérer **depuis New York**, et pas seulement auprès des New-Yorkais. Elle lui reproche notamment :

[liste]
- d'accepter des utilisateurs de 18 à 20 ans, alors que l'âge minimum pour parier sur le sport en ligne est de 21 ans dans l'État ;
- de proposer des contrats sur des équipes universitaires new-yorkaises, sur lesquelles l'État interdit les paris.

[p]
Comme Kalshi est installé à New York, il affirme qu'une telle interdiction le fermerait **dans tout le pays**. La procureure assure que ce n'est pas son but.

[st] **2. Une semaine devant les tribunaux**

[p]
Comme en Louisiane, la CFTC est intervenue devant un juge fédéral pour bloquer l'action de l'État. Quatre décisions sont tombées en une semaine :

[liste]
- **18 novembre** : la cour d'appel fédérale du 4e circuit donne tort à Kalshi face au Maryland sur la préemption : la loi du Maryland sur le jeu peut s'appliquer.
- **19 novembre** : un juge fédéral renvoie le dossier new-yorkais devant le tribunal de l'État, faute de compétence fédérale. C'est donc un juge de l'État, et non un juge fédéral, qui tranchera.
- **Dans la foulée** : dans un autre dossier, une juge fédérale refuse la demande d'urgence de la CFTC, qui voulait bloquer la procédure de l'État.
- **23 novembre** : la Cour suprême de l'État de New York, qui est malgré son nom un tribunal de première instance, refuse l'interdiction temporaire demandée par la procureure.

[p]
**Kalshi continue donc d'opérer.** Ce refus ne tranche pas le fond : les deux parties reviennent devant la juge le 30 novembre sur l'accès des 18-20 ans, et une audience sur une interdiction valable pendant toute la durée du procès est prévue en janvier.

[avis]
💡 **Notre avis** :
**Le conflit change d'échelle : ailleurs, Kalshi risquait de perdre les clients d'un État ; à New York, la demande telle qu'elle est écrite vise son siège.** Et cette semaine, les juges fédéraux ont laissé les États décider. Tant que la Cour suprême des États-Unis ne tranche pas, c'est État par État que se dessine la carte de Kalshi.

[source] CoinDesk (23/11) · Sports Betting Dime · Cointelegraph · notre numéro 11

---

## Notes du Rédacteur

### Choix faits
- **Actu 1, v2 (après defi-expert)** : mécanisme réécrit d'après le rapport Chainflip partie 1 (23/11) : point d'entrée = validateur à mise minimale, faille dans une bibliothèque réseau commune, parts de clé extraites, signature fabriquée hors réseau. « Retrait autorisé » supprimé. Thèse de l'avis changée (défaut commun à tous les nœuds). Montants du rapport, réponse en un paragraphe + 3 puces.
- **Actu 1, ordre** : principe du coffre et du seuil → l'attaque dans l'ordre (entrée, faille, parts, signature, vol) → la réponse → l'avis.
- **v3 (boucle 1 du vérificateur)** : *vault* glosé et employé partout (au lieu de « coffre ») ; « morceaux de clé » partout ; encadré renommé *Threshold signature* (slug `threshold-signature`) ; « deux tiers » remonté dans le paragraphe du seuil ; le corps dit que l'attaquant a forcément atteint le seuil ; partie 3 réduite (vol de septembre, Tornado Cash, rotations, partie 2 du rapport coupés) ; avis Chainflip resserré. Kalshi : CFTC introduite avant l'avis, conséquence du renvoi du 19/11 dite, 18/11 précisé (préemption), condition « si le juge retient la demande » dans l'avis, « La nuance pèse lourd » supprimé. Pas d'angle crypto pour Kalshi : aucun fait sourcé dans les notes, rien d'inventé. Pas de visuel.
- **Actu 1, terme** : *threshold signature* gardé en anglais (titre de l'encadré), « signature à seuil » entre parenthèses. Lien au multisig et au MPC (numéro 10).
- **Actu 1, coupé** : FROST, l'indice Bitquery (nonce anormal), le financement Tornado Cash du 11/11, le nom de la bibliothèque et le type de bug (détail technique de second rang).
- **Actu 2, noms** : juge, procureure et juge fédéral non nommés (règle « pas de noms qui ne servent pas la compréhension ») ; ça évite aussi le conflit de sources sur le nom du juge fédéral (Broderick / Schofield).
- **Actu 2, numéro 11** : une phrase de rappel avec la glose de la préemption (le lien au glossaire ne remplace pas la définition), sans reprendre la Louisiane ni Polymarket.

### Points pour le fact-checker
- Montants du rapport Chainflip (133,34 BTC contre 122,86 BTC dans la presse ; total ≈ 12,6 M$).
- « Jusqu'à 150 validateurs, seuil d'environ 100 », rotation tous les quelques jours ; FLIP immobilisé pour obtenir sa place (doc Chainflip).
- Alerte Bitcoin à 8 minutes, correctif du 23/11 : rapport partie 1.
- À qui appartenaient les fonds volés (liquidité des fournisseurs, échanges en cours) : non dit dans mes notes.
- Paris interdits sur les équipes universitaires new-yorkaises.
- « Concurrent de THORChain ».
- FLIP (fact-check du 24/11, DeFiLlama et CoinGecko) : ≈ 0,48 $ avant le vol → ≈ 0,31 $ le 21/11 → 0,20 $ le 24/11 (DeFiLlama, 24/11). Le « 0,12 $ » était un point isolé de CoinGecko. Juges : Vernon Broderick (renvoi, 19/11) ; Lorna Schofield (refus de la demande de la CFTC, 20/11 d'après une source). Audience du 30/11 devant la juge Melissa Crane (18-20 ans).
- Kalshi : intervention de la CFTC devant un juge fédéral contre New York (si infirmée, la 2e phrase de l'avis tombe) ; 4e circuit le 18/11 (portée exacte : la loi du Maryland peut s'appliquer) ; renvoi le 19/11 et rejet de la demande d'urgence de la CFTC (nom du juge et nature exacte de la décision) ; audience de janvier.

### Glossaire
| Terme | Slug | Forme dans le texte | Statut |
|---|---|---|---|
| *Threshold signature* (signature à seuil) | `threshold-signature` | encadré | **À CRÉER** |
| Validateur | `validateur` | lien en ligne | existant |
| Multisig | `multisig` | lien dans l'encadré | existant (numéro 10) |
| MPC | `mpc` | lien dans l'encadré | existant (numéro 10) |
| Préemption fédérale | `preemption-federale` | lien + glose en ligne | créé au numéro 11 |
