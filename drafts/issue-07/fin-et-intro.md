# #7 — Intro + Au menu · DÉFINITIONS · À toi de jouer

> ✍️ Rédacteur. Brouillon v1, à valider par Marc. Même regroupement qu'au numéro 6 : les petits blocs restants tiennent dans un seul fichier.
> Notation des blocs : `[p]` paragraphe · `[menu]` bloc « Au menu » · `[def-puce | slug]` puce dorée de DÉFINITIONS · `[cta]` texte d'appel · `[sondage]` encadré vert du sondage A/B · `[disclaimer]` mention du pied de mail.

---

## 1. Intro

**Titre du numéro (`titre`, proposition)** : Les smart accounts

**Objet de l'email (3 propositions, même construction que les numéros précédents)** :
1. `CryptoLuciole #7 — Les smart accounts, décryptés` (reco : même construction que le numéro 6)
2. `CryptoLuciole #7 — Un wallet qui applique tes règles`
3. `CryptoLuciole #7 — Smart accounts : ce que ça change pour ton wallet`

**Excerpt pour l'archive du site (`excerpt`) et preheader de l'email** :
Les smart accounts expliqués, où en sont les mesures crypto du budget 2027, MSCI face à Strategy, le nouveau mode de notation de Bittensor, Papertrade sous la loupe et 15 Md$ de positions ouvertes sur Hyperliquid.

---

[p]
Bonjour à toi 👋,

