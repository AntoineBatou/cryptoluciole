// Route API : ajoute un email à l'audience Resend (côté serveur, clé cachée),
// puis envoie un email de bienvenue (le dernier numéro complet).
// Accessible en POST sur /api/subscribe.
import { NextResponse } from "next/server";
import {
  NEWSLETTER_FROM,
  WELCOME_SUBJECT,
  UNSUBSCRIBE_MAILTO,
  welcomeHtml,
} from "../../emails/latest";

export async function POST(request: Request) {
  const { email } = await request.json().catch(() => ({ email: "" }));

  if (typeof email !== "string" || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ error: "Adresse email invalide." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (!apiKey || !audienceId) {
    return NextResponse.json({ error: "Configuration serveur manquante." }, { status: 500 });
  }

  try {
    const res = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, unsubscribed: false }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("resend error:", res.status, detail);
      return NextResponse.json(
        { error: "L'inscription a échoué, réessaie dans un instant." },
        { status: 502 }
      );
    }

    // Email de bienvenue (best-effort) : on n'échoue PAS l'inscription si l'envoi rate.
    try {
      const welcome = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: NEWSLETTER_FROM,
          to: email,
          subject: WELCOME_SUBJECT,
          html: welcomeHtml(),
          // Bouton de désinscription natif (Gmail/Outlook) — bon pour la délivrabilité.
          headers: { "List-Unsubscribe": `<${UNSUBSCRIBE_MAILTO}>` },
        }),
      });
      if (!welcome.ok) {
        console.error("resend welcome email error:", welcome.status, await welcome.text());
      }
    } catch (e) {
      console.error("resend welcome email exception:", e);
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("subscribe route error:", e);
    return NextResponse.json({ error: "Erreur réseau, réessaie." }, { status: 500 });
  }
}
