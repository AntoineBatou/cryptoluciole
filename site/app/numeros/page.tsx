import Link from "next/link";
import { issues } from "./issues";

// Page accessible à l'adresse /numeros
export default function NumerosPage() {
  return (
    <div className="flex flex-1 flex-col bg-brume">
      {/* petit en-tête de page */}
      <header className="bg-nuit px-6 py-12 text-center">
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
          Les numéros
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-white/70">
          Toutes les éditions de CryptoLuciole, à lire quand tu veux.
        </p>
      </header>

      <main className="mx-auto w-full max-w-3xl px-6 py-12">
        <div className="flex flex-col gap-5">
          {/* On parcourt la liste des numéros et on génère une carte pour chacun */}
          {issues.map((n) => (
            <Link
              key={n.id}
              href={`/numeros/${n.id}`}
              className="block rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center gap-3 text-sm text-nuit/50">
                <span className="rounded-full bg-luciole/15 px-3 py-1 font-bold text-luciole">
                  #{n.numero}
                </span>
                <span>{n.date}</span>
              </div>
              <h2 className="mt-3 text-xl font-bold text-nuit">{n.titre}</h2>
              <p className="mt-2 text-nuit/60">{n.excerpt}</p>
              <span className="mt-4 inline-block font-semibold text-teal">
                Lire ce numéro →
              </span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
