# Fiche site — Papertrade (PAPER)

> ✍️ Brouillon du Rédacteur (Mode B), 21/10/2026. Texte identique à l'entrée `papertrade` de `site/app/protocoles/protocols.ts`. Bandeau « rédigé avec l'aide de l'IA » : `iaGenere: true`. Chiffres live : `live: { defillamaSlug: "papertrade", pools: [] }` (TVL). Pas de Pharos (PAPER n'est pas un stablecoin).

**Type** : Perps synthétiques sur HyperEVM, contrepartie financée par les pertes  
**Chaîne** : HyperEVM (Hyperliquid) — prix lu sur le carnet d'ordres d'Hyperliquid

**Résumé** : Papertrade est une plateforme de perps lancée le 10 octobre 2026 sur HyperEVM, la couche d'Hyperliquid qui accueille les applications tierces. On n'y trade que deux marchés, le bitcoin et l'ether, avec un levier jusqu'à ×1000. Sa particularité : personne ne finance la contrepartie. La réserve qui paie les gagnants se remplit uniquement des pertes des perdants, et chaque perdant reçoit un jeton, le PAPER, qui donne droit, une fois staké, à une part des pertes futures des autres.

## En bref (faits durables)

- **Type** : Perps synthétiques : tu trades contre une réserve du protocole, pas contre d'autres traders
- **Marchés** : Bitcoin et ether uniquement, levier jusqu'à ×1000
- **Chaîne** : HyperEVM (Hyperliquid), prix lu sur le carnet d'ordres d'Hyperliquid
- **Lancement** : Contrats déployés le 6 octobre 2026, trading ouvert le 10 octobre 2026
- **Équipe** : Jez et Blurr, semi-pseudonymes ; aucun investisseur divulgué
- **Jeton** : PAPER, distribué aux seuls traders perdants ; non transférable, sans droit de vote
- **Audit** : Guardian Audits (rapport publié mi-octobre 2026, version finale le 17 octobre)

**Score** : 32/100 — ÉLEVÉ (🔴 `eleve`)

[📊 CHIFFRES LIVE — DeFiLlama : TVL]

## Le principe

> **[NOTE ALERTE] Une fiche datée, sur un protocole de onze jours** — Cette fiche décrit Papertrade au 21 octobre 2026, onze jours après son lancement. Une mise à jour de trois de ses contrats, programmée le 20 octobre, peut changer une partie de ce qui suit (détails dans « Qui contrôle quoi »).

Sur une plateforme de perps classique comme Hyperliquid, ton ordre rencontre celui d'un autre trader dans un carnet d'ordres. Sur Papertrade, il n'y a personne en face : tu trades contre une réserve d'USDC appartenant au protocole, qui encaisse tes pertes et paie tes gains.

Cette réserve est partie de zéro. Personne n'y a déposé de capital, et personne ne peut le faire : elle se remplit uniquement des pertes des traders. Le protocole repose sur une thèse : les traders à fort levier finissent par perdre, et leurs pertes suffisent à payer ceux qui gagnent, sans avoir besoin de liquidity providers extérieurs. Les premières données vont dans ce sens : sur les 212 premières heures de trading, les traders n'ont été gagnants, collectivement, que pendant 41 heures (étude IOSG, publiée le 20 octobre).

Pour attirer du monde, Papertrade donne aux perdants un jeton, le PAPER. Une fois staké, il rapporte des USDC, prélevés sur les pertes des traders suivants.

Le parallèle le plus juste est celui d'un bookmaker qui ouvrirait sans capital propre : il paie les gagnants avec la mise des perdants et, quand la caisse est vide, leur remet une reconnaissance de dette payable quand d'autres auront perdu.

## Équipe & origine

Papertrade est porté par deux traders semi-pseudonymes, Jez et Blurr. Un troisième nom, UngusTrade, est cité par la presse comme détenteur d'une des clés de contrôle, sans confirmation officielle. Aucun d'eux n'a de parcours vérifiable, et aucune société n'est déclarée derrière le protocole. Selon Jez, l'interface du site a été développée avec des outils d'IA.

Aucun fonds n'est entré au capital, et aucun PAPER n'a été réservé à l'équipe ou à des investisseurs. L'équipe se rémunère autrement : elle touche la moitié des frais prélevés sur les trades, en USDC.

- Mai 2026 : annonce du projet, puis publication du whitepaper de la réserve, baptisée « Martingaler LP ».
- 6 octobre 2026 : déploiement des contrats.
- 10 octobre 2026 : ouverture du trading, et manipulation de prix le soir même (voir plus bas).
- 20 octobre 2026 : le PAPER est déclaré non transférable « pour une durée indéterminée », et le délai de sécurité sur les mises à jour passe de 7 jours à 24 heures.

