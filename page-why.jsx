/* Audax OS site · Why? page (homepage)
   13 question-led sections, manifesto + field guide.
   Source copy: client brief (Audax OS — Why Page Revised Draft). */

const HERO_WHY = 'assets/backgrounds/The_Gathering_httpss.mj.run4FR0A9JrbCs_horizontal_abstract_gr_a3a5ab50-ee9c-4167-ba9d-3c83591ce255_1.png';
const NODE_FIELD_BG = 'assets/accent-images/The_Gathering_httpss.mj.runC6iJti0L-5Q_abstract_horizontal_ca_89be8310-4193-4426-a643-b55ced9ca0f6_0.png';

const Section = ({ n, q, children, bg, narrow }) => (
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

// Simple "transition" hero illustration (rigid grid → living network)
const TransitionVisual = () => (
  <svg viewBox="0 0 760 220" style={{ width: '100%', maxWidth: 760, height: 'auto', display: 'block' }} aria-hidden="true">
    {/* Old: rigid grid */}
    <g transform="translate(40 30)" opacity="0.85">
      {[0,1,2,3].map(r => [0,1,2,3].map(c => (
        <rect key={`${r}-${c}`} x={c * 38} y={r * 38} width="28" height="28" rx="2" fill="#E3E0D6" stroke="#C9C6BD" strokeWidth="1" />
      )))}
      <text x="76" y="190" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#807D72" letterSpacing="0.22em">RIGID</text>
    </g>

    {/* Audax OS bridge: a vertical line of sigils */}
    <g transform="translate(280 0)">
      <line x1="100" y1="20" x2="100" y2="190" stroke="#1F4D2E" strokeWidth="0.8" strokeDasharray="2 4" />
      <g transform="translate(60 80) scale(0.5)">
        <circle cx="40" cy="40" r="38" fill="none" stroke="#1F4D2E" strokeWidth="3" />
        <ellipse cx="40" cy="42" rx="26" ry="14" fill="none" stroke="#1F4D2E" strokeWidth="3" />
        <circle cx="40" cy="42" r="6" fill="#1F4D2E" />
      </g>
      <text x="100" y="190" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#1F4D2E" fontWeight="500" letterSpacing="0.22em">AUDAX OS</text>
    </g>

    {/* New: living network */}
    <g transform="translate(500 30)">
      {(() => {
        const nodes = [
          [40, 30], [110, 50], [180, 30],
          [70, 90], [150, 100], [40, 140], [120, 140], [180, 120], [200, 80]
        ];
        return (
          <>
            <g stroke="#6BA37C" strokeWidth="1" opacity="0.6" fill="none">
              {nodes.map(([x1, y1], i) => nodes.slice(i + 1).map(([x2, y2], j) => {
                const d = Math.hypot(x2 - x1, y2 - y1);
                if (d > 70) return null;
                return <line key={`${i}-${j}`} x1={x1} y1={y1} x2={x2} y2={y2} />;
              }))}
            </g>
            {nodes.map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r={i === 4 ? 6 : 4} fill={i === 4 ? '#B8C766' : '#1F4D2E'} />
            ))}
          </>
        );
      })()}
      <text x="120" y="190" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#807D72" letterSpacing="0.22em">LIVING</text>
    </g>
  </svg>
);

