/* Living Intelligence · the page
   One long, anchored landing page in the same design language as the Camp Audax
   page (see li-kit.jsx and page-camp.jsx). Copy is the collective voice of the camp, and draws on
   Daveed Benjamin's two recommendations at prohumannatureai.com, which stay the
   place to read the full North Star method. Photographs come from the Camp Audax library
   and Unsplash. */

const LI_JOIN_URL = 'https://audax.earth/#camp';
const LI_CTA = 'Meet us at Camp Audax';

const LI_SECTIONS = [
  { id: 'relationship', label: 'The relationship',   mile: 'MI 0', icon: '◈' },
  { id: 'why',          label: 'Why',                mile: 'MI 1', icon: '◎' },
  { id: 'triad',        label: 'The triad',          mile: 'MI 2', icon: '◐' },
  { id: 'questions',    label: 'The questions',      mile: 'MI 3', icon: '▲' },
  { id: 'properties',   label: 'Desirable Properties', mile: 'MI 4', icon: '◇' },
  { id: 'field',        label: 'Weaving the field',  mile: 'MI 5', icon: '▣' },
  { id: 'join',         label: 'Join',               mile: 'MI 6', icon: '❖' }
];

/* Every entry completes "People, the Biosphere and AI, ___". The first is the anchor:
   what crawlers, screen readers and reduced-motion readers get. */
const LI_ROTATION = [
  'learning to coevolve.',
  'nurturing wiser intelligence.',
  'tending the same roots.',
  'building the vision together.',
  'in the flow of regeneration.',
  'remembering we are one system.'
];

const LI_WHY_COME = [
  ['The Biosphere as a participant', 'The Biosphere, Humanity and AI are three forms of intelligences shaping one future together. The people who steward the living world belong in the room where that future is designed.'],
  ['A north star before the architecture hardens', 'The defaults set this year will be very hard to unpick later. Better to ask now what the whole system should be true of.'],
  ['Properties that can be tested', 'Values such as dignity and regeneration point to a direction. A Desirable Properties inquiry will turn them into conditions specific enough to build toward, or disagree about.'],
  ['Written with people who steward real places', 'Seed banks, watersheds, sacred sites, biodiversity networks. The Biosphere properties start from practice that already exists.'],
  ['Open to any organization, wherever its people are', 'Grown from Camp Audax and built to widen. Anyone can take part from wherever they work.'],
  ['Coevolution as the frame', 'Coevolution asks what it takes for three very different intelligences to shape each other well, over very long timescales.']
];

const LI_TRIAD = [
  {
    n: '1', name: 'Biosphere',
    short: 'Four billion years of research and development, still running.',
    benefit: 'Four billion years of research and development, still running.',
    working: 'Regeneration, resilience and interdependence at every scale: soil, watersheds, seed banks, forests and the practices of the people who tend them.',
    brings: ['Regenerative timescales', 'Standing for other species', 'Polycentric stewardship', 'Visible cost to the biosphere'],
    blind: 'How much of the future of the old forests, rivers and seas is settled in rooms they cannot enter, through contracts, models and quarterly plans, and who will speak for them there.'
  },
  {
    n: '2', name: 'Human',
    short: 'The ability to ask what a thing is for.',
    benefit: 'The ability to ask what a thing is for.',
    working: 'Meaning, care and judgment and the shared spaces where people deliberate, disagree and decide together, and the collective intelligence that grows when we learn, think & collaborate together.',
    brings: ['Portability that survives a change of provider', 'Agents that are explainable and accountable', 'Shared spaces communities can govern', 'Individual and collective agency'],
    blind: 'The long timescales, quiet costs, and sophisticated patterns and connections that never reach a dashboard, and what a default chosen in a sprint does ten years on.'
  },
  {
    n: '3', name: 'AI',
    short: 'Pattern, speed and synthesis at a scale beyond any single team.',
    benefit: 'Pattern, speed and synthesis at a scale beyond any single team.',
    working: 'The capacity to sense, model and coordinate across more information than any person or institution can track alone.',
    brings: ['Bounded authority', 'Revocable delegation', 'Compartmentalization', 'Independent monitoring', 'Reliable provenance', 'Multiple centers of control'],
    blind: 'The patience of living systems and the slow, place-rooted wisdom of elders, gardeners and old forests: understanding what deepens with time, relationship and attention.'
  }
];

const LI_VALUE_PROPERTY = [
  ['Agency', 'Can a person change AI provider without losing years of memory, relationships and context?'],
  ['Accountability', 'Can anyone see who an agent represents, what authority it holds and how to challenge what it does?'],
  ['Biosphere flourishing', 'Are the energy, water, materials and land a system uses visible, or invisible because the interaction happens on a screen?'],
  ['Resilience', 'When one part fails, does the failure stay there, or can one compromised agent or security breach reach a whole environment?']
];

const LI_HYPHEN = [
  ['Pro-Human AI', 'Service, loyalty, accountability and control: what AI owes the people it works for.'],
  ['Pro Human-AI', 'The relationship itself: symbiosis, mutual augmentation and durable boundaries between distinct participants.'],
  ['Pro Human-Biosphere-AI', 'The living systems both depend on. Cost to the biosphere becomes visible and the health of the whole living system joins the design brief.']
];

const LI_STEPS = [
  { title: 'Name the properties', who: 'People decide', body: 'Desirable Properties emerge from conversation with the people who steward real places, build real tools and fund real work.' },
  { title: 'Draft the requirements', who: 'AI drafts', body: 'Each property becomes a proposed requirement structure: what a system must do, should do and could do.' },
  { title: 'Decide together', who: 'People decide', body: 'A human process edits the wording, raises or lowers the bar and settles which requirements to pursue.' },
  { title: 'Propose architectures', who: 'AI drafts', body: 'Candidate designs are generated for each requirement and compared on their consequences, including who controls them and how people leave.' },
  { title: 'Choose collectively', who: 'People decide', body: 'The group selects the architectures it will build and records the reasons.' },
  { title: 'Scaffold the substrate', who: 'AI drafts', body: 'The chosen architecture becomes code: the smallest foundation that lets anyone create communities and applications that live above the web page.' },
  { title: 'Overlay and evolve', who: 'People', body: 'Communities and applications grow on the shared substrate. Each grants the same basic rights to everyone, enforced by code where possible and patches keep the list alive.' }
];

const LI_STOOL = [
  ['Tools that work', 'Agents, protocols and infrastructure that people can inspect, leave and govern. The properties in this list turn into requirements here.', 'Technology & Architecture'],
  ['Mindsets that mature', 'Cultural maturity, sometimes called planetary adulthood: the capacity to hold long timescales, other species and other people’s needs in one decision. This maturity belongs to the collective: it grows as shared understanding and collective wisdom across whole communities, and learning systems built for free thinking carry this work.', 'Culture and learning'],
  ['Equity that reaches everyone', 'A future that is fair, free and flourishing for all, with shelter, food and energy within reach of every household and agency in the hands of the many.', 'Economy and justice']
];

const LI_FOREST_LAYERS = [
  ['Shared roots', 'Identity, consent, provenance and memory, agreed once and drawn on by every tool.', 'Everyone holds'],
  ['Tended in coherence', 'Some capabilities gain from concentrated focus. Whoever does one best tends it and offers it to the rest.', 'One team tends'],
  ['Each brings something new', 'The novel work each team pursues, kept distinct so the network keeps its variety.', 'Distinct gifts']
];

const LI_QUESTIONS = [
  'How can AI bring the living world into planning, governance and everyday decisions?',
  'What would it take for a river’s sensor network to belong to the community that lives along it?',
  'Which properties stay valuable if AI capability grows faster than our institutions?',
  'Where do individual agency, collective agency and the flourishing of the biosphere reinforce one another?',
  'As AI grows more capable, what kind of partnership keeps the biosphere, people and AI all flourishing together?',
  'How do our own agents relate to us, to one another and to the living world?',
  'Who speaks for the places, species and future generations that cannot attend?',
  'What does an inspiring story about all three sound like and who tells it?'
];

/* One photograph per question, chosen for the feeling of the question. */
const LI_QUESTION_SHOTS = ['meadow', 'meadow', 'hummingbird', 'hummingbird', 'reading', 'reading', 'forest-circle', 'forest-circle'];
const LI_QUESTION_ITEMS = LI_QUESTIONS.map((q, i) => ({ n: String(i + 1), shot: LI_QUESTION_SHOTS[i], title: q }));

/* ─── The mark ───────────────────────────────────────────────────────────
   Three circles, one overlap: biosphere, human, AI, and the lens where they meet. */
const LIMark = ({ size = 34 }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" role="img" aria-label="Living Intelligence" className="li-mark">
    <circle cx="20" cy="13" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="13.5" cy="24.5" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="26.5" cy="24.5" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
    <path d="M20 18.2 C22.6 20.4 22.6 23.6 20 25.8 C17.4 23.6 17.4 20.4 20 18.2 Z" fill="var(--lichen-400)" stroke="none" />
  </svg>
);

/* ─── Mycelium ───────────────────────────────────────────────────────────
   A seeded, branching network drawn in one stroke per hypha, which draws itself
   as it scrolls into view. Deterministic per seed, so it never changes between
   renders. Used as the relief between sections in place of a plain rule. */
const liRng = (seed) => { let s = seed >>> 0; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; };

/* A bodhi leaf (Ficus religiosa), base at the origin and tip pointing up: heart-shaped, with the long drip tip. The
   light-ground bands grow bodhi vines, the same leaf as the Living Intelligence graphics. */
