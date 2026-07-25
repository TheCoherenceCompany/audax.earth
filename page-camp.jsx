/* Audax OS site · Camp Audax page
   Landing page for Camp Audax at The Gathering US, Camp Navarro,
   Northern California, 12–18 October 2026. Content merged from the
   Camp Audax Invitation doc, Victor + Christine voice note, and the
   ChatGPT outline review (22 Jul). */

const HERO_CAMP   = 'assets/backgrounds/The_Gathering_httpss.mj.run4FR0A9JrbCs_horizontal_abstract_gr_a3a5ab50-ee9c-4167-ba9d-3c83591ce255_1.png';
const BAND_CAMP_1  = 'assets/backgrounds/The_Gathering_httpss.mj.run4FR0A9JrbCs_horizontal_abstract_gr_f86772ab-5233-4a7c-a2ff-b9f7dcf7d9f8_0.png';
const BAND_CAMP_2  = 'assets/backgrounds/The_Gathering_httpss.mj.runqhIVc3YQOmg_abstract_horizontal_in_38ad27fc-5fb8-4666-ae30-81a3881a6893_3.png';
const CTA_CAMP     = 'assets/backgrounds/The_Gathering_httpss.mj.runqhIVc3YQOmg_abstract_horizontal_in_98617e4b-7005-4e69-8ae6-612455128b0d_0.png';

const CAMP_QUESTIONS = [
  'How can AI help us build wiser organisations?',
  'How can AI support collaboration across teams, cultures, disciplines, movements and ecosystems?',
  'How can regenerative, social justice, future-of-work and impact investment movements coordinate through AI?',
  'How can AI bring nature more fundamentally into planning, governance and decision-making?',
  'What keeps AI in service of human agency as it scales?',
  'Which tools, protocols, values and organisational forms do we need to build now?',
  'What does a genuinely inspiring story about AI and society sound like, and who tells it?'
];

const CAMP_PROFILES = [
  {
    n: 'I', name: 'The Builder',
    working: 'AI and digital tools for collective intelligence, sensemaking, agents for teamwork, organisational intelligence, impact measurement, ecosystem infrastructure.',
    brings: ['Working systems', 'Architecture', 'What actually ships', 'The state of the possible'],
    finds: 'Their work situated inside a wider societal and ecological transition, and people who ask better questions of it.'
  },
  {
    n: 'II', name: 'The Entrepreneur',
    working: 'Product, go-to-market, business models, partnerships, adoption, organisational development, venture creation.',
    brings: ['Distribution', 'Durability', 'Commercial reality', 'The path from prototype to used'],
    finds: 'Collaborators, users, early customers, and a clearer read on where the field is heading.'
  },
  {
    n: 'III', name: 'The Investor',
    working: 'Directing capital towards beneficial AI, impact portfolios, philanthropic strategy, ecosystem funding.',
    brings: ['Capital', 'Field-level view', 'Pattern recognition across teams'],
    finds: 'A live map of teams, tools, narratives and gaps, met in person over six days rather than through decks.'
  },
  {
    n: 'IV', name: 'The Ecosystem Practitioner',
    working: 'Networks, movements, communities, cooperatives, public initiatives, regenerative projects applying these technologies in real contexts.',
    brings: ['The ground truth', 'Real constraints', 'The needs that should shape what gets built'],
    finds: 'Tools, partners and technical collaborators who want to build for actual conditions.'
  },
  {
    n: 'V', name: 'The Wisdom Keeper',
    working: 'Philosophy, psychology, anthropology, sociology, governance, spiritual and human development, systems change, culture and narrative.',
    brings: ['The questions worth asking', 'Long time horizons', 'Moral seriousness'],
    finds: 'A place inside the design process, early enough to matter.'
  }
];

const CAMP_MOVEMENTS = [
  { n: 'I', title: 'Arrive and orient', body: 'Opening circle. Everyone says their goal out loud. Who are you, what have you brought, what are you looking for, and what do you know that you do not yet know?' },
  { n: 'II', title: 'Reveal the field', body: 'Needs, offers, assets, projects and questions made visible across the whole camp. Participants see the room they are actually in.' },
  { n: 'III', title: 'Explore the questions', body: 'Open space. Sessions surface from the people present. Demos, working sessions, provocations, fire circles.' },
  { n: 'IV', title: 'Find the connections', body: 'Coherence Conversations. Facilitated, recorded, consent-based dialogue that builds understanding and surfaces collaboration potential, feeding our synthesis and publishing pipeline.' },
  { n: 'V', title: 'Work on possibilities', body: 'Project studios. Prototypes, partnerships, media, research questions, funding conversations. Actual work, with the people who can do it.' },
  { n: 'VI', title: 'Name commitments', body: 'Connect for action. Two people find something worth building and declare it on the spot: a voice note, a photo, a short film, recorded in the moment and released into the camp’s live feed.' },
  { n: 'VII', title: 'Carry it forward', body: 'Closing harvest. Each participant leaves with a named next step and the support to take it.' }
];

