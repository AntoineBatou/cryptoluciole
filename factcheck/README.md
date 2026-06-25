# Fact-check — rapports avant envoi

Rapports du **Fact-checker** (sous-agent Sonnet), un par contrôle :
`<cible>-AAAA-MM-JJ.md` (ex. `issue-03-2026-06-26.md`).

- Le Fact-checker lit le numéro assemblé, vérifie **chiffres + actualité** par recherche
  web réelle, et **ne modifie aucun contenu** : il rend un rapport ✅/⚠️/❓ + verdict
  🟢 GO / 🔴 NO-GO.
- Les corrections sont ensuite faites par la session principale, après lecture du rapport.
- À lancer **juste avant l'envoi** (colle à la règle « fact-check web obligatoire avant
  chaque envoi »).

Voir le spec complet : `../docs/agents-ia.md`.
