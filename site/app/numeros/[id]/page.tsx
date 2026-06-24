import Link from "next/link";
import { notFound } from "next/navigation";
import { getIssue, issues } from "../issues";

// Pré-génère une page pour chaque numéro existant (rapide + bon pour le référencement).
export function generateStaticParams() {
  return issues.map((n) => ({ id: n.id }));
}

// Petite "pastille" de rubrique réutilisable (comme dans la newsletter).
function Pill({ children, tone }: { children: React.ReactNode; tone: "teal" | "or" | "indigo" }) {
  const styles = {
    teal: "bg-teal/10 text-teal",
    or: "bg-luciole/15 text-[#b9770f]",
    indigo: "bg-indigo-50 text-indigo-700",
  }[tone];
  return (
    <span className={`inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider ${styles}`}>
      {children}
    </span>
  );
}

// Encadré de définition : le terme est cliquable vers sa fiche glossaire.
function DefBox({ terme, slug, texte }: { terme: string; slug: string; texte: string }) {
  return (
    <div className="mb-4 rounded-lg border border-black/5 bg-white px-4 py-3 text-sm leading-relaxed text-nuit/70">
      <Link href={`/glossaire/${slug}`} className="font-bold text-teal hover:underline">
        {terme}
      </Link>{" "}
      — {texte}
    </div>
  );
}

