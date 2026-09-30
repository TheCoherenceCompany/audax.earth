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
  { id: 'precedent',    label: 'Living examples',    mile: 'MI 3', icon: '▲' },
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
  ['The biosphere as a participant', 'The living world is one of three intelligences whose relationship we are designing, and its stewards belong at the table.'],
  ['A north star before the architecture hardens', 'The defaults set this year will be very hard to unpick later. Better to ask now what the whole system should be true of.'],
  ['Properties that can be tested', 'Values such as dignity and regeneration point a direction. Desirable Properties turn them into conditions specific enough to build toward, and to disagree about.'],
  ['Written with people who steward real places', 'Seed banks, watersheds, sacred sites, biodiversity networks. The Biosphere properties start from practice that already exists.'],
  ['Open to any organization, wherever its people are', 'Grown from Camp Audax and built to widen. Anyone can take part from wherever they work.'],
  ['Coevolution as the frame', 'Coevolution asks what it takes for three very different intelligences to shape each other well, for a very long time.']
];

const LI_TRIAD = [
  {
    n: '1', name: 'Biosphere',
    short: 'Four billion years of research and development, still running.',
    benefit: 'Four billion years of research and development, still running.',
    working: 'Regeneration, resilience and interdependence at every scale: soil, watersheds, seed banks, forests, and the practices of the people who tend them.',
    brings: ['Regenerative timescales', 'Standing for other species', 'Polycentric stewardship', 'Visible cost to the biosphere'],
    blind: 'Its own exposure to decisions made in a language it cannot contest: contracts, models and quarterly plans.'
  },
  {
    n: '2', name: 'Human',
    short: 'The ability to ask what a thing is for.',
    benefit: 'The ability to ask what a thing is for.',
    working: 'Meaning, care and judgment, and the shared spaces where people deliberate, disagree and decide together.',
    brings: ['Portability that survives a change of provider', 'Agents that stay answerable', 'Shared spaces communities can govern', 'Individual and collective agency'],
    blind: 'The long timescales and quiet costs that never reach a dashboard, and what a default chosen in a sprint does ten years on.'
  },
  {
    n: '3', name: 'AI',
    short: 'Pattern, speed and synthesis at a scale beyond any single team.',
    benefit: 'Pattern, speed and synthesis at a scale beyond any single team.',
    working: 'The capacity to sense, model and coordinate across more information than any person or institution can track alone.',
    brings: ['Bounded authority', 'Revocable delegation', 'Compartmentalization', 'Independent monitoring', 'Reliable provenance', 'Multiple centers of control'],
    blind: 'What the data leaves out: whatever was never measured, and whoever was never asked.'
  }
];

const LI_PRECEDENT = [
  { n: 'I', shot: 'path', title: 'Regenerative timescales',
    body: 'A global seed bank in Baja Sur, Mexico, has grown from desert into a garden of more than 3,000 species over twenty-five years. It grows on the scale of decades. Resilience earns its meaning when it is tested against timescales like this one.' },
  { n: 'II', shot: 'canopy', title: 'Standing for other species',
    body: 'Nature Tech Collective brings together more than ninety organizations that track ecosystems and biodiversity with technology, and points toward an internet with other species in it. Taken seriously, that asks who controls a river’s sensor network, whether a community can leave a monitoring platform without losing its own history, and whether a biodiversity claim can be traced to its source.' },
  { n: 'III', shot: 'forest-circle', title: 'Polycentric stewardship',
    body: 'Networks like Fifth Fire, which works with sacred sites around the world, have long practice in spreading authority so that no single failure, or single funder’s withdrawal, brings the whole system down. The AI world calls this bounded authority and multiple centers of control. Stewardship traditions arrived there independently, and much earlier.' },
  { n: 'IV', shot: 'shadow', title: 'Visible cost to the biosphere',
    body: 'Ecological engineers already feed real data, from soil health to water tables to species counts, straight into technical systems. Doing it well raises the questions any information environment raises: whose data, collected under what consent, made visible to whom, and at what cost to the place it came from.' },
  { n: 'V', shot: 'mandala', title: 'A bridge already in the room',
    body: 'Mindaroo Foundation sits on the member list of the Pro-Human AI Coalition and describes its vision as a society that values all people and natural ecosystems. A bridge between the AI conversation and the living world already stands inside the room where AI’s future is being argued, ready to be crossed.' }
];

