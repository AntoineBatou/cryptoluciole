---
name: sources-rwa-adoption
description: "4 sites RWA (rwa.xyz, DeFiLlama RWA, Token Terminal, tokenizedstonks) testés le 2026-11-11 : accès gratuit, script d'adoption, quel outil pour quelle question, pièges de périmètre"
metadata:
  node_type: memory
  type: reference
  originSessionId: ef53af43-c055-4854-866a-b7bbd8122b1d
  modified: 2026-11-11T09:06:33.707Z
---

Source : newsletter Alyra du 11/11/2026, « RWA : les 4 sites d'analyses à connaître » (lue
dans Gmail). Accès testés le même jour. Détail technique dans `../onchain/docs/sources-api.md`
§8 et pièges n° 25-26 de `../onchain/docs/pieges-lecons.md`.

## Script prêt à l'emploi (sans clé)
`python3 /Users/marc/Documents/claude/onchain/scripts/rwa_adoption.py [pages]`, avec par défaut
l'accueil, `treasuries`, `stocks` et `commodities`. Autres pages : `stablecoins`,
`platforms/xstocks`, `networks/solana`… Option `--json`.
→ Mesure l'**adoption** : détenteurs, adresses actives sur 30 j, volume de transfert et
variations sur 30 j. Utile pour ÇA BRILLE, les dossiers et les fiches protocoles RWA.

## Quel outil pour quelle question
| Question | Outil | Accès |
|---|---|---|
| Taille du secteur, vue d'ensemble | **rwa.xyz** | agrégats lisibles sans login (`__NEXT_DATA__`) ; API payante |
| Le RWA est-il **vraiment utilisé** en DeFi ? | **defillama.com/rwa** : Active AUM, DeFi Active TVL, **taux d'utilisation** par émetteur, flux 7 j | Cloudflare → **lire dans Chrome** ; `api.llama.fi/rwa/stats` = périmètre partiel |
| Comparer deux produits (émetteur, chaîne) | **Token Terminal** `/explorer/tokenized-assets` | lecture dans Chrome ; API payante |
| Où et sous quelle forme une action est tokenisée | **tokenizedstonks.io** | API JSON publique (`/api/analytics/rankings`, `/api/registry`) |

## Pièges (à appliquer en rédaction et en fact-check)
- **Ne jamais additionner ni comparer deux sites** : pour la même semaine, le marché RWA hors
  stablecoins valait 30,9 Md$ (DeFiLlama), 39,6 (rwa.xyz) et 50 (Token Terminal). Toujours
  citer **source + date + périmètre**.
- rwa.xyz : préciser **distribuée** (circule librement) ou **représentée** (registre fermé).
  L'écart est d'environ 1 à 10 (39,9 contre 418 Md$ le 11/11).
- Token Terminal compte sUSDS, sUSDe et USD0++ comme des « fonds » : bien pour comparer, **pas
  pour une taille de marché**.
- Une **capitalisation ≠ une adoption** : un émetteur peut afficher 3 Md$ avec 0,2 %
  d'utilisation en DeFi (Franklin Templeton au 11/11). Prolonge la règle « valeur détenue, pas
  volume » de [[fact-check-sources-primaires]].
- tokenizedstonks : couverture partielle (champ `coverage`) et liens sponsorisés → s'en servir
  comme annuaire, puis vérifier chez l'émetteur.

Voir aussi [[sources-veille]], [[reference-projet-onchain]].
