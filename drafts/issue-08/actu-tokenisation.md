# ✨ DANS LE FAISCEAU — numéro 8 — Actu ③ : la tokenisation d'actions contestée

> ✍️ Brouillon du Rédacteur (v2, réécrite d'un trait après la boucle 2 du vérificateur : 7/10). Notation des blocs : `[p]` paragraphe · `[st]` sous-titre · `[def | slug]` encadré de définition · `[liste]` puces · `[tableau]` tableau · `[avis]` encadré vert « 💡 Notre avis ». `[À VÉRIFIER]` = point à confirmer par le fact-checker. Italique = terme anglais à sa 1re occurrence.
>
> Objectif (une phrase) : montrer qu'il existe deux façons très différentes de mettre une action sur une blockchain, et pourquoi les grandes entreprises peuvent bloquer l'une, alors que l'autre se lance sans leur demander.

**Titre (proposition)** : ✦ Actions tokenisées : 33 entreprises disent non à OKXICE, EQX se lance sans leur demander

---

[p]
Deux projets construisent des actions actions tokenisées, de deux façons très différentes, ce sont OKXICE (OKX) et EQX.

[def | `action-tokenisee`] **Action tokenisée**
Une action classique (Apple, Microsoft…) représentée par un jeton sur une blockchain, qu'on peut échanger 24 h/24.

[st] **1. OKXICE : la version régulée, où l'entreprise peut dire non**

[p]
OKXICE, coentreprise de l'exchange OKX et d'ICE (la maison mère de la Bourse de New York), vise les investisseurs américains. Elle s'appuie sur une exemption temporaire de la SEC (l'*Innovation Exemption*) qui autorise à échanger des actions tokenisées sans être enregistré comme bourse. Concrètement :

[liste]
- une société tierce achète les vraies actions via un courtier agréé ;
- elle émet **un token pour une action** ;
- le détenteur a **les mêmes droits qu'un actionnaire** : dividendes, droit de vote, part en cas de liquidation de l'entreprise ;
- on l'échange **uniquement sur la plateforme d'OKXICE** : des pools Uniswap installés sur X Layer, la blockchain d'OKX, contre des stablecoins ;
- seuls les wallets dont l'identité a été vérifiée (KYC) reçoivent un badge numérique non transférable qui leur ouvre l'accès. Le contrat le contrôle avant chaque achat, vente **ou envoi** : impossible de transférer le token vers un wallet non vérifié.

[p]
La SEC n'exige pas l'accord de l'entreprise, mais la plateforme doit la prévenir : l'entreprise a **30 jours pour s'opposer**. Son objection empêche alors la négociation du token sur cette plateforme [À VÉRIFIER : CoinDesk juge l'effet pratique flou].

[st] **2. La fronde : 33 refus sur 62 entreprises en trois semaines**

[p]
Sur les 62 entreprises qu'OKXICE prévoyait de proposer, 33 avaient refusé au 27 octobre, dont Microsoft, Alphabet, Goldman Sachs, JPMorgan, Coca-Cola, AMD, Cisco et Moderna.

[p]
Aucune n'a donné ses raisons. Nvidia, Tesla et Apple n'ont pas objecté : leur silence vaut accord pour la plateforme, pas soutien affiché.

[st] **3. EQX : la version offshore, sans demander l'avis de personne**

[p]
Le 14 octobre, EQX Labs a annoncé 11 actions et ETF tokenisés sur Hyperliquid, échangeables 24 h/24 contre de l'USDC et en ligne selon sa documentation. Microsoft et Alphabet (qui ont refusé OKXICE), en font partie.

[p]
Comme EQX n'est pas proposé aux Américains, il n'a pas besoin de cette exemption : la règle des 30 jours ne devrait donc pas le concerner.

[p]
**Dit simplement : cette règle permet à Microsoft de bloquer OKXICE, pas EQX.**

