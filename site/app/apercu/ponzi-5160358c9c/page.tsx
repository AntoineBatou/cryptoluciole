import Link from "next/link";

// Page d'aperçu PRIVÉE : non liée dans le site, non indexée par les moteurs.
// Seules les personnes qui ont le lien y accèdent.
export const metadata = {
  title: "Aperçu vidéo — CryptoLuciole",
  robots: { index: false, follow: false, nocache: true },
};

const VIDEO = "/apercu/ponzi-5160358c9c.mp4";

export default function ApercuPonziPage() {
  return (
    <div className="flex flex-1 flex-col bg-brume">
      <header className="bg-nuit px-6 py-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-teal-light">
          Aperçu privé
        </p>
        <h1 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
          🎥 La crypto, un Ponzi ?
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-white/70">
          Notre toute première vidéo. Dis-nous franchement ce que tu en penses !
        </p>
      </header>

      <main className="mx-auto w-full max-w-md px-6 py-10">
        <video
          src={VIDEO}
          poster="/apercu/ponzi-5160358c9c.jpg"
          controls
          playsInline
          preload="metadata"
          className="aspect-[9/16] w-full rounded-2xl bg-nuit shadow-lg"
        />

        <div className="mt-8 rounded-2xl bg-white p-6 text-nuit">
          <p className="font-bold">Tes retours nous aident 🙏</p>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-nuit/70">
            <li>As-tu accroché dès les premières secondes ?</li>
            <li>Le message est-il clair ?</li>
            <li>Rythme, son, sous-titres : qu'est-ce qui coince ?</li>
          </ul>
        </div>

        <p className="mt-8 text-center">
          <Link href="/" className="text-sm text-teal hover:underline">
            Découvrir CryptoLuciole →
          </Link>
        </p>
      </main>
    </div>
  );
}
