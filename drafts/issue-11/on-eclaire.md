# 🔦 ON ÉCLAIRE — numéro 11

> ✍️ Brouillon du Rédacteur (v3, reprise de fond après la boucle 1 du vérificateur et les compléments du 16/11 au brief).
> **Objectif** : comparer les *stablechains* du point de vue de celui qui envoie (coût, qui est derrière, ce qui est vraiment neuf), puis montrer pourquoi chaque émetteur construit la sienne.
> **Thèse** : les frais quasi nuls ne sont pas une nouveauté (Solana, Base) ; ce qui distingue ces chaînes, c'est le modèle de l'émetteur : Tether défend l'usage de l'USDT, Circle cherche des revenus hors taux, Stripe rend la rente aux entreprises et se paie sur les paiements. Seul Tempo accepte tous les stablecoins (corrigé après la relecture de Marc, 16/11).
> **Dehors** : la démonstration « stock contre flux » au-delà d'une phrase, les TVL, l'énergie en unités, le recul de l'offre totale (numéro 9), Berachain, Hyperliquid, la chaîne de Google, le −96 % de XPL et le −8 % de Circle, tout pronostic.
> Notation des blocs : `[p]` paragraphe · `[st]` amorce dorée « ⬡ … » · `[def | slug]` encadré de définition · `[liste]` · `[tableau]` · `[avis]` encadré vert « 💡 Notre avis ».

**Titre proposé :** Les blockchains de stablecoins : pourquoi Tether, Circle et Stripe veulent chacun la leur

---

