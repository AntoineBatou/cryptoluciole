// Figures SVG du dossier Metric (clés « metric-N », référencées dans dossier.md).
// Même vocabulaire visuel que les figures du DAT : encre, ambre = ce qui compte,
// teal = l'USDC / le résultat, brique = la perte.

const INK = "#1c2430";
const SOFT = "#5b6472";
const AMBER = "#f5a623";
const AMBERD = "#b26a00";
const TEAL = "#1f9e83";
const TEALD = "#0f7862";
const BRICK = "#b13c2b";
const HAIR = "rgba(28,36,48,0.16)";

const mono = { fontFamily: "var(--font-mono), ui-monospace, monospace" as const };
const serif = { fontFamily: "var(--font-serif), Georgia, serif" as const };

function T(props: React.SVGProps<SVGTextElement>) {
  return <text style={mono} fill={INK} {...props} />;
}

function Fleche({ id, color }: { id: string; color: string }) {
  return (
    <marker id={id} markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0 0 L7 4 L0 8 z" fill={color} />
    </marker>
  );
}

/* 1 — Quand le marché monte : Uniswap attend l'arbitrageur, Metric déplace sa grille */
function M1() {
  const bins = [-3, -2, -1, 0, 1, 2];
  const grille = (y: number, opacity: number, dashed?: boolean) =>
    bins.map((b) => (
      <rect
        key={`${y}-${b}`}
        x={410 + (b + 3) * 30}
        y={y - 9}
        width={26}
        height={18}
        fill={b < 0 ? TEAL : AMBER}
        fillOpacity={opacity * (b < 0 ? 0.35 : 0.45)}
        stroke={b < 0 ? TEALD : AMBERD}
        strokeOpacity={opacity}
        strokeDasharray={dashed ? "3 3" : undefined}
      />
    ));
  return (
    <svg viewBox="0 0 640 270" width="100%" role="img" aria-label="Uniswap et Metric quand le marché monte">
      <defs>
        <Fleche id="m1a" color={BRICK} />
        <Fleche id="m1b" color={AMBERD} />
      </defs>
      {/* Panneau gauche */}
      <text x={150} y={24} textAnchor="middle" style={serif} fontSize="17" fill={INK}>
        Uniswap
      </text>
      <line x1={30} y1={80} x2={280} y2={80} stroke={AMBER} strokeWidth="2" strokeDasharray="6 4" />
      <T x={30} y={70} fontSize="11" fill={AMBERD}>
        marché (Binance) : 2 200 $
      </T>
      <line x1={30} y1={180} x2={280} y2={180} stroke={INK} strokeWidth="2.5" />
      <T x={30} y={200} fontSize="11">
        prix de la pool : 2 000 $
      </T>
      <path d="M 200 174 L 200 92" stroke={BRICK} strokeWidth="2" markerEnd="url(#m1a)" />
      <T x={208} y={128} fontSize="10.5" fill={BRICK}>
        l&apos;arbitrageur achète
      </T>
      <T x={208} y={142} fontSize="10.5" fill={BRICK}>
        l&apos;ETH sous le prix
      </T>
      <T x={150} y={250} textAnchor="middle" fontSize="11" fill={SOFT}>
        le LP paie le réalignement (LVR)
      </T>

      <line x1={320} y1={40} x2={320} y2={240} stroke={HAIR} />

      {/* Panneau droit */}
      <text x={500} y={24} textAnchor="middle" style={serif} fontSize="17" fill={INK}>
        Metric
      </text>
      {grille(180, 0.35, true)}
      {grille(80, 1)}
      <line x1={500} y1={60} x2={500} y2={100} stroke={INK} strokeWidth="2" />
      <T x={500} y={54} textAnchor="middle" fontSize="11" fill={AMBERD}>
        oracle : 2 200 $
      </T>
      <line x1={500} y1={166} x2={500} y2={196} stroke={INK} strokeOpacity="0.35" strokeWidth="2" />
      <T x={500} y={212} textAnchor="middle" fontSize="11" fill={SOFT}>
        avant : 2 000 $
      </T>
      <path d="M 600 168 L 600 96" stroke={AMBERD} strokeWidth="2" markerEnd="url(#m1b)" />
      <T x={500} y={250} textAnchor="middle" fontSize="11" fill={SOFT}>
        l&apos;oracle déplace la grille, aucun token ne bouge
      </T>
    </svg>
  );
}

