// Envoi d'un numéro CryptoLuciole à TOUTE l'audience Resend, via l'API /emails
// (rendu fidèle, identique au test — contrairement à l'éditeur Broadcast qui
// réencapsule le HTML et casse la largeur/le fond gris).
//
// Usage :
//   node scripts/send-newsletter.mjs <issue.ts> --test toi@exemple.com
//        -> envoie à TOI SEUL (pour valider le rendu par le vrai canal)
//   node scripts/send-newsletter.mjs <issue.ts> --dry-run
//        -> compte les contacts de l'audience, n'envoie RIEN
//   node scripts/send-newsletter.mjs <issue.ts> --send
//        -> ENVOI RÉEL à toute l'audience (demande RESEND_AUDIENCE_ID)
//
// Lit RESEND_API_KEY (+ RESEND_AUDIENCE_ID) depuis .env.local (jamais affichés).
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function loadEnv(path) {
  try {
    for (const line of readFileSync(path, "utf8").split("\n")) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
      if (m) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
    }
  } catch {}
}
loadEnv(join(root, ".env.local"));

const FROM = "CryptoLuciole <mail@send.cryptoluciole.com>";
const UNSUB = "mailto:mail@send.cryptoluciole.com?subject=D%C3%A9sinscription";

const [, , issueFile, mode, modeArg] = process.argv;
if (!issueFile || !["--test", "--dry-run", "--send"].includes(mode)) {
  console.error(
    "usage: node scripts/send-newsletter.mjs <issue.ts> --test <email> | --dry-run | --send"
  );
  process.exit(1);
}

const apiKey = process.env.RESEND_API_KEY;
if (!apiKey) {
  console.error("❌ RESEND_API_KEY introuvable dans .env.local");
  process.exit(1);
}

const src = readFileSync(join(root, issueFile), "utf8");
const subject = src.match(/subject:\s*"([^"]*)"/)?.[1] ?? "CryptoLuciole";
const htmlRaw = src.match(/html:\s*`([\s\S]*)`,\n\};/)?.[1];
if (!htmlRaw) {
  console.error("❌ HTML introuvable dans", issueFile);
  process.exit(1);
}
const html = htmlRaw.replaceAll("%UNSUBSCRIBE_URL%", UNSUB);

const headers = {
  Authorization: `Bearer ${apiKey}`,
  "Content-Type": "application/json",
};
const emailHeaders = { "List-Unsubscribe": `<${UNSUB}>` };

async function sendOne(to) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers,
    body: JSON.stringify({ from: FROM, to, subject, html, headers: emailHeaders }),
  });
  return { status: res.status, body: await res.text() };
}

// --- Mode TEST : un seul destinataire ---
if (mode === "--test") {
  if (!modeArg) {
    console.error("❌ --test demande une adresse : --test toi@exemple.com");
    process.exit(1);
  }
  const r = await sendOne(modeArg);
  console.log(`Test -> ${modeArg} : HTTP ${r.status} ${r.body}`);
  process.exit(r.status >= 200 && r.status < 300 ? 0 : 1);
}

// --- Modes DRY-RUN / SEND : il faut l'audience ---
const audienceId = process.env.RESEND_AUDIENCE_ID;
if (!audienceId) {
  console.error("❌ RESEND_AUDIENCE_ID introuvable dans .env.local");
  process.exit(1);
}

const listRes = await fetch(
  `https://api.resend.com/audiences/${audienceId}/contacts`,
  { headers }
);
if (!listRes.ok) {
  console.error("❌ Lecture de l'audience échouée :", listRes.status, await listRes.text());
  process.exit(1);
}
const contacts = ((await listRes.json()).data ?? []).filter((c) => !c.unsubscribed);
const emails = contacts.map((c) => c.email).filter(Boolean);

console.log(`Audience : ${emails.length} contact(s) actif(s).`);
console.log(`Objet : "${subject}"`);

if (mode === "--dry-run") {
  console.log("Aperçu (5 premiers) :", emails.slice(0, 5).join(", "));
  console.log("DRY-RUN : rien envoyé.");
  process.exit(0);
}

// --- ENVOI RÉEL en batch (100 max par appel) ---
let ok = 0;
let ko = 0;
for (let i = 0; i < emails.length; i += 100) {
  const chunk = emails.slice(i, i + 100);
  const res = await fetch("https://api.resend.com/emails/batch", {
    method: "POST",
    headers,
    body: JSON.stringify(
      chunk.map((to) => ({
        from: FROM,
        to: [to],
        subject,
        html,
        headers: emailHeaders,
      }))
    ),
  });
  if (res.ok) {
    ok += chunk.length;
    console.log(`Lot ${i / 100 + 1} : ${chunk.length} envoyés.`);
  } else {
    ko += chunk.length;
    console.error(`Lot ${i / 100 + 1} : ÉCHEC ${res.status} ${await res.text()}`);
  }
}
console.log(`Terminé. Envoyés : ${ok} · Échecs : ${ko}`);
