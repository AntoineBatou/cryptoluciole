# 🔦 ON ÉCLAIRE — numéro 12

> ✍️ Brouillon du Rédacteur (v1.3, après defi-expert et les boucles 1 et 2 du vérificateur). Notation des blocs : `[p]` paragraphe · `[st]` amorce dorée « ⬡ … » · `[def | slug]` encadré de définition · `[liste]` puces · `[tableau]` tableau · `[note]` méthode en petit · `[image | chemin | légende]` · `[avis]` encadré vert « 💡 Notre avis » · `[source]` · `[À VÉRIFIER]` chiffre à confirmer.
>
> **Objectif** (brief validé par Marc le 23/11) : comprendre ce qui change quand la garantie d'un prêt DeFi est une action et pas une crypto, en comparant point par point avec l'Aave classique.
> **Thèse** : une action tokenisée n'est pas un ETH comme les autres (prix figé le week-end, émetteur qui peut geler, liquidateur qui ne peut pas la rendre à l'émetteur) ; Aave compense en prêtant moins, et propose cette semaine de baisser ses facteurs parce que la volatilité des actions a monté (Microsoft 79 % → 65 %).
> **Ce qui reste dehors** : les formules de calibrage (haircut, provision d'intérêts, rafraîchissement de 0,5 %), le registre légal d'Abu Dhabi et le statut « unvested », le détail du multiplicateur de dividendes, le bonus de 6,5 % de SpaceX et Strategy, la mécanique du bonus dynamique, le vocabulaire hub / spoke, les étapes du vote.

**Titre proposé :** Emprunter contre une action tokenisée sur Aave : ce qui change par rapport à l'ETH

---

[p]
Sur **Aave V4**, l'un des marchés accepte en collatéral **huit actions tokenisées par Coinbase** (c'est Coinbase qui émet les jetons et peut les échanger contre les vraies actions) : Apple, Amazon, Alphabet (Google), Meta, Microsoft, Nvidia, Tesla et SpaceX. Contre elles, tu ne peux emprunter qu'un actif, de l'USDC, et en petite quantité : au total, les emprunteurs de ce marché ne peuvent pas emprunter plus de **21 M$ d'USDC** aux prêteurs d'Aave.

[p]
Pour rappel, le principe d'Aave : tu déposes une garantie sur le protocole, en échange de quoi tu peux emprunter un actif (par exemple de l'USDC) pour une valeur moindre. Si tu ne rembourses pas, ta garantie est vendue pour rembourser ta dette ; et si elle baisse trop, c'est la même chose : tu es liquidé. Mais presque chaque réglage change. Un terme d'abord : le ***collateral factor***.

[def | `collateral-factor`] **Collateral factor**
La part de la valeur de ta garantie que tu peux emprunter. Avec un facteur de 65 %, 1 000 $ d'actions te permettent d'emprunter au plus 650 $. Plus l'actif est jugé risqué et volatile, plus le facteur est bas.

[st] **⬡ Aave classique contre Aave actions.**

[tableau]
| | Aave classique (ETH, Aave V3) | Aave actions (V4, sur Base) |
|---|---|---|
| Prix de la garantie | Bouge en continu, 7 jours sur 7 | • Bouge en semaine, jour et nuit • Figé le week-end et les jours fériés américains |
| Combien tu peux emprunter | • 81 % de ta garantie • Liquidation à 84 % | • 55 à 79 % selon l'action • Liquidation dès ce même seuil |
| Bonus du liquidateur | 5 % | 4,95 à 5,5 % |
| Qui revend ta garantie liquidée | Le liquidateur, aussitôt, sur un DEX | Le liquidateur, qui ne peut pas échanger les jetons contre les vraies actions auprès de Coinbase : il doit les revendre ou se couvrir |
| Pouvoirs de l'émetteur | Aucun : l'ETH n'a pas d'émetteur | Coinbase peut geler des jetons, bloquer les transferts, arrêter le prix |
| Accès | Ouvert à tous | • Interdit aux Américains • Offert publiquement seulement à Abu Dhabi • Statut incertain en France |

