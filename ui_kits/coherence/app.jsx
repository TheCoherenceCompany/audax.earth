/* Coherence UI Kit · App */

const App = () => {
  const [active, setActive] = React.useState("Work");
  const [toast, setToast] = React.useState(null);

  const handleNav = (label) => {
    setActive(label);
    const map = { Work: "work", Journal: "journal", About: "work", Contact: "contact" };
    const el = document.getElementById(map[label]);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const handleSubmit = (form) => {
    const name = form.name?.trim() || "friend";
    setToast(`Thanks, ${name.split(" ")[0]} — we'll be in touch.`);
    setTimeout(() => setToast(null), 3400);
  };

  // Re-render Lucide icons every time React renders
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });

  return (
    <div className="page">
      <Nav active={active} onNav={handleNav} />
      <Hero
        onPrimary={() => handleNav("Contact")}
        onSecondary={() => handleNav("Work")}
      />
      <Capabilities />
      <WorkGrid />
      <JournalList />
      <ContactBlock onSubmit={handleSubmit} />
      <Footer />
      {toast && (
        <div className="toast">
          <i data-lucide="check"></i>
          <span>{toast}</span>
        </div>
      )}
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
