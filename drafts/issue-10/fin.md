# 💡 ÇA BRILLE · 📖 DÉFINITIONS · ✉️ À toi de jouer — numéro 10

> Brouillon de la session principale (v2, après note 6,5/10 du vérificateur). Notation des blocs : `[titre]` titre de la carte · `[texte]` texte de la carte nuit/violet · `[p]` · `[st]` · `[liste]` · `[avis]` · `[source]`. `[À VÉRIFIER]` = point à confirmer par le fact-checker.
>
> Correspondance avec `issues.ts` : ÇA BRILLE → `data` (`titre`, `texte`, `corps`) · DÉFINITIONS → `definitions[]` (`terme`, `def`, `slug`) · À toi de jouer → `jeu` (`cta`, `question`, `a`, `b`).

---

## 💡 ÇA BRILLE

> Objectif (une phrase) : Strategy, le plus gros acheteur de bitcoin coté, a consacré ces deux dernières semaines plus d'argent à racheter ses propres actions privilégiées STRC qu'à acheter du bitcoin ; expliquer pourquoi.

[titre]
Strategy rachète plus de STRC qu'elle n'achète de bitcoin

[texte]
Strategy (ex-MicroStrategy) est la société cotée qui détient le plus de bitcoins : environ 850 000. Pour en acheter, elle vend notamment du **STRC**, une action privilégiée qui verse un dividende mensuel : chaque STRC vendu 100 $, ce sont 100 $ pour acheter du bitcoin. Or du 26 octobre au 8 novembre, elle a fait l'inverse : **397 M$ de STRC rachetés**, contre **147 M$ de bitcoin achetés**, selon ses déclarations à la SEC.

[st] Pourquoi racheter plutôt qu'acheter du bitcoin

[liste]
- **Le STRC vise un cours de 100 $** : Strategy ajuste son dividende chaque mois pour l'y maintenir (12 % par an en novembre).
- **Il cotait sous les 100 $ depuis mai**, et Strategy n'en émet pas sous ce prix, selon la presse. Plus de nouveau STRC à vendre, donc moins d'argent pour le bitcoin.
- **Racheter sous 100 $ soutient le cours** : Strategy a payé en moyenne 99,5 à 99,8 $ par action. Le STRC a touché les 100 $ le 4 novembre, une première depuis mai, sans encore s'y tenir.
- **Pour payer ces rachats, Strategy vend de nouvelles actions ordinaires** (cotées sous le code MSTR) et puise dans sa trésorerie en dollars.

[avis]
💡 **Notre avis** : sur l'argent levé en vendant des actions MSTR ces deux semaines, à peine un tiers est allé au bitcoin. Strategy dilue d'abord ses actionnaires pour défendre son action privilégiée. Tant que le STRC ne tient pas seul ses 100 $, le premier acheteur de bitcoin coté achète à un rythme réduit : 1 847 BTC en deux semaines.

[source] Strategy, formulaires 8-K du 2/11 et du 9/11/2026 (SEC EDGAR) · strategy.com/strc · Bitcoin Magazine et CryptoTimes (4-5/11)

---

## 📖 DÉFINITIONS

[liste à puces dorées]

- **Action privilégiée perpétuelle** — `slug: action-privilegiee-perpetuelle`
  Une action sans date de remboursement qui verse un dividende prioritaire, fixe ou ajustable selon les titres (celui du STRC est revu chaque mois), payé avant celui des actions ordinaires, mais qui ne donne en général pas de droit de vote. Strategy en a fait son principal outil pour financer ses achats de bitcoin (voir ÇA BRILLE).

- **Multisig** — `slug: multisig`
  Un portefeuille ou un contrat qui ne peut agir qu'avec la signature de plusieurs personnes, par exemple 3 sur 5. Il évite qu'une seule clé volée suffise, mais concentre le pouvoir sur un petit groupe de signataires (voir l'actu Babylon dans DANS LE FAISCEAU).

---

## ✉️ À toi de jouer

[cta]
Tu emprunterais à taux fixe sur Midnight, ou tu préfères la souplesse du taux variable d'Aave ? Réponds directement à ce mail : je lis tout, et je réponds.

[question]
Pour emprunter, tu choisirais…

[a]
le taux fixe (je sais ce que je paierai)

[b]
le taux variable (je peux rembourser quand je veux)

---

## Notes du Rédacteur (hors texte, à ne pas assembler)

### Calculs (8-K primaires, lus le 10/11)
- 8-K du 2/11 (période 26/10-1/11) : STRC racheté 2 092 035 actions pour 208,2 M$ (moy. 99,52 $) ; BTC achetés 811 pour 65,5 M$ ; ventes de MSTR 164,0 M$ nets (65,5 → BTC, 98,5 → USD Cash) ; rachat STRC payé sur l'USD Cash.
- 8-K du 9/11 (période 2/11-8/11) : STRC racheté 1 887 464 actions pour 188,3 M$ (moy. 99,76 $) ; BTC 1 036 pour 81,9 M$ ; ventes de MSTR 283,8 M$ nets (81,9 → BTC, 188,3 → rachats STRC, 13,6 → USD Cash).
- Totaux : STRC 396,5 M$ → « 397 M$ » ; BTC 147,4 M$ ; 1 847 BTC. Détention au 8/11 : 850 364 BTC.
- « À peine un tiers » : MSTR levés 164,0 + 283,8 = 447,8 M$ ; BTC 147,4 / 447,8 = 32,9 %.
- Aucune émission de STRC sur les deux périodes (ATM : 0).
- ⚠️ La veille du 9/11 avait été mal résumée (« lève 208 M$ en STRC ») : c'est bien un RACHAT (vérifié sur le 8-K).

### Pour le fact-checker
- Dividende 12 % par an en novembre : dépôt du 29/10 (fixe le taux de novembre) + strategy.com/strc. Taux de décembre peut-être annoncé fin novembre : vérifier le jour de l'envoi.
- STRC à 100 $ le 4/11, première fois depuis mai (165 jours) : Bitcoin Magazine, CryptoTimes (5/11) ; clôtures de la semaine toutes sous 100 $ (99,98 $) selon une autre source. Vérifier le cours du jour de l'envoi : s'il tient 100 $, adapter la puce 3 et l'avis.
- « Strategy n'émet pas de STRC sous 100 $ » : rapporté par la presse (Yahoo Finance, Cryptopolitan) ; non trouvé dans un communiqué.
- « Ajuste son dividende chaque mois pour le maintenir à 100 $ » : principe affiché par Strategy pour le STRC (taux variable mensuel) ; à confirmer sur strategy.com/strc/learn.

### Termes glossaire proposés
| Terme | Slug | Statut |
|---|---|---|
| Action privilégiée perpétuelle | `action-privilegiee-perpetuelle` | NOUVEAU |
| Multisig | `multisig` | NOUVEAU |