## Comment ça marche : la vie d'un trade

Tu déposes des USDC (10 au minimum, depuis Hyperliquid, Ethereum, Arbitrum, Solana…), tu choisis le bitcoin ou l'ether, un sens (long ou short) et un levier jusqu'à ×1000. Chaque position a sa propre marge, que tu ne peux ni compléter ni retirer en cours de route.

Mais aucun ordre n'est passé sur un marché. Papertrade lit le prix d'Hyperliquid à l'ouverture, puis à la clôture, et calcule lui-même ton résultat. C'est un perp synthétique.

> **[DÉF | perp-synthetique] Perp synthétique** — Un perp qui n'existe que dans les comptes du protocole : il suit un prix de référence, sans qu'aucun ordre soit passé sur un marché, et la plateforme règle elle-même gains et pertes.

### Le prix : le milieu du carnet d'Hyperliquid

Le prix de référence est le mid du BBO du carnet d'ordres d'Hyperliquid, relu à chaque bloc.

> **[DÉF | bbo] BBO (Best Bid and Offer)** — Le meilleur prix d'achat (bid) et le meilleur prix de vente (offer) proposés à un instant donné dans un carnet d'ordres. Le mid est leur milieu : acheteur à 99,8, vendeur à 100,2, le mid vaut 100.

Pour lire ce prix, le contrat de Papertrade, qui vit sur HyperEVM, interroge directement HyperCore, la couche où se trouve le carnet d'Hyperliquid (voir notre fiche Hyperliquid). Il passe pour cela par un precompile.

> **[DÉF] Precompile** — Un contrat « système » intégré à la blockchain, que les autres contrats peuvent appeler. Sur HyperEVM, certains precompiles donnent accès en lecture à l'état de HyperCore : prix, carnets, soldes.

Ce choix a deux conséquences :

- comme rien ne s'échange réellement, il n'y a ni funding, ni frais calculés sur la taille de la position, ni slippage : tu entres et tu sors exactement au mid ;
- en contrepartie, tout repose sur un seul prix, instantané, tiré d'un seul carnet, sans moyenne dans le temps ni seconde source pour le contrôler. C'est le point faible du protocole (voir la manipulation du 10 octobre).

### Les ordres passent par un serveur de l'équipe

