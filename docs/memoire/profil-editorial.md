---
name: profil-editorial
description: "Profil des sujets CryptoLuciole : ce que Marc retient et écarte, avec ses raisons ; grille de tri pour la veille ; registre des choix à compléter à chaque numéro"
metadata:
  node_type: memory
  type: feedback
  originSessionId: ef53af43-c055-4854-866a-b7bbd8122b1d
  modified: 2026-11-11T10:03:08.815Z
---

# Profil éditorial : quels sujets, et pourquoi

Construit le 2026-11-11 à partir des compositions validées par Marc (numéros 6 à 10), de ses refus
motivés et de [[feedback-selection-sujets]]. Lu par le veilleur et par la session principale avant
de proposer un numéro. **Le registre en bas se complète à chaque numéro** : c'est lui qui affine le
profil.

## La ligne en une phrase
Expliquer **un mouvement de fond ou un mécanisme que le lecteur n'a pas compris ailleurs**, avec des
chiffres vérifiés et un avis propre. On arrive **après** l'événement pour l'expliquer, pas pour être
premier (« comprendre > être premier », brief du numéro 6).

## Ce que Marc retient (avec l'exemple qui l'a montré)

| Type de sujet | Exemples validés |
|---|---|
| **Mécanisme mal compris, avec un geste concret pour le lecteur** | wallets à connexion Google ou Apple (n° 10), smart accounts (n° 7), marchés de prédiction (n° 6), CDP (n° 5) |
| **Mouvement de fond peu expliqué** | deposit tokens (n° 9), le taux fixe qui arrive dans le prêt DeFi : Aave rachète Avon, Morpho Midnight (n° 10) |
| **La finance traditionnelle qui passe sur la blockchain** | DTCC (n° 9), tokenisation d'actions contestée (n° 8), perps sur actions validés puis contestés (n° 10), BTC natif sur Aave (n° 10) |
| **Suivi d'un de nos sujets**, quand il y a du nouveau | Papertrade change ses règles (n° 8, après le n° 7), MSCI contre Strategy (n° 7, lien dossier DAT), Strategy et STRC (n° 10) |
| **Ce qui touche le lecteur français** | budget 2027 et fiscalité crypto (n° 7), MiCA, retrait de l'USDT (n° 4) |
| **Évolution technique expliquée par son problème** | Glamsterdam retardé (n° 8), Bittensor (n° 7), Proof of Useful Work (n° 8) |
| **Protocole à mécanisme original** pour SOUS LA LOUPE | Papertrade, Derive, PendleLoop, Morpho Midnight |
| **Une donnée qui renverse une idée reçue** pour ÇA BRILLE | Strategy rachète plus de STRC qu'elle n'achète de bitcoin (n° 10), piratages 2026 : 60 % par clés volées et bridges (n° 8), valeur détenue contre volume des actions tokenisées (n° 6) |

Thèmes de prédilection, par ordre d'intérêt : la DeFi au sens large (le cœur), Hyperliquid et les
DEX de perps, stablecoins et RWA, Bitcoin et Ethereum, Layers 2, Bittensor, la macro (Fed, taux,
inflation). La macro se traite dans LES REPÈRES, sous les cours, pas en actu.

## Ce que Marc écarte (ses mots)

| Motif | Exemples |
|---|---|
| **Vu partout, pas de plus-value** | hack Binance 6,3 Md$ au n° 9 (« trop vieux, pas de plus-value ») ; Pendle au n° 7 (« tout le monde connaît, pas actuel ») |
| **Pas assez intéressant en soi** | Circle (« bof »), Polymarket piraté (« pas très intéressant ») |
| **Déjà traité récemment** | macro en actu et Robinhood Chain au n° 7 ; taxe sur la conversion en stablecoins au n° 10 |
| **Même sujet trois numéros de suite** | Papertrade refusé au n° 9 après les n° 7 et 8 |
| **Pas mûr** | Glamsterdam en ON ÉCLAIRE tant que la date n'est pas fixée ; texte non voté |
| **Simple accusation, risque de diffamation** | Crédit Mutuel Arkéa (allégation ZachXBT) |
| **Trop gros pour une rubrique** | oracles, rollups, L2 : réservés aux dossiers |
| **Hors de notre rôle** | alerte anti-arnaque (sauf si c'est le cœur de l'actu), expérience personnelle, pronostic |
| **Reprise d'un angle d'OAK** | OAK sert à repérer, jamais à choisir l'angle : son équipe nous lit |

