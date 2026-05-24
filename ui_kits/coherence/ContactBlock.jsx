/* Coherence UI Kit · ContactBlock */

const ContactBlock = ({ onSubmit }) => {
  const [form, setForm] = React.useState({ name: "", email: "", project: "" });
  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));
  const submit = (e) => {
    e.preventDefault();
    onSubmit && onSubmit(form);
    setForm({ name: "", email: "", project: "" });
  };
  return (
    <section className="contact" id="contact">
      <img src="../../assets/coherence-logo.svg" className="contact-mark" alt="" aria-hidden="true" />
      <div className="container contact-inner">
        <div>
          <Eyebrow>Get in touch</Eyebrow>
          <h2>Start a project,<br />or just a conversation.</h2>
          <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.6, color: "var(--ink-600)", maxWidth: 420, margin: "0 0 32px" }}>
            We reply to every note. If we're not the right fit, we'll usually
            know someone who is.
          </p>
          <div style={{ display: "flex", gap: 24, alignItems: "center", color: "var(--ink-700)", fontSize: 14, fontWeight: 300 }}>
            <span style={{ display:"inline-flex", alignItems:"center", gap:8 }}>
              <i data-lucide="mail" style={{ width:16, height:16 }}></i>
              hello@coherence.co
            </span>
            <span style={{ display:"inline-flex", alignItems:"center", gap:8 }}>
              <i data-lucide="map-pin" style={{ width:16, height:16 }}></i>
              Stockholm · Lisbon
            </span>
          </div>
        </div>
        <form onSubmit={submit}>
          <Field label="Name" name="name" value={form.name} onChange={set("name")} placeholder="Your name" />
          <Field label="Email" name="email" type="email" value={form.email} onChange={set("email")} placeholder="you@studio.co" />
          <Field label="What are you working on?" name="project" multiline value={form.project} onChange={set("project")} placeholder="A sentence or two is plenty." />
          <div style={{ marginTop: 8 }}>
            <Button type="submit" variant="accent" icon="arrow-right">Send</Button>
          </div>
        </form>
      </div>
    </section>
  );
};

window.ContactBlock = ContactBlock;
