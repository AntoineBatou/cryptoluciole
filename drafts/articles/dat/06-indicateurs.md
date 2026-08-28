# I.4 Comment analyser une DAT — la boîte à outils

Deux sociétés qui détiennent le même bitcoin peuvent être dans des situations radicalement différentes. Pour les départager, il faut une poignée d'indicateurs — et surtout savoir les **lire ensemble**. 

---

## 1. La NAV — la valeur du trésor, point de départ de tout

Avant de juger si une DAT est chère ou bon marché, il faut savoir ce que vaut son trésor. C'est la **NAV**.

> **📖 NAV (*Net Asset Value*) crypto**
> La valeur de marché des cryptos détenues : **quantité × prix du jour**. Pour une DAT bitcoin, on parle parfois de **BTC NAV**. Une société qui détient 20 000 bitcoins avec un bitcoin à 90 000 $ a une NAV de **1,8 milliard de dollars** — un chiffre qui bouge à chaque tick du cours.

Deux nombres se rattachent à la NAV et méritent d'être distingués :

- **La NAV elle-même** : ce que le trésor vaut *maintenant*, au prix du marché.
- **Le coût moyen d'acquisition** : le prix *auquel* la société a acheté ses cryptos, en moyenne. Strategy tourne autour de **75 500 $/BTC**, Metaplanet autour de **95 000 $/BTC**.

L'écart entre les deux dit si la trésorerie est en plus-value ou en moins-value latente. Une DAT dont le coût moyen est *au-dessus* du prix actuel détient un trésor qui vaut, sur le papier, moins que ce qu'il a coûté — un coussin plus mince pour absorber les chocs.

La NAV est la fondation : tous les indicateurs qui suivent la mettent en rapport avec autre chose — le prix de bourse, la dette, les dividendes.

---

## 2. La mNAV — la formule complète

La mNAV est apparue dès I.1, en concept : au-dessus de 1, prime ; en dessous, décote. Voici enfin le calcul exact — et il ne se résume pas à « capitalisation boursière ÷ valeur du trésor ».

Le numérateur correct n'est pas la simple capitalisation, mais la **valeur d'entreprise** (EV), qui tient compte de tout ce que la société doit avant que l'actionnaire ordinaire ne touche quoi que ce soit.

> **La formule**
> **mNAV = valeur d'entreprise (EV) ÷ valeur de marché des cryptos détenues**
> avec :
> **EV = capitalisation des actions ordinaires + dette totale + total des préférentielles − trésorerie**

Chaque terme, décomposé :

- **Capitalisation des actions ordinaires** : cours de l'action × nombre d'actions.
- **+ dette totale** : les emprunts (obligations convertibles…) — de l'argent dû à des créanciers.
- **+ total des préférentielles** : les STRC, STRF et consorts, qui passent avant les actionnaires ordinaires.
- **− trésorerie** : le cash disponible, qui vient en déduction (il pourrait rembourser une partie des dettes).

**Pourquoi ajouter dette et préférentielles ?** Parce qu'elles ont un droit *prioritaire* sur le trésor. Une DAT peut afficher une capitalisation modeste tout en étant lourdement endettée : sa valeur d'entreprise — donc sa mNAV — sera bien plus élevée que la seule capitalisation ne le laisse croire. Ignorer la dette, c'est sous-estimer ce que le marché valorise réellement.

> **🔍 Exemple chiffré — la formule complète change le verdict**
> Une DAT détient pour 1 000 M$ de bitcoin. Son action capitalise 900 M$, elle a 200 M$ de dette, 300 M$ de préférentielles et 100 M$ de cash.
> EV = 900 + 200 + 300 − 100 = **1 300 M$** · mNAV = 1 300 ÷ 1 000 = **1,30x**
> En regardant la seule capitalisation (900 M$ contre 1 000 M$ de trésor), on aurait conclu à une **décote** de 0,90x. La formule complète révèle l'inverse : une **prime** de 1,30x. La dette et les préférentielles font toute la différence.

