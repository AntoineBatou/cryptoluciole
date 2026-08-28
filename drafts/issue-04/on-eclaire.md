## 🔦 ON ÉCLAIRE

### Le contrat perpétuel (ou « perp ») : parier sur un prix sans jamais posséder l'actif — l'exemple d'Hyperliquid

À l'inverse d'un investissement classique où on achète un jeton, une action ou un actif, avec un contrat perpétuel — un « perp » —, tu ne détiens rien du tout : tu passes un accord dont le gain ou la perte dépend uniquement du mouvement d'un prix, mais ni l'acheteur ni le vendeur ne détient l'actif en question.

> **[Contrat perpétuel](https://www.cryptoluciole.com/glossaire/contrat-perpetuel) (« perp »)** — un contrat qui suit le prix d'un actif (bitcoin, ether…) sans qu'on le possède. On choisit un sens : à la hausse (*long*) ou à la baisse (*short*). Si le prix va dans ton sens, tu gagnes la différence ; sinon tu la perds. Particularité : **il n'a pas de date d'expiration** — d'où « perpétuel » et surtout il n'y a pas de sous-jacent réel, lorsqu'on parie sur la hausse du BTC on ne détient pas le BTC.

Le mécanisme n'est pas une invention de la crypto : en Bourse, un contrat à terme (*future*) sur le pétrole ou le blé fait la même chose depuis toujours — deux parties fixent un prix de référence et, à l'échéance, ne se règlent que l'écart entre ce prix et le prix réel. Ce qui distingue le perp, c'est justement l'**absence** d'échéance : un future classique expire à une date connue et doit être renouvelé, là où un perp reste ouvert indéfiniment.

### Alors d'où sort l'argent gagné ?

Puisque personne ne détient de bitcoin, il faut bien que les gains viennent de quelque part. Ils viennent **de la poche d'un autre parieur**.

Chaque contrat a deux côtés : un parieur à la hausse, un parieur à la baisse. Et les deux camps s'équilibrent toujours exactement, par construction — pour payer une position gagnante, il faut quelqu'un d'autre en face dans une position inverse.

Si le bitcoin monte, l'acheteur gagne ce que le vendeur perd. Rien n'est créé, rien ne disparaît.


---

### En pratique : le levier

Deuxième particularité : tu n'as pas besoin d'avancer la totalité de la somme. Tu déposes une garantie — la **marge** — et la plateforme te laisse contrôler une position bien plus grosse.

> **[Levier](https://www.cryptoluciole.com/glossaire/levier)** — le rapport entre la taille de ta position et l'argent que tu as réellement déposé. Avec 100 € de garantie et un levier de 20×, tu pilotes une position de 2 000 €. (100€ * 20 = 2000€)

**Les gains comme les pertes se calculent sur les 2 000 €, pas sur tes 100 €.** Un mouvement de 5 % dans le bon sens te fait gagner 100 € (tes gains sont multipliés par 20) — tu doubles ta mise de base. Le même mouvement de 5 % dans le mauvais sens te fait perdre la totalité de ta mise.

Chez Hyperliquid, la plateforme de perps la plus utilisée aujourd'hui, les plafonds sont les suivants :

- **40×** au maximum sur le bitcoin ;
- **25×** sur l'ether ;
- **20×** sur Solana.

Plus l'actif est volatil, plus le levier autorisé est bas.

---

### Là où ça casse : la liquidation

Ta marge sert d'amortisseur : quand ce qu'il en reste passe sous un seuil minimum, la plateforme ferme la position d'office. C'est la **liquidation**.

> **[Liquidation](https://www.cryptoluciole.com/glossaire/liquidation)** — fermeture forcée d'une position par la plateforme quand la marge ne couvre plus suffisamment la perte. Elle est automatique : personne ne t'appelle, il n'y a rien à valider, et l'essentiel de ta mise est perdu.

**La règle à retenir tient en une division : 100 ÷ ton levier.** Le résultat, c'est le mouvement de prix — en pourcentage, et dans le mauvais sens — qui suffit à effacer ta mise.

- à **5×**, il faut une baisse de 20 % ;
- à **20×**, 5 % suffisent ;
- à **40×**, 2,5 % suffisent.

Reprenons les 100 € à 20× : ta position vaut 2 000 €, et une baisse de 5 % lui fait perdre 100 € — exactement ce que tu avais déposé.

En pratique, tu seras liquidé un peu avant d'atteindre ce niveau : Hyperliquid t'oblige à conserver en permanence un petit reliquat. Dans cet exemple, la fermeture intervient plutôt vers 3,75 % de baisse, et il te restera une vingtaine d'euros sur ton compte.

Conséquence : **le prix peut te donner raison quand même** : s'il baisse de 5 % puis remonte, peu importe — la position a été fermée au passage, tu n'es plus dedans.

---

### Le funding rate : ce qui tient le prix en place

Il reste un problème, et c'est le plus intéressant : comme personne ne détient l'actif, comment s'assurer que le prix du perp colle à celui de l'actif ?

Chaque plateforme de perps le résout à sa manière ; on prend ici l'exemple d'Hyperliquid.

Sur Hyperliquid, **le prix du perp est fixé par l'offre et la demande entre les utilisateurs** : le carnet d'ordres fonctionne comme celui d'une plateforme d'échange classique, à ceci près qu'il est entièrement inscrit sur la blockchain.

Or rien ne relie mécaniquement les deux prix. Imagine que le bitcoin vaille 80 000 $ et que tout le monde se précipite pour acheter le contrat à la hausse : le perp va rapidement coûter bien plus cher que le bitcoin lui-même.

Il a donc fallu inventer un système pour recréer l'équilibre : le **funding rate**.

> **[Funding rate](https://www.cryptoluciole.com/glossaire/funding-rate)** — un paiement récurrent entre les deux camps du marché : le camp majoritaire paie l'autre. Ce n'est jamais la plateforme qui l'encaisse, l'argent circule d'un utilisateur à l'autre. Chez Hyperliquid, il est prélevé **toutes les heures** ; ailleurs, le standard est toutes les 8 heures.

Le raisonnement est simple. S'il y a beaucoup de demande à la hausse sur le bitcoin, le prix du contrat monte au-dessus du prix réel (le prix réel est un prix de référence reconstitué à partir des grandes plateformes d'échange — Binance, OKX, Kraken, Huobi — et republié toutes les 3 secondes). Le funding devient alors positif et **les parieurs à la hausse paient une sorte de « taxe » aux parieurs à la baisse** et ce toutes les heures tant que la position est ouverte — ce sont eux, et non la plateforme, qui touchent l'argent.

Dans cette situation, parier à la hausse coûte donc de l'argent en continu, tandis que parier à la baisse en rapporte. Ce qui décourage les premiers, attire les seconds, et ramène mécaniquement les deux prix l'un vers l'autre.

Plus le prix du perp s'écarte du prix réel, plus le funding grimpe pour inciter les acteurs à prendre des positions qui ramènent l'équilibre.

Voilà comment un contrat qui ne repose sur rien de tangible reste malgré tout collé au prix réel du bitcoin.


---

### Pourquoi ça compte maintenant

Les perps sont devenus le produit le plus utilisé de la crypto, très loin devant l'achat de jetons au comptant. Deux raisons :

- on peut y gagner **à la baisse**, pas seulement à la hausse ;
- il n'y a **rien à détenir ni à stocker** — pas de jeton, pas de portefeuille à gérer.

Ce succès produit deux flux bien réels :

- les **frais de transaction** payés à chaque ordre ;
- le **funding** que le camp majoritaire verse à l'autre.

Ces flux se retrouvent dans plusieurs stratégies de rendement.

> **💡 Notre avis :** le levier ne pardonne pas. À 40×, un mouvement contraire de 2,5 % suffit à effacer la mise — et le bitcoin franchit ce seuil environ cinq fois par mois. Ce n'est pas un outil pour investir sur la durée, mais pour tenter des coups courts, avec tout l'aléa que ça suppose. Le funding, lui, ouvre une piste nettement plus intéressante : encaisser un rendement **sans s'exposer aux variations du bitcoin**. C'est ce qu'on regarde juste en dessous.
