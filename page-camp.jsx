/* Audax OS site · Camp Audax page (standalone landing page)
   ---------------------------------------------------------------
   Camp Audax at The Gathering US, Camp Navarro, Northern California,
   12–18 October 2026. A stand-alone landing page: its own nav and
   footer (no Audax OS site chrome), seven anchored sections, and its
   own photography rather than the OS pages' abstract washes — Audax
   OS is an abstraction, Camp Audax is a place with mud in it.

   Was reworked from an earlier draft (Camp Audax Invitation doc,
   Victor + Christine voice note, ChatGPT outline review) into this
   version, then promoted to the canonical `camp` route once it
   replaced that draft outright. Notable choices carried over from
   that rework:
     1. "wiser" in the hero — Victor's stated centre of gravity was
        "AI for a wiser society", not coordination alone.
     2. "The vanguard" as the first thing you leave with.
     3. The agent is one section, not three. It has a name (Sorrel),
        a face, an explicit "help raise it" invitation, and an
        agent-to-agent experiment named outright.
     4. Media resolved into a named strand of the week rather than
        one chip in a grid. PARTNERS STILL TO CONFIRM.
   Live team roster pulled at runtime from the-gathering.earth's
   public API — see CAMP_TEAM_API below and
   docs-pub/api/public-PLAYBOOK.md upstream. */

const CTA_CAMP = 'assets/backgrounds/The_Gathering_httpss.mj.runqhIVc3YQOmg_abstract_horizontal_in_98617e4b-7005-4e69-8ae6-612455128b0d_0.webp';

/* ─── Photography ────────────────────────────────────────────────────────
   Photographs from The Gathering 2024, in assets/photos/ as 1100–1500px
   WebP. The watercolour washes stay on the OS pages: Audax OS is an
   abstraction and should look like one, Camp Audax is a place with mud
   and mosquitoes in it. Releases are held for the whole 2024 set. */
const CPH = (n) => `assets/photos/${n}.webp`;

/* The Gathering is the host festival, not our event — every mention in
   body copy links out. Titles and eyebrows stay plain text. */
const GATHERING = (
  <a href="https://the-gathering.earth/" target="_blank" rel="noreferrer">The Gathering</a>
);

/* ─── The Gathering's own brand ──────────────────────────────────────────
   Their colours, not ours — used only where we are directly attributing
   them (the credit plaque, the pull-quote citing their own words), never
   bled into Camp Audax's forest palette elsewhere on the page. Values
   from their brand sheet: dark green #192F2B, olive #989B4B. */
const GATHERING_DARK  = '#192F2B';
const GATHERING_OLIVE = '#989B4B';

/* Their swirl mark, traced from TheGatheringLogo.svg (assets/gathering/
   mark.svg) as inline JSX so its fill can carry their exact dark green
   rather than the file's own #2A5049 — a paler stand-in for print. */
const GatheringMark = ({ size = 24, tone = GATHERING_DARK }) => (
  <svg width={size} height={size * 95 / 84} viewBox="0 0 84 95" role="img" aria-label="The Gathering" style={{ display: 'block', flexShrink: 0 }}>
    <path fill={tone} d="M41.4701 0.0214217C42.5431 -0.0642282 43.6376 0.135622 44.6242 0.563871L80.9966 21.5338C82.7608 22.6615 83.9202 24.4887 83.9922 26.5943L83.9922 68.5556C83.7257 71.8674 81.7959 72.9523 79.2395 74.5011C67.9339 81.3531 56.1602 87.4771 44.8546 94.3291C42.3918 95.4639 40.6924 95.0642 38.4097 93.8937C26.4128 87.7626 14.8479 79.7044 2.887 73.3877C1.05794 72.0887 0.15061 70.6612 -0.00781267 68.3914L-0.00781257 26.266C0.201017 24.2175 1.24517 22.7686 2.887 21.5981C6.22828 19.2213 11.0962 16.8231 14.7687 14.689C22.9491 9.94253 31.2014 5.32458 39.3746 0.563871C40.0155 0.285509 40.7716 0.0785216 41.4701 0.0214217ZM27.2625 33.0894C28.2346 37.3434 31.3023 41.2404 35.3276 43.0391C49.7369 49.4771 62.7852 32.1116 52.0052 20.2848C47.0653 14.8603 40.8724 14.5534 34.0603 16.2735C15.2368 21.0128 4.85288 41.0905 11.7443 59.127C12.0395 59.0699 12.0611 58.7987 12.0827 58.556C12.1763 57.521 11.7155 55.8794 11.7371 54.6161C11.8307 47.6356 14.7327 41.3404 20.0975 36.8509C20.976 36.1157 26.4056 32.5755 27.2625 33.0966L27.2625 33.0894ZM70.0366 63.1525C72.0385 60.4688 73.2771 56.0507 73.8531 52.7603C76.6903 36.5083 66.0688 20.2348 49.9385 16.2664C49.4705 16.1522 47.1733 15.6525 46.9069 15.7168C46.7917 15.7453 46.5828 15.9523 46.6333 16.0165C50.7666 18.0864 55.0585 20.7487 57.7804 24.553C60.9201 28.9497 62.3675 34.4812 61.8418 39.8558C61.813 40.1484 61.5898 41.6544 61.489 41.7186C58.2629 41.2618 55.4113 41.2476 52.3365 42.3967C40.9948 46.6221 39.9723 62.4816 50.7666 68.0488C57.8381 71.6961 65.4495 69.2908 70.0438 63.1454L70.0366 63.1525ZM68.2867 66.1717C67.5882 66.1431 67.2138 66.914 66.7097 67.3137C58.8534 73.559 45.229 74.6225 37.5311 67.5635C35.9829 66.1431 36.9119 66.2787 37.8624 65.1011C46.4892 54.3591 37.8048 40.2626 24.2452 41.6116C18.2828 42.204 12.8244 48.5064 12.4068 54.2949C11.9747 60.2904 12.9756 63.1597 16.7058 67.7277C24.6053 77.3847 37.1063 81.7671 49.4345 78.8764C56.8587 77.1349 63.9877 72.417 68.2795 66.1788L68.2867 66.1717Z" />
  </svg>
);

/* The credit plaque uses their tagline lockup (assets/gathering/lockup.png)
   exactly as their brand sheet shows it used: white mark and wordmark,
   olive tagline, on their own dark green ground — not squeezed into a
   white pill of our own invention, which fought their system rather than
   citing it. The asset ships its background baked in, so the "card" is
   just the image with rounded corners; no extra chrome added on top of
   it. The URL sits underneath, in our own type, rather than grafted onto
   their lockup. Used once, prominently, where The Gathering is first
   properly introduced. */
const GatheringCredit = () => (
  <a
    href="https://the-gathering.earth/" target="_blank" rel="noreferrer"
    style={{ display: 'inline-block', textDecoration: 'none' }}
  >
    <img
      src="assets/gathering/lockup.png" alt="The Gathering — Connect for action"
      style={{ display: 'block', height: 84, width: 'auto', borderRadius: 12 }}
    />
    <div style={{
      fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500,
      letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink-500)',
      marginTop: 10
    }}>the-gathering.earth ↗</div>
  </a>
);

/* Hero rotation — warm, populated, and legible under the side scrim. */
const CAMP_HERO_SHOTS = ['feast', 'ceremony', 'crowd-white', 'forest-circle', 'canopy-talk', 'circle-above'];

/* The ribbon runs the whole library twice for a seamless loop. */
const CAMP_RIBBON = [
  ['joy', 'A woman dancing with her arms open'],
  ['tents', 'Bell tents among the trees'],
  ['dance', 'People dancing in low golden light'],
  ['feast', 'A long table session in the forest'],
  ['furhat', 'Two people watching, one in a bright fur hat'],
  ['reading', 'Someone reading by the water'],
  ['circle-above', 'A circle of people seen from above'],
  ['tub', 'A man smiling in a forest hot tub'],
  ['indoor', 'A seated session on rugs indoors'],
  ['path', 'Someone walking a hedged path'],
  ['clapping', 'A woman applauding'],
  ['forest-circle', 'A seated circle among the tents'],
  ['hands-up', 'A crowd with their arms in the air'],
  ['studio', 'People working together at a materials table'],
  ['shadow', 'Leaf shadows falling across canvas'],
  ['wall', 'Two people sitting and talking on the ground'],
  ['ceremony', 'A group standing together in ceremony'],
  ['dome', 'Two people talking beside a dome'],
  ['table', 'Conversation around a stone table'],
  ['embrace', 'Two people dancing close'],
  ['carpet', 'A circle seated on a patterned rug'],
  ['crowd-white', 'Two men standing before a crowd'],
  ['stone-sit', 'Someone sitting cross-legged on stone'],
  ['platform', 'Two people in conversation on a platform'],
  ['mandala', 'A green mandala laid on the ground'],
  ['lineup', 'A line of people standing together'],
  ['canopy-talk', 'A session under a canopy'],
  ['pair', 'Two people talking on the ground'],
  ['canopy', 'Tree canopy against the sky']
];

/* The whole navigation. Seven anchors, in reading order: the argument,
   the village we are a camp in, the room, the week, the distinctive
   thing, the payoff, the logistics. Each carries a mile marker and an
   icon for the signpost rail. */
const CAMP_SECTIONS = [
  { id: 'why-now',       label: 'Why now',       mile: 'MI 0', icon: '◈' },
  { id: 'the-gathering', label: 'The Gathering', mile: 'MI 1', icon: '◎' },
  { id: 'who-comes',     label: 'Who comes',     mile: 'MI 2', icon: '◐' },
  { id: 'the-week',      label: 'The week',      mile: 'MI 3', icon: '▲' },
  { id: 'the-agent',     label: 'The agent',     mile: 'MI 4', icon: '✦' },
  { id: 'what-you-get',  label: 'What you get',  mile: 'MI 5', icon: '◇' },
  { id: 'practical',     label: 'Practical',     mile: 'MI 6', icon: '▣' }
];

/* ─── The Gathering ──────────────────────────────────────────────────────
   Camp Audax is a camp inside somebody else's village, and the village has
   a design worth explaining — the architecture is the reason we chose to
   be a camp rather than run our own event.

   Sourced from The Gathering's own canonical briefing and agent reference
   (the-gathering/ in this repo), with the US specifics from
   regenworld.net. Two things carried over deliberately: their vocabulary
   (camps, Nest, Council, weaving, continuity layer) and their care —
   the briefing is explicit that the format is tested locally while the
   larger claims remain hypotheses, and that "leaderless" is an overclaim
   it refuses. This section stays inside those bounds.

   The six DNA elements, each paired with the thing it gets mistaken for.
   Both halves are theirs: `core_principles` in the agent reference gives
   the definition and the common misunderstanding, and §16 of the
   Definitive Synthesis expands the same six into fifteen principles with
   a failure state for each. Six is the right number for a landing page.
   The pairing is the point — in every case the mistake is the cheaper
   version that looks identical from outside, which is exactly why a
   reader deciding whether to fly across a continent needs to see it. */
const CAMP_GATHERING_DNA = [
  [
    'Co-creation',
    'People and organisations hold real influence over the experience, rather than supplying content to a central producer. Camps shape their own spaces and programmes; camp representatives sit in the Council.',
    'Crowdsourcing, unpaid labour, or asking for feedback once the decisions are already made.'
  ],
  [
    'Action',
    'Initiative and shared doing, which is what makes trust behavioural instead of merely stated. Building, hosting, prototyping, solving something together, taking a realistic next step.',
    'Compulsory productivity, or judging every conversation by what it produced.'
  ],
  [
    'Nature',
    'The living place as an active participant in attention, rhythm and identity: an outdoor village, natural zoning, a relationship with the land it borrows.',
    'Scenic branding — a hotel conference with potted plants and nature vocabulary.'
  ],
  [
    'Weaving',
    'Deliberate work connecting people, camps, needs, resources and questions across silos. Invitations, introductions, maps, thematic bridges.',
    'Networking, or matchmaking by algorithm.'
  ],
  [
    'Celebration',
    'Joy, music, art, food, fire and ritual used as methods of bonding and cultural renewal, integrated with the serious inquiry rather than tacked on after it.',
    'Entertainment delivered to consumers.'
  ],
  [
    'Belonging',
    'A meaningful relational place in the whole, which does not require becoming the same as everyone else in it. Home camps, welcome, care, repeated contact, contribution.',
    'Instant intimacy, conformity, or unconditional comfort.'
  ]
];