[note]
ETH : paramètres d'Aave V3 Ethereum lus on-chain le 23/11. Actions : facteurs en vigueur au 23/11, avant la proposition de baisse.

[st] **⬡ Le prix s'arrête le week-end.**

[p]
Sur Aave, le prix de ta garantie est fourni par un **oracle** Chainlink. Pour l'ETH, il suit un marché qui ne ferme jamais. Pour une action, il suit la Bourse américaine, avec ses séances avant l'ouverture, après la clôture et de nuit : il publie du **dimanche 20 h au vendredi 20 h, heure de New York** (de 2 h le lundi à 2 h le samedi à Paris, en ce moment), soit **120 heures sur les 168 d'une semaine**.

[image | drafts/issue-12/captures/semaine-prix.png | La semaine d'une action tokenisée sur Aave : le prix bouge du dimanche 20 h au vendredi 20 h (heure de New York), soit 120 heures sur 168 ; il reste figé le week-end et les jours fériés américains.]

[p]
Le reste du temps, l'oracle affiche le dernier prix du vendredi soir. **Tout ce qui arrive à l'action pendant le week-end atteint ton prêt d'un seul coup, à la reprise du prix le dimanche soir.**

[st] **⬡ Un seul seuil au lieu de deux.**

[p]
Sur Aave V3, deux chiffres sont séparés : tu peux emprunter jusqu'à 81 % de la valeur de ton ETH, et tu n'es liquidé qu'à 84 %. Même en empruntant au maximum, tu gardes un coussin de 3 points.

[p]
Sur Aave V4, dont ce marché fait partie, le *collateral factor* fait les deux : c'est à la fois ta limite d'emprunt et ton seuil de liquidation. Emprunter au maximum, c'est se placer exactement sur le seuil. **La marge de sécurité, c'est toi qui la fixes, en empruntant moins que le facteur.**

[st] **⬡ Le risque du week-end, en chiffres.**

[p]
Aave mesure la santé d'un prêt avec un seul chiffre, le ***health factor*** : la valeur de ta garantie multipliée par le *collateral factor*, divisée par ta dette. Au-dessus de 1, tout va bien ; sous 1, tu es liquidable.

[liste]
- **Au départ** : tu déposes **1 000 $** d'actions Tesla tokenisées (ta garantie, *collateral factor* de 65 %) et tu empruntes **600 USDC** (ta dette), un peu sous le maximum de 650 $. *Health factor* : 1 000 × 0,65 ÷ 600 = **1,08**.
- **Ton seuil** : tu es liquidé quand ta dette dépasse 65 % de ta garantie. Tant que l'action vaut 1 000 $, ce plafond est de 650 $ ; mais ici c'est la garantie qui baisse, et ta dette de 600 $ le touche quand la garantie ne vaut plus que **923 $** (600 ÷ 0,65), soit une baisse d'environ 8 %.
- **Vendredi, 20 h à New York** : le prix se fige à 1 000 $.
- **Pendant le week-end**, une mauvaise nouvelle tombe. Sur Aave, rien ne bouge : ton *health factor* reste à 1,08.
- **Dimanche soir**, le prix reprend directement à **900 $** (−10 %). *Health factor* : 900 × 0,65 ÷ 600 = **0,975**, sous 1 : tu es liquidable dès la première mise à jour.
- **Ce que tu perds** : la liquidation est partielle. D'après notre calcul, tu perds environ **15 $**, le bonus du liquidateur, et tu gardes le reste.

[p]
Tu aurais pu rembourser pendant le week-end, à condition de suivre l'action ailleurs (sur un perp, par exemple). Mais tu n'as jamais eu de prix intermédiaire, à 950 $ ou à 930 $, pour te signaler le danger. Avec de l'ETH, la même baisse de 10 % se serait faite par étapes, sous tes yeux, et ton *health factor* aurait baissé au fil des heures.

[st] **⬡ Pourquoi liquider une action est plus délicat.**

[liste]
- **Le liquidateur ne peut pas rendre l'action.** Sur l'ETH, il saisit ta garantie et la revend dans la seconde sur un DEX. Ici, il ne peut en pratique pas échanger les jetons contre les vraies actions auprès de Coinbase : ce rachat est réservé à des participants agréés par l'émetteur. Il doit donc revendre les jetons sur le marché, ou se couvrir avec un perp sur la même action (voir [notre numéro 10](https://www.cryptoluciole.com/numeros/10)) en attendant de pouvoir vendre. Son bonus reste proche de celui de l'ETH (4,95 à 5,5 % contre 5 %) : ce risque en plus est payé par une part empruntable plus basse, pas par le bonus.
- **L'émetteur peut tout arrêter.** Coinbase peut mettre un wallet sur liste noire, geler des jetons ou suspendre leurs transferts. Une suspension bloque tout sur Aave : ni dépôt, ni retrait, ni liquidation. Lors d'une division d'action, Coinbase arrête aussi le prix, et Aave gèle le marché de l'action le temps de l'opération.

[st] **⬡ Pourquoi Aave veut prêter moins cette semaine.**

[p]
Le saut du dimanche soir menace aussi les prêteurs d'USDC. Si l'action reprend si bas que ta garantie ne couvre plus ta dette et le bonus du liquidateur, personne n'a intérêt à te liquider, et la perte reste au marché : c'est la ***bad debt*** (une dette que plus aucune garantie ne couvre). Le *collateral factor* sert à l'éviter.

[p]
Il est calculé par LlamaRisk, le cabinet qui conseille Aave sur ses risques, pour encaisser le bonus du liquidateur et un saut de prix qu'une action ne fait qu'une nuit sur dix ans. Plus l'action est volatile, plus ce calcul donne un facteur bas. Dans la version actuelle de sa méthode, le résultat est en outre **plafonné à 65 %**.

[p]
Le 23 novembre, LlamaRisk a proposé de baisser six des huit facteurs :

[liste]
- **Microsoft** : de 79 % à 65 % ;
- **Apple** : de 78 % à 65 % ;
- **Alphabet** : de 76 % à 65 % ;
- **Amazon** : de 73 % à 65 % ;
- **Nvidia** : de 70 % à 65 % ;
- **SpaceX** : de 55 % à 53 % ;
- Meta et Tesla restent à 65 %.

[p]
Cette baisse a deux causes :

[liste]
- **La volatilité a monté** depuis début 2026 : de 27,9 % à 34,1 % par an pour l'action typique du S&P 500, de 19,4 % à 33,5 % pour Microsoft. **Le facteur de Microsoft passerait ainsi de 79 % à environ 72 %.**
- **Le plafond de la méthode actuelle** : **il ramène ces 72 % à 65 %.** Les 79 % dataient de la mise en ligne du marché, avant ce plafond, et LlamaRisk ne publie pas la raison de ce plafond.

[p]
Seules les actions les plus volatiles, comme SpaceX, passent sous le plafond ; l'action d'Anthropic, que LlamaRisk propose aussi d'ajouter et qui ne cote que depuis une séance, serait à 45 %.

[p]
Prenons un emprunt au maximum contre Microsoft. À 79 %, il ne supportait qu'une chute d'environ 17 % en un seul saut avant que la garantie ne couvre plus la dette et le bonus maximal de 5,5 % (0,79 × 1,055 ≈ 0,83), le point où apparaît la *bad debt*. À 65 %, il en supporte environ 31 % (0,65 × 1,055 ≈ 0,69). **Le marché encaisserait un saut presque deux fois plus grand ; en échange, 1 000 $ de Microsoft ne permettraient plus d'emprunter que 650 $, contre 790 $.**

[p]
Aucune position ne serait liquidée par ce changement : un emprunt existant garde l'ancien facteur tant que tu n'y touches pas. Ces propositions sont publiées sur le forum d'Aave et ne sont pas encore votées.

[avis]
💡 **Notre avis** : la baisse proposée cette semaine protège d'abord les prêteurs d'USDC, pas l'emprunteur. Pour lui, la vraie marge se mesure au saut que l'action peut faire d'ici au dimanche soir, pas au *health factor* affiché le vendredi.

[source]
Sources : forum de gouvernance d'Aave, propositions de LlamaRisk du 18/11/2026 (ajout de six actions, complétée le 23/11 pour Anthropic) et du 23/11/2026 (mise à jour des *collateral factors*) ; évaluation technique et juridique des actions Coinbase sur Aave V4 par LlamaRisk (24/09/2026) ; paramètres d'Aave V3 Ethereum lus on-chain (23/11/2026) ; exemple de liquidation : calcul CryptoLuciole.

---

## Notes du Rédacteur (hors texte, à ne pas assembler)

### Écarts avec le brief, à trancher par Marc
- **« Prix figé la nuit » : inexact, corrigé.** D'après LlamaRisk (25690, § 5, et 26441, § 2), le flux Chainlink publie aussi la nuit en semaine (séances pré-ouverture, régulière, post-clôture et de nuit), du dimanche 20 h au vendredi 20 h ET. Il n'est figé que du vendredi 20 h au dimanche 20 h et les jours fériés américains. Le texte dit donc « figé le week-end », pas « la nuit ». Nuance laissée dehors : les prix de nuit viennent de marchés peu liquides, et le facteur est calibré sur la chute entre un prix hors séance et le plus bas jusqu'à 5 min après l'ouverture régulière suivante.
- **Renvoi au numéro 9 ajouté** (non prévu dans le brief) : PendleLoop y empruntait déjà contre TSLAc sur Aave V4, avec le même seuil de 65 % et le même risque du week-end. C'est le renvoi le plus utile ; numéro 10 cité pour les perps sur actions ; numéros 8 et 11 non cités (pas de lien direct avec le mécanisme).
- **Heure de Paris** : novembre = New York UTC−5, Paris UTC+1, écart 6 h → 2 h du matin. « En ce moment » parce que l'écart passe à 5 h quelques semaines par an (changements d'heure décalés).

