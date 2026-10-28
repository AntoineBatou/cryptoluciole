# Brief réécriture SOUS LA LOUPE Derive — v3 (28/10, après lecture de Marc)

## Verdict de Marc sur la v2
« Pas bon du tout, on dirait qu'on a pris des morceaux d'un article d'OAK sans cohérence. »
→ Faire **court**, **logique**, **pas très technique**, centré sur l'essentiel. On ne s'adresse
pas au public d'OAK (pros) mais à Grégoire (a les bases, veut comprendre et savoir faire).
Ne PAS aller tout de suite sur les risques techniques (multisig, preuves zk, escape hatch…).

## Titre (validé par Marc)
Derive : acheter et vendre des options on-chain

## Plan imposé par Marc (dans cet ordre)
1. **En bref / à quoi ça sert** — garder le paragraphe actuel (Marc : « c'est bien dit »).
   Le bloc « Concrètement » (derive.xyz, USDC…) a été supprimé par Marc : ne pas le remettre.
2. **Comment marchent les options** — garder l'encadré `option`, puis :
   - **Acheter un put = se protéger.** Exemple : 1 ETH à 3 000 $, put strike 2 700 $ à un mois,
     prime 60 $. NOTE DE MARC à intégrer, bien formulée : traduire juste après en clair :
     « c'est-à-dire que tu achètes le droit de vendre ton ETH à 2 700 $ à l'échéance, quoi qu'il
     arrive. Si l'ETH tombe à 2 000 $, tu seras content de pouvoir le vendre à 2 700 $. »
     (Sur Derive, en pratique on ne livre pas l'ETH : on te verse la différence en USDC —
     options européennes réglées en cash.) Puis les 2 scénarios : chute à 2 000 $ (put vaut
     700 $, perte limitée à 360 $ au lieu de 1 000 $) ; hausse à 3 500 $ (60 $ perdus, hausse gardée).
   - **Acheter un call = parier sur la hausse.** NOTE DE MARC : « même exemple et même explication
     que pour le put ». Donc : ETH à 3 000 $, call strike 3 300 $ à un mois, prime 100 $ ;
     traduction « tu achètes le droit d'acheter de l'ETH à 3 300 $ à l'échéance. Si l'ETH monte
     à 3 800 $, tu seras content de pouvoir l'acheter à 3 300 $ » ; puis 2 scénarios :
     3 800 $ → call vaut 500 $, gain net 400 $ ; sous 3 300 $ → tu perds 100 $, rien de plus.
     Structure STRICTEMENT parallèle au put (même gabarit).
   - **Vendre une option = encaisser la prime** (rôle de l'assureur : petites primes, grosses
     pertes possibles). Tenu par des market makers et par les vaults. Court.
   - Une phrase honnête : **c'est un outil technique, il faut comprendre les options avant de
     s'y mettre** (Marc l'a demandé).
3. **Ce qui change avec la V3** (en ligne le 6 octobre 2026) — en langage simple, 3-5 puces max :
   - Derive a fermé sa propre blockchain : **tes fonds sont désormais gardés sur Ethereum**
     (le trading reste rapide car calculé hors chaîne, puis prouvé sur Ethereum) ;
   - **ETH et BTC dans un même compte de marge** (les positions se compensent) ;
   - **emprunt** élargi au-delà de l'USDC (ETH, WBTC, HYPE) ;
   - **vaults créés sans coder** par n'importe qui (500 $ de création, 10 000 $ de dépôt
     initial, le créateur doit garder au moins 10 000 $ ou 1 % du vault dedans) ;
   - marchés rangés en **compartiments isolés** (BTC/ETH, HYPE, autres cryptos, or tokenisé) :
     un problème dans l'un ne contamine pas les autres.
   Sources : CoinInsider (9/10), TokenPost, CryptoBriefing, Phemex ; univers = OAK (piste,
   recoupé partiellement : « isolated risk groups » chez CoinInsider).
