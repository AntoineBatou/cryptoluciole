import type { IssueEmail } from "../types";

// ===== Numéro #3 — version email (charte CryptoLuciole) =====
// Même squelette que issue-01/02 : on ne reconstruit pas la structure, on remplit.
// Le lien de désinscription est le placeholder %UNSUBSCRIBE_URL% (voir latest.ts).
export const issue03: IssueEmail = {
  number: 3,
  subject: "CryptoLuciole #3 — La guerre des stablecoins",
  html: `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>CryptoLuciole #3</title>
<!--[if mso]><style>*{font-family:Arial,sans-serif!important;}</style><![endif]-->
</head>
<body style="margin:0; padding:0; background-color:#EEF2F2; -webkit-text-size-adjust:100%;">
<div style="display:none; max-height:0; overflow:hidden; opacity:0; color:#EEF2F2; font-size:1px;">
Cette semaine : d'où vient l'argent des stablecoins, Open USD (le stablecoin des géants), Strategy s'autorise à vendre du bitcoin, et Ethena débarque chez BlackRock.
</div>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#EEF2F2;">
<tr><td align="center" style="padding:24px 12px;">

<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px; background-color:#ffffff; border-radius:16px; overflow:hidden; font-family:'Inter',Helvetica,Arial,sans-serif;">

  <!-- ============ BANDEAU pleine largeur ============ -->
  <tr>
    <td style="padding:0; font-size:0; line-height:0;">
      <img src="https://raw.githubusercontent.com/AntoineBatou/cryptoluciole/main/assets/banniere.png" width="600" alt="CryptoLuciole — La crypto et la DeFi, expliquées en moins de 10 minutes" style="display:block; width:100%; max-width:600px; height:auto; border:0;">
    </td>
  </tr>

  <!-- ============ TITRE DU NUMÉRO ============ -->
  <tr>
    <td style="padding:26px 36px 0 36px;">
      <p style="margin:0; font-size:12px; font-weight:600; color:#94a3b8; letter-spacing:0.6px;">#3 · SAMEDI 4 JUILLET 2026</p>
      <h1 style="margin:6px 0 0 0; font-size:26px; font-weight:800; color:#1A2332; line-height:1.25;">La guerre des stablecoins</h1>
    </td>
  </tr>

  <!-- ============ INTRO ============ -->
  <tr>
    <td style="padding:20px 36px 10px 36px; color:#1A2332;">
      <p style="margin:0 0 16px 0; font-size:16px; line-height:1.65;">Bonjour à toi 👋,</p>
      <p style="margin:0 0 18px 0; font-size:16px; line-height:1.65;">
        Cette semaine, la frontière entre la finance traditionnelle et la crypto n'a jamais été aussi mince : les géants de Wall Street lancent leur propre stablecoin, un dollar né dans la crypto entre chez BlackRock, et le plus gros détenteur de bitcoin au monde change de méthode. On t'explique tout, simplement.
      </p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f7fafa; border-radius:12px;">
        <tr><td style="padding:18px 22px; font-size:15px; line-height:2; color:#475569;">
          <strong style="color:#1A2332;">Au menu :</strong><br>
          🔦 <strong>On éclaire</strong> — d'où vient l'argent des stablecoins<br>
          ✨ <strong>Dans le faisceau</strong> — Open USD · Strategy vend du bitcoin<br>
          🔍 <strong>Sous la loupe</strong> — Ethena, le « dollar synthétique »<br>
          📊 <strong>Les repères</strong> — les cours du moment<br>
          💡 <strong>Ça brille</strong> — le chiffre de la semaine
        </td></tr>
      </table>
    </td>
  </tr>

  <!-- ============ 1. NOTION ============ -->
  <tr><td style="padding:28px 36px 0 36px;">
    <table role="presentation" cellpadding="0" cellspacing="0"><tr><td style="background-color:#e8f7f3; border-radius:30px; padding:6px 16px; font-size:12px; font-weight:700; color:#1d8870; letter-spacing:1.2px;">🔦 ON ÉCLAIRE</td></tr></table>
    <p style="margin:14px 0 16px 0; font-size:22px; font-weight:800; color:#1A2332;">Un stablecoin, d'où vient l'argent qu'il rapporte ?</p>
  </td></tr>
  <tr><td style="padding:0 36px; color:#1A2332;">
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;">Cette semaine, tout le monde se bat pour lancer son stablecoin — Visa, Stripe, BlackRock… Pour comprendre <em>pourquoi</em> c'est devenu un tel enjeu, il faut regarder une chose : <strong>ce que peuvent rapporter les stablecoins</strong>, et qui empoche ces gains.</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f3f6f6; border-radius:8px; margin:0 0 14px 0;"><tr><td style="padding:12px 16px; font-size:14px; line-height:1.6; color:#475569;">📖 <strong>Rappel : les <a href="https://www.cryptoluciole.com/glossaire/stablecoin" style="color:#28B092; font-weight:700; text-decoration:none;">stablecoins</a> (USDT / USDC / etc.)</strong> — conservent une valeur stable (celle d'une monnaie de référence), presque toujours le dollar. 1 USDC ≈ 1 $, en permanence. C'est le « cash » de la crypto.</td></tr></table>

    <p style="margin:18px 0 10px 0; font-size:16px; font-weight:800; color:#28B092;">Un jeton = un dollar bien réel quelque part</p>
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;">Les stablecoins classiques fonctionnent comme un reçu : tu donnes 1 $ à l'émetteur (Tether pour l'USDT, Circle pour l'USDC), il te remet 1 jeton qui vaut 1 $, remboursable à tout moment. Pour que le système tienne, il faut que l'émetteur conserve le dollar qui a été apporté (ce sont les <a href="https://www.cryptoluciole.com/glossaire/reserves" style="color:#28B092; font-weight:700; text-decoration:none;">réserves</a>), et qu'il ne crée pas plus de jetons (n'imprime pas plus de reçus) qu'il n'a de dollars en réserve.</p>
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;">Ces réserves ne dorment pas : elles sont <strong>placées</strong>.</p>

    <p style="margin:18px 0 10px 0; font-size:16px; font-weight:800; color:#28B092;">D'où vient le rendement</p>
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;">Un émetteur ne laisse pas des milliards de dollars sans les faire travailler. Il les place dans l'actif le plus sûr qui existe : les <strong>bons du Trésor américain</strong>, qui rapportent aujourd'hui autour de <strong>3,75 %</strong> par an.</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f3f6f6; border-radius:8px; margin:0 0 14px 0;"><tr><td style="padding:12px 16px; font-size:14px; line-height:1.6; color:#475569;">📖 <a href="https://www.cryptoluciole.com/glossaire/bons-du-tresor" style="color:#28B092; font-weight:700; text-decoration:none;">Bons du Trésor US</a> — des reconnaissances de dette de l'État américain. Le placement « sans risque » de référence en finance : on prête son argent au gouvernement, il verse un intérêt.</td></tr></table>
    <p style="margin:0 0 8px 0; font-size:16px; line-height:1.7;">Sur des montants pareils, ça change tout. Un exemple concret :</p>
    <ul style="margin:0 0 14px 0; padding-left:20px; font-size:16px; line-height:1.7;">
      <li style="margin-bottom:6px;">l'USDT (Tether) pèse environ <strong>185 milliards de dollars</strong> ;</li>
      <li style="margin-bottom:6px;">placés à ~3,75 %, ça produit de l'ordre de <strong>7 milliards de dollars par an</strong> — c'est exactement ce que Tether a tiré de ses bons du Trésor en 2024 ;</li>
      <li>le tout avec une équipe minuscule et quasiment aucun coût.</li>
    </ul>
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;">Résultat : sur l'ensemble de 2024, Tether a dégagé <strong>plus de 13 milliards de dollars de profit</strong> (le reste venant de l'or et du Bitcoin qu'il détient aussi) — l'un des bénéfices par salarié les plus élevés du monde.</p>

    <p style="margin:18px 0 10px 0; font-size:16px; font-weight:800; color:#28B092;">Qui empoche ce rendement ?</p>
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;">Toi, tu détiens le jeton ; l'émetteur détient ton dollar et touche les intérêts. <strong>Aujourd'hui, avec l'USDT et l'USDC, tout ce rendement va dans la poche de l'émetteur.</strong> Tu as un dollar stable, pratique — mais tu ne vois pas un centime de ce qu'il rapporte.</p>
    <p style="margin:0 0 8px 0; font-size:16px; line-height:1.7;">Ce n'est pourtant pas une fatalité : toute une génération de stablecoins <strong>reverse déjà tout ou partie de ce rendement</strong> aux détenteurs — l'USDe (Ethena), l'USD0 (Usual), l'USDY (Ondo)… Mais ils restent une petite fraction du marché et n'ont pas détrôné le duopole. Pourquoi ce succès limité ? Trois raisons :</p>
    <ul style="margin:0 0 14px 0; padding-left:20px; font-size:16px; line-height:1.7;">
      <li style="margin-bottom:6px;"><strong>Réglementaire</strong> — partager le rendement fait courir le risque d'être requalifié en <em>titre financier</em> (« security »). Résultat : accès restreint (souvent hors-US ou investisseurs qualifiés), donc mauvaise « monnaie du quotidien ».</li>
      <li style="margin-bottom:6px;"><strong>Effet de réseau / liquidité</strong> — l'USDT et l'USDC sont LA paire de base partout (exchanges, marchands, DeFi). Un jeton qui rapporte est un mauvais moyen d'échange → il reste un produit de placement, pas un « cash ».</li>
      <li><strong>Complexité / risque</strong> — il faut souvent <em>staker</em> ses jetons (les bloquer : sUSDe, USD0++) pour toucher le rendement, celui-ci peut être spéculatif (parfois payé dans un token maison), et certains ont déjà <a href="https://www.cryptoluciole.com/glossaire/depeg" style="color:#28B092; font-weight:700; text-decoration:none;">dépeggé</a> (perdu leur ancrage à 1 $) — l'USD0++ de Usual, sans oublier le krach de l'UST en 2022.</li>
    </ul>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0fdf4; border-left:4px solid #28B092; border-radius:8px; margin-bottom:14px;">
      <tr><td style="padding:14px 18px; font-size:16px; line-height:1.65; color:#1A2332;">
        💡 <strong>Notre avis :</strong> c'est LE modèle économique du secteur, et il est très rentable. Émettre un stablecoin, c'est encaisser les intérêts d'un placement fait avec l'argent des autres. On comprend que tant de géants de la finance veuillent leur part — et la nouveauté de la semaine, c'est justement <strong>qui</strong> débarque pour bousculer cette rente. On en parle juste en dessous.
      </td></tr>
    </table>

    <p style="margin:18px 0 10px 0; font-size:16px; font-weight:800; color:#28B092;">Et les modèles plus compliqués ?</p>
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;">Tous ne se valent pas côté risque. L'USDe d'Ethena, qu'on vient de citer, tire par exemple son rendement d'une <strong>stratégie de marché</strong> plutôt que de simples bons du Trésor — plus rémunérateur, mais aussi plus risqué. On le creuse plus loin (c'est notre protocole <em>Sous la loupe</em>) : retiens juste que <strong>la source du rendement change tout</strong>, et le risque avec.</p>
  </td></tr>

  <tr><td style="padding:26px 36px 0 36px;"><div style="border-top:1px solid #eef2f2;"></div></td></tr>

  <!-- ============ 2. ACTUS ============ -->
  <tr><td style="padding:24px 36px 0 36px;">
    <table role="presentation" cellpadding="0" cellspacing="0"><tr><td style="background-color:#fff4e0; border-radius:30px; padding:6px 16px; font-size:12px; font-weight:700; color:#b9770f; letter-spacing:1.2px;">✨ DANS LE FAISCEAU</td></tr></table>
  </td></tr>
  <tr><td style="padding:18px 36px 0 36px; color:#1A2332;">
    <p style="margin:0 0 6px 0; font-size:17px; font-weight:700;"><span style="color:#F5A623;">✦</span>&nbsp; Un stablecoin des géants de la finance pour concurrencer Tether et Circle</p>
    <p style="margin:0 0 15px 0; font-size:16px; line-height:1.7;">Une alliance de <strong>plus de 140 poids lourds de la finance traditionnelle</strong> — Visa, Mastercard, Stripe, BlackRock, BNY Mellon — lance son propre stablecoin, <strong>Open USD</strong> (projet « Open Standard »). Objectif affiché : casser le duopole de l'USDT (Tether) et de l'USDC (Circle).</p>
    <p style="margin:0 0 15px 0; font-size:16px; line-height:1.7;">Le point qui nous intéresse, c'est son <strong>modèle de partage des revenus</strong>. On l'a vu juste au-dessus : les réserves d'un stablecoin sont placées en bons du Trésor et rapportent, et aujourd'hui Tether et Circle gardent <strong>l'intégralité</strong> de ce rendement. Open USD prend le contre-pied : les plateformes et protocoles qui l'intègrent <strong>touchent une part des revenus des réserves</strong>, moins une petite commission de gestion. Frapper et racheter des Open USD se fait par ailleurs sans frais.</p>
    <p style="margin:0 0 15px 0; font-size:16px; line-height:1.7;">Des stablecoins qui partagent leur rendement, il en existe pourtant déjà (USDe, USD0…) — et aucun n'a détrôné le duopole, faute de <strong>distribution</strong>. C'est là qu'Open USD peut changer la donne : Visa, Stripe ou Mastercard peuvent l'intégrer directement dans leurs produits, auprès de millions de commerçants et d'utilisateurs, à une échelle qu'aucun challenger crypto n'atteint. Le nerf de la guerre n'est plus la technologie, mais la <strong>puissance de déploiement</strong>.</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f3f6f6; border-radius:8px; margin:0 0 12px 0;"><tr><td style="padding:12px 16px; font-size:14px; line-height:1.6; color:#475569;">📖 <a href="https://www.cryptoluciole.com/glossaire/mint" style="color:#28B092; font-weight:700; text-decoration:none;">Mint / frapper</a> — créer de nouveaux jetons. Pour un stablecoin, tu déposes des dollars et le protocole « frappe » l'équivalent en jetons ; à l'inverse, quand tu les rends, il les « rachète » (redeem) et te rend tes dollars.</td></tr></table>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0fdf4; border-left:4px solid #28B092; border-radius:8px; margin-bottom:14px;">
      <tr><td style="padding:14px 18px; font-size:16px; line-height:1.65; color:#1A2332;">
        💡 <strong>Notre avis :</strong> l'important n'est pas qu'Open USD gagne, mais qu'il force Tether et Circle à <strong>partager le rendement</strong> qu'ils empochent seuls jusqu'ici. Rien que la concurrence peut suffire à faire bouger les lignes — et les gagnants seraient alors les plateformes et protocoles DeFi qui détiennent de gros dépôts en stablecoins (Aave, par exemple), avec au bout de la chaîne des rendements potentiellement meilleurs pour l'utilisateur.<br><br>
        Beaucoup de ces géants ont longtemps combattu la crypto, et les voir débarquer en émetteurs a de quoi rendre méfiant. L'idéal ne serait pas qu'un mastodonte de la TradFi rafle la mise, mais qu'un émetteur né dans la crypto (Sky, Ethena, ou le GHO d'Aave) s'impose.
      </td></tr>
    </table>
    <p style="margin:0 0 22px 0; font-size:12px; color:#94a3b8;">Source : joinopenstandard.com, The DeFi Investor</p>

    <p style="margin:0 0 6px 0; font-size:17px; font-weight:700;"><span style="color:#F5A623;">✦</span>&nbsp; Le plus gros détenteur de bitcoin au monde s'autorise à en vendre</p>
    <p style="margin:0 0 15px 0; font-size:16px; line-height:1.7;"><strong>Strategy</strong> (ex-MicroStrategy, dirigée par Michael Saylor) est la plus grande <a href="https://www.cryptoluciole.com/glossaire/dat" style="color:#28B092; font-weight:600;">DAT</a> du monde : une société cotée en bourse qui, depuis 2020, lève des capitaux à une seule fin — accumuler du bitcoin. Elle en détient aujourd'hui environ <strong>847 000</strong>, soit près de <strong>52 milliards de dollars</strong> au cours actuel.</p>
    <p style="margin:0 0 15px 0; font-size:16px; line-height:1.7;">Le 29 juin, Strategy officialise un <strong>cadre</strong> qui l'autorise à <strong>vendre</strong> jusqu'à <strong>1,25 milliard de dollars</strong> de bitcoin (~2,5 % de son stock). Ça te dit quelque chose ? On en parlait déjà dans notre <a href="https://www.cryptoluciole.com/numeros/1" style="color:#28B092; font-weight:600;">tout premier numéro</a> : fin mai, Strategy cédait 32 bitcoins (~2,5 M$) pour honorer un paiement — une goutte d'eau, disions-nous. La nouveauté n'est donc pas la vente en soi, mais qu'elle devienne une <strong>politique permanente, votée par le conseil</strong>, au plafond ~500 fois plus élevé.</p>
    <p style="margin:0 0 15px 0; font-size:16px; line-height:1.7;">Pourquoi maintenant ? Son moteur historique tournait tant que son action valait, en Bourse, bien plus cher que les bitcoins qu'elle détient. Cet écart a un nom : le <a href="https://www.cryptoluciole.com/glossaire/mnav" style="color:#28B092; font-weight:600;">mNAV</a> — le rapport entre la valeur boursière de Strategy et celle de son trésor. Tant qu'il dépasse largement 1, l'entreprise peut émettre des actions « à prime » pour racheter encore plus de BTC : chaque levée crée de la valeur. Sauf que ce mNAV est aujourd'hui <strong>retombé autour de 1</strong>, et le moteur cale : autrement dit, Strategy vaut désormais en Bourse à peu près ce que valent ses bitcoins — la prime qui faisait toute la magie a disparu.</p>
    <p style="margin:0 0 8px 0; font-size:16px; line-height:1.7;">Pendant ce temps, Strategy doit verser chaque année environ <strong>1,8 milliard de dollars</strong> de dividendes et d'intérêts sur ses actions préférentielles (dont les fameuses <strong>STRC</strong>, qui ont beaucoup fait parler ces dernières semaines). D'où le filet de sécurité annoncé :</p>
    <ul style="margin:0 0 14px 0; padding-left:20px; font-size:16px; line-height:1.7;">
      <li style="margin-bottom:6px;">une réserve en dollars (plus de 12 mois de dividendes d'avance) ;</li>
      <li>et, si besoin, la possibilité de vendre un peu de bitcoin.</li>
    </ul>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f3f6f6; border-radius:8px; margin:0 0 12px 0;"><tr><td style="padding:12px 16px; font-size:14px; line-height:1.6; color:#475569;">📖 <a href="https://www.cryptoluciole.com/glossaire/dat" style="color:#28B092; font-weight:700; text-decoration:none;">DAT (Digital Asset Treasury)</a> — littéralement « trésorerie d'actifs numériques ». Une société cotée en bourse dont la trésorerie est massivement investie en crypto-actifs (le plus souvent du bitcoin), au point d'en faire le cœur de son activité. Acheter son action revient à s'exposer indirectement à sa réserve.</td></tr></table>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0fdf4; border-left:4px solid #28B092; border-radius:8px; margin-bottom:14px;">
      <tr><td style="padding:14px 18px; font-size:16px; line-height:1.65; color:#1A2332;">
        💡 <strong>Notre avis :</strong> faiblesse ou maturité ? Plutôt une <strong>maturation qu'une capitulation</strong>. Strategy ne renie pas le bitcoin — elle le réaffirme comme actif de réserve principal ; elle passe simplement d'un modèle « accumuler à tout prix » à un modèle « gérer son bilan sur la durée ». C'est plus sain : ça réduit le risque d'une vente forcée en catastrophe le jour où le marché baisse. Mais l'annonce révèle aussi les <strong>limites du modèle</strong> : il n'est invincible que tant que le bitcoin monte et que la prime tient.<br><br>
        Dans un prochain article, on décortiquera en détail comment Strategy a fait évoluer ses méthodes pour lever des fonds — et quels indicateurs surveiller pour juger une DAT, à commencer par le mNAV.
      </td></tr>
    </table>
    <p style="margin:0; font-size:12px; color:#94a3b8;">Sources : communiqué Strategy du 29 juin 2026 + dépôt 8-K (SEC) ; CoinDesk, The Block, Bitcoin Magazine</p>
  </td></tr>

  <tr><td style="padding:26px 36px 0 36px;"><div style="border-top:1px solid #eef2f2;"></div></td></tr>

  <!-- ============ 3. PROTOCOLE ============ -->
  <tr><td style="padding:24px 36px 0 36px;">
    <table role="presentation" cellpadding="0" cellspacing="0"><tr><td style="background-color:#e8f7f3; border-radius:30px; padding:6px 16px; font-size:12px; font-weight:700; color:#1d8870; letter-spacing:1.2px;">🔍 SOUS LA LOUPE</td></tr></table>
    <p style="margin:14px 0 16px 0; font-size:22px; font-weight:800; color:#1A2332;">Ethena <span style="color:#94a3b8; font-weight:600; font-size:18px;">(USDe &amp; sUSDe)</span></p>
  </td></tr>
  <tr><td style="padding:0 36px; color:#1A2332;">
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;"><strong style="color:#28B092;">En bref.</strong> Ethena émet l'<strong>USDe</strong>, un « dollar synthétique » qui vaut environ 1 $. Contrairement aux stablecoins classiques (adossés à du vrai cash ou des bons du Trésor), l'USDe n'est pas garanti par des dollars en banque : il tient sa valeur grâce à une stratégie de marché.</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f3f6f6; border-radius:8px; margin:0 0 14px 0;"><tr><td style="padding:12px 16px; font-size:14px; line-height:1.6; color:#475569;">📖 <a href="https://www.cryptoluciole.com/glossaire/dollar-synthetique" style="color:#28B092; font-weight:700; text-decoration:none;">Dollar synthétique</a> — un jeton qui vise 1 $ sans détenir de vrais dollars en réserve. Sa stabilité vient d'une combinaison de placements et de paris de marché qui se compensent, pas d'un compte en banque.</td></tr></table>
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;"><strong style="color:#28B092;">Comment ça marche.</strong> Le protocole détient de l'ETH et, en même temps, parie à la baisse sur l'ETH pour le même montant (une position « short » sur des contrats à terme). Résultat : si le prix de l'ETH monte, il gagne d'un côté et perd de l'autre ; s'il baisse, l'inverse. Les deux se neutralisent, et la valeur reste stable — c'est la stratégie dite <strong>« delta-neutre »</strong>.</p>
    <p style="margin:0 0 8px 0; font-size:16px; line-height:1.7;"><strong style="color:#28B092;">Le rendement.</strong> En stakant ton USDe, tu reçois du <strong>sUSDe</strong> — c'est lui qui capte le rendement. Celui-ci vient de deux sources :</p>
    <ul style="margin:0 0 14px 0; padding-left:20px; font-size:16px; line-height:1.7;">
      <li style="margin-bottom:6px;">les intérêts que paient les traders qui parient à la hausse sur l'ETH (ce qu'on appelle le <em>funding</em>) ;</li>
      <li>le rendement du staking de l'ETH détenu.</li>
    </ul>
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;">Le sUSDe rapporte actuellement <strong>~3,8 % par an</strong> — un niveau bas, cohérent avec la correction de marché du moment. Ce rendement <strong>suit le sentiment du marché</strong> : il grimpe quand tout le monde est haussier (beaucoup de traders paient pour parier à la hausse). Historiquement, il a été beaucoup plus élevé en période de hausse des marchés.</p>
    <p style="margin:0 0 10px 0; font-size:16px; line-height:1.7;"><strong style="color:#28B092;">Les risques.</strong>&nbsp; <span style="background-color:#fef9c3; color:#a16207; font-weight:700; font-size:13px; padding:3px 10px; border-radius:20px;">🟡 Moyen</span></p>
    <ul style="margin:0 0 14px 0; padding-left:20px; font-size:16px; line-height:1.7;">
      <li style="margin-bottom:6px;"><strong>Funding négatif.</strong> En marché baissier durable, le <em>funding</em> peut devenir négatif : le rendement s'effondre, voire coûte au protocole. Un fonds de réserve (environ 1 % de la taille) amortit ce genre de passage, mais seulement de façon temporaire.</li>
      <li style="margin-bottom:6px;"><strong>Dépendance aux plateformes.</strong> Les positions sont ouvertes sur des plateformes d'échange : si l'une fait défaut, une partie du dispositif est menacée.</li>
      <li><strong>Dépeg.</strong> En cas de stress extrême, l'USDe peut décrocher de son dollar — un <a href="https://www.cryptoluciole.com/glossaire/depeg" style="color:#28B092; font-weight:700; text-decoration:none;">dépeg</a>.</li>
    </ul>
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;">Pourquoi « moyen » et pas « élevé » ? L'USDe n'est pas un stablecoin algorithmique bancal : il est réellement collatéralisé, c'est l'un des plus gros du secteur, il a traversé plusieurs cycles sans casser son ancrage et dispose d'un fonds de réserve. Ce qui l'empêche d'être « faible », c'est surtout sa <strong>dépendance à des plateformes d'échange centralisées</strong> et à un <em>funding</em> qui peut se tarir. Bref : une stratégie de marché, pas un dollar dormant à la banque — un risque réel, mais maîtrisé.</p>
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;"><strong style="color:#28B092;">Pourquoi ça compte.</strong> Cette semaine, l'USDe est désormais intégré chez <strong>BlackRock</strong>, via <strong>Aladdin</strong>, sa plateforme de gestion d'actifs (plus de 20 000 milliards de dollars d'actifs suivis), avec son fonds tokenisé <strong>BUIDL</strong> comme collatéral.</p>
    <p style="margin:14px 0 0 0; font-size:16px; line-height:1.7;"><a href="https://www.cryptoluciole.com/protocoles/ethena" style="color:#28B092; font-weight:700; text-decoration:none;">→ Voir la fiche complète d'Ethena</a></p>
  </td></tr>

  <tr><td style="padding:26px 36px 0 36px;"><div style="border-top:1px solid #eef2f2;"></div></td></tr>

  <!-- ============ 4. COURS ============ -->
  <tr><td style="padding:24px 36px 0 36px;">
    <table role="presentation" cellpadding="0" cellspacing="0"><tr>
      <td style="background-color:#eef0ff; border-radius:30px; padding:6px 16px; font-size:12px; font-weight:700; color:#4338ca; letter-spacing:1.2px;">📊 LES REPÈRES</td>
      <td style="padding-left:12px; font-size:12px; color:#94a3b8; white-space:nowrap;">au 4 juillet 2026</td>
    </tr></table>
  </td></tr>
  <tr><td style="padding:16px 36px 0 36px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #eef2f2; border-radius:12px; overflow:hidden;">
      <tr style="background-color:#1A2332;">
        <td style="padding:11px 18px; font-size:12px; font-weight:600; color:#94a3b8; letter-spacing:0.5px;">ACTIF</td>
        <td align="right" style="padding:11px 18px; font-size:12px; font-weight:600; color:#94a3b8; letter-spacing:0.5px;">PRIX</td>
        <td align="right" style="padding:11px 18px; font-size:12px; font-weight:600; color:#94a3b8; letter-spacing:0.5px;">7 JOURS</td>
      </tr>
      <tr><td style="padding:13px 18px; font-size:16px; color:#1A2332;"><strong style="color:#16a34a;">BTC</strong> <span style="color:#94a3b8;">Bitcoin</span></td><td align="right" style="padding:13px 18px; font-size:16px; font-weight:700; color:#1A2332;">~63 370 $</td><td align="right" style="padding:13px 18px; font-size:15px; font-weight:700; color:#16a34a;">▲ +5,0 %</td></tr>
      <tr style="background-color:#f7fafa;"><td style="padding:13px 18px; font-size:16px; color:#1A2332;"><strong style="color:#16a34a;">ETH</strong> <span style="color:#94a3b8;">Ethereum</span></td><td align="right" style="padding:13px 18px; font-size:16px; font-weight:700; color:#1A2332;">~1 791 $</td><td align="right" style="padding:13px 18px; font-size:15px; font-weight:700; color:#16a34a;">▲ +13,3 %</td></tr>
      <tr><td style="padding:13px 18px; font-size:16px; color:#1A2332;"><strong style="color:#16a34a;">SOL</strong> <span style="color:#94a3b8;">Solana</span></td><td align="right" style="padding:13px 18px; font-size:16px; font-weight:700; color:#1A2332;">~82,0 $</td><td align="right" style="padding:13px 18px; font-size:15px; font-weight:700; color:#16a34a;">▲ +14,9 %</td></tr>
      <tr style="background-color:#f7fafa;"><td style="padding:13px 18px; font-size:16px; color:#1A2332;"><strong style="color:#16a34a;">HYPE</strong> <span style="color:#94a3b8;">Hyperliquid</span></td><td align="right" style="padding:13px 18px; font-size:16px; font-weight:700; color:#1A2332;">~70,1 $</td><td align="right" style="padding:13px 18px; font-size:15px; font-weight:700; color:#16a34a;">▲ +11,9 %</td></tr>
      <tr><td style="padding:13px 18px; font-size:16px; color:#1A2332;"><strong style="color:#16a34a;">BNB</strong></td><td align="right" style="padding:13px 18px; font-size:16px; font-weight:700; color:#1A2332;">~574 $</td><td align="right" style="padding:13px 18px; font-size:15px; font-weight:700; color:#16a34a;">▲ +2,2 %</td></tr>
    </table>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0fdf4; border-left:4px solid #28B092; border-radius:8px; margin-top:14px;">
      <tr><td style="padding:14px 18px; font-size:16px; line-height:1.6; color:#1A2332;">
        💡 <strong>Notre avis :</strong> rebond quasi général cette semaine, porté surtout par la Fed — un rapport sur l'emploi américain décevant a éloigné la menace d'une hausse des taux. Côté ETF Bitcoin, prudence : après un mois de juin de sorties massives, les flux ne font que <em>commencer</em> à se stabiliser, rien de plus. Les « alts » (ETH, SOL, HYPE) rebondissent plus fort que le bitcoin, comme souvent quand l'appétit pour le risque revient. Attention toutefois : ça ne suffit pas à décréter la fin du marché baissier — un juillet haussier pourrait très bien précéder un nouveau point bas cet été avant une reprise à l'automne.
      </td></tr>
    </table>
    <p style="margin:8px 0 0 0; font-size:11px; line-height:1.5; color:#94a3b8;">Prix &amp; variations 7 j au 4 juillet 2026 (DeFiLlama / CoinGecko).</p>
  </td></tr>

  <!-- DATA DE LA SEMAINE -->
  <tr><td style="padding:24px 36px 0 36px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#1A2332; background:linear-gradient(135deg,#1A2332,#2e1b8b); border-radius:14px;">
      <tr><td style="padding:22px 24px;">
        <div style="font-size:12px; font-weight:700; color:#F5A623; letter-spacing:1.2px; margin-bottom:8px;">💡 ÇA BRILLE</div>
        <div style="font-size:26px; font-weight:800; color:#ffffff; margin-bottom:4px;">−4 milliards de dollars</div>
        <div style="font-size:14px; line-height:1.6; color:#cbd5e1; margin-bottom:16px;">retirés des <strong style="color:#ffffff;">ETF Bitcoin américains</strong> en juin 2026 — le pire mois de sorties depuis le lancement de ces ETF (janvier 2024).</div>
        <div style="font-size:12px; font-weight:700; color:#94a3b8; letter-spacing:0.4px; margin-bottom:10px;">FLUX NETS MENSUELS · ETF BITCOIN SPOT US · 2026</div>
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
          <tr><td style="font-size:13px; color:#cbd5e1; padding:3px 8px 3px 0; white-space:nowrap;" width="44">Jan</td><td style="padding:3px 0;"><table role="presentation" cellpadding="0" cellspacing="0"><tr><td style="width:86px; height:14px; background-color:#ef4444; border-radius:3px; font-size:0; line-height:0;">&nbsp;</td><td style="padding-left:8px; font-size:13px; font-weight:700; color:#fca5a5; white-space:nowrap;">−1,6 Md$</td></tr></table></td></tr>
          <tr><td style="font-size:13px; color:#cbd5e1; padding:3px 8px 3px 0; white-space:nowrap;">Fév</td><td style="padding:3px 0;"><table role="presentation" cellpadding="0" cellspacing="0"><tr><td style="width:12px; height:14px; background-color:#ef4444; border-radius:3px; font-size:0; line-height:0;">&nbsp;</td><td style="padding-left:8px; font-size:13px; font-weight:700; color:#fca5a5; white-space:nowrap;">−0,2 Md$</td></tr></table></td></tr>
          <tr><td style="font-size:13px; color:#cbd5e1; padding:3px 8px 3px 0; white-space:nowrap;">Mar</td><td style="padding:3px 0;"><table role="presentation" cellpadding="0" cellspacing="0"><tr><td style="width:70px; height:14px; background-color:#22c55e; border-radius:3px; font-size:0; line-height:0;">&nbsp;</td><td style="padding-left:8px; font-size:13px; font-weight:700; color:#86efac; white-space:nowrap;">+1,3 Md$</td></tr></table></td></tr>
          <tr><td style="font-size:13px; color:#cbd5e1; padding:3px 8px 3px 0; white-space:nowrap;">Avr</td><td style="padding:3px 0;"><table role="presentation" cellpadding="0" cellspacing="0"><tr><td style="width:129px; height:14px; background-color:#22c55e; border-radius:3px; font-size:0; line-height:0;">&nbsp;</td><td style="padding-left:8px; font-size:13px; font-weight:700; color:#86efac; white-space:nowrap;">+2,4 Md$</td></tr></table></td></tr>
          <tr><td style="font-size:13px; color:#cbd5e1; padding:3px 8px 3px 0; white-space:nowrap;">Mai</td><td style="padding:3px 0;"><table role="presentation" cellpadding="0" cellspacing="0"><tr><td style="width:172px; height:14px; background-color:#ef4444; border-radius:3px; font-size:0; line-height:0;">&nbsp;</td><td style="padding-left:8px; font-size:13px; font-weight:700; color:#fca5a5; white-space:nowrap;">−3,2 Md$</td></tr></table></td></tr>
          <tr><td style="font-size:13px; color:#cbd5e1; padding:3px 8px 3px 0; white-space:nowrap;">Juin</td><td style="padding:3px 0;"><table role="presentation" cellpadding="0" cellspacing="0"><tr><td style="width:220px; height:14px; background-color:#ef4444; border-radius:3px; font-size:0; line-height:0;">&nbsp;</td><td style="padding-left:8px; font-size:13px; font-weight:700; color:#fca5a5; white-space:nowrap;">−4,1 Md$</td></tr></table></td></tr>
        </table>
        <div style="font-size:14px; line-height:1.6; color:#cbd5e1; margin-top:14px;">Le printemps encore positif (mars-avril) s'est brutalement inversé en mai-juin — c'est le décor du rebond encore fragile de cette semaine (voir <em>Les Repères</em>).</div>
      </td></tr>
    </table>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0fdf4; border-left:4px solid #28B092; border-radius:8px; margin-top:14px;">
      <tr><td style="padding:14px 18px; font-size:16px; line-height:1.6; color:#1A2332;">
        💡 <strong>Notre avis :</strong> depuis leur pic, ces ETF ont rendu près de <strong>10 Md$</strong> — environ <strong>15 %</strong> de tout ce qu'ils avaient accumulé. Ce niveau de capitulation s'observe souvent à l'approche d'un point bas de marché, et nous pensons que nous en sommes proches.
      </td></tr>
    </table>
    <p style="margin:8px 0 0 0; font-size:11px; line-height:1.5; color:#94a3b8;">Flux nets, ETF Bitcoin spot US · source Blockworks (recoupé).</p>
  </td></tr>

  <tr><td style="padding:26px 36px 0 36px;"><div style="border-top:1px solid #eef2f2;"></div></td></tr>

  <!-- ============ DÉFINITIONS ============ -->
  <tr><td style="padding:24px 36px 0 36px;">
    <table role="presentation" cellpadding="0" cellspacing="0"><tr><td style="background-color:#fff4e0; border-radius:30px; padding:6px 16px; font-size:12px; font-weight:700; color:#b9770f; letter-spacing:1.2px;">📖 DÉFINITIONS</td></tr></table>
  </td></tr>
  <tr><td style="padding:16px 36px 0 36px; color:#1A2332;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td valign="top" width="20" style="font-size:16px; color:#F5A623; line-height:1.6;">•</td>
        <td style="font-size:16px; line-height:1.6;"><a href="https://www.cryptoluciole.com/glossaire/depeg" style="color:#28B092; font-weight:700; text-decoration:none;">Dépeg</a> — quand un stablecoin décroche de sa valeur cible : un jeton censé valoir 1 $ qui tombe, par exemple, à 0,95 $. Signe d'une perte de confiance ou d'un problème sur les réserves — et rien ne garantit le retour à 1 $. Cas célèbres : l'UST de Terra effondré à zéro en 2022, ou l'USDC brièvement tombé à 0,87 $ en 2023.</td>
      </tr>
    </table>
  </td></tr>
  <tr><td style="padding:14px 36px 0 36px; color:#1A2332;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td valign="top" width="20" style="font-size:16px; color:#F5A623; line-height:1.6;">•</td>
        <td style="font-size:16px; line-height:1.6;"><a href="https://www.cryptoluciole.com/glossaire/mnav" style="color:#28B092; font-weight:700; text-decoration:none;">mNAV</a> — pour une DAT (comme Strategy), le rapport entre sa valeur en Bourse et la valeur totale des cryptos qu'elle détient.
          <ul style="margin:8px 0 0 0; padding-left:20px; font-size:16px; line-height:1.6;">
            <li style="margin-bottom:5px;"><strong>Au-dessus de 1</strong> : l'entreprise vaut plus que ses bitcoins. Elle peut émettre des actions « chères » et les convertir en bitcoin « au prix réel » — chaque levée achète plus de BTC qu'elle ne dilue les actionnaires, donc lever des fonds crée de la valeur.</li>
            <li style="margin-bottom:5px;"><strong>À 1</strong> : elle vaut pile ses bitcoins.</li>
            <li><strong>En dessous de 1</strong> : elle vaut moins que son trésor. Émettre des actions détruit alors de la valeur (autant acheter le bitcoin en direct).</li>
          </ul>
        </td>
      </tr>
    </table>
  </td></tr>

  <!-- ============ BIENTÔT ============ -->
  <tr><td style="padding:26px 36px 28px 36px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f7fafa; border-radius:12px;">
      <tr><td style="padding:18px 22px; font-size:15px; line-height:1.7; color:#475569;">
        <strong style="color:#1A2332;">🚧 Ce qui arrive bientôt</strong><br>
        🎥 des <strong>tutos vidéo de ~15 min</strong> (on fait la manip en direct)<br>
        📚 des <strong>articles et analyses</strong> plus poussées (à commencer par un décryptage du modèle Strategy et des DAT)<br>
        🔍 une section <strong>Protocoles</strong> où chaque protocole décrypté est détaillé<br>
        📖 un <strong>glossaire</strong> qui réunit tous les termes définis
      </td></tr>
    </table>
  </td></tr>

  <!-- ============ PIED ============ -->
  <tr><td style="background-color:#1A2332; padding:24px 36px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
      <td valign="middle" width="40"><img src="https://raw.githubusercontent.com/AntoineBatou/cryptoluciole/main/assets/logo/firefly-logo-white.png" width="32" alt="" style="display:block;width:32px;height:auto;"></td>
      <td valign="middle" style="padding-left:10px; font-size:14px; font-weight:700; color:#F5A623;">CryptoLuciole 🪲✨</td>
    </tr></table>
    <p style="margin:14px 0 0 0; font-size:11px; line-height:1.6; color:#94a3b8;">⚠️ Contenu purement pédagogique — <strong>pas un conseil en investissement</strong>. Fais tes propres recherches.</p>
    <p style="margin:12px 0 0 0; font-size:11px; line-height:1.6; color:#64748b;"><a href="%UNSUBSCRIBE_URL%" style="color:#94a3b8;">Se désabonner</a> &middot; CryptoLuciole</p>
  </td></tr>

</table>
</td></tr></table>
</body>
</html>`,
};
