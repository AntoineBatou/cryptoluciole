// Figures du dossier — SVG « planches de guide de terrain », palette CryptoLuciole.
// Rendu net, filets fins, libellés en mono. Aucune dépendance externe.

const INK = "#1c2430";
const SOFT = "#5b6472";
const AMBER = "#f5a623";
const AMBERD = "#b26a00";
const TEAL = "#1f9e83";
const TEALD = "#0f7862";
const PAP2 = "#efeadd";
const BRICK = "#b13c2b";
const RED = "#dc2626";
const HAIR = "rgba(28,36,48,0.16)";

const mono = { fontFamily: "var(--font-mono), ui-monospace, monospace" as const };
const serif = { fontFamily: "var(--font-serif), Georgia, serif" as const };

function T(props: React.SVGProps<SVGTextElement>) {
  return <text style={mono} fill={INK} {...props} />;
}

/* 1 — Frise des trois temps */
function F1() {
  const nodes = [
    { x: 100, y: 96, r: 7, an: "2020-21", ph: "Le pionnier", sub: "diversification" },
    { x: 320, y: 96, r: 12, an: "2024-25", ph: "L'accumulation", sub: "la ruée systémique" },
    { x: 540, y: 96, r: 18, an: "2026", ph: "Le test", sub: "les primes cèdent" },
  ];
  return (
    <svg viewBox="0 0 640 180" width="100%" role="img" aria-label="Les trois temps des DAT">
      <line x1="70" y1="96" x2="570" y2="96" stroke={HAIR} strokeWidth="2" />
      {nodes.map((n, i) => (
        <g key={i}>
          {i < 2 && (
            <path
              d={`M ${n.x + n.r + 6} 96 L ${nodes[i + 1].x - nodes[i + 1].r - 12} 96`}
              stroke={AMBER}
              strokeWidth="2"
              markerEnd="url(#arrowA)"
            />
          )}
          <circle cx={n.x} cy={n.y} r={n.r} fill={i === 2 ? AMBER : "none"} stroke={i === 2 ? AMBERD : INK} strokeWidth="2" />
          <T x={n.x} y={44} textAnchor="middle" fontSize="13" fontWeight="600" fill={AMBERD}>
            {n.an}
          </T>
          <text x={n.x} y={150} textAnchor="middle" style={serif} fontSize="17" fill={INK}>
            {n.ph}
          </text>
          <T x={n.x} y={168} textAnchor="middle" fontSize="10.5" fill={SOFT}>
            {n.sub}
          </T>
        </g>
      ))}
      <defs>
        <marker id="arrowA" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0 0 L7 4 L0 8 z" fill={AMBER} />
        </marker>
      </defs>
    </svg>
  );
}

/* 2 — La flywheel */
function F2() {
  const cx = 300,
    cy = 165,
    R = 108;
  const steps = ["Prime (mNAV > 1)", "Émission d'actions", "Achat de crypto", "Crypto / action ↑", "Confiance → prime"];
  const pts = steps.map((_, i) => {
    const a = -Math.PI / 2 + (i * 2 * Math.PI) / 5;
    return { x: cx + R * Math.cos(a), y: cy + R * Math.sin(a), a };
  });
  return (
    <svg viewBox="0 0 600 340" width="100%" role="img" aria-label="La flywheel">
      <circle cx={cx} cy={cy} r={R} fill="none" stroke={HAIR} strokeWidth="1.5" strokeDasharray="2 5" />
      <path d={`M ${cx + R - 6} ${cy} A ${R} ${R} 0 0 1 ${cx} ${cy + R}`} fill="none" stroke={AMBER} strokeWidth="2.5" markerEnd="url(#arrowB)" />
      {pts.map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy={p.y} r={13} fill={PAP2} stroke={INK} strokeWidth="1.5" />
          <T x={p.x} y={p.y + 4} textAnchor="middle" fontSize="12" fontWeight="600">
            {i + 1}
          </T>
          <text
            x={cx + (R + 20) * Math.cos(p.a)}
            y={cy + (R + 20) * Math.sin(p.a) + 4}
            textAnchor={Math.cos(p.a) > 0.2 ? "start" : Math.cos(p.a) < -0.2 ? "end" : "middle"}
            style={serif}
            fontSize="13.5"
            fill={INK}
          >
            {steps[i]}
          </text>
        </g>
      ))}
      <defs>
        <marker id="arrowB" markerWidth="9" markerHeight="9" refX="5" refY="4.5" orient="auto">
          <path d="M0 0 L8 4.5 L0 9 z" fill={AMBER} />
        </marker>
      </defs>
    </svg>
  );
}

