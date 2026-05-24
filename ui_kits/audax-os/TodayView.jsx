/* Audax OS kit · TodayView
   The default landing: a calm greeting over a sumi-e wash, the threads
   you held open yesterday, and the circles waiting for you. */

const BANNER_URL = '../../assets/backgrounds/The_Gathering_httpss.mj.runLwdlSY4QCLA_abstract_horizontal_in_3741fb5e-98d9-4e2e-9d21-50390f539a13_1.png';

const THREADS = [
  {
    id: 'practice-review',
    eyebrow: 'Practice · review',
    dotLichen: true,
    title: 'The shape of practice review',
    dek: 'Iris is holding three pieces of evidence and one open question. About 8 minutes if we sit with it.',
    who: [{ name: 'M' }, { name: 'I', agent: true }]
  },
  {
    id: 'field-notes',
    eyebrow: 'Field Notes · brief',
    title: 'Brief for the next field cycle',
    dek: 'A draft from Tova, with two paragraphs the agent has flagged as still soft.',
    who: [{ name: 'T' }, { name: 'M' }, { name: 'I', agent: true }]
  },
  {
    id: 'steward-meeting',
    eyebrow: 'Stewards · meeting',
    title: 'Wednesday’s steward meeting',
    dek: 'Agenda is closed. The agent has woven the previous minutes into a one-page read.',
    who: [{ name: 'M' }, { name: 'A' }, { name: 'K' }, { name: 'I', agent: true }]
  },
  {
    id: 'governance-thread',
    eyebrow: 'Governance · long arc',
    title: 'On how the network holds its weight',
    dek: 'A long thread; you marked it to sit with. The agent has not added anything since.',
    who: [{ name: 'M' }, { name: 'K' }]
  }
];

const TodayView = ({ circles, onOpenCircle }) => (
  <div className="today">
    <section className="today-banner" style={{ '--banner-image': `url(${BANNER_URL})` }}>
      <div className="wash"></div>
      <div className="fade"></div>
      <div className="today-content">
        <div className="today-eyebrow">Tuesday · 22 April</div>
        <h1 className="today-greet">
          good morning,<br />
          <em>mira.</em>
        </h1>
        <p className="today-sub">
          you held three threads open yesterday and one is waiting. iris is in the rail when you’re ready — no need to start there.
        </p>
      </div>
    </section>

    <div className="section-head">
      <div>
        <div className="section-eyebrow">Held open</div>
        <h2 className="section-h2">Threads you were sitting with.</h2>
      </div>
      <a href="#" className="section-link" onClick={(e)=>e.preventDefault()}>
        See all <i data-lucide="arrow-up-right"></i>
      </a>
    </div>
    <div className="threads">
      {THREADS.map((t, i) => (
        <article key={t.id} className={`thread`}>
          <div className="thread-meta">
            <span className={`dot${t.dotLichen ? ' lichen' : ''}`}></span>
            <span>{t.eyebrow}</span>
          </div>
          <h3 className="thread-title">{t.title}</h3>
          <p className="thread-dek">{t.dek}</p>
          <div className="thread-foot">
            <Who people={t.who} />
            <span style={{ marginLeft: 'auto' }}>{t.dotLichen ? 'now' : 'held'}</span>
          </div>
        </article>
      ))}
    </div>

    <div className="section-head">
      <div>
        <div className="section-eyebrow">Your circles</div>
        <h2 className="section-h2">Where work is being held.</h2>
      </div>
      <a href="#" className="section-link" onClick={(e)=>{e.preventDefault(); onOpenCircle();}}>
        Open Circles view <i data-lucide="arrow-right"></i>
      </a>
    </div>
    <div className="circles">
      {circles.map((c) => (
        <div key={c.id} className="circle-row" onClick={onOpenCircle}>
          <div className={`circle-glyph${c.lichen ? ' lichen' : ''}`}>
            <img src={c.art} alt="" />
          </div>
          <div>
            <h4 className="circle-name">{c.name}</h4>
            <div className="circle-meta">{c.humans} humans &middot; {c.agents} agents &middot; {c.met}</div>
          </div>
          <div className="pulse-strip" title="this week">
            {c.pulse.map((p, i) => (
              <i key={i} className={p === 'now' ? 'now' : p === 'on' ? 'on' : ''}></i>
            ))}
          </div>
          <a href="#" className="circle-cta" onClick={(e)=>e.preventDefault()}>
            Enter <i data-lucide="arrow-right"></i>
          </a>
        </div>
      ))}
    </div>
  </div>
);

window.TodayView = TodayView;
