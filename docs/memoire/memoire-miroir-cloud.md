---
name: memoire-miroir-cloud
description: "docs/memoire/ est un miroir versionné de la mémoire, pour travailler depuis une session cloud — à resynchroniser dans les deux sens et à ré-anonymiser"
metadata: 
  node_type: memory
  type: project
  originSessionId: 03d8f720-c5a8-40b1-8c86-c5202de191b2
  modified: 2026-09-16T17:05:42.362Z
---

Depuis le 2026-09-16, la mémoire est mirrorée dans **`docs/memoire/`** (dans le dépôt), pour
que Marc puisse travailler depuis une tablette via `claude.ai/code`, Mac éteint. Les agents
`redacteur`, `verificateur` et `veilleur` pointent dessus **en priorité**, avec repli sur
`~/.claude/projects/.../memory/`.

**Pourquoi** : l'historique d'une session Claude Code est **local à la machine** — Mac éteint
= session perdue. Seul ce qui est dans git suit. Sans ce miroir, le rédacteur perdait
`style-editorial.md` et le vérificateur son barème : la boucle qualité tournait à vide.

**Comment l'appliquer** :
- La **source de vérité reste `~/.claude/.../memory/`**. `docs/memoire/` ne se met pas à jour
  tout seul : resynchroniser avant un départ (`cp memory/*.md docs/memoire/`).
- **Au retour d'une session cloud** : toute leçon capitalisée à distance a été écrite dans
  `docs/memoire/` → la recopier vers `~/.claude/.../memory/`, sinon le Mac repart périmé.
- 🔒 **Ré-anonymiser après chaque resync** : le dépôt est **public**, et la mémoire contient
  des adresses email (celle de Marc, celle du `userEmail` système, et celle d'un abonné dans
  `etat-projet.md`). Contrôle :
  `grep -rhoiE "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}" docs/memoire/ | sort -u`
  Seules `contact@cryptoluciole.com` et `mail@send.cryptoluciole.com` doivent apparaître.
- `site/.env.local` reste gitignored → les clés Resend/Pharos doivent être ajoutées en
  variables d'environnement côté session cloud pour pouvoir envoyer.
- Le **wiki Obsidian (Google Drive) ne suit pas** → pas de fiche protocole détaillée à
  distance sans export préalable.

Détail complet dans `docs/memoire/README.md`. Voir [[journal-de-bord]], [[envoi-resend]],
[[adresse-test-email]].
