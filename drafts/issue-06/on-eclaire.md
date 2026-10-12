# 🔦 ON ÉCLAIRE — #6

> ✍️ Brouillon du Rédacteur (v2, après boucle 1 du vérificateur) — à valider par Marc. Notation des blocs : `[p]` paragraphe · `[st]` sous-titre · `[def | slug]` encadré de définition · `[liste]` puces · `[avis]` encadré vert « 💡 Notre avis ».

**Titre de la notion (proposition)** : Les marchés de prédiction : quand un prix devient une probabilité

---

[p]
Qui va gagner l'élection ? La Fed va-t-elle relever ses taux ? La France va-t-elle battre l'Espagne ? Sur un **marché de prédiction**, on mise de l'argent sur la réponse à ce genre de questions. Le plus connu dans la crypto s'appelle **Polymarket** ; son grand concurrent, Kalshi, est une bourse américaine régulée qui fonctionne surtout en dollars.

[def | `marche-de-prediction`] **Marché de prédiction**
Une plateforme où l'on achète et vend des contrats liés au résultat d'un événement : élection, match, décision de la Fed, prix du bitcoin à une date donnée…

[p]
Au #1, on t'annonçait qu'Hyperliquid se lançait à son tour, sans expliquer comment ça marche. On rattrape ça cette semaine.

[st] **Le principe**

[p]
Tu achètes un contrat lié à une question, à laquelle on peut répondre par oui ou par non à une date connue : « L'équipe de France gagnera-t-elle le match du 10 novembre ? ».
Tu peux choisir d'acheter le OUI ou le NON.

[p]
Ce n'est pas un bookmaker qui fixe la cote et parie contre toi : le prix se forme entre participants, comme en Bourse, selon l'offre et la demande, et continue d'évoluer pendant toute la durée du contrat, sachant que valeur du OUI + valeur du NON = 1 $. Tu peux revendre ton contrat à tout moment avant la fin.

[p]
Une fois la réponse connue : si la réponse est oui, chaque contrat OUI vaut **1 dollar** ; sinon, il ne vaut **plus rien**. Le contrat NON fonctionne à l'inverse.

[st] **Le prix est une probabilité**

[p]
Reprenons l'exemple du match (marché « La France remportera-t-elle le match ? »). Imaginons que, quelques jours avant celui-ci, le contrat OUI s'échange à **0,62 USDC**. Tu veux parier sur la victoire de la France : tu achètes 100 OUI, tu paies 62 USDC (100 × 0,62).

[liste]
- **La France gagne** : tes 100 contrats valent 100 USDC. Tu gagnes 38 USDC (100 − 62).
- **La France ne gagne pas** : ils valent zéro. Tu perds tes 62 USDC.

[p]
Ta perte maximale est donc ta mise, et ton gain maximal est connu dès l'achat.

[p]
Le prix étant uniquement déterminé par l'offre et la demande (et non par un bookmaker), ce prix de 0,62 se lit directement comme une probabilité : **le marché des parieurs sur cette plateforme estime à 62 % les chances que la France gagne**. Si plus de gens pensent qu'elle va gagner, ils achètent du OUI, le prix monte, et la probabilité affichée avec.

[def | `probabilite-implicite`] **Probabilité implicite**
La probabilité qu'un prix « sous-entend ». Un contrat qui paie 1 $ et s'échange à 0,62 $ traduit une estimation collective de 62 % de chances. Ce n'est pas une prévision scientifique : c'est ce que les participants sont prêts à payer, compte tenu de ce qu'ils savent.

[p]
**En théorie**, prix et probabilité ne font qu'un. **En pratique**, l'écart existe, pour trois raisons :

[liste]
- **les frais** prélevés par la plateforme ;
- **l'écart entre prix d'achat et prix de vente** : on achète souvent un peu au-dessus de 0,62 et on revend un peu en dessous ;
- **les petits marchés**, où quelques acheteurs suffisent à déplacer le prix.

[p]
Sur une question très suivie, le prix reste un bon repère. Sur une question peu suivie, beaucoup moins.

[st] **OUI + NON = 1**

[p]
Chaque contrat a deux côtés. Les deux prix s'additionnent à 1. Si le OUI vaut 0,62, le NON vaut 0,38. À eux deux, ils totalisent exactement 1 USDC (0,62 + 0,38). À la fin, ce dollar revient en entier au camp gagnant.

[st] **D'où vient l'argent ?**

[p]
**De la poche des perdants.** Un marché de prédiction ne produit rien : chaque dollar gagné par un camp a été perdu par l'autre.

