# ✨ DANS LE FAISCEAU — numéro 8 — Actu ① : Papertrade change ses règles

> ✍️ Brouillon du Rédacteur (v2, réécrite d'un trait après la boucle 2 du vérificateur : 7/10). Notation des blocs : `[p]` paragraphe · `[st]` sous-titre · `[def | slug]` encadré de définition · `[liste]` puces · `[avis]` encadré vert « 💡 Notre avis ». `[À VÉRIFIER]` = point à confirmer par le fact-checker. Italique = terme anglais à sa 1re occurrence.
>
> Objectif (une phrase) : expliquer ce que Papertrade a changé dix jours après son lancement, pourquoi, et ce que ça change pour ses utilisateurs.

**Titre (proposition)** : ✦ Papertrade réécrit ses règles, dix jours après son lancement

---

[p]
Sur Papertrade, présenté dans notre [numéro 7](https://www.cryptoluciole.com/numeros/7), on trade des perps ×1000 contre une réserve, et les perdants reçoivent le PAPER, un jeton qui, staké, touche une part des pertes suivantes.

[p]
Le 19 octobre [À VÉRIFIER : 19 ou 20], l'équipe a annoncé trois changements, **en vigueur depuis le 21 octobre**.

[st] **1. Le PAPER reste bloqué**

[p]
On peut le staker, mais ni l'envoyer ni le vendre, et l'équipe n'a « pas de projet » d'ouvrir les transferts promis début octobre.

[p]
Pourquoi ? Parce qu'un PAPER échangeable deviendrait une arme contre la réserve.

[p]
Prenons une réserve de 10 M$ et une attaque (manipuler le prix pour lui arracher ses fonds) qui coûterait 15 M$, ordre de grandeur donné par l'équipe :

[liste]
- **Aujourd'hui** : l'attaquant récupère 10 M$ et en dépense 15. Il perd 5 M$, donc personne n'attaque.
- **Avec un PAPER échangeable** : il commence par vendre à découvert 10 M$ de PAPER, c'est-à-dire parier sur sa baisse. Puis il vide la réserve. Le PAPER ne rapporte plus rien, puisque la réserve qui paie les stakers est vide : imaginons qu'il perde 90 %. Le pari rapporte alors 9 M$.
- **Bilan** : +10 M$ pris à la réserve, −15 M$ de coût d'attaque, +9 M$ de pari = **+4 M$**. L'attaque devient rentable.

[p]
**Dit simplement : tant que le PAPER ne peut pas être vendu, personne ne peut parier sur sa chute, et attaquer la réserve reste une opération à perte.**

[st] **2. Les gains sur de tout petits mouvements sont rognés**

[p]
En plus de la décote présentée dans notre [numéro 7](https://www.cryptoluciole.com/numeros/7), **plus un gain vient d'un mouvement minuscule, plus une part en est retenue** (sous 0,06 % de mouvement, ou 0,1 % le week-end et aux heures creuses).

[p]
Exemple sur le bitcoin : un gain brut de 100, tiré d'un mouvement d'environ 0,03 %, rapportait environ 53 après décote ; il n'en rapporte plus qu'**environ 27** (selon notre calcul, avant frais). C'est le cas le plus défavorable : au-delà de 0,06 % de mouvement, rien ne change.

[p]
La cible : les bots de *scalping*, sur qui la mesure pèserait 15 fois plus que sur un trader moyen, selon l'équipe [À VÉRIFIER].

[def | `scalping`] **Scalping**
Ouvrir et fermer des positions très vite pour encaisser de tout petits écarts de prix, des centaines de fois.

[p]
**Dit simplement : le trader ordinaire est peu touché, sauf s'il clôture très vite ou le week-end.**

[st] **3. Le PAPER s'émet sans ralentir**

[p]
Chaque perte crée du PAPER, donc dilue ceux qui en détiennent. Avant, le PAPER reçu par dollar perdu baissait (100 au lancement, environ 10 le 21 octobre) : l'émission ralentissait. Désormais, chaque dollar perdu donne **une part fixe de l'offre existante** : l'offre grossit en proportion d'elle-même, sans ralentir.

[p]
**Dit simplement : l'offre de PAPER double environ tous les 630 M$ de pertes** (selon notre calcul). Pour situer, la réserve avait encaissé plus de 260 M$ de gains sur les traders en onze jours [À VÉRIFIER] : à ce rythme, l'offre doublerait en moins d'un mois. L'activité a toutefois nettement ralenti depuis.

[avis]
💡 **Notre avis** :
- **Les perdants : les bots, et ceux qui perdaient exprès pour accumuler du PAPER.** Ces derniers ont payé un jeton invendable, et ce n'est pas provisoire : d'après l'argument même de l'équipe, le PAPER ne peut pas s'échanger sans fragiliser la réserve.
- **Le vrai risque reste la gouvernance.** En dix jours, l'équipe a changé trois règles clés et ramené le délai de sécurité de 7 jours à 24 heures, sans vote des détenteurs. Chaque changement se défend ; qu'ils arrivent du jour au lendemain, beaucoup moins.
- **La métrique à suivre : les versements aux stakers rapportés à l'offre de PAPER.** Si l'offre grossit plus vite, chaque PAPER rapporte moins.

**Source** : documentation Papertrade (« Protocol changes », 21/10) · post X @papertrade_xyz « A note on transferability » · Bankless (20/10) · KuCoin, TokenPost (20/10) · CryptoTimes (21/10)

---

## Notes du Rédacteur (hors texte, à ne pas assembler)

### Écarts avec les faits fournis au départ (corrigés d'après la doc officielle, lue le 27/10)
- **Ancienne émission ≠ « 100 PAPER/$ fixe »** : 100 PAPER/$ tant que la LP était sous 2 M$, puis un taux décroissant (100 × (120 M$ ÷ (120 M$ + H))², environ 10/$ le 21/10, cf. fiche site). Il n'y avait pas de plafond strict, et chaque perte diluait déjà : le changement porte sur la **vitesse** (avant, ralentissement ; maintenant, croissance proportionnelle à l'offre, sans ralentir).
- **Petits mouvements : gains rognés, pas « payés davantage »**. Seuils 0,06 % / 0,1 % confirmés par la doc (bandes du *holdback*).

### Notes pour le fact-checker
- **Exemple chiffré de la partie 1** : réserve 10 M$ / attaque 15 M$ = exemple de l'équipe (annonce du 19-20/10, reprise par Crypto Briefing, Hokanews) ; le « −90 % du PAPER » et le bilan « +4 M$ » sont une **illustration CryptoLuciole** (hypothèse), pas un chiffre de l'équipe. Vérifier que la formulation « imaginons » le rend clair.
- **Date d'annonce** : Bankless (publié le 20/10, 15h49 heure de New York) dit « lundi », soit le 19/10 ; le post X serait daté du 20/10.
- **Mise en vigueur** : doc « Protocol changes » : contract set 2 « Live since 21 Oct 2026 » (set 1 : 7-21 oct.), tx d'upgrade 0x4410b81e…acb6.
- **« Pas de projet »** : Bankless cite « At this juncture we do not have plans to allow off-contract token transferability ». Promesse antérieure (« after a sufficient period of time has passed ») = post d'annonce du 1er octobre.
- **Exemple 10 M$ / 15 M$ / pari de 10 M$** : exemple de l'équipe rapporté par Bankless. La chute « puisque la réserve qui paie les stakers est vide » est l'explication causale demandée par le vérificateur ; cohérente avec l'article.
- **Exemple chiffré partie 2 (53 → 27)** : calcul CryptoLuciole d'après la doc (« Asymmetric impact PnL »), BTC, courbe standard. Mouvement réel 3,4 pb (0,034 %), là où la retenue est maximale (~1,2 pb). Set 1 : mouvement compté 3,4 − 0,2 (deadband) = 3,2 pb → 94 % du brut, × échelle de décote (≈ 0,565) ≈ **53**. Set 2 : 3,4 − 0,2 − 1,2 = 2,0 pb → 59 % du brut, × échelle (≈ 0,462) ≈ **27**. Paramètres BTC : baseRate 10 %, rateMultiplier 15 000, referenceNotional 100 000 $, positionMultiplier 814,598. Avant les 2 % de frais. C'est le cas le plus défavorable ; sur les mouvements hors bande (> 0,06 %), rien ne change.
- **« ~15 fois plus sur les bots »** : chiffre de presse (backtest de l'équipe), absent de la doc → [À VÉRIFIER].
- **Émission** : doc « Mint curve » : mint = supply × (e^(c·g) − 1), c ≈ 1,101e-9 par dollar (~0,110 % de l'offre par M$ de pertes). Doublement : ln 2 ÷ 1,101e-9 ≈ 630 M$.
- **Repère « plus de 260 M$ de gains de la réserve entre le 10 et le 21 octobre »** : c'est le compteur H de la fiche site (gains cumulés de la LP au-dessus de 2 M$, au 21/10), donc des pertes **nettes** des traders. La base d'émission est la perte **brute** de chaque trade perdant, plus élevée : le repère sous-estime le volume de pertes qui compte pour l'émission. Si on trouve les pertes brutes cumulées (DeFiLlama / lectures on-chain), les préférer ; sinon garder la formulation actuelle, qui ne dit que ce que mesure H.
- **⚠️ La LP peut-elle désormais passer sous zéro ?** La doc du set 2 parle d'un « tracked LP below zero » (bonus d'insolvabilité), alors que notre numéro 7 écrivait « la LP ne peut donc jamais s'endetter » (file d'attente quand elle est vide). Vérifier si c'est une comptabilité interne (dette envers la file) ou un vrai changement. Le bonus a été retiré de l'actu pour ne pas contredire le numéro 7 ; il va dans la fiche site.
- **Avis, puce gouvernance** : timelock ramené de 7 jours à 24 h le 20/10 (fiche site) ; PAPER sans droit de vote (fiche site, enBref).

### Volontairement laissé hors du texte
- Bonus d'insolvabilité ×5 (voir ci-dessus), builder codes (0,5 % du gain), permissions de `pushStakerFees`, clôture au prix de faillite traitée comme une liquidation, réaction des farmers (« rug »), encadré Dilution (remplacé par une phrase dans la partie 3).

### Termes glossaire proposés
| Terme | Slug | Forme dans le texte | Statut |
|---|---|---|---|
| Scalping | `scalping` | encadré | NOUVEAU |
| Dilution | `dilution` | mention dans le corps (plus d'encadré) | NOUVEAU (facultatif) |
| Contrat perpétuel | `contrat-perpetuel` | mention « perps » → lien possible | EXISTANT |
| Levier | `levier` | mention « ×1000 » | EXISTANT |
| Staking | `staking` | mention « staké » → lien possible | EXISTANT |

### Longueur
≈ 465 mots du premier paragraphe à la fin de l'avis (encadré compris), soit un peu au-dessus de la cible de 400-450. Coupe possible si besoin : la phrase-repère « Pour situer… 260 M$ » (elle porte aussi un [À VÉRIFIER]).

---

## MAJ fiche site à prévoir (`/protocoles/papertrade`, Mode B — à faire par la session principale après validation)

La fiche est datée du 21/10 et annonce elle-même une révision après la mise à jour des contrats. À changer :
1. **Notes « Une fiche datée… » et « Une mise à jour exécutable dès le 21 octobre »** : la mise à jour est faite (contract set 2 en vigueur depuis le 21/10, tx 0x4410b81e…acb6). Les remplacer par le récit des changements, et dire si le nouveau code est vérifié ou audité [À VÉRIFIER].
2. **Section émission** (liste 100/$ sous 2 M$, formule en H, tableau, « ~10 PAPER/$ le 21/10 », note « Pas de plafond strict ») : la réécrire. Nouvelle règle : part fixe de l'offre par dollar perdu (~0,11 % par M$, formule supply × (e^(c·g) − 1)), offre qui double environ tous les 630 M$ de pertes. Garder l'ancienne règle comme historique.
3. **Bonus d'insolvabilité** (nouveau bloc) : quand la LP comptable est sous zéro, la part d'une perte qui la renfloue compte jusqu'à 5× pour l'émission (m = 1 + 4u(2 − u), de 1× à 5× sur 3 jours, remis à 1 dès que la LP repasse ≥ 0). Expliquer d'abord ce que signifie une « LP sous zéro » et réconcilier avec « la LP ne peut jamais s'endetter » (file d'attente) [À VÉRIFIER].
4. **« Ce calcul ne marche plus… 10 PAPER par dollar… 0,26 $ » et chiffres Lookonchain** : dater « sous l'ancienne règle » ou refaire le calcul.
5. **Décote / « impact asymétrique »** : ajouter la retenue (*holdback*) et les deux courbes. Courbe standard : bande de 0,0075 % à 0,06 % (0,75 à 6 pb), au plus ~1,2 pb retenu (à 3,4 pb). Courbe des heures creuses (week-ends et heures calmes, bascule par un *keeper* selon un calendrier fixé par le protocole) : bande de 0,003 % à 0,1 % (0,3 à 10 pb), au plus ~2 pb (à 4,2 pb). Ordre des 4 étapes : deadband → retenue → impact → frais de 2 %. Ajouter l'exemple BTC 0,034 % : 53 → 27 pour 100 de gain brut. Revoir le tableau et le pas-à-pas de la manipulation (« environ 700 $ après… ») si les mouvements concernés tombent dans la bande.
6. **Builder codes** (nouveau bloc) : 0,5 % du gain sur les clôtures gagnantes ; sur les pertes, pris côté LP et exclu de la base d'émission ; jamais sur liquidation ; approbation via timelock de 24 h, retrait immédiat par le multisig, frais modifiable jusqu'à 1 %.
7. **Liquidation** : une clôture au prix de faillite ou au-delà est désormais traitée comme une liquidation.
8. **Transférabilité** : ajouter la justification de l'équipe (pari sur la baisse du PAPER, exemple 10/15 M$) et la citation « pas de projet ».
9. **Gouvernance** : le timelock approuve aussi les builders, fixe leur frais et peut déplacer leurs frais non réclamés ; le multisig peut retirer un builder immédiatement ; le *keeper* choisit la courbe de paiement. Ajouter ces points à la liste des changements unilatéraux (verdict et « Les garde-fous annoncés… ont changé en dix jours »).
10. **Chronologie** : « 21 octobre 2026 : contract set 2 en vigueur (retenue sur les petits gains, nouvelle émission, builder codes) ».
11. **pointsCles** (« émis de moins en moins généreusement ») et **verdict** (« que le mécanisme attire de moins en moins ») : à revoir, l'émission ne ralentit plus.
12. **Sources** : ajouter la page « Protocol changes » de la doc (lue le 27/10) et le post X du 20/10.
13. **Score 32/100** : à réévaluer via `../analyste-defi`, en mettant d'abord le wiki à jour.
14. Garder la mention « rédigé avec l'aide de l'IA ».
