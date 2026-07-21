#!/usr/bin/env bash
# État RÉEL du projet CryptoLuciole, injecté au démarrage de chaque session
# (hook SessionStart). But : ne JAMAIS repartir sur une mémoire périmée —
# la source de vérité, c'est le code + git, pas la note mémoire.
cd "$(dirname "$0")/.." 2>/dev/null || exit 0

echo "=== ÉTAT RÉEL CryptoLuciole (auto — $(date +%Y-%m-%d)) ==="

nums=$(ls site/app/emails/issues/ 2>/dev/null | grep -oE 'issue-[0-9]+' | tr '\n' ' ')
echo "Numéros publiés (emails)   : ${nums:-aucun}"

arch=$(grep -oE 'id: *"[0-9]+"' site/app/numeros/issues.ts 2>/dev/null | grep -oE '[0-9]+' | sort -un | tr '\n' ' ')
echo "Archive site (issues.ts)   : ${arch:-aucun}"

slugs=$(grep -oE 'slug: *"[a-z-]+"' site/app/dossiers/dossiers.ts 2>/dev/null | grep -oE '"[a-z-]+"' | tr -d '"' | tr '\n' ' ')
pub=$(grep -c 'statut: *"publie"' site/app/dossiers/dossiers.ts 2>/dev/null)
echo "Dossiers (slugs)           : ${slugs:-aucun}(dont ${pub:-0} publié·s)"

echo "5 derniers commits :"
git log --oneline -5 2>/dev/null | sed 's/^/  /'

echo "=> Vérifie CE bloc avant d'affirmer où on en est ; mets à jour la mémoire en fin de session."
