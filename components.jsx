/* Audax OS site · primitives & chrome
   Exports: Logo, Nav, Footer, CtaBand, SectionHead, Button, Eyebrow,
            ART, WashRule, ArtAside, PullQuote, ChapterBand
   Loaded once and used across every page. */

/* ---------- ART ----------
   The sumi-e library, named by what each image looks like so a page
   can pick by intent instead of pasting a 120-character Midjourney
   filename. The washes are horizontal (1456px wide) and belong in
   full-bleed devices; the orbs are square (800px) and belong beside a
   column of prose.

   These are WebP re-encodes of the Midjourney PNGs, which are 1.6-2.2MB
   each and still sit beside them in the same folders as the source art.
   Never point the site at the .png files — a page pulls up to a dozen
   of these, which at PNG weight is ~20MB.

   Every one of these is ink on a near-white ground, which is why the
   CSS composites them with mix-blend-mode: multiply rather than
   cropping them into a frame. See the INK RELIEF block in site.css.

   Older pages still hold their own HERO_ and BAND_ consts pointing
   at the same files; those are left alone deliberately. Use ART for
   anything new. */
const ART = {
  // horizontal washes — WashRule, ChapterBand, hero and CTA grounds
  burst:   'assets/backgrounds/The_Gathering_httpss.mj.run4FR0A9JrbCs_horizontal_abstract_gr_a3a5ab50-ee9c-4167-ba9d-3c83591ce255_1.webp',
  thicket: 'assets/backgrounds/The_Gathering_httpss.mj.run4FR0A9JrbCs_horizontal_abstract_gr_ca2102c1-32f3-49e2-811c-9f046636f888_3.webp',
  tide:    'assets/backgrounds/The_Gathering_httpss.mj.run4FR0A9JrbCs_horizontal_abstract_gr_f86772ab-5233-4a7c-a2ff-b9f7dcf7d9f8_0.webp',
  ribbons: 'assets/backgrounds/The_Gathering_httpss.mj.runLwdlSY4QCLA_abstract_horizontal_in_3741fb5e-98d9-4e2e-9d21-50390f539a13_1.webp',
  drift:   'assets/backgrounds/The_Gathering_httpss.mj.runLwdlSY4QCLA_abstract_horizontal_in_4a2611be-ea74-45f7-96c4-c3168455b410_3.webp',
  wave:    'assets/backgrounds/The_Gathering_httpss.mj.runqhIVc3YQOmg_abstract_horizontal_in_087652a0-f921-4a1b-a659-60280f755139_1.webp',
  spray:   'assets/backgrounds/The_Gathering_httpss.mj.runqhIVc3YQOmg_abstract_horizontal_in_38ad27fc-5fb8-4666-ae30-81a3881a6893_3.webp',
  crest:   'assets/backgrounds/The_Gathering_httpss.mj.runqhIVc3YQOmg_abstract_horizontal_in_98617e4b-7005-4e69-8ae6-612455128b0d_0.webp',

  // square orbs — ArtAside figures
  orbScript: 'assets/accent-images/The_Gathering_httpss.mj.runC6iJti0L-5Q_abstract_horizontal_ca_144cfefb-78ad-48eb-a73c-6baaff85c98f_0.webp',
  orbCanopy: 'assets/accent-images/The_Gathering_httpss.mj.runC6iJti0L-5Q_abstract_horizontal_ca_2aa5eb38-0f5a-4f05-88cf-543d975b0cb1_3.webp',
  orbDense:  'assets/accent-images/The_Gathering_httpss.mj.runC6iJti0L-5Q_abstract_horizontal_ca_665f5682-387b-4bfc-8d42-1ec3a675a53c_2.webp',
  orbHalf:   'assets/accent-images/The_Gathering_httpss.mj.runC6iJti0L-5Q_abstract_horizontal_ca_89be8310-4193-4426-a643-b55ced9ca0f6_0.webp',
  orbSlope:  'assets/accent-images/The_Gathering_httpss.mj.runC6iJti0L-5Q_abstract_horizontal_ca_89be8310-4193-4426-a643-b55ced9ca0f6_1.webp',
  orbMesh:   'assets/accent-images/The_Gathering_httpss.mj.runC6iJti0L-5Q_abstract_horizontal_ca_89be8310-4193-4426-a643-b55ced9ca0f6_2.webp',
  ensoOpen:  'assets/accent-images/The_Gathering_httpss.mj.runN91XiUaHp8U_httpss.mj.runymEnd1koJ_35f5c6fc-fc1b-438c-b64e-1f39d340862f_1.webp',
  ensoBold:  'assets/accent-images/The_Gathering_httpss.mj.runN91XiUaHp8U_httpss.mj.runymEnd1koJ_da3bc6e8-30ff-4a17-a128-88483a0499f1_3.webp',
  groveDark: 'assets/accent-images/The_Gathering_httpss.mj.runUUrabdnEXiY_abstract_landscape_cal_c9bf6229-f6fd-4195-a3ed-3d795594174d_0.webp',
  groveMist: 'assets/accent-images/The_Gathering_httpss.mj.runUUrabdnEXiY_abstract_landscape_cal_c9bf6229-f6fd-4195-a3ed-3d795594174d_2.webp',
};

