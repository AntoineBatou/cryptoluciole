# docs/memoire/ — miroir versionné de la mémoire

Ce dossier est une **copie** de la mémoire locale de Claude Code :

```
~/.claude/projects/-Users-marc-Documents-claude-newsletter/memory/
```

plus une copie du `CLAUDE.md` global de Marc (`CLAUDE-global.md`).

## Pourquoi

La mémoire vit hors du dépôt, sur le Mac. Elle est donc **invisible depuis une session
cloud** (`claude.ai/code` sur tablette, Mac éteint). Or les agents en dépendent :

- le **rédacteur** lit `style-editorial.md` — sans elle, il écrit dans un style générique
- le **vérificateur** note contre `style-editorial.md` — sans elle, il note à vide
- le **veilleur** lit `sources-veille.md`

Les trois agents pointent désormais sur `docs/memoire/` **en priorité**, avec repli sur le
chemin local. Le setup fonctionne donc à l'identique sur le Mac et en cloud.

## ⚠️ Deux copies = risque de divergence

La **source de vérité reste `~/.claude/.../memory/`** : c'est là que Claude écrit quand il
capitalise une leçon de style ou met à jour le journal de bord.

Ce miroir ne se met **pas** à jour tout seul.

### Resynchroniser (depuis le Mac)

```bash
cp ~/.claude/projects/-Users-marc-Documents-claude-newsletter/memory/*.md docs/memoire/
cp ~/.claude/CLAUDE.md docs/memoire/CLAUDE-global.md
```

- **Avant un départ** : resynchroniser, puis committer.
- **Au retour d'une session cloud** : si une leçon de style a été capitalisée à distance,
  elle a été écrite dans `docs/memoire/` — la **recopier vers `~/.claude/.../memory/`**
  pour que le Mac reparte à jour.

## 🔒 Anonymisation

Les **adresses email personnelles** ont été retirées de ce miroir (celle de Marc, celle du
`userEmail` système, et celle d'un abonné qui figurait dans `etat-projet.md`). Les versions
complètes restent dans la mémoire locale du Mac.

**En resynchronisant, il faut ré-anonymiser** — la copie brute réintroduirait les adresses.
Vérification rapide avant tout commit :

```bash
grep -rhoiE "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}" docs/memoire/ | sort -u
```

Seules `contact@cryptoluciole.com` et `mail@send.cryptoluciole.com` (adresses publiques du
projet) doivent apparaître. Toute autre adresse est à masquer avant de pousser.

## 🔐 Dépôt public

`github.com/AntoineBatou/cryptoluciole` est **public**. Ne jamais écrire de clé d'API dans
la mémoire (`RESEND_API_KEY`, `RESEND_AUDIENCE_ID`, `PHAROS_API_KEY`) — c'est déjà la règle
du projet, elle devient critique ici puisque ces fichiers sont désormais publiés.
Scanner avant de resynchroniser en cas de doute.
