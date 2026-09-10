# 🔍 SOUS LA LOUPE — Liquity V2

> Format maison : en bref / comment ça marche / Le rendement / Les risques (badge) / Pourquoi ça compte, puis l'encadré vert « 💡 Notre avis ».
> ⚠️ Tout chiffre marqué 🔄 est à rafraîchir le jour de l'envoi.

---

## Le CDP où c'est toi qui fixes ton taux d'intérêt

### En bref

**Liquity V2** est un protocole de [CDP](https://www.cryptoluciole.com/glossaire/cdp) sur Ethereum. Tu y déposes de l'**ether**, du **wstETH** (l'ether staké de Lido) ou du **rETH** (celui de Rocket Pool) — pas de bitcoin — et tu empruntes en échange le stablecoin maison, le **BOLD**.

- **Mise en ligne** : 2021 pour la V1 et janvier 2025 pour la V2.
- **Montant déposé sur la V2** : **95,6 M$** 🔄, dont un peu plus de la moitié en wstETH.
- **Audité en profondeur** : Trail of Bits, ChainSecurity, Dedaub, Coinspect, Certora (vérification formelle), Recon, plus un concours ouvert de cinq semaines qui a mobilisé plus de 800 chercheurs pour 350 000 $ de primes.
- Contrats **immuables** et **sans gouvernance**.

---

### Comment ça marche

Le dépôt, l'emprunt, le seuil de liquidation : tout ce qu'on a vu plus haut s'applique tel quel. Ce qui rend Liquity différent tient en une phrase : **c'est l'emprunteur qui fixe le taux d'intérêt qu'il paiera.**

Pas de DAO qui vote un taux tous les mois, pas de formule qui le calcule en fonction de la demande. Tu choisis ton chiffre à l'ouverture, **entre 0,5 % et 25 % par an**, et tu peux le modifier quand tu veux ensuite.

À l'ouverture, le protocole prélève par ailleurs des **frais d'entrée** équivalents à sept jours d'intérêt au taux moyen de ta branche — de l'ordre de **0,1 % du montant emprunté** pour un taux de 5 % 🔄, et rien ensuite.

Formulé ainsi, la réponse paraît évidente : tout le monde met 0,5 %. Sauf qu'il y a une contrepartie.

**Les redemptions.** N'importe qui, à tout moment, peut apporter 1 BOLD au protocole et repartir avec 1 $ de collatéral. C'est ce qui tient le prix du BOLD collé au dollar : dès qu'il passe sous 1 $, il devient rentable de l'acheter au rabais pour le rendre au protocole contre un dollar d'ether.

> **Redemption** — l'échange de 1 BOLD contre 1 $ de collatéral, ouvert à tous. Concrètement, le protocole prend l'ether d'un emprunteur, le donne à celui qui a apporté le BOLD, et efface d'autant la dette de l'emprunteur.

Reste à savoir **chez qui** le protocole va prendre cet ether. Et la règle est simple : **on ponctionne d'abord les emprunteurs qui ont fixé le taux le plus bas**, puis on remonte.

Le marchandage : payer moins cher, c'est accepter de se faire rembourser d'office avant les autres. Payer plus cher, c'est acheter la tranquillité.

**Un exemple.** Deux emprunteurs déposent chacun **100 $** d'ether et empruntent **50 BOLD**.

- **Alix** fixe son taux à **5 %** : elle paie 2,50 $ par an (50 × 0,05).
- **Bruno** fixe le sien à **9 %** : il paie 4,50 $ par an (50 × 0,09), soit 2 $ de plus qu'Alix.

Le BOLD passe brièvement sous 1 $ sur le marché. Un arbitragiste en achète 20 au rabais et les apporte au protocole pour toucher 20 $ d'ether : c'est une redemption, et elle tape **Alix la première**, puisqu'elle paie le taux le plus bas.

Le protocole efface 20 $ de sa dette et prélève 20 $ d'ether sur son dépôt. Elle ne perd pas d'argent au passage — 20 $ de dette contre 20 $ de collatéral, l'échange est à parité *[À VÉRIFIER : Liquity V2 applique des frais de redemption ; confirmer au fact-check ce qu'ils changent côté emprunteur]*. Mais elle n'a plus que **80 $** d'ether exposés à la hausse au lieu de 100, alors que c'était toute la raison de son emprunt. Bruno, lui, n'a rien vu passer : ses 2 $ de plus par an lui ont acheté ça.

Deux choses à en retenir. D'abord, **si aucune redemption n'arrive de l'année, c'est Alix qui a eu raison** : elle a emprunté deux fois moins cher que Bruno pour exactement le même service. Ensuite, elle n'est pas condamnée à subir : **elle peut relever son taux quand elle veut** pour repasser derrière les autres dans la file d'attente. C'est ce qu'on fait en pratique — on ouvre bas, on surveille, et on remonte quand la file se rapproche.

---

### Ce que ça coûte vraiment d'emprunter

Ce mécanisme donne un résultat mesurable, et c'est le chiffre le plus intéressant du protocole. Voici les taux **réellement payés** aujourd'hui par l'ensemble des emprunteurs de chaque branche 🔄 :

| Branche | Dette totale | Taux moyen payé |
|---|---|---|
| ETH | 11,2 M BOLD | **3,21 %** |
| wstETH | 18,9 M BOLD | **1,09 %** |
| rETH | 4,2 M BOLD | **5,77 %** |
| **Ensemble** | **34,3 M BOLD** | **2,36 %** |


### Le rendement - Autre stratégie possible :