/* 2 — La grille de bins autour de l'oracle */
function M2() {
  const bins = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4];
  const haut = [34, 52, 76, 104, 128, 120, 92, 70, 50, 32];
  const base = 200;
  const x = (b: number) => 70 + (b + 5) * 50;
  return (
    <svg viewBox="0 0 640 270" width="100%" role="img" aria-label="La grille de bins autour de l'oracle">
      <defs>
        <Fleche id="m2a" color={INK} />
      </defs>
      <line x1={60} y1={base} x2={580} y2={base} stroke={INK} strokeWidth="1.5" />
      {bins.map((b, i) => {
        const actif = b === 0;
        const h = haut[i];
        return (
          <g key={b}>
            {actif ? (
              <>
                <rect x={x(b) + 3} y={base - h} width={44} height={h * 0.55} fill={AMBER} fillOpacity="0.45" stroke={AMBERD} />
                <rect x={x(b) + 3} y={base - h * 0.45} width={44} height={h * 0.45} fill={TEAL} fillOpacity="0.35" stroke={TEALD} />
              </>
            ) : (
              <rect
                x={x(b) + 3}
                y={base - h}
                width={44}
                height={h}
                fill={b < 0 ? TEAL : AMBER}
                fillOpacity={b < 0 ? 0.35 : 0.45}
                stroke={b < 0 ? TEALD : AMBERD}
              />
            )}
            <T x={x(b) + 25} y={base + 16} textAnchor="middle" fontSize="10" fill={SOFT}>
              {b >= 0 ? `+${b}` : b}
            </T>
          </g>
        );
      })}
      <T x={x(5) + 6} y={base + 16} fontSize="10" fill={SOFT}>
        % vs oracle
      </T>
      {/* Oracle */}
      <line x1={x(0)} y1={40} x2={x(0)} y2={base} stroke={INK} strokeWidth="2" strokeDasharray="5 4" />
      <T x={x(0)} y={32} textAnchor="middle" fontSize="11" fontWeight="600">
        référence (oracle)
      </T>
      {/* Déviation */}
      <path d={`M ${x(0) + 22} 238 L ${x(0) + 22} 222`} stroke={INK} strokeWidth="2" markerEnd="url(#m2a)" />
      <T x={x(0) + 22} y={254} textAnchor="middle" fontSize="10.5">
        déviation (bin actif)
      </T>
      {/* Légendes */}
      <T x={x(-5) + 4} y={60} fontSize="11" fill={TEALD} fontWeight="600">
        USDC
      </T>
      <T x={x(-5) + 4} y={75} fontSize="10" fill={SOFT}>
        achète l&apos;ETH des vendeurs
      </T>
      <T x={x(4) + 46} y={60} textAnchor="end" fontSize="11" fill={AMBERD} fontWeight="600">
        ETH
      </T>
      <T x={x(4) + 46} y={75} textAnchor="end" fontSize="10" fill={SOFT}>
        vendu aux acheteurs
      </T>
    </svg>
  );
}

/* 3 — L'aller-retour : seul le spread reste */
function M3() {
  // x : ETH échangés (0 → 3) ; y : prix par ETH (1 995 → 2 040)
  const X = (e: number) => 90 + e * 140;
  const Y = (p: number) => 220 - (p - 1995) * 4;
  return (
    <svg viewBox="0 0 640 270" width="100%" role="img" aria-label="L'aller-retour d'une pool Metric">
      <line x1={80} y1={Y(1995)} x2={530} y2={Y(1995)} stroke={HAIR} />
      {[2000, 2010, 2020, 2030].map((p) => (
        <g key={p}>
          <line x1={80} y1={Y(p)} x2={530} y2={Y(p)} stroke={HAIR} strokeDasharray="2 4" />
          <T x={72} y={Y(p) + 4} textAnchor="end" fontSize="10" fill={SOFT}>
            {p.toLocaleString("fr-FR")}
          </T>
        </g>
      ))}
      {/* Acheteur */}
      <path
        d={`M ${X(0)} ${Y(2020)} L ${X(2)} ${Y(2020)} L ${X(2)} ${Y(2035)} L ${X(3)} ${Y(2035)}`}
        fill="none"
        stroke={AMBERD}
        strokeWidth="3"
      />
      {/* Vendeur */}
      <path
        d={`M ${X(0)} ${Y(2000)} L ${X(2)} ${Y(2000)} L ${X(2)} ${Y(2015)} L ${X(3)} ${Y(2015)}`}
        fill="none"
        stroke={TEALD}
        strokeWidth="3"
      />
      {/* Bande de spread */}
      <path
        d={`M ${X(0)} ${Y(2020)} L ${X(2)} ${Y(2020)} L ${X(2)} ${Y(2035)} L ${X(3)} ${Y(2035)} L ${X(3)} ${Y(2015)} L ${X(2)} ${Y(2015)} L ${X(2)} ${Y(2000)} L ${X(0)} ${Y(2000)} z`}
        fill={AMBER}
        fillOpacity="0.14"
      />
      <T x={X(1)} y={Y(2020) - 8} textAnchor="middle" fontSize="11" fill={AMBERD}>
        l&apos;acheteur paie 2 020 $ puis 2 035 $
      </T>
      <T x={X(1)} y={Y(2000) + 18} textAnchor="middle" fontSize="11" fill={TEALD}>
        le vendeur reçoit 2 000 $ puis 2 015 $
      </T>
      {[0, 1, 2, 3].map((e) => (
        <T key={e} x={X(e)} y={250} textAnchor="middle" fontSize="10" fill={SOFT}>
          {e}
        </T>
      ))}
      <T x={X(3) + 10} y={250} fontSize="10" fill={SOFT}>
        ETH échangés
      </T>
      <text x={548} y={Y(2025)} style={serif} fontSize="15" fill={INK}>
        écart
      </text>
      <text x={548} y={Y(2025) + 20} style={serif} fontSize="15" fill={AMBERD}>
        = 60 USDC
      </text>
      <T x={548} y={Y(2025) + 38} fontSize="10" fill={SOFT}>
        pour les LP
      </T>
    </svg>
  );
}

