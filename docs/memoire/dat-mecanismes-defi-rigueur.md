---
name: dat-mecanismes-defi-rigueur
description: "Relire une section DeFi/mécanisme technique en entier (cohérence globale) avant de la livrer, pas patcher point par point"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 1db6881c-5821-41d6-bb35-c09414934568
---

Pour les sections qui expliquent un **mécanisme technique DeFi** (ex. section 7/8 du [[dat-dossier]], "S'exposer aux DAT via la DeFi" — coffres à taux de change, ERC-4626, carry trade), vérifier la doc primaire du protocole AVANT d'écrire, et relire toute la section une fois assemblée — pas seulement corriger le point signalé par Marc.

**Why:** sur la section Apyx/Saturn/Roxom/Hermetica du dossier DAT, plusieurs corrections en cascade ont été nécessaires (Galaxy Digital hors-sujet — conflated avec le cas Sharplink/ETH qui n'a rien à voir ; Roxom mal décrit — c'est un carry trade à effet de levier, pas une simple conversion ; le taux apxUSD→apyUSD annoncé comme "1 pour 1" alors que c'est un mécanisme de parts façon ERC-4626 qui varie selon le taux du moment ; l'ordre du texte utilisait `apyUSD` avant même d'introduire Apyx comme acteur ; un encadré "pourquoi 20% sans levier" est apparu sans jamais rappeler que le STRC lui-même ne verse que 11-12%). Cause identifiée : correction réactive au fil des messages sans rerelire l'ensemble à chaque fois → chaque fix ponctuel cassait la cohérence ailleurs dans le texte. Les faits eux-mêmes venaient aussi de sources hétérogènes (notes de recherche `00-recherche-sources.md` écrites tôt, non recroisées avec les recherches web faites plus tard).

**How to apply:** pour toute section qui explique un mécanisme financier/technique (pas juste des chiffres factuels isolés) : (1) vérifier la doc primaire du protocole concerné avant d'écrire une seule ligne de mécanique ; (2) une fois une correction demandée par Marc appliquée, relire toute la section (pas juste le paragraphe modifié) pour vérifier qu'aucun terme n'est utilisé avant d'être introduit et qu'aucun encadré ne référence un fait jamais posé dans le texte ; (3) ne pas mélanger des faits issus de notes de recherche anciennes avec des faits vérifiés par recherche web récente sans les recouper explicitement.
