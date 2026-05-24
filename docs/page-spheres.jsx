/* Audax OS site · Spheres page
   14 question-led sections from the detailed Spheres brief.
   The horizontal architecture of Audax OS:
   Value · Work · Relationship & Purpose · Learning · Communication */

const HERO_SPH = '../assets/backgrounds/The_Gathering_httpss.mj.runLwdlSY4QCLA_abstract_horizontal_in_3741fb5e-98d9-4e2e-9d21-50390f539a13_1.png';

const SPHERES = [
  {
    n: 'I', key: 'value', name: 'Value Accounting',
    q: 'How is contribution recognised and translated into value?',
    visible: ['contribution', 'risk', 'ownership', 'compensation', 'recognition', 'attribution', 'fairness', 'trust'],
    art: '../assets/accent-images/The_Gathering_httpss.mj.runC6iJti0L-5Q_abstract_horizontal_ca_144cfefb-78ad-48eb-a73c-6baaff85c98f_0.png'
  },
  {
    n: 'II', key: 'work', name: 'Organisation of Work',
    q: 'How does purpose become action?',
    visible: ['purpose', 'principles', 'quests', 'missions', 'roles', 'commitments', 'tasks', 'evidence', 'delivery'],
    art: '../assets/accent-images/The_Gathering_httpss.mj.runUUrabdnEXiY_abstract_landscape_cal_c9bf6229-f6fd-4195-a3ed-3d795594174d_0.png'
  },
  {
    n: 'III', key: 'rel', name: 'Human Relationship & Purpose',
    q: 'What holds trust, belonging, meaning, and repair?',
    visible: ['purpose alignment', 'relationship health', 'trust', 'conflict', 'feedback', 'belonging', 'values', 'human dignity'],
    art: '../assets/accent-images/The_Gathering_httpss.mj.runN91XiUaHp8U_httpss.mj.runymEnd1koJ_35f5c6fc-fc1b-438c-b64e-1f39d340862f_1.png'
  },
  {
    n: 'IV', key: 'learn', name: 'Development & Learning',
    q: 'How does the organisation become more intelligent over time?',
    visible: ['individual learning', 'team learning', 'agent learning', 'organisational learning', 'reflection', 'adaptation', 'maturity', 'practice'],
    art: '../assets/accent-images/The_Gathering_httpss.mj.runC6iJti0L-5Q_abstract_horizontal_ca_2aa5eb38-0f5a-4f05-88cf-543d975b0cb1_3.png'
  },
  {
    n: 'V', key: 'comm', name: 'Communication',
    q: 'How does context move through the system?',
    visible: ['sensemaking', 'updates', 'decisions', 'public narrative', 'internal comms', 'external comms', 'signal', 'shared understanding'],
    art: '../assets/accent-images/The_Gathering_httpss.mj.runC6iJti0L-5Q_abstract_horizontal_ca_89be8310-4193-4426-a643-b55ced9ca0f6_1.png'
  }
];

const SphereSection = ({ sphere, deep }) => (
  <section className="section" style={deep.bg ? { background: deep.bg } : null}>
    <div className="container">
      <div className="sphere-header">
        <span className="roman">SPHERE {sphere.n}</span>
        <h2 className="name">{sphere.name}</h2>
      </div>
      <h1 className="q-h1" style={{ marginBottom: 28 }}>
        <span dangerouslySetInnerHTML={{ __html: deep.q }}></span>
      </h1>
      <p className="lede" style={{ marginBottom: 24, maxWidth: 760, fontStyle: 'italic', color: 'var(--forest-800)' }}>
        {deep.shortDef}
      </p>
      <div className="q-body" style={{ maxWidth: 760 }}>
        {deep.body.map((p, i) => <p key={i} dangerouslySetInnerHTML={{ __html: p }}></p>)}
      </div>

      <div className="sphere-deep">
        <div className="col">
          <h6 className="holds">What this sphere holds</h6>
          <ul>{deep.holds.map(x => <li key={x}>{x}</li>)}</ul>
          <h6 className="weak">When this sphere is weak</h6>
          <ul>{deep.weak.map(x => <li key={x}>{x}</li>)}</ul>
        </div>
        <div className="col">
          <div style={{
            aspectRatio: '4/3',
            background: `url(${sphere.art}) center/cover no-repeat`,
            borderRadius: 16,
            border: '1px solid var(--border-1)',
            marginBottom: 16
          }}></div>
          <div className="adds">
            <h6>What Audax OS adds</h6>
            <div className="name">{deep.adds.name}</div>
            <p>{deep.adds.body}</p>
          </div>
        </div>
      </div>

      <PullQuote>
        <span dangerouslySetInnerHTML={{ __html: deep.pullQuote }}></span>
      </PullQuote>
    </div>
  </section>
);