// Nav, BottomSheet and Footer all read their entries from ROUTES (app.jsx) via
// navPages() / footerPages(), so adding a page never means editing this file.
// Those helpers load after this file but are only called during render, by
// which point app.jsx has run.

const Logo = ({ size = 30, variant }) => {
  const src = variant === 'white'
    ? 'assets/audax-os-logo-white-512.png'
    : size <= 32 ? 'assets/audax-os-logo-128.png'
    : size <= 64 ? 'assets/audax-os-logo-256.png'
    :              'assets/audax-os-logo-512.png';
  return <img src={src} width={size} height={size} alt="Audax OS" style={{ display: 'block' }} />;
};

// Mobile-only draggable bottom sheet: current section + section list + Join CTA.
// Hidden on desktop via CSS; the top nav remains the desktop navigation.
const BottomSheet = ({ page, onNav }) => {
  const [open, setOpen] = React.useState(false);
  const sheetRef = React.useRef(null);
  const drag = React.useRef(null);
  const sections = navPages();
  const current = sections.find(p => p.key === page) || sections[0];

  const onDown = (e) => {
    drag.current = { y: e.clientY, moved: 0 };
    e.currentTarget.setPointerCapture && e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onMove = (e) => {
    if (!drag.current) return;
    const dy = e.clientY - drag.current.y;
    drag.current.moved = dy;
    const el = sheetRef.current;
    if (el && open && dy > 0) el.style.transform = `translateY(${dy}px)`; // drag down to peek-close
  };
  const onUp = () => {
    if (!drag.current) return;
    const el = sheetRef.current;
    if (el) el.style.transform = '';
    const dy = drag.current.moved;
    drag.current = null;
    if (open && dy > 60) setOpen(false);              // clear swipe down closes
    else if (!open && dy < -40) setOpen(true);        // clear swipe up opens
    else setOpen(o => !o);                            // tap / small drag toggles
  };

  return (
    <React.Fragment>
      <div className={`msheet-scrim${open ? ' show' : ''}`} onClick={() => setOpen(false)}></div>
      <div ref={sheetRef} className={`msheet${open ? ' open' : ''}`}>
        <div className="msheet-head" onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp}>
          <div className="msheet-grab"></div>
          <div className="msheet-cur">
            <span className="msheet-lab">Section</span>
            <span className="msheet-nm">{current.label}</span>
            <i data-lucide="chevron-up" className="msheet-chev"></i>
          </div>
        </div>
        <div className="msheet-list">
          {sections.map(p => (
            <button
              key={p.key}
              className={`msheet-it${page === p.key ? ' active' : ''}`}
              onClick={() => { onNav(p.key); setOpen(false); }}
              type="button"
            >
              {p.label}
            </button>
          ))}
          <button className="msheet-join" type="button" onClick={() => { window.open(JOIN_URL, '_blank'); setOpen(false); }}>
            Join &amp; Build the OS
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

const Nav = ({ page, onNav }) => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', on);
    return () => window.removeEventListener('scroll', on);
  }, []);
  return (
    <React.Fragment>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <button className="nav-brand" type="button" onClick={() => onNav('why')} style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}>
          <Logo size={30} />
          <span className="nav-brand-text">Audax OS</span>
        </button>
        <div className="nav-links">
          {navPages().map(p => (
            <button
              key={p.key}
              className={`nav-link${page === p.key ? ' active' : ''}`}
              onClick={() => onNav(p.key)}
              type="button"
            >
              {p.label}
            </button>
          ))}
          <button className="nav-cta" onClick={() => window.open(JOIN_URL, '_blank')} type="button">
            Join &amp; Build the OS
          </button>
        </div>
      </nav>
      <BottomSheet page={page} onNav={onNav} />
    </React.Fragment>
  );
};

const Footer = ({ onNav }) => (
  <footer className="footer">
    <div className="footer-inner">
      <div className="footer-brand">
        <Logo size={36} />
        <div className="footer-brand-text">Audax OS</div>
        <div className="footer-tagline">An organisation OS for the agentic age.</div>
        <a href={JOIN_URL} target="_blank" rel="noreferrer" className="footer-join-btn">Join &amp; Build the OS</a>
      </div>
      <div className="footer-col">
        <h6>Explore</h6>
        {footerPages().map(p => (
          <a key={p.key} onClick={(e)=>{e.preventDefault(); onNav(p.key);}} href={`#${p.key}`}>{p.label}</a>
        ))}
      </div>
    </div>
    <div className="footer-bottom">
      <span>© 2026 · Audax OS is an open organisation OS, stewarded by The Coherence Company.</span>
      <span>For humans and agents, in equal measure.</span>
    </div>
  </footer>
);

