"use client"; // ce composant tourne dans le navigateur (il réagit aux clics, gère un état)

import { useState } from "react";

export default function SignupForm() {
  // "état" du formulaire : l'email tapé + le statut de l'envoi.
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); // empêche le rechargement de la page
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setMessage("Tu es bien inscrit·e. Un email de bienvenue arrive dans ta boîte mail.");
        setEmail("");
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus("error");
        setMessage(data.error || "Oups, réessaie dans un instant.");
      }
    } catch {
      setStatus("error");
      setMessage("Problème de connexion, réessaie.");
    }
  }

  // Une fois inscrit, on remplace le formulaire par un visuel de confirmation.
  if (status === "success") {
    return (
      <div className="mx-auto mt-8 max-w-md rounded-2xl border border-teal/30 bg-teal/10 px-6 py-7 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal text-2xl font-bold text-nuit">
          ✓
        </div>
        <p className="mt-4 text-lg font-bold text-white">Inscription validée 🪲</p>
        <p className="mt-1 text-sm leading-relaxed text-white/70">{message}</p>
      </div>
    );
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ton@email.com"
          className="w-full rounded-full border border-white/15 bg-white/5 px-5 py-3 text-white placeholder-white/40 outline-none focus:border-teal-light"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="whitespace-nowrap rounded-full bg-luciole px-6 py-3 font-semibold text-nuit hover:opacity-90 disabled:opacity-60"
        >
          {status === "loading" ? "…" : "Je m'inscris"}
        </button>
      </form>
      {status === "error" ? (
        <p className="mt-3 text-sm text-red-400">{message}</p>
      ) : (
        <p className="mt-3 text-xs text-white/40">
          Gratuit. Une édition par semaine. Désinscription en un clic.
        </p>
      )}
    </>
  );
}
