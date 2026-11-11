---
name: feedback-questionner-x
description: Réflexe validé par Marc : avant de figer une analyse (SOUS LA LOUPE, fiche, dossier), interroger X pour repérer les angles manqués
metadata:
  type: feedback
---

Avant de figer l'analyse d'un protocole ou d'un produit (SOUS LA LOUPE, fiche site, dossier),
**interroger X (Twitter)** sur les 2 dernières semaines pour voir si on rate un aspect, une critique
ou une analyse intéressante. Marc (2026-11-04) : « c'est un bon réflexe de questionner Twitter pour
voir si on rate pas des aspects intéressants ».

**Why :** au numéro 9, la recherche X sur PendleLoop a révélé un angle absent du texte — l'argument
principal de Pendle (levier sur actions jusqu'à ~70 % moins cher que les perps Hyperliquid) — qui
montrait que « le levier sur actions en un clic » n'était pas une nouveauté absolue. Elle a aussi
donné la nature du jeton (adossé chez Alpaca) et la liquidité partagée (Makina sur le même marché Aave).

**How to apply :**
- Outil : skill `web-access` → `treg call treg.x.search.posts --data '{"q":"<terme>"}'`
  (champ `q`, pas `query` ; ~0,001 $/appel ; poser `X-Treg-Route-Max-Cost`). Sortie JSON
  `output.posts[]` (text, authorUsername, likeCount, viewCount, url, createdUtc).
- Plusieurs requêtes : nom du produit, nom + actif phare, nom + risque.
- Trier par crédibilité : compte officiel, analystes reconnus ; écarter le bruit, les rumeurs et
  les chiffres de comptes inconnus.
- Un post X = une piste, jamais une source finale : un fait trouvé sur X doit être recoupé
  (source primaire) ou marqué [À VÉRIFIER]. Reformuler, ne pas recopier (OAK et autres nous lisent).
- Voir [[feedback-selection-sujets]], [[sources-veille]], [[feedback-analyse-tranchee]].