Tu ne parles pas directement au contrat : tu signes une instruction (« ouvrir un long de 1 000 $ sur l'ether »), et c'est un serveur de l'équipe, le relayer, qui la transmet. Lui seul est autorisé à ouvrir et fermer des positions. Les retraits et les liquidations, eux, fonctionnent sans lui.

### La liquidation : plus tôt qu'on ne croit

La règle de notre numéro 4 donne le repère : à ×1000, un mouvement de 0,1 % contre toi (100 ÷ 1 000) efface toute ta marge. Sur Papertrade, la liquidation tombe avant : le seuil est placé 0,05 % plus près de ton prix d'entrée que le point où ta marge est à zéro.

À ×1000, tu es donc liquidé sur un mouvement d'environ 0,05 % (0,1 % − 0,05 %), alors qu'une clôture volontaire à ce moment-là t'aurait encore rendu environ la moitié de ta marge : la liquidation, elle, confisque tout. Dit simplement : à ce levier, un mouvement de 50 $ sur un bitcoin à 100 000 $ suffit à tout perdre.

Liquidé ou non, le perdant reçoit du PAPER sur la totalité de sa perte (voir plus bas).

## Quand tu gagnes : ce qui est retenu sur ton gain

La réserve paie les gagnants, mais pas en totalité. Trois retenues s'appliquent, dans cet ordre :

- Une franchise : les premiers 0,002 % de mouvement ne comptent pas (0,2 point de base, un point de base valant 0,01 %). Un gain plus petit que ça vaut zéro.
- Une décote : le gain restant est multiplié par un coefficient qui dépend de l'ampleur du mouvement. Plus le prix a peu bougé entre l'ouverture et la clôture, plus la décote est forte. Elle n'est jamais inférieure à 10 %.
- Des frais de 2 % sur ce qui reste.

Papertrade appelle cette décote un « impact asymétrique » : asymétrique, parce qu'elle ne touche que les gains, jamais les pertes. Elle remplace le slippage qu'aurait un gros ordre sur un vrai marché, et ce qu'elle retient reste dans la réserve.

| Mouvement du prix | Part du gain brut conservée (bitcoin) | Part du gain brut conservée (ether) |
|---|---|---|
| 0,1 % | ~74 % | ~70 % |
| 0,5 % | ~87 % | ~85 % |
| 1 % | ~88 % | ~88 % |
| 2 % | ~89 % | ~89 % |

Avant les 2 % de frais. Calculs CryptoLuciole à partir des paramètres publiés dans la documentation (la ligne bitcoin à 0,1 % et 1 % correspond aux exemples de la doc).

### Un exemple chiffré

Tu ouvres un long sur le bitcoin avec 100 $ de marge à ×1000, soit une position de 100 000 $ (100 × 1 000). Le bitcoin monte de 0,1 % et tu clôtures :

- gain brut : 100 $ (100 000 × 0,1 %) ;
- après la franchise : 98 $ ;
- après la décote : environ 74 $ (98 × 0,754) ;
- après les 2 % de frais : environ 72 $.

Dit simplement : sur un petit mouvement, tu gardes à peu près les trois quarts de ce qu'un vrai marché t'aurait payé. Sur un mouvement de 1 %, la décote ne prend plus qu'environ 12 %. En échange, tu n'as payé ni frais d'ouverture ni funding : tout le coût est concentré sur le gain.

Quand tu perds, tu ne paies rien de plus que ta perte. Les 2 % de frais sont alors prélevés sur la part qui revient à la réserve, pas dans ta poche.

> **[NOTE INFO] Un détail qui compte pour la suite** — Dans le modèle dont Papertrade s'inspire, celui de la plateforme de casino et de trading Rollbit, la décote grossit avec la taille de la position : un gros gain est plus rogné qu'un petit. Papertrade a retiré cette propriété, pour ne pas pousser les traders à découper leurs positions en dizaines de petites. Résultat : la décote est la même pour 100 $ que pour 100 000 $ de position. Un gros trade sur un petit mouvement est donc aussi rentable, en proportion, qu'un petit, y compris quand ce petit mouvement a été provoqué.

## La réserve (LP) : qui paie les gagnants

La réserve qui sert de contrepartie à tous les traders s'appelle la LP (pour liquidity pool). Elle n'accepte aucun dépôt et se remplit uniquement :

- des marges des traders liquidés ;
- des pertes des positions clôturées dans le rouge ;
- des décotes retenues sur les gains.

Elle a un plafond : au-delà de 5 M$, elle ne grossit plus, et tout ce qu'elle gagne en plus est reversé aux stakers de PAPER (voir plus bas). Un relèvement à 10 M$ a été annoncé dans la presse le 17 octobre, mais le contrat affichait toujours 5 M$ le 21 octobre.

### Quand la réserve est vide : la file d'attente

Si la LP n'a pas de quoi payer un gagnant, elle ne fait pas faillite et ne rogne pas son gain. Elle lui rend immédiatement sa marge et inscrit le profit impayé dans une file d'attente.

> **[DÉF] File d'attente FIFO** — « Premier arrivé, premier servi » (first in, first out). Les gains impayés sont rangés dans l'ordre des clôtures, et remboursés dans cet ordre, au fur et à mesure que de nouvelles pertes remplissent la réserve.

Un exemple en chiffres ronds. La LP contient 3 M$. Beaucoup de traders sont long sur l'ether, l'ether monte de 2 %, et ils clôturent avec 5 M$ de gains à payer après décote :

- les premiers à clôturer sont payés, pour 3 M$ : la LP est à zéro ;
- les 2 M$ restants (5 − 3) partent dans la file ;
- ils seront payés quand les traders suivants auront perdu 2 M$ ;
- pendant ce temps, les stakers ne touchent plus rien : la file passe avant eux.

La dette de la LP envers les gagnants n'a pas d'échéance. Si l'activité se tarit, il n'y a plus de pertes, et la file ne se rembourse plus. Le 21 octobre, la file était vide.

### Une réserve minuscule face aux montants qu'elle couvre

> **[NOTE ALERTE] Le chiffre « en direct » n'est pas la réserve** — La valeur déposée (TVL) affichée en haut de cette fiche additionne tout l'USDC présent sur le compte de Papertrade. Le 21 octobre, environ 92 % de ce montant appartenait aux traders eux-mêmes (leurs soldes libres et leurs marges). La LP, celle qui paie vraiment les gagnants, ne pesait qu'environ 3 M$. Tout est sur un seul compte : la séparation entre l'argent des traders et celui de la réserve n'existe que dans la comptabilité du contrat.

Les plafonds de positions visés au lancement étaient de l'ordre d'un milliard de dollars par côté. Ils ont été resserrés depuis, sans que les nouvelles valeurs soient publiées. Avec une LP de 3 M$, il suffirait que 1 Md$ de positions soient du même côté et que le prix bouge d'environ 0,3 % en leur faveur pour que leurs gains bruts atteignent 3 M$ (1 000 M$ × 0,3 %) et vident la réserve.

La LP n'est pas non plus couverte : Papertrade ne prend aucune position inverse sur Hyperliquid pour neutraliser son exposition. Ce n'est donc pas le capital de la réserve qui garantit sa solvabilité, c'est la file d'attente.

## Le PAPER : un droit sur les pertes des autres

### Comment il est émis

Le PAPER n'est ni vendu, ni réservé à l'équipe ou à des investisseurs, ni offert par airdrop : il n'existe que parce qu'un trader a perdu. Chaque dollar perdu, en clôture dans le rouge ou en liquidation, donne droit à une quantité de PAPER qui baisse avec le temps :

- tant que la LP est sous 2 M$ (y compris quand elle est négative), le taux est fixe : 100 PAPER par dollar perdu ;
- au-delà, le taux baisse à mesure que s'accumulent les gains de la LP au-dessus de ce seuil. Ce compteur ne redescend jamais, même quand la LP est vidée au profit des stakers : chaque baisse est définitive.

La formule est publique : 100 × (120 M$ ÷ (120 M$ + H))², où H est ce compteur. Concrètement :

| Gains cumulés de la LP au-dessus de 2 M$ (H) | PAPER reçus par dollar perdu |
|---|---|
| 0 | 100 |
| 40 M$ | ~56 |
| 120 M$ | 25 |
| 240 M$ | ~11 |
| 360 M$ | ~6 |

Le 21 octobre, H dépassait 260 M$ et le taux était tombé à environ 10 PAPER par dollar, contre 100 au lancement. Dit simplement : ceux qui ont perdu le premier jour ont reçu dix fois plus de PAPER que ceux qui perdent aujourd'hui, pour la même somme. C'est voulu, la documentation l'assume.

> **[NOTE ALERTE] Pas de plafond strict** — Si la courbe était la seule règle, l'offre tendrait vers environ 12,7 milliards de PAPER. Mais dès que la LP repasse sous 2 M$, l'émission revient à 100 PAPER par dollar, dix fois le taux du 21 octobre. Ce jour-là, la LP n'était qu'à environ 1,3 M$ de ce seuil. Une série de gains des traders suffirait donc à relancer une émission massive, qui diluerait les stakers en place.

### Comment les stakers sont payés

Le PAPER n'a qu'un usage : être staké. Le staking est instantané, sans période de blocage, et il rapporte des USDC, répartis entre les stakers au prorata du PAPER qu'ils ont staké. Deux sources alimentent ces versements :

- la moitié des frais de 2 % : ceux prélevés sur les gains des traders, et ceux prélevés sur la part de la LP quand un trader perd ou est liquidé (l'autre moitié va à l'équipe) ;
- l'excédent de la LP : tout ce qu'elle gagne au-delà de son plafond de 5 M$ est reversé aux stakers.

Deux conditions encadrent ces versements :

- si des gagnants attendent dans la file, ils passent en premier, et les stakers ne touchent rien ;
- si la LP est sous son plafond, seule la part des frais est versée.

C'est l'excédent de la LP qui a payé l'essentiel, de l'ordre de 85 % des versements à la mi-octobre selon la presse spécialisée. Le premier jour, près de 24 M$ ont été reversés aux stakers, pendant que des milliers de traders perdaient volontairement pour récolter du PAPER à 100 par dollar. Les versements sont retombés entre 1 et 2 M$ par jour autour du 20 octobre, et le 21, la LP était repassée sous son plafond : l'excédent ne coulait plus.

Le PAPER est donc un droit sur les pertes futures des autres traders de cette seule plateforme. Son revenu suit l'affluence, et l'affluence retombe.

### « Perdre pour gagner » : une stratégie qui ne paie plus

Les premiers jours, certains ont perdu exprès pour récolter du PAPER et toucher les dividendes. L'exemple le plus cité (Lookonchain, un compte d'analyse on-chain) : un wallet a enchaîné un millier de trades, perdu environ 979 k$, reçu 252 millions de PAPER, puis encaissé environ 997 k$ de dividendes en USDC. Bilan : environ +18 k$ (997 − 979).

