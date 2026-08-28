# I.5 Les risques

Les risques d'une DAT ne sont pas une liste d'aléas indépendants : ils s'enchaînent tous à partir d'un seul point, la **compression de la prime**. Une mNAV qui s'installe sous 1 gèle l'émission d'actions (I.1), rend la dilution destructrice (I.1) et rapproche l'échéance du mur de dette (I.2 et I.4) — des mécaniques déjà décrites, qu'on ne réexplique pas ici.

Les analyses sérieuses du sujet — d'OAK Research à VanEck — convergent sur un point qui va à l'encontre du récit grand public : **ce n'est pas une baisse du bitcoin qui tue une DAT**, c'est la **fermeture de l'accès au capital**. Une société bien gérée traverse un marché baissier sans vendre son trésor sous la contrainte ; ce qui la tue, c'est le jour où *plusieurs canaux de financement se ferment en même temps* — prime effondrée, marché des préférentielles fermé, flux passifs coupés, réserve de cash épuisée. Le prix de la crypto est un facteur de stress ; l'accès au capital est la condition de survie. On part de ce constat.

Mais ce constat, décrit partout du point de vue de la société cotée, ne nous suffit pas. Car ce risque ne reste plus confiné au bilan de Strategy : il **se propage** hors de la bourse. C'est le fil de cette section. On traite d'abord trois risques encore intacts — l'exclusion des indices, le faux « risque de liquidation », la contagion — avant de tout hiérarchiser, puis (seconde partie du dossier) de suivre ce risque jusque dans la DeFi, où il prend une forme entièrement différente.

---

## L'exclusion des indices boursiers

Une part énorme de l'épargne mondiale dort dans des **fonds indiciels (ETF)** qui répliquent mécaniquement un indice : ils achètent, et gardent, toute action qui y figure — sans se poser de question. Strategy est entrée dans plusieurs de ces indices (les **MSCI** notamment). Le jour où elle en sortirait, ces fonds devraient la **revendre automatiquement, tous en même temps**.

Et l'ordre de grandeur est chiffrable : une exclusion des seuls indices MSCI forcerait, selon JPMorgan, environ **2,8 milliards de dollars** de ventes ; si tous les indexeurs suivaient, près de **8,8 milliards**. Des ventes sans aucun rapport avec les fondamentaux de Strategy — juste des robots qui liquident une ligne devenue inéligible —, mais qui écraseraient le cours et la prime au passage.

Deux décisions ont marqué 2026 :

- **MSCI a renoncé, pour l'instant, à exclure les DAT.** Fin 2025, l'indexeur avait envisagé d'écarter les sociétés dont **plus de 50 % de l'actif** est en crypto. Le **6 janvier 2026**, il a décidé de **ne pas les exclure** — tout en ouvrant une revue plus large. La menace est suspendue, pas levée.
- **Le S&P 500 a de nouveau écarté Strategy** (fin 2025) : éligible sur les critères techniques, mais jugée trop assimilable à un pari sur le bitcoin.

Une exclusion ne rendrait pourtant Strategy ni moins solvable ni moins riche en bitcoins. Elle lui retirerait une demande captive, celle des fonds qui achètent sans se poser de question — et c'est la prime, donc l'accès au capital, qui en paierait le prix.

---

## Le faux risque : la « liquidation forcée »

Un récit revient sans cesse dans le débat public : si le bitcoin baisse trop, Strategy serait **liquidée de force**, comme une position DeFi sur-collatéralisée qui « saute » automatiquement dès que la valeur du collatéral passe sous un seuil. Appliqué à Strategy, ce scénario est **faux** — un point que les analyses spécialisées (OAK Research, NYDIG) documentent depuis un moment, mais qui peine à percer face au récit dominant.

- **La dette convertible** n'est pas gagée sur des bitcoins identifiés : les prêteurs n'ont aucun droit de saisir tel ou tel bitcoin si le cours baisse.
- **Les préférentielles ne sont pas collatéralisées par le bitcoin.** Elles ne donnent qu'une **créance prioritaire sur l'actif résiduel** de la société, pas un droit direct sur des bitcoins.

Il n'existe donc **aucun mécanisme automatique** qui forcerait Strategy à vendre son bitcoin à un cours déterminé. Le vrai risque est **corporate**, pas mécanique : il s'agit d'honorer les dividendes et les intérêts. Si l'accès au capital se ferme et que la réserve de cash s'épuise, la société *peut choisir* de vendre du bitcoin pour tenir ses engagements — c'est d'ailleurs ce qu'elle a commencé à faire en 2026. Mais c'est une **décision de dernier recours**, pas un couperet déclenché par un prix.

---

## La contagion : un risque à l'échelle du secteur

Deux canaux éventuels de propagation :

- **Entre DAT.** Les plus fragiles cèdent d'abord. Contraintes de vendre leur crypto pour tenir, ces ventes pèsent sur le prix de l'actif — ce qui dégrade la NAV des autres, enfonce leur mNAV, et propage le stress.
- **Vers la DeFi.** Le STRC et les autres préférentielles servent désormais de brique de rendement à des stablecoins « à rendement ». Le stress d'une DAT ne reste plus confiné à la bourse : il remonte dans des produits crypto vendus comme stables, jusqu'à des détenteurs qui ignoraient y être exposés — mécanisme détaillé dans la seconde partie.

---

## Récapitulatif : hiérarchiser les risques

| Risque | Nature | Ce qui le déclenche | Gravité |
|---|---|---|---|
| **mNAV < 1 durable** | Financement | Baisse de la crypto + perte de confiance | Élevée — c'est la source des autres |
| **Dilution de l'actionnaire ordinaire** | Valeur par action | Émission en décote | Élevée pour l'actionnaire ordinaire |
| **Fermeture de l'accès au capital** | Survie | Cumul : décote + indices + marché fermé | **Fatale** — le vrai point de rupture |
| **Mur de dette** | Calendrier | Échéance fixe (2029-2030 pour Strategy) | Moyenne, datée et anticipable |
| **Exclusion des indices** | Coût du capital | Décision MSCI / S&P | Moyenne — renchérit, ne tue pas |
| **Contagion sectorielle** | Systémique | Ventes forcées + liens DeFi | Variable, monte en marché baissier |
| **« Liquidation forcée » automatique** | — | *N'existe pas* pour Strategy | Faux risque à écarter |

> **💡 L'essentiel**
> La plupart de ces risques découlent du même point (la mNAV sous 1), un seul est fatal (la fermeture de l'accès au capital), et le plus médiatisé (la liquidation forcée) n'existe pas.

---

Ces risques restent, jusqu'ici, décrits du point de vue de la société cotée. Ils prennent un tout autre relief quand un particulier s'expose à une DAT **via la DeFi** — en empilant des couches de tokenisation, de rendement et de levier sur un titre déjà volatil. Ce qui s'y construit, et ce qui s'est concrètement passé pour ces investisseurs lors du décrochage du STRC de juin 2026 : c'est l'objet de la **seconde partie**.
