/* Living Intelligence · extras
   The triad diagram, the step list and the copyable prompt. Kept apart from the
   page so the page file stays readable. */

/* ─── The triad, drawn ───────────────────────────────────────────────────
   Three overlapping circles in the manner of the Human x AI x biosphere figure that
   Alexander drew for the camp, redrawn in this site's palette with the Biosphere first.
   Lichen for the Biosphere, a warm clay for Human, sage mist for AI. Each circle lists the
   five orienting qualities from that figure; each pairwise overlap names what the two
   share; the centre carries the aim. Hovering or focusing a set lifts its circle.

   Geometry: three circles of radius 250 whose centres form an equilateral triangle
   of side ~271, so the pairwise lenses and the triple centre all have room for text. */
const TRI_R = 250;
const TRI_C = { n: [500, 290], h: [362, 528], a: [638, 528] };
const TRI_SETS = {
  n: { name: 'Biosphere', color: '#C7D27B', text: '#EEF0D2', at: [500, 94], gap: 31, step: 29.5,
       items: ['Regeneration', 'Resilience', 'Health of ecosystems', 'Interdependence', 'More-than-human life'] },
  h: { name: 'Human', color: '#E9A673', text: '#FBE6D3', at: [272, 508], gap: 38, step: 31,
       items: ['Dignity', 'Agency', 'Flourishing', 'Equity', 'Meaning'] },
  a: { name: 'AI', color: '#C8DBC9', text: '#E2EBDD', at: [728, 508], gap: 38, step: 31,
       items: ['Augmentation', 'Alignment', 'Governance', 'Transparency', 'Responsibility'] }
};
const TRI_PAIRS = [
  { id: 'nh', at: [352, 350], lines: ['Kinship', 'Stewardship'], color: '#DDE0A0' },
  { id: 'na', at: [648, 350], lines: ['Known origins', 'Tangible impact'], color: '#D6E4C6' },
  { id: 'ha', at: [500, 626], lines: ['Answerability', 'Consent'], color: '#EBCDB0' }
];

const TRI_ZOOMS = [1, 1.6, 2.3, 3.2];

const TriadDiagram = () => {
  const ref = useCampReveal();
  const [hot, setHot] = React.useState(null);
  const [zi, setZi] = React.useState(0);
  const scroller = React.useRef(null);
  const zoom = TRI_ZOOMS[zi];

  // keep the middle of the figure in view as it grows or shrinks
  React.useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2;
    el.scrollTop = 0;
  }, [zi]);
  const keys = ['n', 'h', 'a'];
  const lift = (k) => ({
    onMouseEnter: () => setHot(k), onMouseLeave: () => setHot(null),
    onFocus: () => setHot(k), onBlur: () => setHot(null)
  });

  return (
    <div className="li-tri-wrap">
      <div className="li-tri-scroll" ref={scroller}>
      <svg
        ref={ref} className="li-tri" data-hot={hot || undefined} style={zoom > 1 ? { width: `${zoom * 100}%` } : undefined} viewBox="96 24 808 776"
        role="img"
        aria-label="Three overlapping circles for the Biosphere, Human and AI. Where all three meet: coevolution for a regenerative future."
      >
        {keys.map((k, i) => {
          const s = TRI_SETS[k];
          const [cx, cy] = TRI_C[k];
          return (
            <g key={k} className={`li-tri-c${hot === k ? ' hot' : ''}${hot && hot !== k ? ' dim' : ''}`}>
              <circle className="fill" cx={cx} cy={cy} r={TRI_R} fill={s.color} />
              <circle className="ring" cx={cx} cy={cy} r={TRI_R} fill="none" stroke={s.color} pathLength="1" style={{ transitionDelay: `${i * 180}ms` }} />
            </g>
          );
        })}

        {keys.map((k, i) => {
          const s = TRI_SETS[k];
          const [x, y] = s.at;
          return (
            <g key={k} className="lbl" style={{ transitionDelay: `${500 + i * 120}ms` }}>
              <g className="li-tri-set" tabIndex={0} aria-label={`${s.name}: ${s.items.join(', ')}`} {...lift(k)}>
                <text className="t-title" x={x} y={y} textAnchor="middle" fill={s.color}>{s.name}</text>
                {s.items.map((it, j) => (
                  <text key={it} className="t-item" x={x} y={y + s.gap + j * s.step} textAnchor="middle" fill={s.text}>{it}</text>
                ))}
              </g>
            </g>
          );
        })}

        {TRI_PAIRS.map((p, i) => (
          <g key={p.id} className="lbl" style={{ transitionDelay: `${900 + i * 100}ms` }}>
            {p.lines.map((ln, j) => (
              <text key={ln} className="t-pair" x={p.at[0]} y={p.at[1] + j * 21} textAnchor="middle" fill={p.color}>{ln}</text>
            ))}
          </g>
        ))}

        <g className="lbl" style={{ transitionDelay: '1200ms' }}>
          <path className="li-tri-seed" d="M500 394 C507 402 507 411 500 419 C493 411 493 402 500 394 Z" />
          <text className="t-core" x="500" y="452" textAnchor="middle">Coevolution</text>
          <text className="t-core2" x="500" y="478" textAnchor="middle">for a regenerative</text>
          <text className="t-core2" x="500" y="499" textAnchor="middle">future</text>
        </g>
      </svg>
      </div>

      <div className="li-tri-zoom" role="group" aria-label="Zoom the diagram">
        <button type="button" aria-label="Zoom out" disabled={zi === 0} onClick={() => setZi(z => Math.max(0, z - 1))}>&minus;</button>
        <button type="button" className="fit" aria-label="Fit to screen" disabled={zi === 0} onClick={() => setZi(0)}>Fit</button>
        <button type="button" aria-label="Zoom in" disabled={zi === TRI_ZOOMS.length - 1} onClick={() => setZi(z => Math.min(TRI_ZOOMS.length - 1, z + 1))}>+</button>
      </div>
      <p className="li-tri-hint">Pinch or use the buttons to zoom, then drag to look around.</p>

      <div className="li-tri-list">
        {keys.map(k => (
          <div key={k} className="li-tri-card" style={{ '--tri': TRI_SETS[k].color }}>
            <h4>{TRI_SETS[k].name}</h4>
            <p>{TRI_SETS[k].items.join(' · ')}</p>
          </div>
        ))}
        <div className="li-tri-card li-tri-card-core">
          <h4>Where they meet</h4>
          <p>Kinship · Stewardship · Known origins · Tangible impact · Answerability · Consent</p>
          <p className="core">Coevolution for a regenerative future</p>
        </div>
      </div>
    </div>
  );
};

