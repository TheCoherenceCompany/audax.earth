/* The Coherence Company · bottom-of-page components
   Seed, Invite, Process, Join, Footer, JoinModal */

const Seed = ({ onJoin }) => (
  <section className="section seed" id="seed">
    <div
      className="calli on-dark"
      style={{ backgroundImage: `url(${window.__resources.calliSeed})` }}
      aria-hidden="true"
    />
    <div className="container">
      <div className="eyebrow">Coherence SEED</div>
      <h2 className="section-title">
        A new kind of startup,<br />
        <em>seeded by the methodology it teaches.</em>
      </h2>
      <p className="section-dek">
        We're forming a founding team through the process of Coherence itself.
        Over five weeks, we'll discover whether we're meant to build this
        infrastructure together — through a methodology that demonstrates the
        very coordination capacities we're developing. Applied research, in
        public.
      </p>
      <div className="seed-meta">
        <div className="seed-meta-item">
          <div className="seed-meta-key">Format</div>
          <div className="seed-meta-val">Purposeful · AI-powered · Human<small>Teal, Turquoise &amp; Regenerative by design.</small></div>
        </div>
        <div className="seed-meta-item">
          <div className="seed-meta-key">Duration</div>
          <div className="seed-meta-val">5 weeks<small>Four sessions, plus the work between them.</small></div>
        </div>
        <div className="seed-meta-item">
          <div className="seed-meta-key">Outcome</div>
          <div className="seed-meta-val">A founding team — or clarity that we aren't one.<small>Both are valid. Both are useful.</small></div>
        </div>
      </div>
    </div>
  </section>
);

