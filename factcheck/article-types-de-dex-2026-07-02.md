🔍 Fact-checker — article « Les grandes familles de DEX » — 2026-07-02

VERDICT : 🟢 GO (sous réserve de rafraîchir les 5 chiffres volatils le jour de la publication)

> Recherche web réelle effectuée pendant la session. Chiffres non figés = marqués `[À VÉRIFIER]` dans le brouillon, listés ici avec source + valeur trouvée. Aucun chiffre inventé.

## ✅ Vérifié cette session (à revalider le jour J car volatils)

1. **Ratio volume DEX / CEX ≈ 29 % (juin 2026)** — confirmé, présenté comme record.
   Source : The Block, « DEX to CEX Spot Trade Volume », consulté le 2026-07-02.
   → Volatil : redonner la valeur du mois de publication.

2. **Volume DEX au comptant 2025 ≈ 4 900 Md$** — confirmé.
   Source : CoinGecko / DeFiLlama (agrégats 2025), consulté le 2026-07-02.
   → Durable (chiffre annuel clos), mais vérifier la formulation « près de 4 900 Md$ ».

3. **Gas 3-hops : V2 ≈ 350k / V3 ≈ 260k / V4 ≈ 145k** — confirmé.
   Source : docs Uniswap + Cyfrin « Uniswap V4 vs V3 », consulté le 2026-07-02.
   → Durable (ordre de grandeur technique). OK.

4. **Agrégateurs : >50 % du volume swap sur Ethereum, >90 % sur Solana (Jupiter)** — confirmé.
   Source : 1inch blog + articles agrégateurs 2026, consulté le 2026-07-02.
   → Volatil : marge, garder le « plus de la moitié / plus de 90 % » (robuste), pas un chiffre précis.

5. **1inch : >700 Md$ de volume cumulé (12 chaînes)** — confirmé.
   Source : CCN « 1inch Q1 2026 », consulté le 2026-07-02.
   → Cumulé = ne baisse pas ; OK, mais dater « à début 2026 ».

## ✅ Affirmations mécaniques vérifiées (durables, pas de péremption)

- **x·y=k, impact de prix** — exact (CoinGecko AMM, docs Uniswap).
- **Liquidité concentrée V3, gain d'efficacité jusqu'à ~4000× sur stablecoins** — exact (support Uniswap Labs).
- **Curve StableSwap, <0,01 % d'impact sur gros trade stable** — exact (whitepaper StableSwap / ordres de grandeur 3pool).
- **CoW Protocol : batch ~30 s, solvers en concurrence, Coincidence of Wants, appariement P2P puis liquidité externe, règlement au même prix** — exact (docs cow.fi, consulté 2026-07-02).
- **Hyperliquid : CLOB entièrement on-chain, matching dans le consensus** ; **dYdX : carnet hors-chaîne + règlement on-chain** — exact (docs/analyses 2026).
- **Hashflow : RFQ, prix ferme signé, calcul hors-chaîne, règlement on-chain, MEV-protégé** — exact (Messari/Consensys).
- **Turbine : TEE (Intel TDX/Phala), fenêtre 10 min–7 j, Speedbump, protection LVR, bêta/centralisé** — cohérent avec l'analyse interne `../analyste-defi/analyses/TURBINE-turbine-2026-06-30.md` (30/06/2026).

## 🧩 Actualité / manques éventuels

- Rien de périmé détecté. Le paysage (V4 hooks, essor intents, CLOB dérivés, DEX confidentiels) est à jour à la date du jour.
- Suggestion non bloquante : si publication tardive, revérifier qu'aucun acteur majeur cité (1inch, CoW, Hyperliquid) n'a connu d'incident récent d'ici la mise en ligne.

## Rappel

Aucun conseil d'investissement dans l'article (disclaimer présent). Les avis (« commence par un agrégateur », « Turbine à tester prudemment ») sont directionnels et protecteurs, conformes à la ligne éditoriale.
