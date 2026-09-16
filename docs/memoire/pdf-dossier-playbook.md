---
name: pdf-dossier-playbook
description: "Mode d'emploi réutilisable pour générer le PDF « type livre » d'un dossier (Paged.js) — pièges inclus"
metadata: 
  node_type: memory
  type: reference
  originSessionId: 3fec6510-1a18-44a8-8c60-ad1c371c8f5c
---

**Recette pour le PDF de N'IMPORTE QUEL dossier** (format long `/dossiers/<slug>`).
Mise au point sur le dossier DAT le 2026-07-21 (voir [[etat-projet]]). À réappliquer tel quel.

## Générer / régénérer
```
cd site && bash scripts/dossier-pdf.sh <slug>
```
Le script fait tout : installe le Chrome assorti si absent, build prod, pagine via Paged.js,
écrit `site/public/dossiers/<slug>.pdf`. Puis **committer le .pdf + déployer** (Vercel), sinon
le lien 404 en ligne. Vérifier ensuite l'URL live (`curl -sI .../dossiers/<slug>.pdf`).

## Brancher le bouton de téléchargement
Dans `site/app/dossiers/dossiers.ts`, ajouter `pdf: "/dossiers/<slug>.pdf"` sur le dossier.
Le bouton « Télécharger le dossier (PDF) » de la couverture apparaît automatiquement
(champ optionnel `Dossier.pdf` ; rendu dans `[slug]/page.tsx`).

## Pourquoi Paged.js et pas Chrome brut
Chrome `--print-to-pdf` d'une page web = marges blanches, titres coupés en deux, veuves.
Paged.js pagine comme un livre : numéros de page, figures entières plafonnées à une page,
tableaux qui coulent (en-tête répété), zéro coupure. Chaîne = `pagedjs-cli` (devDep).

## ⚠️ LES DEUX PIÈGES (font perdre des heures)
1. **Version de Chrome.** `pagedjs-cli` embarque puppeteer ~20.9 qui parle CDP à un
   **Chrome ~115**. Le Chrome système récent (140+) est INCOMPATIBLE → paged.js se fige sur
   « Rendering: Page 1 » (erreur `Runtime.callFunctionOn timed out` / WebSocket closed). Le
   script installe un Chrome 115 dédié via `@puppeteer/browsers` dans `~/.cache/puppeteer`.
2. **La feuille `-s` de pagedjs-cli est IGNORÉE.** Toutes les règles d'impression doivent
   vivre dans `site/app/globals.css` (`@page` + `@media print`) — c'est là que paged.js les lit.
   Symptôme du piège : on change le CSS et les mesures ne bougent pas d'un poil.

## Réglages anti-marges-blanches (dans globals.css)
- `@page { size:A4; margin: 20mm 16mm 18mm 16mm; ... }` (le n° de page vit dans `@top-right`,
  le wordmark dans `@bottom-center` — voir « Habillage » plus bas).
  Le levier n°1 : de VRAIES marges horizontales (pas `margin: Xmm 0`, qui étire les figures).
- `figure svg { max-height: 13cm; height: auto }` : plafonner les figures hautes (ex. flywheel
  ~10,7cm de haut à la largeur utile) pour qu'elles tiennent dans plus d'espaces restants.
- `p, li { orphans:3; widows:3 }` ; `h1..h4 { break-inside:avoid; break-after:avoid }` ;
  `.print-avoid-break { break-inside:avoid }` (figures + encadrés) ;
  `table { break-inside:auto } thead { display:table-header-group } tr,td,th { break-inside:avoid }`.
- Interface masquée par `.no-print` (Nav, ReadingProgress, bouton) ; fonds de marque gardés
  via `print-color-adjust: exact`.

## Vérifier le rendu (comme un lecteur externe)
Rendre les pages en PNG (`pdftoppm -png -r 45 out.pdf p`), mesurer le blanc en bas de chaque
page (compter les lignes claires depuis le bas ; viser 0 page > ~25%), et regarder des planches
contact + les pages à figures/tableaux. Ne pas se fier aux vignettes seules — zoomer sur les
coupures potentielles.

## ⚠️ PIÈGE n°3 : paged.js fragmente MAL les conteneurs flex
`break-inside: avoid` sur un `<div>` **flex** (ou dont les enfants sont dans un flex)
n'est PAS respecté → le groupe se coupe quand même. Pour un groupe insécable multi-blocs
(ex. « début de section = titre + 2 blocs », classe `.print-intro` dans `page.tsx`), il faut
un **flux bloc** (`space-y`, marges), pas `flex gap`. Les blocs-feuilles isolés (encadrés,
figures) supportent `break-inside: avoid` même en flex ; c'est le GROUPE multi-enfants qui casse.

## Anti-orphelins (réglés le 2026-07-22)
- **Sommaire** : `print-avoid-break` sur le `<nav>` → reste entier sur une page (sinon la
  dernière entrée « Verdict » débordait seule sur la page suivante). Résultat : couverture p1,
  sommaire complet p2.
- **Début de section** : dans `SectionBlock`, le titre + les 2 premiers blocs de contenu réel
  (on saute les sous-titres `st`) forment un `.print-intro` (break-inside:avoid, en flux bloc).
  Une section ne démarre plus en bas de page avec titre + 1-2 lignes ; elle bascule entière
  (petit blanc < 25% assumé). Vérifier : 0 page avec blanc bas > 25%.

## Habillage « type rapport » (ajouté le 2026-07-22, inspiré du dossier OAK Research)
Tout est print-only (n'apparaît pas à l'écran du site) :
- **Logo en tête de couverture** : `<div className="hidden ... print:flex">` + `firefly-logo-black.png`
  (fond clair). Caché à l'écran car déjà dans la barre de nav.
- **En-tête courant** (paged.js `string-set`) : classe `.run-head-src { string-set: runhead content() }`
  posée sur le titre de chapitre (h3), le bandeau de partie (h2) et le titre « Verdict » ;
  `@page { @top-left { content: string(runhead) } @top-right { content: counter(page) } }`.
  → nom de la section à gauche, n° de page à droite, mis à jour tout seul.
- **Pied courant** : `@page { @bottom-center { content: "CryptoLuciole · cryptoluciole.com" } }`.
- **Couverture sans en-tête/pied** : `@page :first { @top-left/@top-right/@bottom-center { content: none } }`.
- **Page de fin brandée** : `<div className="hidden break-before-page ... print:flex">` (logo + accroche
  + lien + disclaimer) ; le disclaimer inline passe en `print:hidden`.
- Rappel : Tailwind `print:*` et `break-before-page` sont respectés par paged.js (media print).
- Le texte est **justifié + césure** en impression (`@media print p { text-align:justify; hyphens:auto }`),
  drapeau à l'écran. Doc en `lang="fr"` (indispensable pour la césure).

## Détails infra
`site/.npmrc` (`puppeteer_skip_download=true`) empêche puppeteer de télécharger Chromium à
l'install (inutile au build Vercel ; le vrai Chrome vient de `@puppeteer/browsers`).
