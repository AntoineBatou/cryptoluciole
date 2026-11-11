---
name: veille
description: |
  Lance la veille crypto/DeFi du jour pour CryptoLuciole. Délègue au sous-agent
  "veilleur" (Haiku) qui lit large et classe par catégorie, écrit veille/AAAA-MM-JJ.md,
  puis remonte les nouvelles sources à promouvoir en mémoire. Utiliser quand Marc tape
  /veille ou dit "fais la veille du jour", "qu'est-ce qui se passe aujourd'hui".
---

# /veille — Veille du jour

Tu orchestres la veille. Le travail de lecture est délégué au sous-agent **veilleur**
(modèle Haiku, défini dans `.claude/agents/veilleur.md`). Toi (session principale) tu
prépares, tu lances, et tu fais le suivi mémoire. **Annonce chaque étape** (qui agit, où
on en est) — la transparence est un invariant du projet.

## Étapes

1. **Date + dossier.** Récupère la date du jour (`date +%F`) et assure-toi que le dossier
   `veille/` existe à la racine du repo (`mkdir -p veille`).

2. **Rappel des cibles.** Lis dans `~/.claude/projects/-Users-marc-Documents-claude-newsletter/memory/` :
   `profil-editorial.md` (ce que Marc retient et écarte, grille de tri) et `sources-veille.md`.
   Relève les sujets des **deux derniers numéros** (`site/app/numeros/issues.ts`) et les promesses
   en cours (« on y reviendra ») notées dans `etat-projet.md`.

3. **Lance le veilleur** via l'outil Task (subagent_type: `veilleur`). Donne-lui :
   - la date du jour ;
   - la consigne d'écrire `veille/AAAA-MM-JJ.md` au format de sa définition ;
   - le rappel : lire large, classer par catégorie, ne PAS rédiger ni analyser en
     profondeur, repérer protocoles à creuser + termes à définir + nouvelles sources.

   Pour une veille plus large, tu peux lancer **plusieurs veilleurs en parallèle** par
   grappes de catégories (ex. macro+BTC+ETH d'un côté, DeFi+L2+perp de l'autre) puis
   fusionner leurs sorties dans un seul fichier daté. Par défaut, un seul suffit.

4. **Trie toi-même, puis restitue à Marc.** Le veilleur (Haiku) ratisse et étiquette ; le choix
   des pistes est ton travail. Relis ses items avec `profil-editorial.md` :
   - écarte ce que Marc écarte d'habitude (vu partout sans angle, déjà traité, troisième numéro
     d'affilée, pas mûr, simple allégation, sujet de dossier) et **dis pourquoi** ;
   - pour chaque piste gardée, vérifie qu'une **source primaire** existe (ouvre-la) ;
   - regarde les **signaux chiffrés** : un chiffre qui bouge sans que la presse en parle est
     souvent la meilleure piste ;
   - avant de figer une piste de protocole ou de produit, interroge X sur deux semaines
     (mémoire `feedback-questionner-x.md`) pour voir l'angle qu'on rate.
   Présente à Marc **un tableau rubrique / idée / ce que ça apporte au lecteur / source primaire**,
   puis la liste des pistes écartées avec leur motif, puis les suites à donner à nos numéros.
   Donne le chemin du fichier ; ne recopie pas tout.

4 bis. **Enregistre ses choix.** Quand Marc a retenu et écarté, ajoute une ligne par piste au
   « Registre des choix » de `profil-editorial.md`, avec son motif **dans ses mots**. Quand un
   motif revient trois fois, remonte-le dans les tableaux du profil. C'est ce registre qui fait
   que la veille lui ressemble de plus en plus.

5. **Mémoire des sources (toi = greffier).** Si le veilleur a remonté des **nouvelles
   sources** dans « 🆕 Nouvelles sources repérées », propose à Marc de les **promouvoir**
   dans `…/memory/sources-veille.md`. Après son OK, ajoute-les à ce fichier (un seul rédacteur de
   la mémoire = pas de conflit), puis recopie les fichiers de mémoire modifiés vers
   `docs/memoire/` (voir `memoire-miroir-cloud.md`, contrôle d'anonymisation compris).

## Souplesse

Règles = guides. Sur demande de Marc on peut restreindre (« juste la DeFi aujourd'hui »),
élargir, ou sauter une étape — en le disant explicitement.

## Rappels

- Le veilleur **répertorie**, il ne rédige pas le contenu de la newsletter (→ rédacteur).
- Un protocole à analyser en profondeur = passe par le projet `../analyste-defi`
  (skill `/analyse`), pas par le veilleur.
- Jamais de conseil d'investissement.
