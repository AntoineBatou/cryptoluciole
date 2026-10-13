# ✨ DANS LE FAISCEAU — #6 — Actu 1 : HIP-4

> ✍️ Brouillon du Rédacteur (v4 : version de Marc + analyse, boucle 2 du vérificateur) — à valider par Marc. Notation des blocs : `[p]` paragraphe · `[st]` sous-titre · `[def | slug]` encadré de définition · `[liste]` puces · `[avis]` encadré vert « 💡 Notre avis ».

**Titre (proposition)** : ✦ HIP-4 : où en sont les marchés de prédiction d'Hyperliquid ?

---

[p]
Hyperliquid, la plateforme d'échange de **perps**, propose des marchés de prédiction depuis le 2 mai (le dispositif HIP-4). Au début, seule son équipe pouvait en créer. Depuis le 29 août, d'autres acteurs le peuvent aussi.

[p]
Le 11 octobre, on comptait 309 marchés ouverts :

[liste]
- 147 créés par **Outcome**, un projet spécialisé dans les marchés de prédiction ;
- 93 par **trade.xyz**, connu sur Hyperliquid pour ses perps qui suivent le cours d'actions, de l'or ou du pétrole ;
- 61 par **Skew**, un autre créateur ;
- **8 seulement** par Hyperliquid.

[p]
**L'essentiel de l'offre vient d'acteurs externes**, qui se servent d'Hyperliquid comme d'une infrastructure. Le créateur d'un marché touche une part des frais payés par les parieurs : c'est ce qui l'incite à en ouvrir.

[p]
On y parie sur deux grandes familles de questions. Le sport arrive en tête (NFL, football, base-ball), puis les prix : « le bitcoin sera-t-il au-dessus de tel prix vendredi ? ». S'y ajoutent quelques introductions en Bourse et cérémonies de récompenses.

[st] **Qui tranche le résultat ?**

[p]
Sur Polymarket, un proposeur agréé propose le résultat, et on ne passe au vote que si quelqu'un le conteste. Ici, c'est le créateur du marché (le *deployer*) qui l'annonce lui-même. Il est encadré de trois façons :

[liste]
- chaque marché suit un modèle (type de question, source qui fait foi) approuvé par le vote des validateurs, les acteurs qui font tourner la blockchain d'Hyperliquid ;
- pour devenir créateur, il faut bloquer des HYPE pendant **au moins 183 jours** (environ 6 mois) ;
- si son marché ne respecte pas le modèle, les validateurs peuvent voter pour **lui confisquer une partie de cette mise**.

[p]
Autrement dit : pas de contestation ouverte à tous ; on fait confiance à un acteur désigné, tenu par l'argent qu'il a mis en jeu.

[p]
Côté parieur, tout se fait au même endroit que les perps, et les paris se règlent en USDC. **Pas de levier ni de liquidation** : tu paies ton pari en entier à l'achat.

[st] **Et ça marche ?**

[p]
Pas encore vraiment. Le football a porté les premiers mois (28 % du volume depuis le lancement). Ensuite, en volume échangé par jour :

[liste]
- **août** : environ 0,5 M$ ;
- **31 août**, deux jours après l'arrivée des créateurs extérieurs : près de 2 M$, sur cette seule journée ;
- **septembre** : environ 1,7 M$ ;
- **début octobre** : 1,25 M$.

[p]
**L'arrivée de créateurs autres qu'Hyperliquid a relancé l'activité, mais depuis, elle reflue.**

[p]
En septembre, HIP-4 a traité environ 51 M$, contre 2,3 à 4,7 Md$ pour Polymarket selon la mesure retenue : **de l'ordre de 1 à 2 %**, et Kalshi est bien au-delà.

[p]
Et ce volume est en partie dopé : Outcome, qui concentre l'essentiel de l'activité, verse des **primes** à ses parieurs pour les attirer.

[st] **L'intérêt pour un trader**

[p]
Tu as un perp acheteur sur le bitcoin et tu crains une baisse d'ici vendredi. Sans fermer ton perp, tu achètes depuis le même compte 1 000 NON à 0,20 USDC (1 000 × 0,20 = 200 USDC) sur « le bitcoin sera-t-il au-dessus de tel prix vendredi ? » :

[liste]
- si vendredi le bitcoin termine sous ce prix, tes NON valent 1 000 USDC, soit 800 USDC de gain net (1 000 − 200) : de quoi compenser une partie de ta perte sur le perp ;
- s'il reste au-dessus, même après avoir baissé, ils ne valent rien : 200 USDC perdus, comme une assurance qui n'a pas servi.

[p]
**Le pari est tout ou rien, à une date donnée** : il ne protège pas en proportion de la baisse. Ce montage est possible dès aujourd'hui, avec ses limites :

[liste]
- rien n'indique à ce jour que la plateforme tienne compte de ta protection : ton perp exige la même marge ;
- les USDC dépensés en paris ne servent plus de marge à ton perp, et ton pari ne compte pas comme **collatéral** ;
- faire de tout ton compte un seul collatéral, paris compris : Hyperliquid l'annonce pour plus tard.

[avis]
💡 **Notre avis** : le mécanisme fonctionne, mais l'usage ne suit pas encore. Comme le résume un analyste, c'est moins un concurrent de Polymarket qu'une protection ponctuelle posée à côté de ton perp. Et si Hyperliquid tient sa promesse d'un collatéral commun, ça deviendra vraiment intéressant : la même somme servira à la fois à prendre position et à se couvrir, au lieu d'être bloquée deux fois. 

**Source** : documentation Hyperliquid · API Hyperliquid (marchés ouverts au 11/10) · TokenPost (7/10) · crypto.news (3/09) · DeFi Rate · ChainCatcher · KuCoin/Odaily
**Lien** : → Voir la fiche Hyperliquid (`/protocoles/hyperliquid`)

