import Link from "next/link";
import { getProtocole, PROTOCOLES, type ProtoBloc } from "../protocols";
import { fetchProtoLive, formatUsd, formatApy, type ProtoLiveData } from "../live";

export function generateStaticParams() {
  return PROTOCOLES.map((p) => ({ id: p.slug }));
}

// Régénère la page (et donc les chiffres live DeFiLlama) toutes les heures.
export const revalidate = 3600;

// Carte « chiffres en direct » : TVL du protocole + TVL/APY par pool (DeFiLlama).
function LiveCard({ live }: { live: ProtoLiveData }) {
  const hasPools = live.pools.length > 0;
  if (live.tvlUsd == null && !hasPools) return null;
  return (
    <section className="mt-6 rounded-2xl border border-teal/20 bg-teal/5 p-5">
      <div className="mb-3 flex items-center gap-2">
        <span className="text-xs font-bold uppercase tracking-wider text-teal">
          📊 Chiffres en direct
        </span>
        <span className="text-xs text-nuit/40">via DeFiLlama</span>
      </div>
      {live.tvlUsd != null && (
        <div className="mb-3">
          <span className="text-2xl font-extrabold text-nuit">{formatUsd(live.tvlUsd)}</span>
          <span className="ml-2 text-sm text-nuit/50">de TVL (valeur déposée)</span>
        </div>
      )}
      {hasPools && (
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-black/5 bg-black/5 sm:grid-cols-2">
          {live.pools.map((pool) => (
            <div key={pool.label} className="bg-white px-4 py-3">
              <p className="text-sm font-semibold text-nuit">{pool.label}</p>
              <p className="mt-1 text-sm text-nuit/70">
                <span className="font-bold text-teal">{formatApy(pool.apy)}</span> de rendement
                {pool.tvlUsd != null && (
                  <span className="text-nuit/50"> · {formatUsd(pool.tvlUsd)}</span>
                )}
              </p>
            </div>
          ))}
        </div>
      )}
      <p className="mt-3 text-xs text-nuit/40">
        Mis à jour automatiquement (env. 1×/h). Les rendements varient — ce ne sont pas des
        taux garantis.
      </p>
    </section>
  );
}

// Couleurs du badge de score (échelle de risque maison).
const scoreColors: Record<string, string> = {
  faible: "bg-green-100 text-green-700",
  moyen: "bg-yellow-100 text-yellow-700",
  eleve: "bg-red-100 text-red-700",
};

// Styles des encadrés « note » selon le ton.
const noteStyles: Record<string, string> = {
  info: "border-teal/40 bg-teal/5",
  avis: "border-teal bg-green-50",
  alerte: "border-red-300 bg-red-50",
};
const noteIcons: Record<string, string> = { info: "ℹ️", avis: "💡", alerte: "⚠️" };

