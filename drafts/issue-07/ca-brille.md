# 💡 ÇA BRILLE — numéro 7 : l'open interest d'Hyperliquid

> ✍️ Brouillon du Rédacteur (v3 : 7,5 puis 8,5/10 au vérificateur ; relu et corrigé par Marc le 21/10). Notation des blocs : `[p]` paragraphe · `[st]` sous-titre · `[liste]` puces · `[def]` encadré de définition · `[texte]` texte normal sous la carte · `[avis]` encadré vert « 💡 Notre avis ».
> Correspondance avec le champ `data` de `issues.ts` : titre → `titre` ; 1er `[p]` → `texte` ; `[liste]` → `points` ; le reste → `texteFin` (+ encadré de définition à prévoir, voir notes d'assemblage).

**Titre (proposition)** : 15 Md$ de positions ouvertes sur Hyperliquid, dont un quart sur l'or, le pétrole et les actions

*Variante (repli)* : 15 Md$ de positions ouvertes sur Hyperliquid, dont un quart sur des marchés créés par d'autres

---

[p]
**Environ 15 Md$** : c'est l'**open interest** d'Hyperliquid relevé le 20 octobre. C'est un niveau élevé, mais en retrait par rapport au record d'environ 18 Md$ du 23 septembre.

[def]
**[Open interest](https://www.cryptoluciole.com/glossaire/open-interest)** (positions ouvertes) — la valeur totale des positions encore ouvertes à un instant donné. Ce n'est pas un volume : une position compte une fois tant qu'elle reste ouverte, qu'elle ait été ouverte hier ou il y a trois mois. Ce n'est pas non plus l'argent déposé : avec 1 000 $ de marge et un levier ×10, tu ouvres une position de 10 000 $ (1 000 × 10), et c'est ce montant qui entre dans l'open interest.

[st]
D'où viennent ces 15 Md$

[liste]
- **≈ 11,1 Md$ sur les *perps* natifs**, ceux qu'Hyperliquid liste lui-même. Le bitcoin (3,4 Md$) et l'ether (2,6 Md$) en font plus de la moitié ;
- **≈ 4 Md$ sur les marchés HIP-3**, des perps déployés par des sociétés tierces sur le carnet d'ordres d'Hyperliquid (voir notre [fiche Hyperliquid](https://www.cryptoluciole.com/protocoles/hyperliquid)). La grosse majorité passe par un seul déployeur, **trade.xyz (≈ 3,9 Md$)**, sur les actifs suivants :

[liste]
- **≈ 3 Md$ sur des actions et des indices boursiers** : le S&P 500 en tête, puis SK Hynix, Google, Micron, Nvidia… ;
- **≈ 0,8 Md$ sur les matières premières** : l'or, le pétrole, l'argent.

[p]
**Environ un quart des positions ouvertes** sur Hyperliquid porte sur des marchés créés par d'autres que lui, et en grande majorité sur des **actifs de la finance traditionnelle**.

[avis]
💡 **Notre avis** :
- **Le signal est plus solide que le volume** : l'open interest compte des positions qui restent ouvertes, pas des allers-retours qui gonflent les chiffres (voir notre [numéro 6](https://www.cryptoluciole.com/numeros/6)).
- **Le vrai enjeu est la dépendance à trade.xyz** : presque toute la croissance hors crypto repose sur un seul déployeur à ce stade.

**Sources** : API Hyperliquid (`metaAndAssetCtxs`, tous les dex de `perpDexs`, relevé du 20/10/2026 à 12:52 UTC) · DefiLlama et crypto.news (record du 23 septembre) · fiche Hyperliquid CryptoLuciole (partage des frais HIP-3)

---

## Notes du Rédacteur (hors texte, à ne pas assembler)

### Changements v1 → v2
- Arrondis : 15 Md$, 11,1 / 4 / 3,9 Md$ (valeurs brutes en notes).
- Titre « l'or, le pétrole et les actions » ; *perps* en italique ; gras de la phrase « Dit simplement » limité à deux segments.
- Avis puce 1 reformulée (+ effet prix sur l'open interest).
- Coupée : « Hyperliquid n'est donc plus seulement une plateforme de perps crypto… » (redisait la 3e puce de l'avis).

### Termes
| Terme | Slug | Statut |
|---|---|---|
| Open interest | `open-interest` | EXISTANT dans `terms.ts` (et défini dans les DÉFINITIONS du numéro 4) ; encadré `[def]` remis sur place (règle : définir au fil de l'eau, ÇA BRILLE se lit seul) |
| Perps | `contrat-perpetuel` | EXISTANT ; connu du lecteur (ON ÉCLAIRE du numéro 4), pas de glose. Lien possible sur la 1re occurrence |
| HIP-3 | — | Jamais expliqué dans un numéro (seulement évoqué dans le numéro 1, « marchés déployables par des tiers »). Expliqué dans la fiche site Hyperliquid (section « HIP-3 : le succès qui coûte cher ») → renvoi vers la fiche plutôt que vers un numéro. Glose inline gardée |

### Points `[À VÉRIFIER]` (pour le fact-checker)
- **Total 15,1 Md$, natifs 11,1, HIP-3 3,9, xyz 3,85** : relevé de la session principale (API, 20/10 12:52 UTC). 11,1 + 3,9 = 15,0 : écart d'arrondi, à recalculer sur les valeurs brutes.
- **Un quart** : 3,9 ÷ 15,1 ≈ 26 %. **Plus de la moitié** : (3,37 + 2,55) ÷ 11,1 ≈ 53 %.
- **Ventilation de trade.xyz** (mon relevé API du 20/10, `dex: "xyz"`, open interest × mark price, total 3,85 Md$) :
  - matières premières ≈ 0,84 Md$ (GOLD 271 M$, BRENTOIL 208, CL 167, SILVER 164, NATGAS 13, COPPER 12, PLATINUM 4, PALLADIUM 3) ;
  - indices ≈ 0,70 Md$ (SP500 403 M$, XYZ100 291, JP225 et KR200 marginaux) ;
  - devises ≈ 0,06 Md$ (JPY, EUR, GBP), non mentionnées ;
  - le reste ≈ 2,25 Md$ = actions individuelles et ETF (SKHX 362 M$ + SKHY 189 ≈ SK Hynix [À VÉRIFIER, ticker], GOOGL 180, MU 145, SPCX 125 [SpaceX ? à vérifier, non cité], NVDA 106…).
  - → « ≈ 3 Md$ actions + indices » = 2,25 + 0,70 ≈ 2,95.
- **Correction du brief** : le brief parlait d'« actions et indices tokenisés ». Ce sont des **perps** sur ces cours (aucun titre détenu), d'où la phrase de précision. À confirmer dans la doc trade.xyz.
- **« Plus haut depuis octobre 2025 »** (Cryptopolitan, ~14,7 Md$ vers le 10-14/10) : non recoupé. Si non confirmé, supprimer la 2e phrase du premier `[p]`.
- **« Le déployeur garde jusqu'à la moitié des frais »** : repris de la fiche Hyperliquid (`protocols.ts`). À revérifier si la proposition de Jeff Yan de tripler les frais HIP-3 a été adoptée entre-temps.
- **« Sans compte chez un courtier »** : vrai pour l'accès via Hyperliquid ; vérifier s'il existe des restrictions géographiques sur l'interface trade.xyz (sans les mentionner si elles ne visent pas la France).

### Besoins d'assemblage
- **Encadré `[def]`** dans la carte nuit : le type `data` n'en a pas. Soit ajouter un champ `defs` (comme sur les actus), soit placer l'encadré juste sous la carte. Côté email : encadré sur fond nuit à adapter (le `#f3f6f6` détonne dans la carte), ou le sortir de la carte.
- **Sous-titre `[st]`** : même rendu qu'au numéro 6 (doré, 15 px).
- Pas d'image ni de tableau cette fois. Un graphique en barres (natifs / trade.xyz ventilé) est possible si Marc le souhaite.

### Lien avec SOUS LA LOUPE
Pas de phrase sur Papertrade : le lien (« Papertrade lit le prix d'Hyperliquid ») ne s'insérait pas naturellement dans l'angle « place de marché pour d'autres actifs », et SOUS LA LOUPE renvoie déjà à la fiche Hyperliquid.

### Longueur
Environ 330 mots hors titre, notes et sources : nettement plus court qu'au numéro 6.

### Points qui demandent l'avis de Marc
- **Le titre** : « l'or, le pétrole et les actions » résume trade.xyz seul (≈ 3,85 Md$ ÷ 15,1 ≈ 25 %, toujours un quart). Approximation assumée : les indices (S&P 500…) sont rangés sous « actions », et environ 0,06 Md$ de devises n'est pas cité. Repli exact : « …dont un quart sur des marchés créés par d'autres ».
- **La définition dans `terms.ts`** (et celle du numéro 4) dit « combien d'argent est toujours engagé » / « de l'argent frais entre ». Ça contredit en partie la nuance demandée ici (« ce n'est pas l'argent déposé »). Faut-il retoucher la définition du glossaire ? Je n'y ai pas touché.
- **Le 3e point de l'avis** (dépendance à trade.xyz) : c'est ma prise. À garder, ou à remplacer par une conclusion sur l'intérêt pour le lecteur (trader l'or ou le S&P 500 depuis son wallet).