Pour l'interprétation, rien de neuf par rapport aux sections précédentes : au-dessus de 1, le marché paie l'action plus cher que le trésor net (l'émission d'actions enrichit les actionnaires) ; en dessous, l'inverse, et le moteur d'accumulation cale.

> 🖼️ **[FIGURE 5 — Lire une mNAV]**
> *Échelle verticale de la mNAV avec les zones : > 1,22x « émission relutive, la machine tourne » · 1 à 1,22x « zone grise : prime, mais dilution destructrice » · < 1 « décote : accumulation gelée » — avec le repère Strategy (sous 1 depuis le 27 juin 2026). Données : seuil 1,22x + repères (dans le texte).*

---

## 3. Le rendement en crypto par action (BTC / ETH Yield) — et ses deux angles morts

Le *BTC Yield* a été défini en I.1 : la **progression du nombre de bitcoins par action** sur une période. Strategy affichait **+22,8 %** en 2025 et **+13,3 %** au 25 mai 2026. C'est la métrique que ces sociétés brandissent pour prouver que leurs émissions créent de la valeur.

> **⚠️ Le piège — un « yield » qui ne verse rien**
> Le nom trompe : **ce n'est pas un rendement versé en cash.** Personne ne reçoit 13 % sur son compte. C'est une mesure comptable de croissance : chaque action donne droit à 13 % de bitcoins en plus qu'en début d'année.

Deux limites en font un indicateur à ne jamais lire seul.

**Il ne dit rien du prix de la crypto.** Le BTC Yield mesure une *quantité* par action, pas une valeur. On peut afficher un +13 % magnifique pendant que le bitcoin chute de 30 % — auquel cas l'actionnaire, qui possède davantage de bitcoins par action mais chacun valant beaucoup moins, est en **perte sèche**. Un beau BTC Yield sur fond de marché baissier n'est pas une bonne nouvelle.

**Il ignore ce qui est dû aux créanciers et aux préférentielles.** Le « bitcoin par action » compte *tous* les bitcoins du trésor, comme s'ils revenaient intégralement à l'actionnaire ordinaire. Or une partie est promise, en priorité, aux détenteurs de dette et de préférentielles. Sur un bilan chargé, le bitcoin réellement attribuable à l'actionnaire ordinaire — une fois ces créanciers servis — est inférieur au chiffre affiché.

Le BTC Yield répond à une seule question : « la société accumule-t-elle plus vite que sa dilution ? » — à croiser toujours avec le prix de l'actif et la structure du bilan.

---

## 4. La couverture des dividendes — le test de résistance

Une DAT financée par préférentielles doit verser un dividende, trimestre après trimestre, que le marché soit porteur ou non. La question de survie devient : **combien de temps peut-elle tenir ?**

> **La formule**
> **Couverture (en mois) = réserve de cash ÷ charge annuelle (dividendes + intérêts) × 12**

C'est le nombre de mois pendant lesquels la société peut honorer ses engagements **sans lever un dollar de plus**, en puisant dans son coussin de trésorerie. Plus le chiffre est élevé, plus elle encaisse une fermeture prolongée du marché sans être forcée de vendre ses cryptos.

Le cas de Strategy montre à quel point ce chiffre bouge vite. Sa charge annuelle — dividendes préférentiels et intérêts confondus — s'élève à environ **1,76 milliard de dollars**. Sa réserve de cash, elle, a fait le grand écart en cinq mois : **2,25 milliards** début février, **871 millions** fin mai (après le rachat de 1,5 milliard de dette convertible), puis **2,55 milliards** au 28 juin.

Appliquons la formule à ces deux extrêmes. Avec 871 millions, la couverture tombe à **six mois** : une fermeture prolongée du marché forcerait la société à vendre du bitcoin. Avec 2,55 milliards, elle remonte à **plus de dix-sept mois**. Ce n'est pas la même société — et c'est précisément pourquoi Strategy a formalisé, fin juin, une politique de réserve visant deux à trois ans de couverture. L'indicateur ne se lit jamais seul : il se lit à une date, et dans une trajectoire.