/* ─── From property to build ─────────────────────────────────────────────
   Seven steps that alternate between an AI drafting and people deciding. */
const LISteps = ({ steps }) => (
  <CampCascade as="ol" step={80} className="li-steps">
    {steps.map((s, i) => (
      <li key={s.title} className={`li-step ${s.who === 'People decide' || s.who === 'People' ? 'people' : 'ai'}`}>
        <span className="n">{String(i + 1).padStart(2, '0')}</span>
        <div className="b"><h4>{s.title}</h4><p>{s.body}</p></div>
        <span className="who">{s.who}</span>
      </li>
    ))}
  </CampCascade>
);

/* ─── A prompt to take away ──────────────────────────────────────────────
   Paste it into any assistant, add a few sentences about your own work, and get a
   first map of how that work meets the properties. */
const LI_PROMPT = `You are a thoughtful collaborator helping me see how my work connects to Living Intelligence, a shared north star for the relationship between the biosphere, human beings and AI.

Living Intelligence asks what would have to be true of that relationship for us to call it desirable. It answers with Desirable Properties: conditions specific enough to build toward and to disagree about. Three sets orient the work:
- Biosphere: regeneration, resilience, health of ecosystems, interdependence, more-than-human life
- Human: dignity, agency, flourishing, equity, meaning
- AI: augmentation, alignment, governance, transparency, responsibility
Where the three meet, the aim is coevolution for a regenerative future.

Here is my work: [describe your project, organization or question in a few sentences]

Please respond with:
1. Three properties my work already advances, each with a concrete example from what I described.
2. Two properties it could advance with a small change, and the change.
3. One tension between properties that my work surfaces, and a way to hold it openly.
4. One small experiment I could run in the next week (observe, orient, decide, act).
5. Three kinds of people or organizations to talk to next, and a question for each.
6. One property missing from the lists above that my work suggests.`;

const LIPrompt = () => {
  const [copied, setCopied] = React.useState(false);
  const copy = () => {
    const done = () => { setCopied(true); setTimeout(() => setCopied(false), 2400); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(LI_PROMPT).then(done, done);
    else done();
  };
  return (
    <div className="li-prompt">
      <div className="li-prompt-head">
        <span>Copy into your own AI</span>
        <button type="button" onClick={copy} aria-live="polite">{copied ? 'Copied' : 'Copy prompt'}</button>
      </div>
      <pre>{LI_PROMPT}</pre>
    </div>
  );
};

/* ─── Links and calls ────────────────────────────────────────────────────
   LI_TELEGRAM_URL: the group's invite link. Empty means the Telegram buttons and
   lines stay hidden; paste the link here and they appear everywhere at once.

   LI_LUMA_EVENTS: the next two Camp Audax calls on The Coherence Company's calendar
   (luma.com/thecoherenceco), by Luma event slug: Wed 30 Sep 2026 and Wed 7 Oct 2026.
   Swap in the newest two whenever new calls are scheduled. */
const LI_TELEGRAM_URL = 'https://t.me/+msbQmsbxpAg4Yjk8'; // the Audax OS group; the older Camp Audax page used this invite
const LI_LUMA_EVENTS = ['rlleseya', '4h2zh57m'];

/* Luma's embed cannot be restyled and only lays out compactly from 700px wide, so
   the iframe stays 700x460 and .cph-luma-card scales it down for small screens. */
const LILumaCarousel = ({ ids }) => (
  <div style={{ display: 'flex', gap: 16, overflowX: 'auto', paddingBottom: 8, scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}>
    {ids.map(id => (
      <div key={id} className="cph-luma-card">
        <iframe
          src={`https://lu.ma/embed/event/${id}/simple`}
          width="700" height="460"
          allow="fullscreen; payment" title="Camp Audax call, hosted on Luma" loading="lazy"
        ></iframe>
      </div>
    ))}
  </div>
);

/* An empty picture frame: holds the place of a photograph until we have our own. */
const LIPlate = ({ index, caption, ratio = '21 / 9' }) => (
  <figure className="li-plate-solo">
    <div className="li-plate-frame" style={{ aspectRatio: ratio }} role="img" aria-label="Image to come"><span>Image to come</span></div>
    {caption && (
      <figcaption className="cph-aside-cap">
        {index && <span className="cph-plate-idx">{index}</span>}
        {caption}
      </figcaption>
    )}
  </figure>
);

Object.assign(window, { LIPlate, TriadDiagram, LISteps, LIPrompt, LI_PROMPT, LI_TELEGRAM_URL, LI_LUMA_EVENTS, LILumaCarousel });