const Button = ({ children, variant = 'primary', size, icon, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`btn btn-${variant}${size === 'lg' ? ' btn-lg' : ''}`}
  >
    <span>{children}</span>
    {icon && <i data-lucide={icon}></i>}
  </button>
);

const Eyebrow = ({ children, soft, color }) => (
  <div
    className={`eyebrow${soft ? ' eyebrow-soft' : ''}`}
    style={color ? { color } : null}
  >
    {children}
  </div>
);

const SectionHead = ({ eyebrow, title, sub, center }) => (
  <div className={`section-head${center ? ' center' : ''}`}>
    {eyebrow && <Eyebrow soft={center}>{eyebrow}</Eyebrow>}
    <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
    {sub && <p>{sub}</p>}
  </div>
);

// Generic CTA band (deep forest with subtle wash + lichen primary CTA)
const CTA_WASH = 'assets/backgrounds/The_Gathering_httpss.mj.runqhIVc3YQOmg_abstract_horizontal_in_087652a0-f921-4a1b-a659-60280f755139_1.webp';
const JOIN_URL = 'https://invite.the-gathering.earth/camp-audax-usa-2026/';

const CtaBand = ({ title, body, primary = 'Join to co-create', secondary = null, onPrimary, onSecondary }) => (
  <section className="cta-band" style={{ '--cta-image': `url(${CTA_WASH})` }}>
    <div className="wash"></div>
    <div className="cta-band-inner">
      <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
      {body && <p>{body}</p>}
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
        {/* every CtaBand primary now opens the sign-up page, so it wears the one CTA colour */}
        <Button variant="join" onClick={onPrimary} icon="arrow-right">{primary}</Button>
        {secondary && <Button variant="ghost" onClick={onSecondary}>{secondary}</Button>}
      </div>
    </div>
  </section>
);

// Deliberately has no art option. A wash behind the quote was tried and
// removed: at any opacity that made the artwork visible it sat under the type
// and cost readability. Imagery goes BESIDE text (ArtAside) or BETWEEN
// sections (WashRule), never under it.
const PullQuote = ({ children, html }) => (
  html
    ? <blockquote className="pull-quote" dangerouslySetInnerHTML={{ __html: html }}></blockquote>
    : <blockquote className="pull-quote">{children}</blockquote>
);

// A slim, wordless full-bleed wash. Use between sections where a prose run
// needs air but not the announcement of a ChapterBand. Purely decorative.
// `from`/`to` are the ground tones of the sections above and below — pass them
// whenever those differ, or a tone step shows at the rule's edge. GROUND below
// holds the three tones the site uses.
const GROUND = {
  parchment: 'var(--surface-parchment)',
  paper: 'var(--surface-paper)',
  white: 'var(--surface-white)',
};

const WashRule = ({ image, flip, tall, height, from, to }) => (
  <div
    className={`wash-rule${flip ? ' flip' : ''}${tall ? ' tall' : ''}`}
    style={{
      ...(height ? { '--wr-h': `${height}px` } : null),
      ...(from ? { '--wr-from': GROUND[from] || from } : null),
      ...(to ? { '--wr-to': GROUND[to] || to } : null),
    }}
    aria-hidden="true"
  >
    <div className="wash-rule-art" style={{ '--wr-image': `url(${image})` }}></div>
  </div>
);

// Prose beside an orb. The main relief inside a section: it turns a stack of
// paragraphs into a spread. `flip` puts the figure on the left, `wide` gives
// the figure the larger column (for the landscape grove vignettes).
const ArtAside = ({ image, children, flip, wide, caption }) => (
  <div className={`art-aside${flip ? ' flip' : ''}${wide ? ' wide' : ''}`}>
    <div className="art-aside-body">{children}</div>
    <figure className="art-aside-fig">
      <span className="art-aside-orb" style={{ '--aa-image': `url(${image})` }} aria-hidden="true"></span>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  </div>
);

// Cinematic horizontal slice used between major chapters.
// Image bleeds full width, parchment fades top & bottom so it composites into
// the surrounding flow; an over-laid roman numeral + label gives the break a name.
const ChapterBand = ({ image, numeral, label, kicker, tint = 'forest' }) => (
  <aside className={`chapter-band tint-${tint}`} style={{ '--band-image': `url(${image})` }} aria-hidden="false">
    <div className="chapter-band-art"></div>
    <div className="chapter-band-grain"></div>
    <div className="chapter-band-inner">
      {kicker && <span className="chapter-kicker">{kicker}</span>}
      <span className="chapter-numeral">{numeral}</span>
      <span className="chapter-label">{label}</span>
    </div>
  </aside>
);

Object.assign(window, {
  Logo, Nav, Footer, Button, Eyebrow, SectionHead, CtaBand, PullQuote, ChapterBand,
  ART, WashRule, ArtAside,
});
