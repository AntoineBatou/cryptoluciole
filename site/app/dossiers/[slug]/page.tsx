import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "../../Nav";
import { DossierFigure } from "../figures";
import ReadingProgress from "../ReadingProgress";
import {
  DOSSIERS,
  getDossier,
  type DossierBloc,
  type DossierPartie,
  type DossierSection,
} from "../dossiers";

export function generateStaticParams() {
  return DOSSIERS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const dossier = getDossier(slug);
  if (!dossier) return { title: "Dossier — CryptoLuciole" };
  return { title: `${dossier.titre} — CryptoLuciole`, description: dossier.accroche };
}

// Un chapitre = section dont le titre est numéroté (I.1, II.3…). Le reste = sous-partie.
const CHAPTER_RE = /^(?:I{1,3}|IV|V)\.\d/;
const isChapter = (t?: string) => !!t && CHAPTER_RE.test(t);
const chapterMark = (t: string) => t.match(CHAPTER_RE)?.[0] ?? "";
const chapterRest = (t: string) => t.replace(CHAPTER_RE, "").replace(/^\s*[—–-]\s*/, "").trim();

// ---- rendu inline : **gras**, *italique*, `code` ----
function Inline({ texte }: { texte: string }) {
  const morceaux = texte.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g);
  return (
    <>
      {morceaux.map((m, i) => {
        if (m.startsWith("**") && m.endsWith("**"))
          return (
            <strong key={i} className="font-semibold text-[color:var(--color-encre)]">
              {m.slice(2, -2)}
            </strong>
          );
        if (m.startsWith("*") && m.endsWith("*")) return <em key={i}>{m.slice(1, -1)}</em>;
        if (m.startsWith("`") && m.endsWith("`"))
          return (
            <code
              key={i}
              className="rounded-[3px] bg-[color:var(--color-encre)]/[0.06] px-1 py-0.5 text-[0.86em]"
              style={{ fontFamily: "var(--font-mono), monospace" }}
            >
              {m.slice(1, -1)}
            </code>
          );
        return <span key={i}>{m}</span>;
      })}
    </>
  );
}

function Multiligne({ texte }: { texte: string }) {
  const lignes = texte.split("\n");
  return (
    <>
      {lignes.map((l, i) => (
        <span key={i}>
          {i > 0 && <br />}
          <Inline texte={l} />
        </span>
      ))}
    </>
  );
}

const monoStyle = { fontFamily: "var(--font-mono), monospace" };
const serifStyle = { fontFamily: "var(--font-serif), Georgia, serif" };

// Eyebrow mono, majuscules espacées.
function Eyebrow({ children, color }: { children: React.ReactNode; color?: string }) {
  return (
    <p
      className="text-[11px] font-semibold uppercase tracking-[0.16em]"
      style={{ ...monoStyle, color: color ?? "var(--color-ambre-fonce)" }}
    >
      {children}
    </p>
  );
}

