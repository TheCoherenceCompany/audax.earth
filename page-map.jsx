/* Audax OS site · The Map — the overview page.

   Holds the "What" half of what used to be the Why page: what changed, what
   remote and fractional work revealed, what became load-bearing, and what
   Audax OS proposes in response. Why? keeps the argument; this page holds the
   territory.

   Every section here was moved verbatim from page-why.jsx — same copy, same
   components, renumbered only. The Spheres / Layers / Modes pages are the
   pieces of this map and are untouched; section 06 hands off to them.

   `Section` is already declared in page-why.jsx and all .jsx files share one
   global scope, so the equivalent here is MapSection. */

const MapSection = ({ n, q, children, bg, narrow }) => (
  <section className="section" style={bg ? { background: bg } : null}>
    <div className={narrow ? 'container-narrow' : 'container'}>
      <h1 className="q-h1">
        <span className="num">{n}</span>
        <span dangerouslySetInnerHTML={{ __html: q }}></span>
      </h1>
      <div className="q-body">{children}</div>
    </div>
  </section>
);

const PageMap = ({ onNav }) => (
  <>
    {/* ─── HERO ─────────────────────────────────────────────────────────── */}
    <section className="section" style={{ paddingBottom: 32 }}>
      <div className="container">
        <Eyebrow>The map</Eyebrow>
        <h1 className="display lg" style={{ maxWidth: 900 }}>
          What Audax OS <em>is mapping</em>
        </h1>
        <p className="lede" style={{ maxWidth: 730, marginTop: 18 }}>
          The shifts that changed how organisations work, what they made load-bearing, and the
          architecture Audax OS proposes in response.
        </p>
        <p className="lede" style={{ maxWidth: 730, marginTop: 14, fontStyle: 'italic' }}>
          The Spheres, the Layers and the Modes are the pieces of this map.
        </p>
      </div>
    </section>

    {/* ─── 01 · THE CORE SHIFT ──────────────────────────────────────────── */}
    <section className="section manifesto">
      <div className="container">
        <h1 className="q-h1">
          <span className="num">01 · The core shift</span>
          What <em>changed?</em>
        </h1>
        <div className="q-body" style={{ maxWidth: 760 }}>
          <p>For most of the modern era, organisations were designed around one question. That question belonged to a world of factories, offices, departments, reporting lines, job descriptions, and managers who could see whether someone was at their desk.</p>
          <p>The question no longer fits.</p>
        </div>

        <div className="shift-block">
          <div className="shift-card then">
            <div className="label">Then</div>
            <p className="q">How do we manage <em>people?</em></p>
          </div>
          <div className="shift-card now">
            <div className="label now-label">Now</div>
            <p className="q">How do humans and AI agents <em>coordinate</em> around purpose, contribution, trust, learning, communication, and value?</p>
          </div>
        </div>

        <div className="q-body" style={{ maxWidth: 760 }}>
          <p>This is not a tools question. It is an operating system question. <strong>The organisation itself has become the design challenge.</strong></p>
        </div>
      </div>
    </section>

    <WashRule image={ART.wave} from="white" to="parchment" />

    {/* ─── 02 · REMOTE WORK ─────────────────────────────────────────────── */}
    <MapSection n="02 · Remote work" q="What did <em>remote work</em> reveal?" bg="var(--surface-paper)" narrow>
      <p className="lead">Remote work did not fail. <em>Underdesigned organisations</em> failed remote work.</p>
      <p>When work moved online, many organisations treated the shift as technical. Move meetings to Zoom. Move chat to Slack. Move documents to the cloud. Give everyone a laptop. Call it transformation.</p>
      <p>But the office had been doing invisible organisational work. It carried ambient context. It made availability visible. It created informal learning. It allowed casual trust-building. It helped people overhear priorities, notice tension, and ask small questions before they became large problems.</p>
      <p>Distributed work removed that hidden coordination layer.</p>
      <p>Without redesign, context fragments. Trust thins. New people struggle to orient. Work becomes invisible. Managers panic. The calendar mutates into a swamp creature.</p>
      <PullQuote>Distributed work requires <em>organisational design</em>, not just better tools.</PullQuote>
      <p>Remote work was the first crack in the old operating system.</p>
    </MapSection>

    <WashRule image={ART.spray} flip from="paper" to="parchment" />

    {/* ─── 03 · FRACTIONAL WORK ─────────────────────────────────────────── */}
    <MapSection n="03 · Fractional work" q="What happens when contribution <em>no longer fits</em> a job description?">
      <ArtAside image={ART.orbScript} flip>
        <p>The old bargain was simple enough: a person has a job. The job has a role. The role has a salary. The salary implies contribution. Imperfect, but stable.</p>
        <p className="lead"><em>Fractional work</em> breaks that container.</p>
        <p>Someone may contribute ten hours one week and none the next. Another person may make one introduction that changes the future of the organisation. Someone else may offer early product thinking, design, facilitation, writing, capital, reputation, emotional labour, or strategic advice before cash exists.</p>
      </ArtAside>
      <p>The old system struggles to see this. If contribution is invisible, trust becomes fragile. If risk is not acknowledged, resentment waits patiently in the basement. If value is only recognised through salary or equity, entire forms of contribution disappear.</p>

      <div className="insight-grid" style={{ margin: '40px 0', gridTemplateColumns: 'repeat(5, 1fr)' }}>
        {[
          ['Visibility', 'Contribution must become visible.'],
          ['Value', 'Value must include more than hours.'],
          ['Risk', 'Early contribution needs recognition.'],
          ['Provenance', 'Agent-assisted work needs attribution.'],
          ['Fairness', 'Fairness must be designed before money arrives.']
        ].map(([h, p]) => (
          <article key={h} className="insight-card" style={{ minHeight: 200, padding: '24px 22px' }}>
            <div className="num" style={{ fontSize: 14, fontFamily: 'var(--font-mono)', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--forest-700)', marginBottom: 16 }}>{h}</div>
            <h4 style={{ fontSize: 17, lineHeight: 1.25 }}>{p}</h4>
          </article>
        ))}
      </div>

      <p>Future organisations need better ways to recognise contribution without reducing people to metrics. Goodwill is beautiful. <strong>It is not an accounting system.</strong></p>
    </MapSection>

    {/* ─── 04 · THE HUMAN LAYER ─────────────────────────────────────────── */}
    <MapSection n="04 · The human layer" q="What becomes <em>load-bearing</em> now?" bg="var(--surface-paper)" narrow>
      <p>Many organisations treat the human layer as decoration. Culture is an offsite. Purpose is a slide. Learning is a benefit. Communication is a channel. Trust is assumed until it breaks.</p>
      <p>That no longer works.</p>
      <p className="lead">In distributed, fractional, AI-native organisations, the human layer must <em>become part of the operating system.</em></p>
      <p>People need to understand why they are here, what they can commit to, how decisions are made, how conflict is handled, how contribution is recognised, and how they can grow through the work.</p>
      <p>Agents need something parallel. If agents are going to act with increasing autonomy, they need more than tasks. They need values, tone, boundaries, permissions, purpose, and escalation rules.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12, margin: '40px 0' }}>
        {[
          ['Purpose', 'must become operational.'],
          ['Trust', 'must become visible.'],
          ['Learning', 'must become continuous.'],
          ['Communication', 'must become intentional.'],
          ['Contribution', 'must become recognised.']
        ].map(([k, v]) => (
          <div key={k} style={{
            padding: '20px 22px',
            background: 'var(--surface-white)',
            border: '1px solid var(--border-1)',
            borderRadius: 12,
            fontFamily: 'var(--font-display)',
            fontSize: 22, fontWeight: 400, letterSpacing: '-0.015em',
            color: 'var(--ink-900)', lineHeight: 1.2
          }}>
            <em style={{ color: 'var(--forest-700)', fontStyle: 'italic' }}>{k}</em> {v}
          </div>
        ))}
      </div>

      <p>This is not about making organisations softer. <strong>It is about making them more alive and more capable.</strong></p>

      <PullQuote>A humane organisation is not a loose one. It is a <em>coherent</em> one.</PullQuote>
    </MapSection>

    <WashRule image={ART.crest} from="paper" to="parchment" />

    {/* ─── 05 · LIVING SYSTEMS ──────────────────────────────────────────── */}
    <MapSection n="05 · Living systems" q="What if the organisation is <em>not a machine?</em>">
      <p>The machine metaphor shaped modern management. Break work into parts. Optimise each part. Control the process. Measure output. Reduce variance. Scale the machine.</p>
      <p>This logic created enormous productivity. It also created silos, bureaucracy, extraction, burnout, and organisations that struggle to adapt when the environment changes.</p>
      <p className="lead">Living systems <em>work differently.</em></p>

      <div className="machine-living">
        <div className="ml-side ml-machine">
          <h6>Machine</h6>
          <h4>Boxes, lines, control.</h4>
          <div className="boxes">
            {Array.from({ length: 9 }).map((_, i) => <div key={i}></div>)}
          </div>
        </div>
        <div className="ml-arrow">→</div>
        <div className="ml-side ml-living">
          <h6>Living</h6>
          <h4>Sense, adapt, regenerate.</h4>
          <svg viewBox="0 0 260 160" style={{ width: '100%', height: 160 }}>
            <g stroke="#6BA37C" strokeWidth="1" opacity="0.6" fill="none">
              {[[60, 80], [130, 50], [200, 80], [100, 120], [170, 120]].map(([x1, y1], i, arr) =>
                arr.slice(i + 1).map(([x2, y2], j) => <line key={`${i}-${j}`} x1={x1} y1={y1} x2={x2} y2={y2} />)
              )}
            </g>
            {[[60, 80], [130, 50], [200, 80], [100, 120], [170, 120]].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r={i === 1 ? 8 : 6} fill={i === 1 ? '#B8C766' : '#1F4D2E'} />
            ))}
          </svg>
        </div>
      </div>

      <p>Living systems sense, adapt, learn, regenerate, organise through relationship, and maintain coherence without requiring total control.</p>
      <p>Audax OS does not reject structure. Structure is essential. But the structure must <strong>serve life, learning, trust, contribution, and intelligent action.</strong></p>
      <p>The future organisation cannot be a machine with a chatbot bolted on. It must become a living coordination system where humans and agents can sense, decide, act, learn, and evolve together.</p>

      <PullQuote>Bureaucracy is structure <em>without life.</em> Audax OS is structure <em>in service of life.</em></PullQuote>
    </MapSection>

    <WashRule image={ART.burst} from="parchment" to="parchment" />

    {/* ─── 06 · THE PROPOSAL — and the pieces of the map ────────────────── */}
    <section className="section">
      <div className="container">
        <h1 className="q-h1">
          <span className="num">06 · The proposal</span>
          What does Audax OS <em>propose?</em>
        </h1>
        <div className="q-body" style={{ maxWidth: 760, marginBottom: 32 }}>
          <p>Audax OS proposes a shared architecture for coherent human-agent organisations. It brings together three dimensions of the next organisational operating system.</p>
        </div>

        <div className="fr-reveal">
          <div className="fr-axes">
            <div className="fr-axis">
              <SpheresColDiagram />
              <div className="ax-num">5</div>
              <h4>Spheres</h4>
              <div className="meta">What every organisation must care for</div>
              <ul>
                <li>Value Accounting</li>
                <li>Organisation of Work</li>
                <li>Human Relationship &amp; Purpose</li>
                <li>Development &amp; Learning</li>
                <li>Communication</li>
              </ul>
              <Button variant="ghost" icon="arrow-right" onClick={() => onNav('spheres')}>Open the Spheres</Button>
            </div>
            <div className="fr-axis">
              <LayersColDiagram />
              <div className="ax-num">5</div>
              <h4>Layers</h4>
              <div className="meta">Where the operating system works</div>
              <ul>
                <li>Individual</li>
                <li>Team</li>
                <li>Organisation</li>
                <li>Organisation Family</li>
                <li>Ecosystem</li>
              </ul>
              <Button variant="ghost" icon="arrow-right" onClick={() => onNav('layers')}>Open the Layers</Button>
            </div>
            <div className="fr-axis">
              <ModesColDiagram />
              <div className="ax-num">3</div>
              <h4>Modes</h4>
              <div className="meta">How collaboration happens</div>
              <ul>
                <li>Human &harr; Human</li>
                <li>Human &harr; Agent</li>
                <li>Agent &harr; Agent</li>
              </ul>
              <Button variant="ghost" icon="arrow-right" onClick={() => onNav('modes')}>Open the Modes</Button>
            </div>
          </div>
        </div>

        <div className="q-body" style={{ maxWidth: 760, marginTop: 40 }}>
          <p>Together, these create a <strong>living matrix</strong> for designing organisations that can coordinate contribution, work, trust, learning, communication, and value across human and agentic systems.</p>
          <p>Each is a piece of the map, and each is still being drawn.</p>
        </div>
      </div>
    </section>

    {/* ─── CLOSE ────────────────────────────────────────────────────────── */}
    <CtaBand
      title="This is an invitation to a<br /><em>shared inquiry</em>."
      body="We have starting questions rather than finished answers. We know this area matters, and we know it needs the best people and organisations in the world working on it."
      primary="Join the inquiry"
      secondary="Who is this for?"
      onPrimary={() => onNav('build')}
      onSecondary={() => onNav('whofor')}
    />
  </>
);

window.PageMap = PageMap;
