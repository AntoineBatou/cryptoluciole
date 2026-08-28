# 🔍 SOUS LA LOUPE — La stratégie delta-neutre sur Hyperliquid

> Format maison : en bref / comment ça marche / Le rendement / Les risques (badge) / Pourquoi ça compte, puis l'encadré vert « 💡 Notre avis ».

---

## Encaisser le funding sans s'exposer au prix du bitcoin

**Pour mémoire.** On vient de le voir : sur les perp DEX qui fonctionnent avec des *funding fees*, comme Hyperliquid, dès que la demande penche d'un côté — pari à la hausse ou à la baisse — le camp majoritaire verse un **funding** à l'autre camp. Et comme les acheteurs sont majoritaires la plupart du temps, ce sont généralement eux qui paient.

D'où l'idée : **se placer du côté qui encaisse**. On va voir qu'il est possible de toucher ce rendement sans s'exposer à l'évolution du prix — c'est la stratégie dite *delta-neutre*, celle qu'on regarde ici.

---

### Le scénario qui rend la stratégie intéressante

Quand le marché s'emballe et que tout le monde veut parier à la hausse, le funding grimpe — parfois beaucoup. Sur les six derniers mois chez Hyperliquid, il est monté jusqu'à **33 % par an sur le bitcoin**, et jusqu'à **73 % par an sur l'ether**.

À ces niveaux, être du côté vendeur rapporte gros. Le problème, c'est qu'être vendeur signifie normalement parier contre le bitcoin — et prendre le risque qu'il monte.

Sauf si on annule ce risque.

---

### Comment marche la stratégie

Deux positions, ouvertes en même temps, pour le même montant :

- une position **vendeuse** (*short*) sur le perp bitcoin, chez Hyperliquid ;
- un achat de **bitcoin au comptant**, sur une plateforme d'échange — Kraken ou Binance, par exemple.

Si le bitcoin monte, le short perd exactement ce que le bitcoin gagne. S'il baisse, l'inverse. Les deux jambes s'annulent : **tu n'es plus exposé au prix**. C'est ce qu'on appelle être *delta-neutre*.