const Invite = () => {
  const roles = [
    { icon: "compass",        text: "Systems architects" },
    { icon: "microscope",     text: "Social researchers" },
    { icon: "git-merge",      text: "Complexity facilitators" },
    { icon: "wrench",         text: "Technical builders" },
    { icon: "package",        text: "Implementation pragmatists" },
    { icon: "pen-tool",       text: "Designers &amp; creatives" },
    { icon: "type",           text: "Conceptual translators" },
    { icon: "telescope",      text: "Epistemological investigators" },
    { icon: "shapes",         text: "Strategic pattern-matchers" }
  ];
  return (
    <section className="section invite">
      <div className="container">
        <div className="eyebrow">Who we invite</div>
        <h2 className="section-title">
          We're gathering people who maintain<br />
          <em>active practices across multiple domains.</em>
        </h2>
        <p className="section-dek">
          Researchers who build. Executives who teach. Artists who organize.
          Technologists who facilitate. Bring more than one of the capacities
          below, and we'll be glad you arrived.
        </p>

        <div className="invite-grid">
          {roles.map((r, i) => (
            <div key={i} className="invite-chip">
              <div className="invite-chip-icon"><i data-lucide={r.icon}></i></div>
              <span className="invite-chip-text" dangerouslySetInnerHTML={{ __html: r.text }} />
            </div>
          ))}
        </div>

        <div className="invite-note">
          <div className="invite-note-icon"><i data-lucide="info"></i></div>
          <p>
            You don't need to recognise every label above. You do need a
            current practice — something you're actively building, writing,
            organising, or otherwise wrestling with in the world.
          </p>
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const sessions = [
    {
      n: "01",
      tag: "Orientation",
      title: "Understand what TCC is building, and why it matters.",
      body: "Meet others who care about this problem. Surface questions and uncertainties — not to have them all answered, but to see whether this is a question you want to live with."
    },
    {
      n: "02",
      tag: "Culture",
      title: "Co-create the culture we want to build inside of.",
      body: "What values matter? How do we make decisions? How do we handle conflict? This isn't handed down — it's designed together, in the room, on the record."
    },
    {
      n: "03",
      tag: "Tactics",
      title: "Get tactical: what gets built, who does what, what the MVP looks like.",
      body: "Preliminary roles. The shape of the first thing we ship. You'll see where you might contribute, and whether the work fits the practice you already have."
    },
    {
      n: "04",
      tag: "Commit",
      title: "If you're still in, we formalise — and then we build.",
      body: "Roles, agreements, commitments. The handshake that turns a five-week conversation into a company. Or a graceful goodbye, if it isn't."
    }
  ];
  return (
    <section className="section process">
      <div className="container">
        <div className="eyebrow">The Seeding Process</div>
        <h2 className="section-title">
          Four sessions designed to be coherent<br />
          <em>about coherence itself.</em>
        </h2>
        <p className="section-dek">
          Using Liberating Structures, Art of Hosting practices, and the
          Coherence Journey map we're teaching others to use.
        </p>

        <div className="sessions">
          {sessions.map(s => (
            <article key={s.n} className="session">
              <div className="session-label">
                <span className="session-num">{s.n}</span>
                <span className="session-tag">Session · {s.tag}</span>
              </div>
              <div className="session-body">
                <h4>{s.title}</h4>
                <p>{s.body}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="process-footnote">
          The process itself is designed to be coherent. We're not telling you
          how to coordinate — we're inviting you to coordinate with us, and
          to notice what happens.
        </p>
      </div>
    </section>
  );
};

const Join = ({ onJoin }) => (
  <section className="section join" id="join">
    <div
      className="calli in-gradient"
      style={{ backgroundImage: `url(${window.__resources.calliJoin})` }}
      aria-hidden="true"
    />
    <div className="container-narrow join-inner">
      <img src={window.__resources.logoSvg} className="join-mark" alt="" />
      <h2 className="join-h2">
        Join us to build AI for sensemaking<br />
        — and wisdom at scale.
      </h2>
      <p className="join-sub">
        The next cohort of the Coherence SEED is forming now. We reply to
        every note within a few days.
      </p>
      <div className="join-ctas">
        <button className="btn btn-primary btn-lg" onClick={onJoin}>
          RSVP to the next info event <i data-lucide="arrow-right"></i>
        </button>
        <button className="btn btn-secondary btn-lg" onClick={onJoin}>
          Tell us about your practice
        </button>
      </div>
      <div className="join-rsvp">
        <span className="join-rsvp-item"><i data-lucide="calendar"></i> Next event · 12 Jun 2026 · 17:00 UTC</span>
        <span className="join-rsvp-item"><i data-lucide="mail"></i> hello@coherence.tv</span>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="container footer-inner">
      <div className="footer-brand">
        <TCCLogo size={44} />
        <div>
          <div className="footer-brand-name">The Coherence Company</div>
          <div className="footer-brand-tag" style={{ marginTop: 8 }}>
            Coordination infrastructure for the AI age. Humans &amp; AI,
            wiser together.
          </div>
        </div>
      </div>
      <div className="footer-col">
        <h6>The work</h6>
        <a href="#problem"  onClick={e=>e.preventDefault()}>The problem</a>
        <a href="#layer"    onClick={e=>e.preventDefault()}>What we build</a>
        <a href="#journey"  onClick={e=>e.preventDefault()}>The Coherence Journey</a>
        <a href="#seed"     onClick={e=>e.preventDefault()}>Coherence SEED</a>
      </div>
      <div className="footer-col">
        <h6>Get in touch</h6>
        <a href="mailto:hello@coherence.tv">hello@coherence.tv</a>
        <a href="#join" onClick={e=>e.preventDefault()}>RSVP info events</a>
        <a href="#" onClick={e=>e.preventDefault()}>Substack</a>
        <a href="#" onClick={e=>e.preventDefault()}>LinkedIn</a>
      </div>
    </div>
    <div className="container footer-bottom">
      <span>© 2026 The Coherence Company · An applied-research startup.</span>
      <span>coherence.tv</span>
    </div>
  </footer>
);

const JoinModal = ({ onClose, onSubmit }) => {
  const [form, setForm] = React.useState({ name: "", email: "", practice: "" });
  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }));
  const submit = e => {
    e.preventDefault();
    onSubmit(form);
  };
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="eyebrow" style={{ marginBottom: 14 }}>Coherence SEED · cohort 01</div>
        <h3>RSVP to the next info event.</h3>
        <p>
          A short note about your practice helps us host a better
          conversation. We'll send the calendar invite by email.
        </p>
        <form onSubmit={submit}>
          <div className="field">
            <label>Your name</label>
            <input value={form.name} onChange={set("name")} placeholder="How should we address you?" required />
          </div>
          <div className="field">
            <label>Email</label>
            <input type="email" value={form.email} onChange={set("email")} placeholder="you@somewhere.org" required />
          </div>
          <div className="field">
            <label>What are you currently practising?</label>
            <textarea rows="3" value={form.practice} onChange={set("practice")} placeholder="A sentence or two is plenty." />
          </div>
          <div className="modal-actions">
            <button type="submit" className="btn btn-primary">Send RSVP <i data-lucide="arrow-right"></i></button>
            <button type="button" className="btn btn-ghost" onClick={onClose}>Not now</button>
          </div>
        </form>
      </div>
    </div>
  );
};

Object.assign(window, { Seed, Invite, Process, Join, Footer, JoinModal });
