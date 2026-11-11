# 💡 ÇA BRILLE · 📖 DÉFINITIONS · ✉️ À toi de jouer — numéro 9

> ✍️ Brouillon du Rédacteur (v1). Trois sections de fin, rédigées d'un coup avec l'accord de Marc. Notation des blocs : `[titre]` titre de la carte · `[texte]
` texte de la carte nuit/violet · `[p]` paragraphe · `[st]` sous-titre · `[liste]` puces · `[avis]` encadré vert « 💡 Notre avis » · `[source]` ligne de sources. `[À VÉRIFIER]` = point à confirmer par le fact-checker.
>
> Correspondance avec `issues.ts` : ÇA BRILLE → `data` (`titre`, `texte`, `corps`) · DÉFINITIONS → `definitions[]` (`terme`, `def`, `slug`) · À toi de jouer → `jeu` (`cta`, `question`, `a`, `b`).

---

## 💡 ÇA BRILLE

> Objectif (une phrase) : expliquer pourquoi l'encours des stablecoins recule depuis mai, qui rétrécit, pour quelles raisons, et ce qu'il faut surveiller. (v2 : lien forcé avec ON ÉCLAIRE retiré à la demande de Marc.)

[titre]
Les stablecoins ont perdu 20 Md$ depuis mai

[texte]
**296 Md$** d'encours le 4 novembre, contre **316 Md$** au record du 20 mai, selon DeFiLlama : le marché des stablecoins a perdu environ **20 Md$ (−6 %)** en cinq mois. L'USDT et l'USDC font l'essentiel de la baisse.

[st] Moins de stablecoins là où on trade, plus là où on paie

[liste]
- **Ethereum**, le cœur de la DeFi : **−19 Md$ (−12 %)** depuis le 20 mai ;
- **Tron**, surtout utilisé pour envoyer des USDT et payer : **+3,7 Md$ (+4 %)**.

[st] Pourquoi

[liste]
- **Le marché crypto ralentit** : bitcoin vers 78 000 $ (contre 126 000 $ au record), volumes au plus bas de l'année. Moins on trade, moins on garde de stablecoins : ils sont rendus à l'émetteur et détruits.
- **Le piratage de Binance a accéléré le mouvement** : l'USDT a perdu 3,7 Md$ en sept jours.

[p]
Ce n'est pas la première fois : en 2022-2023, l'encours était passé de 187 à 123 Md$, avant de repartir avec la reprise.

[avis]
💡 **Notre avis** :
- **C'est l'argent de la spéculation qui sort, pas la confiance dans les stablecoins** : les usages de paiement, eux, continuent de grandir.
- **Le signal à suivre : le retour des émissions** de Tether et Circle plusieurs semaines d'affilée. D'ici là, la reprise du marché manque de carburant.

[source] DeFiLlama (stablecoins.llama.fi, encours total, par émetteur et par blockchain, 4/11/2026) · Cryptopolitan (25/10)

---

## 📖 DÉFINITIONS

[liste à puces dorées]

- **Health factor (facteur de santé)** — `slug: health-factor`
  L'indicateur de santé d'un emprunt : il compare ta garantie, pondérée par le seuil de liquidation, à ta dette. Sous 1, ta position est liquidée. Certaines interfaces, comme Pendle, l'affichent plutôt sous forme de marge restante en % : la baisse de ta garantie qui déclencherait la liquidation. C'est le chiffre à surveiller dans tout emprunt contre garantie (voir SOUS LA LOUPE).

- **Jeton permissionné** — `slug: jeton-permissionne`
  Un jeton sur une blockchain que seules les adresses approuvées par son émetteur peuvent recevoir et détenir, en général après vérification d'identité (KYC). L'émetteur tient la liste et peut refuser un transfert vers une autre adresse. C'est le cas de la plupart des deposit tokens (voir ON ÉCLAIRE) et des jetons de la DTCC, réservés à ses membres.

---

## ✉️ À toi de jouer

[cta]
Une question sur ce numéro, un point qui reste flou, un sujet que tu aimerais qu'on creuse ? Réponds directement à ce mail : je lis tout, et je réponds.


---

## Notes du Rédacteur (hors texte, à ne pas assembler)

### Calculs (à recontrôler par le fact-checker)
- Ratio : 295,9 ÷ 19 771 = 1,497 % → « environ 1,5 % ». Inverse : 19 771 ÷ 295,9 ≈ 67 (« presque 70 fois plus gros », utilisé seulement dans l'objectif, pas dans le texte).
- Depuis le record : 295,9 ÷ 315,5 = −6,2 % → « environ 6 % ».
- Sur un mois : 307,1 − 295,9 = 11,2 Md$ (−3,6 %) → « près de 11 Md$ ».
- Sur un an : 295,9 vs 304,2 = −2,7 % → « un peu sous ».

### Point de périmètre vérifié
- Les 295,9 Md$ correspondent au champ `peggedUSD` de DeFiLlama, c'est-à-dire aux **stablecoins adossés au dollar uniquement** (relu sur l'API le 3/11 : 295,9 Md$ ; toutes devises confondues, 297,7 Md$). D'où la formulation « adossés au dollar » plutôt que « l'encours total des stablecoins ».

### Notes pour le fact-checker
- Rafraîchir le jour de l'envoi : encours DeFiLlama (et donc le ratio, les −6 % et les 11 Md$) ; dépôts H.8 si une nouvelle semaine est publiée ; taux SOFIE (4,40 %).
- Aucune cause n'est attribuée à la baisse de l'encours (rien de sourcé dans le brief).

### Termes glossaire proposés
| Terme | Slug | Forme dans le texte | Statut |
|---|---|---|---|
| Health factor | `health-factor` | DÉFINITIONS | NOUVEAU (remplace PT, déjà expliqué dans SOUS LA LOUPE) |
| Jeton permissionné | `jeton-permissionne` | DÉFINITIONS | NOUVEAU |