const LI_BODHI = 'M0 0 C-2 1 -6.2 -1 -6.2 -5.6 C-6.2 -9.2 -2.8 -11 -1.1 -15.6 C-0.7 -16.8 0.7 -16.8 1.1 -15.6 C2.8 -11 6.2 -9.2 6.2 -5.6 C6.2 -1 2 1 0 0 Z';

const LIMore = ({ label = 'Show more', children }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="li-more">
      <button type="button" className="li-more-btn" aria-expanded={open} onClick={() => setOpen(o => !o)}>
        {open ? 'Show less' : label}<span aria-hidden="true">{open ? ' −' : ' +'}</span>
      </button>
      {open && <div className="li-more-body">{children}</div>}
    </div>
  );
};

/* Now and then: a version written for the era of aligned superintelligence beside the familiar line it echoes, as two cards. */
const LIQuotePair = () => (
  <CampCascade className="li-quote-pair" step={140}>
    <figure className="li-quote-now">
      <blockquote>&ldquo;Never doubt that a collectively intelligent network of networks, working with aligned superintelligence, can help humanity coordinate, protect what matters, and meet challenges at a scale once unimaginable. Indeed, our future may depend on it.&rdquo;</blockquote>
      <figcaption>A modern version, by Daveed Benjamin</figcaption>
    </figure>
    <figure className="li-quote-then">
      <blockquote>&ldquo;Never doubt that a small group of thoughtful, committed citizens can change the world; indeed, it&rsquo;s the only thing that ever has.&rdquo;</blockquote>
      <figcaption>Attributed to Margaret Mead</figcaption>
    </figure>
  </CampCascade>
);

/* Faint veins for the leaf: a midrib and three pairs of side veins. */
const LI_BODHI_VEINS = 'M0 -1 L0 -14.6 M0 -3 L-3.8 -6.6 M0 -3 L3.8 -6.6 M0 -6.6 L-4.6 -9.8 M0 -6.6 L4.6 -9.8 M0 -10 L-2.5 -12.6 M0 -10 L2.5 -12.6';
/* Three quiet leaf tones, base to tip: sage, olive sage and blue sage. */
/* Stem tones, base to tip: warm grey-brown, olive sage, fresh sage. */
const LI_STEM_TONES = ['#7A6F57', '#6F8A58', '#5E9468'];
const LI_LEAF_TONES = [['#86A06A', '#BCCB9C'], ['#9AA86A', '#C9D2A0'], ['#80A082', '#B6CAB2']];

/* ─── Watercolour vines ──────────────────────────────────────────────────
   The light-ground bands are painted on a canvas: tapering stems built from layered washes (a pale bloom, the body
   colour, a dark wet edge on one side and a light lift on the other), bodhi leaves with a painted gradient and
   pooled edges, and a paper grain knocked out of the whole. Growth is the same forking, curving vine as before;
   branches stop where they would cut across another, every stem finishes in a leaf or a small curl, and empty
   patches are filled by short branches grown from the nearest stem. */