> **[Delta-neutre](https://www.cryptoluciole.com/glossaire/delta-neutre)** — une combinaison de positions construite pour que le mouvement du prix n'ait plus d'effet sur le résultat. « Neutre au prix » ne veut pas dire « sans risque » : ce qui reste, ce sont les risques d'exécution et de plateforme.

Ce qui n'est pas annulé, en revanche, c'est le **funding** : il continue de tomber sur la jambe vendeuse, quoi qu'il arrive au prix.

**Le calcul, avec des chiffres ronds.** Tu achètes **10 000 $** de bitcoin au comptant, et tu déposes **2 000 $** de marge chez Hyperliquid pour ouvrir un short de 10 000 $ (levier 5×). Capital total engagé : **12 000 $** (10 000 + 2 000).

Le levier ne sert pas ici à amplifier le gain — il est déjà annulé par la jambe au comptant — mais à éviter d'immobiliser 10 000 $ de plus. Le funding se calcule en effet sur la **taille de la position** (10 000 $), pas sur la marge déposée : avec 2 000 $, on encaisse donc les frais portant sur 10 000 $.

- le bitcoin monte de 10 % : +1 000 $ au comptant sur Binance, −1 000 $ sur le short sur Hyperliquid. **Résultat : 0.**
- il baisse de 10 % : −1 000 $ au comptant, +1 000 $ sur le short. **Résultat : 0.**
- pendant ce temps, le funding tombe sur la jambe vendeuse (le short chez Hyperliquid).


---

### Le rendement

Reprenons le scénario favorable. Avec un funding à **30 % par an**, la position de 10 000 $ rapporte **3 000 $ sur un an** — soit **25 %** des 12 000 $ réellement immobilisés (3 000 ÷ 12 000). Très au-dessus de ce que rapporte un stablecoin déposé sur un protocole de prêt.

Sauf que ces niveaux ne durent pas. Sur les six derniers mois, le funding du bitcoin chez Hyperliquid a rapporté **4,2 % par an en moyenne**, et il est resté **négatif un quart du temps** — c'est-à-dire que le vendeur payait, au lieu d'encaisser.

Autrement dit : **le rendement existe vraiment, mais il est irrégulier.** C'est une stratégie d'opportunité, à ouvrir quand le funding est haut.

Deux nuances utiles : certains actifs offrent un funding plus stable que d'autres, et les taux varient fortement d'une plateforme à l'autre. Il y a de très belles opérations à faire — à condition de les surveiller de près.

---

### Les risques &nbsp; 🟡 **Moyen**

> Badge : bg `#fef9c3`, txt `#a16207`.

Pourquoi « moyen » et pas « élevé » ? Parce que le risque principal en crypto — celui du prix — est justement neutralisé. Et même le pire scénario reste amorti : si le short est liquidé parce que le bitcoin s'envole, tu perds ta marge, mais ton bitcoin au comptant a gagné autant en face. Tu n'as pas perdu ton capital, tu as perdu ta couverture.

Ce qui l'empêche d'être « faible », c'est le reste : neutraliser le prix ne neutralise ni les plateformes, ni le rendement.

⚠️ Et ce niveau suppose une **exécution correcte** : deux jambes strictement de même taille, ouvertes en même temps, et une marge surveillée. Si les montants ne se compensent pas exactement, ou si on laisse filer la marge du short, la couverture n'est plus entière — et il ne reste qu'une position à levier ordinaire, avec le risque qui va avec.

- **Le funding peut s'inverser.** S'il devient négatif, c'est toi qui paies. Le rendement peut fondre.
- **La jambe vendeuse peut être liquidée.** Dans l'exemple à 5×, une hausse de 20 % du bitcoin y suffit — et comme les deux jambes sont sur deux plateformes différentes, le gain sur le comptant ne vient **pas** renflouer automatiquement la marge du short. Tu te retrouves alors avec du bitcoin non couvert, donc de nouveau exposé au prix, sans t'en rendre compte tout de suite. Les deux parades : garder une réserve de marge non engagée à remettre avant le seuil, ou baisser le levier.
- **Double risque de plateforme.** Les fonds sont exposés des deux côtés à la fois, chez Hyperliquid et sur la plateforme d'échange où le bitcoin est conservé.

---

### Pourquoi ça compte

C'est exactement la stratégie qu'on a présentée dans le [numéro #3](https://www.cryptoluciole.com/numeros/3) avec **Ethena** : détenir l'actif au comptant, le shorter en perp, encaisser le funding.

Ethena n'a rien inventé : elle a industrialisé l'opération à grande échelle et emballé le résultat dans un jeton, l'USDe. Le funding est la matière première d'un des plus gros protocoles du secteur.

---

> ### 💡 Notre avis (encadré vert)
>
> En théorie : deux positions, un rendement, zéro exposition au prix. En pratique, un particulier doit tenir deux comptes sur deux plateformes, surveiller une marge qui se dégrade dès que le bitcoin monte fort, et remettre de l'argent au bon moment — sachant que le taux qui justifiait toute l'opération peut disparaître entre-temps.
>
> Comprendre le mécanisme a une vraie valeur : c'est la clé de lecture de tout un pan de la DeFi, Ethena en tête. Le mettre en œuvre soi-même est un exercice qui demande un suivi particulier.

---

**À câbler à l'assemblage :** lien `→ Voir la fiche complète d'Hyperliquid` vers `https://www.cryptoluciole.com/protocoles/hyperliquid` (page à créer).

**Sources :** API Hyperliquid + DeFiLlama (volume, positions ouvertes — relevés le 27/08/2026 ; historique du funding sur 187 jours mesuré via `fundingHistory`, médiane BTC 6,5 %/an, moyenne 4,2 %/an, max 33,1 %, négatif 25,5 % du temps ; ETH max 73,1 %) ; documentation Hyperliquid (funding) ; couverture de l'incident JELLY, mars 2025. `[chiffres volatils à rafraîchir le jour de l'envoi ; à recouper au fact-check final]`
