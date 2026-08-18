/* Audax OS site · Sorrel, the camp agent
   ────────────────────────────────────────────────────────────────────────
   This was movement 05 of the camp page. It was the longest section there
   and the only one that asked the reader to care about a piece of software
   before they had decided about a week in a forest, so it moved out to its
   own page. The camp page now points at it from the hero, the closing CTA
   and the FAQ.

   Stand-alone (`chrome: false`), and deliberately built out of the camp
   page's own parts rather than the site's: CampNav, CampFooter, CampInk,
   CampCascade, CampKicker, CampPhoto, CampQuote, SorrelMark and the camp
   note styles are all top-level in page-camp.jsx, which index.html loads
   first. Nothing here is duplicated from it — this file only holds the
   copy that left, and the hero that replaces the section heading. */

/* Not `shadow`: that one runs full-bleed with a caption further down the
   page, and the same photograph twice reads as a mistake rather than a
   motif. */
const SORREL_HERO = 'assets/photos/canopy.webp';

/* What it is, in four claims. Was a 2×2 card grid mid-section; it is the
   summary of the whole page now, so it leads. */
const SORREL_CARDS = [
  ['What it does', 'Explains · orients · synthesizes · connects · remembers · reminds'],
  ['What it knows', 'Only what you and the rest of us have explicitly allowed it to know.'],
  ['What it leaves to you', 'What matters to you · who you should work with · what your commitments are worth · every judgment about another human being'],
  ['How its role changes', 'Before: orientation companion · during: practical navigator and memory keeper · after: reflection partner and bridge to follow-through']
];

const SORREL_JOURNEY = [
  ['Before', 'A conversational orientation rather than a form. Why are you coming? What are you building? What questions are alive for you? With your permission, Sorrel introduces relevant themes and surfaces others working on related questions. It shows relevance and explains why. You choose.'],
  ['During', 'Practical navigation: what is happening now, who is working on what, where a discussion is running, what you have committed to so far. Opt-in Coherence Conversations recording, with everyone present confirming consent and reviewing the synthesis.'],
  ['After', 'Review what you explored. Remember your commitments. Reconnect with relevant people. Decide what to continue, revise, or release. Collective memory maintained from participant-approved syntheses.']
];

/* Sorrel's open questions — the "raise it together" invitation, made
   concrete. Victor: "it's an invitation to together raise the agent."
   Lived in page-camp.jsx as CAMP_UNDECIDED; moved with its section. */
const SORREL_UNDECIDED = [
  ['Its voice', 'Warm or dry. Brief or expansive. Whether it is funny.'],
  ['Its refusals', 'What it declines to answer, and how it says so.'],
  ['Its opinions', 'Whether it has any, and whether it volunteers them.'],
  ['Its presence', 'Whether it speaks at the fire circle or stays out of it.'],
  ['Its forgetting', 'What it lets go of, when, and who decides.'],
  ['Its face', 'The mark above is a first sketch, not a decision.']
];