const liHash = (n) => { const x = Math.sin(n * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };
const liHex = (h) => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
const liMix = (a, b, t) => a.map((v, i) => Math.round(v + (b[i] - v) * t));
const liRgb = (c, al = 1) => `rgba(${c[0]},${c[1]},${c[2]},${al})`;
/* leaf tones, base to tip: sage, olive sage, blue sage, and a touch of warm yellow-green */
/* the night garden: luminous ivory and pale sage leaves for the dark green ground */
const LI_NIGHT_TONES = [['#7FA383', '#E6EFD6'], ['#A9BE80', '#F1F5DC'], ['#8DB5A2', '#E3F0E8'], ['#CFC98E', '#FAF7E0']];
const LI_PAINT_TONES = [['#7F9A66', '#BFCE9E'], ['#93A464', '#CCD59C'], ['#79997C', '#B9CDB3'], ['#A9A464', '#D6D49E']];

const liBuildVines = (seed, H) => {
  const r = liRng(seed), W = 1200;
  const stems = [], leaves = [];
  const occ = new Map();
  const cellOf = (x, y) => Math.round(x / 2) + ',' + Math.round(y / 2);
  let uid = 0;
  const grow = (x, y, ang, len, depth, lineage) => {
    if (depth > 4 || len < 14) return;
    const id = uid++;
    const chain = lineage.concat(id);
    const stem = { id, depth, chain, pts: [{ x, y }], dead: false };
    stems.push(stem);
    const steps = 3 + Math.floor(r() * 3);
    const stepLen = len / steps;
    let cx = x, cy = y, a = ang, grown = 0, travelled = 0, blocked = false, flip = r() < 0.5;
    for (let i = 0; i < steps && !blocked; i++) {
      a += (r() - 0.5) * 0.6;
      const nx = cx + Math.cos(a) * stepLen, ny = cy + Math.sin(a) * stepLen;
      if (ny < -4 || ny > H + 4) break;
      const marks = [];
      for (let k = 1; k <= 5; k++) {
        const px = cx + (nx - cx) * k / 5, py = cy + (ny - cy) * k / 5;
        const hit = occ.get(cellOf(px, py));
        if (travelled + stepLen * k / 5 > 24 && hit !== undefined && !chain.includes(hit)) { blocked = true; break; }
        marks.push(cellOf(px, py));
      }
      if (blocked) break;
      marks.forEach(k => { if (!occ.has(k)) occ.set(k, id); });
      const mx = (cx + nx) / 2 + (r() - 0.5) * 8, my = (cy + ny) / 2 + (r() - 0.5) * 8;
      for (let k = 1; k <= 8; k++) {
        const u = k / 8, iu = 1 - u;
        stem.pts.push({ x: iu * iu * cx + 2 * iu * u * mx + u * u * nx, y: iu * iu * cy + 2 * iu * u * my + u * u * ny });
      }
      cx = nx; cy = ny; grown++; travelled += stepLen;
      if (r() < 0.5) {
        flip = !flip;
        grow(cx, cy, a + (flip ? 1 : -1) * (0.35 + r() * 0.5), len * 0.62, depth + 1, chain);
      }
      if (r() < (depth ? 0.12 : 0.08)) {
        leaves.push({ stem, idx: stem.pts.length - 1, x: cx, y: cy, rot: a + (flip ? 1 : -1) * (Math.PI / 2 - 0.5 + (r() - 0.5) * 0.35), s: (0.62 + r() * 0.3 - depth * 0.04) * 1.25 });
      }
    }
    if (!grown) { stem.dead = true; return; }
    /* a larger stem finishes in a leaf; a fine twig finishes in a leaf, or is left to taper to a point or curl (below) */
    if (depth <= 2 || r() < 0.4) {
      leaves.push({ stem, tip: true, idx: stem.pts.length - 1, x: cx, y: cy, rot: a, s: (0.8 + r() * 0.35 - depth * 0.05) * 1.25 });
    } else {
      stem.end = { x: cx, y: cy, a };
    }
  };
  const colonies = 14;
  for (let i = 0; i < colonies; i++) {
    const x0 = (W / colonies) * (i + 0.5) + (r() - 0.5) * 90, y0 = H / 2 + (r() - 0.5) * 24;
    grow(x0, y0, (i % 2 ? Math.PI : 0) + (r() - 0.5) * 0.8, (110 + r() * 60) * 1.2, 0, []);
    grow(x0, y0, (i % 2 ? 0 : Math.PI) + (r() - 0.5) * 0.8, (90 + r() * 60) * 1.2, 0, []);
  }
  /* fill wide empty patches with short branches grown from the nearest stem */
  for (let pass = 0; pass < 3; pass++) {
    const cw = 48, ch = H / 4;
    const filled = new Set();
    stems.forEach(s => { if (!s.dead) s.pts.forEach(p => filled.add(Math.floor(p.x / cw) + ',' + Math.floor(p.y / ch))); });
    for (let gx = 0; gx < W / cw; gx++) {
      for (let gy = 1; gy <= 2; gy++) {
        if (filled.has(gx + ',' + gy)) continue;
        const tx = (gx + 0.5) * cw, ty = (gy + 0.5) * ch;
        let best = null, bd = 1e9;
        stems.forEach(s => { if (s.dead) return; for (let i = 0; i < s.pts.length; i += 3) { const p = s.pts[i]; const d = (p.x - tx) * (p.x - tx) + (p.y - ty) * (p.y - ty); if (d < bd) { bd = d; best = { p, s }; } } });
        if (!best || bd > 170 * 170) continue;
        const ang = Math.atan2(ty - best.p.y, tx - best.p.x);
        grow(best.p.x, best.p.y, ang, Math.sqrt(bd) * 1.15 + 34, 2, best.s.chain);
      }
    }
  }
  /* a small curl on a twig end only where the space around it is open; in a crowd the twig simply tapers to a point */
  const allLive = stems.filter(s => !s.dead);
  allLive.forEach(s => {
    if (!s.end) return;
    const { x: ex, y: ey, a: ea } = s.end;
    let crowd = 0;
    allLive.forEach(o => { if (o === s) return; for (let i = 0; i < o.pts.length; i += 2) { const p = o.pts[i]; if (Math.abs(p.x - ex) < 30 && Math.abs(p.y - ey) < 30) crowd++; } });
    leaves.forEach(l => { if (Math.abs(l.x - ex) < 28 && Math.abs(l.y - ey) < 28) crowd += 3; });
    if (crowd > 9) return;
    let h = ea, px = ex, py = ey;
    const turn = liHash(s.id + 5) < 0.5 ? 1 : -1;
    for (let k = 0; k < 16; k++) {
      h += turn * (0.22 + k * 0.035);
      const sl = 3.4 - k * 0.16;
      px += Math.cos(h) * sl; py += Math.sin(h) * sl;
      s.pts.push({ x: px, y: py });
    }
  });
  const live = allLive;
  live.forEach((s, i) => { s.t0 = s.depth * 0.28 + (i % 12) * 0.025; s.dur = 0.85; s.n = s.pts.length; });
  const kept = leaves.filter((l, i) => !l.stem.dead && (l.tip || (i * 7 + 3) % 9 > 1)).map((l, i) => ({
    ...l, tone: liHash(i + seed) < 0.14 ? 3 : (i * 5 + (i >> 2)) % 3, o: 0.62 + ((i * 37) % 30) / 100,
    at: l.stem.t0 + l.stem.dur * (l.idx / Math.max(1, l.stem.n - 1)) + 0.08
  }));
  return { stems: live, leaves: kept };
};

const LIVines = ({ seed = 11, height = 190, above = 0, below = 0, night = false }) => {
  const wrapRef = React.useRef(null);
  const cvRef = React.useRef(null);
  const data = React.useMemo(() => liBuildVines(seed, height), [seed, height]);
  React.useEffect(() => {
    const wrap = wrapRef.current, cv = cvRef.current;
    if (!wrap || !cv) return undefined;
    const H = height, T_END = 2.6;
    const ctx = cv.getContext('2d');
    const mk = () => document.createElement('canvas');
    const layers = { wash: mk(), body: mk(), edge: mk(), hi: mk() };
    const lctx = {};
    Object.keys(layers).forEach(k => { lctx[k] = layers[k].getContext('2d'); lctx[k].lineCap = 'round'; lctx[k].lineJoin = 'round'; });
    const noise = (() => {
      const c = mk(); c.width = c.height = 200;
      const x = c.getContext('2d'), id = x.createImageData(200, 200);
      for (let i = 0; i < id.data.length; i += 4) { const v = Math.random(); id.data[i + 3] = v > 0.8 ? 255 * (v - 0.6) : (v < 0.1 ? 150 : 0); }
      x.putImageData(id, 0, 0);
      return c;
    })();
    const noisePat = ctx.createPattern(noise, 'repeat');
    const leafPath = new Path2D(LI_BODHI), veinPath = new Path2D(LI_BODHI_VEINS);
    const widths = [3.1, 2.5, 2.0, 1.6, 1.3];
    let sc = 1, ox = 0, oy = 0, w = 0, h = 0;
    let started = false, startAt = 0, raf = 0, done = false, nowT = 0;
    const stopsFor = (s) => {
      if (night) return [liHex('#B3C396'), liHex('#DAE5C0'), liHex('#F3F6E4')];
      const warm = liHash(s.id + seed) < 0.38;
      return s.depth >= 3 ? [liHex('#74805A'), liHex('#6B8F5C'), liHex('#5E9468')]
        : [liHex(warm ? '#86705A' : '#7A7660'), liHex('#6F8A58'), liHex('#5E9468')];
    };
    const colorAt = (stops, u) => (u < 0.5 ? liMix(stops[0], stops[1], u * 2) : liMix(stops[1], stops[2], (u - 0.5) * 2));
    const motes = night && data.leaves.length ? Array.from({ length: 60 }, (_, i) => {
      const l = data.leaves[Math.floor(liHash(i * 11 + seed) * data.leaves.length)];
      return { x: l.x + (liHash(i * 3 + 1) - 0.5) * 46, y: Math.max(8, Math.min(H - 8, l.y + (liHash(i * 3 + 2) - 0.5) * 38)), r: 0.7 + liHash(i * 5 + 4) * 1.5, a: 0.4 + liHash(i * 7 + 9) * 0.5, at: l.at + 0.2 };
    }) : [];
    const fit = () => {
      const dpr = Math.min(Math.max(window.devicePixelRatio || 1, 2), 3);
      const cw = wrap.clientWidth || 1200;
      w = Math.round(cw * dpr); h = Math.round(H * dpr);
      [cv, ...Object.values(layers)].forEach(c => { c.width = w; c.height = h; });
      Object.values(lctx).forEach(c => { c.lineCap = 'round'; c.lineJoin = 'round'; });
      sc = Math.max(w / 1200, h / H);
      ox = (w - 1200 * sc) / 2; oy = (h - H * sc) / 2;
      data.stems.forEach(s => { s.drawn = 1; });
    };
    const drawChunks = (s, upto) => {
      const stops = stopsFor(s), w0 = widths[s.depth] || 1.3;
      for (let i = s.drawn; i <= upto && i < s.n; i++) {
        const p0 = s.pts[i - 1], p1 = s.pts[i];
        if (!p0) continue;
        const u = i / (s.n - 1);
        const wd = Math.max(0.35 * (window.devicePixelRatio || 1), w0 * (1 - 0.9 * Math.pow(u, 0.8)) * sc);
        const col = colorAt(stops, u);
        const x0 = ox + p0.x * sc, y0 = oy + p0.y * sc, x1 = ox + p1.x * sc, y1 = oy + p1.y * sc;
        const dx = x1 - x0, dy = y1 - y0, dl = Math.hypot(dx, dy) || 1, nx = -dy / dl, ny = dx / dl;
        const line = (c, xa, ya, xb, yb, lw, colr) => { c.strokeStyle = colr; c.lineWidth = lw; c.beginPath(); c.moveTo(xa, ya); c.lineTo(xb, yb); c.stroke(); };
        line(lctx.wash, x0, y0, x1, y1, wd * 2.4, liRgb(night ? [196, 222, 186] : liMix(col, [250, 249, 240], 0.7)));
        line(lctx.body, x0, y0, x1, y1, wd, liRgb(col));
        line(lctx.edge, x0 + nx * wd * 0.3, y0 + ny * wd * 0.3, x1 + nx * wd * 0.3, y1 + ny * wd * 0.3, wd * 0.38, liRgb(night ? liMix(col, [60, 104, 74], 0.65) : liMix(col, [30, 52, 36], 0.55)));
        line(lctx.hi, x0 - nx * wd * 0.24, y0 - ny * wd * 0.24, x1 - nx * wd * 0.24, y1 - ny * wd * 0.24, wd * 0.28, liRgb(night ? liMix(col, [255, 255, 250], 0.75) : liMix(col, [255, 253, 240], 0.6)));
      }
      s.drawn = Math.max(s.drawn, Math.min(upto + 1, s.n));
    };
    const drawLeaf = (l, k) => {
      const t = (night ? LI_NIGHT_TONES : LI_PAINT_TONES)[l.tone];
      ctx.save();
      ctx.translate(ox + l.x * sc, oy + l.y * sc);
      ctx.rotate(l.rot + Math.PI / 2);
      const z = sc * l.s * (0.25 + 0.75 * k);
      ctx.scale(z, z);
      ctx.globalAlpha = l.o * Math.min(1, k * 1.6);
      const g = ctx.createLinearGradient(0, 0, 0, -16);
      g.addColorStop(0, t[0]); g.addColorStop(1, t[1]);
      ctx.fillStyle = g; ctx.fill(leafPath);
      ctx.save(); ctx.clip(leafPath);
      ctx.lineWidth = 2.2; ctx.strokeStyle = night ? 'rgba(255,255,244,0.34)' : 'rgba(52,88,52,0.38)'; ctx.stroke(leafPath);
      ctx.restore();
      ctx.lineWidth = 0.55; ctx.lineCap = 'round'; ctx.strokeStyle = night ? 'rgba(36,76,54,0.45)' : 'rgba(46,80,44,0.5)'; ctx.stroke(veinPath);
      ctx.restore();
    };
    const compose = (time) => {
      ctx.globalCompositeOperation = 'source-over';
      ctx.clearRect(0, 0, w, h);
      if (night) ctx.globalCompositeOperation = 'lighter';
      ctx.globalAlpha = night ? 0.2 : 0.16; ctx.drawImage(layers.wash, 0, 0);
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = night ? 0.9 : 0.82; ctx.drawImage(layers.body, 0, 0);
      ctx.globalAlpha = night ? 0.45 : 0.5; ctx.drawImage(layers.edge, 0, 0);
      ctx.globalAlpha = night ? 0.5 : 0.32; ctx.drawImage(layers.hi, 0, 0);
      ctx.globalAlpha = 1;
      data.leaves.forEach(l => {
        const k = Math.max(0, Math.min(1, (time - l.at) / 0.4));
        if (k > 0) { const e = 1 - Math.pow(1 - k, 3); drawLeaf(l, e); }
      });
      if (night) {
        ctx.globalCompositeOperation = 'lighter';
        motes.forEach(m => {
          const k = Math.max(0, Math.min(1, (time - m.at) / 0.5));
          if (k <= 0) return;
          const cx0 = ox + m.x * sc, cy0 = oy + m.y * sc, rr = m.r * sc;
          const g = ctx.createRadialGradient(cx0, cy0, 0, cx0, cy0, rr * 3.2);
          g.addColorStop(0, `rgba(240,247,214,${(m.a * k).toFixed(3)})`);
          g.addColorStop(0.3, `rgba(220,236,196,${(m.a * k * 0.35).toFixed(3)})`);
          g.addColorStop(1, 'rgba(220,236,196,0)');
          ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx0, cy0, rr * 3.2, 0, 6.2832); ctx.fill();
        });
      }
      ctx.globalCompositeOperation = 'destination-out';
      ctx.globalAlpha = night ? 0.32 : 0.5; ctx.fillStyle = noisePat; ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'source-over'; ctx.globalAlpha = 1;
    };
    const paint = (time) => {
      data.stems.forEach(s => {
        const f = Math.max(0, Math.min(1, (time - s.t0) / s.dur));
        const upto = Math.floor(f * (s.n - 1));
        if (upto >= s.drawn) drawChunks(s, upto);
      });
      compose(time);
    };
    const finalPaint = () => { fit(); Object.values(lctx).forEach(c => c.clearRect(0, 0, w, h)); nowT = T_END; paint(T_END); done = true; };
    const loop = (ts) => {
      if (!startAt) startAt = ts;
      nowT = (ts - startAt) / 1000;
      if (nowT >= T_END) { paint(T_END); done = true; return; }
      paint(nowT);
      raf = requestAnimationFrame(loop);
    };
    const begin = () => {
      if (started) return; started = true;
      if (cphReduced()) { finalPaint(); return; }
      fit(); Object.values(lctx).forEach(c => c.clearRect(0, 0, w, h));
      raf = requestAnimationFrame(loop);
    };
    fit();
    let io = null;
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { begin(); io.disconnect(); } }, { threshold: 0.25 });
      io.observe(wrap);
    } else begin();
    let lastW = wrap.clientWidth;
    const onResize = () => {
      if (wrap.clientWidth === lastW) return;
      lastW = wrap.clientWidth;
      const t = done ? T_END : nowT;
      fit(); Object.values(lctx).forEach(c => c.clearRect(0, 0, w, h));
      if (started) paint(t);
    };
    window.addEventListener('resize', onResize);
    return () => { cancelAnimationFrame(raf); if (io) io.disconnect(); window.removeEventListener('resize', onResize); };
  }, [data, height]);
  return (
    <div ref={wrapRef} className={`li-myc li-vines${night ? ' li-vines-night' : ''}`} style={{ height, marginTop: above, marginBottom: below }} aria-hidden="true">
      <canvas ref={cvRef} style={{ display: 'block', width: '100%', height: '100%' }} />
    </div>
  );
};

