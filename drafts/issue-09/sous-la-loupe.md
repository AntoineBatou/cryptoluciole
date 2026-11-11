# 🔍 SOUS LA LOUPE — numéro 9 : PendleLoop

> ✍️ Brouillon du Rédacteur (v2, après le 7/10 du vérificateur : coupes de longueur, badge unique, incertitudes sur les récompenses dites en clair). Notation des blocs : `[p]` paragraphe · `[st]` sous-titre / amorce dorée « ⬡ … » · `[def | slug]` encadré de définition · `[liste]` puces · `[image | chemin | légende]` capture d'écran · `[avis]` encadré vert « 💡 Notre avis » · `[À VÉRIFIER]` / `[À RELEVER]` chiffre/fait à confirmer. Italique = terme anglais à sa 1re occurrence.
>
> Correspondance avec le type `protocole` de `issues.ts` : En bref + Pour rappel → `bref` · Comment ça marche → `etapesCorps` · Le rendement → `rendementCorps` · Les risques → `risques` + `risquesItems` + `risqueNiveau: "eleve"` · Pourquoi ça compte + avis → `importanceCorps` · `slug: "pendle"`.
>
> Objectif (une phrase) : que le lecteur sache ce que fait PendleLoop, comment on s'en sert écran par écran, ce que ça rapporte vraiment (et qui paie), et quel risque il prend, en particulier sur les actions le week-end.

**Titre (proposition)** : PendleLoop : comment prendre du levier en un clic

---

[st] En bref

[p]
**PendleLoop**, lancé le **22 octobre 2026**, automatise le *looping* : tu déposes un actif, tu empruntes contre lui, tu rachètes du même actif avec ce que tu as emprunté, et tu recommences. Ce qui demandait une dizaine de transactions à la main se fait désormais **en une seule**. Pendle ne prête rien lui-même : l'emprunt se fait sur des plateformes de prêt existantes, **Morpho et Aave**.

[def | `looping`] **Looping**
Répéter le cycle « déposer un actif en garantie → emprunter → racheter du même actif → le redéposer ». Chaque tour grossit ta position, donc tes gains comme tes pertes, et rapproche ton seuil de liquidation.

[p]
**⬡ Pour rappel.** A la base, Pendle sépare la possession d'un actif à rendement de son rendement, comme la nue-propriété et l'usufruit. Le **PT** (*Principal Token*) te rend l'actif à une date fixée : acheté moins cher aujourd'hui, il offre un **rendement fixe**. Le **YT** (*Yield Token*) touche le rendement variable d'ici là. Pendle proposait déjà de boucler des PT. PendleLoop étend le looping à des actifs **sans échéance** et au **pari sur le prix**, y compris sur des **actions tokenisées**.

[st] Comment ça marche

[p]
**⬡ 1. Choisir le mode.** L'interface propose deux usages, et les résume elle-même en trois critères :

[liste]
- **Loop to Earn** (« boucler pour gagner ») : pas de pari sur le prix. Ta garantie et ta dette sont **liées au même actif** : Par exemple du sUSDS (un dollar à rendement) contre de l'USDT emprunté, ou du wstETH (de l'ETH staké) contre de l'ETH emprunté. Ta garantie prend lentement de la valeur par rapport à ta dette, grâce à son rendement : c'est précisément ce que tu gagnes. Tu gagnes grâce au **rendement** ; le chiffre à surveiller, c'est le **taux d'emprunt** par rapport au taux de rendement.
- **Loop to Long/Short** (« boucler pour parier sur le prix ») : ta garantie et ta dette **ne sont pas liées au même actif**. En *long*, tu déposes un actif dont le prix varie (ETH, Bitcoin ou une action) et tu empruntes de l'USDC ou de l'USDT : si le prix monte, ta garantie prend de la valeur alors que ta dette reste la même. En *short*, c'est l'inverse : tu déposes des dollars et tu empruntes de l'ETH ; si l'ETH baisse, ta dette diminue en valeur. Le chiffre à surveiller, c'est le **prix de liquidation**.

