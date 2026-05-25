/* Audax OS site · diagrams
   Three signature visual moments:
   - MatrixDiagram  (5 spheres × 5 layers × 3 modes — isometric grid)
   - NestedCircles  (5 layers — concentric, individual at the core)
   - ModesTriad     (3 modes — human↔human, human↔agent, agent↔agent)

   All drawn in SVG using the brand palette. No external icons. */

/* ---------- Matrix (5×5×3) ---------- */
const MatrixDiagram = () => {
  // We draw a "5×5×3" stack: a 5-row × 5-col grid (spheres × layers),
  // with two extra translucent planes behind it to suggest the modes (3 modes).
  // Skewed isometric for depth.
  const sx = (x, y) => x + y * 0.42;        // simple oblique projection
  const sy = (x, y) => -y * 0.36;
  return (
    <div className="diagram-axes">
      <svg viewBox="0 0 760 540" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Five spheres by five layers by three modes">
        <defs>
          <linearGradient id="planeFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"  stopColor="#E2EBDD" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#C8DBC9" stopOpacity="0.85" />
          </linearGradient>
          <linearGradient id="planeFillSoft" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"  stopColor="#F0F4EC" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#E2EBDD" stopOpacity="0.7" />
          </linearGradient>
        </defs>

        {/* Three modes as receding planes */}
        <g transform="translate(120 380)">
          {[0, 1, 2].map(z => {
            const dx = z * 38, dy = -z * 32;
            const size = 360;
            return (
              <g key={z} transform={`translate(${dx} ${dy})`} opacity={1 - z * 0.18}>
                {/* plane outline */}
                <path
                  d={`M 0 0
                      L ${size} 0
                      L ${size + size * 0.42} ${-size * 0.36}
                      L ${size * 0.42} ${-size * 0.36}
                      Z`}
                  fill={z === 0 ? 'url(#planeFill)' : 'url(#planeFillSoft)'}
                  stroke="#9CBFA3"
                  strokeWidth="1"
                />

                {/* 5×5 grid lines on top of plane */}
                {z === 0 && (
                  <g stroke="#6BA37C" strokeWidth="0.8" opacity="0.5">
                    {[1, 2, 3, 4].map(i => {
                      const t = i / 5;
                      const startX = size * t, startY = 0;
                      const endX = size * t + size * 0.42 * 1, endY = -size * 0.36;
                      return <line key={'v' + i} x1={startX} y1={startY} x2={endX} y2={endY} />;
                    })}
                    {[1, 2, 3, 4].map(i => {
                      const t = i / 5;
                      const startX = size * 0.42 * t, startY = -size * 0.36 * t;
                      const endX = size + size * 0.42 * t, endY = -size * 0.36 * t;
                      return <line key={'h' + i} x1={startX} y1={startY} x2={endX} y2={endY} />;
                    })}
                  </g>
                )}

                {/* tiny mode label on each plane */}
                <text
                  x={size + size * 0.42 + 10}
                  y={-size * 0.36 + 14}
                  fontFamily="JetBrains Mono, monospace"
                  fontSize="10"
                  letterSpacing="0.2em"
                  fill="#5C5A50"
                  textAnchor="start"
                >
                  {['HUMAN ↔ HUMAN', 'HUMAN ↔ AGENT', 'AGENT ↔ AGENT'][z]}
                </text>
              </g>
            );
          })}

          {/* Cell highlights on front plane — a few warm nodes */}
          {[[1,2], [2,1], [3,3], [0,4], [4,0]].map(([cx, cy], i) => {
            const size = 360;
            const cell = size / 5;
            const x = cx * cell + cell / 2 + (cy * cell + cell / 2) * 0.42;
            const y = -(cy * cell + cell / 2) * 0.36;
            return (
              <circle key={i} cx={x} cy={y} r="6" fill={i === 2 ? '#B8C766' : '#1F4D2E'} opacity={i === 2 ? 1 : 0.75} />
            );
          })}
        </g>

        <g fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#807D72" letterSpacing="0.2em">
          <text x="76" y="430" textAnchor="end">SPHERES</text>
          <text x="380" y="510" textAnchor="middle">LAYERS</text>
          <text x="660" y="60" textAnchor="middle" transform="rotate(-22 660 60)">MODES</text>
        </g>

        {/* Tiny ticks counting 5/5/3 */}
        <g fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#1F4D2E" letterSpacing="0.04em">
          <text x="76" y="450" textAnchor="end" fontWeight="500">5</text>
          <text x="380" y="528" textAnchor="middle" fontWeight="500">5</text>
          <text x="660" y="80" textAnchor="middle" fontWeight="500" transform="rotate(-22 660 80)">3</text>
        </g>
      </svg>
    </div>
  );
};

