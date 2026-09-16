---
name: verificateur-fiches-site
description: "Les fiches protocoles du SITE passent au vérificateur comme les sections de newsletter — 2 à 3 boucles, seuil 8"
metadata:
  type: feedback
---

Une fiche protocole du site se fait relire par le sous-agent `verificateur` avant publication,
exactement comme une section de newsletter : notation /10, seuil 8, boucles jusqu'à l'atteindre.
Demandé explicitement par Marc le 2026-08-31 (« tu as bien fait relire par un agent qui a vérifié
que c'est bien mon style […] n'hésite pas à refaire plusieurs lectures correction globales »).

**Why:** sur les fiches Ethena et Hyperliquid, écrites sans relecture, les deux premières passes
ont rendu **6,5/10**. Le vérificateur a trouvé ce que ma relecture avait manqué : une **erreur de
calcul factuelle** (4 → 7,5 Md$ annoncé « +50 % » au lieu de +87,5 %) au cœur de l'argument, et
**9 francisations interdites** dont deux dans des titres (« teneur de marché », « dette
irrécouvrable », « coffre » pour vault). Deux boucles ont suffi pour passer à 8 et 8+.

**How to apply:**
1. Rédiger la fiche, puis lancer un `verificateur` PAR fiche (en parallèle si plusieurs).
2. Dans le prompt : pointer le fichier + l'objet `slug:`, donner la fiche `re` comme mètre-étalon
   validé par Marc, exiger des correctifs **verbatim prêts à coller**, et lui interdire de
   réécrire. Lui nommer les règles qu'on soupçonne d'avoir enfreintes accélère beaucoup.
3. Reboucler via SendMessage sur le MÊME agent (il garde le contexte, la 2e passe est ~3× plus
   rapide) en listant ce qui a été appliqué, et lui demander de traquer les **effets de bord** des
   corrections — c'est là qu'ils apparaissent : sur Ethena, insérer un encadré `def` au milieu d'un
   raisonnement en deux temps avait cassé l'anaphore du paragraphe suivant.
4. Ne pas suivre le vérificateur aveuglément : il a proposé sur Hyperliquid un « toi compris, en
   théorie » factuellement faux (500 000 HYPE = plusieurs dizaines de M$). Contre-proposer et
   argumenter — il a reconnu l'erreur et abandonné son objection.

Voir [[fiches-protocoles-site]] et [[style-editorial]].