/* Outermost first — the nesting renders as literal boxes inside boxes. */
const CAMP_NESTING = [
  ['A network of Gatherings', 'Locally stewarded, globally supported. Portugal, now California, more forming. Shared principles, tools, learning and relationships rather than a franchise, and the governance of that shared layer is openly unfinished.'],
  ['The Gathering US', '500+ people across 20+ camps on one property, 12–18 October 2026, convened by RegenWorld. A local team holds the infrastructure, safety, finances and coherence of the whole village, so that a camp can get on with being a camp.'],
  ['Camp Audax', 'One camp. Its own crew, culture, programme and questions, with a seat in the Council and a share of the responsibility for the village.'],
  ['You', 'A home at human scale, a role you choose rather than receive, and a field of 500 people you can actually reach from inside it.']
];

/* The briefing keeps a list of shortcuts it considers misleading. All four
   of these are on it, and all four are what people will assume. */
const CAMP_SHORTHAND = [
  ['A festival for changemakers', 'A temporary village whose cells are communities and organisations, not themed party areas. Camps carry representation and responsibility, not only atmosphere.'],
  ['An unconference', 'Participant-led sessions are in there. They sit inside a village, with camps, thresholds, ceremony and a continuity layer wrapped around them.'],
  ['A networking event', 'The unit is the camp you belong to for six days, not the contact you collect in six minutes.'],
  ['A conference in a forest', 'There is no dominant stage to be an audience for. The camps are the programme.']
];

/* Beyond our own camp, your ticket opens all of this. Programme detail is
   the host team's to confirm, so it stays at this altitude. */
const CAMP_PROPERTY = [
  '20+ community-led camps',
  '100+ workshops, sessions and masterminds',
  'Opening and closing ceremonies',
  'Open space, where the agenda comes from the room',
  'Fire circle conversations',
  'Live music, art and shared meals',
  "The 'Origins' global peace celebration",
  '200 acres of redwood to walk, and permission to rest'
];

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
    benefit: 'Your work meets the wider transition it is part of — and people sharp enough to ask better questions of it.'
  },
  {
    n: 'II', name: 'The Entrepreneur',
    working: 'Product, go-to-market, business models, partnerships, adoption, organisational development, venture creation.',
    brings: ['Distribution', 'Durability', 'Commercial reality', 'The path from prototype to used'],
    benefit: 'Collaborators, users and early customers — plus the clearest read you will get all year on where this field is heading.'
  },
  {
    n: 'III', name: 'The Investor',
    working: 'Directing capital towards beneficial AI, impact portfolios, philanthropic strategy, ecosystem funding.',
    brings: ['Capital', 'Field-level view', 'Pattern recognition across teams'],
    benefit: 'A live map of teams, tools, narratives and gaps — built over six days in person, not from a stack of decks.'
  },
  {
    n: 'IV', name: 'The Ecosystem Practitioner',
    working: 'Networks, movements, communities, cooperatives, public initiatives, regenerative projects applying these technologies in real contexts.',
    brings: ['The ground truth', 'Real constraints', 'The needs that should shape what gets built'],
    benefit: 'Tools, partners and technical collaborators who want to build for the conditions you actually operate in.'
  },
  {
    n: 'V', name: 'The Wisdom Keeper',
    working: 'Philosophy, psychology, anthropology, sociology, governance, spiritual and human development, systems change, culture and narrative.',
    brings: ['The questions worth asking', 'Long time horizons', 'Moral seriousness'],
    benefit: 'A seat inside the design process — early enough that your questions still shape what gets built.'
  }
];

const CAMP_MOVEMENTS = [
  { n: 'I',   shot: 'ceremony',      title: 'Arrive and orient',      body: 'Opening circle. Everyone says their goal out loud. Who are you, what have you brought, what are you looking for, and what do you know that you do not yet know?' },
  { n: 'II',  shot: 'feast',         title: 'Reveal the field',       body: 'Needs, offers, assets, projects and questions made visible across the whole camp. Participants see the room they are actually in.' },
  { n: 'III', shot: 'forest-circle', title: 'Explore the questions',  body: 'Open space. Sessions surface from the people present. Demos, working sessions, provocations, fire circles.' },
  { n: 'IV',  shot: 'table',         title: 'Find the connections',   body: 'Coherence Conversations. Facilitated, recorded, consent-based dialogue that builds understanding and surfaces collaboration potential, feeding our synthesis and publishing pipeline.' },
  { n: 'V',   shot: 'studio',        title: 'Work on possibilities',  body: 'Project studios. Prototypes, partnerships, media, research questions, funding conversations. Actual work, with the people who can do it.' },
  { n: 'VI',  shot: 'pair',          title: 'Name commitments',       body: 'Connect for action. Two people find something worth building and declare it on the spot: a voice note, a photo, a short film, recorded in the moment and released into the camp’s live feed.' },
  { n: 'VII', shot: 'circle-above',  title: 'Carry it forward',       body: 'Closing harvest. Each participant leaves with a named next step and the support to take it.' }
];

const CAMP_LOOP_FADING = [
  'Warm conversation', 'Good intentions', 'No visible commitment',
  'Context lost', 'Relationships cool'
];
const CAMP_LOOP_COHERENCE = [
  'Conversation', 'Relationship', 'Declared commitment',
  'Collaboration', 'Learning harvested', 'Wider field'
];

/* Item 1 is the change: the vanguard, stated plainly, first. */
const CAMP_LEAVE_WITH = [
  'A place in the vanguard of a field that does not yet have a name. The working dialogue between builders, entrepreneurs, investors and wisdom keepers is barely happening anywhere, and certainly not in one forest for six days. You will be among the people who start it.',
  'At least one named action and one follow-up. This is our commitment as hosts.',
  'Relationships formed through shared experience in nature, as whole humans rather than job titles.',
  'A field-level view of what is being built, funded, tested and struggled with across the space.',
  'Your work seen with depth and nuance by people equipped to understand it.',
  'A place in a shared narrative and roadmap for AI in service of a wiser, regenerative future.',
  'An agent you helped raise, and a record of everything that emerged.',
  'Continuity: the post-Camp Coherence Conversations event, and the people you bring into it.'
];

const CAMP_EMERGE = [
  'Continued relationships', 'Research or learning groups', 'Product collaborations',
  'Prototypes', 'New ventures', 'Employment', 'Investment conversations',
  'Co-produced media', 'Application partnerships',
  'Experiments in inter-organisational agent communication'
];

/* Sorrel's open questions — the "raise it together" invitation, made
   concrete. Victor: "it's an invitation to together raise the agent." */
const CAMP_UNDECIDED = [
  ['Its voice', 'Warm or dry. Brief or expansive. Whether it is funny.'],
  ['Its refusals', 'What it declines to answer, and how it says so.'],
  ['Its opinions', 'Whether it has any, and whether it volunteers them.'],
  ['Its presence', 'Whether it speaks at the fire circle or stays out of it.'],
  ['Its forgetting', 'What it lets go of, when, and who decides.'],
  ['Its face', 'The mark below is a first sketch, not a decision.']
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

const CAMP_CONVENING = [
  ['Programme and facilitation', 'TBC'],
  ['Technology and agent', 'The Coherence Company'],
  ['Media', 'TBC'],
  ['Data, consent and safeguarding', 'TBC'],
  ['Post-Camp follow-through', 'TBC']
];

/* ─── Live team roster ───────────────────────────────────────────────────
   Pulled at runtime from The Gathering's public API — no auth, no
   caching layer of our own. If the roster there changes, this section
   changes with it. Two calls per person: the camp endpoint gives the
   roster (name, photo, and contact keys not exposed elsewhere like
   email/phone); the person endpoint adds their bio and the rest of
   their public links. See docs-pub/api/public-PLAYBOOK.md upstream. */
const CAMP_TEAM_API = 'https://view.the-gathering.earth/public/gatherings/2026-usa-california/camps/camp-audax-usa-2026/';
const campPersonApi = (id) => `https://view.the-gathering.earth/public/people/${id}/`;

/* lucide dropped brand/social icons a while back — these are the
   closest generic shapes that still exist in the set actually loaded. */
const CAMP_TEAM_ICONS = {
  email: 'mail', phone: 'phone', website: 'globe', calendar: 'calendar',
  linkedin: 'link', telegram: 'send', whatsapp: 'message-circle',
  instagram: 'camera', youtube: 'play'
};

const campSocialHref = (s) => {
  if (s.href) return s.href;
  if (s.key === 'email') return `mailto:${s.value}`;
  if (s.key === 'phone') return `tel:${s.value}`;
  if (s.key === 'whatsapp') return `https://wa.me/${s.value.replace(/[^\d]/g, '')}`;
  return s.value;
};

const campStripHtml = (html) => {
  if (!html) return '';
  const div = document.createElement('div');
  div.innerHTML = html.replace(/<\/(p|div|h[1-6])>/gi, ' ').replace(/<br\s*\/?>/gi, ' ');
  const text = (div.textContent || '').replace(/\s+/g, ' ').trim();
  return text.length > 260 ? text.slice(0, 260).replace(/\s+\S*$/, '') + '…' : text;
};

const CAMP_FAQ = [
  ['What is a Camp?', <>A working village within {GATHERING}, with its own crew, culture and programme, inside a wider field of 500 people.</>],
  ['What is The Gathering US?', 'The village Camp Audax is a camp inside: 500+ people across 20+ camps at Camp Navarro, convened by RegenWorld. We are one camp among many — see The Gathering, section 02.'],
  ['Do I need a project already?', 'Bring something real: a project, a question, a tool, capital, a practice, or experience.'],
  ['Who is Sorrel?', 'The camp agent. A working name for something we are building and naming together — see The agent, above.'],
  ['Can I attend without using the agent?', 'Yes. Fully.'],
  ['What happens to what I say?', 'Nothing is recorded without everyone present agreeing to it. You can review, edit, export and delete your own material.'],
  ['What if the ticket is a stretch?', 'Scholarship and volunteer options exist. Get in touch.']
];

/* ─── Sorrel's face ──────────────────────────────────────────────────────
   Redwood sorrel (Oxalis oregana) carpets the forest floor at Navarro and
   folds its three leaflets shut in direct sun, reopening in shade — which
   is the behaviour we want from the agent, so it became the mark. */
const SorrelMark = ({ size = 96, tone = 'var(--forest-700)' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" role="img" aria-label="Sorrel" style={{ display: 'block' }}>
    {[0, 120, 240].map(a => (
      <path
        key={a}
        transform={`rotate(${a} 50 50)`}
        fill={tone}
        opacity={0.9}
        d="M50 54 C43 48, 33 40, 32 28 C31 18, 39.5 14, 44.5 20.5 C47 24, 48.7 28, 50 33 C51.3 28, 53 24, 55.5 20.5 C60.5 14, 69 18, 68 28 C67 40, 57 48, 50 54 Z"
      />
    ))}
    <circle cx="50" cy="50" r="3.2" fill="var(--lichen-400, #A9C6A0)" />
  </svg>
);

/* ─── Motion ─────────────────────────────────────────────────────────────
   Deliberately no animation library. Everything the Camp page needs is
   a staggered entry and some scroll reveals, which is ~60 lines of
   IntersectionObserver plus CSS transitions. A CDN dependency on this
   site is a render-blocking script with an SRI hash to maintain, and
   every other effect here (parallax, scroll-spy, Ken Burns, grain) is
   already hand-rolled — adding GSAP for text reveal alone would be the
   inconsistent choice.

   Reach for GSAP + ScrollTrigger when we want any of: scrub-linked
   timelines tied to scroll position, SVG path morphing, FLIP layout
   transitions, or one timeline sequencing a dozen elements with
   overlapping eases. None of that is on the page yet. */

const cphReduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Split into characters for the typewriter reveal, keeping each word in
   an inline-block wrapper so words still wrap as units instead of
   breaking mid-word. Walks text nodes, so inline markup (the <em> in the
   headline) survives with its colour intact. */
const cphSplit = (el) => {
  if (!el || el.dataset.cphSplit) return 0;
  let count = 0;
  const walk = (node) => {
    Array.from(node.childNodes).forEach((child) => {
      if (child.nodeType === 3) {
        if (!child.textContent.trim()) return;
        const frag = document.createDocumentFragment();
        child.textContent.split(/(\s+)/).forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(' ')); return; }
          const word = document.createElement('span');
          word.className = 'cph-w';
          Array.from(part).forEach((ch) => {
            const c = document.createElement('span');
            c.className = 'cph-c';
            c.textContent = ch;
            word.appendChild(c);
            count += 1;
          });
          frag.appendChild(word);
        });
        node.replaceChild(frag, child);
      } else if (child.nodeType === 1) {
        walk(child);
      }
    });
  };
  walk(el);
  el.dataset.cphSplit = '1';
  return count;
};

