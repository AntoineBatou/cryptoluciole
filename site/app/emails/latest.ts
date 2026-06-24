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

// Expéditeur = adresse du domaine vérifié dans Resend (send.cryptoluciole.com).
export const NEWSLETTER_FROM = "CryptoLuciole <mail@send.cryptoluciole.com>";
// Désinscription par email (en transactionnel, pas de token Broadcast).
export const UNSUBSCRIBE_MAILTO =
  "mailto:mail@send.cryptoluciole.com?subject=D%C3%A9sinscription";
export const WELCOME_SUBJECT =
  "Bienvenue chez CryptoLuciole 🪲 — voici le dernier numéro";

const ALL_ISSUES: IssueEmail[] = [issue01, issue02];

// Le plus récent = celui dont le "number" est le plus grand.
export const latestIssue: IssueEmail = ALL_ISSUES.reduce((a, b) =>
  b.number > a.number ? b : a
);

// HTML prêt pour le mail de bienvenue : on remplace le placeholder de
// désinscription par le mailto (le token Broadcast ne marche qu'en Broadcast).
export function welcomeHtml(): string {
  return latestIssue.html.replaceAll("%UNSUBSCRIBE_URL%", UNSUBSCRIBE_MAILTO);
}
