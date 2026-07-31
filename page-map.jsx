/* Audax OS site · The Map — the territory of needs.
   PROTOTYPE, unlisted at #map (no nav / no footer entry in ROUTES).

   The inversion this page exists to make: the site's spine stops being the
   answer (5 spheres x 5 layers x 3 modes) and becomes the space of needs the
   answer is laid over. Regions carry a state — charted, contested, blank — and
   the blanks are published as blanks, because a framework with visible holes
   cannot be mistaken for a product.

   Cartographic convention does the work: explorers charted coasts first and
   left interiors empty. So the south coast is a confident ink line, the middle
   band is hatched water, and the northern interior is bare paper with questions
   standing in it. The landmass has no northern edge — we do not know where it
   ends, so it is drawn dashed and allowed to fade.

   Styles live in a <style> block below rather than site.css, so the prototype
   stays self-contained while it is under review. Promoting the page means
   moving MAP_CSS into site.css. */

/* ── The territory ──────────────────────────────────────────────────────────
   One array drives the chart, the panels and (once promoted) the unresolved
   strips on the Spheres / Layers / Modes pages. `charted.page` deep-links via
   the router; those pages currently expose only <page>-intro ids, so the links
   land on the page rather than the exact section until per-section ids are
   added — a small follow-up that costs nothing and sharpens every link here. */
