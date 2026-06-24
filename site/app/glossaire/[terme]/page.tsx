import Link from "next/link";
import { getTerme, TERMES } from "../terms";

// Pré-génère une page par terme connu (rapide + bon pour le référencement).
export function generateStaticParams() {
  return TERMES.map((t) => ({ terme: t.slug }));
}

export default async function GlossaireTerme({
  params,
}: {
  params: Promise<{ terme: string }>;
}) {
  const { terme } = await params;
  const entry = getTerme(terme);
  const label = entry?.terme ?? decodeURIComponent(terme).replace(/-/g, " ");

  return (
    <div className="flex flex-1 flex-col bg-brume">
      <header className="bg-nuit px-6 py-12">
        <div className="mx-auto max-w-2xl">
          <Link href="/glossaire" className="text-sm text-teal-light hover:text-white">
            ← Glossaire
          </Link>
          <p className="mt-4 text-xs font-bold uppercase tracking-wider text-luciole">
            📖 Glossaire
          </p>
          <h1 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
            {label}
          </h1>
        </div>
      </header>

      <main className="mx-auto w-full max-w-2xl px-6 py-12">
        {entry ? (
          <>
            <p className="text-lg leading-relaxed text-nuit/80">{entry.definition}</p>
            {entry.numero && (
              <p className="mt-6 text-sm text-nuit/50">
                Terme introduit dans le{" "}
                <Link
                  href={`/numeros/${entry.numero}`}
                  className="font-semibold text-teal hover:underline"
                >
                  numéro n°{entry.numero}
                </Link>
                .
              </p>
            )}
          </>
        ) : (
          <div className="text-center">
            <p className="text-5xl">🚧</p>
            <p className="mt-4 text-lg font-semibold text-nuit">Définition en construction</p>
            <p className="mt-2 leading-relaxed text-nuit/60">
              Cette fiche arrive bientôt. En attendant, retrouve nos explications dans les numéros.
            </p>
            <Link
              href="/numeros"
              className="mt-6 inline-block rounded-full bg-teal px-5 py-2.5 text-sm font-bold text-white"
            >
              Voir les numéros
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
