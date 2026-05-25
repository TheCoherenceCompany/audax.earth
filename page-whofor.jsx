/* Audax OS site · Who For? page — full implementation
   16 question-led sections.
   An invitation to co-creators, not a customer segmentation page. */

const HERO_WHO = 'assets/backgrounds/The_Gathering_httpss.mj.runLwdlSY4QCLA_abstract_horizontal_in_4a2611be-ea74-45f7-96c4-c3168455b410_3.png';

const PRIMARY_AUDIENCES = [
  {
    n: '01', name: 'Organisation Designers',
    q: 'Are you designing how humans work together?',
    who: 'People who design how teams, companies, networks, and institutions actually work — governance, roles, decision-making, culture, trust, facilitation, learning, power, and structure.',
    bring: ['team agreements', 'governance patterns', 'decision protocols', 'conflict pathways', 'culture diagnostics', 'trust infrastructure', 'organisational health maps'],
    invite: 'If you have spent years trying to make organisations more human, more adaptive, more honest, or more alive, Audax OS needs your scar tissue and your imagination.'
  },
  {
    n: '02', name: 'Agentic AI Builders',
    q: 'Are you building agents that need better organisations to live inside?',
    who: 'People building AI agents, agent platforms, AI-native tools, workflow automations, knowledge systems, and human-agent interfaces.',
    bring: ['agent role cards', 'permission profiles', 'agent-ready mission canvases', 'context packets', 'escalation rules', 'inter-agent handoff protocols', 'inspectable autonomy models'],
    invite: 'If you are building agents and keep finding that the hardest problem is not the model, but the messy organisation around it, you are exactly in the problem space of Audax OS.'
  },
  {
    n: '03', name: 'Collaboration Infrastructure Builders',
    q: 'Are you building the tools collective work now depends on?',
    who: 'People building tools for coordination, knowledge, governance, communication, contribution, and distributed work — the plumbing of collective intelligence.',
    bring: ['shared work ontologies', 'commitment ledgers', 'portable contributor profiles', 'open protocols', 'tool interoperability models', 'human-agent collaboration interfaces'],
    invite: 'If you are building the pipes, rooms, ledgers, maps, dashboards, agents, or rituals through which modern collaboration happens, Audax OS is an invitation to make the pieces speak to each other.'
  },
  {
    n: '04', name: 'Regenerative Practitioners',
    q: 'Are you working to make organisations more alive?',
    who: 'People working with living systems, teal and turquoise organisations, developmental culture, regenerative leadership, and ecological ways of organising.',
    bring: ['living systems principles', 'developmental pathways', 'relational rituals', 'regenerative diagnostics', 'purpose practices', 'consent and care protocols', 'culture and maturity maps'],
    invite: 'If your work sits at the edge of organisational design, human development, living systems, and regeneration, Audax OS needs your depth. Otherwise the future becomes a spreadsheet with wings.'
  },
  {
    n: '05', name: 'Future-of-Work Operators',
    q: 'Are you already living the problem?',
    who: 'People running distributed teams, AI-native startups, fractional organisations, communities, DAOs, venture studios, and ecosystem initiatives.',
    bring: ['real use cases', 'failure stories', 'adoption pathways', 'minimum viable protocols', 'practical diagnostics', 'operational constraints', 'what must stay simple'],
    invite: 'If you are already trying to run an organisation that does not fit the old model, Audax OS is a place to turn the pain into pattern.'
  },
  {
    n: '06', name: 'Governance Designers',
    q: 'Are you designing how decisions and accountability work?',
    who: 'People designing decision systems, consent processes, contribution models, DAO governance, legal structures, accountability systems, and agent permission models.',
    bring: ['governance frameworks', 'decision architectures', 'accountability models', 'permission systems', 'agent governance patterns', 'consent protocols'],
    invite: 'If you have been building trustworthy systems for collective decision-making, Audax OS needs governance intelligence at its core.'
  },
  {
    n: '07', name: 'Ecosystem Weavers',
    q: 'Are you helping many centres act together?',
    who: 'People who help independent actors discover alignment, form trust, coordinate missions, and learn together without central control.',
    bring: ['ecosystem mapping', 'trust and reputation signals', 'partnership protocols', 'open mission frameworks', 'contribution pathways', 'collective intelligence practices'],
    invite: 'If you understand the art of making many centres act together without forcing them into one container, you are building the outer layer of Audax OS.'
  }
];

