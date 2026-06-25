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

2. **Rappel des cibles.** Lis rapidement
   `~/.claude/projects/-Users-marc-Documents-claude-newsletter/memory/sources-veille.md`
   (sources + sujets prioritaires) pour cadrer le veilleur.

3. **Lance le veilleur** via l'outil Task (subagent_type: `veilleur`). Donne-lui :
   - la date du jour ;
   - la consigne d'écrire `veille/AAAA-MM-JJ.md` au format de sa définition ;
   - le rappel : lire large, classer par catégorie, ne PAS rédiger ni analyser en
     profondeur, repérer protocoles à creuser + termes à définir + nouvelles sources.

   Pour une veille plus large, tu peux lancer **plusieurs veilleurs en parallèle** par
   grappes de catégories (ex. macro+BTC+ETH d'un côté, DeFi+L2+perp de l'autre) puis
   fusionner leurs sorties dans un seul fichier daté. Par défaut, un seul suffit.

4. **Restitue à Marc** : un résumé court (les 2-3 trucs forts 🔥 + les pistes
   newsletter), et le chemin du fichier. Ne recopie pas tout le fichier.

5. **Mémoire des sources (toi = greffier).** Si le veilleur a remonté des **nouvelles
   sources** dans « 🆕 Nouvelles sources repérées », propose à Marc de les **promouvoir**
   dans `…/memory/sources-veille.md`. Après son OK, ajoute-les à la section « Sources à
   consulter » de ce fichier (un seul rédacteur de la mémoire = pas de conflit). C'est le
   mécanisme par lequel la liste de sources grandit dans le temps.

## Souplesse

Règles = guides. Sur demande de Marc on peut restreindre (« juste la DeFi aujourd'hui »),
élargir, ou sauter une étape — en le disant explicitement.

## Rappels

- Le veilleur **répertorie**, il ne rédige pas le contenu de la newsletter (→ rédacteur).
- Un protocole à analyser en profondeur = passe par le projet `../analyste-defi`
  (skill `/analyse`), pas par le veilleur.
- Jamais de conseil d'investissement.
