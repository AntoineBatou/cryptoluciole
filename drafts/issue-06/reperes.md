# 📊 LES REPÈRES — #6

> ✍️ Brouillon du Rédacteur (v2, après la boucle 1 du vérificateur, 7,5/10), à valider par Marc. Notation des blocs : `[p]` paragraphe · `[liste]` puces · `[tableau]` tableau · `[note-tableau]` note de bas de tableau · `[avis]` encadré vert « 💡 Notre avis ».
> Correspondance avec `issues.ts` : `[tableau]` → `cours` (+ `coursRefLabel`) ; `[note-tableau]` → note de bas de tableau de l'email ; `[avis]` → `coursAvis`.

---

[tableau]
| Crypto | Prix | 7 jours | Depuis notre n°5 (10 sept.) |
|---|---|---|---|
| **BTC** Bitcoin | ~81 919 $ | 🔴 ▼ −4,8 % | 🟢 ▲ +5,3 % |
| **ETH** Ethereum | ~2 456 $ | 🔴 ▼ −9,6 % | ⚪ ≈ 0 % |
| **SOL** Solana | ~106,05 $ | 🔴 ▼ −12,3 % | 🟢 ▲ +5,0 % |
| **HYPE** Hyperliquid | ~82,30 $ | 🔴 ▼ −12,9 % | 🔴 ▼ −0,6 % |
| **BNB** | ~735 $ | 🔴 ▼ −6,8 % | 🟢 ▲ +2,6 % |

