# I.2 Le STRC (« Stretch ») — la machine à capital de Strategy

Là où STRF, STRK et STRD versent un dividende fixe et laissent leur cours évoluer librement en fonction de l'offre et de la demande, le STRC est **piloté** : Strategy actionne en permanence deux leviers pour le maintenir collé à **100 $**. C'est ce qui en fait un objet à part.

---

## Ce que le STRC cherche à être : un placement de trésorerie à haut rendement

Une action Strategy ordinaire (MSTR) est un pari directionnel sur le bitcoin, amplifié et très volatil : elle peut prendre ou perdre 10 % dans la journée. Le STRC vise exactement l'inverse. Son cours n'a à la base pas vocation à bouger ; ce qu'on achète, c'est un **dividende**, versé périodiquement, sur un titre qui est censé conserver sa valeur de 100 $.

> **📖 STRC (« Stretch »)**
> Une **action préférentielle perpétuelle à taux flottant**, cotée sur le Nasdaq et vendue par tranches de 100 $. « Perpétuelle » : elle n'a pas d'échéance, Strategy ne rembourse jamais le capital. « À taux flottant » : le dividende est révisé régulièrement au lieu d'être gravé une fois pour toutes. Elle est conçue pour s'échanger autour de **100 $** en permanence, de sorte que le détenteur touche son dividende sans subir de variation de cours.

Saylor l'a présenté comme le « moment iPhone » de Strategy. Formule marketing, mais l'idée derrière est réelle : le STRC ne s'adresse pas aux parieurs sur le bitcoin, il vise les investisseurs « revenus » — trésoreries d'entreprise, gérants obligataires, épargnants qui cherchent du rendement régulier. Le concurrent dans leur tête, ce n'est pas MSTR, ce sont les **placements monétaires** : fonds de trésorerie, bons du Trésor, comptes à terme.

Sur ce terrain, l'argument est simple. Un fonds monétaire américain rapporte de l'ordre de 3,6 % ; le STRC affiche **12,00 %** depuis le 1er juillet 2026. Le pari du produit : offrir un rendement de type « crédit à haut rendement » avec une stabilité de cours proche de celle du monétaire. Sur ses premiers mois, il a plutôt tenu cette promesse — mais cette stabilité est *artificielle*, pas garantie.

---

## Le cœur du mécanisme : deux leviers pour tenir 100 $

Maintenir un titre coté à un prix fixe n'a rien d'automatique : c'est le marché qui fixe le cours à chaque instant. Strategy y parvient en agissant sur deux leviers à la fois.

**1. Le dividende, révisé à intervalle régulier.** C'est le prix que Strategy paie pour rendre le titre attractif. Si le STRC décroche sous 100 $, on monte le dividende pour attirer des acheteurs et faire remonter le cours ; s'il déborde au-dessus, on peut le baisser.

**2. Le programme d'émission continue (ATM).** C'est le levier le plus subtil.

> **📖 Programme ATM (*At-The-Market*)**
> Un dispositif qui permet à l'entreprise de **vendre de nouvelles actions directement sur le marché**, au fil de l'eau, au cours du moment — sans organiser une grosse opération ponctuelle. Pour le STRC, l'ATM sert de soupape : quand le titre monte au-dessus de 100 $, Strategy en émet davantage, ce qui **augmente l'offre** et repousse le cours vers 100 $.

L'ATM est **suspendu dès qu'on passe sous 99 $**. La raison est purement comptable : émettre à 95 $ un titre dont le dividende est calculé sur une base de 100 $ reviendrait à vendre à perte.

Le cadre d'ajustement est public, et volontairement asymétrique :

- **cours au-dessus de 101 $** (en moyenne sur le mois) → le dividende peut être **baissé**, et l'ATM émet ;
- **cours entre 95 et 99 $** → le dividende est **relevé d'au moins 0,25 point** ;
- **cours sous 95 $** → hausse d'au moins **0,50 point**.

