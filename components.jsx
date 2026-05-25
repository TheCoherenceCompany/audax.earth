/* Audax OS site · primitives & chrome
   Exports: Logo, Nav, Footer, CtaBand, SectionHead, Button, Eyebrow
   Loaded once and used across every page. */

const PAGES = [
  { key: 'why',     label: 'Why?' },
  { key: 'spheres', label: 'Spheres' },
  { key: 'layers',  label: 'Layers' },
  { key: 'modes',   label: 'Modes' },
  { key: 'whofor',  label: 'Who For?' },
  { key: 'build',   label: "Let's Build" }
];

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
  const sections = PAGES.slice(0, 5);
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
          <button className="msheet-join" type="button" onClick={() => { onNav('build'); setOpen(false); }}>
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
          {PAGES.slice(0, 5).map(p => (
            <button
              key={p.key}
              className={`nav-link${page === p.key ? ' active' : ''}`}
              onClick={() => onNav(p.key)}
              type="button"
            >
              {p.label}
            </button>
          ))}
          <button className="nav-cta" onClick={() => onNav('build')} type="button">
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
        <a onClick={(e)=>{e.preventDefault(); onNav('build');}} href="#build" className="footer-join-btn">Join &amp; Build the OS</a>
      </div>
      <div className="footer-col">
        <h6>Explore</h6>
        <a onClick={(e)=>{e.preventDefault(); onNav('why');}} href="#">Why?</a>
        <a onClick={(e)=>{e.preventDefault(); onNav('spheres');}} href="#">Spheres</a>
        <a onClick={(e)=>{e.preventDefault(); onNav('layers');}} href="#">Layers</a>
        <a onClick={(e)=>{e.preventDefault(); onNav('modes');}} href="#">Modes</a>
        <a onClick={(e)=>{e.preventDefault(); onNav('whofor');}} href="#">Who For?</a>
        <a onClick={(e)=>{e.preventDefault(); onNav('build');}} href="#">Let's Build the OS</a>
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
const CTA_WASH = 'assets/backgrounds/The_Gathering_httpss.mj.runqhIVc3YQOmg_abstract_horizontal_in_087652a0-f921-4a1b-a659-60280f755139_1.png';
const JOIN_URL = 'https://t.me/+msbQmsbxpAg4Yjk8';

const CtaBand = ({ title, body, primary = 'Join to co-create', secondary = null, onPrimary, onSecondary }) => (
  <section className="cta-band" style={{ '--cta-image': `url(${CTA_WASH})` }}>
    <div className="wash"></div>
    <div className="cta-band-inner">
      <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
      {body && <p>{body}</p>}
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
        <Button onClick={onPrimary} icon="arrow-right">{primary}</Button>
        {secondary && <Button variant="ghost" onClick={onSecondary}>{secondary}</Button>}
      </div>
    </div>
  </section>
);

const PullQuote = ({ children, html }) => (
  html
    ? <blockquote className="pull-quote" dangerouslySetInnerHTML={{ __html: html }}></blockquote>
    : <blockquote className="pull-quote">{children}</blockquote>
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

Object.assign(window, { PAGES, Logo, Nav, Footer, Button, Eyebrow, SectionHead, CtaBand, PullQuote, ChapterBand });