*(Pastilles 🔴/🟢/⚪ = repère de brouillon uniquement : à l'assemblage, texte coloré rouge `#dc2626` / vert `#16a34a` / gris `#94a3b8`, sans emoji. HYPE « ≈ 0 % » : gris, sans flèche.)*

[note-tableau]
Prix au 13 octobre 2026 ; variations sur 7 jours et depuis notre [numéro 5](https://www.cryptoluciole.com/numeros/5) du 10 septembre 2026 (DeFiLlama).

[avis]
💡 **Notre avis** : un mois en deux temps. Depuis notre [numéro 5](https://www.cryptoluciole.com/numeros/5) du 10 septembre, **le bitcoin gagne 5 %**, mais la dernière semaine est rouge. Hyperliquid y perd 13 % et **revient à son niveau du 10 septembre**. Derrière ces mouvements, ce sont surtout les nouvelles macroéconomiques américaines qui ont pesé sur les prix ce mois-ci :

[liste]
- **11 septembre** : l'inflation américaine (indice CPI) reste élevée, à **3,4 % sur un an** en août, tirée par l'essence.
- **16 septembre** : la Fed relève son taux directeur de 0,25 point, à 3,75-4,00 %. **Première hausse depuis 2023**, pour contenir cette inflation.
- **2 octobre** : l'emploi ralentit, avec **seulement 29 000 emplois** créés en septembre et un chômage à 4,2 %.
- **Semaine du 6 octobre** : le compte rendu de la dernière réunion de la Fed laisse entrevoir une autre hausse d'ici la fin de l'année. Dans la foulée, les ETF bitcoin perdent environ 680 M$ et plus de 1 Md$ de positions à levier sont liquidées (fermées de force) en 24 h, ce qui accélère la baisse.

[p]
Le lien avec la crypto : des taux plus hauts rendent plus attractifs les placements qui versent un intérêt, au détriment du bitcoin, qui n'en verse aucun.

[p]
À nos yeux, **la Fed est coincée** : relever encore ses taux freinerait un emploi déjà fragile, s'arrêter laisserait filer l'inflation. Les marchés parient sur une pause le 28 octobre, mais le prochain chiffre d'inflation tombe le 14 octobre : un chiffre au-dessus des 3,6-3,7 % attendus pourrait relancer l'idée d'une nouvelle hausse. La Fed elle-même prévoit encore une hausse d'ici la fin de l'année : inutile de compter sur une baisse des taux en 2026.

---

## Notes du Rédacteur (hors texte, à ne pas assembler)

### Changements v1 → v2 (boucle 1 du vérificateur, 7,5/10)
- **Ordre chronologique strict** : inflation (11/09) → Fed (16/09) → emploi (2/10) → semaine du 6/10, une date en gras en tête de chaque puce.
- **Motif de la Fed** : « pour contenir cette inflation, sur fond de tensions au Moyen-Orient ». J'ai retiré « pétrole cher », qui n'est pas dans les notes comme motif de la Fed.
- **Tensions au Moyen-Orient** : retirées de la semaine rouge, car les notes signalent une détente le vendredi.
- **Conclusion** : la phrase sur le 14/10 est chiffrée (3,6-3,7 % attendus), avec une chute sur les projections de la Fed. « D'ici là, la crypto restera suspendue… » est supprimé.
- **Gras** : retiré de « taux directeur », « CPI », « ETF » et « L'inflation ». Gardé sur les dates, « Première hausse depuis 2023 », « seulement 29 000 emplois », « 3,4 % sur un an » et « la Fed est coincée ». Le gras de l'ouverture (« le bitcoin gagne 6 % », « revient à son niveau du 10 septembre ») est inchangé.
- **4e puce découpée** en deux phrases.
- **Phrase taux / épargne réécrite** : elle reprenait presque mot pour mot le « Notre avis » du #5 (« il vend d'abord ce qui ne rapporte rien par soi-même »).
- **HYPE** : « ≈ 0 % » en gris, sans flèche.

### Longueur
- Avis : environ **200 mots** (≈ 235 au compteur `wc`, qui compte aussi les « : », « % » et « $ » isolés par l'espace insécable).

### Chiffres et `[À VÉRIFIER]`
Les chiffres de marché viennent de `drafts/issue-06/sources/reperes-notes.md`. Deux éléments viennent de la consigne du coordinateur : la date du CPI d'août (11/09) et la phrase sur les projections de la Fed.
- **Cours `[À VÉRIFIER le jour de l'envoi]`** : tout le tableau date du 12/10 à 22:40 UTC. À rafraîchir via l'API DeFiLlama (`cours-defillama.md`). La base « depuis le #5 » est le 10/09 à midi UTC : BTC 77 831 $ · ETH 2 462 $ · SOL 101,0 $ · HYPE 82,82 $ · BNB 716 $. Mettre aussi à jour la date de la note de bas de tableau.
- **L'ouverture de l'avis dépend du tableau** : « le bitcoin gagne 6 % », « Hyperliquid y perd 13 % » et « revient à son niveau du 10 septembre ». Si HYPE ne reste pas proche de 0 % depuis le #5, il faut changer la cellule (couleur et flèche) ET la phrase.
- **Date du CPI d'août (11/09)** `[À VÉRIFIER]` : elle n'est pas dans `reperes-notes.md`. Elle concorde avec le #5 (« Le CPI du 11 fera pencher la balance »).
- **« La Fed elle-même prévoit encore une hausse d'ici la fin de l'année »** : cela correspond aux projections du 16/09 (« encore une hausse en 2026 et une en 2027 », CNBC/Fed) et au compte rendu du 7/10. À recouper au fact-check.
- **« Les marchés parient sur une pause le 28 octobre »** : environ 81 % au 12/10. Volatil, donc non chiffré dans le texte ; à revérifier au fact-check.
- **Liquidations** : « plus de 1 Md$ » = 1,16 Md$. **Sorties des ETF** : « environ 680 M$ » = 681 M$. Sources secondaires (FXStreet, coinpedia), à recouper.
- **Si le CPI de septembre est publié (14/10) avant l'envoi**, le dernier paragraphe doit changer :
  1. remplacer « le prochain chiffre d'inflation tombe le 14 octobre : un chiffre au-dessus des 3,6-3,7 % attendus pourrait relancer… » par le chiffre réel et sa lecture (au-dessus ou en dessous des attentes, et ce que cela change pour le 28/10) ;
  2. on peut ajouter une 5e puce datée « **14 octobre** » ;
  3. vérifier que « un mois en deux temps » tient toujours si les cours ont réagi.
- **Non repris (concision)** : vote 12-0, président Warsh, salaires +3 %, taux longs et dollar fort, détente Trump/Iran, le −485 M$ du 7/10, les ETF ether, l'inflation sous-jacente.

### Termes
| Terme | Slug | Traitement |
|---|---|---|
| Taux directeur | `taux-directeur` | EXISTANT, lien sur la 1re occurrence (sans gras) |
| CPI | `cpi` | EXISTANT, lien ; glosé « l'inflation américaine (indice CPI) » |
| ETF | `etf` | EXISTANT, lien |
| Minutes | — | glosé « le compte rendu de la dernière réunion » ; le mot anglais n'apparaît pas |
| Liquidation | (vu au #4) | glosée « (fermées de force) » sur place |

### Besoins d'assemblage
- **Colonne « Depuis le #5 (10 sept.) »** : le type `cours` a **déjà** `varRef`, `sensRef` et `coursRefLabel` (utilisés au #4). Il suffit de les remplir avec `coursRefLabel: "Depuis le #5 (10 sept.)"`. Côté email, reprendre le rendu à deux colonnes de `issue-04.ts`.
- **Valeur neutre pour HYPE** : `sensRef` n'accepte que `"up" | "down"`, sans valeur neutre. Il faut élargir le type à `"up" | "down" | "flat"` et ajouter le rendu gris `#94a3b8` sans flèche, à la fois dans `numeros/[id]/page.tsx` et dans `issue-06.ts`. Valeur : `varRef: "≈ 0 %"`, `sensRef: "flat"`.
- **BNB** : pas de nom en clair, comme au #4 et au #5.
- **`coursAvis` est un simple `string`** : l'avis contient trois paragraphes, une liste de 4 puces et du gras. Il faut passer le champ en blocs (`p` / `liste`, comme l'avis de ÇA BRILLE) plutôt que de reformuler le texte pour le faire rentrer.
- **Liens glossaire** : `https://www.cryptoluciole.com/glossaire/taux-directeur`, `/glossaire/cpi`, `/glossaire/etf`.

### Points qui demandent l'avis de Marc
- **La chute** « La Fed elle-même prévoit encore une hausse d'ici la fin de l'année » : est-elle assez tranchée, ou trop alarmiste face au pari de pause des marchés ?
- **La phrase taux / épargne réécrite** : « des taux plus hauts rendent plus attractifs les placements qui versent un intérêt, au détriment du bitcoin, qui n'en verse aucun ». Faut-il la garder, ou revenir à la formule du #5 ?
- **Le CPI du 14/10** : envoi avant ou après ? Si c'est après, le dernier paragraphe est à réécrire avec le chiffre réel.

Seule la section LES REPÈRES a été traitée ; aucun autre fichier n'a été modifié.
