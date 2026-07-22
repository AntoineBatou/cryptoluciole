// Image de partage (Open Graph) générée automatiquement pour CHAQUE dossier.
// Next.js expose ce fichier comme og:image sur /dossiers/<slug> → LinkedIn / X /
// Slack affichent une carte brandée avec le titre du dossier. Rien à créer à la
// main : le titre vient de dossiers.ts.
import { ImageResponse } from "next/og";
import { getDossier } from "../dossiers";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Dossier CryptoLuciole";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const dossier = getDossier(slug);
  const titre = dossier?.titre ?? "Dossier CryptoLuciole";
  const temps = dossier?.tempsLecture ?? "";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#1A2332",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 8, height: 44, background: "#F5A623" }} />
          <div style={{ color: "#F5A623", fontSize: 26, fontWeight: 700, letterSpacing: 3 }}>
            DOSSIER · CRYPTOLUCIOLE
          </div>
        </div>

        <div
          style={{
            display: "flex",
            color: "#f7f4ec",
            fontSize: titre.length > 55 ? 62 : 74,
            fontWeight: 800,
            lineHeight: 1.12,
            maxWidth: 1040,
          }}
        >
          {titre}
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", color: "#94a3b8", fontSize: 30 }}>
            {temps ? `${temps} de lecture` : "La crypto et la DeFi, expliquées"}
          </div>
          <div style={{ display: "flex", color: "#2ABFAB", fontSize: 30, fontWeight: 700 }}>
            cryptoluciole.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
