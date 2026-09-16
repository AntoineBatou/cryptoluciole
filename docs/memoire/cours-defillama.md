---
name: cours-defillama
description: "Comment récupérer les VRAIS cours (rubrique LES REPÈRES) via l'API DeFiLlama"
metadata: 
  node_type: memory
  type: reference
  originSessionId: 90507c6d-d393-4d8b-99c7-5a756f3f0a77
---

Pour la rubrique 📊 LES REPÈRES, ne PAS se fier aux prix issus de WebSearch
(souvent faux/périmés — ex. ETH donné +1,6 % alors qu'il était à −7 %). Utiliser
l'**API publique DeFiLlama coins** (gratuite, pas de clé), le même pattern que
`trackpaw/src/app/api/coingecko/price/route.ts`.

IDs CoinGecko des actifs habituels :
`bitcoin, ethereum, solana, hyperliquid, binancecoin` (BNB = binancecoin).

**Prix actuels :**
`curl -s "https://coins.llama.fi/prices/current/coingecko:bitcoin,coingecko:ethereum,coingecko:solana,coingecko:hyperliquid,coingecko:binancecoin"`

**Prix il y a 7 jours (pour la variation) :** même URL avec
`/prices/historical/<timestamp_now_moins_7j>/...`. Variation = (actuel − J−7)/J−7.

Marc a une clé CoinGecko dans `trackpaw/.env.local` (NE PAS lire le secret) si on
veut un jour passer par CoinGecko direct, mais DeFiLlama suffit et évite la clé.
Toujours « à rafraîchir le jour de l'envoi ».

**APY d'un protocole (rendements SOUS LA LOUPE)** : source fiable =
`https://yields.llama.fi/pools` (gratuit), filtrer par `project` ou `symbol`.
Ex. vérifié le 2026-06-24 : project « re » → reUSD 6,74 %, reUSDe 12,0 %
(le « jusqu'à 23 % » d'un guide promo était faux). Toujours préférer DeFiLlama
yields à un blog/guide pour un APY. Voir [[etat-projet]].