### Chiffres et calculs
- ETH sur Aave V3 Ethereum Core : limite 81 %, liquidation 84 %, pénalité 5 % (lecture on-chain du 23/11 transmise par defi-expert ; 81 % recoupé sur DeFiLlama `lendBorrow`). Le [À VÉRIFIER] est retiré.
- Facteurs actuels et proposés, volatilités 27,9 → 34,1 % et 19,4 → 33,5 % : 26482 (LlamaRisk, données au 19/11).
- Facteurs des nouvelles actions (Netflix 65, AMD 49, Strategy 47) : 26441.
- Plafond de 21 M$ (« draw cap » du marché) : 26441. Bonus 5,5 % : 26441 et 26482.
- 17 % / 31 % : notre calcul (1 − CF × 1,055), recoupé par le commentaire d'un prêteur sous 26482 (« about 31.4 % » à 65 %, 16,7 % à 26,2 % aux facteurs actuels). Ce calcul ignore la provision d'intérêts du week-end : ordre de grandeur, pas valeur exacte.
- Cinq adresses autorisées au rachat, aucune pause utilisée : 25690 (état au 23/09). À rafraîchir si possible.
- « Une nuit sur dix ans » : 26482 (« exceeds it on one night per stock in ten years »).

- Exemple de liquidation (calcul CryptoLuciole, repris de defi-expert et recalculé) : facteur santé 0,975 ; bonus dynamique ≈ 5,1 % (entre 4,95 % à 1,0 et 5,5 % sous 0,90) ; résolution de 0,65 × (900 − 1,051 x) / (600 − x) = 1,24 → x ≈ 285 USDC remboursés, ≈ 300 $ saisis, reste ≈ 600 $ / 315 $, perte ≈ 15 $. La cible 1,24 vient de defi-expert : je ne l'ai pas relue moi-même dans les sources.
- 72 % pour Microsoft hors plafond : chiffre de defi-expert, cohérent avec la décote de 22,84 % de 26482 ; non recalculé par moi.
- Anthropic (ANTc) à 45 % : 26441, message de LlamaRisk du 23/11 (données du 20/11), une séance de cotation au moment de la proposition.

