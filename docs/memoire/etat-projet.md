---
name: etat-projet
description: "Où en est CryptoLuciole — focus courant + journal des numéros (le hook de démarrage donne l'état réel du code)"
metadata:
  node_type: memory
  type: project
  originSessionId: 90507c6d-d393-4d8b-99c7-5a756f3f0a77
  modified: 2026-10-29T21:52:04.969Z
---

**⚠️ Avant d'affirmer où on en est : vérifier le CODE, pas seulement cette note.**
Source de vérité = `ls site/app/emails/issues/` (numéros publiés) + `ls drafts/` +
`ls factcheck/` + `git log --oneline`. Cette mémoire reflète la dernière session ; la
mettre à jour À CHAQUE fin de session (voir [[journal-de-bord]]).

## 🛠️ Refonte du 2026-11-11 (audit)
Audit complet dans `/Users/marc/Documents/claude/_audit-2026-11/newsletter.md`. Appliqué le jour même :
agents sur la mémoire locale, `style-regles.md` (règles à jour, à RELIRE par Marc) + journal annoté,
`profil-editorial.md` (tri des sujets + registre), vérificateur à questions-tests bloquantes,
`docs/calibrage-verificateur.md`, `drafts/issue-XX/versions/` (paires avant / après, à partir du
numéro 11), fact-checker avec accès lecture aux API, `CLAUDE.md` aligné sur `build_issue.py`.
**Reste à Marc** : régénérer la clé Resend ; relire `style-regles.md` ; trancher le gabarit email
(numéro 1 ou 8) ; relire la fiche Morpho ; décider si `docs/memoire/` reste dans un dépôt public.

## 🎯 Focus actuel (2026-11-10 soir)
**#10 ENVOYÉ** (voir le journal). Restent : relecture par Marc de `drafts/issue-10/fiche-morpho.ts` (8,5/10, balises levées) puis
intégration à `protocols.ts` (le lien /protocoles/morpho affiche « Fiche en construction » en attendant) ; idées de shorts à
reprendre (Marc les a trouvées « pas terribles ») ; `drafts/issue-10/` non commité (comme issue-09).

## Focus précédent (2026-09-10)

