/* Living Intelligence · component kit
   The Camp Audax page devices (page-camp.jsx) that Living Intelligence adjusts, kept as LI-prefixed
   copies so the camp page stays exactly as it is. Every other Camp* / cph* helper is shared
   with page-camp.jsx and used as is. */

/* A section title: the plain clause rises, the italic accent bleeds in
   out of focus and sharpens. Used on all six q-h1s and the closing h2,
   and deliberately never on the hero, which keeps the typewriter. */
const LICampInk = ({ as: Tag = 'h1', className = '', children, ...rest }) => {
  const ref = useCampReveal((el) => {
    cphWrapWords(el, 'cph-ink-plain', cphInkPick);
    // read through the title: plain words follow one another, the accent settles after them
    let plain = 0, accent = 0;
    el.querySelectorAll('.cph-ink-plain, .cph-ink-em').forEach((w) => {
      w.style.transitionDelay = w.classList.contains('cph-ink-em')
        ? `${260 + Math.min(accent++, 14) * 55}ms`
        : `${Math.min(plain++, 14) * 38}ms`;
    });
  });
  return <Tag ref={ref} className={`cph-ink${className ? ' ' + className : ''}`} {...rest}>{children}</Tag>;
};

const LICampBand = ({ shot, kicker, label, rate = 0.16, tear, tearTop, tearGround, tearGroundTop, cta, featured }) => {
  const band = React.useRef(null);
  const art = React.useRef(null);

  React.useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let ticking = false;
    const frame = () => {
      ticking = false;
      const el = band.current, a = art.current;
      if (!el || !a) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      if (r.bottom < -200 || r.top > vh + 200) return;
      // -1 below the fold → 1 above it
      const p = ((r.top + r.height / 2) - vh / 2) / (vh / 2 + r.height / 2);
      a.style.transform = `translate3d(0,${(p * rate * r.height).toFixed(1)}px,0)`;
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(frame); } };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    frame();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [rate]);

  return (
    <div className={`cph-band${featured ? ' li-band-feature' : ''}`} ref={band}>
      <div className="cph-band-art" ref={art} style={{ backgroundImage: `url(${CPH(shot)})` }}></div>
      <div className="cph-veil cph-band-veil"></div>
      {tearTop && <CampTear image={tearTop} edge="top" ground={tearGroundTop} flip />}
      {tear && <CampTear image={tear} edge="bottom" ground={tearGround} />}
      <div className="cph-band-inner">
        <div className="cph-band-kicker">{kicker}</div>
        <div className="cph-band-label">{label}</div>
        {cta && (
          <a className="btn btn-join btn-lg li-band-cta" href={cta.href} target="_blank" rel="noreferrer">
            <span>{cta.label}</span><i data-lucide="arrow-right"></i>
          </a>
        )}
      </div>
    </div>
  );
};

/* ─── Pattern 04 · sticky diptych ────────────────────────────────────────
   One image pinned while the movements scroll past it. */
