/* Audax OS site · Layers page — full redesign
   15 question-led sections from the detailed Layers brief.
   The vertical architecture of Audax OS:
   Individual · Team · Organisation · Organisation Family · Ecosystem */

const HERO_LAY = 'assets/backgrounds/The_Gathering_httpss.mj.run4FR0A9JrbCs_horizontal_abstract_gr_a3a5ab50-ee9c-4167-ba9d-3c83591ce255_1.png';

const LAYERS_META = [
  {
    n: 'I', key: 'individual', name: 'Individual',
    coreQ: 'How does one person stay coherent across commitments, contribution, learning, capacity, boundaries, and livelihood?',
    visible: ['commitments', 'capacity', 'contribution history', 'learning goals', 'income visibility', 'reputation', 'agency', 'boundaries', 'personal agents'],
    art: 'assets/accent-images/The_Gathering_httpss.mj.runC6iJti0L-5Q_abstract_horizontal_ca_665f5682-387b-4bfc-8d42-1ec3a675a53c_2.png'
  },
  {
    n: 'II', key: 'team', name: 'Team',
    coreQ: 'How does a group coordinate work, trust, rhythm, decisions, delivery, and learning?',
    visible: ['agreements', 'missions', 'roles', 'commitments', 'decision norms', 'relationship health', 'learning loops', 'delivery rhythm', 'supporting agents'],
    art: 'assets/accent-images/The_Gathering_httpss.mj.runC6iJti0L-5Q_abstract_horizontal_ca_89be8310-4193-4426-a643-b55ced9ca0f6_0.png'
  },
  {
    n: 'III', key: 'org', name: 'Organisation',
    coreQ: 'How does the whole organisation coordinate purpose, governance, value, culture, work, communication, and agents?',
    visible: ['purpose', 'strategy', 'governance', 'value flows', 'organisational health', 'cross-team dependencies', 'agent governance', 'communication rhythms', 'learning systems'],
    art: 'assets/accent-images/The_Gathering_httpss.mj.runN91XiUaHp8U_httpss.mj.runymEnd1koJ_da3bc6e8-30ff-4a17-a128-88483a0499f1_3.png'
  },
  {
    n: 'IV', key: 'family', name: 'Organisation Family',
    coreQ: 'How do related organisations share infrastructure, talent, learning, capital, and purpose without becoming one?',
    visible: ['shared infrastructure', 'talent flow', 'capital flow', 'shared services', 'cross-org missions', 'common agreements', 'portfolio learning', 'synergies', 'agent interoperability'],
    art: 'assets/accent-images/The_Gathering_httpss.mj.runC6iJti0L-5Q_abstract_horizontal_ca_89be8310-4193-4426-a643-b55ced9ca0f6_2.png'
  },
  {
    n: 'V', key: 'ecosystem', name: 'Ecosystem',
    coreQ: 'How do independent actors discover alignment, build trust, coordinate missions, and learn together without central control?',
    visible: ['ecosystem actors', 'open missions', 'shared questions', 'trust signals', 'partnership pathways', 'contribution flows', 'learning commons', 'collective intelligence', 'ecosystem agents'],
    art: 'assets/accent-images/The_Gathering_httpss.mj.runUUrabdnEXiY_abstract_landscape_cal_c9bf6229-f6fd-4195-a3ed-3d795594174d_2.png'
  }
];