/* Type the headline out character by character. A tiny fade per glyph
   rather than a hard cut — at 76px a hard cut on a hairline serif
   strobes. Returns the ms the last character lands on. */
const cphStaggerChars = (el, delay = 0, step = 17) => {
  if (!el) return delay;
  const chars = Array.from(el.querySelectorAll('.cph-c'));
  if (!chars.length) return delay;
  chars.forEach((c, i) => { c.style.transitionDelay = (delay + i * step) + 'ms'; });
  return delay + chars.length * step;
};

/* Arm an element's hidden state now; the reveal happens later so the
   browser has painted the start state and the transition actually runs. */
const cphArm = (el) => { if (el) el.classList.add('cph-rise'); };
const cphRise = (el, delay = 0) => {
  if (!el) return;
  el.style.transitionDelay = delay + 'ms';
  el.classList.add('cph-in');
};

/* The mono practical line types itself out. It is the one face on the
   page that genuinely is a typewriter, and it is the line every visitor
   is looking for. */
const cphType = (el, delay = 0, duration = 1150, onDone) => {
  if (!el) return 0;
  // reveal across the element's text nodes so inline markup survives —
  // the date inside this line is its own styled span
  const parts = [];
  const walk = (n) => Array.from(n.childNodes).forEach((c) => {
    if (c.nodeType === 3) parts.push({ node: c, full: c.textContent });
    else if (c.nodeType === 1) walk(c);
  });
  walk(el);
  const total = parts.reduce((a, p) => a + p.full.length, 0);
  if (!total) return 0;
  parts.forEach(p => { p.node.textContent = ''; });
  const step = Math.max(11, duration / total);
  let i = 0;
  // expose a finisher so the failsafe can complete this cleanly instead
  // of racing it
  el._cphFinish = () => {
    clearTimeout(el._cphStart); clearInterval(el._cphTimer);
    parts.forEach(p => { p.node.textContent = p.full; });
    el.classList.remove('cph-typing');
    el._cphFinish = null;
  };
  el._cphStart = setTimeout(() => {
    el.classList.add('cph-typing');
    const t = el._cphTimer = setInterval(() => {
      i += 1;
      let left = i;
      parts.forEach((p) => {
        p.node.textContent = p.full.slice(0, Math.max(0, Math.min(p.full.length, left)));
        left -= p.full.length;
      });
      if (i >= total) {
        clearInterval(t);
        el._cphFinish = null;
        if (onDone) onDone();
        setTimeout(() => el.classList.remove('cph-typing'), 1100);
      }
    }, step);
  }, delay);
  return delay + duration;
};

/* Generic scroll reveal for anything below the fold. */
const CampReveal = ({ children, as: Tag = 'div', ...rest }) => {
  const ref = useCampReveal();
  return <Tag ref={ref} className="cph-obs" {...rest}>{children}</Tag>;
};

/* ─── Body motion ────────────────────────────────────────────────────────
   Everything above this point animates the hero. Everything below it
   animates the other seven sections, which until now arrived fully
   painted — the reveal component was written, styled at site.css
   .cph-obs, and never called.

   Four triggered devices (ink, spoken, cascade, kicker) and three
   scrubbed ones (loops, focus, read-ink). See the CAMP BODY MOTION block
   at the end of site.css for what each one does and why it is that and
   not something else. Still no animation library: the triggered half is
   one observer, the scrubbed half is one rAF loop.
   ───────────────────────────────────────────────────────────────────── */

/* ── triggered: one observer for the whole page ──────────────────────────
   Roughly sixty elements reveal on entry. One shared observer with a
   Map of play functions, rather than sixty observers each watching a
   single node. Every device here is one-shot, so a target is unobserved
   the moment it fires. */
const cphPlays = new Map();
let cphIO = null;

const cphObserve = (el, play) => {
  if (!el) return undefined;
  if (cphReduced() || !('IntersectionObserver' in window)) { play(el); return undefined; }
  if (!cphIO) {
    cphIO = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const fn = cphPlays.get(e.target);
        cphPlays.delete(e.target);
        cphIO.unobserve(e.target);
        if (fn) fn(e.target);
      });
    }, { rootMargin: '0px 0px -15% 0px', threshold: 0 });
  }
  cphPlays.set(el, play);
  cphIO.observe(el);
  return () => { cphPlays.delete(el); if (cphIO) cphIO.unobserve(el); };
};

/* Arm at mount, reveal on entry. The split has to happen a frame or more
   before the class lands: create the spans and add `cph-in` in the same
   task and the transitions have no computed start value to run from, so
   everything simply appears. Arming in the mount effect and revealing
   from the observer keeps those two events apart by construction. */
const cphRevealNow = (el) => { if (el) el.classList.add('cph-in'); };

const useCampReveal = (arm) => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (arm) arm(el);
    return cphObserve(el, cphRevealNow);
  }, []);
  return ref;
};

/* One word per inline-block, so words still wrap as units instead of
   breaking mid-word. Walks text nodes only, so the inline markup every
   heading and quote relies on — the <em> carrying the accent colour and
   the italic — survives untouched.

   `pick` lets one call give different classes to different branches:
   CampInk uses it to separate the plain clause from the italic accent,
   and to leave the mono `.num` alone. Returning false skips a subtree. */
const cphWordFrag = (text, cls) => {
  const frag = document.createDocumentFragment();
  text.split(/(\s+)/).forEach((part) => {
    if (!part) return;
    if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(' ')); return; }
    const w = document.createElement('span');
    w.className = cls;
    w.textContent = part;
    frag.appendChild(w);
  });
  return frag;
};

const cphWrapWords = (root, cls, pick) => {
  if (!root || root.dataset.cphSplit) return;
  const walk = (node, current) => {
    Array.from(node.childNodes).forEach((child) => {
      if (child.nodeType === 3) {
        if (!child.textContent.trim()) return;
        node.replaceChild(cphWordFrag(child.textContent, current), child);
      } else if (child.nodeType === 1) {
        const next = pick ? pick(child, current) : current;
        if (next === false) return;
        walk(child, next);
      }
    });
  };
  walk(root, cls);
  root.dataset.cphSplit = '1';
};

/* The mile-marker span rises on its own and is never split — it is mono
   caps, where per-word anything reads as a glitch rather than a reveal. */
const cphInkPick = (el, current) => {
  if (el.classList.contains('num')) { el.classList.add('cph-ink-num'); return false; }
  if (el.tagName === 'EM') return 'cph-ink-em';
  return current;
};

/* A section title: the plain clause rises, the italic accent bleeds in
   out of focus and sharpens. Used on all seven q-h1s and the closing h2,
   and deliberately never on the hero, which keeps the typewriter. */
const CampInk = ({ as: Tag = 'h1', className = '', children, ...rest }) => {
  const ref = useCampReveal((el) => cphWrapWords(el, 'cph-ink-plain', cphInkPick));
  return <Tag ref={ref} className={`cph-ink${className ? ' ' + className : ''}`} {...rest}>{children}</Tag>;
};

/* A pull quote, spoken. Wraps the shared PullQuote rather than
   reimplementing it, so the accent bar, the rules, the measure and the
   balance stay identical to how every other page draws one. The reveal
   class sits on this wrapper, which is also what the observer watches. */
const CampQuote = ({ children, ...rest }) => {
  const ref = useCampReveal((el) => cphWrapWords(el.querySelector('.pull-quote'), 'cph-word'));
  return (
    <div ref={ref} className="cph-spoken">
      <PullQuote {...rest}>{children}</PullQuote>
    </div>
  );
};

/* A list or a card grid, arriving as something being written. `indent`
   slides items out of a left indent, for anything the eye reads down a
   left edge; the default rise suits card grids. Renders the container
   itself, so callers swap one tag and keep their own classes and styles. */
const CampCascade = ({ as: Tag = 'div', step = 60, indent, className = '', children, ...rest }) => {
  const ref = useCampReveal((el) => {
    Array.from(el.children).forEach((c, i) => { c.style.transitionDelay = (i * step) + 'ms'; });
  });
  return (
    <Tag
      ref={ref}
      className={`cph-cascade${indent ? ' cph-indent' : ''}${className ? ' ' + className : ''}`}
      {...rest}
    >{children}</Tag>
  );
};

/* ── scrubbed: one rAF loop for the whole page ───────────────────────────
   Three effects whose state is a function of scroll POSITION rather than
   of having crossed a line once, so they run backwards when the reader
   scrolls back up. One passive listener and one rAF for all of them,
   the same shape as CampBand's parallax above.

   Nothing registers under prefers-reduced-motion, and the CSS these
   drive is scoped to classes that are only added alongside a live
   driver — so the reduced path is the page exactly as it is without
   any of this, with nothing to unwind. */
const cphTicks = new Set();
let cphTicking = false;
const cphFrame = () => { cphTicking = false; cphTicks.forEach((fn) => fn()); };
const cphOnScroll = () => {
  if (!cphTicking) { cphTicking = true; requestAnimationFrame(cphFrame); }
};

const cphAddTick = (fn) => {
  if (!cphTicks.size) {
    window.addEventListener('scroll', cphOnScroll, { passive: true });
    window.addEventListener('resize', cphOnScroll);
  }
  cphTicks.add(fn);
  fn();
  return () => {
    cphTicks.delete(fn);
    if (!cphTicks.size) {
      window.removeEventListener('scroll', cphOnScroll);
      window.removeEventListener('resize', cphOnScroll);
    }
  };
};

const cphClamp = (n) => (n < 0 ? 0 : n > 1 ? 1 : n);

/* 0 as the element's top crosses 85% of the viewport, 1 as its bottom
   reaches 30% — so an effect plays out over the element's own traverse
   whatever its height, instead of over a fixed number of pixels. */
const cphProgress = (el) => {
  const r = el.getBoundingClientRect();
  const vh = window.innerHeight || 1;
  const start = vh * 0.85;
  const span = start - (vh * 0.3 - r.height);
  return span > 0 ? cphClamp((start - r.top) / span) : 1;
};