// Rend un bloc de contenu (paragraphe, liste, définition, note, tableau…).
function Bloc({ b }: { b: ProtoBloc }) {
  switch (b.type) {
    case "p":
      return <p className="mb-4 leading-relaxed text-nuit/80">{b.texte}</p>;
    case "st":
      return <h3 className="mb-2 mt-6 text-lg font-bold text-teal">{b.texte}</h3>;
    case "liste":
      return (
        <ul className="mb-4 flex flex-col gap-2">
          {b.items.map((it, i) => (
            <li key={i} className="flex gap-2 leading-relaxed text-nuit/80">
              <span className="mt-1 text-luciole">•</span>
              <span>{it}</span>
            </li>
          ))}
        </ul>
      );
    case "def":
      return (
        <div className="mb-4 rounded-lg border border-black/5 bg-white px-4 py-3 text-sm leading-relaxed text-nuit/70">
          {b.slug ? (
            <Link href={`/glossaire/${b.slug}`} className="font-bold text-teal hover:underline">
              {b.terme}
            </Link>
          ) : (
            <span className="font-bold text-teal">{b.terme}</span>
          )}{" "}
          — {b.texte}
        </div>
      );
    case "note":
      return (
        <div className={`mb-4 rounded-xl border-l-4 p-4 ${noteStyles[b.ton]}`}>
          {b.titre && (
            <p className="mb-1 font-bold text-nuit">
              {noteIcons[b.ton]} {b.titre}
            </p>
          )}
          <p className="text-sm leading-relaxed text-nuit/80">
            {!b.titre && <span>{noteIcons[b.ton]} </span>}
            {b.texte}
          </p>
        </div>
      );
    case "tableau":
      return (
        <div className="mb-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-nuit/10 text-left text-nuit/50">
                {b.entetes.map((e, i) => (
                  <th key={i} className="px-3 py-2 font-semibold">
                    {e}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {b.lignes.map((ligne, i) => (
                <tr key={i} className="border-b border-nuit/5">
                  {ligne.map((cell, j) => (
                    <td
                      key={j}
                      className={`px-3 py-2 align-top leading-snug ${
                        j === 0 ? "font-semibold text-nuit" : "text-nuit/70"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

export default async function ProtocolePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const p = getProtocole(id);
  const label = p?.nom ?? decodeURIComponent(id).replace(/-/g, " ");

  // Chiffres live (TVL/APY) — récupérés au build/revalidation, jamais en dur.
  const live = p?.live ? await fetchProtoLive(p.live) : null;

  return (
    <div className="flex flex-1 flex-col bg-brume">
      <header className="bg-nuit px-6 py-12">
        <div className="mx-auto max-w-2xl">
          <div className="flex items-center gap-4 text-sm">
            <Link href="/" className="text-teal-light hover:text-white">
              ← Accueil
            </Link>
            <span className="text-white/30">·</span>
            <Link href="/protocoles" className="text-teal-light hover:text-white">
              Protocoles
            </Link>
          </div>
          <p className="mt-4 text-xs font-bold uppercase tracking-wider text-luciole">
            🔍 Protocole
          </p>
          <h1 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">{label}</h1>
          {p && <p className="mt-2 text-sm text-white/50">{p.type}</p>}
          {p?.score && (
            <span
              className={`mt-4 inline-block rounded-full px-3 py-1 text-sm font-bold ${
                scoreColors[p.score.sens]
              }`}
            >
              Score maison {p.score.valeur}/{p.score.sur} — {p.score.mention}
            </span>
          )}
        </div>
      </header>

      <main className="mx-auto w-full max-w-2xl px-6 py-12">
        {p ? (
          <>
            {p.iaGenere && (
              <p className="mb-6 rounded-lg border border-black/5 bg-white px-4 py-3 text-sm text-nuit/60">
                ✨ Fiche détaillée rédigée avec l'aide de l'IA à partir de nos analyses de
                veille. Vérifie toujours par toi-même.
              </p>
            )}
            <p className="text-lg leading-relaxed text-nuit/80">{p.resume}</p>
            {p.chains && (
              <p className="mt-2 text-sm text-nuit/50">Blockchains : {p.chains}</p>
            )}

            {/* Chiffres en direct (DeFiLlama) */}
            {live && <LiveCard live={live} />}

            {/* Carte d'identité rapide */}
            {p.enBref && p.enBref.length > 0 && (
              <dl className="mt-6 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-black/5 bg-black/5 sm:grid-cols-2">
                {p.enBref.map((f) => (
                  <div key={f.label} className="bg-white px-4 py-3">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-nuit/40">
                      {f.label}
                    </dt>
                    <dd className="mt-0.5 text-sm font-medium text-nuit/80">{f.valeur}</dd>
                  </div>
                ))}
              </dl>
            )}

            {p.sections.map((s) => (
              <section key={s.titre} className="mt-10">
                <h2 className="mb-3 text-xl font-extrabold text-nuit">{s.titre}</h2>
                {s.blocs.map((b, i) => (
                  <Bloc key={i} b={b} />
                ))}
              </section>
            ))}

            {/* À retenir */}
            {p.pointsCles && p.pointsCles.length > 0 && (
              <section className="mt-10 rounded-2xl bg-nuit p-6">
                <h2 className="mb-3 text-lg font-bold text-white">À retenir</h2>
                <ul className="flex flex-col gap-2">
                  {p.pointsCles.map((pt, i) => (
                    <li key={i} className="flex gap-2 leading-relaxed text-white/80">
                      <span className="mt-1 text-luciole">✦</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {p.verdict && (
              <section className="mt-8 rounded-2xl border-l-4 border-teal bg-green-50 p-5">
                <h2 className="mb-2 text-lg font-bold text-nuit">💡 Verdict</h2>
                <p className="leading-relaxed text-nuit/80">{p.verdict}</p>
              </section>
            )}

            {/* Sources */}
            {p.sources && p.sources.length > 0 && (
              <section className="mt-8">
                <h2 className="mb-2 text-sm font-bold uppercase tracking-wide text-nuit/40">
                  Sources
                </h2>
                <ul className="flex flex-col gap-1 text-sm text-nuit/60">
                  {p.sources.map((src, i) => (
                    <li key={i}>
                      {src.href ? (
                        <a
                          href={src.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-teal hover:underline"
                        >
                          {src.label}
                        </a>
                      ) : (
                        src.label
                      )}
                    </li>
                  ))}
                </ul>
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
