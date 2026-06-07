import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Police Inter (celle de la newsletter), chargée par Next automatiquement.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Ces infos s'affichent dans l'onglet du navigateur et pour le partage.
export const metadata: Metadata = {
  title: "CryptoLuciole — la crypto expliquée en 10 min",
  description:
    "La crypto et la DeFi sans le jargon. Une notion, deux actus analysées, un protocole décrypté — en moins de 10 minutes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
