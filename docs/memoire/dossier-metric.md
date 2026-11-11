---
name: dossier-metric
description: "2e dossier de fond (Metric, DEX à prix oracle) — réécrit depuis l'analyse analyste-defi, en local, pas encore déployé"
metadata:
  node_type: memory
  type: project
  originSessionId: e530d091-a819-42d3-a342-254d82b0cd93
  modified: 2026-10-30T12:36:14.437Z
---

**Dossier Metric** (2026-10-30) : réécriture de `../analyste-defi/analyses/METRIC-mecanisme-lp-2026-10-30.md` (Marc : « pas mal mais ça manque d'explications »). Plan validé par Marc : Intro → Partie I mécanique (I.1 LVR → I.2 vie d'un trade → I.3 bins → I.4 spread → I.5 sélection adverse + Edge/markout/Trading PnL → I.6 qui fixe le prix, labels, bourse fermée, conflit d'intérêts curator) → Partie II chiffres (II.1 pool WETH-USDG, II.2 croissance, II.3 concentration, II.4 vs Uniswap, II.5 token/modèle/audits) → Verdict. Vérificateur : 7,5 puis **8,5/10**.

**Fichiers** : source = `drafts/articles/metric/dossier.md` (markdown, À ÉDITER ICI) → `python3 drafts/articles/convert_dossier.py drafts/articles/metric/dossier.md site/app/dossiers/metric-parties.ts METRIC_PARTIES` (convertisseur versionné, ajoute les espaces insécables, réutilisable pour tout futur dossier). Figures SVG = `site/app/dossiers/metric-figures.tsx` (clés `metric-1..5`, champ `cle` du bloc figure). Captures = `site/public/dossiers/metric/`. Nouveaux blocs site : `image`, liens markdown `[x](url)` dans le texte.

**État** : ✅ **PUBLIÉ le 2026-10-30** (commit `6f8b888`, https://www.cryptoluciole.com/dossiers/metric), avec vignette sur l'accueil. Fact-check : NO-GO léger corrigé (part Metric 15 % vs « 7,5 % du spread complet » expliquée ; CTO = cofondateur selon RootData, passé Uniswap non confirmé ; StopLoss = limite la vitesse de perte, ne plafonne pas ; APR Uniswap v3 0,05 % = 45-60 % selon le jour, rotation ~1×/j ; bStocks = pools ancrées, flux « synthétique », Chainlink Data Streams selon la presse). ⚠️ Le fact-checker a cru absentes 4 citations de la doc qui y sont verbatim (il n'avait lu que des résumés) : revérifier soi-même dans `llms-full.txt` avant de corriger une citation. Brouillons + rapport `factcheck/2026-10-30-dossier-metric.md` restés en local (dépôt public). Textes de promo (X, LinkedIn, Discord école) rédigés, à poster par Marc.

Voir [[dat-dossier]], [[lecteur-dossiers]], [[style-editorial]].
