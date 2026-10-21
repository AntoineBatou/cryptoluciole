# 🔦 ON ÉCLAIRE — #7

> ✍️ Brouillon du Rédacteur (v2, 8,5/10 au vérificateur, boucle 2 + 4 retouches mineures) — à valider par Marc. Notation des blocs : `[p]` paragraphe · `[st]` amorce dorée « ⬡ … » · `[def | slug]` encadré de définition · `[liste]` puces · `[avis]` encadré vert « 💡 Notre avis ». Mot-clé teal du titre : *smart accounts*. Italique = terme anglais à sa 1re occurrence. `[lien glossaire → slug]` = terme en gras lié à `/glossaire/<slug>` dans le texte, sans encadré.

**Titre de la notion (proposition)** : Les *smart accounts* : un wallet qui applique tes règles

---

[p]
Depuis mai 2025, ton wallet peut devenir un *smart account*. Décryptons ensemble comment cela fonctionne et ce que ça apporte.

[st] **⬡ Le principe.**

[p]
Le wallet que tu utilises est ce qu'on appelle un **EOA**. Celui qui détient la clé privée peut tout faire, chaque action demande sa propre signature, et le gas se paie en ETH.

[def | `eoa`] **EOA (*Externally Owned Account*)**
Le compte « classique » d'une blockchain comme Ethereum : une adresse contrôlée par une seule clé privée, sans aucune règle supplémentaire. C'est le cas de la plupart des wallets (MetaMask, Rabby…) dans leur configuration d'origine.

[p]
Un **smart account** [lien glossaire → `smart-account`] est un compte dont les règles sont écrites dans un smart contract. C'est ce contrat qui décide :

[liste]
- **qui peut signer** (une clé, plusieurs (multisig), une empreinte digitale…) ;
- **jusqu'à quel montant** et **pendant combien de temps** ;
- **avec quel jeton on paie le gas**, et qui le paie.

[p]
Ces règles ne sont pas figées à la création : le code fixe ce qui est *possible*, et tu ajustes ensuite les réglages (ajouter un signataire, changer un plafond) par une transaction. Cette idée de rendre le compte programmable porte un nom : l'**abstraction de compte** [lien glossaire → `abstraction-de-compte`].

[p]
L'EOA est comme un coffre à clé unique : qui a la clé maîtrise tout, qui la perd perd tout. Le smart account se rapproche plutôt d'un compte bancaire, avec ses plafonds, ses procurations et ses cartes à usage limité.

[st] **⬡ Deux façons d'y passer.**

[liste]
- **ERC-4337 (mars 2023) : tu ouvres un nouveau compte.** [lien glossaire → `erc-4337`] Le smart account est un contrat dès sa création, avec une nouvelle adresse. Tu y transfères tes fonds depuis ton ancien wallet.
- **EIP-7702 (mai 2025) : tu équipes ton compte actuel.** [lien glossaire → `eip-7702`] Arrivé avec la mise à jour Pectra d'Ethereum, ce standard rend possible une opération nouvelle : la **délégation**. Tu signes, avec ta clé privée, une autorisation qui dit « mon adresse exécute désormais le code de tel smart contract ». Ton adresse devient alors un smart account : même adresse, mêmes fonds, rien à transférer.

[def | `delegation-7702`] **Délégation (EIP-7702)**
La signature qui relie ton adresse à un smart contract. EIP-7702 est la règle d'Ethereum qui l'autorise ; la délégation est l'acte que tu signes. Sans délégation, ton compte reste un EOA classique. Avec ERC-4337, il n'y en a pas : le compte est un contrat dès le départ.

[p]
Avec EIP-7702, **ta clé privée d'origine garde tous ses pouvoirs** : elle peut toujours tout signer seule, et aucune délégation ne peut la lui retirer. Conséquence : si ta seed phrase fuite, le smart account ne te protège pas. Son intérêt est ailleurs : le confort, et une clé que tu sors moins souvent au quotidien.

[p]
Une fois le compte en place, les fonctions sont presque les mêmes avec les deux standards. La vraie différence, c'est qui garde le dernier mot :

[tableau]
| | ERC-4337 | EIP-7702 |
|---|---|---|
| Adresse | Nouvelle | La tienne |
| Clé maîtresse | Aucune : seules les règles du contrat comptent | Ta clé d'origine, pour toujours |
| Plusieurs signataires, gardiens | Protègent vraiment | Contournables par ta clé d'origine |
| Usage type | Sécurité | Confort, sans migrer |

[p]
Dit simplement : **ERC-4337 apporte une vraie sécurité, car aucune clé maîtresse ne subsiste ; EIP-7702 apporte le confort du smart account sur ton compte actuel.**

[p]
**Et Safe ?** Safe (ex-Gnosis Safe, 2018 [À VÉRIFIER]) est un smart account plus ancien que ces deux standards, conçu pour le multisig. Il se range du côté d'ERC-4337 : nouvelle adresse, aucune clé maîtresse, et des signataires multiples qui protègent vraiment. Il peut d'ailleurs utiliser l'infrastructure d'ERC-4337 (paymasters, batching) grâce à un module [À VÉRIFIER].

