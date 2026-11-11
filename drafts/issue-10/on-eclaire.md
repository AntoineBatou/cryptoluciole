# 🔦 ON ÉCLAIRE — numéro 10

> ✍️ Brouillon du Rédacteur (v2.1, note 8,5/10 du vérificateur + retouches finales). Objectif en une phrase : **comprendre qu'un wallet à connexion Google ou Apple a bien une clé privée, découpée en plusieurs parts dont une est gérée par un fournisseur, et ce que ça change pour ta sécurité (illustré par l'incident Keplr / Web3Auth).** Notation des blocs : `[p]` paragraphe · `[st]` amorce dorée « ⬡ … » · `[def | slug]` encadré de définition · `[liste]` · `[tableau]` · `[avis]` encadré vert « 💡 Notre avis ».

**Titre proposé :** Les wallets à connexion Google ou Apple : où sont vraiment tes clés ?

---

[p]
Début novembre, des utilisateurs de Keplr, un wallet très utilisé dans l'écosystème Cosmos, qui se connectaient avec leur compte Google ou Apple, ont vu leurs fonds disparaître.

[p]
Ils n'avaient jamais noté de seed phrase. Ils avaient pourtant une **clé privée**, et c'est elle qui a fuité. Ces wallets sans phrase de récupération s'appellent des ***embedded wallets*** (wallets à connexion sociale).

[def | `embedded-wallet`] **Embedded wallet (wallet à connexion sociale)**
Wallet intégré directement dans une application, on s'y connecte avec un compte qu'on a déjà (Google, Apple, e-mail). Pas de logiciel à installer, pas de seed phrase à recopier. La clé privée est découpée en plusieurs morceaux : l'un reste sur ton appareil, un autre est géré par un fournisseur spécialisé.

[st] **⬡ Le principe : pas de seed phrase, mais une clé quand même.**

[p]
Sur la blockchain, rien ne change : ton adresse est contrôlée par une clé privée, et quiconque la détient peut signer à ta place. Ce qui change, c'est **la façon de garder cette clé**.

[p]
Avec un wallet classique, ton appareil crée la clé et te la confie sous forme de seed phrase : une série de mots dont tu es le seul gardien. Avec un embedded wallet, la clé est **découpée en plusieurs morceaux**, rangés à des endroits différents. Aucun de ces morceaux ne suffit seul à signer une transaction ; il en faut un nombre minimum.

[st] **⬡ En pratique : ce qui se passe quand tu cliques « Continuer avec Google ».**

[p]
Le schéma de base est le suivant :

[liste]
- **À la création du compte**, la clé est générée directement en **trois parties**. Deux suffisent pour signer.
- **La première partie reste sur ton appareil** (ton téléphone ou ton navigateur).
- **La deuxième est gérée par l'infrastructure du fournisseur** : elle ne t'est remise que lorsque tu prouves ton identité en te connectant à ton compte Google ou Apple.
- **La troisième est une part de secours** : un mot de passe, un fichier ou un second appareil, pour retrouver l'accès si tu perds ton téléphone.
- **À chaque connexion**, ton appareil récupère la deuxième part et l'associe à la première : tu peux signer.

[p]
Selon la technique utilisée, cette dernière étape se passe de deux façons. Soit les deux parts sont **réassemblées sur ton appareil** le temps de signer, et la clé complète existe alors, un instant, à un endroit. Soit chaque part **participe à la signature de son côté**, et la clé n'est jamais réunie : c'est ce qu'on appelle le **MPC**.

[def | `mpc`] **MPC (*Multi-Party Computation*)**
Calcul multipartite : une technique qui permet à plusieurs parties de produire ensemble une signature sans jamais réunir la clé privée en un seul endroit.

[st] **⬡ En théorie, personne ne tient ta clé seul. En pratique…**

[p]
En théorie, ce découpage protège bien : un pirate qui vole ton téléphone n'a qu'une part, et le fournisseur n'en a qu'une autre. C'est pourquoi ces wallets sont présentés comme ***non-custodial*** : personne d'autre que toi n'est censé pouvoir déplacer tes fonds.

[p]
En pratique, le fournisseur ne garde pas seulement une part. Il écrit aussi le logiciel qui crée la clé et la découpe, et il fait tourner les serveurs qui délivrent sa part à chaque connexion. Si ce système a une faille, les protections du découpage peuvent tomber d'un coup, quel que soit le soin que tu mets à protéger ton compte Google.

[p]
Dit simplement : **ta sécurité ne dépend plus seulement de toi, mais aussi de l'infrastructure du fournisseur.**

[st] **⬡ Le cas Keplr / Web3Auth.**

[p]
Ce qui est établi à ce jour :

[liste]
- **Le 6 novembre au soir**, Web3Auth, le fournisseur de ces comptes (filiale de Consensys, la société derrière MetaMask, depuis 2025), suspend ses embedded wallets.
- **Le 7 novembre**, Keplr suspend la connexion par Google et Apple après des transactions non autorisées.
- **Le même jour**, Web3Auth attribue la cause à une faille de son infrastructure ayant exposé des clés privées.
- **Le 8 novembre**, Web3Auth indique avoir lui-même déplacé les fonds des wallets encore exposés vers des adresses de récupération, avant que l'attaquant ne les atteigne : environ **5,6 M$**, qu'il prépare à restituer avec Keplr. Dit simplement : le fournisseur a pu agir sur ces comptes sans leurs propriétaires, ce qui est impossible sur un wallet à seed phrase.