[image | site/public/numeros/9/01-pendleloop-deux-modes.png | Les deux modes de PendleLoop. Pendle résume chacun en trois critères : le lien entre garantie et dette, ce qui te fait gagner, ce qu'il faut surveiller.]

[p]
**Quels actifs dans chaque mode ?** En Loop to Earn, des PT (rendement **fixe** jusqu'à l'échéance) ou directement l'actif à rendement, sans échéance, comme le sUSDS ou le wstETH. En Long/Short, pas de PT : des cryptos et les actions tokenisées. 

[p]
Le mode **Long sur actions** constitue la vraie nouveauté.

[p]
**⬡ 2. Choisir l'actif.** L'onglet *Stocks* liste **7 actions tokenisées** émises par Coinbase sur Base (sa blockchain) : Tesla, Google, Nvidia, Microsoft, Apple, Amazon et Meta, sous les noms TSLAc, GOOGLc, etc. Une [action tokenisée](https://www.cryptoluciole.com/glossaire/action-tokenisee) est une action représentée par un jeton sur une blockchain. Ici, tu empruntes de l'USDC contre elle sur **Aave V4**. Le levier maximum va de **2,6x** (Tesla, Meta) à **4,2x** (Microsoft) : il dépend du seuil de liquidation qu'Aave fixe pour chaque action (on y revient à l'étape 4).

[image | site/public/numeros/9/02-pendleloop-actions-liste.png | Les 7 actions disponibles en long, avec leur levier maximum et le coût de détention à 2x (ici, une rémunération : « Earn 8,88 %/yr »). Relevé du 3 novembre 2026.]

[p]
**⬡ 3. Choisir le levier.** Le [levier](https://www.cryptoluciole.com/glossaire/levier) est le rapport entre la taille de ta position et ta mise. Tu déposes **100 $** d'USDC et tu choisis **2x** : PendleLoop emprunte 100 $ d'USDC et t'achète **200 $ de TSLAc** (100 × 2), placés en garantie. Si Tesla monte de 10 %, ta position vaut 220 $, tu dois toujours 100 $ : il te reste 120 $, soit **+20 %**. Si elle baisse de 10 %, il te reste 80 $, soit **−20 %**.

[p]
**⬡ 4. Lire le prix de liquidation.** Chaque marché a un seuil de sécurité, le **LLTV**.

[def | `ltv`] **LLTV (seuil de liquidation)**
La part maximale de la valeur de ta garantie que ta dette peut atteindre. Au-delà, la plateforme vend ta garantie pour rembourser le prêteur : c'est la [liquidation](https://www.cryptoluciole.com/glossaire/liquidation). Pour TSLAc, le LLTV est de 65 %.

[p]
Dans notre exemple à 2x, tu dois 100 $. Tu es liquidé quand 65 % de ta garantie ne couvre plus ces 100 $, soit quand tes 200 $ de TSLAc tombent à environ **154 $** (100 ÷ 0,65) : **une baisse d'environ 23 %**. Avec Tesla à environ **407 $** le 3 novembre, l'écran affiche un prix de liquidation d'environ **313 $**.

[image | site/public/numeros/9/03-pendleloop-tslac-liquidation.png | L'écran de position TSLAc à 2x : prix de liquidation 312,91 $ pour un cours de 406,78 $. Le « Health Factor » affiché (23,08 %) correspond à cet écart de 23 %. En haut, « Closes Fri 22:00 » : l'heure à laquelle le prix arrête de bouger pour le week-end.]

[p]
Plus tu pousses le curseur, plus cette marge fond :

[liste]
- à **1,5x** : liquidation après une baisse d'environ **49 %** ;
- à **2x** : environ **23 %** ;
- à **2,6x** (le maximum) : environ **5 %** (vers 385 $).

[p]
**⬡ 5. Confirmer.** Le dépôt, l'emprunt et le rachat partent en **une seule transaction**. Les frais de PendleLoop sont offerts jusqu'au 31 décembre (hors looping de PT) [À VÉRIFIER : niveau des frais ensuite].

[st] Le rendement

[p]
**⬡ Loop to Earn : un écart de taux, multiplié.** Ton actif rapporte un rendement, l'emprunt coûte un intérêt, et le levier amplifie l'écart. Exemple en chiffres ronds : un dollar à rendement qui rapporte **10 %**, de l'USDC emprunté à **6 %**, un levier de **3x**. Avec 100 $, tu détiens 300 $ et tu dois 200 $ :

[liste]
- tu touches 30 $ de rendement (300 × 10 %) ;
- tu paies 12 $ d'intérêts (200 × 6 %) ;
- il te reste **18 $, soit 18 % par an**, au lieu de 10 % sans boucle.

[p]
Si le taux d'emprunt monte à 12 %, il ne te reste plus que 6 $ (30 − 24) : **moins que sans levier**. C'est pour ça que Pendle désigne le taux d'emprunt comme le chiffre à surveiller. Boucler un PT fige le rendement de ta garantie, mais pas le coût de ta dette, qui reste variable.

[p]
**⬡ Long sur actions : pas de rendement, un pari sur le prix.** Une action tokenisée rapporte au mieux son dividende (Tesla n'en verse pas, et il reste faible pour ces valeurs), alors que l'USDC emprunté coûte un intérêt : environ **5 % par an** sur Aave. Normalement, **tenir la position te coûte donc de l'argent** chaque année. Ton gain vient uniquement de la hausse de l'action.

[p]
Le 4 novembre, c'est l'inverse : l'interface affiche, à 2x, **« Earn 8,68 %/an »**. Tu es payé pour tenir la position, grâce à des récompenses :

[liste]
- **2,97 %** de récompenses sur ta garantie, comptées deux fois puisqu'à 2x ta garantie vaut deux fois ta mise (2 × 2,97 = **5,94 %**) ;
- côté dette, l'USDC coûte **5,02 %** par an, mais quatre campagnes de récompenses en reversent **7,76 %** : il te reste **+2,74 %** ;
- au total, 5,94 + 2,74 = **8,68 % par an** sur ta mise.

[p]
Ces récompenses ont toutes une date de fin, et elles tombent dans les jours qui viennent. À taux d'emprunt inchangé, ta position à 2x :

[liste]
- **jusqu'au 5 novembre** : te rapporte 8,68 % par an ;
- **après le 5 novembre** (fin des récompenses sur la garantie) : environ +1 % ;
- **après le 6 novembre** (fin du bonus de Pendle) : te coûte environ 2 % par an ;
- **après le 12 novembre** : te coûte le taux d'emprunt plein, environ 5 % par an.

[st] Les risques — 🔴 Élevé

[p]
**Élevé pour le Long sur actions**, parce que tu cumules le levier et un prix qui peut baisser. Le risque est **moyen pour Loop to Earn** : la liquidation demande que ta garantie décroche par rapport à ta dette (le sUSDS par rapport au dollar, le wstETH par rapport à l'ETH), ce qui n'est pas censé arriver. Avec un PT, c'est un peu différent : si les taux montent avant l'échéance, son prix baisse par rapport à ta dette, et à fort levier ça peut suffire à te faire liquider. Dans tous les cas, un taux d'emprunt qui grimpe peut rendre la boucle perdante.

[p]
Le risque principal du Long sur actions, c'est **Pendle lui-même qui l'affiche**, dans un panneau consacré à l'oracle.

[image | site/public/numeros/9/04-pendleloop-risque-oracle.png | Le panneau de risque de l'oracle pour TSLAc, affiché par Pendle : note globale « Medium », et la ligne « Price Updates » marquée « Requires Attention ».]

[p]
**⬡ Le week-end, le prix ne bouge plus.** L'oracle, fourni par Chainlink, suit le cours de l'action Tesla : il **garde son dernier prix le week-end et les jours fériés**. Si une mauvaise nouvelle tombe le samedi, Tesla peut rouvrir le lundi nettement plus bas : le prix saute d'un coup, sans passer par les niveaux intermédiaires.

[p]
Exemple à 2,6x : ta marge n'est que d'environ 5 %. Tesla termine la semaine à 406 $ et rouvre le lundi à 380 $ (environ −6 %) : tu es **liquidé dès la mise à jour du prix**, sans avoir pu ajouter de garantie ni fermer ta position. Pour une action comme Tesla, un écart de 5 à 6 % entre deux séances n'a rien d'exceptionnel [À VÉRIFIER].

[p]
S'y ajoutent :

[liste]
- **Des règles qui peuvent changer sans préavis** : un petit groupe d'administrateurs d'Aave peut modifier la source de prix et le seuil de liquidation **sans délai**, donc déplacer ton prix de liquidation.
- **Une dépendance à Coinbase** : TSLAc est émis par une entité de Coinbase (Coinbase Onchain SPV, à Abou Dabi) et adossé à des actions conservées chez Alpaca, un courtier américain régulé : tu dépends donc aussi de Coinbase et d'Alpaca, pas seulement d'Aave et de Pendle. Ces jetons sont réservés aux non-Américains, et leur accès depuis la France n'est pas confirmé.
- **Une liquidité limitée** : environ **590 000 $** d'USDC disponibles à l'emprunt le 4 novembre, partagés entre les 7 actions et d'autres protocoles qui empruntent sur le même marché.
- **Des oracles qui ne suivent pas toujours le marché** (surtout en Loop to Earn) : sur Morpho, beaucoup de marchés de dollars à rendement et de PT n'utilisent pas le prix de marché, mais un prix calculé par une formule, voire fixé (hardcodé). Ça t'évite d'être liquidé sur un décrochage passager. Mais si l'actif s'effondre vraiment, l'écran continue d'afficher une position saine alors qu'elle ne vaut plus grand-chose. En novembre 2025, le xUSD de Stream Finance a perdu environ les trois quarts de sa valeur alors que des marchés le comptaient encore à prix fixe, à 1 $ : des prêteurs de Morpho ont subi des pertes. Avant de boucler, regarde quel oracle utilise le marché : Pendle le résume dans l'onglet *Looping Info* de chaque marché.
- **Un produit récent**, lancé il y a moins de deux semaines.

[p]
Et comme pour tout protocole DeFi, le risque de hack n'est jamais à exclure.

[st] Pourquoi ça compte

[p]
PendleLoop n'invente pas un nouveau produit : tout ce qu'il fait, tu pouvais le faire à la main sur Aave ou Morpho. Ce qu'il change, c'est l'accès : **le levier sur des actions que tu détiens vraiment, en une transaction**, depuis un wallet, sans courtier.

[p]
PendleLoop n'est pas le seul moyen de prendre du levier sur une action on-chain : les perps d'Hyperliquid le font déjà. La différence : ici tu détiens vraiment le jeton, et tu paies un taux d'emprunt au lieu d'un funding. Pendle affirme que c'est jusqu'à 70 % moins cher sur un an de données passées, mais c'est sa propre simulation, et le funding d'un perp change vite et peut être positif comme négatif : le chiffre est à ne pas prendre à la lettre.

[avis]
💡 **Notre avis :**

- **Ce qui est durable : l'outil.** Un levier sur les actions accessible en un clic est un vrai progrès. Mais le jeton a beau s'échanger le week-end, le prix qui décide de ta liquidation, lui, s'arrête le vendredi soir.
- **Ce qui est temporaire : la rémunération.** Les 8,68 % payés pour tenir un long à 2x viennent de récompenses qui s'arrêtent presque toutes d'ici au 12 novembre. Le bon calcul est celui sans récompenses : tenir une action à crédit coûte le taux d'emprunt de l'USDC.
- **Pour l'usage :** en Long sur actions, rester sur un levier bas (autour de 2x, soit environ 23 % de marge sur Tesla) et ne pas laisser une position proche du maximum ouverte le vendredi soir.

[p]
[→ Voir la fiche complète](https://www.cryptoluciole.com/protocoles/pendle)

---

## Notes du Rédacteur (hors texte, à ne pas assembler)

### Ce qui change en v2
- Coupes (vérificateur) : paragraphe PT Looping de juillet → demi-phrase ; parenthèse « étage 3 » ; paragraphe « transparence rare » ; « 5 signatures sur 8 » → « un petit groupe d'administrateurs d'Aave ».
- Badge unique 🔴 Élevé ; nuance Earn dans le paragraphe.
- Légende Health Factor reformulée (correspondance, pas définition) ; phrase « plus l'action est volatile… » remplacée (contredite par META 2,6x < NVDA 3,0x).
- Incertitude sur le bonus de +3 % écrite en clair ; taux d'emprunt USDC laissé en trou [À RELEVER] (3,67 % déduit, non publié).
- Ajouts : accès depuis la France, dépendance à Coinbase, jeton 24h/24 posé dans la section week-end ; prix arrondis au dollar dans le texte (légendes exactes).

### Calculs (à recontrôler par le fact-checker)
- Prix de liquidation = prix × (1 − 1/levier) ÷ LLTV. TSLAc 406,78 $, LLTV 65 % : 2x → 312,91 $ (−23,1 %) ; 2,6x → ≈ 385,1 $ (−5,3 %) ; 1,5x → ≈ 208,6 $ (−48,7 %).
- Coût de détention à 2x : 2 × 2,97 = 5,94 ; côté dette +2,94 = 6,61 − taux d'emprunt (déduit ≈ 3,67 %, à relever à l'écran le jour de l'envoi). Si le +3 % Pendle est inclus dans 6,61 % : 8,88 − 3 = 5,88 % après le 6/11.
- Exemple Loop to Earn (10 % / 6 % / 3x → 18 % ; 12 % → 6 %) : illustration en chiffres ronds.

### Notes pour le fact-checker
- Dates : PendleLoop 22/10/2026 (CryptoBriefing, idéalement une source Pendle) ; PT Looping bêta 17/07/2026 (blog Pendle Print).
- Marchés de prêt : PT Looping = Morpho + Aave V3 ; actions = Aave V4 sur Base.
- Émetteur Coinbase / chaîne Base / nature juridique du jeton ; accès depuis la France (KYC, restrictions géographiques) ; TSLAc échangeable 24h/24.
- Taux du 3/11 ~15 h à rafraîchir : 69,53 %, 46 marchés, 8,88 %, 2,97 %, 6,61 %, 1,23 M$, 848 k$ ; taux d'emprunt USDC Aave V4 Base à relever.
- Origine et fin des 2,97 % et du reste des 6,61 % (campagne Aave ?).
- « Écart de 5 à 6 % entre deux séances n'a rien d'exceptionnel pour Tesla » : à confirmer.

### Coupé volontairement (pour la fiche site `/protocoles/pendle`)
- PT Looping (bêta 17/07, plafond 500 000 $) ; multisig 5/8 sans délai, gouvernance Aave après 1 jour, conseil de risque ; oracle qui ne lit pas le marché du jeton ; plafond de l'oracle USDC ; multiplicateur de dividendes ; mécanique du short ; frais après le 31/12.
- Mention « rédigé avec l'aide de l'IA » à poser sur la page site (jamais dans le mail).

### Termes glossaire proposés
| Terme | Slug | Forme dans le texte | Statut |
|---|---|---|---|
| Looping | `looping` | encadré | NOUVEAU |
| LLTV (seuil de liquidation) | `ltv` | encadré | EXISTANT |
| Oracle | `oracle` | mention (encadré retiré à la demande de Marc) | EXISTANT |
| Levier | `levier` | lien + définition en ligne avec calcul | EXISTANT |
| Liquidation | `liquidation` | lien | EXISTANT |
| Action tokenisée | `action-tokenisee` | lien + glose en ligne | EXISTANT |
| PT / YT (Pendle) | `pt-yt` | défini dans « Pour rappel » | NOUVEAU (facultatif) |
