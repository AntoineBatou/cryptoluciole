import Image from "next/image";
import Link from "next/link";

// La page d'accueil de cryptoluciole.com.
// Tout ce qui est entre return( ... ) est l'affichage, écrit en JSX
// (du HTML enrichi). Les "className" sont des styles Tailwind.
export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      {/* ===== Barre de navigation ===== */}
      <header className="bg-nuit">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Image
              src="/firefly-logo-white.png"
              alt="CryptoLuciole"
              width={40}
              height={35}
            />
            <span className="text-xl font-bold text-white">CryptoLuciole</span>
          </div>
          <div className="hidden items-center gap-6 text-sm font-medium text-white/80 sm:flex">
            <Link href="/numeros" className="hover:text-white">
              Les numéros
            </Link>
            <a
              href="#inscription"
              className="rounded-full bg-luciole px-4 py-2 font-semibold text-nuit hover:opacity-90"
            >
              S&apos;inscrire
            </a>
          </div>
        </nav>
      </header>

      {/* ===== Hero (la grande accroche + inscription) ===== */}
      <section className="bg-nuit px-6 pb-20 pt-10 text-center">
        <div className="mx-auto max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-light">
            🪲 La newsletter qui éclaire la crypto
          </p>
          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            La crypto et la DeFi,
            <br />
            expliquées en moins de{" "}
            <span className="text-luciole">10 minutes</span>.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/70">
            Pas de jargon, pas de bruit. Une notion claire, deux actus
            analysées, un protocole décrypté. Pour comprendre — et savoir{" "}
            <em>comment faire</em>.
          </p>

          {/* Formulaire d'inscription (pas encore relié — on le branchera plus tard) */}
          <form
            id="inscription"
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="ton@email.com"
              className="w-full rounded-full border border-white/15 bg-white/5 px-5 py-3 text-white placeholder-white/40 outline-none focus:border-teal-light"
            />
            <button
              type="submit"
              className="rounded-full bg-luciole px-6 py-3 font-semibold text-nuit hover:opacity-90"
            >
              Je m&apos;inscris
            </button>
          </form>
          <p className="mt-3 text-xs text-white/40">
            Gratuit. Une édition par semaine. Désinscription en un clic.
          </p>
        </div>
      </section>

      {/* ===== Au menu (les rubriques) ===== */}
      <section id="numeros" className="bg-brume px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl font-bold text-nuit">
            Dans chaque édition
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["🔦", "On éclaire", "Une notion expliquée simplement."],
              ["✨", "Dans le faisceau", "Les actus qui comptent, analysées."],
              ["🔍", "Sous la loupe", "Un protocole ou une stratégie décrypté."],
              ["📊", "Les repères", "Les cours et leur évolution récente."],
              ["💡", "Ça brille", "La donnée de la semaine."],
              ["📖", "Définitions", "Les termes du secteur, au clair."],
            ].map(([emoji, titre, desc]) => (
              <div
                key={titre}
                className="rounded-2xl bg-white p-5 shadow-sm"
              >
                <div className="text-2xl">{emoji}</div>
                <h3 className="mt-2 font-bold text-nuit">{titre}</h3>
                <p className="mt-1 text-sm text-nuit/60">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Pied de page ===== */}
      <footer className="mt-auto bg-nuit px-6 py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 text-center">
          <div className="flex items-center gap-2">
            <Image
              src="/firefly-logo-white.png"
              alt=""
              width={28}
              height={24}
            />
            <span className="font-bold text-luciole">CryptoLuciole 🪲✨</span>
          </div>
          <p className="max-w-xl text-xs leading-relaxed text-white/50">
            ⚠️ Contenu purement pédagogique — pas un conseil en investissement.
            Fais tes propres recherches.
          </p>
        </div>
      </footer>
    </div>
  );
}
