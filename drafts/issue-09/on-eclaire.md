# 🔦 ON ÉCLAIRE — numéro 9

> ✍️ Brouillon du Rédacteur (v2, après note 7/10 du vérificateur). Objectif en une phrase : **comprendre ce qu'est un *deposit token* et en quoi il diffère d'un stablecoin (qui te doit l'argent, garantie, rendement, qui peut le détenir), avec l'exemple de SoFi qui propose les deux.** Notation des blocs : `[p]` paragraphe · `[st]` amorce dorée « ⬡ … » · `[def | slug]` encadré de définition · `[liste]` · `[tableau]` · `[avis]` encadré vert « 💡 Notre avis ».

---

[p]
Quand tu déposes de l'argent sur ton compte, ta banque inscrit une ligne dans son registre interne : « elle te doit 1 000 € ». Un ***deposit token*** (ou **dépôt tokenisé**), c'est ce même dépôt, mais inscrit sous forme de jeton sur une blockchain.

[p]
Vu de loin, ça ressemble à un stablecoin : un jeton qui vaut une unité de monnaie (1 $, 1 €). Mais juridiquement, ce n'est pas le même objet, et cette différence est importante.

[def | `deposit-token`] **Deposit token (dépôt tokenisé)**
Dépôt bancaire représenté par un jeton sur une blockchain. 1 jeton = 1 unité de monnaie déposée à la banque, qui reste ta débitrice comme pour un compte classique.

[st] **⬡ La vraie question : qui te doit l'argent ?**

[p]
Avec un **stablecoin** comme l'USDC, tu as une créance sur un **émetteur qui n'est pas une banque** (ici Circle). Il garde tes dollars en réserve, placés ailleurs : bons du Trésor, comptes dans des banques. On l'a vu dans notre [numéro 3](https://www.cryptoluciole.com/numeros/3).

[p]
Avec un **deposit token**, tu as une créance **directement sur la banque**. Ton argent reste un dépôt bancaire ordinaire, que la banque utilise comme les autres (pour prêter, pour placer) ; la blockchain remplace seulement son registre interne.

[p]
Ce n'est donc pas plus sûr par nature : un stablecoin régulé est en principe couvert à 100 % par ses réserves, alors qu'une banque prête une partie des dépôts qu'elle reçoit. La différence porte sur la protection prévue si ça tourne mal, sur le rendement et sur l'accès.

[st] **⬡ La garantie : ce qui se passe si ça tourne mal.**

[p]
Si ta banque fait faillite, tes dépôts sont remboursés par un fonds public, jusqu'à un plafond.

[def | `garantie-des-depots`] **Garantie des dépôts (FGDR, FDIC)**
Mécanisme public qui rembourse les déposants si leur banque fait faillite, jusqu'à un plafond : 100 000 € par déposant et par banque en France (FGDR), 250 000 $ par déposant et par banque aux États-Unis (FDIC).

[p]
Le détenteur d'un stablecoin n'a pas cette protection. Les réserves de l'émetteur peuvent être déposées dans des banques assurées, mais c'est l'émetteur qui est client de ces banques, pas toi : si l'émetteur fait défaut, aucun fonds de garantie ne te rembourse.

[p]
Pour le deposit token, la FDIC a avancé en 2026 que le fait d'inscrire un dépôt sur une blockchain ne change pas, en soi, sa couverture. C'est une **position de principe, pas encore un texte définitif** : la règle peut encore évoluer.

[st] **⬡ Le rendement : ce que la loi interdit aux stablecoins.**

[p]
Le GENIUS Act, la loi américaine qui encadre les stablecoins depuis 2025, interdit à leurs émetteurs de verser un intérêt aux détenteurs. En Europe aussi, MiCA interdit aux émetteurs de stablecoins d'en verser (article 50 de MiCA). L'objectif : éviter que les stablecoins deviennent des substituts aux dépôts bancaires, et protéger ainsi les banques.

[p]
Une banque, elle, peut rémunérer un deposit token comme n'importe quel compte de dépôt : elle fait travailler ton dépôt et te reverse une partie de ce qu'il rapporte.

[st] **⬡ L'accès : un jeton qui ne circule pas librement.**

[p]
La plupart des deposit tokens existants aujourd'hui sont **permissionnés** : seuls les wallets approuvés par la banque, après vérification d'identité / **KYC**, peuvent les recevoir et les détenir. Tu ne peux pas les envoyer à n'importe quelle adresse, ni les déposer sur un protocole DeFi ouvert à tous.

[def | `kyc`] **KYC (*Know Your Customer*)**
Vérification d'identité imposée par la réglementation (pièce d'identité, justificatif de domicile…) avant d'ouvrir un compte ou d'accéder à un service financier.