**#5 ENVOYÉ** (voir le journal ci-dessous). Rien de bloquant en cours.
**Pistes pour le #6**, remontées par la veille du 9 septembre et non traitées :
Robinhood Chain après la fin du gaz offert (**échéance du 29 septembre** — on a
promis dans le #5 d'y revenir, c'est un rendez-vous à tenir), Bittensor/TAO
(rallye + version 450), Circle qui rachète Tazapay (400 M$), la fiscalité
allemande qui aligne le bitcoin sur les actions. Et **la rubrique ✉️ À toi de
jouer est à rétablir** : elle a été retirée du #5 (numéro trop dense), c'était
exceptionnel.

## Focus précédent (2026-08-28)

**PROCHAINE TÂCHE demandée par Marc (2026-08-28)** : « demain on regardera la page
protocoles il faut qu'on mette à jour ». Aujourd'hui `site/app/protocoles/protocols.ts`
ne contient qu'UNE fiche (`re`). Deux fiches sont promises par des mails déjà partis et
affichent « Fiche en construction » : **`/protocoles/ethena`** (promis au #3) et
**`/protocoles/hyperliquid`** (promis au #4). Matière déjà rassemblée pour Hyperliquid :
Jeff Yan (ex-Hudson River Trading) + cofondateur pseudonyme iliensinc, ~11 personnes,
zéro capital-risque, refus d'une valorisation à 1 Md$ début 2024, airdrop du 29/11/2024
(310 M de jetons = 31 % de l'offre, ~94 000 portefeuilles, aucun investisseur privé),
carnet d'ordres on-chain, vault HLP, épisode JELLY de mars 2025 (pertes latentes
12-13,5 M$ → sortie à ~703 k$ de profit après vote des validateurs en ~2 min = risque de
CENTRALISATION, pas de perte). Voir [[fiches-protocoles-site]] : lire d'abord le wiki.

## Focus précédent (2026-07-21)

**Dossier DAT = PUBLIÉ** (`/dossiers/dat`, commit `7520d36`) — rubrique « Dossiers » du site
créée (route `site/app/dossiers/`, ≠ /numeros ≠ /protocoles ; source de vérité =
`site/app/dossiers/dossiers.ts`, rendu par `[slug]/page.tsx`, figures SVG dans `figures.tsx`).
Le contenu vient des drafts `drafts/articles/dat/` (8 sections décalées de +1 : 1=`02-intro`…
8=`09-verdict`), fact-checkés (`factcheck/dossier-dat-2026-07-17.md`). Pipeline + contrainte
d'originalité : voir [[dat-dossier]].

**Fait le 2026-07-21 — PDF téléchargeable « type livre » du dossier** (commit `749f6a1`, en ligne) :
- PDF généré depuis la page en ligne (source de vérité = `dossiers.ts`), donc conforme au
  texte du site. Servi depuis `site/public/dossiers/dat.pdf` (79 p, ~1,7 Mo).
  URL : `www.cryptoluciole.com/dossiers/dat.pdf`. Bouton « Télécharger le dossier (PDF) » sur
  la couverture (champ optionnel `Dossier.pdf` ; n'apparaît que si un PDF existe).
- **Pipeline = Paged.js** (`pagedjs-cli`), PAS Chrome brut. Raison : Chrome `--print-to-pdf`
  laissait des marges blanches, titres coupés, veuves. Paged.js pagine comme un livre :
  numéros de page, figures plafonnées (tiennent une page), tableaux qui coulent, zéro coupure.
  ⚠️ **Piège majeur résolu** : `pagedjs-cli` embarque puppeteer ~20.9 qui parle CDP à un
  **Chrome ~115** ; le Chrome système récent (150) est INCOMPATIBLE → paged.js se bloque sur
  « Rendering: Page 1 ». Le script installe donc un Chrome 115 dédié via `@puppeteer/browsers`.
  Le levier anti-marges = `@page` avec de vraies marges + `figure svg { max-height: 13cm }`
  dans `globals.css @media print`.
- **Régénération** : `cd site && bash scripts/dossier-pdf.sh <slug>` (auto : installe le Chrome
  assorti si absent, build prod, pagine). `pagedjs-cli` = devDep ; `.npmrc` coupe le download
  Chromium de puppeteer (jamais utilisé au build Vercel).
- Toutes les règles d'impression sont dans `globals.css` (`@page` + `@media print`) — c'est là
  que paged.js les lit (une feuille passée en `-s` à pagedjs-cli est IGNORÉE, piège vérifié).
  Réutilisable pour tout futur dossier.

⚠️ Marc édite parfois les fichiers à la main → relire le fichier avant d'éditer, lui rappeler de
recharger son éditeur après mes écritures.

## Fiches protocoles du site — état au 2026-08-31

3 fiches EN LIGNE et déployées : **`re`** (#2), **`ethena`** (#3, note vérificateur 8/10) et
**`hyperliquid`** (#4, 8,5/10) — les deux dernières écrites et relues le 2026-08-31, ce qui solde la dette des liens « → Voir la fiche complète »
partis dans les mails #3 et #4. Rédigées depuis `_wiki/protocoles/Ethena.md` et
`HyperLiquid.md`, complétées d'un fact-check web pour l'actualité d'août 2026 absente du wiki.
Il n'y a toujours PAS d'analyse Ethena ni Hyperliquid dans `../analyste-defi/analyses/` : le
wiki Obsidian a suffi. **Prochaine fiche manquante = Lido** (Sous la loupe du #1) — mais son
lien n'a jamais été posé dans `issues.ts`, donc aucune urgence, et il n'existe pas de fiche
wiki Lido dédiée (à créer avant d'écrire).

## Audience Resend

**22 contacts actifs, 0 désinscrit au 2026-11-04 (envoi #9)** : +2 les 30 et 31/10, +1 le 03/11 (premiers depuis le 30/08 ; coïncide avec la publication du dossier Metric + les encarts d'inscription sur /dossiers, lien non prouvé). Lister les abonnés par date : script ad hoc sur `GET /audiences/<id>/contacts` (pagination `after`).

Historique : **19 contacts actifs, 0 désinscrit** au 2026-09-10 (inchangé depuis le 31/08 : aucun nouvel inscrit en dix jours — la croissance est à l'arrêt) (18 lors de l'envoi du #4 le 28/08 ;
+1 le 30/08). Croissance lente mais régulière, et le taux de désinscription est à zéro
depuis le lancement. Compter l'audience : `cd site && node scripts/send-newsletter.mjs
app/emails/issues/issue-0X.ts --dry-run`.

## Journal des numéros (le plus récent en haut)

- **#10 — PUBLIÉ le 2026-11-10 ~22h15** (« Les wallets à connexion Google ou Apple : où sont vraiment tes clés ? », objet « CryptoLuciole #10 — Où sont vraiment tes clés ? »). ON ÉCLAIRE embedded wallets (Keplr/Web3Auth, 5,6 M$ récupérés) · 3 actus : Aave Labs rachète Avon, perps sur actions validés par la CFTC mais contestés (juge : CMAA « bonnes chances »), BTC natif sur Aave V4 via Babylon · SOUS LA LOUPE Morpho Midnight (🟡, 3 captures app Morpho, avis tiers) · REPÈRES (ETF −1,3 Md$, liquidations, CPI du 10/11) · ÇA BRILLE Strategy rachète 397 M$ de STRC vs 147 M$ de BTC (8-K) · DÉFINITIONS action privilégiée perpétuelle, multisig · sondage taux fixe/variable. Envoyé à **24 abonnés** (24/24, 0 échec ; +2 depuis le #9). Commits `a57fdd9` (captures) + `60d26bc`. 6 termes glossaire. Fact-check `factcheck/2026-11-10-numero-10.md` (NO-GO → corrigé). Leçons : avis = une thèse, pas de gabarit ; anglicismes d'usage ; renvoyer le lien du fichier après chaque correction ; un script de remplacement a vidé fin.md une fois → toujours sauvegarder avant.
- **#9 — PUBLIÉ le 2026-11-04 ~14h** (« Deposit tokens : quand les banques émettent leurs propres jetons », objet « CryptoLuciole #9 — Les deposit tokens »). ON ÉCLAIRE deposit token (SoFi SOFIE/SoFiUSD, tableau JPMD/HSBC/Citi, Europe) · 2 actus : DTCC Tokenization Service (34 titres éligibles), ETF BlackRock PBIT · SOUS LA LOUPE PendleLoop (🔴, 4 captures, calendrier des récompenses, oracles, nuance perps) · REPÈRES (Binance 6,3 Md$, midterms : démocrates Chambre + Sénat) · ÇA BRILLE stablecoins −20 Md$ depuis mai (Ethereum −19, Tron +3,7) · DÉFINITIONS health factor, jeton permissionné · pas de sondage. Envoyé à **22 abonnés** (22/22, 0 échec). Commits `a703e90` → `5704bf9`. Fiche site **/protocoles/pendle** complète (vérificateur 7 → 7,5, 3 boucles ; fact-check, plus aucun [À VÉRIFIER]). 8 termes glossaire. Fact-check `factcheck/2026-11-04-numero-09.md` (NO-GO → corrigé). **Nouveau : `drafts/build_issue.py N`** génère issues.ts + email issue-0N.ts depuis `drafts/issue-0N/*.md` + `meta.json` (titre, objet, menu, intro…) — relançable ; ajout `risquesCorps` et sondage optionnel. Piège : ne jamais insérer par `s.index("[texte]")`/`"[avis]"` — l'en-tête des brouillons contient aussi ces marqueurs (2 incidents le 4/11). Erratum Papertrade abandonné par Marc.
- **#8 — PUBLIÉ le 2026-10-28 ~19h45** (« La preuve de travail utile », objet « CryptoLuciole #8 — La Proof of Useful Work »). ON ÉCLAIRE PoW vs PoUW (Pearl, Flop) · 3 actus : Papertrade réécrit ses règles, Glamsterdam en pause (ChainSecurity), OKXICE 33 refus/62 vs EQX · SOUS LA LOUPE Derive V3 (🟡, « acheter et vendre des options on-chain ») · REPÈRES + Fed du 28/10 (maintien 3,75-4 %, vote 10-2, deux voix pour une hausse) · ÇA BRILLE piratages 2026 (~2,4 Md$) · DÉFINITIONS builder code, PoUW. Envoyé à **19 abonnés** (19/19, 0 échec). Commit `555cb66` (site déployé et vérifié avant l'envoi : /protocoles/derive, /numeros/8, glossaire 200). Fiche site Derive COMPLÈTE (vérificateur 8,5/10, sans score /100 : badge seul « Risque MOYEN », `score.valeur` rendu optionnel). 7 termes glossaire ajoutés (hard-fork, testnet, gas, scalping, proof-of-useful-work, option, builder-code). Fact-check : `factcheck/2026-10-28-numero-08.md` (NO-GO initial → corrigé : OKXICE 22→33, calcul DRV refait sur TOUS les revenus Derive ≈ 417 k$/30 j → rachats ≈ émissions, V3 le 7/10). **Leçons** : (1) ne jamais bâtir une section sur une seule source tierce (OAK) — Marc a rejeté la v2 Derive ; (2) longueur souple, cohérence d'abord ; (3) espaces insécables avant « : ; ? ! » (deux-points en début de ligne sur mobile). **À faire** : figer la mise en forme du #1 comme gabarit de référence (Marc : « on a perdu en beauté »), avec nbsp intégrés ; erratum Papertrade (audit Guardian public) prévu pour le #8 NON inclus → à glisser au #9 ; MAJ fiche Papertrade (14 points, `drafts/issue-08/actu-papertrade.md`) ; supprimer la page aperçu vidéo quand Marc le dira ; `veille/2026-10-27-oak.md` non commité (contenu OAK, dépôt public).
- **#7 — PUBLIÉ le 2026-10-21** (« Les smart accounts »). ON ÉCLAIRE smart accounts (4337/7702, quantique) · 3 actus : budget 2027 (vote solennel reporté, report des moins-values rejeté, crypto→stablecoins voté), MSCI vs Strategy (mNAV ~0,9), Bittensor Null Consensus · SOUS LA LOUPE Papertrade (🔴, fiche site « en construction ») · ÇA BRILLE OI Hyperliquid ~15 Md$. Envoyé à **19 abonnés** (19/19, 0 échec) après fact-check (`factcheck/2026-10-21-issue-07.md`) et déploiement vérifié (tous les liens 200). Commit `e6425eb`. Toujours 19 contacts : croissance à l'arrêt. **Décision 19/10 : le niveau du lecteur monte** (CLAUDE.md + agents). Reste à faire : fiche site Papertrade complète (`/analyse` dans ../analyste-defi puis Mode B) ; resync `docs/memoire/` (ré-anonymisation) ; leçon process : un numéro préparé sur 2 jours = re-relever cours/actu le jour J (le sens des REPÈRES s'est inversé). Pièges : mise en veille du Mac a coupé le fact-checker 2× → `caffeinate -di`. **Erratum à glisser dans le #8** : l'email #7 disait « Audit annoncé, sans rapport public » pour Papertrade — faux, rapport Guardian public depuis le 15/10 (final 17/10) ; archive site + mail de bienvenue corrigés le 21/10. Analyse complète : `../analyste-defi/analyses/PAPER-papertrade-2026-10-21.md` (32/100) ; fiche site complète EN LIGNE le 21/10 ~20h20 UTC (commit `35b6793`, vérificateur 8,5/10). **À réviser** : mise à jour des contrats Papertrade exécutable dès le 21/10 21h35 UTC (Exchange, SessionKeyManager, PaperTokenomics + nouveau keeper) → relire l'état on-chain (timelock `0xB915…EA0F`, `isOperationPending`) et passer l'encadré au passé ; rafraîchir LP/taux PAPER. Limite du rendu fiches : pas de liens dans les paragraphes.
- **#6 — PUBLIÉ le 2026-10-13** (« Les marchés de prédiction »). Envoyé à **19 abonnés** via l'API Resend (19 envoyés, 0 échec), cours rafraîchis le 13/10 à midi. Toujours **19 contacts actifs, 0 désinscrit** : aucun nouvel inscrit depuis le 30/08 (6 semaines) → la croissance est à l'arrêt, chantier acquisition à ouvrir. Prochain : #7 (Pendle en SOUS LA LOUPE, ESMA/USDT, Open USD).
- **#5 — PUBLIÉ le 2026-09-10** (« Emprunter contre ses cryptos »). Envoyé à **19 abonnés**
  via Resend (`--send`, 19/19, 0 échec). Fichiers : `site/app/emails/issues/issue-05.ts`
  (66,8 Ko) + `ALL_ISSUES` + archive site `issues.ts` (`id:"5"`). Contenu : ON ÉCLAIRE **le
  CDP** (emprunter contre ses cryptos : LTV, liquidation, mint, + 3 usages dont le carry
  trade) · **3 actus** (Strategy vend bas et rachète haut · le pétrole et la Fed du 16 ·
  Hyperliquid vers les États-Unis) · SOUS LA LOUPE **Liquity V2** (badge 🟡 Moyen) ·
  REPÈRES (semaine rouge) · ÇA BRILLE (Robinhood Chain, 480 M$ de frais).
  **7 fiches glossaire ajoutées** (32 → 39 termes) : `cdp`, `collateral`, `ltv`, `long`,
  `taux-directeur`, `pool-de-stabilite`, `cpi`. Fact-check : `factcheck/issue-05-2026-09-10.md`
  (🔴 NO-GO → 1 bloquant corrigé → envoyé).
  - ⚠️ **Pas de rubrique « À toi de jouer »** dans ce numéro (décision de Marc, numéro déjà
    dense). **À rétablir au #6.**
  - 🆕 **`scripts/send-newsletter.mjs` : l'objet est horodaté automatiquement en `--test`**
    (`[test MM-JJ HH:MM]`), pour empêcher Gmail de replier les tests successifs en
    conversation — la fausse troncature constatée le 04/07 ne peut plus se produire par oubli.
  - 🔴 **Erreur évitée de justesse (fact-check)** : le numéro annonçait « 6 à 8 % chez Sky ou
    Spark », chiffre **périmé**. Les coffres CDP de Sky facturent **9 à 15 %** selon le
    collatéral (relevé API + votes de gouvernance). Corrigé avant l'envoi. **La presse et
    plusieurs pages web répètent encore le 5,5-8 %** : sur les taux d'emprunt, ne jamais se
    fier à la presse, lire l'API ou la doc du protocole.
  - 🔴 **Deux fiches de glossaire étaient FAUSSES en contexte CDP** et ont été réécrites :
    `liquidation` portait la définition des perps (« l'essentiel de la mise est perdu »), ce
    qui est faux pour un CDP où le surplus revient à l'emprunteur ; `mint` était écrite pour
    un dépôt de dollars. Réflexe à garder : **une fiche de glossaire écrite pour un numéro
    peut devenir fausse quand un autre numéro réemploie le terme dans un autre contexte.**
  - 🆕 **Sources primaires utilisées** (à réutiliser) : `coins.llama.fi/prices/historical/<ts>/<coins>`
    pour l'historique des cours (a révélé que le pic BTC à 81 000 $ était du **4** et non du
    3 septembre) ; `api.llama.fi/overview/fees/<chain>` + `/v2/chains` pour frais, revenus et
    TVL d'une chaîne ; `yields.llama.fi/lendBorrow` croisé avec `/pools` pour les vrais taux
    d'emprunt des coffres CDP (filtrer sur `mintedCoin`). ⚠️ **`chartLendBorrow` (historique
    des taux d'emprunt) est devenu PAYANT** — erreur HTTP 402.
  - ⚠️ **Le dossier de faits lui-même contenait trois erreurs**, toutes attrapées en cours de
    route : « dix semaines » entre la vente et le rachat de Strategy (c'est **sept**, les dix
    semaines étaient la pause d'achat) ; le pic BTC daté du 3 septembre (c'est le **4**) ; et
    une comparaison de revenus entre chaînes (« Robinhood Chain gagne plus qu'Ethereum et
    Solana ») **fausse d'un facteur 30 à 85** — Solana gagnait en réalité le double. Leçon :
    **re-vérifier les chiffres du dossier de faits au moment de les écrire**, ne pas les
    traiter comme acquis parce qu'ils y sont notés.

- **#4 — PUBLIÉ le 2026-08-28** (« Les perps, décryptés »). Envoyé à **18 abonnés** via
  Resend (`--send`, 18/18, 0 échec). Fichiers : `site/app/emails/issues/issue-04.ts`
  (48,7 Ko) + `ALL_ISSUES` + archive site `issues.ts` (`id:"4"`). Contenu : ON ÉCLAIRE
  **le contrat perpétuel** (levier, liquidation, funding rate) · actus **Revolut/EURR
  pendant que Tether quitte l'Europe** (échéance USDT du 31/08) + **la SEC écrit ses
  règles sans attendre le Clarity Act** (vote de procédure le 15/09, blocage sur la clause
  d'éthique visant les revenus crypto de Trump) · SOUS LA LOUPE **la stratégie
  delta-neutre sur Hyperliquid** (badge 🟡 Moyen) · REPÈRES · ÇA BRILLE (flux ETF ETH,
  BlackRock capte ~80 %). **12 fiches glossaire ajoutées** (glossaire : 20 → 32 termes).
  Fact-check : `factcheck/issue-04-2026-08-27.md` (🟡 GO, 2 réserves corrigées).
  - 🆕 **Nouveauté d'archi** : `issues.ts` accepte une **2e colonne de variation**
    optionnelle (`varRef`/`sensRef` + `coursRefLabel`), rendue seulement si définie.
    Utilisée ici pour « Depuis le #3 (4 juillet) », l'écart entre numéros étant de 8
    semaines. À réutiliser dès qu'un écart dépasse ~2 semaines ; inutile en rythme
    hebdomadaire (ferait doublon avec la colonne 7 jours).
  - 🆕 **Sources de données primaires utilisées** (à réutiliser, elles ont corrigé la
    presse) : flux ETF ETH = `POST https://api.sosovalue.xyz/openapi/v2/etf/historicalInflowChart`
    body `{"type":"us-eth-spot"}` (un article annonçait 534 M$ pour août, la donnée brute
    dit 1,66 Md$) ; funding Hyperliquid = `POST https://api.hyperliquid.xyz/info` type
    `fundingHistory` (500 points max → paginer) et `metaAndAssetCtxs` (volume, OI, levier).
    ⚠️ Farside Investors et blackrock.com renvoient 403 aux requêtes automatisées.
  - ✅ **Soldé le 2026-08-31** : les fiches `/protocoles/hyperliquid` et `/protocoles/ethena`
    sont écrites et en ligne. L'abonné `philippedargent64` est bien en `.com` dans Resend —
    la faute de frappe `.col` notée ici était une erreur de mémoire, plus rien à supprimer.

- **#3 — PUBLIÉ le 2026-07-04** (« La guerre des stablecoins »). Envoyé à 13 abonnés via
  Resend (`--send`, 13/13, 0 échec). Fichier : `site/app/emails/issues/issue-03.ts` + ajouté
  à `ALL_ISSUES` dans `latest.ts`. Contenu : ON ÉCLAIRE (stablecoins : d'où vient le rendement
  des réserves) · actus **Open USD** (alliance TradFi 140+, partage du rendement) + **Strategy**
  (Digital Credit Capital Framework, s'autorise à vendre du BTC ; rappel du #1) · SOUS LA LOUPE
  **Ethena/USDe** (dollar synthétique delta-neutre, badge 🟡 Moyen) · REPÈRES · ÇA BRILLE
  (graphique flux ETF Bitcoin, capitulation). 6 fiches glossaire ajoutées (`depeg`, `reserves`,
  `bons-du-tresor`, `mint`, `mnav`, `dollar-synthetique`). Fact-check : `factcheck/issue-03-2026-07-04.md`.
  - ✅ **Glossaire #3 déployé et en ligne** (2026-07-05) : les 6 fiches (`depeg`, `reserves`,
    `bons-du-tresor`, `mint`, `mnav`, `dollar-synthetique`) répondent. ⚠️ Le 1er déploiement Vercel
    du 2026-07-04 n'avait PAS abouti (termes restés « en construction ») ; un **re-push a réglé** →
    réflexe : après un push, **vérifier que Vercel a bien déployé** (curl un lien live).
  - ✅ **Archive site `issues.ts` (`id:"3"`) AJOUTÉE le 2026-07-05** (push `main`, Vercel auto-deploy).
    Portage verbatim de `issue-03.ts` ; schéma `NotionEl` étendu (`liste`, `avis`) + actus `corps?`
    pour rendre puces/encadré « Notre avis » de la rubrique On éclaire. Micro-pertes de portage
    assumées (fiche Ethena en prose ; graphe ETF → liste de flux).
  - ⚠️ **Restes à faire (non bloquants)** : **fiche `/protocoles/ethena` PAS écrite** (voir RAPPEL
    Focus actuel) ; supprimer l'abonné invalide `<adresse-anonymisée>` dans Resend.
  - **Article DAT en parallèle** (idée de Marc) : préparer un article de fond sur les DAT /
    modèle Strategy (mNAV, STRC) à publier APRÈS, dans `drafts/articles/`.
  - Les vieux `drafts/issue-03/on-eclaire.md` + `factcheck/issue-03-2026-06-26.md` étaient des
    ARTEFACTS DE TEST — la vraie version est `on-eclaire-v2.md` (retenue).

- **#2 — PUBLIÉ** (« Le restaking, décrypté », daté 24 juin 2026). `issue-02.ts` + dans
  `ALL_ISSUES` + `site/app/numeros/issues.ts` (`id: "2"`). Contenu : restaking
  (EigenLayer, LST/LRT, slashing) · actus Backpack/actions tokenisées + Binance×MiCA
  (départ France) · SOUS LA LOUPE Re Protocol (reUSD 🟡 / reUSDe 🔴, 2 badges). Le type
  `protocole` a été étendu (`badges[]`) à cette occasion.

- **#1 — PUBLIÉ** (« Mercredi 3 juin 2026 »). `issue-01.ts`. Référence HTML aboutie :
  `cryptoluciole-01-v3.html`.

## Rappels techniques

- ⚠️ Ne pas compter via `grep id: issues.ts` (le type TS + `getIssue` contiennent aussi
  `id:`). Compter les vrais numéros via `ls site/app/emails/issues/`.
- **Accueil (2026-10-29)** : sous le bandeau, blocs « Nos dernières newsletters » (5 tuiles
  illustrées) + « Nos derniers dossiers » (4, places « à venir » si moins). Bandeau compacté
  pour que les blocs soient visibles sans scroller. Illustrations = **logo du sujet principal
  du titre** (Marc a rejeté emojis puis dessins SVG). **À chaque nouveau numéro / dossier :
  télécharger le logo (icons.llama.fi/<slug>.png ou CoinGecko) dans `site/public/vignettes/`
  + `vignette: "/vignettes/<fichier>"` dans issues.ts / dossiers.ts.** Logo Pearl (#8) pris
  sur CoinGecko `pearl-2`, identité non confirmée à 100 %.
- **Pied de page commun (2026-11-02)** : `site/app/Footer.tsx`, branché dans `layout.tsx` donc sur toutes les pages (classe `no-print`) — logo + liens réseaux (X, TikTok, Instagram, YouTube, tous `@cryptoluciole`) + disclaimer. Ajouter un réseau = une entrée dans le tableau `reseaux`.
- Tuyauterie d'envoi : voir [[envoi-resend]]. Workflow agents IA : voir le mémo en tête
  de `CLAUDE.md` du projet.

Voir [[journal-de-bord]], [[envoi-resend]], [[style-editorial]].

## #6 — état au 2026-10-13 (nuit) : PRÊT, en attente de la validation de Marc
- « Les marchés de prédiction » : email `site/app/emails/issues/issue-06.ts` (≈ 48 Ko), archive `/numeros/6` en ligne, 3 termes glossaire, fact-check `factcheck/issue-06.md` (corrections appliquées). 2e mail de test envoyé le 13/10 (nuit).
- Généré depuis `drafts/issue-06/*.md` par les scripts du scratchpad (gen6.py/gen6b.py/gensite.py) — si on retouche un brouillon, régénérer issue-06.ts + issues.ts (ou éditer les deux à la main).
- **Au matin de l'envoi (14/10, AVANT le CPI de 14h30 Paris)** : rafraîchir les cours (DeFiLlama) dans `reperes.md` (ARRONDIS : prix au $, variations au %) + le paragraphe « Ce qui a fait bouger les prix » (« le bitcoin gagne X % », HYPE), passer la date en « MERCREDI 14 OCTOBRE 2026 » et « Prix au 14 octobre », régénérer, puis `--dry-run` → `--send` sur feu vert explicite de Marc. Si envoi APRÈS le CPI : réécrire la fin de l'avis des REPÈRES avec le chiffre publié.
- Pas de SOUS LA LOUPE au #6 ; **Pendle reporté au #7** (+ ESMA/USDT, Open USD, Kalshi possible).