const LI_VALUE_PROPERTY = [
  ['Agency', 'Can a person change AI provider without losing years of memory, relationships and context?'],
  ['Accountability', 'Can anyone see who an agent represents, what authority it holds, and how to challenge what it does?'],
  ['Biosphere flourishing', 'Are the energy, water, materials and land a system uses visible, or invisible because the interaction happens on a screen?'],
  ['Resilience', 'When one part fails, does the failure stay there, or can one compromised agent reach a whole environment?']
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
  { title: 'Overlay and evolve', who: 'People', body: 'Communities and applications grow on the shared substrate. Each grants the same basic rights to everyone, enforced by code where possible, and patches keep the list alive.' }
];

const LI_STOOL = [
  ['Tools that work', 'Agents, protocols and infrastructure that people can inspect, leave and govern. The properties in this list turn into requirements here.', 'Technology'],
  ['Mindsets that mature', 'Cultural maturity, sometimes called planetary adulthood: the capacity to hold long timescales, other species and other people’s needs in one decision. Learning systems built for free thinking carry this work.', 'Culture and learning'],
  ['Equity that reaches everyone', 'A future that is fair, free and flourishing for all, with shelter, food and energy within reach of every household and agency in the hands of the many.', 'Economy and justice']
];

const LI_TETRIS = [
  ['Everyone does', 'The shared basics: identity, consent, provenance, memory. Agree them once and reuse them everywhere.', 'Common ground'],
  ['One team holds', 'Capabilities that gain from concentrated focus. Each is held by whoever does it best and offered to the rest.', 'Shared load'],
  ['Each brings something new', 'The novel work each team pursues alone, kept distinct so the network keeps its variety.', 'Distinct gifts']
];

const LI_QUESTIONS = [
  'How can AI bring the living world into planning, governance and everyday decisions?',
  'What would it take for a river’s sensor network to belong to the community that lives along it?',
  'Which properties stay valuable if AI capability grows faster than our institutions?',
  'Where do individual agency, collective agency and the flourishing of the biosphere reinforce one another?',
  'As AI grows more capable, what kind of partnership keeps the biosphere, people and AI all flourishing together?',
  'How do our own agents relate to us, to one another and to the living world?',
  'Who speaks for the places, species and future generations that cannot attend?',
  'What does an inspiring story about all three sound like, and who tells it?'
];

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

