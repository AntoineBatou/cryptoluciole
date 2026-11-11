# Avis de tiers sur le taux fixe on-chain et Morpho Midnight (pour SOUS LA LOUPE n°10)

Recherche du 2026-11-10. Sources : X (treg `x.search.posts`, 9 requêtes, environ 0,005 $ au total), WebSearch et WebFetch (4Pillars, Sentora, Blockstories, blog Morpho, Wolf Street), API DeFiLlama. Complète `recherche-midnight-aave.md` (mécanisme, chiffres, historique d'Aave) sans le répéter.

Pas de conseil d'investissement. Les citations sont courtes (15 mots au plus) ; le reste est reformulé.

**Règle de lecture.** Un post X donne une piste, pas une preuve. Les chiffres qui viennent d'un post sont marqués [non vérifié] tant qu'on ne les a pas recoupés.

---

## 1. Les avis marquants

### POUR (le taux fixe on-chain a enfin sa chance)

**1. Paul Frambot, cofondateur et PDG de Morpho (partie prenante)**
- **Ce qu'il dit.** Midnight n'a pas été construit pour les particuliers qui veulent un taux fixe, mais pour les institutions. Ce qu'elles veulent, c'est le contrôle : sur le risque, sur les contreparties et surtout sur le taux.
- **Date :** 12/09/2026
- **Lien :** https://x.com/PaulFrambot/status/2098690536559329562
- **Second post (03/11/2026).** Après les turbulences de marché de fin octobre, il souligne qu'il n'y a pas de « taux partagé » sur Midnight. Quand la liquidité se tarit, un prêt déjà conclu garde son taux et son échéance. Son résumé : « Your fixed rate stays… fixed ».
- **Lien :** https://x.com/PaulFrambot/status/2117594731030938003
- **Contexte à recouper.** Un autre compte (@0xVinnieJames, 03/11) affirme qu'Aave a gelé des marchés après un piratage lié à Binance et que les taux d'emprunt variables ont bondi. [non vérifié] Si c'est confirmé, on tient le cas d'école du taux fixe qui protège l'emprunteur.

**2. Merlin Égalité, cofondateur de Morpho (partie prenante)**
- **Ce qu'il dit.** Midnight vient de passer 100 M$ de prêts « originés », c'est-à-dire accordés depuis le lancement, et la croissance des dernières semaines a été très forte. La prochaine étape est le « Vault Adapter », qui doit ouvrir Midnight aux milliards déposés dans les vaults Morpho.
- **Date :** 10/11/2026
- **Lien :** https://x.com/MerlinEgalite/status/2120171523470479799
- **Message de Frambot sur le même sujet (27/10/2026).** Le plus dur pour le taux fixe on-chain a toujours été d'attirer assez de liquidité « intelligente ». L'adaptateur doit rendre Midnight accessible à environ 5 Md$ déjà déposés dans les vaults : https://x.com/PaulFrambot/status/2115099098886062505
- **Compte officiel @Morpho (10/11) :** « $100M+ in loans originated » : https://x.com/Morpho/status/2120170663621337248

**3. Stani Kulechov, fondateur d'Aave (concurrent)**
- **Ce qu'il dit.** Aave a racheté Avon, dont il présente l'équipe comme l'une des meilleures du crédit on-chain et du taux fixe. Elle travaille déjà avec l'équipe protocole d'Aave pour bâtir le crédit on-chain sur Aave V4.
- **Date :** 06/11/2026
- **Lien :** https://x.com/StaniKulechov/status/2118724526754173048
- **Lecture.** Le leader du prêt variable reconnaît implicitement qu'il lui manque ce produit. C'est une validation de la catégorie, pas une preuve de demande : Avon pesait environ 10 k$ de TVL, et aucun calendrier de produit n'est annoncé (voir la recherche, §3.1).

**4. Heechang, Four Pillars Research (analyste indépendant)**
- **Ce qu'il dit.** Le taux fixe a échoué parce que ses utilisateurs n'en avaient pas besoin : ils spéculaient à court terme. Les emprunteurs qui ont réellement besoin d'un terme connu (institutions, trésoreries, fonds de crédit tokenisé) seraient désormais arrivés. Sa formule : « the borrowers who genuinely need fixed terms have now arrived ».
- **Date :** 07/08/2026
- **Lien :** https://research.4pillars.io/en/research/fixed-rates-failed-in-the-past-now-it-has-real-needs
- **Limite.** L'article ne donne aucun chiffre d'usage de Midnight : la thèse de la demande est déduite des tendances, pas mesurée.

**5. Blockstories (republié par stock3), avec Laurence Day (Wildcat Labs), David Vatchev (Fasanara Capital) et Nuno Cortesão (Zharta)**
- **Ce qu'ils disent.** Une échéance et un taux fixés rendent le prêt plus facile à « souscrire » pour une institution, c'est-à-dire à analyser et approuver. Le format colle aussi aux actifs réels à flux datés (factures, créances).
- **Date :** 04/06/2026, avant le lancement
- **Lien :** https://stock3.com/news/can-morpho-midnight-scale-fixed-term-lending-onchain-17105846
- **Ce qu'ils nuancent.** La demande des emprunteurs naturels n'était « pas active on-chain à grande échelle ». La fragmentation de la liquidité reste un risque non prouvé, et le cadre réglementaire reste « la plus grosse contrainte » pour les banques (voir la colonne réserves).

### RÉSERVES (le problème n'est pas encore résolu)

**6. Morpho lui-même, billet de blog sur les marchés à offres (aveu de l'éditeur)**
- **Ce qu'il dit.** Le billet reconnaît trois limites du modèle :
  - la complexité pour l'utilisateur passif, qui doit choisir taux, échéance, collatéral et sortie ;
  - l'exécution incertaine (« Posting an offer does not mean anyone will take it ») ;
  - la sortie anticipée, qui dépend de la demande sur le marché secondaire.
- **Date :** non affichée sur la page. Le billet est indexé parmi ceux de septembre 2026 [non vérifié].
- **Lien :** https://morpho.org/blog/how-onchain-credit-is-evolving-with-offer-based-markets
- **Même ton dans un autre billet.** « Fixed rates are how DeFi moves beyond crypto » reconnaît que ces marchés ne marchent que si des acteurs sophistiqués viennent les animer : https://morpho.org/blog/fixed-rates-are-how-defi-moves-beyond-crypto/

**7. Sentora Research (gérant de vaults et analyste on-chain)**
- **Ce qu'il dit.** La liquidité affichée dans les offres n'est pas forcément exécutable, puisque les fonds ne sont pas réservés à la signature. Le prêteur est exposé au collatéral le plus faible que le marché autorise, pas seulement à celui qui est déposé. Enfin, la croissance durable dépendra d'une demande récurrente des emprunteurs, pas d'incitations.
- **Date :** 24/07/2026 (la page affiche aussi une date de mise à jour au 10/11)
- **Lien :** https://sentora.com/research/articles/morpho-midnight-fixed-rate-credit-goes-live-on-base

**8. Rejamong, Four Pillars Research (analyste indépendant)**
- **Ce qu'il dit.** Il voit Midnight comme une évolution nécessaire, mais rappelle deux choses. D'abord, le taux fixe on-chain existait déjà, donc la seule vraie nouveauté est la liquidité par offres. Ensuite, les marchés restent découpés par couple collatéral × échéance, ce qui amincit la liquidité.
- **Date :** 09/06/2026
- **Lien :** https://research.4pillars.io/en/research/morpho-midnight-defis-boring-but-necessary-future

**9. @belizardd, analyste DeFi sur X (environ 60 k abonnés)**
- **Ce qu'il dit.** Il dresse la liste des acteurs du taux fixe : Spark/IRIS, Aave/Avon, Morpho Midnight, Term, TermMax, Loopscale, Liquity V2, Yearn (flex)… Son verdict : la plupart de ces marchés sont « thin », c'est-à-dire peu profonds. La veille, il ajoutait que « personne ne l'a encore résolu ».
- **Dates :** 10/11 et 09/11/2026
- **Liens :** https://x.com/belizardd/status/2120065999026458887 et https://x.com/belizardd/status/2119831081734324340
- **Avis proche, @eldarcap (06/11).** Le taux fixe n'est pas encore une habitude des emprunteurs on-chain, mais les habitudes changent et les prêteurs institutionnels le réclament : https://x.com/eldarcap/status/2118736975108653548

**10. Deux signaux concrets sur les limites d'usage**
- **Le déséquilibre entre emprunteurs et prêteurs.** @namhvng, de Spine (10/11), affirme que la demande pour *emprunter* à taux fixe dépasse d'environ 20 contre 1 celle pour *prêter* à taux fixe. Pour lui, la vraie question est ce qui convaincrait un prêteur de s'engager 90 jours. [non vérifié : petit compte, chiffre sans source]
  - Lien : https://x.com/namhvng/status/2120052285074190456
- **La sortie anticipée.** Un développeur (@mgnfy_view, 08/11) a construit en un week-end de hackathon (ETHGlobal) un AMM pour Midnight, c'est-à-dire un teneur de marché automatique. Son constat de départ : une fois qu'on a prêté, l'argent reste bloqué jusqu'à l'échéance, et pour emprunter il faut attendre qu'une offre corresponde. Cela illustre bien la limite de sortie, mais l'outil n'est pas audité.
  - Lien : https://x.com/mgnfy_view/status/2119483286410117629

---

## 2. Les arguments récurrents

### a) Pourquoi le taux fixe n'avait jamais décollé en DeFi

- **Les emprunteurs étaient des spéculateurs à court terme.** Ils voulaient ouvrir et fermer un levier à tout moment, donc payer une prime pour figer un taux n'avait pas de valeur pour eux (4Pillars, 07/08/2026).
- **Le prêteur était perdant face à Aave.** Le prêt à terme immobilisait son capital, alors qu'Aave payait à peu près autant avec un retrait instantané (même source).
- **La liquidité était émiettée par échéance.** Chaque couple actif × échéance × taux formait un petit marché peu profond, avec de gros écarts de prix, et les utilisateurs repartaient vers les pools variables (Blockstories, 4Pillars).
- **Les échecs nommés :**
  - **Yield Protocol** ferme fin 2023. Motifs déclarés : pas de demande durable d'emprunt à taux fixe, plus la pression réglementaire aux États-Unis, en Europe et au Royaume-Uni (Cointelegraph : https://cointelegraph.com/news/yield-protocol-permanently-wind-down-december-2023).
  - **Notional V3** cesse ses activités fin 2025, après une mauvaise dette liée à une faille de Balancer (source secondaire, Phemex : https://phemex.com/news/article/notional-v3-to-shut-down-on-mainnet-and-arbitrum-amid-bad-debt-issues-33221). [à confirmer par une source primaire]
  - **Le « stable rate » d'Aave** n'a jamais été un vrai taux fixe : la gouvernance pouvait le réajuster. Il a été désactivé partout le 09/11/2023 après un bug critique signalé via Immunefi, puis retiré du code en v3.2 (proposition 358 : https://governance-v2.aave.com/governance/proposal/358/). Détail dans `recherche-midnight-aave.md` §3.2.
  - **Term Finance** est toujours en ligne, mais sa TVL a fortement baissé (environ 3,4 M$ sur DeFiLlama au 10/11). C'est le contre-exemple du modèle par enchères.

### b) Ce qui serait différent cette fois

- **Les offres n'immobilisent plus le capital.** Un prêteur publie une offre sans bloquer ses fonds. Grâce aux « callbacks », son argent continue de rapporter le taux variable de Morpho Blue jusqu'à l'exécution. Frambot en tire un plancher : au pire le taux variable, au mieux un taux fixe plus élevé (24/08/2026 : https://x.com/PaulFrambot/status/2091911504362951163). C'est la réponse directe au problème du prêteur perdant face à Aave.
- **Une seule réserve de capital pour plusieurs marchés.** Une même signature peut couvrir des offres sur plusieurs marchés et échéances. C'est la réponse, encore théorique, à la fragmentation (4Pillars, Sentora).
- **La distribution par Coinbase.** Depuis le 22/09/2026, les prêts à taux fixe garantis par du BTC dans l'app Coinbase passent par Midnight. C'est la première porte d'entrée grand public d'un taux fixe on-chain.
- **L'arrivée de capitaux institutionnels.** Exemples : Tenor, plateforme bâtie sur Midnight, revendique 50 M$ de dépôts selon Merlin Égalité le 03/11 [non vérifié on-chain] ; des échanges avec Laser Digital (filiale de Nomura) sont évoqués par un membre de l'équipe [non vérifié].
- **Le branchement prochain des vaults (environ 5 Md$).** Annoncé « bientôt », il dépend d'une décision de gouvernance (The Defiant).
- **L'effet d'entraînement.** Les concurrents copient la même semaine :
  - Aave rachète Avon (06/11) ;
  - Spark lance IRIS, un taux fixe par cotation au-dessus de SparkLend (09/11 : https://x.com/sparkfinance/status/2119781718785679548) ;
  - Pendle et Ethena lancent des marchés USDe à 3, 6, 9 et 12 mois (10/11 : https://x.com/pendle_fi/status/2120155914993066201).
- **Le nouveau cas d'usage selon Frambot : l'arbitrage de taux entre blockchains.** On emprunte sur une chaîne pour prêter sur une autre sans craindre que le taux bouge pendant le transfert (08/09/2026 : https://x.com/PaulFrambot/status/2097310921207263574).

### c) Les limites

- **La liquidité de sortie.** Sortir avant l'échéance suppose qu'un acheteur existe sur le marché secondaire (aveu de Morpho). C'est exactement ce qui a fait défaut aux protocoles précédents.
- **La fragmentation n'est que déplacée.** Elle est atténuée entre échéances d'un même protocole, mais réapparaît entre protocoles : Midnight, Avon/Aave, IRIS/Spark, Pendle, Term, TermMax… (4Pillars, @belizardd). [inférence]
- **Une demande déséquilibrée.** Beaucoup d'emprunteurs voudraient figer leur coût, peu de prêteurs veulent bloquer leur capital (le 20 contre 1 de Spine, [non vérifié]). D'où des taux fixes un peu au-dessus du variable pour rémunérer le blocage : dans les carnets, environ 4,2 à 4,8 % côté emprunteur sur Midnight, contre 4,45 % en variable sur Aave le même jour (recherche §2).
- **Une liquidité affichée qui n'est pas garantie.** Une offre visible n'est pas forcément exécutable (Sentora).
- **La concentration.** Environ 66 M$ de l'encours sont sur une seule échéance USDC au 25/12/2026 sur Ethereum (recherche §2.2). C'est une croissance portée par quelques gros acteurs [inférence].
- **La complexité pour le particulier.** Il faut choisir taux, échéance, collatéral et sortie. L'utilisateur passera surtout par des interfaces (Coinbase, Tenor, vaults) plutôt qu'en direct.
- **La réglementation.** Pour les banques et les grandes institutions, c'est « la plus grosse contrainte » selon les contributeurs de Blockstories.

---

## 3. Chiffres de contexte (sourcés)

**Chiffre 1 : le miroir entre crédit traditionnel et DeFi (le plus parlant)**
- **Côté finance traditionnelle.** Seulement environ **4 % des crédits immobiliers en cours aux États-Unis sont à taux variable** (donc ~96 % à taux fixe), selon les données de la FHFA (l'agence fédérale du financement immobilier) reprises par Wolf Street le 27/03/2026 : https://wolfstreet.com/?p=111102.
  - Précision : sur les *nouveaux* crédits de 2025, la part du variable est plus élevée, entre ~9 % et ~21 % selon les définitions (ABA, NMP). Bien dire « crédits en cours ».
- **Côté DeFi.** **Plus de 95 % des ~25 Md$ de prêts actifs** des grands protocoles étaient à taux variable et sans échéance début 2026 (4Pillars, 07/08/2026 ; même ordre de grandeur chez Blockstories, 04/06/2026).
- **Formulation possible.** « En immobilier américain, ~96 % des crédits en cours sont à taux fixe ; en DeFi, plus de 95 % des prêts sont à taux variable. C'est le monde à l'envers. »
- **Réserve.** On compare du crédit immobilier à du crédit crypto collatéralisé à court terme : l'image est juste sur l'ordre de grandeur, pas sur la nature des prêts.

**Chiffre 2 : le poids réel de Midnight (DeFiLlama, API au 10/11/2026)**

| | Midnight | Morpho Blue | Aave v3 |
|---|---|---|---|
| Encours emprunté | ≈ 92,1 M$ | ≈ 5,61 Md$ | ≈ 11,2 Md$ |
| TVL | ≈ 164 M$ | ≈ 10,7 Md$ | — |

- **Ratio.** Midnight pèse **≈ 1,6 % de l'encours de Morpho Blue** et ≈ 0,8 % de celui d'Aave v3.
- **Croissance.** L'encours est passé d'environ 70 à 90 M$ entre le 01/11 et le 07/11, selon un post X qui cite DeFiLlama [non vérifié séparément]. La TVL a été multipliée par environ 11 entre le 20 et le 30/10 (recherche §2.2).
- **Attention aux mesures.** « 100 M$ de prêts originés » (Morpho, chiffre cumulé) n'est pas la même chose que les ~92 M$ d'encours. Les « 285 M$ de dépôts » cités par un membre de l'équipe sur X ne correspondent pas non plus à la TVL DeFiLlama ([non vérifié] ; les offres ne bloquent pas de capital, donc les mesures divergent).

---

## 4. Trois thèses possibles pour « Notre avis » (2 à 3 phrases)

**Thèse A : « Le taux fixe on-chain n'est pas un produit de particulier, c'est un produit d'institution. »**
> Midnight ne pèse encore que ~1,6 % de l'encours de Morpho Blue, mais ce n'est pas le bon thermomètre : le taux fixe a échoué en DeFi parce que ses utilisateurs spéculaient à court terme, et Frambot le dit lui-même, il vise les institutions qui veulent maîtriser leur coût. La métrique à suivre, c'est le branchement des ~5 Md$ des vaults Morpho et le volume qui passe par Coinbase, pas la TVL de la semaine.

*Appuis :* Frambot (12/09), 4Pillars (07/08), chiffre 2.

**Thèse B : « Le vrai test, ce n'est pas d'entrer, c'est de sortir. »**
> Prêter à taux fixe sur Midnight est désormais simple et ne coûte presque rien en attendant, grâce aux callbacks. Mais revendre sa créance avant l'échéance dépend d'un acheteur, et Morpho l'écrit noir sur blanc. C'est précisément ce qui a tué Yield Protocol et ses cousins : tant qu'un vrai marché secondaire n'existe pas, le prêteur reste un épargnant bloqué, et la prime de taux qu'il demande freinera les emprunteurs.

*Appuis :* blog Morpho, Moonglade (08/11), Spine (déséquilibre 20 contre 1, [non vérifié]), Sentora.

**Thèse C : « La course est lancée, mais elle recrée le problème qu'elle veut résoudre. »**
> En une semaine, Aave rachète Avon, Spark lance IRIS et Pendle ouvre des échéances USDe : le taux fixe devient enfin une catégorie, et l'avance de Midnight (Coinbase, 100 M$ de prêts) est réelle. Mais l'échec historique venait d'une liquidité émiettée entre échéances. Si chaque géant ouvre son propre carnet, on l'émiette désormais entre protocoles : le gagnant sera celui qui attire les prêteurs passifs, pas celui qui a le meilleur design.

*Appuis :* Stani (06/11), Spark (09/11), Pendle (10/11), @belizardd (« most of these markets are thin »), Rejamong/4Pillars sur la fragmentation.

*Rappel de forme :* la thèse retenue devra respecter le style maison (avis tranché, gagnants et perdants, durable ou temporaire, bonne métrique), avec des espaces insécables avant ; : ? !

---

## 5. Ce qui n'a pas été trouvé ou vérifié

- **Prises de position des curateurs Steakhouse, Gauntlet et Block Analitica sur Midnight :** rien de substantiel trouvé sur X ni sur le web (seulement des mentions de vaults curatés).
- **Recherches Messari, Blockworks Research, Kairos Research et OAK sur Midnight :** non trouvées par WebSearch. OAK n'a pas été interrogé par son MCP.
- **Reddit :** aucun fil pertinent trouvé.
- **Forum Morpho :** il existe un fil « MIP XXX – Add new LLTVs on Morpho Midnight » (04/11/2026), mais pas de proposition trouvée pour le Vault Adapter. Le contenu n'a pas été lu.
- **Date du billet Morpho sur les limites du modèle à offres :** non affichée.
- **Cause des turbulences de fin octobre** (le « Binance hack » évoqué sur X) : non vérifiée. À recouper avant de s'en servir comme exemple.