[st] **⬡ En pratique : SoFi propose les deux.**

[p]
SoFi, une banque en ligne américaine grand public, illustre bien le compromis. Depuis le 22 octobre 2026, elle propose deux versions du même dollar :

[liste]
- **SoFi Earn (SOFIE)**, un deposit token : 1 SOFIE = 1 $ déposé chez SoFi Bank, rémunéré **4,40 % par an (taux variable)** [À VÉRIFIER le jour de l'envoi], que SoFi présente comme couvert par la FDIC dans les plafonds habituels (en cumulant ses autres dépôts chez SoFi). Il est ouvert d'abord aux clients de SoFi Crypto, avec un déploiement progressif.
- **SoFiUSD**, le stablecoin de SoFi : il peut circuler hors de la banque, mais ne rapporte rien et n'est pas couvert par la FDIC.

[p]
Les deux s'échangent 1 pour 1. Si tu as 1 000 SOFIE, tu touches environ 44 $ d'intérêts sur un an (1 000 × 4,40 %), avec la garantie FDIC. Tu les convertis en 1 000 SoFiUSD : tu peux les envoyer où tu veux, mais tu perds **à la fois l'intérêt et la garantie**.

[p]
Dit simplement : c'est le même dollar, et tu choisis entre **protégé et rémunéré** ou **libre de circuler**. Depuis la France, la question ne se pose pas encore : SOFIE est réservé aux clients américains de SoFi.

[st] **⬡ Où ça existe déjà ?**

[p]
Les dépôts tokenisés sont **très récents**. Jusqu'à cet automne, ils étaient réservés aux entreprises : SoFi se présente comme la première banque nationale américaine à en proposer un aux particuliers, et le sien n'est déployé que depuis le 22 octobre.

[tableau]
| Banque | Pour qui | Où | Quelle blockchain |
|---|---|---|---|
| SoFi (SOFIE) | Particuliers (clients SoFi Crypto) | États-Unis | Pas de jeton public repéré : SOFIE reste chez SoFi. Converti en SoFiUSD, il passe sur **Ethereum** (publique) |
| JPMorgan (JPMD) | Entreprises clientes | États-Unis | **Base et Ethereum** (publiques), mais réservé aux wallets approuvés |
| HSBC | Entreprises clientes | Hong Kong, Singapour, Royaume-Uni, Luxembourg, États-Unis ; plusieurs devises, dont l'euro | Un réseau **privé** de HSBC |
| Citi | Entreprises clientes | Sept pays, en dollars et en euros | Blockchain **privée** dont Citi est propriétaire |

[p]
En Europe, les dépôts tokenisés en euros existent déjà, mais pour les entreprises et sur des blockchains privées : HSBC les propose depuis le Luxembourg depuis septembre 2025, Citi depuis novembre 2025. Au Royaume-Uni, Lloyds a réalisé une première transaction en livres sterling tokenisées sur Canton, un réseau public conçu pour les institutions financières, et la néobanque Monument prépare une offre pour les particuliers. **Aucun deposit token en euros n'est aujourd'hui proposé aux particuliers.**

[p]
Dit simplement : « sur la blockchain » ne veut pas dire « ouvert à tous ». Même JPMorgan, qui passe par des blockchains publiques, ne laisse entrer que les wallets qu'il a validés.

[st] **⬡ En résumé.**

[tableau]
| | Stablecoin (ex. USDC) | Deposit token |
|---|---|---|
| Qui te doit l'argent | Un émetteur non bancaire | Ta banque |
| Où est ton argent | Dans des réserves placées ailleurs | Sur ton dépôt, que la banque fait travailler |
| Garantie des dépôts | Non | Oui, selon la position de la FDIC (non définitive) |
| Intérêt versé par l'émetteur | Interdit (GENIUS Act, MiCA) | Possible |
| Qui peut le détenir | N'importe quel wallet | Les wallets approuvés par la banque |

[avis]
💡 **Notre avis** : les premiers dépôts tokenisés apparaissent, et c'est un **changement de fond** : la banque inscrit ton argent sur une blockchain, et plus seulement dans son registre interne. Si le mouvement se généralise, il consacrerait le passage de la banque vers la blockchain. On n'y est pas encore : c'est très récent, réservé presque partout aux entreprises, et souvent sur des réseaux fermés. Le signal à surveiller : le jour où une banque européenne proposera à ses clients particuliers un deposit token en euros, sur une blockchain publique.
---

## Notes du Rédacteur (hors texte, à ne pas assembler)

### Ce qui change en v2
- Correctifs 1 à 11 du vérificateur appliqués. JPMorgan conservé en 2 lignes sous une amorce propre (montre que le mouvement touche aussi la plus grande banque, côté institutionnel). Tableau déplacé en synthèse finale, sans « (ex. SOFIE) ».

### Sources (brief du 2026-11-03)
- Différence créance banque / émetteur non bancaire : SoFi Learn, Finovate, Spark research.
- GENIUS Act (interdiction d'intérêt) ; absence de garantie pour les détenteurs de stablecoins ; position FDIC 2026 (proposition/clarification, non définitive).
- Permissionné / KYC / accès restreint : tendance générale des sources du brief.
- SoFi Earn (SOFIE) : The Block 22/10, Decrypt, PYMNTS, Crowdfund Insider.
- JPMD : Bloomberg (Ethereum, 19/10/2026, confirmé) ; Base pour institutionnels depuis le 12/11/2025.
- FGDR 100 000 € par déposant et par établissement : fait connu.

### Notes pour le fact-checker
- **4,40 %** de SOFIE : taux variable, à rafraîchir le jour de l'envoi (recalculer les 44 $ si besoin).
- **MiCA, article 50** : confirmer l'interdiction d'intérêt pour les émetteurs d'EMT (et les prestataires).
- **SOFIE réservé aux clients américains** : confirmer (SoFi est une banque US ; vérifier l'absence d'ouverture hors US).
- **SoFiUSD « peut circuler hors de la banque »** : vérifier les restrictions éventuelles de transfert.
- **FDIC 2026** : retrouver l'intitulé exact (proposition de règle, FAQ, discours ?).
- « JPMorgan, première banque américaine » : à confirmer (par actifs).
- « Un stablecoin régulé est en principe couvert à 100 % par ses réserves » : conforme au GENIUS Act (réserves 1:1) ; à confirmer d'un clic.
- **HSBC / PayMe** : volontairement non cité (nature exacte du jeton incertaine).

### Termes glossaire proposés
| Terme | Slug | Forme dans le texte | Statut |
|---|---|---|---|
| Deposit token (dépôt tokenisé) | `deposit-token` | encadré | NOUVEAU |
| Garantie des dépôts (FGDR, FDIC) | `garantie-des-depots` | encadré | NOUVEAU |
| KYC | `kyc` | encadré | NOUVEAU |
| Stablecoin | `stablecoin` | mention (déjà au glossaire) | EXISTANT |
