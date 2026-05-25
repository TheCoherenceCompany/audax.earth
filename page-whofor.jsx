/* Audax OS site · Who For? page — full redesign
   17 question-led sections answering: who is this OS actually for?
   Each major audience gets a bespoke diagram. Hero is an animated
   ecosystem of organisational species. */

const HERO_WHO = 'assets/backgrounds/The_Gathering_httpss.mj.runLwdlSY4QCLA_abstract_horizontal_in_4a2611be-ea74-45f7-96c4-c3168455b410_3.png';

/* ─── helpers ─────────────────────────────────────────────────────────── */
const MONO = 'JetBrains Mono, monospace';
const SERIF = 'Instrument Serif, serif';
const FOREST = '#1F4D2E', FOREST_MID = '#3F8657', LICHEN = '#9CBFA3';
const INK = '#0E2419', MUTED = '#807D72';

/* ─── 1 · HERO DIAGRAM ─ Animated ecosystem of organisational species ── */
const EcosystemDiagram = () => {
  const [t, setT] = React.useState(0);
  React.useEffect(() => {
    let raf, last = performance.now();
    const tick = (now) => {
      setT(x => x + (now - last) / 1000); last = now;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const species = [
    { label: 'Startup',    glyph: '◆', ring: 0, ang: 0.00 },
    { label: 'Nonprofit',  glyph: '✦', ring: 0, ang: 0.33 },
    { label: 'DAO',        glyph: '◇', ring: 0, ang: 0.66 },
    { label: 'Community',  glyph: '◉', ring: 1, ang: 0.08 },
    { label: 'Studio',     glyph: '▲', ring: 1, ang: 0.25 },
    { label: 'Research',   glyph: '○', ring: 1, ang: 0.42 },
    { label: 'Student',    glyph: '✺', ring: 1, ang: 0.59 },
    { label: 'Civic',      glyph: '✚', ring: 1, ang: 0.76 },
    { label: 'Cooperative',glyph: '◑', ring: 1, ang: 0.93 },
    { label: 'Network',    glyph: '✣', ring: 2, ang: 0.05 },
    { label: 'Movement',   glyph: '✶', ring: 2, ang: 0.20 },
    { label: 'Lab',        glyph: '⬡', ring: 2, ang: 0.35 },
    { label: 'Venture',    glyph: '⬢', ring: 2, ang: 0.50 },
    { label: 'Guild',      glyph: '✱', ring: 2, ang: 0.65 },
    { label: 'Alliance',   glyph: '◐', ring: 2, ang: 0.80 },
    { label: 'Field',      glyph: '✥', ring: 2, ang: 0.95 }
  ];
  const ringR = [110, 195, 280];
  const ringSpeed = [0.06, -0.035, 0.022];

  return (
    <div className="diagram-axes" style={{ maxWidth: 720, margin: '40px auto 0' }}>
      <svg viewBox="-340 -340 680 680" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Ecosystem of organisational species around Audax OS">
        <defs>
          <radialGradient id="wf-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E2EBDD" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#E2EBDD" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="wf-core" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#4A9E63" />
            <stop offset="100%" stopColor="#1F4D2E" />
          </radialGradient>
        </defs>

        <circle cx="0" cy="0" r="320" fill="url(#wf-glow)" />

        {/* orbit rings */}
        {ringR.map((r, i) => (
          <circle key={i} cx="0" cy="0" r={r} fill="none" stroke={LICHEN} strokeWidth="0.8" opacity="0.4" strokeDasharray={i === 2 ? '3 5' : 'none'} />
        ))}

        {/* mycelial connections from core to ring 1 species */}
        <g stroke={FOREST_MID} strokeWidth="0.5" fill="none" opacity="0.35">
          {species.filter(s => s.ring < 2).map((s, i) => {
            const a = (s.ang + t * ringSpeed[s.ring]) * Math.PI * 2;
            const r = ringR[s.ring];
            const x = Math.cos(a) * r, y = Math.sin(a) * r;
            return <path key={i} d={`M 0 0 Q ${x * 0.4} ${y * 0.4 - 20} ${x} ${y}`} />;
          })}
        </g>

        {/* species nodes */}
        {species.map((s, i) => {
          const a = (s.ang + t * ringSpeed[s.ring]) * Math.PI * 2;
          const r = ringR[s.ring];
          const x = Math.cos(a) * r, y = Math.sin(a) * r;
          const nodeR = s.ring === 0 ? 30 : s.ring === 1 ? 24 : 18;
          const fillCol = s.ring === 0 ? '#FFFFFF' : s.ring === 1 ? '#FBFAF3' : '#F0F4EC';
          const labelOpacity = s.ring === 2 ? 0.5 : 1;
          return (
            <g key={i} transform={`translate(${x} ${y})`} opacity={labelOpacity}>
              <circle cx="0" cy="0" r={nodeR} fill={fillCol} stroke={FOREST} strokeWidth="1.1" />
              <text x="0" y="2" textAnchor="middle" fontFamily={SERIF} fontSize={s.ring === 0 ? 18 : 14} fill={INK}>{s.glyph}</text>
              <text x="0" y={nodeR + 14} textAnchor="middle" fontFamily={MONO} fontSize={s.ring === 2 ? 8 : 9} letterSpacing="0.14em" fill={MUTED}>
                {s.label.toUpperCase()}
              </text>
            </g>
          );
        })}

        {/* core */}
        <g>
          <circle cx="0" cy="0" r="62" fill="url(#wf-core)" />
          <text x="0" y="-4" textAnchor="middle" fontFamily={SERIF} fontSize="22" fill="#fff" fontStyle="italic">Audax</text>
          <text x="0" y="18" textAnchor="middle" fontFamily={MONO} fontSize="9" letterSpacing="0.28em" fill="#A8CDB0">OS</text>
        </g>
      </svg>
    </div>
  );
};

/* ─── 2 · META-CATEGORY ─ many forms → shared functions ───────────────── */
const MetaCategoryDiagram = () => {
  const forms = ['Company', 'Nonprofit', 'DAO', 'Community', 'Studio', 'Cooperative', 'Network', 'Movement'];
  const funcs = ['Purpose', 'Agreements', 'Work', 'Value', 'Trust', 'Communication', 'Learning', 'Decisions', 'Boundaries', 'Memory'];
  const lh = 32;
  return (
    <div style={{ maxWidth: 880, margin: '0 auto' }}>
      <svg viewBox="0 0 880 360" preserveAspectRatio="xMidYMid meet" style={{ width: '100%', display: 'block' }}>
        <text x="60" y="30" fontFamily={MONO} fontSize="10" letterSpacing="0.22em" fill={MUTED}>FORMS</text>
        <text x="820" y="30" textAnchor="end" fontFamily={MONO} fontSize="10" letterSpacing="0.22em" fill={MUTED}>SHARED OPERATING NEEDS</text>
        {forms.map((f, i) => {
          const y = 60 + i * lh;
          return (
            <g key={f}>
              <rect x="40" y={y - 13} width="180" height="22" rx="11" fill="#FBFAF3" stroke={LICHEN} strokeWidth="1" />
              <text x="130" y={y + 4} textAnchor="middle" fontFamily={SERIF} fontSize="15" fill={INK}>{f}</text>
              {funcs.map((_, j) => {
                const yf = 60 + j * (lh * 8 / 10);
                return <path key={j} d={`M 220 ${y} C 420 ${y}, 480 ${yf}, 660 ${yf}`} stroke={FOREST} strokeWidth="0.4" opacity="0.18" fill="none" />;
              })}
            </g>
          );
        })}
        {funcs.map((fn, j) => {
          const y = 60 + j * (lh * 8 / 10);
          return (
            <g key={fn}>
              <rect x="660" y={y - 11} width="180" height="18" rx="9" fill={FOREST} />
              <text x="750" y={y + 3} textAnchor="middle" fontFamily={MONO} fontSize="10" letterSpacing="0.14em" fill="#fff">{fn.toUpperCase()}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

/* ─── 3 · CONVERGING FORCES ───────────────────────────────────────────── */
const ConvergingForces = () => {
  const items = [
    { label: 'Distributed work', sub: 'office osmosis is gone', x: 160, y: 140 },
    { label: 'Fractional contribution', sub: 'one person, many contexts', x: 540, y: 140 },
    { label: 'Agentic collaborators', sub: 'AI inside the workflow', x: 350, y: 320 }
  ];
  return (
    <div style={{ maxWidth: 760, margin: '0 auto' }}>
      <svg viewBox="0 0 700 480" preserveAspectRatio="xMidYMid meet" style={{ width: '100%', display: 'block' }}>
        <defs>
          <radialGradient id="cf-bubble" cx="40%" cy="35%" r="70%">
            <stop offset="0%" stopColor="#E2EBDD" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#E2EBDD" stopOpacity="0.2" />
          </radialGradient>
        </defs>
        {items.map(it => (
          <circle key={it.label} cx={it.x} cy={it.y} r="130" fill="url(#cf-bubble)" stroke={FOREST_MID} strokeWidth="1" opacity="0.85" />
        ))}
        {items.map(it => (
          <g key={'l' + it.label}>
            <text x={it.x} y={it.y - 8} textAnchor="middle" fontFamily={SERIF} fontSize="22" fill={INK}>{it.label}</text>
            <text x={it.x} y={it.y + 14} textAnchor="middle" fontFamily={MONO} fontSize="10" letterSpacing="0.14em" fill={MUTED}>{it.sub.toUpperCase()}</text>
          </g>
        ))}
        {/* central intersection */}
        <circle cx="350" cy="220" r="58" fill={FOREST} />
        <text x="350" y="216" textAnchor="middle" fontFamily={SERIF} fontSize="16" fill="#fff" fontStyle="italic">need a new</text>
        <text x="350" y="236" textAnchor="middle" fontFamily={MONO} fontSize="10" letterSpacing="0.22em" fill="#A8CDB0">ORG OS</text>
        <text x="350" y="450" textAnchor="middle" fontFamily={MONO} fontSize="11" letterSpacing="0.22em" fill={MUTED}>THREE FORCES · ONE CONVERGENCE</text>
      </svg>
    </div>
  );
};

/* ─── 5 · REMOTE CONSTELLATION — Mayan Sun Stone calendar ─────────────── */
const RemoteConstellation = () => {
  const [t, setT] = React.useState(0);
  React.useEffect(() => {
    let raf, last = performance.now();
    const tick = (now) => { setT(x => x + (now - last) / 1000); last = now; raf = requestAnimationFrame(tick); };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  /* rotation angles in degrees */
  const r1 = t * 12;    /* inner ring  — fastest, clockwise */
  const r2 = -(t * 8);  /* middle ring — counter-clockwise */
  const r3 = t * 5;     /* outer ring  — slow, clockwise */

  /* helper: evenly-spaced tick lines on a circle */
  const ticks = (radius, count, inset, outset, stroke, sw) =>
    [...Array(count)].map((_, i) => {
      const a = (i / count) * Math.PI * 2;
      const c = Math.cos(a), s = Math.sin(a);
      return <line key={i} x1={c*(radius-inset)} y1={s*(radius-inset)} x2={c*(radius+outset)} y2={s*(radius+outset)} stroke={stroke} strokeWidth={sw} />;
    });

  const TEAM_ANGLES = [0, 60, 120, 180, 240, 300].map(d => d * Math.PI / 180);

  return (
    <svg viewBox="-330 -330 660 740" preserveAspectRatio="xMidYMid meet"
         style={{ width: '100%', maxWidth: 560, margin: '0 auto', display: 'block' }}>
      <defs>
        <radialGradient id="rc-core" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#4A9E63" />
          <stop offset="100%" stopColor="#1F4D2E" />
        </radialGradient>
        <radialGradient id="rc-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E2EBDD" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#E2EBDD" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ambient glow */}
      <circle cx="0" cy="0" r="320" fill="url(#rc-glow)" />

      {/* static outer frame — two concentric hairlines */}
      <circle cx="0" cy="0" r="314" fill="none" stroke="#C8D4C4" strokeWidth="1.2" />
      <circle cx="0" cy="0" r="308" fill="none" stroke="#C8D4C4" strokeWidth="0.4" strokeDasharray="1 10" />

      {/* ── Ring 3: outer / slow CW / 20-division (Mayan month) / 6 team dots ── */}
      <g transform={`rotate(${r3})`}>
        <circle cx="0" cy="0" r="268" fill="none" stroke={LICHEN} strokeWidth="0.9" />
        {ticks(268, 20, 5, 7, LICHEN, 1.4)}
        {/* larger accent marks at 5-step intervals */}
        {ticks(268, 4, 8, 14, LICHEN, 2.2)}
        {/* 6 team-member dots */}
        {TEAM_ANGLES.map((a, i) => {
          const x = Math.cos(a) * 268, y = Math.sin(a) * 268;
          return (
            <g key={i}>
              <circle cx={x} cy={y} r="12" fill="#FBFAF3" stroke={FOREST} strokeWidth="1.5" />
              <circle cx={x} cy={y} r="4.5" fill={FOREST} />
            </g>
          );
        })}
      </g>

      {/* ── Ring 2: middle / counter-CW / 13-division (Mayan trecena) / diamond accents ── */}
      <g transform={`rotate(${r2})`}>
        <circle cx="0" cy="0" r="200" fill="none" stroke={FOREST_MID} strokeWidth="1" />
        {ticks(200, 13, 5, 7, FOREST_MID, 1.3)}
        {/* 4 diamond accent marks at cardinal positions */}
        {[0, 90, 180, 270].map((deg, i) => {
          const a = deg * Math.PI / 180;
          const cx = Math.cos(a) * 200, cy = Math.sin(a) * 200;
          const tx = -Math.sin(a), ty = Math.cos(a); /* tangent */
          return (
            <polygon key={i}
              points={`${cx+tx*6},${cy+ty*6} ${cx+Math.cos(a)*9},${cy+Math.sin(a)*9} ${cx-tx*6},${cy-ty*6} ${cx-Math.cos(a)*5},${cy-Math.sin(a)*5}`}
              fill={FOREST_MID}
            />
          );
        })}
      </g>

      {/* ── Ring 1: inner / fast CW / 8 cardinal marks + triangular sun-ray notches ── */}
      <g transform={`rotate(${r1})`}>
        <circle cx="0" cy="0" r="138" fill="none" stroke={FOREST} strokeWidth="1.5" />
        {/* 8 ticks, alternating long/short */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
          const a = deg * Math.PI / 180;
          const isCard = i % 2 === 0;
          return (
            <line key={i}
              x1={Math.cos(a)*(138-7)} y1={Math.sin(a)*(138-7)}
              x2={Math.cos(a)*(138+(isCard?13:7))} y2={Math.sin(a)*(138+(isCard?13:7))}
              stroke={FOREST} strokeWidth={isCard ? 2.4 : 1.4}
            />
          );
        })}
        {/* 4 sun-ray triangles at cardinal positions */}
        {[0, 90, 180, 270].map((deg, i) => {
          const a = deg * Math.PI / 180;
          const cx0 = Math.cos(a) * 138, cy0 = Math.sin(a) * 138;
          const tx = -Math.sin(a), ty = Math.cos(a);
          return (
            <polygon key={i}
              points={`${cx0+tx*7},${cy0+ty*7} ${cx0+Math.cos(a)*18},${cy0+Math.sin(a)*18} ${cx0-tx*7},${cy0-ty*7}`}
              fill={FOREST} opacity="0.85"
            />
          );
        })}
      </g>

      {/* ── Core ── */}
      <circle cx="0" cy="0" r="95" fill="url(#rc-core)" />
      <circle cx="0" cy="0" r="92" fill="none" stroke="#4A9E63" strokeWidth="1" />
      <circle cx="0" cy="0" r="84" fill="none" stroke="#4A9E63" strokeWidth="0.4" opacity="0.5" />
      <text x="0" y="12" textAnchor="middle" fontFamily={SERIF} fontSize="30" fill="#fff" fontStyle="italic">rhythm</text>

      {/* bottom label */}
      <text x="0" y="378" textAnchor="middle" fontFamily={MONO} fontSize="10" letterSpacing="0.18em" fill={MUTED}>
        REMOTE TEAM · INTENTIONAL COORDINATION
      </text>
    </svg>
  );
};

/* ─── 6 · FRACTIONAL — overlapping contribution paths ─────────────────── */
const FractionalPaths = () => {
  const tracks = [
    { y: 70,  label: 'Founding · Project A',     color: '#1F4D2E', a: 80,  b: 360 },
    { y: 130, label: 'Advisory · Project B',     color: '#3F8657', a: 240, b: 580 },
    { y: 190, label: 'Contributor · Project C',  color: '#6BA37C', a: 120, b: 500 },
    { y: 250, label: 'Community · Project D',    color: '#9CBFA3', a: 320, b: 660 },
    { y: 310, label: 'Steward · Project E',      color: '#2D6B41', a: 60,  b: 280 }
  ];
  return (
    <svg viewBox="0 0 720 400" preserveAspectRatio="xMidYMid meet" style={{ width: '100%', display: 'block' }}>
      <line x1="60" y1="360" x2="680" y2="360" stroke={MUTED} strokeWidth="0.5" opacity="0.5" />
      <text x="60" y="378" fontFamily={MONO} fontSize="9" letterSpacing="0.18em" fill={MUTED}>JAN</text>
      <text x="680" y="378" textAnchor="end" fontFamily={MONO} fontSize="9" letterSpacing="0.18em" fill={MUTED}>DEC</text>
      {tracks.map(t => (
        <g key={t.label}>
          <rect x={t.a} y={t.y - 8} width={t.b - t.a} height="16" rx="8" fill={t.color} opacity="0.85" />
          <text x={t.a - 8} y={t.y + 4} textAnchor="end" fontFamily={MONO} fontSize="10" letterSpacing="0.12em" fill={INK}>{t.label}</text>
        </g>
      ))}
      {/* personal coherence layer underneath */}
      <rect x="60" y="340" width="620" height="6" rx="3" fill="none" stroke={FOREST} strokeDasharray="4 4" />
      <text x="370" y="335" textAnchor="middle" fontFamily={SERIF} fontSize="13" fill={FOREST} fontStyle="italic">one personal coherence layer</text>
    </svg>
  );
};

/* ─── 7 · AGENTIC — human/agent boundary map ──────────────────────────── */
const AgenticBoundary = () => {
  return (
    <svg viewBox="0 0 720 420" preserveAspectRatio="xMidYMid meet" style={{ width: '100%', display: 'block' }}>
      <defs>
        <linearGradient id="ag-divide" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1F4D2E" stopOpacity="0.05" />
          <stop offset="50%" stopColor="#1F4D2E" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#1F4D2E" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect x="40" y="40" width="640" height="340" rx="14" fill="#FBFAF3" stroke={LICHEN} />
      <line x1="360" y1="60" x2="360" y2="360" stroke="url(#ag-divide)" strokeWidth="2" strokeDasharray="6 5" />
      <text x="200" y="70" textAnchor="middle" fontFamily={MONO} fontSize="10" letterSpacing="0.22em" fill={FOREST}>HUMAN DOMAIN</text>
      <text x="520" y="70" textAnchor="middle" fontFamily={MONO} fontSize="10" letterSpacing="0.22em" fill={MUTED}>AGENT DOMAIN</text>

      {[
        ['Judgment', 200, 120], ['Meaning', 200, 160], ['Ethics', 200, 200],
        ['Care', 200, 240], ['Imagination', 200, 280], ['Responsibility', 200, 320]
      ].map(([t, x, y]) => (
        <g key={t}>
          <circle cx={x} cy={y} r="4" fill={FOREST} />
          <text x={x + 14} y={y + 4} fontFamily={SERIF} fontSize="15" fill={INK}>{t}</text>
        </g>
      ))}
      {[
        ['Memory', 520, 120], ['Synthesis', 520, 160], ['Coordination', 520, 200],
        ['Patterns', 520, 240], ['Translation', 520, 280], ['Preparation', 520, 320]
      ].map(([t, x, y]) => (
        <g key={t}>
          <circle cx={x} cy={y} r="4" fill={MUTED} />
          <text x={x + 14} y={y + 4} fontFamily={SERIF} fontSize="15" fill={INK}>{t}</text>
        </g>
      ))}

      {/* escalation arrows */}
      {[140, 220, 300].map((y, i) => (
        <g key={i}>
          <path d={`M 470 ${y} L 250 ${y}`} stroke={FOREST_MID} strokeWidth="1" strokeDasharray="3 3" fill="none" markerEnd="url(#wf-ag-arr)" />
        </g>
      ))}
      <defs>
        <marker id="wf-ag-arr" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M1 1 L7 4 L1 7" fill="none" stroke={FOREST_MID} strokeWidth="1.5" />
        </marker>
      </defs>
      <text x="360" y="395" textAnchor="middle" fontFamily={MONO} fontSize="10" letterSpacing="0.18em" fill={MUTED}>PERMISSIONS · MEMORY · ESCALATION · ACCOUNTABILITY</text>
    </svg>
  );
};

/* ─── 8 · SEED → SAPLING ──────────────────────────────────────────────── */
const SeedSapling = () => {
  const stages = [
    { x: 80,  r: 8,  label: 'Spark' },
    { x: 220, r: 18, label: 'Seed' },
    { x: 380, r: 34, label: 'Sprout' },
    { x: 560, r: 58, label: 'Sapling' }
  ];
  return (
    <svg viewBox="0 0 720 260" preserveAspectRatio="xMidYMid meet" style={{ width: '100%', display: 'block' }}>
      <line x1="60" y1="160" x2="680" y2="160" stroke={LICHEN} strokeDasharray="2 6" />
      {stages.map((s, i) => (
        <g key={s.label}>
          <circle cx={s.x} cy="160" r={s.r} fill="#FBFAF3" stroke={FOREST} strokeWidth="1.2" />
          <circle cx={s.x} cy="160" r={s.r * 0.4} fill={FOREST} />
          <text x={s.x} y="220" textAnchor="middle" fontFamily={SERIF} fontSize="15" fill={INK}>{s.label}</text>
          <text x={s.x} y="240" textAnchor="middle" fontFamily={MONO} fontSize="9" letterSpacing="0.18em" fill={MUTED}>STAGE {i + 1}</text>
        </g>
      ))}
      {stages.slice(0, -1).map((s, i) => (
        <path key={i} d={`M ${s.x + s.r + 4} 160 L ${stages[i+1].x - stages[i+1].r - 4} 160`} stroke={FOREST_MID} strokeWidth="1" markerEnd="url(#ss-arr)" />
      ))}
      <defs>
        <marker id="ss-arr" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M1 1 L7 4 L1 7" fill="none" stroke={FOREST_MID} strokeWidth="1.4" />
        </marker>
      </defs>
    </svg>
  );
};

/* ─── 11 · COMMUNITY CIRCLES → ACTION ─────────────────────────────────── */
const CommunityFlow = () => {
  const cols = [
    { x: 100, label: 'Belonging',     r: 60 },
    { x: 280, label: 'Contribution',  r: 52 },
    { x: 460, label: 'Decisions',     r: 44 },
    { x: 620, label: 'Action',        r: 36 }
  ];
  return (
    <svg viewBox="0 0 720 280" preserveAspectRatio="xMidYMid meet" style={{ width: '100%', display: 'block' }}>
      {cols.map(c => (
        <g key={c.label}>
          <circle cx={c.x} cy="130" r={c.r} fill="#FBFAF3" stroke={FOREST} strokeWidth="1.3" />
          <circle cx={c.x} cy="130" r={c.r * 0.6} fill="none" stroke={LICHEN} strokeWidth="0.8" />
          <text x={c.x} y="135" textAnchor="middle" fontFamily={SERIF} fontSize="15" fill={INK}>{c.label}</text>
          <text x={c.x} y="230" textAnchor="middle" fontFamily={MONO} fontSize="9" letterSpacing="0.18em" fill={MUTED}>{['GATHER','OFFER','CHOOSE','MOVE'][cols.indexOf(c)]}</text>
        </g>
      ))}
      {cols.slice(0, -1).map((c, i) => (
        <path key={i} d={`M ${c.x + c.r} 130 L ${cols[i+1].x - cols[i+1].r} 130`} stroke={FOREST_MID} strokeWidth="1" markerEnd="url(#cf-arr)" />
      ))}
      <defs>
        <marker id="cf-arr" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M1 1 L7 4 L1 7" fill="none" stroke={FOREST_MID} strokeWidth="1.4" />
        </marker>
      </defs>
    </svg>
  );
};

/* ─── 12 · DAO LAYERED LEDGERS ────────────────────────────────────────── */
const LayeredLedgers = () => {
  const layers = [
    { y: 60,  label: 'Bounties',         w: 480, fill: '#1F4D2E' },
    { y: 110, label: 'Peer recognition', w: 540, fill: '#2D6B41' },
    { y: 160, label: 'Retroactive funding', w: 460, fill: '#3F8657' },
    { y: 210, label: 'Dynamic equity',    w: 520, fill: '#6BA37C' },
    { y: 260, label: 'Reputation',        w: 420, fill: '#9CBFA3' }
  ];
  return (
    <svg viewBox="0 0 720 340" preserveAspectRatio="xMidYMid meet" style={{ width: '100%', display: 'block' }}>
      {layers.map(l => (
        <g key={l.label}>
          <rect x="80" y={l.y - 16} width={l.w} height="32" rx="4" fill={l.fill} opacity="0.9" />
          <text x="92" y={l.y + 5} fontFamily={MONO} fontSize="11" letterSpacing="0.14em" fill="#fff">{l.label.toUpperCase()}</text>
          {[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
            <rect key={i} x={92 + i * (l.w / 9)} y={l.y - 4} width={l.w / 18} height="8" rx="1" fill="#fff" opacity="0.35" />
          ))}
        </g>
      ))}
      <text x="370" y="320" textAnchor="middle" fontFamily={MONO} fontSize="10" letterSpacing="0.18em" fill={MUTED}>CONTRIBUTION ECOLOGY · MANY KINDS OF VALUE</text>
    </svg>
  );
};

/* ─── 13 · LINEAGE RIVER ──────────────────────────────────────────────── */
const LineageRiver = () => {
  const streams = [
    { label: 'Agile',                  y: 60,  c: '#9CBFA3' },
    { label: 'Teal',                   y: 100, c: '#6BA37C' },
    { label: 'Deliberately Developmental', y: 140, c: '#4A9E63' },
    { label: 'Regenerative leadership', y: 180, c: '#3F8657' },
    { label: 'Slicing Pie · dynamic equity', y: 220, c: '#2D6B41' },
    { label: 'DAOs · open contribution', y: 260, c: '#1F4D2E' }
  ];
  return (
    <svg viewBox="0 0 760 360" preserveAspectRatio="xMidYMid meet" style={{ width: '100%', display: 'block' }}>
      {streams.map(s => (
        <g key={s.label}>
          <path d={`M 40 ${s.y} C 260 ${s.y}, 360 ${s.y + (170 - s.y) * 0.9}, 600 170`} stroke={s.c} strokeWidth="2.2" fill="none" opacity="0.85" />
          <text x="32" y={s.y + 4} textAnchor="end" fontFamily={MONO} fontSize="10" letterSpacing="0.12em" fill={INK}>{s.label.toUpperCase()}</text>
        </g>
      ))}
      <circle cx="640" cy="170" r="52" fill={FOREST} />
      <text x="640" y="166" textAnchor="middle" fontFamily={SERIF} fontSize="20" fill="#fff" fontStyle="italic">Audax</text>
      <text x="640" y="186" textAnchor="middle" fontFamily={MONO} fontSize="9" letterSpacing="0.28em" fill="#A8CDB0">OS</text>
      <text x="380" y="330" textAnchor="middle" fontFamily={MONO} fontSize="10" letterSpacing="0.18em" fill={MUTED}>COMPOSTING WISDOM · NOT REJECTING IT</text>
    </svg>
  );
};

/* ─── 14 · NESTED CONSTELLATIONS ──────────────────────────────────────── */
const NestedConstellation = () => {
  const rings = [
    { r: 80,  label: 'Individual' },
    { r: 140, label: 'Team' },
    { r: 200, label: 'Organisation' },
    { r: 260, label: 'Family' },
    { r: 320, label: 'Ecosystem' }
  ];
  return (
    <svg viewBox="-360 -360 720 720" preserveAspectRatio="xMidYMid meet" style={{ width: '100%', maxWidth: 540, margin: '0 auto', display: 'block' }}>
      {rings.map((r, i) => (
        <circle key={r.label} cx="0" cy="0" r={r.r} fill="none" stroke={LICHEN} strokeWidth="0.9" strokeDasharray={i === 4 ? '4 5' : 'none'} opacity="0.65" />
      ))}
      {/* satellites at each layer */}
      {[[140, [0, 1, 2, 3]], [200, [0, 1, 2, 3, 4]], [260, [0, 1, 2, 3, 4, 5]], [320, [0, 1, 2, 3, 4, 5, 6, 7]]].map(([r, idxs], k) => (
        <g key={k}>
          {idxs.map(i => {
            const a = (i / idxs.length) * Math.PI * 2 + k * 0.4;
            return <circle key={i} cx={Math.cos(a) * r} cy={Math.sin(a) * r} r="6" fill="#fff" stroke={FOREST} strokeWidth="1.2" />;
          })}
        </g>
      ))}
      {/* core */}
      <circle cx="0" cy="0" r="44" fill={FOREST} />
      <text x="0" y="4" textAnchor="middle" fontFamily={SERIF} fontSize="14" fill="#fff" fontStyle="italic">you</text>
      {rings.map((r, i) => (
        <text key={r.label} x="0" y={-r.r + 16} textAnchor="middle" fontFamily={MONO} fontSize="9" letterSpacing="0.2em" fill={MUTED}>{r.label.toUpperCase()}</text>
      ))}
    </svg>
  );
};

/* ─── 15 · SHARED GRAMMAR ARCHITECTURE ────────────────────────────────── */
const GrammarArchitecture = () => {
  const tools = ['Chat', 'Docs', 'Tasks', 'CRM', 'Calendar', 'Agents', 'Governance', 'Knowledge'];
  return (
    <svg viewBox="0 0 760 360" preserveAspectRatio="xMidYMid meet" style={{ width: '100%', display: 'block' }}>
      <rect x="80" y="40" width="600" height="64" rx="10" fill="#FBFAF3" stroke={LICHEN} />
      <text x="380" y="68" textAnchor="middle" fontFamily={MONO} fontSize="11" letterSpacing="0.22em" fill={MUTED}>MANY TOOLS</text>
      <g>
        {tools.map((t, i) => (
          <g key={t} transform={`translate(${110 + i * 72} ${82})`}>
            <rect x="-26" y="-12" width="52" height="22" rx="11" fill="#fff" stroke={FOREST} strokeWidth="0.9" />
            <text x="0" y="3" textAnchor="middle" fontFamily={MONO} fontSize="9" letterSpacing="0.08em" fill={INK}>{t}</text>
          </g>
        ))}
      </g>
      {/* arrows down to grammar */}
      {tools.map((_, i) => (
        <line key={i} x1={110 + i * 72} y1="100" x2={110 + i * 72} y2="180" stroke={FOREST_MID} strokeWidth="0.6" strokeDasharray="2 4" />
      ))}
      <rect x="80" y="180" width="600" height="100" rx="14" fill={FOREST} />
      <text x="380" y="216" textAnchor="middle" fontFamily={SERIF} fontSize="22" fill="#fff" fontStyle="italic">one shared grammar</text>
      <text x="380" y="246" textAnchor="middle" fontFamily={MONO} fontSize="10" letterSpacing="0.22em" fill="#A8CDB0">MISSIONS · COMMITMENTS · CONTRIBUTION · DECISIONS · AGENTS</text>
      <text x="380" y="320" textAnchor="middle" fontFamily={MONO} fontSize="10" letterSpacing="0.18em" fill={MUTED}>INFRASTRUCTURE · NOT PLATFORM CAPTURE</text>
    </svg>
  );
};

/* ─── 17 · PERSONAL COHERENCE DASHBOARD ───────────────────────────────── */
const PersonalCoherence = () => {
  const commitments = [
    { name: 'Project A',  load: 0.85, type: 'founding' },
    { name: 'Project B',  load: 0.45, type: 'advisory' },
    { name: 'Project C',  load: 0.65, type: 'contributor' },
    { name: 'Community',  load: 0.30, type: 'steward' },
    { name: 'Research',   load: 0.20, type: 'observer' }
  ];
  return (
    <div style={{
      background: 'var(--surface-white)', border: '1px solid var(--border-1)',
      borderRadius: 18, padding: '32px 36px', maxWidth: 640, margin: '0 auto'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 24 }}>
        <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '0.22em', color: 'var(--ink-500)' }}>PERSONAL COHERENCE</div>
        <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '0.18em', color: 'var(--forest-700)' }}>CAPACITY · 73%</div>
      </div>
      {commitments.map(c => (
        <div key={c.name} style={{ marginBottom: 18 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
            <span style={{ fontFamily: SERIF, fontSize: 16, color: 'var(--ink-900)' }}>{c.name}</span>
            <span style={{ fontFamily: MONO, fontSize: 10, letterSpacing: '0.14em', color: 'var(--ink-500)' }}>{c.type.toUpperCase()}</span>
          </div>
          <div style={{ height: 6, background: 'var(--forest-050)', borderRadius: 3, overflow: 'hidden' }}>
            <div style={{
              width: `${c.load * 100}%`, height: '100%',
              background: c.load > 0.8 ? 'var(--lichen-500)' : 'var(--forest-700)',
              transition: 'width 800ms ease'
            }} />
          </div>
        </div>
      ))}
      <div style={{ marginTop: 28, padding: '14px 18px', background: 'var(--forest-050)', borderRadius: 10, fontSize: 13, color: 'var(--forest-800)', fontFamily: SERIF, fontStyle: 'italic' }}>
        Project A is approaching capacity. Renegotiate before trust breaks.
      </div>
    </div>
  );
};

/* ─── Reusable section header bits ────────────────────────────────────── */
const NumQ = ({ n, kicker, children }) => (
  <h1 className="q-h1">
    <span className="num">{n} · {kicker}</span>
    {children}
  </h1>
);

/* ─── AUDIENCE CARDS ──────────────────────────────────────────────────── */
const AUDIENCES = [
  { tag: 'Remote',     name: 'Remote-First Organisations', pain: 'Replacing office osmosis with intentional rhythm.', mod: 'Communication Architecture' },
  { tag: 'Fractional', name: 'Fractional Collaborations',  pain: 'People contributing across many contexts.',         mod: 'Contribution Ecology Ledger' },
  { tag: 'Agentic',    name: 'Agentic Organisations',      pain: 'AI as first-class collaborators, not browser-tab tools.', mod: 'Agent Role Card' },
  { tag: 'Starting',   name: 'New Organisation Starters',  pain: 'Better defaults from day one.',                     mod: 'Organisation Starter Canvas' },
  { tag: 'Startup',    name: 'Next-Generation Startups',   pain: 'Dynamic contribution, agents, fractional founders.', mod: 'Dynamic Contribution Ledger' },
  { tag: 'Mission',    name: 'Nonprofits & Purpose-Led',   pain: 'Clearer without becoming corporate.',               mod: 'Mission & Stakeholder Map' },
  { tag: 'Community',  name: 'Communities & Grassroots',   pain: 'Enough structure to act, not theatre.',             mod: 'Community Starter Canvas' },
  { tag: 'Student',    name: 'Student & Learning Groups',  pain: 'Continuity through annual turnover.',               mod: 'Student Continuity Kit' },
  { tag: 'DAO',        name: 'DAOs & Open Contribution',   pain: 'Counting contribution without gaming.',             mod: 'Contribution Ecology Ledger' },
  { tag: 'Family',     name: 'Org Families & Studios',     pain: 'Shared grammar without forced sameness.',           mod: 'Organisation Family Map' },
  { tag: 'Builder',    name: 'Tool & Agent Builders',      pain: 'A grammar to design products around.',              mod: 'Audax Object Model' },
  { tag: 'Designer',   name: 'Consultants & Org Designers',pain: 'Implementation, not only inspiration.',             mod: 'Diagnostic Wheel' }
];

/* ─── PAGE ────────────────────────────────────────────────────────────── */
const PageWhoFor = ({ onNav }) => (
  <>

    {/* ─── 1 · HERO ─────────────────────────────────────────────────────── */}
    <section className="hero" style={{ '--hero-image': `url(${HERO_WHO})`, minHeight: '92vh', alignItems: 'center' }}>
      <div className="hero-wash"></div>
      <div className="hero-fade"></div>
      <div className="hero-vertical"><span>Who Audax OS is designed to serve</span></div>
      <div className="container">
        <div className="hero-inner" style={{ maxWidth: 980 }}>
          <Eyebrow>Who for?</Eyebrow>
          <h1 className="display lg">
            Who is Audax OS<br /><em>actually for?</em>
          </h1>
          <p className="lede" style={{ maxWidth: 760 }}>
            Any group of people and agents trying to coordinate around shared purpose, contribution, work, learning, and value.
          </p>
          <p className="lede" style={{ maxWidth: 760, marginTop: 14 }}>
            Companies. Nonprofits. DAOs. Communities. Studios. Student groups. Research collectives. Ecosystem networks. Different forms — the same deeper coordination question.
          </p>
          <EcosystemDiagram />
          <div className="hero-ctas" style={{ marginTop: 40 }}>
            <Button size="lg" icon="arrow-down" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
              See who it serves
            </Button>
            <Button size="lg" variant="secondary" onClick={() => onNav('build')}>
              Join the dialogue
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* ─── 2 · META-CATEGORY ───────────────────────────────────────────── */}
    <section className="section manifesto">
      <div className="container">
        <NumQ n="02" kicker="Meta-category">What counts as an <em>organisation?</em></NumQ>
        <div className="q-body" style={{ maxWidth: 780 }}>
          <p>An organisation is any group trying to coordinate around shared purpose, activity, and value. Most organisational tools were built around the company. The world is full of organisations that do not behave like one.</p>
          <p className="lead">The forms differ. <em>The operating questions rhyme.</em></p>
        </div>
        <div style={{ margin: '56px 0' }}>
          <MetaCategoryDiagram />
        </div>
        <PullQuote>A legal form tells you what something is registered as. <em>An operating system reveals how it actually lives.</em></PullQuote>
      </div>
    </section>

    {/* ─── 3 · CONVERGING FORCES ───────────────────────────────────────── */}
    <section className="section">
      <div className="container">
        <NumQ n="03" kicker="Convergence">Why are so many different groups facing <em>the same problem?</em></NumQ>
        <div className="q-body" style={{ maxWidth: 780 }}>
          <p>Three shifts are converging. Work has become distributed. Contribution has become fractional. Agents have entered the room.</p>
          <p>The old organisational model was already struggling. Remote work exposed the cracks. Fractional work widened them. AI agents now make redesign unavoidable.</p>
        </div>
        <div style={{ margin: '48px 0' }}>
          <ConvergingForces />
        </div>
        <PullQuote>The future organisation is not defined by its legal wrapper. <em>It is defined by how humans and agents coordinate.</em></PullQuote>
      </div>
    </section>

    {/* ─── 4 · AUDIENCE GRID ───────────────────────────────────────────── */}
    <section className="section" style={{ background: 'var(--surface-paper)' }}>
      <div className="container">
        <NumQ n="04" kicker="Audiences">Who would <em>use Audax OS?</em></NumQ>
        <div className="q-body" style={{ maxWidth: 780, marginBottom: 48 }}>
          <p>Some will use it as a starter framework. Some as a diagnostic lens. Some as a redesign method. Some as a technical architecture. Some as a shared language across ecosystems.</p>
        </div>
        <div className="join-grid">
          {AUDIENCES.map((a, i) => (
            <div key={a.name} className="join-card">
              <div className="num" style={{ fontFamily: MONO, fontSize: 11, fontWeight: 500, color: 'var(--forest-700)', marginBottom: 8, letterSpacing: '0.18em' }}>
                {String(i + 1).padStart(2, '0')} · {a.tag.toUpperCase()}
              </div>
              <h4>{a.name}</h4>
              <p>{a.pain}</p>
              <div style={{
                marginTop: 14, paddingTop: 14, borderTop: '1px solid var(--border-2)',
                fontSize: 12, color: 'var(--ink-500)', fontFamily: MONO, letterSpacing: '0.06em'
              }}>
                <span style={{ color: 'var(--ink-400)' }}>first module · </span>
                <span style={{ color: 'var(--forest-700)' }}>{a.mod}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ─── 5 · REMOTE-FIRST ────────────────────────────────────────────── */}
    <section className="section">
      <div className="container">
        <NumQ n="05" kicker="Remote-first">Are you remote-first but still running on <em>office assumptions?</em></NumQ>
        <div className="q-body" style={{ maxWidth: 780 }}>
          <p>A physical office used to provide hidden coordination: noticing who was stressed, context in corridors, trust through small encounters. Remote-first organisations do not get this for free. They need to design it.</p>
          <p>Without intentional structure, remote work becomes a strange soup of meetings, missing context, lonely contributors, and hidden overload. That is not remote work failing. <strong>That is underdesigned organisation.</strong></p>
        </div>
        <div style={{ margin: '48px 0 32px' }}>
          <RemoteConstellation />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <div style={{ background: 'var(--forest-050)', border: '1px solid var(--forest-200)', borderRadius: 14, padding: '28px 28px' }}>
            <h6 style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--forest-800)', margin: '0 0 16px' }}>What Audax OS helps remote teams see</h6>
            {['what matters now', 'who is committed to what', 'where context lives', 'which decisions have been made', 'where people are overloaded', 'what agents can summarise & remember'].map(x => (
              <div key={x} style={{ padding: '8px 0', borderBottom: '1px solid var(--forest-200)', fontSize: 14, color: 'var(--ink-800)' }}>· {x}</div>
            ))}
          </div>
          <div style={{ background: 'var(--surface-white)', border: '1px solid var(--border-1)', borderRadius: 14, padding: '28px 28px' }}>
            <h6 style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ink-500)', margin: '0 0 16px' }}>Useful modules</h6>
            {['Team Agreements', 'Communication Architecture', 'Commitment Ledger', 'Decision Log', 'Remote Onboarding Pathway', 'Meeting & Async Rhythm', 'Agent Meeting Memory'].map(x => (
              <div key={x} style={{ padding: '8px 0', borderBottom: '1px solid var(--border-2)', fontSize: 14, color: 'var(--ink-700)', fontFamily: MONO, letterSpacing: '0.04em' }}>{x}</div>
            ))}
          </div>
        </div>
        <PullQuote>Remote work does not remove the need for organisation. <em>It removes the illusion that organisation happens automatically.</em></PullQuote>
      </div>
    </section>

    {/* ─── 6 · FRACTIONAL ──────────────────────────────────────────────── */}
    <section className="section" style={{ background: 'var(--surface-paper)' }}>
      <div className="container">
        <NumQ n="06" kicker="Fractional">Are people contributing without belonging to <em>one full-time box?</em></NumQ>
        <div className="q-body" style={{ maxWidth: 780 }}>
          <p>One person may be a founder in one project, an advisor in another, a contributor in a third, a community member in a fourth, and a curious observer in a fifth. The old model asks: what is your job title? The new model asks a much better — and heavier — question.</p>
          <p>Goodwill alone is a poor ledger. It works until money, ownership, pressure, or memory disagreements arrive wearing boots.</p>
        </div>
        <div style={{ margin: '48px 0 32px' }}>
          <FractionalPaths />
        </div>
        <PullQuote>Fractional work does not need less structure. <em>It needs lighter, clearer, more humane structure.</em></PullQuote>
      </div>
    </section>

    {/* ─── 7 · AGENTIC ─────────────────────────────────────────────────── */}
    <section className="section">
      <div className="container">
        <NumQ n="07" kicker="Agentic">Are AI agents becoming <em>part of the work itself?</em></NumQ>
        <div className="q-body" style={{ maxWidth: 780 }}>
          <p>A chatbot can survive a vague prompt. An organisational agent cannot. When agents support meetings, research, drafting, coordination, decisions, the organisation needs a new level of clarity: roles, access, authority, memory, escalation, accountability.</p>
          <p className="lead">Humans hold judgment, meaning, care, ethics, imagination, responsibility. <em>Agents extend memory, synthesis, coordination, patterns, translation, preparation.</em></p>
        </div>
        <div style={{ margin: '48px 0' }}>
          <AgenticBoundary />
        </div>
        <PullQuote>Agents need better organisational habitats, <em>not just better prompts.</em></PullQuote>
      </div>
    </section>

    {/* ─── 8 · STARTERS ────────────────────────────────────────────────── */}
    <section className="section" style={{ background: 'var(--surface-paper)' }}>
      <div className="container">
        <NumQ n="08" kicker="Starting">Are you starting something <em>before the operating system exists?</em></NumQ>
        <div className="q-body" style={{ maxWidth: 780 }}>
          <p>Most new organisations start with a name, a logo, a WhatsApp group, a shared drive, a half-written strategy, and a faint hope that governance will somehow emerge politely after lunch. It usually does not.</p>
          <p>Audax OS helps new organisation starters begin with better defaults. Not a giant system. A starter kit for organisational coherence.</p>
        </div>
        <div style={{ margin: '48px 0' }}>
          <SeedSapling />
        </div>
        <PullQuote>Starting an organisation should not require heroic improvisation <em>and three years of avoidable confusion.</em></PullQuote>
      </div>
    </section>

    {/* ─── 9 · STARTUPS ────────────────────────────────────────────────── */}
    <section className="section">
      <div className="container">
        <NumQ n="09" kicker="Startups">Are you building a startup that does not look like <em>a 20th-century company?</em></NumQ>
        <div className="q-body" style={{ maxWidth: 780, marginBottom: 40 }}>
          <p>Remote from day one. Fractional founders, advisors, contractors, AI agents. Pre-revenue. Dynamic contribution before conventional compensation is possible. The traditional startup stack handles product better than it handles contribution, agreements, learning, culture, and value fairness.</p>
        </div>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12,
          margin: '24px 0 40px'
        }}>
          {['Product', 'Capital', 'Market', 'Team', 'Contribution', 'Agents', 'Learning', 'Governance'].map((s, i) => (
            <div key={s} style={{
              padding: '24px 18px',
              background: i < 4 ? 'var(--surface-white)' : 'var(--forest-050)',
              border: `1px solid ${i < 4 ? 'var(--border-1)' : 'var(--forest-200)'}`,
              borderRadius: 12, textAlign: 'center'
            }}>
              <div style={{ fontFamily: MONO, fontSize: 10, color: i < 4 ? 'var(--ink-400)' : 'var(--forest-700)', letterSpacing: '0.18em', marginBottom: 6 }}>
                {i < 4 ? 'CLASSIC' : 'NEW'}
              </div>
              <div style={{ fontFamily: SERIF, fontSize: 19, color: 'var(--ink-900)' }}>{s}</div>
            </div>
          ))}
        </div>
        <PullQuote>The next startup advantage may not be only product speed. <em>It may be organisational coherence.</em></PullQuote>
      </div>
    </section>

    {/* ─── 10 · NONPROFITS ─────────────────────────────────────────────── */}
    <section className="section" style={{ background: 'var(--surface-paper)' }}>
      <div className="container">
        <NumQ n="10" kicker="Mission-led">Are you coordinating mission without <em>enough infrastructure?</em></NumQ>
        <div className="q-body" style={{ maxWidth: 780 }}>
          <p>Nonprofits and purpose-led organisations often carry complex work with fragile infrastructure: staff, volunteers, donors, boards, partners, communities, campaigns, funders, reporting. High emotional load. Limited budgets. Shifting funding cycles.</p>
          <p>Purpose-led work needs more than inspiration. <strong>It needs an operating system that protects the purpose from overload, drift, and informal power.</strong></p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, margin: '40px 0' }}>
          {[
            { h: 'What it helps see', items: ['what the mission currently requires', 'who is carrying which responsibilities', 'where volunteer energy is fading', 'what funders need to understand', 'where purpose is being stretched thin'] },
            { h: 'Useful modules', items: ['Mission & Stakeholder Map', 'Volunteer Contribution Ledger', 'Programme Mission Canvas', 'Board–Staff Agreement', 'Impact Learning Loop', 'Agent-Assisted Reporting'] }
          ].map((col, i) => (
            <div key={col.h} style={{ background: i ? 'var(--forest-050)' : 'var(--surface-white)', border: `1px solid ${i ? 'var(--forest-200)' : 'var(--border-1)'}`, borderRadius: 14, padding: '28px 28px' }}>
              <h6 style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: i ? 'var(--forest-800)' : 'var(--ink-500)', margin: '0 0 16px' }}>{col.h}</h6>
              {col.items.map(x => (
                <div key={x} style={{ padding: '8px 0', borderBottom: '1px solid var(--border-2)', fontSize: 14, color: 'var(--ink-800)', fontFamily: i ? 'inherit' : MONO, letterSpacing: i ? 0 : '0.04em' }}>· {x}</div>
              ))}
            </div>
          ))}
        </div>
        <PullQuote>Purpose does not remove the need for structure. <em>It raises the ethical demand for better structure.</em></PullQuote>
      </div>
    </section>

    {/* ─── 11 · COMMUNITIES & STUDENTS ─────────────────────────────────── */}
    <section className="section">
      <div className="container">
        <NumQ n="11" kicker="Communities">Are you a community that wants to do <em>more than gather?</em></NumQ>
        <div className="q-body" style={{ maxWidth: 780 }}>
          <p>Communities often begin with belonging. That is beautiful. But when a community wants to act, it needs structure — not corporate structure, not heavy governance theatre, just enough coherence to turn shared energy into shared action.</p>
          <p>Student groups especially need this. They are laboratories for the next generation of organising. But they suffer from fast turnover, weak continuity, lost knowledge, and structures that reset every year like <em>organisational amnesia with merch.</em></p>
        </div>
        <div style={{ margin: '48px 0' }}>
          <CommunityFlow />
        </div>
        <PullQuote>Community is not the opposite of organisation. <em>It is one of the oldest forms of it.</em></PullQuote>
      </div>
    </section>

    {/* ─── 12 · DAOs ───────────────────────────────────────────────────── */}
    <section className="section" style={{ background: 'var(--surface-paper)' }}>
      <div className="container">
        <NumQ n="12" kicker="Open contribution">Are you experimenting with <em>tokens, bounties, or dynamic ownership?</em></NumQ>
        <div className="q-body" style={{ maxWidth: 780 }}>
          <p>DAOs and crypto communities have already explored many of the problems Audax OS cares about: bounties, reputation, treasury allocation, retroactive funding, peer recognition, decentralised governance. Slicing Pie offers a useful logic for early teams where people contribute at-risk before normal compensation is possible.</p>
          <p>But these systems also reveal the hard truth: <strong>counting contribution is not enough.</strong> Someone must decide what counts. Someone must verify. Someone must handle disputes. Someone must prevent gaming. Someone must translate contribution into value without destroying trust.</p>
        </div>
        <div style={{ margin: '40px 0' }}>
          <LayeredLedgers />
        </div>
        <PullQuote>The future of contribution accounting is not only tokens or cap tables. <em>It is trust made discussable.</em></PullQuote>
      </div>
    </section>

    {/* ─── 13 · LINEAGE ────────────────────────────────────────────────── */}
    <section className="section manifesto">
      <div className="container">
        <NumQ n="13" kicker="Lineage">What comes after Teal <em>when agents enter the room?</em></NumQ>
        <div className="q-body" style={{ maxWidth: 780 }}>
          <p>Audax OS sits in a lineage. Agile challenged rigid planning. Teal helped imagine self-management and evolutionary purpose. Deliberately Developmental Organisations placed human growth at the centre. Regenerative leadership reframed organisations as living systems. Slicing Pie and DAOs experimented with contribution accounting and open coordination.</p>
          <p className="lead">Audax OS should not discard the earlier wisdom. <em>It should compost it.</em></p>
        </div>
        <div style={{ margin: '48px 0' }}>
          <LineageRiver />
        </div>
        <PullQuote>Audax OS is not a rejection of Teal. <em>It is one possible evolution of Teal for the agentic, fractional, distributed age.</em></PullQuote>
      </div>
    </section>

    {/* ─── 14 · ORG FAMILIES & ECOSYSTEMS ──────────────────────────────── */}
    <section className="section">
      <div className="container">
        <NumQ n="14" kicker="Constellations">Are you coordinating across <em>more than one organisation?</em></NumQ>
        <div className="q-body" style={{ maxWidth: 780 }}>
          <p>Some users of Audax OS will not be single organisations. They will be organisation families: a venture studio with several startups. A foundation supporting multiple initiatives. A regenerative network connecting land projects, communities, funders. A federation of local chapters. A field-building ecosystem.</p>
          <p>The question shifts from <em>how does our team work?</em> to <em>how do multiple organisations share learning, talent, capital, infrastructure, trust, and agents while maintaining autonomy?</em></p>
        </div>
        <div style={{ margin: '48px 0' }}>
          <NestedConstellation />
        </div>
        <PullQuote>The future may belong less to isolated companies <em>and more to coherent constellations.</em></PullQuote>
      </div>
    </section>

    {/* ─── 15 · TOOL BUILDERS ──────────────────────────────────────────── */}
    <section className="section" style={{ background: 'var(--surface-paper)' }}>
      <div className="container">
        <NumQ n="15" kicker="Builders">Are you building tools <em>for the new organisation?</em></NumQ>
        <div className="q-body" style={{ maxWidth: 780 }}>
          <p>The problem is not tool scarcity. It is fragmentation. Tools do not share enough language around contribution, commitments, missions, decisions, learning, value, roles, permissions, and agents. Audax OS can give builders a shared grammar to design around.</p>
        </div>
        <div style={{ margin: '48px 0' }}>
          <GrammarArchitecture />
        </div>
        <PullQuote>Audax OS should become infrastructure others can build with, <em>not a castle others must move into.</em></PullQuote>
      </div>
    </section>

    {/* ─── 16 · CONSULTANTS ────────────────────────────────────────────── */}
    <section className="section">
      <div className="container">
        <NumQ n="16" kicker="Practitioners">Are you helping organisations <em>redesign themselves?</em></NumQ>
        <div className="q-body" style={{ maxWidth: 780, marginBottom: 40 }}>
          <p>Audax OS is for consultants, facilitators, organisation designers, coaches, governance practitioners, and regenerative leadership practitioners. It gives a map across five spheres, five layers, and three modes — and practical objects to design with.</p>
          <p>This helps practitioners move beyond inspiration into implementation. Not because inspiration is bad — but because inspiration without structure becomes <em>expensive incense.</em></p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, margin: '32px 0' }}>
          {[
            { h: 'Diagnose', items: ['Diagnostic Wheel', 'Spheres × Layers Assessment', 'Modes Mapping'] },
            { h: 'Design', items: ['Starter Kit', 'Contribution Accounting', 'Agent Governance Workshop'] },
            { h: 'Implement', items: ['Remote & Fractional Audit', 'Ecosystem Coherence Mapping', 'Tool Implementation'] }
          ].map((col, i) => (
            <div key={col.h} style={{
              background: i === 1 ? 'var(--forest-050)' : 'var(--surface-white)',
              border: `1px solid ${i === 1 ? 'var(--forest-200)' : 'var(--border-1)'}`,
              borderRadius: 14, padding: '28px 24px'
            }}>
              <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '0.22em', color: 'var(--forest-700)', marginBottom: 6 }}>STAGE {String(i + 1).padStart(2, '0')}</div>
              <h4 style={{ fontFamily: SERIF, fontSize: 24, color: 'var(--ink-900)', margin: '0 0 16px', fontWeight: 400, letterSpacing: '-0.02em' }}>{col.h}</h4>
              {col.items.map(x => (
                <div key={x} style={{ padding: '8px 0', borderBottom: '1px solid var(--border-2)', fontSize: 13, color: 'var(--ink-700)', fontFamily: MONO, letterSpacing: '0.04em' }}>{x}</div>
              ))}
            </div>
          ))}
        </div>
        <PullQuote>The next organisation design practice must understand humans, agents, value, learning, governance, and tools <em>as one field.</em></PullQuote>
      </div>
    </section>

    {/* ─── 17 · INDIVIDUALS ────────────────────────────────────────────── */}
    <section className="section" style={{ background: 'var(--surface-paper)' }}>
      <div className="container">
        <NumQ n="17" kicker="The contributor">What about <em>the individual?</em></NumQ>
        <div className="q-body" style={{ maxWidth: 780 }}>
          <p>Audax OS is also for people trying to live inside the new world of work without becoming a scattered pile of obligations with a nice LinkedIn headline.</p>
          <p>In fractional work, one person may hold commitments across many teams. They need visibility: what have I promised, where am I over capacity, what is paid, what is speculative, where am I under-recognised, where do I need to renegotiate before trust breaks.</p>
          <p className="lead">This is not productivity optimisation. <em>It is livelihood clarity.</em></p>
        </div>
        <div style={{ margin: '48px 0' }}>
          <PersonalCoherence />
        </div>
        <PullQuote>People do not need to become more productive machines. <em>They need clearer ways to live inside many commitments.</em></PullQuote>
      </div>
    </section>

    <CtaBand
      title="Help build the OS<br />for the <em>organisations that come next.</em>"
      body="If you recognise yourself in any of these — come help write the protocols. The grammar is still being shaped."
      primary="Join &amp; Build the OS"
      onPrimary={() => onNav('build')}
    />
  </>
);

window.PageWhoFor = PageWhoFor;
