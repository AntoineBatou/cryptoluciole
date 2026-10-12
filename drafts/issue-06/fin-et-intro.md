# #6 — Intro + Au menu · DÉFINITIONS · À toi de jouer

> ✍️ Rédacteur. Brouillon v1, à valider par Marc. Exception validée par la session principale (envoi imminent) : les trois petits blocs restants sont regroupés dans un seul fichier.
> Notation des blocs : `[p]` paragraphe · `[menu]` bloc « Au menu » · `[def-puce | slug]` puce dorée de DÉFINITIONS · `[cta]` texte d'appel · `[sondage]` encadré vert du sondage A/B.
> Pas de SOUS LA LOUPE dans ce numéro (Pendle reporté au #7), donc absent du menu.

---

## 1. Intro

**Titre du numéro (`titre`, proposition)** : Les marchés de prédiction

**Objet de l'email (3 propositions, format des numéros précédents)** :
1. `CryptoLuciole #6 — Les marchés de prédiction, décryptés` (reco : même construction que le #2 et le #4)
2. `CryptoLuciole #6 — Quand un prix devient une probabilité`
3. `CryptoLuciole #6 — Marchés de prédiction : ce que dit le prix`

**Excerpt pour l'archive du site (`excerpt`)** :
Les marchés de prédiction expliqués simplement, les débuts d'Hyperliquid sur ce terrain, l'IA face à la sécurité des wallets, Robinhood Chain sans gas offert et la carte des actions tokenisées par blockchain.

---

[p]
Bonjour à toi 👋,

[p]
Content de te retrouver après un mois de pause : le dernier numéro date du 10 septembre. On reprend avec un sujet annoncé dès le [#1](https://www.cryptoluciole.com/numeros/1) sans avoir été expliqué : **les marchés de prédiction**, où le prix d'un pari se lit comme une probabilité.

[p]
Côté actus, les débuts d'Hyperliquid sur ce terrain, l'IA face à la sécurité des wallets, et Robinhood Chain sans gas offert.

[menu]
**Au menu :**
- 🔦 **On éclaire** — les marchés de prédiction, quand un prix devient une probabilité
- ✨ **Dans le faisceau** — les marchés de prédiction d'Hyperliquid · le « bunker mode » de Justin Drake · Robinhood Chain après la fin du gas offert
- 💡 **Ça brille** — 3,3 Md$ d'actions tokenisées, blockchain par blockchain
- 📊 **Les repères** — un mois en deux temps, la Fed en toile de fond
- 📖 **Définitions** — probabilité implicite, clé privée
- ✉️ **À toi de jouer** — ta question et un sondage

*(Les emojis du menu sont ceux des étiquettes de rubrique du gabarit, comme au #5 ; dans le corps du texte, il n'y en a qu'un : 👋.)*

---

## 2. 📖 DÉFINITIONS

[def-puce | `probabilite-implicite`]
**Probabilité implicite** — la probabilité qu'un prix « sous-entend ». Sur un marché de prédiction, un contrat qui paie 1 $ et s'échange à 0,62 $ traduit une estimation de 62 % : c'est l'avis des participants de cette plateforme, pas une prévision scientifique.

[def-puce | `cle-privee`]
**Clé privée** — le secret qui sert à signer chaque envoi depuis une adresse : qui la connaît peut vider cette adresse. Ta phrase de récupération permet de la retrouver ; ni l'une ni l'autre ne se communique, à personne.

### Pour l'assemblage : entrées `terms.ts` (3 termes, format exact du fichier, à ajouter dans `TERMES`)

```ts
  {
    slug: "marche-de-prediction",
    terme: "Marché de prédiction",
    definition:
      "Une plateforme où l'on achète et vend des contrats liés au résultat d'un événement : élection, match, décision de la Fed, prix du bitcoin à une date donnée… Chaque question se répond par oui ou par non. Le prix du contrat se forme entre participants, selon l'offre et la demande, et la valeur du OUI plus celle du NON font toujours 1 $. Une fois la réponse connue, le contrat gagnant vaut 1 $ et le perdant ne vaut plus rien. Les plus connus sont Polymarket et Kalshi.",
    numero: 6,
  },
  {
    slug: "probabilite-implicite",
    terme: "Probabilité implicite",
    definition:
      "La probabilité qu'un prix « sous-entend ». Sur un marché de prédiction, un contrat qui paie 1 $ et s'échange à 0,62 $ traduit une estimation collective de 62 % de chances. Ce n'est pas une prévision scientifique : c'est ce que les participants de cette plateforme sont prêts à payer, compte tenu de ce qu'ils savent. En pratique, les frais, l'écart entre prix d'achat et prix de vente et le petit nombre de participants sur certains marchés éloignent un peu le prix de cette probabilité.",
    numero: 6,
  },
  {
    slug: "cle-privee",
    terme: "Clé privée",
    definition:
      "Le secret qui sert à signer chaque envoi depuis une adresse : qui la connaît peut vider cette adresse. Ta phrase de récupération permet de la retrouver. De la clé privée, on calcule une clé publique, puis, par hachage (une empreinte qu'on ne calcule que dans un sens), ton adresse. Retrouver la clé privée à partir de la clé publique est aujourd'hui hors de portée : c'est ce qui protège les wallets.",
    numero: 6,
  },
```

Pour `issues.ts` (champ `definitions`), le texte des deux puces ci-dessus va dans `def`, avec `slug: "probabilite-implicite"` et `slug: "cle-privee"`.

---

## 3. ✉️ À toi de jouer

[cta]
Une question sur ce numéro, un point qui reste flou, un sujet que tu aimerais qu'on creuse ? **Réponds directement à ce mail** : je lis tout, et je réponds.

[sondage]
🗳️ **Un marché de prédiction, pour toi, c'est plutôt…** Réponds **A** ou **B** :
- **A.** Un pari, avec de l'argent en jeu
- **B.** Un indicateur, à consulter sans miser

*Variantes écartées* :
- « Tu as déjà parié sur un marché de prédiction ? » (A. Oui / B. Jamais) : Polymarket est bloqué en France, donc la question invite à avouer un contournement, et la plupart répondront B.
- « Actions tokenisées : tu les garderais sur quelle blockchain ? » : trop proche d'une recommandation d'investissement, et abstrait pour un débutant.

---

## Notes du Rédacteur (hors texte, à ne pas assembler)

### Longueur (compte `wc`)
- Intro : ≈ 70 mots pour les trois paragraphes ; ≈ 150 avec le bloc « Au menu ».
- DÉFINITIONS : ≈ 85 mots pour les deux puces.
- À toi de jouer : ≈ 60 mots.
- Total des trois blocs à assembler : ≈ 300 mots (hors entrées `terms.ts`, titre, objet et excerpt).

### Choix et cohérence
- **Termes de DÉFINITIONS** : probabilité implicite + clé privée. Marché de prédiction est écarté de la rubrique, car c'est la notion de tout ON ÉCLAIRE : la redéfinir en fin de numéro serait une redite. Il reste bien ajouté au glossaire. Les deux puces reprennent le sens des encadrés validés (ON ÉCLAIRE, actu 2) sans les contredire ; la clé privée ajoute un réflexe concret (« ne se communique à personne »).
- **Sondage** : il reprend l'idée du « Notre avis » d'ON ÉCLAIRE (un pari, pas un placement, mais un prix utile comme indicateur). Les deux réponses ont donc du sens, y compris pour qui n'a jamais utilisé ces plateformes.
- **Ordre du menu** : ON ÉCLAIRE → FAISCEAU → ÇA BRILLE → REPÈRES, selon l'ordre de la consigne. Au #5, LES REPÈRES passait avant ÇA BRILLE. L'actu 3 renvoie à « plus bas, dans ÇA BRILLE », ce qui marche dans les deux cas. À aligner sur l'ordre réel de l'assemblage.
- **Format d'À toi de jouer** : le #5 n'en avait pas. J'ai donc repris le texte d'appel du #4 et l'encadré vert du sondage A/B du #1 et du #2.

### À vérifier
- **CLARITY Act** : le brief autorisait au plus une phrase dans l'intro. Je ne l'ai pas mise, pour tenir l'intro en trois phrases et parce que l'info a un mois. À ajouter si tu y tiens.
- **« Hors de portée aujourd'hui »** (entrée `cle-privee` du glossaire) : c'est cohérent avec l'avis de l'actu 2 (« rien n'est cassé à ce jour »), à garder en phase si le fact-check nuance.
- **Orthographe dans l'actu 2 (déjà validée, je n'y touche pas)** : « hashage » dans le corps, « hachage » plus loin. Le glossaire utilise « hachage ». Je le signale pour l'assemblage, avec « n'ayant jamais signée » dans l'avis (accord à vérifier : « signé »).
- **Lien #1** : l'intro renvoie au #1 comme ON ÉCLAIRE (« Au #1, on t'annonçait… »). Les deux phrases se suivent à peu de distance ; si ça fait doublon, on peut retirer « annoncé dès le #1 » de l'intro.

Seuls ces trois blocs ont été traités ; aucun autre fichier n'a été modifié (`terms.ts`, `issues.ts` et les emails sont intacts).
