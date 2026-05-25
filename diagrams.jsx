/* Audax OS site · diagrams
   Three signature visual moments:
   - MatrixDiagram  (5 spheres × 5 layers × 3 modes — isometric grid)
   - NestedCircles  (5 layers — concentric, individual at the core)
   - ModesTriad     (3 modes — human↔human, human↔agent, agent↔agent)

   All drawn in SVG using the brand palette. No external icons. */

/* ---------- Matrix : Spheres × Layers × Modes (equation) ---------- */
const MatrixDiagram = () => {
  const SX = [168, 500, 832], CROSS = [334, 666];
  const vizY = 222;
  const MONO = 'JetBrains Mono, monospace', SERIF = 'Instrument Serif, serif';

  // Spheres — five named circles in a pentagon
  const sphereNames = ['Value', 'Work', 'Relationship', 'Learning', 'Communication'];
  const sphereTint = ['#1F4D2E', '#2D6B41', '#3F8657', '#6BA37C', '#9CBFA3'];
  const scx = SX[0], scy = vizY + 10, sR = 50, sr = 24;
  const spts = sphereTint.map((_, i) => {
    const a = -Math.PI / 2 + i * 2 * Math.PI / 5;
    return [scx + sR * Math.cos(a), scy + sR * Math.sin(a), a];
  });

  // Layers — five equal isometric planes, vertically aligned
  const layerNames = ['Individual', 'Team', 'Organisation', 'Family', 'Ecosystem'];
  const layerTint = ['#C8DBC9', '#E2EBDD', '#E2EBDD', '#F0F4EC', '#F0F4EC'];
  const lcx = 500, lcyBase = 314, lhw = 80, lvh = 27, ldy = 40;

  // Modes — three named interaction icons (human / agent)
  const modeRows = [vizY - 66, vizY + 2, vizY + 70];
  const modeKinds = [['h', 'h'], ['h', 'a'], ['a', 'a']];
  const modeLabels = ['HUMAN ↔ HUMAN', 'HUMAN ↔ AGENT', 'AGENT ↔ AGENT'];
  const mcx = SX[2], mdx = 40, ms = 1.05;

  const human = (cx, cy) => (
    <g>
      <circle cx={cx} cy={cy - 7 * ms} r={6 * ms} fill="#1F4D2E" />
      <path d={`M ${cx - 11 * ms} ${cy + 11 * ms} a ${11 * ms} ${11 * ms} 0 0 1 ${22 * ms} 0 Z`} fill="#1F4D2E" />
    </g>
  );
  const agent = (cx, cy) => {
    const col = '#3F8657';
    return (
      <g>
        <line x1={cx} y1={cy - 9 * ms} x2={cx} y2={cy - 15 * ms} stroke={col} strokeWidth={1.6 * ms} />
        <circle cx={cx} cy={cy - 16 * ms} r={2.1 * ms} fill={col} />
        <rect x={cx - 13 * ms} y={cy - 3 * ms} width={3 * ms} height={7 * ms} rx={1.4 * ms} fill={col} />
        <rect x={cx + 10 * ms} y={cy - 3 * ms} width={3 * ms} height={7 * ms} rx={1.4 * ms} fill={col} />
        <rect x={cx - 10 * ms} y={cy - 9 * ms} width={20 * ms} height={18 * ms} rx={4.5 * ms} fill={col} />
        <circle cx={cx - 4.5 * ms} cy={cy - 1.5 * ms} r={2.2 * ms} fill="#fff" />
        <circle cx={cx + 4.5 * ms} cy={cy - 1.5 * ms} r={2.2 * ms} fill="#fff" />
        <rect x={cx - 5 * ms} y={cy + 4 * ms} width={10 * ms} height={2 * ms} rx={1 * ms} fill="#fff" />
      </g>
    );
  };
  const glyph = (k, cx, cy) => (k === 'h' ? human(cx, cy) : agent(cx, cy));

  return (
    <div className="diagram-axes">
      <svg viewBox="0 0 1000 380" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Five spheres times five layers times three modes">
        {/* equation header: 5 × 5 × 3 */}
        {SX.map((x, i) => (
          <text key={'eq' + i} x={x} y={64} fontFamily={SERIF} fontSize="46" fill="#0E2419" textAnchor="middle">{[5, 5, 3][i]}</text>
        ))}
        {CROSS.map((x, i) => (
          <text key={'cr' + i} x={x} y={60} fontFamily={MONO} fontSize="30" fill="#C9C6BD" textAnchor="middle">×</text>
        ))}
        {['SPHERES', 'LAYERS', 'MODES'].map((t, i) => (
          <text key={'cap' + i} x={SX[i]} y={92} fontFamily={MONO} fontSize="11" fill="#807D72" letterSpacing="0.18em" textAnchor="middle">{t}</text>
        ))}

        {/* Section 1 — spheres */}
        <polygon points={spts.map(p => p[0] + ',' + p[1]).join(' ')} fill="none" stroke="#9CBFA3" strokeWidth="1" opacity="0.5" />
        {spts.map((p, i) => (
          <circle key={'sc' + i} cx={p[0]} cy={p[1]} r={sr} fill={sphereTint[i]} opacity="0.95" />
        ))}
        {spts.map((p, i) => {
          const dx = Math.cos(p[2]), dy = Math.sin(p[2]);
          const lx = scx + (sR + sr + 7) * dx, ly = scy + (sR + sr + 7) * dy + 3;
          const anchor = dx > 0.3 ? 'start' : dx < -0.3 ? 'end' : 'middle';
          return (
            <text key={'sl' + i} x={lx} y={ly} fontFamily={MONO} fontSize="9.5" fill="#3A3830" letterSpacing="0.02em" textAnchor={anchor}>{sphereNames[i]}</text>
          );
        })}

        {/* Section 2 — layers (drawn back to front) */}
        {[4, 3, 2, 1, 0].map(i => {
          const cy = lcyBase - i * ldy;
          const pts = [[lcx, cy - lvh], [lcx + lhw, cy], [lcx, cy + lvh], [lcx - lhw, cy]];
          return (
            <g key={'ly' + i}>
              <polygon points={pts.map(p => p.join(',')).join(' ')} fill={layerTint[i]} opacity="0.92" stroke="#6BA37C" strokeWidth="1" />
              <text x={lcx} y={cy + 9} fontFamily={MONO} fontSize="10.5" fontWeight="500" letterSpacing="0.03em" textAnchor="middle" fill="#0E2419" stroke="#FBFAF3" strokeWidth="3.4" strokeLinejoin="round" paintOrder="stroke">{layerNames[i]}</text>
            </g>
          );
        })}

        {/* Section 3 — modes */}
        {modeRows.map((cy, i) => (
          <g key={'md' + i}>
            <line x1={mcx - mdx + 15} y1={cy} x2={mcx + mdx - 15} y2={cy} stroke="#C9C6BD" strokeWidth="1.4" />
            {glyph(modeKinds[i][0], mcx - mdx, cy)}
            {glyph(modeKinds[i][1], mcx + mdx, cy)}
            <text x={mcx} y={cy + 34} fontFamily={MONO} fontSize="9.5" fill="#807D72" letterSpacing="0.12em" textAnchor="middle">{modeLabels[i]}</text>
          </g>
        ))}
      </svg>
    </div>
  );
};