const Mycelium = ({ seed = 7, height = 150, dark = false }) => {
  const ref = useCampReveal();
  const { paths, nodes } = React.useMemo(() => {
    const r = liRng(seed);
    const W = 1200, H = height;
    const paths = [], nodes = [];
    const grow = (x, y, ang, len, depth) => {
      if (depth > 4 || len < 16) return;
      const entry = { d: '', depth };
      paths.push(entry);
      const steps = 3 + Math.floor(r() * 3);
      let d = `M${x.toFixed(1)} ${y.toFixed(1)}`;
      let cx = x, cy = y, a = ang;
      for (let i = 0; i < steps; i++) {
        a += (r() - 0.5) * 0.9;
        const nx = cx + Math.cos(a) * len / steps, ny = cy + Math.sin(a) * len / steps;
        const mx = (cx + nx) / 2 + (r() - 0.5) * 8, my = (cy + ny) / 2 + (r() - 0.5) * 8;
        d += ` Q${mx.toFixed(1)} ${my.toFixed(1)} ${nx.toFixed(1)} ${ny.toFixed(1)}`;
        cx = nx; cy = ny;
        if (r() < 0.5) grow(cx, cy, a + (r() < 0.5 ? -1 : 1) * (0.5 + r() * 0.7), len * 0.6, depth + 1);
      }
      entry.d = d;
      if (r() < 0.7) nodes.push({ x: cx, y: cy, r: 1.3 + r() * 2.2, depth });
    };
    const colonies = 6;
    for (let i = 0; i < colonies; i++) {
      const x0 = (W / colonies) * (i + 0.5) + (r() - 0.5) * 90, y0 = H / 2 + (r() - 0.5) * 24;
      grow(x0, y0, r() * Math.PI * 2, 110 + r() * 60, 0);
      grow(x0, y0, r() * Math.PI * 2, 90 + r() * 60, 0);
    }
    return { paths, nodes };
  }, [seed, height]);

  return (
    <svg ref={ref} className={`li-myc${dark ? ' dark' : ''}`} viewBox={`0 0 1200 ${height}`} preserveAspectRatio="xMidYMid slice" aria-hidden="true" style={{ height }}>
      {paths.map((p, i) => (
        <path key={i} d={p.d} pathLength="1" style={{ transitionDelay: `${Math.min(i * 6, 450)}ms`, strokeWidth: Math.max(0.6, 1.5 - p.depth * 0.25) }} />
      ))}
      {nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r={n.r} style={{ transitionDelay: `${Math.min(350 + i * 6, 800)}ms` }} />
      ))}
    </svg>
  );
};

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
      <span>For the biosphere, for people, and for the machines we are learning to live with.</span>
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
            <p>Alliances and movements around the world are shaping the future of AI: human-centered AI coalitions, safety researchers, regenerative and impact networks, labor and faith communities, open-source builders. They share an instinct that people, communities and living systems deserve a real say over the technologies that affect them. Concern about concentrated power, surveillance, lost livelihoods and strain on the biosphere motivates much of this work, and each concern deserves a serious answer.</p>
            <p>This page adds one question that sits beside all of those efforts: what kind of relationship among the biosphere, people and AI do we want to grow into? If far more capable systems arrive, which looks likely, authority over them forms one part of a larger picture. That picture also holds what those systems owe the living world, what people owe each other, and what kind of partnership endures as capability grows. A durable, mutually flourishing relationship among all three gives every alliance something shared to build toward, on any timeline.</p>
          </div>
        </CampAside>

        <CampKicker top={56} bottom={8}>Three ways to name the relationship</CampKicker>
        <div className="q-body" style={{ maxWidth: 760, marginBottom: 24 }}>
          <p>Each framing brings different things into view, and read in order they widen the picture.</p>
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
          <p>The early web was built by people who wanted openness and connection, and it delivered both. It also delivered concentrated platforms, opaque recommendation systems and incentives that emerged by accident. Each choice looked reasonable at the time, and together they accumulated until they became the water we swim in. One of the internet&rsquo;s own founders has said as much: the people building it had no idea what would follow.</p>
          <p>AI is arriving the same way, only faster and at greater scale. The defaults being set now, what these systems optimize for, whom they answer to, what they count as value and what they are allowed to leave out, will be very hard to change once they ship. The living world is usually the first thing left out.</p>
        </div>

        <CampQuote>Whatever we leave out of the design, <em>we leave out of the future.</em></CampQuote>

        <CampKicker top={56} bottom={8}>What we are asking instead</CampKicker>
        <CampAside
          shot="reading" alt="Someone reading beside the water" index="Plate I"
          caption="Slow questions, asked early."
          style={{ marginTop: 12 }}
        >
          <div className="q-body">
            <p>Before the architecture hardens, we would like to ask what should be true of the whole ecosystem that emerges as products, models and policies come together.</p>
            <p>So we start with the destination. We describe the properties we would consciously choose, in language specific enough to build toward, and invite builders, stewards, funders and policy makers to test their work against the same shared reference.</p>
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
        <p className="li-tri-read">How to read it: five qualities orient each circle, each overlap names what two intelligences share, and the centre holds the aim they serve together.</p>
      </div>
      <div className="container li-triad-stage">
        <TriadDiagram />
      </div>
      <p className="li-tri-note">A second Desirable Properties process, modeled on the Meta-Layer approach, defines what is desirable where living systems, people and AI intersect.</p>
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
          <p>Each of these three shapes the other two, and each is right about something the others miss. The list of properties comes from all three at once. Written by any one of them alone, it becomes a wish.</p>
        </div>
        <LICampPersonaSlider profiles={LI_TRIAD} />
        <CampQuote>Each is right about something. <em>Holding the whole takes all three.</em></CampQuote>
      </div>
    </section>

    <LICampBand shot="canopy" kicker="Living examples" label="The biosphere has been practicing these properties for a very long time"
      tearTop={ART.spray} tearGroundTop="var(--surface-parchment)"
      tear={ART.crest} tearGround="var(--li-dark-ground)" rate={0.18} />

    {/* ─── 05 · LIVING PRECEDENT (dark ground) ──────────────────────────── */}
    <section className="section li-dark li-precedent" id="precedent" style={{ ...anchor }}>
      <div className="container">
        <LICampInk className="q-h1">
          <span className="num">05 · Living examples</span>
          The Biosphere&rsquo;s properties <em>start from practice.</em>
        </LICampInk>
        <div className="q-body" style={{ maxWidth: 760, marginBottom: 40 }}>
          <p>The flourishing of the biosphere is easy to write into a list and hard to make specific. The risk lies in a line item taking the place of a relationship with people who already look after real places and species, and who would notice at once if a property were shallow. Five places to begin sit already inside this network&rsquo;s reach.</p>
        </div>

        <LICampDiptych items={LI_PRECEDENT} />

        <div className="q-body" style={{ maxWidth: 760, marginTop: 44 }}>
          <p>We would like them, and others like them, as co-authors of the Biosphere properties in the Desirable Properties.</p>
        </div>
        <CampQuote>The people already doing this work are <em>the authors we are looking for.</em></CampQuote>
      </div>
      <Mycelium seed={23} height={190} dark />
      <CampTear image={ART.crest} edge="bottom" ground="var(--surface-parchment)" deep />
    </section>

    {/* ─── 06 · BEYOND THE TOOLS ────────────────────────────────────────── */}
    <section className="section" id="stool" style={{ ...anchor, paddingBottom: 0, paddingTop: 84 }}>
      <div className="container">
        <LICampInk className="q-h1">
          <span className="num">06 · Beyond the tools</span>
          Three things carry the transition: <em>tools, mindsets and equity.</em>
        </LICampInk>
        <div className="q-body" style={{ maxWidth: 760 }}>
          <p>Technology is the first. The second is the maturity to use it well, and the third is a future that is fair, free and flourishing for everyone. Each supports the other two, so the properties in this list reach into all three.</p>
        </div>
        <CampCascade className="insight-grid" style={{ marginTop: 36 }}>
          {LI_STOOL.map(([h, p, label]) => (
            <article key={h} className="insight-card">
              <h4>{h}. {p}</h4>
              <p style={{ marginTop: 10, fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--forest-700)' }}>{label}</p>
            </article>
          ))}
        </CampCascade>
        <div className="q-body" style={{ maxWidth: 760, marginTop: 40 }}>
          <p>People in this network work where tools, mindsets and equity meet. Ecological engineers feed the biosphere&rsquo;s own data into AI systems. Storytellers help regenerative and impact movements see AI as a powerful ally. Builders keep the tools open enough that a founder in Palo Alto and a student anywhere in the world can pick them up and do something wild with them. Cultural maturity, in the sense of Pavel Luksha&rsquo;s work on planetary adulthood, ties these threads together.</p>
          <p>One idea from the wider conversation, sometimes called ecosystemic singularity, imagines the point where the whole living system, people, machines and biosphere included, begins to think together. Coevolution describes the road toward it.</p>
        </div>
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
          <p>A Desirable Property is a condition, specific enough to build toward and specific enough to disagree about. It sits between a value, such as regeneration, and a requirement, such as &ldquo;the system must&hellip;&rdquo;, and it is the step most projects skip on the way from one to the other.</p>
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

        <CampKicker top={64} bottom={8}>How each property gets written</CampKicker>
        <div className="q-body" style={{ maxWidth: 760 }}>
          <p>Each property works like a small lab. Three to five subject-matter experts anchor it, joined by practitioners and community voices who bring lived evidence. A lab produces an explanation, a practical example, an honest account of the tensions and a list of the projects already advancing the property.</p>
          <p>Every property has its own collaboration page where anyone can propose a revision, and the group adjudicates what enters the next version. Revisions arrive as patches, each traceable to the person or the conversation it came from.</p>
        </div>

        <CampKicker top={56} bottom={8}>Two layers, side by side</CampKicker>
        <div className="q-body" style={{ maxWidth: 760 }}>
          <p>The <a href="https://themetalayer.org" target="_blank" rel="noreferrer" style={{ color: 'var(--forest-700)' }}>Meta-Layer Initiative</a> maintains a canonical set of twenty-three properties for digital and social coordination systems, among them agency, privacy, trust and interoperability. The Biosphere–Human–AI process forms a second layer beside it, a parallel exercise with the same method and the biosphere at its center of gravity. A third set covering federation and governance may follow. Expect roughly five to fifteen properties in each new set.</p>
        </div>

        <div style={{ ...campNote, marginTop: 44 }}>
          <h6 style={campNoteH6}>Read the method in full</h6>
          <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.6, color: 'var(--forest-900)', margin: '0 0 14px' }}>
            The Desirable Properties approach comes from Daveed Benjamin&rsquo;s work through a Meta-Layer lens. His two recommendations set out the method we are extending: a North Star Analysis over four to six weeks, and an exploration of the words we start from.
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

    <CampJoinBand shot="carpet" pos="center 40%"
      tearTop={ART.wave} tearGroundTop="var(--surface-parchment)"
      tear={ART.crest} tearGround="var(--surface-parchment)">
      Three intelligences. <em>One shared future.</em>
    </CampJoinBand>

    {/* ─── 08 · FROM PROPERTY TO BUILD ──────────────────────────────────── */}
    <section className="section" id="build" style={{ ...anchor, paddingBottom: 0, paddingTop: 24 }}>
      <div className="container">
        <LICampInk className="q-h1">
          <span className="num">08 · From property to build</span>
          From a property <em>to a working system.</em>
        </LICampInk>
        <div className="q-body" style={{ maxWidth: 760, marginBottom: 32 }}>
          <p>A list of properties gains force when builders can use it. The method runs in seven steps, and every second step belongs to people. AI drafts at speed, and people decide what the drafts are worth.</p>
        </div>
        <LISteps steps={LI_STEPS} />

        <CampKicker top={64} bottom={8}>Small loops first</CampKicker>
        <CampAside
          shot="trail" alt="A sunlit dirt path through a forest" index="Plate III"
          caption="One small loop, then the next."
          style={{ marginTop: 12 }}
        >
          <div className="q-body">
            <p>At the Gathering this October at Camp Navarro, CA, the aim is to execute three or four small OODA loops (observe, orient, decide, act) that carry select properties from idea to working prototype in days. The tooling makes that speed possible, and small experiments give partners and grant makers something real to test.</p>
            <p>The reference itself works like a living book. A community AI turns an idea, a link or an uploaded document into a drafted submission and suggests where in the existing text it belongs. Submissions post as drafts and reach the book through the group&rsquo;s review.</p>
          </div>
        </CampAside>

        <CampQuote>A property earns its place <em>the day someone builds with it.</em></CampQuote>
      </div>
    </section>

    <Mycelium seed={37} height={180} />

    {/* ─── 09 · WEAVING THE FIELD ───────────────────────────────────────── */}
    <section className="section" id="field" style={{ ...anchor, paddingBottom: 0, paddingTop: 24 }}>
      <div className="container">
        <LICampInk className="q-h1">
          <span className="num">09 · Weaving the field</span>
          Many tools. <em>One field.</em>
        </LICampInk>
        <div className="q-body" style={{ maxWidth: 760 }}>
          <p>Teams across this network are building coordination tools, trust signals, matchmaking engines and community platforms. Each speaks to a different audience, and the field gains from every one of them. The task is to federate them into an environment where they interoperate as needed, so that any community can work through whichever tool fits it.</p>
        </div>

        <CampKicker top={56} bottom={8}>The Tetris principle</CampKicker>
        <div className="q-body" style={{ maxWidth: 760 }}>
          <p>Many of the pieces each team builds fit together like blocks, and the field moves fastest when every block finds its place. Three tiers keep the differences clear.</p>
        </div>
        <CampCascade className="insight-grid" style={{ marginTop: 24 }}>
          {LI_TETRIS.map(([h, p, label]) => (
            <article key={h} className="insight-card">
              <h4>{h}. {p}</h4>
              <p style={{ marginTop: 10, fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--forest-700)' }}>{label}</p>
            </article>
          ))}
        </CampCascade>

        <CampKicker top={56} bottom={8}>Agreements that keep it fair</CampKicker>
        <div className="q-body" style={{ maxWidth: 760 }}>
          <p>Reciprocity needs terms: how contributions are credited, how intellectual property and data rights are shared, and what happens when one team expands a product while another steps back from a layer a partner covers better. Trade-offs of that kind, investing here and divesting there, are the working substance of a co-development agreement.</p>
        </div>

        <CampKicker top={56} bottom={8}>A map that keeps itself current</CampKicker>
        <div className="q-body" style={{ maxWidth: 760 }}>
          <p>Each organization shares what it can publicly: papers, websites, programs. A community AI reads it all into a graph database and answers questions such as which collaborations would serve the most properties and remain untried. A link is enough to add a new program, and a notification follows when a member&rsquo;s site changes. An ecosystem-weaving agent grows out of this map.</p>
          <p>Agents take a seat at this table too. Each person may bring their own agent, and the field needs norms for how agents relate to their people, to one another and to the living world.</p>
        </div>

        <CampQuote>The North Star names the destination. <em>The map reveals the travelers.</em></CampQuote>
      </div>
    </section>

    <LICampBand shot="tents" kicker="Camp Navarro · 15–18 October 2026" label="Where the work begins"
      cta={{ label: 'Visit the Camp Audax page', href: LI_JOIN_URL }}
      tearTop={ART.crest} tearGroundTop="var(--surface-parchment)"
      tear={ART.spray} tearGround="var(--surface-parchment)" rate={0.16} />

    {/* ─── MEET US ON A CALL ────────────────────────────────────────────── */}
    <section className="section-tight" id="calls" style={{ ...anchor, paddingTop: 56, paddingBottom: 0 }}>
      <div className="container">
        <CampKicker bottom={8}>Meet us on a call</CampKicker>
        <div className="q-body" style={{ maxWidth: 760, marginBottom: 24 }}>
          <p>Join one of the next Camp Audax calls to meet the people involved and bring your questions. Pick whichever time suits you.</p>
        </div>
        <LILumaCarousel ids={LI_LUMA_EVENTS} />
      </div>
    </section>

    {/* ─── 10 · THE QUESTIONS WE HOLD ───────────────────────────────────── */}
    <section className="section" id="questions" style={{ ...anchor, paddingBottom: 0 }}>
      <div className="container">
        <LICampInk className="q-h1">
          <span className="num">10 · The questions we hold</span>
          Eight questions <em>for the week and beyond.</em>
        </LICampInk>
        <CampCascade as="ol" indent className="q-list" style={{ marginTop: 24 }}>
          {LI_QUESTIONS.map(q => <li key={q}>{q}</li>)}
        </CampCascade>
        <div className="q-body" style={{ maxWidth: 760, marginTop: 32 }}>
          <p>The program is co-created, which means you help finish it. Bring your questions, your needs, your projects and your proposals.{LI_TELEGRAM_URL && <> The conversation is already running in the <a href={LI_TELEGRAM_URL} target="_blank" rel="noreferrer" style={{ color: 'var(--forest-700)' }}>Telegram group</a>.</>}</p>
        </div>
      </div>
    </section>

    {/* ─── JOIN ─────────────────────────────────────────────────────────── */}
    <CampJoinBand shot="stone-sit" pos="center 35%"
      tearTop={ART.wave} tearGroundTop="var(--surface-parchment)"
      tear={ART.crest} tearGround="var(--surface-parchment)">
      Come and coevolve <em>with us.</em>
    </CampJoinBand>

    <section className="section-tight" id="join" style={{ ...anchor }}>
      <div className="container">
        <CampKicker bottom={8}>Try it with your own AI</CampKicker>
        <div className="q-body" style={{ maxWidth: 760, marginBottom: 24 }}>
          <p>The quickest way in is to see how your own work meets the properties. Copy the prompt, paste it into any assistant, add a few sentences about what you do, and read the first map it draws. If it sparks something, come and continue the conversation with us.</p>
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
