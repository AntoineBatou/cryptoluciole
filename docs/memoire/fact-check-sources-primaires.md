---
name: fact-check-sources-primaires
description: "Endpoints DeFiLlama et réflexes de vérification pour le fact-check des numéros (cours historiques, frais de chaîne, taux d'emprunt CDP)"
metadata:
  type: reference
---

Recettes vérifiées le 2026-09-10 (numéro #5). Toujours préférer ces sources à la presse,
qui recopie des chiffres périmés — voir l'épisode des taux Sky dans [[etat-projet]].

## Cours
- Prix courant : `https://coins.llama.fi/prices/current/coingecko:bitcoin,coingecko:ethereum,…`
- **Prix historique** : `https://coins.llama.fi/prices/historical/<timestamp>/<coins>` —
  indispensable pour les variations 7 jours ET pour dater un pic. C'est ce qui a montré que
  le sommet du bitcoin à 81 000 $ était du **4** septembre, pas du 3.
  ⚠️ Le timestamp est horodaté à la seconde : deux relevés dans la même journée peuvent
  donner des variations différentes (le #5 est passé de « tout en vert » à « tout en rouge »
  en trois heures). **Relever juste avant l'envoi, et réécrire l'avis si le sens s'inverse.**

## Chaînes (frais, revenus, TVL)
- `https://api.llama.fi/overview/fees/<chain>?dataType=dailyFees` (et `dailyRevenue`)
- `https://api.llama.fi/overview/dexs/<chain>` pour le volume DEX
- `https://api.llama.fi/v2/chains` pour la TVL (chercher par `name`)
- ⚠️ **« frais » ≠ « revenu »** : les frais sont ce que paient les utilisateurs à toutes les
  applications ; le revenu est ce que garde la chaîne. Ne jamais comparer l'un à l'autre.

## Taux d'emprunt des CDP
- `https://yields.llama.fi/lendBorrow` donne `apyBaseBorrow` mais **sans le nom du projet** :
  croiser avec `https://yields.llama.fi/pools` (champ `project`, `symbol`).
- **Filtrer sur `mintedCoin`** pour isoler les vrais coffres CDP : sans ce filtre, on lit le
  taux pour emprunter le collatéral lui-même, pas le stablecoin. Piège rencontré au #5.
- Identifiants utiles : `sky-lending`, `liquity-v2`, `fx-protocol`, `sparklend`.
- ⛔ `https://yields.llama.fi/chartLendBorrow/<pool>` (historique des taux d'emprunt) est
  **devenu payant** — HTTP 402. Pas de moyenne historique gratuite : ne pas en inventer une.

## Réflexe général
Un chiffre noté dans un dossier de faits n'est pas acquis : le #5 en contenait trois faux
(voir [[etat-projet]]). **Re-vérifier au moment d'écrire**, surtout si le chiffre porte une
conclusion (comparaison, classement, « X gagne plus que Y »).
