/* Audax OS site · app router
   Six pages, hash-based navigation. Scrolls to top on every nav. */

const PAGE_META = {
  why:     { title: 'Why? — Audax OS',                    description: 'Why the world of work needs a new operating system for the agentic age.' },
  spheres: { title: 'Spheres — Audax OS',                 description: 'The five horizontal spheres of Audax OS: Value, Work, Relationship & Purpose, Learning, and Communication.' },
  layers:  { title: 'Layers — Audax OS',                  description: 'The five vertical layers of Audax OS: Individual, Team, Organisation, Organisation Family, and Ecosystem.' },
  modes:   { title: 'Modes — Audax OS',                   description: 'Three modes of collaboration: Human to Human, Human to Agent, and Agent to Agent.' },
  whofor:  { title: 'Who Is This For? — Audax OS',        description: 'An invitation to co-creators: organisation designers, AI builders, operators, and ecosystem actors.' },
  join:    { title: 'Join — Audax OS',                    description: 'Join the dialogue on the organisational OS for the agentic age.' },
};

const setMeta = (name, content) => {
  const el = document.querySelector(`meta[property="${name}"], meta[name="${name}"]`);
  if (el) el.setAttribute('content', content);
};

const App = () => {
  const initial = () => {
    const h = window.location.hash.replace('#', '');
    return ['why', 'spheres', 'layers', 'modes', 'whofor', 'join'].includes(h) ? h : 'why';
  };
  const [page, setPage] = React.useState(initial);

  const nav = (key) => {
    setPage(key);
    window.location.hash = key;
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Listen for back/forward
  React.useEffect(() => {
    const on = () => setPage(initial());
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);

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