const MAP_TERRITORY = [
  /* ── charted ── */
  {
    id: 'context', state: 'charted', x: 180, y: 548,
    need: 'Context that travels',
    question: 'How does what a team knows reach someone who was not there?',
    account: 'The office carried context ambiently. Distributed work removed that layer, so communication has to carry meaning rather than transmit instructions.',
    charted: { page: 'spheres', label: 'Spheres → Communication' },
    labs: ['Lab №1 · Cross-organisational knowledge and memory'],
    events: ['Audax OS Conversations'],
    unresolved: [
      'How much context is enough for a six-hour-a-week contributor?',
      'What does an organisation share before a shared agent can represent it faithfully?',
    ],
  },
  {
    id: 'legible-work', state: 'charted', x: 400, y: 508,
    need: 'Work that is legible',
    question: 'Can someone — or something — join this work without months of osmosis?',
    account: 'Quests, missions, commitments, decision rights and definitions of done, because neither a part-time contributor nor an agent can wait for organisational osmosis.',
    charted: { page: 'spheres', label: 'Spheres → Organisation of Work' },
    labs: [],
    events: ['Camp Audax'],
    unresolved: ['Where does legibility become surveillance?'],
  },
  {
    id: 'value', state: 'charted', x: 620, y: 560,
    need: 'Value recognised across forms of contribution',
    question: 'How is a contribution seen when it is not hours, and not a job title?',
    account: 'Payment, ownership, reputation, learning, relationship capital and risk are different things. Fractional participation makes salary-shaped assumptions insufficient.',
    charted: { page: 'spheres', label: 'Spheres → Value Accounting' },
    labs: [],
    events: ['Audax OS Conversations'],
    unresolved: [
      'How is agent-assisted work attributed?',
      'What gets counted gets gamed. What is the defence?',
    ],
  },
  {
    id: 'learning', state: 'charted', x: 800, y: 512,
    need: 'Learning that crosses organisations',
    question: 'Where does a person’s development live when they work in four places?',
    account: 'Distributed work removes informal apprenticeship; fractional work spreads learning across organisations. Development needs explicit pathways and portable records.',
    charted: { page: 'spheres', label: 'Spheres → Development & Learning' },
    labs: [],
    events: [],
    unresolved: ['Portable learning records: a decade of standards, thin adoption. Why?'],
  },
  {
    id: 'relationships', state: 'charted', x: 960, y: 518,
    need: 'Relationships that survive distance and change',
    question: 'What holds people together when participation keeps changing?',
    account: 'Trust as infrastructure rather than a by-product of proximity — and the internal, developmental half of purpose.',
    charted: { page: 'spheres', label: 'Spheres → Human Relationship & Purpose' },
    labs: [],
    events: ['Camp Audax'],
    unresolved: ['Developmental commitments can become intrusive. Where is the line?'],
  },

  /* ── contested ── */
  {
    id: 'two-purposes', state: 'contested', x: 180, y: 370,
    need: 'Two kinds of purpose',
    question: 'Is purpose one thing, or two things that can conflict?',
    account: 'Developmental and human-centred inside; purpose-led and impact-oriented outside. They reinforce one another — and they are not automatically aligned.',
    charted: null,
    labs: [],
    events: ['Audax OS Conversations'],
    unresolved: [
      'One sphere holding both, or two?',
      'What happens when the inside and the outside commitment pull apart?',
    ],
  },
  {
    id: 'os-or-architecture', state: 'contested', x: 420, y: 320,
    need: 'Operating system, or reference architecture?',
    question: 'Which word is honest about what this is?',
    account: '"Operating system" is evocative and implies one installed product. "Reference architecture" is more precise and colder. The metaphor should organise functions, not imply an organisation can be debugged into obedience.',
    charted: null,
    labs: [],
    events: [],
    unresolved: ['Living organisations hold ambiguity, conflict, law and irreversible consequence. No computer does.'],
  },
  {
    id: 'entry-condition', state: 'contested', x: 660, y: 374,
    need: 'Requirements, or tendencies?',
    question: 'Must all five conditions be true, or is this a direction of travel?',
    account: 'Distributed, fractional, developmental, purpose-led, agentic. The intersection is distinctive — and very few organisations may recognise themselves in all five at once.',
    charted: { page: 'whofor', label: 'Who for? → the entry condition' },
    labs: [],
    events: ['Camp Audax'],
    unresolved: ['Narrow enough to be useful, open enough to become a field. Where exactly is that line?'],
  },
  {
    id: 'agent-mandates', state: 'contested', x: 890, y: 322,
    need: 'Agents acting within clear mandates',
    question: 'What may an agent decide, and who remains accountable?',
    account: 'Context, permission, memory, feedback, escalation, human judgment. An organisation using a chatbot occasionally is not agentic; one that gives agents roles, permissions and accountability is.',
    charted: { page: 'modes', label: 'Modes → Human ↔ Agent' },
    labs: ['Lab №1 · The Lab Agent constitution'],
    events: [],
    unresolved: [
      'An integrated OS could be extraordinarily helpful or exquisitely invasive.',
      'Who owns, corrects and deletes shared memory?',
    ],
  },
  {
    id: 'interop', state: 'contested', x: 985, y: 366,
    need: 'Tools that interoperate rather than capture',
    question: 'What exactly would Audax standardise?',
    account: 'Vocabulary, data models, protocols, diagnostics, agent roles, governance patterns — or all of these. Adding one enormous platform to govern everything simplifies the sales deck and recreates the centralisation this is trying to move past.',
    charted: null,
    labs: ['Lab №1 · sovereign shared infrastructure'],
    events: [],
    unresolved: ['Protocols coordinate machines that have no interests. People have interests.'],
  },

  /* ── blank ── */
  {
    id: 'stewardship', state: 'blank', x: 165, y: 210,
    need: 'Who governs this?',
    question: 'Open ownership is not the same as no stewardship. So who stewards?',
    account: null,
    labs: [], events: [],
    unresolved: [
      'Who can change core concepts?',
      'How are conflicts resolved?',
      'What stops the name being used for practices contrary to its principles?',
    ],
  },
  {
    id: 'licence', state: 'blank', x: 300, y: 120,
    need: 'What is open, and under what licence?',
    question: 'Code is answered. Everything else is not.',
    account: null,
    labs: ['Lab №1 is CC0'], events: [],
    unresolved: [
      'Data, models, participant contributions, generated knowledge, names and marks.',
      'How do commercial implementations relate to shared infrastructure?',
    ],
  },
  {
    id: 'evidence', state: 'blank', x: 520, y: 208,
    need: 'What evidence is there that these organisations need this?',
    question: 'The framing is plausible. Plausibility is not proof.',
    account: null,
    labs: [], events: ['Camp Audax — comparing real operating problems'],
    unresolved: [
      'No customer discovery published. No comparative research. No case studies yet.',
      'Do builders recognise this intersection, or does it feel assembled?',
    ],
  },
  {
    id: 'smallest', state: 'blank', x: 900, y: 112,
    need: 'What is the smallest useful implementation?',
    question: 'What would you actually do on Monday?',
    account: null,
    labs: [], events: [],
    unresolved: [
      'Five spheres, five layers, three modes, principles, archetypes, protocols, agents and tools is a mandala nobody knows how to start with.',
      'A progressive adoption path does not exist yet.',
    ],
  },
  {
    id: 'wrong-answer', state: 'blank', x: 940, y: 212,
    need: 'When is this the wrong answer?',
    question: 'What conditions make Audax inappropriate?',
    account: null,
    labs: [], events: [],
    unresolved: ['An inquiry that cannot say where it does not apply is selling something.'],
  },
  {
    id: 'camouflage', state: 'blank', x: 610, y: 58,
    need: 'How is purpose stopped from becoming camouflage?',
    question: 'What prevents mission language from normalising unpaid labour?',
    account: null,
    labs: [], events: [],
    unresolved: [
      'Purpose-led and fractional organisations are the most exposed to this.',
      'Value accounting is not optional garnish.',
    ],
  },
];

