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
- **Approche tech (C — hybride)** : envoi via **Resend** (audience + emails) + **site web à construire à neuf** (cryptoluciole.com) pour l'archive des numéros + l'inscription, puis plus tard de la data crypto. **Le site reprend la charte CryptoLuciole** (= celle de la newsletter, ci-dessous). ⚠️ **trackpaw n'est PAS la base du site** : c'est seulement, plus tard, une *source de data* (chiffres) à afficher — jamais le squelette ni le design. Agents de veille : étendre `../analyste-defi` (Phase 4).
- **Cadence** : 1×/semaine au départ (mardi+jeudi à terme). **2 actus par numéro** (pas 3).
- **Domaine** : cryptoluciole.com (OVH).
- **Plateforme d'envoi** : **Resend** (bascule depuis beehiiv le 2026-06, beehiiv abandonné). Domaine vérifié d'envoi : **`send.cryptoluciole.com`** ; expéditeur `CryptoLuciole <mail@send.cryptoluciole.com>` (SPF/DKIM). **Inscription** branchée : formulaire du site → route `site/app/api/subscribe/route.ts` → ajout du contact à l'**audience Resend** PUIS envoi auto d'un **mail de bienvenue** (= le dernier numéro complet). Secrets `RESEND_API_KEY` + `RESEND_AUDIENCE_ID` dans `site/.env.local` (local, gitignored) ET dans les Environment Variables Vercel (prod). La clé API ne doit jamais être commitée ni écrite en mémoire.
- **Périmètre du site** (à construire à neuf, charte CryptoLuciole) : (1) accueil brandé + inscription, (2) archive des numéros, (3) plus tard : section data (prix/TVL, éventuellement chiffres issus de trackpaw) **et tutos pas-à-pas** (ouvrir un wallet, faire du staking…).
- **Doc de design** (source de vérité) : `~/.gstack/projects/newsletter/marc-master-design-20260602-205425.md`.
- **Maquettes** : `~/Library/CloudStorage/GoogleDrive-toubas.antoine@gmail.com/Mon Drive/Obsidian/A/Newsletter/` (`MAQUETTE.md`, `NEWSLETTER.md`).

### Règles éditoriales (à appliquer pour chaque numéro)

1. **Fact-check web obligatoire AVANT chaque envoi.** Vérifier par recherche internet : tous les chiffres (prix, rendements, TVL, montants), l'absence de contradictions, l'exactitude des affirmations, et que tout est actuel. **Ne jamais inventer un chiffre daté** — marquer `[À VÉRIFIER]` ce qui n'est pas sourcé, dire honnêtement ce qui est trouvé ou non.
2. **Rédaction / correction déléguée.** Gérer directement orthographe, syntaxe et mise en page — Marc ne veut pas apprendre ces compétences. Garder la pédagogie pas-à-pas uniquement pour le dev et les agents.
3. **Contraintes de forme** : police Inter (titres 28-32, sous-titres 18-20, corps 16), séparateurs fins, beaucoup d'air, 2-3 emojis max, illustrations pédagogiques, éviter les mots « spammy ».
4. **Toujours inclure le disclaimer** : « Ce contenu n'est pas un conseil en investissement. »

### Workflow d'envoi Resend (mis à jour le 2026-06-23)

