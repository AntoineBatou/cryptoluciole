# Drafts — textes validés avant assemblage

Sorties du **Rédacteur** (sous-agent Opus). Une partie à la fois.

- **Sections newsletter** : `drafts/issue-0X/<rubrique>.md` (ex. `drafts/issue-03/on-eclaire.md`).
- **Fiches site protocole** : `drafts/fiches/<slug>.md`, ou `drafts/issue-XX/fiche-<slug>.ts` quand
  la fiche accompagne un numéro.
- **Dossiers de fond** : `drafts/articles/<slug>/` + `drafts/articles/convert_dossier.py`.
- **Versions montrées à Marc** : `drafts/issue-XX/versions/<rubrique>.avant-marc.md`, copiées par la
  session principale juste avant sa relecture. Comparées à la version validée, elles montrent ce
  qu'il a coupé ou réécrit : le rédacteur lit les deux dernières paires de sa rubrique.

## Assemblage

`python3 drafts/build_issue.py <n>` lit `drafts/issue-XX/{on-eclaire,dans-le-faisceau,sous-la-loupe,reperes,fin}.md`
et `meta.json`, puis écrit le numéro dans `site/app/numeros/issues.ts` et l'email
`site/app/emails/issues/issue-XX.ts`. Balises en début de ligne : `[p]`, `[st]`, `[def | slug]`,
`[liste]`, `[tableau]`, `[avis]`, `[image | chemin | légende]`, `[source]`, et dans `fin.md`
`[titre]`, `[texte]`, `[question]`, `[a]`, `[b]`. Les lignes `>` et la section
`## Notes du Rédacteur` ne sont pas assemblées. Modèle : `drafts/issue-10/`.

Ces fichiers sont la **source verbatim** : une fois validés par Marc, ils sont assemblés
**tels quels** (sans reformulation) dans `site/app/numeros/issues.ts`,
`site/app/emails/issues/issue-0X.ts` ou `site/app/protocoles/protocols.ts` par la session
principale. C'est ce qui garantit la règle « on ne reformule jamais une section validée ».

Les chiffres volatils (prix, TVL, APY, note Pharos) ne sont **pas figés** ici : marqués
`[À VÉRIFIER]` / `[CHIFFRE LIVE]` et résolus à l'assemblage (live) ou au fact-check.

Voir le spec complet : `../docs/agents-ia.md`.
