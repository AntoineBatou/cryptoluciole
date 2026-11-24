# 💡 ÇA BRILLE · 📖 DÉFINITIONS · ✉️ À toi de jouer — numéro 12

> Brouillon de la session principale (v1). Notation des blocs : `[titre]` titre de la carte · `[texte]` texte de la carte nuit/violet · `[p]` · `[st]` · `[liste]` · `[avis]` · `[source]`. `[À VÉRIFIER]` = point à confirmer par le fact-checker.
>
> Correspondance avec `issues.ts` : ÇA BRILLE → `data` (`titre`, `texte`, `corps`) · DÉFINITIONS → `definitions[]` (`terme`, `def`, `slug`) · À toi de jouer → `jeu` (`cta`).

---

## 💡 ÇA BRILLE

> Objectif (une phrase) : suite du numéro 10 ; pour soutenir son STRC qui glisse sous 100 $, Strategy pioche désormais dans la réserve en dollars censée garantir ses dividendes.

[titre]
Strategy pioche dans sa réserve à dividendes pour défendre son STRC

[texte]
Le STRC est l'action privilégiée de Strategy, la société cotée qui détient le plus de bitcoins : il verse un dividende mensuel, 12 % par an, et Strategy cherche à maintenir son cours à 100 $ (on a détaillé le mécanisme dans [notre dossier sur les DAT](https://www.cryptoluciole.com/dossiers/dat)). Son cours baisse pourtant : Strategy le rachetait entre 99,5 et 99,9 $ en moyenne début novembre, **97 $** la semaine dernière.

[liste]
- **Un STRC sous 100 $ coupe une source d'argent** : il baisse avec le bitcoin, puisque ses dividendes sont versés par une société dont l'actif principal est du bitcoin. Or Strategy ne vend pas de STRC sur le marché primaire lorsque sa valeur est en dessous de 100 $. D'où les rachats, pour tenter de le faire remonter.
- **Strategy dépense quatre fois plus pour racheter du STRC que pour acheter du bitcoin** : sur quatre semaines, 836 M$ contre 210 M$, d'après ses déclarations à la SEC. Le taux reste de 12 % par action ; c'est le total versé qui baisse, puisqu'une action rachetée ne touche plus de dividende : d'après Strategy, 353 M$ de dividendes annuels en moins grâce à ses rachats d'actions privilégiées des derniers mois.
- **Ces rachats sont payés surtout en nouvelles actions** : la semaine dernière, 147 M$ sur 212 M$ venaient de la vente de nouvelles actions MSTR (ses actions ordinaires, cotées en Bourse), ce qui dilue ses actionnaires ; le reste, de sa trésorerie.
- **Et maintenant, par la réserve** : Strategy garde une réserve en dollars pour payer les dividendes de ses actions privilégiées et les intérêts de sa dette. Le 23 novembre, son conseil a autorisé à en transférer jusqu'à **1 Md$** vers la trésorerie qui finance les rachats : la réserve passe d'environ 4,7 à **3,73 Md$**. Avant ce transfert, ses dollars couvraient environ **3,4 ans** de dividendes, d'après Strategy, qui juge cette marge suffisante pour en déplacer une partie.

[avis]
💡 **Notre avis** : racheter ses propres actions STRC sous 100 $ a du sens pour Strategy, puisque cela réduit les dividendes à verser. Mais pour soutenir ce cours, Strategy entame la réserve qui garantit justement ces dividendes, et ce soutien coûte plus cher quand le bitcoin baisse : il faut alors vendre davantage d'actions MSTR, qui baissent avec lui. La marge est large, mais elle vient de raccourcir. Le chiffre à suivre n'est plus son stock de bitcoins : c'est le nombre d'années de dividendes qu'elle garde en caisse.

[source] Strategy, formulaires 8-K du 2, 9, 16 et 23 novembre 2026 (SEC EDGAR) · compte X de Strategy (23/11)

---

## 📖 DÉFINITIONS

[liste à puces dorées]

- **Collateral factor** — `slug: collateral-factor`
  La part de la valeur de ta garantie que tu peux emprunter sur un protocole de prêt. Avec un *collateral factor* de 65 %, 1 000 $ de garantie permettent d'emprunter au plus 650 $. Sur Aave V4, c'est aussi le seuil de liquidation : emprunter le maximum, c'est être liquidable à la moindre baisse. Voir ON ÉCLAIRE.

- **Ratio de couverture** — `slug: ratio-de-couverture`
  Dans un produit découpé en tranches, le total des dépôts divisé par les dépôts de la tranche protégée (la senior). À 125 %, la senior a 25 % de dépôts en plus derrière elle et ne perd rien tant que la perte reste sous 20 % du total. Voir SOUS LA LOUPE.

---

## ✉️ À toi de jouer