const useCampScrub = (tick) => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || cphReduced()) return undefined;
    el.classList.add(...tick.classes);
    return cphAddTick(() => tick.run(el));
  }, []);
  return ref;
};

/* The two loops. The fading one comes apart as you pass it; the coherence
   one firms up and keeps turning. Writes two custom properties per item
   and lets the CSS interpolate the colours from the palette tokens —
   see the note in site.css for why the text colour is left alone. */
const cphLoopsTick = {
  classes: ['cph-loops'],
  run: (el) => {
    const p = cphProgress(el);
    el.querySelectorAll('.loop-ink .loop-list li').forEach((li, i) => {
      li.style.setProperty('--gone', cphClamp((p - i * 0.1) / 0.26).toFixed(3));
    });
    el.querySelectorAll('.loop-forest .loop-list li').forEach((li, i) => {
      li.style.setProperty('--lit', cphClamp((p - i * 0.09) / 0.2).toFixed(3));
    });
    const spin = el.querySelector('.loop-forest .loop-list li.close .i');
    if (spin) spin.style.rotate = (p * 540).toFixed(1) + 'deg';
  }
};

const CampLoops = ({ children }) => {
  const ref = useCampScrub(cphLoopsTick);
  return <div ref={ref} className="two-loops">{children}</div>;
};

/* The closing redwoods line, inking up under the reading line. Measured
   per word against the viewport rather than against the paragraph's own
   progress, so it lights at the same screen position however the line
   happens to wrap. */
const CampReadLine = ({ children, ...rest }) => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || cphReduced()) return undefined;
    cphWrapWords(el, 'cph-word');
    el.classList.add('cph-read');
    const words = Array.from(el.querySelectorAll('.cph-word'));
    if (!words.length) return undefined;
    return cphAddTick(() => {
      const vh = window.innerHeight || 1;
      words.forEach((w) => {
        const lit = cphClamp((vh * 0.74 - w.getBoundingClientRect().top) / (vh * 0.14));
        w.style.opacity = (0.26 + lit * 0.74).toFixed(3);
      });
    });
  }, []);
  return <p ref={ref} {...rest}>{children}</p>;
};

/* ─── Pattern 01 · living hero ───────────────────────────────────────────
   Four photographs crossfading behind the headline on a slow Ken Burns
   drift. Pauses when off screen; the drift is dropped under
   prefers-reduced-motion, and the rotation stops with it. */
const CampHero = ({ children, onDots }) => {
  const [i, setI] = React.useState(0);
  const [live, setLive] = React.useState(false);
  const ref = React.useRef(null);
  const reduced = React.useRef(
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  // only run the rotation while the hero is actually on screen
  React.useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) { setLive(true); return; }
    const io = new IntersectionObserver(
      ([e]) => setLive(e.isIntersecting),
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  React.useEffect(() => {
    if (!live || reduced.current) return;
    const t = setInterval(() => setI(n => (n + 1) % CAMP_HERO_SHOTS.length), 6000);
    return () => clearInterval(t);
  }, [live, i]);

  /* One orchestrated moment on load: the photograph lights, the kicker
     arrives, the headline rises line by line from behind its mask, the
     lede follows, the practical line types itself, and the buttons land
     last. Under prefers-reduced-motion everything is simply present. */
  const copyRef = React.useRef(null);
  React.useEffect(() => {
    const root = copyRef.current;
    const hero = ref.current;
    if (!root) return;
    const q = (s) => root.querySelector(s);

    if (cphReduced()) {
      if (hero) hero.classList.add('cph-lit');
      root.querySelectorAll('.cph-c, .cph-rise').forEach(e => e.classList.add('cph-in'));
      return;
    }

    // 1. arm every start state
    const h1 = q('h1');
    cphSplit(h1);
    [q('.eyebrow'), q('.lede'), q('.hero-ctas')].forEach(cphArm);
    const meta1 = q('.cph-hero-meta');
    const meta2 = q('.cph-hero-meta-2');
    const restore = [meta1, meta2].filter(Boolean).map(el => [el, el.innerHTML]);

    // 2. force a reflow so the armed state is computed, then release.
    //    Deliberately NOT requestAnimationFrame: rAF is throttled in
    //    background tabs, which would leave the hero blank until the tab
    //    was focused. Reading offsetHeight flushes layout synchronously,
    //    so the transitions run wherever the tab happens to be.
    void root.offsetHeight;

    if (hero) hero.classList.add('cph-lit');
    cphRise(q('.eyebrow'), 260);
    const after = cphStaggerChars(h1, 420, 17);
    h1.classList.add('cph-in');
    cphRise(q('.lede'), after + 80);
    // chain on actual completion, not on predicted elapsed time — timers
    // are throttled in background tabs and the two lines would overlap
    cphType(meta1, after + 320, 900, () => cphType(meta2, 140, 620));
    cphRise(q('.hero-ctas'), after + 1400);

    // failsafe: nothing about an entry animation should ever be able to
    // leave the hero copy invisible
    const bail = setTimeout(() => {
      if (hero) hero.classList.add('cph-lit');
      root.querySelectorAll('.cph-c, .cph-rise').forEach(e => e.classList.add('cph-in'));
      restore.forEach(([el, html]) => {
        if (el._cphFinish) el._cphFinish();
        else if (!el.textContent.trim()) el.innerHTML = html;
        el.classList.remove('cph-typing');
      });
    }, 12000);
    return () => {
      clearTimeout(bail);
      restore.forEach(([el]) => {
        clearTimeout(el._cphStart); clearInterval(el._cphTimer);
      });
    };
  }, []);

  return (
    <section className="cph-hero" ref={ref}>
      <div className="cph-stage">
        {CAMP_HERO_SHOTS.map((s, n) => (
          <div
            key={s}
            className={`cph-slide${n === i ? ' on' : ''}${n === i && !reduced.current ? ' kb' : ''}`}
            style={{ backgroundImage: `url(${CPH(s)})` }}
          />
        ))}
      </div>
      <div className="cph-veil cph-hero-wash"></div>
      <CampGrain />
      {/* the hero met parchment on a straight line; a taller brush edge than
          the bands get, since this is the boundary every visitor sees */}
      <CampTear image={ART.drift} edge="bottom" deep />
      <div className="container cph-hero-copy" ref={copyRef}>{children}</div>
    </section>
  );
};

/* A little film grain over the hero, generated rather than shipped as an asset. */
const CampGrain = () => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const cv = ref.current;
    if (!cv || !cv.getContext) return;
    const s = 150;
    cv.width = s; cv.height = s;
    const ctx = cv.getContext('2d');
    const img = ctx.createImageData(s, s);
    for (let i = 0; i < img.data.length; i += 4) {
      const v = 120 + Math.random() * 135;
      img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
      img.data[i + 3] = 26;
    }
    ctx.putImageData(img, 0, 0);
    cv.style.backgroundImage = `url(${cv.toDataURL()})`;
    cv.style.backgroundRepeat = 'repeat';
    ctx.clearRect(0, 0, s, s);
  }, []);
  return <canvas className="cph-veil cph-grain" ref={ref} aria-hidden="true"></canvas>;
};

/* ─── Pattern 02 · chapter band ──────────────────────────────────────────
   Full-bleed photographic break; the art drifts against the scroll so the
   band reads as a window rather than a picture. */
/* The sumi-e washes double as brush edges on this page: a photographic slab
   dissolves into the page ground through one of them rather than ending on a
   straight cut. `ground` must match the section on that side of the slab
   (parchment unless the neighbour is a .manifesto section, which is white). */
const CampTear = ({ image, edge, ground = 'var(--surface-parchment)', flip, deep }) => (
  <div
    className={`cph-tear ${edge}${flip ? ' flip' : ''}${deep ? ' deep' : ''}`}
    style={{ '--tear-image': `url(${image})`, '--tear-ground': ground }}
    aria-hidden="true"
  ></div>
);

const CampBand = ({ shot, kicker, numeral, label, rate = 0.16, tear, tearTop, tearGround, tearGroundTop }) => {
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
    <div className="cph-band" ref={band}>
      <div className="cph-band-art" ref={art} style={{ backgroundImage: `url(${CPH(shot)})` }}></div>
      <div className="cph-veil cph-band-veil"></div>
      {tearTop && <CampTear image={tearTop} edge="top" ground={tearGroundTop} flip />}
      {tear && <CampTear image={tear} edge="bottom" ground={tearGround} />}
      <div className="cph-band-inner">
        <div className="cph-band-kicker">{kicker}</div>
        <div className="cph-band-numeral">{numeral}</div>
        <div className="cph-band-label">{label}</div>
      </div>
    </div>
  );
};

/* ─── Pattern 04 · sticky diptych ────────────────────────────────────────
   One image pinned while the seven movements scroll past it. */
const CampDiptych = ({ items }) => {
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
            aria-label={`Movement ${m.n} — ${m.title}`}
          />
        ))}
        <div className="cph-badge">Movement {items[active].n}</div>
      </div>
      <div className="cph-steps" ref={col}>
        {items.map((m, n) => (
          <div
            key={m.n}
            ref={el => { steps.current[n] = el; }}
            className={`cph-step${n === active ? ' on' : ''}`}
          >
            <div className="n">Movement {m.n}</div>
            <h4>{m.title}</h4>
            <p>{m.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ─── Pattern 05 · drifting ribbon ───────────────────────────────────────
   A filmstrip that never quite stops, and halts the moment you reach for
   it. Rendered twice so the -50% keyframe loops seamlessly. */
const CampRibbon = () => (
  <div className="cph-ribbon">
    <div className="cph-ribbon-vp">
      <div className="cph-track">
        {[0, 1].map(pass => CAMP_RIBBON.map(([shot, alt]) => (
          <div className="cph-cell" key={`${pass}-${shot}`}>
            <img src={CPH(shot)} alt={pass === 0 ? alt : ''} aria-hidden={pass === 1} loading="lazy" />
          </div>
        )))}
      </div>
    </div>
  </div>
);

/* ─── Standalone chrome ──────────────────────────────────────────────────
   Reuses the site's .nav / .nav-brand / .nav-cta classes for brand + CTA.
   Section wayfinding itself lives in CampSignposts below, not here — one
   navigation surface instead of a top link row plus a separate mobile
   sheet. */
const CampNav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', on);
    return () => window.removeEventListener('scroll', on);
  }, []);
  return (
    <nav className={`nav cph-nav${scrolled ? ' scrolled' : ''}`}>
      <button
        className="nav-brand" type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}
      >
        <Logo size={30} />
        <span className="nav-brand-text">Camp Audax</span>
      </button>
      <div className="nav-links">
        <button className="nav-cta" onClick={() => window.open(JOIN_URL, '_blank')} type="button">
          Apply
        </button>
      </div>
    </nav>
  );
};

/* ─── Pattern 06 · signpost stack ────────────────────────────────────────
   Six way-post badges threaded on a dashed rope down the right edge.
   Closed, it's just icons; hovering or arriving at one swings out a tag
   with its mile marker and name. Below 640px a hover-driven flyout on
   six small touch targets doesn't work, so the rope is replaced outright
   by a hamburger that opens a plain tappable list in a right-side
   drawer — same stops, same icons, a layout suited to a thumb instead
   of a cursor. */
