# Drafts — textes validés avant assemblage

Sorties du **Rédacteur** (sous-agent Opus 4.8). Une partie à la fois.

- **Sections newsletter** : `drafts/issue-0X/<rubrique>.md` (ex. `drafts/issue-03/on-eclaire.md`).
- **Fiches site protocole** : `drafts/protocoles/<slug>.md` (ex. `drafts/protocoles/re.md`).

Ces fichiers sont la **source verbatim** : une fois validés par Marc, ils sont assemblés
**tels quels** (sans reformulation) dans `site/app/numeros/issues.ts`,
`site/app/emails/issues/issue-0X.ts` ou `site/app/protocoles/protocols.ts` par la session
principale. C'est ce qui garantit la règle « on ne reformule jamais une section validée ».

Les chiffres volatils (prix, TVL, APY, note Pharos) ne sont **pas figés** ici : marqués
`[À VÉRIFIER]` / `[CHIFFRE LIVE]` et résolus à l'assemblage (live) ou au fact-check.

Voir le spec complet : `../docs/agents-ia.md`.