function Bloc({ bloc, lead }: { bloc: DossierBloc; lead?: boolean }) {
  switch (bloc.type) {
    case "p":
      return (
        <p
          className={`text-[1.06rem] leading-[1.72] text-[color:var(--color-encre)]/90 ${
            lead
              ? "first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-[family-name:var(--font-serif)] first-letter:text-[3.6rem] first-letter:font-medium first-letter:leading-[0.72] first-letter:text-[color:var(--color-ambre-fonce)]"
              : ""
          }`}
        >
          <Multiligne texte={bloc.texte} />
        </p>
      );

    case "st":
      return (
        <h4 className="pt-3 text-[1.18rem] font-medium text-[color:var(--color-encre)]" style={serifStyle}>
          {bloc.texte}
        </h4>
      );

    case "liste":
      return (
        <ul className="flex flex-col gap-2.5">
          {bloc.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-[1.04rem] leading-[1.68] text-[color:var(--color-encre)]/90">
              <span
                className="mt-[0.62em] h-[6px] w-[6px] shrink-0 rotate-45 bg-[color:var(--color-luciole)]"
                aria-hidden
              />
              <span>
                <Multiligne texte={item} />
              </span>
            </li>
          ))}
        </ul>
      );

    case "listenum":
      return (
        <ol className="flex flex-col gap-2.5">
          {bloc.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-[1.04rem] leading-[1.68] text-[color:var(--color-encre)]/90">
              <span
                className="mt-0.5 shrink-0 text-[0.85rem] font-semibold text-[color:var(--color-ambre-fonce)]"
                style={monoStyle}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>
                <Multiligne texte={item} />
              </span>
            </li>
          ))}
        </ol>
      );

    // 📖 Définition — glose en marge, filet ambre à gauche.
    case "def":
      return (
        <aside className="print-avoid-break border-l-2 border-[color:var(--color-luciole)] bg-[color:var(--color-papier2)]/60 py-3 pl-5 pr-4">
          <p className="text-[13px] font-semibold text-[color:var(--color-encre)]" style={monoStyle}>
            {bloc.slug ? (
              <Link href={`/glossaire/${bloc.slug}`} className="underline decoration-[color:var(--color-luciole)] decoration-2 underline-offset-2">
                {bloc.terme}
              </Link>
            ) : (
              bloc.terme
            )}
          </p>
          <p className="mt-1.5 text-[0.96rem] leading-[1.6] text-[color:var(--color-encre)]/80">
            <Multiligne texte={bloc.texte} />
          </p>
        </aside>
      );

    // 💡 L'essentiel — exergue serif.
    case "box":
      if (bloc.ton === "essentiel") {
        return (
          <aside className="print-avoid-break border-y border-[color:var(--color-encre)]/15 py-5">
            <Eyebrow color="var(--color-teal-fonce)">L&apos;essentiel</Eyebrow>
            {bloc.titre && bloc.titre !== "L'essentiel" && (
              <p className="mt-1 text-[0.8rem] text-[color:var(--color-encre)]/50" style={monoStyle}>
                {bloc.titre}
              </p>
            )}
            {bloc.texte && (
              <p className="mt-2 text-[1.15rem] leading-[1.55] text-[color:var(--color-encre)]" style={serifStyle}>
                <Multiligne texte={bloc.texte} />
              </p>
            )}
            {bloc.items && (
              <ul className="mt-2 flex flex-col gap-1.5">
                {bloc.items.map((it, i) => (
                  <li key={i} className="text-[1.05rem] leading-[1.5] text-[color:var(--color-encre)]" style={serifStyle}>
                    <Multiligne texte={it} />
                  </li>
                ))}
              </ul>
            )}
          </aside>
        );
      }
      if (bloc.ton === "piege") {
        return (
          <aside className="print-avoid-break border-l-[3px] border-[color:var(--color-brique)] bg-[color:var(--color-brique)]/[0.05] py-4 pl-5 pr-4">
            <Eyebrow color="var(--color-brique)">⚠ Le piège{bloc.titre ? ` — ${bloc.titre}` : ""}</Eyebrow>
            {bloc.texte && (
              <p className="mt-2 text-[1.02rem] leading-[1.62] text-[color:var(--color-encre)]/90">
                <Multiligne texte={bloc.texte} />
              </p>
            )}
            {bloc.items && (
              <ul className="mt-2 flex flex-col gap-1.5">
                {bloc.items.map((it, i) => (
                  <li key={i} className="flex gap-2 text-[1.0rem] leading-[1.55] text-[color:var(--color-encre)]/90">
                    <span className="mt-[0.6em] h-[5px] w-[5px] shrink-0 rounded-full bg-[color:var(--color-brique)]" aria-hidden />
                    <span>
                      <Multiligne texte={it} />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </aside>
        );
      }
      // 🔍 Exemple chiffré — bloc « registre » (fond ivoire soutenu, mono en tête).
      return (
        <aside className="print-avoid-break rounded-sm bg-[color:var(--color-papier2)] px-5 py-4">
          <Eyebrow>Exemple chiffré{bloc.titre ? ` — ${bloc.titre}` : ""}</Eyebrow>
          {bloc.texte && (
            <p className="mt-2 text-[1.0rem] leading-[1.62] text-[color:var(--color-encre)]/90">
              <Multiligne texte={bloc.texte} />
            </p>
          )}
        </aside>
      );

    // Tableau « registre » : pas d'arrondi, filets fins, chiffres mono.
    case "tableau":
      return (
        <div className="-mx-1 overflow-x-auto">
          <table className="w-full min-w-[440px] border-collapse text-[0.92rem]">
            <thead>
              <tr className="border-b-2 border-[color:var(--color-encre)]/70">
                {bloc.entetes.map((e, i) => (
                  <th
                    key={i}
                    className="px-3 py-2 text-left align-bottom text-[11px] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-encre)]/60"
                    style={monoStyle}
                  >
                    <Inline texte={e} />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bloc.lignes.map((ligne, i) => (
                <tr key={i} className="border-b border-[color:var(--color-encre)]/12">
                  {ligne.map((cellule, j) => (
                    <td key={j} className="px-3 py-2 align-top text-[color:var(--color-encre)]/85">
                      <Inline texte={cellule} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "figure":
      return <DossierFigure id={bloc.id} titre={bloc.titre} legende={bloc.legende} />;
  }
}

function SectionBlock({ section, lead }: { section: DossierSection; lead?: boolean }) {
  const chap = isChapter(section.titre);
  return (
    <section id={section.id} className="scroll-mt-24">
      {section.titre &&
        (chap ? (
          <div className="mb-6 mt-4">
            <div className="flex items-baseline gap-3">
              <span
                className="text-[0.95rem] font-semibold text-[color:var(--color-ambre-fonce)]"
                style={monoStyle}
              >
                {chapterMark(section.titre)}
              </span>
              <span className="h-px flex-1 bg-[color:var(--color-encre)]/15" />
            </div>
            <h3
              className="mt-2 text-[1.72rem] font-medium leading-tight text-[color:var(--color-encre)]"
              style={serifStyle}
            >
              {chapterRest(section.titre)}
            </h3>
          </div>
        ) : (
          <h4
            className="mb-3 mt-2 text-[1.32rem] font-medium text-[color:var(--color-encre)]"
            style={serifStyle}
          >
            {section.titre}
          </h4>
        ))}
      <div className="flex flex-col gap-5">
        {section.blocs.map((bloc, i) => (
          <Bloc key={i} bloc={bloc} lead={lead && i === 0} />
        ))}
      </div>
    </section>
  );
}

// Seuil de Partie : palier « nuit » (on descend d'un niveau dans l'édifice).
function PartieThreshold({ partie }: { partie: DossierPartie }) {
  if (!partie.bandeau) return null;
  const [gauche, droite] = partie.bandeau.split(" — ");
  return (
    <div id={partie.id} className="-mx-6 my-4 scroll-mt-24 bg-[color:var(--color-encre)] px-6 py-14 sm:-mx-10 sm:px-10">
      <div className="mx-auto max-w-[640px]">
        <div className="flex items-center gap-3">
          <span className="h-8 w-[3px] bg-[color:var(--color-luciole)]" aria-hidden />
          <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[color:var(--color-luciole)]" style={monoStyle}>
            {gauche}
          </span>
        </div>
        <h2 className="mt-3 text-[2.1rem] font-medium leading-[1.1] text-[#f7f4ec] sm:text-[2.5rem]" style={serifStyle}>
          {droite}
        </h2>
        {partie.sousTitre && (
          <p className="mt-4 max-w-lg text-[1.02rem] leading-relaxed text-white/60">{partie.sousTitre}</p>
        )}
      </div>
    </div>
  );
}

function Partie({ partie, lead }: { partie: DossierPartie; lead?: boolean }) {
  return (
    <>
      <PartieThreshold partie={partie} />
      <section id={!partie.bandeau ? partie.id : undefined} className="scroll-mt-24">
        {partie.titre && !partie.bandeau && (
          <h2 className="mb-8 mt-4 text-[2rem] font-medium text-[color:var(--color-encre)]" style={serifStyle}>
            {partie.titre}
          </h2>
        )}
        <div className="flex flex-col gap-12">
          {partie.sections.map((section, i) => (
            <SectionBlock key={section.id} section={section} lead={lead && i === 0} />
          ))}
        </div>
      </section>
    </>
  );
}

export default async function DossierPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const dossier = getDossier(slug);
  if (!dossier) notFound();

  return (
    <div className="min-h-screen bg-[color:var(--color-papier)]">
      <ReadingProgress />
      <Nav />

      {/* Couverture éditoriale */}
      <header className="border-b border-[color:var(--color-encre)]/12 px-6">
        <div className="mx-auto max-w-[720px] pb-12 pt-12">
          <Link href="/dossiers" className="text-[13px] text-[color:var(--color-encre)]/45 hover:text-[color:var(--color-encre)]" style={monoStyle}>
            ← Dossiers
          </Link>
          <div className="mt-8 flex items-center gap-3">
            <span className="h-6 w-[3px] bg-[color:var(--color-luciole)]" aria-hidden />
            <Eyebrow>
              Dossier · {dossier.date} · {dossier.tempsLecture}
            </Eyebrow>
          </div>
          <h1
            className="mt-4 text-[2.4rem] font-medium leading-[1.08] text-[color:var(--color-encre)] sm:text-[3rem]"
            style={serifStyle}
          >
            {dossier.titre}
          </h1>
          <p className="mt-5 max-w-[620px] text-[1.15rem] leading-[1.6] text-[color:var(--color-encre)]/70">
            {dossier.accroche}
          </p>
          {dossier.scope && dossier.scope.length > 0 && (
            <div className="mt-7 flex flex-wrap items-center gap-x-2 gap-y-2">
              <span className="text-[10px] uppercase tracking-[0.16em] text-[color:var(--color-encre)]/40" style={monoStyle}>
                Au fil du dossier
              </span>
              {dossier.scope.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-[color:var(--color-encre)]/15 px-2.5 py-0.5 text-[12px] text-[color:var(--color-encre)]/70"
                  style={monoStyle}
                >
                  {s}
                </span>
              ))}
            </div>
          )}
          {dossier.pdf && (
            <a
              href={dossier.pdf}
              download
              className="no-print group mt-8 inline-flex items-center gap-2.5 rounded-full bg-[color:var(--color-encre)] px-5 py-2.5 text-[14px] font-medium text-[color:var(--color-papier)] transition-colors hover:bg-[color:var(--color-teal-fonce)]"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
                className="transition-transform group-hover:translate-y-0.5"
              >
                <path d="M12 3v12" />
                <path d="m7 10 5 5 5-5" />
                <path d="M5 21h14" />
              </svg>
              Télécharger le dossier (PDF)
            </a>
          )}
          {dossier.statut === "en-construction" && (
            <p className="mt-6 text-[12px] text-[color:var(--color-ambre-fonce)]" style={monoStyle}>
              ● Version de travail — relecture finale avant publication.
            </p>
          )}
        </div>
      </header>

      <div className="mx-auto max-w-[720px] px-6">
        {/* Sommaire : chapitres seulement */}
        <nav className="border-b border-[color:var(--color-encre)]/12 py-8">
          <Eyebrow>Sommaire</Eyebrow>
          <ol className="mt-4 flex flex-col gap-3">
            {dossier.parties.map((p) => {
              const chapitres = p.sections.filter((s) => isChapter(s.titre));
              return (
                <li key={p.id}>
                  <a
                    href={`#${p.id}`}
                    className="text-[1.05rem] font-medium text-[color:var(--color-encre)] hover:text-[color:var(--color-teal-fonce)]"
                    style={serifStyle}
                  >
                    {p.bandeau ?? p.titre}
                  </a>
                  {chapitres.length > 0 && (
                    <ul className="mt-1.5 flex flex-col gap-1 pl-1">
                      {chapitres.map((s) => (
                        <li key={s.id} className="flex gap-2.5">
                          <a href={`#${s.id}`} className="flex gap-2.5 text-[0.94rem] text-[color:var(--color-encre)]/65 hover:text-[color:var(--color-teal-fonce)]">
                            <span className="text-[color:var(--color-ambre-fonce)]" style={monoStyle}>
                              {chapterMark(s.titre!)}
                            </span>
                            <span>{chapterRest(s.titre!)}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        <article className="py-12">
          {dossier.parties.map((partie, i) => (
            <Partie key={partie.id} partie={partie} lead={i === 0} />
          ))}

          <p className="mt-16 border-t border-[color:var(--color-encre)]/12 pt-6 text-[13px] text-[color:var(--color-encre)]/45" style={monoStyle}>
            Ce contenu n&apos;est pas un conseil en investissement.
          </p>
        </article>
      </div>
    </div>
  );
}
