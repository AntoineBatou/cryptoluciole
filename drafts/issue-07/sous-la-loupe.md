# 🔍 SOUS LA LOUPE — numéro 7 : Papertrade

> ✍️ Brouillon du Rédacteur (v3 : 8,5/10 au vérificateur ; relu en entier par Marc le 21/10, complété selon ses notes). Notation des blocs : `[p]` paragraphe · `[st]` sous-titre · `[def | slug]` encadré de définition · `[liste]` puces · `[À VÉRIFIER]` chiffre/fait à confirmer. Italique = terme anglais à sa 1re occurrence. Correspondance avec le type `protocole` de `issues.ts` : En bref → `bref` · Comment ça marche + La faille → `etapes` · D'où vient l'argent ? → `rendement` · Les risques → `risques` + `risqueSens: "eleve"` · Pourquoi ça compte → `importance` · `slug: "papertrade"`.

**Titre (proposition)** : Papertrade : des perps ×1000 dont la banque est financée par les perdants

---

[st] En bref

[p]
Papertrade est une plateforme de perps lancée le 10 octobre sur HyperEVM, la couche d'Hyperliquid qui accueille les applications tierces (voir notre [fiche Hyperliquid](https://www.cryptoluciole.com/protocoles/hyperliquid)). On n'y trade que **deux marchés, le bitcoin et l'ether**, avec un levier jusqu'à ×1000 [À VÉRIFIER : aucun marché ajouté depuis le lancement]. Son modèle ressemble à celui d'un casino : **la banque n'est financée que par les pertes des joueurs, avec la particularité que chaque perdant reçoit un jeton qui, une fois staké, rapporte une part des pertes futures des autres.**

[st] Comment ça marche

[p]
Tu déposes des USDC en marge, tu choisis le bitcoin ou l'ether, un sens (long ou short) et un levier. Mais aucune position n'est ouverte sur un marché : Papertrade lit le prix d'Hyperliquid et calcule lui-même ton résultat. C'est un perp synthétique.

[def | `perp-synthetique`] **Perp synthétique**
Un perp qui n'existe que dans les comptes du protocole : il suit un prix de référence, sans qu'aucun ordre soit passé sur un marché, et la plateforme règle elle-même gains et pertes.

[p]
Sur Papertrade, le prix de référence est le milieu du BBO du carnet d'ordres d'Hyperliquid. Et comme rien ne s'échange réellement, il n'y a ni funding, ni frais d'ouverture, ni slippage.

[def | `bbo`] **BBO (*Best Bid and Offer*)**
Le meilleur prix d'achat (*bid*) et le meilleur prix de vente (*offer*) proposés à un instant donné dans un carnet d'ordres. Le *mid* est leur milieu : acheteur à 99,8, vendeur à 100,2, le mid vaut 100.

[p]
À ×1000, 100 USDC ouvrent une position de 100 000 $ (100 × 1 000), et **environ 0,1 %** de mouvement contre toi suffit à effacer la marge et à liquider la position : c'est la règle « 100 ÷ ton levier » de notre [numéro 4](https://www.cryptoluciole.com/numeros/4).

[st] D'où vient l'argent ?

[p]
Tous les traders ont la même contrepartie : une réserve d'USDC, la LP. Partie de zéro, elle n'accepte aucun dépôt et se remplit uniquement :

[liste]
- des marges des traders liquidés ;
- des pertes des positions clôturées dans le rouge.

[p]
C'est elle qui paie les gagnants, mais pas en totalité. Elle applique d'abord une **décote** sur le gain : plus le prix a peu bougé entre l'ouverture et la clôture, plus la décote est forte. Un gain tiré d'un mouvement de 0,1 % est donc davantage rogné qu'un gain tiré d'un mouvement de 2 %. Le but : décourager les gains sur de tout petits écarts, les plus faciles à provoquer. Elle prélève ensuite 2 % de frais sur ce qui reste.

