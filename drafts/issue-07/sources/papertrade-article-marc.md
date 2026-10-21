# Article fourni par Marc le 2026-10-19 — « papertrade : introduction à la plateforme qui récompense les trades perdants »

> Source tierce (rubrique « Insight », publiée AVANT le lancement du 10/10). À RECOUPER, NE PAS RECOPIER (règle d'originalité). Chiffres pré-lancement.

Points clés (résumé de l'article) :
- DEX de perps sur HyperEVM, levier jusqu'à ×1000, on trade contre une LP (pas d'orderbook ni de market maker).
- Aucune position réelle : le protocole lit l'oracle d'HyperCore (BBO) via precompile, calcule un mid price, valorise la position selon l'écart × levier. Pas de slippage, pas de funding.
- LP démarre à zéro, personne ne peut y déposer ; elle ne grossit qu'avec les pertes des traders (marge entière si liquidation, perte réalisée si clôture perdante) et paie les gagnants.
- Token PAPER (ERC-20, non transférable au lancement) : 100 PAPER par dollar perdu sous 2 M$ dans la LP ; au-delà de 2 M$ ratio décroissant (compteur qui ne redescend jamais) ; au-delà de 5 M$ les gains de la LP sont redistribuables en USDC aux stakers. Premier arrivé, premier servi. Pas de supply max annoncée.
- Gagnants : récupèrent marge + profit après décote « impact asymétrique » (plus le mouvement est grand, moins la décote est forte).
- LP vide : marge rendue, profit en file d'attente FIFO, payé quand la LP se remplit.
- Étude Sumcap : 608 scénarios, LP solvable dans 100 % ; dans 494, aucun gagnant en file d'attente. Limites : seuls des traders Hyperliquid au levier max, paramètres de décote de Rollbit, pas d'effet du prix PAPER modélisé.
- ×1000 → liquidation à 0,05 % de mouvement contre soi.
- Risque reconnu par la doc : manipulation du BBO — un ordre limite placé dans le spread d'Hyperliquid, même non exécuté, déplace le mid d'un tick ou deux ; pas de prix de référence indépendant. Atténuations : deadband (gains < 0,2 pb annulés), décote sur petits mouvements, plafonds d'OI. Perte → LP.
- Pas d'alignement avec Hyperliquid : aucun frais de trading pour Hyperliquid, OI non impacté ; seul le gas HyperEVM en HYPE (ex. 100 M$/jour de volume = 45 000 $ de frais potentiels perdus à 0,045 % taker).
- Lancement : BTC et ETH uniquement, plafond de notionnel 10 M$/utilisateur, pas d'ajout de marge ni de clôture partielle.

Post-lancement (recherche web 2026-10-19, à recouper) : ~52 k$ de frais payés, ~1,28 M$ retirés de la LP en ~8 h (KuCoin) ; The Block : l'adresse a déposé ~1,2 M$ et retiré ~24,8 M$ ce jour-là ; un ou deux wallets selon les sources ; Papertrade a resserré les limites de position.
