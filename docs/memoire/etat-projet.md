---
name: etat-projet
description: "Où en est CryptoLuciole — #1 à #5 publiés (tous dans l'archive site) ; dossier de fond DAT PUBLIÉ (/dossiers/dat) avec PDF téléchargeable"
metadata:
  node_type: memory
  type: project
  originSessionId: 90507c6d-d393-4d8b-99c7-5a756f3f0a77
---

**⚠️ Avant d'affirmer où on en est : vérifier le CODE, pas seulement cette note.**
Source de vérité = `ls site/app/emails/issues/` (numéros publiés) + `ls drafts/` +
`ls factcheck/` + `git log --oneline`. Cette mémoire reflète la dernière session ; la
mettre à jour À CHAQUE fin de session (voir [[journal-de-bord]]).

## 🎯 Focus actuel (2026-09-10)

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

**19 contacts actifs, 0 désinscrit** au 2026-09-10 (inchangé depuis le 31/08 : aucun nouvel inscrit en dix jours — la croissance est à l'arrêt) (18 lors de l'envoi du #4 le 28/08 ;
+1 le 30/08). Croissance lente mais régulière, et le taux de désinscription est à zéro
depuis le lancement. Compter l'audience : `cd site && node scripts/send-newsletter.mjs
app/emails/issues/issue-0X.ts --dry-run`.

## Journal des numéros (le plus récent en haut)

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
    sont écrites et en ligne. L'abonné `<abonné>` est bien en `.com` dans Resend —
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
    Focus actuel) ; supprimer l'abonné invalide `<abonné>@gmail.col` dans Resend.
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
- Tuyauterie d'envoi : voir [[envoi-resend]]. Workflow agents IA : voir le mémo en tête
  de `CLAUDE.md` du projet.

Voir [[journal-de-bord]], [[envoi-resend]], [[style-editorial]].