/* ---------- Modes diagram (standalone hero version — human/agent icon pairs) ---------- */
const ModesDiagram = () => {
  const MONO = 'JetBrains Mono, monospace';
  const SERIF = 'Instrument Serif, serif';
  const humanColor = '#1F4D2E', agentColor = '#3F8657';

  const human = (cx, cy) => (
    <g fill={humanColor}>
      <circle cx={cx} cy={cy - 22} r={17} />
      <path d={`M ${cx - 30} ${cy + 28} a 30 30 0 0 1 60 0 Z`} />
    </g>
  );
  const agent = (cx, cy) => (
    <g fill={agentColor}>
      <line x1={cx} y1={cy - 26} x2={cx} y2={cy - 40} stroke={agentColor} strokeWidth={5} />
      <circle cx={cx} cy={cy - 42} r={6} />
      <rect x={cx - 10} y={cy - 12} width={7} height={20} rx={3.5} />
      <rect x={cx + 3} y={cy - 12} width={7} height={20} rx={3.5} />
      <rect x={cx - 28} y={cy - 28} width={56} height={50} rx={12} />
      <circle cx={cx - 12} cy={cy - 5} r={6} fill="#fff" />
      <circle cx={cx + 12} cy={cy - 5} r={6} fill="#fff" />
      <rect x={cx - 14} y={cy + 11} width={28} height={6} rx={3} fill="#fff" />
    </g>
  );

  const rows = [
    { left: 'h', right: 'h', label: 'HUMAN ↔ HUMAN', lineColor: '#2A6B3C' },
    { left: 'h', right: 'a', label: 'HUMAN ↔ AGENT', lineColor: '#5C5A50' },
    { left: 'a', right: 'a', label: 'AGENT ↔ AGENT', lineColor: '#3A3830' },
  ];
  const lx = 130, rx = 470, rowH = 140, startY = 240;

  return (
    <div className="diagram-axes" style={{ maxWidth: 700, margin: '48px auto' }}>
      <svg viewBox="0 0 600 660" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Three modes of collaboration">
        <text x={300} y={90} fontFamily={SERIF} fontSize="68" fill="#0E2419" textAnchor="middle">3</text>
        <text x={300} y={128} fontFamily={MONO} fontSize="12" fill="#807D72" letterSpacing="0.24em" textAnchor="middle">MODES</text>
        {rows.map((r, i) => {
          const cy = startY + i * rowH;
          return (
            <g key={i}>
              <line x1={lx + 42} y1={cy} x2={rx - 42} y2={cy} stroke={r.lineColor} strokeWidth="1.6" strokeDasharray="6 5" />
              {r.left === 'h' ? human(lx, cy) : agent(lx, cy)}
              {r.right === 'h' ? human(rx, cy) : agent(rx, cy)}
              <text x={300} y={cy + 66} fontFamily={MONO} fontSize="12" fill="#5C5A50" letterSpacing="0.22em" textAnchor="middle">{r.label}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

/* ---------- Three small column diagrams for Why page ---------- */
const SpheresColDiagram = () => {
  const MONO = 'JetBrains Mono, monospace';
  const sphereNames = ['Value', 'Work', 'Relationship', 'Learning', 'Communication'];
  const sphereTints = ['#1F4D2E', '#2D6B41', '#3F8657', '#6BA37C', '#9CBFA3'];
  const cx = 140, cy = 120, R = 70, r = 22;
  const pts = sphereTints.map((_, i) => {
    const a = -Math.PI / 2 + i * 2 * Math.PI / 5;
    return [cx + R * Math.cos(a), cy + R * Math.sin(a), a];
  });
  return (
    <svg viewBox="0 0 280 210" preserveAspectRatio="xMidYMid meet" style={{ width: '100%', display: 'block' }}>
      <polygon points={pts.map(p => `${p[0]},${p[1]}`).join(' ')} fill="none" stroke="#9CBFA3" strokeWidth="1" opacity="0.4" />
      {pts.map((p, i) => <circle key={i} cx={p[0]} cy={p[1]} r={r} fill={sphereTints[i]} opacity="0.9" />)}
      {pts.map((p, i) => {
        const dx = Math.cos(p[2]), dy = Math.sin(p[2]);
        const lx = cx + (R + r + 8) * dx, ly = cy + (R + r + 8) * dy + 3;
        const anchor = dx > 0.3 ? 'start' : dx < -0.3 ? 'end' : 'middle';
        return <text key={i} x={lx} y={ly} fontFamily={MONO} fontSize="9" fill="#3A3830" textAnchor={anchor} letterSpacing="0.02em">{sphereNames[i]}</text>;
      })}
    </svg>
  );
};

const LayersColDiagram = () => {
  const MONO = 'JetBrains Mono, monospace';
  const cx = 140, cyBase = 195, hw = 90, hh = 22, step = 38;
  const layerNames = ['Individual', 'Team', 'Organisation', 'Family', 'Ecosystem'];
  const layerTints = ['#9CBFA3', '#AECFB5', '#C0D9C4', '#D4E7D7', '#E8F2E9'];
  return (
    <svg viewBox="0 0 280 215" preserveAspectRatio="xMidYMid meet" style={{ width: '100%', display: 'block' }}>
      {[4, 3, 2, 1, 0].map(i => {
        const cy = cyBase - i * step;
        const pts = `${cx},${cy - hh} ${cx + hw},${cy} ${cx},${cy + hh} ${cx - hw},${cy}`;
        return (
          <g key={i}>
            <polygon points={pts} fill={layerTints[i]} stroke="#6BA37C" strokeWidth="1" />
            <text x={cx} y={cy + 4} fontFamily={MONO} fontSize="10" fontWeight="500" textAnchor="middle" fill="#0E2419"
                  stroke="#FBFAF3" strokeWidth="3" strokeLinejoin="round" paintOrder="stroke">{layerNames[i]}</text>
          </g>
        );
      })}
    </svg>
  );
};

const ModesColDiagram = () => {
  const MONO = 'JetBrains Mono, monospace';
  const s = 1.25;
  const humanColor = '#1F4D2E', agentColor = '#3F8657';
  const human = (cx, cy) => (
    <g fill={humanColor}>
      <circle cx={cx} cy={cy - 8 * s} r={6 * s} />
      <path d={`M ${cx - 12 * s} ${cy + 12 * s} a ${12 * s} ${12 * s} 0 0 1 ${24 * s} 0 Z`} />
    </g>
  );
  const agent = (cx, cy) => (
    <g fill={agentColor}>
      <line x1={cx} y1={cy - 10 * s} x2={cx} y2={cy - 17 * s} stroke={agentColor} strokeWidth={1.8 * s} />
      <circle cx={cx} cy={cy - 18 * s} r={2.5 * s} />
      <rect x={cx - 14 * s} y={cy - 4 * s} width={3 * s} height={8 * s} rx={1.5 * s} />
      <rect x={cx + 11 * s} y={cy - 4 * s} width={3 * s} height={8 * s} rx={1.5 * s} />
      <rect x={cx - 11 * s} y={cy - 10 * s} width={22 * s} height={20 * s} rx={5 * s} />
      <circle cx={cx - 5 * s} cy={cy - 2 * s} r={2.5 * s} fill="#fff" />
      <circle cx={cx + 5 * s} cy={cy - 2 * s} r={2.5 * s} fill="#fff" />
      <rect x={cx - 5.5 * s} y={cy + 4 * s} width={11 * s} height={2.2 * s} rx={1.1 * s} fill="#fff" />
    </g>
  );
  const rows = [
    { left: 'h', right: 'h', label: 'HUMAN ↔ HUMAN', lc: '#2A6B3C' },
    { left: 'h', right: 'a', label: 'HUMAN ↔ AGENT', lc: '#5C5A50' },
    { left: 'a', right: 'a', label: 'AGENT ↔ AGENT', lc: '#3A3830' },
  ];
  const lx = 44, rx = 236, rowH = 66, startY = 40;
  return (
    <svg viewBox="0 0 280 255" preserveAspectRatio="xMidYMid meet" style={{ width: '100%', display: 'block' }}>
      {rows.map((r, i) => {
        const cy = startY + i * rowH;
        return (
          <g key={i}>
            <line x1={lx + 20} y1={cy} x2={rx - 20} y2={cy} stroke={r.lc} strokeWidth="1.2" strokeDasharray="4 3" />
            {r.left === 'h' ? human(lx, cy) : agent(lx, cy)}
            {r.right === 'h' ? human(rx, cy) : agent(rx, cy)}
            <text x={140} y={cy + 32} fontFamily={MONO} fontSize="9" fill="#807D72" letterSpacing="0.18em" textAnchor="middle">{r.label}</text>
          </g>
        );
      })}
    </svg>
  );
};

/* ---------- Layers stack (standalone hero version of the layers column) ---------- */
const LayersDiagram = () => {
  const MONO = 'JetBrains Mono, monospace';
  const SERIF = 'Instrument Serif, serif';
  const cx = 360, cyBase = 540, hw = 200, hh = 44, step = 78;
  const layerNames = ['Individual', 'Team', 'Organisation', 'Family', 'Ecosystem'];
  const layerNumerals = ['I', 'II', 'III', 'IV', 'V'];
  const layerTints = ['#9CBFA3', '#AECFB5', '#C0D9C4', '#D4E7D7', '#E8F2E9'];
  return (
    <div className="diagram-axes" style={{ maxWidth: 700, margin: '48px auto' }}>
      <svg viewBox="0 0 720 660" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Five layers of organisational scale">
        <text x={cx} y={90} fontFamily={SERIF} fontSize="68" fill="#0E2419" textAnchor="middle">5</text>
        <text x={cx} y={128} fontFamily={MONO} fontSize="12" fill="#807D72" letterSpacing="0.24em" textAnchor="middle">LAYERS</text>
        {[4, 3, 2, 1, 0].map(i => {
          const cy = cyBase - i * step;
          const pts = `${cx},${cy - hh} ${cx + hw},${cy} ${cx},${cy + hh} ${cx - hw},${cy}`;
          return (
            <g key={i}>
              <polygon points={pts} fill={layerTints[i]} stroke="#6BA37C" strokeWidth="1.4" />
              <text x={cx - hw - 24} y={cy + 5} fontFamily={MONO} fontSize="11" fill="#6BA37C" letterSpacing="0.18em" textAnchor="end">{layerNumerals[i]}</text>
              <text x={cx} y={cy + 6} fontFamily={MONO} fontSize="14" fontWeight="500" letterSpacing="0.06em" textAnchor="middle" fill="#0E2419"
                    stroke="#FBFAF3" strokeWidth="4" strokeLinejoin="round" paintOrder="stroke">{layerNames[i]}</text>
            </g>
          );
        })}
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
        {/* central Audax logo */}
        <g>
          <circle cx="0" cy="0" r="68" fill="#FFFFFF" stroke="#1F4D2E" strokeWidth="1.5" />
          <image href="assets/audax-os-logo-512.png" x="-48" y="-48" width="96" height="96" preserveAspectRatio="xMidYMid meet" />
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
