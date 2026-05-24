/* Coherence UI Kit · Capabilities
   Three minimal capability cards with Lucide icons. */

const CAPABILITIES = [
  {
    icon: "compass",
    title: "Brand systems",
    body: "Identity, typography, and the rules that hold them together for years, not seasons."
  },
  {
    icon: "layers",
    title: "Product design",
    body: "Interfaces that read calmly under load. Long arcs of work with engineering counterparts."
  },
  {
    icon: "book-open",
    title: "Editorial",
    body: "Reports, books, and digests for organisations that have something worth saying carefully."
  }
];

const Capabilities = () => (
  <section className="section">
    <div className="container">
      <SectionOpener
        eyebrow="What we make"
        title="Three things, done at the depth they deserve."
        dek="We work with a small number of clients each year. The work compounds because we stay with it."
      />
      <div className="cap-grid">
        {CAPABILITIES.map((c, i) => (
          <article key={c.title} className={`cap-card reveal reveal-${i + 1}`}>
            <div className="cap-icon">
              <i data-lucide={c.icon}></i>
            </div>
            <h3 className="cap-h3">{c.title}</h3>
            <p className="cap-body">{c.body}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

window.Capabilities = Capabilities;