/* 3 — Escalier de séniorité */
function F3() {
  const steps = [
    { l: "Dette convertible", hi: false },
    { l: "STRF", hi: false },
    { l: "STRC", hi: true },
    { l: "STRK", hi: false },
    { l: "STRD", hi: false },
    { l: "Action ordinaire (MSTR)", hi: false },
  ];
  const w = 150,
    h = 30,
    sx = 30,
    sy = 40,
    dx = 62,
    dy = 34;
  return (
    <svg viewBox="0 0 560 300" width="100%" role="img" aria-label="L'escalier de séniorité">
      {steps.map((s, i) => {
        const x = sx + i * dx;
        const y = sy + i * dy;
        return (
          <g key={i}>
            <rect x={x} y={y} width={w} height={h} rx="2" fill={s.hi ? AMBER : PAP2} stroke={s.hi ? AMBERD : INK} strokeWidth="1.5" />
            <T x={x + w / 2} y={y + 20} textAnchor="middle" fontSize="12.5" fontWeight={s.hi ? "600" : "500"}>
              {s.l}
            </T>
          </g>
        );
      })}
      <T x={22} y={30} fontSize="11" fill={TEALD} fontWeight="600">
        ↓ payé d'abord
      </T>
      <T x={533} y={292} textAnchor="end" fontSize="11" fill={AMBERD} fontWeight="600">
        rendement ↑
      </T>
    </svg>
  );
}

/* 4 — Les deux leviers du STRC */
function F4() {
  const cx = 280,
    w = 150,
    top = 64,
    bot = 214;
  const x0 = cx - w / 2;
  const py = (p: number) => top + ((104 - p) / (104 - 92)) * (bot - top);
  const ticks = [101, 99, 95];
  return (
    <svg viewBox="0 0 560 290" width="100%" role="img" aria-label="Les deux leviers du STRC">
      {/* annotation haute (teal) */}
      <T x={cx} y={26} textAnchor="middle" fontSize="11" fontWeight="600" fill={TEALD}>
        AU-DESSUS DE 100 $ — l&apos;ATM émet
      </T>
      <text x={cx} y={44} textAnchor="middle" style={serif} fontSize="13.5" fill={INK}>
        l&apos;offre pousse le prix vers le bas, vers 100 $ ↓
      </text>

      <rect x={x0} y={top} width={w} height={bot - top} fill={PAP2} stroke={HAIR} />
      {ticks.map((p) => (
        <g key={p}>
          <line x1={x0} y1={py(p)} x2={x0 + w} y2={py(p)} stroke={HAIR} strokeWidth="1" />
          <T x={x0 - 10} y={py(p) + 4} textAnchor="end" fontSize="11" fill={SOFT}>
            {p} $
          </T>
        </g>
      ))}
      {/* pair 100 */}
      <line x1={x0 - 20} y1={py(100)} x2={x0 + w + 14} y2={py(100)} stroke={AMBERD} strokeWidth="2" strokeDasharray="5 4" />
      <T x={x0 + w + 20} y={py(100) + 4} fontSize="12" fontWeight="600" fill={AMBERD}>
        100 $ — le pair
      </T>
      {/* flèches convergentes vers le pair */}
      <path d={`M ${cx - 26} ${top + 12} L ${cx - 26} ${py(100) - 9}`} stroke={TEALD} strokeWidth="2.5" markerEnd="url(#arr4)" />
      <path d={`M ${cx + 26} ${bot - 12} L ${cx + 26} ${py(100) + 9}`} stroke={BRICK} strokeWidth="2.5" markerEnd="url(#arr4b)" />

      {/* annotation basse (brique) */}
      <text x={cx} y={bot + 34} textAnchor="middle" style={serif} fontSize="13.5" fill={INK}>
        le dividende monte et crée de la demande,
      </text>
      <text x={cx} y={bot + 52} textAnchor="middle" style={serif} fontSize="13.5" fill={INK}>
        qui pousse le prix vers 100 $ ↑
      </text>
      <T x={cx} y={bot + 68} textAnchor="middle" fontSize="10.5" fontWeight="600" fill={BRICK}>
        SOUS 100 $
      </T>

      <defs>
        <marker id="arr4" markerWidth="9" markerHeight="9" refX="4.5" refY="7" orient="auto">
          <path d="M0 0 L4.5 8 L9 0 z" fill={TEALD} />
        </marker>
        <marker id="arr4b" markerWidth="9" markerHeight="9" refX="4.5" refY="7" orient="auto">
          <path d="M0 0 L4.5 8 L9 0 z" fill={BRICK} />
        </marker>
      </defs>
    </svg>
  );
}

