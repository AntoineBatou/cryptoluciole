# 💡 ÇA BRILLE — numéro 8 : les piratages de 2026

> Brouillon (session principale, 28/10). Chiffres = API DeFiLlama Hacks (`api.llama.fi/hacks`),
> relevé du 28/10. **À rafraîchir le jour de l'envoi** (la base est mise à jour a posteriori).
> Choix de Marc (28/10) : « Piratages 2026 ».

**Titre (proposition)** : 2,4 Md$ volés en crypto depuis janvier : les accès volés et les bridges en tête

[p]
Environ **2,4 Md$** : c'est ce qui a été volé en crypto depuis le 1er janvier 2026, en plus de 300 attaques recensées par DeFiLlama. C'est déjà plus que sur toute l'année 2023 (1,6 Md$) ou 2024 (1,7 Md$), et pas loin de 2025 (2,7 Md$), à deux mois de la fin de l'année.

[st] Comment l'argent a été volé

[liste]
- **≈ 30 % par des accès volés** (≈ 720 M$) : l'attaquant met la main sur une clé ou s'introduit dans un système interne, et s'en sert pour vider des wallets. Aucune faille de code n'est nécessaire. Le plus gros vol de l'année en fait partie : environ 387 M$ sortis des *hot wallets* (des wallets connectés en permanence à Internet) de l'exchange Bitget, le 24 septembre ;
- **≈ 30 % sur des *bridges*** (≈ 700 M$), ces ponts qui font passer des jetons d'une blockchain à l'autre : l'attaquant fait croire à une chaîne que des fonds ont été déposés sur l'autre, et retire de l'argent qui n'existe pas ;
- **≈ 16 % par un défaut de contrôle d'accès** (≈ 370 M$) : quelqu'un obtient des droits d'administrateur qu'il ne devrait pas avoir. Exemple : en avril, chez Drift, les attaquants ont obtenu à l'avance la signature de deux des cinq membres chargés de valider les modifications du protocole, et ont pris la main sur ses contrats (≈ 285-295 M$) ;
- le reste (≈ 24 %) se partage entre erreurs de calcul dans les contrats, attaques sur les sites web et manipulations d'oracles (les flux qui donnent les prix aux contrats).

[p]
**Quatre attaques font à elles seules plus de la moitié du total** : l'année se joue sur quelques gros coups, pas sur une multitude de petits. Et l'argent volé ne revient presque jamais (moins de 1 %, ≈ 6 M$).

[avis]
- **Près d'un tiers des fonds volés l'a été sans aucune faille de code** : un accès dérobé a suffi. Et les bridges pèsent autant à eux seuls. Un audit du code des contrats ne couvre aucun de ces deux risques.
- **Si tes fonds sont sur un exchange**, c'est lui qui détient les clés : le vol de Bitget montre que le risque se trouve alors chez lui, pas chez toi. **Si tu passes par un protocole**, la question à se poser est : qui peut modifier ses contrats, et combien de signatures faut-il ? C'est par là que Drift est tombé, et c'est le point faible de Derive (voir SOUS LA LOUPE).

---

## Notes (hors texte)
- Calcul : somme des `amount` des incidents datés de 2026 (318) = 2 371 M$ ; 2025 = 2 715 M$ ; 2024 = 1 670 M$ ; 2023 = 1 626 M$ ; 2022 = 3 634 M$. Par `classification` 2026 : Key Compromise 721 M$ (30 %), Bridge & Cross-Chain 700 (30 %), Access Control 370 (16 %), Token & Share Accounting 251 (11 %), Frontend & Infrastructure 142 (6 %), Oracle Manipulation 75 (3 %), autres < 2 %. Top 4 = 55 % du total. `returnedFunds` 2026 ≈ 6 M$.
- Top 2026 (DeFiLlama) : Bitget 387 M$ (24/09), Liquid Network 320 M$ (06/09, bridge), Drift 295 M$ (01/04), Kelp 293 M$ (18/04, bridge).
- ✅ Bitget recoupé (28/10) : 24/09/2026, estimation relevée de 351,6 à ~387,5 M$ (Bleeping Computer, Forklog, BeInCrypto) ; Blockhead : Bitget « écarte une compromission de clé privée » → identifiants internes volés + ordres de retrait forgés. D'où « accès volés (clé ou identifiants internes) » et non « clé privée ».
- ✅ Drift recoupé : 01/04/2026, 270-295 M$ selon les sources (≈ 285 M$ le plus cité) ; appareils de contributeurs compromis, approbations pré-signées de 2 des 5 membres du Security Council (rapport Nexus Mutual, Cointelegraph, Bloomberg Law). D'où la fourchette « ≈ 285-295 M$ ».
- Ventilation « type de cible » : protocoles DeFi 1 187 M$, chaînes 435, CEX 417, wallets 237 (non reprise dans le texte).
- La veille donnait « 2,245 Md$ » au 18/10 : l'écart vient des ajouts récents dans la base.
- Le lien avec Derive (dernière puce de l'avis) est à ajuster selon la version finale de SOUS LA LOUPE.
