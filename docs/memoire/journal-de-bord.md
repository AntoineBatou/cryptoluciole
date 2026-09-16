---
name: journal-de-bord
description: "Consigne : tenir la mémoire à jour en fin de chaque session (numéros publiés + nouveautés)"
metadata:
  node_type: memory
  type: feedback
  originSessionId: 90507c6d-d393-4d8b-99c7-5a756f3f0a77
---

Marc (2026-06-30) : « Il faut absolument qu'après chaque session tu gardes des traces des
nouveautés qu'on a ajoutées mais aussi des newsletters qu'on a faites. » Reproche déclenché
parce que je le croyais au #2 alors que #1 et #2 étaient publiés et le #3 déjà entamé — ma
mémoire `etat-projet` était périmée de plusieurs sessions.

**Why :** la couche IA n'a pas de mémoire interne — la mémoire = les fichiers. Si je ne les
mets pas à jour, je redémarre la session suivante sur un état faux et je fais perdre du
temps à Marc (ou pire, je repars sur un numéro déjà fait).

**How to apply :**
1. **En DÉBUT de session**, avant d'affirmer où on en est : vérifier le CODE, pas la note.
   `ls site/app/emails/issues/` (numéros publiés) · `ls drafts/` · `ls factcheck/` ·
   `git log --oneline`. Si la mémoire contredit le repo → croire le repo, corriger la note.
2. **En FIN de session** (ou quand une étape marquante est franchie) : mettre à jour
   [[etat-projet]] — section « Journal des numéros » (numéro publié/avancé, où on en est,
   prochaine action concrète) — et enregistrer toute **nouveauté** (nouvelle source →
   [[sources-veille]], leçon de style → [[style-editorial]], décision d'archi, nouvel
   agent, etc.) dans la mémoire adéquate.
3. Numéro = une ligne dans le « Journal des numéros » de [[etat-projet]] (statut
   PUBLIÉ / EN COURS + thème + fichiers). Le plus récent en haut.

Ne pas attendre que Marc le demande : c'est un invariant du projet maintenant.
