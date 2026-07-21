#!/usr/bin/env bash
# Génère le PDF « type livre » d'un dossier via Paged.js (pagedjs-cli).
# Le rendu suit la page en ligne (source de vérité = dossiers.ts) + les règles
# d'impression de app/globals.css (@page, @media print : numéros de page,
# figures plafonnées, tableaux qui coulent, zéro titre coupé/veuve).
#
# Usage :  cd site && bash scripts/dossier-pdf.sh dat
# Sortie : public/dossiers/<slug>.pdf
#
# ⚠️ Paged.js s'appuie sur puppeteer, qui exige un Chrome de version ASSORTIE
# (le puppeteer embarqué parle CDP à ~Chrome 115 ; le Chrome système récent est
# incompatible → blocage). Le script installe ce Chrome dédié une fois pour
# toutes dans ~/.cache/puppeteer (idempotent).
set -euo pipefail

SLUG="${1:?usage: dossier-pdf.sh <slug>}"
SITE="$(cd "$(dirname "$0")/.." && pwd)"
PORT="${PORT:-3100}"
CHROME_VERSION="115.0.5790.170"
CACHE="${PUPPETEER_CACHE_DIR:-$HOME/.cache/puppeteer}"
OUT="$SITE/public/dossiers/${SLUG}.pdf"
cd "$SITE"

# 1) Chrome assorti à puppeteer (installé une fois) ------------------------
find_chrome() {
  # exécutable Chrome (macOS : « Google Chrome for Testing » ; Linux : « chrome »)
  find "$CACHE/chrome" -type f \( -name 'Google Chrome for Testing' -o -name 'chrome' \) \
    -path "*$CHROME_VERSION*" 2>/dev/null | head -1
}
CHROME_BIN=$(find_chrome || true)
if [ -z "$CHROME_BIN" ]; then
  echo "→ Installation du Chrome $CHROME_VERSION assorti à Paged.js (une fois, ~150 Mo)…"
  npx -y @puppeteer/browsers@latest install "chrome@$CHROME_VERSION" --path "$CACHE"
  CHROME_BIN=$(find_chrome)
fi
export PUPPETEER_EXECUTABLE_PATH="$CHROME_BIN"
echo "→ Chrome : $CHROME_BIN"

# 2) Build + serveur de prod (rendu rapide et stable pour Paged.js) --------
echo "→ Build de production…"
npm run build >/dev/null
pkill -f "next-server" 2>/dev/null || true
sleep 1
npm run start -- -p "$PORT" >/tmp/cl-dossier-prod.log 2>&1 &
SRV=$!
trap 'kill $SRV 2>/dev/null || true' EXIT
for i in $(seq 1 40); do
  curl -sf -o /dev/null "http://localhost:$PORT/dossiers/$SLUG" && break
  sleep 1.5
done

# 3) Génération Paged.js --------------------------------------------------
mkdir -p "$(dirname "$OUT")"
echo "→ Pagination Paged.js → $OUT"
node_modules/.bin/pagedjs-cli "http://localhost:$PORT/dossiers/$SLUG" -t 90000 -o "$OUT"
echo "✓ $(du -h "$OUT" | cut -f1) — $OUT"