[st] **⬡ Ce que ça change, concrètement.**

[p]
**Batching de transactions.** Tu veux déposer 1 000 USDC dans un vault. Avec un EOA, il faut deux transactions : l'approve, puis le dépôt. Deux signatures, deux fois du gas. Avec un smart account, les deux opérations partent dans une seule transaction : on parle de *batch* (regroupement). L'approve peut alors porter sur le montant exact du dépôt et être consommé aussitôt, sans laisser d'autorisation ouverte derrière toi. [À VÉRIFIER]

[p]
**Payer le gas en USDC.** Tu as 500 USDC et 0 ETH sur ton wallet. Avec un EOA, tu es bloqué : pour envoyer tes USDC, il faut d'abord faire venir de l'ETH pour le gas. Avec un smart account, les frais peuvent être prélevés directement sur tes USDC, ou pris en charge par l'application que tu utilises. C'est le rôle du *paymaster*.

[def | `paymaster`] **Paymaster**
Un smart contract qui avance le gas à ta place. Soit il se rembourse en prélevant l'équivalent dans un autre jeton (des USDC, par exemple), soit il est financé par une application qui offre les frais à ses utilisateurs.

[p]
**Laisser une appli agir pour toi, sans lui confier tes fonds.** Tu veux acheter de l'ETH automatiquement chaque semaine. Aujourd'hui, deux options :

[liste]
- signer chaque achat à la main ;
- déposer tes USDC chez un service qui les gère à ta place.

[p]
Avec un smart account, tu accordes à l'appli une *session key* : **50 USDC par semaine, uniquement pour acheter de l'ETH sur Uniswap, pendant 3 mois**. Tes fonds restent dans ton wallet, et l'appli ne peut rien faire d'autre.

[def | `session-key`] **Session key**
Une clé temporaire, aux pouvoirs limités, que ton smart account accorde à une application : un plafond de montant, une durée, parfois une liste d'opérations autorisées. Une fois la limite atteinte ou la durée écoulée, elle ne sert plus à rien.

[p]
**Ne plus dépendre d'une seule seed phrase.** Selon le wallet, un smart account peut aussi changer la façon dont tu contrôles ton compte :

[liste]
- **pour te connecter**, une *passkey* : ton empreinte ou la reconnaissance faciale de ton téléphone, sans seed phrase à recopier ;
- **pour récupérer ton compte**, des gardiens : par exemple 3 appareils ou personnes de confiance, dont 2 suffisent pour remplacer ta clé si tu perds ton téléphone. C'est ce qu'on appelle le *social recovery*.

[def | `passkey`] **Passkey et social recovery**
La *passkey* est une clé de connexion générée et stockée dans la puce sécurisée de ton téléphone ou de ton ordinateur ; elle se déverrouille par empreinte, visage ou code de l'appareil. Le ***social recovery*** permet de remplacer cette clé si tu la perds, avec l'accord d'un nombre minimum de gardiens désignés à l'avance.

[p]
Ces protections existent avec les deux standards, mais elles ne servent vraiment que sur un compte **sans clé maîtresse** (ERC-4337, Safe). Sur un compte EIP-7702, ta clé d'origine peut toujours tout faire seule : si ta seed phrase fuite, les gardiens n'y changent rien.

[p]
**Préparer l'après-quantique.** Un ordinateur quantique assez puissant pourrait un jour retrouver une clé privée à partir de la clé publique, visible dès ta première transaction. Sur un EOA, Ethereum impose un seul type de signature, celui qui est menacé. Sur un smart account, la vérification de la signature est du code : on peut y brancher des signatures conçues pour résister au quantique. C'est possible en théorie sur un compte ERC-4337, pas encore en pratique. Avec EIP-7702, en revanche, ça ne protège pas : ta clé d'origine reste maîtresse, et elle n'est pas résistante au quantique.

[st] **⬡ Le revers : le piège de la délégation.**

[p]
Une délégation EIP-7702 confie **toute ton adresse** au contrat désigné. Une seule signature suffit, il faut donc être vigilant face aux contrats malveillants. Le risque est de **signer une délégation sur un faux site**.

[st] **⬡ L'activer prudemment.**

[p]
Quelques wallets qui proposent des smart accounts :

[liste]
- **MetaMask** : propose de basculer ton compte en smart account (via EIP-7702, même adresse) quand une application demande une transaction groupée, sur un réseau compatible. [À VÉRIFIER : intitulé exact, réglage manuel dans les paramètres, liste des réseaux]
- **Safe** : le smart account multisig historique, avec plusieurs signataires (par exemple 2 signatures sur 3 pour valider un paiement). Très utilisé pour les gros montants et les trésoreries de projets. Nouvelle adresse.
- **Ambire** : wallet construit autour des smart accounts, compatible EIP-7702. [À VÉRIFIER]
- **Base Account** (ex-Coinbase Smart Wallet) : smart account ERC-4337 avec connexion par passkey, sans seed phrase. [À VÉRIFIER : nom actuel du produit]

