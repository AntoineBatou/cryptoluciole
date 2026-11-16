# Numéro 11 — note de reprise (écrite le 16/11/2026 avant un /clear)

## État
**PUBLIÉ le 16/11/2026 vers 22 h : 25 envoyés, 0 échec** (commit 2ac5a6e). Reste : étape 6 du workflow (miroir docs/memoire + anonymisation).

RELECTURE DE MARC TERMINÉE. Corrections reportées, sondage A/B retiré, écritures de style faites (journal, règles, calibrage), brouillons commités (a3829c1). Reste : la section « Reste avant l'envoi » ci-dessous.

Toutes les sections sont rédigées, passées au vérificateur (≥ 8/10, sans NON) et assemblées
(`python3 drafts/build_issue.py 11` → site/app/numeros/issues.ts + site/app/emails/issues/issue-11.ts, 45 Ko).
Pas de SOUS LA LOUPE cette semaine (décision de Marc) ; build_issue.py rend désormais cette rubrique facultative.
Marc relit maintenant les .md et donne ses commentaires au fur et à mesure (il peut aussi modifier les fichiers directement).

## Fichiers
- ON ÉCLAIRE (stablechains) : drafts/issue-11/on-eclaire.md — brief + faits vérifiés : BRIEF-on-eclaire.md
- DANS LE FAISCEAU (Louisiane/CFTC, Kazakhstan) : drafts/issue-11/dans-le-faisceau.md — brief : BRIEF-dans-le-faisceau.md
- LES REPÈRES : drafts/issue-11/reperes.md
- ÇA BRILLE + définitions + jeu : drafts/issue-11/fin.md
- titre / objet / intro / menu : drafts/issue-11/meta.json
- Versions « avant Marc » (pour le diff de ses corrections) : drafts/issue-11/versions/*.avant-marc.md
  (on-eclaire.avant-marc.md date d'AVANT deux ajouts demandés par Marc ensuite : coût de Stable mesuré, et la phrase
  sur les vaults/Morpho de Stable ; ces deux ajouts sont déjà validés par lui.)

## Corrections de Marc déjà reçues (16/11)
- Stable : « il faut trouver le coût, la blockchain tourne » → mesuré (≈ 0,00002 $ au prix du gas, blocs à 0,03 %, aucun envoi d'utilisateur sur 200 blocs).
- Stable : il y a de la TVL (≈ 70 M$, Morpho, Concrete) → nuance ajoutée : argent garé, pas de circulation.
- « vault plutôt que coffre de rendement » → corrigé ; règle renforcée dans style-regles.md (section 6, date 16/11).
→ Il reste à écrire l'entrée datée au journal style-editorial.md et la ligne de docs/calibrage-verificateur.md, avec les autres corrections.

## Après la relecture de Marc (workflow CLAUDE.md, étape 4)
1. Reporter ses corrections dans les .md (jamais dans les fichiers générés), relancer build_issue.py 11.
2. Trois écritures : journal style-editorial.md (citations + pourquoi + exemple), style-regles.md, docs/calibrage-verificateur.md.
3. Registre des choix dans profil-editorial.md (déjà rempli pour le n° 11 ; compléter si Marc change un sujet).
4. Commit des brouillons (rien n'est commité pour le n° 11).

## Reste avant l'envoi
- Fact-checker (4 [À VÉRIFIER] : Polymarket US/QCEX ; communiqué CFTC introuvable ; Farside ; CoinGlass) + tous les chiffres.
- Rafraîchir les cours (DeFiLlama) le jour de l'envoi (date prévue : mardi 17/11).
- Vignette /vignettes/stablechains.jpg (n'existe pas : en créer une ou réutiliser).
- Ajouter issue11 à ALL_ISSUES dans site/app/emails/latest.ts JUSTE avant l'envoi (sinon le mail de bienvenue part avec un numéro non validé).
- 6 termes ajoutés au glossaire (site/app/glossaire/terms.ts) : energie-tron, proof-of-authority, stablechain, revenus-de-reserves, preemption-federale, note-banque-centrale.
- Mail de test (objet unique, < 102 Ko), déploiement du site, envoi via scripts/send-newsletter.mjs.

## Autres chantiers de la semaine
- Short d'actu « 15 Md$ de stablecoins disparus » : déposé dans ../videos/Scripts/ideas.md.
- Série YouTube blockchain : ../videos/Scripts/serie-blockchain/plan.md (Marc doit juger le contenu des 8 épisodes ; règle : chaque épisode indépendant).
- En attente : étapes GitHub pour l'anonymat de Marc sur Google (images des emails servies depuis cryptoluciole.com, Gmail retiré de 3 fichiers publics, dépôt en privé).