[p]
Tron est le rail historique de l'USDT : un tiers de tous les stablecoins en circulation, soit **93,2 Md$**, y vit. Depuis septembre 2025, quatre blockchains conçues spécialement pour les stablecoins, qu'on appelle des **stablechains**, sont arrivées : **Plasma** et **Stable** (dans l'orbite de Tether), **Arc** (Circle) et **Tempo** (Stripe et Paradigm). À elles quatre, elles hébergent environ **4 Md$**.

[p]
Trois questions : combien coûte un envoi sur ces chaînes, qu'apportent-elles vraiment de neuf, et pourquoi des émetteurs de stablecoins se donnent-ils la peine d'en construire une ?

[st] **⬡ Ce que coûte un envoi.**

[p]
Sur Tron, un transfert d'USDT ne se paie pas directement en TRX, le jeton de la chaîne, mais en **énergie**.

[def | `energie-tron`] **Énergie (Tron)**
Ressource consommée par les smart contracts sur Tron, dont les transferts d'USDT. On l'obtient en stakant des TRX ou en la louant à ceux qui en ont staké, qui touchent alors le loyer. Si ton wallet n'en a pas, le réseau brûle des TRX à la place : ils sont détruits et ne vont à personne.

[p]
Sans énergie, un envoi d'USDT revient à **environ 2,07 $** au cours du 16 novembre, et à environ 4,1 $ vers une adresse qui n'a jamais reçu d'USDT. Avec de l'énergie louée, il tombe à environ 0,4 à 1 $ selon le loueur, et la plupart des envois sont payés ainsi, avec de l'énergie stakée ou louée. Ceux qui stakent eux-mêmes beaucoup de TRX ne paient presque rien par envoi, mais immobilisent leur capital. À titre de comparaison, un envoi d'USDT sur Ethereum coûtait le même jour entre 0,01 et 0,30 $, **0,10 $ en médiane**. **La réputation de Tron, « la chaîne pas chère pour l'USDT », date des années où Ethereum coûtait plusieurs dollars par envoi : aujourd'hui, sauf à staker ses propres TRX, Tron est plus cher qu'Ethereum.**

[p]
Face à lui, les *stablechains*, avec trois blockchains généralistes pour repère :

[tableau]
| Chaîne | Frais payés en | Coût d'un envoi (au 16/11) |
|---|---|---|
| Tron, sans énergie | TRX brûlés | ≈ 2,07 $ (≈ 4,1 $ vers une adresse neuve) |
| Tron, énergie louée | Énergie | ≈ 0,4 à 1 $ |
| Plasma | XPL | ≈ 0,000003 $ |
| Tempo | N'importe quel stablecoin en dollars | ≈ 0,0002 à 0,0003 $ |
| Arc | USDC | ≈ 0,001 $ |
| Stable | USDT0 | ≈ 0,00002 $ (calculé au prix du gas) |
| *Repère : Ethereum* | ETH | ≈ 0,01 à 0,30 $ (médiane 0,10 $) |
| *Repère : Solana* | SOL | ≈ 0,0004 $ |
| *Repère : Base* | ETH | ≈ 0,0007 $ |

[note]
Ordres de grandeur relevés sur chaque blockchain ; sur Ethereum, le coût varie avec l'encombrement du réseau.

[p]
Plasma, Tempo et Arc se paient en fractions de centime, mais Solana et Base aussi. **Le prix bas n'est donc pas une nouveauté des *stablechains*.** Ce qui change, c'est la commodité (envoyer un stablecoin sans détenir un second jeton) et surtout l'émetteur qui est derrière chaque chaîne.

[p]
Reste que l'écart de prix n'a pas vidé Tron de son activité. L'USDT y circule depuis des années, surtout dans les pays émergents et entre plateformes d'échange ; les plateformes, les services de paiement et les contreparties l'utilisent, et les gros utilisateurs y paient peu grâce à l'énergie. 

[st] **⬡ Qui apporte vraiment du neuf ?**

[tableau]
| Chaîne | Qui est derrière | Stablecoins hébergés (16/11) | Leur particularité |
|---|---|---|---|
| Plasma | Écosystème Tether (Bitfinex), Founders Fund | 1,62 Md$ | • Frais quasi nuls • Envois d'USDT gratuits annoncés, mais seulement depuis certaines applications |
| Stable | Écosystème Tether | 0,03 Md$ | L'USDT0 paie lui-même les frais : pas de second jeton à détenir |
| Arc | Circle | 1,53 Md$ | • Frais en USDC • Validateurs choisis parmi des institutions régulées |
| Tempo | Stripe et Paradigm | 0,80 Md$ | • Aucun jeton à acheter • Frais de transaction payables avec le stablecoin de n'importe quel émetteur |

[p]
**Plasma**, lancée en septembre 2025, annonce des envois d'USDT gratuits. En pratique, ils sont gratuits pour toi seulement si l'application que tu utilises passe par le relais de Plasma, un **paymaster** qui paie les frais à ta place. Depuis un wallet ordinaire, c'est toi qui paies, en XPL, son jeton : des montants minuscules, mais il faut en détenir. Dans les deux cas, la chaîne encaisse bien des frais : la gratuité veut dire que quelqu'un d'autre les paie. À terme, Plasma prévoit aussi de laisser payer tous les autres frais directement en USDT, sans passer par le XPL.

[def | `paymaster`] **Paymaster**
Smart contract qui paie le gas d'une transaction à la place de l'utilisateur. Il est financé par le protocole ou par une application, ou se rembourse dans un autre jeton.

[p]
Sur Tron, on peut déjà envoyer de l'USDT sans détenir de TRX grâce au service GasFree, mais il prélève **1,5 USDT par envoi** (tarif en vigueur depuis mai 2026). Plasma et Stable n'inventent donc pas la commodité : ils la rendent quasi gratuite et l'intègrent à la chaîne, au lieu d'en faire un service payant ajouté par-dessus.

[p]
Plasma a atteint environ 6 Md$ de stablecoins à son lancement, attirés par des récompenses en XPL ; il en reste 1,61 Md$, le capital venu pour les récompenses étant sans doute reparti avec leur baisse.

[p]
**Stable** fait la même proposition, avec des frais payés en USDT0 (la version de l'USDT émise par Tether pour circuler entre blockchains). Un envoi y coûte environ 0,00002 $, et n'est gratuit que si une application prend les frais à sa charge. Surtout, la chaîne tourne presque à vide : quelques dizaines de millions de dollars y sont placés dans des *vaults* et des marchés de prêt (Morpho), mais ils ne circulent pas. Ses blocs sont remplis à 0,03 %, et les 200 derniers ne contenaient aucun envoi d'utilisateur.

[p]
**Arc**, lancée par Circle en septembre 2026, est pensée pour les institutions : frais en USDC, transaction définitive annoncée en moins d'une seconde, service de change entre stablecoins (StableFX). Ses validateurs sont choisis parmi des institutions régulées.

[def | `proof-of-authority`] **Proof of Authority (validateurs permissionnés)**
Mode de fonctionnement où les blocs sont validés par une liste fermée d'acteurs identifiés et choisis à l'avance, au lieu de validateurs qui entrent librement en mettant des jetons en jeu.

[p]
Le but est de rassurer des institutions régulées, qui savent qui valide leurs transactions. La contrepartie : une liste fermée peut aussi décider de bloquer des transactions.

[p]
**Tempo**, lancée en mars 2026, n'a **pas de jeton natif** : on paie les frais avec n'importe quel stablecoin en dollars, converti automatiquement en coulisse. Ses validateurs sont, eux aussi, une liste fermée de partenaires choisis (Stripe, Visa, Zodia Custody, filiale de Standard Chartered, MoneyGram) : sur ce point, Tempo ressemble à Arc.

[p]
La différence est ailleurs : là où Arc fait payer en USDC et Stable en USDT0, Tempo ne favorise aucun émetteur. Stripe a pourtant son propre stablecoin, l'OUSD, mais il ne lie pas sa chaîne à lui : l'OUSD circule aussi sur Ethereum, Solana et Base, et Tempo accepte les stablecoins de tous les émetteurs.

[st] **⬡ Notre lecture : pourquoi chaque émetteur veut sa chaîne.**

[p]
Un émetteur gagne sa vie sur les intérêts de ses réserves : tu lui donnes 100 $, il te remet 100 USDT ou 100 USDC, et il place tes 100 $ en bons du Trésor. Les intérêts sont pour lui ; toi, tu ne touches rien. Tether en a tiré environ 5,96 Md$ de revenus sur douze mois, d'après DeFiLlama.

[p]
Pour que son stablecoin soit utilisé, un émetteur peut aussi partager ces intérêts avec les plateformes qui le distribuent. Prenons Circle et Coinbase. Si tu gardes 1 000 USDC sur Coinbase, Circle place 1 000 $ en bons du Trésor, qui lui rapportent environ 35 $ par an au taux actuel. Selon l'accord publié lors de l'entrée en Bourse de Circle, en 2025, Coinbase récupère la totalité de ces intérêts tant que tes USDC restent chez lui, et la moitié de ceux des USDC détenus ailleurs. Coinbase en reverse une partie à ses clients sous forme de récompenses : c'est ce qui l'incite à pousser l'USDC plutôt qu'un autre stablecoin.

[p]
Les frais de transfert, eux, reviennent à la chaîne, pas à l'émetteur : ces projets visent donc autre chose que les frais.

[liste]
- **Tether défend l'usage de l'USDT.** Chaque envoi sur Tron profite à l'écosystème Tron (TRX brûlés ou énergie louée), pas à Tether. Plasma et Stable sont une tentative de reprendre la route sur laquelle roule son produit. Pour l'instant, la migration n'a pas eu lieu : Plasma et Stable réunis hébergent 1,65 Md$ de stablecoins, quand Tron garde environ la moitié de tous les USDT (92 Md$ sur 175).
- **Circle cherche des revenus qui ne dépendent pas des taux.** Ses revenus de réserves (658 M$ au troisième trimestre 2026) baissent quand la Fed baisse ses taux, et il en reverse une grosse part : 412 M$ de coûts de distribution, de transaction et autres au T3, l'équivalent de près des deux tiers, surtout à Coinbase, selon un contrat qui s'applique quelle que soit la chaîne. Arc ne réduit donc pas cette facture. Il ouvre à Circle d'autres recettes : la prévente de son jeton (182 M$, ponctuelle), des services comme StableFX, et une place directe auprès des institutions et des paiements branchés sur sa chaîne.
- **Stripe rend la rente pour gagner sur les paiements.** Stripe n'est pas d'abord un émetteur mais un service de paiement : il prélève une commission sur chaque paiement qu'il traite pour un commerçant, par exemple 1,5 % du montant pour un paiement en stablecoin (contre 2,9 % + 0,30 $ pour une carte aux États-Unis). Sa filiale Bridge émet bien un stablecoin, l'Open USD (OUSD), mais celui-ci reverse la totalité des revenus des réserves, moins de petits frais de gestion, aux entreprises qui le distribuent (plus de 200 aujourd'hui). Stripe renonce à la rente pour attirer les entreprises sur ses services, là où il touche ses commissions, comme un supermarché qui vend le lait à prix coûtant pour remplir les caddies.

[avis]
💡 **Notre avis** : le prix d'un envoi ne départage plus grand-chose : quelques centimes sur Ethereum, une fraction de centime sur les autres, et seul Tron coûte encore 0,4 à 2 $ à qui ne stake pas ses TRX. Ce qui compte, c'est ce que chaque promoteur attend de sa chaîne. Tether et Circle gagnent sur les réserves de leur stablecoin : leur chaîne sert d'abord à faire circuler le leur, l'USDT pour Plasma et Stable, l'USDC pour Arc. Stripe gagne sa commission sur le paiement, quel que soit le stablecoin utilisé : c'est pourquoi Tempo est la seule à accepter ceux de tous les émetteurs.

[source]
Sources : DeFiLlama (stablecoins par chaîne, revenus, cours, 16/11/2026) ; communiqué de résultats de Circle, T3 2026 (4/11) ; documentations officielles de Tron, Plasma, Stable, Arc et Tempo ; site et blog Open Standard ; prix de location d'énergie Tron (BitcoinTalk, GetBlock) ; tarif GasFree (presse, mai 2026) ; documentation Stripe (paiements en stablecoins) ; coûts d'envoi relevés sur chaque blockchain le 16/11/2026.

---

## Notes du Rédacteur (hors texte, à ne pas assembler)

### Termes glossaire
| Terme | Slug | Statut |
|---|---|---|
| Énergie (Tron) | `energie-tron` | NOUVEAU |
| Paymaster | `paymaster` | EXISTANT |
| Proof of Authority | `proof-of-authority` | NOUVEAU |
| Stablechain | `stablechain` | glosé dans le texte, pas d'encadré ; entrée glossaire possible |

### Chiffres
- Tous tirés du brief et de ses compléments du 16/11. Non cités : −96 % XPL, −8 % Circle, TVL, 15,7 Md$ de recul, 3,54 % de rendement des réserves, frais encaissés par Tron/Plasma/Tempo, date du contrat Coinbase (2029).
- « près des deux tiers » : 412 / 658 = 63 %. Les 412 M$ incluent « distribution, transaction et autres » : formulé « 412 M$ de coûts de distribution, de transaction et autres », « l'équivalent de ».
- Dates de lancement dans le texte (Plasma, Arc, Tempo) ; aucune pour Stable (absente du brief).
- OUSD : « plus de 140 » distributeurs au lancement (blog Open Standard, transmis par la session principale le 16/11) ; la page « about » dit plus de 200. Rien sur les détenteurs individuels.

### Mesure Stable (16/11, sur demande de Marc)
- RPC public rpc.stable.xyz (chain ID 988) : frais de base 1 gwei sur les 20 derniers blocs, priorité 0 ; remplissage des blocs 0,03 % (eth_feeHistory).
- Envoi natif d'USDT0 : 21 000 gas × 1 gwei = 0,000021 USDT0 ≈ 0,00002 $ ; transfert ERC-20 (≈ 50 000 gas) ≈ 0,00005 $ (calcul, pas d'envoi observé).
- Sur les 200 derniers blocs : seules des transactions système (de 0x8888…8888 vers le contrat 0x…9999, prix du gas nul), aucune transaction d'utilisateur.

### Compléments du 16/11 (relecture de Marc)
- Ethereum : 25 envois d'USDT (transfer) relevés dans les 4 derniers blocs (publicnode, 16/11), gasUsed × effectiveGasPrice × ETH 1 817 $ : min 0,011 $, médiane 0,097 $, max 0,31 $. Frais de base ≈ 0,15 gwei ; l'écart vient des pourboires. Premier calcul théorique (≈ 0,02 $) remplacé par cette mesure.
- X : @xKseilas, 11/10/2026 : « TRON without energy ~$2.26, Ethereum ~$0.01 (unusually cheap today) » — même ordre de grandeur que notre mesure. La croyance « Tron = pas cher » reste très répandue sur X (posts de novembre 2026).
- GasFree : 1,5 USDT par envoi et à l'activation depuis le 9/05/2026 (presse : KuCoin, Forklog ; confirmé par le fact-checker le 16/11).
- Fact-check du 16/11 : Stable lancée le 08/12/2025 → « depuis septembre 2025 » ; DeFiLlama relu : Plasma 1,62, Arc 1,53, Tempo 0,80, Stable 0,03 (≈ 3,97 Md$) ; USDT sur Tron 91,8 / 175,25 Md$ = 52 % ; OUSD 140 à l'annonce (30/06), plus de 200 depuis.
- Plasma : docs contradictoires (docs.plasma.to « en construction », docs.plasma.org « USD₮ transfers are free »). Mesure RPC rpc.plasma.to du 16/11 : 30 derniers appels transfer(), 0 à frais nuls, tous les expéditeurs détiennent ≈ 0,04-0,06 XPL. Les envois gratuits passent peut-être par un autre contrat (relayeur) : formulation limitée à ce qu'on a observé.
- Stripe : 1,5 % par paiement en stablecoin (docs.stripe.com/crypto/stablecoin-payments) ; carte US 2,9 % + 0,30 $ (Blockworks).
- Plasma, enquête du 16/11 (demande de Marc « vérifie pourquoi ») : sur 120 transactions récentes qui déplacent de l'USDT0 (blocs 37 915 324 à 37 915 624, rpc.plasma.to), AUCUNE à frais nuls. 31 sont des transfer() directs payés en XPL par l'expéditeur ; 42 passent par l'EntryPoint ERC-4337 (0x0000000071727De22E5E9d8BAf0edAc6f37da032, handleOps) : le gas y est payé en XPL par un bundler ou un paymaster, pas par l'utilisateur. Le reste : contrats d'applications (swaps, etc.). → « gratuit » = frais payés par un tiers, pas frais nuls.
- Docs : la page « zero-fee USDT transfers » redirige désormais vers l'accueil ; « Network Fees » (docs.plasma.org) présente le paymaster de gas en jetons comme « en construction » ; « Payments › Core concepts » parle de « free transfers for USD₮ ». Chainstack décrit l'accès par la Relayer API ; Confirmo et Cryptorefills annoncent l'avoir intégrée.

