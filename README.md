# CryptoLuciole

Newsletter crypto & DeFi pédagogique, et son site (cryptoluciole.com).

- `CLAUDE.md` — fonctionnement du projet : agents, règles éditoriales, envoi, charte.
- `.claude/agents/` — veilleur, rédacteur, vérificateur, fact-checker ; skill `/veille`.
- `drafts/` — sections validées (source verbatim) et `build_issue.py` (assemblage site + email).
- `veille/`, `factcheck/` — veilles datées et rapports de vérification.
- `site/` — application Next.js : numéros, glossaire, fiches protocoles, dossiers ; scripts d'envoi.
- `docs/` — spec des agents, calibrage du vérificateur, miroir de la mémoire (`docs/memoire/`).
- `assets/logo/` — logos, servis via `raw.githubusercontent.com` pour les emails.
- `cryptoluciole-01-*.html`, `templates/` — numéro 1 et ancien gabarit manuel (référence visuelle).
