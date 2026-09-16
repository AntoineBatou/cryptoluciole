---
name: adresse-test-email
description: "Adresse à utiliser pour les tests d'emails CryptoLuciole (PAS celle du userEmail système)"
metadata: 
  node_type: memory
  type: reference
  originSessionId: 3fec6510-1a18-44a8-8c60-ad1c371c8f5c
---

> 🔒 **Adresses anonymisées dans ce miroir public.** La version complète, avec les adresses
> réelles, est dans la mémoire locale du Mac
> (`~/.claude/projects/-Users-marc-Documents-claude-newsletter/memory/adresse-test-email.md`).
> Depuis une session cloud : **demander l'adresse à Marc**, ne jamais la deviner.

Pour les **tests d'envoi** (Resend, `--test`), utiliser l'**adresse Gmail du projet** —
celle du compte Google Drive de Marc.

⚠️ Le champ `userEmail` du contexte système de session affiche une **autre** adresse
(un compte Outlook). Ce **n'est PAS** la bonne : un test y a été envoyé par erreur le
2026-07-22. Toujours utiliser l'adresse Gmail du projet, et **demander confirmation à
Marc** avant un `--test` si elle n'est pas sous la main.

**Reply-To des envois** = `contact@cryptoluciole.com` (câblé dans
`site/scripts/send-newsletter.mjs`, commit 3300d81). Cette adresse est une
**redirection OVH vers `<adresse-test-projet>`** → les réponses et les
désinscriptions par mailto arrivent dans le Gmail de Marc. NB : l'expéditeur
reste `mail@send.cryptoluciole.com` (sous-domaine d'ENVOI, sans MX, qui ne peut
PAS recevoir — d'où le Reply-To).

Voir [[envoi-resend]].
