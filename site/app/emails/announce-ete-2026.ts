// ===== Mail d'annonce (été 2026) — PAS un numéro =====
// Envoyé aux abonnés : pause estivale (prochain numéro fin août) + sortie du
// tout premier dossier (DAT). Autonome, NON ajouté à ALL_ISSUES (le welcome
// mail doit continuer de pointer sur le dernier vrai numéro).
// Envoi : node scripts/send-newsletter.mjs app/emails/announce-ete-2026.ts --test <email>
// Le script lit subject + html par regex et remplace %UNSUBSCRIBE_URL%.
export const announceEte2026 = {
  subject: "Notre tout premier dossier est en ligne 🔦",
  html: `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>CryptoLuciole — un mot avant l'été</title>
<!--[if mso]><style>*{font-family:Arial,sans-serif!important;}</style><![endif]-->
</head>
<body style="margin:0; padding:0; background-color:#EEF2F2; -webkit-text-size-adjust:100%;">
<div style="display:none; max-height:0; overflow:hidden; opacity:0; color:#EEF2F2; font-size:1px;">
Le prochain numéro sort fin août — en attendant, le tout premier dossier CryptoLuciole, très complet, sur les DAT.
</div>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#EEF2F2;">
<tr><td align="center" style="padding:24px 12px;">

<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px; background-color:#ffffff; border-radius:16px; overflow:hidden; font-family:'Inter',Helvetica,Arial,sans-serif;">

  <!-- ============ EN-TÊTE ============ -->
  <tr><td style="background-color:#1A2332; padding:20px 36px;">
    <table role="presentation" cellpadding="0" cellspacing="0"><tr>
      <td valign="middle" width="40"><img src="https://raw.githubusercontent.com/AntoineBatou/cryptoluciole/main/assets/logo/firefly-logo-white.png" width="32" alt="" style="display:block;width:32px;height:auto;"></td>
      <td valign="middle" style="padding-left:10px; font-size:18px; font-weight:800; color:#ffffff;">CryptoLuciole</td>
    </tr></table>
  </td></tr>

  <!-- ============ TITRE ============ -->
  <tr>
    <td style="padding:28px 36px 0 36px;">
      <p style="margin:0; font-size:12px; font-weight:600; color:#94a3b8; letter-spacing:0.6px;">UN MOT AVANT L'ÉTÉ</p>
      <h1 style="margin:6px 0 0 0; font-size:26px; font-weight:800; color:#1A2332; line-height:1.25;">Pas de numéro cet été… mais on ne vous laisse pas les mains vides</h1>
    </td>
  </tr>

  <!-- ============ CORPS ============ -->
  <tr>
    <td style="padding:20px 36px 6px 36px; color:#1A2332;">
      <p style="margin:0 0 16px 0; font-size:16px; line-height:1.65;">Bonjour à tous 👋,</p>
      <p style="margin:0 0 16px 0; font-size:16px; line-height:1.65;">
        Petit mot avant l'été : la newsletter prend une <strong>pause estivale</strong>, et le <strong>prochain numéro sortira fin août</strong> — mais je ne voulais pas vous laisser sans rien d'ici là.
      </p>
      <p style="margin:0 0 16px 0; font-size:16px; line-height:1.65;">
        J'ai donc préparé quelque chose d'un peu plus ambitieux : le <strong>tout premier dossier CryptoLuciole</strong>. Un format long, bien plus complet et technique qu'un numéro, qui prend le temps de creuser un thème à fond.
      </p>
      <p style="margin:0 0 18px 0; font-size:16px; line-height:1.65;">
        Celui-ci porte sur les <strong>DAT</strong> (Digital Asset Treasury) — ces sociétés cotées, Strategy en tête, dont le métier est de détenir de la crypto. Comment fonctionne la machine, comment les analyser, ce qui se passe quand elle s'enraye, et jusqu'où cette fragilité se propage dans la DeFi.
      </p>
    </td>
  </tr>

  <!-- ============ PLAN RÉSUMÉ ============ -->
  <tr>
    <td style="padding:0 36px 8px 36px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f7fafa; border-radius:12px;">
        <tr><td style="padding:18px 22px; color:#1A2332;">
          <p style="margin:0 0 12px 0; font-size:13px; font-weight:700; color:#1A2332; letter-spacing:0.4px;">📋 AU PROGRAMME DU DOSSIER</p>
          <p style="margin:0 0 10px 0; font-size:15px; line-height:1.6;">
            <strong style="color:#28B092;">Partie I — La machine DAT</strong><br>
            <span style="color:#475569;">Le mécanisme (la « flywheel »), le STRC, les acteurs, la boîte à outils pour les analyser, et les risques.</span>
          </p>
          <p style="margin:0 0 10px 0; font-size:15px; line-height:1.6;">
            <strong style="color:#28B092;">Partie II — Les DAT en DeFi</strong><br>
            <span style="color:#475569;">Comment le montage se reconstruit en DeFi, le crash-test de juin 2026, et les risques propres à la DeFi.</span>
          </p>
          <p style="margin:0 0 14px 0; font-size:15px; line-height:1.6; color:#475569;">
            <strong style="color:#1A2332;">+ le Verdict</strong> — points forts, points faibles, signaux d'alerte.
          </p>
          <p style="margin:0; padding:12px 16px; background-color:#fff7e8; border-radius:10px; font-size:14px; line-height:1.55; color:#7a5200;">
            👉 Vous venez surtout pour la <strong>DeFi</strong> ? Filez directement à la <strong>Partie II</strong>.
          </p>
        </td></tr>
      </table>
    </td>
  </tr>

  <!-- ============ BOUTONS ============ -->
  <tr>
    <td style="padding:20px 36px 6px 36px;">
      <p style="margin:0 0 14px 0; font-size:14px; line-height:1.5; color:#94a3b8;">
        Format long — comptez environ <strong style="color:#475569;">45 min de lecture</strong>.
      </p>
      <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 12px 0;">
        <tr><td style="background-color:#28B092; border-radius:10px;">
          <a href="https://www.cryptoluciole.com/dossiers/dat" style="display:inline-block; padding:14px 28px; font-size:16px; font-weight:700; color:#ffffff; text-decoration:none;">📖 Lire en ligne</a>
        </td></tr>
      </table>
      <table role="presentation" cellpadding="0" cellspacing="0">
        <tr><td style="border:2px solid #1A2332; border-radius:10px;">
          <a href="https://www.cryptoluciole.com/dossiers/dat.pdf" style="display:inline-block; padding:12px 26px; font-size:16px; font-weight:700; color:#1A2332; text-decoration:none;">📄 Télécharger le PDF</a>
        </td></tr>
      </table>
    </td>
  </tr>

  <!-- ============ SIGNATURE ============ -->
  <tr>
    <td style="padding:22px 36px 30px 36px; color:#1A2332;">
      <p style="margin:0 0 16px 0; font-size:16px; line-height:1.65;">
        Une question, un retour ? Répondez simplement à ce mail, ça me fait toujours plaisir.
      </p>
      <p style="margin:0; font-size:16px; line-height:1.65;">Bonne lecture, et à fin août 🔦</p>
    </td>
  </tr>

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
