## GBrain Configuration (configured by /setup-gbrain)
- Mode: local-stdio
- Engine: pglite
- Config file: ~/.gbrain/config.json (mode 0600)
- Setup date: 2026-06-02
- MCP registered: yes (user scope)
- Embeddings: deferred (no provider key) — semantic search off until a key is added
- Artifacts sync: off
- Current repo policy: unset (no origin remote)

## GBrain Search Guidance (configured by /sync-gbrain)
<!-- gstack-gbrain-search-guidance:start -->

GBrain is set up and synced on this machine. The agent should prefer gbrain
over Grep when the question is semantic or when you don't know the exact
identifier yet. Two indexed corpora available via the `gbrain` CLI:
- This repo's code (registered as `gstack-code-<repo>` source).
- `~/.gstack/` curated memory (registered as `gstack-brain-<user>` source via
  the existing federation pipeline).

Prefer gbrain when:
- "Where is X handled?" / semantic intent, no exact string yet:
    `gbrain search "<terms>"` or `gbrain query "<question>"`
- "Where is symbol Y defined?" / symbol-based code questions:
    `gbrain code-def <symbol>` or `gbrain code-refs <symbol>`
- "What calls Y?" / "What does Y depend on?":
    `gbrain code-callers <symbol>` / `gbrain code-callees <symbol>`
- "What did we decide last time?" / past plans, retros, learnings:
    `gbrain search "<terms>" --source gstack-brain-<user>`

Grep is still right for known exact strings, regex, multiline patterns, and
file globs. The brain auto-syncs incrementally on every gstack skill start.
Run `/sync-gbrain` to force-refresh, `/sync-gbrain --full` for full reindex.

Note: embeddings are deferred (no provider key) — semantic ranking is limited
until you add a key (`gbrain config set embedding_model <id>` + export the key).

<!-- gstack-gbrain-search-guidance:end -->

## Projet — CryptoLuciole

Newsletter crypto/DeFi **pédagogique**, lancée le 2026-06-02. Objectif double : bâtir une audience sérieuse (monétisable plus tard) ET apprendre le dev web + l'IA agentique.

- **Lecteur-type** : « Grégoire », ~32 ans, débutant qui veut comprendre ET savoir *comment faire*.
- **Edge** : profondeur DeFi vulgarisée et **actionnable**, pas « les news en plus court ».
- **Approche tech (C — hybride)** : envoi via **beehiiv** (abonnés + délivrabilité gérés) + **site web à construire à neuf** (cryptoluciole.com) pour l'archive des numéros + l'inscription, puis plus tard de la data crypto. **Le site reprend la charte CryptoLuciole** (= celle de la newsletter, ci-dessous). ⚠️ **trackpaw n'est PAS la base du site** : c'est seulement, plus tard, une *source de data* (chiffres) à afficher — jamais le squelette ni le design. Agents de veille : étendre `../analyste-defi` (Phase 4).
- **Cadence** : 1×/semaine au départ (mardi+jeudi à terme). **2 actus par numéro** (pas 3).
- **Domaine** : cryptoluciole.com (OVH).
- **Périmètre du site** (à construire à neuf, charte CryptoLuciole) : (1) accueil brandé + inscription, (2) archive des numéros, (3) plus tard : section data (prix/TVL, éventuellement chiffres issus de trackpaw) **et tutos pas-à-pas** (ouvrir un wallet, faire du staking…).
- **Doc de design** (source de vérité) : `~/.gstack/projects/newsletter/marc-master-design-20260602-205425.md`.
- **Maquettes** : `~/Library/CloudStorage/GoogleDrive-toubas.antoine@gmail.com/Mon Drive/Obsidian/A/Newsletter/` (`MAQUETTE.md`, `NEWSLETTER.md`).

### Règles éditoriales (à appliquer pour chaque numéro)

1. **Fact-check web obligatoire AVANT chaque envoi.** Vérifier par recherche internet : tous les chiffres (prix, rendements, TVL, montants), l'absence de contradictions, l'exactitude des affirmations, et que tout est actuel. **Ne jamais inventer un chiffre daté** — marquer `[À VÉRIFIER]` ce qui n'est pas sourcé, dire honnêtement ce qui est trouvé ou non.
2. **Rédaction / correction déléguée.** Gérer directement orthographe, syntaxe et mise en page — Marc ne veut pas apprendre ces compétences. Garder la pédagogie pas-à-pas uniquement pour le dev et les agents.
3. **Contraintes de forme** : police Inter (titres 28-32, sous-titres 18-20, corps 16), séparateurs fins, beaucoup d'air, 2-3 emojis max, illustrations pédagogiques, éviter les mots « spammy ».
4. **Toujours inclure le disclaimer** : « Ce contenu n'est pas un conseil en investissement. »

