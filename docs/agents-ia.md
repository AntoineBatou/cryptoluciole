# Spec — Couche IA pour CryptoLuciole : 4 agents

> Plan de référence figé le 2026-06-25 (via `/spec`). On construit ensemble, pas à pas.
> Ce document décrit ce qu'on **ajoute** au workflow existant. Il ne change ni le
> contenu, ni le workflow, ni l'esprit de la newsletter — il ajoute de l'IA par-dessus.

---

## Principes transverses (valent pour Claude principal ET les 4 agents)

1. **Transparence d'orchestration.** À chaque étape, annoncer clairement : **qui agit**
   (quel agent), **dans quelle rubrique/section** on est, **ce qui se passe**, **où on en
   est**. Marc ne doit jamais se demander « à qui je parle » ou « on en est où ».

2. **Souplesse / dérogation.** Les règles ci-dessous sont des guides, pas des barreaux.
   Sur demande de Marc — ou si la logique l'impose clairement — on peut **déroger** (ex.
   « cette fois on ne lance pas analyste-defi, rédige-moi un truc rapide direct »). On
   **dit explicitement** qu'on déroge, et pourquoi.

3. **On avance séquentiellement.** Une section finie et **validée par Marc** avant
   d'ouvrir la suivante. Jamais deux sections en cours en même temps.

---

## Modèle de mémoire (important)

**Les agents n'ont PAS de mémoire interne persistante.** Un sous-agent Claude Code
(Task) est **sans état** : il démarre à froid à chaque lancement et oublie tout de ses
runs précédents. La session principale aussi, d'un jour à l'autre.

**La persistance vient des FICHIERS**, pas de la « tête » des agents. Chaque agent
**lit** ses fichiers mémoire au démarrage et **écrit** (ou propose) ses mises à jour à la
fin. C'est volontaire et plus robuste qu'un état caché : lisible, modifiable, versionné
dans git, survit à tout.

| Mémoire | Fichier | Qui lit / qui écrit |
|---------|---------|---------------------|
| Rôle/instructions de chaque agent | `.claude/agents/*.md` | Persistant par nature (leur définition) |
| Style de Marc (s'enrichit) | `style-editorial.md` | Rédacteur + Vérificateur **lisent** ; Claude principal **écrit** les leçons |
| Sources de veille (grandit) | `sources-veille.md` | Veilleur **lit et append** |
| Veille quotidienne | `veille/AAAA-MM-JJ.md` | Veilleur **écrit** ; Rédacteur **lit** |
| Faits projet | `~/.claude/projects/.../memory/*.md` | Toutes les sessions |
| (optionnel) sémantique | gbrain | Embeddings **désactivés** aujourd'hui (pas de clé) → indisponible pour l'instant |

**Condition pour que le système « apprenne » vraiment :** chaque définition d'agent doit
graver le rituel **(1) LIRE ses fichiers mémoire au démarrage, (2) ÉCRIRE/proposer ses
mises à jour à la fin**. Sans ce réflexe, le fichier existe mais l'agent l'ignore — c'est
le seul vrai risque. Le rituel est déjà présent dans `style-editorial.md` et sera répété
dans chaque agent.

## Contexte

CryptoLuciole a un workflow rodé : veille manuelle → rédaction section par section
validée avec Marc → assemblage **verbatim** dans `issues.ts` / `issue-0X.ts` → envoi
Resend. Objectif de la couche IA : aller plus vite sur la veille, **converger vers la
voix de Marc**, et ne jamais envoyer une bêtise factuelle.

**Hors-scope (ne pas refaire) :** le projet `../analyste-defi` et son skill `/analyse`
(analyse profonde de protocoles, 5 sous-agents, recherche web réelle, scoring, sauvegarde
wiki). Il reste à part, lancé **depuis son propre projet**. Il alimente la partie
protocole (voir pipeline dédié plus bas), mais sa construction n'est pas l'objet de ce
spec.

## État actuel vérifié

| Brique | Fichier | Rôle |
|--------|---------|------|
| Style (voix de Marc) | `~/.claude/projects/.../memory/style-editorial.md` | Source unique, enrichie à chaque correction |
| Sources de veille | `…/memory/sources-veille.md` | Graine de la liste de sources |
| Archive web | `site/app/numeros/issues.ts` | Assemblage verbatim |
| Email | `site/app/emails/issues/issue-0X.ts` + `latest.ts` | Assemblage verbatim |
| Numéro abouti de réf. | `cryptoluciole-01-v3.html` | Exemple de la voix publiée |
| Fiches protocole site | `site/app/protocoles/protocols.ts` (+ `live.ts`, `pharos.ts`) | Version détaillée (cahier des charges ci-dessous) |
| Agents existants (séparés) | `../analyste-defi/.claude/agents/` + skill `/analyse` | Analyse protocole (hors-scope) |

Aujourd'hui : **aucun agent dans `newsletter/.claude/`** (seul `settings.local.json`).

---

## Les 4 agents (tous dans `newsletter/.claude/agents/`)

### Agent 1 — Le Veilleur 🔦 (modèle : Haiku)

- **Rôle** : lecteur LARGE, **pas analyste**. Ratisse actus, posts, commentaires d'acteurs
  DeFi, autres newsletters, forums, Reddit, sites — tout ce qui parle crypto/DeFi au sens
  large.
- **Ne rédige jamais.** Il lit, **classe par catégorie newsletter** (macro/FED, BTC, ETH,
  DeFi cœur, L2, Bittensor, Hyperliquid/perp, autre), et **élargit sa liste de sources**
  au fil de l'eau.
- **Sortie** : un fichier daté `newsletter/veille/AAAA-MM-JJ.md`, classé par catégorie ;
  chaque entrée = titre + lien + **1 ligne « pourquoi c'est intéressant pour nous »** +
  source. Et il **append** toute nouvelle source découverte dans `sources-veille.md`.
- **Déclenchement** : skill **`/veille`** (commande fixe). Manuel pour l'instant (pas de
  cron — Claude Code ne lance rien seul en arrière-plan).

