// Envoi d'un EMAIL DE TEST d'un numéro CryptoLuciole (transactionnel Resend).
// Usage : node scripts/send-test.mjs <chemin-issue.ts> <email-destinataire>
// Ex.    : node scripts/send-test.mjs app/emails/issues/issue-02.ts toi@exemple.com
//
// Le script lit RESEND_API_KEY depuis .env.local (la clé n'est jamais affichée).
// Il N'envoie QU'À l'adresse fournie — ce n'est PAS l'envoi en masse.
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

// Charge .env.local sans rien afficher.
function loadEnv(path) {
  try {
    for (const line of readFileSync(path, "utf8").split("\n")) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
      if (m) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
    }
  } catch {}
}
loadEnv(join(root, ".env.local"));

const [, , issueFile, to] = process.argv;
if (!issueFile || !to) {
  console.error("usage: node scripts/send-test.mjs <chemin-issue.ts> <email>");
  process.exit(1);
}

const apiKey = process.env.RESEND_API_KEY;
if (!apiKey) {
  console.error("❌ RESEND_API_KEY introuvable dans .env.local");
  process.exit(1);
}

const src = readFileSync(join(root, issueFile), "utf8");
const subject = (src.match(/subject:\s*"([^"]*)"/)?.[1] ?? "CryptoLuciole");
const html = src.match(/html:\s*`([\s\S]*)`,\n\};/)?.[1];
if (!html) {
  console.error("❌ HTML introuvable dans", issueFile);
  process.exit(1);
}

const unsub = "mailto:mail@send.cryptoluciole.com?subject=D%C3%A9sinscription";
// Heure dans l'objet => objet unique => Gmail ne regroupe pas les tests en thread
// (sinon il masque le contenu "répété" derrière le bouton « ··· »).
const stamp = new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
const res = await fetch("https://api.resend.com/emails", {
  method: "POST",
  headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
  body: JSON.stringify({
    from: "CryptoLuciole <mail@send.cryptoluciole.com>",
    to,
    subject: `[TEST ${stamp}] ${subject}`,
    html: html.replaceAll("%UNSUBSCRIBE_URL%", unsub),
    headers: { "List-Unsubscribe": `<${unsub}>` },
  }),
});
console.log("HTTP", res.status, await res.text());