Ce calcul ne marche plus. Le 21 octobre, à environ 10 PAPER par dollar, un PAPER « coûtait » 0,10 $ de perte (1 ÷ 10), alors que son dernier prix de référence était d'environ 0,026 $ : perdre 1 $ rapportait l'équivalent de 0,26 $ de PAPER (10 × 0,026). Selon Lookonchain, 21 des 25 plus gros perdants restaient en perte nette au 20 octobre, dividendes compris.

### Non transférable, et pour longtemps

On ne peut ni envoyer ni vendre de PAPER : seuls l'émission, le staking, le retrait du staking et la réclamation des dividendes fonctionnent. L'ouverture des transferts était prévue dans une « phase 4 » sans date. Le 20 octobre, l'équipe a annoncé que le PAPER resterait non transférable « pour une durée indéterminée », revenant sur ses annonces de début octobre.

Un marché parallèle avait commencé à le coter : un perp de pré-marché sur le PAPER, ouvert le 18 octobre sur Paragon (un marché créé par un tiers sur Hyperliquid, via le standard HIP-3) et sur Aster (une autre plateforme de perps), a été retiré après cette annonce. Son dernier prix, environ 0,026 $, valorisait l'ensemble du PAPER à quelques mois de dividendes seulement : ceux qui le tradaient ne croyaient pas à la durée de ces revenus.