### Template & système de design (NE PAS refaire le squelette)

**Réutiliser `templates/newsletter-template.html`** pour chaque numéro — remplir les `{{SLOTS}}`, ne jamais reconstruire la structure. Référence finale : `cryptoluciole-01-v3.html` (= le #1 abouti).

- **Palette** : nuit `#1A2332` · teal `#28B092`/`#2ABFAB` · or-luciole `#F5A623` · vert hausse `#16a34a` · rouge baisse `#dc2626` · gris `#94a3b8`.
- **Police** Inter (repli Helvetica/Arial), corps **16px**, largeur 600px, beaucoup d'air (marges 36px).
- **Logo dans les emails** : utiliser l'**URL hébergée** (Gmail n'affiche que des images en ligne) : `https://raw.githubusercontent.com/AntoineBatou/cryptoluciole/main/assets/logo/firefly-logo-white.png` (PNG transparent). Le SVG/PNG local sert au site/preview. Ne jamais remettre un PNG à fond blanc.
- **Dépôt GitHub** : `github.com/AntoineBatou/cryptoluciole` (public) = tout le projet ; les images y sont servies via `raw.githubusercontent.com`.
- **Site web** : app Next.js (App Router, TS, Tailwind v4) dans `site/`. Démarrer en local : `cd site && npm run dev --cache /tmp/cl-npm-cache` (cache npm local à cause de perms ~/.npm). **En ligne** : déployé sur **Vercel** (Root Directory = `site`), auto-deploy à chaque push. URLs : `https://cryptoluciole.vercel.app` et **`https://www.cryptoluciole.com`** (apex `cryptoluciole.com` redirige vers www, HTTPS auto). Pages : `/` (accueil), `/numeros` (archive), `/numeros/[id]` (un numéro). Données des numéros = `site/app/numeros/issues.ts` (source de vérité, séparée de l'affichage).
- **Rubriques nommées (thème luciole)** : 🔦 ON ÉCLAIRE (notion) · ✨ DANS LE FAISCEAU (actus) · 🔍 SOUS LA LOUPE (protocole) · 📊 LES REPÈRES (cours) · 💡 ÇA BRILLE (data) · 📖 DÉFINITIONS · ✉️ À toi de jouer. **Pas de numéro** devant les titres d'actu → marqueur ✦ doré.
- **2 ou 3 actus** selon les semaines. **Chaque actu a OBLIGATOIREMENT un encadré vert « 💡 Notre avis : »** (notre commentaire/analyse) — c'est un invariant de la formule.
- **Tableau des cours** : nom de la crypto **+** colonne 7 jours colorés en **vert (hausse `#16a34a`) / rouge (baisse `#dc2626`)** ; prix + variations à rafraîchir le jour de l'envoi (CoinGecko).
- **Définitions** à puces dorées (≥ une puce entre chaque terme).
- **Pas de bloc bannière** (retiré le 2026-06-03 — on va au plus simple).
- Inspirations : Aktionnaire (rubriques nommées, 16px lisible, vert/rouge) + Milk Road (air, illustrations) en version épurée.

### Checklist invariante par numéro (pour aller vite)
1. Intro « Bonjour » + bloc « Au menu » (liste des 5 rubriques).
2. 🔦 ON ÉCLAIRE : 1 notion expliquée (principe + métaphore + précisions techniques).
3. ✨ DANS LE FAISCEAU : 2-3 actus, **chacune suivie de « 💡 Notre avis »** (vert).
4. 🔍 SOUS LA LOUPE : 1 protocole/stratégie (en bref / comment ça marche / **Le rendement** : taux actuel + fourchette sur 1 an / **Les risques** avec badge de niveau / pourquoi ça compte).

   **Échelle de risque (classification maison, à réutiliser)** : 🟢 **Faible** (bg `#dcfce7`, txt `#15803d`) · 🟡 **Moyen** (bg `#fef9c3`, txt `#a16207`) · 🔴 **Élevé** (bg `#fee2e2`, txt `#b91c1c`). Badge en pastille à côté de « Les risques », suivi d'un court paragraphe qui justifie le niveau (toujours nuancer : « faible » ≠ « nul »).
5. 📊 LES REPÈRES : tableau cours BTC/ETH/SOL/HYPE/BNB, noms + 7 j en vert/rouge.
6. 💡 ÇA BRILLE : 1 data de la semaine (carte nuit/violet).
7. 📖 DÉFINITIONS : 2 termes à puces.
8. ✉️ À toi de jouer : question lecteur + sondage A/B.
9. Disclaimer « pas un conseil en investissement ».
→ Toujours : partir du contenu de Marc sans le dénaturer, fact-check web de tous les chiffres, rendre l'aperçu HTML.