---

## 5. Le mur de dette — quand, combien, refinançable ?

Les préférentielles n'ont pas d'échéance ; la **dette**, si. C'est elle qui impose un calendrier, et une date de remboursement tombe qu'on le veuille ou non. Trois questions à se poser :

- **Quand ?** Les échéances sont-elles proches, ou lointaines et étalées ? Les obligations convertibles de Strategy s'échelonnent par tranches jusqu'au début des années 2030 — un « mur » identifiable des années à l'avance, et que la société a commencé à démonter en rachetant sa dette par avance.
- **Combien ?** Le montant à rembourser rapporté au trésor. Une échéance de quelques centaines de millions face à un trésor de dizaines de milliards se refinance sans drame ; l'inverse est un piège.
- **Refinançable ?** Le jour venu, la société pourra-t-elle réemprunter (ou réémettre) pour rouler la dette — ou devra-t-elle **vendre des cryptos** pour rembourser ? C'est là que le prix de la crypto et l'état de la prime, à cette date précise, décident de tout.

Une DAT **sans dette** — comme Strive — échappe entièrement à ce risque : aucun mur, aucun refinancement forcé. Un défaut ne peut alors venir que d'un dividende impayé, jamais d'une échéance couperet. Ce qui, on l'a vu en I.2, ne la met pas pour autant à l'abri : elle a troqué le risque de calendrier contre une dépendance totale à un préférentiel plus coûteux.

---

## 6. Levier et amplification — deux ratios à comparer entre sociétés

Ces deux mesures ont été définies en I.1 ; on les retrouve ici comme outils de comparaison. Rappel en une ligne :

- **Levier** = la seule **dette**, rapportée à la valeur du trésor. Chez Strategy, environ **9 %** début 2026.
- **Amplification** = dette **+ préférentielles**, rapportées au trésor. Chez Strategy, environ **34 %** à la même date.

