# 💡 ÇA BRILLE · 📖 DÉFINITIONS · ✉️ À toi de jouer — numéro 11

> Brouillon de la session principale (v1, Marc relira tout le numéro d'un coup). Notation des blocs : `[titre]` titre de la carte · `[texte]` texte de la carte nuit/violet · `[p]` · `[st]` · `[liste]` · `[avis]` · `[source]`. `[À VÉRIFIER]` = point à confirmer par le fact-checker.
>
> Correspondance avec `issues.ts` : ÇA BRILLE → `data` (`titre`, `texte`, `corps`) · DÉFINITIONS → `definitions[]` (`terme`, `def`, `slug`) · À toi de jouer → `jeu` (`cta`, `question`, `a`, `b`).

---

## 💡 ÇA BRILLE

> Objectif (une phrase) : sur un mois, les actions et l'or tokenisés gagnent des détenteurs mais perdent un tiers à la moitié de leurs utilisateurs actifs ; ce que ça dit de la tokenisation aujourd'hui.

[titre]
Actions et or tokenisés : plus de détenteurs, beaucoup moins d'adresses actives

[texte]
Sur les trente derniers jours, selon rwa.xyz, les jetons d'actions et d'or gagnent des détenteurs mais perdent une bonne part de leurs adresses actives.

[liste]
- **Actions tokenisées** : détenteurs **+7 %** (4,8 millions d'adresses), adresses actives **−32 %**, volume stable.
- **Or et autres matières premières tokenisés** : détenteurs **+2 %**, adresses actives **−47 %**, volume divisé par deux.

[st] Ce que disent ces deux chiffres

[liste]
- **Détenir n'est pas utiliser** : un détenteur est une adresse qui possède le jeton ; une adresse active en a fait au moins une transaction dans le mois.
- **Pour l'or, l'activité suit l'emballement du cours, pas l'usage** : on échange surtout l'or tokenisé quand le prix de l'or s'envole. Il s'est calmé depuis septembre (le PAXG, jeton adossé à de l'or, est passé d'environ 4 330 $ début septembre à environ 3 850 $ l'once), et les échanges ont été divisés par deux.
- **Pour les actions, l'activité se concentre** : autant de volume avec un tiers d'adresses actives en moins, ce qui laisse penser que moins d'acteurs, plus gros, font l'essentiel des échanges. C'est une hypothèse : les sources n'en donnent pas la cause.

[avis]
💡 **Notre avis** : la tokenisation recrute des détenteurs, pas encore des utilisateurs. Tant que l'activité dépend du cours ou de quelques gros acteurs plutôt que de ce qu'on en fait (le prêter, le placer en garantie, l'utiliser dans une application), l'argument « un actif tokenisé devient programmable » reste surtout une promesse.

[source] rwa.xyz (pages Stocks et Commodities, relevées le 16/11/2026, variations sur 30 jours) · DeFiLlama (cours du PAXG)

---

## 📖 DÉFINITIONS

[liste à puces dorées]

- **Stablechain** — `slug: stablechain`
  Une blockchain conçue d'abord pour faire circuler des stablecoins, avec des frais souvent payables en stablecoin. Plusieurs sont portées par un émetteur (Arc par Circle) ou par son écosystème (Plasma pour Tether) ; Tempo, de Stripe, accepte tous les stablecoins. Voir ON ÉCLAIRE.

- **Revenus de réserves** — `slug: revenus-de-reserves`
  Les intérêts qu'un émetteur de stablecoin touche en plaçant les dollars reçus en échange de ses jetons, surtout en bons du Trésor américain. C'est l'essentiel du modèle économique de Tether et de Circle, et ce revenu suit les taux de la Fed. En général, le détenteur n'en touche rien directement.

---

## ✉️ À toi de jouer

[cta]
Tu envoies déjà des stablecoins ? Sur quelle blockchain, et pourquoi celle-là ? Réponds directement à ce mail : je lis tout, et je réponds.

---

## Notes du Rédacteur (hors texte, à ne pas assembler)

### Chiffres (script `../onchain/scripts/rwa_adoption.py`, lu le 16/11 vers 15 h)
- Actions tokenisées (rwa.xyz/stocks) : valeur distribuée 3,71 Md$ (+4,3 % sur 30 j) ; volume mensuel 89,69 Md$ (−0,3 %) ; adresses actives mensuelles 1 866 813 (−32,3 %) ; détenteurs 4 837 650 (+7,0 %).
- Matières premières (rwa.xyz/commodities) : valeur distribuée 5,10 Md$ (−4,5 %) ; volume mensuel 9,51 Md$ (−52,4 %) ; adresses actives 134 613 (−46,6 %) ; détenteurs 489 388 (+2,3 %).
- PAXG (DeFiLlama) : 4 334 $ le 02/09, 3 848 $ le 16/11 (−11 %), relu après le fact-check.

### Pour le fact-checker
- « L'activité suit le cours » : lien établi sur 2025 par CoinGecko (volume d'octobre 2025 à 21,4 Md$ avec les records de l'or, puis 14,1 Md$ en novembre) ; pour novembre 2026, c'est une concordance, pas une causalité démontrée → formulation prudente.
- Le périmètre « matières premières » de rwa.xyz inclut l'or et d'autres matières : le texte dit « l'or tokenisé et les autres matières premières ».
- Notre numéro 6 avait comparé la valeur détenue et le volume des actions tokenisées : ici, l'angle est différent (détenteurs contre adresses actives).

### Termes glossaire à créer
- `stablechain`, `revenus-de-reserves`.
