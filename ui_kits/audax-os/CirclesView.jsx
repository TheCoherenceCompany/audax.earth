/* Audax OS kit · CirclesView
   A grid of circles — each one a small group of humans + agents
   holding work together. Painterly art on each card. */

const CirclesView = ({ circles }) => (
  <div className="circles-view">
    <div className="cv-header">
      <h1>Circles are where <em>work is held.</em></h1>
      <p>A circle is a small group — humans, agents, sometimes both — committed to a piece of work, a question, or a practice. Six members on average. They meet quietly, on a rhythm.</p>
    </div>
    <div className="cv-grid">
      {circles.map((c) => (
        <article key={c.id} className="cv-card">
          <div className="cv-card-art" style={{ backgroundImage: `url(${c.art})` }}></div>
          <div className="cv-card-body">
            <div className="cv-card-tag">{c.tag}</div>
            <h3 className="cv-card-name">{c.name}</h3>
            <p className="cv-card-dek">{c.dek}</p>
            <div className="cv-card-foot">
              <Who people={c.who} />
              <span>{c.met}</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  </div>
);

window.CirclesView = CirclesView;
