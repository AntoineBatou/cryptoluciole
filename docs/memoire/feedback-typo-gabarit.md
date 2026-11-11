---
name: feedback-typo-gabarit
description: Mise en forme des emails — repartir du gabarit du #1 (pas du numéro précédent) et mettre des espaces insécables avant : ; ? !
metadata:
  type: feedback
---

Marc (28/10, test du #8) : « on a perdu en beauté par rapport au premier numéro… à chaque fois il faut repasser sur la mise en forme ». Constat : des « : » se retrouvaient en début de ligne sur mobile, et chaque assemblage copiait le numéro précédent (dérive cumulée).

**Why:** l'assemblage copie `issue-0(N-1).ts` → les écarts s'empilent ; une espace normale avant « : » autorise la coupure de ligne.

**How to apply:** à chaque assemblage, (1) espaces insécables (`&nbsp;` dans l'email, U+00A0 dans issues.ts) avant `: ; ? ! »` et après `«` — script appliqué au #8 ; (2) rendre l'email en PNG (Chrome headless) et le comparer au #1 AVANT le mail de test ; (3) chantier ouvert : figer un gabarit de référence tiré du #1. Voir [[style-editorial]], [[envoi-resend]].
