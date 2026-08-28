# 📊 LES REPÈRES

> Tableau des cours. Colonnes colorées : vert `#16a34a` (hausse) / rouge `#dc2626` (baisse).
> ⚠️ NOUVEAU dans ce numéro : une 2e colonne de variation, « depuis notre dernier numéro » (le #3, 4 juillet 2026),
> en plus des 7 jours. Prix de référence = ceux PUBLIÉS dans le #3 (cohérence entre numéros), pas un relevé d'API.
> ⚠️ RAFRAÎCHIR LE JOUR DE L'ENVOI — relevé ci-dessous : **vendredi 28 août 2026**.

---

| Crypto | Prix | 7 jours | Depuis le #3 (4 juillet) |
|---|---|---|---|
| **Bitcoin** (BTC) | 79 415 $ | 🟢 +2,2 % | 🟢 **+25 %** |
| **Ethereum** (ETH) | 2 491 $ | 🟢 +4,2 % | 🟢 **+39 %** |
| **Solana** (SOL) | 106,50 $ | 🟢 +16,8 % | 🟢 **+30 %** |
| **Hyperliquid** (HYPE) | 83,28 $ | 🟢 +12,8 % | 🟢 **+19 %** |
| **BNB** (BNB) | 705,37 $ | 🟢 +5,0 % | 🟢 **+23 %** |

*Prix au 28 août 2026 ; variations sur 7 jours et depuis le numéro #3 du 4 juillet 2026. Source : DeFiLlama (agrégation CoinGecko).*

---

> ### 💡 Notre avis (encadré vert)
>
> Deux lectures très différentes selon la colonne. Sur sept jours, le bitcoin ne fait que consolider : le gros du mouvement date de la semaine précédente, quand la SEC a publié ses propres règles le 18 août — l'actu qu'on détaille plus haut. Solana et Hyperliquid, eux, continuent de grimper, signe classique d'un appétit pour le risque qui se déplace vers les actifs plus nerveux.
>
> Mais c'est la colonne de droite qui raconte l'été : **tout est en hausse de 19 à 39 % depuis notre dernier numéro.**

---

**Commande de rafraîchissement :**
```
IDS="coingecko:bitcoin,coingecko:ethereum,coingecko:solana,coingecko:hyperliquid,coingecko:binancecoin"
curl -s "https://coins.llama.fi/prices/current/$IDS"
curl -s "https://coins.llama.fi/prices/historical/$(( $(date +%s) - 604800 ))/$IDS"
# Références #3 (publiées) : BTC 63 370 · ETH 1 791 · SOL 82,0 · HYPE 70,1 · BNB 574
```
