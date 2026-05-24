/* Audax OS site · app router
   Six pages, hash-based navigation. Scrolls to top on every nav. */

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
