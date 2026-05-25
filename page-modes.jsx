/* Audax OS site · Modes page — full implementation
   13 question-led sections from the detailed Modes brief.
   Three modes of collaboration:
   Human to Human · Human to Agent · Agent to Agent */

const HERO_MOD = 'assets/backgrounds/The_Gathering_httpss.mj.runqhIVc3YQOmg_abstract_horizontal_in_087652a0-f921-4a1b-a659-60280f755139_1.png';

const MODES_META = [
  {
    n: 'I', glyph: 'H ↔ H', name: 'Human to Human',
    coreQ: 'How do people collaborate with trust, clarity, commitment, and care?',
    needs: ['purpose', 'agreements', 'trust', 'communication', 'conflict pathways', 'visible commitments', 'value recognition', 'learning loops', 'human presence'],
    principle: 'Use agents to make human collaboration more humane, not more managed.',
    art: 'assets/accent-images/The_Gathering_httpss.mj.runN91XiUaHp8U_httpss.mj.runymEnd1koJ_35f5c6fc-fc1b-438c-b64e-1f39d340862f_1.png'
  },
  {
    n: 'II', glyph: 'H ↔ A', name: 'Human to Agent',
    coreQ: 'How do humans delegate to, collaborate with, guide, and learn from AI agents?',
    needs: ['context', 'role clarity', 'permissions', 'boundaries', 'decision rights', 'memory visibility', 'feedback loops', 'escalation rules', 'human accountability'],
    principle: 'Agents need role clarity before autonomy.',
    art: 'assets/accent-images/The_Gathering_httpss.mj.runUUrabdnEXiY_abstract_landscape_cal_c9bf6229-f6fd-4195-a3ed-3d795594174d_0.png'
  },
  {
    n: 'III', glyph: 'A ↔ A', name: 'Agent to Agent',
    coreQ: 'How do agents coordinate with other agents without creating invisible bureaucracy?',
    needs: ['agent identity', 'capability registry', 'shared work ontology', 'delegation contracts', 'provenance', 'audit trails', 'conflict detection', 'interruption points', 'human-readable summaries'],
    principle: 'Protocols before autonomy.',
    art: 'assets/accent-images/The_Gathering_httpss.mj.runC6iJti0L-5Q_abstract_horizontal_ca_2aa5eb38-0f5a-4f05-88cf-543d975b0cb1_3.png'
  }
];

