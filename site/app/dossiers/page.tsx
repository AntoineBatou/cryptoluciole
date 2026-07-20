import Link from "next/link";
import Nav from "../Nav";
import { DOSSIERS } from "./dossiers";

export const metadata = {
  title: "Dossiers — CryptoLuciole",
  description:
    "Les dossiers de fond CryptoLuciole : des analyses longues, illustrées et sourcées, pour comprendre en profondeur un sujet crypto/DeFi.",
};

export default function DossiersPage() {
  return (
    <div className="min-h-screen bg-brume">
      <Nav />

      <header className="bg-nuit px-6 pb-14 pt-10 text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-luciole">📚 Dossiers</p>
        <h1 className="mx-auto mt-3 max-w-2xl text-3xl font-extrabold text-white sm:text-4xl">
          Les dossiers de fond
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-white/70">
          Des analyses longues, illustrées et sourcées — pour comprendre un sujet en profondeur,
          pas juste survoler l&apos;actu.
        </p>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-12">
        <div className="flex flex-col gap-6">
          {DOSSIERS.map((d) => (
            <Link
              key={d.slug}
              href={`/dossiers/${d.slug}`}
              className="group rounded-2xl border border-nuit/10 bg-white p-6 transition hover:border-teal/40 hover:shadow-md"
            >
              <div className="flex items-center gap-3 text-sm text-nuit/50">
                <span className="text-2xl">{d.emoji}</span>
                <span>
                  {d.date} · {d.tempsLecture} de lecture
                </span>
                {d.statut === "en-construction" && (
                  <span className="rounded-full bg-luciole/15 px-3 py-0.5 text-xs font-bold text-nuit">
                    🚧 En construction
                  </span>
                )}
              </div>
              <h2 className="mt-3 text-xl font-extrabold text-nuit group-hover:text-teal">
                {d.titre}
              </h2>
              <p className="mt-2 leading-relaxed text-nuit/70">{d.accroche}</p>
              <p className="mt-4 text-sm font-semibold text-teal">Lire le dossier →</p>
            </Link>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-nuit/40">
          Un sujet que tu aimerais voir traité en dossier ? Réponds à n&apos;importe quel numéro
          de la newsletter.
        </p>
      </main>
    </div>
  );
}