// Living lab: one illuminated node in a wider field
const NodeFieldVisual = () => (
  <div className="node-field" style={{ background: `linear-gradient(180deg, var(--surface-paper) 0%, var(--surface-white) 100%)` }}>
    <svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <defs>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#B8C766" stopOpacity="0.55" />
          <stop offset="60%" stopColor="#B8C766" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#B8C766" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Glow under the illuminated node */}
      <circle cx="400" cy="225" r="160" fill="url(#glow)" />

      {/* Field of nodes */}
      {(() => {
        const cx = 400, cy = 225;
        const nodes = [];
        const rng = (a, b, k) => a + ((Math.sin(k * 12.9898 + 78.233) * 43758.5453) % 1 + 1) % 1 * (b - a);
        for (let i = 0; i < 60; i++) {
          const r = rng(80, 380, i);
          const a = rng(0, Math.PI * 2, i + 100);
          nodes.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r * 0.55, rng(1.5, 3.2, i + 200)]);
        }
        return (
          <>
            {/* threads */}
            <g stroke="#9CBFA3" strokeWidth="0.5" opacity="0.45" fill="none">
              {nodes.map(([x, y], i) => i % 3 === 0
                ? <line key={i} x1={cx} y1={cy} x2={x} y2={y} />
                : null
              )}
            </g>
            {/* outer nodes */}
            {nodes.map(([x, y, r], i) => (
              <circle key={i} cx={x} cy={y} r={r} fill="#1F4D2E" opacity="0.55" />
            ))}
          </>
        );
      })()}

      {/* Central illuminated node */}
      <g transform="translate(370 195)">
        <circle cx="30" cy="30" r="32" fill="#FFFFFF" stroke="#1F4D2E" strokeWidth="1.5" />
        <circle cx="30" cy="30" r="22" fill="none" stroke="#1F4D2E" strokeWidth="1" opacity="0.5" />
        <g transform="translate(8 8) scale(0.55)">
          <circle cx="40" cy="40" r="38" fill="none" stroke="#1F4D2E" strokeWidth="3" />
          <ellipse cx="40" cy="42" rx="26" ry="14" fill="none" stroke="#1F4D2E" strokeWidth="3" />
          <circle cx="40" cy="42" r="6" fill="#1F4D2E" />
        </g>
        <text x="30" y="86" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="0.22em" fill="#1F4D2E" fontWeight="500">FIRST LIVING LAB</text>
      </g>
    </svg>
  </div>
);