### Agent 2 — Le Rédacteur ✍️ (modèle : Opus 4.8)

- **Rôle** : rédige **une section à la fois**, sur demande, dans la voix de Marc.
- **Forme réelle** : la **session principale (Claude principal)** échange avec Marc (choix
  du sujet : soit Marc le donne, soit on propose à partir du `/veille` du jour). Une fois le
  sujet calé, on **délègue à un sous-agent rédacteur** la rédaction de **CETTE section
  uniquement**. La contrainte Task (un sous-agent tourne seul et rend une fois, sans
  dialoguer) impose que le ping-pong reste dans la session principale.
- **Entrées du sous-agent** : `style-editorial.md` (lu **en entier**, c'est la loi) + le
  fichier de veille du jour + des exemples publiés (`cryptoluciole-01-v3.html`,
  `issues.ts`).
- **Interdits** : tout le numéro d'un coup ; reformuler une section déjà validée (règle
  « assemblage verbatim »).

### Agent 3 — Le Vérificateur de style ✅ (modèle : Opus)

- **Rôle** : note le brouillon du rédacteur contre la grille `style-editorial.md`.
- **Notation** : **note /10 + liste des critères loupés**. **Seuil = 8.** En dessous, le
  rédacteur reprend. **Max 3 boucles**, ensuite on en parle avec Marc.
- **Apprentissage (boucle d'amélioration)** : quand Marc corrige une section validée, le
  vérificateur **formule la leçon** (« Marc a changé X → règle Y ») et la **propose** ;
  c'est **Claude principal qui écrit** dans `style-editorial.md` (un seul greffier = pas de
  conflit de fichier). Vérificateur = capteur/proposeur, Claude principal = greffier.
- **Forme** : sous-agent appelé après chaque brouillon.

### Agent 4 — Le Fact-checker 🔍 (modèle : Sonnet)

- **Rôle** : lit le numéro **assemblé en entier**, vérifie chiffres + actualité par
  **recherche web réelle**, signale ce qui est faux / périmé / manquant. **Ne modifie
  RIEN.**
- **Sortie** : un rapport (liste de points : ✅ vérifié / ⚠️ à corriger / ❓ non sourcé).
  Colle à la règle CLAUDE.md « fact-check web obligatoire AVANT envoi ».
- **Déclenchement** : sous-agent lancé en fin de parcours, avant l'envoi.

---

## Flux complet (ce qu'on ajoute en **gras**)

