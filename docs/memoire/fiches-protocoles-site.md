---
name: fiches-protocoles-site
description: "Fiche protocole du SITE = version détaillée tirée du wiki, distincte de la newsletter (courte)"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 969cba79-4a37-4e21-9754-810a58d9d6c1
---

Pour les protocoles, deux niveaux de contenu à ne JAMAIS confondre (figé le 2026-06-24) :
- **Newsletter** (email + `site/app/numeros/issues.ts`) = court, succinct, vulgarisé. On vérifie juste qu'elle est *en accord* avec le wiki, on ne change rien si déjà envoyée.
- **Fiche SITE** (`site/app/protocoles/protocols.ts`) = la version qui va plus loin pour qui clique « → Voir la fiche complète ». Plus technique, plus longue, chiffrée, risques nuancés, mais garde l'esprit clair/aéré du site.

**Why:** Marc a constaté que j'avais rédigé la fiche Re « de tête » au lieu d'utiliser ses sources. Le site doit être l'endroit où on approfondit ; la newsletter reste un teaser court.

**How to apply:** AVANT d'écrire une fiche protocole pour le site, lire d'abord la fiche WIKI correspondante (ne jamais rédiger de mémoire). Sources : `~/Library/CloudStorage/GoogleDrive-<adresse-test-projet>/Mon Drive/Obsidian/A/_wiki/protocoles/` et `Obsidian/A/Crypto/Protocoles/...`, + analyses `../analyste-defi/analyses/`. Modèle = type `ProtocoleFiche` (enBref, score, sections de blocs souples `ProtoBloc`, pointsCles, verdict, sources), rendu par `site/app/protocoles/[id]/page.tsx`. Voir [[sources-veille]] et [[glossaire]].

**Chiffres LIVE (figé 2026-06-25) — pour CHAQUE protocole** : TVL et APY/rendement ne sont JAMAIS recopiés du wiki en dur, mais récupérés en direct via DeFiLlama (recette du projet `../trackpaw`). Helper `site/app/protocoles/live.ts` (TVL `api.llama.fi/tvl/<slug>`, APY `yields.llama.fi/chart/<poolUUID>`), champ `live:{defillamaSlug,pools[]}`, fetch serveur + `revalidate = 3600`. Le wiki = analyse durable, pas les montants. **Why:** Marc tient à ce que le site ne montre jamais un chiffre périmé.

**Note de risque Pharos.watch (fait 2026-06-25)** : encadré « 🛡️ Note de risque indépendante » dans la zone risques (grade + score + dimensions + lien `pharos.watch/stablecoin/<id>` + mini-tuto). Helper `site/app/protocoles/pharos.ts`, config `pharos:{id}` (format ticker-issuer, ex. `reusd-re-protocol` ≠ `reusd-resupply`). API `GET api.pharos.watch/api/report-cards` (header X-API-Key). **Clé = `PHAROS_API_KEY` dans `site/.env.local` + Vercel, jamais commitée/écrite en clair.** Pharos ne couvre que les stablecoins (reUSD oui, reUSDe non).

**Le wiki donne l'analyse, PAS l'actualité (appris le 2026-08-31)** : en écrivant les fiches
Ethena et Hyperliquid, le wiki (daté mai et juin 2026) était juste sur les mécanismes mais
périmé sur les faits — sUSDe y affiche 33,3 % d'APY quand le live DeFiLlama donne 4,8 %, et
il présente HIP-3 comme un pur catalyseur alors que les données d'août 2026 montrent qu'il
fait reculer le revenu du protocole. **How to apply :** après avoir lu la fiche wiki, TOUJOURS
faire 2-3 recherches web ciblées sur les 3 derniers mois du protocole avant de rédiger, et
laisser tout chiffre volatil au helper `live.ts`. Les faits neufs trouvés à cette occasion
sont ce qui donne à la fiche site sa valeur ajoutée sur le wiki. Voir [[etat-projet]].

**⚠️ `PHAROS_API_KEY` manquante (constaté le 2026-08-31)** : la clé n'est ni dans
`site/.env.local` (qui ne contient que `RESEND_API_KEY` et `RESEND_AUDIENCE_ID`) ni sur
Vercel — l'encadré « 🛡️ Note de risque indépendante » ne s'affiche donc sur AUCUNE fiche en
prod, y compris `/protocoles/re`. La dégradation est propre (rien ne casse), mais la
fonctionnalité est dormante. `pharos: { id: "usde-ethena" }` est déjà câblé sur la fiche
Ethena : l'encadré apparaîtra tout seul le jour où la clé sera ajoutée aux deux endroits.