Le jour où les transferts ouvriront, la quasi-totalité de l'offre (plus de 99 % était stakée le 21 octobre) sera entre les mains de traders qui l'ont « payée » en pertes. La pression vendeuse potentielle est considérable.

> **[NOTE ALERTE] Les jetons dérivés** — Des jetons tiers (PSTR, PULP) proposent une exposition indirecte au PAPER. Ils sont créés par des équipes anonymes, non affiliées à Papertrade : c'est un risque de plus, empilé sur celui du PAPER.

## La manipulation du 10 octobre, en détail

Déplacer le mid d'Hyperliquid (donc le prix de référence sur Papertrade) pendant quelques secondes coûte peu, et à ×1000 ce petit écart rapporte gros. Pas à pas, avec un carnet volontairement élargi pour garder des chiffres ronds :

- Le mid est à 100. Sur Papertrade, tu ouvres un long de 1 M$ sur l'ether avec 1 000 $ de marge (×1000).
- Sur Hyperliquid, le carnet affiche 99,8 à l'achat et 100,2 à la vente. Tu y places un ordre d'achat à 100,0 : le meilleur prix d'achat devient 100,0, et le mid passe à 100,1 (soit +0,1 %), sans même que ton ordre soit exécuté.
- Tu clôtures ton long sur Papertrade : 1 000 $ de gain brut (1 000 000 × 0,1 %), environ 700 $ après franchise, décote et frais.
- Tu annules ton ordre sur Hyperliquid.

Tu as gagné environ 70 % de ta mise en quelques secondes. Dans la réalité, le carnet d'Hyperliquid est bien plus serré, et il faut réellement acheter pour faire bouger le prix, ce qui coûte des frais et du slippage. Mais à ×1000, il suffit que le gain sur Papertrade dépasse ce coût.

### Ce qui s'est passé le jour du lancement

- Le soir du 10 octobre, un wallet achète environ 6 000 ETH sur Hyperliquid en deux minutes, pour près de 15 M$. Le prix monte d'environ 0,12 %, et il revend l'essentiel une minute plus tard (séquence vérifiable sur l'API d'Hyperliquid).
- En face, de gros longs à ×1000 sur Papertrade encaissent la hausse.
- Sur environ huit heures : 305 trades, dont 296 gagnants, pour environ 1,28 M$ de gain net, contre environ 52 k$ de frais payés sur Hyperliquid.
- Sur la période, la LP, qui s'était remplie d'environ 5 M$ de pertes dans les premières heures, tombe à environ 2,4 M$.

Le même wallet reperd ensuite environ 450 k$. Il ouvre une trentaine de shorts à ×660 et les laisse ouverts plus de trois heures. À ce levier, la marge est effacée par un mouvement d'environ 0,15 % (100 ÷ 660), et la liquidation tombe encore avant, vers 0,1 % (0,15 % − 0,05 %). Un mouvement ordinaire de l'ether suffit : ces positions ont été liquidées sans aucune manipulation. Comme tout perdant, il a reçu du PAPER sur ces pertes, environ 17,6 millions.

La manipulation a rapporté parce qu'elle durait quelques secondes ; la perte est venue d'avoir gardé de gros leviers ouverts pendant des heures, comme n'importe quel trader.

### La réponse de l'équipe