## Grille de tri d'une piste (veilleur et session principale)

Pour chaque piste, répondre par oui ou non :

1. **Mécanisme** : y a-t-il quelque chose à expliquer, pas seulement à rapporter ?
2. **Fond** : est-ce un mouvement durable, ou un bruit de la semaine ?
3. **Lecteur** : cela change-t-il quelque chose pour un particulier français qui a les bases (ce
   qu'il peut faire, ce qu'il risque, ce qu'il doit savoir) ?
4. **Originalité** : est-ce peu ou mal expliqué ailleurs ? Si toute la presse l'a traité, quel
   angle reste ?
5. **Source primaire** : existe-t-il un communiqué, une doc, une donnée on-chain, un texte officiel ?
6. **Notre fil** : prolonge-t-il un numéro, un dossier ou une fiche (sans être le troisième
   d'affilée) ?

Trois « oui » ou plus : piste solide. Un « non » au point 5 : piste à signaler comme fragile.
Toujours vérifier les sujets des deux derniers numéros dans `site/app/numeros/issues.ts`.

## Où chercher, selon ce qu'on cherche

| On cherche | Où |
|---|---|
| Un mouvement de fond dans les chiffres | `python3 /Users/marc/Documents/claude/onchain/scripts/rwa_adoption.py` (RWA), DeFiLlama (TVL, frais, stablecoins, hacks), Farside (flux ETF) ; voir [[sources-rwa-adoption]], [[fact-check-sources-primaires]] |
| Une anomalie pour ÇA BRILLE | MCP OAK `get_unusual_activity`, `get_market_overview` ; `defillama.com/rwa` bloc « Movers 7d » |
| Ce qui arrive (dates) | MCP OAK `get_calendar` (unlocks, macro), calendriers des mises à jour, votes de gouvernance |
| Un changement de règles d'un protocole | forums de gouvernance, docs, comptes X officiels |
| La finance traditionnelle on-chain | communiqués DTCC, SEC, CFTC, ESMA, émetteurs |
| Ce qui touche le lecteur français | Assemblée nationale, AMF, ESMA, presse FR (CoinAcademy, Cryptoast, Journal du Coin) |
| L'angle manqué avant de figer | X sur 2 semaines, voir [[feedback-questionner-x]] |
| Ne rien rater | Coin Hebdo, The Defiant, récap OAK (`get_daily_recap`) — **repérage seulement** |

Liste complète des sources : [[sources-veille]].

## Forme d'une proposition de numéro
Un tableau **rubrique / idée / ce que ça apporte au lecteur / source primaire**, suivi des pistes
écartées avec leur motif, et des rappels de continuité (promesses faites dans un numéro précédent).
C'est le format que Marc a validé (« vraiment une bonne sélection originale, garde cette méthode »).

## Registre des choix (à compléter à chaque numéro)

Une ligne par piste proposée : retenue ou écartée, et le motif **dans les mots de Marc**. Quand un
motif revient trois fois, il remonte dans les tableaux ci-dessus.

| Numéro | Piste | Décision | Motif |
|---|---|---|---|
| 7 | Smart accounts (ON ÉCLAIRE) | retenue | mécanisme + geste concret |
| 7 | Pendle | écartée | « tout le monde connaît, pas actuel » |
| 7 | Circle | écartée | « bof » |
| 8 | Proof of Useful Work (ON ÉCLAIRE) | retenue | notion neuve ; refaite sans expérience perso |
| 8 | Piratages 2026 (ÇA BRILLE) | retenue | choix de Marc |
| 9 | Deposit tokens (ON ÉCLAIRE) | retenue | mouvement de fond que Marc découvrait |
| 9 | Hack Binance | écartée | « trop vieux, pas de plus-value » |
| 9 | Papertrade | écartée | troisième numéro d'affilée |
| 10 | Wallets à connexion sociale (ON ÉCLAIRE) | retenue | mécanisme mal compris, actualité Keplr |
| 10 | Aave rachète Avon, perps sur actions | retenues | mouvement de fond ; mécanisme nouveau |
| 10 | Polymarket piraté | écartée | « pas très intéressant » |
| 10 | Crédit Mutuel Arkéa | écartée | simple accusation |
| 10 | Elysium (L2) | écartée | sujet de dossier |

Voir [[feedback-selection-sujets]], [[sources-veille]], [[idees-dossiers]], [[mcp-oak-research]].
