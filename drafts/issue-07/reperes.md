# 📊 LES REPÈRES — #7

> ✍️ Brouillon du Rédacteur (v3 : 7 puis 7,5/10 ; boucle 3 + cours re-relevés le 21/10 13:34 UTC par la session principale, ouverture réécrite car le sens de la semaine a changé), à valider par Marc. Notation des blocs : `[p]` paragraphe · `[st]` sous-titre · `[liste]` puces · `[tableau]` tableau · `[note-tableau]` note de bas de tableau · `[avis]` encadré vert « 💡 Notre avis ».
> Correspondance avec `issues.ts` : `[tableau]` → `cours` ; `[note-tableau]` → note de bas de tableau de l'email ; `[avis]` → `coursAvis`.

---

[tableau]
| Crypto | Prix | Depuis notre n°6 (8 jours) |
|---|---|---|
| **BTC** Bitcoin | ~83 979 $ | 🟢 ▲ +0,9 % |
| **ETH** Ethereum | ~2 477 $ | 🔴 ▼ −1,0 % |
| **SOL** Solana | ~107 $ | 🟢 ▲ +0,4 % |
| **HYPE** Hyperliquid | ~81 $ | 🔴 ▼ −0,9 % |
| **BNB** | ~746 $ | 🟢 ▲ +0,8 % |

