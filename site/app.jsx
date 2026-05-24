/* The Coherence Company · App */

const App = () => {
  const [active, setActive] = React.useState("top");
  const [modalOpen, setModalOpen] = React.useState(false);
  const [toast, setToast] = React.useState(null);

  const scrollTo = (id) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const openJoin = () => setModalOpen(true);
  const closeJoin = () => setModalOpen(false);

  const handleRSVP = (form) => {
    const first = (form.name || "friend").trim().split(/\s+/)[0];
    setModalOpen(false);
    setToast(`Thanks ${first} — calendar invite on its way.`);
    setTimeout(() => setToast(null), 3600);
  };

  // Track which section is in view for nav highlighting
  React.useEffect(() => {
    const ids = ["problem", "layer", "journey", "seed"];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Iconify auto-registers <iconify-icon> custom elements; nothing to mount.
  React.useEffect(() => {}, []);

  return (
    <div className="page">
      <Nav active={active} onNav={scrollTo} onJoin={openJoin} />
      <Hero onJoin={openJoin} onLearn={() => scrollTo("journey")} />
      <Problem />
      <MissingLayer onLearn={() => scrollTo("journey")} />
      <Journey />
      <Seed onJoin={openJoin} />
      <Invite />
      <Process />
      <Join onJoin={openJoin} />
      <Footer />
      {modalOpen && <JoinModal onClose={closeJoin} onSubmit={handleRSVP} />}
      {toast && (
        <div className="toast">
          <iconify-icon icon="iconoir:check" width="16" height="16"></iconify-icon>
          <span>{toast}</span>
        </div>
      )}
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