const MyceliumInk = ({ seed = 7, height = 150, dark = false }) => {
  const ref = useCampReveal();
  const { paths, nodes, leaves, pieces } = React.useMemo(() => {
    const r = liRng(seed);
    const W = 1200, H = height;
    const paths = [], nodes = [], leaves = [];
    /* the light-ground bands grow fuller: more colonies, deeper branching and small leaf nodes along the stems;
       the dark band keeps its original, sparser setting */
    const lush = !dark;
    const cfg = lush
      ? { colonies: 11, hyphae: 2, maxDepth: 4, minLen: 15, branchP: 0.5, shrink: 0.62, endNode: 0.5, grow: 1.2 }
      : { colonies: 6, hyphae: 2, maxDepth: 4, minLen: 16, branchP: 0.5, shrink: 0.6, endNode: 0.7 };
    const grow = (x, y, ang, len, depth) => {
      if (depth > cfg.maxDepth || len < cfg.minLen) return;
      const entry = { d: '', depth };
      paths.push(entry);
      const steps = 3 + Math.floor(r() * 3);
      let d = `M${x.toFixed(1)} ${y.toFixed(1)}`;
      let cx = x, cy = y, a = ang;
      for (let i = 0; i < steps; i++) {
        a += (r() - 0.5) * (lush ? 0.6 : 0.9);
        const nx = cx + Math.cos(a) * len / steps, ny = cy + Math.sin(a) * len / steps;
        const mx = (cx + nx) / 2 + (r() - 0.5) * 8, my = (cy + ny) / 2 + (r() - 0.5) * 8;
        d += ` Q${mx.toFixed(1)} ${my.toFixed(1)} ${nx.toFixed(1)} ${ny.toFixed(1)}`;
        cx = nx; cy = ny;
        if (r() < cfg.branchP) grow(cx, cy, a + (r() < 0.5 ? -1 : 1) * (lush ? 0.35 + r() * 0.5 : 0.5 + r() * 0.7), len * cfg.shrink, depth + 1);
        if (lush && r() < (depth ? 0.12 : 0.07)) {
          /* alternate leaves, one each side of the stem, tilted forward along its direction */
          const side = (i + depth) % 2 ? 1 : -1;
          leaves.push({ x: cx, y: cy, rot: a + side * (Math.PI / 2 - 0.5 + (r() - 0.5) * 0.35), s: 0.58 + r() * 0.3 - depth * 0.04, depth });
        }
      }
      entry.d = d;
      if (r() < cfg.endNode) {
        if (lush) leaves.push({ x: cx, y: cy, rot: a, s: 0.75 + r() * 0.35 - depth * 0.05, depth });
        else nodes.push({ x: cx, y: cy, r: 1.3 + r() * 2.2, depth });
      }
    };
    /* Light grounds: curving vines that fork and drift, kept from knotting by a gentle rule: a branch stops
       where it would cut across another one, so stems lie alongside each other and seldom cross. */
    const occ = new Map();
    const cellOf = (x, y) => Math.round(x / 2) + ',' + Math.round(y / 2);
    let uid = 0;
    const growLush = (x, y, ang, len, depth, lineage) => {
      if (depth > 4 || len < 15) return;
      const id = uid++;
      const chain = lineage.concat(id);
      const entry = { d: '', depth, segs: [] };
      paths.push(entry);
      const steps = 3 + Math.floor(r() * 3);
      const stepLen = len / steps;
      let d = `M${x.toFixed(1)} ${y.toFixed(1)}`;
      let cx = x, cy = y, a = ang, grown = 0, travelled = 0, blocked = false, flip = r() < 0.5;
      for (let i = 0; i < steps && !blocked; i++) {
        a += (r() - 0.5) * 0.6;
        const nx = cx + Math.cos(a) * stepLen, ny = cy + Math.sin(a) * stepLen;
        const marks = [];
        for (let k = 1; k <= 5; k++) {
          const px = cx + (nx - cx) * k / 5, py = cy + (ny - cy) * k / 5;
          const hit = occ.get(cellOf(px, py));
          if (travelled + stepLen * k / 5 > 24 && hit !== undefined && !chain.includes(hit)) { blocked = true; break; }
          marks.push(cellOf(px, py));
        }
        if (blocked) break;
        marks.forEach(k => { if (!occ.has(k)) occ.set(k, id); });
        const mx = (cx + nx) / 2 + (r() - 0.5) * 8, my = (cy + ny) / 2 + (r() - 0.5) * 8;
        d += ` Q${mx.toFixed(1)} ${my.toFixed(1)} ${nx.toFixed(1)} ${ny.toFixed(1)}`;
        entry.segs.push({ sx: cx, sy: cy, q: ` Q${mx.toFixed(1)} ${my.toFixed(1)} ${nx.toFixed(1)} ${ny.toFixed(1)}` });
        cx = nx; cy = ny; grown++; travelled += stepLen;
        if (r() < 0.5) {
          flip = !flip;
          growLush(cx, cy, a + (flip ? 1 : -1) * (0.35 + r() * 0.5), len * 0.62, depth + 1, chain);
        }
        if (r() < (depth ? 0.12 : 0.08)) {
          const side = flip ? 1 : -1;
          leaves.push({ x: cx, y: cy, rot: a + side * (Math.PI / 2 - 0.5 + (r() - 0.5) * 0.35), s: (0.62 + r() * 0.3 - depth * 0.04) * 1.2, depth });
        }
      }
      /* every large stem finishes with a leaf; a fine twig ends in a leaf or in a small defined curl */
      if (grown && (depth <= 1 || r() < (depth === 2 ? 0.75 : 0.55))) {
        leaves.push({ x: cx, y: cy, rot: a, s: (0.8 + r() * 0.35 - depth * 0.05) * 1.2, depth });
      } else if (grown && r() < 0.6) {
        let h = a, px = cx, py = cy;
        const turn = r() < 0.5 ? 1 : -1;
        for (let k = 0; k < 3; k++) {
          h += turn * (0.75 + k * 0.4);
          const sl = 6.5 - k * 1.8;
          const qx = px + Math.cos(h - turn * 0.4) * sl * 0.7, qy = py + Math.sin(h - turn * 0.4) * sl * 0.7;
          const ex = px + Math.cos(h) * sl, ey = py + Math.sin(h) * sl;
          d += ` Q${qx.toFixed(1)} ${qy.toFixed(1)} ${ex.toFixed(1)} ${ey.toFixed(1)}`;
          entry.segs.push({ sx: px, sy: py, q: ` Q${qx.toFixed(1)} ${qy.toFixed(1)} ${ex.toFixed(1)} ${ey.toFixed(1)}` });
          px = ex; py = ey;
        }
      }
      entry.d = grown ? d : '';
    };
    const colonies = cfg.colonies;
    for (let i = 0; !lush && i < colonies; i++) {
      const x0 = (W / colonies) * (i + 0.5) + (r() - 0.5) * 90, y0 = H / 2 + (r() - 0.5) * 24;
      const gm = cfg.grow || 1;
      /* on the light grounds the main stems sweep sideways in long, gentle arcs (vines, not diagonals), one
         heading each way from every colony; the dark band keeps its free direction */
      const sx = lush ? (i % 2 ? Math.PI : 0) + (r() - 0.5) * 0.8 : r() * Math.PI * 2;
      const sy = lush ? (i % 2 ? 0 : Math.PI) + (r() - 0.5) * 0.8 : r() * Math.PI * 2;
      grow(x0, y0, sx, (110 + r() * 60) * gm, 0);
      grow(x0, y0, sy, (90 + r() * 60) * gm, 0);
      if (cfg.hyphae > 2) grow(x0, y0, r() * Math.PI * 2, (80 + r() * 60) * gm, 0);
    }
    if (lush) {
      const colonies14 = 14;
      for (let i = 0; i < colonies14; i++) {
        const x0 = (W / colonies14) * (i + 0.5) + (r() - 0.5) * 90, y0 = H / 2 + (r() - 0.5) * 24;
        growLush(x0, y0, (i % 2 ? Math.PI : 0) + (r() - 0.5) * 0.8, (110 + r() * 60) * 1.2, 0, []);
        growLush(x0, y0, (i % 2 ? 0 : Math.PI) + (r() - 0.5) * 0.8, (90 + r() * 60) * 1.2, 0, []);
      }
    }
    /* a quieter canopy: drop about a fifth of the leaves, evenly, and give each survivor one of three tones */
    const kept = leaves.filter((l, i) => (i * 7 + 3) % 9 > 1).map((l, i) => ({ ...l, tone: (i * 5 + (i >> 2)) % 3, o: 0.6 + ((i * 37) % 30) / 100 }));
    /* Watercolour stems: a large stem is painted in up to three pieces that thin and shift colour along its length,
       the way a brush does when it is lifted; fine twigs are a single light stroke. */
    const pieces = [];
    if (lush) {
      paths.filter(p => p.d && p.segs.length).forEach((p, pi) => {
        const n = p.depth <= 2 ? Math.min(3, p.segs.length) : 1;
        const per = Math.ceil(p.segs.length / n);
        for (let k = 0; k < n; k++) {
          const part = p.segs.slice(k * per, (k + 1) * per);
          if (!part.length) continue;
          pieces.push({ d: `M${part[0].sx.toFixed(1)} ${part[0].sy.toFixed(1)}` + part.map(s => s.q).join(''), depth: p.depth, k, n, pi });
        }
      });
    }
    return { paths: paths.filter(p => p.d), nodes, leaves: kept, pieces };
  }, [seed, height, dark]);

  return (
    <svg ref={ref} className={`li-myc${dark ? ' dark' : ''}`} viewBox={`0 0 1200 ${height}`} preserveAspectRatio="xMidYMid slice" aria-hidden="true" style={{ height }}>
      {!dark && (
        <defs>
          {LI_LEAF_TONES.map(([a, b], k) => (
            <linearGradient key={k} id={`lg${k}-${seed}`} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="-16">
              <stop offset="0" stopColor={a} />
              <stop offset="1" stopColor={b} />
            </linearGradient>
          ))}
          <g id={`lf-${seed}`}>
            <path className="leaf-shape" d={LI_BODHI} />
            <path className="leaf-vein" d={LI_BODHI_VEINS} />
          </g>
          <filter id={`wc-${seed}`} x="-2%" y="-8%" width="104%" height="116%" colorInterpolationFilters="sRGB">
            <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" seed={seed} result="warp" />
            <feDisplacementMap in="SourceGraphic" in2="warp" scale="3.6" xChannelSelector="R" yChannelSelector="G" result="wobble" />
            <feGaussianBlur in="wobble" stdDeviation="1.1" result="soft" />
            <feComposite in="wobble" in2="soft" operator="out" result="rim" />
            <feFlood floodColor="#2E5A3B" floodOpacity="0.6" result="ink" />
            <feComposite in="ink" in2="rim" operator="in" result="wetEdge" />
            <feTurbulence type="fractalNoise" baseFrequency="0.016 0.09" numOctaves="2" seed={seed + 7} result="mottle" />
            <feColorMatrix in="mottle" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.6 0.55" result="mottleA" />
            <feComposite in="wobble" in2="mottleA" operator="in" result="bloom" />
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed={seed + 3} result="grain" />
            <feColorMatrix in="grain" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.5 0.62" result="grainA" />
            <feMerge result="paint">
              <feMergeNode in="bloom" />
              <feMergeNode in="wetEdge" />
            </feMerge>
            <feComposite in="paint" in2="grainA" operator="in" />
          </filter>
        </defs>
      )}
      <g style={dark ? undefined : { filter: `url(#wc-${seed})` }}>
      {dark && paths.map((p, i) => (
        <path key={i} d={p.d} pathLength="1" style={{ transitionDelay: `${Math.min(i * 6, 450)}ms`, strokeWidth: Math.max(0.6, 1.5 - p.depth * 0.25) }} />
      ))}
      {!dark && pieces.map((pc, i) => {
        const base = Math.max(1.2, 3.3 - pc.depth * 0.5);
        const w = pc.n > 1 ? base * (1 - 0.5 * (pc.k + 0.5) / pc.n) : Math.max(0.9, base * 0.8);
        const tone = pc.n > 1 ? LI_STEM_TONES[Math.min(2, Math.round(pc.k * 2 / (pc.n - 1)))] : LI_STEM_TONES[2];
        const dur = 1200 / pc.n;
        return <path key={i} d={pc.d} pathLength="1" style={{ stroke: tone, strokeWidth: w.toFixed(2), transitionDuration: `${dur.toFixed(0)}ms`, transitionDelay: `${pc.depth * 200 + (pc.pi % 12) * 20 + pc.k * dur}ms` }} />;
      })}
      </g>
      {nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r={n.r} style={{ transitionDelay: `${Math.min(350 + i * 6, 800)}ms` }} />
      ))}
      <g style={dark ? undefined : { filter: `url(#wc-${seed})` }}>
      {leaves.map((l, i) => (
        <use key={'l' + i} className="leaf" href={`#lf-${seed}`}
          style={{ fill: `url(#lg${l.tone}-${seed})`, '--t': `translate(${l.x.toFixed(1)}px, ${l.y.toFixed(1)}px) rotate(${((l.rot + Math.PI / 2) * 180 / Math.PI).toFixed(0)}deg)`, '--s': l.s.toFixed(2), '--o': l.o.toFixed(2), transitionDelay: `${800 + l.depth * 200 + (i % 10) * 12}ms` }} />
      ))}
      </g>
    </svg>
  );
};

