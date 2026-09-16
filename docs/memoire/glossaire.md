---
name: glossaire
description: Discipline glossaire CryptoLuciole — source unique + liens auto sur chaque terme
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 90507c6d-d393-4d8b-99c7-5a756f3f0a77
---

CryptoLuciole a un **glossaire central** = source unique de toutes les
définitions déjà publiées. **CONSTRUIT (2026-06-24)** : `site/app/glossaire/terms.ts`
(slug, terme, definition, numero) + page index `/glossaire` + `/glossaire/[terme]`
(vraie définition, fallback « en construction » si slug inconnu). En prod.
**Pour un nouveau terme : l'ajouter à `terms.ts`** (slug canonique : minuscules,
sans accent, tirets).

**Why:** Marc veut que les lecteurs (Grégoire, débutant) puissent retrouver
chaque notion. Et il délègue le suivi à Claude.

**How to apply (à chaque numéro, RESPONSABILITÉ DE CLAUDE) :**
- Tenir le glossaire à jour : tout nouveau terme défini → l'ajouter à
  `terms.ts` avec le numéro où il a été défini.
- **Faire le lien automatiquement** dès qu'un terme du glossaire réapparaît
  dans un contenu : sur le **site**, composant `<Terme>` (soulignement
  pointillé + tooltip au survol + lien vers `/glossaire#slug`) ; dans le
  **mail**, simple hyperlien vers `https://www.cryptoluciole.com/glossaire#slug`
  (le survol n'est pas fiable en email).
- Termes déjà définis à reporter : staking, validateur, AVS, LST, LRT,
  slashing, restaking (numéro #2) ; **TVL défini dans le #1**.

Voir [[etat-projet]].