/* 5 — Lire une mNAV */
function F5() {
  const x0 = 60,
    w = 240,
    top = 44,
    bot = 250;
  const bands = [
    { from: top, to: 96, c: TEAL, label: "> 1,22×", note: "émission relutive — la roue tourne" },
    { from: 96, to: 168, c: AMBER, label: "1 à 1,22×", note: "prime, mais dilution destructrice" },
    { from: 168, to: bot, c: "#c9cdd3", label: "< 1", note: "décote — accumulation gelée" },
  ];
  return (
    <svg viewBox="0 0 520 300" width="100%" role="img" aria-label="Lire une mNAV">
      {bands.map((b, i) => (
        <g key={i}>
          <rect x={x0} y={b.from} width={w} height={b.to - b.from} fill={b.c} opacity={i === 2 ? 0.5 : 0.22} stroke={HAIR} />
          <T x={x0 + 14} y={(b.from + b.to) / 2 - 4} fontSize="14" fontWeight="600" fill={INK}>
            {b.label}
          </T>
          <text x={x0 + 14} y={(b.from + b.to) / 2 + 15} style={serif} fontSize="12.5" fill={INK}>
            {b.note}
          </text>
        </g>
      ))}
      {/* marqueur Strategy */}
      <line x1={x0 + w} y1={210} x2={x0 + w + 60} y2={210} stroke={BRICK} strokeWidth="1.5" />
      <circle cx={x0 + w} cy={210} r="4" fill={BRICK} />
      <T x={x0 + w + 66} y={206} fontSize="11.5" fontWeight="600" fill={BRICK}>
        Strategy
      </T>
      <T x={x0 + w + 66} y={221} fontSize="10.5" fill={SOFT}>
        27 juin 2026
      </T>
    </svg>
  );
}

/* 6 — L'édifice (pièce maîtresse) */
function F6() {
  const layers = [
    { l: "Levier — dette USDC sur Morpho", note: "liquidé le premier", top: true },
    { l: "PT-apyUSD — rendement figé (Pendle)", note: "hérite de la décote" },
    { l: "apyUSD — yield bearing token", note: "" },
    { l: "apxUSD — stablecoin de base", note: "décroche à 0,90 $" },
    { l: "Action STRC (bourse)", note: "la fissure part d'ici", base: true },
  ];
  const w = 300,
    h = 44,
    x = 70,
    gap = 8;
  return (
    <svg viewBox="0 0 520 300" width="100%" role="img" aria-label="L'édifice complet, du STRC au levier">
      {layers.map((ly, i) => {
        const y = 20 + i * (h + gap);
        return (
          <g key={i}>
            <rect x={x} y={y} width={w} height={h} rx="2" fill={ly.base ? INK : PAP2} stroke={ly.base ? INK : HAIR} strokeWidth="1.5" />
            <T x={x + 16} y={y + 27} fontSize="12.5" fontWeight={ly.base ? "600" : "500"} fill={ly.base ? "#f7f4ec" : INK}>
              {ly.l}
            </T>
            {ly.note && (
              <T x={x + w + 12} y={y + 27} fontSize="10.5" fill={ly.base ? BRICK : SOFT}>
                {ly.note}
              </T>
            )}
          </g>
        );
      })}
      {/* fissure qui remonte, côté droit pour ne pas croiser le texte */}
      <path
        d="M 334 268 L 326 232 L 342 196 L 328 158 L 342 120 L 332 72 L 336 44"
        fill="none"
        stroke={RED}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <T x={48} y={252} fontSize="10.5" fill={BRICK} fontWeight="600" transform="rotate(-90 48 252)">
        propagation ↑
      </T>
    </svg>
  );
}

