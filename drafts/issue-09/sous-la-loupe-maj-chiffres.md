# Mises à jour à appliquer à sous-la-loupe.md APRÈS la relecture de Marc

Relevé sur app.pendle.finance le 04/11 vers 11 h (TSLAc, 2x, info-bulle « Holding cost »).

## 1. Le taux d'emprunt USDC (remplit les [À RELEVER])
- Taux d'emprunt de base (Aave V4, USDC) : **5,02 %**.
- Récompenses aux emprunteurs : **7,76 %** = +3 % (23/10 → 6/11, le bonus Pendle) + 1,76 % (29/10 → 5/11) + 1 % (3/11 → 12/11) + 2 % (3/11 → 12/11). Versées via Merkl.
- Récompenses sur la garantie : **2,97 %** (29/10 → 5/11), ×2 à 2x = 5,94 %.
- Total affiché : 5,94 + (7,76 − 5,02 = 2,74) = **8,68 %/an** (contre 8,88 % le 3/11).

## 2. Proposition de remplacement de la liste « Tu es payé pour tenir la position »
- **2,97 %** de récompenses sur ta garantie, comptées deux fois puisqu'à 2x ta garantie vaut deux fois ta mise (2 × 2,97 = **5,94 %**) ;
- côté dette, l'USDC coûte **5,02 %** par an, mais quatre campagnes de récompenses en reversent **7,76 %** : il te reste **+2,74 %** ;
- au total, 5,94 + 2,74 = **8,68 % par an** sur ta mise.

## 3. Proposition : dire quand ça s'arrête (remplace « Ces récompenses sont temporaires… [À VÉRIFIER] »)
Ces récompenses ont toutes une date de fin, et elles tombent dans les jours qui viennent. À taux d'emprunt inchangé, ta position à 2x :
- **jusqu'au 5 novembre** : te rapporte 8,68 % par an ;
- **après le 5 novembre** (fin des récompenses sur la garantie) : environ +1 % ;
- **après le 6 novembre** (fin du bonus Pendle) : te coûte environ 2 % par an ;
- **après le 12 novembre** : te coûte le taux d'emprunt plein, environ 5 % par an.
→ Calcul : après le 5/11 : −5,02 + 3 + 1 + 2 = +0,98 ; après le 6/11 : −5,02 + 1 + 2 = −2,02 ; après le 12/11 : −5,02.
→ Si l'envoi a lieu le 5/11 ou après, réécrire au passé la 1re ligne et l'« Earn 8,88 % » de l'étape « Le rendement » (et l'avis « Les 8,88 % payés… »).

## 4. Liquidité
- « environ 1,23 M$ … le 3 novembre (848 000 $ pour Meta) » → **environ 590 000 $ d'USDC disponibles à l'emprunt, partagés par les 7 actions**, le 4 novembre (587 636 $). ⚠️ Le même montant s'affiche pour les 7 actions : c'est vraisemblablement une seule réserve USDC commune, pas 590 000 $ par action → reformuler « par action » en « pour l'ensemble des actions » [À VÉRIFIER si possible].

## 5. Le [À VÉRIFIER] de la puce oracle → RÉSOLU
Oui, le panneau oracle existe aussi en Loop to Earn : onglet **« Looping Info »** de chaque marché. Exemple apyUSD/USDC (Morpho) : « Oracle Type Risk: High » ; apxUSD y est valorisé au ratio de collatéralisation d'Apyx, **plafonné à 1 $** (une baisse du ratio te touche, une hausse ne t'aide pas) ; Morpho ne vérifie pas l'âge du prix USDC ; un multisig 4/6 peut changer la source du ratio sans délai.
→ Remplacer « [À VÉRIFIER : panneau oracle…] » par : « : Pendle le résume dans l'onglet *Looping Info* de chaque marché. »

## 6. Prix TSLAc
384,72 $ le 4/11 (−4,3 % sur la journée). L'exemple de l'étape 4 reste daté du 3/11 (capture), pas besoin de le changer.

## 7. Nuance de fond (relevée par le vérificateur sur la fiche site, vaut aussi pour la newsletter)
Phrase actuelle des risques : « la liquidation demande que ta garantie décroche par rapport à ta dette (le sUSDS par rapport au dollar, le wstETH par rapport à l'ETH), ce qui n'est pas censé arriver ».
→ Vrai pour un actif SANS échéance, pas tout à fait pour un **PT bouclé** : si les taux montent avant l'échéance, le prix du PT baisse face à ta dette, et un oracle qui suit le prix de marché peut te liquider.
Proposition d'ajout (une phrase) : « Avec un PT, c'est un peu différent : si les taux montent avant l'échéance, son prix baisse par rapport à ta dette, et à fort levier ça peut suffire à te faire liquider. »

## 8. « Pourquoi ça compte » : nuance perps (VALIDÉE PAR MARC le 04/11)
À insérer après « …depuis un wallet, sans courtier. » :
[p]
PendleLoop n'est pas le seul moyen de prendre du levier sur une action on-chain : les perps d'Hyperliquid le font déjà. La différence : ici tu détiens vraiment le jeton, et tu paies un taux d'emprunt au lieu d'un funding. Pendle affirme que c'est jusqu'à 70 % moins cher sur un an de données passées, mais c'est sa propre simulation, et le funding d'un perp change vite et peut être positif comme négatif : le chiffre est à ne pas prendre à la lettre.
→ Source : post @pendle_fi du 03/11 (https://x.com/i/web/status/2117481925648785676). Ajouter « Pendle (X, 03/11) » aux sources.
→ Vérifier la phrase précédente « Ce qu'il change, c'est l'accès : le levier sur des actions, en une transaction » : la nuancer en « le levier sur des actions que tu détiens vraiment, en une transaction ».

## 9. Nature du jeton (à confirmer par le fact-checker)
Fil X (MeshClans, 24/10) : chaque jeton Coinbase est adossé à une action détenue chez Alpaca (courtier régulé). Si confirmé par une source Coinbase → lever « [À VÉRIFIER : nature exacte du jeton] » dans la puce « Une dépendance à Coinbase ».

## 10. Liquidité partagée
La réserve d'USDC du marché Aave V4 est commune aux 7 actions et utilisée aussi par d'autres protocoles (ex. Makina) → puce liquidité : « environ 590 000 $ d'USDC disponibles à l'emprunt le 4 novembre, partagés entre les 7 actions et d'autres protocoles qui empruntent sur le même marché ».