```
/veille (Haiku) ──> veille/AAAA-MM-JJ.md + sources-veille.md
                          │
   Marc choisit le sujet ◄┘ (ou on propose)
                          │
   [UNE section à la fois] rédacteur (Opus, sous-agent) ──> brouillon
                          │
                  vérificateur (Opus) ── note/10 ──< 8 ? reboucle (max 3)
                          │ ≥8
                  Marc valide / corrige ──> (vérif propose la leçon ──> Claude écrit dans style-editorial.md)
                          │
   …section suivante seulement maintenant…
                          ▼
        assemblage VERBATIM (issues.ts + issue-0X.ts)   ← inchangé
                          │
                  fact-checker (Sonnet) ──> rapport (ne change rien)
                          │
                     envoi Resend                        ← inchangé
```

---

## Pipeline PROTOCOLE (deux niveaux à ne jamais confondre)

```
Besoin d'un protocole
   │
   ├─ analyse wiki existe ? ──non──> /analyse (projet ../analyste-defi) ──> wiki   [long, NON bloquant]
   │                                                                          │
   └──────────────────────────────oui───────────────────────────────────────┤
                                                                              ▼
   (a) NEWSLETTER · SOUS LA LOUPE : résumé 3 min SIMPLIFIÉ        ← le rédacteur tire du wiki
   (b) FICHE SITE · /protocoles : COMPLÈTE (cahier des charges intégral ci-dessous)
```

- **Pré-requis** : avant toute fiche, lire l'analyse wiki correspondante. Sources :
  `…/Obsidian/A/_wiki/protocoles/`, `Obsidian/A/Crypto/Protocoles/…`, `../analyste-defi/analyses/`.
- **Si l'analyse wiki n'existe pas** → lancer le projet `../analyste-defi` (skill
  `/analyse`) pour la produire d'abord, puis en tirer la fiche site. Long mais **découplé
  et non bloquant** : la newsletter avance en parallèle.
- **Dérogation possible** (cf. principe 2) : sur demande de Marc, on peut sauter
  l'analyse profonde et rédiger un résumé rapide directement — en le disant explicitement.

### Cahier des charges — FICHE SITE (complète, ≠ newsletter)

1. **Partir du WIKI, jamais « de tête ».**
2. **Modèle = type `ProtocoleFiche`** (`protocols.ts`), rendu par `protocoles/[id]/page.tsx` :
   - `enBref` (carte d'identité) — **uniquement des faits DURABLES** (type, date de
     lancement, équipe, combined ratio…).
   - `score` (badge échelle maison).
   - `sections[]` de blocs souples `ProtoBloc` : `p` / `st` / `liste` / `def` /
     `note`{info|alerte|avis} / `tableau`.
   - `pointsCles` (« à retenir »), `verdict`, `sources`. Structure **non stricte**.
3. **Chiffres LIVE obligatoires (figé 2026-06-25) — à CHAQUE protocole.** TVL et
   APY/rendement **jamais recopiés en dur** ; récupérés en direct via DeFiLlama :
   - TVL protocole = `https://api.llama.fi/tvl/<slug>`
   - APY+TVL par pool = `https://yields.llama.fi/chart/<poolUUID>`
   - Helper `site/app/protocoles/live.ts` ; config `live: { defillamaSlug, pools[] }`.
   - Fetch **serveur**, **ISR horaire** (`export const revalidate = 3600`) ; carte
     « 📊 Chiffres en direct ». Dégradation propre si l'API échoue (jamais de chiffre faux).
4. **Note de risque Pharos.watch (live) — pour CHAQUE stablecoin couvert.** Encadré
   « 🛡️ Note de risque indépendante » : grade A+→F + score /100 + **breakdown** (peg,
   liquidité, résilience, décentralisation, dépendances) ; lien
   `https://pharos.watch/stablecoin/<id>` + mini-tuto « comment lire cette note ».
   - Helper `site/app/protocoles/pharos.ts` ; config `pharos: { id }` (format
     `ticker-issuer`, ex. `reusd-re-protocol` ≠ `reusd-resupply`).
   - Source `GET https://api.pharos.watch/api/report-cards` (header `X-API-Key`), filtrer
     par id. Clé `PHAROS_API_KEY` (`.env.local` gitignored + Vercel), **jamais commitée ni
     écrite en mémoire**. Si la clé manque → encadré masqué (dégradation propre).
