/* Coherence UI Kit · Hero
   Full-bleed signature gradient with logo, watermark, and a vertical wordmark. */

const Hero = ({ onPrimary, onSecondary }) => (
  <section className="hero">
    <img src="../../assets/coherence-logo.svg" className="hero-mark-watermark" alt="" aria-hidden="true" />
    <div className="hero-vertical">
      <span className="hero-vertical-text">The Coherence Company</span>
    </div>
    <Logo size={80} />
    <div className="hero-content">
      <h1 className="hero-h1 reveal">Coherent work,<br />by design.</h1>
      <p className="hero-sub reveal reveal-2">
        A small studio building quiet systems for teams that take their craft
        seriously. We work in long arcs and share what we learn.
      </p>
      <div className="hero-ctas reveal reveal-3">
        <Button variant="primary" onClick={onPrimary}>Start a project</Button>
        <Button variant="ghost" icon="arrow-right" onClick={onSecondary}>See recent work</Button>
      </div>
    </div>
  </section>
);

window.Hero = Hero;
