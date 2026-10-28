# 🔦 ON ÉCLAIRE — numéro 8

> ✍️ Brouillon du Rédacteur (v3, refonte complète après refus de la v2 par Marc). Objectif unique : **faire comprendre la différence entre preuve de travail et preuve de travail utile, puis dire en gros ce que sont Pearl et Flop.** Notation des blocs : `[p]` paragraphe · `[st]` amorce dorée « ⬡ … » · `[def | slug]` encadré de définition · `[tableau]` · `[alerte]` encadré d'alerte · `[avis]` encadré vert « 💡 Notre avis ». Mot-clé teal du titre : *preuve de travail utile*. Italique = terme anglais à sa 1re occurrence.

**Titre de la notion (proposition)** : La *preuve de travail utile ou Proof of Useful Work* : et si le minage servait à quelque chose ?

---

[p]
Les mineurs de Bitcoin dépensent une quantité énorme d'électricité pour des calculs qui ne servent qu'à faire tourner le réseau. De nouvelles blockchains veulent que ce calcul serve aussi à quelque chose, par exemple à l'IA.

[st] **⬡ La preuve de travail, en clair.**

[p]
Sur Bitcoin, pour ajouter un bloc et toucher la récompense, les mineurs font une course : leurs machines enchaînent des milliards d'essais au hasard, comme des tickets de loterie, jusqu'à ce que l'un d'eux tombe juste : il peut alors publier son bloc et toucher sa rémunération.

[p]
Ces calculs sont **volontairement inutiles**. Leur seul rôle est de **prouver qu'on a dépensé un effort coûteux** : pour tricher sur le registre, il faudrait refaire cet effort plus vite que tous les autres mineurs réunis, ce qui coûterait une fortune.

[p]
C'est un peu comme courir sur un tapis roulant : l'effort est réel et mesurable, mais on n'arrive nulle part.

[st] **⬡ La preuve de travail utile (*Proof of Useful Work*, PoUW).**

[p]
La **preuve de travail utile** garde la même course, mais remplace les essais jetables par un calcul dont quelqu'un a besoin. Aujourd'hui, le calcul le plus demandé est celui des modèles d'IA. Le mineur fait ce calcul utile, et son résultat sert à la fois à faire tourner le réseau et à un second usage (par exemple, un calcul pour un modèle d'IA).

[p]
Pour reprendre l'image : au lieu de courir sur un tapis, le mineur court et livre des colis. L'effort prouve toujours qu'il a travaillé, mais le travail sert aussi à un client. Toute la difficulté est là : il faut vérifier que le colis est bien arrivé, c'est-à-dire **prouver que le calcul utile a vraiment été fait**.

[def | `proof-of-useful-work`] **Preuve de travail utile (*Proof of Useful Work*, PoUW)**
Preuve de travail dont le calcul exigé des mineurs peut aussi servir hors du réseau.

[tableau]
| | Preuve de travail (PoW) | Preuve de travail utile (PoUW) |
|---|---|---|
| À quoi sert le calcul | Uniquement à sécuriser le réseau | À sécuriser le réseau **et** à un usage extérieur (l'IA) |
| Ce que produit le mineur | Des essais jetés une fois le bloc trouvé | Un calcul qui **peut** resservir (ex. la réponse d'un modèle d'IA) |
| Ce qu'il faut vérifier | Que l'effort a été fourni (facile) | Que l'effort a été fourni **et** qu'il était utile (difficile) |
| Exemples | Bitcoin | Pearl (utilité non vérifiée), Flop (utilité vérifiée, pas encore lancé) |

[st] **⬡ Pearl, en gros.**

[p]
Pearl, lancé en avril 2026, fait miner avec des multiplications de matrices, le calcul de base de l'IA (il s'agit de multiplier de grands tableaux de nombres). Quand ce calcul vient d'un vrai modèle d'IA en train de répondre à une question, le même effort sert deux fois.

[p]
La limite : **le réseau ne vérifie pas que le calcul sert vraiment**. Un mineur peut multiplier des nombres pris au hasard et être payé quand même, comme sur Bitcoin.

[st] **⬡ Flop, en gros.**

[p]
Flop, le projet d'Arthur Hayes (cofondateur de BitMEX), va plus loin. Les mineurs y font tourner de vrais modèles d'IA pour des clients qui paient leurs requêtes, et, selon sa documentation, **le réseau doit vérifier** que chaque réponse vient bien du modèle demandé.

[p]
Flop n'est pas encore lancé : le réseau n'en est qu'aux premiers tests et son lancement définitif est visé au premier trimestre 2027. [À VÉRIFIER le jour de l'envoi]

[avis]
💡 **Notre avis** : l'idée répond à la principale critique du minage (usage élevé d'électricité uniquement pour faire tourner le réseau). Mais tout repose sur un point : **prouver que le calcul est réellement utile**. Pearl ne le vérifie pas ; Flop promet de le faire, sans être encore lancé.

---

## Notes du Rédacteur (hors texte, à ne pas assembler)

### Sources
- `/Users/marc/Documents/claude/mining/glossaire.md` : PoW, PoUW (Pearl : multiplication de matrices, « le protocole ne vérifie PAS que les matrices sont utiles »), PoUI (Flop : vrai modèle, requêtes payantes), TOPLOC (vérification que la réponse vient du bon modèle, résumé ici sans le nom).
- `/Users/marc/Documents/claude/mining/00-ETAT.md` : genesis Pearl 27/04/2026 ; mainnet Flop visé T1 2027 ; Hayes 21/10 « aucun token FLOP » ; devnet public annoncé « dans les prochains jours » (mail du 27/10).

### Notes pour le fact-checker
- Statut de Flop au jour de l'envoi (devnet/testnet lancé ?), et confirmation du mainnet visé au T1 2027.
- « Arthur Hayes, cofondateur de BitMEX » : à confirmer d'un clic.
- « Le réseau vérifie que chaque réponse vient du modèle demandé » : selon la documentation Flop (preuve TOPLOC), pas encore éprouvé en conditions réelles.

### Termes glossaire proposés
| Terme | Slug | Forme dans le texte | Statut |
|---|---|---|---|
| Preuve de travail utile (PoUW) | `proof-of-useful-work` | encadré | NOUVEAU |
