# Recette : un graphique maison pour la newsletter (testée le 2026-11-16, numéro 11)

Pourquoi : un numéro sans image paraît dense (leçon du numéro 11). Un graphique simple casse le texte
et fait passer un chiffre d'un coup d'œil.

1. **Le message d'abord** : le titre du graphique dit ce qu'on voit (« Ce que coûte un envoi de stablecoin »).
   Une seule série, une couleur ; la valeur à souligner en or-luciole `#F5A623`, le reste en teal `#28B092`.
   Valeurs écrites au bout des barres, pas de légende inutile. Échelle log seulement si les chiffres
   couvrent plusieurs ordres de grandeur, avec des graduations en mots (« 1 centime », « 1/100 ct »).
2. **Source** : un fichier HTML avec un SVG, police Inter (Google Fonts), largeur 528 px (la colonne de l'email).
   Exemple : `drafts/issue-11/captures/cout-envoi.html` (généré par un petit script Python).
3. **Rendu en PNG ×2** (pas de matplotlib installé, Chrome suffit) :
   `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --hide-scrollbars --force-device-scale-factor=2 --window-size=528,<hauteur> --virtual-time-budget=4000 --screenshot=<sortie.png> file://<source.html>`
   Puis regarder l'image (libellés coupés, graduations qui se chevauchent).
4. **Placement** : copier le PNG dans `site/public/numeros/<n>/` ; dans le brouillon,
   `[image | drafts/issue-<n>/captures/<fichier>.png | légende courte]`. `build_issue.py` le sert depuis
   raw.githubusercontent.com : **l'image ne s'affiche dans l'email qu'après le push sur GitHub**.
5. Pas de doublon : le graphique remplace le tableau qui donnait les mêmes chiffres.

## Ajouts du 2026-11-24 (numéro 12)
- **Tableau de comparaison** : `[tableau | compare]` dans le brouillon. `build_issue.py` met la dernière colonne (la nouveauté, la proposition) en or-luciole, l'en-tête de la première colonne en nuit, les libellés de lignes en petites capitales grises. Pour A contre B ou avant / après.
- **Schéma de scénario** : exemple `drafts/issue-12/captures/weekend-tesla.html` (prix figé le week-end, seuil de liquidation pointillé rouge, saut du dimanche soir, health factor écrit aux deux points). Généré par un petit script Python, même rendu Chrome ×2.
- **Courbes base 100** : `drafts/issue-12/captures/btc-nasdaq.html` (deux séries, étiquettes en bout de courbe, point bas annoté).