- Le 11 octobre, elle affirme que ce n'est « pas un oubli dans la conception du mécanisme » : le risque était listé dans sa documentation, et l'audit le classait comme « vecteur connu ».
- Elle resserre les plafonds de position, sans publier les nouvelles valeurs.
- Elle affirme que le trader a rendu ses gains via d'autres comptes ; The Block n'a pas pu le vérifier.
- Aucun post-mortem (rapport public d'incident) n'a été publié. DeFiLlama recense l'épisode dans sa base des piratages, comme une manipulation d'oracle.

> **[NOTE AVIS] Notre lecture** — Ce n'est pas un bug : le contrat a fait exactement ce qui était écrit. C'est un choix de conception assumé, et c'est justement ce qui pose problème. Les plafonds resserrés réduisent le gain possible d'une attaque, ils ne la rendent pas impossible : le prix reste un mid instantané, sans moyenne dans le temps ni comparaison avec une seconde source. Tant que ces deux garde-fous classiques manquent, le même scénario reste ouvert, à plus petite échelle.

## Qui contrôle quoi

Papertrade n'a aucune gouvernance par vote : le PAPER ne donne aucun droit de vote. Les décisions sont prises par l'équipe, via une chaîne de contrôle qu'on peut lire directement sur la blockchain.

> **[DÉF] Multisig** — Un portefeuille qui exige plusieurs signatures pour agir. En « 2-sur-3 », trois clés existent et deux suffisent à valider une opération.

Tout en haut se trouve un multisig 2-sur-3, développé par l'équipe elle-même plutôt que sur Safe, l'outil standard du secteur. Ses trois signataires sont de simples adresses (EOA) qui ne sont pas attribuées publiquement : des noms circulent, mais rien ne relie officiellement une clé à une personne.

> **[DÉF] Timelock** — Un contrat qui impose un délai fixe entre la programmation d'une modification et son exécution. Ce délai laisse aux utilisateurs le temps de voir venir un changement, et de partir s'il ne leur convient pas.

Ce multisig contrôle un timelock. La documentation et la presse annonçaient un délai de 7 jours. Le 20 octobre, il a été ramené à 24 heures, par une opération programmée dès le 12 octobre, sans que la documentation soit mise à jour. 24 heures laissent peu de temps pour réagir, et l'audit note que ce délai n'a aucun minimum : il peut encore être raccourci.

> **[DÉF] Contrat upgradable** — Un contrat dont le code peut être remplacé sans changer d'adresse : l'adresse que tu utilises (le proxy) renvoie vers un code (l'implémentation) que son propriétaire peut changer. Pratique pour corriger un bug, mais tout ce que fait le contrat peut alors changer.

Le timelock, enfin, est propriétaire de tous les contrats, et tous sont upgradables, y compris celui du jeton PAPER.

### Ce que l'équipe peut faire sans délai

- Suspendre les ouvertures de positions, ou retirer définitivement un marché en figeant son prix au mid du moment : le multisig a ce pouvoir sans passer par le timelock.
- Ramener à zéro le plafond de positions d'un marché, via une adresse de l'équipe dédiée à la gestion des marchés.
- Choisir l'ordre dans lequel le relayer transmet les instructions des traders, ce qui ne peut pas être contrôlé de l'extérieur.

Les retraits des soldes, eux, ne passent pas par l'équipe. Ils ont été honorés sans interruption, y compris quand plus de la moitié des dépôts sont repartis dans les dix jours qui ont suivi le lancement.

### Un code qu'on ne peut pas lire

Aucun contrat de Papertrade n'est vérifié sur l'explorateur de HyperEVM : on voit les adresses et les soldes, pas le code qui les gère. Personne ne peut donc comparer le code déployé à celui que l'auditeur a relu.

> **[NOTE ALERTE] Une mise à jour exécutable dès le 21 octobre** — Le 20 octobre à 21h35 UTC, l'équipe a programmé dans le timelock le remplacement de trois contrats : le moteur de trading, la gestion des session keys (les clés temporaires qui permettent de trader sans signer chaque ordre, voir notre numéro 7) et la mécanique d'émission du PAPER, ainsi qu'une nouvelle adresse de gestion des marchés. L'opération est exécutable à partir du 21 octobre, 21h35 UTC. Le nouveau code n'est pas vérifié, et aucun audit n'a été annoncé pour ces versions. Cette fiche sera révisée une fois la mise à jour exécutée.

## L'audit

Papertrade a été audité par Guardian Audits, de juin au 9 octobre 2026, en deux passes. Le rapport a été publié sur le dépôt GitHub de l'auditeur le 15 octobre, puis en version finale le 17. Il recense 42 constats :

- aucun critique ;
- 2 élevés, corrigés : l'un permettait de détourner les frais via la file d'attente, l'autre de payer des gains en file sans les débiter de la LP ;
- 5 moyens, corrigés ;
- 11 faibles, dont 8 acceptés sans correction ;
- 24 informatifs.

Au total, une vingtaine de constats ont été acceptés en l'état. Le bilan paraît propre, mais trois points comptent plus que le décompte :

- La manipulation du prix ne figure pas parmi les constats : l'auditeur l'a classée à part, comme « vecteur connu ». La source de prix ne rejette qu'un prix nul ou un carnet incohérent (meilleur prix d'achat au-dessus du meilleur prix de vente) ; elle n'a ni moyenne dans le temps, ni contrôle d'écart.
- Un constat accepté permet au propriétaire des contrats de désigner une adresse capable de transférer le PAPER de n'importe quel détenteur. L'auditeur le résume ainsi : si la clé de gouvernance est compromise, tous les PAPER peuvent être vidés.
- Le délai du timelock n'a pas de plancher, autre constat accepté.

S'y ajoutent les limites déjà vues : code non vérifié sur l'explorateur, dépôt audité privé, mise à jour en attente sans audit public. Il n'existe pas non plus de bug bounty (récompense publique pour qui signale une faille).

## Les risques, classés

### 1. La manipulation du prix (le risque central)

Un seul prix instantané, tiré d'un seul carnet, un levier ×1000 et une réserve de quelques millions : la combinaison rend la manipulation rentable par construction. Elle a déjà eu lieu, et le vecteur reste ouvert. Le carnet d'Hyperliquid a d'ailleurs déjà été manipulé sur des actifs moins liquides (JELLY en mars 2025, voir notre fiche Hyperliquid ; XPL en août 2025 ; POPCAT en novembre 2025).

### 2. La solvabilité de la réserve

La LP ne pèse que quelques millions face à des positions qui peuvent se compter en centaines de millions. Si les traders gagnent ensemble, c'est la file d'attente qui absorbe, sans échéance. Si tu as des gains en attente, ton risque n'est pas de perdre ta marge (elle t'est rendue), mais d'attendre ton profit indéfiniment.

