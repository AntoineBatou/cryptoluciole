import Link from "next/link";
import { getProtocole, PROTOCOLES } from "../protocols";

export function generateStaticParams() {
  return PROTOCOLES.map((p) => ({ id: p.slug }));
}

export default async function ProtocolePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const p = getProtocole(id);
  const label = p?.nom ?? decodeURIComponent(id).replace(/-/g, " ");

  return (
    <div className="flex flex-1 flex-col bg-brume">
      <header className="bg-nuit px-6 py-12">
        <div className="mx-auto max-w-2xl">
          <Link href="/protocoles" className="text-sm text-teal-light hover:text-white">
            ← Protocoles
          </Link>
          <p className="mt-4 text-xs font-bold uppercase tracking-wider text-luciole">
            🔍 Protocole
          </p>
          <h1 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">{label}</h1>
          {p && <p className="mt-2 text-sm text-white/50">{p.type}</p>}
        </div>
      </header>

      <main className="mx-auto w-full max-w-2xl px-6 py-12">
        {p ? (
          <>
            {p.iaGenere && (
              <p className="mb-6 rounded-lg border border-black/5 bg-white px-4 py-3 text-sm text-nuit/60">
                ✨ Fiche rédigée avec l'aide de l'IA à partir de nos analyses de veille.
                Vérifie toujours par toi-même.
              </p>
            )}
            <p className="text-lg leading-relaxed text-nuit/80">{p.resume}</p>
            {p.chains && (
              <p className="mt-2 text-sm text-nuit/50">Blockchains : {p.chains}</p>
            )}

            {p.sections.map((s) => (
              <section key={s.titre} className="mt-8">
                <h2 className="mb-2 text-xl font-bold text-nuit">{s.titre}</h2>
                <p className="leading-relaxed text-nuit/80">{s.texte}</p>
              </section>
            ))}

            {p.verdict && (
              <section className="mt-8 rounded-2xl border-l-4 border-teal bg-green-50 p-5">
                <h2 className="mb-2 text-lg font-bold text-nuit">💡 Verdict</h2>
                <p className="leading-relaxed text-nuit/80">{p.verdict}</p>
              </section>
            )}

            {p.sourceNumero && (
              <p className="mt-8 text-sm text-nuit/50">
                Décrypté dans le{" "}
                <Link
                  href={`/numeros/${p.sourceNumero}`}
                  className="font-semibold text-teal hover:underline"
                >
                  numéro n°{p.sourceNumero}
                </Link>
                .
              </p>
            )}
          </>
        ) : (
          <div className="text-center">
            <p className="text-5xl">🚧</p>
            <p className="mt-4 text-lg font-semibold text-nuit">Fiche en construction</p>
            <p className="mt-2 leading-relaxed text-nuit/60">
              La fiche détaillée de ce protocole arrive bientôt.
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