const LayerSection = ({ layer, deep }) => (
  <section className="section" style={deep.bg ? { background: deep.bg } : null}>
    <div className="container">
      <div className="sphere-header">
        <span className="roman">LAYER {layer.n}</span>
        <h2 className="name">{layer.name}</h2>
      </div>
      <h1 className="q-h1">
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
          <h6 className="holds">What this layer holds</h6>
          <ul>{deep.holds.map(x => <li key={x}>{x}</li>)}</ul>
          <h6 className="weak">When this layer is weak</h6>
          <ul>{deep.weak.map(x => <li key={x}>{x}</li>)}</ul>
        </div>
        <div className="col">
          <div style={{
            aspectRatio: '4/3',
            background: `url(${layer.art}) center/cover no-repeat`,
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

const PageLayers = ({ onNav }) => (
  <>

    {/* ─── 1 · HERO ─────────────────────────────────────────────────────────── */}
    <section className="hero" style={{ '--hero-image': `url(${HERO_LAY})`, minHeight: '92vh', alignItems: 'center' }}>
      <div className="hero-wash"></div>
      <div className="hero-fade"></div>
      <div className="hero-vertical"><span>Nested scales of organisational coherence</span></div>
      <div className="container">
        <div className="hero-inner" style={{ maxWidth: 920 }}>
          <Eyebrow>The five layers</Eyebrow>
          <h1 className="display lg">
            Where does organisational<br /><em>coherence need to live?</em>
          </h1>
          <p className="lede" style={{ maxWidth: 720 }}>
            Audax OS does not only ask what a healthy organisation needs. It also asks <em>where</em> that health must show up.
          </p>
          <p className="lede" style={{ maxWidth: 720, marginTop: 16 }}>
            Coherence must be felt and practiced across scale — inside the individual, inside the team, across the organisation, across a family of organisations, and across the wider ecosystem.
          </p>
          <LayersDiagram />
          <div className="hero-ctas">
            <Button size="lg" icon="arrow-down"
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
              Explore the five layers
            </Button>
            <Button size="lg" variant="secondary" onClick={() => onNav('build')}>
              Join to co-create
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* ─── 2 · WHAT IS A LAYER? ─────────────────────────────────────────────── */}
    <section className="section manifesto">
      <div className="container">
        <h1 className="q-h1">
          <span className="num">02 · Definition</span>
          What is a <em>layer?</em>
        </h1>
        <div className="q-body">
          <p>A layer is a scale of organisational life. It is the level at which people, teams, organisations, and agents experience and practice coherence.</p>
          <p>A layer is not a rank.</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: '32px 0', maxWidth: 760 }}>
            {[
              ['The ecosystem', 'is not "above" the individual.'],
              ['The organisation', 'is not more real than the team.'],
              ['The team', 'is not more important than the person.']
            ].map(([k, v]) => (
              <li key={k} style={{
                padding: '14px 0', borderBottom: '1px solid var(--border-2)',
                fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 400,
                letterSpacing: '-0.015em', color: 'var(--ink-900)'
              }}>
                <em style={{ color: 'var(--forest-700)', fontStyle: 'italic' }}>{k}</em>{' '}{v}
              </li>
            ))}
          </ul>
          <p>They are nested. Each layer shapes the others. Individuals form teams. Teams form organisations. Organisations form organisation families. Organisation families participate in ecosystems. Ecosystems shape what individuals can imagine, choose, and become.</p>
          <p>This is why Audax OS cannot be only a personal productivity tool, only a team operating model, only an organisational design model, or only an ecosystem map. <strong>It must connect all of them.</strong></p>
        </div>

        <div className="q-body" style={{ marginTop: 48 }}>
          <div className="def-split">
            <div className="def-block">
              <h6>Sphere</h6>
              <h3>A living function.</h3>
              <p>What every healthy organisation must care for — value, work, relationship, learning, communication.</p>
            </div>
            <div className="def-block layer">
              <h6>Layer</h6>
              <h3>A scale of operation.</h3>
              <p>Where that function operates — individual, team, organisation, organisation family, ecosystem.</p>
            </div>
          </div>
          <div className="def-summary">
            <div><span className="key">Sphere</span>= <em>what.</em></div>
            <div><span className="key">Layer</span>= <em>where.</em></div>
          </div>
        </div>
      </div>
    </section>

    {/* ─── 3 · WHY DOES SCALE NEED REDESIGNING? ────────────────────────────── */}
    <section className="section">
      <div className="container">
        <h1 className="q-h1">
          <span className="num">03 · Context</span>
          Why does <em>scale need to be redesigned?</em>
        </h1>
        <div className="q-body">
          <p>The old model assumed a simpler world.</p>
        </div>

        <div className="shift-block">
          <div className="shift-card then">
            <div className="label">THEN · The old model</div>
            <p className="q">One person. One role. One organisation. One manager. One office. One primary work identity.</p>
          </div>
          <div className="shift-card now">
            <div className="label now-label">NOW · The emerging model</div>
            <p className="q">One person. <em>Many missions. Many teams. Many organisations.</em> One wider ecosystem.</p>
          </div>
        </div>

        <div className="q-body" style={{ marginTop: 40 }}>
          <p>People now contribute across multiple teams, projects, ventures, organisations, communities, and ecosystems. Some work full-time. Some work fractionally. Some join for one mission. Some hold context across years. Some bring capital, relationships, expertise, facilitation, narrative, code, design, care, or strategic intelligence.</p>
          <p>AI agents add another shift. They can support individuals, teams, organisations, and ecosystems at once. They can remember, summarise, connect, analyse, draft, coordinate, and help move context across layers.</p>
          <p className="lead">But if the layers are not designed, <em>agents amplify confusion.</em></p>
          <p>An individual becomes overcommitted. A team loses track of promises. An organisation cannot see where work is blocked. A family of organisations duplicates effort. An ecosystem becomes a theatre of endless calls and good intentions.</p>
          <p>The answer is not more control. The answer is better coherence across scale.</p>
        </div>

        <PullQuote>The future of work is not one person in one box. <em>It is participation across many living contexts.</em></PullQuote>
      </div>
    </section>

    {/* ─── 4 · FIVE LAYERS OVERVIEW ─────────────────────────────────────────── */}
    <section className="section" style={{ background: 'var(--surface-paper)' }}>
      <div className="container">
        <h1 className="q-h1">
          <span className="num">04 · Overview</span>
          What are the <em>five layers</em> of Audax OS?
        </h1>
        <p className="lede" style={{ marginBottom: 56, maxWidth: 760 }}>
          Five nested scales where organisational coherence must operate. Each answers a different question. Together, they create the vertical architecture of a coherent organisation.
        </p>
        <div className="sphere-overview">
          {LAYERS_META.map(l => (
            <article key={l.n} className="sphere-overview-card">
              <div className="roman">LAYER {l.n}</div>
              <h4>{l.name}</h4>
              <p className="q">{l.coreQ}</p>
              <div className="visible">Makes visible</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '10px 0 0', fontSize: 12, color: 'var(--ink-700)', lineHeight: 1.6 }}>
                {l.visible.slice(0, 4).map(v => <li key={v}>· {v}</li>)}
                <li style={{ color: 'var(--ink-400)' }}>+ {l.visible.length - 4} more</li>
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* ─── 5 · LAYER I — INDIVIDUAL ─────────────────────────────────────────── */}
    <LayerSection
      layer={LAYERS_META[0]}
      deep={{
        q: 'How does one person stay whole <em>across many commitments?</em>',
        shortDef: 'The Individual layer helps a person understand their commitments, capacity, contribution, learning, income, reputation, boundaries, and agency across multiple contexts.',
        body: [
          'The individual is the forgotten foundation of organisational design.',
          'Organisations are made of people, yet many systems treat individuals as replaceable units inside workflows. That no longer works.',
          'In the emerging world of work, a person may contribute across several teams, projects, organisations, communities, and learning pathways at once. Some commitments are paid. Some are speculative. Some create reputation. Some create ownership. Some are pure contribution. Some are relational investments. Some are invitations that should never have been accepted, but the calendar goblin was persuasive.',
          'Without a unified layer, people lose coherence. They overcommit. They undercharge. They forget promises. They miss learning opportunities. They carry invisible risk. They build scattered reputation across platforms. They become busy without becoming freer.',
          'Audax OS should help individuals see their work life as a coherent portfolio of contribution, capacity, development, livelihood, and purpose. This is not productivity optimisation. <strong>It is personal coherence.</strong>',
          'The Individual layer also defines the ethical boundary of the whole system. If Audax OS helps organisations become more effective while individuals become more fragmented, it has failed. A regenerative organisational OS must help people contribute without losing themselves.'
        ],
        holds: ['personal commitments', 'capacity and energy', 'roles across teams', 'contribution history', 'value claims', 'income visibility', 'risk exposure', 'learning goals', 'reputation and public voice', 'boundaries and consent', 'personal agents', 'next opportunities', 'pause and exit status'],
        weak: ['people overcommit across teams', 'promises become unrealistic', 'contribution becomes hard to trace', 'income and risk become unclear', 'learning becomes accidental', 'wellbeing becomes private damage', 'organisations mistake availability for capacity', 'agents may expose personal context without consent'],
        adds: {
          name: 'A Personal Coherence Layer',
          body: 'Helps each person see what they have committed to, what is at risk, where they are over capacity, what contribution has been recognised, what value might emerge, what they are learning, where they are building reputation, what they should renegotiate before trust breaks, and what their agents should know, do, and never share.'
        },
        pullQuote: 'The individual layer is not about productivity. <em>It is about agency.</em>'
      }}
    />

    {/* ─── 6 · LAYER II — TEAM ──────────────────────────────────────────────── */}
    <LayerSection
      layer={LAYERS_META[1]}
      deep={{
        bg: 'var(--surface-paper)',
        q: 'How does a team become <em>a living cell?</em>',
        shortDef: 'The Team layer helps a small group coordinate agreements, missions, commitments, trust, communication, decisions, delivery, and learning.',
        body: [
          'The team is where coherence becomes practice.',
          'A strategy does not deliver itself. A mission does not complete itself. A purpose does not become real because it has a tasteful font.',
          'Work becomes real in small groups of people making commitments together. In Audax OS, the team is the core operating unit. A team may be a stable group, a temporary mission cell, a project circle, a product squad, a research group, a facilitation crew, or a human-agent cell formed around one clear outcome.',
          'Without this layer, organisations rely on heroic coordination, founder memory, meeting fog, and task boards pretending to be alignment.',
          'At the Team layer, AI agents can be extremely useful. They can prepare agendas, summarise meetings, track commitments, maintain mission context, detect stale promises, support retrospectives, and help the team ask better questions.',
          '<strong>But the team remains accountable.</strong> The agent keeps the lantern lit. Humans still walk the path.'
        ],
        holds: ['team purpose', 'mission or quest relationship', 'members and roles', 'agreements', 'decision rights', 'communication rhythm', 'active commitments', 'dependencies', 'risks and tensions', 'relationship health', 'learning log', 'delivery evidence', 'supporting agents', 'review rhythm'],
        weak: ['meetings multiply but clarity does not', 'nobody knows who promised what', 'decisions are remade repeatedly', 'conflict hides inside politeness', 'new contributors cannot enter', 'agents summarise confusion beautifully', 'work becomes fragmented across tools', 'teams become zombies: still named, no longer alive'],
        adds: {
          name: 'A Team Coherence Cockpit',
          body: 'Helps a team see what mission it carries, what agreements govern it, what commitments are active, what is blocked, what needs human conversation, what agents can support, what was learned this cycle, and whether the team should continue, pause, dissolve, or transform. No zombie teams in the basement.'
        },
        pullQuote: 'The team is the smallest unit where <em>purpose becomes shared action.</em>'
      }}
    />

    {/* ─── 7 · LAYER III — ORGANISATION ────────────────────────────────────── */}
    <LayerSection
      layer={LAYERS_META[2]}
      deep={{
        q: 'How does the whole organisation <em>stay coherent?</em>',
        shortDef: 'The Organisation layer helps coordinate purpose, governance, strategy, value, culture, communication, learning, and agents across many teams.',
        body: [
          'The organisation is the layer where many teams, commitments, systems, and stories must become one coherent field.',
          'This is where purpose must become operational. This is where governance becomes real. This is where value agreements either create trust or quietly generate future conflict. This is where culture becomes more than mood. This is where communication must circulate across teams instead of disappearing into private channels.',
          'This is also where AI agents become organisational actors. Not employees. Not gods in the server cupboard. Actors with roles, permissions, boundaries, memory, audit trails, and escalation rules.',
          'At this layer, Audax OS should help the organisation see itself: which teams are thriving, which commitments are at risk, which decisions are blocked, where contribution is invisible, where agents are helping, and where human judgment needs to return.',
          '<strong>The organisation layer is not command and control with better dashboards. It is shared sensemaking with enough structure to act.</strong>'
        ],
        holds: ['organisational purpose', 'principles', 'strategy', 'governance', 'decision architecture', 'cross-team quests', 'value accounting', 'contribution ledgers', 'role and circle structures', 'communication rhythms', 'cultural practices', 'learning system', 'diagnostics', 'agent registry', 'data and permission governance', 'accountability model'],
        weak: ['teams optimise locally but the organisation fragments', 'purpose becomes vague', 'governance becomes informal power', 'contribution disputes emerge late', 'strategy and work disconnect', 'agents operate without clear boundaries', 'leadership sees too late what the system already knew'],
        adds: {
          name: 'An Organisational Health Map',
          body: 'Shows how all five spheres function across the organisation. Is value visible? Is work legible? Are relationships healthy enough for truth? Is learning changing behaviour? Is communication moving context? Includes an Agent Governance Layer: what agents exist, what they can access, what must remain human, and who is accountable.'
        },
        pullQuote: 'The organisation should be able to see itself <em>without spying on itself.</em>'
      }}
    />

    {/* ─── 8 · LAYER IV — ORGANISATION FAMILY ──────────────────────────────── */}
    <LayerSection
      layer={LAYERS_META[3]}
      deep={{
        bg: 'var(--surface-paper)',
        q: 'How do related organisations coordinate <em>without becoming one?</em>',
        shortDef: 'The Organisation Family layer supports constellations of related organisations, ventures, projects, communities, or initiatives that share purpose, infrastructure, people, capital, learning, or strategic direction.',
        body: [
          'Not every future organisation will be one company with one boundary.',
          'Many emerging systems look more like families: a venture studio with multiple ventures, a network of aligned organisations, a foundation with initiatives and partner projects, a regenerative ecosystem with shared infrastructure, a movement with local chapters, a constellation of organisations sharing purpose but not ownership.',
          'This layer matters because much of the future of work will happen <em>between</em> organisations, not only inside them. People may move between related ventures. A practice developed in one team may help another. One organisation may need talent that another can lend.',
          'The challenge is subtle. An organisation family needs coherence without forced uniformity. Too little shared structure and the family becomes a loose collection of logos. Too much central structure and it becomes a holding company wearing a community scarf.',
          '<strong>A family is not a merger.</strong>'
        ],
        holds: ['shared purpose or field', 'member organisations', 'shared infrastructure', 'shared services', 'cross-organisation missions', 'contributor mobility', 'talent and capacity flows', 'capital allocation', 'value-sharing agreements', 'shared learning logs', 'common protocols', 'agent interoperability', 'governance between organisations', 'portfolio diagnostics'],
        weak: ['ventures duplicate effort', 'learning does not travel', 'contributors rebuild context from zero', 'shared services become unclear', 'capital allocation becomes political', 'agents cannot safely move context across boundaries', 'the family becomes either too loose or too controlling'],
        adds: {
          name: 'A Shared Operating Grammar',
          body: 'Portable contributor profiles, cross-organisation mission canvases, shared learning logs, common contribution and value principles, shared agent protocols, interoperable communication rhythms, and federation agreements. AI agents help map talent flows, surface synergies, compare practices, and identify duplicated work. Shared context where useful. Protected context where necessary.'
        },
        pullQuote: 'An organisation family needs <em>shared grammar, not enforced sameness.</em>'
      }}
    />

    {/* ─── 9 · LAYER V — ECOSYSTEM ──────────────────────────────────────────── */}
    <LayerSection
      layer={LAYERS_META[4]}
      deep={{
        q: 'How do independent actors coordinate <em>without central control?</em>',
        shortDef: 'The Ecosystem layer supports collaboration across independent organisations, contributors, communities, funders, partners, agents, and networks that share enough purpose to act together without becoming one institution.',
        body: [
          'The ecosystem is the widest layer of Audax OS. It is where independent actors discover one another, build trust, form alliances, coordinate missions, exchange value, and learn together.',
          'This layer matters because many of the problems worth solving do not fit inside one organisation. Climate transition. Regenerative economies. AI governance. Future-of-work infrastructure. New education systems. Civic renewal. These require many actors moving together without one command centre.',
          'Ecosystem collaboration often depends on charisma, conferences, endless calls, scattered documents, half-remembered introductions, and good people quietly drowning in coordination work.',
          'Audax OS should help make ecosystem collaboration more legible: who is here, what they care about, what they are building, what they need, what they can offer, what missions are open, what trust signals exist.',
          'At this layer, AI agents can help discover alignment, translate context, prepare partnership briefs, route opportunities, maintain public knowledge, and support collective sensemaking. <strong>But the goal is not to centralise the ecosystem.</strong> The goal is to help independent actors find one another and act together with less friction.'
        ],
        holds: ['ecosystem map', 'actors and roles', 'shared questions', 'open missions', 'partnership pathways', 'trust and reputation signals', 'contribution pathways', 'public knowledge commons', 'interoperability standards', 'shared protocols', 'ecosystem learning', 'value and impact flows', 'funder and partner relationships', 'agent-readable organisational profiles'],
        weak: ['people meet but do not collaborate', 'partnerships remain vague', 'trust is local but cannot scale', 'ecosystem knowledge fragments', 'projects duplicate one another', 'funders cannot see coherent opportunity', 'contributors cannot find where to help', 'agents amplify public noise instead of collective intelligence'],
        adds: {
          name: 'An Ecosystem Collaboration Protocol',
          body: 'Shared grammar of quests and missions, open contribution pathways, agent-readable profiles, partnership protocols, trust and reputation signals, public learning commons, value and impact accounting across boundaries, and inter-organisational agent protocols. Making collaboration between organisations as legible as collaboration inside one.'
        },
        pullQuote: 'The ecosystem layer asks: how can many centres <em>act together without becoming one centre?</em>'
      }}
    />

    {/* ─── 10 · SPHERES × LAYERS MATRIX ────────────────────────────────────── */}
    <section className="section" style={{ background: 'var(--surface-paper)' }}>
      <div className="container">
        <h1 className="q-h1">
          <span className="num">10 · Grid</span>
          How do the spheres change <em>across the layers?</em>
        </h1>
        <div className="q-body" style={{ maxWidth: 760, marginBottom: 40 }}>
          <p>The same five spheres operate at every layer, but they do not look the same. Value Accounting for an individual is about livelihood, risk, contribution, and recognition. Value Accounting for an ecosystem is about shared value, funding flows, and impact across independent actors.</p>
          <p>The power of Audax OS is that it gives a shared grammar across scale without pretending every scale is identical.</p>
        </div>
        <table className="mini-matrix">
          <thead>
            <tr>
              <th>Sphere</th>
              <th>Individual</th>
              <th>Team</th>
              <th>Organisation</th>
              <th>Org Family</th>
              <th>Ecosystem</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Value Accounting</th>
              <td>Livelihood and <em>contribution</em></td>
              <td>Team contribution and recognition</td>
              <td>Compensation, ownership, <em>value flows</em></td>
              <td>Shared value and capital allocation</td>
              <td>Value and impact <em>across actors</em></td>
            </tr>
            <tr>
              <th>Organisation of Work</th>
              <td>Personal <em>commitments</em></td>
              <td>Missions and cells</td>
              <td>Quests and strategy</td>
              <td>Cross-org <em>missions</em></td>
              <td>Open ecosystem missions</td>
            </tr>
            <tr>
              <th>Relationship &amp; Purpose</th>
              <td>Agency and <em>boundaries</em></td>
              <td>Trust and repair</td>
              <td>Culture and <em>governance</em></td>
              <td>Shared purpose across ventures</td>
              <td>Alignment without <em>central control</em></td>
            </tr>
            <tr>
              <th>Development &amp; Learning</th>
              <td>Personal <em>growth</em></td>
              <td>Team reflection</td>
              <td>Organisational <em>learning</em></td>
              <td>Portfolio learning</td>
              <td>Collective intelligence</td>
            </tr>
            <tr>
              <th>Communication</th>
              <td>Personal voice and updates</td>
              <td>Team <em>rhythm</em></td>
              <td>Internal and external communication</td>
              <td>Shared narrative and <em>context</em></td>
              <td>Public sensemaking and discovery</td>
            </tr>
          </tbody>
        </table>
        <PullQuote>Same spheres. <em>Different scales.</em> One shared grammar.</PullQuote>
      </div>
    </section>

    {/* ─── 11 · AI AGENTS ACROSS THE LAYERS ────────────────────────────────── */}
    <section className="section">
      <div className="container">
        <h1 className="q-h1">
          <span className="num">11 · Agents</span>
          What role do <em>AI agents</em> play at each layer?
        </h1>
        <div className="q-body" style={{ maxWidth: 760, marginBottom: 40 }}>
          <p>AI agents should not be treated as a feature added to the side of Audax OS. They are part of the architecture. But their role changes by layer.</p>
          <p>The principle remains the same at every layer: <strong>agents support coherence. They do not replace human judgment.</strong></p>
        </div>
        <table className="matrix">
          <thead>
            <tr>
              <th>Layer</th>
              <th>Agent role</th>
              <th>Boundary</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Individual</th>
              <td>Personal coherence companion — helps see commitments, capacity, learning, income visibility, and possible next missions</td>
              <td><em>Serves the person.</em> Protects consent. Does not inform the organisation about the individual without permission.</td>
            </tr>
            <tr>
              <th>Team</th>
              <td>Rhythm keeper and memory holder — prepares agendas, summarises meetings, tracks commitments, notices stale promises, supports retrospectives</td>
              <td>Suggests, does not command. <em>The team remains accountable.</em></td>
            </tr>
            <tr>
              <th>Organisation</th>
              <td>Pattern sensor and coordination support — surfaces patterns across strategy, governance, value, learning, and communication</td>
              <td>Reveals reality. <em>Humans decide.</em> Agent governance must be explicit and auditable.</td>
            </tr>
            <tr>
              <th>Organisation Family</th>
              <td>Bridge-builder and ecosystem librarian — maps talent flows, surfaces synergies, compares practices, identifies duplicated work across ventures</td>
              <td><em>Shares context</em> only within agreements. Protected context remains protected.</td>
            </tr>
            <tr>
              <th>Ecosystem</th>
              <td>Discovery and sensemaking agent — helps actors find alignment, translate context, route opportunities, and maintain public knowledge</td>
              <td>Supports trust. <em>Does not centralise control.</em> Must not become a single point of ecosystem intelligence.</td>
            </tr>
          </tbody>
        </table>
        <PullQuote>At every layer, agents should make reality <em>clearer</em>, not authority <em>murkier.</em></PullQuote>
      </div>
    </section>

    {/* ─── 12 · DIAGNOSTICS ACROSS LAYERS ──────────────────────────────────── */}
    <section className="section" style={{ background: 'var(--surface-paper)' }}>
      <div className="container">
        <h1 className="q-h1">
          <span className="num">12 · Diagnostics</span>
          How can each layer <em>sense what needs attention?</em>
        </h1>
        <div className="q-body" style={{ maxWidth: 760, marginBottom: 40 }}>
          <p>Audax OS should help every layer see its own health. Not to score people. Not to create surveillance. Not to turn the organisation into a compliance aquarium.</p>
          <p>Diagnostics should help each layer ask better questions. The purpose of diagnostics is not control. <strong>It is care with eyes open.</strong></p>
        </div>
        <div className="diagnostic-cards">
          {[
            ['I',   'Individual',          'Am I coherent enough to make and keep good commitments across my contexts?'],
            ['II',  'Team',                'Are we clear, trusted, aligned, learning, and delivering — or are we drifting?'],
            ['III', 'Organisation',        'Can the whole system see where purpose, work, value, relationships, learning, and communication are strong or weak?'],
            ['IV',  'Organisation Family', 'Are we sharing enough infrastructure, learning, and trust without suffocating difference?'],
            ['V',   'Ecosystem',           'Can independent actors discover, trust, coordinate, and learn together without a centre holding everything?']
          ].map(([n, name, q]) => (
            <article key={n} className="diag-card">
              <div className="roman">LAYER {n}</div>
              <h5>{name}</h5>
              <p>{q}</p>
            </article>
          ))}
        </div>
        <PullQuote>The purpose of diagnostics is not control. <em>It is care with eyes open.</em></PullQuote>
      </div>
    </section>

    {/* ─── 13 · PROGRESSIVE ADOPTION ───────────────────────────────────────── */}
    <section className="section">
      <div className="container">
        <h1 className="q-h1">
          <span className="num">13 · Adoption</span>
          Where should an organisation <em>begin?</em>
        </h1>
        <div className="q-body" style={{ maxWidth: 760, marginBottom: 40 }}>
          <p>Audax OS is holistic in architecture. It must be modular in adoption.</p>
          <p>No organisation should be asked to adopt the whole OS at once. That would be less like onboarding and more like being swallowed by a very intelligent whale.</p>
          <p className="lead">Start where <em>the pain is real.</em> Build the doorway first. Let the deeper system unfold through use.</p>
        </div>
        <div className="join-grid" style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}>
          {[
            {
              num: 'Layer I',  name: 'For individuals',
              body: 'Personal coherence assistant — commitments, capacity, learning goals, contribution profile, and personal agents.'
            },
            {
              num: 'Layer II', name: 'For teams',
              body: 'Mission canvas, agreements, commitment ledger, learning harvest, and agent-supported meeting memory.'
            },
            {
              num: 'Layer III', name: 'For organisations',
              body: 'Health map, quest dashboard, agent registry, contribution ledger, and communication rhythm.'
            },
            {
              num: 'Layer IV', name: 'For org families',
              body: 'Shared operating grammar, portable contributor profiles, cross-org missions, and learning commons.'
            },
            {
              num: 'Layer V', name: 'For ecosystems',
              body: 'Open mission board, ecosystem map, partnership protocol, and shared sensemaking infrastructure.'
            }
          ].map(e => (
            <div key={e.num} className="join-card">
              <div className="num">{e.num}</div>
              <h4>{e.name}</h4>
              <p>{e.body}</p>
            </div>
          ))}
        </div>
        <PullQuote>Holistic architecture. <em>Modular adoption.</em></PullQuote>
      </div>
    </section>

    {/* ─── 14 · WHAT BECOMES POSSIBLE ──────────────────────────────────────── */}
    <section className="section">
      <div className="container-narrow">
        <h1 className="q-h1">
          <span className="num">14 · Possibility</span>
          What becomes possible when coherence <em>travels across scale?</em>
        </h1>
        <div className="q-body">
          <p>When the layers are connected, participation becomes clearer.</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: '32px 0' }}>
            {[
              'Individuals can contribute across many contexts without losing themselves.',
              'Teams can form, deliver, learn, and dissolve without leaving fog behind.',
              'Organisations can coordinate purpose, value, governance, communication, learning, and agents without reverting to control.',
              'Organisation families can share infrastructure, talent, capital, and learning without forcing everything into one container.',
              'Ecosystems can move from loose inspiration to shared action.'
            ].map(x => (
              <li key={x} style={{
                padding: '14px 0', borderBottom: '1px solid var(--border-2)',
                fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 400,
                letterSpacing: '-0.015em', color: 'var(--ink-900)', lineHeight: 1.25
              }}>{x}</li>
            ))}
          </ul>
          <p>This is the deeper promise of Audax OS. Not simply better organisations. <strong>Better participation.</strong></p>
          <p>People should be able to enter meaningful work, understand what is being asked, make commitments they can keep, have their contribution recognised, learn through the process, and collaborate with humans and agents across many scales.</p>
          <p>The future of work will not be held together only by offices, job descriptions, managers, and salaries. It will be held together by purpose, trust, visible contribution, shared context, modular work, clear communication, learning loops, and human-agent collaboration.</p>
          <p>Audax OS is one proposal for making that possible.</p>
        </div>
        <PullQuote>The future organisation is not one container. <em>It is a living field of participation.</em></PullQuote>
      </div>
    </section>

    {/* ─── 15 · TRANSITION TO MODES ─────────────────────────────────────────── */}
    <section className="section-tight">
      <div className="container">
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
          borderTop: '1px solid var(--border-1)', paddingTop: 48, gap: 48, flexWrap: 'wrap'
        }}>
          <div style={{ maxWidth: 560 }}>
            <Eyebrow soft>15 · The next page</Eyebrow>
            <h2 className="display" style={{ fontSize: 'clamp(32px, 3.4vw, 48px)', marginBottom: 16 }}>
              How does collaboration <em>actually happen?</em>
            </h2>
            <p style={{ fontSize: 17, fontWeight: 300, lineHeight: 1.55, color: 'var(--ink-600)', marginBottom: 8 }}>
              The five spheres describe what must be healthy. The five layers describe where that health operates.
            </p>
            <p style={{ fontSize: 17, fontWeight: 300, lineHeight: 1.55, color: 'var(--ink-600)' }}>
              But Audax OS also needs to answer: <em>how does collaboration actually happen?</em> In the agentic age there are three modes — Human to Human, Human to Agent, and Agent to Agent. Each behaves differently at every layer.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, paddingTop: 8 }}>
            <Button size="lg" icon="arrow-right" onClick={() => onNav('modes')}>Explore Modes</Button>
            <Button variant="secondary" onClick={() => onNav('build')}>Join to co-create</Button>
          </div>
        </div>
      </div>
    </section>

    <section className="cta-band" style={{ '--cta-image': `url(${HERO_LAY})` }}>
      <div className="wash"></div>
      <div className="cta-band-inner">
        <Eyebrow color="var(--lichen-300)">14 · Participation</Eyebrow>
        <h2>Help design coherence <em>across every scale.</em></h2>
        <p>The layers are where everything else has to land. Bring your scale, your context, your question.</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button onClick={() => onNav('build')} icon="arrow-right">Join to co-create</Button>
          <Button variant="ghost" onClick={() => onNav('modes')}>Explore Modes</Button>
        </div>
      </div>
    </section>
  </>
);

window.PageLayers = PageLayers;