const PageWhy = ({ onNav }) => (
  <>
    {/* 1. HERO */}
    <section className="hero" style={{ '--hero-image': `url(${HERO_WHY})`, minHeight: '92vh', alignItems: 'center' }}>
      <div className="hero-wash"></div>
      <div className="hero-fade"></div>
      <div className="hero-vertical"><span>An open framework</span></div>
      <div className="container">
        <div className="hero-inner reveal" style={{ maxWidth: 880 }}>
          <Eyebrow>For the age of humans and agents</Eyebrow>
          <h1 className="display lg">
            What organisational OS<br />
            do we need for the <em>age of<br />humans and agents?</em>
          </h1>
          <p className="lede" style={{ maxWidth: 700, marginBottom: 16 }}>
            The way we organise work was built for a different world. Remote work exposed the cracks. Fractional work widened them. AI agents now make them impossible to ignore.
          </p>
          <p className="lede" style={{ maxWidth: 700, fontStyle: 'italic', color: 'var(--ink-800)', marginBottom: 40 }}>
            Audax OS is an open framework for designing organisations where humans and AI agents work together coherently — across individuals, teams, organisations, organisation families, and ecosystems.
          </p>
          <div className="hero-ctas">
            <Button size="lg" icon="arrow-right" onClick={() => window.open(JOIN_URL, '_blank')}>Join the dialogue</Button>
          </div>
          <div style={{ marginTop: 64, maxWidth: 760 }}>
            <TransitionVisual />
          </div>
        </div>
      </div>
    </section>

    {/* 2. THE CORE SHIFT */}
    <section className="section manifesto">
      <div className="container">
        <h1 className="q-h1">
          <span className="num">02 · The core shift</span>
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

    {/* 3. THE OLD MODEL */}
    <Section n="03 · The old model" q="Why can’t the old organisation hold <em>the new work?</em>">
      <p>Most organisations still carry industrial assumptions. Work is divided into functions. Roles are fixed. Authority flows downward. Information climbs upward. Managers coordinate through meetings, reporting lines, and supervision. People are expected to belong mostly to one organisation at a time.</p>
      <p>This model made sense when communication was slow, labour was physically concentrated, expertise was harder to access, and the organisation could be managed as a relatively stable machine.</p>
      <p>But the conditions have changed. People now collaborate across time zones, projects, companies, networks, and communities. Work forms and dissolves around missions. Contributors enter and leave at different levels of commitment. AI agents can now remember, draft, coordinate, analyse, and act.</p>
      <p className="lead">The old model is not simply inefficient. <em>It is misaligned</em> with the world now emerging.</p>

      <div className="contrast-grid" style={{ marginTop: 16 }}>
        <div className="contrast-col">
          <h6>Old organisation</h6>
          <h3>Designed for the office.</h3>
          <ul>
            <li>Fixed roles</li>
            <li>Full-time employment as default</li>
            <li>Office-based context</li>
            <li>Departmental silos</li>
            <li>Managerial supervision</li>
            <li>Tasks and reporting</li>
            <li>Culture as an HR function</li>
            <li>AI as a tool added later</li>
          </ul>
        </div>
        <div className="contrast-col">
          <h6>Emerging organisation</h6>
          <h3>Designed for living systems.</h3>
          <ul>
            <li>Fluid contribution</li>
            <li>Fractional participation</li>
            <li>Distributed context</li>
            <li>Mission-based cells</li>
            <li>Shared accountability</li>
            <li>Commitments and learning</li>
            <li>Trust as infrastructure</li>
            <li>AI agents as collaborators</li>
          </ul>
        </div>
      </div>
    </Section>

    {/* 4. REMOTE WORK */}
    <Section n="04 · Remote work" q="What did <em>remote work</em> reveal?" bg="var(--surface-paper)" narrow>
      <p className="lead">Remote work did not fail. <em>Underdesigned organisations</em> failed remote work.</p>
      <p>When work moved online, many organisations treated the shift as technical. Move meetings to Zoom. Move chat to Slack. Move documents to the cloud. Give everyone a laptop. Call it transformation.</p>
      <p>But the office had been doing invisible organisational work. It carried ambient context. It made availability visible. It created informal learning. It allowed casual trust-building. It helped people overhear priorities, notice tension, and ask small questions before they became large problems.</p>
      <p>Distributed work removed that hidden coordination layer.</p>
      <p>Without redesign, context fragments. Trust thins. New people struggle to orient. Work becomes invisible. Managers panic. The calendar mutates into a swamp creature.</p>
      <PullQuote>Distributed work requires <em>organisational design</em>, not just better tools.</PullQuote>
      <p>Remote work was the first crack in the old operating system.</p>
    </Section>

    {/* 5. FRACTIONAL WORK */}
    <Section n="05 · Fractional work" q="What happens when contribution <em>no longer fits</em> a job description?">
      <p>The old bargain was simple enough: a person has a job. The job has a role. The role has a salary. The salary implies contribution. Imperfect, but stable.</p>
      <p className="lead"><em>Fractional work</em> breaks that container.</p>
      <p>Someone may contribute ten hours one week and none the next. Another person may make one introduction that changes the future of the organisation. Someone else may offer early product thinking, design, facilitation, writing, capital, reputation, emotional labour, or strategic advice before cash exists.</p>
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
    </Section>

    {/* 6. AI AGENTS */}
    <Section n="06 · AI agents" q="Why do AI agents force <em>a complete rethink?</em>" bg="var(--surface-paper)">
      <p className="lead">AI is moving <em>from assistant to participant.</em></p>
      <p>Agents can research, draft, synthesise, schedule, translate, analyse, remember, coordinate, and support workflows. Soon they will participate more directly in missions, handoffs, decisions, communication, and organisational memory.</p>
      <p>But agents cannot work well inside fog. They need:</p>

      <div className="protocol-grid">
        {[
          ['Context', '01'], ['Permission', '02'], ['Memory', '03'],
          ['Feedback', '04'], ['Escalation', '05'], ['Human judgment', '06']
        ].map(([name, n]) => (
          <div key={name} className="protocol-chip">
            <div className="num">{n}</div>
            <div className="name">{name}</div>
          </div>
        ))}
      </div>

      <p>This is the deeper shift. AI agents do not remove the need for organisational design. <strong>They make organisational design unavoidable.</strong></p>
      <p>The same clarity that helps an agent work well also helps a human work well. If a mission is clear enough for an agent to support, it is clearer for a new contributor too. If a decision right is explicit enough for an agent, it is easier for the team to trust. If purpose is operational enough to guide an agent, it is finally useful to humans as more than a sentence on a wall.</p>

      <PullQuote>AI agents make visible the <em>organisational design debt</em> we have been carrying for decades.</PullQuote>

      <p>Designing for agents may force us to design better for humans.</p>
    </Section>

    {/* 7. THE COLLABORATION GAP */}
    <Section n="07 · The collaboration gap" q="Why do better tools still fail to create <em>better collaboration?</em>">
      <p>We can now communicate instantly across the planet. We can gather brilliant people into a call in days. We can generate documents, code, strategies, images, research, and plans at astonishing speed.</p>
      <p>And still, collaboration remains strangely difficult.</p>
      <p className="lead">Turning interest into trust is hard. Turning trust into commitment is harder. Turning commitment into <em>sustained action</em> is harder still.</p>
      <p>This is the paradox of our time:</p>

      <PullQuote>Technology scales faster than <em>coherence.</em></PullQuote>

      <p>AI amplifies individual capability. One person with the right tools can do what once required a team. But no AI tool can replace the trust, shared purpose, mutual commitment, and living coordination needed to do complex work together.</p>

      <div className="progression">
        <div className="progression-step">
          <div className="meta">Abundant</div>
          <h4>Communication</h4>
          <p>Slack, mail, calls. We have more of it than ever.</p>
        </div>
        <div className="progression-arrow">→</div>
        <div className="progression-step">
          <div className="meta">Expensive</div>
          <h4>Coordination</h4>
          <p>Still hand-rolled, project by project.</p>
        </div>
        <div className="progression-arrow">→</div>
        <div className="progression-step target">
          <div className="meta">Missing</div>
          <h4>Coherence</h4>
          <p>The shared grammar across humans and agents.</p>
        </div>
      </div>

      <p>The missing layer is not another app. It is a shared grammar for collaboration. <strong>Audax OS exists to help build that grammar</strong> for the age of humans and agents.</p>
    </Section>

    {/* 8. THE HUMAN LAYER */}
    <Section n="08 · The human layer" q="What becomes <em>load-bearing</em> now?" bg="var(--surface-paper)" narrow>
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
    </Section>

    {/* 9. LIVING SYSTEMS */}
    <Section n="09 · Living systems" q="What if the organisation is <em>not a machine?</em>">
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
    </Section>

    {/* 10. FRAMEWORK, NOT PRODUCT */}
    <Section n="10 · Framework, not product" q="Why should this be a <em>framework</em>, not a platform?" bg="var(--surface-paper)" narrow>
      <p>No single platform should own the organisational OS of the agentic age.</p>
      <p>Audax OS is not being designed as one closed product that every organisation must adopt. The ambition is different.</p>
      <p className="lead">Audax OS should become a <em>shared framework</em>: a language, architecture, and set of principles that many people can build with.</p>

      <ul style={{ listStyle: 'none', padding: 0, margin: '24px 0 32px' }}>
        {[
          'Organisation designers can use it.',
          'AI builders can extend it.',
          'Software vendors can implement it.',
          'Consultancies can develop practices around it.',
          'Communities can adapt it.',
          'Organisations can test it.',
          'Researchers can challenge it.'
        ].map(x => (
          <li key={x} style={{ padding: '12px 0', borderBottom: '1px solid var(--border-2)', fontSize: 17, fontWeight: 400, color: 'var(--ink-800)' }}>
            {x}
          </li>
        ))}
      </ul>

      <p>Like Agile, it should not belong to one company. It should become a common grammar for a field that is still forming. <strong>The question is too important to trap inside one product roadmap.</strong></p>

      <PullQuote>The goal is <em>interoperability</em>, not capture.</PullQuote>

      <p style={{ marginTop: 32, fontSize: 14, color: 'var(--ink-500)', fontWeight: 300, lineHeight: 1.6 }}>
        Audax OS should be: open enough to invite many contributors · structured enough to be useful · practical enough to implement · flexible enough to adapt · principled enough to protect human agency · technical enough for agentic systems · humane enough for real people.
      </p>
    </Section>

    {/* 11. THE AUDAX OS PROPOSAL */}
    <section className="section">
      <div className="container">
        <h1 className="q-h1">
          <span className="num">11 · The proposal</span>
          What does Audax OS <em>propose?</em>
        </h1>
        <div className="q-body" style={{ maxWidth: 760, marginBottom: 32 }}>
          <p>Audax OS proposes a shared architecture for coherent human-agent organisations. It brings together three dimensions of the next organisational operating system.</p>
        </div>

        <div className="fr-reveal">
          <MatrixDiagram />
          <div className="fr-axes">
            <div className="fr-axis">
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
            </div>
            <div className="fr-axis">
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
            </div>
            <div className="fr-axis">
              <div className="ax-num">3</div>
              <h4>Modes</h4>
              <div className="meta">How collaboration happens</div>
              <ul>
                <li>Human &harr; Human</li>
                <li>Human &harr; Agent</li>
                <li>Agent &harr; Agent</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="q-body" style={{ maxWidth: 760, marginTop: 40 }}>
          <p>Together, these create a <strong>living matrix</strong> for designing organisations that can coordinate contribution, work, trust, learning, communication, and value across human and agentic systems.</p>
        </div>
      </div>
    </section>

    {/* 12. THE FIRST LIVING LAB */}
    <Section n="12 · The first living lab" q="Where does this <em>begin?</em>" bg="var(--surface-paper)">
      <p className="lead">Audax OS is being developed through <em>practice</em>, not theory alone.</p>
      <p>The Coherence Company is the first organisation joining to develop, test, and evolve Audax OS in real organisational life. It will use the framework to structure its own work, contribution, learning, AI collaboration, and ecosystem development.</p>
      <p>This matters because the future organisational OS cannot be designed from a balcony. It must be tested inside real commitments, real tensions, real missions, real people, real agents, and real learning loops.</p>

      <div style={{ margin: '40px 0' }}>
        <NodeFieldVisual />
      </div>

      <p>The Coherence Company is not the owner of Audax OS. It is the first serious participant. <strong>The first testbed. The first steward. The first place where the framework learns from reality.</strong></p>

      <PullQuote>The organisation is not backstage. <em>It is part of the experiment.</em></PullQuote>
    </Section>

    {/* 13. INVITATION */}
    <section className="cta-band" style={{ '--cta-image': `url(${NODE_FIELD_BG})` }}>
      <div className="wash"></div>
      <div className="cta-band-inner">
        <Eyebrow color="var(--lichen-300)">13 · Invitation</Eyebrow>
        <h2>
          Will you help shape the<br />next <em>organisational OS?</em>
        </h2>
        <p style={{ maxWidth: 600 }}>
          We are inviting organisation designers, agentic AI builders, collaboration infrastructure makers, regenerative practitioners, future-of-work thinkers, and serious operators to join the founding dialogue.
        </p>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px, 2vw, 28px)', fontStyle: 'italic', letterSpacing: '-0.015em', color: 'var(--lichen-300)', maxWidth: 720, margin: '0 auto 32px', lineHeight: 1.3 }}>
          What organisational operating system is worthy of humans and AI agents working together?
        </p>
        <p style={{ marginBottom: 40, color: 'rgba(255,255,255,0.7)' }}>
          We are not looking for spectators. We are looking for people carrying pieces of the answer.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button onClick={() => window.open(JOIN_URL, '_blank')} icon="arrow-right">Join the dialogue</Button>
          <Button variant="ghost" onClick={() => onNav('spheres')}>Explore the Spheres</Button>
        </div>
      </div>
    </section>
  </>
);

window.PageWhy = PageWhy;
