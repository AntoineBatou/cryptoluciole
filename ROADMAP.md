# Roadmap — CryptoLuciole

> Idées et chantiers à venir. On y consigne les directions ; on n'implémente que
> quand c'est planifié explicitement.

## Vision long terme

Faire de la newsletter **et** du site une sorte d'**« Obsidian complet et
intelligent »** : un espace où l'on **comprend et apprend** la DeFi, relié et
navigable, dans l'esprit du **projet wiki global** (`../projet`, alimenté par
`../analyste-defi`). Le site n'est pas qu'une archive d'emails : c'est une base
de connaissance vivante (notions liées, protocoles décrits, tutos pratiques).

## Chantiers identifiés

### 1. Section « Vidéos / Tutos » sur le site
- Objectif : **une vidéo tuto par semaine**, format **~15 minutes**, montrée
  **en direct** (pas-à-pas).
- Exemple : « Comment utiliser un protocole de restaking » fait à l'écran.
- À construire : une section dédiée du site (liste de vidéos + page par tuto),
  cohérente avec la charte CryptoLuciole.

### 2. Section « Protocoles » sur le site
- À chaque fois qu'un protocole est traité (rubrique 🔍 SOUS LA LOUPE ou autre),
  l'**ajouter dans une section « Protocoles »** du site.
- **Source du contenu** : les analyses d'`../analyste-defi` (le Wiki), p. ex.
  `analyste-defi/analyses/REXYZ-re-protocol-2026-05-17.md` → adaptées en fiche
  site (vulgarisée).
- **Le mail renvoie vers la fiche site** plutôt que de tout détailler dans
  l'email : SOUS LA LOUPE = résumé court + lien « lire la fiche complète ».
- **Mention « rédigé avec l'aide de l'IA » OBLIGATOIRE sur la page du site**
  (transparence) — **mais JAMAIS dans le mail**.
- Idée : chaque fiche protocole = entrée de connaissance réutilisable, liée aux
  notions du glossaire.

### 3. Articles & analyses longues
- Enrichir le site avec des **articles et analyses plus poussées et plus
  longues** (au-delà du format newsletter).

### 3 bis. Section « News IA »
- Un **agent IA** récupère les news depuis une liste de sources de veille
  (~**2 news/jour**). Sources + sujets prioritaires consignés en mémoire
  (`sources-veille`). Sujets clés : macro (FED, taux, inflation, actions), BTC,
  ETH, DeFi (cœur), Layers 2, Bittensor, Hyperliquid & DEX perp.

### 4. Glossaire (déjà acté, voir mémoire `glossaire`)
- Source unique des définitions + termes cliquables (tooltip site / lien mail).
- Agrège **tous les termes définis dans les newsletters ET les articles**.
- Brique de base de la logique « Obsidian » (liens entre notions).

## Liens entre briques (esprit Obsidian)
Glossaire (notions) ⇄ Protocoles (fiches) ⇄ Tutos vidéo (pratique) ⇄ Numéros
(actus). À terme, tout doit se renvoyer mutuellement.
