import Link from "next/link";
import { TERMES_TRIES } from "./terms";

export const metadata = {
  title: "Glossaire — CryptoLuciole",
  description:
    "Tous les termes de la crypto et de la DeFi définis simplement, sans jargon.",
};

export default function GlossairePage() {
  return (
    <div className="flex flex-1 flex-col bg-brume">
      <header className="bg-nuit px-6 py-12 text-center">
        <Link href="/" className="text-sm text-teal-light hover:text-white">
          ← Accueil
        </Link>
        <h1 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
          📖 Glossaire
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-white/70">
          Tous les termes qu'on définit dans la newsletter, réunis et expliqués
          simplement.
        </p>
      </header>

      <main className="mx-auto w-full max-w-3xl px-6 py-12">
        <ul className="flex flex-col gap-4">
          {TERMES_TRIES.map((t) => (
            <li key={t.slug}>
              <Link
                href={`/glossaire/${t.slug}`}
                id={t.slug}
                className="block rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="text-lg font-bold text-nuit">{t.terme}</h2>
                  {t.numero && (
                    <span className="text-xs text-nuit/40">
                      défini dans le n°{t.numero}
                    </span>
                  )}
                </div>
                <p className="mt-2 leading-relaxed text-nuit/70">{t.definition}</p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
