// Forme d'un email de numéro. Cette même structure sert au mail de bienvenue
// (envoi transactionnel) ET, plus tard, au Broadcast (envoi à toute la liste).
export type IssueEmail = {
  number: number; // n° du numéro — sert à déterminer automatiquement le plus récent
  subject: string; // objet de l'email
  // HTML complet du numéro. Le lien de désinscription est un placeholder
  // %UNSUBSCRIBE_URL% remplacé au moment de l'envoi :
  //  - mailto en transactionnel (mail de bienvenue),
  //  - token {{{RESEND_UNSUBSCRIBE_URL}}} en Broadcast.
  html: string;
};