[cta]
Chez Strata, tu choisirais quelle tranche : la senior, qui rapporte moins mais passe après le junior en cas de perte, ou le junior, qui rapporte plus mais encaisse les pertes en premier ? Réponds directement à ce mail : je lis tout, et je réponds.

---

## Notes du rédacteur (hors texte, à ne pas assembler)

### Chiffres (8-K de Strategy, SEC EDGAR, lus le 24/11)
- 8-K du 23/11 (période 16-22/11) : 457 BTC pour 29,6 M$ (moy. 64 898 $) ; détention 851 305 BTC, coût total 64,23 Md$, moy. 75 446 $ ; STRC racheté 2 183 747 actions pour 211,8 M$ (moy. 96,99 $) ; ventes MSTR 176,7 M$ nets (29,6 → BTC, le reste → rachats STRC) ; rachats STRC : 147,0 M$ via MSTR, 64,8 M$ via USD Cash ; programme de rachat des actions privilégiées relevé de 3,0 à 4,0 Md$, 1,12 Md$ restant au 22/11. Aucune émission de STRC (ATM : 0).
- 8-K du 16/11 (9-15/11) : 485 BTC pour 33,4 M$ ; STRC 2 282 510 actions pour 228,1 M$ (moy. 99,93 $).
- 8-K du 9/11 (2-8/11) : 1 036 BTC pour 81,9 M$ ; STRC 188,3 M$ (moy. 99,76 $). 8-K du 2/11 (26/10-1/11) : 811 BTC pour 65,5 M$ ; STRC 208,2 M$ (moy. 99,52 $). (Repris du numéro 10.)
- Totaux sur 4 semaines : STRC 836,4 M$ ; BTC 210,4 M$ (2 789 BTC). Ratio ≈ 4.
- Perte latente : 851 305 × 59 915 $ (DeFiLlama, 24/11 16 h 32) = 51,0 Md$ ; 64,23 − 51,0 = 13,2 Md$ (−20,6 %). [À RAFRAÎCHIR avec le cours du jour de l'envoi.]
- Durée de l'enveloppe : 1 120 ÷ 211,8 ≈ 5,3 semaines (sur le rythme de la dernière semaine ; 4 semaines : 209 M$/semaine en moyenne).
- 8-K du 23/11, réserve : 17,6 M$ de la USD Reserve pour les dividendes de la semaine ; 64,8 M$ de USD Cash pour les rachats ; réallocation autorisée jusqu'à 1,0 Md$ de la USD Reserve vers la USD Cash ; soldes au 22/11 après réallocation : USD Reserve 3,73 Md$, USD Cash 1,09 Md$.
- STRC à 96,01 $ « un mercredi » quand le BTC passe sous 63 000 $ : Yahoo Finance / BeInCrypto (« Is MicroStrategy's 12% Dividend Safe? ») [À VÉRIFIER la date : probablement le 18/11]. Dividende de décembre maintenu à 12 % (8-K du 16/11, d'après BeInCrypto) [À VÉRIFIER dans le 8-K].
- Saylor, 19/11 : rachats tant que STRC < 100 $ (CryptoNews) [À VÉRIFIER source primaire].
- Compte X de Strategy, 23/11 (x.com/Strategy/status/2124851021448908869) : « reduced credit outstanding by $2.9B in recent months, lowering annual dividends by $353M. Our USD Duration is now 3.4 years, so we reallocated $1B ». [À VÉRIFIER : définition de la « USD Duration » (actifs en dollars ÷ dividendes annuels ?) sur strategy.com.] Avant la réallocation : 3,73 + 1,0 ≈ 4,7 Md$ (si le milliard a été déplacé en entier).
- Fact-check du 24/11 : « 3,4 ans » = niveau AVANT la réallocation (« USD Duration is now 3.4 years, so we reallocated $1B »). Après : non publié ; estimation du fact-checker ≈ 2,7 ans (3,73 ÷ ≈ 1,36 Md$ de charges annuelles), non écrite. Tweet lu seulement via l'extrait d'un moteur de recherche (X renvoie 402).
- Phrase Saylor du 19/11 et STRC à 96 $ retirés (source secondaire, non datée).
- Perte latente (75 446 $ de coût moyen) retirée du texte (vérificateur : pas reliée à la thèse).
- La divergence de la veille (485 BTC / 228 M$ contre 457 BTC / 212 M$) : ce sont deux semaines différentes (16/11 et 23/11).

### Pour le fact-checker
- Cours du STRC le jour de l'envoi (strategy.com/strc) : si revenu à 100 $, adapter la 3e puce et l'avis.
- Dividende du STRC pour décembre : peut être annoncé fin novembre, non cité.

### Termes glossaire à créer
- `collateral-factor`, `ratio-de-couverture`, `threshold-signature` (encadré de DANS LE FAISCEAU).
