"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const liens = [
  ["/numeros", "Les numéros"],
  ["/dossiers", "Dossiers"],
  ["/glossaire", "Glossaire"],
  ["/protocoles", "Protocoles"],
  ["/tutos", "Tutos"],
];

// Barre de navigation. Sur mobile (< 640px) les liens passent derrière
// un bouton burger : sans ça, ils étaient purement et simplement invisibles.
export default function Nav() {
  const [ouvert, setOuvert] = useState(false);

  return (
    <header className="bg-nuit">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/firefly-logo-white.png"
            alt="CryptoLuciole"
            width={40}
            height={35}
          />
          <span className="text-xl font-bold text-white">CryptoLuciole</span>
        </Link>

        {/* Liens visibles directement à partir du format tablette */}
        <div className="hidden items-center gap-6 text-sm font-medium text-white/80 sm:flex">
          {liens.map(([href, label]) => (
            <Link key={href} href={href} className="hover:text-white">
              {label}
            </Link>
          ))}
          <Link
            href="/#inscription"
            className="rounded-full bg-luciole px-4 py-2 font-semibold text-nuit hover:opacity-90"
          >
            S&apos;inscrire
          </Link>
        </div>

        {/* Bouton burger, mobile uniquement */}
        <button
          type="button"
          onClick={() => setOuvert(!ouvert)}
          aria-expanded={ouvert}
          aria-label="Menu"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white/80 hover:bg-white/10 hover:text-white sm:hidden"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden
          >
            {ouvert ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Panneau déroulant mobile */}
      {ouvert && (
        <div className="border-t border-white/10 px-6 pb-5 pt-2 sm:hidden">
          <div className="flex flex-col">
            {liens.map(([href, label]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOuvert(false)}
                className="border-b border-white/10 py-3 text-base font-medium text-white/80 hover:text-white"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/#inscription"
              onClick={() => setOuvert(false)}
              className="mt-4 rounded-full bg-luciole px-4 py-3 text-center font-semibold text-nuit hover:opacity-90"
            >
              S&apos;inscrire
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