/* The dark band keeps its ink-line hyphae; the light grounds are painted in watercolour. */
const Mycelium = (props) => <LIVines {...props} night={!!props.dark} />;

/* ─── Chrome ─────────────────────────────────────────────────────────── */
const LINav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener('scroll', on);
    return () => window.removeEventListener('scroll', on);
  }, []);
  return (
    <nav className={`nav cph-nav${scrolled ? ' scrolled' : ''}`}>
      <button className="nav-brand li-brand" type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}>
        <LIMark size={34} />
        <span className="nav-brand-text">Living Intelligence</span>
      </button>
      <div className="nav-links">
        <button className="nav-cta" type="button" onClick={() => window.open(LI_JOIN_URL, '_blank')}>{LI_CTA}</button>
      </div>
    </nav>
  );
};

const LIFooter = ({ onJump }) => (
  <footer className="footer">
    <div className="footer-inner">
      <div className="footer-brand">
        <span className="li-mark-foot"><LIMark size={38} /></span>
        <div className="footer-brand-text">Living Intelligence</div>
        <div className="footer-tagline">Coevolution for a Regenerative Future</div>
        <a href={LI_JOIN_URL} target="_blank" rel="noreferrer" className="footer-join-btn">{LI_CTA}</a>
      </div>
      <div className="footer-col">
        <h6>On this page</h6>
        {LI_SECTIONS.map(s => (
          <a key={s.id} href={`#${s.id}`} onClick={(e) => { e.preventDefault(); onJump(s.id); }}>{s.label}</a>
        ))}
      </div>
      <div className="footer-col">
        <h6>Where this comes from</h6>
        <a href="https://audax.earth/#camp" target="_blank" rel="noreferrer">Camp Audax</a>
      </div>
    </div>
    <div className="footer-bottom">
      <span>© 2026 · A narrative grown from Camp Audax, open to any organization building toward it.</span>
      <span>For the biosphere, for people and for the machines we are learning to live with.</span>
    </div>
  </footer>
);

/* Nodes and ink instead of a photograph. Same orchestration as the Camp hero
   (headline types in, the clause writes itself, the meta line types), on top of
   the living canvas. */