const PageSorrel = ({ onNav }) => {
  // the camp page's own way of moving between its sections, from a page
  // that is not it: hand the section back through the router
  const jumpToCamp = (id) => { window.location.hash = `#camp/${id}`; };

  return (
    <>
    <CampNav />

    {/* ─── HERO ─────────────────────────────────────────────────────────
         Dark, and the mark rather than a photograph: this page is about
         one thing, and that thing has a face. */}
    <section className="sorrel-hero" style={{ '--sorrel-shot': `url(${SORREL_HERO})` }}>
      <div className="sorrel-hero-shot"></div>
      <div className="container sorrel-hero-copy">
        <a
          className="sorrel-back"
          href="#camp"
          onClick={(e) => { e.preventDefault(); onNav ? onNav('camp') : jumpToCamp('why'); }}
        >&larr; Camp Audax</a>
        <SorrelMark size={104} tone="var(--lichen-300)" />
        <h1 className="display lg">
          Some communities keep a dog. <em>We are raising an agent.</em>
        </h1>
        <p className="lede">
          Sorrel is the camp&rsquo;s agent: a working name for something we are building, and would like you to help finish.
        </p>
      </div>
    </section>

    {/* ─── THE NAME, AND WHAT IT IS ─────────────────────────────────────── */}
    <section className="section" style={{ background: 'var(--surface-parchment)' }}>
      <div className="container">
        <div className="sorrel-intro">
          <div className="sorrel-nameplate">
            <SorrelMark size={140} />
            <div className="sorrel-name">Sorrel</div>
            <div className="sorrel-name-note">Working name</div>
          </div>
          <div className="q-body">
            <p>Redwood sorrel carpets the forest floor at Navarro. In direct sun it folds its three leaflets shut; in shade it opens again. We wanted that instinct in an agent, so we borrowed the name.</p>
            <p>We have woven Sorrel through the physical experience of our camp. It holds the memory of the week: who is here, what is happening, which conversations are live, which connections have been declared, and what emerged at 7am while you were asleep in a ShiftPod.</p>
            <p>It works on consent. It knows only what you choose to tell it. It helps you orient, remember, connect and follow through, and it leaves every judgment that matters to you.</p>
            <p>That makes us a live prototype of the thing we are discussing: a consent-based, agent-supported gathering, tested at human scale in a forest.</p>
          </div>
        </div>

        <CampCascade style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 48 }}>
          {SORREL_CARDS.map(([h, b]) => (
            <div key={h} style={{ background: 'var(--surface-white)', border: '1px solid var(--border-1)', borderRadius: 12, padding: '20px 22px' }}>
              <h6 style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--forest-700)', margin: '0 0 10px' }}>{h}</h6>
              <p style={{ fontSize: 14, fontWeight: 400, lineHeight: 1.55, color: 'var(--ink-800)', margin: 0 }}>{b}</p>
            </div>
          ))}
        </CampCascade>
      </div>
    </section>

    <WashRule image={ART.wave} from="parchment" to="white" />

    {/* ─── ACROSS THE JOURNEY ───────────────────────────────────────────── */}
    <section className="section" style={{ background: 'var(--surface-white)' }}>
      <div className="container">
        {/* Christine: "if we could weave the AI digital experience into the
            physical in a way that's harmonious and helpful to the goal." */}
        <CampInk as="h2" className="q-h1">
          A week is three different problems. <em>So is the agent.</em>
        </CampInk>
        <CampKicker top={32}>Across the journey</CampKicker>
        <CampCascade className="contrast-grid" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
          {SORREL_JOURNEY.map(([h, b]) => (
            <div className="contrast-col" key={h}>
              <h6>{h}</h6>
              <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.6, color: 'var(--ink-800)' }}>{b}</p>
            </div>
          ))}
        </CampCascade>

        <CampPhoto shot="shadow" alt="Leaf shadows falling across canvas" caption="The same instinct as its name: open in shade, closed in direct light." />
      </div>
    </section>

    {/* ─── WHAT IS NOT DECIDED ──────────────────────────────────────────── */}
    <section className="section" style={{ background: 'var(--surface-paper)' }}>
      <div className="container">
        <CampInk as="h2" className="q-h1">
          Six things about Sorrel <em>we have not decided.</em>
        </CampInk>
        <div className="q-body" style={{ maxWidth: 760, margin: '24px 0' }}>
          <p>Sorrel is not finished, and finishing it is not our job alone — this is the part we are most directly inviting you into. You and everyone else who comes will set its language, personality, behaviors and boundaries during the week. These are genuinely open:</p>
        </div>
        <CampCascade style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 32 }}>
          {SORREL_UNDECIDED.map(([h, b]) => (
            <div key={h} style={{ padding: '18px 20px', background: 'var(--surface-white)', border: '1px dashed var(--forest-200)', borderRadius: 12 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 17, letterSpacing: '-0.01em', color: 'var(--ink-900)', marginBottom: 6 }}>{h}</div>
              <div style={{ fontSize: 13, fontWeight: 300, lineHeight: 1.5, color: 'var(--ink-700)' }}>{b}</div>
            </div>
          ))}
        </CampCascade>

        {/* Christine: "this could be the start of the agent-to-agent,
            inter-organisational communication piece." Victor: "definitely." */}
        <div style={{ ...campNote, marginBottom: 24 }}>
          <h6 style={campNoteH6}>And one experiment we are curious about</h6>
          <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.6, color: 'var(--forest-900)', margin: 0 }}>
            Several of us will arrive with agents of our own. Where their people consent, we would like to run the first small trials of agents from different organizations talking to each other on their behalf — introductions, matching needs to offers, carrying a commitment between two teams. This is early, unglamorous and may not work. We will say so either way.
          </p>
        </div>

        <div style={{ background: 'var(--surface-white)', border: '1px solid var(--border-1)', borderRadius: 12, padding: '20px 22px' }}>
          <h6 style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-500)', margin: '0 0 10px' }}>Consent, privacy and attention</h6>
          <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.55, color: 'var(--ink-700)', margin: '0 0 10px' }}>We make recording explicitly opt-in and visible. You can join us fully without using Sorrel at all. You can review, edit, export and delete your own material. You choose what stays private, what we as hosts see, what the rest of the camp sees, and what becomes public.</p>
          <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.55, color: 'var(--ink-700)', margin: 0 }}>Sorrel is available when useful and quiet when it is not. Sometimes the best interface is a recorder on a table or a single physical display, rather than an app pecking at everyone&rsquo;s pockets in a forest.</p>
        </div>

        <CampQuote>An agent can remind us of the promise. <em>The promise is still ours to make.</em></CampQuote>

        {/* not CAMP_CTA: "help raise Sorrel" is the truthful description
            of what signing up gets you on this page in particular. */}
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 40 }}>
          <Button size="lg" variant="join" icon="arrow-right" onClick={() => window.open(JOIN_URL, '_blank')}>Help raise Sorrel</Button>
          <Button
            variant="secondary"
            onClick={() => (onNav ? onNav('camp') : jumpToCamp('why'))}
          >Back to Camp Audax</Button>
        </div>
      </div>
    </section>

    <CampFooter onJump={jumpToCamp} onNav={onNav} sectionsLabel="On the camp page" />
    </>
  );
};

window.PageSorrel = PageSorrel;
