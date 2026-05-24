/* Coherence UI Kit · WorkGrid
   Filterable 2-up grid of work projects. */

const WORK = [
  { id: "holm",   title: "Holm & Vidal",      kind: "Identity",  dek: "A quiet identity system for a thirty-year-old architecture practice.", bg: "#EEFBFB" },
  { id: "field",  title: "Field Notes",       kind: "Product",   dek: "An offline-first journal app for fieldwork researchers.", bg: "#F1F1F1" },
  { id: "annual", title: "Annual Report 2026", kind: "Editorial", dek: "A 96-page report set in Noto Serif, printed on uncoated stock.", bg: "#D6F6F6" },
  { id: "kelp",   title: "Kelp Forest Atlas", kind: "Editorial", dek: "Marine ecology, sixty illustrators, one consistent voice.", bg: "#FAFBFB" },
  { id: "cara",   title: "Cara Foundation",   kind: "Identity",  dek: "A grantmaker rebuilt from the type up.", bg: "#EEFBFB" },
  { id: "ledger", title: "Ledger",            kind: "Product",   dek: "An internal tool for editors who hate internal tools.", bg: "#F8F8F8" }
];

const KINDS = ["All", "Identity", "Product", "Editorial"];

const WorkGrid = () => {
  const [filter, setFilter] = React.useState("All");
  const shown = filter === "All" ? WORK : WORK.filter(w => w.kind === filter);
  return (
    <section className="section" id="work">
      <div className="container">
        <div className="work-head">
          <SectionOpener
            eyebrow="Recent work"
            title="Six recent projects, on purpose."
            dek="Selection over breadth. Each project shows the work, not the case study."
          />
          <div className="filters">
            {KINDS.map(k => (
              <Chip key={k} active={k === filter} onClick={() => setFilter(k)}>{k}</Chip>
            ))}
          </div>
        </div>
        <div className="work-grid">
          {shown.map((w, i) => (
            <a key={w.id} className={`work-card reveal reveal-${(i % 4) + 1}`} href={`#${w.id}`} onClick={(e) => e.preventDefault()}>
              <div className="work-thumb" style={{ background: w.bg }}>
                <img className="work-thumb-mark" src="../../assets/coherence-logo.svg" alt="" />
              </div>
              <div className="work-meta">
                <div className="work-eyebrow">{w.kind}</div>
                <h3 className="work-title">{w.title}</h3>
                <p className="work-dek">{w.dek}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

window.WorkGrid = WorkGrid;
