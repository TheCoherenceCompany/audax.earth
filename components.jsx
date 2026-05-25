/* Audax OS site · primitives & chrome
   Exports: Logo, Nav, Footer, CtaBand, SectionHead, Button, Eyebrow
   Loaded once and used across every page. */

const PAGES = [
  { key: 'why',     label: 'Why?' },
  { key: 'spheres', label: 'Spheres' },
  { key: 'layers',  label: 'Layers' },
  { key: 'modes',   label: 'Modes' },
  { key: 'whofor',  label: 'Who For?' },
  { key: 'join',    label: 'Join' }
];

const Logo = ({ size = 30, variant }) => {
  const src = variant === 'white'
    ? '../assets/audax-os-logo-white-512.png'
    : size <= 32 ? '../assets/audax-os-logo-128.png'
    : size <= 64 ? '../assets/audax-os-logo-256.png'
    :              '../assets/audax-os-logo-512.png';
  return <img src={src} width={size} height={size} alt="Audax OS" style={{ display: 'block' }} />;
};

const Nav = ({ page, onNav }) => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', on);
    return () => window.removeEventListener('scroll', on);
  }, []);
  return (
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
        <button className="nav-cta" onClick={() => window.open(JOIN_URL, '_blank')} type="button">
          Join the dialogue
        </button>
      </div>
    </nav>
  );
};

const Footer = ({ onNav }) => (
  <footer className="footer">
    <div className="footer-inner">
      <div className="footer-brand">
        <Logo size={36} />
        <div className="footer-brand-text">Audax OS</div>
        <div className="footer-tagline">An open framework for the agentic age.</div>
      </div>
      <div className="footer-col">
        <h6>Framework</h6>
        <a onClick={(e)=>{e.preventDefault(); onNav('why');}} href="#">Why?</a>
        <a onClick={(e)=>{e.preventDefault(); onNav('spheres');}} href="#">Spheres</a>
        <a onClick={(e)=>{e.preventDefault(); onNav('layers');}} href="#">Layers</a>
        <a onClick={(e)=>{e.preventDefault(); onNav('modes');}} href="#">Modes</a>
      </div>
      <div className="footer-col">
        <h6>Field</h6>
        <a onClick={(e)=>{e.preventDefault(); onNav('whofor');}} href="#">Who For?</a>
        <a href={JOIN_URL} target="_blank" rel="noopener noreferrer">Join the dialogue</a>
        <a href="#" onClick={(e)=>e.preventDefault()} style={{ opacity: 0.4, cursor: 'default' }}>Framework notes</a>
        <a href="#" onClick={(e)=>e.preventDefault()} style={{ opacity: 0.4, cursor: 'default' }}>Principles</a>
      </div>
      <div className="footer-col">
        <h6>Steward</h6>
        <a href="#" onClick={(e)=>e.preventDefault()} style={{ opacity: 0.4, cursor: 'default' }}>The Coherence Company</a>
        <a href="#" onClick={(e)=>e.preventDefault()} style={{ opacity: 0.4, cursor: 'default' }}>Living lab</a>
        <a href="#" onClick={(e)=>e.preventDefault()} style={{ opacity: 0.4, cursor: 'default' }}>Contact</a>
      </div>
    </div>
    <div className="footer-bottom">
      <span>© 2026 · Audax OS is an open framework, stewarded by The Coherence Company.</span>
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
const CTA_WASH = '../assets/backgrounds/The_Gathering_httpss.mj.runqhIVc3YQOmg_abstract_horizontal_in_087652a0-f921-4a1b-a659-60280f755139_1.png';
const JOIN_URL = 'https://t.me/+msbQmsbxpAg4Yjk8';

const CtaBand = ({ title, body, primary = 'Join the dialogue', secondary = null, onPrimary, onSecondary }) => (
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

Object.assign(window, { PAGES, Logo, Nav, Footer, Button, Eyebrow, SectionHead, CtaBand, PullQuote });