[p]
Dans notre [numéro 6](https://www.cryptoluciole.com/numeros/6), on parlait des menaces qui pèsent sur la clé privée de ton wallet. Cette semaine, on décrypte les **smart accounts**, des wallets qui appliquent les règles que tu leur fixes.

[menu]
**Au menu :**
- 🔦 **On éclaire** — les smart accounts, ce qu'ils apportent et le piège de la délégation
- ✨ **Dans le faisceau** — les mesures crypto du budget 2027 · MSCI face à Strategy · Bittensor et son nouveau mode de notation
- 🔍 **Sous la loupe** — Papertrade, des perps ×1000 financés par les perdants
- 📊 **Les repères** — les cours de la semaine, et l'inflation américaine
- 💡 **Ça brille** — 15 Md$ de positions ouvertes sur Hyperliquid
- 📖 **Définitions** — abstraction de compte, open interest
- ✉️ **À toi de jouer** — ta question et un sondage

*(Les emojis du menu sont ceux des étiquettes de rubrique ; dans le corps de l'intro, il n'y en a qu'un : 👋.)*

---

## 2. 📖 DÉFINITIONS

[def-puce | `abstraction-de-compte`]
**Abstraction de compte** — rendre programmables les règles d'un compte. Au lieu d'une seule clé imposée par la blockchain, un smart contract décide qui peut signer, jusqu'à quel montant et comment se paie le gas. C'est ce qui rend possibles les smart accounts, et une piste, encore théorique, vers des signatures résistantes au quantique.

[def-puce | `open-interest`]
**Open interest** — la valeur totale des positions encore ouvertes sur un marché de dérivés, levier compris. Il mesure ce qui reste ouvert, pas ce qui s'échange (le volume) ni ce qui est déposé (la marge).

### Pour l'assemblage : entrée `terms.ts` (1 nouveau terme, à ajouter dans `TERMES`)

```ts
  {
    slug: "abstraction-de-compte",
    terme: "Abstraction de compte",
    definition:
      "L'idée de rendre programmables les règles d'un compte. Sur un compte classique (EOA), la blockchain impose une seule règle : la clé privée signe, et elle peut tout faire. Avec l'abstraction de compte, c'est un smart contract qui fixe les règles : qui peut signer (une clé, plusieurs, une passkey), jusqu'à quel montant, pendant combien de temps, avec quel jeton on paie le gas. Les smart accounts en sont l'application concrète, via ERC-4337 (un nouveau compte) ou EIP-7702 (ton compte actuel équipé d'un smart contract). Comme la vérification de la signature devient du code, on pourrait aussi y brancher des signatures conçues pour résister au quantique : c'est possible en théorie, pas encore en pratique.",
    numero: 7,
  },
```

`open-interest` existe déjà dans `terms.ts` (introduit au numéro 4) : aucune entrée à ajouter.

Pour `issues.ts` (champ `definitions`), le texte des deux puces ci-dessus va dans `def`, avec `slug: "abstraction-de-compte"` et `slug: "open-interest"`.

---

## 3. ✉️ À toi de jouer

[cta]
Une question sur ce numéro, un point qui reste flou, un sujet que tu aimerais qu'on creuse ? **Réponds directement à ce mail** : je lis tout, et je réponds.

[sondage]
🗳️ **Les smart accounts, tu en es où ?** Réponds **A** ou **B** :
- **A.** J'en utilise déjà un, ou mon wallet a basculé
- **B.** Pas encore, je garde mon wallet classique

*Variantes écartées (ou de rechange)* :
- « Si la taxation des échanges vers les stablecoins est adoptée, tu… » (A. Gardes tes gains en crypto plus longtemps / B. Continues de les sécuriser en stablecoins) : la plus engageante, mais la mesure peut encore tomber, et la question frôle le conseil fiscal. Bonne option de rechange si tu préfères un sondage sur l'actu.
- « Tu as déjà tradé avec un levier au-delà de ×10 ? » (en lien avec Papertrade) : invite surtout à répondre B, et met l'accent sur la spéculation.

---

## 4. Disclaimer

[disclaimer]
⚠️ Contenu purement pédagogique — **pas un conseil en investissement**. Fais tes propres recherches.

*(Repris tel quel du pied de mail du numéro 6. Si tu préfères la formule exacte de la règle éditoriale, « Ce contenu n'est pas un conseil en investissement. », elle se substitue sans rien changer d'autre.)*

---

## Notes du Rédacteur (hors texte, à ne pas assembler)

### Longueur (compte approximatif)
- Intro : ≈ 40 mots ; ≈ 120 avec le bloc « Au menu ».
- DÉFINITIONS : ≈ 85 mots pour les deux puces.
- À toi de jouer : ≈ 55 mots.

### Choix et cohérence
- **Doublon open interest** : ÇA BRILLE contient déjà un encadré « Open interest » complet, avec l'exemple 1 000 $ × 10. La puce de DÉFINITIONS est donc volontairement courte, sans l'exemple, et ne fait que rappeler les trois choses à ne pas confondre (positions ouvertes, volume, marge). Si ça reste une redite à tes yeux, on peut remplacer ce terme par un mot du numéro qui n'a pas d'encadré : **EMT** (glosé dans le corps de l'actu fiscalité, slug `emt` à créer) est le meilleur candidat.
- **Écart avec le BRIEF** : le brief prévoyait **BBO** + abstraction de compte. La consigne de la session principale demande abstraction de compte + open interest ; j'ai suivi la consigne. Le BBO est de toute façon déjà défini en encadré dans SOUS LA LOUPE.
- **Abstraction de compte** : j'ai repris la nuance d'ON ÉCLAIRE sur le quantique (« possible en théorie, pas encore en pratique ») pour ne pas le contredire, d'où « une piste, encore théorique ». Je n'ai pas cité EIP-7702 dans la puce, parce qu'ON ÉCLAIRE précise qu'il ne protège pas du quantique : l'entrée longue du glossaire porte cette nuance.
- **Intro** : lien avec le numéro 6 par la clé privée (actu Drake et définition du numéro 6), sans laisser entendre que les smart accounts règlent la menace quantique. Une seule phrase sur le sujet, aucune actu réannoncée (le menu s'en charge), conformément à ta relecture du numéro 6.
- **Ordre du menu** : celui des numéros 4 et 5 avec SOUS LA LOUPE (On éclaire → Faisceau → Sous la loupe → Repères → Ça brille). À aligner sur l'ordre réel de l'assemblage.
- **Menu « Les repères »** : « la semaine » et non « le mois » (le tableau porte sur 7 jours depuis le numéro 6).

### À vérifier
- **« 15 Md$ »** dans le menu et l'excerpt : repris du titre de ÇA BRILLE, à garder en phase si le fact-check ou ta relecture modifie le chiffre.
- **« Bittensor et son nouveau mode de notation »** : formulation neutre choisie parce que le titre de l'actu (« notés par un seul acteur ») est encore à valider.
- **Sondage, réponse A** : « mon wallet a basculé » vise les utilisateurs de MetaMask qui ont accepté la bascule EIP-7702 sans forcément le savoir ; le parcours exact est encore [À VÉRIFIER] dans ON ÉCLAIRE.

Seuls ces blocs (intro, menu, DÉFINITIONS, À toi de jouer, disclaimer) ont été traités ; aucun autre fichier n'a été modifié (`terms.ts`, `issues.ts` et les emails sont intacts).