/* Chart labels are authored rather than derived: auto-truncating `need` gave
   "WHAT IS OPEN, AND UNDER WHAT LIC…", and auto-wrapping guesses badly at this
   size. Two lines maximum, and short enough to clear the coastline. */
const MAP_LABELS = {
  context:            ['Context that travels'],
  'legible-work':     ['Work that is legible'],
  value:              ['Value recognised across', 'forms of contribution'],
  learning:           ['Learning that crosses', 'organisations'],
  relationships:      ['Relationships that', 'survive distance'],
  'two-purposes':     ['Two kinds of purpose'],
  'os-or-architecture': ['OS, or reference', 'architecture?'],
  'entry-condition':  ['Requirements,', 'or tendencies?'],
  'agent-mandates':   ['Agents within', 'clear mandates'],
  interop:            ['Tools that interoperate', 'rather than capture'],
  stewardship:        ['Who governs this?'],
  licence:            ['What is open, and', 'under what licence?'],
  evidence:           ['What evidence is there', 'that this is needed?'],
  smallest:           ['What is the smallest', 'useful implementation?'],
  'wrong-answer':     ['When is this', 'the wrong answer?'],
  camouflage:         ['How is purpose stopped', 'from becoming camouflage?'],
};

const MAP_STATES = {
  charted:   { label: 'Charted',   blurb: 'A working account exists.' },
  contested: { label: 'Contested', blurb: 'Live, and unsettled.' },
  blank:     { label: 'Blank',     blurb: 'We have not been here.' },
};

