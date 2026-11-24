# Notes — DANS LE FAISCEAU n°12 (relevé 2026-11-23)
Choix de Marc : Chainflip (« on apprend un truc ») + Kalshi contre l'État de New York (« Kalshi c'est pas mal », suite du n°11). Chaque actu = encadré [avis] obligatoire. Modèle : drafts/issue-11/dans-le-faisceau.md.

## Actu 1 — Chainflip vidé d'environ 12 M$ (21/11/2026)
Angle (ce qu'on apprend) : un coffre « décentralisé » à signature à seuil (il faut 100 signatures sur 150 validateurs pour bouger les fonds, schéma FROST) a quand même été vidé, par une signature valide. Le seuil protège contre des validateurs qui trichent, pas contre une clé exposée.
Faits (sources à citer : The Block 22/11, FinanceFeeds, Cryptoticker, Bitquery via presse) :
- 21/11 : 122,86 BTC sortis du coffre bitcoin en une transaction ; ~30 min plus tard, côté Ethereum : 520,22 ETH, 3,25 M USDC, 758 141 USDT. Total ≈ 12 M$ (premières estimations 4,86 M$ côté Ethereum seul ; les valeurs en dollars varient selon l'heure du prix).
- Signature produite par la clé agrégée du coffre (valide) : pas un bug de contrat. Chainflip dit avoir identifié « le mécanisme d'exposition de la clé », sans le publier ; il évoque un compte de validateur enregistré le 20/11 et le serveur derrière. Une source relie un financement via Tornado Cash le 11/11 à cet enregistrement (préparation) [À VÉRIFIER].
- Bitquery : la signature malveillante portait un nonce anormal (39 chiffres), seule sur ~300 000 signatures historiques.
- Réponse : réseau en « Safe Mode » (échanges suspendus), prime de 10 % offerte à l'attaquant, délai au 23/11 ; rapport (post-mortem) promis vers le 24/11 [À METTRE À JOUR avant envoi].
- FLIP : −30 à −37 % selon les sources [À VÉRIFIER]. Deuxième incident en ~10 semaines (septembre : astuce de « memo » sur Tron, ~736 000 USDT, autre mécanisme).
Terme à définir : signature à seuil (threshold signature / MPC) — slug proposé `signature-a-seuil`.
Lien possible : notre numéro 8 (piratages 2026 : 60 % par clés volées et bridges). Pas de lien vers le dossier Risque (non publié).

## Actu 2 — Kalshi contre l'État de New York
Suite de notre numéro 11 (Louisiane contre CFTC ; « affrontement entre institutions »). Lien /numeros/11.
- 23/11/2026 : la juge Melissa Crane (Cour suprême de l'État de New York, tribunal de première instance malgré son nom) refuse l'ordonnance d'interdiction temporaire demandée par la procureure générale Letitia James. Statu quo : Kalshi continue d'opérer. Audience sur une interdiction plus durable (injonction préliminaire) en janvier. (CoinDesk 23/11, Sports Betting Dime, Cointelegraph)
- Ce que veut l'État : interdire à Kalshi d'opérer « depuis New York » (pas seulement dans l'État) ; Kalshi dit que ça le fermerait dans tout le pays (son siège est à New York) ; la procureure dit que ce n'est pas son but. Griefs : utilisateurs de 18-20 ans (21 ans minimum pour les paris sportifs mobiles à New York), contrats sur des équipes universitaires new-yorkaises.
- Contexte défavorable : 18/11, la cour d'appel fédérale du 4e circuit donne tort à Kalshi face au Maryland ; 19/11, un juge fédéral (Vernon Broderick) renvoie l'affaire devant le tribunal de l'État ; la demande d'urgence de la CFTC pour bloquer l'action de New York a été rejetée [À VÉRIFIER : nom du juge, une source cite Lorna Schofield].
Angle : la question tranchée au n°11 (qui fixe les règles : CFTC fédérale ou États) se joue maintenant au cœur du marché ; les cours fédérales commencent à donner raison aux États.
