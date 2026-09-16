# BRIEF — Numéro #6 (note de passation)

> **À lire en premier** si tu reprends ce numéro depuis une autre machine
> (session cloud `claude.ai/code` sur tablette, Mac éteint).
> Rédigé le 2026-09-16 depuis le Mac. Toutes les décisions ci-dessous sont **déjà arbitrées par Marc**,
> sauf celles marquées ⏳.

---

## 1. Calendrier d'envoi

- **Envoi visé : jeudi 17 septembre 2026**, volontairement **après** deux catalyseurs macro :
  - **CLARITY Act** — décision attendue le 15 septembre `[À VÉRIFIER]`
  - **FOMC** — décision attendue le 16 septembre `[À VÉRIFIER]`
- Logique éditoriale : on arrive **après** la décision pour l'**expliquer**, pas pour la pronostiquer.
  C'est l'edge CryptoLuciole (comprendre > être premier).

### Deux contraintes que ce timing impose
1. 📊 **LES REPÈRES** : rafraîchir le tableau des cours **jeudi matin**, pas avant.
   Un FOMC bouge les cours — des chiffres de mardi seraient faux à l'envoi.
   (Récupération via l'API DeFiLlama, cf. mémoire `cours-defillama.md` — **pas** par WebSearch.)
2. 🔍 **Fact-check** : repasser jeudi matin sur les deux actus macro, même si le reste
   du numéro a déjà été validé plus tôt.

---

## 2. Agents à utiliser pour ce numéro

**Pas de veilleur** — Marc fournit les sujets lui-même (économie de tokens, décidé en début de session).

Parcours retenu, inchangé par ailleurs :
1. **Rédacteur** (Opus 4.8) → une section à la fois
2. **Vérificateur** (Opus) → note /10, seuil 8, reboucle en silence (max 3)
3. Validation de Marc → section suivante
4. Assemblage `site/app/emails/issues/issue-06.ts` + `site/app/numeros/issues.ts`
5. **Fact-checker** (Sonnet) **avant** le mail de test
6. Contrôle anti-troncature → mail de test → envoi

---

## 3. 🔦 ON ÉCLAIRE — Les marchés de prédiction

**Sujet retenu : le mécanisme des marchés de prédiction.**

### Découpage arrêté (important — ne pas le modifier sans l'accord de Marc)

| Section | Contenu |
|---|---|
| 🔦 **ON ÉCLAIRE** | Le mécanisme **de base** : contrats YES/NO, prix = probabilité implicite, YES + NO = 1 en permanence, d'où vient l'argent, comment le marché se résout (settlement). Puis **Kalshi vs Polymarket** : mécaniquement très proches, la vraie différence est **réglementaire et culturelle**. **On s'arrête là.** |
| ✨ **Actu HIP-4** | Le **3ᵉ modèle**, celui d'Hyperliquid : pas une appli de paris, une **infrastructure**. C'est là que la comparaison à 3 prend son sens. |

**Pourquoi ce découpage** : si les trois acteurs sont traités dans ON ÉCLAIRE, l'actu HIP-4
devient un doublon et n'a plus de chute. En coupant ici, chaque rubrique a son rôle et le
lecteur monte une marche à la fois.

### Exemple chiffré à réutiliser
Un contrat YES acheté à **0,62 USDC** rapporte 1 USDC si l'événement se réalise, 0 sinon.
Perte maximale = la mise (0,62). Gain maximal = 0,38. Le prix **est** la probabilité
attribuée par le marché.

---

## 4. ✨ DANS LE FAISCEAU — les actus

### ⚠️ Actu HIP-4 : angle imposé par l'historique

**HIP-4 a DÉJÀ été traité dans le #1** (3 juin 2026) — voir `site/app/numeros/issues.ts`,
actu « Hyperliquid lance les marchés de prédiction (HIP-4) ». L'avis du #1 expliquait
**déjà** le hedging via un contrat NON sur « BTC au-dessus de 110 000 $ ».

- ❌ **Ne pas** réécrire « Hyperliquid lance les marchés de prédiction » → déjà dit
- ✅ **Angle retenu** : « *on t'en avait parlé en juin — voilà ce qui a changé depuis* »
  - passage en **phase 2 permissionless** (deployers tiers)
  - **trade.xyz** se lancerait dessus `[À VÉRIFIER — non confirmé, à valider au fact-check]`
  - le point clé : ça ne vise **pas** le même public que Polymarket

La continuité d'un numéro à l'autre est un atout : on suit les sujets au lieu d'empiler des news.
ON ÉCLAIRE, qui explique enfin le mécanisme de base, donne rétroactivement du sens au #1.

### Deux actus macro (à écrire jeudi, après les décisions)
- **FOMC du 16 septembre**
- **CLARITY Act du 15 septembre**

Rappel formule : **chaque actu a obligatoirement son encadré vert « 💡 Notre avis »**.

---

## 5. 🔍 SOUS LA LOUPE — option B retenue

Marc a choisi l'**option B** : un protocole **à rendement réel**, **sans lien** avec le thème
des marchés de prédiction. La formule reste intacte (rubrique « Le rendement : taux actuel +
fourchette sur 1 an »), au prix de l'unité thématique du numéro.

**Raison du rejet de l'option A (Polymarket)** : un marché de prédiction ne produit **pas** de
rendement — c'est un pari, pas un placement. Il aurait fallu déroger à la rubrique « Le rendement ».

### Déjà traités — ne pas répéter
| # | Protocole |
|---|---|
| 1 | Lido (staking) |
| 2 | Re Protocol (réassurance) |
| 3 | Ethena (delta-neutre) |
| 4 | Stratégie delta-neutre sur Hyperliquid |
| 5 | Liquity V2 (emprunt) |

### ⏳ EN ATTENTE DE VALIDATION DE MARC

| Candidat | Pourquoi | Réserve |
|---|---|---|
| **Pendle** ⭐ (reco) | Sépare un actif porteur de rendement en deux jetons : le capital d'un côté, les intérêts futurs de l'autre. Très pédagogique — analogie de l'obligation à coupon détaché. Rendement réel et chiffrable. C'est le chaînon manquant du parcours : le lecteur sait staker (#1) et prêter (#5), il découvre qu'un rendement futur est lui-même un actif négociable. | Concept un cran plus abstrait que les précédents |
| **Maple Finance** | Crédit privé on-chain : le rendement vient de **vraies entreprises qui empruntent**, pas de la DeFi circulaire. Beau contraste avec tout ce qu'on a fait. | Risque de contrepartie à bien expliquer |
| **Morpho** | Coffres curatés, thème « qui choisit où va ton argent ». | Trop proche du #5 (prêt/emprunt) |

**➡️ Demander l'arbitrage à Marc avant de lancer le rédacteur sur cette section.**

⚠️ Règle projet : **lire d'abord la fiche wiki** correspondante avant de rédiger une fiche
protocole — ne jamais rédiger de tête. **Le wiki Obsidian (Google Drive) n'est PAS accessible
depuis une session cloud.** Marc a indiqué qu'on n'en aurait « pas besoin pour cette édition » :
si la fiche SITE détaillée devient nécessaire, la reporter au retour plutôt que d'improviser.
(La version newsletter, courte et vulgarisée, reste faisable sans le wiki.)

---

## 6. 💡 ÇA BRILLE (data de la semaine)

Piste : la croissance des marchés de prédiction — **15,8 Md$ en 2024 → 63,5 Md$ en 2025**.
`[À VÉRIFIER]` — chiffre issu de l'article source (voir §8), non confirmé.

---

## 7. 📖 DÉFINITIONS (2 termes)

Pistes : **« carnet d'ordres »** et **« market maker »** — deux termes qui reviennent partout
dans le numéro.

⚠️ **Vérifier d'abord le glossaire** : `carnet-ordres` et `market-making` existent **déjà**
comme slugs dans `site/app/protocoles/protocols.ts` (fiche Hyperliquid). Voir aussi la
mémoire `glossaire.md`. Si déjà définis, choisir deux autres termes
(pistes : *settlement / résolution*, *collatéral*, *payoff*).

---

## 8. ⚠️ Alertes sur l'article source (HIP-4)

Marc a fourni un long article d'analyse sur HIP-4. **Trois réserves à garder en tête :**

### a) L'article est promotionnel
Il contient un CTA « Commencez à trader sur Hyperliquid » et un mur premium. Sa thèse
(« AWS de la liquidité », HIP-4 = nouvelle phase historique) est **celle d'un acteur
intéressé**, pas un constat neutre.
→ S'en servir pour le **mécanisme** (bien expliqué), **jamais** pour l'**opinion**.
Le « 💡 Notre avis » doit être le nôtre, et probablement plus prudent.

### b) Incohérence interne dans le texte
L'article dit qu'un deployer HIP-3 lance un outcome market « avec le même stake de
**500 000 HYPE** », puis plus loin que la phase 2 repose sur « un seul stake de
**1 million de HYPE** ». Les deux ne peuvent pas être vrais simultanément.
→ À trancher au fact-check. **Sinon ne citer aucun des deux chiffres.**

### c) Tous les chiffres sont à revérifier
Volumes Cboe (15,2 Md de contrats, 0DTE = 59 % du volume SPX), Deribit (1 875 Md$ de
volume 2025, >85 % de part de marché), marchés de prédiction (63,5 Md$ en 2025 vs 15,8 Md$
en 2024, run rate 2026 ~250 Md$), capacité Hyperliquid (200 000 ordres/seconde),
frais (7 bps taker / 4 bps maker), Polymarket (jusqu'à 2 % sur les positions gagnantes).

### d) ZÉRO copier-coller
Consigne explicite de Marc. On reprend le **mécanisme**, jamais les formulations.

---

## 9. Rappels de formule (checklist #6)

1. Intro « Bonjour » + bloc « Au menu »
2. 🔦 ON ÉCLAIRE — marchés de prédiction
3. ✨ DANS LE FAISCEAU — 2 actus, **chacune avec son encadré vert « 💡 Notre avis »**
4. 🔍 SOUS LA LOUPE — protocole ⏳ + badge de risque 🟢/🟡/🔴 justifié
5. 📊 LES REPÈRES — BTC/ETH/SOL/HYPE/BNB + encadré vert « Notre avis » sous le tableau
6. 💡 ÇA BRILLE — 1 data (carte nuit/violet)
7. 📖 DÉFINITIONS — 2 termes, puces dorées
8. ✉️ À toi de jouer — question + sondage A/B
9. Disclaimer « Ce contenu n'est pas un conseil en investissement. »

**Liens** : tout terme défini → `https://www.cryptoluciole.com/glossaire/<slug>` ;
protocole SOUS LA LOUPE → `/protocoles/<slug>`.
⚠️ **Déployer le site AVANT l'envoi en masse**, sinon les liens 404.

---

## 10. Avant d'envoyer — rappel sécurité

- Adresse de test : **toubas.antoine@gmail.com** (voir mémoire `adresse-test-email.md`)
- Objet de test **unique et varié à chaque envoi** (sinon Gmail replie les tests en
  conversation et ça ressemble à tort à une troncature)
- Email **< 102 Ko**
- Ordre imposé : **fact-check → correction → mail de test → `--dry-run` → `--send`**
- ⛔ **Ne pas** utiliser l'éditeur Broadcast Resend — API `/emails` uniquement
- 🔴 L'envoi en masse est **irréversible** (19 abonnés). À faire depuis une **connexion
  stable** (hôtel, pas 4G en déplacement), jamais sans mail de test validé.
- 🔑 `RESEND_API_KEY` et `RESEND_AUDIENCE_ID` vivent dans `site/.env.local` (gitignored,
  donc **absent d'une session cloud**) → à ajouter en variables d'environnement côté cloud.

---

## 11. État du dépôt au moment de la passation

- Branche `main`, working tree **propre**, tout est poussé sur
  `github.com/AntoineBatou/cryptoluciole` (**dépôt public** — ne jamais y committer de clé).
- Numéros publiés : **#1 à #5**. Rien de commencé pour le #6.
- Les 4 agents (`veilleur`, `redacteur`, `verificateur`, `fact-checker`) et le skill
  `/veille` sont versionnés dans `.claude/` → disponibles en session cloud.

### ✅ Mémoire versionnée
La mémoire est mirrorée dans **`docs/memoire/`** (fiche de style, glossaire, journal de bord,
sources de veille, + le `CLAUDE.md` global de Marc). Les agents `redacteur`, `verificateur`
et `veilleur` pointent dessus en priorité, avec repli sur le chemin local du Mac.
→ Le setup fonctionne à l'identique depuis une session cloud.

⚠️ C'est un **miroir**, pas la source de vérité (voir `docs/memoire/README.md`). Si une leçon
de style est capitalisée pendant le déplacement, elle s'écrit dans `docs/memoire/` : penser
à la recopier vers `~/.claude/.../memory/` au retour sur le Mac.

### 🔴 Seul point restant : les secrets
`site/.env.local` est gitignored (et doit le rester — **dépôt public**). Les clés
`RESEND_API_KEY` et `RESEND_AUDIENCE_ID` devront être ajoutées en variables d'environnement
de la session cloud pour pouvoir envoyer.