const MAP_CSS = `
.map-wrap { background: var(--surface-parchment); }
.map-chart { width: 100%; height: auto; display: block; touch-action: manipulation; }
.map-chart text { user-select: none; }

.map-node { cursor: pointer; }
.map-node:focus { outline: none; }
.map-node .hit { fill: transparent; }
.map-node .lbl {
  font-family: var(--font-mono); font-size: 11px; letter-spacing: .12em;
  text-transform: uppercase; fill: var(--ink-600);
  transition: fill .18s ease;
}
.map-node .mark { transition: transform .18s ease, opacity .18s ease; transform-box: fill-box; transform-origin: center; }
.map-node:hover .mark, .map-node:focus-visible .mark { transform: scale(1.22); }
.map-node:hover .lbl, .map-node:focus-visible .lbl { fill: var(--forest-700); }
.map-node:focus-visible .halo { opacity: .5; }
.map-node.is-sel .lbl { fill: var(--forest-800); font-weight: 500; }
.map-node.is-sel .halo { opacity: 1; }
.map-node .halo { opacity: 0; transition: opacity .2s ease; }

.map-legend { display: flex; flex-wrap: wrap; gap: 28px; margin: 28px 0 0; padding: 0; list-style: none; }
.map-legend li { display: flex; align-items: baseline; gap: 10px; }
.map-legend .k { font-family: var(--font-mono); font-size: 11px; letter-spacing: .16em; text-transform: uppercase; color: var(--forest-700); }
.map-legend .v { font-size: 14px; color: var(--ink-500); }

/* ── the panel ── */
.map-panel {
  margin-top: 40px; border-top: 2px solid var(--forest-700);
  background: var(--surface-white); border-radius: 0 0 14px 14px;
  padding: 30px 32px 34px; box-shadow: 0 1px 0 var(--border-2), 0 18px 40px -34px rgba(20,19,14,.4);
}
.map-panel.is-empty { border-top-color: var(--border-strong); background: transparent; box-shadow: none; padding: 26px 0 0; }
.map-panel .state {
  font-family: var(--font-mono); font-size: 11px; letter-spacing: .2em;
  text-transform: uppercase; color: var(--forest-700); margin-bottom: 12px;
}
.map-panel .state.blank { color: var(--ink-400); }
.map-panel .state.contested { color: var(--forest-500); }
.map-panel h3 {
  font-family: var(--font-display); font-weight: 400; letter-spacing: -.02em;
  font-size: clamp(26px, 3.4vw, 38px); line-height: 1.12; color: var(--ink-900); margin: 0 0 14px;
}
.map-panel .q {
  font-family: var(--font-display); font-style: italic; font-size: clamp(18px, 2vw, 22px);
  line-height: 1.35; color: var(--forest-700); margin: 0 0 20px; max-width: 62ch;
}
.map-panel .acct { font-size: 16px; line-height: 1.65; color: var(--ink-700); max-width: 66ch; margin: 0 0 22px; }
.map-panel .rows { display: grid; gap: 18px; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); margin-top: 4px; }
.map-panel .row h6 {
  font-family: var(--font-mono); font-size: 10px; letter-spacing: .18em; text-transform: uppercase;
  color: var(--ink-500); margin: 0 0 8px; font-weight: 500;
}
.map-panel .row ul { margin: 0; padding: 0; list-style: none; }
.map-panel .row li { font-size: 14.5px; line-height: 1.5; color: var(--ink-700); padding: 4px 0; }
.map-panel .row li::before { content: '·'; color: var(--forest-400); margin-right: 8px; }
.map-panel .row .none { font-size: 14px; color: var(--ink-400); font-style: italic; }
.map-panel .go {
  display: inline-flex; align-items: center; gap: 8px; margin-top: 6px;
  font-family: var(--font-mono); font-size: 12px; letter-spacing: .1em; text-transform: uppercase;
  color: var(--forest-700); background: none; border: 0; border-bottom: 1px solid var(--forest-300);
  padding: 3px 0; cursor: pointer;
}
.map-panel .go:hover { border-bottom-color: var(--forest-700); }
.map-panel .foot {
  margin-top: 26px; padding-top: 20px; border-top: 1px solid var(--border-2);
  display: flex; flex-wrap: wrap; gap: 14px; align-items: center; justify-content: space-between;
}
.map-panel .foot p { margin: 0; font-size: 14px; color: var(--ink-500); }

/* ── the list ── */
.map-cols { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; margin-top: 8px; }
.map-col h4 {
  font-family: var(--font-mono); font-size: 11px; letter-spacing: .2em; text-transform: uppercase;
  color: var(--forest-700); margin: 0 0 4px; font-weight: 500;
}
.map-col .sub { font-size: 13.5px; color: var(--ink-400); margin: 0 0 16px; font-style: italic; }
.map-col ul { margin: 0; padding: 0; list-style: none; }
.map-col li { border-top: 1px solid var(--border-2); }
.map-col button {
  width: 100%; text-align: left; background: none; border: 0; cursor: pointer;
  padding: 13px 0; font-family: var(--font-sans); font-size: 15.5px; line-height: 1.4;
  color: var(--ink-800); display: flex; gap: 10px; align-items: baseline;
}
.map-col button:hover { color: var(--forest-700); }
.map-col button .dot { flex: 0 0 auto; width: 7px; height: 7px; border-radius: 50%; margin-top: 6px; }
.map-col.charted .dot { background: var(--forest-700); }
.map-col.contested .dot { background: none; border: 1.5px solid var(--forest-500); }
.map-col.blank .dot { background: none; border: 1.5px dotted var(--ink-400); }

@media (max-width: 900px) {
  .map-cols { grid-template-columns: 1fr; gap: 34px; }
  .map-panel { padding: 26px 22px 28px; }
  .map-legend { gap: 16px 24px; }
}
`;