### 3. Le contrôle et le code

Une équipe de deux ou trois personnes semi-pseudonymes, un timelock de 24 heures, un code illisible et modifiable, y compris celui du jeton. En dix jours, l'équipe a déjà raccourci son délai de sécurité et gelé les transferts du PAPER, par décision unilatérale. Rien n'indique une intention frauduleuse, mais tout repose sur la confiance.

### 4. Le jeton

Si tu as reçu du PAPER et que tu le stakes, ton revenu dépend uniquement de l'arrivée de nouveaux perdants, que le mécanisme attire de moins en moins à mesure que l'émission baisse. S'y ajoutent la dilution possible si la LP repasse sous 2 M$, l'absence de marché pour le revendre, et le pouvoir, documenté par l'audit, de déplacer les soldes.

### 5. Le statut juridique

Une plateforme où la maison paie les gagnants avec les pertes des perdants, à ×1000, ressemble à ce que de nombreux régulateurs qualifient de bucket shop (une officine qui prend les ordres sans jamais les exécuter sur un vrai marché) ou de jeu d'argent. Aucune entité juridique n'est déclarée, et nous n'avons trouvé ni restriction géographique documentée, ni prise de position d'un régulateur. Un jeton distribué pour des pertes et donnant droit aux revenus de la plateforme pourrait aussi relever du droit des valeurs mobilières : c'est une hypothèse, rien n'est tranché.

Enfin, comme pour tout protocole DeFi, le risque de hack n'est jamais à exclure.

### Ce qui rassure

- Les comptes tombent juste : le 21 octobre, l'USDC réellement présent correspondait au dollar près à la somme des soldes, des marges et de la LP.
- Les retraits ont été honorés sans interruption, alors que plus de la moitié des dépôts sont repartis en dix jours.
- La documentation est honnête : elle liste elle-même la manipulation du prix comme un risque résiduel réel, et publie ses formules.
- Aucun jeton n'a été réservé à l'équipe ou à des investisseurs, et les dividendes versés en USDC sont réels : ils viennent des pertes des traders, pas d'une émission.

> **[NOTE AVIS] Pourquoi « élevé »** — Notre grille donne 32/100. Plus le score est bas, plus le risque est grand : à 30 et moins, c'est « élevé » ; de 31 à 60, « modéré ». Papertrade tombe donc en « modéré », à deux points de la limite. Nous le classons pourtant en risque élevé, comme dans notre numéro 7, parce que trois fragilités se renforcent : une réserve minuscule face à un levier ×1000, un prix tiré d'un seul carnet déjà manipulé, et une équipe qui a raccourci ses propres garde-fous en dix jours. Élevé ne veut pas dire frauduleux : les comptes sont justes et les retraits fonctionnent. Cela veut dire qu'une nouvelle attaque de prix, ou une mise à jour mal intentionnée, suffirait à faire tomber les pertes sur les traders et les stakers.

## Pourquoi ça compte

Papertrade est un cas d'école : un dérivé synthétique ne vaut que ce que vaut sa source de prix, et plus le levier est haut, moins il faut la déformer pour qu'une manipulation paie. C'était déjà la question des marchés de prédiction d'Hyperliquid dans notre numéro 6 : qui fixe le prix de règlement, et combien coûte-t-il de le fausser ?

La comparaison avec deux modèles voisins montre où se situe la différence :