/* ---------- Nested circles (5 layers, individual at core) ---------- */
const NestedCircles = ({ activeLayer = null }) => {
  const LAYERS = [
    { key: 'ecosystem',  label: 'Ecosystem',          r: 320, dy: 0 },
    { key: 'family',     label: 'Organisation Family', r: 256, dy: 0 },
    { key: 'org',        label: 'Organisation',        r: 192, dy: 0 },
    { key: 'team',       label: 'Team',                r: 128, dy: 0 },
    { key: 'individual', label: 'Individual',          r: 64,  dy: 0 }
  ];
  return (
    <div className="nested-circles">
      <svg viewBox="-360 -360 720 720" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Five nested layers, individual at the core">
        <defs>
          <radialGradient id="coreFill" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1F4D2E" />
            <stop offset="100%" stopColor="#163322" />
          </radialGradient>
        </defs>

        {LAYERS.map((l, i) => {
          const isActive = activeLayer === l.key;
          const isCore = l.key === 'individual';
          const stroke = isCore ? 'none' : '#9CBFA3';
          const fill = isCore ? 'url(#coreFill)' : '#FFFFFF';
          return (
            <g key={l.key}>
              <circle
                cx="0" cy="0" r={l.r}
                fill={fill}
                stroke={stroke}
                strokeWidth={isActive ? 2 : 1}
                strokeOpacity={isActive ? 1 : 0.6}
                strokeDasharray={i === 0 ? '6 4' : 'none'}
              />
              <text
                x="0"
                y={isCore ? 4 : -l.r + (i === 0 ? -14 : 18)}
                textAnchor="middle"
                fontFamily={isCore ? 'Instrument Serif, serif' : 'JetBrains Mono, monospace'}
                fontSize={isCore ? 16 : 11}
                fontWeight={isCore ? 400 : 500}
                fill={isCore ? '#FFFFFF' : '#3A3830'}
                letterSpacing={isCore ? '-0.02em' : '0.22em'}
              >
                {isCore ? l.label : l.label.toUpperCase()}
              </text>
            </g>
          );
        })}

        {/* Mycelial linkages — subtle threads connecting nodes around the rings */}
        <g stroke="#9CBFA3" strokeWidth="0.6" opacity="0.45" fill="none">
          {[0, 1, 2, 3, 4, 5].map(i => {
            const a = (i / 6) * Math.PI * 2;
            const x1 = Math.cos(a) * 64, y1 = Math.sin(a) * 64;
            const x2 = Math.cos(a + 0.6) * 192, y2 = Math.sin(a + 0.6) * 192;
            const x3 = Math.cos(a + 1.1) * 320, y3 = Math.sin(a + 1.1) * 320;
            return (
              <path
                key={i}
                d={`M ${x1} ${y1} Q ${(x1+x2)/2 + 12} ${(y1+y2)/2 - 12} ${x2} ${y2} T ${x3} ${y3}`}
              />
            );
          })}
        </g>

        {/* Constellation dots on the rings */}
        <g fill="#1F4D2E">
          {[
            [128, 0.4], [192, 1.3], [192, 4.6], [256, 2.0], [256, 5.1],
            [320, 0.9], [320, 3.3], [320, 5.7]
          ].map(([r, a], i) => (
            <circle key={i} cx={Math.cos(a) * r} cy={Math.sin(a) * r} r="3.2" />
          ))}
        </g>
      </svg>
    </div>
  );
};

