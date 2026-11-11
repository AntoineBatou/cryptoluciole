---
name: idees-dossiers
description: Banque d'idées de futurs dossiers (format long /dossiers) proposées par Marc, avec les traces existantes à réutiliser
metadata:
  type: project
---

Idées de dossiers notées le 2026-11-04 (« on traitera plus tard »).

1. **Comment analyser un oracle on-chain** : les types d'oracles (prix de marché Chainlink/Pyth, TWAP,
   taux de change/redemption, prix fixé en dur), comment lire l'oracle d'un marché Morpho/Aave, les pièges.
   **Traces à réutiliser** (analyse on-chain déjà faite avec analyste-defi pour boucler PT-apxUSD/PT-apyUSD) :
   - wiki `Obsidian/A/_wiki/protocoles/Apyx.md`, section « Oracles Morpho — Résultats on-chain » ;
   - `Obsidian/A/Crypto/Protocoles/RWA - Tokenisation/Stocks/APYX.md`, sections « Risque oracle » +
     « anatomie » (oracle PT-apxUSD `0x9acf…7A03` = TWAP Pendle 30 min × apxUSD fixé à 1 $ ;
     PT-apyUSD `0xAc0F…8B3e` = ApyxRedemptionOracle UUPS sans timelock + Chainlink USDC) ;
   - wiki `_wiki/concepts/Oracle.md` et `Framework-Risques-DeFi.md` ;
   - précédents : USD0++ (dépeg à 0,87 avec oracle à 1 $), xUSD Stream Finance (nov. 2025).
   Lien avec SOUS LA LOUPE PendleLoop du numéro 9 (puce risque oracles).
2. **Rollups : fonctionnement et décentralisation**, jamais traité. Grille L2Beat : stages 0/1/2,
   séquenceur, preuves (fraud/validity), data availability, sortie forcée, conseil de sécurité, upgrades.

**How to apply :** quand Marc veut lancer un dossier, proposer ces idées ; relire les traces avant de
rédiger (règle d'originalité, voir [[dat-dossier]], [[dossier-metric]], [[lecteur-dossiers]]).

**Décision de Marc (2026-11-09)** : oracles et rollups/stages L2Beat = sujets de DOSSIER uniquement, ne pas les proposer
en ON ÉCLAIRE de la newsletter (refusés pour le numéro 10).
