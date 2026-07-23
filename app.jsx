/* Audax OS site · app router
   Seven pages, hash-based navigation. Scrolls to top on every nav. */

const PAGE_META = {
  why:     { title: 'Why? — Audax OS',                    description: 'Why the world of work needs a new operating system for the agentic age.' },
  spheres: { title: 'Spheres — Audax OS',                 description: 'The five horizontal spheres of Audax OS: Value, Work, Relationship & Purpose, Learning, and Communication.' },
  layers:  { title: 'Layers — Audax OS',                  description: 'The five vertical layers of Audax OS: Individual, Team, Organisation, Organisation Family, and Ecosystem.' },
  modes:   { title: 'Modes — Audax OS',                   description: 'Three modes of collaboration: Human to Human, Human to Agent, and Agent to Agent.' },
  whofor:  { title: 'Who For? — Audax OS',                description: 'Who Audax OS is designed to serve: global, remote, fractional, and human-AI organisations.' },
  build:   { title: "Let's Build the OS — Audax OS",      description: 'Join to co-create and help co-create the organisational OS for the agentic age.' },
  join:    { title: 'Join — Audax OS',                    description: 'Join to co-create on the organisational OS for the agentic age.' },
};

const setMeta = (name, content) => {
  const el = document.querySelector(`meta[property="${name}"], meta[name="${name}"]`);
  if (el) el.setAttribute('content', content);
};

// Hash format: "#page" or "#page/section" — the section (when present) is a
// DOM id the target page renders, so a link can point straight at it
// (e.g. "#spheres/value" opens the Spheres page scrolled to the Value sphere).
const parseHash = () => {
  const raw = window.location.hash.replace('#', '');
  const [p, section] = raw.split('/');
  const page = ['why', 'spheres', 'layers', 'modes', 'whofor', 'build', 'join'].includes(p) ? p : 'why';
  return { page, section: section || null };
};

const App = () => {
  const [{ page, section }, setRoute] = React.useState(parseHash);

  const nav = (key, section) => {
    setRoute({ page: key, section: section || null });
    window.location.hash = section ? `${key}/${section}` : key;
    if (!section) window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Listen for back/forward
  React.useEffect(() => {
    const on = () => setRoute(parseHash());
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);

  // Scroll to the requested section once the page has rendered it — covers
  // both direct nav() calls and a deep link opened straight from the URL.
  React.useEffect(() => {
    if (!section) return;
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [page, section]);

  // Update document title and OG meta tags on page change
  React.useEffect(() => {
    const m = PAGE_META[page];
    if (!m) return;
    document.title = m.title;
    setMeta('og:title', m.title);
    setMeta('og:description', m.description);
    setMeta('twitter:title', m.title);
    setMeta('twitter:description', m.description);
    setMeta('og:url', `https://audax.earth/#${page}`);
  }, [page]);

  // Re-render Lucide icons after every render
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });

  let body;
  if (page === 'why') body = <PageWhy onNav={nav} />;
  else if (page === 'spheres') body = <PageSpheres onNav={nav} />;
  else if (page === 'layers') body = <PageLayers onNav={nav} />;
  else if (page === 'modes') body = <PageModes onNav={nav} />;
  else if (page === 'whofor') body = <PageWhoFor onNav={nav} />;
  else if (page === 'build') body = <PageBuild onNav={nav} />;
  else if (page === 'join') body = <PageJoin onNav={nav} />;
  else body = <PageWhy onNav={nav} />;

  return (
    <div data-screen-label={page} key={page}>
      <Nav page={page} onNav={nav} />
      {body}
      <Footer onNav={nav} />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