---

## Notes du Rédacteur (hors texte, à ne pas assembler)

### Termes
| Terme | Slug | Statut |
|---|---|---|
| Contrat perpétuel (perps) | `contrat-perpetuel` | EXISTANT (#4) — lien sur « perps » (glose coupée par Marc) |
| Validateur | `validateur` | EXISTANT (#1) — glose inline |
| Collatéral | `collateral` | EXISTANT (#5) — lien sur la 1re occurrence de « collatéral » (liste des limites) ; « garantie » n'est plus employé |
| Staking / mise | `staking` | EXISTANT — non nommé |
| Slashing | `slashing` | EXISTANT (#2) — mécanisme décrit sans le mot ; lien possible sur « confisquer » |
| Stablecoin (USDC) | `stablecoin` | EXISTANT (#3) |
| Marge | — | vue au #4 (perps), pas de fiche glossaire ; pas d'encadré ajouté |
| HYPE, HIP-4 | — | pas dans le glossaire ; pas indispensables à définir |

**Aucun encadré de définition.**

### Points `[À VÉRIFIER]` (pour le fact-check)
- **Chronologie** : mise en service le 2 mai (marchés du protocole seuls), ouverture le 29/08 (Outcome en premier). Sources secondaires concordantes (KuCoin/Odaily, ChainCatcher, crypto.news).
- **Volumes par jour** : ≈ 545 k$/j en août et 1,97 M$ le 31/08 (crypto.news, 3/09, d'après le Hyperliquid Research Collective) ; ≈ 51 M$ en septembre et ≈ 1,25 M$/j début octobre (TokenPost, 7/10, données au 5/10). Le pic de la Coupe du monde est tiré du poids du foot dans le cumul (89,5 M$, 28 %).
- **« ≈ 1 % de Polymarket »** : 51 M$ ÷ 4,7 Md$ (DeFi Rate, volume en dollars, septembre). Pour Kalshi (≈ 60 Md$ notionnel, Prediction News), mesure différente, d'où le simple « bien au-delà ».
- **Primes d'Outcome** : programme de récompenses de 1 M$ (≈ 273 k$ versés au 5/10, TokenPost). Primes annualisées ≈ 2,7 M$ contre ≈ 480 k$ de frais HIP-4 : chiffres non repris dans le texte. « Outcome concentre l'essentiel de l'activité » : ≈ 92 % du volume des créateurs extérieurs (TokenPost), ≈ 85 % (Research Collective), ≈ 98 % du volume 24 h dans l'API le 12/10.
- **Liquidité 2-3 %** (TokenPost, 25 carnets les plus actifs, achat de 10 000 $) : phrase COUPÉE en boucle 2 pour gagner de la place. À remettre si Marc le souhaite : « même sur les marchés les plus actifs, un pari de 10 000 $ se paie couramment 2 à 3 % au-dessus du meilleur prix affiché ».
- **Mario Chow (TokenPost)** : présenté comme « un analyste cité par TokenPost », sans le nommer, car sa fonction n'est pas vérifiée. L'idée est paraphrasée (« moins un Polymarket qu'une protection ponctuelle posée à côté de ton perp ») ; « les briques sont solides », qui était sa formule, a été retiré. Si sa fonction est confirmée, on peut le nommer.
- **Volumes par jour, version texte** : 0,5 M$/j (août) → près de 2 M$ (31/08, un jour) → 1,7 M$/j (51 M$ ÷ 30, septembre) → 1,25 M$/j (1-5 oct.). Le « près de 2 M$ » est un chiffre d'une seule journée, pas une moyenne. Le pic de la Coupe du monde n'est plus chiffré : seul « le football = 28 % du volume depuis le lancement » est repris.
- **Exemple de couverture** : chiffres illustratifs (1 000 NON à 0,20 $), pas un marché réel. Logique tout ou rien vérifiée avec la règle d'ON ÉCLAIRE (contrat gagnant = 1 $, perdant = 0).
- **Couverture et collatéral** : d'après la doc officielle. Paris entièrement collatéralisés ; en compte unifié, un seul solde USDC, sans réduction de marge documentée ; « un seul collatéral pour tout » annoncé pour plus tard (portfolio margin). Les guides qui parlent de marge réduite ou de gains latents servant de garantie ne sont PAS confirmés par la doc et ne sont pas repris.
- **Chiffres du 11/10 (309 / 147 / 93 / 61 / 8)** : présentés comme une photo du jour. L'API donnait 321 marchés le 12/10 (Outcome 199, trade.xyz 53).
- **Part des frais pour le créateur** : seul le `deployerFeeScale 1.0` de l'API indique un partage. À confirmer.
- **Volontairement absents** : montant de la mise (500 000 HYPE, avancé seulement par des analystes), taux de frais, opinion d'OAK, détail du portfolio margin.

### Points qui demandent l'avis de Marc
- **Ouverture** : ta phrase est retouchée pour poser les deux dates et corriger un point de fait (HIP-4 = tout le dispositif, depuis le 2 mai ; le 29 août = l'ouverture aux autres créateurs). La parenthèse « (on te l'annonçait au #1) » est retirée, car ON ÉCLAIRE le dit déjà.
- **Ta phrase de l'avis** : seule correction, « qui l'a lancé » → « qui a lancé le marché » (le référent avait disparu).
- **Longueur** : le corps fait ≈ 600 mots (≈ 650 au décompte brut, qui compte aussi la ponctuation isolée), au-dessus de la cible de 540 : tes paragraphes n'ont pas été raccourcis. Pistes si besoin : couper la phrase sur la part des frais du créateur, ou la puce « un seul collatéral pour tout ».
