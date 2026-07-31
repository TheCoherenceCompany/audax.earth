/* Audax OS site · app router

   ROUTES below is the single registry for every page. Adding a page means:
     1. create page-<key>.jsx, ending in `window.PageX = PageX;`
     2. add a <script> tag for it in index.html (before app.jsx)
     3. add one entry here
   Nothing else — the nav, the mobile sheet, the footer and the <title>/OG tags
   are all derived from this object.
   See .claude/skills/adding-and-comparing-pages/SKILL.md

   Entry fields:
     view         renders the page (required)
     title        document title + og:title / twitter:title (required)
     description  meta description (required)
     nav          short label for the top nav + mobile sheet; omit to leave out
     footer       label in the footer's Explore column; defaults to `nav`
     chrome       set false for a stand-alone page that renders its own nav and
                  footer; the site Nav/Footer are then skipped entirely

   Omit both `nav` and `footer` and the page is unlisted: reachable at #<key>,
   absent from every menu. That is how a page variant under review stays private. */

const ROUTES = {
  why: {
    view: (p) => <PageWhy {...p} />,
    nav: 'Why?',
    title: 'Why? — Audax OS',
    description: 'Why the world of work needs a new operating system for the agentic age.',
  },
  spheres: {
    view: (p) => <PageSpheres {...p} />,
    nav: 'Spheres',
    title: 'Spheres — Audax OS',
    description: 'The five horizontal spheres of Audax OS: Value, Work, Relationship & Purpose, Learning, and Communication.',
  },
  layers: {
    view: (p) => <PageLayers {...p} />,
    nav: 'Layers',
    title: 'Layers — Audax OS',
    description: 'The five vertical layers of Audax OS: Individual, Team, Organisation, Organisation Family, and Ecosystem.',
  },
  modes: {
    view: (p) => <PageModes {...p} />,
    nav: 'Modes',
    title: 'Modes — Audax OS',
    description: 'Three modes of collaboration: Human to Human, Human to Agent, and Agent to Agent.',
  },
  whofor: {
    view: (p) => <PageWhoFor {...p} />,
    nav: 'Who For?',
    title: 'Who For? — Audax OS',
    description: 'Who Audax OS is designed to serve: global, remote, fractional, and human-AI organisations.',
  },
  // PROTOTYPE, unlisted for review — no `nav`, no `footer`, so it is reachable
  // at #map and absent from every menu. Remove this entry to drop it.
  map: {
    view: (p) => <PageMap {...p} />,
    title: 'The Map — Audax OS',
    description: 'The territory of needs Audax OS is laid over: what is charted, what is contested, and what is still blank.',
  },
  camp: {
    view: (p) => <PageCamp {...p} />,
    nav: 'Camp',
    chrome: false,
    footer: 'Camp Audax',
    title: 'Camp Audax — 12–18 October 2026, Camp Navarro, California',
    description: 'AI as the coordination layer of a wiser, regenerative society. Six days in the redwoods for the people building, funding, applying and philosophically shaping AI for societal good.',
  },
  build: {
    view: (p) => <PageBuild {...p} />,
    footer: "Let's Build the OS",
    title: "Let's Build the OS — Audax OS",
    description: 'Join to co-create and help co-create the organisational OS for the agentic age.',
  },
  join: {
    view: (p) => <PageJoin {...p} />,
    title: 'Join — Audax OS',
    description: 'Join to co-create on the organisational OS for the agentic age.',
  },
};

// Fallback for an unknown or empty hash.
const HOME = 'why';

// Menu contents, derived from ROUTES. `build` sits in the footer but not the
// top nav, where it is the standalone CTA button instead.
const navPages = () => Object.entries(ROUTES)
  .filter(([, r]) => r.nav)
  .map(([key, r]) => ({ key, label: r.nav }));

const footerPages = () => Object.entries(ROUTES)
  .filter(([, r]) => r.footer || r.nav)
  .map(([key, r]) => ({ key, label: r.footer || r.nav }));

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
  return { page: ROUTES[p] ? p : HOME, section: section || null };
};

const App = () => {
  // navId increments on every nav() call so the scroll effect below always
  // re-fires — even when re-clicking the same section — instead of bailing
  // out because [page, section] look unchanged to useEffect's dep check.
  const [{ page, section, navId }, setRoute] = React.useState(() => ({ ...parseHash(), navId: 0 }));

  const nav = (key, section) => {
    setRoute((r) => ({ page: key, section: section || null, navId: r.navId + 1 }));
    window.location.hash = section ? `${key}/${section}` : key;
    if (!section) window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Listen for back/forward
  React.useEffect(() => {
    const on = () => setRoute((r) => ({ ...parseHash(), navId: r.navId + 1 }));
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);

  // Scroll to the requested section once the page has rendered it — covers
  // both direct nav() calls and a deep link opened straight from the URL.
  React.useEffect(() => {
    if (!section) return;
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [navId]);

  // Update document title and OG meta tags on page change
  React.useEffect(() => {
    const m = ROUTES[page];
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

  const route = ROUTES[page] || ROUTES[HOME];
  const chrome = route.chrome !== false;

  return (
    <div data-screen-label={page} key={page}>
      {chrome && <Nav page={page} onNav={nav} />}
      {route.view({ onNav: nav })}
      {chrome && <Footer onNav={nav} />}
    </div>
  );
};

Object.assign(window, { ROUTES, navPages, footerPages });

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
