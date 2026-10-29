import Image from "next/image";
import Link from "next/link";
import { issues } from "./numeros/issues";
import { DOSSIERS } from "./dossiers/dossiers";

// Les deux blocs de l'accueil, sous le bandeau :
// à gauche les 5 dernières newsletters (miniatures carrées), à droite les
// 4 derniers dossiers. Tout se met à jour seul quand on ajoute un numéro
// dans issues.ts ou un dossier dans dossiers.ts.

const MOIS = [
  "janvier", "février", "mars", "avril", "mai", "juin",
  "juillet", "août", "septembre", "octobre", "novembre", "décembre",
];

// "2026-07" -> "juillet 2026"
function moisAnnee(date: string) {
  const [annee, mois] = date.split("-");
  return mois ? `${MOIS[Number(mois) - 1]} ${annee}` : date;
}

// "Mercredi 28 octobre 2026" -> "28 octobre 2026" (on retire le jour)
function sansJour(date: string) {
  return date.split(" ").slice(1).join(" ");
}

export default function DerniersContenus() {
  const numeros = [...issues].sort((a, b) => b.numero - a.numero).slice(0, 5);
  const dossiers = DOSSIERS.filter((d) => d.statut === "publie").slice(-4).reverse();
  const placesVides = Math.max(0, 4 - dossiers.length);

  return (
    <section className="bg-brume px-6 pb-16 pt-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-[3fr_2fr]">
        {/* ===== Bloc gauche : dernières newsletters ===== */}
        <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-2xl font-bold text-nuit">Nos dernières newsletters</h2>
            <Link href="/numeros" className="shrink-0 text-sm font-semibold text-teal hover:text-nuit">
              Tout voir →
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {numeros.map((n, i) => {
              const vedette = i === 0; // le plus récent prend une tuile 2×2
              return (
                <Link
                  key={n.id}
                  href={`/numeros/${n.id}`}
                  className={`group relative flex aspect-square flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-nuit via-nuit to-teal/80 p-4 text-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg ${
                    vedette ? "col-span-2 row-span-2 sm:p-6" : ""
                  }`}
                >
                  {/* halo doré, la « lumière de la luciole » */}
                  <div
                    aria-hidden
                    className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-luciole/25 blur-2xl transition duration-300 group-hover:bg-luciole/40"
                  />
                  <div className="relative flex items-center justify-between gap-2">
                    <span className="rounded-full bg-luciole px-2.5 py-0.5 text-xs font-bold text-nuit">
                      N°{n.numero}
                    </span>
                    {vedette && (
                      <span className="text-xs font-semibold uppercase tracking-wider text-teal-light">
                        Le dernier
                      </span>
                    )}
                  </div>

                  <div className="relative flex flex-1 items-center justify-center">
                    <Image
                      src={n.vignette ?? "/firefly-logo-white.png"}
                      alt=""
                      width={200}
                      height={200}
                      className={`rounded-2xl object-cover shadow-lg ring-1 ring-white/15 transition duration-300 group-hover:scale-110 ${
                        vedette ? "h-32 w-32 sm:h-40 sm:w-40" : "h-16 w-16"
                      }`}
                    />
                  </div>

                  <div className="relative">
                    <h3
                      className={`font-bold leading-snug ${
                        vedette ? "text-xl sm:text-2xl" : "line-clamp-2 text-sm"
                      }`}
                    >
                      {n.titre}
                    </h3>
                    <p className={`mt-1 text-white/60 ${vedette ? "text-sm" : "text-xs"}`}>
                      {sansJour(n.date)}
                    </p>
                  </div>
                </Link>
              );
            })}

            {/* 6e case de la grille (écrans ≥ tablette) : renvoi vers l'archive */}
            <Link
              href="/numeros"
              className="group hidden aspect-square flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-teal/30 p-4 text-center transition hover:border-teal hover:bg-teal/5 sm:flex"
            >
              <span className="text-3xl font-light text-teal transition duration-300 group-hover:scale-110">+</span>
              <span className="text-sm font-bold text-nuit">Tous les numéros</span>
              <span className="text-xs text-nuit/50">{issues.length} éditions →</span>
            </Link>
          </div>
        </div>

        {/* ===== Bloc droit : derniers dossiers ===== */}
        <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-2xl font-bold text-nuit">Nos derniers dossiers</h2>
            <Link href="/dossiers" className="shrink-0 text-sm font-semibold text-teal hover:text-nuit">
              Tout voir →
            </Link>
          </div>

          <div className="mt-6 flex flex-col gap-4">
            {dossiers.map((d) => (
              <Link
                key={d.slug}
                href={`/dossiers/${d.slug}`}
                className="group flex items-center gap-4 rounded-2xl border border-nuit/10 p-3 transition hover:border-teal/40 hover:shadow-md"
              >
                <Image
                  src={d.vignette ?? "/firefly-logo-black.png"}
                  alt=""
                  width={160}
                  height={160}
                  className="h-20 w-20 shrink-0 rounded-2xl object-cover shadow-sm transition duration-300 group-hover:scale-105"
                />
                <div className="min-w-0">
                  <h3 className="line-clamp-2 font-bold leading-snug text-nuit group-hover:text-teal">
                    {d.titre}
                  </h3>
                  <p className="mt-1 text-xs text-nuit/50">
                    {moisAnnee(d.date)} · {d.tempsLecture} de lecture
                  </p>
                </div>
              </Link>
            ))}

            {/* Tant qu'il y a moins de 4 dossiers : des emplacements « à venir » */}
            {Array.from({ length: placesVides }, (_, i) => (
              <div
                key={`vide-${i}`}
                className="flex items-center gap-4 rounded-2xl border border-dashed border-nuit/15 p-3"
              >
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-brume">
                  <Image src="/firefly-logo-black.png" alt="" width={48} height={42} className="opacity-20" />
                </div>
                <p className="text-sm text-nuit/40">
                  {i === 0 ? "Prochain dossier en préparation…" : "Bientôt"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