[p]
Si on te propose de « mettre à niveau » ton wallet, trois réflexes :

[liste]
- **Une demande d'*upgrade* reçue par mail, message ou sur un site = du phishing.** Ton wallet ne te contacte pas pour ça.
- **Ne délègue qu'au contrat officiel proposé par ton wallet**, depuis son interface.
- **Si ton wallet affiche une délégation vers un contrat inconnu, refuse.**

[avis]
💡 **Notre avis** : pour un usage DeFi régulier, le smart account est un vrai progrès : moins de signatures, moins d'approves qui traînent, des plafonds qui limitent la casse. L'activer via le parcours officiel de ton wallet vaut le coup. 

[st] **⬡ Ce qu'il faut retenir.**

[liste]
- **Un smart account est un wallet programmable** : plafonds, opérations groupées, gas payé en USDC, récupération sans seed phrase selon le wallet.
- **Deux voies** : ERC-4337 crée un nouveau compte sans clé maîtresse, donc vraiment plus sûr ; EIP-7702 équipe ton compte actuel pour le confort, mais ta seed phrase y garde tous les pouvoirs.

---

## Notes du Rédacteur (hors texte, à ne pas assembler)

### Notes pour le fact-checker
- ERC-4337 : déploiement du contrat EntryPoint sur le mainnet Ethereum le **1er mars 2023** (annonce à l'EthDenver) — confirmer le mois.
- EIP-7702 : activé avec Pectra le **7 mai 2025** sur le mainnet Ethereum — confirmer.
- EIP-7702 : la clé privée d'origine garde tous ses pouvoirs après délégation.
- **Annulation d'une délégation** : possible en théorie (nouvelle délégation vers l'adresse nulle, signée avec la clé) ; vérifier qu'en pratique un sweeper aspire l'ETH envoyé pour le gas, ce qui bloque l'annulation (et si l'annulation peut être payée par un tiers/relayeur, nuancer).
- Batch approve + dépôt : vérifier qu'on peut écrire « peut porter sur le montant exact et être consommé aussitôt » (dépend de l'application).
- Paymaster : prélèvement du gas en USDC et sponsoring par l'appli (mécanisme ERC-4337 ; côté 7702, via paymasters ou services du type « Gas Station » de MetaMask — à confirmer).
- Passkey / gardiens : bien réservés à certaines implémentations ERC-4337 ; sur 7702 la seed phrase n'est pas remplacée.
- MetaMask : intitulé et parcours exacts de la bascule « smart account » (EIP-7702), réglage manuel, réseaux compatibles ; MetaMask bloque-t-il les demandes de délégation 7702 initiées par un site ? (si oui, ça renforce le réflexe n°2).
- Ambire : compatibilité EIP-7702.
- Coinbase Smart Wallet renommé **Base Account** (2025) : nom actuel, passkey, ERC-4337.
- Safe : « 2 sur 3 » = illustration, pas une configuration par défaut.
- (Retiré sur demande de Marc le 2026-10-19 : la statistique Wintermute « 97 % » et le cas Scam Sniffer — pas de stats alarmantes passées, on explique le mécanisme et le risque.)
- Exemples chiffrés (1 000 USDC, 500 USDC / 0 ETH, session key 50 USDC/semaine sur 3 mois, gardiens 2 sur 3) = illustrations inventées, pas des faits.
- Session key « achat programmé » : vérifier qu'un tel usage existe réellement (DCA via session keys / permissions ERC-7715 chez MetaMask, Base…).
- Quantique : EOA = ECDSA imposé par le protocole ; clé publique révélée à la 1re transaction ; signatures post-quantiques possibles en théorie dans un smart account 4337 (coût de vérification élevé, non standardisé) ; 7702 insuffisant car la clé ECDSA garde ses pouvoirs (sources ethresear.ch dans la conversation du 19/10).
- Tableau 4337 vs 7702 : nouveau bloc `tableau` à prévoir dans `NotionEl` (site) + table HTML dans l'email.

### Termes glossaire proposés
| Terme | Slug | Forme dans le texte | Statut |
|---|---|---|---|
| EOA | `eoa` | encadré | NOUVEAU |
| Délégation (EIP-7702) | `delegation-7702` | encadré | NOUVEAU (slug à trancher : `delegation-7702` ou `delegation`) |
| Paymaster | `paymaster` | encadré | NOUVEAU |
| Session key | `session-key` | encadré | NOUVEAU |
| Passkey et social recovery | `passkey` | encadré (fusionné) | NOUVEAU — prévoir peut-être `social-recovery` à part dans le glossaire |
| Smart account | `smart-account` | lien sur le terme en gras | NOUVEAU |
| ERC-4337 | `erc-4337` | lien sur le terme en gras | NOUVEAU |
| EIP-7702 | `eip-7702` | lien sur le terme en gras | NOUVEAU |
| Sweeper | `sweeper` | lien sur le terme en gras | NOUVEAU |
| Clé privée | `cle-privee` | simple mention | EXISTANT |
