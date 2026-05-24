/* Coherence UI Kit · Nav */

const Nav = ({ active, onNav }) => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = ["Work", "Journal", "About", "Contact"];
  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="nav-brand">
        <Logo size={28} />
        <span className="nav-brand-text">The Coherence Company</span>
      </div>
      <div className="nav-links">
        {links.map(l => (
          <a
            key={l}
            className={`nav-link${active === l ? " active" : ""}`}
            onClick={(e) => { e.preventDefault(); onNav && onNav(l); }}
            href={`#${l.toLowerCase()}`}
          >
            {l}
          </a>
        ))}
      </div>
    </nav>
  );
};

window.Nav = Nav;