### Boucle 2 (v1.3, 23/11)
Bonus reformulé (le risque en plus est payé par un facteur plus bas) ; deux causes de la baisse en puces ; Anthropic situé comme proposé à l'ajout ; 21 M$ rattaché à l'intro ; avis « resserre ses règles et suit la volatilité ».

### Boucle 1 du vérificateur appliquée (v1.2, 23/11)
V4 situé dès l'intro et seuil unique attribué à V4 en général ; baisse expliquée en deux causes (volatilité 79 → ≈ 72 %, plafond de la méthode actuelle 72 → 65 %) ; nouvelles actions réduites à SpaceX + Anthropic en demi-phrase ; intertitre « Pourquoi liquider une action est plus délicat » ; ligne « Bonus du liquidateur » au tableau, puce liquidateur allégée (cinq adresses, plateformes, part d'Aave coupées) ; LlamaRisk situé une fois, au calcul du facteur ; paragraphe Abu Dhabi retiré (ligne Accès du tableau étoffée) ; parenthèse dividendes et date des pauses coupées ; « Aave peut encore liquider pendant ces 48 heures » coupé ; mise à jour réduite à deux phrases ; liquidation partielle réduite à une puce (V3 aussi liquide partiellement : pas une différence) ; *health factor* glosé à sa nouvelle première occurrence ; avis retouché.