[st] **Comment le marché se termine**

[p]
À sa création, chaque marché fixe sa règle : la question exacte, l'échéance, et la source qui fera foi (un résultat officiel, une publication de la Fed…). À l'échéance, on constate le résultat, et le marché est « résolu » : les contrats gagnants passent à 1, les perdants à 0, et chacun reçoit ce qui lui revient.

[p]
Reste une question : **qui constate le résultat ?** Une blockchain ne sait pas qui a gagné un match : il faut le lui dire. C'est le rôle de l'oracle.

[def | `oracle`] **Oracle**
Le mécanisme qui fournit à une blockchain une information qu'elle ne peut pas obtenir seule. Il faut distinguer deux cas. Quand le marché porte sur un prix (par exemple « Le bitcoin vaudra-t-il plus de 80 000 $ le 1er janvier ? »), l'information vient de flux automatiques (Chainlink ou Pyth). Quand il porte sur un fait du monde réel (qui a gagné l'élection ?), il faut quelqu'un pour l'établir.

[p]
**Sur Polymarket**, c'est un oracle décentralisé, UMA. Un proposeur agréé par UMA propose le résultat en déposant une caution. Si personne ne le conteste dans un court délai (et tout le monde peut contester), il est validé ; s'il est contesté, ce sont les détenteurs du jeton UMA qui votent.

[p]
D'où un risque propre à ces marchés : on peut avoir raison sur l'événement et perdre quand même, si la question est ambiguë ou si le vote tranche mal.

[p]
En mars 2025, un marché Polymarket demandait si l'Ukraine accepterait l'accord sur les minerais proposé par les États-Unis : il a été résolu OUI alors qu'aucun accord n'avait été signé, à l'issue d'un vote UMA contesté où un seul gros détenteur de jetons pesait environ un quart des voix, selon un chercheur. Polymarket a refusé de rembourser. Avant d'acheter, la règle de résolution se lit aussi attentivement que la question.

[p]
Bon à savoir : sur Polymarket, on parie en USDC depuis un wallet, et toutes les positions sont visibles sur la blockchain. La plateforme est en revanche bloquée en France : l'ANJ a ordonné en juillet 2026 aux fournisseurs d'accès de bloquer le site, ce que Polymarket conteste en justice.

[avis]
💡 **Notre avis** : un marché de prédiction n'est pas un placement, il s'agit d'un pari. Mais au delà de cet aspect, son prix est utile : il donne en temps réel l'estimation d'une foule qui engage son propre argent, souvent plus réactive que les sondages ou les commentaires d'experts. À lire comme un indicateur, pas comme une certitude — surtout sur les petits marchés. C'est un formidable outil d'analyse du sentiment de marché.

[p]
Polymarket reste une application où l'on parie. Hyperliquid a pris une autre voie : c'est notre première actu.

---

## Notes du Rédacteur (hors texte, à ne pas assembler)

### Termes définis
| Terme | Slug | Statut |
|---|---|---|
| Marché de prédiction | `marche-de-prediction` | **NOUVEAU** → à ajouter à `terms.ts` (numéro 6) |
| Probabilité implicite | `probabilite-implicite` | **NOUVEAU** → à ajouter à `terms.ts` (numéro 6) |
| Oracle | `oracle` | EXISTANT (#4) — texte de l'encadré adapté au contexte, la définition du glossaire reste valable |
| Stablecoin (USDC) | `stablecoin` | EXISTANT (#3) — simple renvoi inline, pas d'encadré |

### Points `[À VÉRIFIER]`
- Marché Polymarket « accord minerais Ukraine–États-Unis » (mars 2025) : résolu OUI sans accord signé, vote UMA contesté, gros détenteurs d'UMA soupçonnés d'être positionnés sur le OUI.
- Contentieux des États contre Kalshi : décision d'appel fédérale du 25/09 (Ohio, Tennessee) — veille, source Al Jazeera.
- Poids du sport dans l'activité de Kalshi (veille : Coupe du monde moteur des volumes, sans part chiffrée fiable).
- Accès à Kalshi depuis la France : inconnu.
- Polymarket US : rachat de QCX (bourse agréée CFTC) — modalités du produit américain (dollars ou USDC).
- Blocage de Polymarket en France (ANJ, fin 2024) : toujours en vigueur ?
- À recouper au fact-check, non marqués : sanction CFTC de Polymarket en 2022 ; fonctionnement de l'oracle UMA (proposition + caution + délai + vote) ; « Polymarket international non régulé ».
- Frais : aucun taux cité (taux Polymarket divergents dans la veille).
