/* Coherence UI Kit · JournalList */

const JOURNAL = [
  { date: "APR 22 · 2026", title: "On long arcs",            dek: "Why we count our client relationships in years, not deliverables." },
  { date: "MAR 14 · 2026", title: "Setting Noto Sans Light", dek: "Notes on a typeface that asks almost nothing of the reader." },
  { date: "FEB 02 · 2026", title: "Quiet systems",           dek: "A working definition, after seven years of trying to write one." },
  { date: "JAN 08 · 2026", title: "Less, again",             dek: "The third time we've redrawn our own identity. Probably not the last." }
];

const JournalList = () => (
  <section className="section journal" id="journal">
    <div className="container">
      <SectionOpener
        eyebrow="Journal"
        title="Things we wrote down."
        dek="Short essays, working notes, and the occasional book recommendation. About once a month."
      />
      <div className="journal-list">
        {JOURNAL.map((j) => (
          <a key={j.title} className="journal-item" href="#" onClick={(e) => e.preventDefault()}>
            <span className="journal-date">{j.date}</span>
            <div>
              <h4 className="journal-title">{j.title}</h4>
              <p className="journal-dek">{j.dek}</p>
            </div>
            <span className="journal-arrow"><i data-lucide="arrow-up-right"></i></span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

window.JournalList = JournalList;