/* Cadre commun pour les graphes à axes */
function Axes({ children, ylabels, y, x0, x1 }: { children: React.ReactNode; ylabels: { t: string; y: number }[]; y: number; x0: number; x1: number }) {
  return (
    <>
      {ylabels.map((l, i) => (
        <g key={i}>
          <line x1={x0} y1={l.y} x2={x1} y2={l.y} stroke={HAIR} strokeWidth="1" />
          <T x={x0 - 8} y={l.y + 4} textAnchor="end" fontSize="10.5" fill={SOFT}>
            {l.t}
          </T>
        </g>
      ))}
      <line x1={x0} y1={26} x2={x0} y2={y} stroke={HAIR} strokeWidth="1" />
      {children}
    </>
  );
}

/* 7 — Un an de STRC */
function F7() {
  const x0 = 52,
    x1 = 610,
    top = 30,
    bot = 250;
  const pmin = 68,
    pmax = 104;
  const py = (p: number) => top + ((pmax - p) / (pmax - pmin)) * (bot - top);
  const data: [string, number][] = [
    ["07/25", 95],
    ["09/25", 100],
    ["11/25", 92],
    ["01/26", 101],
    ["03/26", 100],
    ["05/26", 98.5],
    ["05/06", 93],
    ["17/06", 89],
    ["18/06", 82.5],
    ["26/06", 71.25],
    ["06/07", 88.6],
    ["16/07", 85.4],
  ];
  const px = (i: number) => x0 + (i / (data.length - 1)) * (x1 - x0);
  const pts = data.map(([, p], i) => `${px(i)},${py(p)}`).join(" ");
  return (
    <svg viewBox="0 0 640 290" width="100%" role="img" aria-label="Cours du STRC sur un an">
      <Axes x0={x0} x1={x1} y={bot} ylabels={[{ t: "100 $", y: py(100) }, { t: "90 $", y: py(90) }, { t: "80 $", y: py(80) }, { t: "70 $", y: py(70) }]}>
        <line x1={x0} y1={py(100)} x2={x1} y2={py(100)} stroke={AMBERD} strokeWidth="1.5" strokeDasharray="5 4" />
        <line x1={x0} y1={py(95)} x2={x1} y2={py(95)} stroke={HAIR} strokeWidth="1" strokeDasharray="2 3" />
        <polyline points={pts} fill="none" stroke={INK} strokeWidth="2" strokeLinejoin="round" />
        {data.map(([lab, p], i) => (
          <g key={i}>
            <circle cx={px(i)} cy={py(p)} r={i === 9 ? 4.5 : 2.5} fill={i === 9 ? BRICK : INK} />
            {i % 2 === 0 && (
              <T x={px(i)} y={bot + 18} textAnchor="middle" fontSize="9.5" fill={SOFT}>
                {lab}
              </T>
            )}
          </g>
        ))}
        <T x={px(9) + 12} y={py(71.25) + 2} fontSize="11" fontWeight="600" fill={BRICK}>
          71,25 $
        </T>
        <T x={px(9) + 12} y={py(71.25) + 16} fontSize="9.5" fill={SOFT}>
          plus-bas · 26 juin
        </T>
      </Axes>
      <T x={x1} y={py(100) - 7} textAnchor="end" fontSize="10" fill={AMBERD}>
        le pair
      </T>
    </svg>
  );
}