- **Contenu = HTML email complet** (header/footer inclus, contrairement à l'ancienne version beehiiv body-only). Fichier de référence : `cryptoluciole-01-resend.html`.
- **Mail de bienvenue automatique** : à l'inscription, le nouvel abonné reçoit le **dernier numéro** en transactionnel. La sélection est AUTO via `site/app/emails/latest.ts` → tableau `ALL_ISSUES` (le numéro au plus grand `number` gagne).
- **Pour chaque nouveau numéro** :
  1. Créer `site/app/emails/issues/issue-0X.ts` (sur le modèle de `issue-01.ts`) et l'ajouter à `ALL_ISSUES` dans `latest.ts` → le welcome pointera dessus.
  2. Ajouter le numéro dans `site/app/numeros/issues.ts` (archive du site).
  3. **Envoi en masse via l'API** (PAS l'éditeur Broadcast) : `cd site && node scripts/send-newsletter.mjs app/emails/issues/issue-0X.ts --test <email>` (valider le rendu par le canal réel) → `--dry-run` (compter l'audience) → `--send` (envoi réel). Le script suit la pagination, exclut les désinscrits, ajoute `List-Unsubscribe`.
- ⛔ **Ne plus utiliser l'éditeur Broadcast Resend** : il réencapsule le HTML collé (conteneur ~600px + styles globaux) et casse le fond pleine largeur / le centrage (constaté au #2). L'API `/emails` envoie le HTML brut = rendu fidèle. Toujours valider par le canal RÉEL avant un mass-send.
- Expéditeur : `mail@send.cryptoluciole.com`. Le showcase visuel vit aussi sur le site (`/numeros/[id]`), l'email peut renvoyer dessus via un bouton.

### Liens glossaire & protocoles (architecture figée le 2026-06-24)

- **URLs par chemin, jamais par ancre `#`** : un terme = `/glossaire/<slug>`, un protocole = `/protocoles/<slug>` (routes dynamiques Next.js `[terme]`/`[id]`, déjà en place). Raison : SEO (1 page indexable par terme), évolutivité, et on peut ajouter des ancres PAR-DESSUS plus tard (`/protocoles/re#les-risques`). L'inverse (tout sur une page `#`) casserait les liens des mails déjà envoyés le jour où on découpe.
- **Slug canonique INVARIABLE** : minuscules, **sans accent**, tirets. Ex. `action-tokenisee`, `lrt`, `re`. Un slug ne doit jamais changer (sinon redirection Next.js pour ne pas casser les liens des mails partis).
- **Dans chaque numéro** : tout terme défini est lié à `https://www.cryptoluciole.com/glossaire/<slug>` (sur l'encadré de définition) ; le protocole de SOUS LA LOUPE a un lien `→ Voir la fiche complète` vers `/protocoles/<slug>`. Pages « en construction » OK en attendant le vrai contenu.
- ⚠️ **Déployer le site AVANT l'envoi en masse** sinon les liens 404 en ligne.

**Deux niveaux de contenu protocole (figé le 2026-06-24)** — ne jamais les confondre :
- **Newsletter (email + `site/app/numeros/issues.ts`)** = COURT et succinct. On reste vulgarisé, on ne surcharge pas. Vérifier seulement que c'est *en accord* avec le wiki (pas de contradiction de chiffres), pas besoin de tout détailler.
- **Fiche SITE (`site/app/protocoles/protocols.ts`)** = la version qui va PLUS LOIN, pour le lecteur qui clique « → Voir la fiche complète ». **À alimenter depuis le WIKI de veille** (`~/Library/CloudStorage/.../Obsidian/A/_wiki/protocoles/` + `Obsidian/A/Crypto/Protocoles/...` + analyses `../analyste-defi/analyses/`) : plus technique, plus long, chiffré, risques nuancés — tout en gardant l'esprit du site (clair, aéré, expliqué). Réflexe : avant d'écrire une fiche protocole pour le site, **lire d'abord la fiche wiki correspondante**, ne pas rédiger « de tête ».
- **Modèle de fiche site** = type `ProtocoleFiche` dans `protocols.ts` : `enBref` (carte d'identité), `score` (badge échelle maison), `sections[]` faites de blocs souples (`ProtoBloc` : `p`/`st`/`liste`/`def`/`note`{info|alerte|avis}/`tableau`), `pointsCles` (« à retenir »), `verdict`, `sources`. Structure NON stricte : on mixe les blocs selon le protocole. Rendu par `site/app/protocoles/[id]/page.tsx`.

**Chiffres LIVE obligatoires (figé le 2026-06-25) — règle à appliquer à CHAQUE protocole** : les montants qui périment vite (**TVL, APY/rendement**) ne sont JAMAIS recopiés du wiki en dur. Ils sont récupérés **en direct** via DeFiLlama (recette héritée du projet `../trackpaw`) : TVL protocole = `https://api.llama.fi/tvl/<slug>`, APY+TVL par pool = `https://yields.llama.fi/chart/<poolUUID>`. Helper = `site/app/protocoles/live.ts` ; config par protocole = champ `live: { defillamaSlug, pools[] }` ; fetch côté serveur avec **revalidation ISR horaire** (`export const revalidate = 3600`) ; carte « 📊 Chiffres en direct ». Le `enBref` ne contient que des faits DURABLES (type, date de lancement, équipe, combined ratio…). Le wiki reste la source de l'ANALYSE, pas des chiffres. Dégradation propre si l'API échoue (jamais de chiffre faux).

**Note de risque Pharos.watch (live) — pour CHAQUE stablecoin couvert** : encadré « 🛡️ Note de risque indépendante » dans la zone risques de la fiche, qui affiche la note Pharos (grade A+→F + score /100 + breakdown par dimension : peg, liquidité, résilience, décentralisation, dépendances), un lien vers `https://pharos.watch/stablecoin/<id>` et un mini-tuto « comment lire cette note ». Helper = `site/app/protocoles/pharos.ts` ; config par protocole = champ `pharos: { id }` (id format `ticker-issuer`, ex. `reusd-re-protocol` — bien distinguer de `reusd-resupply`). Source : `GET https://api.pharos.watch/api/report-cards` (renvoie TOUTES les cartes, filtrer par id), header `X-API-Key`. **Clé = `PHAROS_API_KEY` dans `site/.env.local` (gitignored) + Vercel — jamais commitée ni écrite en mémoire.** Fetch serveur + revalidation horaire ; si la clé manque, l'encadré ne s'affiche pas (dégradation propre). Pour trouver l'id Pharos d'un protocole : `GET /api/stablecoins` puis chercher le symbole.

### Template & système de design (NE PAS refaire le squelette)

**Réutiliser `templates/newsletter-template.html`** pour chaque numéro — remplir les `{{SLOTS}}`, ne jamais reconstruire la structure. Référence finale : `cryptoluciole-01-v3.html` (= le #1 abouti).

**Format aéré = standard depuis le #2 (figé le 2026-06-24).** Chaque terme défini va dans un **encadré de définition** dédié (fond gris clair, terme en gras lié au glossaire), pas fondu en parenthèses. Sous-titres clairs dans ON ÉCLAIRE (« En pratique », « Combien ça rapporte »…). Listes à puces quand ça aide (ex. scénarios de ÇA BRILLE). Côté site, ce format est porté par le type `NotionEl` (`corps: p | st | def`) + `defs` sur les actus + `points`/`texteFin` sur `data`, rendus par `site/app/numeros/[id]/page.tsx` (composant `DefBox`). L'email reproduit le même rendu en HTML (encadrés `background-color:#f3f6f6`). Objectif : **agréable à lire**.

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
5. 📊 LES REPÈRES : tableau cours BTC/ETH/SOL/HYPE/BNB, noms + 7 j en vert/rouge. **Sous le tableau, un encadré vert « 💡 Notre avis »** qui explique le mouvement de la semaine en ~2 phrases (les causes de la hausse/baisse). **Note de bas de tableau = uniquement dates + sources** (pas de légende couleur vert/rouge : inutile).
6. 💡 ÇA BRILLE : 1 data de la semaine (carte nuit/violet).
7. 📖 DÉFINITIONS : 2 termes à puces.
8. ✉️ À toi de jouer : question lecteur + sondage A/B.
9. Disclaimer « pas un conseil en investissement ».
→ Toujours : partir du contenu de Marc sans le dénaturer, fact-check web de tous les chiffres, rendre l'aperçu HTML.
