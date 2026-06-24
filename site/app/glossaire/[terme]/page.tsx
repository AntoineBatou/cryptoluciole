import Link from "next/link";

// Page « en construction » d'un terme du glossaire.
// Route dynamique : /glossaire/<terme> accepte n'importe quel slug pour l'instant.
// (Plus tard : on remplacera par la vraie définition tirée de la source unique.)
export default async function GlossaireTerme({
  params,
}: {
  params: Promise<{ terme: string }>;
}) {
  const { terme } = await params;
  const label = decodeURIComponent(terme).replace(/-/g, " ");

  return (
    <div className="flex flex-1 flex-col bg-brume">
      <header className="bg-nuit px-6 py-12">
        <div className="mx-auto max-w-2xl">
          <Link href="/" className="text-sm text-teal-light hover:text-white">
            ← Accueil
          </Link>
          <p className="mt-4 text-xs font-bold uppercase tracking-wider text-luciole">
            📖 Glossaire
          </p>
          <h1 className="mt-2 text-3xl font-extrabold capitalize text-white sm:text-4xl">
            {label}
          </h1>
        </div>
      </header>

      <main className="mx-auto w-full max-w-2xl px-6 py-16 text-center">
        <p className="text-5xl">🚧</p>
        <p className="mt-4 text-lg font-semibold text-nuit">Définition en construction</p>
        <p className="mt-2 leading-relaxed text-nuit/60">
          Cette fiche arrive bientôt. En attendant, retrouve nos explications dans les numéros de la newsletter.
        </p>
        <Link
          href="/numeros"
          className="mt-6 inline-block rounded-full bg-teal px-5 py-2.5 text-sm font-bold text-white"
        >
          Voir les numéros
        </Link>
      </main>
    </div>
  );
}