[p]
Si la LP est vide, tu récupères ta marge et ton profit attend dans une file d'attente, réglé dans l'ordre d'arrivée. La LP ne peut donc jamais s'endetter.

[p]
Le protocole repose ainsi sur une thèse : **les traders à fort levier finissent par perdre**, et leurs pertes suffisent à alimenter la réserve qui sert de contrepartie, sans avoir besoin de *liquidity providers* extérieurs.

[p]
Les perdants reçoivent du PAPER, le jeton du protocole : 100 PAPER par dollar perdu au départ, puis de moins en moins (environ 17 par dollar mi-octobre [À VÉRIFIER]). Le PAPER n'est pas encore vendable : sa seule utilité est d'être staké.

[p]
Les stakers sont payés en USDC, au prorata du PAPER qu'ils ont staké, à partir de deux sources :

[liste]
- **l'excédent de la LP** : au-delà d'environ 5 M$, la réserve ne grossit plus, et ce qu'elle gagne en plus est reversé aux stakers ;
- **la moitié des 2 % de frais** prélevés sur les gains des traders (l'autre moitié va aux développeurs).

[p]
Ces versements ne tombent que si personne n'attend dans la file et que la LP reste au-dessus de son plafond. Au 20 octobre, environ 58 M$ avaient été versés ainsi (DefiLlama).

[p]
Dit simplement : le PAPER est **un droit sur les pertes futures des autres traders**.

[st] La faille : un prix facile à pousser

[p]
Déplacer le mid d'Hyperliquid (donc le prix de référence sur Papertrade) coûte peu, et à ×1000 ça rapporte gros. Pas à pas, avec un carnet volontairement élargi :

[liste]
- Le mid est à 100. Sur Papertrade, tu ouvres un long de 1 M$ avec 1 000 $ de marge (×1000).
- Sur Hyperliquid (carnet à 99,8 / 100,2), tu places un ordre d'achat à 100,0. Le mid passe à 100,1, soit +0,1 %, sans que ton ordre soit exécuté.
- Tu clôtures ton long sur Papertrade : 1 000 $ de gain avant décote (1 000 000 × 0,1 %), environ 700 $ après [À VÉRIFIER]. Tu gagnes environ 70 % de ta mise en quelques secondes : c'est pourquoi la décote ne suffit pas à protéger la LP.
- Puis tu annules ton ordre sur Hyperliquid.

[p]
C'est ce qui s'est passé le jour du lancement, avec un wallet :

[liste]
- les ordres posés : de gros achats sur le carnet ETH d'Hyperliquid, environ 6 000 ETH, soit près de 15 M$ (The Block) ;
- l'effet : un mid relevé de 0,1 à 0,2 %, encaissé par de gros longs à ×1000 sur Papertrade ;
- le gain : environ 1,28 M$ en huit heures, sur environ 300 trades [À VÉRIFIER] ;
- reperdu le soir même : environ 450 k$. Une trentaine de positions short à ×660, laissées ouvertes plus de trois heures, ont été liquidées. À ce levier, un mouvement d'environ 0,15 % contre soi suffit : un mouvement ordinaire du marché, sans aucune manipulation.

[p]
La LP, partie de zéro, a pu payer parce qu'elle s'était déjà remplie de plusieurs millions de pertes en quelques heures [À VÉRIFIER]. Pas un bug : le mécanisme a marché comme écrit ; il manquait les garde-fous classiques (comparer avec un second prix, lisser sur une durée). L'équipe a depuis resserré les plafonds de position.

[st] Les risques — 🔴 Élevé

[liste]
- Pour le trader : un ×1000 se fait liquider sur un mouvement de quelques secondes.
- Pour le staker : ses revenus sont conditionnés par les pertes des traders.
- Le contrôle : un multisig 2-sur-3 (les deux fondateurs, semi-pseudonymes, et un tiers) peut suspendre le trading, geler un marché ou changer les frais. Un audit (Guardian) a été publié le 17 octobre, mais la manipulation du prix y est classée comme risque connu, hors du périmètre corrigé. (Corrigé le 21/10 après envoi : l'email disait « Audit annoncé, sans rapport public ».)

[st] Pourquoi ça compte

[p]
Papertrade est un cas d'école : **un dérivé synthétique ne vaut que ce que vaut sa source de prix**, et plus le levier est haut, moins il faut la déformer pour qu'une manipulation paie. C'était déjà la question des marchés de prédiction d'Hyperliquid dans notre [numéro 6](https://www.cryptoluciole.com/numeros/6) : qui fixe le prix de règlement, et combien coûte-t-il de le fausser ?

[p]
L'affluence retombe déjà : l'argent déposé sur la plateforme est passé d'environ **102 M$** au lendemain du lancement à environ **45 M$** le 21 octobre (DeFiLlama) [À VÉRIFIER le jour de l'envoi].

[p]
À nos yeux, ce n'est pas un outil de trading mais un jeu dont l'avantage de la maison est en grande partie reversé aux stakers. Et le PAPER n'est pas un rendement : c'est un pari sur l'affluence future de la plateforme.

[p]
[→ Voir la fiche complète](https://www.cryptoluciole.com/protocoles/papertrade)

---

## Notes du Rédacteur (hors texte, à ne pas assembler)

### Notes pour le fact-checker
- Lancement **10/10/2026** sur HyperEVM ; marchés BTC et ETH seulement ; levier max ×1000.
- Prix = mid du BBO du carnet Hyperliquid (HyperCore), lu via precompile ; pas de funding, pas de frais d'ouverture, pas de slippage.
- Liquidation à ×1000 (phrase « en pratique, la liquidation tombe même un peu avant » retirée du texte) : la doc évoque **0,05 %** de mouvement contre soi ; le texte dit « environ 0,1 % efface la marge, liquidation un peu avant » (règle simplifiée du numéro 4, assumée). Confirmer le seuil.
- Exemple de gain **100 $ de marge ×1000, +0,1 % → ~72 $ gardés** (source : Blockworks) → base du « environ 700 $ après décote » sur 1 000 $ dans le pas-à-pas. Confirmer, et que les 2 % s'appliquent bien après la décote. Destinataires des 2 % (stakers / développeurs ?) à confirmer.
- Spread réel ETH sur Hyperliquid « d'un cran ou presque » : confirmer.
- LP : démarre à 0 $, aucun dépôt externe ; plafond **~5 M$**, excédent versé en USDC aux stakers PAPER.
- File d'attente FIFO si LP vide (marge rendue, profit en attente).
- Émission PAPER : **100/$ sous 2 M$**, puis ratio décroissant indexé sur le plus haut atteint ; **≈16,6 PAPER/$ le 16/10** (chiffre qui a pu encore baisser au jour de l'envoi). Pas de pré-émission ni d'allocation équipe/VC. Non transférable, « phase 4 » sans date. **~95 % staké**.
- Cumul versé aux stakers : **~46 M$** (DefiLlama, 17/10) — à rafraîchir le jour de l'envoi (chiffre volatil).
- Incident du 10/10 : **~1,28 M$ net** (The Block / SlowMist / DefiLlama Hacks, classé manipulation d'oracle) ; ordres **~20 M$** sur le carnet ETH (accusation sur X, non confirmée) ; mid déplacé de **10-20 pb** ; **~450 k$** reperdus ensuite. Vérifier qu'il s'agit bien d'**un** wallet (certaines sources parlent de deux).
- « Elle s'était déjà remplie de plusieurs millions de pertes en quelques heures » : à étayer (estimations 18-28 M$ de pertes nettes sur les premiers jours ; vérifier l'ordre de grandeur le 10/10 même, avant l'attaque).
- Garde-fous documentés : deadband (< 0,2 pb), décote, plafonds d'open interest ; **absence** de limite d'écart et de prix moyen pondéré dans le temps. Plafonds resserrés après coup, pas de post-mortem formel.
- Multisig **2-sur-3** (Jez, Blurr + un tiers) : pause, gel de marché, frais ; timelock **7 jours** sur les upgrades. Audit Guardian Audits annoncé, **aucun rapport public au 17/10** → revérifier le jour de l'envoi.
- Exemples pas à pas (99,8 / 100,2 ; ordre à 100,0 ; long de 1 M$ avec 1 000 $) = **illustrations inventées en chiffres ronds**, pas des faits. Le spread réel d'ETH sur Hyperliquid est bien plus serré, c'est dit dans le texte.
- Supprimé volontairement (concision) : l'exemple chiffré du gain (100 $ ×1000, +0,1 % → ~72 $ gardés au lieu de 100, Blockworks) ; volume du 1er jour (~300 Md$ notionnel), 10-12,6 M$ versés aux stakers en 24 h, 1 % du PnL réalisé versé aux stakers (assiette exacte floue), nom « Martingaler LP ».

### Termes glossaire proposés
| Terme | Slug | Forme dans le texte | Statut |
|---|---|---|---|
| BBO | `bbo` | encadré | NOUVEAU (aussi prévu en DÉFINITIONS : à arbitrer, doublon possible) |
| Perp synthétique | `perp-synthetique` | encadré | NOUVEAU |
| Contrat perpétuel | `contrat-perpetuel` | simple mention (« perps ») | EXISTANT — lien possible |
| Levier | `levier` | mention | EXISTANT |
| Liquidation | `liquidation` | mention | EXISTANT |
| Carnet d'ordres | `carnet-ordres` | mention | EXISTANT — lien possible |
| Oracle | `oracle` | non cité (le texte dit « source de prix ») | EXISTANT |
| Bucket shop | `bucket-shop` | italique, glosé inline | NOUVEAU (facultatif) |
| Post-mortem | — | glosé inline | pas d'entrée nécessaire |

### À mettre dans la fiche site plus tard (`/protocoles/papertrade`, Mode B — wiki à créer d'abord via `/analyse`)
- Le precompile HyperEVM → HyperCore (comment le contrat lit le carnet) et pourquoi il n'y a ni funding ni slippage.
- La formule complète de la décote « d'impact » (paramètres hérités de Rollbit selon l'article source), le deadband de 0,2 pb, les 2 % sur liquidation.
- Les plafonds de position (10 M$ de notionnel par utilisateur au lancement) et leur resserrement après le 10/10.
- La mécanique PAPER en détail : ratio indexé sur le plus haut de la LP (compteur qui ne redescend pas), 1 % du PnL réalisé versé aux stakers, absence de supply max, « phase 4 ».
- L'étude Sumcap (608 scénarios de solvabilité) et ses limites.
- Le nom « Martingaler LP » (et ce qu'il dit du modèle).
- Les chiffres des premiers jours (volume notionnel, pertes nettes, flux vers les stakers) → en **[CHIFFRE LIVE — DeFiLlama]** (frais / revenus), pas en dur.
- L'absence d'alignement économique avec Hyperliquid (aucun frais de trading versé, seul le gas en HYPE).
- La lecture réglementaire (bucket shop / jeu d'argent) développée (puce « Le statut » retirée de la newsletter).
- Le seuil exact de liquidation (0,05 % selon la doc) et la marge de maintenance.
- Le ratio PAPER précis (16,6/$ le 16/10), seuil de 2 M$, absence d'allocation équipe/VC, ~95 % staké.
- Le détail des garde-fous (deadband 0,2 pb, plafonds d'OI) et l'absence de post-mortem.
- Le délai de 7 jours sur les mises à jour du code (retiré de la puce « Le contrôle »).
- La nuance « la LP ne peut pas s'endetter » développée (paragraphe « Point solide » retiré ; l'idée reste en une phrase).
- La chronologie complète de l'incident du 10/10 (dépôts/retraits de l'adresse selon The Block, classement SlowMist/DefiLlama, débat « exploit » vs usage du mécanisme).
- Mention « rédigé avec l'aide de l'IA » sur la page site.
