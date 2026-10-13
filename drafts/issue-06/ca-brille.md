# 💡 ÇA BRILLE — #6 : les actions tokenisées, blockchain par blockchain

> ✍️ Brouillon du Rédacteur (v2, après la boucle 1 du vérificateur, 7/10, et la consigne de Marc sur l'avis), à valider par Marc. Notation des blocs : `[p]` paragraphe · `[st]` sous-titre · `[liste]` puces · `[image | chemin]` image + légende · `[tableau]` tableau · `[avis]` encadré vert « 💡 Notre avis ».
> Correspondance avec le champ `data` de `issues.ts` : titre → `titre` ; 1er `[p]` → `texte` ; `[liste]` → `points` ; le reste → `texteFin` + champs à ajouter (voir notes d'assemblage).

**Titre (proposition)** : 3,3 Md$ d'actions tokenisées : analyse de l'état du marché

*Variante* : 3,3 Md$ d'actions tokenisées, et le classement n'est pas celui qu'on croit

---

[p]
**3,3 Md$** : c'est la valeur des **actions tokenisées** détenues au 12 octobre, contre 2,26 Md$ début juillet. Deux mesures permettent de classer les blockchains, et elles ne disent pas la même chose :

[liste]
- le **volume** additionne chaque transfert : la même action échangée 100 fois compte 100 fois. Il se gonfle donc facilement avec des primes (frais offerts, bonus) ;
- la **valeur détenue** mesure ce qui reste réellement dans les wallets (elle bouge aussi avec le cours des actions).

[st]
Le volume : trois leaders depuis juin

[image | drafts/issue-06/assets/ca-brille-actions-tokenisees.png]
*Part de chaque blockchain dans le volume mensuel de transferts d'actions tokenisées, de juin à mi-octobre 2026 (octobre : du 1er au 12).*

[p]
Solana menait en juin. En juillet et en août, place à **BNB Chain** : Binance y a lancé en juin **bStocks**, sa gamme d'actions tokenisées. Un seul jeton, **QQQB** (qui suit l'indice Nasdaq-100), a représenté environ 82 % des échanges d'actions tokenisées de juillet, selon CoinDesk (qui mesure les échanges, pas les transferts de nos graphiques). Binance avait aussi supprimé une partie de ses frais jusqu'au 31 août.

[p]
En septembre, sans la gratuité, le volume de BNB Chain a été **divisé par deux** (de 29 à 14,3 Md$), et Robinhood Chain a pris la tête avec 47 % du volume.

[st]
La valeur détenue : un autre classement

[image | drafts/issue-06/assets/ca-brille-valeur-detenue.png]
*Part de chaque blockchain dans la valeur d'actions tokenisées détenue en fin de mois, de juin à mi-octobre 2026 (octobre : au 12). Mêmes couleurs que le graphique du volume ; « Autres » : surtout Avalanche et Arbitrum.*

[p]
Dit simplement : sur BNB Chain, le volume a été divisé par deux à la fin de la gratuité, mais **la valeur détenue est restée**, et elle a plus que doublé depuis juillet. À l'inverse, Robinhood Chain, première en volume en septembre, ne pèse que **4 à 5 % de ce qui est détenu**.

[texte]
Côté volume, c'est un jeu de chaises musicales, et ce sont les primes qui tiennent la musique. En quatre mois, trois leaders différents se sont succédé. Deux d'entre eux ont profité d'une incitation : la gratuité chez Binance, le gas offert chez Robinhood, où une partie des échanges d'actions passait en plus par des paires avec des memecoins, très spéculatives. Chez Binance, le volume a été divisé par deux dès la fin de l'offre. **Être n°1 du volume un mois donné ne dit presque rien de la suite.**

[avis]
💡 **Notre avis** :
- **Le grand gagnant aujourd'hui, c'est BNB Chain, grâce à Binance plus qu'à la technologie.** Sa valeur détenue a plus que doublé, et elle est restée après la fin de la gratuité. Sa force, c'est la distribution : des millions de clients à qui Binance propose ces actions en un clic, et qui peuvent les utiliser comme **collatéral** sur son exchange.
  Ses limites :
  - ce sont des certificats émis par une société affiliée à Binance, pas des actions détenues en propre ;
  - tout dépend d'un seul acteur ;
  - le volume est très concentré sur un seul jeton, QQQB.
- **Solana n'est pas renversée, elle est diluée.** Elle perd la domination du volume, mais sa valeur détenue progresse de 44 % depuis juillet (de 348 à 500 M$). C'est l'écosystème le plus ouvert : plusieurs émetteurs (xStocks, Ondo…) et des actions tokenisées utilisables dans sa DeFi. Moins spectaculaire, mais un usage plus organique : à nos yeux, le profil le plus durable.
- **Robinhood Chain a un atout pas encore joué** : des millions de clients courtage, avec des actions déjà en portefeuille. Mais sa chaîne a surtout attiré la spéculation sur les memecoins, et on n'y détient que 137 M$ d'actions tokenisées (4 % du total). Son avenir dépend de la capacité de Robinhood à pousser ses clients vers sa chaîne.

**Temporaire ou durable ?** Le volume de BNB Chain est en partie temporaire, on l'a vu retomber ; celui de Robinhood Chain reste à éprouver. Leur modèle, lui, peut durer : il repose sur une base de clients existants. La vraie question n'est pas « quelle chaîne ? » mais « **qui a les clients ?** ». Et à 3,3 Md$, tout le secteur reste une goutte d'eau face aux Bourses classiques.

**Source** : rwa.xyz (valeur détenue et volume de transferts, actions et ETF tokenisés, données au 12/10/2026) · CoinDesk (QQQB, frais Binance) · news.bitcoin.com, Cointribune (bStocks acceptés en garantie) · Crypto Briefing (actions tokenisées dans la DeFi de Solana)

---

## Notes du Rédacteur (hors texte, à ne pas assembler)

### Changements v1 → v2
- **Avis** : les 5 idées de `ca-brille-analyse-claude.md` y figurent en entier (consigne de Marc). Elles intègrent les corrections d'exactitude du coordinateur : deux leaders sur trois portés par une incitation ; Solana « sans programme de primes comparable » ; BTech = « société affiliée » ; idée 5 avec une distinction entre BNB (retombée observée) et Robinhood (à éprouver). Sont remis : « ne dit presque rien de la suite », les trois limites de BNB (dont QQQB), la garantie sur l'exchange, et la phrase sur la décision commerciale de Robinhood.
- **Corps** : nouvelle phrase d'annonce des deux mesures, plus courte ; mention « (elle bouge aussi avec le cours des actions) » ; QQQB « 82 % des échanges […] selon CoinDesk » ; légende « volume mensuel de transferts » ; septembre « sans la gratuité ».

### Termes
| Terme | Slug | Statut |
|---|---|---|
| Action tokenisée | `action-tokenisee` | EXISTANT ; lien sur la 1re occurrence, glose inline gardée car ÇA BRILLE peut être lu seul |
| QQQB, bStocks, gas, memecoins | — | glosés dans la phrase, ou déjà définis dans l'actu 3 (gas, memecoins) |

**Aucun encadré de définition.**

### Points `[À VÉRIFIER]` (pour le fact-check)
- **Chiffres rwa.xyz (relevé du 13/10, données au 12/10)**. Arrondis : 764,7 → 765 M$ ; 499,6 → 500 M$ ; 359,1 → 359 M$ ; 136,7 → 137 M$ ; 10,6 → 11 M$. Évolutions : 1,2 ÷ 0,544 ≈ × 2,2 ; 764,7 ÷ 659 ≈ + 16 % ; 499,6 ÷ 348 ≈ + 44 % ; 359,1 ÷ 272 ≈ + 32 % ; 136,7 ÷ 10,6 ≈ × 13 ; 3,34 ÷ 2,26 ≈ + 48 %.
- **Incohérence rwa.xyz** : la page /networks/robinhood affichait « 30D transfer volume 23,9 M$, −99,84 % » (toutes RWA confondues), ce qui contredit les 19,3 Md$ de septembre (vue actions). À trancher avant de publier le 47 %.
- **Arbitrum (95 → 161 M$) est absent du tableau**, comme demandé ; le Total l'inclut, d'où la mention « toutes blockchains ».
- **QQQB ≈ 82 %** : mesure CoinDesk (échanges), distincte du volume de transferts rwa.xyz du graphique, d'où l'attribution explicite.
- **Garantie bStocks sur Binance** : confirmée par le coordinateur (news.bitcoin.com « Binance Expands bStocks Collateral », Cointribune). Ces sources ne sont pas dans mes notes ; liens à joindre au fact-check.
- **≈ 75 M$ d'actions tokenisées déposés dans la DeFi de Solana** (Crypto Briefing, 5/09) : sert de base à l'affirmation, sans être chiffré dans le texte.
- **Contradiction apparente avec le #5** (« Solana > 96 % des échanges au S1 ») : autre source et autre mesure. Ici, Solana fait 65 % du volume rwa.xyz en juin. Non mentionné dans le texte.

### Besoins d'assemblage
- **Image** : à héberger sur GitHub (servie via `raw.githubusercontent.com`) pour Gmail ; prévoir `alt` et une largeur de 100 % (max 528 px). Côté site, ajouter un champ image au type `data` (ex. `image: { src, legende }`) et son rendu dans `numeros/[id]/page.tsx`.
- **Tableau** : le type `data` n'a pas de champ tableau, il faut en ajouter un (ex. `tableau: { colonnes, lignes }`). Côté email : tableau HTML sur fond nuit (texte `#cbd5e1`, ligne Total en blanc gras, filets fins).
- **Sous-titres `[st]`** : la carte du #5 n'en avait pas ; petit titre blanc dans la carte.
- **Avis** : encadré vert sous la carte, comme au #5. Il contient un paragraphe, trois puces et un paragraphe de chute, à rendre en HTML.

### Recoupement et redites
- Avec l'**actu 3** : 47 % et 4 % y figurent aussi, ainsi que Robinhood ≈ 140 M$ (ici 137 M$, le chiffre exact du tableau). La formule « on y échange beaucoup, on y garde peu » n'est pas reprise.
- **Dans la section** : la division par deux du volume BNB et le doublement de la valeur sont dits dans le corps, puis repris dans l'avis, comme le veut la consigne d'avis intégral. Si Marc veut alléger, la coupe naturelle est le paragraphe « Dit simplement » ou la phrase de septembre du corps, pas l'avis.

### Longueur
Environ 640 mots hors tableau, titre et ligne Source (corps ≈ 265, avis ≈ 375 ; compte wc). Longueur assumée : ÇA BRILLE devient la section d'analyse du numéro (choix de Marc).

### Points qui demandent l'avis de Marc
- Le titre : « le volume suit les primes… » ou « le classement n'est pas celui qu'on croit ».
- La redite corps/avis (BNB ÷ 2, valeur × 2) : garder le « Dit simplement », ou le couper.
- La chute de l'idée 5 commence par « Temporaire ou durable ? », une question rhétorique. Faut-il la garder (elle annonce le paragraphe) ou entrer directement par « Le volume de BNB Chain… » ?