|  | Papertrade | gTrade (Gains Network) | Hyperliquid |
|---|---|---|---|
| Qui est en face du trader | La LP du protocole, sans aucun dépôt extérieur | Un vault alimenté par des déposants | D'autres traders, via le carnet d'ordres (le vault HLP n'est qu'un market maker parmi d'autres) |
| Source du prix | Mid instantané d'un seul carnet | Oracle à plusieurs sources (Chainlink), avec un spread qui s'ajuste | Le carnet lui-même ; prix de liquidation publié par les validateurs (médiane) |
| Si la contrepartie ne suffit pas | Les gains attendent dans une file sans échéance | Le protocole émet du GNS, son jeton, pour recapitaliser le vault | Le vault HLP reprend les positions liquidées ; en dernier recours, des positions gagnantes sont réduites d'office (ADL) |

Autre enseignement, utile bien au-delà de Papertrade : les « frais » affichés par ce type de plateforme sont surtout des pertes de traders redistribuées. Sur ses onze premiers jours, Papertrade affichait sur DeFiLlama plus de frais que GMX, Jupiter et gTrade réunis sur trente jours. Ce chiffre ne mesure pas une activité commerciale récurrente, et ne se compare pas aux frais de trading d'une plateforme classique.

Enfin, les garde-fous annoncés (délai de sécurité, transférabilité du jeton) se vérifient sur la blockchain, pas dans la documentation. Chez Papertrade, les deux ont changé en dix jours.

## À retenir

- Papertrade ne propose que deux marchés, le bitcoin et l'ether, jusqu'à ×1000 : aucun ordre n'est passé sur un vrai marché, tout se calcule à partir du mid d'Hyperliquid.
- À ×1000, la liquidation tombe sur un mouvement d'environ 0,05 % : 50 $ sur un bitcoin à 100 000 $.
- La réserve qui paie les gagnants n'est financée que par les pertes ; quand elle est vide, les gains attendent dans une file sans échéance.
- Le PAPER est un droit sur les pertes futures des autres traders : non transférable, sans droit de vote, émis de moins en moins généreusement, et sans plafond strict.
- Le prix reste manipulable comme le 10 octobre : l'audit l'a classé « vecteur connu », il n'a pas été corrigé.
- Timelock réduit à 24 heures, contrats upgradables et non vérifiés : tout repose sur la confiance dans une petite équipe semi-pseudonyme.

## Verdict

Score maison 32/100 — risque ÉLEVÉ. Papertrade est une expérience de mécanisme originale, mais ce n'est pas un outil de trading : c'est un casino à circuit fermé, où les pertes rémunèrent le jeton et où le jeton attire les pertes. Ce n'est pas un Ponzi au sens strict (personne ne promet de taux, et ce ne sont pas les nouveaux dépôts qui paient les anciens), mais tout dépend d'un flux continu de perdants que le mécanisme attire de moins en moins. Pour le trader, le jeu est défavorable par construction : décote sur les gains, frais, liquidation anticipée. Pour le détenteur de PAPER, c'est un pari sur l'affluence future de la plateforme, sans marché pour en sortir. Le scénario le plus probable n'est pas un effondrement brutal, mais une lente évaporation de l'activité et des dividendes, sauf nouvelle attaque de prix ou mise à jour malveillante. Ce contenu n'est pas un conseil en investissement.

## Sources

- Documentation officielle Papertrade (lue le 21 octobre 2026) — https://docs.papertrade.xyz
- Guardian Audits — rapport d'audit Papertrade (publié le 15 octobre 2026) — https://github.com/GuardianAudits/Audits/tree/main/Papertrade
- DeFiLlama — Papertrade — https://defillama.com/protocol/papertrade
- The Block — la manipulation du 10 octobre (11 octobre 2026) — https://www.theblock.co/news/defi/2026-10-11-trader-nets-1-28-million-on-new-1000x-exchange-papertrade-by-moving-hyperliquids-eth-prices-418239
- Bankless — ce qu'il faut savoir sur le lancement (9 octobre 2026) — https://www.bankless.com/read/what-to-know-about-papertrade-s-launch
- Bankless — pourquoi le PAPER reste non transférable (20 octobre 2026) — https://www.bankless.com/read/why-papertrade-wont-let-paper-trade
- ChainCatcher — étude IOSG sur Papertrade (20 octobre 2026) — https://www.chaincatcher.com/en/article/2297496
- Datawallet — Papertrade explained (mise à jour du 17 octobre 2026) — https://www.datawallet.com/crypto/papertrade-explained
- Lectures on-chain HyperEVM et API Hyperliquid (21 octobre 2026)
- Analyse de veille CryptoLuciole (21 octobre 2026)