*(Ces ratios bougent avec le cours du bitcoin, qui est au dénominateur : ce qu'il faut retenir n'est pas leur niveau exact un jour donné, mais l'écart entre les deux.)*

Comparés d'une société à l'autre, ces deux ratios révèlent *comment* l'amplification est financée. Un écart énorme entre les deux — comme chez Strategy — signale une amplification bâtie surtout sur du **capital perpétuel** (pas de remboursement, mais un dividende à servir). Deux ratios proches signaleraient au contraire une exposition dominée par la **dette** (avec ses échéances). Le total dit l'ampleur du pari ; l'écart dit sa nature.

---

## 7. La prime dans le temps, pas seulement son niveau

Une mNAV sous 1 ne veut pas dire la même chose selon d'où elle vient : une société qui y tombe après des années de prime confortable ne raconte pas la même histoire qu'une autre qui n'a jamais réussi à s'en détacher. Un chiffre ponctuel ne suffit pas — il faut regarder la **trajectoire**.

Strategy a longtemps traité bien au-dessus du pair, avec des pics où le marché payait plus du double de la valeur de son trésor. Chacun de ces sommets a été suivi d'une rechute marquée. Deux enseignements pour l'analyse :

- **Une prime très élevée peut constituer un signal d'alerte.** Les pics historiques de mNAV ont précédé des corrections violentes. Payer une DAT plusieurs fois la valeur de son trésor, c'est parier que le récit tiendra.
- **La volatilité de la prime compte autant que son niveau.** Une mNAV qui reste stable autour de 1,1x inspire plus confiance qu'une autre qui zigzague entre 0,7x et 2,5x, même si la seconde affiche une moyenne plus flatteuse.

---

## 8. Combien de temps pour justifier la prime ?

Un dernier indicateur relie la prime au rythme d'accumulation. La question qu'il pose : au train où la société accumule des cryptos par action, **combien de temps faut-il pour que la croissance du trésor « rattrape » le prix payé aujourd'hui** ?

> **La formule**
> **Délai (en années) = ln(mNAV) ÷ ln(1 + rendement crypto par action)**
> *(ln = logarithme népérien ; il traduit une croissance qui se cumule année après année.)*

**Mini-exemple.** Une DAT se paie à une mNAV de 2x (le double de son trésor) et accumule à un rythme de +13 % de crypto par action par an.

> Délai = ln(2) ÷ ln(1,13) ≈ 0,69 ÷ 0,12 ≈ **5,7 ans**

Autrement dit, il faudrait près de six ans, au rythme actuel, pour que le bitcoin par action double et « justifie » par les fondamentaux la prime de 2x payée aujourd'hui.

Comment le lire :

- **Délai court** = la stratégie d'accumulation justifie assez vite la prime → valorisation plutôt raisonnable.
- **Délai très long** = le marché paie une prime que la croissance ne rattrapera pas avant des années → valorisation spéculative, portée par le récit plus que par les fondamentaux.

Son intérêt : il **normalise** la comparaison. Deux sociétés à mNAV identique n'ont pas la même valeur si l'une accumule deux fois plus vite que l'autre — ce ratio le fait apparaître.

---

## 9. Comment comparer deux DAT sans se faire piéger

Comparer deux DAT, c'est les lire **ensemble** — et connaître les pièges de chacun.

Les trois réflexes de comparaison :

1. **La mNAV situe le point de départ** (prime ou décote), mais ne dit rien de la qualité du bilan. À croiser aussitôt avec la structure de financement.
2. **Le rythme d'accumulation nuance la mNAV** : à prime égale, la société qui accumule le plus vite « mérite » mieux sa valorisation (c'est le sens de l'indicateur précédent).
3. **La nature de l'actif et du financement décide de la résilience** : un trésor à rendement natif (ETH, SOL stakés) tient un argument que le bitcoin dormant n'a pas ; une DAT sans dette échappe au mur d'échéances, mais dépend d'un préférentiel à servir.

Les pièges à éviter, indicateur par indicateur :

| Indicateur | Ce qu'il mesure | Le piège à éviter |
|---|---|---|
| **NAV / coût moyen** | Valeur du trésor et prix d'achat | Une grosse NAV ne dit rien de la valorisation : une DAT énorme peut se payer en décote |
| **mNAV** | Prime ou décote sur le trésor net | La lire sans la dette ni les préférentielles (prendre la capitalisation pour l'EV) fausse tout |
| **Rendement par action (BTC Yield)** | Croissance de la crypto par action | Un beau chiffre masque une chute du prix de l'actif — l'actionnaire peut être en perte |
| **Couverture des dividendes** | Mois de survie sans lever de capital | Très sensible aux hypothèses de réserve : un même bilan peut afficher 6 ou 18 mois |
| **Mur de dette** | Échéances à honorer | Zéro dette n'égale pas zéro risque : le préférentiel reste à servir |
| **Prime historique** | Trajectoire de la mNAV | Une prime très haute est un signal de sommet, pas de solidité |

Concrètement, sur un tableau de bord public — comme le site officiel de Strategy — on croise en un coup d'œil holdings, coût moyen, mNAV, rendement par action et dette. Le bon réflexe n'est pas de regarder le plus gros chiffre, mais de vérifier qu'ils **racontent la même histoire** : une taille imposante ne compense pas une décote profonde, et un rendement par action flatteur ne rachète pas un trésor qui perd de la valeur.

Comparer un accumulateur actif (qui fait tourner la machine) et un coffre passif (qui détient sans plus émettre) via la même mNAV n'a d'ailleurs pas le même sens : chez le premier, la prime finance la croissance future ; chez le second, elle n'a aucune raison de tenir et converge vers 1.

---

Ces indicateurs mesurent une santé à un instant donné. Reste à comprendre ce qui peut la **dégrader** : compression durable de la prime, dilution, mur de dette, perte d'accès au capital — et pourquoi ce dernier, plus que le prix de la crypto lui-même, est le vrai point de rupture d'une DAT. C'est l'objet de la section suivante.
