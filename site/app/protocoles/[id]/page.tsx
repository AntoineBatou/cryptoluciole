import Link from "next/link";

// Page « en construction » d'une fiche protocole.
// Route dynamique : /protocoles/<id> accepte n'importe quel slug pour l'instant.
// (Plus tard : fiche détaillée tirée des analyses analyste-defi, mention « rédigé avec l'IA ».)
export default async function ProtocolePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const label = decodeURIComponent(id).replace(/-/g, " ");

  return (
    <div className="flex flex-1 flex-col bg-brume">
      <header className="bg-nuit px-6 py-12">
        <div className="mx-auto max-w-2xl">
          <Link href="/" className="text-sm text-teal-light hover:text-white">
            ← Accueil
          </Link>
          <p className="mt-4 text-xs font-bold uppercase tracking-wider text-luciole">
            🔍 Protocole
          </p>
          <h1 className="mt-2 text-3xl font-extrabold capitalize text-white sm:text-4xl">
            {label}
          </h1>
        </div>
      </header>

      <main className="mx-auto w-full max-w-2xl px-6 py-16 text-center">
        <p className="text-5xl">🚧</p>
        <p className="mt-4 text-lg font-semibold text-nuit">Fiche en construction</p>
        <p className="mt-2 leading-relaxed text-nuit/60">
          La fiche détaillée de ce protocole arrive bientôt. En attendant, retrouve notre décryptage dans les numéros de la newsletter.
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