// En Next.js 16, "params" arrive de façon asynchrone -> la fonction est "async" et on "await".
export default async function NumeroPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const n = getIssue(id);

  // Si le numéro n'existe pas, on affiche la page 404.
  if (!n) notFound();

  // Couleur d'un badge de risque selon son "sens".
  const risqueColors = {
    faible: "bg-green-100 text-green-700",
    moyen: "bg-yellow-100 text-yellow-700",
    eleve: "bg-red-100 text-red-700",
  };

  // Soit plusieurs badges (protocole à tranches, ex. Re), soit un seul (ex. Lido).
  const badges =
    n.protocole.badges ??
    (n.protocole.risqueSens
      ? [
          {
            label: "Niveau",
            niveau: n.protocole.risqueNiveau ?? "",
            sens: n.protocole.risqueSens,
          },
        ]
      : []);

  return (
    <div className="flex flex-1 flex-col bg-brume">
      {/* En-tête du numéro */}
      <header className="bg-nuit px-6 py-12">
        <div className="mx-auto max-w-2xl">
          <Link href="/numeros" className="text-sm text-teal-light hover:text-white">
            ← Tous les numéros
          </Link>
          <div className="mt-4 flex items-center gap-3 text-sm text-white/60">
            <span className="rounded-full bg-luciole/15 px-3 py-1 font-bold text-luciole">
              #{n.numero}
            </span>
            <span>{n.date}</span>
          </div>
          <h1 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            {n.titre}
          </h1>
        </div>
      </header>

      <article className="mx-auto w-full max-w-2xl px-6 py-12">
        {/* ON ÉCLAIRE */}
        <section className="mb-12">
          <Pill tone="teal">🔦 On éclaire</Pill>
          <h2 className="mb-4 mt-4 text-2xl font-extrabold text-nuit">
            {n.notion.titre}
          </h2>
          {/* Ancien format (#1) : blocs ⬡ */}
          {n.notion.blocs?.map((b) => (
            <p key={b.label} className="mb-4 leading-relaxed text-nuit/80">
              <strong className="text-luciole">⬡ {b.label}.</strong> {b.texte}
            </p>
          ))}
          {/* Format aéré (#2+) : corps typé (paragraphes, sous-titres, encadrés de définition) */}
          {n.notion.corps?.map((el, i) => {
            if (el.type === "st")
              return (
                <h3 key={i} className="mb-2 mt-6 text-lg font-bold text-teal">
                  {el.texte}
                </h3>
              );
            if (el.type === "def")
              return <DefBox key={i} terme={el.terme} slug={el.slug} texte={el.texte} />;
            return (
              <p key={i} className="mb-4 leading-relaxed text-nuit/80">
                {el.texte}
              </p>
            );
          })}
        </section>

        {/* DANS LE FAISCEAU */}
        <section className="mb-12">
          <Pill tone="or">✨ Dans le faisceau</Pill>
          <div className="mt-5 flex flex-col gap-8">
            {n.actus.map((a) => (
              <div key={a.titre}>
                <h3 className="text-lg font-bold text-nuit">
                  <span className="text-luciole">✦</span> {a.titre}
                </h3>
                <p className="mt-2 leading-relaxed text-nuit/80">{a.texte}</p>
                {a.defs && (
                  <div className="mt-3">
                    {a.defs.map((d, i) => (
                      <DefBox key={i} terme={d.terme} slug={d.slug} texte={d.texte} />
                    ))}
                  </div>
                )}
                <div className="mt-3 rounded-lg border-l-4 border-teal bg-green-50 p-4 leading-relaxed text-nuit/80">
                  💡 <strong>Notre avis :</strong> {a.avis}
                </div>
                {a.lien && (
                  <p className="mt-2">
                    <a
                      href={a.lien.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-teal hover:underline"
                    >
                      → {a.lien.label}
                    </a>
                  </p>
                )}
                <p className="mt-2 text-xs text-nuit/40">Source : {a.source}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SOUS LA LOUPE */}
        <section className="mb-12">
          <Pill tone="teal">🔍 Sous la loupe</Pill>
          <h2 className="mb-4 mt-4 text-2xl font-extrabold text-nuit">
            {n.protocole.nom}
          </h2>
          <p className="mb-4 leading-relaxed text-nuit/80">
            <strong className="text-teal">En bref.</strong> {n.protocole.bref}
          </p>
          <p className="mb-2 font-semibold text-teal">Comment ça marche.</p>
          <ul className="mb-4 list-disc space-y-2 pl-5 text-nuit/80">
            {n.protocole.etapes.map((e, i) => (
              <li key={i}>{e}</li>
            ))}
          </ul>
          <p className="mb-4 leading-relaxed text-nuit/80">
            <strong className="text-teal">Le rendement.</strong> {n.protocole.rendement}
          </p>
          <p className="mb-3 flex flex-wrap items-center gap-2">
            <strong className="text-teal">Les risques.</strong>{" "}
            {badges.map((b) => (
              <span
                key={b.label}
                className={`rounded-full px-3 py-1 text-xs font-bold ${risqueColors[b.sens]}`}
              >
                {b.label} : {b.niveau}
              </span>
            ))}
          </p>
          <p className="mb-4 leading-relaxed text-nuit/80">{n.protocole.risques}</p>
          <p className="leading-relaxed text-nuit/80">
            <strong className="text-teal">Pourquoi ça compte.</strong> {n.protocole.importance}
          </p>
          {n.protocole.slug && (
            <p className="mt-4">
              <Link
                href={`/protocoles/${n.protocole.slug}`}
                className="font-bold text-teal hover:underline"
              >
                → Voir la fiche complète du protocole
              </Link>
            </p>
          )}
        </section>

        {/* LES REPÈRES (cours) */}
        <section className="mb-12">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <Pill tone="indigo">📊 Les repères</Pill>
            <span className="text-xs text-nuit/50">
              au {n.date}
              {n.coursHeure ? `, ${n.coursHeure}` : ""}
            </span>
          </div>
          <div className="mt-4 overflow-hidden rounded-xl border border-black/5">
            <table className="w-full text-sm">
              <thead className="bg-nuit text-white/60">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Actif</th>
                  <th className="px-4 py-3 text-right font-semibold">Prix</th>
                  <th className="px-4 py-3 text-right font-semibold">7 jours</th>
                </tr>
              </thead>
              <tbody>
                {n.cours.map((c, i) => (
                  <tr key={c.actif} className={i % 2 ? "bg-brume/40" : "bg-white"}>
                    <td className="px-4 py-3">
                      <strong className={c.sens === "up" ? "text-vert" : "text-rouge"}>
                        {c.actif}
                      </strong>{" "}
                      {c.nom && <span className="text-nuit/40">{c.nom}</span>}
                    </td>
                    <td className="px-4 py-3 text-right font-bold text-nuit">{c.prix}</td>
                    <td
                      className={`px-4 py-3 text-right font-bold ${
                        c.sens === "up" ? "text-vert" : "text-rouge"
                      }`}
                    >
                      {c.var7j}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {n.coursAvis && (
            <div className="mt-4 rounded-lg border-l-4 border-teal bg-green-50 p-4 leading-relaxed text-nuit/80">
              💡 <strong>Notre avis :</strong> {n.coursAvis}
            </div>
          )}
        </section>

        {/* ÇA BRILLE (data) */}
        <section className="mb-12 rounded-2xl bg-gradient-to-br from-nuit to-indigo-900 p-6">
          <div className="text-xs font-bold uppercase tracking-wider text-luciole">
            💡 Ça brille
          </div>
          <div className="mt-2 text-xl font-extrabold text-white">{n.data.titre}</div>
          <p className="mt-2 leading-relaxed text-white/70">{n.data.texte}</p>
          {n.data.points && (
            <ul className="mt-2 list-disc space-y-1 pl-5 leading-relaxed text-white/70">
              {n.data.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          )}
          {n.data.texteFin && (
            <p className="mt-2 leading-relaxed text-white/70">{n.data.texteFin}</p>
          )}
        </section>

        {/* DÉFINITIONS */}
        <section className="mb-12">
          <Pill tone="or">📖 Définitions</Pill>
          <ul className="mt-4 space-y-3">
            {n.definitions.map((d) => (
              <li key={d.terme} className="text-nuit/80">
                <div className="flex gap-3">
                  <span className="text-luciole">•</span>
                  <span>
                    {d.slug ? (
                      <Link
                        href={`/glossaire/${d.slug}`}
                        className="font-bold text-teal hover:underline"
                      >
                        {d.terme}
                      </Link>
                    ) : (
                      <strong>{d.terme}</strong>
                    )}{" "}
                    <span className="text-nuit/40">({d.en})</span> — {d.def}
                  </span>
                </div>
                {d.avis && (
                  <div className="ml-6 mt-2 rounded-lg border-l-4 border-teal bg-green-50 p-4 leading-relaxed text-nuit/80">
                    💡 <strong>Notre avis :</strong> {d.avis}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </section>

        <p className="border-t border-black/10 pt-6 text-xs leading-relaxed text-nuit/50">
          ⚠️ Contenu purement pédagogique — pas un conseil en investissement. Fais tes propres recherches.
        </p>
      </article>
    </div>
  );
}
