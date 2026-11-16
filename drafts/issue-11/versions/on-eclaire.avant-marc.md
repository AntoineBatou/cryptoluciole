# 🔦 ON ÉCLAIRE — numéro 11

> ✍️ Brouillon du Rédacteur (v3, reprise de fond après la boucle 1 du vérificateur et les compléments du 16/11 au brief).
> **Objectif** : comparer les *stablechains* du point de vue de celui qui envoie (coût, qui est derrière, ce qui est vraiment neuf), puis montrer pourquoi chaque émetteur construit la sienne.
> **Thèse** : les frais quasi nuls ne sont pas une nouveauté (Solana, Base) ; ce qui distingue ces chaînes, c'est le modèle de l'émetteur : Tether défend l'usage de l'USDT, Circle cherche des revenus hors taux, Stripe rend la rente aux entreprises et se paie sur les paiements. Seul Tempo est une route neutre.
> **Dehors** : la démonstration « stock contre flux » au-delà d'une phrase, les TVL, l'énergie en unités, le recul de l'offre totale (numéro 9), Berachain, Hyperliquid, la chaîne de Google, le −96 % de XPL et le −8 % de Circle, tout pronostic.
> Notation des blocs : `[p]` paragraphe · `[st]` amorce dorée « ⬡ … » · `[def | slug]` encadré de définition · `[liste]` · `[tableau]` · `[avis]` encadré vert « 💡 Notre avis ».

**Titre proposé :** Les blockchains de stablecoins : pourquoi Tether, Circle et Stripe veulent chacun la leur

---

[p]
Tron est le rail historique de l'USDT : un tiers de tous les stablecoins en circulation, soit **93,2 Md$**, y vit. Depuis un peu plus d'un an, quatre blockchains conçues spécialement pour les stablecoins, qu'on appelle des ***stablechains***, sont arrivées : **Plasma** et **Stable** (dans l'orbite de Tether), **Arc** (Circle) et **Tempo** (Stripe et Paradigm). À elles quatre, elles hébergent environ **3,9 Md$**.

[p]
Trois questions : combien coûte un envoi sur ces chaînes, qu'apportent-elles vraiment de neuf, et pourquoi des émetteurs de stablecoins se donnent-ils la peine d'en construire une ?

[st] **⬡ Ce que coûte un envoi.**

[p]
Sur Tron, un transfert d'USDT ne se paie pas directement en TRX, le jeton de la chaîne, mais en **énergie**.

[def | `energie-tron`] **Énergie (Tron)**
Ressource consommée par les smart contracts sur Tron, dont les transferts d'USDT. On l'obtient en stakant des TRX ou en la louant à ceux qui en ont staké, qui touchent alors le loyer. Si ton wallet n'en a pas, le réseau brûle des TRX à la place : ils sont détruits et ne vont à personne.

[p]
Sans énergie, un envoi d'USDT revient à **environ 2,07 $** au cours du 16 novembre, et à environ 4,1 $ vers une adresse qui n'a jamais reçu d'USDT. Avec de l'énergie louée, il tombe à environ 0,4 à 1 $ selon le loueur. La plupart des envois sont d'ailleurs payés avec de l'énergie stakée ou louée. **Tron est cher pour qui l'utilise de temps en temps, abordable pour les habitués.**

[p]
Face à lui, les *stablechains*, et deux blockchains généralistes que tu connais déjà pour repère :

[tableau]
| Chaîne | Frais payés en | Coût d'un envoi (relevé du 16/11) |
|---|---|---|
| Tron, sans énergie | TRX brûlés | ≈ 2,07 $ (≈ 4,1 $ vers une adresse neuve) |
| Tron, énergie louée | Énergie | ≈ 0,4 à 1 $ |
| Plasma | XPL | ≈ 0,000003 $ |
| Tempo | N'importe quel stablecoin en dollars | ≈ 0,0002 à 0,0003 $ |
| Arc | USDC | ≈ 0,001 $ |
| Stable | USDT0 | Non mesuré (aucun transfert observé) |
| *Repère : Solana* | SOL | ≈ 0,0004 $ |
| *Repère : Base* | ETH | ≈ 0,0007 $ |

[p]
*Ordres de grandeur : cible officielle pour Arc, très peu de transferts relevés pour Tempo et Base, prix de loueurs pour Tron avec énergie.*

[p]
Plasma, Tempo et Arc se paient en fractions de centime, mais Solana et Base aussi. **Les frais quasi nuls ne sont pas une nouveauté des *stablechains* : ce qui les distingue est ailleurs.**

