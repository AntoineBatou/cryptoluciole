## 🔦 ON ÉCLAIRE

### Le CDP : emprunter contre ses cryptos au lieu de les vendre

> ⚠️ Tout chiffre marqué 🔄 est à rafraîchir le jour de l'envoi.

Au [#4](https://www.cryptoluciole.com/numeros/4), on expliquait comment parier sur le prix du bitcoin sans jamais le détenir. Cette semaine, l'inverse : comment te servir des cryptos que tu détiens comme garantie pour emprunter.

---

### 1. Le principe

Tu bloques des cryptos que tu possèdes pour obtenir un prêt. Le protocole garde tes bitcoins ou tes ethers, et te prête en échange des [stablecoins](https://www.cryptoluciole.com/glossaire/stablecoin), que tu peux dépenser librement. Il est certain d'être remboursé pour une raison simple : **il te prête toujours moins, en valeur, que ce que tu as déposé.** Le jour où tu rembourses, tu récupères ton dépôt.

> **[CDP](https://www.cryptoluciole.com/glossaire/cdp)** (*collateralized debt position*) — une position de dette garantie par un dépôt. Ton dépôt n'est pas prêté à quelqu'un d'autre : il reste à toi, simplement immobilisé jusqu'au remboursement.

L'équivalent existe depuis longtemps en banque privée française : le **crédit lombard**. Tu nantis ton portefeuille de titres auprès de ta banque, elle te consent une ligne de liquidités, et tu n'as rien vendu. Même logique — et, comme en banque, l'établissement peut vendre les titres si leur valeur passe sous un seuil.

---

### 2. Comment ça marche, étape par étape

Pour suivre les opérations, prenons un exemple pratique : **tu déposes 100 $ de bitcoin sur un protocole de CDP.**

**Tu déposes ta crypto.** Elle devient ta garantie, on appelle cela ton *collatéral*.

> **[Collatéral](https://www.cryptoluciole.com/glossaire/collateral)** — l'actif que tu bloques en garantie de ton emprunt. Tu ne peux plus y toucher tant que la dette n'est pas remboursée.

**Tu choisis combien tu empruntes.** Le rapport entre ce que tu empruntes et ce que tu as déposé s'appelle le **LTV** (*loan-to-value*). Chaque protocole fixe un plafond, le **LLTV** : le LTV maximum au-delà duquel ta position est liquidée.

> **[LTV](https://www.cryptoluciole.com/glossaire/ltv)** (*loan-to-value*) — ta dette rapportée à la valeur de ta garantie. Emprunter 60 $ contre 100 $ de dépôt, c'est un LTV de 60 % (60 ÷ 100). Le **LLTV** est le plafond à ne pas franchir, fixé par le protocole : souvent de l'ordre de 80 % pour un actif liquide comme le bitcoin ou l'ether.

Avec un plafond à 80 %, tu peux donc emprunter **jusqu'à 80 $** (100 × 0,80). Admettons que tu n'en empruntes que **60 $**, par sécurité.

**Le protocole émet les 60 $ de stablecoins.** Il ne pioche pas dans une réserve existante : il crée les jetons à cet instant, adossés à ton dépôt. C'est ce qu'on appelle le *mint*.

> **[Mint](https://www.cryptoluciole.com/glossaire/mint)** — la création de nouveaux jetons par un protocole, à la demande. À l'inverse, quand tu rembourses, les jetons sont détruits (*burn*) : ils cessent d'exister.

**Ton collatéral peut baisser.** Ta dette, elle, reste figée à 60 $ : elle est libellée en dollars. Le **seuil de liquidation**, c'est le prix auquel ton collatéral devient trop faible pour tenir le plafond.

> **[Liquidation](https://www.cryptoluciole.com/glossaire/liquidation)** — la vente forcée de ta garantie par le protocole, automatiquement et sans préavis, dès que ton LTV dépasse le plafond. Sur un CDP, tu ne perds pas ton dépôt : une fois la dette remboursée et la pénalité prélevée, **ce qui reste te revient**.

Ici, tu es liquidé si ton bitcoin tombe à **75 $** — parce qu'à ce moment-là, ta dette de 60 $ atteint 80 % de ton collatéral (60 ÷ 75 = 0,80). Soit une **baisse de 25 %** par rapport à ton dépôt de départ.

Ce jour-là, trois choses se passent :

- **le protocole vend ton collatéral.** Selon les protocoles, il en vend une partie seulement ou la totalité, de quoi rembourser les 60 $ de dette ;
- **il prélève une pénalité**, de l'ordre de **5 à 10 %** de la dette selon les protocoles, soit 3 à 6 $ ici ;
- **le reste te revient** : une dizaine de dollars de bitcoin, auxquels s'ajoutent les 60 $ empruntés qui restent à toi — soit **environ 70 $** là où ton bitcoin en valait 75.

Le vrai coût n'est pas la pénalité : c'est que la vente a eu lieu au plus bas, et que tu ne profiteras pas du rebond.

**Tu paies un intérêt** sur le montant emprunté, tant que la position est ouverte. Sur la quasi-totalité des CDP, ce taux t'est **imposé** — voté par une DAO ou calculé par une formule selon la demande. Liquity fait exception, on y revient plus bas.

D'un protocole à l'autre, l'écart est énorme : du quasi-gratuit à **plus de 10 % par an** 🔄. Et en ce moment, c'est cher presque partout, pour une raison simple : **personne ne prête un dollar en DeFi moins cher que ce que rapporte un dollar placé sans risque.** Tant que les taux américains restent hauts, ils tirent tout le reste vers le haut — un emprunt ouvert au printemps dernier ne coûtait pas ce qu'il coûte aujourd'hui.

**Tu rembourses quand tu veux.** Tu rends les 60 $ de stablecoins **plus les intérêts courus**, le protocole détruit les jetons, et **tu récupères tes 100 $ de bitcoin** — quelle que soit leur valeur du jour. Ton bitcoin, lui, n'a pas bougé : ce que l'opération t'a coûté, c'est l'intérêt.

---

### 3. À quoi ça sert : trois usages

#### Dépenser sans vendre

Tu as besoin de liquidités — mais tu crois à ton bitcoin sur le long terme. Vendre, c'est renoncer à la hausse qui suivra.

Ton bitcoin vaut 100. Tu empruntes 60 et tu les dépenses.

- **Demain, il vaut 200.** Tu vends juste de quoi rembourser les 60. **Il te reste 140.**
- **Si tu avais vendu 60 de bitcoin au départ**, il ne t'en serait resté que 40 — qui vaudraient 80 aujourd'hui.

**140 contre 80.** (On laisse de côté l'intérêt payé entre-temps, qui ne change pas l'ordre de grandeur.)

Cette position porte un nom : tu es **long**, ou haussier.

> **[Long (haussier)](https://www.cryptoluciole.com/glossaire/long)** — être positionné pour gagner si le prix monte. Emprunter du stablecoin contre du bitcoin, c'est parier que ton collatéral va monter **face au dollar** : ta dette, elle, reste figée en dollars, donc la hausse de l'actif suffit à la solder. Tu profites de la hausse tout en continuant de disposer de tes actifs.

C'est tout le sens de l'opération — et son revers est chiffré plus haut : si ton bitcoin tombe à 75, ta position est liquidée, et tu ne verras jamais les 200.

#### Prendre du levier

Le stablecoin emprunté sert à racheter de la crypto, qu'on redépose en garantie. C'est du *levier*, obtenu autrement.

> **[Levier](https://www.cryptoluciole.com/glossaire/levier)** — s'exposer à plus que son capital en empruntant la différence. Avec 100 de capital et 60 empruntés, tu es exposé à 160 : chaque mouvement du bitcoin joue sur 160, pas sur 100.

Tu déposes 100, tu empruntes 60, tu rachètes 60 de bitcoin : **te voilà exposé à 160 avec 100 de capital.**

- **Le bitcoin monte de 50 %** : tes 160 deviennent 240, tu dois toujours 60, **il te reste 180** au lieu de 150.
- **Le bitcoin baisse de 25 %** : tes 160 tombent à 120, tu dois toujours 60, **il te reste 60** au lieu de 75. Tu n'es pas liquidé pour autant : ta dette de 60 ne pèse que la moitié des 120 qui te restent, parce que ton collatéral est plus gros qu'au départ.

Pourquoi passer par là plutôt que par un [contrat perpétuel](https://www.cryptoluciole.com/glossaire/contrat-perpetuel) sur Hyperliquid, qui donne du levier en trois clics ? Deux raisons :

- **le coût est connu d'avance.** Tenir une position à la hausse sur le bitcoin coûte actuellement **10,63 % annualisés** de [funding](https://www.cryptoluciole.com/glossaire/funding-rate) 🔄 — un taux que personne ne fixe, et qui monte précisément quand tout le marché veut être exposé à la hausse ;
- **tu détiens de vrais bitcoins dans ton propre portefeuille**, pas une position ouverte chez un opérateur.

Le prix à payer est réel : il faut immobiliser bien plus que ce qu'on emprunte, là où un perp se contente de quelques pour cent de marge.

**f(x) Protocol**, un protocole de levier sur Ethereum, pousse cet argument au bout : levier jusqu'à ×7, sans frais de financement, et il accepte le bitcoin en garantie.

#### Emprunter à un taux pour placer à un taux de rentabilité plus élevé

> **Carry trade** — emprunter là où l'argent est bon marché pour le placer là où il rapporte davantage, et encaisser la différence. Le gain ne vient pas d'une hausse de prix, mais de l'écart entre deux taux.

Rien de nouveau : la finance traditionnelle le pratique depuis des décennies. Le cas d'école est le carry trade sur le yen :

- **on emprunte au Japon**, où l'argent reste beaucoup moins cher qu'ailleurs ;
- **on convertit en dollars** et on achète des obligations d'État américaines, qui rapportent nettement plus ;
- **on empoche l'écart** entre les deux taux.

Le risque n'est pas dans les taux, il est dans la monnaie : si le yen remonte brutalement, la dette à rembourser gonfle et le gain s'évapore. C'est arrivé plusieurs fois.

**En DeFi, le même montage existe, tu empruntes des dollars à un certain taux et tu les places à un taux plus élevé :**

Par exemple sur f(x) Protocol :

- Tu déposes des bitcoins et tu empruntes des fxUSD. Coût : **0,5 %** à l'ouverture et **0,2 %** à la fermeture.
- Tu places ces fxUSD là où ils rapportent. Le plus direct, c'est le **pool de stabilité de f(x)** lui-même, qui sert **6,71 %** en ce moment. Tu peux aussi les échanger contre des USDC ou des USDT et viser une autre stratégie : par exemple les coffres USDC de **Morpho** entre **3,19 % et 5,61 %** 🔄, ou encore convertir en sUSDe et encaisser **4,50 %** par an 🔄 `[À VÉRIFIER au fact-check]`

Tu empoches la différence. Par exemple, avec **100 000 $** de bitcoin déposés :

- tu empruntes **60 000 $** de fxUSD, soit un LTV de 60 % ;
- tu paies 0,5 % à l'ouverture et 0,2 % à la fermeture : **0,7 % de 60 000 = 420 $** ;
- tu les places à 6,71 % : **60 000 × 6,71 % = 4 030 $** de gains sur l'année ;
- une fois les frais déduits, **4 030 − 420 = 3 610 $** — sans avoir vendu un seul bitcoin, et en gardant l'intégralité de la hausse s'il monte.

Ce rendement de 6,71 % n'est pas magique, et il faut savoir d'où il vient : **le pool de stabilité sert à absorber les liquidations**. Quand un emprunteur se fait liquider, c'est l'argent du pool qui rembourse sa dette, et les déposants reçoivent son collatéral avec une décote. Tu es payé pour ce service, et pour le risque qui va avec. Chaque fois que tu vises un rendement, pose-toi la même question : qui paie, et pour quel risque ?


Trois réserves, avant de trouver ça trop beau :

- **ton bitcoin reste liquidable** si le marché décroche ;
- **le 6,71 % n'est pas garanti** : c'est un rendement variable, qui dépend du nombre de déposants dans le pool et du volume de liquidations à absorber. Il peut tomber bien plus bas du jour au lendemain, et c'est lui qui fait toute la marge de l'opération ;
- **f(x) est un petit protocole** : environ **126 M$** déposés 🔄, quand Sky ou Morpho comptent en milliards. Moins de recul, moins de liquidité pour entrer et sortir — l'emprunt à 0 % se paie aussi en risque de protocole.

*On décrit ici une stratégie pour l'expliquer, pas pour la recommander.*

---

### Pourquoi ça compte cette semaine

Strategy avait du bitcoin et besoin de liquidités cet été : elle a vendu du bitcoin pour payer un dividende, et l'a racheté 33 % plus cher deux mois plus tard. On y revient juste après.

Le CDP est la réponse que la DeFi apporte à ce problème. Reste qu'il n'aurait pas forcément été applicable ici : emprunter contre du bitcoin suppose en général de le transférer d'abord sur une blockchain capable d'exécuter des contrats, ce qui cadre mal avec la doctrine de conservation de Strategy.

Un peu plus bas, on ouvre le capot de l'un de ces protocoles : **Liquity**.

---

*Une dernière chose, souvent évoquée : certains voient dans le CDP un moyen de repousser l'impôt tout en profitant de leurs gains — on ne vend rien, on emprunte, donc on estime pouvoir dépenser ces stablecoins sans déclarer de plus-value, puisque les bitcoins n'ont en soi jamais été vendus. Prudence : on ne sait pas si l'administration fiscale l'entendrait de cette oreille.*