/* 4 — À qui appartient la liquidité */
function M4() {
  const parts = [
    { nom: "Carcosa", pct: 63, fill: AMBER, op: 0.75 },
    { nom: "0x3216FB…", pct: 33, fill: TEAL, op: 0.6 },
    { nom: "327 autres", pct: 4, fill: SOFT, op: 0.35 },
  ];
  let x = 40;
  const W = 560;
  return (
    <svg viewBox="0 0 640 175" width="100%" role="img" aria-label="Répartition de la liquidité par curator">
      {parts.map((p) => {
        const w = (p.pct / 100) * W;
        const g = (
          <g key={p.nom}>
            <rect x={x} y={50} width={w} height={46} fill={p.fill} fillOpacity={p.op} stroke={INK} strokeOpacity="0.25" />
            {p.pct >= 10 && (
              <text x={x + w / 2} y={80} textAnchor="middle" style={serif} fontSize="20" fill={INK}>
                {p.pct} %
              </text>
            )}
            <T x={p.pct >= 10 ? x + w / 2 : x + w} y={p.pct >= 10 ? 120 : 136} textAnchor={p.pct >= 10 ? "middle" : "end"} fontSize="11" fill={p.pct >= 10 ? INK : SOFT}>
              {p.nom}
              {p.pct < 10 ? ` · ${p.pct} %` : ""}
            </T>
          </g>
        );
        x += w;
        return g;
      })}
      <path d={`M 40 36 L ${40 + 0.96 * W} 36`} stroke={BRICK} strokeWidth="1.5" />
      <path d={`M 40 30 L 40 42 M ${40 + 0.96 * W} 30 L ${40 + 0.96 * W} 42`} stroke={BRICK} strokeWidth="1.5" />
      <T x={40 + 0.48 * W} y={26} textAnchor="middle" fontSize="11" fill={BRICK} fontWeight="600">
        96 % dans les pools de deux market makers
      </T>
      <T x={40} y={160} fontSize="10" fill={SOFT}>
        15,8 M$ déposés sur les 902 pools publiques · 30 oct. 2026
      </T>
    </svg>
  );
}

/* 5 — De l'APR affiché au résultat réel */
function M5() {
  const Y = (v: number) => 210 - v * 4;
  const bar = (x: number, from: number, to: number, fill: string, op: number) => (
    <rect x={x} y={Y(Math.max(from, to))} width={110} height={Math.abs(to - from) * 4} fill={fill} fillOpacity={op} stroke={fill} />
  );
  return (
    <svg viewBox="0 0 640 260" width="100%" role="img" aria-label="De l'Edge APR au Trading PnL">
      <line x1={60} y1={Y(0)} x2={600} y2={Y(0)} stroke={INK} strokeWidth="1.5" />
      {[10, 20, 30, 40].map((v) => (
        <g key={v}>
          <line x1={60} y1={Y(v)} x2={600} y2={Y(v)} stroke={HAIR} strokeDasharray="2 4" />
          <T x={52} y={Y(v) + 4} textAnchor="end" fontSize="10" fill={SOFT}>
            {v} %
          </T>
        </g>
      ))}
      {bar(100, 0, 40, AMBER, 0.6)}
      {bar(265, 40, 15, BRICK, 0.35)}
      {bar(430, 0, 15, TEAL, 0.55)}
      <path d={`M 210 ${Y(40)} L 265 ${Y(40)}`} stroke={INK} strokeOpacity="0.4" strokeDasharray="3 3" />
      <path d={`M 375 ${Y(15)} L 430 ${Y(15)}`} stroke={INK} strokeOpacity="0.4" strokeDasharray="3 3" />
      <text x={155} y={Y(40) - 8} textAnchor="middle" style={serif} fontSize="18" fill={AMBERD}>
        ~40 %
      </text>
      <text x={320} y={Y(15) + 22} textAnchor="middle" style={serif} fontSize="18" fill={BRICK}>
        −25 pts
      </text>
      <text x={485} y={Y(15) - 8} textAnchor="middle" style={serif} fontSize="18" fill={TEALD}>
        ~15 %
      </text>
      <T x={155} y={232} textAnchor="middle" fontSize="10.5">
        Edge APR affiché
      </T>
      <T x={320} y={232} textAnchor="middle" fontSize="10.5">
        sélection adverse
      </T>
      <T x={485} y={232} textAnchor="middle" fontSize="10.5">
        Trading PnL
      </T>
      <T x={320} y={250} textAnchor="middle" fontSize="10" fill={SOFT}>
        22 pools &gt; 100 k$, pondéré par les fonds déposés, 7 jours
      </T>
    </svg>
  );
}

export const METRIC_FIGS: Record<string, () => React.JSX.Element> = {
  "metric-1": M1,
  "metric-2": M2,
  "metric-3": M3,
  "metric-4": M4,
  "metric-5": M5,
};
