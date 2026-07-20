import { Newsreader, IBM_Plex_Mono } from "next/font/google";

// Serif éditoriale (titres, exergues, italiques de citation) — registre « investigation ».
const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

// Mono technique (repères de chapitre, eyebrows, chiffres) — texture « registre financier ».
const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function DossiersLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${newsreader.variable} ${plexMono.variable}`}>{children}</div>;
}
