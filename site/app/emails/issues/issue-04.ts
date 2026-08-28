import type { IssueEmail } from "../types";

// ===== Numéro #4 — version email (charte CryptoLuciole) =====
// Même squelette que issue-01/02/03 : on ne reconstruit pas la structure, on remplit.
// Le lien de désinscription est le placeholder %UNSUBSCRIBE_URL% (voir latest.ts).
// NOUVEAU dans ce numéro : le tableau des cours a une 2e colonne de variation
// (« depuis le #3 »), l'écart entre les deux numéros étant de 8 semaines.
export const issue04: IssueEmail = {
  number: 4,
  subject: "CryptoLuciole #4 — Les perps, décryptés",
  html: `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>CryptoLuciole #4</title>
<!--[if mso]><style>*{font-family:Arial,sans-serif!important;}</style><![endif]-->
</head>
<body style="margin:0; padding:0; background-color:#EEF2F2; -webkit-text-size-adjust:100%;">
<div style="display:none; max-height:0; overflow:hidden; opacity:0; color:#EEF2F2; font-size:1px;">
Le contrat perpétuel expliqué simplement, Revolut lance son stablecoin euro pendant que Tether quitte l'Europe, la SEC écrit ses propres règles, et comment encaisser le funding sans s'exposer au prix du bitcoin.
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
      <p style="margin:0; font-size:12px; font-weight:600; color:#94a3b8; letter-spacing:0.6px;">#4 · VENDREDI 28 AOÛT 2026</p>
      <h1 style="margin:6px 0 0 0; font-size:26px; font-weight:800; color:#1A2332; line-height:1.25;">Les perps, décryptés</h1>
    </td>
  </tr>

  <!-- ============ INTRO ============ -->
  <tr>
    <td style="padding:20px 36px 10px 36px; color:#1A2332;">
      <p style="margin:0 0 16px 0; font-size:16px; line-height:1.65;">Bonjour à toi 👋,</p>
      <p style="margin:0 0 14px 0; font-size:16px; line-height:1.65;">
        Huit semaines sans numéro, et l'impression d'avoir manqué quelque chose ? C'est le cas. Pendant l'été, le bitcoin a repris <strong>25 %</strong>, l'ether <strong>39 %</strong>, et la SEC a publié la première vraie réglementation crypto américaine depuis dix ans.
      </p>
      <p style="margin:0 0 18px 0; font-size:16px; line-height:1.65;">
        On reprend donc là où on s'était arrêtés, avec le produit qui domine aujourd'hui la crypto sans que grand monde sache vraiment comment il fonctionne : le contrat perpétuel.
      </p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f7fafa; border-radius:12px;">
        <tr><td style="padding:18px 22px; font-size:15px; line-height:2; color:#475569;">
          <strong style="color:#1A2332;">Au menu :</strong><br>
          🔦 <strong>On éclaire</strong> — le contrat perpétuel, sans jargon<br>
          ✨ <strong>Dans le faisceau</strong> — Revolut lance son stablecoin euro · la SEC n'attend plus le Congrès<br>
          🔍 <strong>Sous la loupe</strong> — encaisser le funding sans s'exposer au prix<br>
          📊 <strong>Les repères</strong> — l'été qui a tout effacé<br>
          💡 <strong>Ça brille</strong> — 4 dollars sur 5 vont chez BlackRock
        </td></tr>
      </table>
    </td>
  </tr>

  <!-- ============ 1. NOTION ============ -->
  <tr><td style="padding:28px 36px 0 36px;">
    <table role="presentation" cellpadding="0" cellspacing="0"><tr><td style="background-color:#e8f7f3; border-radius:30px; padding:6px 16px; font-size:12px; font-weight:700; color:#1d8870; letter-spacing:1.2px;">🔦 ON ÉCLAIRE</td></tr></table>
    <p style="margin:14px 0 16px 0; font-size:22px; font-weight:800; color:#1A2332;">Le contrat perpétuel : parier sur un prix sans jamais posséder l'actif</p>
  </td></tr>
  <tr><td style="padding:0 36px; color:#1A2332;">
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;">À l'inverse d'un investissement classique où on achète un jeton, une action ou un actif, avec un contrat perpétuel — un « perp » —, tu ne détiens rien du tout : tu passes un accord dont le gain ou la perte dépend uniquement du mouvement d'un prix, mais ni l'acheteur ni le vendeur ne détient l'actif en question.</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f3f6f6; border-radius:8px; margin:0 0 14px 0;"><tr><td style="padding:12px 16px; font-size:14px; line-height:1.6; color:#475569;">📖 <strong><a href="https://www.cryptoluciole.com/glossaire/contrat-perpetuel" style="color:#28B092; font-weight:700; text-decoration:none;">Contrat perpétuel</a> (« perp »)</strong> — un contrat qui suit le prix d'un actif (bitcoin, ether…) sans qu'on le possède. On choisit un sens : à la hausse (<em>long</em>) ou à la baisse (<em>short</em>). Si le prix va dans ton sens, tu gagnes la différence ; sinon tu la perds. Particularité : <strong>il n'a pas de date d'expiration</strong> — d'où « perpétuel » — et surtout il n'y a pas de sous-jacent réel : lorsqu'on parie sur la hausse du BTC, on ne détient pas de BTC.</td></tr></table>
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;">Le mécanisme n'est pas une invention de la crypto : en Bourse, un contrat à terme (<em>future</em>) sur le pétrole ou le blé fait la même chose depuis toujours — deux parties fixent un prix de référence et, à l'échéance, ne se règlent que l'écart entre ce prix et le prix réel. Ce qui distingue le perp, c'est justement l'<strong>absence</strong> d'échéance : un future classique expire à une date connue et doit être renouvelé, là où un perp reste ouvert indéfiniment.</p>

    <p style="margin:18px 0 10px 0; font-size:16px; font-weight:800; color:#28B092;">Alors d'où sort l'argent gagné ?</p>
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;">Puisque personne ne détient de bitcoin, il faut bien que les gains viennent de quelque part. Ils viennent <strong>de la poche d'un autre parieur</strong>.</p>
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;">Chaque contrat a deux côtés : un parieur à la hausse, un parieur à la baisse. Et les deux camps s'équilibrent toujours exactement, par construction — pour payer une position gagnante, il faut quelqu'un d'autre en face dans une position inverse.</p>
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;">Si le bitcoin monte, l'acheteur gagne ce que le vendeur perd. Rien n'est créé, rien ne disparaît.</p>

    <p style="margin:18px 0 10px 0; font-size:16px; font-weight:800; color:#28B092;">En pratique : le levier</p>
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;">Deuxième particularité : tu n'as pas besoin d'avancer la totalité de la somme. Tu déposes une garantie — la <strong>marge</strong> — et la plateforme te laisse contrôler une position bien plus grosse.</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f3f6f6; border-radius:8px; margin:0 0 14px 0;"><tr><td style="padding:12px 16px; font-size:14px; line-height:1.6; color:#475569;">📖 <a href="https://www.cryptoluciole.com/glossaire/levier" style="color:#28B092; font-weight:700; text-decoration:none;">Levier</a> — le rapport entre la taille de ta position et l'argent que tu as réellement déposé. Avec 100 € de garantie et un levier de 20×, tu pilotes une position de 2 000 € (100 € × 20 = 2 000 €).</td></tr></table>
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;"><strong>Les gains comme les pertes se calculent sur les 2 000 €, pas sur tes 100 €.</strong> Un mouvement de 5 % dans le bon sens te fait gagner 100 € (tes gains sont multipliés par 20) — tu doubles ta mise de base. Le même mouvement de 5 % dans le mauvais sens te fait perdre la totalité de ta mise.</p>
    <p style="margin:0 0 8px 0; font-size:16px; line-height:1.7;">Chez Hyperliquid, la plateforme de perps la plus utilisée aujourd'hui, les plafonds sont les suivants :</p>
    <ul style="margin:0 0 14px 0; padding-left:20px; font-size:16px; line-height:1.7;">
      <li style="margin-bottom:6px;"><strong>40×</strong> au maximum sur le bitcoin ;</li>
      <li style="margin-bottom:6px;"><strong>25×</strong> sur l'ether ;</li>
      <li><strong>20×</strong> sur Solana.</li>
    </ul>
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;">Plus l'actif est volatil, plus le levier autorisé est bas.</p>

    <p style="margin:18px 0 10px 0; font-size:16px; font-weight:800; color:#28B092;">Là où ça casse : la liquidation</p>
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;">Ta marge sert d'amortisseur : quand ce qu'il en reste passe sous un seuil minimum, la plateforme ferme la position d'office. C'est la <strong>liquidation</strong>.</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f3f6f6; border-radius:8px; margin:0 0 14px 0;"><tr><td style="padding:12px 16px; font-size:14px; line-height:1.6; color:#475569;">📖 <a href="https://www.cryptoluciole.com/glossaire/liquidation" style="color:#28B092; font-weight:700; text-decoration:none;">Liquidation</a> — fermeture forcée d'une position par la plateforme quand la marge ne couvre plus suffisamment la perte. Elle est automatique : personne ne t'appelle, il n'y a rien à valider, et l'essentiel de ta mise est perdu.</td></tr></table>
    <p style="margin:0 0 8px 0; font-size:16px; line-height:1.7;"><strong>La règle à retenir tient en une division : 100 ÷ ton levier.</strong> Le résultat, c'est le mouvement de prix — en pourcentage, et dans le mauvais sens — qui suffit à effacer ta mise.</p>
    <ul style="margin:0 0 14px 0; padding-left:20px; font-size:16px; line-height:1.7;">
      <li style="margin-bottom:6px;">à <strong>5×</strong>, il faut une baisse de 20 % ;</li>
      <li style="margin-bottom:6px;">à <strong>20×</strong>, 5 % suffisent ;</li>
      <li>à <strong>40×</strong>, 2,5 % suffisent.</li>
    </ul>
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;">Reprenons les 100 € à 20× : ta position vaut 2 000 €, et une baisse de 5 % lui fait perdre 100 € — exactement ce que tu avais déposé.</p>
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;">En pratique, tu seras liquidé un peu avant d'atteindre ce niveau : Hyperliquid t'oblige à conserver en permanence un petit reliquat. Dans cet exemple, la fermeture intervient plutôt vers 3,75 % de baisse, et il te restera une vingtaine d'euros sur ton compte.</p>
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;">Conséquence : <strong>le prix peut te donner raison quand même</strong> — s'il baisse de 5 % puis remonte, peu importe : la position a été fermée au passage, tu n'es plus dedans.</p>

    <p style="margin:18px 0 10px 0; font-size:16px; font-weight:800; color:#28B092;">Le funding rate : ce qui tient le prix en place</p>
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;">Il reste un problème, et c'est le plus intéressant : comme personne ne détient l'actif, comment s'assurer que le prix du perp colle à celui de l'actif ?</p>
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;">Chaque plateforme de perps le résout à sa manière ; on prend ici l'exemple d'Hyperliquid. Sur Hyperliquid, <strong>le prix du perp est fixé par l'offre et la demande entre les utilisateurs</strong> : le carnet d'ordres fonctionne comme celui d'une plateforme d'échange classique, à ceci près qu'il est entièrement inscrit sur la blockchain.</p>
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;">Or rien ne relie mécaniquement les deux prix. Imagine que le bitcoin vaille 80 000 $ et que tout le monde se précipite pour acheter le contrat à la hausse : le perp va rapidement coûter bien plus cher que le bitcoin lui-même. Il a donc fallu inventer un système pour recréer l'équilibre : le <strong>funding rate</strong>.</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f3f6f6; border-radius:8px; margin:0 0 14px 0;"><tr><td style="padding:12px 16px; font-size:14px; line-height:1.6; color:#475569;">📖 <a href="https://www.cryptoluciole.com/glossaire/funding-rate" style="color:#28B092; font-weight:700; text-decoration:none;">Funding rate</a> — un paiement récurrent entre les deux camps du marché : le camp majoritaire paie l'autre. Ce n'est jamais la plateforme qui l'encaisse, l'argent circule d'un utilisateur à l'autre. Chez Hyperliquid, il est prélevé <strong>toutes les heures</strong> ; ailleurs, le standard est toutes les 8 heures.</td></tr></table>
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;">Le raisonnement est simple. S'il y a beaucoup de demande à la hausse sur le bitcoin, le prix du contrat monte au-dessus du prix réel (ce prix réel est une référence reconstituée à partir des grandes plateformes d'échange — Binance, OKX, Kraken, Huobi — et republiée toutes les 3 secondes). Le funding devient alors positif et <strong>les parieurs à la hausse paient une sorte de « taxe » aux parieurs à la baisse</strong>, et ce toutes les heures tant que la position est ouverte — ce sont eux, et non la plateforme, qui touchent l'argent.</p>
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;">Dans cette situation, parier à la hausse coûte de l'argent en continu, tandis que parier à la baisse en rapporte. Ce qui décourage les premiers, attire les seconds, et ramène mécaniquement les deux prix l'un vers l'autre.</p>
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;">Plus le prix du perp s'écarte du prix réel, plus le funding grimpe pour inciter les acteurs à prendre des positions qui ramènent l'équilibre. Voilà comment un contrat qui ne repose sur rien de tangible reste malgré tout collé au prix réel du bitcoin.</p>

    <p style="margin:18px 0 10px 0; font-size:16px; font-weight:800; color:#28B092;">Pourquoi ça compte maintenant</p>
    <p style="margin:0 0 8px 0; font-size:16px; line-height:1.7;">Les perps sont devenus le produit le plus utilisé de la crypto, très loin devant l'achat de jetons au comptant. Deux raisons :</p>
    <ul style="margin:0 0 14px 0; padding-left:20px; font-size:16px; line-height:1.7;">
      <li style="margin-bottom:6px;">on peut y gagner <strong>à la baisse</strong>, pas seulement à la hausse ;</li>
      <li>il n'y a <strong>rien à détenir ni à stocker</strong> — pas de jeton, pas de portefeuille à gérer.</li>
    </ul>
    <p style="margin:0 0 8px 0; font-size:16px; line-height:1.7;">Ce succès produit deux flux bien réels :</p>
    <ul style="margin:0 0 14px 0; padding-left:20px; font-size:16px; line-height:1.7;">
      <li style="margin-bottom:6px;">les <strong>frais de transaction</strong> payés à chaque ordre ;</li>
      <li>le <strong>funding</strong> que le camp majoritaire verse à l'autre.</li>
    </ul>
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;">Ces flux se retrouvent dans plusieurs stratégies de rendement.</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0fdf4; border-left:4px solid #28B092; border-radius:8px; margin-bottom:14px;">
      <tr><td style="padding:14px 18px; font-size:16px; line-height:1.65; color:#1A2332;">
        💡 <strong>Notre avis :</strong> le levier ne pardonne pas. À 40×, un mouvement contraire de 2,5 % suffit à effacer la mise — et le bitcoin franchit ce seuil environ cinq fois par mois. Ce n'est pas un outil pour investir sur la durée, mais pour tenter des coups courts, avec tout l'aléa que ça suppose. Le funding, lui, ouvre une piste nettement plus intéressante : encaisser un rendement <strong>sans s'exposer aux variations du bitcoin</strong>. C'est ce qu'on regarde juste en dessous.
      </td></tr>
    </table>
  </td></tr>

  <tr><td style="padding:26px 36px 0 36px;"><div style="border-top:1px solid #eef2f2;"></div></td></tr>

  <!-- ============ 2. ACTUS ============ -->
  <tr><td style="padding:24px 36px 0 36px;">
    <table role="presentation" cellpadding="0" cellspacing="0"><tr><td style="background-color:#fff4e0; border-radius:30px; padding:6px 16px; font-size:12px; font-weight:700; color:#b9770f; letter-spacing:1.2px;">✨ DANS LE FAISCEAU</td></tr></table>
  </td></tr>
  <tr><td style="padding:18px 36px 0 36px; color:#1A2332;">
    <p style="margin:0 0 6px 0; font-size:17px; font-weight:700;"><span style="color:#F5A623;">✦</span>&nbsp; Tether quitte l'Europe, Revolut en profite pour lancer son stablecoin euro</p>
    <p style="margin:0 0 15px 0; font-size:16px; line-height:1.7;">Pour être proposé aux clients européens, un stablecoin doit avoir un agrément <strong>MiCA</strong>. Tether, l'émetteur de l'USDT — le plus gros stablecoin du monde — a fait savoir qu'il ne le demanderait pas : ses dirigeants jugent les exigences européennes incompatibles avec leur modèle.</p>
    <p style="margin:0 0 15px 0; font-size:16px; line-height:1.7;">Depuis, les plateformes régulées en Europe retirent l'USDT une par une. Coinbase avait ouvert le bal dès décembre 2024, et le mouvement était pratiquement terminé au 1er juillet 2026, la date limite fixée par le règlement.</p>
    <p style="margin:0 0 15px 0; font-size:16px; line-height:1.7;"><strong>Revolut ferme la marche : le 31 août, l'USDT disparaît de son application pour les clients européens.</strong></p>
    <p style="margin:0 0 15px 0; font-size:16px; line-height:1.7;">Et cinq jours avant cette échéance, la fintech a lancé son propre stablecoin : <strong>EURR</strong>, adossé à l'euro (1 EURR = 1 €). Elle ne l'émet pas elle-même — c'est <strong>Bridge</strong>, la société d'infrastructure rachetée par Stripe, qui l'émet depuis le Luxembourg et gère les réserves sous le régime MiCA.</p>
    <p style="margin:0 0 15px 0; font-size:16px; line-height:1.7;">Le déploiement commence par des clients sélectionnés au Danemark, en Pologne et au Portugal, avant le reste de l'Espace économique européen, annoncé pour plus tard cette année.</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f3f6f6; border-radius:8px; margin:0 0 14px 0;"><tr><td style="padding:12px 16px; font-size:14px; line-height:1.6; color:#475569;">📖 <a href="https://www.cryptoluciole.com/glossaire/mica" style="color:#28B092; font-weight:700; text-decoration:none;">MiCA</a> — le règlement européen qui encadre les crypto-actifs. Pour émettre un stablecoin dans l'Union, il impose un agrément, des réserves cantonnées et un droit au remboursement à tout moment. Sans agrément, un stablecoin ne peut plus être proposé aux clients européens.</td></tr></table>
    <p style="margin:0 0 8px 0; font-size:16px; font-weight:800; color:#28B092;">Si tu détiens des USDT chez Revolut</p>
    <p style="margin:0 0 8px 0; font-size:16px; line-height:1.7;">Il te reste quelques jours pour choisir toi-même :</p>
    <ul style="margin:0 0 14px 0; padding-left:20px; font-size:16px; line-height:1.7;">
      <li style="margin-bottom:6px;">les <strong>transférer</strong> vers ton propre portefeuille ;</li>
      <li style="margin-bottom:6px;">les <strong>échanger</strong> contre des euros ou un autre stablecoin agréé ;</li>
      <li>ne rien faire — Revolut les convertira automatiquement dans la devise de ton compte après le 31 août.</li>
    </ul>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0fdf4; border-left:4px solid #28B092; border-radius:8px; margin-bottom:14px;">
      <tr><td style="padding:14px 18px; font-size:16px; line-height:1.65; color:#1A2332;">
        💡 <strong>Notre avis :</strong> Revolut ne fait pas que se mettre en règle : émettre un stablecoin, c'est placer l'argent déposé et en encaisser les intérêts — on expliquait ce modèle dans le <a href="https://www.cryptoluciole.com/numeros/3" style="color:#28B092; font-weight:600;">numéro #3</a>. Avec quelque 75 millions de clients déjà à l'aise avec ce type d'outils, la fintech a les moyens de devenir un acteur qui compte dans la crypto européenne.
      </td></tr>
    </table>
    <p style="margin:0 0 22px 0; font-size:12px; color:#94a3b8;">Sources : PYMNTS, CoinDesk, Cointelegraph, crypto.news, Yahoo Finance</p>

    <p style="margin:0 0 6px 0; font-size:17px; font-weight:700;"><span style="color:#F5A623;">✦</span>&nbsp; La SEC a cessé d'attendre le Congrès et a écrit ses propres règles</p>
    <p style="margin:0 0 8px 0; font-size:16px; line-height:1.7;">Aux États-Unis, deux voies très différentes permettent d'encadrer la crypto :</p>
    <ul style="margin:0 0 14px 0; padding-left:20px; font-size:16px; line-height:1.7;">
      <li style="margin-bottom:6px;">une <strong>loi</strong> doit être votée par le Congrès — la Chambre, puis le Sénat ;</li>
      <li>un <strong>règlement</strong> est écrit par une agence, ici la SEC (le gendarme de la Bourse américaine), sans passer par le moindre vote parlementaire.</li>
    </ul>
    <p style="margin:0 0 15px 0; font-size:16px; line-height:1.7;">La loi attendue, c'est le <strong>Clarity Act</strong> : elle tranche qui surveille quoi entre la SEC et la CFTC (l'autorité des marchés de matières premières).</p>
    <p style="margin:0 0 15px 0; font-size:16px; line-height:1.7;">Adoptée par la Chambre, passée en commission au Sénat, elle n'a pas été votée avant l'été. Un vote est programmé le <strong>15 septembre</strong>, mais ce n'est pas le vote final : seulement l'autorisation d'ouvrir le débat, et elle exige <strong>60 voix</strong>.</p>
    <p style="margin:0 0 15px 0; font-size:16px; line-height:1.7;">Ce qui bloque est précis : le texte interdirait aux responsables fédéraux, <strong>président compris</strong>, d'émettre ou de parrainer un crypto-actif. Or Donald Trump a tiré <strong>plus de 1,4 milliard de dollars</strong> de la crypto en 2025 — près des deux tiers de ses revenus — notamment via World Liberty Financial, la société cofondée par des membres de sa famille. Des élus démocrates jugent la clause trop permissive : elle expirerait en 2029 et laisse, selon eux, assez d'échappatoires pour que rien ne change vraiment.</p>
    <p style="margin:0 0 15px 0; font-size:16px; line-height:1.7;">Le marché n'y croit plus : sur Polymarket, la probabilité d'une signature en 2026 est tombée à <strong>environ 15 %</strong>.</p>
    <p style="margin:0 0 8px 0; font-size:16px; line-height:1.7;">D'où la manœuvre du <strong>18 août</strong> : la SEC a proposé seule <strong>« Regulation Crypto Assets »</strong>, sa première grande réglementation crypto depuis dix ans. Deux mesures en ressortent :</p>
    <ul style="margin:0 0 14px 0; padding-left:20px; font-size:16px; line-height:1.7;">
      <li style="margin-bottom:6px;">une <strong>exemption de levée de fonds</strong> — un projet peut lever jusqu'à <strong>75 M$</strong> par période de 12 mois sans la procédure complète imposée aux titres financiers ;</li>
      <li>un <strong>safe harbor</strong> — passé un certain stade, la SEC s'engage à ne plus traiter le jeton d'un projet comme un titre financier.</li>
    </ul>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f3f6f6; border-radius:8px; margin:0 0 14px 0;"><tr><td style="padding:12px 16px; font-size:14px; line-height:1.6; color:#475569;">📖 <a href="https://www.cryptoluciole.com/glossaire/safe-harbor" style="color:#28B092; font-weight:700; text-decoration:none;">Safe harbor</a> — littéralement « port d'abri ». Vendre un titre financier aux États-Unis impose des obligations lourdes (prospectus, enregistrement, rapports), et la SEC considérait jusqu'ici que la plupart des jetons en relevaient. Le safe harbor fixe le moment où ça s'arrête : dès que le projet tourne <strong>sans dépendre du travail de son équipe fondatrice</strong>, son jeton cesse d'être traité comme un titre financier.</td></tr></table>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0fdf4; border-left:4px solid #28B092; border-radius:8px; margin-bottom:14px;">
      <tr><td style="padding:14px 18px; font-size:16px; line-height:1.65; color:#1A2332;">
        💡 <strong>Notre avis :</strong> le secteur obtient enfin des repères écrits, et c'est la vraie nouvelle : les projets américains pourront lever des fonds sans être traités d'office comme des titres financiers — donc davantage de jetons accessibles, dans un cadre plus lisible, y compris depuis l'Europe. Mais un règlement d'agence n'a pas le poids d'une loi : il est plus rapide à obtenir, et tout aussi rapide à défaire. La clarté existe donc, mais elle reste réversible.
      </td></tr>
    </table>
    <p style="margin:0; font-size:12px; color:#94a3b8;">Sources : SEC.gov (proposition du 18 août 2026) ; CoinDesk ; Latham &amp; Watkins ; Troutman ; Quartz ; Polymarket</p>
  </td></tr>

  <tr><td style="padding:26px 36px 0 36px;"><div style="border-top:1px solid #eef2f2;"></div></td></tr>

  <!-- ============ 3. PROTOCOLE / STRATÉGIE ============ -->
  <tr><td style="padding:24px 36px 0 36px;">
    <table role="presentation" cellpadding="0" cellspacing="0"><tr><td style="background-color:#e8f7f3; border-radius:30px; padding:6px 16px; font-size:12px; font-weight:700; color:#1d8870; letter-spacing:1.2px;">🔍 SOUS LA LOUPE</td></tr></table>
    <p style="margin:14px 0 16px 0; font-size:22px; font-weight:800; color:#1A2332;">Encaisser le funding <span style="color:#94a3b8; font-weight:600; font-size:18px;">sans s'exposer au prix du bitcoin</span></p>
  </td></tr>
  <tr><td style="padding:0 36px; color:#1A2332;">
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;"><strong style="color:#28B092;">Pour mémoire.</strong> On vient de le voir : sur les perp DEX qui fonctionnent avec des <em>funding fees</em>, comme Hyperliquid, dès que la demande penche d'un côté — pari à la hausse ou à la baisse — le camp majoritaire verse un <strong>funding</strong> à l'autre camp. Et comme les acheteurs sont majoritaires la plupart du temps, ce sont généralement eux qui paient.</p>
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;">D'où l'idée : <strong>se placer du côté qui encaisse</strong>. On va voir qu'il est possible de toucher ce rendement sans s'exposer à l'évolution du prix — c'est la stratégie dite <em>delta-neutre</em>, celle qu'on regarde ici.</p>
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;"><strong style="color:#28B092;">En bref, le terrain.</strong> Hyperliquid est aujourd'hui la plus grosse plateforme de contrats perpétuels : <strong>8,3 Md$ échangés en 24 h</strong> et près de <strong>10 Md$ de positions ouvertes</strong>. C'est là que le funding est le plus liquide. Particularité technique : son carnet d'ordres est entièrement inscrit sur la blockchain, pas sur les serveurs d'une société.</p>

    <p style="margin:18px 0 10px 0; font-size:16px; font-weight:800; color:#28B092;">Le scénario qui rend la stratégie intéressante</p>
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;">Quand le marché s'emballe et que tout le monde veut parier à la hausse, le funding grimpe — parfois beaucoup. Sur les six derniers mois chez Hyperliquid, il est monté jusqu'à <strong>33 % par an sur le bitcoin</strong>, et jusqu'à <strong>73 % par an sur l'ether</strong>.</p>
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;">À ces niveaux, être du côté vendeur rapporte gros. Le problème, c'est qu'être vendeur signifie normalement parier contre le bitcoin — et prendre le risque qu'il monte. Sauf si on annule ce risque.</p>

    <p style="margin:18px 0 10px 0; font-size:16px; font-weight:800; color:#28B092;">Comment marche la stratégie</p>
    <p style="margin:0 0 8px 0; font-size:16px; line-height:1.7;">Deux positions, ouvertes en même temps, pour le même montant :</p>
    <ul style="margin:0 0 14px 0; padding-left:20px; font-size:16px; line-height:1.7;">
      <li style="margin-bottom:6px;">une position <strong>vendeuse</strong> (<em>short</em>) sur le perp bitcoin, chez Hyperliquid ;</li>
      <li>un achat de <strong>bitcoin au comptant</strong>, sur une plateforme d'échange — Kraken ou Binance, par exemple.</li>
    </ul>
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;">Si le bitcoin monte, le short perd exactement ce que le bitcoin gagne. S'il baisse, l'inverse. Les deux jambes s'annulent : <strong>tu n'es plus exposé au prix</strong>. C'est ce qu'on appelle être <em>delta-neutre</em>.</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f3f6f6; border-radius:8px; margin:0 0 14px 0;"><tr><td style="padding:12px 16px; font-size:14px; line-height:1.6; color:#475569;">📖 <a href="https://www.cryptoluciole.com/glossaire/delta-neutre" style="color:#28B092; font-weight:700; text-decoration:none;">Delta-neutre</a> — une combinaison de positions construite pour que le mouvement du prix n'ait plus d'effet sur le résultat. « Neutre au prix » ne veut pas dire « sans risque » : ce qui reste, ce sont les risques d'exécution et de plateforme.</td></tr></table>
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;">Ce qui n'est pas annulé, en revanche, c'est le <strong>funding</strong> : il continue de tomber sur la jambe vendeuse, quoi qu'il arrive au prix.</p>
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;"><strong>Le calcul, avec des chiffres ronds.</strong> Tu achètes <strong>10 000 $</strong> de bitcoin au comptant, et tu déposes <strong>2 000 $</strong> de marge chez Hyperliquid pour ouvrir un short de 10 000 $ (levier 5×). Capital total engagé : <strong>12 000 $</strong> (10 000 + 2 000).</p>
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;">Le levier ne sert pas ici à amplifier le gain — il est déjà annulé par la jambe au comptant — mais à éviter d'immobiliser 10 000 $ de plus. Le funding se calcule en effet sur la <strong>taille de la position</strong> (10 000 $), pas sur la marge déposée : avec 2 000 $, on encaisse donc les frais portant sur 10 000 $.</p>
    <ul style="margin:0 0 14px 0; padding-left:20px; font-size:16px; line-height:1.7;">
      <li style="margin-bottom:6px;">le bitcoin monte de 10 % : +1 000 $ au comptant sur Binance, −1 000 $ sur le short chez Hyperliquid. <strong>Résultat : 0.</strong></li>
      <li style="margin-bottom:6px;">il baisse de 10 % : −1 000 $ au comptant, +1 000 $ sur le short. <strong>Résultat : 0.</strong></li>
      <li>pendant ce temps, le funding tombe sur la jambe vendeuse (le short chez Hyperliquid).</li>
    </ul>
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;">En contrepartie du levier, une limite à connaître avant d'ouvrir : à 5×, une hausse de <strong>20 %</strong> du bitcoin liquide la position vendeuse (la règle 100 ÷ ton levier, vue plus haut).</p>

    <p style="margin:18px 0 10px 0; font-size:16px; font-weight:800; color:#28B092;">Le rendement</p>
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;">Reprenons le scénario favorable. Avec un funding à <strong>30 % par an</strong>, la position de 10 000 $ rapporte <strong>3 000 $ sur un an</strong> — soit <strong>25 %</strong> des 12 000 $ réellement immobilisés (3 000 ÷ 12 000). Très au-dessus de ce que rapporte un stablecoin déposé sur un protocole de prêt.</p>
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;">Sauf que ces niveaux ne durent pas. Sur les six derniers mois, le funding du bitcoin chez Hyperliquid a rapporté <strong>4,2 % par an en moyenne</strong>, et il est resté <strong>négatif un quart du temps</strong> — c'est-à-dire que le vendeur payait, au lieu d'encaisser.</p>
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;">Autrement dit : <strong>le rendement existe vraiment, mais il est irrégulier.</strong> C'est une stratégie d'opportunité, à ouvrir quand le funding est haut.</p>
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;">Deux nuances utiles : certains actifs offrent un funding plus stable que d'autres, et les taux varient fortement d'une plateforme à l'autre. Il y a de très belles opérations à faire — à condition de les surveiller de près.</p>

    <p style="margin:18px 0 10px 0; font-size:16px; line-height:1.7;"><strong style="color:#28B092;">Les risques.</strong>&nbsp; <span style="background-color:#fef9c3; color:#a16207; font-weight:700; font-size:13px; padding:3px 10px; border-radius:20px;">🟡 Moyen</span></p>
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;">Pourquoi « moyen » et pas « élevé » ? Parce que le risque principal en crypto — celui du prix — est justement neutralisé. Et même le pire scénario reste amorti : si le short est liquidé parce que le bitcoin s'envole, tu perds ta marge, mais ton bitcoin au comptant a gagné autant en face. Tu n'as pas perdu ton capital, tu as perdu ta couverture.</p>
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;">Ce qui l'empêche d'être « faible », c'est le reste : neutraliser le prix ne neutralise ni les plateformes, ni le rendement.</p>
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;">⚠️ Et ce niveau suppose une <strong>exécution correcte</strong> : deux jambes strictement de même taille, ouvertes en même temps, et une marge surveillée. Si les montants ne se compensent pas exactement, ou si on laisse filer la marge du short, la couverture n'est plus entière — et il ne reste qu'une position à levier ordinaire, avec le risque qui va avec.</p>
    <ul style="margin:0 0 14px 0; padding-left:20px; font-size:16px; line-height:1.7;">
      <li style="margin-bottom:6px;"><strong>Le funding peut s'inverser.</strong> S'il devient négatif, c'est toi qui paies. Le rendement peut fondre.</li>
      <li style="margin-bottom:6px;"><strong>La jambe vendeuse peut être liquidée.</strong> Dans l'exemple à 5×, une hausse de 20 % du bitcoin y suffit — et comme les deux jambes sont sur deux plateformes différentes, le gain sur le comptant ne vient <strong>pas</strong> renflouer automatiquement la marge du short. Tu te retrouves alors avec du bitcoin non couvert, donc de nouveau exposé au prix, sans t'en rendre compte tout de suite. Les deux parades : garder une réserve de marge non engagée à remettre avant le seuil, ou baisser le levier.</li>
      <li><strong>Double risque de plateforme.</strong> Les fonds sont exposés des deux côtés à la fois, chez Hyperliquid et sur la plateforme d'échange où le bitcoin est conservé.</li>
    </ul>

    <p style="margin:18px 0 10px 0; font-size:16px; font-weight:800; color:#28B092;">Pourquoi ça compte</p>
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;">C'est exactement la stratégie qu'on a présentée dans le <a href="https://www.cryptoluciole.com/numeros/3" style="color:#28B092; font-weight:600;">numéro #3</a> avec <strong>Ethena</strong> : détenir l'actif au comptant, le shorter en perp, encaisser le funding.</p>
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;">Ethena n'a rien inventé : elle a industrialisé l'opération à grande échelle et emballé le résultat dans un jeton, l'USDe. Le funding est la matière première d'un des plus gros protocoles du secteur.</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0fdf4; border-left:4px solid #28B092; border-radius:8px; margin-bottom:14px;">
      <tr><td style="padding:14px 18px; font-size:16px; line-height:1.65; color:#1A2332;">
        💡 <strong>Notre avis :</strong> en théorie : deux positions, un rendement, zéro exposition au prix. En pratique, un particulier doit tenir deux comptes sur deux plateformes, surveiller une marge qui se dégrade dès que le bitcoin monte fort, et remettre de l'argent au bon moment — sachant que le taux qui justifiait toute l'opération peut disparaître entre-temps.<br><br>
        Comprendre le mécanisme a une vraie valeur : c'est la clé de lecture de tout un pan de la DeFi, Ethena en tête. Le mettre en œuvre soi-même est un exercice qui demande un suivi particulier.
      </td></tr>
    </table>
    <p style="margin:14px 0 0 0; font-size:16px; line-height:1.7;"><a href="https://www.cryptoluciole.com/protocoles/hyperliquid" style="color:#28B092; font-weight:700; text-decoration:none;">→ Voir la fiche complète d'Hyperliquid</a></p>
  </td></tr>

  <tr><td style="padding:26px 36px 0 36px;"><div style="border-top:1px solid #eef2f2;"></div></td></tr>

  <!-- ============ 4. COURS ============ -->
  <tr><td style="padding:24px 36px 0 36px;">
    <table role="presentation" cellpadding="0" cellspacing="0"><tr>
      <td style="background-color:#eef0ff; border-radius:30px; padding:6px 16px; font-size:12px; font-weight:700; color:#4338ca; letter-spacing:1.2px;">📊 LES REPÈRES</td>
      <td style="padding-left:12px; font-size:12px; color:#94a3b8; white-space:nowrap;">au 28 août 2026</td>
    </tr></table>
  </td></tr>
  <tr><td style="padding:16px 36px 0 36px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #eef2f2; border-radius:12px; overflow:hidden;">
      <tr style="background-color:#1A2332;">
        <td style="padding:11px 14px; font-size:12px; font-weight:600; color:#94a3b8; letter-spacing:0.5px;">ACTIF</td>
        <td align="right" style="padding:11px 14px; font-size:12px; font-weight:600; color:#94a3b8; letter-spacing:0.5px;">PRIX</td>
        <td align="right" style="padding:11px 14px; font-size:12px; font-weight:600; color:#94a3b8; letter-spacing:0.5px;">7 J</td>
        <td align="right" style="padding:11px 14px; font-size:12px; font-weight:600; color:#94a3b8; letter-spacing:0.5px;">DEPUIS LE #3</td>
      </tr>
      <tr><td style="padding:13px 14px; font-size:16px; color:#1A2332;"><strong style="color:#16a34a;">BTC</strong> <span style="color:#94a3b8;">Bitcoin</span></td><td align="right" style="padding:13px 14px; font-size:16px; font-weight:700; color:#1A2332;">~79 415 $</td><td align="right" style="padding:13px 14px; font-size:15px; font-weight:700; color:#16a34a;">▲ +2,2 %</td><td align="right" style="padding:13px 14px; font-size:15px; font-weight:700; color:#16a34a;">▲ +25 %</td></tr>
      <tr style="background-color:#f7fafa;"><td style="padding:13px 14px; font-size:16px; color:#1A2332;"><strong style="color:#16a34a;">ETH</strong> <span style="color:#94a3b8;">Ethereum</span></td><td align="right" style="padding:13px 14px; font-size:16px; font-weight:700; color:#1A2332;">~2 491 $</td><td align="right" style="padding:13px 14px; font-size:15px; font-weight:700; color:#16a34a;">▲ +4,2 %</td><td align="right" style="padding:13px 14px; font-size:15px; font-weight:700; color:#16a34a;">▲ +39 %</td></tr>
      <tr><td style="padding:13px 14px; font-size:16px; color:#1A2332;"><strong style="color:#16a34a;">SOL</strong> <span style="color:#94a3b8;">Solana</span></td><td align="right" style="padding:13px 14px; font-size:16px; font-weight:700; color:#1A2332;">~106,5 $</td><td align="right" style="padding:13px 14px; font-size:15px; font-weight:700; color:#16a34a;">▲ +16,8 %</td><td align="right" style="padding:13px 14px; font-size:15px; font-weight:700; color:#16a34a;">▲ +30 %</td></tr>
      <tr style="background-color:#f7fafa;"><td style="padding:13px 14px; font-size:16px; color:#1A2332;"><strong style="color:#16a34a;">HYPE</strong> <span style="color:#94a3b8;">Hyperliquid</span></td><td align="right" style="padding:13px 14px; font-size:16px; font-weight:700; color:#1A2332;">~83,3 $</td><td align="right" style="padding:13px 14px; font-size:15px; font-weight:700; color:#16a34a;">▲ +12,8 %</td><td align="right" style="padding:13px 14px; font-size:15px; font-weight:700; color:#16a34a;">▲ +19 %</td></tr>
      <tr><td style="padding:13px 14px; font-size:16px; color:#1A2332;"><strong style="color:#16a34a;">BNB</strong></td><td align="right" style="padding:13px 14px; font-size:16px; font-weight:700; color:#1A2332;">~705 $</td><td align="right" style="padding:13px 14px; font-size:15px; font-weight:700; color:#16a34a;">▲ +5,0 %</td><td align="right" style="padding:13px 14px; font-size:15px; font-weight:700; color:#16a34a;">▲ +23 %</td></tr>
    </table>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0fdf4; border-left:4px solid #28B092; border-radius:8px; margin-top:14px;">
      <tr><td style="padding:14px 18px; font-size:16px; line-height:1.6; color:#1A2332;">
        💡 <strong>Notre avis :</strong> deux lectures très différentes selon la colonne. Sur sept jours, le bitcoin ne fait que consolider : le gros du mouvement date de la semaine précédente, quand la SEC a publié ses propres règles le 18 août. Solana et Hyperliquid, eux, continuent de grimper — signe classique d'un appétit pour le risque qui se déplace vers les actifs plus nerveux.<br><br>
        Mais c'est la colonne de droite qui raconte l'été : <strong>tout est en hausse de 19 à 39 % depuis notre dernier numéro</strong>. Si tu étais en vacances, tu as raté un marché qui a effacé toute la baisse du printemps.
      </td></tr>
    </table>
    <p style="margin:8px 0 0 0; font-size:11px; line-height:1.5; color:#94a3b8;">Prix au 28 août 2026 ; variations sur 7 jours et depuis le numéro #3 du 4 juillet 2026 (DeFiLlama / CoinGecko).</p>
  </td></tr>

  <!-- DATA DE LA SEMAINE -->
  <tr><td style="padding:24px 36px 0 36px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#1A2332; background:linear-gradient(135deg,#1A2332,#2e1b8b); border-radius:14px;">
      <tr><td style="padding:22px 24px;">
        <div style="font-size:12px; font-weight:700; color:#F5A623; letter-spacing:1.2px; margin-bottom:8px;">💡 ÇA BRILLE</div>
        <div style="font-size:24px; font-weight:800; color:#ffffff; margin-bottom:10px; line-height:1.3;">Sur 5 dollars qui entrent dans un ETF Ethereum, 4 vont chez BlackRock</div>
        <div style="font-size:14px; line-height:1.7; color:#cbd5e1; margin-bottom:12px;">Les ETF Ethereum américains viennent d'enchaîner <strong style="color:#ffffff;">9 séances positives d'affilée</strong>. La dernière, mercredi, a été la plus forte du mois : <strong style="color:#ffffff;">234 millions de dollars</strong> en une journée. Sur l'ensemble d'août, ces fonds ont attiré <strong style="color:#ffffff;">1,66 milliard de dollars</strong>.</div>
        <div style="font-size:14px; line-height:1.7; color:#cbd5e1; margin-bottom:12px;">Mais l'essentiel n'est pas le montant — c'est <strong style="color:#ffffff;">qui l'encaisse</strong>. Le 24 août, sur 116 millions de dollars entrés dans l'ensemble des ETF Ethereum, <strong style="color:#ffffff;">90,9 millions sont allés dans un seul fonds</strong> : l'ETHA de BlackRock. Soit près de 80 %. Même schéma sur la semaine du 17 au 21 août : 697 millions d'entrées, dont 537 pour BlackRock.</div>
        <div style="font-size:14px; line-height:1.7; color:#cbd5e1;">Ce flux a alimenté la remontée de l'ether cet été (voir <em>Les repères</em>). Mais il dit aussi autre chose : l'argent institutionnel qui arrive sur l'ethereum ne se répartit pas entre une dizaine d'acteurs. Il se concentre chez un seul gestionnaire, qui devient mécaniquement l'un des plus gros détenteurs d'ether de la planète.</div>
      </td></tr>
    </table>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0fdf4; border-left:4px solid #28B092; border-radius:8px; margin-top:14px;">
      <tr><td style="padding:14px 18px; font-size:16px; line-height:1.6; color:#1A2332;">
        💡 <strong>Notre avis :</strong> ces flux sont une bonne nouvelle pour le cours, et une nouvelle plus nuancée pour le réseau. L'ether logé dans l'ETHA — le fonds qui capte ces entrées — ne sécurise pas la blockchain et ne circule pas dans la DeFi : il dort chez un dépositaire. La SEC l'avait imposé à son lancement, en 2024.<br><br>
        Ça vient de changer : depuis mars, BlackRock exploite un second fonds, l'<strong>ETHB</strong>, lancé en mars, qui met bien ses ethers en staking et reverse 82 % des récompenses à ses porteurs — de l'ordre de 2,6 % par an après frais. Le capital institutionnel commence donc à participer au réseau, au lieu de simplement le regarder.
      </td></tr>
    </table>
    <p style="margin:8px 0 0 0; font-size:11px; line-height:1.5; color:#94a3b8;">Flux nets des ETF Ethereum spot américains, arrêtés au 27 août 2026 (SoSoValue). Ventilation par émetteur : séance du 24 août et semaine du 17 au 21 août.</p>
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
        <td style="font-size:16px; line-height:1.6;"><a href="https://www.cryptoluciole.com/glossaire/open-interest" style="color:#28B092; font-weight:700; text-decoration:none;">Open interest</a> (positions ouvertes) — le montant total des paris encore ouverts sur un marché, à un instant donné. À ne pas confondre avec le volume : le volume dit combien on a échangé sur la journée, l'open interest dit combien d'argent est <strong>toujours engagé</strong>. Un volume élevé avec un open interest qui baisse signale que les traders soldent leurs positions ; un open interest qui grimpe signale au contraire que de l'argent frais entre — et que les liquidations potentielles grossissent d'autant.</td>
      </tr>
    </table>
  </td></tr>
  <tr><td style="padding:14px 36px 0 36px; color:#1A2332;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td valign="top" width="20" style="font-size:16px; color:#F5A623; line-height:1.6;">•</td>
        <td style="font-size:16px; line-height:1.6;"><a href="https://www.cryptoluciole.com/glossaire/oracle" style="color:#28B092; font-weight:700; text-decoration:none;">Oracle</a> — le mécanisme qui apporte à une blockchain une information qu'elle ne peut pas connaître seule, à commencer par le prix d'un actif. Une blockchain ne « voit » pas le cours du bitcoin : il faut le lui livrer. Les principaux fournisseurs sont <strong>Chainlink</strong>, de loin le plus utilisé — il alimente Aave, Compound et l'essentiel de la DeFi —, <strong>Pyth</strong>, spécialisé dans les mises à jour en moins d'une seconde, ce qui en fait la référence des plateformes de perps, ainsi que <strong>RedStone</strong> et <strong>Chronicle</strong>.</td>
      </tr>
    </table>
  </td></tr>

  <!-- ============ À TOI DE JOUER ============ -->
  <tr><td style="padding:26px 36px 28px 36px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f7fafa; border-radius:12px;">
      <tr><td style="padding:18px 22px; font-size:15px; line-height:1.7; color:#475569;">
        <strong style="color:#1A2332;">✉️ À toi de jouer</strong><br>
        Une question sur ce numéro, un point qui reste flou, un sujet que tu aimerais qu'on creuse — ou simplement besoin d'un coup de main pour t'y retrouver ?<br><br>
        <strong style="color:#1A2332;">Réponds directement à ce mail.</strong> Il arrive dans une vraie boîte, je lis tout, et je réponds.
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