const CAMP_LOOP_FADING = [
  'Warm conversation', 'Good intentions', 'No visible commitment',
  'Context lost', 'Relationships cool'
];
const CAMP_LOOP_COHERENCE = [
  'Conversation', 'Relationship', 'Declared commitment',
  'Collaboration', 'Learning harvested', 'Wider field'
];

const CAMP_LEAVE_WITH = [
  'At least one named action and one follow-up. This is our commitment as hosts.',
  'Relationships formed through shared experience in nature, as whole humans rather than job titles.',
  'A field-level view of what is being built, funded, tested and struggled with across the space.',
  'Your work seen with depth and nuance by people equipped to understand it.',
  'A place in a shared narrative and roadmap for AI in service of a regenerative future.',
  'A camp agent you helped raise, and a record of everything that emerged.',
  'Continuity: the post-Camp Coherence Conversations event, and the people you bring into it.'
];

const CAMP_EMERGE = [
  'Continued relationships', 'Research or learning groups', 'Product collaborations',
  'Prototypes', 'New ventures', 'Employment', 'Investment conversations',
  'Shared media and publications', 'Application partnerships',
  'Experiments in inter-organisational agent communication'
];

const CAMP_PRACTICAL = [
  ['Dates', '12–18 October 2026 (arrival Monday 2pm, closing Sunday 10am)'],
  ['Location', 'Camp Navarro, 901 Masonite Industrial Rd, Navarro, CA 95463'],
  ['Duration', '7 days, 6 nights'],
  ['Capacity', 'TBC'],
  ['How to join', 'Apply to join Camp Audax — details TBC'],
  ['Cost', "Camp ticket TBC · accommodation from $35/night (tent) to $50/night (cabin or glamping) · meal plans $150 (3-day) or $300 (6-day) · bedding package $50"],
  ['Food', "Breakfast and dinner daily from Camp Navarro's kitchen, plus café, pizza and BBQ through the day"],
  ['Language', 'English'],
  ['Scholarships', 'Some scholarship and volunteer places available — contact us'],
  ['Refunds', 'No refunds after 15 August; ticket transfers possible'],
  ['Preparation', 'Pre-Camp conversational onboarding and an optional Coherence Conversation'],
  ['Recording', 'Opt-in, consent-based, reviewable']
];

const CAMP_FAQ = [
  ['What is a Camp?', 'A working village within The Gathering, with its own crew, culture and programme, inside a wider field of 500 people.'],
  ['Do I need a project already?', 'Bring something real: a project, a question, a tool, capital, a practice, or experience.'],
  ['Can I attend without using the agent?', 'Yes. Fully.'],
  ['What if the ticket is a stretch?', 'Scholarship and volunteer options exist. Get in touch.']
];