const PATHWAYS = [
  { n: '01', title: 'Join the Dialogue', body: 'Participate in conversations about the organisational OS needed for the agentic age. Bring questions, challenges, and half-formed ideas.' },
  { n: '02', title: 'Bring a Use Case', body: 'Share a real organisational challenge involving distributed work, fractional contribution, human-agent collaboration, or ecosystem coordination.' },
  { n: '03', title: 'Contribute to the OS', body: 'Help refine the Spheres, Layers, Modes, principles, protocols, diagnostics, and language.' },
  { n: '04', title: 'Build an Implementation', body: 'Create tools, agents, interfaces, templates, workshops, or integrations based on Audax OS concepts.' },
  { n: '05', title: 'Host a Conversation', body: 'Bring together organisation designers, AI builders, operators, or ecosystem actors to explore the problem space.' },
  { n: '06', title: 'Become a Living Lab', body: 'Use Audax OS as a lens for your own organisation, team, or community, and share what is learned.' }
];

const PageWhoFor = ({ onNav }) => (
  <>

    {/* ─── 1 · HERO ─────────────────────────────────────────────────────────── */}
    <section className="hero" style={{ '--hero-image': `url(${HERO_WHO})`, minHeight: '92vh', alignItems: 'center' }}>
      <div className="hero-wash"></div>
      <div className="hero-fade"></div>
      <div className="hero-vertical"><span>An invitation to co-creators of the OS</span></div>
      <div className="container">
        <div className="hero-inner" style={{ maxWidth: 960 }}>
          <Eyebrow>Who for?</Eyebrow>
          <h1 className="display lg">
            Who should help shape<br />the organisational OS<br /><em>for the agentic age?</em>
          </h1>
          <p className="lede" style={{ maxWidth: 720 }}>
            Audax OS is not finished. That is the point.
          </p>
          <p className="lede" style={{ maxWidth: 720, marginTop: 16 }}>
            We have identified a problem space that is becoming impossible to ignore. We are inviting the people who can help turn the first map into shared practice.
          </p>
          <div className="hero-ctas" style={{ marginTop: 48 }}>
            <Button size="lg" icon="arrow-right" onClick={() => window.open(JOIN_URL, '_blank')}>
              Join the dialogue
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* ─── 2 · THE INVITATION ───────────────────────────────────────────────── */}
    <section className="section manifesto">
      <div className="container">
        <h1 className="q-h1">
          <span className="num">02 · The invitation</span>
          What are we <em>inviting people into?</em>
        </h1>
        <div className="q-body" style={{ maxWidth: 760 }}>
          <p>We are inviting a founding dialogue around one question:</p>
        </div>

        <div style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(32px, 4vw, 56px)',
          fontWeight: 400, letterSpacing: '-0.025em', lineHeight: 1.1,
          color: 'var(--ink-900)', textWrap: 'balance',
          maxWidth: 920,
          padding: '48px 0',
          borderTop: '2px solid var(--forest-700)',
          borderBottom: '1px solid var(--border-1)',
          margin: '24px 0 40px'
        }}>
          What organisational operating system is worthy of <em style={{ color: 'var(--forest-700)', fontStyle: 'italic' }}>humans and AI agents working together?</em>
        </div>

        <div className="q-body" style={{ maxWidth: 760 }}>
          <p>This dialogue is not theoretical decoration. It should lead to principles, protocols, tools, language, practices, diagnostics, experiments, and implementations.</p>
          <p>Audax OS begins with a proposed architecture: <strong>Five Spheres</strong> (what every healthy organisation must care for), <strong>Five Layers</strong> (where those functions operate), and <strong>Three Modes</strong> (how collaboration happens between humans and agents).</p>
          <p>But the details still need to be shaped. What should a contribution ledger include? How should personal agents protect consent? What does trust look like in a fractional organisation? How do agent-to-agent workflows remain inspectable?</p>
          <p>These are not small questions. They need many kinds of intelligence: organisation intelligence, technical intelligence, governance intelligence, regenerative intelligence, and the quiet intelligence of people who have seen enough failed systems to recognise a real edge when they find one.</p>
        </div>

        <PullQuote>Audax OS is not a product looking for users. <em>It is a problem space looking for co-creators.</em></PullQuote>
      </div>
    </section>

    {/* ─── 3 · WHO IS NEEDED FIRST ──────────────────────────────────────────── */}
    <section className="section" style={{ background: 'var(--surface-paper)' }}>
      <div className="container">
        <h1 className="q-h1">
          <span className="num">03 · First circle</span>
          Who is needed <em>at the beginning?</em>
        </h1>
        <p className="lede" style={{ marginBottom: 56, maxWidth: 760 }}>
          At this stage, Audax OS is primarily for people who can help develop the OS itself. The first circle is not a mass market. It is builders, designers, practitioners, and thinkers who understand that the organisation itself is now the design frontier.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
          {PRIMARY_AUDIENCES.slice(0, 4).map(a => (
            <article key={a.n} style={{
              background: 'var(--surface-white)',
              border: '1px solid var(--border-1)',
              borderRadius: 16, padding: '28px 22px',
              display: 'flex', flexDirection: 'column', minHeight: 220
            }}>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500,
                letterSpacing: '0.22em', color: 'var(--forest-700)', marginBottom: 14
              }}>CIRCLE {a.n}</div>
              <h4 style={{
                fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 400,
                letterSpacing: '-0.02em', lineHeight: 1.05,
                color: 'var(--ink-900)', margin: '0 0 12px'
              }}>{a.name}</h4>
              <p style={{
                fontSize: 13, fontWeight: 300, lineHeight: 1.45,
                color: 'var(--ink-600)', margin: 0, fontStyle: 'italic'
              }}>{a.q}</p>
            </article>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, marginTop: 14 }}>
          {PRIMARY_AUDIENCES.slice(4).map(a => (
            <article key={a.n} style={{
              background: 'var(--surface-white)',
              border: '1px solid var(--border-1)',
              borderRadius: 16, padding: '28px 22px',
              display: 'flex', flexDirection: 'column', minHeight: 200
            }}>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500,
                letterSpacing: '0.22em', color: 'var(--forest-700)', marginBottom: 14
              }}>CIRCLE {a.n}</div>
              <h4 style={{
                fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 400,
                letterSpacing: '-0.02em', lineHeight: 1.05,
                color: 'var(--ink-900)', margin: '0 0 12px'
              }}>{a.name}</h4>
              <p style={{
                fontSize: 13, fontWeight: 300, lineHeight: 1.45,
                color: 'var(--ink-600)', margin: 0, fontStyle: 'italic'
              }}>{a.q}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* ─── 4–8 · AUDIENCE DEEP DIVES ────────────────────────────────────────── */}
    <section className="section">
      <div className="container">
        <h1 className="q-h1">
          <span className="num">04–08 · Deep dives</span>
          What does each <em>first circle need?</em>
        </h1>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {PRIMARY_AUDIENCES.slice(0, 5).map((a, i) => (
            <div key={a.n} className="aud-row" style={{ paddingTop: i === 0 ? 56 : undefined }}>
              <div>
                <h6>{a.n} · First circle</h6>
                <h3>{a.name}</h3>
              </div>
              <div className="who-grid">
                <div>
                  <h6>Who you are</h6>
                  <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.6, color: 'var(--ink-700)', margin: '0 0 24px' }}>
                    {a.who}
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 400,
                    letterSpacing: '-0.01em', lineHeight: 1.35,
                    color: 'var(--forest-900)', fontStyle: 'italic',
                    background: 'var(--forest-050)', border: '1px solid var(--forest-200)',
                    borderRadius: 12, padding: '16px 18px', margin: 0
                  }}>
                    {a.invite}
                  </p>
                </div>
                <div>
                  <h6>What you might help shape</h6>
                  <ul>{a.bring.map(x => <li key={x}>{x}</li>)}</ul>
                  <a href="#" className="aud-cta" onClick={(e) => { e.preventDefault(); window.open(JOIN_URL, '_blank'); }}>
                    Join the dialogue <span style={{ fontSize: 16 }}>&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Pull quote between audience sections */}
    <section className="section manifesto" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <div className="container">
        <PullQuote>The agentic age needs organisation designers, <em>not just AI engineers with admin access.</em></PullQuote>
        <PullQuote>Agents do not only need better prompts. <em>They need better organisational habitats.</em></PullQuote>
        <PullQuote>The next organisational OS should be interoperable, <em>not imperial.</em></PullQuote>
      </div>
    </section>

    {/* Sections 06–07 deep dives */}
    <section className="section" style={{ background: 'var(--surface-paper)' }}>
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {PRIMARY_AUDIENCES.slice(5).map((a, i) => (
            <div key={a.n} className="aud-row" style={{ paddingTop: i === 0 ? 0 : undefined }}>
              <div>
                <h6>{a.n} · First circle</h6>
                <h3>{a.name}</h3>
              </div>
              <div className="who-grid">
                <div>
                  <h6>Who you are</h6>
                  <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.6, color: 'var(--ink-700)', margin: '0 0 24px' }}>
                    {a.who}
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 400,
                    letterSpacing: '-0.01em', lineHeight: 1.35,
                    color: 'var(--forest-900)', fontStyle: 'italic',
                    background: 'var(--forest-050)', border: '1px solid var(--forest-200)',
                    borderRadius: 12, padding: '16px 18px', margin: 0
                  }}>
                    {a.invite}
                  </p>
                </div>
                <div>
                  <h6>What you might help shape</h6>
                  <ul>{a.bring.map(x => <li key={x}>{x}</li>)}</ul>
                  <a href="#" className="aud-cta" onClick={(e) => { e.preventDefault(); window.open(JOIN_URL, '_blank'); }}>
                    Join the dialogue <span style={{ fontSize: 16 }}>&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ─── 9 · STRATEGIC PARTNERS ───────────────────────────────────────────── */}
    <section className="section">
      <div className="container">
        <h1 className="q-h1">
          <span className="num">09 · Partners</span>
          Who can <em>build with Audax OS?</em>
        </h1>
        <div className="q-body" style={{ maxWidth: 760, marginBottom: 48 }}>
          <p>Audax OS is intended to be an open OS, not a closed product. Like Agile, it should become something many people can interpret, extend, implement, critique, teach, and build upon. Strategic partners are not future customers. They are potential co-creators.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
          <div style={{ background: 'var(--surface-white)', border: '1px solid var(--border-1)', borderRadius: 18, padding: '36px 36px' }}>
            <h6 style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--forest-700)', margin: '0 0 16px' }}>Partner types</h6>
            {[
              'Organisation design consultancies',
              'AI agent platforms',
              'Collaboration tool vendors',
              'Governance and DAO platforms',
              'Knowledge management tools',
              'Learning and development platforms',
              'Community and network platforms',
              'Research labs and foundations',
              'Open-source communities',
              'Venture studios and funders'
            ].map((p, i) => (
              <div key={p} style={{
                padding: '10px 0', borderBottom: '1px solid var(--border-2)',
                fontSize: 15, fontWeight: 400, color: 'var(--ink-800)',
                display: 'flex', gap: 12, alignItems: 'center'
              }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--forest-600)', letterSpacing: '0.04em', flexShrink: 0 }}>{String(i + 1).padStart(2, '0')}</span>
                {p}
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ background: 'var(--forest-050)', border: '1px solid var(--forest-200)', borderRadius: 18, padding: '32px 32px' }}>
              <h6 style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--forest-800)', margin: '0 0 16px' }}>What partners might build</h6>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 24px' }}>
                {['Diagnostics', 'Protocols', 'Training programmes', 'Workshops', 'AI agents', 'Tool integrations', 'Standards', 'Case studies', 'Research papers', 'Pilot programmes'].map(x => (
                  <div key={x} style={{ padding: '8px 0', borderBottom: '1px solid var(--forest-200)', fontSize: 13, color: 'var(--forest-900)' }}>{x}</div>
                ))}
              </div>
            </div>
            <div style={{ background: 'var(--surface-white)', border: '1px solid var(--border-1)', borderRadius: 18, padding: '32px 32px', flex: 1 }}>
              <p style={{
                fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 400,
                letterSpacing: '-0.015em', lineHeight: 1.2,
                color: 'var(--ink-900)', fontStyle: 'italic', margin: 0
              }}>
                "The goal is not platform capture. The goal is shared infrastructure."
              </p>
            </div>
          </div>
        </div>
        <PullQuote>Audax OS should become a shared grammar many builders can use, <em>not a castle one vendor owns.</em></PullQuote>
      </div>
    </section>

    {/* ─── 10 · FUTURE AUDIENCES ────────────────────────────────────────────── */}
    <section className="section" style={{ background: 'var(--surface-paper)' }}>
      <div className="container">
        <h1 className="q-h1">
          <span className="num">10 · Eventually</span>
          Who will Audax OS <em>eventually serve?</em>
        </h1>
        <div className="q-body" style={{ maxWidth: 760, marginBottom: 48 }}>
          <p>The first invitation is to co-creators. But the OS is being developed because many kinds of people and organisations will need it.</p>
        </div>
        <div className="join-grid">
          {[
            { label: 'Founders', desc: 'People building companies, labs, communities, and ventures that need healthier organisational foundations from the beginning.' },
            { label: 'Teams', desc: 'Small groups that need clearer agreements, missions, commitments, communication, learning, and trust.' },
            { label: 'Contributors', desc: 'People working fractionally across multiple contexts who need visibility, agency, and contribution recognition.' },
            { label: 'Organisations', desc: 'Companies, nonprofits, cooperatives, and associations that want to become more coherent, adaptive, and agent-ready.' },
            { label: 'Organisation Families', desc: 'Venture studios, federations, alliances, and constellations of related organisations that need shared grammar without forced sameness.' },
            { label: 'Ecosystems', desc: 'Fields of independent actors coordinating around shared missions without central control.' }
          ].map((a, i) => (
            <div key={a.label} className="join-card">
              <div className="num" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500, color: 'var(--ink-400)', marginBottom: 12 }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <h4>{a.label}</h4>
              <p>{a.desc}</p>
            </div>
          ))}
        </div>
        <p className="q-body" style={{ marginTop: 32 }}>
          <p style={{ fontStyle: 'italic', color: 'var(--ink-500)', maxWidth: 640, fontSize: 15 }}>
            The current page emphasises: first, we need the people who can help shape the OS.
          </p>
        </p>
      </div>
    </section>

    {/* ─── 11 · WHO IS THIS NOT FOR ─────────────────────────────────────────── */}
    <section className="section">
      <div className="container">
        <h1 className="q-h1">
          <span className="num">11 · Threshold</span>
          Who is <em>this not for?</em>
        </h1>
        <div className="q-body" style={{ maxWidth: 760, marginBottom: 40 }}>
          <p>Audax OS is open, but it is not vague. The early dialogue needs people who can hold complexity without turning it into fog, and people who can build structure without turning it into a cage.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <div style={{ background: 'var(--forest-050)', border: '1px solid var(--forest-200)', borderRadius: 18, padding: '36px 36px' }}>
            <h6 style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--forest-800)', margin: '0 0 20px' }}>What this space needs</h6>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                'People willing to question assumptions',
                'People willing to test ideas in practice',
                'People willing to disagree cleanly',
                'People willing to build in public',
                'People who hold both structure and soul',
                'People who care about both the API and the conversation after the meeting',
                'People who protect human agency while designing agentic systems'
              ].map(x => (
                <li key={x} style={{
                  padding: '12px 0', borderBottom: '1px solid var(--forest-200)',
                  fontSize: 15, fontWeight: 400, color: 'var(--ink-800)',
                  display: 'flex', gap: 12, alignItems: 'baseline'
                }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--forest-700)', flexShrink: 0 }}>→</span>
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ background: 'var(--surface-white)', border: '1px solid var(--border-1)', borderRadius: 18, padding: '36px 36px' }}>
            <h6 style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ink-400)', margin: '0 0 20px' }}>May not be the right place for</h6>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                'People looking for a finished product to buy next week',
                'AI as a way to replace humans or intensify control',
                'The belief that every problem can be solved with dashboards',
                'People who enjoy abstraction but avoid implementation',
                'People who want to own the whole category before it has learned how to breathe',
                'Extractive productivity maximalism',
                'Mystical fog without operational discipline'
              ].map(x => (
                <li key={x} style={{
                  padding: '12px 0', borderBottom: '1px solid var(--border-2)',
                  fontSize: 15, fontWeight: 300, color: 'var(--ink-400)',
                  textDecoration: 'line-through', textDecorationColor: 'var(--ink-200)',
                  display: 'flex', gap: 12, alignItems: 'baseline'
                }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--ink-300)', flexShrink: 0, textDecoration: 'none' }}>✕</span>
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <PullQuote>Not everyone needs to join early. <em>The early circle should be made of people who can help the question mature.</em></PullQuote>
      </div>
    </section>

    {/* ─── 12 · PARTICIPATION PATHWAYS ──────────────────────────────────────── */}
    <section className="section" style={{ background: 'var(--surface-paper)' }}>
      <div className="container">
        <h1 className="q-h1">
          <span className="num">12 · Ways in</span>
          How can people <em>help shape Audax OS?</em>
        </h1>
        <div className="q-body" style={{ maxWidth: 760, marginBottom: 56 }}>
          <p>There are many ways to contribute. The goal is not to make everyone contribute in the same way. The goal is to make contribution visible, useful, and alive.</p>
        </div>
        <div className="join-grid">
          {PATHWAYS.map(p => (
            <div key={p.n} className="join-card">
              <div className="num">{p.n}</div>
              <h4>{p.title}</h4>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
        <PullQuote>The OS will become real through <em>the quality of the people and practices that gather around it.</em></PullQuote>
      </div>
    </section>

    {/* ─── 13 · THE COHERENCE COMPANY ───────────────────────────────────────── */}
    <section className="section">
      <div className="container">
        <h1 className="q-h1">
          <span className="num">13 · Living lab</span>
          Where does this <em>begin in practice?</em>
        </h1>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56,
          background: 'var(--surface-white)',
          border: '1px solid var(--border-1)',
          borderRadius: 20, padding: '56px 56px',
          alignItems: 'start'
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500,
              letterSpacing: '0.22em', textTransform: 'uppercase',
              color: 'var(--forest-700)', marginBottom: 16
            }}>First living lab</div>
            <h3 style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3vw, 40px)',
              fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.05,
              color: 'var(--ink-900)', margin: '0 0 24px'
            }}>The Coherence Company</h3>
            <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.6, color: 'var(--ink-700)', margin: '0 0 16px' }}>
              The Coherence Company is the first organisation joining to develop, test, and evolve Audax OS in real organisational life.
            </p>
            <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.6, color: 'var(--ink-700)', margin: '0 0 16px' }}>
              It is not the owner of the OS. It is the first living lab — using Audax OS to explore how a distributed, fractional, AI-native organisation can organise work, contribution, learning, communication, human relationship, and agentic collaboration.
            </p>
            <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.6, color: 'var(--ink-700)', margin: 0 }}>
              The future organisational OS cannot be designed from a balcony. It must be tested inside real commitments, real tensions, real people, real agents, real projects, and real learning loops.
            </p>
          </div>
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500,
              letterSpacing: '0.22em', textTransform: 'uppercase',
              color: 'var(--ink-500)', marginBottom: 16
            }}>The constellation grows</div>
            <div style={{
              background: 'var(--forest-050)',
              border: '1px solid var(--forest-200)',
              borderRadius: 16, padding: '28px 28px', marginBottom: 16
            }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 400, letterSpacing: '-0.01em', lineHeight: 1.3, color: 'var(--forest-900)', fontStyle: 'italic', margin: 0 }}>
                "The first living lab is not the owner of the field. It is the first place where the OS learns from reality."
              </p>
            </div>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.6, color: 'var(--ink-600)', margin: 0 }}>
              The Coherence Company will help generate the first practical patterns, but the OS should grow through a wider field of contributors, partners, and living labs. One node in a growing constellation — not the whole sky.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* ─── 14 · THE KIND OF DIALOGUE ────────────────────────────────────────── */}
    <section className="section manifesto">
      <div className="container">
        <h1 className="q-h1">
          <span className="num">14 · Culture</span>
          What kind of conversation <em>are we trying to host?</em>
        </h1>
        <div className="q-body" style={{ maxWidth: 760 }}>
          <p>The founding dialogue should be serious, generous, practical, and alive.</p>
          <p>Not a panel series where everyone performs insight and nothing changes. Not a Discord swamp where good ideas go to slowly become scroll sediment. Not a closed expert committee pretending the future has already been decided.</p>
          <p className="lead">We want conversations that <em>move.</em></p>
          <p>From question to pattern. From pattern to protocol. From protocol to test. From test to learning. From learning to better questions.</p>
          <p>The dialogue should welcome disagreement. Audax OS will be stronger if people challenge the language, test the assumptions, expose blind spots, bring edge cases, and refuse lazy consensus.</p>
          <p><strong>Co-creation is not polite agreement. It is disciplined imagination.</strong></p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0 64px', margin: '48px 0 0' }}>
          {[
            'Start from real problems.',
            'Stay close to practice.',
            'Make concepts legible.',
            'Name tensions early.',
            'Protect human agency.',
            'Respect technical reality.',
            'Prefer protocols over slogans.',
            'Treat critique as contribution.',
            'Build with enough openness that others can extend it.',
            'Keep asking what this makes possible for people, teams, and ecosystems.'
          ].map((p, i) => (
            <div key={i} style={{
              padding: '22px 0',
              borderBottom: '1px solid var(--border-2)',
              display: 'flex', gap: 20, alignItems: 'flex-start'
            }}>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500,
                letterSpacing: '0.04em', color: 'var(--forest-700)',
                flexShrink: 0, minWidth: 28, paddingTop: 2
              }}>{String(i + 1).padStart(2, '0')}</span>
              <div style={{
                fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 400,
                letterSpacing: '-0.01em', color: 'var(--ink-900)', lineHeight: 1.25
              }}>{p}</div>
            </div>
          ))}
        </div>

        <PullQuote>We are not gathering to admire complexity. <em>We are gathering to make it workable.</em></PullQuote>
      </div>
    </section>

    {/* ─── 15 · WHAT COULD THIS BECOME ──────────────────────────────────────── */}
    <section className="section" style={{ background: 'var(--surface-paper)' }}>
      <div className="container">
        <h1 className="q-h1">
          <span className="num">15 · Horizon</span>
          What could this become <em>if we build it well?</em>
        </h1>
        <div className="q-body" style={{ maxWidth: 760, marginBottom: 48 }}>
          <p>If Audax OS works, it will not become one company's proprietary method. It will become a shared language for designing organisations in the agentic age.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14 }}>
          {[
            { for: 'Organisation designers', becomes: 'A way to speak with AI builders around shared organisational objects.' },
            { for: 'Founders', becomes: 'A way to think beyond roles and task boards from the beginning.' },
            { for: 'Contributors', becomes: 'A way to see commitments, value, learning, and agency across contexts.' },
            { for: 'Teams', becomes: 'A way to make work legible without becoming bureaucratic.' },
            { for: 'Agents', becomes: 'A way to participate with context, permissions, feedback, and clear boundaries.' },
            { for: 'Vendors', becomes: 'A way to build interoperable tools around shared organisational objects.' },
            { for: 'Ecosystems', becomes: 'A way to coordinate missions without central control.' },
            { for: 'The future of work', becomes: 'A way to become more humane, not merely more automated.' },
            { for: 'Many builders', becomes: 'A shared grammar many systems may one day use.' }
          ].map((c, i) => (
            <div key={i} style={{
              background: 'var(--surface-white)',
              border: '1px solid var(--border-1)',
              borderRadius: 14, padding: '24px 22px'
            }}>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500,
                letterSpacing: '0.18em', textTransform: 'uppercase',
                color: 'var(--forest-700)', marginBottom: 10
              }}>For {c.for}</div>
              <p style={{
                fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 400,
                letterSpacing: '-0.01em', lineHeight: 1.25,
                color: 'var(--ink-900)', margin: 0, fontStyle: 'italic'
              }}>{c.becomes}</p>
            </div>
          ))}
        </div>
        <PullQuote>Audax OS will be valuable only if it becomes <em>bigger than the people who started it.</em></PullQuote>
      </div>
    </section>

    {/* ─── 16 · TRANSITION → JOIN ───────────────────────────────────────────── */}
    <section className="section">
      <div className="container">
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '56px 64px',
          background: 'var(--surface-white)',
          border: '1px solid var(--border-1)',
          borderRadius: 20
        }}>
          <div style={{ maxWidth: 620 }}>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500,
              letterSpacing: '0.22em', textTransform: 'uppercase',
              color: 'var(--ink-500)', marginBottom: 12
            }}>16 · THE NEXT PAGE</div>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 52px)',
              fontWeight: 400, letterSpacing: '-0.025em', lineHeight: 1.05,
              color: 'var(--ink-900)', margin: '0 0 20px'
            }}>
              Are you carrying<br /><em style={{ color: 'var(--forest-700)' }}>part of this question?</em>
            </h2>
            <p style={{ fontSize: 17, fontWeight: 300, lineHeight: 1.6, color: 'var(--ink-600)', margin: '0 0 16px', maxWidth: 520 }}>
              Bring your questions, your prototypes, your field experience, your doubts, and the beautiful failed thing that taught you more than the successful slide deck.
            </p>
            <p style={{ fontSize: 17, fontWeight: 300, lineHeight: 1.6, color: 'var(--ink-600)', margin: '0 0 32px', maxWidth: 520 }}>
              Audax OS begins as a shared inquiry. It becomes real through the people willing to shape it.
            </p>
            <Button size="lg" icon="arrow-right" onClick={() => window.open(JOIN_URL, '_blank')}>
              Join the founding dialogue
            </Button>
          </div>
          <div style={{
            width: 220, height: 220, flexShrink: 0,
            background: 'var(--forest-050)',
            border: '1px solid var(--forest-200)',
            borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginLeft: 48
          }}>
            <div style={{
              textAlign: 'center',
              fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 400,
              letterSpacing: '-0.01em', lineHeight: 1.4,
              color: 'var(--forest-700)', fontStyle: 'italic',
              padding: '0 24px'
            }}>
              Come to the table if you are already carrying part of this question.
            </div>
          </div>
        </div>
      </div>
    </section>

    <CtaBand
      title="If you are carrying<br />part of this question — <em>join the table.</em>"
      body="Audax OS begins as a shared inquiry. It becomes real through the people willing to shape it."
      primary="Join the dialogue"
      onPrimary={() => window.open(JOIN_URL, '_blank')}
    />
  </>
);

window.PageWhoFor = PageWhoFor;