/* ── chart ─────────────────────────────────────────────────────────────────── */
const MapChart = ({ sel, onSel }) => {
  const node = (d) => {
    const on = sel === d.id;
    const act = () => onSel(on ? null : d.id);
    return (
      <g
        key={d.id}
        className={`map-node${on ? ' is-sel' : ''}`}
        role="button"
        tabIndex={0}
        aria-pressed={on}
        aria-label={`${MAP_STATES[d.state].label}: ${d.need}`}
        onClick={act}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); act(); } }}
      >
        <circle className="halo" cx={d.x} cy={d.y} r="26" fill="#B8C766" opacity="0" />
        <g className="mark">
          {d.state === 'charted' && (
            <>
              <circle cx={d.x} cy={d.y} r="13" fill="none" stroke="#1F4D2E" strokeWidth="1" opacity=".55" />
              <circle cx={d.x} cy={d.y} r="6.5" fill="#1F4D2E" />
            </>
          )}
          {d.state === 'contested' && (
            <>
              <circle cx={d.x} cy={d.y} r="13" fill="none" stroke="#3F8657" strokeWidth="1" strokeDasharray="3 4" opacity=".8" />
              <circle cx={d.x} cy={d.y} r="6.5" fill="none" stroke="#3F8657" strokeWidth="1.6" />
            </>
          )}
          {d.state === 'blank' && (
            <>
              <circle cx={d.x} cy={d.y} r="12" fill="none" stroke="#A8A59B" strokeWidth="1" strokeDasharray="1 4" />
              <text
                x={d.x} y={d.y + 5} textAnchor="middle"
                fontFamily="Instrument Serif, serif" fontSize="19" fill="#807D72"
              >?</text>
            </>
          )}
        </g>
        <text className="lbl" x={d.x} y={d.y + 33} textAnchor="middle">
          {(MAP_LABELS[d.id] || [d.need]).map((line, i) => (
            <tspan key={line} x={d.x} dy={i ? 15 : 0}>{line}</tspan>
          ))}
        </text>
        <circle className="hit" cx={d.x} cy={d.y} r="34" />
      </g>
    );
  };

  return (
    <svg className="map-chart" viewBox="0 0 1200 700" role="group" aria-label="The territory — an ink chart of the space of needs">
      <defs>
        <pattern id="mapHatch" width="9" height="9" patternTransform="rotate(38)" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="9" stroke="#6BA37C" strokeWidth="0.8" opacity=".45" />
        </pattern>
        <linearGradient id="mapLand" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#1F4D2E" stopOpacity=".085" />
          <stop offset="100%" stopColor="#1F4D2E" stopOpacity=".02" />
        </linearGradient>
        <linearGradient id="mapFade" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#1F4D2E" stopOpacity=".55" />
          <stop offset="100%" stopColor="#1F4D2E" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* graticule — faint, the chart's ruled paper */}
      <g stroke="#EFEDE4" strokeWidth="1" opacity=".75">
        {[70, 160, 250, 340, 430, 520, 610].map((y) => <line key={y} x1="0" y1={y} x2="1200" y2={y} />)}
        {[150, 300, 450, 600, 750, 900, 1050].map((x) => <line key={x} x1={x} y1="0" x2={x} y2="700" />)}
      </g>

      {/* charted ground */}
      <path
        d="M 60 570 C 160 620 260 640 380 618 C 500 596 600 636 720 612 C 840 588 980 606 1140 552
           L 1120 420 C 900 446 740 398 560 426 C 380 454 220 406 66 432 Z"
        fill="url(#mapLand)"
      />
      {/* contested water */}
      <path
        d="M 66 432 C 220 406 380 454 560 426 C 740 398 900 446 1120 420
           L 1104 246 C 880 270 700 226 540 254 C 380 282 240 234 86 256 Z"
        fill="url(#mapHatch)"
      />

      {/* south coast — the confident line */}
      <path
        d="M 60 570 C 160 620 260 640 380 618 C 500 596 600 636 720 612 C 840 588 980 606 1140 552"
        fill="none" stroke="#1F4D2E" strokeWidth="1.9" strokeLinecap="round"
      />
      {/* east and west coasts — solid, then unfinished */}
      <path d="M 60 570 C 40 470 80 380 96 300" fill="none" stroke="#1F4D2E" strokeWidth="1.6" />
      <path d="M 1140 552 C 1160 460 1120 380 1104 300" fill="none" stroke="#1F4D2E" strokeWidth="1.6" />
      <path d="M 96 300 C 108 240 96 170 120 96" fill="none" stroke="url(#mapFade)" strokeWidth="1.4" strokeDasharray="7 8" />
      <path d="M 1104 300 C 1092 240 1108 168 1084 96" fill="none" stroke="url(#mapFade)" strokeWidth="1.4" strokeDasharray="7 8" />

      {/* internal boundaries */}
      <path
        d="M 66 432 C 220 406 380 454 560 426 C 740 398 900 446 1120 420"
        fill="none" stroke="#3F8657" strokeWidth="1.2" strokeDasharray="6 6" opacity=".7"
      />
      <path
        d="M 86 256 C 240 232 380 280 540 252 C 700 224 860 268 1100 244"
        fill="none" stroke="#A8A59B" strokeWidth="1.1" strokeDasharray="2 7" opacity=".9"
      />

      {/* zone captions, set into the paper */}
      <text x="600" y="668" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="11" letterSpacing="0.34em" fill="#1F4D2E" opacity=".65">CHARTED COAST</text>
      <text x="600" y="300" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="11" letterSpacing="0.34em" fill="#3F8657" opacity=".7">CONTESTED WATER</text>
      <text x="600" y="32" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="11" letterSpacing="0.34em" fill="#A8A59B">UNMAPPED INTERIOR</text>

      {/* compass — restrained */}
      <g transform="translate(1112 82)" opacity=".45">
        <circle r="24" fill="none" stroke="#1F4D2E" strokeWidth="1" />
        <path d="M 0 -19 L 5 0 L 0 19 L -5 0 Z" fill="#1F4D2E" opacity=".75" />
        <text x="0" y="-28" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing=".16em" fill="#1F4D2E">N</text>
      </g>

      {MAP_TERRITORY.map(node)}
    </svg>
  );
};