Le protocole permet également une stratégie non pas d'emprunt mais de rendement, en faisant fruictifier ses BOLDs :
Il est possible de déposer dans les **pools de stabilité BOLD**.

Rendements du jour 🔄 :

| Pool de stabilité | Rendement annuel |
|---|---|
| Branche ETH | 2,17 % |
| Branche wstETH | 3,88 % |
| Branche rETH | 3,94 % |

D'où vient cet argent ? De **l'intérêt payé par les emprunteurs**, celui-là même qu'ils ont fixé eux-mêmes.

Pas de jeton distribué en récompense, pas d'émission inflationniste : **l'argent que touche le déposant vient entièrement des emprunteurs**, par deux canaux — les intérêts qu'ils paient, et le collatéral récupéré avec une décote quand l'un d'eux se fait liquider. Et aucune société ne prélève sa part au passage : les 100 % repartent vers les utilisateurs.

En échange, tu rends un service. Comme chez f(x), **le pool de stabilité absorbe les liquidations** : quand un emprunteur passe sous son seuil, c'est le BOLD du pool qui rembourse sa dette, et les déposants reçoivent son collatéral avec une décote. Tu peux donc ressortir avec un peu moins de BOLD et un peu d'ether en plus — ce qui est un gain tant que l'ether ne s'effondre pas dans la foulée. Certains pools permettent de vendre automatiquement ce collatéral dès qu'il est perçu, pour ne pas s'exposer à sa volatilité.

Sur un an, ne compte pas sur un chiffre fixe. Ces taux dépendent de deux choses qui bougent : **ce que les emprunteurs acceptent de payer** et **le montant déposé dans le pool**, entre lesquels le rendement se partage.

Sur les douze derniers mois, ces pools ont passé l'essentiel du temps **entre 1 % et 5 %**, avec une médiane de **3 % à 4,3 %** selon la branche.

---

### Les risques &nbsp; 🟡 **Moyen**

> Badge : bg `#fef9c3`, txt `#a16207`.

**Ce qui rassure.** Personne ne peut changer les règles pendant que ton argent est là, et le code a été passé au crible par six cabinets, dont un en vérification formelle, plus un concours ouvert de cinq semaines.

**Ce qui l'empêche de descendre à « faible ».** Le prix de l'immuabilité est réel — **ce qui ne peut pas être modifié ne peut pas non plus être corrigé**.

- **Un audit ne garantit rien.** Trois semaines après le lancement de janvier 2025, un bug critique a été découvert dans les pools de stabilité malgré tout cet arsenal. Contrats immuables oblige, il n'y avait pas de correctif possible : le protocole a été **entièrement redéployé** et relancé en mai 2025, sans perte de fonds pour les utilisateurs.
- **La [liquidation](https://www.cryptoluciole.com/glossaire/liquidation) est bien réelle.** Le [LTV](https://www.cryptoluciole.com/glossaire/ltv) plafonne à **90,91 % sur la branche ETH**, **83,33 % sur wstETH et rETH**. Emprunter au maximum, c'est se faire liquider au premier décrochage sérieux.
- **La redemption est le risque propre à Liquity.** Fixer un taux bas pour économiser, c'est se placer en tête de file. Une position ouverte et jamais surveillée peut se retrouver largement remboursée d'office — sans perte sèche, mais sans l'exposition qu'on était venu chercher.
- **Tout est adossé à l'ether.** Un décrochage brutal touche les trois branches en même temps, il n'y a pas de diversification du collatéral.
- **Le protocole est petit** : **95,6 M$** 🔄, loin des poids lourds du secteur. Moins de liquidité sur le BOLD, donc plus de frottement pour entrer et sortir en montant.

---

### Pourquoi ça compte

Presque tous les protocoles de prêt te servent un taux calculé par une formule ou voté par une DAO : tu le subis, et il peut doubler du jour au lendemain si la demande d'emprunt s'emballe. Liquity fait l'inverse — il te laisse choisir ton taux, qui ne bouge ensuite que si tu le décides, contre un risque nommé et compréhensible.

Et le résultat n'est pas cosmétique : **2,36 % en moyenne contre 6 à 8 % chez Sky ou Spark** — f(x), lui, ne facture aucun intérêt annuel, mais sur un modèle différent (droit d'entrée et de sortie).

---

> ### 💡 Notre avis (encadré vert)
>
> Le design est honnête, et rare : le protocole ne cherche pas à te vendre un rendement, il organise un marché entre ceux qui empruntent et ceux qui prêtent, et il leur reverse tout.
>
> Côté emprunteur, c'est aujourd'hui l'une des meilleures adresses pour emprunter contre de l'ether.
>
> Côté déposant, entre **2 % et 4 %** en ce moment, c'est dans le bas de la fourchette des placements en stablecoins. Logique : ce rendement ne vient que des intérêts réellement payés, pas d'un jeton distribué pour attirer les dépôts. C'est moins généreux, et plus solide.
>
> Reste la limite qui décidera pour beaucoup : **pas de bitcoin en garantie**.

---

**Sources :** lecture directe des contrats `ActivePool` des trois branches sur Ethereum, le 07/09/2026 (taux moyens réellement payés — aucune API ne les expose) ; DeFiLlama (TVL, rendements et historique 12 mois des pools de stabilité) ; documentation Liquity V2 et page audits ; blog Liquity, redéploiement de mai 2025 ; audit Coinspect (risque d'oracle). 🔄 = chiffre à rafraîchir le jour de l'envoi.