/* ---------- Modes triad ---------- */
const ModesTriad = () => (
  <div className="triad">
    <svg viewBox="0 0 680 390" preserveAspectRatio="xMidYMid meet" role="img"
         aria-label="Three modes: human-to-human, human-to-agent, agent-to-agent">
      <defs>
        <radialGradient id="mt-h" cx="38%" cy="32%" r="70%">
          <stop offset="0%" stopColor="#4A9E63" />
          <stop offset="100%" stopColor="#1F4D2E" />
        </radialGradient>
        <radialGradient id="mt-a" cx="38%" cy="32%" r="70%">
          <stop offset="0%" stopColor="#6B6960" />
          <stop offset="100%" stopColor="#14130E" />
        </radialGradient>
        {/* Arrowhead for H↔H */}
        <marker id="arr-hh-e" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M1 1 L7 4 L1 7" fill="none" stroke="#2A6B3C" strokeWidth="1.5" strokeLinejoin="round"/>
        </marker>
        <marker id="arr-hh-s" viewBox="0 0 8 8" refX="1" refY="4" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M1 1 L7 4 L1 7" fill="none" stroke="#2A6B3C" strokeWidth="1.5" strokeLinejoin="round"/>
        </marker>
        {/* Arrowhead for H↔A */}
        <marker id="arr-ha-e" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M1 1 L7 4 L1 7" fill="none" stroke="#5C5A50" strokeWidth="1.5" strokeLinejoin="round"/>
        </marker>
        <marker id="arr-ha-s" viewBox="0 0 8 8" refX="1" refY="4" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M1 1 L7 4 L1 7" fill="none" stroke="#5C5A50" strokeWidth="1.5" strokeLinejoin="round"/>
        </marker>
        {/* Arrowhead for A↔A */}
        <marker id="arr-aa-e" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M1 1 L7 4 L1 7" fill="none" stroke="#3A3830" strokeWidth="1.5" strokeLinejoin="round"/>
        </marker>
        <marker id="arr-aa-s" viewBox="0 0 8 8" refX="1" refY="4" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M1 1 L7 4 L1 7" fill="none" stroke="#3A3830" strokeWidth="1.5" strokeLinejoin="round"/>
        </marker>
      </defs>

      {/* ── Row I  H ↔ H ─────────────────────────────────────── */}
      <g>
        {/* mode badge */}
        <text x="28" y="81" fontFamily="JetBrains Mono, monospace" fontSize="10"
              fill="#2A6B3C" letterSpacing="0.2em" fontWeight="600">I</text>
        {/* connector */}
        <line x1="178" y1="76" x2="502" y2="76" stroke="#2A6B3C" strokeWidth="1.4"
              markerEnd="url(#arr-hh-e)" markerStart="url(#arr-hh-s)" />
        {/* centre label */}
        <rect x="278" y="62" width="124" height="26" rx="4" fill="#FBFAF3" />
        <text x="340" y="79" textAnchor="middle" fontFamily="JetBrains Mono, monospace"
              fontSize="10" fill="#2A6B3C" letterSpacing="0.2em">H ↔ H</text>
        {/* left node */}
        <circle cx="138" cy="76" r="38" fill="url(#mt-h)" />
        <text x="138" y="71" textAnchor="middle" fontFamily="Instrument Serif, serif"
              fontSize="16" fill="#fff">Human</text>
        <text x="138" y="87" textAnchor="middle" fontFamily="Hanken Grotesk, sans-serif"
              fontSize="9" fill="#A8CDB0" letterSpacing="0.07em">practitioner</text>
        {/* right node */}
        <circle cx="542" cy="76" r="38" fill="url(#mt-h)" />
        <text x="542" y="71" textAnchor="middle" fontFamily="Instrument Serif, serif"
              fontSize="16" fill="#fff">Human</text>
        <text x="542" y="87" textAnchor="middle" fontFamily="Hanken Grotesk, sans-serif"
              fontSize="9" fill="#A8CDB0" letterSpacing="0.07em">practitioner</text>
      </g>

      {/* ── Row II  H ↔ A ────────────────────────────────────── */}
      <g>
        <text x="28" y="201" fontFamily="JetBrains Mono, monospace" fontSize="10"
              fill="#5C5A50" letterSpacing="0.2em" fontWeight="600">II</text>
        <line x1="178" y1="196" x2="502" y2="196" stroke="#5C5A50" strokeWidth="1.4"
              markerEnd="url(#arr-ha-e)" markerStart="url(#arr-ha-s)" />
        <rect x="278" y="182" width="124" height="26" rx="4" fill="#FBFAF3" />
        <text x="340" y="199" textAnchor="middle" fontFamily="JetBrains Mono, monospace"
              fontSize="10" fill="#5C5A50" letterSpacing="0.2em">H ↔ A</text>
        {/* left node — Human */}
        <circle cx="138" cy="196" r="38" fill="url(#mt-h)" />
        <text x="138" y="191" textAnchor="middle" fontFamily="Instrument Serif, serif"
              fontSize="16" fill="#fff">Human</text>
        <text x="138" y="207" textAnchor="middle" fontFamily="Hanken Grotesk, sans-serif"
              fontSize="9" fill="#A8CDB0" letterSpacing="0.07em">practitioner</text>
        {/* right node — Agent */}
        <circle cx="542" cy="196" r="38" fill="url(#mt-a)" />
        <text x="542" y="191" textAnchor="middle" fontFamily="Instrument Serif, serif"
              fontSize="16" fill="#fff">Agent</text>
        <text x="542" y="207" textAnchor="middle" fontFamily="Hanken Grotesk, sans-serif"
              fontSize="9" fill="#B0AEA4" letterSpacing="0.07em">assistant</text>
      </g>

      {/* ── Row III  A ↔ A ───────────────────────────────────── */}
      <g>
        <text x="28" y="321" fontFamily="JetBrains Mono, monospace" fontSize="10"
              fill="#3A3830" letterSpacing="0.2em" fontWeight="600">III</text>
        <line x1="178" y1="316" x2="502" y2="316" stroke="#3A3830" strokeWidth="1.4"
              markerEnd="url(#arr-aa-e)" markerStart="url(#arr-aa-s)" />
        <rect x="278" y="302" width="124" height="26" rx="4" fill="#FBFAF3" />
        <text x="340" y="319" textAnchor="middle" fontFamily="JetBrains Mono, monospace"
              fontSize="10" fill="#3A3830" letterSpacing="0.2em">A ↔ A</text>
        {/* left node — Agent */}
        <circle cx="138" cy="316" r="38" fill="url(#mt-a)" />
        <text x="138" y="311" textAnchor="middle" fontFamily="Instrument Serif, serif"
              fontSize="16" fill="#fff">Agent</text>
        <text x="138" y="327" textAnchor="middle" fontFamily="Hanken Grotesk, sans-serif"
              fontSize="9" fill="#B0AEA4" letterSpacing="0.07em">worker</text>
        {/* right node — Agent */}
        <circle cx="542" cy="316" r="38" fill="url(#mt-a)" />
        <text x="542" y="311" textAnchor="middle" fontFamily="Instrument Serif, serif"
              fontSize="16" fill="#fff">Agent</text>
        <text x="542" y="327" textAnchor="middle" fontFamily="Hanken Grotesk, sans-serif"
              fontSize="9" fill="#B0AEA4" letterSpacing="0.07em">worker</text>
      </g>

      {/* horizontal dividers */}
      <line x1="60" y1="136" x2="620" y2="136" stroke="#D6D0C4" strokeWidth="0.8" strokeDasharray="4 6" />
      <line x1="60" y1="256" x2="620" y2="256" stroke="#D6D0C4" strokeWidth="0.8" strokeDasharray="4 6" />
    </svg>
  </div>
);