/* ── panel ─────────────────────────────────────────────────────────────────── */
const MapPanel = ({ d, onNav }) => {
  if (!d) {
    return (
      <div className="map-panel is-empty">
        <p style={{ margin: 0, fontSize: 16, color: 'var(--ink-500)', maxWidth: '60ch' }}>
          Choose a region. Five have a working account, five are contested, and six are blank —
          published as blank, because they are where the work is.
        </p>
      </div>
    );
  }
  const st = MAP_STATES[d.state];
  const row = (title, items, empty) => (
    <div className="row">
      <h6>{title}</h6>
      {items && items.length
        ? <ul>{items.map((x) => <li key={x}>{x}</li>)}</ul>
        : <p className="none">{empty}</p>}
    </div>
  );

  return (
    <div className="map-panel">
      <div className={`state ${d.state}`}>{st.label} · {st.blurb}</div>
      <h3>{d.need}</h3>
      <p className="q">{d.question}</p>
      {d.account && <p className="acct">{d.account}</p>}
      {d.charted && (
        <button className="go" type="button" onClick={() => onNav(d.charted.page)}>
          {d.charted.label} <i data-lucide="arrow-right" style={{ width: 14, height: 14 }}></i>
        </button>
      )}
      <div className="rows" style={{ marginTop: d.charted ? 26 : 4 }}>
        {row('Still unresolved', d.unresolved, '—')}
        {row('Being tested in', d.labs, 'No lab yet.')}
        {row('Being discussed at', d.events, 'Not yet on a programme.')}
      </div>
      <div className="foot">
        <p>{d.state === 'blank'
          ? 'This is blank because nobody has done the work yet — not because it is being withheld.'
          : 'Carrying a piece of this? It belongs in the inquiry.'}</p>
        <Button variant="accent" icon="arrow-right" onClick={() => onNav('build')}>Add to this</Button>
      </div>
    </div>
  );
};