> 🖼️ **[FIGURE 4 — Les deux leviers du STRC]**
> *Schéma : axe vertical du cours avec les zones 101 $ / 99 $ / 95 $ et, de part et d'autre, les deux leviers — au-dessus : l'ATM émet (l'offre repousse le cours vers 100 $) ; en dessous : le dividende monte (la demande le ramène). ATM coupé sous 99 $. Données : seuils du cadre public (dans le texte).*

Deux garde-fous encadrent la baisse : le taux ne peut pas descendre de plus de 0,25 point par période, ni passer sous le taux de référence interbancaire américain (le SOFR). À la hausse, en revanche, **aucun plafond**. Cette asymétrie protège le détenteur : le rendement peut grimper autant que nécessaire pour défendre le cours, mais il ne peut pas s'effondrer d'un coup.

L'historique du taux raconte à lui seul la difficulté de l'exercice :

- **9,00 %** au lancement (IPO de juillet 2025) ;
- **11,50 %** au 1er mars 2026, taux tenu quatre mois ;
- **12,00 %** au 1er juillet 2026.

Sept hausses en un an, aucune baisse. Un dividende qu'on doit relever aussi souvent n'est pas le signe d'un produit qui séduit sans effort : c'est le signe qu'il faut payer de plus en plus cher pour maintenir la demande et défendre les 100 $.

---

## Ce qui se passe quand le STRC casse sous 100 $

C'est la question décisive, parce que c'est arrivé plusieurs fois — creux autour de **92 $** fin 2025, puis la chute de juin 2026 : **82,53 $ le 18 juin**, et un plus-bas historique à **71,25 $ le 26 juin**, soit près de 29 % sous le pair. À la date de publication, le STRC cote autour de **87,75 $**, encore près de 12 % sous le pair.

Quand le cours passe durablement sous le pair, une réaction en chaîne se déclenche, en quatre maillons :

- **L'ATM se coupe.** C'est mécanique : sous 99 $, Strategy cesse d'émettre. Elle perd du coup son canal de financement le plus efficace — celui qui transformait chaque STRC vendu au pair en cash prêt à acheter du bitcoin.
- **Le dividende monte, donc le coût monte.** Pour ramener le titre vers 100 $, il faut relever le taux. Chaque hausse alourdit la facture annuelle de Strategy — non seulement sur les nouveaux titres, mais sur *tout* le stock de STRC déjà en circulation.
- **Le marché primaire se ferme tout seul.** Personne n'achète un STRC neuf à 100 $ auprès de Strategy si le même titre s'échange à 85 $ sur le marché de seconde main. Tant que le cours reste sous le pair, l'entreprise ne peut plus lever un dollar par ce canal, quel que soit le dividende affiché.
- **Le signal envoyé est coûteux.** Un STRC durablement sous 100 $ dit au marché que Strategy peine à défendre son propre produit. Cela renchérit tout son coût du capital, STRC compris — un cercle qui s'auto-aggrave.

Face à cette spirale, il existe néanmoins une **force de rappel**, et elle tient à la façon dont le dividende est calculé.

> **📖 La convexité du dividende**
> Le dividende du STRC est toujours calculé sur une **valeur nominale de 100 $**, quel que soit le prix réel du titre. Un dividende de 12 % vaut donc 12 $ par an, versés à qui détient le titre. Si le cours tombe à 80 $, ces 12 $ représentent alors un rendement effectif de **15 %** pour l'acheteur à 80 $ ; à 50 $, on grimperait vers 24 %. Plus le titre baisse, plus il devient rémunérateur à l'achat — ce qui attire des acheteurs et tend à le faire remonter.

Cette force de rappel est réelle, mais **conditionnelle**. Elle ne joue que si deux choses tiennent : la **confiance** dans le fait que le dividende sera bel et bien versé (le conseil d'administration peut le réduire, rien ne l'en empêche contractuellement), et la **liquidité** (assez d'acheteurs pour absorber la baisse). Le jour où le marché doute de l'un ou de l'autre, un rendement effectif de 15 % ne rappelle plus personne : il se lit alors comme une prime de risque, pas comme une aubaine.

---

## D'où vient l'argent des dividendes (souvent mal compris)

**Strategy n'émet PAS de STRC pour payer les dividendes du STRC.** L'argent récolté quand elle vend des STRC ne sert qu'à une chose : **acheter du bitcoin**. Il ne repart jamais dans la poche des détenteurs de STRC sous forme de dividende. 

Les dividendes viennent d'ailleurs — de trois sources distinctes.

- **L'émission d'actions ordinaires MSTR.** Tant que l'action se paie assez cher par rapport à ses bitcoins, Strategy vend un peu de MSTR sur le marché et utilise le produit pour honorer les dividendes préférentiels. C'est la source principale, mais elle dépend entièrement de la santé de la prime (on y revient juste après).

- **Une réserve de cash en dollars.** Strategy a mis de côté un coussin pour couvrir les dividendes même quand l'émission d'actions se grippe. Son montant n'a rien d'un chiffre stable : il raconte à lui seul l'année 2026.

  | Date | Réserve | Couverture |
  |---|---|---|
  | 1er février 2026 | **2,25 Md$** | selon la politique d'alors |
  | 25 mai 2026 | **871 M$** | ~6 mois |
  | 28 juin 2026 | **2,55 Md$** | ~17,4 mois |

  Le creux de mai n'est pas un signal d'épuisement : il suit le rachat de 1,5 milliard de dollars d'obligations convertibles. La reconstitution qui a suivi est, elle, revendiquée publiquement — le 28 juin 2026, Strategy annonce un « Digital Credit Capital Framework » qui fixe une cible de **2 à 3 ans** de couverture. Rapportée à une charge annuelle d'environ **1,76 milliard de dollars** (dividendes préférentiels et intérêts confondus), la réserve actuelle représente un peu plus de dix-sept mois de versements.

- **La vente de bitcoins, depuis 2026.** Nouveauté doctrinale majeure. Strategy a d'abord vendu une trentaine de bitcoins fin mai 2026, à dose symbolique, pour honorer un paiement. Puis elle a **officialisé le mécanisme** : le 28 juin 2026, son conseil d'administration adopte un cadre permanent l'autorisant à céder jusqu'à **~1,25 milliard de dollars** de bitcoin (environ 2,5 % de son stock) pour servir ses engagements quand c'est avantageux. Le passage à l'acte n'a pas tardé : début juillet 2026, **3 588 bitcoins vendus pour environ 216 millions de dollars**, explicitement destinés à payer les dividendes préférentiels et à regarnir la réserve. La société qui jurait de ne jamais vendre a non seulement franchi le pas, mais l'a inscrit dans sa doctrine.

---

## Pourquoi les actionnaires MSTR acceptent de financer ce dividende

Une question logique se pose : pourquoi les détenteurs d'actions ordinaires accepteraient-ils que Strategy émette du MSTR — ce qui les dilue — pour payer le dividende d'une *autre* catégorie d'investisseurs ? La réponse tient dans le seuil de rentabilité de l'opération.

> **📖 Dilution relutive et seuil de ~1,22x**
> Émettre des actions dilue, en principe, les actionnaires existants. Mais si le marché paie l'action nettement plus cher que la valeur des bitcoins qu'elle représente, vendre cette action « chère » pour acheter du bitcoin « à sa vraie valeur » fait *monter* le bitcoin par action. La dilution devient alors **relutive** : elle enrichit ceux qu'elle dilue. Pour Strategy, ce basculement se produit au-dessus d'une **mNAV d'environ 1,22x** — un seuil plus élevé que le simple « 1 », car le calcul intègre la dilution potentielle liée aux convertibles, aux préférentielles et aux actions attribuées aux salariés.

Tant que la mNAV dépasse ce seuil, l'équation est favorable aux deux camps : Strategy lève de quoi payer les dividendes STRC *et* augmente le bitcoin par action de ses actionnaires ordinaires. C'est ce que Saylor décrit comme un **carry trade**.

> **📖 Carry trade**
> Emprunter (ou lever du capital) à un coût donné pour le placer dans un actif dont on espère un rendement supérieur — et empocher l'écart. Ici : payer 12 % de dividende sur le STRC pour acheter un bitcoin dont Strategy projette une appréciation à long terme bien supérieure. Exemple chiffré : si le bitcoin rapporte **20 %** par an quand le STRC en coûte **12 %**, l'écart — **8 points** — revient à la société et à ses actionnaires MSTR. Si le pari sur le bitcoin échoue, en revanche, c'est un coût net.

Tout l'édifice repose donc sur cette hypothèse : le bitcoin rapportera, dans la durée, davantage que les 12 % versés au STRC. C'est vrai « sur le papier » et selon les projections de Saylor ; en pratique, cela dépend d'un bitcoin qui monte *et* d'une mNAV qui reste au-dessus du seuil.

Or le **27 juin 2026**, la valorisation de Strategy est passée **sous la valeur de ses propres bitcoins** : sa mNAV est tombée en dessous de 1, donc très loin sous le seuil de 1,22x. Un avertissement de lecture, ici : la mNAV se calcule de plusieurs façons, et les écarts sont considérables — début juillet 2026, selon qu'on retient la version « enterprise », « basique » ou « diluée », on lit entre **0,65x et 1,04x** pour la même société. Peu importe la méthode retenue : dans toutes, le carry trade est à l'arrêt.

---

## Le plan « 42/42 » et son blocage

Le 23 mars 2026, Strategy a annoncé le plan **« 42/42 »** : 42 milliards de dollars d'autorisations d'émission supplémentaires, répartis pour moitié en actions MSTR et pour moitié en STRC, avec un objectif affiché — franchir le **million de bitcoins détenus d'ici fin 2026** (contre ~762 000 à l'annonce).

Le problème saute aux yeux quand on relie ce plan au seuil précédent. Les deux moitiés du « 42/42 » supposent une mNAV **au-dessus de 1,22x** pour rester créatrices de valeur : l'émission de MSTR n'est relutive qu'au-dessus du seuil, et l'émission de STRC exige un cours au pair. Avec une mNAV passée sous 1 fin juin 2026, **les deux canaux sont gelés**. L'accumulation ralentit fortement : Strategy est passée d'environ 762 000 bitcoins en mars à **843 775 au 6 juillet 2026** — un chiffre désormais en recul, puisque la société vend. Elle a parcouru moins du tiers du chemin vers le million, alors que la moitié de l'année est écoulée. Le plan est, dans les faits, à l'arrêt tant que la prime ne revient pas.

C'est dans ce contexte que Strategy a formalisé, courant 2026, une série de manœuvres défensives : racheter une partie de sa dette convertible en la remplaçant par du capital perpétuel — 1,5 milliard de dollars rachetés en mai 2026, ramenant l'encours d'environ 8 à **6,7 milliards** —, alimenter sa réserve en dollars, et vendre par petites touches des bitcoins acquis à prix élevé, au passage pour capter des moins-values fiscales. Autant de signes qu'on est passé du mode « accumulation offensive » au mode « défense du bilan ».


---

## Le STRC entre dans la DeFi

Le STRC ne circule plus seulement en bourse. Depuis début 2026, des protocoles crypto s'en servent comme **brique de rendement** : ils achètent du STRC, en captent le dividende et le reversent, sous forme de dollars numériques rémunérés ou de bitcoin. La croissance a été fulgurante : le seul Apyx est passé d'environ **29 millions de dollars** de STRC à la mi-mars 2026 à plusieurs fois ce montant en quelques semaines, et une petite dizaine de sociétés bâtissent aujourd'hui des produits sur cette brique. Les totaux publiés varient trop d'une source à l'autre pour être cités comme un chiffre unique — mais l'ordre de grandeur, quelques centaines de millions de dollars, est acquis. Parmi les acteurs impliqués : Apyx, Roxom, Hermetica, Saturn Credit.

Pour Strategy, c'est une nouvelle source de demande. Mais c'est aussi une nouvelle chaîne de dépendances. Des détenteurs de stablecoins « à rendement » se retrouvent, sans toujours en avoir conscience, exposés au bitcoin, à Strategy et à la liquidité du STRC. Le jour où le STRC décroche de son pair — comme en juin 2026 —, ce risque, jusque-là invisible, remonte à la surface de produits vendus comme stables. Comment ces montages sont construits, et ce qu'il advient de ceux qui y ajoutent du levier : c'est tout l'objet de la seconde partie du dossier.

---

## « Ponzi » ou structure réflexive ? Trancher proprement

Fin avril 2026, Peter Schiff a qualifié le STRC de « schéma pyramidal le plus évident » qui soit, avec un argument précis : le dividende de 12 % serait, selon lui, payé en vendant toujours plus de STRC à de nouveaux entrants.

**Cet argument est factuellement faux**, et le circuit de financement décrit plus haut suffit à le démonter : le produit des ventes de STRC part acheter du bitcoin, jamais payer les dividendes du STRC. Ceux-ci sont servis par l'émission de MSTR, la réserve en dollars et, désormais, des ventes marginales de bitcoins. Ajoutons que tout est public — prospectus, déclarations hebdomadaires à la SEC — et qu'aucun remboursement de capital n'est promis (donc pas de « dette cachée » à faire rouler). Un Ponzi paie les anciens avec l'argent des nouveaux en dissimulant l'origine des fonds ; ici, l'origine est documentée et distincte.

Reste une critique bien plus sérieuse, qui n'est pas celle de Schiff : le STRC n'est pas une fraude, c'est une **structure réflexive**. Sa viabilité repose sur trois primes qui doivent tenir *en même temps* :

- **la prime de MSTR** (une mNAV assez haute pour que l'émission d'actions reste relutive et finance les dividendes) ;
- **la prime de confiance sur le STRC** (les détenteurs continuent de croire que le dividende sera versé et le pair défendu) ;
- **la prime de croissance du bitcoin** (le bitcoin monte assez pour justifier le carry trade).

Le danger n'est pas la fraude, c'est le **couplage**. Chaque nouvelle tranche de STRC émise alourdit le service annuel des dividendes — déjà d'environ **1,76 milliard de dollars par an**, intérêts compris — et exige donc *davantage* de performance du bitcoin pour rester tenable. Si le plan « 42/42 » était exécuté jusqu'au bout, cette charge dépasserait plusieurs milliards annuels. Rapporté au trésor de la société, ce montant reste modeste : il suffirait que le bitcoin progresse de quelques points par an pour que Strategy puisse théoriquement couvrir ses dividendes en vendant cette seule fraction. Modeste en apparence — mais tout l'édifice revient alors à parier que le bitcoin fera, année après année, mieux que ce plancher, tout en gardant intactes les deux autres primes. Ce n'est pas un Ponzi ; c'est un pari à trois conditions, dont aucune n'est garantie.

> **💡 L'essentiel**
> Le STRC est un quasi-placement monétaire à **12 %**, maintenu à 100 $ par deux leviers (dividende révisable à la hausse sans plafond, émission ATM coupée sous 99 $). Ce n'est pas un Ponzi — le circuit de financement est public et les dividendes ne viennent jamais des ventes de STRC — mais une **structure réflexive** : elle tient tant que trois primes tiennent *en même temps* (la prime de MSTR, la confiance dans le dividende, la croissance du bitcoin).

---

Le STRC est donc un produit brillant tant que les trois primes tiennent. Mais Strategy n'est plus seule à jouer cette partition. D'autres sociétés courent désormais après le même trésor, avec des actifs, des structures et des paris différents — Bitmine sur l'Ethereum, Strive et son préférentiel SATA taillé sur le modèle du STRC, et quelques autres. C'est l'objet de la section suivante.
