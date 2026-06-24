import Link from "next/link";

export const metadata = {
  title: "Tutos — CryptoLuciole",
  description: "Des tutos vidéo de ~15 min pour passer à la pratique, pas à pas.",
};

export default function TutosPage() {
  return (
    <div className="flex flex-1 flex-col bg-brume">
      <header className="bg-nuit px-6 py-12 text-center">
        <Link href="/" className="text-sm text-teal-light hover:text-white">
          ← Accueil
        </Link>
        <h1 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">🎥 Tutos</h1>
        <p className="mx-auto mt-3 max-w-xl text-white/70">
          Bientôt : des vidéos de ~15 min où l'on fait la manip en direct, pas à pas.
        </p>
      </header>

      <main className="mx-auto w-full max-w-2xl px-6 py-16 text-center">
        <p className="text-5xl">🚧</p>
        <p className="mt-4 text-lg font-semibold text-nuit">Les tutos arrivent bientôt</p>
        <p className="mt-2 leading-relaxed text-nuit/60">
          Premier exemple prévu : « Comment utiliser un protocole de restaking ».
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