/* ── page ──────────────────────────────────────────────────────────────────── */
const PageMap = ({ onNav }) => {
  const [sel, setSel] = React.useState(null);
  const chartRef = React.useRef(null);

  // Deep-linkable as #map/<region-id>. Read straight from the hash rather than
  // through the router's section prop, which scrolls to a DOM id — here the id
  // selects a region instead.
  React.useEffect(() => {
    const read = () => {
      const part = window.location.hash.replace('#', '').split('/')[1];
      if (part && MAP_TERRITORY.some((d) => d.id === part)) setSel(part);
    };
    read();
    window.addEventListener('hashchange', read);
    return () => window.removeEventListener('hashchange', read);
  }, []);

  const pick = (id, scroll) => {
    setSel(id);
    if (id) window.history.replaceState(null, '', `#map/${id}`);
    else window.history.replaceState(null, '', '#map');
    if (scroll && chartRef.current) chartRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const chosen = MAP_TERRITORY.find((d) => d.id === sel) || null;
  const byState = (s) => MAP_TERRITORY.filter((d) => d.state === s);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: MAP_CSS }} />

      {/* ── hero ── */}
      <section className="section" style={{ paddingBottom: 24 }}>
        <div className="container">
          <Eyebrow>The map</Eyebrow>
          <h1 className="display lg" style={{ maxWidth: 900 }}>
            The territory, and how much of it <em>we have actually charted</em>
          </h1>
          <p className="lede" style={{ maxWidth: 720, marginTop: 18 }}>
            This is not the framework. It is the space of needs the framework is laid over —
            drawn the way a coast gets drawn: confidently where we have been, hatched where it is
            disputed, and left blank where nobody has gone.
          </p>
          <p className="lede" style={{ maxWidth: 720, marginTop: 14, fontStyle: 'italic' }}>
            The blanks are the invitation.
          </p>
        </div>
      </section>

      {/* ── chart ── */}
      <section className="section map-wrap" style={{ paddingTop: 8 }} ref={chartRef}>
        <div className="container">
          <MapChart sel={sel} onSel={(id) => pick(id, false)} />
          <ul className="map-legend">
            {Object.entries(MAP_STATES).map(([k, v]) => (
              <li key={k}><span className="k">{v.label}</span><span className="v">{v.blurb}</span></li>
            ))}
          </ul>
          <MapPanel d={chosen} onNav={onNav} />
        </div>
      </section>

      <WashRule image={ART.wave} from="parchment" to="paper" />

      {/* ── list ── */}
      <section className="section" style={{ background: 'var(--surface-paper)' }}>
        <div className="container">
          <h2 className="display" style={{ fontSize: 'clamp(30px, 3.6vw, 46px)', marginBottom: 10 }}>
            Everything on the map
          </h2>
          <p style={{ maxWidth: 640, color: 'var(--ink-600)', marginBottom: 40 }}>
            Sixteen regions. Five have a working account; the rest are the reason this is an
            inquiry rather than a launch.
          </p>
          <div className="map-cols">
            {['charted', 'contested', 'blank'].map((s) => (
              <div key={s} className={`map-col ${s}`}>
                <h4>{MAP_STATES[s].label}</h4>
                <p className="sub">{MAP_STATES[s].blurb}</p>
                <ul>
                  {byState(s).map((d) => (
                    <li key={d.id}>
                      <button type="button" onClick={() => pick(d.id, true)}>
                        <span className="dot"></span>
                        <span>{d.need}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── close ── */}
      <CtaBand
        title="We have starting questions,<br />not <em>answers</em>."
        body="We know this area matters, and we know it needs the best people and organisations in the world working on it. Come and take a region."
        primary="Join the inquiry"
        secondary="Who is this for?"
        onPrimary={() => onNav('build')}
        onSecondary={() => onNav('whofor')}
      />
    </>
  );
};

window.PageMap = PageMap;
