/* The Coherence Company · top-of-page components
   Nav, Hero, Problem, MissingLayer, Journey */

const TCCLogo = ({ size = 32 }) =>
<img src={window.__resources.logoSvg} width={size} height={size} alt="The Coherence Company" />;


const Nav = ({ active, onNav, onJoin }) => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
  { id: "problem", label: "The problem" },
  { id: "layer", label: "What we build" },
  { id: "journey", label: "The Journey" },
  { id: "seed", label: "Coherence SEED" }];

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`} style={{ padding: "12px 56px", margin: "0px", opacity: "1", backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
      <div className="nav-brand" onClick={() => onNav("top")}>
        <img src={window.__resources.logoPng} className="nav-logo" alt="The Coherence Company" style={{ height: "48px" }} />
        <span className="nav-brand-tag">Humans &amp; AI<br />Wiser Together</span>
      </div>
      <div className="nav-links">
        {links.map((l) =>
        <button
          key={l.id}
          className={`nav-link${active === l.id ? " active" : ""}`}
          onClick={() => onNav(l.id)}>
          
            {l.label}
          </button>
        )}
        <button className="btn btn-primary btn-sm nav-cta" onClick={onJoin}>
          Join the SEED
        </button>
      </div>
    </nav>);

};

const Hero = ({ onJoin, onLearn }) =>
<section className="hero" id="top">
    <div
    className="calli in-gradient"
    style={{
      backgroundImage: `url(${window.__resources.calliHero})`,
      width: 940, height: 940,
      right: -160, top: 20
    }}
    aria-hidden="true" />
  
    <div className="hero-vertical">
      <span className="hero-vertical-text">The Coherence Company · Humans &amp; AI · Wiser Together</span>
    </div>
    <div className="container hero-inner">
      <h1 className="hero-h1 reveal">
        Coordination <em className="accent">infrastructure</em><br />
        for the <span className="accent">AI age.</span>
      </h1>
      <p className="hero-sub reveal reveal-2">
        We're building the missing layer between brilliant people and joint
        action — tools and services that help groups sense, decide, and build
        together at the speed of trust.
      </p>
      <div className="hero-ctas reveal reveal-3">
        <button className="btn btn-primary btn-lg" onClick={onJoin}>
          Join the SEED <i data-lucide="arrow-right"></i>
        </button>
        <button className="btn btn-ghost btn-lg" onClick={onLearn}>
          See the Coherence Journey
        </button>
      </div>
      <div className="hero-meta reveal reveal-4">
        <span className="hero-meta-item"><span className="dot"></span> Forming the founding team · Fall 2026</span>
        <span className="hero-meta-item">5-week applied research process</span>
        <span className="hero-meta-item">Remote · global</span>
      </div>
    </div>
  </section>;


const Problem = () =>
<section className="section problem" id="problem">
    <div className="calli subtle" aria-hidden="true" />
    <div className="container">
      <div className="eyebrow">The problem</div>
      <h2 className="section-title">
        The bottleneck isn't talent, funding, or vision.<br />
        <em>It's coordination capability.</em>
      </h2>
      <p className="section-dek">
        Countless brilliant people are working in parallel on related problems
        — often duplicating effort, sometimes producing incompatible
        solutions. The cost of that compounding mis-coordination is staggering.
      </p>

      <div className="stats">
        <div className="stat">
          <div className="stat-num">$8.9<small>T</small></div>
          <div className="stat-label">lost annually to coordination failures across the global economy.</div>
          <div className="stat-source">Research consensus</div>
        </div>
        <div className="stat">
          <div className="stat-num">70<small>%</small></div>
          <div className="stat-label">of strategic initiatives die mid-execution, not from lack of merit.</div>
          <div className="stat-source">Initiative survival</div>
        </div>
        <div className="stat">
          <div className="stat-num">65<small>%</small></div>
          <div className="stat-label">of ventures dissolve through founder conflict, rather than market forces.</div>
          <div className="stat-source">Venture dissolution</div>
        </div>
      </div>

      <div className="problem-conclusion">
        <h3>These aren't aberrations.<br />They're symptoms of missing infrastructure.</h3>
        <p>
          We've built infrastructure for capital, for information, for
          computation. What we haven't built is the layer that lets humans —
          and the AI working alongside them — sense together, decide together,
          and stay coherent over the long arcs of work that matter.
        </p>
      </div>
    </div>
  </section>;


const MissingLayer = ({ onLearn }) => {
  const layers = [
  {
    n: "01",
    icon: "compass",
    title: "AI for collective sensemaking",
    body: "Models that help groups see the same shape of a problem before they commit to solving it. Shared maps, not parallel guesses."
  },
  {
    n: "02",
    icon: "git-merge",
    title: "AI for collaborative intelligence",
    body: "Tools that turn many people's tacit knowledge into a usable, evolving artifact — without flattening anyone's voice."
  },
  {
    n: "03",
    icon: "users",
    title: "Agentic AI guide for collaboration",
    body: "A patient guide for the awkward middle of group work: the part where most projects quietly fall apart."
  }];

  return (
    <section className="section missing-layer" id="layer">
      <div className="container">
        <div className="eyebrow">What we're building</div>
        <h2 className="section-title">The missing layer, in three forms.</h2>
        <p className="section-dek">
          Not a single product. A small family of tools and services that work
          together — and that help groups work together — across the stages
          where most collaborations break.
        </p>
        <div className="layer-grid">
          {layers.map((l) =>
          <article key={l.n} className="layer-card">
              <span className="layer-num">{l.n}</span>
              <div className="layer-icon"><i data-lucide={l.icon}></i></div>
              <h3>{l.title}</h3>
              <p>{l.body}</p>
            </article>
          )}
        </div>
      </div>
    </section>);

};

const Journey = () => {
  const steps = [
  { n: "01", name: "Discovery", current: "Conferences, LinkedIn — we can meet people.", void: false },
  { n: "02", name: "Connection", current: "Networking, introductions — we can connect.", void: false },
  { n: "03", name: "Convergence", current: "??? The void where collaborations die.", void: true },
  { n: "04", name: "Commitment", current: "Contracts, equity — too heavy for early stage.", void: false },
  { n: "05", name: "Collaboration", current: "Project management — assumes the team already exists.", void: false }];

  return (
    <section className="section journey" id="journey">
      <div className="calli" aria-hidden="true" />
      <div className="container">
        <div className="eyebrow">The Coherence Journey</div>
        <h2 className="section-title">
          A map for how groups <em>actually</em> move to joint action.
        </h2>
        <div className="journey-intro">
          <p>
            We've been exploring this territory since 2016 — running online
            and IRL events and experiments with teams, communities, and
            movements. The Coherence Journey is the path we've watched groups
            walk again and again as they build trust and emerge islands of
            coherent alignment.
          </p>
          <p>
            We've synthesized those observations with research in complexity
            science, organizational development, and spiral dynamics. Each
            stage has existing infrastructure — except the one that matters
            most.
          </p>
        </div>

        <div className="journey-track">
          {steps.map((s) =>
          <div key={s.n} className={`journey-step${s.void ? " void" : ""}`}>
              <div className="journey-num">{s.n}</div>
              <div className="journey-name">{s.name}</div>
              <div className="journey-current">{s.current}</div>
            </div>
          )}
        </div>

        <div className="journey-callout">
          <div className="journey-callout-icon"><i data-lucide="zap"></i></div>
          <div>
            <h4>Convergence is the void we're filling.</h4>
            <p>
              The place where good intentions meet practical commitment — and
              where, today, almost nothing exists to help. That's the layer
              we're building.
            </p>
          </div>
        </div>
      </div>
    </section>);

};

Object.assign(window, { TCCLogo, Nav, Hero, Problem, MissingLayer, Journey });