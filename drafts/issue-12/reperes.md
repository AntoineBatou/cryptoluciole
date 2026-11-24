# 📊 LES REPÈRES — numéro 12

> Rédigé par la session principale (section courte, chiffres du jour). Cours DeFiLlama relevés le 24/11 à 16 h 32 (J−7 = 17/11 à la même heure) : **à rafraîchir juste avant l'envoi** (prix + 7 j + heure). Correspondance `issues.ts` : `cours[]`, `cours7jLabel`, `coursHeure`, `coursAvisCorps`.

## Tableau

| Actif | Nom | Prix | 7 jours |
|---|---|---|---|
| BTC | Bitcoin | ~60 000 $ | ▼ −5,8 % |
| ETH | Ether | ~1 680 $ | ▼ −5,6 % |
| SOL | Solana | ~70 $ | ▼ −3,7 % |
| HYPE | Hyperliquid | ~61 $ | ▼ −10,4 % |
| BNB | BNB | ~549 $ | ▼ −6,2 % |

`cours7jLabel` : « Depuis notre n°11 (7 jours) » · `coursHeure` : « 18h58 »

---

[st] Ce qui a fait bouger les prix

[p]
Encore une semaine rouge : le bitcoin a perdu près de 6 % et tourne autour de 60 000 $. La semaine dernière, on pointait l'inflation et la Fed ; cette semaine, c'est la Bourse américaine qui a donné le ton.

[image | drafts/issue-12/captures/btc-nasdaq.png | Bitcoin et Nasdaq 100 depuis le 1er octobre (base 100)]

[liste]
- **La Bourse doute de l'IA.** Le Nasdaq 100 (les cent plus grosses valeurs du Nasdaq, surtout technologiques) recule depuis début novembre sur des doutes quant à la rentabilité des dépenses dans l'IA. Le 23, il a rebondi quand Nvidia a annoncé le retour de son patron, Jensen Huang.
- **Le bitcoin a bougé les mêmes jours.** Sur les 30 dernières séances la correlation est très forte  (**0,71**, contre 0,46 sur un an. à 1, les deux bougeraient toujours ensemble ; à 0, aucun lien).

[tableau]
| Séance | Nasdaq 100 | Bitcoin |
|---|---|---|
| 5 novembre | −6,4 % | −5,5 % |
| 20 novembre | −5,6 % | −5,0 % |
| 23 novembre | +6,9 % | +4,0 % |

[liste]
- **Et la crypto a ajouté ses propres ventes.** Au même moment, les ETF bitcoin américains se vident : **1,8 Md$** retirés du 16 au 20 novembre, dont 669 M$ le seul 20 novembre, leur pire journée du mois, et 4,7 Md$ depuis le 1er novembre. Ces ventes s'ajoutent à celles qui suivent la Bourse, d'où une baisse plus forte que celle du Nasdaq.

[avis]
💡 **Notre avis** : en ce moment, le bitcoin & plus largement les cryptos se négocient comme des valeurs tech plus risquées. Même le rebond est venu d'une nouvelle de Nvidia. Tant que ce lien tient, le premier signal à suivre pour le bitcoin est la Bourse tech américaine.

---

## Notes (hors texte)

### Sources
- Cours d'envoi : DeFiLlama, 24/11 18 h 58 (J−7 = 17/11 18 h 58) : BTC 60 028 / 63 712 = −5,8 % ; ETH 1 683,6 / 1 783,7 = −5,6 % ; SOL 69,56 / 72,21 = −3,7 % ; HYPE 60,89 / 67,93 = −10,4 % ; BNB 549,4 / 585,9 = −6,2 %.
- Cours initiaux : DeFiLlama coins API, 24/11 16 h 32 (J−7 = 17/11 16 h 32). BTC 59 915,5 / 64 930,9 = −7,7 % ; ETH 1 680,2 / 1 806,1 = −7,0 % ; SOL 68,96 / 73,41 = −6,1 % ; HYPE 61,23 / 69,19 = −11,5 % ; BNB 547,6 / 591,5 = −7,4 %.
- Graphique et corrélation : clôtures quotidiennes Yahoo Finance (BTC-USD, ^NDX), relevées le 23/11 ; base 100 au 01/10 ; creux du 20/11 : Nasdaq 100 82,1 (−17,9 %), BTC 69,3 (−30,7 %). Corrélation des variations quotidiennes : 0,71 (30 séances), 0,66 (60), 0,46 (≈ 250). Calcul CryptoLuciole.
- Pires séances de novembre (Yahoo) : 05/11 NDX −6,36 %, S&P −4,36 %, BTC −5,55 % ; 20/11 NDX −5,61 %, BTC −5,01 %. « Pire depuis mars 2020 » : OAK (« Why Did Wall Street Just Have Its Worst Session Since Covid? », 06/11) [À VÉRIFIER source primaire]. Cause IA : OAK, The DeFi Investor (05/11) [À VÉRIFIER].
- ETF bitcoin : −1,79 Md$ sur la semaine (SoSoValue via The Block, relevé de la veille du 23/11) [À VÉRIFIER : semaine exacte, et reprendre la semaine précédant l'envoi].
- Rebond du 23/11 : Nvidia rappelle Jensen Huang (démission < 2 semaines plus tôt) ; Nasdaq Composite +6,51 %, Nvidia +31-32 % (ABC News, NBC News, 23/11). NDX Yahoo : 25 029 → 26 746 (+6,9 %) ; BTC 58 799 → 61 156 (+4,0 %). Un papier Bloomberg du 24/11 évoque un NDX −2,1 % le 24 : reprendre le mouvement le jour de l'envoi.
- Corrélation recalculée le 24/11 sur les seules séances du Nasdaq (variation du BTC d'une séance à la suivante, week-end inclus) : 0,71 / 0,66 / 0,46. Bêta 30 séances 0,69 : au jour le jour le BTC ne bouge pas plus que le NDX ; l'écart cumulé (BTC −29,6 % sur les jours de séance contre NDX −12,3 %, du 01/10 au 23/11) vient d'une baisse propre à la crypto qui s'ajoute → puce 3.
- ETF (TFTC, tftc.io/bitcoin-etf-flows/november-2026, relevé le 24/11) : 16/11 +8,0 ; 17/11 −239,9 ; 18/11 −306,4 ; 19/11 −582,2 ; 20/11 −669,2 M$ → −1 789,7 M$ (cohérent avec The Block/SoSoValue −1,79 Md$) ; 23/11 −569,7 ; mois −4,7 Md$ sur 16 séances.
- Liquidations retirées du texte (fact-checker : introuvables hors Coin Hebdo).
- « pire séance depuis mars 2020 » retiré du texte (à recouper avec avril 2025).
- Cause du 20/11 non établie (départ de Huang ? doutes IA) : non écrite. Agenda (NFP 04/12, FOMC 09/12) retiré du texte.

### Pour le fact-checker
- Ne pas écrire de hausse des taux comme acquise : probabilités divergentes (84 à 94 %) selon les sources, non lues sur CME FedWatch.
- Le plus bas en séance du BTC (55-57 000 $, veilleur) n'est pas repris : une seule source.