const ModeSection = ({ mode, deep }) => (
  <section className="section" style={deep.bg ? { background: deep.bg } : null}>
    <div className="container">
      <div className="sphere-header">
        <span className="roman">MODE {mode.n}</span>
        <h2 className="name">{mode.glyph} · {mode.name}</h2>
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
          <h6 className="holds">What this mode holds</h6>
          <ul>{deep.holds.map(x => <li key={x}>{x}</li>)}</ul>
          <h6 className="weak">When this mode is weak</h6>
          <ul>{deep.weak.map(x => <li key={x}>{x}</li>)}</ul>
        </div>
        <div className="col">
          <div style={{
            aspectRatio: '4/3',
            background: `url(${mode.art}) center/cover no-repeat`,
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

const PageModes = ({ onNav }) => (
  <>

    {/* ─── 1 · HERO ─────────────────────────────────────────────────────────── */}
    <section className="hero" style={{ '--hero-image': `url(${HERO_MOD})`, minHeight: '92vh', alignItems: 'center' }}>
      <div className="hero-wash"></div>
      <div className="hero-fade"></div>
      <div className="hero-vertical"><span>Three modes of organisational collaboration</span></div>
      <div className="container">
        <div className="hero-inner" style={{ maxWidth: 920 }}>
          <Eyebrow>The three modes</Eyebrow>
          <h1 className="display lg">
            Who, or what, is<br /><em>collaborating now?</em>
          </h1>
          <p className="lede" style={{ maxWidth: 720 }}>
            For most of organisational history, collaboration meant humans working with other humans.
          </p>
          <p className="lede" style={{ maxWidth: 720, marginTop: 16 }}>
            That mode still matters. In fact, it matters more than ever. But the collaboration field has changed. Audax OS is designed for all three modes.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: '40px 0', maxWidth: 480 }}>
            {MODES_META.map(m => (
              <li key={m.n} style={{
                display: 'flex', alignItems: 'baseline', gap: 16,
                padding: '13px 0', borderBottom: '1px solid var(--border-2)',
                fontFamily: 'var(--font-display)', fontSize: 22,
                fontWeight: 400, letterSpacing: '-0.015em', color: 'var(--ink-900)'
              }}>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500,
                  letterSpacing: '0.22em', color: 'var(--forest-600)',
                  minWidth: 24, flexShrink: 0
                }}>{m.n}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--forest-700)', marginRight: 8 }}>{m.glyph}</span>
                {m.name}
              </li>
            ))}
          </ul>
          <div className="hero-ctas">
            <Button size="lg" icon="arrow-down"
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
              Explore the three modes
            </Button>
            <Button size="lg" variant="secondary" onClick={() => window.open(JOIN_URL, '_blank')}>
              Join the dialogue
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* ─── 2 · WHAT IS A MODE? ──────────────────────────────────────────────── */}
    <section className="section manifesto">
      <div className="container">
        <h1 className="q-h1">
          <span className="num">02 · Definition</span>
          What is a <em>mode?</em>
        </h1>
        <div className="q-body">
          <p>A mode is a pattern of collaboration. It describes who or what is working together, and what kind of structure that collaboration requires.</p>
          <p>A human-to-human conversation needs trust, context, presence, meaning, conflict skills, shared language, and commitments.</p>
          <p>A human-to-agent interaction needs context, instructions, permissions, boundaries, feedback, and human accountability.</p>
          <p>An agent-to-agent workflow needs protocols, provenance, roles, limits, escalation, logs, and human-readable summaries.</p>
          <p>The same work may move through all three modes. A person frames a mission with another person. A human asks an agent to research it. That agent asks another agent to analyse the data. A third agent drafts a summary. The team reviews. A human makes the judgment. The system records the learning.</p>
          <p className="lead">If the modes are not designed, <em>collaboration becomes fog.</em></p>
        </div>

        <ModesTriad />

        <div className="q-body" style={{ marginTop: 48 }}>
          <div className="def-split" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
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
            <div className="def-block" style={{ background: 'var(--ink-050)' }}>
              <h6 style={{ color: 'var(--ink-600)' }}>Mode</h6>
              <h3>A pattern of collaboration.</h3>
              <p>Who or what is working together — humans with humans, humans with agents, agents with agents.</p>
            </div>
          </div>
          <div className="def-summary" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
            <div><span className="key">Sphere</span>= <em>what.</em></div>
            <div><span className="key">Layer</span>= <em>where.</em></div>
            <div><span className="key">Mode</span>= <em>how.</em></div>
          </div>
        </div>
      </div>
    </section>

    {/* ─── 3 · WHY DO MODES MATTER NOW? ────────────────────────────────────── */}
    <section className="section">
      <div className="container">
        <h1 className="q-h1">
          <span className="num">03 · Context</span>
          Why does collaboration need <em>a new grammar?</em>
        </h1>
        <div className="q-body">
          <p>The old organisation was designed around human collaboration inside relatively stable structures.</p>
        </div>

        <div className="shift-block">
          <div className="shift-card then">
            <div className="label">THEN · The old model</div>
            <p className="q">Roles fixed. Teams bounded. Managers coordinate. Information moves through meetings, reports, and hierarchy. Work happens mostly inside one organisation.</p>
          </div>
          <div className="shift-card now">
            <div className="label now-label">NOW · The emerging model</div>
            <p className="q">Remote work removed the hidden coordination layer of the office. Fractional work made contribution more fluid. <em>AI agents can now participate in work directly.</em> Collaboration has three modes.</p>
          </div>
        </div>

        <div className="q-body" style={{ marginTop: 40 }}>
          <p>AI agents can participate in work, but only if work is legible. They can extend memory, but only if memory is governed. They can coordinate tasks, but only if authority is clear. They can communicate, but only if provenance and uncertainty are visible. They can collaborate with other agents, but only if humans can inspect and interrupt the chain.</p>
          <p>This means collaboration itself needs a new grammar.</p>
          <p>Not just better tools. Not just smarter assistants.</p>
          <p className="lead">An operating system for how humans and agents work together across <em>purpose, work, trust, value, learning, and communication.</em></p>
        </div>

        <PullQuote>AI agents do not remove organisational ambiguity. <em>They expose it, amplify it, and demand that we finally design it properly.</em></PullQuote>
      </div>
    </section>

    {/* ─── 4 · THREE MODES OVERVIEW ─────────────────────────────────────────── */}
    <section className="section" style={{ background: 'var(--surface-paper)' }}>
      <div className="container">
        <h1 className="q-h1">
          <span className="num">04 · Overview</span>
          What are the <em>three modes</em> of Audax OS?
        </h1>
        <p className="lede" style={{ marginBottom: 56, maxWidth: 760 }}>
          Audax OS holds three collaboration modes. Each mode has a different nature, different risks, and different design needs.
        </p>
        <div className="sphere-overview" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {MODES_META.map(m => (
            <article key={m.n} className="sphere-overview-card" style={{ minHeight: 280 }}>
              <div className="roman">MODE {m.n}</div>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 20, fontWeight: 500,
                color: 'var(--forest-700)', letterSpacing: '0.04em',
                marginBottom: 12, lineHeight: 1
              }}>{m.glyph}</div>
              <h4>{m.name}</h4>
              <p className="q">{m.coreQ}</p>
              <div className="visible">Needs</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '10px 0 0', fontSize: 12, color: 'var(--ink-700)', lineHeight: 1.6 }}>
                {m.needs.slice(0, 4).map(v => <li key={v}>· {v}</li>)}
                <li style={{ color: 'var(--ink-400)' }}>+ {m.needs.length - 4} more</li>
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* ─── 5 · MODE I — HUMAN TO HUMAN ──────────────────────────────────────── */}
    <ModeSection
      mode={MODES_META[0]}
      deep={{
        q: 'How do humans <em>collaborate better</em> with other humans?',
        shortDef: 'Human to Human is the foundational mode of collaboration: people working with people through trust, conversation, commitment, conflict, shared meaning, and mutual responsibility.',
        body: [
          'Human-to-human collaboration is the original operating system of our species.',
          'Before organisations, before companies, before project boards, before agents, people gathered around shared needs and learned how to act together.',
          'This mode does not disappear in the agentic age. It becomes more important.',
          'Because the more powerful our tools become, the more carefully we need to protect the human field of trust, judgment, care, courage, and meaning.',
          'Human-to-human collaboration is where purpose becomes felt. It is where trust is built. It is where conflict is repaired. It is where commitments become real because a person has made a promise to another person.',
          'AI agents can support this mode beautifully. They can help people prepare for conversations. They can summarise meetings. They can remember agreements. They can translate across languages. They can surface tensions early. They can help teams reflect.',
          'But they should not replace the relational field. An agent can remind us of the promise. <strong>It cannot make the promise for us.</strong>',
          'Human-to-human collaboration needs to become more intentional, especially in distributed and fractional work. Trust can no longer depend on being in the same room. Belonging can no longer be left to office osmosis. Shared meaning can no longer hide inside founder telepathy. <em>It must be designed.</em>'
        ],
        holds: ['trust-building', 'shared purpose', 'explicit agreements', 'roles and expectations', 'conversations that matter', 'commitments', 'conflict pathways', 'feedback', 'repair', 'care and appreciation', 'human judgment', 'shared learning', 'relational memory'],
        weak: ['people talk but do not trust', 'commitments become vague', 'conflict hides in silence', 'decisions become political', 'distributed teams become lonely', 'fractional contributors stay peripheral', 'agents become substitutes for conversations people are avoiding', 'culture becomes performance rather than relationship'],
        adds: {
          name: 'Human Collaboration Protocols',
          body: 'Onboarding conversations, team agreements, decision norms, commitment rituals, check-ins, conflict pathways, repair practices, retrospectives, appreciation rituals, learning harvests. AI agents support these as memory-holders, meeting companions, translators, reflective guides, and rhythm keepers. Design principle: use agents to make human collaboration more humane, not more managed.'
        },
        pullQuote: 'The goal is not to make humans more machine-like. <em>It is to remove the avoidable friction that stops humans from doing deeply human work.</em>'
      }}
    />

    {/* ─── 6 · MODE II — HUMAN TO AGENT ─────────────────────────────────────── */}
    <ModeSection
      mode={MODES_META[1]}
      deep={{
        bg: 'var(--surface-paper)',
        q: 'How do humans <em>work well</em> with AI agents?',
        shortDef: 'Human to Agent is the mode where people collaborate directly with AI agents as assistants, guides, researchers, drafters, coordinators, memory-holders, and increasingly capable contributors.',
        body: [
          'Human-to-agent collaboration is the new daily frontier.',
          'At first, this can look simple. Ask a question. Get an answer. Ask for a draft. Receive a draft. But inside organisations, this quickly becomes more serious.',
          'Agents may handle sensitive context. They may draft public communications. They may shape strategic options. They may summarise meetings. They may remember commitments. They may prepare decisions. They may influence what people see, know, and prioritise.',
          'That means human-to-agent collaboration requires design.',
          'Agents need role clarity before autonomy. They need to know: what is the mission? What context matters? What sources may be used? What can be changed? What must not be touched? What requires human judgment? Who is accountable?',
          'The same clarity that helps an agent also helps a human contributor. If a mission is clear enough for an agent to support, it is usually clearer for a new team member too.',
          '<strong>This is the gift hidden inside the annoyance.</strong> AI agents force organisations to describe work, authority, context, purpose, and boundaries more clearly than they could get away with before.'
        ],
        holds: ['agent role cards', 'mission briefs', 'context packets', 'permissions', 'boundaries', 'decision rights', 'memory rules', 'output expectations', 'quality criteria', 'source requirements', 'feedback loops', 'escalation pathways', 'human accountability', 'audit trails'],
        weak: ['agents produce plausible nonsense', 'humans overtrust outputs', 'private context leaks into the wrong place', 'work is delegated without accountability', 'agents imitate authority they do not have', 'people use agents to avoid judgment', 'quality becomes difficult to trace', 'organisations accelerate confusion'],
        adds: {
          name: 'Agent-Ready Work Protocols',
          body: 'The Agent-Ready Mission Canvas defines purpose, context, desired outcome, definition of done, available and forbidden sources, allowed and forbidden actions, output format, quality criteria, decision rights, human owner, escalation path, and memory rules. Agent Role Cards clarify what the agent may access, do, suggest, and never decide — including when it must ask a human.'
        },
        pullQuote: 'Agents need role clarity before autonomy.'
      }}
    />

    {/* ─── 7 · MODE III — AGENT TO AGENT ────────────────────────────────────── */}
    <ModeSection
      mode={MODES_META[2]}
      deep={{
        q: 'How do agents collaborate <em>without becoming invisible bureaucracy?</em>',
        shortDef: 'Agent to Agent is the mode where AI agents coordinate with other AI agents across tasks, teams, workflows, memory, research, decisions, communication, and learning.',
        body: [
          'Agent-to-agent collaboration is the least mature mode. It may also become the most consequential.',
          'At this level, agents do not simply respond to human prompts. They coordinate with one another. One agent gathers research. Another analyses it. Another checks sources. Another drafts a recommendation. Another updates a project context. Another notifies a team. Another notices a risk. Another asks a human to intervene.',
          'This could be powerful. It could also become a fog machine with APIs.',
          'The danger is not that agents collaborate. The danger is that agents create operational reality faster than humans can understand it.',
          'If agents pass work between each other, alter priorities, update records, prepare decisions, or trigger workflows, humans need to be able to inspect what happened. Who did what? Based on what evidence? Under what authority? With what uncertainty? What changed?',
          'Agent-to-agent collaboration needs protocols before autonomy.',
          'Without them, organisations risk creating a black-box bureaucracy: not command-and-control by managers, but command-and-control by invisible chains of automated delegation. <strong>We have enough bureaucracy already. No need to teach it to wear a neural cape.</strong>'
        ],
        holds: ['agent identity', 'agent roles', 'capability registry', 'shared ontology of work', 'delegation contracts', 'handoff packets', 'source trails', 'provenance', 'audit logs', 'conflict detection', 'uncertainty reporting', 'permission boundaries', 'human escalation', 'interruption points', 'review cycles'],
        weak: ['agents act beyond their mandate', 'context moves without consent', 'errors compound across chains', 'nobody knows why a decision was prepared', 'duplicated work multiplies', 'humans lose inspectability', 'accountability becomes diffuse', 'agents optimise locally against the wider purpose', 'the organisation becomes fast but less wise'],
        adds: {
          name: 'Agent Collaboration Protocols',
          body: 'Every agent-to-agent chain includes clear agent identity, role declaration, task contract, permission boundary, source trail, handoff format, quality gate, conflict detection, failure state, escalation rule, human review point, and a narrative summary. Agents need machine-readable structures. Humans need human-readable decision stories. The principle: every important agent-to-agent chain should be able to say what happened, why, which agents were involved, what changed, and what needs human attention.'
        },
        pullQuote: 'Protocols before autonomy.'
      }}
    />

    {/* ─── 8 · MODES × SPHERES MATRIX ──────────────────────────────────────── */}
    <section className="section" style={{ background: 'var(--surface-paper)' }}>
      <div className="container">
        <h1 className="q-h1">
          <span className="num">08 · Systems bridge</span>
          How do the modes <em>change each sphere?</em>
        </h1>
        <div className="q-body" style={{ maxWidth: 760, marginBottom: 40 }}>
          <p>Each collaboration mode changes how the five spheres operate. The modes do not sit outside the spheres. They pass through them.</p>
          <p>Human-to-human asks how people recognise value, organise work, hold relationships, learn together, and communicate clearly. Human-to-agent asks how people delegate, guide, review, and learn with agents. Agent-to-agent asks how agents coordinate across value, work, purpose, learning, and communication without becoming opaque.</p>
        </div>
        <table className="mini-matrix">
          <thead>
            <tr>
              <th>Sphere</th>
              <th>Human ↔ Human</th>
              <th>Human ↔ Agent</th>
              <th>Agent ↔ Agent</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Value Accounting</th>
              <td>Human contribution and recognition</td>
              <td>Human–agent <em>attribution</em></td>
              <td>Multi-agent value ledger</td>
            </tr>
            <tr>
              <th>Organisation of Work</th>
              <td>Missions, cells, commitments</td>
              <td>Agent-ready <em>mission canvas</em></td>
              <td>Agent collaboration protocol</td>
            </tr>
            <tr>
              <th>Relationship &amp; Purpose</th>
              <td>Trust, feedback, repair</td>
              <td>Values interface <em>for agents</em></td>
              <td>Purpose-governed agent constitution</td>
            </tr>
            <tr>
              <th>Development &amp; Learning</th>
              <td>Reflection and growth</td>
              <td>Human–agent <em>learning loop</em></td>
              <td>Federated correction layer</td>
            </tr>
            <tr>
              <th>Communication</th>
              <td>Context and meaning</td>
              <td>Provenance and <em>uncertainty</em></td>
              <td>Human-readable decision story</td>
            </tr>
          </tbody>
        </table>
        <PullQuote>Same spheres. <em>Three modes.</em> One shared grammar.</PullQuote>
      </div>
    </section>

    {/* ─── 9 · MODES × LAYERS MATRIX ───────────────────────────────────────── */}
    <section className="section">
      <div className="container">
        <h1 className="q-h1">
          <span className="num">09 · Scale</span>
          How do the modes behave <em>at different scales?</em>
        </h1>
        <div className="q-body" style={{ maxWidth: 760, marginBottom: 40 }}>
          <p>The three modes also operate differently across the five layers. At the individual layer, human-to-agent collaboration may look like a personal coherence companion. At the ecosystem layer, it may help independent actors discover alignment and coordinate open missions.</p>
          <p>The same mode changes by scale. That is why Audax OS needs both layers and modes.</p>
        </div>
        <table className="mini-matrix">
          <thead>
            <tr>
              <th>Layer</th>
              <th>Human ↔ Human</th>
              <th>Human ↔ Agent</th>
              <th>Agent ↔ Agent</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Individual</th>
              <td>Self-awareness, boundaries, personal relationships</td>
              <td>Personal agent <em>constitution</em></td>
              <td>Personal agent council</td>
            </tr>
            <tr>
              <th>Team</th>
              <td>Agreements, trust, commitments</td>
              <td>Agent role cards and <em>mission support</em></td>
              <td>Team agent protocol</td>
            </tr>
            <tr>
              <th>Organisation</th>
              <td>Governance, culture, strategy</td>
              <td>Organisational <em>agent layer</em></td>
              <td>Agent governance system</td>
            </tr>
            <tr>
              <th>Organisation Family</th>
              <td>Shared operating grammar</td>
              <td>Portable contribution <em>protocol</em></td>
              <td>Federated agent network</td>
            </tr>
            <tr>
              <th>Ecosystem</th>
              <td>Coherence journey and partnership</td>
              <td>Ecosystem-facing <em>agent interface</em></td>
              <td>Inter-organisational agent protocols</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    {/* ─── 10 · CORE DESIGN PRINCIPLES ──────────────────────────────────────── */}
    <section className="section manifesto">
      <div className="container">
        <h1 className="q-h1">
          <span className="num">10 · Principles</span>
          What principles should <em>govern all three modes?</em>
        </h1>
        <div className="q-body" style={{ maxWidth: 760, marginBottom: 56 }}>
          <p>The three modes need different protocols, but they share a common ethic. Audax OS should help humans and agents collaborate in ways that are coherent, humane, transparent, and accountable. The goal is not maximum automation. The goal is wiser collaboration.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 64px' }}>
          {[
            { n: '01', head: 'Human agency over automation theatre', body: 'Agents should extend human agency, not replace it with hidden control.' },
            { n: '02', head: 'Coherence over speed', body: 'Fast incoherence is still incoherence. It just arrives with better formatting.' },
            { n: '03', head: 'Visibility over surveillance', body: 'People and agents need transparent work trails, not covert monitoring.' },
            { n: '04', head: 'Protocols before autonomy', body: 'Autonomy without boundaries becomes operational fog.' },
            { n: '05', head: 'Purpose before optimisation', body: 'Agents should not optimise locally against the soul of the whole.' },
            { n: '06', head: 'Human judgment for irreversible consequences', body: 'Important decisions require accountable human stewardship.' },
            { n: '07', head: 'Consent by architecture', body: 'Privacy, memory, data access, and sharing should be designed explicitly, not handled by vibes and a checkbox.' },
            { n: '08', head: 'Learning at every mode', body: 'Humans learn. Agents learn. Teams learn. Systems learn. Every mode should generate feedback.' },
            { n: '09', head: 'Interoperability over platform capture', body: 'Audax OS should allow many tools, vendors, communities, and organisations to build with it.' },
            { n: '10', head: 'Care with teeth', body: 'Humane does not mean vague. The system should protect dignity and still help people deliver.' }
          ].map(p => (
            <div key={p.n} style={{
              padding: '28px 0',
              borderBottom: '1px solid var(--border-2)',
              display: 'flex', gap: 24, alignItems: 'flex-start'
            }}>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500,
                letterSpacing: '0.04em', color: 'var(--forest-700)',
                flexShrink: 0, minWidth: 28, paddingTop: 6
              }}>{p.n}</span>
              <div>
                <div style={{
                  fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 400,
                  letterSpacing: '-0.015em', color: 'var(--ink-900)', lineHeight: 1.15,
                  marginBottom: 6
                }}>{p.head}</div>
                <div style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.55, color: 'var(--ink-600)' }}>
                  {p.body}
                </div>
              </div>
            </div>
          ))}
        </div>

        <PullQuote>The point is not to automate the organisation. <em>The point is to make collaboration wiser.</em></PullQuote>
      </div>
    </section>

    {/* ─── 11 · THE PROTOCOL STACK ──────────────────────────────────────────── */}
    <section className="section" style={{ background: 'var(--surface-paper)' }}>
      <div className="container">
        <h1 className="q-h1">
          <span className="num">11 · Protocols</span>
          What protocols do <em>the modes require?</em>
        </h1>
        <div className="q-body" style={{ maxWidth: 760, marginBottom: 56 }}>
          <p>Modes become real through protocols. Without protocols, the three modes remain concepts. With protocols, they become usable patterns for work. A small team should be able to use a simple version. A complex organisation should be able to deepen it. The art is right-sized structure.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {[
            {
              mode: 'Human to Human', glyph: 'H ↔ H',
              items: ['Team Agreement', 'Commitment Ledger', 'Decision Log', 'Conflict Pathway', 'Repair Practice', 'Retrospective Ritual', 'Learning Harvest', 'Value Review']
            },
            {
              mode: 'Human to Agent', glyph: 'H ↔ A',
              items: ['Agent Role Card', 'Agent-Ready Mission Canvas', 'Context Packet', 'Permission Profile', 'Memory Agreement', 'Escalation Rule', 'Output Review Pattern', 'Human Accountability Statement']
            },
            {
              mode: 'Agent to Agent', glyph: 'A ↔ A',
              items: ['Agent Identity', 'Capability Registry', 'Delegation Contract', 'Handoff Packet', 'Provenance Trail', 'Quality Gate', 'Conflict Detection', 'Human Review Point', 'Decision Story']
            }
          ].map((col, i) => (
            <div key={i} style={{
              background: i === 0 ? 'var(--surface-white)' : i === 1 ? 'var(--forest-050)' : 'var(--ink-050)',
              border: `1px solid ${i === 1 ? 'var(--forest-200)' : 'var(--border-1)'}`,
              borderRadius: 16,
              padding: '32px 28px'
            }}>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 14, fontWeight: 500,
                color: i === 1 ? 'var(--forest-700)' : 'var(--ink-500)',
                letterSpacing: '0.04em', marginBottom: 6
              }}>{col.glyph}</div>
              <h4 style={{
                fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 400,
                letterSpacing: '-0.02em', color: 'var(--ink-900)', lineHeight: 1.1,
                margin: '0 0 24px'
              }}>{col.mode}</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {col.items.map((item, j) => (
                  <li key={j} style={{
                    fontSize: 14, fontWeight: 400, color: 'var(--ink-800)',
                    padding: '9px 0',
                    borderBottom: '1px solid var(--border-2)',
                    display: 'flex', alignItems: 'baseline', gap: 10
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-mono)', fontSize: 9, fontWeight: 500,
                      color: i === 1 ? 'var(--forest-600)' : 'var(--ink-400)',
                      letterSpacing: '0.04em', flexShrink: 0
                    }}>{String(j + 1).padStart(2, '0')}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <PullQuote>A protocol is a promise <em>made reusable.</em></PullQuote>
      </div>
    </section>

    {/* ─── 12 · DIAGNOSTICS BY MODE ─────────────────────────────────────────── */}
    <section className="section">
      <div className="container">
        <h1 className="q-h1">
          <span className="num">12 · Diagnostics</span>
          How do we know if <em>each mode is healthy?</em>
        </h1>
        <div className="q-body" style={{ maxWidth: 760, marginBottom: 56 }}>
          <p>Each mode needs diagnostics. Not to score people. Not to monitor behaviour. Not to create a dashboard panopticon with tasteful typography.</p>
          <p>Diagnostics should help organisations sense whether collaboration is healthy, legible, accountable, and alive.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {[
            {
              mode: 'Human to Human', glyph: 'H ↔ H', n: 'I',
              questions: [
                'Do people understand the purpose of their collaboration?',
                'Are commitments visible and realistic?',
                'Is trust strong enough for truth?',
                'Are conflict and repair possible?',
                'Are contributions recognised fairly?',
                'Are meetings creating clarity or fog?',
                'Are people learning through the work?'
              ]
            },
            {
              mode: 'Human to Agent', glyph: 'H ↔ A', n: 'II',
              questions: [
                'Does each agent have a clear role?',
                'Are permissions explicit?',
                'Is context sufficient and appropriate?',
                'Does the agent communicate uncertainty?',
                'Is there a human owner for the outcome?',
                'Are outputs reviewed at the right level?',
                'Does the agent know when to stop?'
              ]
            },
            {
              mode: 'Agent to Agent', glyph: 'A ↔ A', n: 'III',
              questions: [
                'Are agent identities and roles clear?',
                'Are handoffs traceable?',
                'Is provenance visible?',
                'Can humans inspect what happened?',
                'Are escalation points defined?',
                'Can humans interrupt the chain?',
                'Does the chain serve the wider purpose?'
              ]
            }
          ].map((card, i) => (
            <div key={i} className="diag-card" style={{ padding: '32px 28px' }}>
              <div className="roman">MODE {card.n} · {card.glyph}</div>
              <h5 style={{ fontSize: 20, marginBottom: 20 }}>{card.mode}</h5>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {card.questions.map((q, j) => (
                  <li key={j} style={{
                    fontSize: 13, fontWeight: 300, color: 'var(--ink-700)',
                    padding: '8px 0', borderBottom: '1px solid var(--border-2)',
                    lineHeight: 1.45, display: 'flex', gap: 10, alignItems: 'flex-start'
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-mono)', fontSize: 9, fontWeight: 500,
                      color: 'var(--forest-600)', letterSpacing: '0.04em',
                      flexShrink: 0, paddingTop: 2
                    }}>→</span>
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <PullQuote>Healthy collaboration is not invisible. <em>It leaves traces humans can understand.</em></PullQuote>
      </div>
    </section>

    {/* ─── 13 · WHAT MUST AUDAX OS PROTECT AGAINST? ────────────────────────── */}
    <section className="section" style={{ background: 'var(--surface-paper)' }}>
      <div className="container">
        <h1 className="q-h1">
          <span className="num">13 · Risks</span>
          What must Audax OS <em>protect against?</em>
        </h1>
        <div className="q-body" style={{ maxWidth: 760 }}>
          <p>An operating system for agentic collaboration carries real risks. These are not hypothetical future risks. Several of them are already present in early deployments.</p>
          <p className="lead">Audax OS should help organisations move forward <em>without becoming what they are trying to avoid.</em></p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, margin: '48px 0' }}>
          {[
            {
              risk: 'Automation replacing human judgment',
              desc: 'Agents can produce confident-sounding outputs that have not been reviewed by anyone accountable. Speed becomes a substitute for wisdom. Decisions happen faster and less wisely.'
            },
            {
              risk: 'Invisible agent authority',
              desc: 'Agents accumulate operational influence without explicit permission. They shape what people see, know, and prioritise — without a declared role or a named human accountable for their outputs.'
            },
            {
              risk: 'Context leaking across boundaries',
              desc: 'Information shared with an agent in one context appears in another context where it should not be. Privacy collapses not through one big breach but through a thousand small violations.'
            },
            {
              risk: 'Surveillance dressed as visibility',
              desc: 'Diagnostics become monitoring. Health checks become performance scoring. The system that was supposed to make work more humane becomes another layer of hidden judgment.'
            },
            {
              risk: 'Platform capture',
              desc: 'Audax OS becomes dependent on one vendor, one API, one set of terms. The open grammar becomes proprietary infrastructure. The commons becomes a product.'
            },
            {
              risk: 'Accountability diffusion',
              desc: 'When agents collaborate with agents, and agents are managed by other agents, the human who is actually accountable for an outcome becomes impossible to identify. Nobody is wrong. The system did it.'
            },
            {
              risk: 'Optimising locally against purpose',
              desc: 'Agents optimise for measurable proxies rather than the deeper mission. Work gets done faster. The organisation becomes less coherent. The metrics improve while the meaning dissolves.'
            },
            {
              risk: 'Using agents to avoid hard conversations',
              desc: 'People delegate conflict, feedback, and difficult truths to agents. The agent says the hard thing. Nobody had the courage to say it. The relationship that needed repair gets a summary instead.'
            }
          ].map((r, i) => (
            <div key={i} style={{
              background: 'var(--surface-white)',
              border: '1px solid var(--border-1)',
              borderRadius: 14,
              padding: '28px 28px',
              display: 'flex', gap: 20
            }}>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500,
                color: 'var(--danger)', letterSpacing: '0.04em',
                flexShrink: 0, paddingTop: 4
              }}>{String(i + 1).padStart(2, '0')}</span>
              <div>
                <div style={{
                  fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 400,
                  letterSpacing: '-0.015em', color: 'var(--ink-900)', lineHeight: 1.15,
                  marginBottom: 8
                }}>{r.risk}</div>
                <p style={{ fontSize: 13, fontWeight: 300, lineHeight: 1.55, color: 'var(--ink-600)', margin: 0 }}>
                  {r.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="q-body" style={{ maxWidth: 760 }}>
          <p>Audax OS is not designed to be paranoid about agents. It is designed to be clear-eyed.</p>
          <p>The risks above do not require AI to be malicious. They only require organisations to be careless, rushed, or politically incentivised to avoid accountability.</p>
          <p className="lead">The antidote to these risks is not less AI. <em>It is better organisational design.</em></p>
        </div>
      </div>
    </section>

    {/* ─── 14 · TRANSITION → WHO FOR? ──────────────────────────────────────── */}
    <section className="section">
      <div className="container">
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '56px 64px',
          background: 'var(--surface-white)',
          border: '1px solid var(--border-1)',
          borderRadius: 20
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500,
              letterSpacing: '0.22em', textTransform: 'uppercase',
              color: 'var(--ink-500)', marginBottom: 12
            }}>14 · THE NEXT PAGE</div>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 52px)',
              fontWeight: 400, letterSpacing: '-0.025em', lineHeight: 1.05,
              color: 'var(--ink-900)', margin: '0 0 16px'
            }}>
              Who is this<br /><em style={{ color: 'var(--forest-700)' }}>OS for?</em>
            </h2>
            <p style={{ fontSize: 17, fontWeight: 300, lineHeight: 1.5, color: 'var(--ink-600)', margin: '0 0 32px', maxWidth: 480 }}>
              Audax OS is designed for the people building, leading, and inhabiting the next generation of organisations. Founders, practitioners, investors, agents.
            </p>
            <Button size="lg" icon="arrow-right" onClick={() => onNav('whofor')}>
              Explore Who For?
            </Button>
          </div>
          <div style={{
            width: 200, height: 200, flexShrink: 0,
            background: 'var(--forest-050)',
            border: '1px solid var(--forest-200)',
            borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <div style={{
              textAlign: 'center',
              fontFamily: 'var(--font-display)', fontSize: 56, fontWeight: 400,
              letterSpacing: '-0.025em', lineHeight: 1,
              color: 'var(--forest-700)', fontStyle: 'italic'
            }}>Who?</div>
          </div>
        </div>
      </div>
    </section>

    <CtaBand
      title="Help define the protocols<br />for <em>human–agent collaboration.</em>"
      body="If you work with agents, build agent infrastructure, or design organisations for the agentic age — the protocols are still being written."
      onPrimary={() => window.open(JOIN_URL, '_blank')}
    />
  </>
);

window.PageModes = PageModes;