const LICampDiptych = ({ items, label = 'Example', compact }) => {
  const [active, setActive] = React.useState(0);
  const steps = React.useRef([]);

  React.useEffect(() => {
    const els = steps.current.filter(Boolean);
    if (!els.length || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) setActive(els.indexOf(e.target));
      });
    }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [items]);

  /* Continuous focus on top of the discrete `active` above. The observer
     picks which photograph shows — a step change, correctly. The type
     wants the opposite: --near falls off smoothly with each step's
     distance from the read line, so titles grow and recede as the reader
     scrolls rather than snapping between two opacities. The .on class
     stays as the reduced-motion and no-JS fallback, which is why
     .cph-focus is only added when this driver is actually running. */
  const col = React.useRef(null);
  React.useEffect(() => {
    const els = steps.current.filter(Boolean);
    if (!els.length || cphReduced()) return undefined;
    if (col.current) col.current.classList.add('cph-focus');
    return cphAddTick(() => {
      const vh = window.innerHeight || 1;
      const line = vh * 0.5;
      els.forEach((el) => {
        const r = el.getBoundingClientRect();
        const d = Math.abs((r.top + r.height / 2) - line) / (vh * 0.45);
        el.style.setProperty('--near', cphClamp(1 - d).toFixed(3));
      });
    });
  }, [items]);

  return (
    <div className="cph-dip-grid">
      <div className="cph-dip-media">
        {items.map((m, n) => (
          <div
            key={m.n}
            className={`cph-shot${n === active ? ' on' : ''}`}
            style={{ backgroundImage: `url(${CPH(m.shot)})` }}
            role="img"
            aria-label={`${label} ${m.n} - ${m.title}`}
          />
        ))}
      </div>
      <div className={`cph-steps${compact ? ' li-q-steps' : ''}`} ref={col}>
        {items.map((m, n) => (
          <div
            key={m.n}
            ref={el => { steps.current[n] = el; }}
            className={`cph-step${n === active ? ' on' : ''}`}
          >
            <div className="n">{label} {m.n}</div>
            <h4>{m.title}</h4>
            {m.body && <p>{m.body}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

const LICampSignposts = ({ active, onJump }) => {
  const [open, setOpen] = React.useState(false);
  const jumpAndClose = (id) => { onJump(id); setOpen(false); };

  return (
    <>
      <nav className="cph-signposts" aria-label="Jump to a section">
        <div className="cph-sp-posts">
          <div className="cph-sp-rope"></div>
          {LI_SECTIONS.map(s => (
            <button
              key={s.id}
              className={`cph-sp-post${active === s.id ? ' active' : ''}`}
              onClick={() => onJump(s.id)}
              type="button"
              aria-label={`Jump to ${s.label}`}
              aria-current={active === s.id ? 'true' : undefined}
            >
              <span className="cph-sp-badge">{s.icon}</span>
              <span className="cph-sp-tag">
                <span className="mile">{s.mile}</span>
                <span className="lab">{s.label}</span>
              </span>
            </button>
          ))}
        </div>
      </nav>

      <button
        className={`cph-sp-burger${open ? ' open' : ''}`}
        type="button"
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close section menu' : 'Open section menu'}
        aria-expanded={open}
      >
        <span></span><span></span><span></span>
      </button>

      <div className={`cph-sp-scrim${open ? ' show' : ''}`} onClick={() => setOpen(false)}></div>
      <aside className={`cph-sp-drawer${open ? ' open' : ''}`} aria-hidden={!open}>
        <div className="cph-sp-drawer-head">
          <span className="kicker">Living Intelligence</span>
          <button className="cph-sp-drawer-close" type="button" onClick={() => setOpen(false)} aria-label="Close menu">✕</button>
        </div>
        <div className="cph-sp-drawer-list">
          {LI_SECTIONS.map(s => (
            <button
              key={s.id}
              className={`cph-sp-drawer-it${active === s.id ? ' active' : ''}`}
              onClick={() => jumpAndClose(s.id)}
              type="button"
              aria-current={active === s.id ? 'true' : undefined}
            >
              <span className="icon">{s.icon}</span>
              <span className="meta">
                <span className="lab">{s.label}</span>
                <span className="mile">{s.mile}</span>
              </span>
            </button>
          ))}
        </div>
        <div className="cph-sp-drawer-foot">
          <button className="cph-sp-drawer-cta" type="button" onClick={() => window.open(LI_JOIN_URL, '_blank')}>
            {LI_CTA}
          </button>
        </div>
      </aside>
    </>
  );
};

const LICampWhyCome = ({ items }) => {
  const [paused, setPaused] = React.useState(false);
  const chip = (dup) => items.map(([title], i) => (
    <span className="cph-why-chip" key={(dup ? 'b' : 'a') + title}>
      <span className="n">{String(i + 1).padStart(2, '0')}</span>
      <span className="t">{title}</span>
    </span>
  ));
  // the three that answer "what is this, where is it, what do I leave with"
  const glosses = [0, 2, 5].map(i => items[i]).filter(Boolean);

  return (
    <section className="section-tight cph-why-sec">
      <div className="container cph-why-head">
        <CampKicker bottom={20}>The big ideas &middot; {items.length} threads to hold</CampKicker>
        <button
          type="button"
          className="cph-why-pause"
          onClick={() => setPaused(p => !p)}
          aria-pressed={paused}
        >{paused ? 'Play' : 'Pause'}</button>
      </div>
      <div className={`cph-why-ribbon${paused ? ' paused' : ''}`}>
        <div className="cph-why-track">
          {chip(false)}
          <span aria-hidden="true" style={{ display: 'contents' }}>{chip(true)}</span>
        </div>
      </div>
      <div className="container">
        <div className="cph-why-glosses">
          {glosses.map(([title, gloss]) => <p key={title}>{gloss}</p>)}
        </div>
      </div>
    </section>
  );
};

const LICampPersonaSlider = ({ profiles }) => {
  const [active, setActive] = React.useState(0);
  const [autoplay, setAutoplay] = React.useState(true);
  const [fill, setFill] = React.useState(false);
  const AUTOPLAY_MS = 6000;

  React.useEffect(() => {
    if (!autoplay || cphReduced()) return;
    const t = setInterval(() => setActive(a => (a + 1) % profiles.length), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [autoplay, profiles.length]);

  React.useEffect(() => {
    setFill(false);
    if (!autoplay || cphReduced()) return;
    const raf = requestAnimationFrame(() => setFill(true));
    return () => cancelAnimationFrame(raf);
  }, [active, autoplay]);

  const goTo = (i) => { setActive(i); setAutoplay(false); };
  const p = profiles[active];

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28, flexWrap: 'wrap' }}>
        <button
          type="button" onClick={() => goTo((active - 1 + profiles.length) % profiles.length)}
          aria-label="Previous"
          style={{
            width: 34, height: 34, borderRadius: '50%', flexShrink: 0,
            border: '1px solid var(--forest-200)', background: 'var(--surface-white)',
            color: 'var(--forest-700)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
          }}
        ><i data-lucide="chevron-left" style={{ width: 16, height: 16 }}></i></button>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', flex: 1 }}>
          {profiles.map((pr, i) => (
            <button
              key={pr.n} type="button" onClick={() => goTo(i)}
              aria-current={i === active ? 'true' : undefined}
              style={{
                padding: '8px 16px', borderRadius: 999, cursor: 'pointer',
                fontSize: 13, fontWeight: 500, fontFamily: 'var(--font-sans)',
                border: i === active ? '1px solid var(--forest-700)' : '1px solid var(--border-1)',
                background: i === active ? 'var(--forest-700)' : 'var(--surface-white)',
                color: i === active ? '#fff' : 'var(--ink-700)',
                position: 'relative', overflow: 'hidden'
              }}
            >
              {i === active && (
                <span
                  key={`${active}-${autoplay}`}
                  style={{
                    position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.22)',
                    transformOrigin: 'left', transform: `scaleX(${fill ? 1 : 0})`,
                    transition: fill ? `transform ${AUTOPLAY_MS}ms linear` : 'none'
                  }}
                  aria-hidden="true"
                />
              )}
              <span style={{ position: 'relative' }}>{pr.name}</span>
            </button>
          ))}
        </div>

        <button
          type="button" onClick={() => goTo((active + 1) % profiles.length)}
          aria-label="Next"
          style={{
            width: 34, height: 34, borderRadius: '50%', flexShrink: 0,
            border: '1px solid var(--forest-200)', background: 'var(--surface-white)',
            color: 'var(--forest-700)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
          }}
        ><i data-lucide="chevron-right" style={{ width: 16, height: 16 }}></i></button>
      </div>

      <div style={{
        background: 'var(--forest-050)', border: '1px solid var(--forest-200)',
        borderRadius: 20, padding: 'clamp(28px, 3.5vw, 44px)'
      }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--forest-700)', marginBottom: 10 }}>
          {p.n} of {profiles.length}
        </div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 400, letterSpacing: '-0.02em', color: 'var(--ink-900)', margin: '0 0 20px' }}>
          {p.name}
        </h3>

        <p style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(19px, 2.2vw, 25px)', fontWeight: 400,
          letterSpacing: '-0.01em', lineHeight: 1.35, fontStyle: 'italic',
          color: 'var(--forest-900)', margin: '0 0 32px', maxWidth: 640
        }}>
          {p.benefit}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 32 }}>
          <div>
            <h6 style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-500)', margin: '0 0 8px' }}>What it holds</h6>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.6, color: 'var(--ink-700)', margin: 0 }}>{p.working}</p>
          </div>
          <div>
            <h6 style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-500)', margin: '0 0 8px' }}>Candidate properties</h6>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              {p.brings.map(x => (
                <li key={x} style={{ fontSize: 14, fontWeight: 300, color: 'var(--ink-800)', padding: '3px 0' }}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
        {p.blind && (
          <div style={{ marginTop: 28, paddingTop: 20, borderTop: '1px dashed var(--forest-200)' }}>
            <h6 style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-500)', margin: '0 0 8px' }}>What it needs the others to show</h6>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.6, color: 'var(--forest-800)', margin: 0, maxWidth: 640 }}>{p.blind}</p>
          </div>
        )}
      </div>
    </div>
  );
};

Object.assign(window, { LICampInk, LICampBand, LICampDiptych, LICampSignposts, LICampWhyCome, LICampPersonaSlider });