[p]
Reste que l'écart de prix n'a pas vidé Tron. L'USDT y circule depuis des années, surtout dans les pays émergents et entre plateformes d'échange ; les plateformes, les services de paiement et les contreparties y sont déjà, et les gros utilisateurs y paient peu grâce à l'énergie. L'utilisateur s'attache au stablecoin et aux plateformes qui l'acceptent, pas à la chaîne qui le transporte.

[st] **⬡ Qui apporte vraiment du neuf ?**

[tableau]
| Chaîne | Qui est derrière | Stablecoins hébergés (16/11) | Ce qui est vraiment neuf |
|---|---|---|---|
| Plasma | Écosystème Tether (Bitfinex), Founders Fund | 1,61 Md$ | Rien : frais quasi nuls déjà vus |
| Stable | Écosystème Tether | 0,03 Md$ | Rien de plus que Plasma |
| Arc | Circle | 1,47 Md$ | Chaîne d'émetteur, validateurs institutionnels |
| Tempo | Stripe et Paradigm | 0,80 Md$ | Route neutre : tout stablecoin, sans jeton |

[p]
**Plasma**, lancée en septembre 2025, promet des envois d'USDT quasi gratuits. Sa documentation présente encore comme « en construction » le **paymaster** censé payer ces frais à la place de l'utilisateur.

[def | `paymaster`] **Paymaster**
Smart contract qui paie le gas d'une transaction à la place de l'utilisateur. Il est financé par le protocole ou par une application, ou se rembourse dans un autre jeton.

[p]
L'envoi d'USDT sans détenir le jeton de la chaîne n'est pas neuf non plus : Tron le propose déjà (service GasFree, payant). Plasma a atteint environ 6 Md$ de stablecoins à son lancement, attirés par des récompenses en XPL ; il en reste 1,61 Md$, le capital venu pour les récompenses étant sans doute reparti avec leur baisse.

[p]
**Stable** fait la même proposition, avec des frais payés en USDT0 (la version de l'USDT émise par Tether pour circuler entre blockchains). L'envoi n'y est gratuit que si une application prend les frais à sa charge, et la chaîne reste quasi vide.

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
Un émetteur gagne sa vie sur les intérêts des réserves qu'il place (Tether en a tiré environ 5,96 Md$ de revenus sur douze mois, selon DeFiLlama), pas sur les frais de transfert, qui reviennent à la chaîne : ces projets visent donc autre chose que les frais.

[liste]
- **Tether défend l'usage de l'USDT.** Chaque envoi sur Tron profite à l'écosystème Tron (TRX brûlés ou énergie louée), pas à Tether. Plasma et Stable sont une tentative de reprendre la route sur laquelle roule son produit, au risque de n'être qu'un tuyau de plus, interchangeable. Pour l'instant, la migration n'a pas eu lieu : 93 Md$ restent sur Tron.
- **Circle cherche des revenus qui ne dépendent pas des taux.** Ses revenus de réserves (658 M$ au troisième trimestre 2026) baissent quand la Fed baisse ses taux. Arc lui ouvre d'autres recettes : la prévente de son jeton (182 M$, ponctuelle), des services comme StableFX, et une place directe auprès des institutions et des paiements branchés sur sa chaîne. Et Arc ne change rien à ce qu'il verse à Coinbase : 412 M$ de coûts de distribution, de transaction et autres au T3, l'équivalent de près des deux tiers de ses revenus de réserves, dont l'essentiel, versé à Coinbase, est fixé par contrat quelle que soit la chaîne.
- **Stripe reverse toute la rente pour gagner sur le volume.** Il est lui aussi émetteur : sa filiale Bridge émet l'Open USD (OUSD), qui reverse la totalité des revenus des réserves, moins de petits frais de gestion, aux entreprises qui le distribuent (plus de 140 à son lancement). Contrairement à Circle, qui en garde une partie, l'OUSD reverse tout. Stripe, lui, se paie sur les paiements qu'il traite.

[avis]
💡 **Notre avis** : les *stablechains* ne se distinguent pas par le prix du transfert, déjà quasi nul ailleurs, mais par ce que leur émetteur fait de la rente des réserves. Plasma et Stable ne changent que le prix ; Tempo est la seule portée par un émetteur qui ne vit pas de la rente mais des paiements, d'où une route ouverte à tous les stablecoins.

[source]
Sources : DeFiLlama (stablecoins par chaîne, revenus, cours, 16/11/2026) ; communiqué de résultats de Circle, T3 2026 (4/11) ; documentations officielles de Tron, Plasma, Stable, Arc et Tempo ; site et blog Open Standard ; prix de location d'énergie Tron (BitcoinTalk, GetBlock) ; coûts d'envoi relevés sur chaque blockchain le 16/11/2026.

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