const PageSpheres = ({ onNav }) => (
  <>
    {/* 1. HERO */}
    <section className="hero" style={{ '--hero-image': `url(${HERO_SPH})`, minHeight: '92vh', alignItems: 'center' }}>
      <div className="hero-wash"></div>
      <div className="hero-fade"></div>
      <div className="hero-vertical"><span>The living organs of an organisation</span></div>
      <div className="container">
        <div className="hero-inner" style={{ maxWidth: 920 }}>
          <Eyebrow>The five spheres</Eyebrow>
          <h1 className="display lg">
            What does every healthy<br />organisation <em>need to hold?</em>
          </h1>
          <p className="lede" style={{ maxWidth: 720 }}>
            An organisation is not only a structure for assigning work. It is a living system of contribution, commitments, relationships, learning, communication, purpose, and value.
          </p>
          <p className="lede" style={{ maxWidth: 720, fontStyle: 'italic', color: 'var(--ink-800)', marginTop: 16 }}>
            Every organisation already has these functions. The question is whether they are visible, coherent, and cared for &mdash; or scattered across tools, habits, meetings, spreadsheets, and heroic memory.
          </p>
          <div style={{ marginTop: 48, marginBottom: 40 }}>
            <SpheresOrbit />
          </div>
          <div className="hero-ctas">
            <Button size="lg" icon="arrow-down" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>Explore the five spheres</Button>
            <Button size="lg" variant="secondary" onClick={() => window.open('https://invite.the-gathering.earth/coherence', '_blank')}>Join the dialogue</Button>
          </div>
        </div>
      </div>
    </section>

    {/* 2. WHAT IS A SPHERE? */}
    <section className="section manifesto">
      <div className="container">
        <h1 className="q-h1">
          <span className="num">02 · Definition</span>
          What is a <em>sphere?</em>
        </h1>
        <div className="q-body">
          <p>A sphere is not a department. A department is a container in an organisation chart. A sphere is a living function of organisational life &mdash; something the organisation must continuously sense, maintain, improve, and integrate with everything else.</p>

          <ul style={{ listStyle: 'none', padding: 0, margin: '32px 0', maxWidth: 760 }}>
            {[
              ['Value', 'is not "finance."'],
              ['Work', 'is not "project management."'],
              ['Relationship', 'is not "HR."'],
              ['Learning', 'is not "training."'],
              ['Communication', 'is not "marketing."']
            ].map(([k, v]) => (
              <li key={k} style={{
                padding: '14px 0', borderBottom: '1px solid var(--border-2)',
                fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 400,
                letterSpacing: '-0.015em', color: 'var(--ink-900)'
              }}>
                <em style={{ color: 'var(--forest-700)', fontStyle: 'italic' }}>{k}</em> {v}
              </li>
            ))}
          </ul>

          <p>Each sphere exists everywhere &mdash; inside individuals, inside teams, across the organisation, across related organisations, across ecosystems. The spheres describe <strong>what must be healthy.</strong> The layers describe <strong>where that health must show up.</strong></p>

          <div className="def-split">
            <div className="def-block">
              <h6>Sphere</h6>
              <h3>A living function.</h3>
              <p>What every healthy organisation must care for.</p>
            </div>
            <div className="def-block layer">
              <h6>Layer</h6>
              <h3>A scale of operation.</h3>
              <p>Where that function operates &mdash; individual, team, organisation, family, ecosystem.</p>
            </div>
          </div>
          <div className="def-summary">
            <div><span className="key">Sphere</span>= <em>what.</em></div>
            <div><span className="key">Layer</span>= <em>where.</em></div>
          </div>
        </div>
      </div>
    </section>

    {/* 3. WHY DO ORGANISATIONS FRAGMENT? */}
    <section className="section">
      <div className="container">
        <h1 className="q-h1">
          <span className="num">03 · Fragmentation</span>
          Why do organisations <em>fragment?</em>
        </h1>
        <div className="q-body">
          <p>Most organisations already care about these domains, but they care for them separately. Finance thinks about compensation. Operations thinks about projects. HR thinks about people. Learning teams think about development. Marketing thinks about voice.</p>
          <p className="lead">The problem is not that these areas exist. <em>The problem is that they are treated as separate worlds.</em></p>
          <p>In real organisational life, they are deeply entangled. Nothing sits politely in one box for long.</p>
        </div>

        <CausalLoop />

        <div className="q-body" style={{ marginTop: 32 }}>
          <p>When the spheres are separated, the organisation begins to fragment. Values become posters. Goals become spreadsheets. Culture becomes an offsite. Learning becomes a benefit. Communication becomes marketing at the edge. <strong>Contribution becomes invisible.</strong></p>
          <p>Audax OS exists to bring the spheres back into relationship. Not to create bureaucracy. To create coherence.</p>
        </div>

        <PullQuote>A weak sphere does not stay isolated. <em>It leaks into the whole system.</em></PullQuote>
      </div>
    </section>

    {/* 4. THE FIVE SPHERES OVERVIEW */}
    <section className="section" style={{ background: 'var(--surface-paper)' }}>
      <div className="container">
        <h1 className="q-h1">
          <span className="num">04 · Overview</span>
          What are the <em>five spheres</em> of Audax OS?
        </h1>
        <p className="lede" style={{ marginBottom: 56, maxWidth: 760 }}>
          Five core spheres of organisational life. Each answers a different question. Together, they create the horizontal architecture of a coherent organisation.
        </p>
        <div className="sphere-overview">
          {SPHERES.map(s => (
            <article key={s.n} className="sphere-overview-card">
              <div className="roman">SPHERE {s.n}</div>
              <h4>{s.name}</h4>
              <p className="q">{s.q}</p>
              <div className="visible">Makes visible</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '10px 0 0', fontSize: 12, color: 'var(--ink-700)', lineHeight: 1.6 }}>
                {s.visible.slice(0, 4).map(v => <li key={v}>· {v}</li>)}
                <li style={{ color: 'var(--ink-400)' }}>+ {s.visible.length - 4} more</li>
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* 5. SPHERE 1 — VALUE ACCOUNTING */}
    <SphereSection
      sphere={SPHERES[0]}
      deep={{
        q: 'How is contribution recognised and <em>translated into value?</em>',
        shortDef: 'Value Accounting makes contribution, risk, ownership, compensation, recognition, and value flow visible enough for trust to survive complexity.',
        body: [
          'In a conventional organisation, value is hidden inside a simple container: a person has a job, the job has a salary, the salary implies contribution. Fractional, distributed, early-stage, and ecosystemic work break that container.',
          'Someone gives time. Someone brings capital. Someone opens a relationship. Someone carries risk before money exists. Someone designs the architecture. Someone makes one strategic introduction that changes the entire future of the work.',
          'If the organisation cannot see these contributions, it cannot honour them. And if it cannot honour them, <strong>trust begins to thin.</strong>',
          'In the agentic age this becomes more important. Humans and agents will increasingly work together on the same outputs. The organisation must know who framed the work, who guided the agent, who judged quality, who carried responsibility, and what value was created.',
          'The person who asks the right question, shapes the mission, and takes responsibility for the outcome must not disappear behind the agent that drafted the text.'
        ],
        holds: ['contribution records', 'time and effort', 'strategic contribution', 'relationship contribution', 'capital contribution', 'creative contribution', 'care and coordination', 'risk taken', 'ownership agreements', 'payment agreements', 'credit and recognition', 'agent-assisted contribution', 'value review rituals'],
        weak: ['contribution becomes invisible', 'early contributors feel used', 'people remember agreements differently', 'resentment grows when money appears', 'ownership becomes political', 'care work disappears', 'agents make human contribution harder to attribute', 'trust is carried by goodwill alone'],
        adds: {
          name: 'A Contribution Ecology Ledger',
          body: 'Transparent, human-sensitive recording of contribution across people, teams, organisations, and agents. Recognises quantitative contribution without pretending everything valuable can be measured. Includes review, interpretation, and dialogue. Not cold accounting. Living accounting.'
        },
        pullQuote: 'Finance is administration. <em>Value Accounting is trust infrastructure.</em>'
      }}
    />

    {/* 6. SPHERE 2 — ORGANISATION OF WORK */}
    <SphereSection
      sphere={SPHERES[1]}
      deep={{
        bg: 'var(--surface-paper)',
        q: 'How does <em>purpose become action?</em>',
        shortDef: 'Organisation of Work turns purpose into principles, quests, missions, commitments, delivery, and learning.',
        body: [
          'Modern work is increasingly difficult to organise through static roles and long onboarding tunnels. People may only have a few hours to contribute. Teams may form around temporary missions. AI agents may support research, drafting, coordination, or delivery.',
          'This means work must become more readable. A person should be able to see: what matters now, what the mission is, what help is needed, what the expected outcome is, what authority is required, what "done" would mean, and how contribution will be recognised.',
          'The same is true for agents. Agents need clear context, constraints, permissions, output expectations, decision rights, and escalation pathways. If work is not clear enough for an agent to support, <strong>it is probably not clear enough for a new human contributor either.</strong>',
          'That is the rude little gift of AI. It reveals where our work was already vague.',
          'Audax OS proposes a work architecture built around a few simple objects: <em>Purpose</em> gives direction. <em>Principles</em> guide decisions. <em>Quests</em> define strategic arcs. <em>Missions</em> invite concrete contribution. <em>Cells</em> carry work together. <em>Commitments</em> make promises visible. <em>Learning loops</em> help the system improve.',
          'The atomic unit is not the task. <strong>The atomic unit is the commitment.</strong> Tasks can be completed in isolation. Commitments create relationship, responsibility, and trust.'
        ],
        holds: ['purpose', 'principles', 'quests', 'missions', 'cells', 'roles', 'responsibilities', 'commitments', 'definitions of done', 'decision rights', 'dependencies', 'evidence of progress', 'delivery rhythms', 'learning outputs'],
        weak: ['people are busy but not aligned', 'new contributors cannot enter easily', 'missions become vague', 'tasks multiply without meaning', 'decisions stall', 'accountability becomes loose or controlling', 'agents produce confident nonsense because context is missing', 'teams confuse motion with progress'],
        adds: {
          name: 'A Mission-Based Work System',
          body: 'Purpose → Quests → Missions → Cells → Commitments → Learning. Every mission clear enough for a human to join and an agent to support. Not project management with nicer names. Work made legible for distributed, fractional, human-agent collaboration.'
        },
        pullQuote: 'The task is not the unit of trust. <em>The commitment is.</em>'
      }}
    />

    {/* 7. SPHERE 3 — RELATIONSHIP & PURPOSE */}
    <SphereSection
      sphere={SPHERES[2]}
      deep={{
        q: 'What holds <em>trust, belonging, meaning, and repair?</em>',
        shortDef: 'Human Relationship & Purpose makes trust, belonging, conflict, feedback, values, dignity, and shared direction part of the operating system.',
        body: [
          'This is the sphere many organisations treat as optional. The "soft stuff." The offsite. The values workshop. The culture deck. The emotional weather people politely avoid until it becomes a storm.',
          'In distributed, fractional, AI-native work, this mistake becomes expensive. People do not collaborate well when they feel unseen, unsupported, confused, replaceable, or disconnected from purpose.',
          'Remote teams do not get trust for free. Fractional contributors do not get belonging by accident. <strong>AI agents do not understand values unless those values are made operational.</strong>',
          'Purpose cannot remain a poetic sentence on a website. It must guide decisions, commitments, agent behaviour, value allocation, communication, and escalation. Relationship cannot remain private emotional labour carried by a few sensitive people in the corner. It must become visible, legitimate, and supported.',
          'This does not mean turning the organisation into therapy software. It means recognising that <strong>trust is operational infrastructure.</strong>'
        ],
        holds: ['purpose', 'values', 'belonging', 'trust rituals', 'onboarding conversations', 'relational agreements', 'conflict pathways', 'feedback practices', 'repair rituals', 'consent', 'psychological safety', 'dignity', 'emotional reality', 'human agency', 'boundaries for agents'],
        weak: ['people drift from purpose', 'conflict goes underground', 'feedback becomes political', 'trust depends on charisma', 'new contributors remain peripheral', 'founders carry too much emotional load', 'agents optimise tasks without understanding relational consequences', 'the organisation delivers more while becoming less alive'],
        adds: {
          name: 'A Relationship Operating Layer',
          body: 'Explicit practices for purpose alignment, trust-building, feedback, conflict, repair, consent, and relational health. Agents can prepare conversations, remember agreements, summarise tensions, support reflection, notice when commitments are at risk. They keep the lantern lit. Humans still meet each other.'
        },
        pullQuote: 'Trust is not soft. <em>It is load-bearing.</em>'
      }}
    />

    {/* 8. SPHERE 4 — DEVELOPMENT & LEARNING */}
    <SphereSection
      sphere={SPHERES[3]}
      deep={{
        bg: 'var(--surface-paper)',
        q: 'How does the organisation become <em>more intelligent over time?</em>',
        shortDef: 'Development & Learning helps people, teams, agents, organisations, and ecosystems grow through practice.',
        body: [
          'A 21st-century organisation should not only deliver work. It should learn. People should grow through the work. Teams should become more capable over time. Agents should improve through feedback and correction. The organisation should notice patterns, update its practices, and become wiser through experience.',
          'Most organisations say they value learning. Then they bury it under delivery pressure. Learning becomes a training budget, an abandoned course library, or a retrospective no one has time to act on.',
          'Audax OS treats learning as <strong>metabolic.</strong> Every mission produces learning. Every failure is harvested. Every team improves its own operating system. Every person sees how their development connects with their contribution. Every agent improves through visible correction, not invisible drift.',
          'The goal is not to design the perfect organisation from the beginning. That is a noble way to never start.',
          '<strong>The goal is to design an organisation that can improve itself.</strong> Perfection is brittle. Learning is adaptive.'
        ],
        holds: ['individual development', 'team reflection', 'retrospectives', 'learning harvests', 'practice libraries', 'agent feedback', 'organisational memory', 'experiments', 'diagnostics', 'maturity pathways', 'mentoring', 'peer learning', 'ecosystem learning'],
        weak: ['mistakes repeat', 'reflection becomes performative', 'people grow outside the organisation, not through it', 'agents keep making the same errors', 'teams confuse busyness with maturity', 'institutional memory leaks away', 'good practices remain local and invisible', 'the organisation cannot adapt fast enough'],
        adds: {
          name: 'A Learning Loop Inside Every Mission',
          body: 'What did we intend? What happened? What did we learn? What should change? What should be remembered? What should be forgotten? What should an agent do differently next time? Learning is not an after-action report stored in a digital attic. It is how the organisation becomes alive to itself.'
        },
        pullQuote: 'The aim is not a perfect organisation. <em>The aim is one that learns.</em>'
      }}
    />

    {/* 9. SPHERE 5 — COMMUNICATION */}
    <SphereSection
      sphere={SPHERES[4]}
      deep={{
        q: 'How does <em>context move</em> through the system?',
        shortDef: 'Communication moves context, meaning, decisions, updates, signals, and public voice through the organisation and its ecosystem.',
        body: [
          'Communication is often mistaken for channels. Slack. Email. Meetings. Docs. Newsletters. Dashboards. Social media.',
          'But channels are not communication. They are pipes. The real question is whether <em>context moves.</em>',
          'Do people understand what matters now? Do teams know what other teams are doing? Are decisions visible? Are commitments clear? Are tensions surfaced early? Can new contributors orient quickly? Can the organisation speak clearly to the world? Can agents summarise, translate, and route information without flattening meaning?',
          'Distributed work does not survive on assumptions. AI-native work does not survive on untraceable context. Communication must become intentional.',
          '<strong>Not more messages. Better circulation.</strong> Communication is not marketing at the edge of the organisation. It is how the organisation knows itself and becomes knowable to others.'
        ],
        holds: ['internal updates', 'decision logs', 'meeting rhythms', 'asynchronous communication', 'public narrative', 'ecosystem signals', 'agent summaries', 'context packets', 'onboarding communication', 'storytelling', 'language and tone', 'shared sensemaking', 'translation across contexts'],
        weak: ['people drown in messages but lack meaning', 'decisions vanish into meetings', 'new contributors cannot orient', 'teams duplicate work', 'tensions surface too late', 'agents work from stale or partial context', 'the public cannot understand what the organisation is doing', 'communication becomes noise instead of circulation'],
        adds: {
          name: 'A Communication Architecture',
          body: 'What belongs in a meeting? What belongs in an async update? What belongs in a decision log? What belongs in a personal reflection? What belongs in a public note? What should an agent summarise? What requires a human voice? Agents help summarise, translate, draft, route. Humans remain responsible for meaning, tone, relationship, judgment.'
        },
        pullQuote: 'No circulation. <em>No life.</em>'
      }}
    />

    {/* 10. HOW THE SPHERES INTERACT */}
    <section className="section" style={{ background: 'var(--surface-paper)' }}>
      <div className="container">
        <h1 className="q-h1">
          <span className="num">10 · Interaction</span>
          What happens <em>between the spheres?</em>
        </h1>
        <div className="q-body">
          <p>The spheres are not separate modules. They are interdependent. A decision in one sphere changes the others.</p>
          <p className="lead">The loop can <em>degrade.</em> It can also <em>regenerate.</em></p>
        </div>

        <TwoLoops />

        <div className="q-body" style={{ marginTop: 32 }}>
          <p>This is the deeper promise of Audax OS. It does not treat organisational health as a collection of disconnected parts. <strong>It helps the system see itself.</strong></p>
        </div>
      </div>
    </section>

    {/* 11. SPHERES IN THE AGENTIC AGE */}
    <section className="section">
      <div className="container">
        <h1 className="q-h1">
          <span className="num">11 · Agentic age</span>
          How do the spheres change when <em>AI agents</em> enter the organisation?
        </h1>
        <div className="q-body">
          <p className="lead">AI agents do not create a separate sixth sphere. <em>They change every sphere.</em></p>
          <p>In <strong>Value Accounting</strong>, the organisation must understand human contribution, agent contribution, and human-agent contribution. In <strong>Organisation of Work</strong>, missions must become clear enough for both humans and agents to support. In <strong>Human Relationship &amp; Purpose</strong>, agents must understand values, tone, relational boundaries, and when a human must step in.</p>
          <p>In <strong>Development &amp; Learning</strong>, agents must improve through feedback without drifting away from purpose or contaminating memory. In <strong>Communication</strong>, agents must show what they know, what they assume, what they changed, and what requires human judgment.</p>
          <p>AI does not sit on top of the organisation. <strong>It enters the bloodstream.</strong></p>
          <p>If the spheres are incoherent, agents amplify incoherence. If the spheres are coherent, agents can help humans work with more clarity, memory, reflection, and care.</p>
        </div>

        <table className="mini-matrix">
          <thead>
            <tr>
              <th>Sphere</th>
              <th>Human need</th>
              <th>Agentic need</th>
            </tr>
          </thead>
          <tbody>
            <tr><th>Value Accounting</th><td>Fair recognition</td><td><em>Attribution</em> and responsibility</td></tr>
            <tr><th>Organisation of Work</th><td>Clear missions</td><td><em>Agent-ready</em> mission briefs</td></tr>
            <tr><th>Relationship &amp; Purpose</th><td>Trust and meaning</td><td>Values and <em>escalation</em> rules</td></tr>
            <tr><th>Development &amp; Learning</th><td>Growth through work</td><td>Feedback and correction loops</td></tr>
            <tr><th>Communication</th><td>Context and sensemaking</td><td>Provenance and <em>uncertainty</em></td></tr>
          </tbody>
        </table>

        <PullQuote>Agents amplify the operating system <em>they enter.</em></PullQuote>
      </div>
    </section>

    {/* 12. FROM SPHERES TO DIAGNOSTICS */}
    <section className="section" style={{ background: 'var(--surface-paper)' }}>
      <div className="container">
        <h1 className="q-h1">
          <span className="num">12 · Diagnostics</span>
          How can an organisation know <em>what needs attention?</em>
        </h1>
        <div className="q-body">
          <p>Every organisation has stronger and weaker spheres. A team may be excellent at delivery but poor at learning. A founder group may have strong purpose but weak value agreements. A network may have rich relationships but unclear commitments.</p>
          <p className="lead">The point is not to judge the organisation. <em>The point is to see what is true.</em></p>
          <p>Audax OS should help organisations avoid two traps: <strong>too little structure creates fog. Too much structure creates bureaucracy.</strong> The art is right-sized coherence.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 56, alignItems: 'center', margin: '40px 0' }}>
          <HealthWheel />
          <div className="diagnostic-cards" style={{ gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[
              ['I', 'Value Accounting', 'Is contribution visible, fair, and reviewable?'],
              ['II', 'Organisation of Work', 'Can humans and agents understand what matters now and how to contribute?'],
              ['III', 'Relationship & Purpose', 'Is there enough trust, meaning, belonging, and repair to sustain collaboration?'],
              ['IV', 'Development & Learning', 'Does the organisation improve through experience?'],
              ['V', 'Communication', 'Does context move clearly through the system?']
            ].map(([r, n, q]) => (
              <article key={r} className="diag-card">
                <div className="roman">SPHERE {r}</div>
                <h5>{n}</h5>
                <p>{q}</p>
              </article>
            ))}
          </div>
        </div>

        <PullQuote>The purpose of diagnostics is not control. <em>It is care with eyes open.</em></PullQuote>
      </div>
    </section>

    {/* 13. WHAT BECOMES POSSIBLE */}
    <section className="section">
      <div className="container-narrow">
        <h1 className="q-h1">
          <span className="num">13 · Possibility</span>
          What becomes possible when the spheres are <em>coherent?</em>
        </h1>
        <div className="q-body">
          <p>When the spheres are coherent, the organisation becomes easier to enter, easier to trust, easier to contribute to, easier to learn from, and easier to evolve.</p>

          <ul style={{ listStyle: 'none', padding: 0, margin: '32px 0' }}>
            {[
              'A new contributor can see where they fit.',
              'A team can see what needs attention.',
              'A founder can see where the organisation is fragile.',
              'An agent can understand what it may do and when to ask for help.',
              'A partner can understand how to collaborate.',
              'An ecosystem can begin to coordinate without central control.'
            ].map(x => (
              <li key={x} style={{
                padding: '14px 0', borderBottom: '1px solid var(--border-2)',
                fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 400,
                letterSpacing: '-0.015em', color: 'var(--ink-900)', lineHeight: 1.25
              }}>{x}</li>
            ))}
          </ul>

          <p>This is not about creating one perfect structure. It is about creating a living architecture that helps people and agents <strong>participate with more clarity, dignity, and effectiveness.</strong></p>
          <p>Audax OS gives organisation designers and agentic AI builders a shared language for the real work ahead: making contribution visible, turning purpose into action, holding trust and repair, building learning into the work, and helping context circulate through the whole system.</p>
        </div>

        <PullQuote>Coherence is not control. <em>It is the capacity of a living system to act without losing itself.</em></PullQuote>
      </div>
    </section>

    {/* 14. TRANSITION TO LAYERS */}
    <section className="cta-band" style={{ '--cta-image': `url(${HERO_SPH})` }}>
      <div className="wash"></div>
      <div className="cta-band-inner">
        <Eyebrow color="var(--lichen-300)">14 · The next page</Eyebrow>
        <h2>Where do the <em>spheres operate?</em></h2>
        <p style={{ maxWidth: 600 }}>
          The five spheres describe what every healthy organisation must care for. But every sphere operates at different scales. Value looks different for an individual than for an ecosystem. Communication looks different inside a team than across a family of organisations.
        </p>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(18px, 1.8vw, 24px)', fontStyle: 'italic', color: 'var(--lichen-300)', maxWidth: 640, margin: '0 auto 40px', lineHeight: 1.3 }}>
          That is why Audax OS also has five layers — individual, team, organisation, organisation family, ecosystem.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button onClick={() => onNav('layers')} icon="arrow-right">Explore the Layers</Button>
          <Button variant="ghost" onClick={() => window.open('https://invite.the-gathering.earth/coherence', '_blank')}>Join the dialogue</Button>
        </div>
      </div>
    </section>
  </>
);

window.PageSpheres = PageSpheres;
