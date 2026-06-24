import Link from "next/link";
import { PROTOCOLES } from "./protocols";

export const metadata = {
  title: "Protocoles — CryptoLuciole",
  description: "Les protocoles DeFi décryptés et détaillés, sans le jargon.",
};

export default function ProtocolesPage() {
  return (
    <div className="flex flex-1 flex-col bg-brume">
      <header className="bg-nuit px-6 py-12 text-center">
        <Link href="/" className="text-sm text-teal-light hover:text-white">
          ← Accueil
        </Link>
        <h1 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
          🔍 Protocoles
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-white/70">
          Chaque protocole qu'on décrypte, détaillé au même endroit.
        </p>
      </header>

      <main className="mx-auto w-full max-w-3xl px-6 py-12">
        <ul className="flex flex-col gap-5">
          {PROTOCOLES.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/protocoles/${p.slug}`}
                className="block rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-teal">
                  {p.type}
                </span>
                <h2 className="mt-1 text-xl font-bold text-nuit">{p.nom}</h2>
                <p className="mt-2 leading-relaxed text-nuit/60">{p.resume}</p>
                <span className="mt-4 inline-block font-semibold text-teal">
                  Lire la fiche →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
