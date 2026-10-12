# ✨ DANS LE FAISCEAU — #6 — Actu 2 : Justin Drake et le « bunker mode »

> ✍️ Brouillon du Rédacteur (v2 + retouches, vérificateur 8,5/10, boucle 1 du vérificateur) — à valider par Marc. Notation des blocs : `[p]` paragraphe · `[st]` sous-titre · `[def | slug]` encadré de définition · `[liste]` puces · `[avis]` encadré vert « 💡 Notre avis ».

**Titre (proposition)** : ✦ IA et sécurité des wallets : un chercheur d'Ethereum propose un « bunker mode »

---

[p]
Le 6 octobre, OpenAI a publié plusieurs centaines de résultats mathématiques obtenus par une IA, sans rien sur la cryptographie des blockchains. C'est la vitesse de ces progrès qui a fait réagir, le lendemain, **Justin Drake**, chercheur à la Fondation Ethereum : il a appelé à se préparer « calmement » à un « bunker mode ».

[p]
Selon lui, l'IA pourrait casser **ECDSA**, la signature qui protège les wallets, **avant les ordinateurs quantiques**. Au pire, « en mois, pas en années ». 

[st] **Ce qui serait menacé**

[def | cle-privee] **Clé privée**
Le secret qui sert à signer chaque envoi depuis une adresse : qui la connaît peut la vider. Ta phrase de récupération permet de la retrouver.

[p]
De ta clé privée, on calcule une **clé publique**, puis, par un **hachage** (une empreinte qu'on ne calcule que dans un sens), ton adresse. Casser ECDSA, ce serait remonter de la clé publique à la clé privée. Drake parlerait de cassage le jour où on pourrait le faire en une semaine environ, avec un gros parc de cartes graphiques.

[p]
Sur Ethereum, ta clé publique n'apparaît sur la blockchain qu'au moment où ton adresse **envoie** une transaction : **une adresse qui n'a fait que recevoir mais n'a jamais signé de transaction garde sa clé cachée.** Mais presque tous les comptes actifs ont déjà envoyé : leur clé publique est visible. 

[st] **Le « bunker mode »**

[p]
Il s'agit de déplacer ses fonds, sans précipitation, vers des **adresses neuves qui n'ont jamais envoyé de transaction**, en commençant par les gros détenteurs (plateformes d'échange, émetteurs de stablecoins). À long terme, il faudrait une cryptographie fondée uniquement sur le hachage, qui offre beaucoup moins de prise à ce type d'attaque.

[p]
**Vitalik Buterin**, cofondateur d'Ethereum, prend le risque au sérieux mais déconseille de se précipiter pour déplacer ses fonds : il dit avoir perdu plus d'argent dans des migrations ratées que dans tous les piratages réunis.

[avis]
💡 **Notre avis** : rien n'est cassé à ce jour, il ne s'agit que d'hypothèses de scénario à venir. Le réflexe simple (sur Ethereum) : garder une adresse de stockage n'ayant jamais signé de transaction, distincte de celle qui sert aux opérations.

**Source** : Forklog (8/10) · CryptoSlate (8/10) · Cointelegraph via TradingView · Yahoo Finance / Cryptonews

---

## Notes du Rédacteur (hors texte, à ne pas assembler)

### Termes
| Terme | Slug | Statut |
|---|---|---|
| Clé privée | `cle-privee` | **NOUVEAU**, seul encadré de définition, à créer dans le glossaire |
| Clé publique, adresse | — | pas de fiche ; expliquées dans la phrase |
| Hachage | — | en gras, glosé inline (« une empreinte qu'on ne calcule que dans un sens ») ; pas de fiche glossaire, à créer éventuellement (`hachage`) |
| Stablecoin | `stablecoin` | EXISTANT (#3), lien possible sur « stablecoins » (plus en gras) |
| ECDSA | — | nommé une fois, glosé inline (« la signature qui protège les wallets ») |
| Taproot | — | cité comme exemple d'adresse Bitcoin, non défini (un nom de type d'adresse suffit ici) |
| Post-quantique | — | entre guillemets, non défini (les ordinateurs quantiques sont cités plus haut) ; « lattices » et ML-DSA volontairement absents |

### Points `[À VÉRIFIER]` (pour le fact-check)
- **Citations de Drake** (« calmement », « bunker mode », « en mois, pas en années ») : paraphrases tirées de la presse, sans transcription du fil X. À confirmer sur X.
- **Propos de Buterin** : rendus au style indirect (déconseille de déplacer ses fonds aujourd'hui ; migrations ratées > piratages). À vérifier sur X avant de mettre quoi que ce soit entre guillemets.
- **« Plusieurs centaines de résultats »** : les notes donnent 722 ; arrondi volontaire. On peut remettre le nombre exact.
- **Seuil de « cassage » selon Drake** (une semaine, gros parc de cartes graphiques) : c'est sa définition du seuil, pas une capacité actuelle, d'après la presse.
- **Bitcoin, Taproot et P2PK** : les adresses Taproot (bc1p…) et les très anciennes sorties P2PK publient la clé publique dès la réception. Pour les autres types, la clé apparaît au premier envoi, sauf réutilisation d'adresse. Fait confirmé par le coordinateur, à recouper au fact-check. Le texte ne nomme que Taproot (« certaines, dont les récentes Taproot »).
- **« Uniquement sur le hachage… moins de prise »** : d'après les notes, Drake et Buterin poussent tous deux vers des signatures basées uniquement sur le hachage, parce que les fonctions de hachage ont peu de structure mathématique exploitable.
- **« D'ici deux ans »** (protections post-quantiques, Buterin) : d'après CryptoSlate et Cointelegraph uniquement.
- **Gros détenteurs** : Drake cite Binance, Tether, Robinhood, Bitfinex (pour leurs portefeuilles stockés hors ligne). Résumés en « plateformes d'échange, émetteurs de stablecoins ».
- **Exclus volontairement** : le « 7 M BTC exposés », les accusations de censure, la consigne « après chaque envoi, déplacer le reste vers une nouvelle adresse ».

### Longueur
≈ 420 mots du premier paragraphe à la fin de l'avis (sous-titres et encadré compris, hors titre et ligne Source) ; l'avis en fait ≈ 85. Au-dessus de la cible de 360 à cause des ajouts demandés (Bitcoin, hachage, définition étoffée, chaîne de cause). Pistes pour couper si besoin : la seconde phrase de l'encadré (« Ton wallet la garde pour toi… »), ou la phrase de l'avis « Sur Ethereum, une adresse qui n'a jamais envoyé… », qui redit la phrase en gras du corps (le réflexe resterait compréhensible sans elle).

### Points qui demandent l'avis de Marc
- **Le réflexe de l'avis** (adresse de stockage distincte) est désormais écrit : il reste formulé comme une habitude de sécurité, sans recommandation d'investissement.
- **« Souvent »** dans « ta clé publique n'apparaît souvent… qu'au moment où ton adresse envoie » : c'est ce qui rend la règle générale compatible avec l'exception Bitcoin. À garder ou à reformuler.
- **Titre** : variante plus courte, « ✦ Le "bunker mode" de Justin Drake ».
