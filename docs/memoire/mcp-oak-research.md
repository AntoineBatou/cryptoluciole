---
name: mcp-oak-research
description: MCP OAK Research disponible (accès Premium confirmé le 2026-11-06) — outils utiles par rubrique + garde-fous
metadata:
  node_type: memory
  type: reference
  originSessionId: 31486cb9-9a3a-4ca7-a765-b2772e70d8be
  modified: 2026-11-06T10:52:12.612Z
---

MCP `oak-research` branché, **accès Premium fonctionnel** (testé 2026-11-06 : get_daily_recap + get_yields OK).

Usages retenus par rubrique :
- ÇA BRILLE : `get_unusual_activity` (scan quotidien multi-signaux, z-score) = la meilleure trouvaille ; `get_market_overview`.
- SOUS LA LOUPE : `get_yields` (rendements notés /100 ; les `poolId` sont des UUID DeFiLlama → réutilisables dans `live.pools[]`), `get_project`.
- REPÈRES / fact-check : `get_crypto` en 2e source de recoupement.
- Veille : `get_daily_recap` (FR), `get_news`, `get_calendar` (unlocks, macro US).

Garde-fous : OAK ≠ source primaire (recouper, ex. recap avec chiffre « hack Binance 6,3 Md$ » à vérifier) ; leur score ≠ notre échelle 🟢🟡🔴 ; repérer/chiffrer seulement, jamais reprendre leurs angles (cf. [[feedback-selection-sujets]]) ; contenu Premium = inspiration, pas republication.

Piste non faite : brancher le MCP dans le Veilleur (section « 📡 Signaux OAK »), cf. [[sources-veille]].