4. **Construire dessus : les builder codes** — une app tierce (mobile, etc.) peut proposer les
   options de Derive à SES utilisateurs, avec sa propre interface, et **ajouter ses propres
   frais** par-dessus ceux de Derive, reversés toutes les 4 semaines ; sans exclusivité,
   autorisation ni volume minimum (blog Derive, 10/02/2026). Exemples : Dream (app mobile qui
   simplifie les options), LEVR (options à 0 jour). C'est la recette d'Hyperliquid
   (builder codes) appliquée aux options : Derive veut être le moteur, d'autres font la vitrine.
   L'enjeu : les options sont trop compliquées pour le grand public, d'autres apps peuvent les
   rendre simples. Adoption encore embryonnaire.
5. **Le token DRV et les rachats** — simple et chiffré :
   - une part des frais sert à **racheter du DRV sur le marché** : 35 % → **50 %** (DIP 324,
     proposée le 24/09/2026 sur le forum ; adoptée et effective le 14/10 selon OAK
     [À VÉRIFIER, résultat du vote non affiché sur le forum]) ; l'autre moitié va au fonds
     d'assurance ;
   - en face, **150 000 DRV émis chaque semaine** (100 000 pour les stakers, 50 000 en
     incitations au trading) — chiffres du texte de la DIP 324 (forum) ;
   - et en septembre 2025, la DAO a voté la création de **500 M de DRV supplémentaires**
     (DIP 303 « Strategic Mint », forum ; ≈ +50 % d'offre selon OAK [À VÉRIFIER]).
   - Calcul déjà fait (session principale, DeFiLlama 28/10) : cours 0,365 $ ; émissions
     ≈ 235 k$/mois ; revenus ≈ 250 k$/30 j ; rachats à 50 % ≈ 125 k$/mois → ≈ 110 k$ de DRV
     nouveaux nets par mois. À garder SIMPLE (une phrase ou une mini-comparaison, pas 3 puces).
6. **Les risques** — badge 🟡 Moyen, COURT et non technique (3 puces max) : tu dépends de
   l'équipe (qui peut encore modifier les contrats, la décentralisation n'est pas finie) ;
   architecture neuve (3 semaines) ; vendre des options ou déposer dans un vault qui en vend =
   risque plus élevé (grosses pertes possibles) ; hack jamais exclu. Pas de jargon multisig
   6/8, preuve zk, escape hatch (→ fiche site).
7. **Pourquoi ça compte + Notre avis** — garder les chiffres DeFiLlama (≈80 % des volumes
   d'options DeFi sur 30 j ; TVL 111 → 177 M$ depuis la V3 ; ≈ 2 Md$ d'options et 0,25 M$ de
   revenus sur 30 j). Avis tranché et court : le pari de Derive = la distribution (builder
   codes) ; tant que les émissions dépassent les rachats, le DRV est dilué ; métrique à suivre.
   Pour l'usage : acheter des options en petites mises pour se protéger ou parier à perte
   plafonnée ; prudence sur les vaults (pas d'historique).
8. Lien final : [→ Voir la fiche complète](https://www.cryptoluciole.com/protocoles/derive)

## Contraintes
- **Longueur cible : ~550-650 mots** (titres et encadrés compris). Court > exhaustif.
- **Originalité absolue** : ne pas reprendre l'ordre, les formules ni les angles d'OAK
  (« le pari de la distribution », « liquidité = moat »…). Écrire avec nos mots.
- Style : `style-editorial.md` (lire les leçons du 28/10 en fin de fichier : usage principal
  d'abord, titre descriptif). Tutoiement, exemples chiffrés, « Dit simplement » si utile,
  gras sur les idées clés, puces dès qu'il y a une énumération.
- Termes anglais en italique à la 1re occurrence ; jargon défini au fil de l'eau.
- Pas d'anecdote perso, pas d'alerte arnaque, pas de conseil en investissement.
- Écrire dans `drafts/issue-08/sous-la-loupe.md` en REMPLAÇANT le texte de la section (lignes
  du titre jusqu'au lien de fiche) ; garder l'en-tête de notation et mettre à jour les notes
  du Rédacteur en bas (notes fact-checker, termes glossaire : option, put, call, builder-code ?).