/* ---------- Spheres orbit (5 spheres around the brand mark) ---------- */
const SpheresOrbit = () => {
  const SPHERES = [
    { key: 'value', label: 'Value' },
    { key: 'work',  label: 'Work' },
    { key: 'rel',   label: 'Relationship' },
    { key: 'learn', label: 'Learning' },
    { key: 'comm',  label: 'Communication' }
  ];
  const radius = 230;
  return (
    <div className="spheres-orbit">
      <svg viewBox="-340 -340 680 680" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Five spheres of organisational life">
        <defs>
          <radialGradient id="orbitGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E2EBDD" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#E2EBDD" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="0" cy="0" r="320" fill="url(#orbitGlow)" />
        <g stroke="#9CBFA3" strokeWidth="1" fill="none" opacity="0.7">
          <circle cx="0" cy="0" r={radius} strokeDasharray="3 5" />
        </g>
        {/* mycelial threads connecting all spheres */}
        <g stroke="#6BA37C" strokeWidth="0.7" fill="none" opacity="0.45">
          {SPHERES.map((s, i) => SPHERES.slice(i + 1).map((t, j) => {
            const aA = (i / SPHERES.length) * Math.PI * 2 - Math.PI / 2;
            const k = SPHERES.indexOf(t);
            const aB = (k / SPHERES.length) * Math.PI * 2 - Math.PI / 2;
            const x1 = Math.cos(aA) * radius, y1 = Math.sin(aA) * radius;
            const x2 = Math.cos(aB) * radius, y2 = Math.sin(aB) * radius;
            return <path key={`${i}-${j}`} d={`M ${x1} ${y1} Q 0 0 ${x2} ${y2}`} />;
          }))}
        </g>
        {/* central Audax sigil (simplified) */}
        <g>
          <circle cx="0" cy="0" r="68" fill="#FFFFFF" stroke="#1F4D2E" strokeWidth="1.5" />
          <ellipse cx="0" cy="2" rx="40" ry="22" fill="none" stroke="#14130E" strokeWidth="2.5" />
          <circle cx="0" cy="2" r="10" fill="#14130E" />
          <circle cx="0" cy="-46" r="3" fill="#14130E" />
          <path d="M 0 -38 Q 4 -20 0 -8" stroke="#14130E" strokeWidth="2" fill="none" />
          <path d="M 0 16 Q -4 30 0 48" stroke="#14130E" strokeWidth="2" fill="none" />
          <text x="0" y="110" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="0.22em" fill="#1F4D2E" fontWeight="500">AUDAX OS</text>
        </g>
        {/* sphere nodes */}
        {SPHERES.map((s, i) => {
          const a = (i / SPHERES.length) * Math.PI * 2 - Math.PI / 2;
          const x = Math.cos(a) * radius;
          const y = Math.sin(a) * radius;
          return (
            <g key={s.key} transform={`translate(${x} ${y})`}>
              <circle cx="0" cy="0" r="54" fill="#FFFFFF" stroke="#1F4D2E" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="40" fill="none" stroke="#9CBFA3" strokeWidth="0.7" />
              <text x="0" y="3" textAnchor="middle" fontFamily="Instrument Serif, serif" fontSize="16" fontWeight="400" fill="#14130E" letterSpacing="-0.015em">
                {s.label.split(' ')[0]}
              </text>
              <text x="0" y="76" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#807D72" letterSpacing="0.18em">
                {`SPHERE ${['I','II','III','IV','V'][i]}`}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

/* ---------- Causal Loop (single regenerative ring) ---------- */
const CausalLoop = () => {
  const NODES = [
    { label: 'Value',         glyph: 'I' },
    { label: 'Trust',         glyph: 'III' },
    { label: 'Communication', glyph: 'V' },
    { label: 'Work',          glyph: 'II' },
    { label: 'Learning',      glyph: 'IV' }
  ];
  const radius = 200;
  return (
    <div className="causal-loop">
      <svg viewBox="-280 -260 560 520" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Causal loop between the five spheres">
        <g fill="none" stroke="#1F4D2E" strokeWidth="1.6" strokeLinecap="round">
          {NODES.map((n, i) => {
            const a1 = (i / NODES.length) * Math.PI * 2 - Math.PI / 2;
            const a2 = ((i + 1) / NODES.length) * Math.PI * 2 - Math.PI / 2;
            const x1 = Math.cos(a1) * radius, y1 = Math.sin(a1) * radius;
            const x2 = Math.cos(a2) * radius, y2 = Math.sin(a2) * radius;
            const dx = x2 - x1, dy = y2 - y1;
            const len = Math.hypot(dx, dy);
            const ex = x2 - (dx / len) * 60, ey = y2 - (dy / len) * 60;
            const sx = x1 + (dx / len) * 60, sy = y1 + (dy / len) * 60;
            const mx = (sx + ex) / 2 - dy * 0.18;
            const my = (sy + ey) / 2 + dx * 0.18;
            const ang = Math.atan2(ey - my, ex - mx) * 180 / Math.PI;
            return (
              <g key={i}>
                <path d={`M ${sx} ${sy} Q ${mx} ${my} ${ex} ${ey}`} />
                <polygon points="0,-5 10,0 0,5" transform={`translate(${ex} ${ey}) rotate(${ang})`} fill="#1F4D2E" />
              </g>
            );
          })}
        </g>
        {NODES.map((n, i) => {
          const a = (i / NODES.length) * Math.PI * 2 - Math.PI / 2;
          const x = Math.cos(a) * radius;
          const y = Math.sin(a) * radius;
          return (
            <g key={n.label} transform={`translate(${x} ${y})`}>
              <circle cx="0" cy="0" r="48" fill="#FFFFFF" stroke="#1F4D2E" strokeWidth="1.5" />
              <text x="0" y="-2" textAnchor="middle" fontFamily="Instrument Serif, serif" fontSize="16" fontWeight="400" fill="#14130E" letterSpacing="-0.015em">{n.label}</text>
              <text x="0" y="15" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#807D72" letterSpacing="0.18em">{n.glyph}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

/* ---------- Two loops (degenerative vs regenerative) ---------- */
const TwoLoops = () => {
  const ITEMS_DEG = [
    'Invisible contribution', 'Weaker trust', 'Guarded communication',
    'Confused work', 'Defensive learning', 'Distorted value'
  ];
  const ITEMS_REG = [
    'Visible contribution', 'Stronger trust', 'Clearer communication',
    'Better work', 'Deeper learning', 'Fairer value'
  ];
  const Loop = ({ title, items, kind }) => (
    <div className={`loop loop-${kind}`}>
      <div className="loop-title">{title}</div>
      <ol className="loop-list">
        {items.map((it, i) => (
          <li key={it}>
            <span className="i">{String(i + 1).padStart(2, '0')}</span>
            <span className="t">{it}</span>
          </li>
        ))}
        <li className="close">
          <span className="i">↻</span>
          <span className="t">back to {items[0].toLowerCase()}</span>
        </li>
      </ol>
    </div>
  );
  return (
    <div className="two-loops">
      <Loop title="Degenerative loop" items={ITEMS_DEG} kind="ink" />
      <Loop title="Regenerative loop" items={ITEMS_REG} kind="forest" />
    </div>
  );
};

/* ---------- Health wheel (5-part diagnostic) ---------- */
const HealthWheel = ({ scores }) => {
  const SPHERES = ['Value', 'Work', 'Relationship', 'Learning', 'Communication'];
  const s = scores || [0.85, 0.65, 0.55, 0.35, 0.75];
  const R = 200;
  return (
    <div className="health-wheel">
      <svg viewBox="-280 -260 560 520" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Five-sphere diagnostic wheel">
        <g fill="none" stroke="#E3E0D6" strokeWidth="1">
          {[0.25, 0.5, 0.75, 1].map(t => <circle key={t} cx="0" cy="0" r={R * t} />)}
        </g>
        <g stroke="#E3E0D6" strokeWidth="1">
          {SPHERES.map((_, i) => {
            const a = (i / SPHERES.length) * Math.PI * 2 - Math.PI / 2;
            return <line key={i} x1="0" y1="0" x2={Math.cos(a) * R} y2={Math.sin(a) * R} />;
          })}
        </g>
        <polygon
          points={SPHERES.map((_, i) => {
            const a = (i / SPHERES.length) * Math.PI * 2 - Math.PI / 2;
            return `${Math.cos(a) * R * s[i]},${Math.sin(a) * R * s[i]}`;
          }).join(' ')}
          fill="#1F4D2E" fillOpacity="0.18"
          stroke="#1F4D2E" strokeWidth="1.5"
        />
        {SPHERES.map((_, i) => {
          const a = (i / SPHERES.length) * Math.PI * 2 - Math.PI / 2;
          return <circle key={i} cx={Math.cos(a) * R * s[i]} cy={Math.sin(a) * R * s[i]} r="5" fill={s[i] < 0.5 ? '#B8C766' : '#1F4D2E'} />;
        })}
        {SPHERES.map((name, i) => {
          const a = (i / SPHERES.length) * Math.PI * 2 - Math.PI / 2;
          const x = Math.cos(a) * (R + 32);
          const y = Math.sin(a) * (R + 32);
          return (
            <text key={name} x={x} y={y + 5} textAnchor="middle" fontFamily="Instrument Serif, serif" fontSize="18" fontWeight="400" fill="#14130E" letterSpacing="-0.015em">{name}</text>
          );
        })}
      </svg>
    </div>
  );
};


Object.assign(window, { MatrixDiagram, NestedCircles, ModesTriad, SpheresOrbit, CausalLoop, TwoLoops, HealthWheel });