/* 8 — apxUSD vs USDat */
function F8() {
  const x0 = 52,
    x1 = 520,
    top = 34,
    bot = 190;
  const py = (v: number) => top + ((1.02 - v) / (1.02 - 0.85)) * (bot - top);
  const px = (i: number, n: number) => x0 + (i / (n - 1)) * (x1 - x0);
  const apx: number[] = [1.0, 1.0, 0.9, 0.89, 0.9, 0.89];
  const usdat: number[] = [1.0, 1.0, 0.999, 1.0, 1.0, 1.0];
  const labs = ["mai", "1 juin", "5 juin", "18 juin", "1 juil", "17 juil"];
  return (
    <svg viewBox="0 0 560 240" width="100%" role="img" aria-label="apxUSD contre USDat">
      <Axes x0={x0} x1={x1} y={bot} ylabels={[{ t: "1,00 $", y: py(1.0) }, { t: "0,95", y: py(0.95) }, { t: "0,90", y: py(0.9) }]}>
        <line x1={x0} y1={py(1.0)} x2={x1} y2={py(1.0)} stroke={AMBERD} strokeWidth="1.2" strokeDasharray="5 4" />
        <polyline points={usdat.map((v, i) => `${px(i, 6)},${py(v)}`).join(" ")} fill="none" stroke={TEALD} strokeWidth="2" />
        <polyline points={apx.map((v, i) => `${px(i, 6)},${py(v)}`).join(" ")} fill="none" stroke={BRICK} strokeWidth="2" />
        {labs.map((l, i) => (
          <T key={i} x={px(i, 6)} y={bot + 18} textAnchor="middle" fontSize="9.5" fill={SOFT}>
            {l}
          </T>
        ))}
      </Axes>
      <g>
        <line x1={x1 - 96} y1={30} x2={x1 - 80} y2={30} stroke={TEALD} strokeWidth="2" />
        <T x={x1 - 74} y={34} fontSize="10.5" fill={INK}>
          USDat (Treasuries)
        </T>
        <line x1={x1 - 96} y1={48} x2={x1 - 80} y2={48} stroke={BRICK} strokeWidth="2" />
        <T x={x1 - 74} y={52} fontSize="10.5" fill={INK}>
          apxUSD (STRC)
        </T>
      </g>
    </svg>
  );
}

/* 9 — Le pool Pendle (liquidité + taux) */
function F9() {
  return (
    <svg viewBox="0 0 560 250" width="100%" role="img" aria-label="Le pool Pendle du 1er au 5 juin">
      {/* panneau gauche : liquidité */}
      <T x={40} y={26} fontSize="11" fontWeight="600" fill={INK}>
        Liquidité du pool
      </T>
      {[
        { x: 60, v: 13.7, lab: "1 juin", h: 150 },
        { x: 150, v: 8.6, lab: "5 juin", h: 94 },
      ].map((b, i) => (
        <g key={i}>
          <rect x={b.x} y={200 - b.h} width="56" height={b.h} fill={i === 0 ? TEAL : "#c9cdd3"} stroke={HAIR} />
          <T x={b.x + 28} y={200 - b.h - 8} textAnchor="middle" fontSize="12" fontWeight="600" fill={INK}>
            {b.v.toString().replace(".", ",")} M$
          </T>
          <T x={b.x + 28} y={216} textAnchor="middle" fontSize="10" fill={SOFT}>
            {b.lab}
          </T>
        </g>
      ))}
      <T x={88} y={236} textAnchor="middle" fontSize="10.5" fontWeight="600" fill={BRICK}>
        −37 % en 4 jours
      </T>
      {/* séparateur */}
      <line x1="290" y1="20" x2="290" y2="230" stroke={HAIR} strokeWidth="1" />
      {/* panneau droite : taux implicite */}
      <T x={330} y={26} fontSize="11" fontWeight="600" fill={INK}>
        Taux implicite du PT
      </T>
      {(() => {
        const x0 = 340,
          x1 = 520,
          top = 60,
          bot = 190;
        const ry = (r: number) => bot - ((r - 15) / (35 - 15)) * (bot - top);
        return (
          <>
            <line x1={x0} y1={bot} x2={x1} y2={bot} stroke={HAIR} />
            <polyline points={`${x0},${ry(21)} ${x1},${ry(31)}`} fill="none" stroke={AMBERD} strokeWidth="2.5" />
            <circle cx={x0} cy={ry(21)} r="4" fill={AMBERD} />
            <circle cx={x1} cy={ry(31)} r="4" fill={AMBERD} />
            <T x={x0} y={ry(21) + 18} textAnchor="middle" fontSize="12" fontWeight="600" fill={INK}>
              21 %
            </T>
            <T x={x1} y={ry(31) - 10} textAnchor="middle" fontSize="12" fontWeight="600" fill={INK}>
              31 %
            </T>
            <T x={x0} y={216} textAnchor="middle" fontSize="10" fill={SOFT}>
              1 juin
            </T>
            <T x={x1} y={216} textAnchor="middle" fontSize="10" fill={SOFT}>
              5 juin
            </T>
          </>
        );
      })()}
    </svg>
  );
}