const LIHero = ({ children }) => {
  const ref = React.useRef(null);
  const washRef = React.useRef(null);
  const netRef = React.useRef(null);
  const copyRef = React.useRef(null);
  const liveRef = React.useRef(true);
  useLivingCanvas(ref, washRef, netRef);

  React.useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) return undefined;
    const io = new IntersectionObserver(([e]) => { liveRef.current = e.isIntersecting; }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  React.useEffect(() => {
    const root = copyRef.current;
    const hero = ref.current;
    if (!root) return undefined;
    const q = (s) => root.querySelector(s);

    if (cphReduced()) {
      if (hero) hero.classList.add('cph-lit');
      root.querySelectorAll('.cph-c, .cph-rise').forEach(e => e.classList.add('cph-in'));
      cphRotate(q('.cph-rot'), LI_ROTATION);
      return undefined;
    }

    const h1 = q('h1');
    cphSplit(h1);
    [q('.eyebrow'), q('.lede'), q('.hero-ctas')].forEach(cphArm);
    const meta1 = q('.cph-hero-meta');
    const meta2 = q('.cph-hero-meta-2');
    const restore = [meta1, meta2].filter(Boolean).map(el => [el, el.innerHTML]);
    void root.offsetHeight;

    if (hero) hero.classList.add('cph-lit');
    cphRise(q('.eyebrow'), 260);
    const after = cphStaggerChars(h1, 420, 17);
    h1.classList.add('cph-in');
    cphRise(q('.lede'), after + 80);
    cphType(meta1, after + 320, 900, () => cphType(meta2, 140, 900));
    cphRise(q('.hero-ctas'), after + 1500);
    const stopRot = cphRotate(q('.cph-rot'), LI_ROTATION, after + 300, () => liveRef.current);

    const bail = setTimeout(() => {
      if (hero) hero.classList.add('cph-lit');
      root.querySelectorAll('.cph-c, .cph-rise').forEach(e => e.classList.add('cph-in'));
      restore.forEach(([el, html]) => {
        if (el._cphFinish) el._cphFinish();
        else if (!el.textContent.trim()) el.innerHTML = html;
        el.classList.remove('cph-typing');
      });
    }, 12000);
    return () => {
      clearTimeout(bail);
      if (stopRot) stopRot();
      restore.forEach(([el]) => { clearTimeout(el._cphStart); clearInterval(el._cphTimer); });
    };
  }, []);

  return (
    <section className="cph-hero li-hero" ref={ref}>
      <div className="cph-stage li-stage">
        <canvas className="lh-wash" ref={washRef}></canvas>
        <canvas className="lh-net" ref={netRef}></canvas>
      </div>
      <div className="cph-veil li-veil"></div>
      <CampGrain />
      <CampTear image={ART.drift} edge="bottom" deep />
      <div className="container cph-hero-copy" ref={copyRef}>{children}</div>
    </section>
  );
};

const LILogoBar = () => (
  <div className="cph-logobar">
    <div className="container">
      <p className="cph-logobar-label">Co-created by</p>
      <div className="cph-logobar-row">
        <a className="cph-logobar-item" href="https://coherence.tv/" target="_blank" rel="noreferrer">
          <img className="cph-logobar-full" src="assets/co-creators/coherence-company.png" alt="The Coherence Company" />
        </a>
        <a className="cph-logobar-item" href="https://geoship.is/" target="_blank" rel="noreferrer">
          <img className="cph-logobar-mark" src="assets/co-creators/geoship-mark.svg" alt="" />
          <img className="cph-logobar-word" src="assets/co-creators/geoship-wordmark.svg" alt="Geoship" />
        </a>
        <a className="cph-logobar-item cph-logobar-item-tight" href="https://www.modernancients.com/" target="_blank" rel="noreferrer">
          <img className="cph-logobar-mark-ma" src="assets/co-creators/modern-ancients-mark.png" alt="" />
          <img className="cph-logobar-word-ma" src="assets/co-creators/modern-ancients-wordmark.png" alt="Modern Ancients" />
        </a>
      </div>
      <div className="cph-logobar-row li-logobar-row2">
        <a className="cph-logobar-item li-logobar-alinea" href="https://alinea.institute" target="_blank" rel="noreferrer" aria-label="Alinea Institute">
          <img className="li-alinea-mark" src="assets/co-creators/alinea-mark.png" alt="" />
          <img className="li-alinea-word" src="assets/co-creators/alinea-word.png" alt="Alinea" />
        </a>
        <a className="cph-logobar-item" href="https://themetalayer.org" target="_blank" rel="noreferrer">
          <img className="cph-logobar-mark-mli" src="assets/co-creators/metalayer-mark.png" alt="" />
          <img className="cph-logobar-word-mli" src="assets/co-creators/metalayer-wordmark.png" alt="Meta-Layer Initiative" />
        </a>
      </div>
    </div>
  </div>
);

