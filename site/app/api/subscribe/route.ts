// Route API : reçoit un email depuis le formulaire et l'ajoute à beehiiv.
// Elle s'exécute CÔTÉ SERVEUR — la clé secrète n'est jamais envoyée au visiteur.
// Accessible à l'adresse /api/subscribe (en POST).

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // 1. On lit l'email envoyé par le formulaire.
  const { email } = await request.json().catch(() => ({ email: "" }));

  // 2. Petite validation simple côté serveur.
  if (typeof email !== "string" || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json(
      { error: "Adresse email invalide." },
      { status: 400 }
    );
  }

  // 3. On récupère les secrets depuis l'environnement (jamais en dur dans le code).
  const apiKey = process.env.BEEHIIV_API_KEY;
  const pubId = process.env.BEEHIIV_PUBLICATION_ID;
  if (!apiKey || !pubId) {
    return NextResponse.json(
      { error: "Configuration serveur manquante." },
      { status: 500 }
    );
  }

  // 4. On demande à beehiiv d'ajouter l'abonné.
  try {
    const res = await fetch(
      `https://api.beehiiv.com/v2/publications/${pubId}/subscriptions`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          reactivate_existing: true,
          send_welcome_email: false,
          utm_source: "cryptoluciole.com",
          referring_site: "cryptoluciole.com",
        }),
      }
    );

    if (!res.ok) {
      const detail = await res.text();
      console.error("beehiiv error:", res.status, detail);
      return NextResponse.json(
        { error: "L'inscription a échoué, réessaie dans un instant." },
        { status: 502 }
      );
    }

    // 5. Succès.
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("subscribe route error:", e);
    return NextResponse.json(
      { error: "Erreur réseau, réessaie." },
      { status: 500 }
    );
  }
}
