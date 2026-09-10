// ===== Sélection automatique du DERNIER numéro =====
// Le mail de bienvenue envoie toujours le numéro le plus récent, sans qu'on ait
// à toucher au code de l'inscription.
//
// 👉 Quand un nouveau numéro sort :
//    1. crée site/app/emails/issues/issue-0X.ts (sur le modèle de issue-01.ts) ;
//    2. ajoute-le dans le tableau ALL_ISSUES ci-dessous.
//    Le numéro au plus grand "number" devient automatiquement celui envoyé en
//    bienvenue. Rien d'autre à modifier.

import type { IssueEmail } from "./types";
import { issue01 } from "./issues/issue-01";
import { issue02 } from "./issues/issue-02";
import { issue03 } from "./issues/issue-03";
import { issue04 } from "./issues/issue-04";
import { issue05 } from "./issues/issue-05";

// Expéditeur = adresse du domaine vérifié dans Resend (send.cryptoluciole.com).
export const NEWSLETTER_FROM = "CryptoLuciole <mail@send.cryptoluciole.com>";
// Reply-To = vraie boîte lisible (send.cryptoluciole.com n'a pas de MX → les
// réponses y rebondissent). contact@ redirige vers le Gmail de Marc.
export const NEWSLETTER_REPLY_TO = "contact@cryptoluciole.com";
// Désinscription par email — pointe vers la boîte qui REÇOIT (contact@), pas
// vers le sous-domaine d'envoi qui rebondit.
export const UNSUBSCRIBE_MAILTO =
  "mailto:contact@cryptoluciole.com?subject=D%C3%A9sinscription";
export const WELCOME_SUBJECT =
  "Bienvenue chez CryptoLuciole 🪲 — voici le dernier numéro";

const ALL_ISSUES: IssueEmail[] = [issue01, issue02, issue03, issue04, issue05];

// Le plus récent = celui dont le "number" est le plus grand.
export const latestIssue: IssueEmail = ALL_ISSUES.reduce((a, b) =>
  b.number > a.number ? b : a
);

// Métadonnées du dernier numéro, pour le message de confirmation à l'inscription.
// ZÉRO champ à maintenir : tout est dérivé du numéro lui-même —
//  · titre = sujet ("CryptoLuciole #N — Titre" → "Titre") ;
//  · date  = ligne d'en-tête du HTML ("#N · SAMEDI 4 JUILLET 2026" → "4 juillet 2026").
// Dès qu'un numéro est ajouté à ALL_ISSUES, le message suit automatiquement.
function extractIssueDate(html: string): string {
  const raw = (html.match(/#\d+\s*·\s*([^<]+)</) ?? [])[1]?.trim() ?? "";
  const m = raw.match(/(\d{1,2}\s+\p{L}+\s+\d{4})/u); // "4 JUILLET 2026" (sans le jour de semaine)
  return (m ? m[1] : raw).toLowerCase();
}

export const latestIssueMeta = {
  number: latestIssue.number,
  title: latestIssue.subject.replace(/^.*?—\s*/, "").trim(),
  date: extractIssueDate(latestIssue.html),
};

// Encart « dossier » ajouté EN BAS du mail de bienvenue (juste avant le pied) :
// le nouvel inscrit reçoit le dernier numéro + une invitation à lire le dossier.
// N'altère pas le numéro archivé (injection uniquement à la volée ici).
const DOSSIER_ENCART = `
  <!-- ============ ENCART DOSSIER (bienvenue) ============ -->
  <tr><td style="padding:6px 36px 26px 36px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f7fafa; border-radius:12px;">
      <tr><td style="padding:20px 22px; color:#1A2332;">
        <p style="margin:0 0 6px 0; font-size:13px; font-weight:700; color:#28B092; letter-spacing:0.3px;">📖 NOTRE TOUT PREMIER DOSSIER</p>
        <p style="margin:0 0 14px 0; font-size:15px; line-height:1.6; color:#475569;">
          En plus des numéros, on publie ponctuellement des <strong style="color:#1A2332;">dossiers</strong> — des formats longs et complets. Le premier décrypte les <strong style="color:#1A2332;">DAT</strong> (ces sociétés cotées, Strategy en tête, dont le métier est de détenir de la crypto). ~45 min de lecture.
        </p>
        <table role="presentation" cellpadding="0" cellspacing="0"><tr>
          <td style="background-color:#1A2332; border-radius:9px;">
            <a href="https://www.cryptoluciole.com/dossiers/dat" style="display:inline-block; padding:11px 22px; font-size:15px; font-weight:700; color:#ffffff; text-decoration:none;">Lire le dossier →</a>
          </td>
        </tr></table>
      </td></tr>
    </table>
  </td></tr>
`;

// HTML prêt pour le mail de bienvenue : dernier numéro + encart dossier injecté
// avant le pied, puis remplacement du placeholder de désinscription.
export function welcomeHtml(): string {
  return latestIssue.html
    .replace(
      "<!-- ============ PIED ============ -->",
      DOSSIER_ENCART + "\n  <!-- ============ PIED ============ -->"
    )
    .replaceAll("%UNSUBSCRIBE_URL%", UNSUBSCRIBE_MAILTO);
}
