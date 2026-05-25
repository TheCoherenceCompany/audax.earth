/* Audax OS site · Join page */

const HERO_JOIN = 'assets/backgrounds/The_Gathering_httpss.mj.runLwdlSY4QCLA_abstract_horizontal_in_4a2611be-ea74-45f7-96c4-c3168455b410_3.png';

const ROLES = [
  'Organisation designer',
  'Agentic AI builder',
  'Collaboration tool builder',
  'Researcher',
  'Regenerative practitioner',
  'Founder / operator',
  'Strategic partner',
  'Other'
];

const PageJoin = () => {
  const [form, setForm] = React.useState({
    name: '', email: '', org: '', site: '',
    role: 'Organisation designer',
    question: '', contribute: '', work: '', other: ''
  });
  const [submitted, setSubmitted] = React.useState(false);
  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));
  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm({ ...form, name: '', email: '', org: '', site: '', question: '', contribute: '', work: '', other: '' });
  };

  return (
    <>
      <section className="hero-small" style={{ '--hero-image': `url(${HERO_JOIN})` }}>
        <div className="hero-wash"></div>
        <div className="hero-fade"></div>
        <div className="container">
          <div className="hero-inner reveal">
            <Eyebrow>Join</Eyebrow>
            <h1 className="display">
              Join the dialogue.<br /><em>Help shape</em> Audax OS.
            </h1>
            <p className="lede">
              We are convening organisation designers, agentic AI builders, and future-facing practitioners to explore the company OS needed for humans and agents working together.
            </p>
          </div>
        </div>
      </section>

      {/* THE FOUNDING QUESTION */}
      <section className="section">
        <div className="container-narrow">
          <Eyebrow>The founding question</Eyebrow>
          <h2 className="display" style={{ marginBottom: 48 }}>
            What organisational OS is <em>worthy</em><br />of humans and AI agents working together?
          </h2>
          <ol className="q-list">
            <li>How should humans and agents coordinate around purpose?</li>
            <li>How should contribution and value be recognised?</li>
            <li>How should agents participate without becoming supervisors?</li>
            <li>How should organisations learn continuously?</li>
            <li>How should multiple vendors build around a shared OS?</li>
            <li>What protocols are needed for human–human, human–agent, and agent–agent collaboration?</li>
            <li>How do we make humane organisations that still deliver?</li>
          </ol>
        </div>
      </section>

      {/* WAYS TO JOIN */}
      <section className="section" style={{ background: 'var(--surface-paper)' }}>
        <div className="container">
          <SectionHead
            eyebrow="Five ways"
            title="<em>Different</em> entries to the same field."
            sub="Pick the one that fits — or write your own in the form below."
          />
          <div className="join-grid">
            {[
              ['01', 'Join a dialogue', 'For people exploring the core question. Closed-room conversations with practitioners across the field.'],
              ['02', 'Contribute to the OS', 'For organisation designers, researchers, and practitioners shaping spheres, layers, and modes.'],
              ['03', 'Build an implementation', 'For AI builders, toolmakers, vendors, and open-source teams. Build with the OS. Ship something real.'],
              ['04', 'Bring a use case', 'For organisations experimenting with agentic, distributed, or fractional work. Be a case study.'],
              ['05', 'Strategic partner', 'For aligned organisations, labs, networks, and funders willing to steward the OS.']
            ].map(([n, h, p]) => (
              <article key={n} className="join-card">
                <div className="num">{n}</div>
                <h4>{h}</h4>
                <p>{p}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE'RE BUILDING */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Areas of contribution"
            title="What we are <em>building together.</em>"
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
            {[
              'Principles', 'Spheres', 'Layers', 'Modes',
              'Protocols', 'Diagnostics', 'Agent roles', 'Mission canvases',
              'Contribution ledgers', 'Case studies', 'Tool implementations', 'Field rituals'
            ].map((c, i) => (
              <div key={c} style={{
                padding: '24px 22px',
                background: i % 5 === 0 ? 'var(--forest-050)' : 'var(--surface-white)',
                border: '1px solid var(--border-1)',
                borderRadius: 12,
                fontFamily: 'var(--font-display)',
                fontSize: 18, fontWeight: 400, letterSpacing: '-0.015em',
                color: 'var(--ink-900)'
              }}>
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section className="section" style={{ background: 'var(--surface-paper)' }}>
        <div className="container-narrow">
          <Eyebrow>The form</Eyebrow>
          <h2 className="display" style={{ fontSize: 'clamp(36px, 4vw, 56px)', marginBottom: 16 }}>
            Tell us <em>what you carry.</em>
          </h2>
          <p className="body-p" style={{ marginBottom: 48, maxWidth: 560 }}>
            We read every application. Replies usually within a week. There is no scoring rubric, just a conversation.
          </p>
          <form onSubmit={submit} style={{ background: 'var(--surface-white)', border: '1px solid var(--border-1)', borderRadius: 16, padding: 40 }}>
            <div className="form-grid">
              <div className="field">
                <label>Name</label>
                <input value={form.name} onChange={set('name')} placeholder="Your name" />
              </div>
              <div className="field">
                <label>Email</label>
                <input type="email" value={form.email} onChange={set('email')} placeholder="you@org.com" />
              </div>
              <div className="field">
                <label>Organisation</label>
                <input value={form.org} onChange={set('org')} placeholder="Where you work / belong" />
              </div>
              <div className="field">
                <label>Website / LinkedIn</label>
                <input value={form.site} onChange={set('site')} placeholder="A link we should read" />
              </div>
              <div className="field full">
                <label>Which best describes you?</label>
                <div className="field-radios">
                  {ROLES.map(r => (
                    <label key={r} className={form.role === r ? 'checked' : ''}>
                      <input type="radio" name="role" checked={form.role === r} onChange={() => setForm(f => ({ ...f, role: r }))} />
                      <span>{r}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="field full">
                <label>What question are you carrying?</label>
                <textarea rows={3} value={form.question} onChange={set('question')} placeholder="Lorem ipsum dolor sit amet — the question that brought you to this page." />
              </div>
              <div className="field full">
                <label>How would you like to contribute?</label>
                <textarea rows={3} value={form.contribute} onChange={set('contribute')} placeholder="Dialogue, OS development, implementation, use case, partnership." />
              </div>
              <div className="field full">
                <label>What relevant work should we look at?</label>
                <textarea rows={2} value={form.work} onChange={set('work')} placeholder="Links, papers, prototypes, writing." />
              </div>
              <div className="field full">
                <label>Anything else?</label>
                <textarea rows={2} value={form.other} onChange={set('other')} placeholder="Optional. One thing you'd want us to know." />
              </div>
            </div>
            <div style={{ marginTop: 32, display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              <Button size="lg" icon="arrow-right" onClick={submit}>Join the Audax OS dialogue</Button>
              <span style={{ fontSize: 13, color: 'var(--ink-500)' }}>We reply to every application. Usually within a week.</span>
            </div>
          </form>
        </div>
      </section>

      {/* FINAL MANIFESTO CTA */}
      <section className="section" style={{ background: 'var(--bg-deep)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'var(--grad-deep)', opacity: 1, pointerEvents: 'none' }}></div>
        <div className="container-narrow" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <Eyebrow color="var(--lichen-300)">A closing statement</Eyebrow>
          <h2 className="display" style={{ color: '#fff', fontSize: 'clamp(40px, 5vw, 72px)', marginBottom: 32 }}>
            The old organisational OS is <em>creaking.</em>
          </h2>
          <p style={{ fontSize: 19, fontWeight: 300, lineHeight: 1.55, color: 'rgba(255,255,255,0.78)', maxWidth: 620, margin: '0 auto 40px' }}>
            The agentic age will not wait for perfect theory. We need to build the next OS through practice, dialogue, and serious experimentation.
          </p>
        </div>
      </section>

      {/* Submitted toast */}
      {submitted && (
        <div style={{
          position: 'fixed', bottom: 32, left: '50%', transform: 'translateX(-50%)',
          background: 'var(--ink-900)', color: '#fff',
          padding: '14px 22px', borderRadius: 999,
          fontSize: 14, fontWeight: 400,
          display: 'flex', alignItems: 'center', gap: 10,
          boxShadow: '0 8px 24px rgba(20,19,14,0.2)', zIndex: 200
        }}>
          <i data-lucide="check" style={{ width: 14, height: 14, color: 'var(--lichen-400)' }}></i>
          <span>Thank you. We'll be in touch.</span>
        </div>
      )}
    </>
  );
};

window.PageJoin = PageJoin;
