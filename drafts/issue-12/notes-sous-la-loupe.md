# Notes de recherche — SOUS LA LOUPE n°12 : Strata (relevé du 2026-11-23)

## Brief validé par Marc (23/11, « Ok super »)
1. Objectif : comprendre comment Strata découpe un rendement en tranche senior / junior, et savoir lire les chiffres qui disent si la senior est vraiment couverte.
2. Thèse : la senior n'est protégée que dans la limite du coussin junior. Neutrl l'a montré : seniors à -37 % environ contre -46 % en direct. Dépôts Strata : 276 M$ (21/03/2026, pic) → 13,5 M$ (23/11/2026), DeFiLlama.
3. Hors champ : les formules ; le détail de l'affaire Neutrl (réservé au dossier Risque).
Plan dans l'ORDRE LOGIQUE (consigne de Marc : pas l'ordre où il dicte ; la concurrence en dernier) :
en bref → comment ça marche → les 7 marchés en une ligne → en pratique : l'épreuve Neutrl → ce qui fait vraiment la couverture (3 chiffres à regarder) → rendement + risques (badge) → la concurrence (Mezzanine) en dernier.
Demandes de Marc : « parler du nouveau concurrent », « détailler en deux mots chaque marché », « dire en pratique comment ça s'est passé pour Neutrl (est-ce que ça marche ?) », « donner les éléments importants pour savoir si ça couvre vraiment », « fais un truc bien ».
Déjà publié : le tranching est DÉFINI au n°2 (encadré définition, exemple Re : reUSD senior / reUSDe junior, glossaire /glossaire/tranching) → renvoyer à « notre numéro 2 » (/numeros/2), ne pas refaire la définition de base. Strategy/STRC : n°10 et dossier DAT (/numeros/10).

