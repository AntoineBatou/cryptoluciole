import type { IssueEmail } from "../types";

// ===== Numéro #2 — version email (charte CryptoLuciole) =====
// Même squelette que issue-01 : on ne reconstruit pas la structure, on remplit.
// Le lien de désinscription est le placeholder %UNSUBSCRIBE_URL% (voir latest.ts).
export const issue02: IssueEmail = {
  number: 2,
  subject: "CryptoLuciole #2 — Le restaking, décrypté",
  html: `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>CryptoLuciole #2</title>
<!--[if mso]><style>*{font-family:Arial,sans-serif!important;}</style><![endif]-->
</head>
<body style="margin:0; padding:0; background-color:#EEF2F2; -webkit-text-size-adjust:100%;">
<div style="display:none; max-height:0; overflow:hidden; opacity:0; color:#EEF2F2; font-size:1px;">
Cette semaine : c'est quoi le restaking, Backpack lance les vraies actions tokenisées, Binance face au compte à rebours MiCA, et un protocole qui fait travailler tes stablecoins dans l'assurance.
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
      <p style="margin:0; font-size:12px; font-weight:600; color:#94a3b8; letter-spacing:0.6px;">#2 · MERCREDI 24 JUIN 2026</p>
      <h1 style="margin:6px 0 0 0; font-size:26px; font-weight:800; color:#1A2332; line-height:1.25;">Le restaking, décrypté</h1>
    </td>
  </tr>

  <!-- ============ INTRO ============ -->
  <tr>
    <td style="padding:20px 36px 10px 36px; color:#1A2332;">
      <p style="margin:0 0 16px 0; font-size:16px; line-height:1.65;">Bonjour 👋,</p>
      <p style="margin:0 0 18px 0; font-size:16px; line-height:1.65;">
        Cette semaine, on regarde comment gagner un rendement <em>« par-dessus »</em> son Ethereum (le <strong>restaking</strong>), les premières <strong>vraies actions de bourse</strong> achetables sur blockchain, le <strong>compte à rebours réglementaire</strong> qui menace Binance en Europe, et un protocole qui fait travailler tes stablecoins dans un coin inattendu : <strong>l'assurance</strong>. Comme toujours : pas l'actu brute, le <em>comment ça marche</em>.
      </p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f7fafa; border-radius:12px;">
        <tr><td style="padding:18px 22px; font-size:15px; line-height:2; color:#475569;">
          <strong style="color:#1A2332;">Au menu :</strong><br>
          🔦 <strong>On éclaire</strong> — une notion, simplement<br>
          ✨ <strong>Dans le faisceau</strong> — les actus + notre analyse<br>
          🔍 <strong>Sous la loupe</strong> — un protocole décrypté<br>
          📊 <strong>Les repères</strong> — les cours du moment<br>
          📖 <strong>Définitions</strong> — les mots du secteur
        </td></tr>
      </table>
    </td>
  </tr>

  <!-- ============ 1. NOTION ============ -->
  <tr><td style="padding:28px 36px 0 36px;">
    <table role="presentation" cellpadding="0" cellspacing="0"><tr><td style="background-color:#e8f7f3; border-radius:30px; padding:6px 16px; font-size:12px; font-weight:700; color:#1d8870; letter-spacing:1.2px;">🔦 ON ÉCLAIRE</td></tr></table>
    <p style="margin:14px 0 16px 0; font-size:22px; font-weight:800; color:#1A2332;">Le <em style="color:#28B092; font-style:normal;">restaking</em>, en clair</p>
  </td></tr>
  <tr><td style="padding:0 36px; color:#1A2332;">
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;"><strong style="color:#F5A623;">⬡ Rappel : le staking.</strong> Sur Ethereum, tu peux bloquer tes ethers pour aider à sécuriser le réseau ; en échange, tu touches une récompense (~2,6 % par an aujourd'hui chez Lido), un peu comme un livret d'épargne. Les acteurs qui font ce travail s'appellent les <em>validateurs</em>. (On a tout détaillé dans notre <a href="https://www.cryptoluciole.com/numeros/1" style="color:#28B092; font-weight:600;">premier numéro</a>.)</p>
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;"><strong style="color:#F5A623;">⬡ Le principe.</strong> Le restaking va un cran plus loin : on reprend des ethers <em>déjà</em> mis en staking et on les réutilise pour sécuriser, en plus, d'autres services qu'on appelle des <strong>AVS</strong> (de jeunes projets — ponts, oracles… — qui « louent » la sécurité d'Ethereum). Le même capital sert deux fois, d'où un rendement supplémentaire. Le protocole leader est <strong>EigenLayer</strong> (~94 % du marché).</p>
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;"><strong style="color:#F5A623;">⬡ En pratique.</strong> Tu stakes tes ethers via un protocole comme Lido et tu reçois un jeton liquide (un <strong>LST</strong>), le <strong>stETH</strong>. Tu déposes ce stETH dans EigenLayer (le restaking) pour sécuriser des AVS contre une prime. Souvent, tu passes par un protocole de restaking (ether.fi, Renzo, Kelp…) qui te remet encore un nouveau jeton, un <strong>LRT</strong> (ex. eETH), lui aussi liquide — que tu peux replacer ailleurs en DeFi.</p>
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;"><strong style="color:#F5A623;">⬡ Combien ça rapporte.</strong> En théorie : ~2,6 % de base + 1 à 3 % de prime de restaking, soit ~4 à 6 %. En pratique, l'écart est minime : un jeton de restaking comme l'eETH tourne autour de <strong>3 %</strong>, à peine au-dessus du simple staking. La prime promise existe surtout sur le papier, et elle est souvent versée en points ou en jetons plutôt qu'en vrais revenus.</p>
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;"><strong style="color:#F5A623;">⬡ Les risques.</strong> Le principal est le <em>slashing</em> : la sanction d'un validateur qui se comporte mal, qui te coûte une partie de tes fonds. Tu délègues à un opérateur, donc tu ne gères rien toi-même ; le risque, c'est que cet opérateur fasse n'importe quoi. En pratique ce risque est quasi inexistant à ce jour (aucun cas recensé chez les opérateurs sérieux depuis son activation en avril 2025), mais pas nul. S'ajoutent l'empilement de risques et l'immaturité du secteur : la TVL du restaking a fondu d'environ 15-20 Md$ en début d'année à ~5 Md$ à la mi-2026.</p>
    <p style="margin:0 0 4px 0; font-size:16px; line-height:1.7;"><strong style="color:#F5A623;">⬡ Notre avis.</strong> Pour le moment, le restaking <strong>ne vaut pas le coup</strong> : le surplus de rendement (~0,3 point dans notre exemple) ne justifie pas un risque plus élevé et plus difficile à évaluer qu'un simple staking. En revanche, le staking simple, lui, <strong>vaut le coup</strong> : peu risqué et éprouvé, il rapporte un rendement natif sur tes ethers à moindre risque. Si tu débutes, commence par là.</p>
  </td></tr>

  <tr><td style="padding:26px 36px 0 36px;"><div style="border-top:1px solid #eef2f2;"></div></td></tr>

  <!-- ============ 2. ACTUS ============ -->
  <tr><td style="padding:24px 36px 0 36px;">
    <table role="presentation" cellpadding="0" cellspacing="0"><tr><td style="background-color:#fff4e0; border-radius:30px; padding:6px 16px; font-size:12px; font-weight:700; color:#b9770f; letter-spacing:1.2px;">✨ DANS LE FAISCEAU</td></tr></table>
  </td></tr>
  <tr><td style="padding:18px 36px 0 36px; color:#1A2332;">
    <p style="margin:0 0 6px 0; font-size:17px; font-weight:700;"><span style="color:#F5A623;">✦</span>&nbsp; Backpack lance les premières vraies actions tokenisées</p>
    <p style="margin:0 0 12px 0; font-size:16px; line-height:1.7;">
      Tout part de l'<strong>IPO</strong> (introduction en bourse) de SpaceX. Lancée à 135 $, l'action a flambé jusqu'à 225 $ le 16 juin, propulsant brièvement l'entreprise au rang de <strong>5e valorisation mondiale</strong>, devant Amazon ; depuis, elle est retombée autour de 160 $. La frénésie a débordé sur la blockchain : les volumes d'<strong>actions tokenisées</strong> (des actions classiques représentées par un jeton, échangeables 24h/24 sans courtier) ont explosé sur Solana. <strong>Backpack a capté 74 % du volume</strong> le 16 juin (plus de 105 M$ à elle seule). L'exploit, c'est la nature du produit : là où xStocks ou Ondo ne proposaient que des emballages synthétiques, Backpack offre une <strong>vraie propriété</strong> de l'action, encadrée par le droit de l'État de New York. Concrètement : tu touches de vrais dividendes (versés on-chain en stablecoin), tu peux transférer tes actions vers un vrai courtier, et les échanger 1:1 contre la vraie action.
    </p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0fdf4; border-left:4px solid #28B092; border-radius:8px; margin-bottom:14px;">
      <tr><td style="padding:14px 18px; font-size:16px; line-height:1.6; color:#1A2332;">
        💡 <strong>Notre avis :</strong> c'est un vrai jalon. La grande objection aux actions on-chain — pourquoi acheter ici plutôt que chez un courtier régulé ? — trouve enfin une réponse : on possède réellement l'action, pas une copie synthétique. En revanche, nous ne recommandons pas d'investir dans SpaceX à ce stade : sa valorisation est déjà très élevée et la baisse amorcée (de 225 $ à ~160 $) pourrait se poursuivre à court terme.
      </td></tr>
    </table>
    <p style="margin:0 0 22px 0; font-size:12px; color:#94a3b8;">Source : CoinAcademy, The Block, The DeFi Investor</p>

    <p style="margin:0 0 6px 0; font-size:17px; font-weight:700;"><span style="color:#F5A623;">✦</span>&nbsp; Binance face à MiCA : le géant peut-il vraiment être bloqué en Europe ?</p>
    <p style="margin:0 0 12px 0; font-size:16px; line-height:1.7;">
      Le 30 juin 2026, le régime transitoire s'achève : à partir du 1er juillet, toute plateforme crypto sans <strong>agrément MiCA</strong> ne pourra plus, légalement, servir les résidents de l'UE. Le principe : une plateforme obtient un agrément dans un seul pays, qui lui sert de <strong>passeport</strong> pour les 27. Or Binance, n°1 mondial, n'a toujours pas cet agrément. Selon plusieurs enquêtes, elle aurait d'abord visé la Grèce (refus du régulateur), et la Banque centrale européenne aurait exprimé de fortes réserves. D'après certaines rumeurs, elle chercherait désormais à se rapprocher de la <strong>France</strong> — un chemin difficile : la France est l'un des régulateurs les plus stricts d'Europe, et Binance y fait l'objet d'une enquête judiciaire pour blanchiment d'argent aggravé. Côté « too big to fail », MiCA ne prévoit aucune exception liée à la taille.
    </p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0fdf4; border-left:4px solid #28B092; border-radius:8px; margin-bottom:14px;">
      <tr><td style="padding:14px 18px; font-size:16px; line-height:1.65; color:#1A2332;">
        💡 <strong>Notre avis :</strong> pas de panique, mais pas d'aveuglement. Nous ne te disons pas de quitter Binance — la situation peut se dénouer en quelques jours. Mais l'asymétrie est réelle : une échéance ferme + un agrément en suspens = un risque opérationnel concret (en cas de blocage, une plateforme peut geler temporairement les retraits le temps de se mettre en règle). Le bon réflexe : vérifier le statut réglementaire de ta plateforme principale, et savoir à l'avance ce que tu ferais.
      </td></tr>
    </table>
    <p style="margin:0; font-size:12px; color:#94a3b8;">Source : CoinAcademy, Finance Magnates, The Block</p>
  </td></tr>

  <tr><td style="padding:26px 36px 0 36px;"><div style="border-top:1px solid #eef2f2;"></div></td></tr>

  <!-- ============ 3. PROTOCOLE ============ -->
  <tr><td style="padding:24px 36px 0 36px;">
    <table role="presentation" cellpadding="0" cellspacing="0"><tr><td style="background-color:#e8f7f3; border-radius:30px; padding:6px 16px; font-size:12px; font-weight:700; color:#1d8870; letter-spacing:1.2px;">🔍 SOUS LA LOUPE</td></tr></table>
    <p style="margin:14px 0 16px 0; font-size:22px; font-weight:800; color:#1A2332;">Re Protocol <span style="color:#94a3b8; font-weight:600; font-size:18px;">(reUSD &amp; reUSDe)</span></p>
  </td></tr>
  <tr><td style="padding:0 36px; color:#1A2332;">
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;"><strong style="color:#28B092;">En bref.</strong> Re est un <em>réassureur</em> sur blockchain : ton argent sert de matelas de sécurité à de vraies compagnies d'assurance, et en échange tu touches une part des primes qu'elles encaissent.</p>
    <p style="margin:0 0 8px 0; font-size:16px; line-height:1.7;"><strong style="color:#28B092;">Comment ça marche.</strong></p>
    <ul style="margin:0 0 14px 0; padding-left:20px; font-size:16px; line-height:1.7;">
      <li style="margin-bottom:6px;">La réassurance, c'est « l'assurance des assureurs » : une compagnie d'assurance encaisse des primes mais redoute les mauvaises années ; pour ne pas couler, elle transfère une partie de son risque (et des primes) à un réassureur.</li>
      <li style="margin-bottom:6px;">Avec Re, c'est toi le réassureur : tu déposes des dollars numériques (un stablecoin comme l'USDC), et ton dépôt sert de réserve de sécurité pour de vraies assurances (auto, responsabilité d'entreprises…). En attendant d'être mobilisé, il rapporte un petit rendement de base.</li>
      <li>Tu peux investir de deux façons selon le jeton choisi : <strong>reUSD</strong> (prudent, capital protégé en priorité) ou <strong>reUSDe</strong> (risqué, premier à éponger les pertes mais bien mieux payé). En coulisses, ce sont deux « tranches » (voir Définitions).</li>
    </ul>
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;"><strong style="color:#28B092;">Le rendement.</strong> reUSD : <strong>~6,7 % par an</strong>. reUSDe : <strong>~12 % par an</strong> (variable). Ce rendement plus élevé n'est pas magique : c'est la rémunération du risque de sinistre. Tant qu'il n'y a pas trop de sinistres, reUSDe paie davantage ; une mauvaise année, il absorbe les pertes.</p>
    <p style="margin:0 0 10px 0; font-size:16px; line-height:1.7;"><strong style="color:#28B092;">Les risques.</strong>&nbsp; <span style="background-color:#fef9c3; color:#a16207; font-weight:700; font-size:13px; padding:3px 10px; border-radius:20px;">🟡 reUSD&nbsp;: moyen</span>&nbsp; <span style="background-color:#fee2e2; color:#b91c1c; font-weight:700; font-size:13px; padding:3px 10px; border-radius:20px;">🔴 reUSDe&nbsp;: élevé</span></p>
    <p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;">Si une mauvaise année de sinistres survient, la réserve doit payer et une partie de ton dépôt peut être consommée. En cas de sinistre, ce sont d'abord les détenteurs de <strong>reUSDe</strong> qui perdent ; si la perte est trop grosse, on rabote ensuite les détenteurs de <strong>reUSD</strong>. Et comme pour tout protocole DeFi, le risque de hack reste inhérent au secteur.</p>
    <p style="margin:0; font-size:16px; line-height:1.7;"><strong style="color:#28B092;">Pourquoi ça compte.</strong> En DeFi, la plupart des rendements viennent de jetons distribués gratuitement, qui finissent souvent par s'effondrer. Ici, l'argent vient d'une <em>vraie activité économique</em> : l'assurance. À notre avis, Re peut être une bonne piste de diversification pour faire travailler ses stablecoins au-delà des stratégies classiques : son rendement dépend de la sinistralité des assurances, pas des mêmes facteurs que le reste de la DeFi. À doser, surtout pour reUSDe : un rendement de 12 % n'est jamais un cadeau, c'est le prix d'un risque.</p>
  </td></tr>

  <tr><td style="padding:26px 36px 0 36px;"><div style="border-top:1px solid #eef2f2;"></div></td></tr>

  <!-- ============ 4. COURS ============ -->
  <tr><td style="padding:24px 36px 0 36px;">
    <table role="presentation" cellpadding="0" cellspacing="0"><tr>
      <td style="background-color:#eef0ff; border-radius:30px; padding:6px 16px; font-size:12px; font-weight:700; color:#4338ca; letter-spacing:1.2px;">📊 LES REPÈRES</td>
      <td style="padding-left:12px; font-size:12px; color:#94a3b8; white-space:nowrap;">au 24 juin 2026</td>
    </tr></table>
  </td></tr>
  <tr><td style="padding:16px 36px 0 36px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #eef2f2; border-radius:12px; overflow:hidden;">
      <tr style="background-color:#1A2332;">
        <td style="padding:11px 18px; font-size:12px; font-weight:600; color:#94a3b8; letter-spacing:0.5px;">ACTIF</td>
        <td align="right" style="padding:11px 18px; font-size:12px; font-weight:600; color:#94a3b8; letter-spacing:0.5px;">PRIX</td>
        <td align="right" style="padding:11px 18px; font-size:12px; font-weight:600; color:#94a3b8; letter-spacing:0.5px;">7 JOURS</td>
      </tr>
      <tr><td style="padding:13px 18px; font-size:16px; color:#1A2332;"><strong style="color:#dc2626;">BTC</strong> <span style="color:#94a3b8;">Bitcoin</span></td><td align="right" style="padding:13px 18px; font-size:16px; font-weight:700; color:#1A2332;">~62 545 $</td><td align="right" style="padding:13px 18px; font-size:15px; font-weight:700; color:#dc2626;">▼ -4,7 %</td></tr>
      <tr style="background-color:#f7fafa;"><td style="padding:13px 18px; font-size:16px; color:#1A2332;"><strong style="color:#dc2626;">ETH</strong> <span style="color:#94a3b8;">Ethereum</span></td><td align="right" style="padding:13px 18px; font-size:16px; font-weight:700; color:#1A2332;">~1 662 $</td><td align="right" style="padding:13px 18px; font-size:15px; font-weight:700; color:#dc2626;">▼ -7,2 %</td></tr>
      <tr><td style="padding:13px 18px; font-size:16px; color:#1A2332;"><strong style="color:#dc2626;">SOL</strong> <span style="color:#94a3b8;">Solana</span></td><td align="right" style="padding:13px 18px; font-size:16px; font-weight:700; color:#1A2332;">~69,4 $</td><td align="right" style="padding:13px 18px; font-size:15px; font-weight:700; color:#dc2626;">▼ -5,7 %</td></tr>
      <tr style="background-color:#f7fafa;"><td style="padding:13px 18px; font-size:16px; color:#1A2332;"><strong style="color:#dc2626;">HYPE</strong> <span style="color:#94a3b8;">Hyperliquid</span></td><td align="right" style="padding:13px 18px; font-size:16px; font-weight:700; color:#1A2332;">~61,9 $</td><td align="right" style="padding:13px 18px; font-size:15px; font-weight:700; color:#dc2626;">▼ -15,2 %</td></tr>
      <tr><td style="padding:13px 18px; font-size:16px; color:#1A2332;"><strong style="color:#dc2626;">BNB</strong></td><td align="right" style="padding:13px 18px; font-size:16px; font-weight:700; color:#1A2332;">~577 $</td><td align="right" style="padding:13px 18px; font-size:15px; font-weight:700; color:#dc2626;">▼ -4,6 %</td></tr>
    </table>
    <p style="margin:8px 0 0 0; font-size:11px; line-height:1.5; color:#94a3b8;">Prix &amp; variations 7 j au 24 juin 2026 (DeFiLlama / CoinGecko). Repère couleur : <span style="color:#16a34a; font-weight:700;">vert</span> = hausse, <span style="color:#dc2626; font-weight:700;">rouge</span> = baisse. Cette semaine, tout recule (climat de défiance « risk-off ») ; HYPE souffre le plus (-15,2 %).</p>
  </td></tr>

  <!-- DATA DE LA SEMAINE -->
  <tr><td style="padding:24px 36px 0 36px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#1A2332; background:linear-gradient(135deg,#1A2332,#2e1b8b); border-radius:14px;">
      <tr><td style="padding:22px 24px;">
        <div style="font-size:12px; font-weight:700; color:#F5A623; letter-spacing:1.2px; margin-bottom:8px;">💡 ÇA BRILLE</div>
        <div style="font-size:20px; font-weight:800; color:#ffffff; margin-bottom:8px;">80 % des plateformes crypto menacées par MiCA</div>
        <div style="font-size:14px; line-height:1.6; color:#cbd5e1;">C'est l'estimation d'Erald Ghoos, patron d'OKX Europe — et elle colle aux faits : seules ~200 plateformes ont décroché leur agrément MiCA, sur plus de 1 000 qui opéraient en Europe (le cabinet Hogan Lovells arrive à ~75 %). Au programme, sans doute en même temps : fermetures des petits acteurs, rachats et consolidation (OKX et Bybit lancent déjà des primes pour récupérer les utilisateurs), et repli géographique pour ceux qui, comme Binance, n'obtiennent pas leur licence. L'ESMA a exclu tout délai : moins d'acteurs, mieux régulés.</div>
      </td></tr>
    </table>
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
        <td style="font-size:16px; line-height:1.6;"><strong>Tranching</strong> <span style="color:#94a3b8;">(découpage en tranches)</span> — découper un même investissement en plusieurs niveaux de risque (les « tranches »), classés par priorité face aux pertes. La tranche <em>junior</em> (risquée) encaisse les premières pertes et est mieux payée ; la <em>senior</em> (prudente) n'est touchée qu'en dernier. Chez Re : reUSDe = junior, reUSD = senior. Attention : les protocoles précisent rarement les règles exactes de répartition, et l'impact dépend de la taille (TVL) de chaque tranche.</td>
      </tr>
    </table>
  </td></tr>

  <tr><td style="padding:26px 36px 0 36px;"><div style="border-top:1px solid #eef2f2;"></div></td></tr>

  <!-- ============ CTA ============ -->
  <tr><td style="padding:24px 36px 4px 36px; color:#1A2332;">
    <p style="margin:0 0 12px 0; font-size:18px; font-weight:800;">✉️ À toi de jouer</p>
    <p style="margin:0 0 16px 0; font-size:16px; line-height:1.6;"><strong>Une question technique ?</strong> Réponds simplement à cet email : à chaque édition, on sélectionne la question d'un lecteur et on y répond clairement.</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0fdf4; border-radius:12px;">
      <tr><td style="padding:18px 20px; font-size:16px; line-height:1.8;">
        🗳️ <strong>On débute : tu préfères quoi ?</strong> Réponds <strong>A</strong> ou <strong>B</strong> :<br>
        <strong style="color:#28B092;">A.</strong> Rester sur les bases, en douceur<br>
        <strong style="color:#28B092;">B.</strong> Monter en technicité plus vite
      </td></tr>
    </table>
  </td></tr>

  <!-- ============ BIENTÔT ============ -->
  <tr><td style="padding:18px 36px 28px 36px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f7fafa; border-radius:12px;">
      <tr><td style="padding:18px 22px; font-size:15px; line-height:1.7; color:#475569;">
        <strong style="color:#1A2332;">🚧 Ce qui arrive bientôt</strong><br>
        🎥 des <strong>tutos vidéo de ~15 min</strong> (on fait la manip en direct)<br>
        📚 des <strong>articles et analyses</strong> plus poussées<br>
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
