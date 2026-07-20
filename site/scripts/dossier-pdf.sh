#!/usr/bin/env bash
# Génère le PDF d'un dossier à partir de la PAGE EN LIGNE (source de vérité =
# dossiers.ts), via Chrome headless + le style @media print de globals.css.
# Le PDF atterrit dans public/dossiers/<slug>.pdf → servi par le bouton
# « Télécharger le dossier (PDF) » de la couverture.
#
# Usage :  bash scripts/dossier-pdf.sh dat          (dev server sur :3000)
#          BASE=https://www.cryptoluciole.com bash scripts/dossier-pdf.sh dat
#
# Prérequis : le serveur doit tourner (npm run dev) OU passer BASE=<url prod>.
set -euo pipefail

SLUG="${1:?usage: dossier-pdf.sh <slug>}"
BASE="${BASE:-http://localhost:3000}"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
OUT="$(cd "$(dirname "$0")/.." && pwd)/public/dossiers/${SLUG}.pdf"

mkdir -p "$(dirname "$OUT")"
echo "→ Impression ${BASE}/dossiers/${SLUG} → ${OUT}"

"$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
  --virtual-time-budget=15000 \
  --print-to-pdf="$OUT" \
  "${BASE}/dossiers/${SLUG}" 2>/dev/null

echo "✓ $(du -h "$OUT" | cut -f1) — $OUT"