### Corrections defi-expert appliquées (v1.1, 23/11)
1. Seuil ETH 84 % (coussin de 3 points), [À VÉRIFIER] retiré. 2. Bonus 4,95-5,5 % selon la gravité, 10 % à Aave. 3. Ce que perd l'emprunteur dans l'exemple : liquidation partielle, ≈ 15 $. 4. Les 65 % viennent du plafond (Microsoft ≈ 72 % sans lui) ; seules SpaceX, AMD, ServiceNow, Strategy passent sous le plafond. 5. Pauses datées du 23/09 ; pause du prix pour les divisions, dividendes sans pause. 6. 17 % / 31 % = seuil de bad debt. 7. Rachat « en pratique, sauf agrément ». 8. Accès : incertitude juridique, offre publique seulement à Abu Dhabi. 9. Emprunt existant non touché = ancien facteur. 10. Anthropic à 45 % en une demi-phrase. Le *health factor* est désormais glosé dans l'exemple (sa première occurrence).

### Passages que Marc couperait le plus probablement
1. **La phrase sur les 79 % « sous une version antérieure » de la méthode** : précision de procédure ; gardée parce que sans elle le lecteur croit que la volatilité seule fait passer Microsoft de 79 à 65 %.
2. **La demi-phrase Anthropic** : second rang ; gardée parce qu'elle montre en dix mots le facteur le plus bas et sa raison (pas d'historique).
3. **La note sous le tableau** : une ligne en petit qui date les deux colonnes (règle du 16/11).

### Autres points pour Marc
- Terme : « facteur de garantie (*collateral factor*) », comme dans le brief. Le praticien dit plutôt « collateral factor » à l'oral ; à trancher. Slug proposé `facteur-de-garantie` (nouveau) ; *bad debt* glosé en ligne, sans encadré.
- Le schéma `semaine-prix.png` reste à fabriquer (légende prête).
- Rythme visuel : tableau, image, deux listes de puces, une liste de chiffres ; jamais plus de 3 paragraphes d'affilée.

### Termes glossaire
| Terme | Slug | Forme | Statut |
|---|---|---|---|
| Facteur de garantie (collateral factor) | `facteur-de-garantie` | encadré | NOUVEAU |
| Oracle | `oracle` | mention | EXISTANT |
| Health factor | `health-factor` | glose en ligne | EXISTANT (numéro 9) |
| Bad debt | — | glose en ligne | à décider |
| Action tokenisée | `action-tokenisee` | mention | EXISTANT |

- 23/11 (session principale) : terme gardé en anglais à la demande de Marc (« si ça n'existe pas tu gardes en anglais ») : *collateral factor*, slug `collateral-factor` ; « le facteur » reste comme raccourci dans le corps.
