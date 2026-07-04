✍️ Rédacteur — Article site (guide) : « Les grandes familles de DEX »

> **Note d'assemblage (à lire avant mise en ligne)**
> - Format = article long pour le site (section `tutos`/guides), pas un numéro ni une fiche protocole.
> - Chiffres marqués `[À VÉRIFIER]` = volatils, à rafraîchir/valider par le fact-checker le jour de la publication (source indiquée à chaque fois).
> - Les `[ILLUSTRATION]` sont des repères pour le visuel à produire (charte CryptoLuciole).
> - Mention obligatoire en pied de page (règle site) : « Article rédigé avec l'aide de l'IA. »
> - Points qui demandent ton avis : listés tout en bas.

---

# Les grandes familles de DEX : AMM, agrégateurs, intents… comment on échange vraiment en DeFi

Quand tu échanges un token contre un autre sur une plateforme décentralisée, tu ne tombes pas toujours sur la même mécanique. Derrière le mot « DEX », il y a en réalité **cinq grandes familles** qui ne fonctionnent pas du tout pareil — et qui n'ont ni les mêmes forces, ni les mêmes risques, ni les mêmes usages.

Ce guide les passe toutes en revue, de la plus classique (Uniswap et sa formule magique) à la plus récente (les carnets d'ordres confidentiels). L'objectif : qu'à la fin, quand tu ouvres une appli de swap, tu saches **ce qui se passe sous le capot** et **laquelle choisir selon ce que tu fais**.

> 🔦 **DEX (Decentralized Exchange)**
> Une plateforme d'échange de cryptos où **aucune entreprise ne détient tes fonds**. Tu échanges directement depuis ton wallet, via un programme (smart contract) qui exécute l'échange automatiquement. À l'opposé d'un CEX (exchange centralisé comme Binance ou Coinbase), où tu confies tes cryptos à la plateforme.

Petit repère de contexte : les DEX ne sont plus un marché de niche. En juin 2026, le volume échangé sur les DEX représentait environ **29 % du volume des exchanges centralisés** — un record `[À VÉRIFIER — The Block, "DEX to CEX Spot Trade Volume", juin 2026]`. Sur l'année 2025, les DEX ont traité près de **4 900 milliards de dollars** de volume au comptant `[À VÉRIFIER — CoinGecko/DeFiLlama]`. Comprendre comment ils marchent, ce n'est plus optionnel.

---

## Le point commun de tous les DEX : trouver une contrepartie

Échanger, c'est toujours le même problème : pour vendre ton ETH, il faut quelqu'un (ou quelque chose) en face qui accepte de te donner des USDC. Sur un exchange centralisé, ce « en face » est un **carnet d'ordres** rempli par des milliers d'acheteurs et vendeurs.

Le problème, c'est qu'un carnet d'ordres classique demande une infrastructure rapide et centralisée — difficile à reproduire sur une blockchain lente et publique. C'est **ce problème** que chaque famille de DEX résout à sa manière. Voilà le fil rouge de tout l'article.

[ILLUSTRATION : schéma central « comment trouver une contrepartie ? » avec 5 branches qui partent vers les 5 familles — sert de sommaire visuel.]

---

## Famille 1 — Les AMM à formule : le socle de la DeFi

C'est la famille historique, celle qui a fait décoller la DeFi en 2020. AMM veut dire *Automated Market Maker* — « teneur de marché automatisé ».

> 🔦 **AMM (Automated Market Maker)**
> Au lieu d'un carnet d'ordres, l'AMM utilise une **réserve commune de deux tokens** (une *pool*) et une **formule mathématique** qui fixe le prix automatiquement. Tu n'échanges pas contre une personne, mais **contre la pool**. Ceux qui remplissent cette réserve s'appellent les *fournisseurs de liquidité* (LP) et touchent une part des frais.

### V2 — la formule « produit constant » (Uniswap V2)

Le modèle fondateur, encore utilisé partout. La règle tient en une formule :

```
x  ×  y  =  k   (constant)

x = quantité de token A dans la pool (ex. ETH)
y = quantité de token B dans la pool (ex. USDC)
k = un nombre qui ne change jamais pendant un échange
```

Concrètement : quand tu achètes de l'ETH dans la pool, tu retires de l'ETH (x baisse) et tu ajoutes des USDC (y monte). Pour que `x × y` reste égal à `k`, **le prix de l'ETH monte automatiquement** au fur et à mesure que tu en achètes. Plus ton ordre est gros, plus tu fais grimper le prix contre toi : c'est ce qu'on appelle l'**impact de prix** (ou *slippage*).

[ILLUSTRATION : la courbe x·y=k (hyperbole), avec un point qui glisse et montre le prix qui grimpe quand on achète beaucoup.]

**En pratique.** Une pool avec 10 ETH et 30 000 USDC affiche un prix de 3 000 USDC/ETH. Si tu achètes 1 ETH, tu ne le paies pas 3 000 mais un peu plus (≈ 3 158 USDC), parce que ton achat déplace le prix le long de la courbe. Sur un petit ordre, la différence est minime ; sur un gros, elle devient douloureuse.

- 🟢 **Force** : d'une simplicité totale, il y a **toujours** de la liquidité disponible (à un prix), et n'importe qui peut créer une pool ou en devenir LP.
- 🔴 **Faiblesse** : le capital est étalé sur *tous* les prix possibles, même ceux qu'on n'atteindra jamais. Résultat : peu efficace, gros impact de prix sur les grosses transactions.

### V3 — la liquidité concentrée (Uniswap V3)

Arrivée en 2021, l'idée est maligne : pourquoi étaler sa liquidité de 0 à l'infini, alors qu'un ETH ne va probablement pas s'échanger à 5 $ ni à 500 000 $ ? La V3 laisse le LP **concentrer son capital dans une fourchette de prix** qu'il choisit (ex. entre 2 800 et 3 200 USDC).

> 🔦 **Liquidité concentrée**
> Le fournisseur de liquidité choisit une fourchette de prix où placer son argent. Dans cette zone, il y a beaucoup plus de profondeur pour le même capital → moins d'impact de prix pour les traders, plus de frais pour le LP. En dehors de la fourchette, sa liquidité ne travaille plus.

Le gain d'efficacité est spectaculaire : jusqu'à **plusieurs milliers de fois** plus de capital utile pour le même argent sur une fourchette serrée (Uniswap avance un facteur allant jusqu'à ~4000× sur les paires de stablecoins). C'est ce qui a permis aux LP DeFi de rivaliser avec les market makers professionnels.

- 🟢 **Force** : bien plus efficace, meilleurs prix pour les traders.
- 🟡 **Contrepartie** : le LP doit **gérer activement** sa position. Si le prix sort de sa fourchette, il arrête de gagner des frais et se retrouve 100 % dans le token qui a le moins bien performé. La perte impermanente y est aussi **amplifiée** (voir plus bas).

### V4 — l'AMM programmable (Uniswap V4, les *hooks*)

La V4 ne change pas la formule : elle transforme Uniswap en **plateforme sur laquelle on greffe du code**. Chaque pool peut recevoir un *hook* — un petit programme qui s'exécute à des moments précis (avant un swap, à l'ajout de liquidité…).

> 🔦 **Hook**
> Un module de code branché sur une pool pour lui ajouter des fonctions sur mesure : frais dynamiques, ordres limites, redistribution du MEV, oracle personnalisé… sans réécrire tout Uniswap.

Bonus concret : c'est aussi **beaucoup moins cher en gas**. Un échange à trois sauts coûte environ 350 000 de gas en V2, 260 000 en V3, et seulement ~145 000 en V4 `[À VÉRIFIER — docs Uniswap / Cyfrin]`. C'est cette brique (les hooks V4) qu'utilisent des protocoles plus récents pour construire des pools sur mesure — on y reviendra avec Turbine.

### StableSwap — le cas des actifs qui doivent rester collés (Curve)

Un cas particulier essentiel. Quand tu échanges deux actifs censés valoir la même chose (USDC ↔ USDT, ou stETH ↔ ETH), la courbe classique `x·y=k` impose un impact de prix inutile. **Curve** a inventé une formule dédiée (StableSwap) qui se comporte presque comme un taux fixe tant qu'on reste près de la parité.

**En pratique.** Échanger 1 million d'USDC contre de l'USDT sur Curve peut coûter **moins de 0,01 %** d'impact de prix — un niveau qu'aucun AMM généraliste n'atteint. C'est pour ça que Curve est la plaque tournante des stablecoins et des actifs dérivés de l'ETH.

> 💡 **Notre avis**
> Les AMM à formule restent la fondation de la DeFi : simples, permissionless, et suffisants pour 90 % des échanges courants. La bonne pool dépend de ce que tu échanges — **V3/V4 pour les paires volatiles** (ETH, tokens), **StableSwap/Curve pour les actifs corrélés** (stablecoins, LST). Et si tu comptes fournir de la liquidité, la V3 rapporte plus… mais te demande de surveiller ta position. Le « pose et oublie », c'est plutôt la V2 ou Curve.

---

## Famille 2 — Les carnets d'ordres on-chain (CLOB)

Certains DEX ont décidé de reproduire le vrai carnet d'ordres des exchanges centralisés, mais on-chain. On parle de **CLOB** (*Central Limit Order Book*).

> 🔦 **Carnet d'ordres (order book)**
> La liste de tous les ordres d'achat et de vente à différents prix. Un moteur les apparie par priorité de prix puis d'ancienneté : le meilleur prix passe en premier, et à prix égal, l'ordre le plus ancien est servi d'abord. C'est le modèle de Binance… mais très exigeant techniquement.

Le défi, c'est la vitesse : un carnet d'ordres demande des milliers de mises à jour par seconde, impossible sur une blockchain classique. La solution des leaders du secteur a donc été de **construire leur propre blockchain**, taillée pour ça.

- **Hyperliquid** fait tout on-chain (création, matching, annulation des ordres) sur sa propre chaîne, avec un moteur intégré à la couche de consensus. C'est aujourd'hui la référence des DEX de produits dérivés (*perpetuals*).
- **dYdX** fonctionne sur sa propre chaîne applicative, avec un carnet d'ordres géré *hors-chaîne* mais un règlement *on-chain*.

- 🟢 **Force** : l'expérience d'un exchange centralisé (ordres limites précis, pas d'impact de prix façon AMM), sans confier ses fonds à une entreprise.
- 🟡 **Contrepartie** : ça demande une **infrastructure très spécifique** (souvent une blockchain dédiée), donc une forme de centralisation technique et une liquidité qui dépend de la présence de market makers.

> 💡 **Notre avis**
> C'est le modèle qui gagne du terrain pour le **trading actif et les produits dérivés** (levier, perpetuals), là où l'AMM est mal adapté. Pour du simple swap au comptant, l'AMM ou l'agrégateur reste plus direct. On a détaillé Hyperliquid à part si tu veux creuser cette famille.

---

## Famille 3 — Les agrégateurs : le comparateur de prix

Un agrégateur **n'a pas de liquidité à lui**. Son rôle : au moment où tu veux échanger, il scanne des dizaines de DEX en même temps, découpe éventuellement ton ordre entre plusieurs sources, et te trouve le meilleur prix net.

> 🔦 **Agrégateur de DEX**
> Un « comparateur » qui route ton échange à travers plusieurs DEX pour obtenir le meilleur prix, frais et impact de prix inclus. Exemples : **1inch**, **Jupiter** (sur Solana), **ParaSwap**, **Matcha**.

C'est l'analogie du comparateur de vols : tu ne veux pas ouvrir 15 sites un par un, l'agrégateur le fait pour toi et t'affiche la meilleure route. Sur un gros ordre, il peut même **le fractionner** — 40 % sur Uniswap, 35 % sur Curve, 25 % sur une autre pool — pour minimiser l'impact de prix total.

Leur poids est devenu énorme : les agrégateurs routent **plus de la moitié** du volume de swap sur Ethereum, et **plus de 90 %** sur Solana (où Jupiter est quasi incontournable) `[À VÉRIFIER — 1inch blog / sources agrégateurs 2026]`. 1inch revendique plus de **700 milliards** de dollars de volume cumulé depuis ses débuts `[À VÉRIFIER — CCN, Q1 2026]`.

- 🟢 **Force** : presque toujours le meilleur prix, sans effort. Peu de raisons de *ne pas* passer par un agrégateur pour un swap standard.
- 🟡 **Point d'attention** : tu dépends de son routage et de ses intégrations ; et comme tout swap public, tu restes exposé au MEV (voir plus bas) si l'agrégateur ne le protège pas.

> 💡 **Notre avis**
> Pour un échange ponctuel, **commence par un agrégateur** : c'est le réflexe qui te coûte le moins cher, sans avoir à deviner quelle pool est la mieux placée. La vraie question n'est plus « quel DEX ? » mais « quel agrégateur, et me protège-t-il du MEV ? ».

---

## Famille 4 — Les *intents* et enchères groupées : tu dis le résultat, pas le chemin

C'est le changement de logique le plus intéressant de ces dernières années. Au lieu de dire *« exécute cet échange sur cette pool, maintenant »*, tu signes une **intention** : *« je veux au moins X USDC pour mon 1 ETH »*. Ensuite, des acteurs spécialisés (les *solvers*) se débrouillent et **se concurrencent** pour te trouver la meilleure exécution.

> 🔦 **Intent (intention)**
> Tu exprimes le **résultat voulu** (« au moins tant de tokens en sortie »), pas la manière d'y arriver. Des *solvers* rivalisent pour remplir ton intention au meilleur prix ; celui qui t'offre le plus l'emporte.

L'exemple phare est **CoW Protocol** (CoW Swap). Son mécanisme :

1. Tes ordres sont regroupés par lots (*batch*) sur une courte fenêtre (~30 secondes).
2. Des solvers cherchent d'abord à **apparier directement les utilisateurs entre eux** : si quelqu'un vend de l'ETH pour des DAI pendant que tu vends des DAI pour de l'ETH, on vous échange directement, sans passer par aucune pool. C'est la *Coincidence of Wants* — d'où le nom (CoW).
3. Ce qui n'est pas apparié entre utilisateurs est complété via les pools classiques (Uniswap, Curve…) ou des market makers.
4. Tout le lot est réglé au **même prix**, dans une seule transaction.

[ILLUSTRATION : un batch avec un vendeur ETH→DAI et un vendeur DAI→ETH qui s'apparient directement au centre (flèche « CoW »), le reste partant vers les pools externes.]

> 🔦 **Coincidence of Wants (CoW)**
> Deux utilisateurs qui veulent l'échange inverse sont mis face à face directement. Résultat : **pas d'impact de prix, pas de frais de pool** sur la partie appariée — et aucune prise pour les bots qui exploitent les ordres publics.

Dans la même famille, on trouve **UniswapX** et **1inch Fusion** (mêmes idées d'intention + concurrence de *fillers*/resolvers), et les DEX à **RFQ** comme **Hashflow** : là, ta demande est envoyée à des market makers professionnels qui te renvoient un **prix ferme signé**, garanti sans slippage, calculé hors-chaîne puis réglé on-chain.

Le gros intérêt de toute cette famille : la **protection contre le MEV**.

> 🔦 **MEV (Maximal Extractable Value)**
> La valeur que des bots extraient en s'intercalant dans l'ordre des transactions. Le cas classique est le *sandwich* : un bot voit ton gros ordre arriver dans la file publique, achète juste avant toi (te faisant payer plus cher), puis revend juste après. Les intents cachent ou regroupent les ordres pour rendre ça impossible.

- 🟢 **Force** : souvent le meilleur prix net, protection MEV native, et sur les CoW, zéro frais d'intermédiaire.
- 🟡 **Contrepartie** : tu délègues l'exécution à des solvers (il faut leur faire confiance pour la qualité, même si la concurrence les discipline), et le résultat n'est pas toujours instantané.

> 💡 **Notre avis**
> C'est la famille la plus prometteuse pour l'utilisateur normal : tu obtiens un bon prix **sans te faire sandwicher**, et tu n'as rien à optimiser toi-même. Pour des ordres moyens à gros sur Ethereum, un DEX à intent (type CoW Swap) est souvent le choix le plus malin aujourd'hui.

---

## Famille 5 — Les nouveaux venus : les DEX confidentiels

La dernière frontière. Certains protocoles poussent la logique des intents encore plus loin en rendant les ordres **totalement invisibles** — même pour l'opérateur du DEX — grâce à un composant matériel sécurisé, le TEE.

> 🔦 **TEE (Trusted Execution Environment)**
> Une « pièce forte » à l'intérieur d'un processeur, où le code s'exécute de façon isolée : personne, pas même celui qui héberge le serveur, ne peut lire ce qui s'y passe. Ça permet un carnet d'ordres privé, tout en restant vérifiable de l'extérieur.

L'exemple actuel est **Turbine** (développé par PropellerHeads, l'équipe derrière l'indexeur Tycho). Sa promesse : tu acceptes d'**attendre** (de 10 minutes à 7 jours) en échange du **meilleur prix possible**, sur un ordre que personne ne voit passer. Un mécanisme clé, le *Speedbump*, met à jour les prix avant qu'un bot n'ait le temps d'agir — ce qui protège aussi les fournisseurs de liquidité d'une perte structurelle (le LVR).

- 🟢 **Force** : confidentialité réelle, très adapté aux **gros ordres** et aux paires peu liquides, protection MEV par construction.
- 🔴 **Faiblesse** : **jeune et centralisé** — beaucoup de logique tourne hors-chaîne chez un seul opérateur, sur du matériel qui a ses propres vulnérabilités connues. À réserver au test et aux petits montants pour l'instant.

> 💡 **Notre avis**
> L'idée est brillante et répond à un vrai besoin (échanger gros et discrètement), mais on est au tout début : produit en bêta, contrats pas tous vérifiables, confiance encore concentrée sur l'opérateur. À suivre de près, pas à utiliser les yeux fermés. On a publié une analyse complète de Turbine si le sujet t'intéresse.

---

## Le comparatif en un coup d'œil

| Famille | Comment on trouve la contrepartie | Exemples | Le mieux pour | Risque MEV |
|---|---|---|---|---|
| **AMM V2** | Formule x·y=k contre une pool | Uniswap V2 | Petits swaps, créer une pool | Élevé (ordre public) |
| **AMM V3 / V4** | Pool + liquidité concentrée (+ hooks) | Uniswap V3/V4, Aerodrome | Paires volatiles, LP actifs | Élevé |
| **StableSwap** | Formule dédiée aux actifs corrélés | Curve | Stablecoins, LST (stETH/ETH) | Modéré |
| **Carnet d'ordres (CLOB)** | Ordres appariés par prix/temps | Hyperliquid, dYdX | Trading actif, dérivés/levier | Faible (chaîne dédiée) |
| **Agrégateur** | Compare et route entre DEX | 1inch, Jupiter, ParaSwap | Meilleur prix sans effort | Variable |
| **Intent / batch** | Solvers en concurrence + appariement P2P | CoW Swap, UniswapX, Hashflow | Bon prix + anti-MEV | Faible |
| **Confidentiel (TEE)** | Carnet privé + prix par oracle | Turbine | Gros ordres discrets | Très faible |

[ILLUSTRATION : reprendre ce tableau en version graphique « arbre de décision » — plus lisible pour le web.]

---

## Alors, lequel choisir ?

Pas besoin de trancher pour toujours — **ça dépend de ce que tu fais** :

- **Un swap simple, de temps en temps** → un agrégateur (1inch, Jupiter). Le meilleur prix sans réfléchir.
- **Un gros ordre sur Ethereum, sans te faire sandwicher** → un DEX à intent (CoW Swap).
- **Échanger des stablecoins ou du stETH** → Curve, imbattable sur les actifs corrélés.
- **Trader avec du levier / des perpetuals** → un carnet d'ordres on-chain (Hyperliquid).
- **Fournir de la liquidité pour gagner des frais** → une pool V3 si tu veux optimiser et surveiller, Curve/V2 si tu veux « poser et oublier ». Mais d'abord, comprends la perte impermanente ci-dessous.

---

## Le risque qu'on oublie toujours : la perte impermanente (pour les LP)

Si tu ne fais qu'**échanger**, ton risque principal est le MEV — réglé par les familles « intent » et « confidentiel ».

Si tu **fournis de la liquidité**, ton risque n°1 porte un nom : la **perte impermanente**.

> 🔦 **Perte impermanente (Impermanent Loss)**
> La perte de valeur d'un fournisseur de liquidité **par rapport à s'il avait simplement gardé ses tokens**. Quand le prix bouge, l'AMM te « vend » automatiquement le token qui monte et t'accumule celui qui baisse. Elle est dite « impermanente » car elle s'annule si le prix revient à son point de départ — et devient réelle si tu retires après un mouvement.

La règle à retenir tient en une question : **les frais que je gagne dépassent-ils la perte impermanente que je subis ?** Sur les paires corrélées (stablecoins, stETH/ETH), la perte impermanente est quasi nulle → stratégie sûre. Sur les paires volatiles avec une fourchette serrée en V3, elle peut au contraire **effacer tout ton rendement**. C'est exactement ce que les DEX confidentiels comme Turbine cherchent à corriger en supprimant l'arbitrage qui ponctionne les LP.

---

## À retenir

- « DEX » recouvre **cinq familles** très différentes ; le bon choix dépend de ton usage, pas d'un classement absolu.
- Les **AMM à formule** (Uniswap, Curve) sont le socle : simples et permissionless, mais avec de l'impact de prix et de la perte impermanente.
- Les **agrégateurs** te trouvent le meilleur prix sans effort — le réflexe par défaut pour un swap.
- Les **intents / enchères groupées** (CoW Swap…) sont la meilleure réponse actuelle au **MEV** pour l'utilisateur normal.
- Les **carnets d'ordres on-chain** (Hyperliquid) dominent le **trading actif et les dérivés**.
- Les **DEX confidentiels** (Turbine) sont prometteurs mais **jeunes et centralisés** — à tester prudemment.

---

*Ce contenu n'est pas un conseil en investissement.*

*Article rédigé avec l'aide de l'IA.*

---

## 🟠 Points qui demandent ton avis (à trancher avant mise en ligne)

1. **Emplacement & format** : je l'ai écrit comme un guide long autonome. Le mettre où — nouvelle section « Guides/Articles » du site, ou dans `tutos/` (aujourd'hui juste une page vitrine sans contenu) ? Ça conditionne le type de données à créer côté code.
2. **Longueur / découpage** : article assez dense. Tu préfères tel quel, ou le découper en 2 (partie 1 « les AMM » / partie 2 « agrégateurs, intents, confidentiels ») pour le SEO et la lecture ?
3. **Liens internes** : je propose de lier « perte impermanente », « MEV », « TEE », « Curve », « Hyperliquid », « Turbine » vers `/glossaire/<slug>` et `/protocoles/<slug>`. À confirmer quels slugs existent déjà (Hyperliquid et Turbine ont une fiche wiki ; côté site, à vérifier).
4. **Chiffres `[À VÉRIFIER]`** : 5 chiffres volatils à faire valider par le fact-checker le jour J (ratio DEX/CEX, volume 2025, gas V2/V3/V4, part des agrégateurs, volume cumulé 1inch). Rien d'inventé, sources indiquées.
5. **Illustrations** : 4 repères `[ILLUSTRATION]` posés. Tu veux que je décrive précisément chacune pour le designer, ou tu les fais toi ?
</content>