5. **Échelle de risque maison :** 🟢 Faible (`#dcfce7`/`#15803d`) · 🟡 Moyen
   (`#fef9c3`/`#a16207`) · 🔴 Élevé (`#fee2e2`/`#b91c1c`) — badge + court paragraphe qui
   justifie (toujours nuancer : « faible » ≠ « nul »).
6. **Transparence : mention « rédigé avec l'aide de l'IA » OBLIGATOIRE sur la page du
   site, JAMAIS dans le mail.**

---

## Critères d'acceptation

1. 4 fichiers agents créés dans `newsletter/.claude/agents/` avec le bon modèle déclaré
   (veilleur=Haiku, rédacteur=Opus 4.8, vérificateur=Opus, fact-checker=Sonnet).
2. Skill `/veille` fonctionnel : produit `veille/AAAA-MM-JJ.md` classé par catégorie +
   met à jour `sources-veille.md`.
3. Le rédacteur sous-agent rédige une section isolée en lisant `style-editorial.md`, sans
   toucher au reste ; le flux séquentiel est respecté (une section validée avant la
   suivante).
4. Le vérificateur renvoie une note /10 + critères loupés ; boucle sous 8, stop à 3 essais ;
   il propose la leçon de style, Claude principal l'écrit dans `style-editorial.md`.
5. Le fact-checker produit un rapport sans modifier le contenu.
6. Pipeline protocole : si l'analyse wiki manque, on passe par `/analyse` (analyste-defi) ;
   la fiche site respecte le cahier des charges complet (chiffres live, Pharos si
   stablecoin, mention IA).
7. Tous les agents respectent les principes transverses (transparence + souplesse).
8. **Mémoire** : chaque définition d'agent grave le rituel LIRE au démarrage / ÉCRIRE
   (ou proposer) à la fin, sur les fichiers du « Modèle de mémoire ».
9. Aucune régression : assemblage verbatim et envoi Resend inchangés.

## Ordre de construction (les 4 d'un coup, dans cet ordre)

1. **Veilleur + skill `/veille`** (valeur immédiate, indépendant).
2. **Rédacteur** (sous-agent + orchestration de session).
3. **Vérificateur** (+ boucle de notation /10 + mécanisme de leçon).
4. **Fact-checker**.

## Risques / points d'attention

- **Pertinence du veilleur en Haiku** : bon pour ratisser, plus faible pour juger « est-ce
  pour NOUS ». Mitigation : grille de tri explicite dans son prompt ; si trop de bruit, on
  bascule le *tri* sur Sonnet.
- **Interactivité Task** : le ping-pong section par section reste dans la session
  principale, pas dans les sous-agents.
- **Coût** : Opus sur rédacteur + vérificateur à chaque section. Acceptable au volume
  (1-2 numéros/sem), à surveiller.
- **Découplage protocole** : une analyse wiki manquante ne doit jamais bloquer la
  newsletter.

## Décisions figées (récap)

| Sujet | Décision |
|-------|----------|
| Déclenchement quotidien | Manuel (skill `/veille`), pas de cron pour l'instant |
| Veilleur vs analyste-defi | Agent **neuf** dans newsletter ; analyste-defi reste séparé, pour la partie protocole |
| Périmètre | Les **4 agents** spécifiés d'un coup |
| Modèles | Veilleur=Haiku · Rédacteur=Opus 4.8 · Vérificateur=Opus · Fact-checker=Sonnet |
| Sortie veille | Fichier daté `veille/AAAA-MM-JJ.md` + maj `sources-veille.md` |
| Déclenchement agents | Mix : skill `/veille` + rédacteur/vérif/fact en sous-agents Task |
| Boucle d'apprentissage | Vérificateur **propose** la leçon, Claude principal **écrit** la fiche |
| Notation vérificateur | Note **/10**, seuil **8**, **max 3** boucles |
| Flux | **Séquentiel** : une section validée avant la suivante |

---

## Pour plus tard (hors-scope de ce spec)

- **Section « Articles » du site** (cf. `ROADMAP.md` §3) : articles **longs, techniques,
  réfléchis, avec avis personnels** — **rien à voir avec la newsletter**. Ponctuels, on va
  beaucoup plus loin, Marc intervient davantage. Le **rédacteur** et le **vérificateur**
  seront **réutilisés** ici (mêmes agents, autre format/cahier des charges, à définir le
  moment venu). À spécifier séparément quand on s'y mettra.