## Faits (sources primaires dans drafts/issue-12/sources/strata/, doc https://docs.strata.markets)
- Strata = protocole de « tranching » sur Ethereum. Développeur : Frontera Labs, 3 M$ levés (blog Strata, 17/12/2025). Lancement 2025 (Season 0 juillet 2025 ; « Introducing Strata » 10/07/2025).
- Deux jetons par marché : senior (sr…) = préservation du capital, rendement plancher indexé sur un « benchmark », + part de la hausse ; junior (jr…) = rendement amplifié, absorbe en premier pertes et sous-performance.
- Mécanisme « Dynamic Yield Split » : le senior cède au junior une prime de risque = x + y × (part senior)^k. Plus la part senior grossit, plus la prime monte (le junior est mieux payé pour plus de risque). Paramètres : USDe x10 % y12,5 % ; NUSD x15 % y15 % ; mHYPER et mM1 x12,5 % y15 % ; USDat x100 % y0 ; PRIME x5 % y7,5 % ; k = 0,3.
- Couverture senior = TVL totale / TVL senior (ex. 125 % = le junior pèse 20 % du total ; une perte jusqu'à 20 % du total est absorbée par le junior avant de toucher la senior).
- Garde-fous : marché USDe : rachats junior et créations senior suspendus si couverture < 105 %. NUSD et autres : délai de sortie junior de 0 à 5 semaines selon la couverture (NUSD : aucun > 120 %, 7 j entre 110 et 120 %, 35 j < 110 %). Frais de rachat dégressifs. Frais de performance 0 à 7,5 % selon le marché.
- Doc risques : « si le junior est entièrement épuisé, la senior peut aussi subir des pertes en capital ». Doc affirme aussi ne s'adosser qu'à des protocoles « vetted » ayant prouvé leur solvabilité (à mettre en regard de Neutrl).
- Sécurité : rôles admin sous timelock de 48 h (proposeur : multisig 3/4, signataires en cold wallets), pause possible sans délai, Guardian peut annuler. Audits : voir sources/strata/technical-documentation_audits.md.
- Les 7 marchés (docs) :
  - Ethena USDe : dollar synthétique d'Ethena (base et funding) ; benchmark = taux de prêt USDC/USDT d'Aave v3.
  - Neutrl NUSD : dollar synthétique de Neutrl (arbitrages OTC, funding, DeFi) ; benchmark = APY de sUSDe.
  - Midas mHYPER : stratégie multi-chaînes sur stablecoins gérée par Hyperithm ; benchmark = Aave + 3 %.
  - Midas mM1-USD : fonds neutre au marché de M1 Capital ; benchmark 0 %.
  - Saturn USDat : rendement des dividendes de STRC (Strategy) ; senior = taux fixe égal à 65 % du dividende STRC, junior absorbe la volatilité du prix de STRC.
  - Hastra PRIME : prêts immobiliers américains de type HELOC (ligne de crédit adossée à la valeur du logement) ; benchmark aucun.
  - Plume nOPAL : créances de cartes bancaires brésiliennes (fonds LiquidStone II de BlackOpal, paiements en plusieurs fois Visa/Mastercard) ; benchmark aucun.

## Neutrl en pratique (ce n'est PAS un hack : perte et illiquidité d'une position de la stratégie)
- 12/08/2026 : tableau de bord Neutrl (Accountable) : 54,4 M$ de réserves pour 53,7 M$ de NUSD (101,4 %). Source : X @0xPratter.
- 13/08 : pause des créations et rachats NUSD. 28/08 : ~27 M$ d'actifs liquides déclarés. 17/09 : rachats ouverts à 0,51 USDC par NUSD (fenêtre jusqu'à ~14/11).
- Strata : srNUSD réglé à 0,6323 $ par part contre 0,5426 $ pour sNUSD détenu en direct (tweet @strata_markets, https://x.com/strata_markets/status/2109702300679979395). Junior jrNUSD : absorbé en premier, ramené à zéro selon Merkle.Press (À VÉRIFIER). Taille du coussin junior au moment de la perte : INCONNUE (À VÉRIFIER, ne pas inventer).
- Lulo : dépôts « Boost » (rôle de junior) -6,4 % à cause de son exposition à Neutrl ; dépôts « Protected » intacts (https://x.com/uselulo/status/2112561532328411461).
- Lecture : la mécanique a fonctionné comme prévu, mais une perte de ~46 % dépassait le coussin.

## Dépôts (DeFiLlama api.llama.fi/protocol/strata-markets, 23/11/2026)
1er du mois, M$ : nov.25 203 · déc. 213 · janv.26 224 · févr. 131 · mars 171 (pic 276 le 21/03) · avr. 251 · mai 82 · juin 99 · juil. 66 · août 76 · sept. 71 · oct. 37 · nov. 17 · 23/11 13,5. Candidat pour un graphique (recette docs/recette-graphique.md).

## Concurrence (en dernier)
- Mezzanine (fondateur Stephen « DeFi Dojo », @phtevenstrong), en ligne début novembre 2026, 6,4 M$ (DeFiLlama, Ethereum + Solana). Premier marché : Hastra (le même placement que le marché PRIME de Strata). Senior 13,5 %, junior 33 %, junior = 20 % du coffre (« 5x exposure to loss ») selon tweet du 12/11 (https://x.com/phtevenstrong/status/2120945100566237297). Intérêt déclaré : lien de parrainage. Idée : un coffre par stratégie (Re, USDai annoncés).
- Autres : Exponent (Solana), 3Jane (crédit) proposent aussi des tranches.

## À VÉRIFIER avant envoi
Rendements actuels senior/junior sur app.strata.markets ; couverture actuelle par marché ; sort exact de jrNUSD ; coussin au moment de Neutrl ; audits (noms).

## Sources ajoutées (boucle 2)
- Yearn Curation, rapport srUSDe (version 11/10/2026) : drafts/issue-12/sources/strata/yearn-curation-strata-srusde.md — https://curation.yearn.fi/report/strata-srusde/
- Chaos Labs, USDe après le piratage de Bybit (ancrage ~0,977 $, fév. 2025) : https://governance.aave.com/t/chaos-labs-update-on-bybit-security-event-and-usde-market-reaction/21158 (à relire au fact-check)