*(Pastilles 🔴/🟢 = repère de brouillon uniquement : à l'assemblage, texte coloré rouge `#dc2626` / vert `#16a34a`, sans emoji.)*

[note-tableau]
Prix au 21 octobre 2026 ; variations depuis notre [numéro 6](https://www.cryptoluciole.com/numeros/6) du 13 octobre 2026 (DeFiLlama).

[st] **Ce qui a fait bouger les prix**

[p]
Une semaine en aller-retour : le bitcoin est retombé à environ 80 000 $ le 15 octobre, puis il est remonté. Au final, la sélection est quasi stable depuis notre [numéro 6](https://www.cryptoluciole.com/numeros/6) (**entre −1,0 % et +0,9 %**), l'ether un peu en retrait. Comme la semaine dernière, c'est d'abord l'inflation américaine qui a pesé, puis ses effets sur le marché, avant un rebond en fin de période :

[liste]
- **14 octobre** : l'inflation (indice [CPI](https://www.cryptoluciole.com/glossaire/cpi)) monte à **3,7 % sur un an** en septembre, contre 3,4 % en août et 3,6 % attendus. L'essence explique plus de la moitié de la hausse du mois.
- **15 octobre** : le bitcoin retombe à **environ 80 000 $**, son plus bas depuis la mi-septembre. Près de 1 Md$ de positions à levier sont liquidées (fermées de force) en 24 h.
- **Semaine du 12 au 16 octobre** : les [ETF](https://www.cryptoluciole.com/glossaire/etf) bitcoin perdent environ 230 M$, ceux sur l'ether **320 M$**. Rapportées à leur taille, bien plus petite, ces sorties pèsent nettement plus lourd côté ether : c'est une piste pour expliquer pourquoi il recule davantage.
- **19-21 octobre** : le rebond. Il est probablement dû à la baisse du pétrole : elle apaise la crainte d'inflation et fait remonter les actions américaines, que le bitcoin suit en ce moment. Les ETF bitcoin en profitent, avec environ **+527 M$** d'entrées nettes le 19 octobre.

[p]
Prochaine étape : la décision de la Fed le 28 octobre. Elle a déjà relevé ses taux le 16 septembre, une première depuis 2023. Les marchés n'y attendent pas de hausse des taux, mais parient sur une hausse d'ici la fin de l'année.

[avis]
💡 **Notre avis** : **avec une inflation qui accélère encore, le vrai sujet du 28 octobre est de savoir si la Fed confirmera une hausse en décembre.** Une baisse des taux n'est pas à l'horizon, et le contexte reste défavorable aux actifs sans rendement comme le bitcoin.

---

## Notes du Rédacteur (hors texte, à ne pas assembler)

### Changements v1 → v2 (boucle 2 du vérificateur, 7/10)
- « Dit simplement » sur les ETF ether remplacé par une hypothèse explicite (« c'est une piste »). Adaptation : « ces sorties » → « les sorties sur l'ether », car le paragraphe suit désormais la puce du 28 octobre.
- Glamsterdam retiré ; « spot » supprimé ; rebond du 15/10 coupé.
- Constat sur les paris de marché sorti de l'avis → 4e puce datée « 28 octobre ».
- Fin de l'avis sans prédiction de cours ; ouverture reliée au numéro 6 avec lien.

### Choix de structure
- **Une seule colonne de variation** : le numéro 6 date d'il y a exactement 7 jours (13/10 12:57 UTC → 20/10 12:57 UTC), donc « 7 jours » et « depuis notre n°6 » sont la même chose. En-tête fusionné « 7 jours (depuis notre n°6) ». Côté assemblage : pas de `varRef` / `sensRef` / `coursRefLabel` (ou `coursRefLabel` vide), rendu à une colonne comme aux numéros 1-3.
- **Même architecture qu'au numéro 6** : tableau → note (dates + sources uniquement) → sous-titre « Ce qui a fait bouger les prix » → puces datées dans l'ordre chronologique → avis court, opinion seule.
- **Pas de rappel du mécanisme taux → bitcoin** (« des taux plus hauts rendent plus attractifs… ») : déjà au numéro 6, ce serait de la redite.
- **Glamsterdam : retiré de REPÈRES (boucle 2)**, il n'explique pas les prix. Sujet futur ON ÉCLAIRE, quand la date mainnet sera fixée (test sur Hoodi le 26/10 [À VÉRIFIER]).

### Arrondis (règle du numéro 6 : prix au dollar, variations au pour cent)
- Bitcoin 81 598 $ → ~81 598 $ · −2,0 % → −2 %
- Ether 2 395 $ → ~2 395 $ · −4,2 % → −4 %
- Solana 104,48 $ → ~104 $ · −1,9 % → −2 %
- HYPE 78,55 $ → ~79 $ · −3,4 % → −3 %
- BNB 731,17 $ → ~731 $ · −1,2 % → −1 %

### Dépendances texte ↔ tableau (si les cours sont re-relevés avant l'envoi)
- « Toute la sélection recule », « **entre −1 % et −4 %** », « L'ether est le plus touché » et « l'ether recule davantage » dépendent du tableau. Si un actif repasse au vert, ou si l'ether n'est plus le plus faible, ces phrases changent.
- L'avis ne cite aucun cours : il reste valable tant que la semaine n'est pas franchement verte. Si le sens s'inverse, l'avis reste valable (il ne prédit aucun cours), seule l'ouverture « Toute la sélection recule » est à reprendre.

### Chiffres et `[À VÉRIFIER]` (pour le fact-checker)
- **Rebond 19-21/10** (ajout session principale, 21/10) : ETF bitcoin spot +526,60 M$ le 19/10 et +23,16 M$ le 20/10, total +549,76 M$ (SoSoValue via FXStreet, 21/10 12:18 GMT) ; S&P 500 +0,70 % et Nasdaq +0,59 % le 20/10, pétrole en baisse avec des espoirs de pourparlers de paix (crypto.news, 20/10). À recouper sur Farside.
- **Cours `[À VÉRIFIER le jour de l'envoi]`** : relevé DeFiLlama du 20/10/2026 12:57 UTC, base 13/10 12:57 UTC. Mettre à jour la date de la note de bas de tableau.
- **CPI de septembre** `[À VÉRIFIER]` : 3,7 % sur un an (publié le 14/10), contre 3,4 % en août et un consensus à 3,6 % ; essence ≈ moitié de la hausse mensuelle. Source : veille du 19/10 (CNBC 14/10). À recouper sur le BLS.
- **Passage sous 80 000 $ le 15/10** `[À VÉRIFIER]` : « premier passage depuis environ un mois » (veille, Crypto Briefing / Bitcoin.com 15/10). Rebond vers 82-83 000 $ selon CoinAcademy 19/10 ; j'écris « 81 000-83 000 $ » pour rester cohérent avec le relevé à 81 598 $.
- **Liquidations du 15/10** `[À VÉRIFIER]` : 937 à 950 M$ selon les sources → « près de 1 Md$ ». Chiffres divergents.
- **Flux ETF semaine 12-16/10** `[À VÉRIFIER — la phrase « Rapportées à la taille des ETF ether… » est à couper si les 320 M$ ne sont pas confirmés ; la taille relative des ETF ETH vs BTC est aussi à recouper]` : BTC ≈ −228,6 M$ (Walletpilot, FXStreet), ETH ≈ −320 M$ (NewsBTC). Sources secondaires, à recouper (Farside, SoSoValue).
- **« Les marchés n'attendent pas de hausse ce jour-là, mais parient sur une hausse d'ici la fin de l'année »** `[À VÉRIFIER]` : ~15 % de hausse le 28/10 et ~89 % en décembre (CME FedWatch via presse, source unique, ~19/10). Volatil, donc non chiffré dans le texte. Si les probabilités de décembre retombent nettement sous 50 %, la 4e puce (28 octobre) est à réécrire.
- **Date de décision Fed** : réunion des 27-28/10, décision le 28/10 (à recouper sur federalreserve.gov).
- **Non repris (concision)** : inflation sous-jacente 2,6 %, pétrole à ~110 $, guerre en Iran, taux 10 ans, discours de Warsh (citation non retrouvée), PIB chinois, contenu technique de Glamsterdam.

### Termes
| Terme | Slug | Traitement |
|---|---|---|
| CPI | `cpi` | EXISTANT, lien |
| ETF | `etf` | EXISTANT, lien |
| Liquidation | (vu au #4) | glosée « (fermées de force) », comme au numéro 6 |
| Testnet | — | glosé « un réseau de test », le mot anglais n'apparaît pas |

### Points qui demandent l'avis de Marc
- **La piste « ETF ether → ether plus faible »** : formulée comme une hypothèse (« une piste »). À couper si le fact-check ne confirme pas les 320 M$ ?
- **L'avis** : il conclut sur « le contexte reste défavorable aux actifs sans rendement comme le bitcoin », sans prédire de cours. Est-ce assez net ?

Seule la section LES REPÈRES a été traitée ; aucun autre fichier n'a été modifié.