[p]
Ce qui ne l'est pas :

[liste]
- **Les pertes** : aucun montant volé ni nombre de comptes touchés n'a été confirmé officiellement, et aucun rapport détaillé de l'incident n'a été publié.

[st] **⬡ Embedded wallet ou wallet à seed phrase : ce qui change.**

[tableau]
| | Wallet à seed phrase | Embedded wallet |
|---|---|---|
| Qui crée la clé | Ton appareil | Le fournisseur et ton appareil, en plusieurs parts |
| Ce qui te donne accès | Ta seed phrase, toi seul | Ton compte Google ou Apple + ton appareil (ou la part de secours) |
| Si tu perds ton accès | Seed phrase perdue = fonds perdus | Récupération via la part de secours, si tu l'as configurée |
| De qui tu dépends | De toi | De toi, du fournisseur et de ses serveurs |

[p]
Dit simplement : l'embedded wallet échange **le risque de perdre ta seed phrase** contre **le risque lié au fournisseur**.

[p]
À ne pas confondre avec les smart accounts de [notre numéro 7](https://www.cryptoluciole.com/numeros/7), qui changent les règles du compte, pas la garde de la clé ; les deux peuvent se combiner : un embedded wallet peut servir de signataire à un smart account.

[st] **⬡ Les bons réflexes si tu utilises un embedded wallet.**

[liste]
- **Savoir qui garde ta clé.** Le nom du fournisseur apparaît souvent sur l'écran de connexion ou dans la documentation de l'application (par exemple Web3Auth, devenu MetaMask Embedded Wallets, ou Privy). Si une faille est annoncée chez lui, tu sauras que tu es concerné.
- **Exporter ta clé quand c'est possible**, et la ranger comme une seed phrase. Tu retrouves ainsi tes fonds même si le fournisseur suspend son service. Si ton compte est concerné par une faille, ne garde pas cette clé : déplace tes fonds vers une nouvelle seed phrase.
- **Pour ne plus dépendre du fournisseur**, transférer tes fonds vers un wallet à seed phrase créée par toi. Exporter la clé ne suffit pas : le fournisseur en garde toujours une part.
- **Y laisser de petites sommes.** L'embedded wallet est pratique pour tester une application ou payer de petits montants.

[avis]
💡 **Notre avis** : l'embedded wallet échange une garde par toi seul contre une garde partagée avec un fournisseur : il convient aux montants que tu acceptes d'exposer à son infrastructure, pas à ce que tu tiens à garder. L'incident Keplr ne condamne pas la technique du découpage, mais montre que sa sécurité vaut celle de l'infrastructure qui l'entoure.

---

## Notes du Rédacteur (hors texte, à ne pas assembler)

### Ce qui change en v2
- Correctifs 1 à 9 du vérificateur appliqués : transferts de sauvetage passés au conditionnel dans « ce qui ne l'est pas » ; balises [À VÉRIFIER] dans le corps ; intro réduite à une accroche sans date ; avis allégé ; incertitude sur la faille gardée seulement dans l'avis ; définition corrigée (pas custodial) ; métaphore du coffre et DKG retirées ; tableau à 2 colonnes et smart account réduit à une phrase ; terme *embedded wallet* (slug `embedded-wallet`) ; puce « Exporter » coupée en deux.
- Estimation « ~20 % des comptes » (Josh Lee, Chainapsis) et réseaux cités par la communauté (Injective, Osmosis, Cosmos Hub) : toujours omis, non vérifiés.

### Sources
- Incident : cryptoticker.io/en/keplr-wallet-web3auth-social-login-exploit/ (au 7/11) ; spendnode.io/blog/keplr-pauses-google-and-apple-login-after-unauthorized-transactions/ (cite Cointelegraph, Lookonchain, la page de statut Web3Auth et la doc sécurité de Keplr) ; veille/2026-11-09.md.
- Schéma 2 parts sur 3 (appareil / infrastructure via connexion OAuth / secours) et différence clé réassemblée (SSS) / jamais réunie (MPC) : documentation Web3Auth, titrée « MetaMask Embedded Wallets » — web3auth.io/docs/infrastructure/sss-architecture et /mpc-architecture.
- Clé privée hexadécimale au lieu d'une seed phrase chez Keplr : documentation sécurité de Keplr citée par SpendNode.

### Notes pour le fact-checker
- **Transferts de sauvetage** : source unique KuCoin News (relayée par Cryptoticker). Si rien de plus d'ici l'envoi, la puce peut sauter sans casser le texte.
- **Date du 6/11** : SpendNode situe l'alerte Cointelegraph au 7/11 à 9 h UTC ; Cryptoticker et la veille datent la suspension au 6/11.
- **Consensys depuis 2025**, **« devenu MetaMask Embedded Wallets »**, **export de la clé dans Keplr** (compte Google/Apple) : à confirmer.
- Vérifier le jour de l'envoi qu'aucun rapport d'incident n'a été publié (sinon mettre à jour la liste « ce qui ne l'est pas » et l'avis).

### Termes glossaire proposés
| Terme | Slug | Forme dans le texte | Statut |
|---|---|---|---|
| Embedded wallet (wallet à connexion sociale) | `embedded-wallet` | encadré | NOUVEAU |
| MPC | `mpc` | encadré | NOUVEAU |
| Clé privée | `cle-privee` | mention (déjà au glossaire) | EXISTANT |
| Smart account | lien numéro 7 | mention | EXISTANT |