const CampSignposts = ({ active, onJump }) => {
  const [open, setOpen] = React.useState(false);
  const jumpAndClose = (id) => { onJump(id); setOpen(false); };

  return (
    <>
      <nav className="cph-signposts" aria-label="Jump to a section">
        <div className="cph-sp-posts">
          <div className="cph-sp-rope"></div>
          {CAMP_SECTIONS.map(s => (
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
          <span className="kicker">Camp Audax</span>
          <button className="cph-sp-drawer-close" type="button" onClick={() => setOpen(false)} aria-label="Close menu">✕</button>
        </div>
        <div className="cph-sp-drawer-list">
          {CAMP_SECTIONS.map(s => (
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
          <button className="cph-sp-drawer-cta" type="button" onClick={() => window.open(JOIN_URL, '_blank')}>
            Apply to join Camp Audax
          </button>
        </div>
      </aside>
    </>
  );
};

const CampFooter = ({ onJump, onNav }) => (
  <footer className="footer">
    <div className="footer-inner">
      <div className="footer-brand">
        <Logo size={36} />
        <div className="footer-brand-text">Camp Audax</div>
        <div className="footer-tagline">Camp Navarro, Northern California · 12–18 October 2026</div>
        <a
          href={JOIN_URL} target="_blank" rel="noreferrer"
          className="footer-join-btn"
        >Apply to join</a>
      </div>
      <div className="footer-col">
        <h6>On this page</h6>
        {CAMP_SECTIONS.map(s => (
          <a key={s.id} href={`#camp/${s.id}`} onClick={(e) => { e.preventDefault(); onJump(s.id); }}>{s.label}</a>
        ))}
      </div>
      <div className="footer-col">
        <h6>Elsewhere</h6>
        <a href="https://regenworld.net/" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          <GatheringMark size={12} tone={GATHERING_OLIVE} /> The Gathering US
        </a>
        <a href="https://the-gathering.earth/" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          <GatheringMark size={12} tone={GATHERING_OLIVE} /> The Gathering network
        </a>
        <a href="https://coherence.tv/" target="_blank" rel="noreferrer">The Coherence Company</a>
        <a href="#why" onClick={(e) => { e.preventDefault(); onNav && onNav('why'); }}>Audax OS</a>
      </div>
    </div>
    <div className="footer-bottom">
      <span>© 2026 · Camp Audax is convened by The Coherence Company, the first living lab of Audax OS.</span>
      <span>For humans and agents, in equal measure.</span>
    </div>
  </footer>
);

/* Shared inline style for the green "note" panels used a few times below. */
const campNote = { background: 'var(--forest-050)', border: '1px solid var(--forest-200)', borderRadius: 16, padding: '28px 32px' };
const campNoteH6 = { fontSize: 11, fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--forest-800)', margin: '0 0 12px' };
const campKicker = { fontSize: 11, fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ink-500)' };

/* The mono section labels. Previously eighteen copies of `campKicker`
   spread inline through the page, each with its own margin pair; now one
   component, which is also what let them get a drawn rule and a reveal.
   `top` and `bottom` are the margins those copies were already passing. */
const CampKicker = ({ children, top = 0, bottom = 16 }) => {
  const ref = useCampReveal();
  return (
    <h6 ref={ref} className="cph-kick" style={{ ...campKicker, margin: `${top}px 0 ${bottom}px` }}>
      <span className="cph-kick-t">{children}</span>
    </h6>
  );
};

/* A single accent photograph dropped into a long text passage, so no
   section on this page runs more than a screen or two of pure copy. */
const CampPhoto = ({ shot, alt, caption, ratio = '16 / 9' }) => (
  <figure style={{ margin: '48px 0' }}>
    <div style={{ borderRadius: 16, overflow: 'hidden', aspectRatio: ratio }}>
      <img src={CPH(shot)} alt={alt} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
    </div>
    {caption && (
      <figcaption style={{ fontSize: 12, fontWeight: 400, color: 'var(--ink-500)', margin: '10px 2px 0' }}>{caption}</figcaption>
    )}
  </figure>
);

/* A photograph BESIDE the prose rather than across it — the camp's own
   version of the OS pages' <ArtAside> orb spread, reusing that grid
   (.art-aside in the INK RELIEF block) with a square photo where the orb
   goes. CampPhoto interrupts a run; this one turns it into a spread, which
   is the difference between a page with pictures in it and a page that
   reads as designed. `flip` puts the figure left — alternate it down the
   page or the figures line up into a column and stop registering. */
const CampAside = ({ shot, alt, caption, children, flip, ratio, style }) => (
  <div className={`art-aside${flip ? ' flip' : ''}`} style={style}>
    <div className="art-aside-body">{children}</div>
    <figure className="art-aside-fig">
      <img
        className="cph-aside-shot" src={CPH(shot)} alt={alt} loading="lazy"
        style={ratio ? { '--ca-ratio': ratio } : null}
      />
      {caption && <figcaption className="cph-aside-cap">{caption}</figcaption>}
    </figure>
  </div>
);

/* ─── Pattern 08 · persona slider ────────────────────────────────────────
   Who-comes is the decision-making section of this page — the moment a
   reader works out "is this for someone like me" — so it gets a slider
   rather than a static stacked list: one persona full-bleed at a time,
   its benefit stated first and loudest, autoplay so a skimmer still
   sees all five, and any manual interaction stops the clock permanently
   rather than yanking control back mid-read. */
const CampPersonaSlider = ({ profiles }) => {
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
          aria-label="Previous profile"
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
          aria-label="Next profile"
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
          Profile {p.n} of {profiles.length}
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
            <h6 style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-500)', margin: '0 0 8px' }}>Working on</h6>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.6, color: 'var(--ink-700)', margin: 0 }}>{p.working}</p>
          </div>
          <div>
            <h6 style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-500)', margin: '0 0 8px' }}>Brings</h6>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              {p.brings.map(x => (
                <li key={x} style={{ fontSize: 14, fontWeight: 300, color: 'var(--ink-800)', padding: '3px 0' }}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─── Pattern 07 · nesting ───────────────────────────────────────────────
   The one thing on this page that is a containment relationship rather
   than a sequence, so it gets drawn as containment: four boxes actually
   inside each other, network on the outside, you in the middle. Built
   with reduceRight so the markup nests the same way the diagram does.
   The radius shrinks with each level, which is what stops it reading as
   four stacked cards. Padding is clamped because it compounds: four
   levels at a fixed 22px eats 176px of a phone's width before any text
   gets a look in. */
const CampNesting = () => (
  CAMP_NESTING.reduceRight((inner, [label, body], i) => (
    <div
      key={label}
      style={{
        background: i % 2 ? 'var(--surface-white)' : 'var(--forest-050)',
        border: '1px solid var(--forest-200)',
        borderRadius: 20 - i * 3,
        padding: 'clamp(14px, 1.6vw, 22px)'
      }}
    >
      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500,
        letterSpacing: '0.2em', textTransform: 'uppercase',
        color: 'var(--forest-700)', marginBottom: 6
      }}>{`Level ${CAMP_NESTING.length - i}`}</div>
      <div style={{
        fontFamily: 'var(--font-display)', fontSize: 'clamp(20px, 2vw, 26px)',
        fontWeight: 400, letterSpacing: '-0.02em', color: 'var(--ink-900)',
        marginBottom: 8
      }}>{label}</div>
      <p style={{
        fontSize: 14, fontWeight: 300, lineHeight: 1.6,
        color: 'var(--ink-700)', margin: 0, maxWidth: 620
      }}>{body}</p>
      {inner && <div style={{ marginTop: 'clamp(14px, 1.4vw, 20px)' }}>{inner}</div>}
    </div>
  ), null)
);

const PageCamp = ({ onNav }) => {
  const [active, setActive] = React.useState(CAMP_SECTIONS[0].id);

  // Live team roster — see CAMP_TEAM_API above. Fetched once on mount;
  // no polling, so a visitor who leaves the tab open won't see a change
  // that happens on the server mid-visit, only on their next load.
  const [campTeam, setCampTeam] = React.useState(null);
  const [campTeamError, setCampTeamError] = React.useState(false);

  React.useEffect(() => {
    let cancelled = false;
    fetch(CAMP_TEAM_API)
      .then(r => { if (!r.ok) throw new Error('bad response'); return r.json(); })
      .then(async (data) => {
        const roster = data.team_memberships || [];
        const people = await Promise.all(roster.map(p =>
          fetch(campPersonApi(p.id)).then(r => r.ok ? r.json() : null).catch(() => null)
        ));
        if (cancelled) return;
        const merged = roster.map((p, i) => {
          const detail = people[i];
          const links = [...(p.socials || [])];
          (detail && detail.url_contact_items || []).forEach(l => {
            const idx = links.findIndex(x => x.key === l.key);
            if (idx >= 0) links[idx] = l; else links.push(l);
          });
          return {
            id: p.id,
            name: p.name,
            photo_url: (detail && detail.photo_url) || p.photo_url,
            bio: detail ? campStripHtml(detail.description) : '',
            links
          };
        });
        setCampTeam(merged);
      })
      .catch(() => { if (!cancelled) setCampTeamError(true); });
    return () => { cancelled = true; };
  }, []);

  // The app-level lucide.createIcons() pass runs after App's own renders,
  // not after this component's async state updates — so the social icons
  // need their own pass once the team data (and its <i data-lucide> tags)
  // actually lands in the DOM.
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, [campTeam]);

  // Scroll-spy: whichever section owns the band just below the fixed nav wins.
  React.useEffect(() => {
    const els = CAMP_SECTIONS.map(s => document.getElementById(s.id)).filter(Boolean);
    if (!els.length) return;
    const on = () => {
      const line = 140;
      let cur = els[0].id;
      els.forEach(el => { if (el.getBoundingClientRect().top <= line) cur = el.id; });
      setActive(cur);
    };
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  const jump = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, '', `#camp/${id}`);
    }
  };

  // Every section clears the fixed nav when jumped to.
  const anchor = { scrollMarginTop: 78 };

  return (
    <>
    <CampNav />
    <CampSignposts active={active} onJump={jump} />

    {/* ─── HERO · pattern 01 ────────────────────────────────────────────────
         The photograph carries the atmosphere now, so the headline gets to
         be shorter and warmer than the thesis statement it replaced. */}
    <CampHero>
      <div className="hero-inner" style={{ maxWidth: 880 }}>
        <Eyebrow>The Gathering US · Camp Navarro, California</Eyebrow>
        <h1 className="display lg">
          Six days in the redwoods with the people <em>building what comes next.</em>
        </h1>
        <p className="lede" style={{ maxWidth: 620 }}>
          Builders, entrepreneurs, investors, ecosystem practitioners and wisdom keepers, in one forest, for one week. Camp Audax is where AI for a wiser, regenerative society gets built by the people actually building it.
        </p>
        <p className="cph-hero-meta">
          Camp Navarro, Northern California&nbsp; ·&nbsp; <span className="cph-date">12–18 October 2026</span>
        </p>
        <p className="cph-hero-meta cph-hero-meta-2">
          7 days, 6 nights · applications close TBC
        </p>
        <div className="hero-ctas" style={{ marginTop: 36 }}>
          <Button size="lg" icon="arrow-right" onClick={() => window.open(JOIN_URL, '_blank')}>Apply to join Camp Audax</Button>
          <Button variant="ghost" onClick={() => jump('the-agent')}>Meet Sorrel, the camp agent</Button>
        </div>
      </div>
    </CampHero>

    {/* The three promises moved out of the hero — over a photograph they
        competed with the faces. They read better on parchment. */}
    <section className="section-tight">
      <div className="container">
        <CampCascade className="insight-grid">
          {[
            ['Be early', 'Help define a field before it has a name. The working dialogue between builders, investors and wisdom keepers is barely happening anywhere.'],
            ['Move from ideas to action', 'Every participant leaves with at least one named next step and support in taking it.'],
            ['Continue beyond the Camp', 'The journey starts before you arrive and carries on after you leave.']
          ].map(([h, p]) => (
            <article key={h} className="insight-card">
              <h4>{p}</h4>
              <p style={{ marginTop: 10, fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--forest-700)' }}>{h}</p>
            </article>
          ))}
        </CampCascade>
        <div className="q-body" style={{ maxWidth: 760, marginTop: 40 }}>
          <p>A Camp is a working village inside {GATHERING}: its own crew, its own programme, its own culture, held for six days inside a wider field of 500 people. Camp Audax is the one for people building, funding, applying and philosophically shaping AI for societal good.</p>
          <p>Audax OS is developed through practice. Camp Audax is where the practice gathers in one forest.</p>
        </div>
      </div>
    </section>

    {/* ─── 01 · WHY NOW ─────────────────────────────────────────────────────
         Merges the old §09 Why now and §01 The theme. The argument, then
         the question the argument produces. */}
    <section className="section" id="why-now" style={anchor}>
      <div className="container">
        <CampInk className="q-h1">
          <span className="num">01 · Why now</span>
          What makes this <em>the moment to gather?</em>
        </CampInk>
        <div className="q-body" style={{ maxWidth: 760 }}>
          <p>Twenty-five years of digital technology taught us something permanent. The architecture of our tools becomes the architecture of our societies. Attention economies. Polarisation. The fracturing of shared reality. We watched software rewrite civic life in real time.</p>
          <p>AI carries the same power at greater scale, and moves faster than any person, team or organisation can track alone. New agents, protocols, capabilities and risks arrive weekly. Meanwhile the social and ecological challenges in front of us ask for coordination our institutions strain to hold.</p>
          <p>The story about AI travelling furthest right now runs on fear. Surveillance. Control. Job loss. Concentrated power. The companies building these systems sell on that fear with striking enthusiasm, given they are also the ones sending the invoices.</p>
          <p>A large and quiet population sees something else in this technology. That voice barely registers in public, because it has never been gathered in one place, given shape, and spoken together.</p>
          <p>Camp Audax gathers that voice and puts it to work, grounded in shipped products, real organisations, deployed capital and hard-won practice.</p>
        </div>

        <CampKicker top={56} bottom={8}>What we are gathering around</CampKicker>
        {/* the reading shot used to sit under this passage at full width, as
            one more interruption; beside the prose it does the same work of
            breaking the run and gives the section a composition */}
        <CampAside
          shot="reading" alt="Someone reading by the water"
          caption="A large and quiet population is already asking these questions."
          style={{ marginTop: 12 }}
        >
          <div className="q-body">
            <p>Camp Audax explores how AI helps individuals, teams, organisations, networks, movements and ecosystems collaborate at a level that was previously too complex, too slow, or too expensive to attempt.</p>
            <p>Better sensemaking. Better agreements. Better mentoring. Better value flows. Better ecosystem coordination. More life-affirming decisions.</p>
            <p>We hold a picture of machines carrying more of the mechanical burden, so that humans can do what humans do best: dreaming, sensing, relating, building trust, creating meaning, holding values, and deepening relationship with each other and the living world.</p>
          </div>
        </CampAside>
        {/* the question comes back out to full measure — it is the one line on
            the page that should not be sharing a row with anything */}
        <div className="q-body" style={{ maxWidth: 760 }}>
          <p className="lead">One question holds the week, large and slightly unreasonable:</p>
          <p className="lead"><em>Can AI help humanity reach a wiser, regenerative global society within the next hundred years?</em></p>
        </div>

        <CampKicker top={48} bottom={8}>The questions we bring</CampKicker>
        <CampCascade as="ol" indent className="q-list">
          {CAMP_QUESTIONS.map(q => <li key={q}>{q}</li>)}
        </CampCascade>
        <div className="q-body" style={{ maxWidth: 760, marginTop: 32 }}>
          <p>The programme is co-created. Bring your questions, your needs, your projects and your proposals.</p>
        </div>

        <CampQuote>A vision becomes credible the moment it is held <em>by people already building it.</em></CampQuote>
      </div>
    </section>

    {/* pattern 02 — also the establishing shot for the section below */}
    <CampBand shot="tents" kicker="Camp Navarro" numeral="II" label="A working village in the forest"
      tearTop={ART.crest} tearGroundTop="var(--surface-parchment)"
      tear={ART.spray} tearGround="var(--surface-parchment)" rate={0.16} />

    {/* ─── 02 · THE GATHERING ───────────────────────────────────────────────
         The context every other section assumes. Camp Audax is a camp
         inside somebody else's village, and a reader who does not know
         what The Gathering is will read this whole page as our festival.
         Sits here, before Who comes, because the container has to exist
         before the room inside it means anything. Sources and the reasons
         for its restraint are at CAMP_GATHERING_PARTS above. */}
    <section className="section" id="the-gathering" style={anchor}>
      <div className="container">
        <CampInk className="q-h1">
          <span className="num">02 · The Gathering</span>
          What are we <em>a camp inside?</em>
        </CampInk>

        <div style={{ margin: '0 0 40px' }}>
          <GatheringCredit />
        </div>

        <div className="q-body" style={{ maxWidth: 760 }}>
          <p>Camp Audax is not an event we are putting on. It is a camp inside {GATHERING} US: a temporary village of 500-odd people across twenty-plus camps, on 200 acres of redwood at Camp Navarro, for seven days in October 2026. The village is convened by <a href="https://regenworld.net/" target="_blank" rel="noreferrer" style={{ color: 'var(--forest-700)' }}>RegenWorld</a>. We are guests in it, with a camp to run and a share of the responsibility for the whole.</p>
          <p>The Gathering is a co-created, camp-centred gathering in nature, built to help people and organisations across fragmented fields form belonging, trust, shared context, and pathways towards continued collaboration. Its visible form is a village: camps, shared meals, conversation, art, workshops, fire, ceremony, music, rest, celebration. Its deeper form is a social architecture — camps as the organising cells, a Nest where camp leaders prepare together for months beforehand, a Council that senses across all of them, a welcome gate and ceremonies to mark the threshold, and a continuity layer built to carry what happens past the closing fire. That architecture is why we chose to be a camp rather than hire a venue.</p>
          <p>The shift is from audience to ecosystem. Nobody here is only a consumer of a programme: participants are camp members, hosts, contributors and possible stewards, and organisations express their culture by building a camp rather than sponsoring a stage. This is emphatically not leaderless — it demands strong, visible, distributed leadership, and says so plainly in its own briefing — and co-creation means real agency, not unpaid labour.</p>
        </div>

        <CampKicker top={56}>What it runs on</CampKicker>
        <div className="q-body" style={{ maxWidth: 760, marginBottom: 24 }}>
          <p>Six principles hold this together. Read each one next to the thing it gets mistaken for — in every case the mistake is the cheaper version, and from outside the two look identical.</p>
        </div>
        <CampCascade style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
          {CAMP_GATHERING_DNA.map(([term, meaning, mistaken]) => (
            <div key={term} style={{
              display: 'flex', flexDirection: 'column',
              padding: '20px 22px', background: 'var(--surface-white)',
              border: '1px solid var(--border-1)', borderRadius: 12
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, letterSpacing: '-0.015em', color: 'var(--ink-900)', marginBottom: 8 }}>{term}</div>
              <div style={{ fontSize: 13, fontWeight: 300, lineHeight: 1.55, color: 'var(--ink-700)', marginBottom: 16 }}>{meaning}</div>
              <div style={{ marginTop: 'auto', paddingTop: 12, borderTop: '1px dashed var(--forest-200)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-500)', marginBottom: 5 }}>Often mistaken for</div>
                <div style={{ fontSize: 13, fontWeight: 300, lineHeight: 1.5, color: 'var(--forest-800)' }}>{mistaken}</div>
              </div>
            </div>
          ))}
        </CampCascade>
        <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.6, color: 'var(--ink-500)', margin: '20px 0 0', maxWidth: 760 }}>
          None of it counts until it changes roles, budgets, spaces, schedules and who gets to decide. Put the six words on a poster while the organisers keep all the agency, and it's brand varnish, not Gathering architecture. Hold us to that test too.
        </p>

        <CampPhoto shot="mandala" alt="A green mandala laid on the ground" caption="Nothing on the property arrives finished. Somebody makes it, on the day, out of what is there." />

        {/* pattern 07 */}
        <CampKicker>Where Camp Audax sits</CampKicker>
        <div className="q-body" style={{ maxWidth: 760, marginBottom: 24 }}>
          <p>Four levels, each one nurturing and nurtured by the one inside it. It is worth knowing which one you are joining: you are not buying a ticket to a programme, you are taking a place in a camp, which holds a place in a village, which holds a place in something still being built.</p>
        </div>
        <CampNesting />

        <CampKicker top={56}>Four things it is not, and one thing it is</CampKicker>
        <table className="mini-matrix">
          <thead>
            <tr><th>The easy shorthand</th><th>Closer to the truth</th></tr>
          </thead>
          <tbody>
            {CAMP_SHORTHAND.map(([shorthand, truth]) => (
              <tr key={shorthand}><th>{shorthand}</th><td>{truth}</td></tr>
            ))}
          </tbody>
        </table>
        <p style={{ fontSize: 14, fontWeight: 300, color: 'var(--ink-500)', margin: '20px 0 0' }}>Camps, unconferences, ritual, festivals and network weaving are all older than this. The claim is only in the configuration: a nature-based village of organisational cells, wired to an explicit before and after.</p>

        <CampKicker top={56}>What else your ticket opens</CampKicker>
        <div className="q-body" style={{ maxWidth: 760, marginBottom: 24 }}>
          <p>Camp Audax runs its own programme, and you are free to leave it. Every public session on the property is open to you, in every other camp — founders, facilitators, community resilience, identity work, circle practice, and whatever the other nineteen bring.</p>
        </div>
        <CampCascade step={45} style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
          {CAMP_PROPERTY.map((c, i) => (
            <div key={c} style={{
              padding: '20px 18px',
              background: i % 3 === 0 ? 'var(--forest-050)' : 'var(--surface-white)',
              border: '1px solid var(--border-1)',
              borderRadius: 12,
              fontFamily: 'var(--font-display)',
              fontSize: 15, fontWeight: 400, letterSpacing: '-0.01em', lineHeight: 1.2,
              color: 'var(--ink-900)'
            }}>{c}</div>
          ))}
        </CampCascade>

        <div style={{ ...campNote, marginTop: 40 }}>
          <h6 style={campNoteH6}>What is tested, and what is still a hypothesis</h6>
          <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.6, color: 'var(--forest-900)', margin: '0 0 12px' }}>
            This has been run before, locally, more than once, and it delivers: friendships, organisational clarity, teams that formed, real collaborations. We hold the larger claims more carefully. Consistent continuity after the event, ecosystem-level impact, global governance, fair economics, inclusion and ecological standards — all still developing, and we say so.
          </p>
          <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.6, color: 'var(--forest-900)', margin: '0 0 20px' }}>
            Saying that out loud is the good sign, not the warning. It is also why Camp Audax designs so hard for the after: continuity is the open problem in the whole model, and we would rather help solve it than admire it. See <a href="#camp/the-week" onClick={(e) => { e.preventDefault(); jump('the-week'); }} style={{ color: 'var(--forest-700)' }}>the coherence loop</a>.
          </p>
          <blockquote style={{
            margin: 0, paddingLeft: 18, borderLeft: `2px solid ${GATHERING_OLIVE}`,
            fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 400,
            fontStyle: 'italic', lineHeight: 1.45, color: 'var(--forest-800)'
          }}>
            “The poetry is the promise of joyful interdependence. The machinery is camps, boundaries, roles, rhythms, governance, and follow-through. It will need both.”
            <footer style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 14 }}>
              <GatheringMark size={14} tone={GATHERING_DARK} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, fontStyle: 'normal', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: GATHERING_OLIVE }}>
                The Gathering, on itself
              </span>
            </footer>
          </blockquote>
        </div>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 32 }}>
          <Button variant="secondary" icon="arrow-right" onClick={() => window.open('https://regenworld.net/', '_blank')}>The Gathering US — regenworld.net</Button>
          <Button variant="ghost" onClick={() => window.open('https://the-gathering.earth/', '_blank')}>The wider network</Button>
        </div>

        <CampQuote>We did not want to run our own festival. <em>We wanted a village to be a citizen of.</em></CampQuote>
      </div>
    </section>

    {/* §02 and §03 met on a bare tone step — the only two section joins on
        this page without a photographic band between them. A wash rule is
        the quiet relief the OS pages use at exactly these joins, and the
        library is already on this page: every band edge dissolves through
        one of these washes. Two of them bracket §03.

        wave and spray, not tide/thicket: those two are the only washes in the
        library nobody uses, and looking at them shows why — tide is a scan
        with the paper's own cut edge in frame, which lands as a hard vertical
        line across the band, and both are a saturated teal that fights the
        forest palette the photography sits in. */}
    <WashRule image={ART.wave} from="parchment" to="paper" />

    {/* ─── 03 · WHO COMES ───────────────────────────────────────────────────
         Merges the old §04 Wisdom and §03 Who comes. The argument for why
         non-technologists belong is the natural set-up for the profiles. */}
    <section className="section" id="who-comes" style={{ ...anchor, background: 'var(--surface-paper)' }}>
      <div className="container">
        <CampInk className="q-h1">
          <span className="num">03 · Who comes</span>
          Who belongs in the room <em>while this is designed?</em>
        </CampInk>
        {/* the section where a reader decides whether the room is for them,
            so the argument opens beside a photograph of the room */}
        <CampAside
          shot="table" alt="Conversation around a stone table" flip
          caption="The design table, with more than one discipline at it."
        >
          <div className="q-body">
            <p>The hard problems in AI are increasingly questions about being human. What is worth wanting. What deserves care. Which trade-offs a society can live with. Where authority should sit.</p>
            <p>These are existential technologies, and they are not, on the whole, being shaped by the people a society would choose to ask what a good life is. That is a structural accident rather than anybody's villainy: for most of the history of computing, shaping the technology required fluency in the technology, so the questions that mattered most were answered late, by whoever happened to be in the building.</p>
          </div>
        </CampAside>

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
          <p>So we bring the wisdom keepers inside the build, into the design decisions, the product questions, the protocols and the roadmaps, while all of it is still soft enough to shape. Not as critique arriving afterwards. As participants.</p>
        </div>

        <CampKicker top={48}>The conversation we are adding</CampKicker>
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

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, margin: '56px 0' }}>
          {[
            ['furhat', 'Two people watching, one in a bright fur hat'],
            ['platform', 'Two people in conversation on a platform']
          ].map(([shot, alt]) => (
            <div key={shot} style={{ borderRadius: 16, overflow: 'hidden', aspectRatio: '4 / 3' }}>
              <img src={CPH(shot)} alt={alt} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          ))}
        </div>

        <CampKicker>Five profiles, one room</CampKicker>
        <div className="q-body" style={{ maxWidth: 760, marginBottom: 40 }}>
          <p>Each brings something the others need. The value comes from all five being in the same room, in the same week, in the same forest. If you are deciding whether this is for you, this is the part to read.</p>
        </div>

        <CampPersonaSlider profiles={CAMP_PROFILES} />

        <div className="q-body" style={{ maxWidth: 760, marginTop: 16 }}>
          <CampKicker bottom={12}>What every participant brings</CampKicker>
          <p>Something real: a project, a tool, a question, a practice, capital, a network, or a body of experience. Camp Audax runs on reciprocity, with everyone contributing to the programme and to each other's work.</p>
          <p>This camp is for those holding both hope and responsibility around AI — people who see the danger clearly, and who also sense the possibility of humanity coordinating at a level we have never reached.</p>
        </div>

        <CampQuote>Critique arrives after the architecture is poured. <em>We would like to be there for the pour.</em></CampQuote>
      </div>
    </section>

    {/* the second half of the pair — flipped, and a different wash, so the
        two do not read as the same object stamped twice */}
    <WashRule image={ART.spray} flip from="paper" to="parchment" />

    {/* ─── 04 · THE WEEK ────────────────────────────────────────────────────
         Merges the old §05 The week, §06 The journey and §07 The loop.
         What happens, when it starts, and what keeps it going. */}
    <section className="section" id="the-week" style={anchor}>
      <div className="container">
        <CampInk className="q-h1">
          <span className="num">04 · The week</span>
          What actually <em>happens?</em>
        </CampInk>
        <div className="q-body" style={{ maxWidth: 760, marginBottom: 40 }}>
          <p>An indicative rhythm, in seven movements. The programme is co-created, so the detail arrives with the people.</p>
        </div>

        {/* pattern 04 — the seven movements are the hardest thing on this
            page to picture, so each is pinned to the thing it looks like */}
        <CampDiptych items={CAMP_MOVEMENTS} />

        <div className="q-body" style={{ maxWidth: 760, marginTop: 40 }}>
          <p>Woven through all seven: redwoods, shared meals, informal time, music, ceremony, rest, and the parts of a week that resist being put on a schedule.</p>
        </div>

        {/* Change 5 — media promoted from one chip to a named strand. */}
        <div style={{ ...campNote, marginTop: 16 }}>
          <h6 style={campNoteH6}>A media strand runs through the week</h6>
          <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.6, color: 'var(--forest-900)', margin: '0 0 12px' }}>
            Camp Audax is not only a conversation about a better story for AI. It is a place where that story gets made. A media team works across the six days with a small crew of partner organisations, producing recorded dialogue, published synthesis, and pieces co-authored with participants rather than about them.
          </p>
          <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.6, color: 'var(--forest-900)', margin: 0 }}>
            If you flew across a continent, you should leave with something the world can read, watch or hear.
          </p>
        </div>

        <CampKicker top={64}>When does the camp begin?</CampKicker>
        <CampCascade className="contrast-grid" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
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
        </CampCascade>

        <CampKicker top={64}>What keeps going after the fire goes out</CampKicker>
        <div className="q-body" style={{ maxWidth: 760, marginBottom: 24 }}>
          <p>Every gathering runs one of two loops. We are designing hard for the second. We do not have an opinion about what your next step should be — only that there is one, and that you are supported in taking it.</p>
        </div>

        <CampLoops>
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
        </CampLoops>

        <div style={{ ...campNote, marginTop: 24 }}>
          <h6 style={campNoteH6}>What Camp Audax adds</h6>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 19, fontWeight: 400, letterSpacing: '-0.01em', lineHeight: 1.35, color: 'var(--forest-900)', fontStyle: 'italic', margin: 0 }}>
            A facilitated path from arrival to commitment. Asked before you come, at the start, during, and at the close: what connection do you need, what are you offering, and what happens next? We do not match people. We make the field visible, and let people find each other in it.
          </p>
        </div>

        <CampQuote>The gathering is the easy part. <em>The follow-up is the product.</em></CampQuote>
      </div>
    </section>

    {/* pattern 02 */}
    <CampBand shot="wall" kicker="Fire circle" numeral="III" label="Where the real conversations happen"
      tearTop={ART.wave} tearGroundTop="var(--surface-parchment)"
      tear={ART.ribbons} tearGround="var(--surface-white)" rate={0.16} />

    {/* ─── 05 · THE AGENT ───────────────────────────────────────────────────
         Was three overlapping blocks (§02, the AI-layer sidebar and the
         inset). Now one section, with a name and a face. */}
    <section className="section manifesto" id="the-agent" style={anchor}>
      <div className="container">
        <CampInk className="q-h1">
          <span className="num">05 · The agent</span>
          Some communities keep a dog. <em>We are raising an agent.</em>
        </CampInk>

        <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 40, alignItems: 'start', marginBottom: 48 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
            <SorrelMark size={140} />
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 30, letterSpacing: '-0.02em', color: 'var(--forest-800)' }}>Sorrel</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-500)', textAlign: 'center' }}>Working name</div>
          </div>
          <div className="q-body" style={{ maxWidth: 680 }}>
            <p>Redwood sorrel carpets the forest floor at Navarro. In direct sun it folds its three leaflets shut; in shade it opens again. We wanted that instinct in an agent, so we borrowed the name.</p>
            <p>Sorrel is woven through the physical experience of the camp. It holds the memory of the week: who is here, what is happening, which conversations are live, which connections have been declared, and what emerged at 7am while you were asleep in a ShiftPod.</p>
            <p>It works on consent. It knows only what participants choose to tell it. It helps you orient, remember, connect and follow through, and it leaves every judgment that matters to you.</p>
            <p>This makes the Camp a live prototype of the thing it is discussing: a consent-based, agent-supported gathering, tested at human scale in a forest.</p>
          </div>
        </div>

        <CampCascade style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 24 }}>
          {[
            ['What it does', 'Explains · orients · synthesises · connects · remembers · reminds'],
            ['What it knows', 'Only what the Camp and its participants have explicitly allowed it to know.'],
            ['What it leaves to you', 'What matters to you · who you should work with · what your commitments are worth · every judgment about another human being'],
            ['How its role changes', 'Before: orientation companion · during: practical navigator and memory keeper · after: reflection partner and bridge to follow-through']
          ].map(([h, b]) => (
            <div key={h} style={{ background: 'var(--surface-white)', border: '1px solid var(--border-1)', borderRadius: 12, padding: '20px 22px' }}>
              <h6 style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--forest-700)', margin: '0 0 10px' }}>{h}</h6>
              <p style={{ fontSize: 14, fontWeight: 400, lineHeight: 1.55, color: 'var(--ink-800)', margin: 0 }}>{b}</p>
            </div>
          ))}
        </CampCascade>

        {/* Christine: "if we could weave the AI digital experience into the
            physical in a way that's harmonious and helpful to the goal." */}
        <CampKicker top={48}>Across the journey</CampKicker>
        <CampCascade className="contrast-grid" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
          <div className="contrast-col">
            <h6>Before</h6>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.6, color: 'var(--ink-700)' }}>A conversational orientation rather than a form. Why are you coming? What are you building? What questions are alive for you? With your permission, Sorrel introduces relevant themes and surfaces participants working on related questions. It shows relevance and explains why. You choose.</p>
          </div>
          <div className="contrast-col">
            <h6>During</h6>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.6, color: 'var(--ink-800)' }}>Practical navigation: what is happening now, who is working on what, where a discussion is running, what you have committed to so far. Opt-in Coherence Conversations recording, with everyone present confirming consent and reviewing the synthesis.</p>
          </div>
          <div className="contrast-col">
            <h6>After</h6>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.6, color: 'var(--ink-800)' }}>Review what you explored. Remember your commitments. Reconnect with relevant people. Decide what to continue, revise, or release. Collective memory maintained from participant-approved syntheses.</p>
          </div>
        </CampCascade>

        <CampPhoto shot="shadow" alt="Leaf shadows falling across canvas" caption="The same instinct as its name: open in shade, closed in direct light." />

        {/* Change 4 — the "raise it together" invitation, made concrete. */}
        <CampKicker top={16}>What is not decided yet</CampKicker>
        <div className="q-body" style={{ maxWidth: 760, marginBottom: 24 }}>
          <p>Sorrel is not finished, and finishing it is not our job alone. Participants set its language, personality, behaviours and boundaries during the week. These are genuinely open:</p>
        </div>
        <CampCascade style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 32 }}>
          {CAMP_UNDECIDED.map(([h, b]) => (
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
            Several organisations will arrive with agents of their own. Where their people consent, we would like to run the first small trials of agents from different organisations talking to each other on their behalf — introductions, matching needs to offers, carrying a commitment between two teams. This is early, unglamorous and may not work. We will say so either way.
          </p>
        </div>

        <div style={{ background: 'var(--surface-white)', border: '1px solid var(--border-1)', borderRadius: 12, padding: '20px 22px', marginBottom: 24 }}>
          <h6 style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-500)', margin: '0 0 10px' }}>Consent, privacy and attention</h6>
          <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.55, color: 'var(--ink-700)', margin: '0 0 10px' }}>Recording is explicitly opt-in and visible. You can participate fully without using Sorrel at all. You can review, edit, export and delete your own material. You choose what stays private, what organisers see, what other participants see, and what becomes public.</p>
          <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.55, color: 'var(--ink-700)', margin: 0 }}>Sorrel is available when useful and quiet when it is not. Sometimes the best interface is a recorder on a table or a single physical display, rather than an app pecking at everyone's pockets in a forest.</p>
        </div>

        <Button icon="arrow-right" onClick={() => window.open(JOIN_URL, '_blank')}>Help raise Sorrel</Button>

        <CampQuote>An agent can remind us of the promise. <em>The promise is still ours to make.</em></CampQuote>
      </div>
    </section>

    {/* pattern 02 */}
    <CampBand shot="canopy" kicker="200 acres" numeral="IV" label="Ancient redwood forest"
      tearTop={ART.spray} tearGroundTop="var(--surface-white)"
      tear={ART.crest} tearGround="var(--surface-paper)" rate={0.2} />

    {/* ─── 06 · WHAT YOU GET ────────────────────────────────────────────────
         Merges the old §08 What you leave with and §10 What may emerge. */}
    <section className="section" id="what-you-get" style={{ ...anchor, background: 'var(--surface-paper)' }}>
      <div className="container">
        <CampInk className="q-h1">
          <span className="num">06 · What you get</span>
          Come with a question. <em>Leave with movement.</em>
        </CampInk>

        <CampCascade as="ol" indent className="q-list">
          {CAMP_LEAVE_WITH.map(x => <li key={x} style={{ fontSize: 'clamp(16px, 1.4vw, 20px)' }}>{x}</li>)}
        </CampCascade>

        <CampPhoto shot="joy" alt="A woman dancing with her arms open" caption="Leave with movement — sometimes literally." />

        <CampKicker top={16}>What may emerge</CampKicker>
        <div className="q-body" style={{ maxWidth: 760, marginBottom: 24 }}>
          <p>Six days produce different things for different people. Among the paths already visible:</p>
        </div>
        <CampCascade step={45} style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12 }}>
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
        </CampCascade>
        <div className="q-body" style={{ maxWidth: 760, marginTop: 32 }}>
          <p>You will be supported to identify and take the next meaningful step from wherever you actually are. Our responsibility as hosts is to help you find it and take it; the shape of it belongs to you. Founding a startup before breakfast remains entirely optional.</p>
        </div>

        <CampQuote>We hold the container. <em>You choose the direction.</em></CampQuote>
      </div>
    </section>

    {/* pattern 02 */}
    <CampBand shot="hands-up" kicker="500+ participants" numeral="V" label="One field, twenty camps"
      tearTop={ART.ribbons} tearGroundTop="var(--surface-paper)"
      tear={ART.wave} tearGround="var(--surface-parchment)" rate={0.18} />

    {/* ─── 07 · PRACTICAL ───────────────────────────────────────────────────
         Merges the old §11 The place, §12 Who is convening and §13 Practical. */}
    <section className="section" id="practical" style={anchor}>
      <div className="container">
        <CampInk className="q-h1">
          <span className="num">07 · Practical</span>
          The place, the crew, <em>and the small print.</em>
        </CampInk>

        {/* the longest, driest section on the page, and the one actually about
            a place — it carried no photograph of that place at all. This
            paragraph describes the land, so the land runs beside it. */}
        <CampAside
          shot="path" alt="Someone walking a hedged path"
          caption="Camp Navarro, between sessions."
        >
          <div className="q-body">
            <p>200 acres of ancient redwood forest at Camp Navarro, Northern California. Seven days and six nights. Campfires in place of boardrooms, conversations in place of presentations, redwoods in place of hotel ballrooms.</p>
            <p>The land does something to people. It slows you down, opens you up, and creates the conditions for the kind of conversation that arrives when you step away from everything ordinary.</p>
            {/* The village itself is section 02 — no reason to describe it twice. */}
            <p>The village around our camp — the other twenty, the Council, the ceremonies, and everything your ticket opens beyond our own programme — is <a href="#camp/the-gathering" onClick={(e) => { e.preventDefault(); jump('the-gathering'); }} style={{ color: 'var(--forest-700)' }}>The Gathering</a>, above.</p>
          </div>
        </CampAside>
        <div style={{ margin: '24px 0 56px' }}>
          <Button variant="secondary" icon="arrow-right" onClick={() => window.open('https://regenworld.net/', '_blank')}>Venue, lodging and meals — regenworld.net</Button>
        </div>

        <CampKicker>Who is convening</CampKicker>
        <div className="q-body" style={{ maxWidth: 760 }}>
          <p>Camp Audax is hosted by <a href="https://coherence.tv/" target="_blank" rel="noreferrer" style={{ color: 'var(--forest-700)' }}>The Coherence Company</a>, the first living lab of Audax OS, alongside partner organisations building in this space. The Coherence Company is one participant among several. The camp carries many goals, and every organisation and participant brings their own.</p>
          <p>We are early, and we would rather say so than pretend otherwise. Some of what follows is fixed. Some of it is still being decided, in the open, with the people coming.</p>
        </div>
        <CampCascade as="ul" indent style={{ listStyle: 'none', padding: 0, margin: '24px 0 56px' }}>
          {CAMP_CONVENING.map(([role, who]) => (
            <li key={role} style={{
              display: 'flex', justifyContent: 'space-between', gap: 16,
              padding: '14px 0', borderBottom: '1px solid var(--border-2)',
              fontSize: 15, color: 'var(--ink-800)'
            }}>
              <span>{role}</span>
              <span style={{ color: 'var(--ink-500)' }}>{who}</span>
            </li>
          ))}
        </CampCascade>

        <CampKicker>Team</CampKicker>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 20, marginBottom: 56 }}>
          {campTeamError && (
            <p style={{ fontSize: 14, fontWeight: 300, color: 'var(--ink-500)', gridColumn: '1 / -1' }}>Team roster unavailable right now.</p>
          )}
          {!campTeamError && campTeam === null && (
            <p style={{ fontSize: 14, fontWeight: 300, color: 'var(--ink-500)', gridColumn: '1 / -1' }}>Loading team…</p>
          )}
          {!campTeamError && campTeam !== null && campTeam.length === 0 && (
            <p style={{ fontSize: 14, fontWeight: 300, color: 'var(--ink-500)', gridColumn: '1 / -1' }}>TBC</p>
          )}
          {!campTeamError && campTeam !== null && campTeam.map(person => (
            <div key={person.id} style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
              padding: '32px 24px', background: 'var(--surface-white)',
              border: '1px solid var(--border-1)', borderRadius: 16
            }}>
              {person.photo_url && (
                <img
                  src={person.photo_url.startsWith('http') ? person.photo_url : `https://view.the-gathering.earth${person.photo_url}`}
                  alt={person.name}
                  style={{ width: 128, height: 128, borderRadius: '50%', objectFit: 'cover', flexShrink: 0, marginBottom: 18 }}
                />
              )}
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 19, fontWeight: 400, color: 'var(--ink-900)', margin: '0 0 10px' }}>{person.name}</p>
              {person.bio && (
                <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.55, color: 'var(--ink-700)', margin: '0 0 16px' }}>{person.bio}</p>
              )}
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', marginTop: 'auto' }}>
                {(person.links || []).map(s => (
                  <a key={s.key} href={campSocialHref(s)} target="_blank" rel="noreferrer" aria-label={s.label} style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: 30, height: 30, borderRadius: '50%',
                    color: 'var(--forest-700)', background: 'var(--forest-050)'
                  }}>
                    <i data-lucide={CAMP_TEAM_ICONS[s.key] || 'link'} style={{ width: 15, height: 15 }}></i>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <CampKicker>Dates, cost and logistics</CampKicker>
        <table className="matrix" style={{ marginBottom: 56 }}>
          <tbody>
            {CAMP_PRACTICAL.map(([k, v]) => (
              <tr key={k}><th>{k}</th><td>{v}</td></tr>
            ))}
          </tbody>
        </table>

        <CampKicker>FAQ</CampKicker>
        <CampCascade indent style={{ marginBottom: 48 }}>
          {CAMP_FAQ.map(([q, a]) => (
            <div key={q} style={{ padding: '20px 0', borderBottom: '1px solid var(--border-2)' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 19, fontWeight: 400, letterSpacing: '-0.015em', color: 'var(--ink-900)', margin: '0 0 8px' }}>{q}</p>
              <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.55, color: 'var(--ink-700)', margin: 0 }}>{a}</p>
            </div>
          ))}
        </CampCascade>

        {/* one paragraph, so a shallower figure than the square asides above —
            a square here would tower over four lines of type. Breaks the
            table-then-FAQ stretch, which is the last dry run on the page. */}
        <CampAside
          shot="studio" alt="People working together at a materials table" flip
          ratio="4 / 3" caption="Real commitments, real tensions, real materials."
        >
          <div className="q-body">
            <p>The OS gets tested here too. Six days of real commitments, real tensions, real missions, real people, real agents, and real learning loops, in a forest, with the humidity and the mosquitoes and everything. The organisation is not backstage. It is part of the experiment.</p>
          </div>
        </CampAside>
      </div>
    </section>

    {/* ─── RIBBON · pattern 05 ──────────────────────────────────────────────
         Motion at the end of a long page is an invitation to stay rather
         than leave. It stops the moment you reach for it. */}
    <CampRibbon />

    {/* ─── CLOSING INVITATION ───────────────────────────────────────────────── */}
    <section className="section cph-cta" style={{ background: 'var(--bg-deep)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'var(--grad-deep)', opacity: 1, pointerEvents: 'none' }}></div>
      <div className="cph-cta-art" style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${CTA_CAMP})`, backgroundSize: 'cover', backgroundPosition: 'center',
        mixBlendMode: 'screen', pointerEvents: 'none'
      }}></div>
      <div className="cph-cta-scrim"></div>
      <div className="container-narrow" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <Eyebrow color="var(--lichen-300)">A closing invitation</Eyebrow>
        <CampInk as="h2" className="display" style={{ color: '#fff', fontSize: 'clamp(36px, 4.5vw, 64px)', marginBottom: 28 }}>
          Bring what you are building. <em>Bring what you are questioning.</em>
        </CampInk>
        <p className="cph-cta-lede" style={{ fontSize: 18, fontWeight: 300, lineHeight: 1.55, maxWidth: 680, margin: '0 auto 20px' }}>
          The direction of AI is still being formed. The people needed are scattered across disciplines that rarely work together closely enough to shape what actually gets built.
        </p>
        <p className="cph-cta-lede" style={{ fontSize: 18, fontWeight: 300, lineHeight: 1.55, maxWidth: 680, margin: '0 auto 40px' }}>
          Come to share what you are learning. Come to test your questions. Come to find collaborators. Come to help write a story about AI rooted in coordination, regeneration, wisdom and human possibility.
        </p>
        <CampReadLine style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontStyle: 'italic', color: 'var(--lichen-300)', maxWidth: 620, margin: '0 auto 40px' }}>
          The redwoods are 400 years old. They have watched a few technologies arrive. Let's give them something worth watching.
        </CampReadLine>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button size="lg" icon="arrow-right" onClick={() => window.open(JOIN_URL, '_blank')}>Apply to join Camp Audax</Button>
          <Button variant="ghost" onClick={() => jump('the-agent')}>Meet Sorrel</Button>
        </div>
      </div>
    </section>

    <CampFooter onJump={jump} onNav={onNav} />
    </>
  );
};

window.PageCamp = PageCamp;