/* 10 — Liquidations par marché */
function F10() {
  const rows = [
    { m: "apyUSD / USDC", v: 5.21, real: true },
    { m: "PT-apyUSD-18JUN / USDC", v: 4.26, real: true },
    { m: "sUSDat / AUSD", v: 1.93, real: true },
    { m: "PT-apyUSD-5NOV / USDC", v: 1.61, real: true },
    { m: "apyUSD / apxUSD", v: 0.076, real: false },
  ];
  const x0 = 210,
    max = 5.21,
    scale = 300;
  return (
    <svg viewBox="0 0 560 280" width="100%" role="img" aria-label="Liquidations de juin par marché">
      {rows.map((r, i) => {
        const y = 30 + i * 46;
        const w = Math.max((r.v / max) * scale, 3);
        return (
          <g key={i}>
            <T x={x0 - 10} y={y + 15} textAnchor="end" fontSize="11" fill={INK}>
              {r.m}
            </T>
            <rect x={x0} y={y} width={w} height={22} rx="1.5" fill={r.real ? AMBER : TEAL} stroke={r.real ? AMBERD : TEALD} strokeWidth="1" />
            <T x={x0 + w + 8} y={y + 16} fontSize="11.5" fontWeight="600" fill={INK}>
              {r.v.toString().replace(".", ",")} M$
            </T>
          </g>
        );
      })}
      {/* légende */}
      <g>
        <rect x={x0} y={262} width="12" height="12" fill={AMBER} stroke={AMBERD} />
        <T x={x0 + 18} y={272} fontSize="10.5" fill={SOFT}>
          dette en vrais dollars
        </T>
        <rect x={x0 + 170} y={262} width="12" height="12" fill={TEAL} stroke={TEALD} />
        <T x={x0 + 188} y={272} fontSize="10.5" fill={SOFT}>
          dette en même monnaie
        </T>
      </g>
    </svg>
  );
}

const FIGS: Record<number, () => React.JSX.Element> = {
  1: F1,
  2: F2,
  3: F3,
  4: F4,
  5: F5,
  6: F6,
  7: F7,
  8: F8,
  9: F9,
  10: F10,
};

export function DossierFigure({ id, titre, legende }: { id: number; titre: string; legende: string }) {
  const Fig = FIGS[id];
  return (
    <figure className="print-avoid-break my-2">
      <div className="rounded-sm border border-[color:var(--color-encre)]/12 bg-white px-4 py-6 sm:px-8">
        <p
          className="mb-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-[color:var(--color-ambre-fonce)]"
          style={{ fontFamily: "var(--font-mono), monospace" }}
        >
          Figure {id} — {titre}
        </p>
        {/* Sur mobile, la figure garde une largeur lisible et défile plutôt que de rétrécir. */}
        <div className="overflow-x-auto">
          <div className="min-w-[440px]">{Fig ? <Fig /> : null}</div>
        </div>
      </div>
      <figcaption
        className="mt-2 text-[13px] leading-relaxed text-[color:var(--color-encre)]/55"
        style={{ fontFamily: "var(--font-mono), monospace" }}
      >
        {legende}
      </figcaption>
    </figure>
  );
}
