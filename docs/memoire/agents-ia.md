---
name: agents-ia
description: "Spec figé de la couche IA newsletter (4 agents) — détail dans le repo, à construire pas à pas"
metadata: 
  node_type: memory
  type: project
  originSessionId: 0240ef24-bab3-4996-9e3c-45845b40c395
---

Spec figé le 2026-06-25 (via `/spec`) : on ajoute **4 agents** à CryptoLuciole
**sans changer** workflow/contenu/esprit. Détail complet = `newsletter/docs/agents-ia.md`
(source de vérité).

**ÉTAT au 2026-06-26 : les 4 agents sont CONSTRUITS, testés et poussés sur GitHub**
(`.claude/agents/` : veilleur, redacteur, verificateur, fact-checker ; skill `/veille`).
Boucle d'apprentissage testée (leçon « anti-délayage » gravée dans [[style-editorial]]).
Sorties : `veille/AAAA-MM-JJ.md`, `drafts/`, `factcheck/`. Le mémo de démarrage est dans
le `CLAUDE.md` du projet (s'affiche quand Marc dit bonjour).
Reste : régénérer la clé Resend exposée puis nettoyer `.claude/settings.local.json`.

Les 4 agents (dans `newsletter/.claude/agents/`) :
1. **Veilleur** (Haiku) — lecteur LARGE qui classe, ne rédige pas ; sortie
   `veille/AAAA-MM-JJ.md` + enrichit [[sources-veille]] ; skill `/veille`, manuel.
2. **Rédacteur** (Opus 4.8) — une section à la fois, voix de Marc, lit [[style-editorial]] ;
   sous-agent Task (le ping-pong reste en session principale).
3. **Vérificateur** (Opus) — note /10, seuil 8, max 3 boucles ; **propose** la leçon de
   style, Claude principal l'**écrit** dans [[style-editorial]].
4. **Fact-checker** (Sonnet) — lit le numéro entier, vérifie web, ne modifie rien.

Invariants : (a) **transparence** — toujours dire quel agent agit / quelle section / où on
en est ; (b) **souplesse** — on peut déroger sur demande de Marc (ex. sauter analyste-defi) ;
(c) **séquentiel** — une section validée avant la suivante.

Partie protocole = 2 niveaux distincts : newsletter (résumé 3 min simplifié) vs **fiche site
COMPLÈTE** (cahier des charges intégral : wiki d'abord, `ProtocoleFiche`, chiffres live
DeFiLlama, note Pharos si stablecoin, échelle de risque, mention « rédigé avec l'aide de
l'IA »). Si l'analyse wiki manque → lancer `/analyse` du projet `../analyste-defi` d'abord
(long, non bloquant). Voir [[fiches-protocoles-site]], [[etat-projet]].
