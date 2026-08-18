/* Audax OS site · Why? page (homepage)
   The argument only. Every "What ...?" section moved verbatim to
   page-map.jsx; "Where does this begin?" is parked pending the Labs page.
   Source copy: client brief (Audax OS — Why Page Revised Draft). */

const NODE_FIELD_BG = 'assets/accent-images/The_Gathering_httpss.mj.runC6iJti0L-5Q_abstract_horizontal_ca_89be8310-4193-4426-a643-b55ced9ca0f6_0.webp';

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

const PageWhy = ({ onNav }) => (
  <>
    {/* 01. HERO — living network over a drifting sumi-e wash */}
    <LivingHero minHeight="92vh">
      <div className="hero-inner reveal" style={{ maxWidth: 880 }}>
        <Eyebrow>For the age of humans and agents</Eyebrow>
        <h1 className="display lg">
          How do we build <em>thriving<br />organisations</em> in the age of<br />humans and agents?
        </h1>
        <p className="lede" style={{ maxWidth: 700, marginBottom: 16 }}>
          The way we organise work was built for a different world. Remote work exposed the cracks. Fractional work widened them. AI agents now make them impossible to ignore.
        </p>
        <p className="lede" style={{ maxWidth: 700, fontStyle: 'italic', marginBottom: 40 }}>
          Audax OS is an open operating system for designing organisations where humans and AI agents work together coherently — across individuals, teams, organisations, organisation families, and ecosystems.
        </p>
        <div className="hero-ctas">
          <Button variant="join" size="lg" icon="arrow-right" onClick={() => window.open(JOIN_URL, '_blank')}>Join to co-create</Button>
        </div>
      </div>
    </LivingHero>

    {/* 02. THE OLD MODEL */}
    <Section n="01 · The old model" q="Why can’t the old organisation hold <em>the new work?</em>">
      <ArtAside image={ART.orbHalf}>
        <p>Most organisations still carry industrial assumptions. Work is divided into functions. Roles are fixed. Authority flows downward. Information climbs upward. Managers coordinate through meetings, reporting lines, and supervision. People are expected to belong mostly to one organisation at a time.</p>
        <p>This model made sense when communication was slow, labour was physically concentrated, expertise was harder to access, and the organisation could be managed as a relatively stable machine.</p>
      </ArtAside>
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

    <WashRule image={ART.spray} flip from="parchment" to="paper" />

    {/* 03. AI AGENTS */}
    <Section n="02 · AI agents" q="Why do AI agents force <em>a complete rethink?</em>" bg="var(--surface-paper)">
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

    <WashRule image={ART.ribbons} tall from="paper" to="parchment" />

    {/* 04. THE COLLABORATION GAP */}
    <Section n="03 · The collaboration gap" q="Why do better tools still fail to create <em>better collaboration?</em>">
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

    <WashRule image={ART.crest} from="parchment" to="paper" />

    {/* 05. OPEN OS, NOT PRODUCT */}
    <Section n="04 · Open OS, not product" q="Why should this be an <em>open OS</em>, not a platform?" bg="var(--surface-paper)" narrow>
      <p>No single platform should own the organisational OS of the agentic age.</p>
      <p>Audax OS is not being designed as one closed product that every organisation must adopt. The ambition is different.</p>
      <p className="lead">Audax OS should become a <em>shared operating system</em>: a language, architecture, and set of principles that many people can build with.</p>

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

    {/* 06. INVITATION */}
    <section className="cta-band" style={{ '--cta-image': `url(${NODE_FIELD_BG})` }}>
      <div className="wash"></div>
      <div className="cta-band-inner">
        <Eyebrow color="var(--lichen-300)">05 · Invitation</Eyebrow>
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
          <Button variant="join" onClick={() => window.open(JOIN_URL, '_blank')} icon="arrow-right">Join to co-create</Button>
          <Button variant="ghost" onClick={() => onNav('spheres')}>Explore the Spheres</Button>
        </div>
      </div>
    </section>
  </>
);

window.PageWhy = PageWhy;
