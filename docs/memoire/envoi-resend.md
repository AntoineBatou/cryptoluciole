---
name: envoi-resend
description: "L'envoi/inscription CryptoLuciole est passé de beehiiv à Resend"
metadata: 
  node_type: memory
  type: project
  originSessionId: 90507c6d-d393-4d8b-99c7-5a756f3f0a77
---

**Décidé : bascule complète vers Resend** (inscription + envoi), beehiiv
abandonné. Le CLAUDE.md décrivait encore beehiiv — corrigé le 2026-06-23.

**Why:** Marc a confirmé « on a basculé entièrement sur Resend ». Commits
`c6fc450` et suivants.

**How to apply (pour un nouveau numéro) :**
- Domaine vérifié Resend : `send.cryptoluciole.com` ; expéditeur
  `CryptoLuciole <mail@send.cryptoluciole.com>`.
- Route d'inscription : `site/app/api/subscribe/route.ts` → ajoute le contact à
  l'audience Resend (`RESEND_AUDIENCE_ID`) PUIS envoie un mail de bienvenue
  best-effort (= le dernier numéro complet).
- Le mail de bienvenue choisit AUTO le dernier numéro via
  `site/app/emails/latest.ts` → tableau `ALL_ISSUES` (le plus grand `number`).
- **Nouveau numéro** : créer `site/app/emails/issues/issue-0X.ts` (modèle
  `issue-01.ts`) + l'ajouter à `ALL_ISSUES` dans `latest.ts`. Rien d'autre.
- Secrets : `RESEND_API_KEY` + `RESEND_AUDIENCE_ID` (local `.env.local` +
  Vercel). Ne jamais committer la clé.
## ✅ WORKFLOW D'ENVOI OFFICIEL (figé le 2026-06-24) — via l'API, PAS le Broadcast

Tout passe par **`site/scripts/send-newsletter.mjs`** (lit `RESEND_API_KEY` +
`RESEND_AUDIENCE_ID` depuis `.env.local`, jamais affichés). Trois modes :
```
cd site
node scripts/send-newsletter.mjs <issue.ts> --test <adresse-test-projet>  # à toi seul (canal réel)
node scripts/send-newsletter.mjs <issue.ts> --dry-run                         # compte l'audience, n'envoie rien
node scripts/send-newsletter.mjs <issue.ts> --send                           # ENVOI RÉEL à toute l'audience
```
- Le script récupère TOUTE l'audience en suivant la **pagination curseur**
  (`after` + `has_more`), exclut les désinscrits, envoie en batch `/emails` avec
  en-tête `List-Unsubscribe`. `--test` et `--send` = MÊME chemin → rendu fidèle.
- Ordre : `--test` (valider le rendu dans sa vraie boîte) → `--dry-run` (vérifier
  le nombre de contacts) → `--send`.
- `site/scripts/send-test.mjs` existe aussi (test rapide à une adresse).

## Reply-To + désinscription = contact@cryptoluciole.com (2026-07-22)
`send.cryptoluciole.com` est un sous-domaine d'ENVOI (pas de MX) → réponses et
désinscription y rebondissaient. Corrigé partout : `reply_to = contact@` dans
`send-newsletter.mjs` (test + batch) ET dans le mail de bienvenue
(`api/subscribe/route.ts` + `NEWSLETTER_REPLY_TO`/`UNSUBSCRIBE_MAILTO` de
`latest.ts`). `contact@cryptoluciole.com` est une **redirection OVH vers le
Gmail de Marc**. Voir [[adresse-test-email]].

## Mail de bienvenue + confirmation d'inscription = 100% AUTO — ne JAMAIS remettre de champ manuel
Le mail de bienvenue envoie le **dernier numéro** (plus grand `number` d'`ALL_ISSUES`)
+ un **encart dossier** injecté par `welcomeHtml()` (lien /dossiers/dat). Le message
de confirmation sur le site (`SignupForm.tsx`) annonce « #N « Titre » (date) » —
tout est **dérivé du numéro lui-même** : titre depuis le sujet, **date extraite du
HTML** (`latestIssueMeta` dans `latest.ts`). ⚠️ Marc y tient : **aucune intervention
manuelle par numéro** (risque d'oubli). Le seul geste = créer `issue-0X.ts` + l'ajouter
à `ALL_ISSUES` (déjà obligatoire) ; le reste suit tout seul. NE PAS réintroduire de
champ `date` à remplir à la main.

## ⛔ NE PLUS utiliser l'éditeur Broadcast Resend
Constaté au #2 : le **Broadcast RÉENCAPSULE le HTML collé** (conteneur ~560-600px
+ styles globaux) → écrase notre fond gris pleine largeur et le centrage, rendu
plus étroit que prévu. Le `/emails` (API) envoie notre HTML BRUT = fidèle.
**Toujours valider le rendu par le canal RÉEL d'envoi avant un mass-send** (le
test API est représentatif ; un test Broadcast ne l'est pas).

Voir [[etat-projet]].