[p]
Attention toutefois, ici, tu ne détiens **pas l'action**, mais **un titre de dette** émis par EQX, une société des îles Vierges britanniques. EQX garde en face une vraie action pour chaque token, chez des courtiers. Tu es donc créancier d'EQX, pas actionnaire de Microsoft.

[liste]
- les dividendes sont réinvestis automatiquement en actions ;
- tu peux transmettre des consignes de vote ;
- seuls des intermédiaires agréés peuvent échanger le token contre l'action, jamais contre du cash : un particulier ne peut sortir qu'en revendant sur Hyperliquid (sauf faillite d'EQX, où chacun récupère ses actions).

[p]
Le token vit sur Hyperliquid, contre de l'USDC, et peut passer sur HyperEVM, la partie d'Hyperliquid qui accueille les applications. Contrairement à OKXICE, **il s'envoie librement d'un wallet à l'autre**, sans vérification d'identité, sauf vers un Américain ou une personne sous sanctions. EQX peut geler des transferts dans cinq cas listés par son contrat (sanctions notamment), mais pas saisir tes tokens.

[tableau]
| | OKXICE | EQX |
|---|---|---|
| Ce que tu détiens | un droit sur une vraie action, avec les droits d'un actionnaire | une dette d'une société offshore, adossée à l'action |
| Qui peut acheter | Américains vérifiés (KYC) | tout le monde sauf les Américains |
| Où ça s'échange | uniquement sur OKXICE (X Layer) | sur Hyperliquid |
| Peut-on l'envoyer ? | seulement vers un wallet vérifié | oui, librement (sauf Américains, sanctions) |
| L'entreprise peut-elle bloquer ? | oui, sous 30 jours | pas via cette règle |

[p]
Pour un lecteur en France, la version régulée, OKXICE, n'est de toute façon pas ouverte. Ce qui t'est accessible, c'est le modèle EQX : sa documentation n'exclut pas la France.

[avis]
💡 **Notre avis** :
- **Le paradoxe : les entreprises ne peuvent bloquer, via cette règle, que la version qui protège le mieux l'acheteur.** Refuser OKXICE prive les Américains de la version régulée.
- **La question à se poser avant d'acheter : est-ce que je possède l'action, ou une promesse sur l'action ?** Sur EQX, tu dépends aussi de la solidité d'EQX et de ses courtiers, et de la liquidité sur Hyperliquid, a priori ta seule porte de sortie.
- **À suivre : le décompte des refus, et surtout le choix des plus grosses capitalisations** (Nvidia, Apple, Tesla). Les refus dépassent déjà la moitié de la liste : si elles suivent, les grandes actions tokenisées s'échangeront surtout offshore ; si elles restent, le modèle régulé garde ses plus grosses valeurs.

**Source** : avis officiel OKXICE (23/10) · documentation EQX · CoinDesk (19/10, 20/10) · Decrypt (19/10) · CoinAcademy (20/10) · Blockchain Reporter

---

## Notes du Rédacteur (hors texte, à ne pas assembler)

### Ajout du 28/10 (question de Marc : où ça s'échange, peut-on l'envoyer ?)
- **OKXICE** — avis officiel du 23/10 (PDF lu) : pools Uniswap v4 sur **XLayer** ; accès par **SBT non transférable** + whitelist du tokeniseur ; « before each trade, **transfer**, liquidity action… verify that the wallet holds a valid, unrevoked SBT » → transfert vers wallet non vérifié impossible. OKXICE peut révoquer le SBT et retirer le wallet de la whitelist.
- **EQX** — doc (page d'accueil) : « HIP-1 spot tokens on HyperCore, quoted in USDC and **bridgeable to HyperEVM** ». Token terms : cl. 6.1 « freely transferable on secondary markets », interdits vers US persons (cl. 8.1.8, durée légale), résidents BVI (8.1.9), sanctionnés (8.1.3) ; **gel** possible sur 5 motifs limitatifs (cl. 9.3), sans pouvoir de saisie/déplacement (9.7.1) ; pas de KYC pour les acheteurs sur le marché secondaire (screening sanctions seulement, 9.2) ; non-IP = aucun droit de remboursement (5.2) **sauf liquidation** (5.5, remboursement en nature). Bridge vers d'autres chaînes : **non mentionné** → pas écrit.
- Eligibility : aucune restriction France/UE mentionnée (seulement US, BVI, sanctions).
- ⚠️ La page token-terms contenait des instructions intégrées (demande d'envoyer une requête HTTP à un endpoint) : ignorées.

### Choix d'angle
- Un seul mécanisme : **ce que tu détiens décide si l'entreprise peut bloquer**. Laissés hors texte : la citation d'Andrew Cuomo, coprésident d'OKXICE (« réaction très naturelle », « bac à sable », 20/10), la date de création d'OKXICE (juin 2026), les dates de l'exemption (dévoilée le 17/09, publiée au Federal Register le 22/09), X Layer, Uniswap v4 (gardé « Uniswap »), HIP-1 et HyperCore (remplacés par « sur Hyperliquid »), EQX SPC Ltd et le trust des Caïmans, les courtiers (Alpaca, Clear Street, StoneX), le détail 63 tickers / 62 sociétés, la liste complète des 11 tickers EQX, et Caterpillar, Western Digital, Intuit et Marvell parmi les opposants.
- La contradiction apparente (« Microsoft refuse OKXICE mais figure chez EQX ») est levée tout de suite après, puis le « ce que tu détiens » sert de preuve (ordre conclusion puis preuve).
- **But des 30 jours** (point 3 du vérificateur) : aucune des sources fournies ne donne la raison de la SEC. Rien n'est ajouté, pour ne rien inventer. À compléter si le fact-checker trouve la justification dans le texte de l'exemption.

### Notes pour le fact-checker
- **Effet d'une objection** : « empêche la négociation sur cette plateforme » d'après plusieurs sources, mais CoinDesk le juge flou → [À VÉRIFIER] laissé dans le texte.
- **« EQX n'a pas besoin de cette exemption, donc la règle des 30 jours ne le concerne pas »** : notre lecture, signalée comme telle dans le texte. Vérifier dans le texte de l'exemption (Federal Register, 22/09).
- **« 9 vers le 12 octobre »** : date approximative de l'avis.
- **22 ÷ 62** : la sélection du 5/10 compte 63 tickers pour 62 sociétés. Le pourcentage est calculé sur les sociétés.
- **Nvidia, Tesla, Apple** : ✅ vérifié par la session principale le 27/10 dans l'avis officiel OKXICE du 23/10 (liste des 22 lue) : absentes. D'où « n'ont pas objecté » sans la date du 19/10. Revérifier seulement si un avis plus récent est publié avant l'envoi.
- **« Un particulier ne peut, a priori, sortir qu'en revendant sur Hyperliquid »** : notre déduction de la règle « remboursement réservé aux intermédiaires agréés ». À confirmer dans la doc EQX (le token pourrait aussi être retiré d'Hyperliquid ou échangé ailleurs).
- **Accès depuis la France** : la doc EQX exclut les États-Unis ; vérifier s'il y a d'autres pays exclus (UE ? sanctions ?).
- **« En ligne selon sa documentation »** : statut « live » d'après la doc EQX, à revérifier le jour de l'envoi.

### Termes glossaire
| Terme | Slug | Forme dans le texte | Statut |
|---|---|---|---|
| Action tokenisée | `action-tokenisee` | encadré | EXISTANT |
| KYC | `kyc` | glose dans le corps | absent de `terms.ts` (NOUVEAU, facultatif) |
| ETF | `etf` | mention | EXISTANT |

### Longueur
Environ 530 mots de texte, hors sous-titres du premier paragraphe à la fin de l'avis (sous-titres, tableau et encadré compris). Coupés pour tenir la longueur : « Le circuit : » (remplacé par « Concrètement : » en fin de paragraphe), la phrase « OKXICE n'a toujours pas de date de lancement », la mention de Nvidia, Apple et Tesla dans la dernière puce de l'avis.