const PageCamp = () => {
  return (
    <>
    {/* ─── HERO ─────────────────────────────────────────────────────────────── */}
    <section className="hero" style={{ '--hero-image': `url(${HERO_CAMP})`, minHeight: '96vh', alignItems: 'center' }}>
      <div className="hero-wash"></div>
      <div className="hero-fade"></div>
      <div className="hero-vertical"><span>The Gathering US · Camp Navarro, California</span></div>
      <div className="container">
        <div className="hero-inner" style={{ maxWidth: 860 }}>
          <Eyebrow>Camp Audax</Eyebrow>
          <h1 className="display lg">
            AI as the coordination layer<br />of a <em>regenerative</em> society.
          </h1>
          <p className="lede" style={{ maxWidth: 680 }}>
            A Camp is a working village inside The Gathering: its own crew, its own programme, its own culture, held for six days inside a wider field of 500 people. Camp Audax is the one for people building, funding, applying and philosophically shaping AI for societal good.
          </p>
          <p className="lede" style={{ maxWidth: 680, marginTop: 16 }}>
            Audax OS is developed through practice. Camp Audax is where the practice gathers in one forest.
          </p>
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 500,
            letterSpacing: '0.08em', color: 'var(--ink-500)', margin: '28px 0 0'
          }}>
            Camp Navarro, Northern California · 12–18 October 2026 · capacity TBC · applications close TBC
          </p>
          <div className="hero-ctas" style={{ marginTop: 40 }}>
            <Button size="lg" icon="arrow-right" onClick={() => window.open(JOIN_URL, '_blank')}>Apply to join Camp Audax</Button>
            <Button variant="ghost" onClick={() => window.open(JOIN_URL, '_blank')}>Meet the Camp agent</Button>
          </div>

          <div className="insight-grid" style={{ marginTop: 64 }}>
            {[
              ['Build across disciplines', 'Builders, operators, investors, practitioners and wisdom keepers in one room for six days.'],
              ['Move from ideas to action', 'Every participant leaves with at least one named next step and support in taking it.'],
              ['Continue beyond the Camp', 'The journey starts before you arrive and carries on after you leave.']
            ].map(([h, p]) => (
              <article key={h} className="insight-card">
                <h4>{p}</h4>
                <p style={{ marginTop: 10, fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--forest-700)' }}>{h}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ─── 01 · THE THEME ───────────────────────────────────────────────────── */}
    <section className="section">
      <div className="container">
        <h1 className="q-h1">
          <span className="num">01 · The theme</span>
          What are we <em>gathering around?</em>
        </h1>
        <div className="q-body" style={{ maxWidth: 760 }}>
          <p>Camp Audax explores how AI helps individuals, teams, organisations, networks, movements and ecosystems collaborate at a level that was previously too complex, too slow, or too expensive to attempt.</p>
          <p>Better sensemaking. Better agreements. Better mentoring. Better value flows. Better ecosystem coordination. More life-affirming decisions.</p>
          <p>We hold a picture of machines carrying more of the mechanical burden, so that humans can do what humans do best: dreaming, sensing, relating, building trust, creating meaning, holding values, and deepening relationship with each other and the living world.</p>
          <p className="lead">One question holds the week, large and slightly unreasonable:</p>
          <p className="lead"><em>Can AI help humanity reach a regenerative global society within the next hundred years?</em></p>
        </div>

        <h6 style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ink-500)', margin: '48px 0 8px' }}>The questions we bring</h6>
        <ol className="q-list">
          {CAMP_QUESTIONS.map(q => <li key={q}>{q}</li>)}
        </ol>

        <div className="q-body" style={{ maxWidth: 760, marginTop: 32 }}>
          <p>The programme is co-created. Bring your questions, your needs, your projects and your proposals.</p>
        </div>
        <PullQuote>The century is asking for large questions. <em>It is time somebody answered one properly.</em></PullQuote>
      </div>
    </section>

    {/* ─── 02 · THE CAMP AGENT ──────────────────────────────────────────────── */}
    <section className="section manifesto">
      <div className="container-narrow">
        <h1 className="q-h1">
          <span className="num">02 · The camp agent</span>
          What happens when the camp <em>has its own agent?</em>
        </h1>
        <div className="q-body">
          <p>Some communities keep a dog. We are raising an agent.</p>
          <p>Camp Audax runs with an AI agent woven through the physical experience. It holds the memory of the week: who is here, what is happening, which conversations are live, which connections have been declared, and what emerged at 7am while you were asleep in a ShiftPod.</p>
          <p>It works on consent. It knows what participants choose to tell it. It helps you orient, remember, connect and follow through, and it leaves every judgment that matters to you.</p>
          <p>You can talk to it. You can add to it. You can shape its personality, because we are raising it together, in public, across six days.</p>
          <p>This makes the Camp a live prototype of the thing it is discussing: a consent-based, agent-supported gathering, tested at human scale in a forest.</p>
        </div>
        <PullQuote>An agent can remind us of the promise. <em>The promise is still ours to make.</em></PullQuote>
      </div>
    </section>

    <ChapterBand image={BAND_CAMP_1} kicker="Camp Navarro" numeral="II" label="Northern California" tint="forest" />

    {/* ─── 03 · WHO COMES ───────────────────────────────────────────────────── */}
    <section className="section" style={{ background: 'var(--surface-paper)' }}>
      <div className="container">
        <h1 className="q-h1">
          <span className="num">03 · Who comes</span>
          Who is <em>Camp Audax for?</em>
        </h1>
        <div className="q-body" style={{ maxWidth: 760, marginBottom: 40 }}>
          <p>Five profiles, each bringing something the others need. The value comes from all five being in the same room, in the same week, in the same forest.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {CAMP_PROFILES.map((p, i) => (
            <div key={p.n} className="aud-row" style={{ paddingTop: i === 0 ? 0 : undefined }}>
              <div>
                <h6>Profile {p.n}</h6>
                <h3>{p.name}</h3>
              </div>
              <div className="who-grid" style={{ gridTemplateColumns: '1.1fr 1fr 1fr' }}>
                <div>
                  <h6>Working on</h6>
                  <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.6, color: 'var(--ink-700)', margin: 0 }}>{p.working}</p>
                </div>
                <div>
                  <h6>Brings</h6>
                  <ul>{p.brings.map(x => <li key={x}>{x}</li>)}</ul>
                </div>
                <div>
                  <h6>Finds</h6>
                  <p style={{
                    fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 400,
                    letterSpacing: '-0.01em', lineHeight: 1.4, fontStyle: 'italic',
                    color: 'var(--forest-900)', background: 'var(--forest-050)',
                    border: '1px solid var(--forest-200)', borderRadius: 10,
                    padding: '12px 14px', margin: 0
                  }}>{p.finds}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="q-body" style={{ maxWidth: 760, marginTop: 16 }}>
          <h6 style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ink-500)', margin: '0 0 12px' }}>What every participant brings</h6>
          <p>Something real: a project, a tool, a question, a practice, capital, a network, or a body of experience. Camp Audax runs on reciprocity, with everyone contributing to the programme and to each other's work.</p>
        </div>
        <PullQuote>This camp is for those holding both hope and responsibility around AI. <em>People who see the danger clearly, and who also sense the possibility of humanity coordinating at a level we have never reached.</em></PullQuote>
      </div>
    </section>

    {/* ─── 04 · WISDOM ──────────────────────────────────────────────────────── */}
    <section className="section">
      <div className="container">
        <h1 className="q-h1">
          <span className="num">04 · Wisdom</span>
          Who belongs in the room <em>while this is designed?</em>
        </h1>
        <div className="q-body" style={{ maxWidth: 760 }}>
          <p>The hard problems in AI are increasingly questions about being human. What is worth wanting. What deserves care. Which trade-offs a society can live with. Where authority should sit.</p>
          <p>For most of the history of computing, shaping the technology required fluency in the technology, so those questions were answered late, by whoever happened to be in the building.</p>
        </div>

        <div className="shift-block">
          <div className="shift-card then">
            <div className="label">Then — previous waves</div>
            <p className="q">Technologists built. Everyone else responded afterwards, usually in the form of critique and containment.</p>
          </div>
          <div className="shift-card now">
            <div className="label now-label">Now — this wave</div>
            <p className="q">These systems run on <em>language.</em> Anyone fluent in meaning can shape them: philosophers, elders, anthropologists, therapists, ecologists, storytellers.</p>
          </div>
        </div>

        <div className="q-body" style={{ maxWidth: 760 }}>
          <p>Take synthesis, the work of turning many voices into shared understanding. The engineering is real and we are building it. The decisive question — <em style={{ color: 'var(--forest-700)', fontStyle: 'italic' }}>which questions do we ask?</em> — belongs to philosophy, sociology, anthropology and lived wisdom.</p>
          <p>That is the rude little gift of natural language. It hands the design table back to people who were never given a seat at it.</p>
          <p>So we bring the wisdom keepers inside the build, into the design decisions, the product questions, the protocols and the roadmaps, while all of it is still soft enough to shape.</p>
        </div>

        <h6 style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ink-500)', margin: '48px 0 16px' }}>The conversation we are adding</h6>
        <table className="mini-matrix">
          <thead>
            <tr><th>Already being asked</th><th>What we add to it</th></tr>
          </thead>
          <tbody>
            <tr><th>What will AI replace?</th><td>What should AI help humanity <em>become capable of?</em></td></tr>
            <tr><th>How do we constrain harm?</th><td>What should we <em>intentionally</em> build?</td></tr>
            <tr><th>Who controls the technology?</th><td>Who <em>participates</em> in shaping it?</td></tr>
            <tr><th>How does AI increase output?</th><td>How might AI increase <em>wisdom</em> and collective agency?</td></tr>
          </tbody>
        </table>
        <p style={{ fontSize: 14, fontWeight: 300, color: 'var(--ink-500)', margin: '20px 0 0' }}>Both columns matter. We are here for the right one.</p>

        <PullQuote>Critique arrives after the architecture is poured. <em>We would like to be there for the pour.</em></PullQuote>
      </div>
    </section>

    {/* ─── 05 · THE WEEK ────────────────────────────────────────────────────── */}
    <section className="section" style={{ background: 'var(--surface-paper)' }}>
      <div className="container">
        <h1 className="q-h1">
          <span className="num">05 · The week</span>
          What actually <em>happens?</em>
        </h1>
        <div className="q-body" style={{ maxWidth: 760, marginBottom: 40 }}>
          <p>An indicative rhythm, in seven movements. The programme is co-created, so the detail arrives with the people.</p>
        </div>

        <div className="join-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {CAMP_MOVEMENTS.map(m => (
            <article key={m.n} className="join-card">
              <div className="num">Movement {m.n}</div>
              <h4>{m.title}</h4>
              <p>{m.body}</p>
            </article>
          ))}
        </div>

        <div className="q-body" style={{ maxWidth: 760, marginTop: 40 }}>
          <p>Woven through all seven: redwoods, shared meals, informal time, music, ceremony, rest, and the parts of a week that resist being put on a schedule.</p>
        </div>

        <div style={{
          background: 'var(--forest-050)', border: '1px solid var(--forest-200)',
          borderRadius: 16, padding: '28px 32px', marginTop: 16
        }}>
          <h6 style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--forest-800)', margin: '0 0 12px' }}>What Camp Audax adds</h6>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 19, fontWeight: 400, letterSpacing: '-0.01em', lineHeight: 1.35, color: 'var(--forest-900)', fontStyle: 'italic', margin: 0 }}>
            A facilitated path from arrival to commitment. Asked before you come, at the start, during, and at the close: what connection do you need, what are you offering, and what happens next?
          </p>
        </div>
        <PullQuote>The gathering is the easy part. <em>The follow-up is the product.</em></PullQuote>
      </div>
    </section>

    {/* ─── 06 · THE JOURNEY ─────────────────────────────────────────────────── */}
    <section className="section">
      <div className="container">
        <h1 className="q-h1">
          <span className="num">06 · The journey</span>
          When does the camp <em>begin?</em>
        </h1>

        <div className="contrast-grid" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
          <div className="contrast-col">
            <h6>Before</h6>
            <h3 style={{ fontSize: 26 }}>Prepare</h3>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.55, color: 'var(--ink-700)' }}>Conversational onboarding. Your intentions, offers, needs and questions. Pre-Camp Coherence Conversations, open to those coming and those still deciding. You arrive already knowing the room.</p>
          </div>
          <div className="contrast-col">
            <h6>During</h6>
            <h3 style={{ fontSize: 26 }}>Meet · Explore</h3>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.55, color: 'var(--ink-800)' }}>Six days in the forest. Dialogue, open space, project work, reflection, synthesis, declared commitments.</p>
          </div>
          <div className="contrast-col">
            <h6>After</h6>
            <h3 style={{ fontSize: 26 }}>Commit · Continue</h3>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.55, color: 'var(--ink-800)' }}>Personal and collective synthesis. A post-Camp Coherence Conversations event for all participants, where each person brings two or three more people into the field. Follow-up on commitments.</p>
          </div>
        </div>

        <div className="progression" style={{ gridTemplateColumns: 'repeat(6, 1fr)', marginTop: 40 }}>
          {['Prepare', 'Meet', 'Explore', 'Commit', 'Continue', 'Expand'].map((s, i) => (
            <div key={s} className="progression-step" style={{ minHeight: 120, padding: '20px 12px' }}>
              <h4 style={{ fontSize: 20 }}>{s}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ─── 07 · THE LOOP ────────────────────────────────────────────────────── */}
    <section className="section manifesto">
      <div className="container">
        <h1 className="q-h1">
          <span className="num">07 · The loop</span>
          What keeps going <em>after the fire goes out?</em>
        </h1>
        <div className="q-body" style={{ maxWidth: 760 }}>
          <p>Every gathering runs one of two loops. We are designing hard for the second.</p>
        </div>

        <div className="two-loops">
          <div className="loop loop-ink">
            <div className="loop-title">The fading loop</div>
            <ol className="loop-list">
              {CAMP_LOOP_FADING.map((it, i) => (
                <li key={it}><span className="i">{String(i + 1).padStart(2, '0')}</span><span className="t">{it}</span></li>
              ))}
              <li className="close"><span className="i">↻</span><span className="t">back to warm conversation, next year, with strangers</span></li>
            </ol>
          </div>
          <div className="loop loop-forest">
            <div className="loop-title">The coherence loop</div>
            <ol className="loop-list">
              {CAMP_LOOP_COHERENCE.map((it, i) => (
                <li key={it}><span className="i">{String(i + 1).padStart(2, '0')}</span><span className="t">{it}</span></li>
              ))}
              <li className="close"><span className="i">↻</span><span className="t">back to conversation, with more people and more trust</span></li>
            </ol>
          </div>
        </div>

        <div className="q-body" style={{ maxWidth: 760, marginTop: 32 }}>
          <p>This is the Coherence Journey. People arrive at very different points on it, and the right next step differs for everyone.</p>
        </div>

        <div style={{
          background: 'var(--forest-050)', border: '1px solid var(--forest-200)',
          borderRadius: 16, padding: '28px 32px', marginTop: 8
        }}>
          <h6 style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--forest-800)', margin: '0 0 12px' }}>What Camp Audax adds</h6>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 19, fontWeight: 400, letterSpacing: '-0.01em', lineHeight: 1.35, color: 'var(--forest-900)', fontStyle: 'italic', margin: 0 }}>
            A journey with a before and an after. Coherence Conversations before you arrive. A facilitated harvest as you leave. A full-camp reconvening afterwards, widening the field with every cycle.
          </p>
        </div>
        <PullQuote>A gathering that ends when the fire goes out was a party. <em>Lovely, and something else entirely.</em></PullQuote>
      </div>
    </section>

    {/* ─── 08 · WHAT YOU LEAVE WITH ─────────────────────────────────────────── */}
    <section className="section">
      <div className="container">
        <h1 className="q-h1">
          <span className="num">08 · What you leave with</span>
          Come with a question. <em>Leave with movement.</em>
        </h1>

        <ol className="q-list">
          {CAMP_LEAVE_WITH.map(x => <li key={x} style={{ fontSize: 'clamp(16px, 1.4vw, 20px)' }}>{x}</li>)}
        </ol>

        <div className="q-body" style={{ maxWidth: 760, marginTop: 24 }}>
          <p>You will be supported to identify and take the next meaningful step from wherever you actually are. Founding a startup before breakfast remains entirely optional.</p>
        </div>
        <PullQuote>Six days is short. <em>A relationship built in six days can carry a decade.</em></PullQuote>
      </div>
    </section>

    {/* ─── 09 · WHY NOW ─────────────────────────────────────────────────────── */}
    <section className="section" style={{ background: 'var(--surface-paper)' }}>
      <div className="container-narrow">
        <h1 className="q-h1">
          <span className="num">09 · Why now</span>
          What makes this <em>the moment to gather?</em>
        </h1>
        <div className="q-body">
          <p>Twenty-five years of digital technology taught us something permanent. The architecture of our tools becomes the architecture of our societies. Attention economies. Polarisation. The fracturing of shared reality. We watched software rewrite civic life in real time.</p>
          <p>AI carries the same power at greater scale, and moves faster than any person, team or organisation can track alone. New agents, protocols, capabilities and risks arrive weekly. Meanwhile the social and ecological challenges in front of us ask for coordination our institutions strain to hold.</p>
          <p>The story about AI travelling furthest right now runs on fear. Surveillance. Control. Job loss. Concentrated power. The companies building these systems sell on that fear with striking enthusiasm, given they are also the ones sending the invoices.</p>
          <p>A large and quiet population sees something else in this technology. That voice barely registers in public, because it has never been gathered in one place, given shape, and spoken together.</p>
          <p>Camp Audax gathers that voice and puts it to work, grounded in shipped products, real organisations, deployed capital and hard-won practice.</p>
        </div>
        <PullQuote>A vision becomes credible the moment it is held <em>by people already building it.</em></PullQuote>
      </div>
    </section>

    {/* ─── 10 · WHAT MAY EMERGE ─────────────────────────────────────────────── */}
    <section className="section">
      <div className="container">
        <h1 className="q-h1">
          <span className="num">10 · What may emerge</span>
          One meaningful next movement, <em>chosen by you.</em>
        </h1>
        <div className="q-body" style={{ maxWidth: 760, marginBottom: 32 }}>
          <p>Six days produce different things for different people. Among the paths already visible:</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12 }}>
          {CAMP_EMERGE.map((c, i) => (
            <div key={c} style={{
              padding: '20px 18px',
              background: i % 4 === 0 ? 'var(--forest-050)' : 'var(--surface-white)',
              border: '1px solid var(--border-1)',
              borderRadius: 12,
              fontFamily: 'var(--font-display)',
              fontSize: 15, fontWeight: 400, letterSpacing: '-0.01em', lineHeight: 1.2,
              color: 'var(--ink-900)'
            }}>{c}</div>
          ))}
        </div>
        <div className="q-body" style={{ maxWidth: 760, marginTop: 32 }}>
          <p>Our responsibility as hosts is to help each participant find the right step and take it. The shape of that step belongs to them.</p>
        </div>
        <PullQuote>We hold the container. <em>You choose the direction.</em></PullQuote>
      </div>
    </section>

    {/* ─── SIDEBAR · HOW AI SUPPORTS THE JOURNEY ────────────────────────────── */}
    <section className="section" style={{ background: 'var(--surface-paper)' }}>
      <div className="container">
        <h1 className="q-h1">
          <span className="num">Sidebar · The AI layer</span>
          How AI <em>supports the journey.</em>
        </h1>
        <div className="q-body" style={{ maxWidth: 760, marginBottom: 40 }}>
          <p>The AI layer reduces administrative friction and collective amnesia, while keeping human judgment, privacy, and the freedom to be fully present.</p>
        </div>

        <div className="contrast-grid" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
          <div className="contrast-col">
            <h6>Before</h6>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.6, color: 'var(--ink-700)' }}>A conversational orientation rather than a form. Why are you coming? What are you building? What questions are alive for you? With your permission, the agent introduces relevant themes and surfaces participants working on related questions. It shows relevance and explains why. You choose.</p>
          </div>
          <div className="contrast-col">
            <h6>During</h6>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.6, color: 'var(--ink-800)' }}>Practical navigation: what is happening now, who is working on what, where a discussion is running, what you have committed to so far. Opt-in Coherence Conversations recording, with everyone present confirming consent and reviewing the synthesis.</p>
          </div>
          <div className="contrast-col">
            <h6>After</h6>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.6, color: 'var(--ink-800)' }}>Review what you explored. Remember your commitments. Reconnect with relevant people. Decide what to continue, revise, or release. Collective memory maintained from participant-approved syntheses.</p>
          </div>
        </div>

        <div style={{ marginTop: 24, padding: '24px 28px', background: 'var(--surface-white)', border: '1px solid var(--border-1)', borderRadius: 14 }}>
          <h6 style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ink-500)', margin: '0 0 10px' }}>Attention principle</h6>
          <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.5, color: 'var(--ink-700)', margin: 0 }}>The agent is available when useful and quiet when it is not. Sometimes the best interface is a recorder on a table or a single physical display, rather than an app pecking at everyone's pockets in a forest.</p>
        </div>
      </div>
    </section>

    {/* ─── INSET · THE CAMP AUDAX AGENT ─────────────────────────────────────── */}
    <section className="section">
      <div className="container-narrow">
        <div style={{
          background: 'var(--forest-050)', border: '1px solid var(--forest-200)',
          borderRadius: 20, padding: '48px 48px'
        }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--forest-700)', marginBottom: 16 }}>The Camp Audax agent</div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.1, color: 'var(--ink-900)', margin: '0 0 20px' }}>
            Guide, connector, and <em style={{ color: 'var(--forest-700)', fontStyle: 'italic' }}>collective memory.</em>
          </h3>
          <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.6, color: 'var(--forest-900)', margin: '0 0 28px', maxWidth: 640 }}>
            A consent-based AI companion that helps participants navigate the Camp, preserve what matters, find relevant connections, and carry commitments beyond the gathering.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 24 }}>
            <div>
              <h6 style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--forest-700)', margin: '0 0 10px' }}>What it does</h6>
              <p style={{ fontSize: 14, fontWeight: 400, color: 'var(--forest-900)', margin: 0 }}>Explains · orients · synthesises · connects · remembers · reminds</p>
            </div>
            <div>
              <h6 style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--forest-700)', margin: '0 0 10px' }}>What it knows</h6>
              <p style={{ fontSize: 14, fontWeight: 400, color: 'var(--forest-900)', margin: 0 }}>Only what the Camp and its participants have explicitly allowed it to know.</p>
            </div>
            <div>
              <h6 style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--forest-700)', margin: '0 0 10px' }}>What it leaves to you</h6>
              <p style={{ fontSize: 14, fontWeight: 400, color: 'var(--forest-900)', margin: 0 }}>What matters to you · who you should work with · what your commitments are worth · every judgment about another human being</p>
            </div>
            <div>
              <h6 style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--forest-700)', margin: '0 0 10px' }}>How its role changes</h6>
              <p style={{ fontSize: 14, fontWeight: 400, color: 'var(--forest-900)', margin: 0 }}><em>Before:</em> orientation companion &middot; <em>during:</em> practical navigator and memory keeper &middot; <em>after:</em> reflection partner and bridge to follow-through</p>
            </div>
          </div>

          <div style={{ background: 'var(--surface-white)', border: '1px solid var(--forest-200)', borderRadius: 12, padding: '20px 22px', marginBottom: 24 }}>
            <h6 style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-500)', margin: '0 0 10px' }}>Consent and privacy</h6>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.55, color: 'var(--ink-700)', margin: 0 }}>Recording is explicitly opt-in and visible. You can participate fully without using the agent. You can review, edit, export and delete your own material. You choose what stays private, what organisers see, what other participants see, and what becomes public.</p>
          </div>

          <p style={{ fontSize: 14, fontWeight: 300, fontStyle: 'italic', color: 'var(--forest-800)', margin: '0 0 28px' }}>
            Participants shape its language, personality, behaviours and boundaries. Some communities have a dog. This one is raising an agent.
          </p>

          <Button icon="arrow-right" onClick={() => window.open(JOIN_URL, '_blank')}>Meet the agent</Button>
        </div>
      </div>
    </section>

    <ChapterBand image={BAND_CAMP_2} kicker="200 acres" numeral="XI" label="Ancient redwood forest" tint="deep" />

    {/* ─── 11 · THE PLACE ───────────────────────────────────────────────────── */}
    <section className="section">
      <div className="container-narrow">
        <h1 className="q-h1">
          <span className="num">11 · The place</span>
          Where does this <em>happen?</em>
        </h1>
        <div className="q-body">
          <p>200 acres of ancient redwood forest at Camp Navarro, Northern California. 500+ purpose-driven participants across 20+ camps. Seven days and six nights.</p>
          <p>The Gathering US is a temporary village. Campfires in place of boardrooms, conversations in place of presentations, redwoods in place of hotel ballrooms. Your ticket opens Camp Audax programming and every public session across the property.</p>
          <p>The land does something to people. It slows you down, opens you up, and creates the conditions for the kind of conversation that arrives when you step away from everything ordinary.</p>
        </div>
        <div style={{ marginTop: 8 }}>
          <Button variant="secondary" icon="arrow-right" onClick={() => window.open('https://regenworld.net', '_blank')}>Full Gathering details — regenworld.net</Button>
        </div>
      </div>
    </section>

    {/* ─── 12 · WHO IS CONVENING ────────────────────────────────────────────── */}
    <section className="section" style={{ background: 'var(--surface-paper)' }}>
      <div className="container-narrow">
        <h1 className="q-h1">
          <span className="num">12 · Who is convening</span>
          Convened by builders <em>who are participating too.</em>
        </h1>
        <div className="q-body">
          <p>Camp Audax is hosted by <a href="https://coherence.tv/" target="_blank" rel="noreferrer" style={{ color: 'var(--forest-700)' }}>The Coherence Company</a>, the first living lab of Audax OS, alongside partner organisations building in this space.</p>
          <p>The Coherence Company is one participant among several. The camp carries many goals, and every organisation and participant brings their own.</p>
        </div>
        <ul style={{ listStyle: 'none', padding: 0, margin: '32px 0' }}>
          {[
            ['Programme and facilitation', 'TBC'],
            ['Technology and agent', 'The Coherence Company'],
            ['Media', 'TBC'],
            ['Data, consent and safeguarding', 'TBC'],
            ['Post-Camp follow-through', 'TBC']
          ].map(([role, who]) => (
            <li key={role} style={{
              display: 'flex', justifyContent: 'space-between', gap: 16,
              padding: '14px 0', borderBottom: '1px solid var(--border-2)',
              fontSize: 15, color: 'var(--ink-800)'
            }}>
              <span>{role}</span>
              <span style={{ color: 'var(--ink-500)' }}>{who}</span>
            </li>
          ))}
        </ul>
        <div className="q-body">
          <p>The OS gets tested here too. Six days of real commitments, real tensions, real missions, real people, real agents, and real learning loops, in a forest, with the humidity and the mosquitoes and everything.</p>
        </div>
        <PullQuote>The organisation is not backstage. <em>It is part of the experiment.</em></PullQuote>
      </div>
    </section>

    {/* ─── 13 · PRACTICAL ───────────────────────────────────────────────────── */}
    <section className="section">
      <div className="container">
        <h1 className="q-h1">
          <span className="num">13 · Practical</span>
          The practical shape <em>of the camp.</em>
        </h1>
        <table className="matrix" style={{ marginBottom: 56 }}>
          <tbody>
            {CAMP_PRACTICAL.map(([k, v]) => (
              <tr key={k}><th>{k}</th><td>{v}</td></tr>
            ))}
          </tbody>
        </table>

        <h6 style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ink-500)', margin: '0 0 16px' }}>FAQ</h6>
        <div>
          {CAMP_FAQ.map(([q, a]) => (
            <div key={q} style={{ padding: '20px 0', borderBottom: '1px solid var(--border-2)' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 19, fontWeight: 400, letterSpacing: '-0.015em', color: 'var(--ink-900)', margin: '0 0 8px' }}>{q}</p>
              <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.55, color: 'var(--ink-700)', margin: 0 }}>{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ─── 14 · FINAL INVITATION ────────────────────────────────────────────── */}
    <section className="section" style={{ background: 'var(--bg-deep)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'var(--grad-deep)', opacity: 1, pointerEvents: 'none' }}></div>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${CTA_CAMP})`, backgroundSize: 'cover', backgroundPosition: 'center',
        opacity: 0.2, mixBlendMode: 'screen', pointerEvents: 'none'
      }}></div>
      <div className="container-narrow" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <Eyebrow color="var(--lichen-300)">A closing invitation</Eyebrow>
        <h2 className="display" style={{ color: '#fff', fontSize: 'clamp(36px, 4.5vw, 64px)', marginBottom: 28 }}>
          Bring what you are building. <em>Bring what you are questioning.</em>
        </h2>
        <p style={{ fontSize: 18, fontWeight: 300, lineHeight: 1.55, color: 'rgba(255,255,255,0.82)', maxWidth: 680, margin: '0 auto 20px' }}>
          The direction of AI is still being formed. The people needed are scattered across disciplines that rarely work together closely enough to shape what actually gets built.
        </p>
        <p style={{ fontSize: 18, fontWeight: 300, lineHeight: 1.55, color: 'rgba(255,255,255,0.82)', maxWidth: 680, margin: '0 auto 40px' }}>
          Come to share what you are learning. Come to test your questions. Come to find collaborators. Come to help write a story about AI rooted in coordination, regeneration, wisdom and human possibility.
        </p>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontStyle: 'italic', color: 'var(--lichen-300)', maxWidth: 620, margin: '0 auto 40px' }}>
          The redwoods are 400 years old. They have watched a few technologies arrive. Let's give them something worth watching.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button size="lg" icon="arrow-right" onClick={() => window.open(JOIN_URL, '_blank')}>Apply to join Camp Audax</Button>
          <Button variant="ghost" onClick={() => window.open(JOIN_URL, '_blank')}>Meet the Camp Audax agent</Button>
        </div>
      </div>
    </section>
    </>
  );
};

window.PageCamp = PageCamp;