/* ─── The page ─────────────────────────────────────────────────────────── */
const PageLiving = () => {
  const [active, setActive] = React.useState(LI_SECTIONS[0].id);

  React.useEffect(() => {
    const els = LI_SECTIONS.map(s => document.getElementById(s.id)).filter(Boolean);
    if (!els.length) return undefined;
    const on = () => {
      const line = 140;
      let cur = els[0].id;
      els.forEach(el => { if (el.getBoundingClientRect().top <= line) cur = el.id; });
      setActive(cur);
    };
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });

  const jump = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (window.history && window.history.replaceState) window.history.replaceState(null, '', `#living-intelligence/${id}`);
  };
  const anchor = { scrollMarginTop: 78 };

  return (
    <div className="li-page">
    <LINav />
    <LICampSignposts active={active} onJump={jump} />

    <LIHero>
      <div className="hero-inner" style={{ maxWidth: 880 }}>
        <h1 className="display lg">
          <span className="li-lead">People, the Biosphere and AI,</span>
          <span className="cph-rot cph-nosplit" aria-hidden="true"></span>
          <span className="cph-sr cph-nosplit">{LI_ROTATION[0]}</span>
        </h1>
        <p className="lede" style={{ maxWidth: 640 }}>
          A shared north star for the relationship between the living world, human beings and artificial/augmented intelligence, offered by people passionate about this work - designing &amp; testing in the open.
        </p>
        <p className="cph-hero-meta">
          A consortium narrative&nbsp; ·&nbsp; <span className="cph-date">Coevolution for a Regenerative Future</span>
        </p>
        <p className="cph-hero-meta cph-hero-meta-2">
          Emerging from <a href={LI_JOIN_URL} target="_blank" rel="noreferrer">Camp Audax</a> · open to all organizations building this vision
        </p>
        <div className="hero-ctas" style={{ marginTop: 36 }}>
          <Button size="lg" variant="join" icon="arrow-down" onClick={() => jump('relationship')}>Read the north star</Button>
        </div>
      </div>
    </LIHero>

    <LILogoBar />

    <LICampWhyCome items={LI_WHY_COME} />

    <Mycelium seed={11} height={190} />

    {/* ─── 01 · THE RELATIONSHIP ────────────────────────────────────────── */}
    <section className="section" id="relationship" style={{ ...anchor, paddingBottom: 0 }}>
      <div className="container">
        <LICampInk className="q-h1">
          <span className="num">01 · The relationship</span>
          How the biosphere, people and AI relate <em>is a design choice.</em>
        </LICampInk>
        <CampAside shot="owl" alt="An owl perched on a tree in a forest" ratio="4 / 5" style={{ marginTop: 12 }}>
          <div className="q-body">
            <p>Alliances and movements around the world are shaping the future of AI: human-centered AI coalitions, safety researchers, regenerative and impact networks, labor and faith communities, open-source builders. They share an instinct that people, communities and living systems deserve a real say over the technologies that affect them. Concern about concentrated power, surveillance, lost livelihoods and strain on the biosphere motivates much of this work and each concern deserves a serious answer.</p>
            <p>This page adds one question that sits beside all these efforts: what vision of interrelationship between the Biosphere, Humanity and AI do we want to grow into? As more sophisticated technical systems evolve, wise stewardship of these systems is key to a positively evolving culture. This culture can hold what systems owe the living world, what groups of people and individuals owe each other, and what healthy coevolution looks like overall as the capability of each grows.</p>
            <p>A durable, mutually flourishing relationship among all three components generates a positive field to build within, on any timeline. Supporting the need for these clear visions is a question about us: how can humans grow as a collectively intelligent species, evolving our own natural intelligence and working hybridly with AI to enhance what&rsquo;s possible?</p>
          </div>
        </CampAside>

        <CampKicker top={56} bottom={8}>Three ways to name the field</CampKicker>
        <div className="q-body" style={{ maxWidth: 760, marginBottom: 24 }}>
          <p>Each framing brings a different sense of the field into focus: the people AI serves, the potential synergies between humans and AI, and the Biosphere that sustains them both. Read in order, each frame takes in more of the field than the one before.</p>
        </div>
        <table className="mini-matrix">
          <thead><tr><th>The framing</th><th>What it brings into view</th></tr></thead>
          <tbody>
            {LI_HYPHEN.map(([f, v]) => (<tr key={f}><th>{f}</th><td>{v}</td></tr>))}
          </tbody>
        </table>
        <CampQuote>Our relationship with the biosphere is decided in the design. <em>The time to decide it is early.</em></CampQuote>
      </div>
    </section>

    {/* ─── 02 · WHY ─────────────────────────────────────────────────────── */}
    <section className="section" id="why" style={{ ...anchor, paddingBottom: 0 }}>
      <div className="container">
        <LICampInk className="q-h1">
          <span className="num">02 · Why</span>
          The tools we build become the society we <span className="cph-keep">live in.</span> <em>So does the way we tend the living world.</em>
        </LICampInk>
        <div className="q-body" style={{ maxWidth: 760 }}>
          <p>The early web was built by people who wanted openness and connection and it delivered both. It also delivered concentrated platforms, opaque recommendation systems and incentives that emerged by accident. Each choice looked reasonable at the time and together they accumulated until they became the water we swim in. One of the internet&rsquo;s own founders has said as much: the people building it had no idea what would follow.</p>
          <p>AI is arriving the same way, only faster and at greater scale. The defaults being set now, what these systems optimize for, whom they answer to, what they count as value and what they are allowed to leave out, will be very hard to change once they ship. The living world is usually the first thing left out.</p>
        </div>

        <CampQuote>Whatever we leave out of the design, <em>we leave out of the future.</em></CampQuote>

        <CampKicker top={56} bottom={8}>What we are asking instead</CampKicker>
        <CampAside
          shot="indoor-plate" alt="Two people in conversation in a forest clearing" ratio="4 / 3"
          caption="Slow questions, asked early."
          style={{ marginTop: 12 }}
        >
          <div className="q-body">
            <p>Before the architecture hardens, we would like to ask what should be true of the whole ecosystem that emerges as products, models and policies come together.</p>
            <p>So we start with the destination. We describe the properties we would consciously choose, in language specific enough to build toward and invite builders, stewards, funders and policy makers to test their work against the same shared reference.</p>
            <p>We call these the Desirable Properties. Together they form a north star, offered lightly and open to challenge.</p>
          </div>
        </CampAside>
      </div>
    </section>

    {/* ─── 03 · THE TRIAD, DRAWN ────────────────────────────────────────── */}
    <section className="section li-dark li-triad-sec" id="triad" style={{ ...anchor, paddingTop: 118 }}>
      <CampTear image={ART.spray} edge="top" ground="var(--surface-parchment)" flip />
      <div className="container li-triad-head">
        <LICampInk className="q-h1">
          <span className="num">03 · The triad</span>
          Where the three meet, <em>a regenerative future grows.</em>
        </LICampInk>
        <p className="li-tri-q">What should be true of the relationship between the biosphere, human beings and AI?</p>
        <p className="li-tri-read">How to read it: five qualities orient each circle, each overlap names what two intelligences share and the center holds the aim they serve together.</p>
      </div>
      <div className="container li-triad-stage">
        <TriadDiagram />
      </div>
      <CampTear image={ART.crest} edge="bottom" ground="var(--surface-parchment)" />
    </section>

    {/* ─── 04 · THREE INTELLIGENCES ─────────────────────────────────────── */}
    <section className="section" id="intelligences" style={{ ...anchor, paddingBottom: 0, paddingTop: 84 }}>
      <div className="container">
        <LICampInk className="q-h1">
          <span className="num">04 · Three intelligences</span>
          Each holds something <em>the others need.</em>
        </LICampInk>
        <div className="q-body" style={{ maxWidth: 760, marginBottom: 40 }}>
          <p>Each of these three shapes the other two and each is right about something the others miss. The list of properties comes from all three at once. Written by any one of them alone, it becomes a wish.</p>
        </div>
        <LICampPersonaSlider profiles={LI_TRIAD} />
        <CampQuote>Each is right about many things. <em>Holding the whole takes all three.</em></CampQuote>
      </div>
    </section>

    <LICampBand shot="canopy" kicker="Starting points" label="Open threads we are exploring"
      tearTop={ART.spray} tearGroundTop="var(--surface-parchment)"
      tear={ART.crest} tearGround="var(--li-dark-ground)" rate={0.18} />

    {/* ─── 05 · THE QUESTIONS WE HOLD (dark ground) ─────────────────────── */}
    <section className="section li-dark li-precedent" id="questions" style={{ ...anchor }}>
      <div className="container">
        <LICampInk className="q-h1">
          <span className="num">05 · The questions we hold</span>
          Where our inquiry <em>begins.</em>
        </LICampInk>
        <div className="q-body" style={{ maxWidth: 760, marginBottom: 40 }}>
          <p>These are some initial questions shaping our field of inquiry. Each grows richer with more voices &amp; perspective around it. We want to understand how to move more deeply into this questioning.</p>
        </div>

        <LICampDiptych items={LI_QUESTION_ITEMS} label="Question" compact />
      </div>
      <Mycelium seed={23} height={190} dark />
      <CampTear image={ART.crest} edge="bottom" ground="var(--surface-parchment)" deep />
    </section>

    {/* ─── Then and now: the quote pair, between the questions and the stool ───────── */}
    <section className="section-tight li-quote-sec" style={{ ...anchor, paddingTop: 128, paddingBottom: 32 }}>
      <div className="container">
        <CampKicker bottom={40}>Now and then</CampKicker>
        <LIQuotePair />
      </div>
    </section>

    {/* ─── 06 · BEYOND THE TOOLS ────────────────────────────────────────── */}
    <section className="section" id="stool" style={{ ...anchor, paddingBottom: 0, paddingTop: 84 }}>
      <div className="container">
        <LICampInk className="q-h1">
          <span className="num">06 · Beyond the tools</span>
          Three things carry the transition: <em>tools, mindsets and equity.</em>
        </LICampInk>
        <div className="q-body" style={{ maxWidth: 760 }}>
          <p>Technology and architecture are the first. Architectural solutions answer architectural problems, so this reaches past tools to the structure of the whole system. The second is the maturity to use it well and the third is a future that is fair, free and flourishing for everyone. Each supports the other two, so the properties in this list reach into all three.</p>
          <LIMore><p>Maturity in this sense belongs to groups more than to individuals. It is the shared understanding and collective wisdom that let a community meet fast-growing capability well: how we decide together, learn together and notice what no single person can see. Collaborative intelligence and the tools that support it are how we build it.</p></LIMore>
        </div>
        <CampCascade className="insight-grid" style={{ marginTop: 36 }}>
          {LI_STOOL.map(([h, p, label]) => (
            <article key={h} className="insight-card">
              <h4>{h}. {p}</h4>
              <p style={{ marginTop: 10, fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--forest-700)' }}>{label}</p>
            </article>
          ))}
        </CampCascade>
        <CampAside flip shot="delta" alt="Aerial view of a river delta, its channels fanning out in bands of color" ratio="1 / 1" style={{ marginTop: 96 }}>
          <div className="q-body">
            <p>People in this network work where tools, mindsets and equity meet. Ecological engineers feed the biosphere&rsquo;s own data into AI systems. Storytellers help regenerative and impact movements see AI as a powerful ally. Builders keep the tools open enough that a founder in Palo Alto and a student anywhere in the world can pick them up and do something wild with them. Cultural maturity, in the sense of <a href="https://docs.google.com/document/d/150BbAGwigiNVx3-dYSZRuQ81tc2n5fQhZ9xWobTraa4/edit?usp=sharing" target="_blank" rel="noreferrer" style={{ color: 'var(--forest-700)' }}>Pavel Luksha&rsquo;s work on planetary adulthood</a>, ties these threads together.</p>
            <p>One idea from the wider conversation, sometimes called ecosystemic singularity, imagines the point where the whole living system, people, machines and biosphere included, begins to think together. Coevolution describes the road toward it.</p>
          </div>
        </CampAside>
      </div>
    </section>

    {/* ─── 07 · DESIRABLE PROPERTIES ────────────────────────────────────── */}
    <section className="section" id="properties" style={{ ...anchor, paddingBottom: 0 }}>
      <div className="container">
        <LICampInk className="q-h1">
          <span className="num">07 · Desirable Properties</span>
          What would have to be true <em>for this to be desirable?</em>
        </LICampInk>
        <div className="q-body" style={{ maxWidth: 760, marginBottom: 32 }}>
          <p>A Desirable Property is a condition, specific enough to build toward and specific enough to disagree about. It sits between a value, such as regeneration and a requirement, such as &ldquo;the system must&hellip;&rdquo; and it is the step most projects skip on the way from one to the other.</p>
        </div>

        <CampKicker>A value says. A property asks.</CampKicker>
        <table className="mini-matrix">
          <thead><tr><th>The value</th><th>The property</th></tr></thead>
          <tbody>
            {LI_VALUE_PROPERTY.map(([v, p]) => (<tr key={v}><th>{v}</th><td>{p}</td></tr>))}
          </tbody>
        </table>
        <p style={{ fontSize: 14, fontWeight: 300, color: 'var(--ink-500)', margin: '20px 0 0', maxWidth: 760 }}>
          These are candidates for discussion. Each needs an explanation, a practical example and an honest account of the tensions it creates.
        </p>

        <CampAside shot="roots-tall" alt="Moss-covered tree roots and ferns on the forest floor" ratio="4 / 5" style={{ marginTop: 64 }}>
          <div>
            <CampKicker top={0} bottom={8}>How each property gets written</CampKicker>
            <div className="q-body">
              <p>Each property works like a small lab. Three to five subject-matter experts anchor it, joined by practitioners and community voices who bring lived evidence. A lab produces an explanation, a practical example, an honest account of the tensions and a list of the projects already advancing the property.</p>
              <p>Every property has its own collaboration page where anyone can propose a revision and the group adjudicates what enters the next version. Revisions arrive as patches, each traceable to the person or the conversation it came from.</p>
            </div>

            <CampKicker top={44} bottom={8}>Two layers, side by side</CampKicker>
            <div className="q-body">
              <p>The <a href="https://themetalayer.org" target="_blank" rel="noreferrer" style={{ color: 'var(--forest-700)' }}>Meta-Layer Initiative</a> maintains a canonical set of twenty-three properties for digital and social coordination systems, among them agency, privacy, trust and interoperability. The Biosphere–Human–AI process forms a second layer beside it, a parallel exercise with the same method and the biosphere at its center of gravity. A third set covering federation and governance may follow. Expect roughly five to fifteen properties in each new set.</p>
            </div>
          </div>
        </CampAside>

        <div style={{ ...campNote, marginTop: 44 }}>
          <h6 style={campNoteH6}>Read the method in full</h6>
          <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.6, color: 'var(--forest-900)', margin: '0 0 14px' }}>
            The Desirable Properties approach comes from Daveed Benjamin&rsquo;s work through a Meta-Layer lens. His two recommendations set out the method we are extending: a North Star Analysis over four to six weeks and an exploration of the words we start from.
          </p>
          <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.6, color: 'var(--forest-900)', margin: 0 }}>
            <a href="https://prohumannatureai.com/r/north-star" target="_blank" rel="noreferrer" style={{ color: 'var(--forest-700)' }}>The North Star Analysis</a>
            {' · '}
            <a href="https://prohumannatureai.com/r/semantic" target="_blank" rel="noreferrer" style={{ color: 'var(--forest-700)' }}>Exploring the words</a>
            {' · '}
            <a href="https://prohumannatureai.com/deepi" target="_blank" rel="noreferrer" style={{ color: 'var(--forest-700)' }}>Talk with Deepi, the North Star guide</a>
          </p>
        </div>

        <CampQuote>A shared vision becomes a north star <em>when people steer by it.</em></CampQuote>
      </div>
    </section>

    <LICampJoinBand shot="carpet" pos="center 28%"
      tearTop={ART.wave} tearGroundTop="var(--surface-parchment)"
      tear={ART.crest} tearGround="var(--surface-parchment)">
      Every future starts as a conversation. <em>Join ours.</em>
    </LICampJoinBand>

    {/* ─── 08 · FROM PROPERTY TO BUILD ──────────────────────────────────── */}
    <section className="section" id="build" style={{ ...anchor, paddingBottom: 0, paddingTop: 24 }}>
      <div className="container">
        <LICampInk className="q-h1">
          <span className="num">08 · From design to build</span>
          From Desirable Properties <em>to a working system.</em>
        </LICampInk>
        <div className="q-body" style={{ maxWidth: 760, marginBottom: 32 }}>
          <p>A list of properties gains force when builders can use it. The method runs in seven steps and every second step belongs to people. AI drafts at speed and people decide what the drafts are worth.</p>
        </div>
        <LISteps steps={LI_STEPS} />

        <CampQuote>A property earns its place <em>the day someone builds with it.</em></CampQuote>
      </div>
    </section>

    <Mycelium seed={37} height={180} above={44} below={64} />

    {/* ─── 09 · WEAVING THE FIELD ───────────────────────────────────────── */}
    <section className="section" id="field" style={{ ...anchor, paddingBottom: 0, paddingTop: 24 }}>
      <div className="container">
        <LICampInk className="q-h1">
          <span className="num">09 · Weaving the field</span>
          Many tools. <em>One field.</em>
        </LICampInk>
        <CampAside flip shot="forest-gathering" alt="People gathered among trees at a forest camp, some seated on hay bales and others standing in conversation" ratio="1 / 1" style={{ marginTop: 12 }}>
          <div>
            <div className="q-body">
              <p>Teams across this network are building coordination tools, trust signals, matchmaking engines and community platforms. Each speaks to a different audience and the field gains from every one of them. The task is to federate them into an environment where they interoperate as needed, so that any community can work through whichever tools fit it. Together these tools become working infrastructure for collective intelligence: they help communities think, decide and learn together, which prepares all of us to work well with far more capable AI.</p>
            </div>

            <CampKicker top={40} bottom={8}>Emergence guides the work</CampKicker>
            <div className="q-body">
              <p>Our work follows the way living systems organize. Order arises from many small relationships: one team shares what it has learned, another builds on it, and patterns take shape that no one planned in advance. We pay attention to what is already forming and support it, the way a gardener tends what wants to grow.</p>
            </div>

            <CampKicker top={40} bottom={8}>Resonance draws us together</CampKicker>
            <div className="q-body">
              <p>Organizations and individuals whose purposes align recognize one another. Resonance brings them together, and collaborations form around shared questions and complementary gifts. A living map of the field helps these connections find each other sooner, and each one strengthens the whole.</p>
            </div>
          </div>
        </CampAside>
        <CampKicker top={56} bottom={8}>How a forest shares</CampKicker>
        <div className="q-body" style={{ maxWidth: 760 }}>
          <p>A forest moves water, sugar and signals through a web of roots and fungi, and every species contributes what it does best. Three layers give the field the same shape.</p>
        </div>
        <CampCascade className="insight-grid" style={{ marginTop: 24 }}>
              {LI_FOREST_LAYERS.map(([h, p, label]) => (
                <article key={h} className="insight-card">
                  <h4>{h}. {p}</h4>
                  <p style={{ marginTop: 10, fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--forest-700)' }}>{label}</p>
                </article>
              ))}
            </CampCascade>

        <CampAside shot="wing" alt="A butterfly wing up close, teal scales with orange and cream markings" ratio="3 / 4" style={{ marginTop: 32 }}>
          <div>

            <CampKicker top={0} bottom={8}>Agreements that keep it fair</CampKicker>
            <div className="q-body">
              <p>Reciprocity needs terms: how contributions are credited, how intellectual property and data rights are shared and what happens when one team expands a product while another steps back from a layer a partner covers better. Trade-offs of that kind, investing here and divesting there, are the working substance of a co-development agreement.</p>
            </div>

            <CampKicker top={44} bottom={8}>A map that keeps itself current</CampKicker>
            <div className="q-body">
              <p>Each organization shares what it can publicly: papers, websites, programs. A community AI reads it all into a graph database and answers questions such as which collaborations would serve the most properties and remain untried. A link is enough to add a new program and a notification follows when a member&rsquo;s site changes. An ecosystem-weaving agent grows out of this map.</p>
              <p>Agents take a seat at this table too. Each person may bring their own agent and the field needs norms for how agents relate to their people, to one another and to the living world.</p>
            </div>
          </div>
        </CampAside>

        <CampQuote>The North Star names the destination. <em>The map reveals the travelers.</em></CampQuote>
      </div>
    </section>

    <LICampBand shot="tents" kicker="Camp Navarro · 15–18 October 2026" label="Where the work begins" featured
      cta={{ label: 'Visit the Camp Audax page', href: LI_JOIN_URL }}
      tearTop={ART.crest} tearGroundTop="var(--surface-parchment)"
      tear={ART.spray} tearGround="var(--surface-parchment)" rate={0.16} />

    {/* ─── SMALL LOOPS FIRST ────────────────────────────────────────────── */}
    <section className="section-tight" id="loops" style={{ ...anchor, paddingTop: 72, paddingBottom: 0 }}>
      <div className="container">
        <CampKicker top={0} bottom={8}>Small loops first</CampKicker>
        <div className="q-body" style={{ maxWidth: 760 }}>
          <p>At the Gathering this October at Camp Navarro, CA, the aim is to execute three or four small OODA loops (observe, orient, decide, act) that carry select properties from idea to working prototype in days. The tooling makes that speed possible and small experiments give partners and grant makers something real to test.</p>
          <p>The reference itself works like a living book. A community AI turns an idea, a link or an uploaded document into a drafted submission and suggests where in the existing text it belongs. Submissions post as drafts and reach the book through the group&rsquo;s review.</p>
        </div>
      </div>
    </section>

    {/* ─── MEET US ON A CALL ────────────────────────────────────────────── */}
    <section className="section-tight" id="calls" style={{ ...anchor, paddingTop: 56, paddingBottom: 110 }}>
      <div className="container">
        <div className="li-call">
          <div className="li-call-text">
            <CampKicker bottom={8}>Meet us on a call</CampKicker>
            <div className="q-body">
              <p>Join the next Camp Audax call to meet the people involved and bring your questions.</p>
            </div>
          </div>
          <LILumaCarousel ids={LI_LUMA_EVENTS} />
        </div>
      </div>
    </section>

    {/* ─── JOIN ─────────────────────────────────────────────────────────── */}
    <CampJoinBand shot="trail" pos="center 50%"
      tearTop={ART.wave} tearGroundTop="var(--surface-parchment)"
      tear={ART.crest} tearGround="var(--surface-parchment)">
      Coevolve <em>with us.</em>
    </CampJoinBand>

    <section className="section-tight" id="join" style={{ ...anchor }}>
      <div className="container">
        <CampKicker bottom={8}>Try it with your own AI</CampKicker>
        <div className="q-body" style={{ maxWidth: 760, marginBottom: 24 }}>
          <p>The quickest way in is through questions. Copy the prompt, paste it into any assistant, add a few sentences about your work and see which questions come to the surface. Keep the ones that ring true for you and bring them to us. Living Intelligence begins with them.</p>
        </div>
        <LIPrompt />

        <div className="cph-apply" style={{ marginTop: 56 }}>
          <h3>An invitation, with no fixed membership</h3>
          <p>
            This list is incomplete on purpose. If a property is missing, a tension is understated, or a stronger example exists, that correction is exactly what this is for. Any organization already doing this work is part of the conversation, wherever its people are.
          </p>
          <div className="cph-apply-ctas">
            <Button size="lg" variant="join" icon="arrow-right" onClick={() => window.open(LI_JOIN_URL, '_blank')}>{LI_CTA}</Button>
            {LI_TELEGRAM_URL && (
              <a className="btn btn-primary btn-lg" href={LI_TELEGRAM_URL} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                <span>Join the Telegram group</span><i data-lucide="send"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>

    <LIFooter onJump={jump} />
    </div>
  );
};

window.PageLiving = PageLiving;
