/* Audax OS site · Camp Audax page (standalone landing page)
   ---------------------------------------------------------------
   Camp Audax at The Gathering US, Camp Navarro, Northern California,
   12–18 October 2026. A stand-alone landing page: its own nav and
   footer (no Audax OS site chrome), six anchored sections, and its
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
   from their brand sheet: dark green #192F2B, olive #989B4B.

   §02 now runs on their dark green end to end, so the olive needed a
   second value: #989B4B on #192F2B is 4.6:1, which is fine under a logo
   and a squeeze at 11px. OLIVE_LIFT is the same hue carried up to ~6.5:1
   and is what every olive that has to be *read* on that ground uses. */
const GATHERING_DARK  = '#192F2B';
const GATHERING_OLIVE = '#989B4B';
const GATHERING_OLIVE_LIFT = '#B9BC66';

/* Their swirl mark, traced from TheGatheringLogo.svg (assets/gathering/
   mark.svg) as inline JSX so its fill can carry their exact dark green
   rather than the file's own #2A5049 — a paler stand-in for print. */
const GatheringMark = ({ size = 24, tone = GATHERING_DARK }) => (
  <svg width={size} height={size * 95 / 84} viewBox="0 0 84 95" role="img" aria-label="The Gathering" style={{ display: 'block', flexShrink: 0 }}>
    <path fill={tone} d="M41.4701 0.0214217C42.5431 -0.0642282 43.6376 0.135622 44.6242 0.563871L80.9966 21.5338C82.7608 22.6615 83.9202 24.4887 83.9922 26.5943L83.9922 68.5556C83.7257 71.8674 81.7959 72.9523 79.2395 74.5011C67.9339 81.3531 56.1602 87.4771 44.8546 94.3291C42.3918 95.4639 40.6924 95.0642 38.4097 93.8937C26.4128 87.7626 14.8479 79.7044 2.887 73.3877C1.05794 72.0887 0.15061 70.6612 -0.00781267 68.3914L-0.00781257 26.266C0.201017 24.2175 1.24517 22.7686 2.887 21.5981C6.22828 19.2213 11.0962 16.8231 14.7687 14.689C22.9491 9.94253 31.2014 5.32458 39.3746 0.563871C40.0155 0.285509 40.7716 0.0785216 41.4701 0.0214217ZM27.2625 33.0894C28.2346 37.3434 31.3023 41.2404 35.3276 43.0391C49.7369 49.4771 62.7852 32.1116 52.0052 20.2848C47.0653 14.8603 40.8724 14.5534 34.0603 16.2735C15.2368 21.0128 4.85288 41.0905 11.7443 59.127C12.0395 59.0699 12.0611 58.7987 12.0827 58.556C12.1763 57.521 11.7155 55.8794 11.7371 54.6161C11.8307 47.6356 14.7327 41.3404 20.0975 36.8509C20.976 36.1157 26.4056 32.5755 27.2625 33.0966L27.2625 33.0894ZM70.0366 63.1525C72.0385 60.4688 73.2771 56.0507 73.8531 52.7603C76.6903 36.5083 66.0688 20.2348 49.9385 16.2664C49.4705 16.1522 47.1733 15.6525 46.9069 15.7168C46.7917 15.7453 46.5828 15.9523 46.6333 16.0165C50.7666 18.0864 55.0585 20.7487 57.7804 24.553C60.9201 28.9497 62.3675 34.4812 61.8418 39.8558C61.813 40.1484 61.5898 41.6544 61.489 41.7186C58.2629 41.2618 55.4113 41.2476 52.3365 42.3967C40.9948 46.6221 39.9723 62.4816 50.7666 68.0488C57.8381 71.6961 65.4495 69.2908 70.0438 63.1454L70.0366 63.1525ZM68.2867 66.1717C67.5882 66.1431 67.2138 66.914 66.7097 67.3137C58.8534 73.559 45.229 74.6225 37.5311 67.5635C35.9829 66.1431 36.9119 66.2787 37.8624 65.1011C46.4892 54.3591 37.8048 40.2626 24.2452 41.6116C18.2828 42.204 12.8244 48.5064 12.4068 54.2949C11.9747 60.2904 12.9756 63.1597 16.7058 67.7277C24.6053 77.3847 37.1063 81.7671 49.4345 78.8764C56.8587 77.1349 63.9877 72.417 68.2795 66.1788L68.2867 66.1717Z" />
  </svg>
);

/* Their reversed lockup (assets/gathering/lockup-white.svg — their own
   "logo white" file, with the tagline in their olive), used exactly as
   their brand sheet shows it: white mark on their dark green, never
   boxed and never on our cream. */
const GATHERING_LOCKUP = 'assets/gathering/lockup-white.svg';
/* Same file in their dark green, for the nav bar once it goes to parchment. */
const GATHERING_LOCKUP_DARK = 'assets/gathering/lockup-dark.svg';

/* The mark at the head of §02. It used to be a plaque — a dark green card
   that supplied the ground their lockup needs, because the section around
   it was cream. §02 IS that ground now, so the card would be their green
   on their green: a rectangle you can only see the shadow of. Mark,
   hairline, address. */
const GatheringCredit = () => (
  <a href="https://the-gathering.earth/" target="_blank" rel="noreferrer" className="cph-tg-mark">
    <img src={GATHERING_LOCKUP} alt="The Gathering — Connect for action" />
    <span>the-gathering.earth ↗</span>
  </a>
);

/* Where the village has stood. Five Gatherings; the four before this one
   were held in Portugal, Guatemala and Czechia, which is three countries
   for four events — so the trail names PLACES and the sentence beside it
   carries the count, rather than implying one country per year. */
/* Chronological, and now dated — which also makes the list agree with the
   prose beside it. Unyeared it read as three prior editions under a heading
   claiming four; Portugal hosted twice, which is the bit that was invisible.
   Years match The Gathering's own edition routes (2022-portugal,
   2024-portugal, 2025-czechia, 2025-guatemala, 2026-usa-california). */
const CAMP_GATHERING_LINEAGE = [
  'Portugal · 2022',
  'Portugal · 2024',
  'Czechia · 2025',
  'Guatemala · 2025',
  'California · 2026'
];

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

/* ─── The front door ─────────────────────────────────────────────────────
   JOIN_URL (components.jsx) is the camp's sign-up page. It used to be a
   Telegram invite, which is why the wording here was once "join the camp
   channel" — every call to action on this page says what it actually
   does. These three strings plus the "How to join" row in CAMP_PRACTICAL
   are the only places the wording lives; nothing else hard-codes it. */
const CAMP_CTA = 'Join Us';
const CAMP_CTA_SHORT = 'Join Us';
/* The line under the CTAs used to read "Applications open soon — sign-ups
   are where they open first." It said the same thing three times on one
   page and the sign-up page says it better, so it went. The scholarship
   sentence it used to lead survives on its own below. */

/* ─── The headline's last clause ─────────────────────────────────────────
   The hero used to end on one fixed phrase. It now cycles: the deck below
   is the guest list said out loud, and every entry has to complete "…with
   the people ___" as a sentence, which is why "startups for a wise future"
   carries its verb. First entry is the anchor — it is what the headline
   reads as before the cycle starts, what a crawler and a screen reader
   get, and what stands under prefers-reduced-motion.
   American spelling here, like the rest of this page. */
const CAMP_ROTATION = [
  "building what's next",
  'building AI for good',
  'building AI for regeneration',
  'investing in AI for collective intelligence',
  'building startups for a wise future',
  'imagining AI-native regenerative organizations',
  'creating a narrative for a positive AI future',
  'asking the hard questions',
  'building hope',
];

/* The whole navigation. Six anchors, in reading order: the argument, the
   village we are a camp in, the room, the week, the payoff, the
   logistics. The agent used to sit between the week and the payoff; it
   is its own page now (#sorrel). Each anchor carries a mile marker and
   an icon for the signpost rail. */
const CAMP_SECTIONS = [
  { id: 'why',           label: 'Why',           mile: 'MI 0', icon: '◈' },
  { id: 'the-gathering', label: 'The Gathering', mile: 'MI 1', icon: '◎' },
  { id: 'who-comes',     label: 'Who comes',     mile: 'MI 2', icon: '◐' },
  { id: 'the-week',      label: 'The week',      mile: 'MI 3', icon: '▲' },
  { id: 'what-you-get',  label: 'What you get',  mile: 'MI 4', icon: '◇' },
  { id: 'practical',     label: 'Practical',     mile: 'MI 5', icon: '▣' }
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
    'People and organizations hold real influence over the experience, rather than supplying content to a central producer. Camps shape their own spaces and programs; camp representatives sit in the Council.',
    'Crowdsourcing, unpaid labor, or asking for feedback once the decisions are already made.'
  ],
  [
    'Action',
    'Initiative and shared doing, which is what makes trust behavioral instead of merely stated. Building, hosting, prototyping, solving something together, taking a realistic next step.',
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

/* The briefing keeps a list of shortcuts it considers misleading. All four
   of these are on it, and all four are what people will assume. */
const CAMP_SHORTHAND = [
  ['A festival for changemakers', 'A temporary village whose cells are communities and organizations, not themed party areas. Camps carry representation and responsibility, not only atmosphere.'],
  ['An unconference', 'Participant-led sessions are in there. They sit inside a village, with camps, thresholds, ceremony and a continuity layer wrapped around them.'],
  ['A networking event', 'The unit is the camp you belong to for six days, not the contact you collect in six minutes.'],
  ['A conference in a forest', 'There is no dominant stage to be an audience for. The camps are the program.']
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

/* ─── The four rooms ─────────────────────────────────────────────────────
   §01's central claim, and the reason the camp exists in this form. The
   line it expands ("the working dialogue between builders, entrepreneurs,
   investors and wisdom keepers is barely happening anywhere") used to sit
   compressed inside a promise card, where it reads as an assertion the
   reader has to take on trust. Laid out as four rooms it becomes an
   argument they can check against their own calendar.

   The pairing is doing the work: each room is genuinely expert, and each
   one is blind in a way only the other three can see. Naming a blind spot
   for capital and for wisdom keepers as squarely as for builders is
   deliberate — this page is read by all four, and a diagnosis that only
   indicts the engineers would be both flattering and useless. */
const CAMP_ROOMS = [
  [
    'I', 'The builders',
    'Model releases, agent frameworks, launch cycles, evals. This room knows what is genuinely possible this quarter, and can ship it before the other three have finished describing it.',
    'The second-order consequences of a default chosen in a sprint — which surface years later, at civilizational scale, in somebody else’s field.'
  ],
  [
    'II', 'The capital',
    'Theses, allocation, portfolio construction on a five- to ten-year clock. This room decides which futures get funded, which is to say which futures get attempted at all.',
    'Whether the thesis it is underwriting was written by anyone who will have to live inside the result of it.'
  ],
  [
    'III', 'The practitioners',
    'Regenerative work, social justice, the future of work, ecosystem stewardship. Decades of hard-won knowledge about how change actually holds in real communities and real landscapes.',
    'The tool while it is still being specified. They meet it once it is shipped, priced and shaped — as users of somebody else’s decision.'
  ],
  [
    'IV', 'The wisdom keepers',
    'Ethics, philosophy, contemplative and indigenous traditions. The long view of what a technology does to a people, and the questions that sound naive right up until they turn out to have been the whole thing.',
    'The roadmap. Their contribution arrives as commentary on an architecture that has already been poured.'
  ]
];

const CAMP_QUESTIONS = [
  'How can AI help us build wiser organizations?',
  'How can AI support collaboration across teams, cultures, disciplines, movements and ecosystems?',
  'How can regenerative, social justice, future-of-work and impact investment movements coordinate through AI?',
  'How can AI bring nature more fundamentally into planning, governance and decision-making?',
  'What keeps AI in service of human agency as it scales?',
  'Which tools, protocols, values and organizational forms do we need to build now?',
  'What does a genuinely inspiring story about AI and society sound like, and who tells it?'
];

/* `short` is second person and one line, because it is read in the
   self-select strip directly under the hero — where the only job is to
   let someone recognise themselves before they are asked to read
   anything. The long fields are for the slider in §03. */
const CAMP_PROFILES = [
  {
    n: 'I', name: 'The Builder',
    short: 'You are shipping AI tools, and you want them to meet the world they are for.',
    working: 'AI and digital tools for collective intelligence, sensemaking, agents for teamwork, organizational intelligence, impact measurement, ecosystem infrastructure.',
    brings: ['Working systems', 'Architecture', 'What actually ships', 'The state of the possible'],
    benefit: 'Your work meets the wider transition it is part of — and people sharp enough to ask better questions of it.'
  },
  {
    n: 'II', name: 'The Entrepreneur',
    short: 'You are turning this into something people actually use, and pay for.',
    working: 'Product, go-to-market, business models, partnerships, adoption, organizational development, venture creation.',
    brings: ['Distribution', 'Durability', 'Commercial reality', 'The path from prototype to used'],
    benefit: 'Collaborators, users and early customers — plus the clearest read you will get all year on where this field is heading.'
  },
  {
    n: 'III', name: 'The Investor',
    short: 'You decide which futures get funded, which is to say which get attempted.',
    working: 'Directing capital towards beneficial AI, impact portfolios, philanthropic strategy, ecosystem funding.',
    brings: ['Capital', 'Field-level view', 'Pattern recognition across teams'],
    benefit: 'A live map of teams, tools, narratives and gaps — built over six days in person, not from a stack of decks.'
  },
  {
    n: 'IV', name: 'The Ecosystem Practitioner',
    short: 'You work where these tools land, and you know what they get wrong.',
    working: 'Networks, movements, communities, cooperatives, public initiatives, regenerative projects applying these technologies in real contexts.',
    brings: ['The ground truth', 'Real constraints', 'The needs that should shape what gets built'],
    benefit: 'Tools, partners and technical collaborators who want to build for the conditions you actually operate in.'
  },
  {
    n: 'V', name: 'The Wisdom Keeper',
    short: 'You hold the questions that should shape this while it is still soft.',
    working: 'Philosophy, psychology, anthropology, sociology, governance, spiritual and human development, systems change, culture and narrative.',
    brings: ['The questions worth asking', 'Long time horizons', 'Moral seriousness'],
    benefit: 'A seat inside the design process — early enough that your questions still shape what gets built.'
  }
];

const CAMP_MOVEMENTS = [
  { n: 'I',   shot: 'ceremony',      title: 'Arrive and orient',      body: 'Opening circle. Everyone says their goal out loud. Who are you, what have you brought, what are you looking for, and what do you know that you do not yet know?' },
  { n: 'II',  shot: 'feast',         title: 'Reveal the field',       body: 'Needs, offers, assets, projects and questions made visible across the whole camp. You see the room you are actually in.' },
  { n: 'III', shot: 'forest-circle', title: 'Explore the questions',  body: 'Open space. Sessions surface from the people present. Demos, working sessions, provocations, fire circles.' },
  { n: 'IV',  shot: 'table',         title: 'Find the connections',   body: 'Coherence Conversations. Facilitated, recorded, consent-based dialogue that builds understanding and surfaces collaboration potential, feeding our synthesis and publishing pipeline.' },
  { n: 'V',   shot: 'studio',        title: 'Work on possibilities',  body: 'Project studios. Prototypes, partnerships, media, research questions, funding conversations. Actual work, with the people who can do it.' },
  { n: 'VI',  shot: 'pair',          title: 'Name commitments',       body: 'Connect for action. Two of us find something worth building and declare it on the spot: a voice note, a photo, a short film, recorded in the moment and released into our live feed.' },
  { n: 'VII', shot: 'circle-above',  title: 'Carry it forward',       body: 'Closing harvest. You leave with a named next step, and our support in taking it.' }
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
  'At least one named action and one follow-up. That is our commitment to you as hosts.',
  'Relationships formed through shared experience in nature, as whole humans rather than job titles.',
  'A field-level view of what is being built, funded, tested and struggled with across the space.',
  'Your work seen with depth and nuance by people equipped to understand it.',
  'A place in a shared narrative and roadmap for AI in service of a wiser, regenerative future.',
  'An agent you helped raise, and a record of everything that emerged.',
  'Continuity: our post-Camp Coherence Conversations event, and the people you bring into it.'
];

const CAMP_EMERGE = [
  'Continued relationships', 'Research or learning groups', 'Product collaborations',
  'Prototypes', 'New ventures', 'Employment', 'Investment conversations',
  'Co-produced media', 'Application partnerships',
  'Experiments in inter-organizational agent communication'
];

/* ─── Why come ───────────────────────────────────────────────────────────
   The reasons, before the profiles. A reader who has just met the
   headline wants "what is this for me" answered in ten seconds, and the
   five profiles answer a different question — who else is here. Every
   line is drawn from something the page argues further down, so this is
   a summary of the page rather than new claims: the incubator, the
   partnerships, the narrative, the dialogue, the exchange and the
   land. */
const CAMP_WHY_COME = [
  ['A six-day collaboration incubator', 'Not a conference. A working village, where the thing you start on Tuesday has four more days to become real.'],
  ['Build connection, trust and lasting partnerships', 'Builders, entrepreneurs, investors, operators and practitioners in one room, for long enough to get past the pitch.'],
  ['Shape the narrative of Wise AI', 'The story of this technology is being written now, largely by people who are not asking what it is for. Come and write a different one.'],
  ['Deep dialogue about AI as the path to Planetary Adulthood', 'Six days is long enough to get past positions and into the question underneath: what this technology is for, and what growing up as a species would ask of us.'],
  ['Learn, teach, share, connect', 'Everyone arrives with something to give and something they are stuck on. Both count, and both are programmed for.'],
  ['Regenerate in nature, with new friends', '200 acres of ancient redwood. Campfires in place of boardrooms, and a good half of the week deliberately unscheduled.']
];

const CAMP_PRACTICAL = [
  ['Dates', '12–18 October 2026 (arrival Monday 2pm, closing Sunday 10am)'],
  ['Location', 'Camp Navarro, 901 Masonite Industrial Rd, Navarro, CA 95463'],
  ['Duration', '7 days, 6 nights'],
  ['Capacity', 'TBC'],
  ['How to join', 'Sign up and tell us which path you\'re aiming for — Co-Creator or Participant, above. Formal applications open there first — dates TBC'],
  ['Cost', "Camp ticket TBC · accommodation from $35/night (tent) to $50/night (cabin or glamping) · meal plans $150 (3-day) or $300 (6-day) · bedding package $50"],
  ['Food', "Breakfast and dinner daily from Camp Navarro's kitchen, plus café, pizza and BBQ through the day"],
  ['Language', 'English'],
  ['Scholarships', 'Some scholarship and volunteer places available — contact us'],
  ['Refunds', 'No refunds after 15 August; ticket transfers possible'],
  ['Preparation', 'Pre-Camp conversational onboarding and an optional Coherence Conversation'],
  ['Recording', 'Opt-in, consent-based, reviewable']
];

const CAMP_CONVENING = [
  ['Program and facilitation', 'TBC'],
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

/* Brand icons. Vendored, like their lockup and mark beside it — this is brand
   chrome, not roster data, so it lives in the repo where a change to it is a
   reviewable diff rather than something that arrives silently. Lucide dropped
   brand/social logos, and the generic stand-ins this used to reach for —
   'link' for LinkedIn, 'camera' for Instagram, 'play' for YouTube — read as
   the wrong thing entirely.

   Copied byte-for-byte from The Gathering's published sprite:
   view.the-gathering.earth/static/common/img/icons.svg (19 marks, all
   currentColor at 24×24). Outlines are Lucide (ISC), solid logos are Simple
   Icons (CC0). Re-download that file to update.

   Fetched and injected rather than referenced directly, even same-origin:
   <use href="file.svg#id"> against an external file is still unreliable in
   Safari, and injecting the symbols works everywhere. */
const TGG_SPRITE_URL = 'assets/gathering/icons.svg';
const TGG_SPRITE_MOUNT_ID = 'tgg-brand-sprite';

/* null while in flight, a Set of available icon names once mounted, false if
   the sprite could not be loaded. Mounted once per document, not per render. */
const useTggSprite = () => {
  const [icons, setIcons] = React.useState(null);

  React.useEffect(() => {
    const namesOf = (root) =>
      new Set([...root.querySelectorAll('symbol')].map(s => s.id.replace(/^icon-/, '')));

    const mounted = document.getElementById(TGG_SPRITE_MOUNT_ID);
    if (mounted) { setIcons(namesOf(mounted)); return; }

    let cancelled = false;
    fetch(TGG_SPRITE_URL)
      .then(r => { if (!r.ok) throw new Error('sprite ' + r.status); return r.text(); })
      .then(text => {
        if (cancelled) return;
        const parsed = new DOMParser().parseFromString(text, 'image/svg+xml');
        const symbols = [...parsed.querySelectorAll('symbol')];
        if (!symbols.length) throw new Error('sprite had no symbols');
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        symbols.forEach(sym => svg.appendChild(sym));
        const mount = document.createElement('div');
        mount.id = TGG_SPRITE_MOUNT_ID;
        mount.setAttribute('aria-hidden', 'true');
        mount.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden';
        mount.appendChild(svg);
        document.body.appendChild(mount);
        setIcons(namesOf(mount));
      })
      .catch(() => { if (!cancelled) setIcons(false); });
    return () => { cancelled = true; };
  }, []);

  return icons;
};

/* Fallback for a link the API hasn't annotated with an icon of its own. */
const CAMP_TEAM_ICONS = {
  email: 'mail', phone: 'phone', website: 'globe', calendar: 'calendar',
  linkedin: 'linkedin', telegram: 'telegram', whatsapp: 'whatsapp',
  instagram: 'instagram', twitter: 'twitter', facebook: 'facebook',
  youtube: 'youtube', chat: 'chat'
};

const campIconName = (s) => s.icon || CAMP_TEAM_ICONS[s.key] || 'link';

/* While the sprite is in flight the glyph is simply absent — the tinted disc
   and its aria-label are already there, so nothing shifts when it lands. If
   the sprite failed, or names a mark this one doesn't define, fall back to the
   generic link shape rather than leaving an empty disc. */
const CampBrandIcon = ({ name, icons, size = 15 }) => {
  if (icons === null) return <svg width={size} height={size} aria-hidden="true" focusable="false" />;

  const available = icons && icons.has(name) ? name : (icons && icons.has('link') ? 'link' : null);
  if (available) {
    return (
      <svg width={size} height={size} aria-hidden="true" focusable="false" style={{ display: 'block' }}>
        <use href={`#icon-${available}`} />
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
         aria-hidden="true" focusable="false" style={{ display: 'block' }}>
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
};

const campSocialHref = (s) => {
  if (s.href) return s.href;
  if (s.key === 'email') return `mailto:${s.value}`;
  if (s.key === 'phone') return `tel:${s.value}`;
  if (s.key === 'whatsapp') return `https://wa.me/${s.value.replace(/[^\d]/g, '')}`;
  return s.value;
};

/* Flattens the API's rich-text bio to one plain string. It no longer cuts at
   260 characters — the card clamps it visually and lets you open it instead,
   so the whole bio has to survive this far. Staying plain text (rather than
   passing the HTML through) is what makes the line-clamp reliable: -webkit-
   line-clamp counts line boxes and misbehaves over nested block children. */
const campStripHtml = (html) => {
  if (!html) return '';
  const div = document.createElement('div');
  div.innerHTML = html.replace(/<\/(p|div|h[1-6])>/gi, ' ').replace(/<br\s*\/?>/gi, ' ');
  return (div.textContent || '').replace(/\s+/g, ' ').trim();
};

/* Person-card bio: clamped to a few lines, with a toggle that appears only
   when there is actually more to read. Measured rather than guessed from the
   character count, because these cards sit in an auto-fill grid and the same
   bio wraps to a different number of lines at different column widths.
   Re-measured on resize for the same reason; the verdict is left alone while
   open, since an expanded bio never overflows its own box. */
const CampPersonBio = ({ text }) => {
  const [expanded, setExpanded] = React.useState(false);
  const [overflows, setOverflows] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (expanded) return;
    const el = ref.current;
    if (!el) return;
    const check = () => setOverflows(el.scrollHeight > el.clientHeight + 1);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [text, expanded]);

  const clamp = expanded ? {} : {
    display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 4, overflow: 'hidden'
  };

  return (
    <React.Fragment>
      <p ref={ref} style={{
        fontSize: 14, fontWeight: 300, lineHeight: 1.55, color: 'var(--ink-700)',
        margin: '0 0 10px', ...clamp
      }}>{text}</p>
      {(overflows || expanded) && (
        <button
          type="button"
          onClick={() => setExpanded(v => !v)}
          aria-expanded={expanded}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 4,
            margin: '0 0 14px', padding: 0, border: 0, background: 'none', cursor: 'pointer',
            font: 'inherit', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase',
            color: 'var(--forest-700)'
          }}
        >
          {expanded ? 'Less' : 'Read more'}
          <span style={{
            display: 'block', transition: 'transform 200ms ease',
            transform: expanded ? 'rotate(180deg)' : 'none'
          }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                 strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                 aria-hidden="true" style={{ display: 'block' }}>
              <path d="M6 9l6 6 6-6" />
            </svg>
          </span>
        </button>
      )}
    </React.Fragment>
  );
};

const CAMP_FAQ = [
  ['What is a Camp?', <>A working village within {GATHERING}. Ours has our own crew, our own culture and our own program, held inside a wider field of 500 people.</>],
  ['What is The Gathering US?', 'The village we are a camp inside: 500+ people across 20+ camps at Camp Navarro, convened by RegenWorld. We are one camp among many — see The Gathering, section 02.'],
  ['Do I need a project already?', 'Bring us something real: a project, a question, a tool, capital, a practice, or experience.'],
  ['Who is Sorrel?', <>Our camp agent. A working name for something we are building and naming together, and would like your help with — <a href="#sorrel">the whole story is here</a>.</>],
  ['Can I attend without using the agent?', 'Yes. Fully.'],
  ['What happens to what I say?', 'We record nothing without everyone present agreeing to it. You can review, edit, export and delete your own material.'],
  ['What if the ticket is a stretch?', 'We hold scholarship and volunteer places. Get in touch.']
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
        // the rotating clause writes itself and the hidden completion is
        // never seen — neither wants its glyphs staggered on load
        if (child.classList.contains('cph-nosplit')) return;
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

/* The headline's last clause, typing itself through CAMP_ROTATION. A
   hairline caret rather than the mono block one the practical line gets:
   this is 76px serif, where a block reads as a cursor bug rather than a
   typewriter. Per-character timing is jittered either side of 30ms —
   an exactly even cadence reads as machinery, an uneven one reads as a
   hand — and backspacing runs at half the typing speed, the way a real
   correction does.

   One chained setTimeout rather than an interval, because the delay is
   different at every step. `awake` lets the caller stop the cycle while
   the hero is off screen; nothing should be typing to an empty room. */
const cphRotate = (el, phrases, delay = 0, awake = () => true) => {
  if (!el || !phrases.length) return undefined;
  const text = document.createTextNode('');
  el.appendChild(text);

  /* Fit, then reserve. Phrases wrap to a different number of lines from
     each other — one for "building hope", three for the long one — and
     without a fixed floor the lede and the buttons get shoved down the
     page mid-word. Neither half can be done in CSS: where a phrase
     breaks depends on the viewport and on the phrase, so the clause is
     stepped down until the longest of the nine fits ROT_LINES lines,
     and that height is then held for all of them. Re-run on resize and
     once the display face has loaded, since both move the wrap points. */
  const ROT_LINES = 2;
  const reserve = () => {
    const held = text.textContent;
    el.style.minHeight = '0px';
    let size = 0.86;
    let lh = 0;
    for (;;) {
      el.style.fontSize = size + 'em';
      lh = parseFloat(window.getComputedStyle(el).lineHeight) || 0;
      let tallest = 0;
      phrases.forEach((phrase) => {
        text.textContent = phrase;
        tallest = Math.max(tallest, el.getBoundingClientRect().height);
      });
      // +2px of slack: sub-pixel line boxes otherwise shrink the clause
      // one step further than it needs for no visible gain
      if (!lh || tallest <= ROT_LINES * lh + 2 || size <= 0.5) break;
      size -= 0.03;
    }
    text.textContent = held;
    el.style.minHeight = Math.ceil(ROT_LINES * lh) + 'px';
  };
  reserve();

  /* Reduced motion gets the anchor phrase, at the size the fit chose so
     the headline is typographically identical, and no reserved floor —
     nothing is going to move under it. */
  if (cphReduced()) {
    text.textContent = phrases[0];
    el.style.minHeight = '';
    return undefined;
  }

  const caret = document.createElement('i');
  caret.className = 'cph-rot-caret';
  el.appendChild(caret);

  // the fallback face wraps differently from Instrument Serif
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(reserve);
  let rz = null;
  const onResize = () => { clearTimeout(rz); rz = setTimeout(reserve, 150); };
  window.addEventListener('resize', onResize);

  let stopped = false;
  let timer = null;
  const at = (ms, fn) => { timer = setTimeout(fn, ms); };
  // off screen: hold this frame and look again, rather than typing on
  const wait = (fn) => at(400, fn);

  const type = (i, n) => {
    if (stopped) return;
    if (!awake()) { wait(() => type(i, n)); return; }
    const p = phrases[i % phrases.length];
    text.textContent = p.slice(0, n);
    if (n < p.length) { at(28 + Math.random() * 26, () => type(i, n + 1)); return; }
    at(2200, () => erase(i, p.length));
  };
  const erase = (i, n) => {
    if (stopped) return;
    if (!awake()) { wait(() => erase(i, n)); return; }
    text.textContent = phrases[i % phrases.length].slice(0, n);
    if (n > 0) { at(15, () => erase(i, n - 1)); return; }
    at(280, () => type(i + 1, 1));
  };

  at(delay, () => type(0, 1));
  return () => {
    stopped = true;
    clearTimeout(timer);
    clearTimeout(rz);
    window.removeEventListener('resize', onResize);
  };
};

/* Generic scroll reveal for anything below the fold. */
const CampReveal = ({ children, as: Tag = 'div', ...rest }) => {
  const ref = useCampReveal();
  return <Tag ref={ref} className="cph-obs" {...rest}>{children}</Tag>;
};

/* ─── Body motion ────────────────────────────────────────────────────────
   Everything above this point animates the hero. Everything below it
   animates the other six sections, which until now arrived fully
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
   out of focus and sharpens. Used on all six q-h1s and the closing h2,
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
  // the rotator is not a React effect and must not restart when `live`
  // changes, so it reads visibility off a ref instead of the state
  const liveRef = React.useRef(false);
  const reduced = React.useRef(
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  // only run the rotation while the hero is actually on screen
  React.useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) { setLive(true); liveRef.current = true; return; }
    const io = new IntersectionObserver(
      ([e]) => { setLive(e.isIntersecting); liveRef.current = e.isIntersecting; },
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
      cphRotate(q('.cph-rot'), CAMP_ROTATION);   // prints the anchor phrase, no cycle
      return;
    }

    // 1. arm every start state
    const h1 = q('h1');
    cphSplit(h1);
    [q('.cph-hero-tg'), q('.eyebrow'), q('.lede'), q('.hero-ctas')].forEach(cphArm);
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
    cphRise(q('.cph-hero-tg'), 200);
    cphRise(q('.eyebrow'), 260);
    const after = cphStaggerChars(h1, 420, 17);
    h1.classList.add('cph-in');
    cphRise(q('.lede'), after + 80);
    // chain on actual completion, not on predicted elapsed time — timers
    // are throttled in background tabs and the two lines would overlap
    cphType(meta1, after + 320, 900, () => cphType(meta2, 140, 620));
    cphRise(q('.hero-ctas'), after + 1400);
    // the clause starts writing a beat after the fixed half has landed,
    // so the two are never typing over each other
    const stopRot = cphRotate(q('.cph-rot'), CAMP_ROTATION, after + 300, () => liveRef.current);

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
      if (stopRot) stopRot();
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
  >
    <span className="cph-tear-ink"></span>
    <span className="cph-tear-ramp"></span>
  </div>
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
   One image pinned while the movements scroll past it. */
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
  /* Only the host's lockup was duplicated at the top — their mark in the bar
     sitting a hand's width above the big one in the hero. So the bar keeps
     Camp Audax's own mark on the opening screen and drops just their lockup;
     it fades in beside ours once the hero mark scrolls off. Stowing the whole
     bar also fixed the duplication, but it took this camp's identity off its
     own hero and left only the host's, which is backwards.

     Keyed to the hero lockup's own visibility rather than a scroll offset,
     so arriving on a deep link part-way down the page gets both marks
     immediately instead of only after the first scroll. */
  const [heroMarkVisible, setHeroMarkVisible] = React.useState(true);

  React.useEffect(() => {
    // Initialise from the current position, don't wait for a scroll event:
    // a deep link lands already scrolled, and the bar's reversed lockup is
    // invisible against the parchment ground it gets once past the hero.
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener('scroll', on);
    return () => window.removeEventListener('scroll', on);
  }, []);

  React.useEffect(() => {
    const mark = document.querySelector('.cph-hero-tg');
    if (!mark) { setHeroMarkVisible(false); return; }  // no hero to defer to
    const io = new IntersectionObserver(
      ([entry]) => setHeroMarkVisible(entry.isIntersecting),
      { threshold: 0 }
    );
    io.observe(mark);
    return () => io.disconnect();
  }, []);

  return (
    <nav className={`nav cph-nav${scrolled ? ' scrolled' : ''}${heroMarkVisible ? ' cph-nav-solo' : ''}`}>
      <button
        className="nav-brand" type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}
      >
        <Logo size={36} />
        <span className="nav-brand-text">Camp Audax</span>
        {/* The host's lockup rides alongside ours in the bar, behind a
            divider so the two brands stay separate marks rather than one
            compound logo. Reversed over the hero, their dark green once
            the bar goes to parchment. */}
        <span className="cph-nav-tg">
          <img src={scrolled ? GATHERING_LOCKUP_DARK : GATHERING_LOCKUP} alt="The Gathering" />
        </span>
      </button>
      <div className="nav-links">
        <button className="nav-cta" onClick={() => window.open(JOIN_URL, '_blank')} type="button">
          {CAMP_CTA_SHORT}
        </button>
      </div>
    </nav>
  );
};

/* ─── The invitation, three times ────────────────────────────────────────
   This page runs eleven screens. A reader who decides at screen four
   should not have to hunt for the door, so the same band appears three
   times — after Why come?, after The week, and before Practical —
   identical in form, one line of copy different each time, so it reads
   as a recurring door rather than three separate pleas.

   Photographic rather than typographic: it is the one device that
   carries the place instead of describing it, and the scrim is graded
   across rather than down so the type sits on the dark half while the
   photograph stays legible on the other. Ember is the only colour on
   it — see the token block in colors_and_type.css for why that colour
   appears nowhere else on the site.

   Parallax is CampBand's, at half its rate: this band is shorter, and
   at the chapter rate the drift reads as a wobble. */
const CampJoinBand = ({ shot, children, note, tearTop, tearGroundTop, tear, tearGround }) => {
  const band = React.useRef(null);
  const art = React.useRef(null);

  React.useEffect(() => {
    if (cphReduced()) return undefined;
    let ticking = false;
    const frame = () => {
      ticking = false;
      const el = band.current, a = art.current;
      if (!el || !a) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      if (r.bottom < -200 || r.top > vh + 200) return;
      const p = ((r.top + r.height / 2) - vh / 2) / (vh / 2 + r.height / 2);
      a.style.transform = `translate3d(0,${(p * 0.08 * r.height).toFixed(1)}px,0)`;
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(frame); } };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    frame();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section className="cph-join" ref={band}>
      <div className="cph-join-art" ref={art} style={{ backgroundImage: `url(${CPH(shot)})` }}></div>
      <div className="cph-join-scrim"></div>
      {tearTop && <CampTear image={tearTop} edge="top" ground={tearGroundTop} flip />}
      {tear && <CampTear image={tear} edge="bottom" ground={tearGround} />}
      <div className="container cph-join-inner">
        <h2 className="cph-join-line">{children}</h2>
        <Button size="lg" variant="join" icon="arrow-right" onClick={() => window.open(JOIN_URL, '_blank')}>
          {CAMP_CTA}
        </Button>
        {note && <p className="cph-join-note">{note}</p>}
      </div>
    </section>
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
            {CAMP_CTA}
          </button>
        </div>
      </aside>
    </>
  );
};

/* `sectionsLabel` because this footer is reused by the Sorrel page,
   where "On this page" would label the camp's sections, not its own. */
const CampFooter = ({ onJump, onNav, sectionsLabel = 'On this page' }) => (
  <footer className="footer">
    <div className="footer-inner">
      <div className="footer-brand">
        <Logo size={36} />
        <div className="footer-brand-text">Camp Audax</div>
        <div className="footer-tagline">Camp Navarro, Northern California · 12–18 October 2026</div>
        <a
          href={JOIN_URL} target="_blank" rel="noreferrer"
          className="footer-join-btn"
        >{CAMP_CTA}</a>
      </div>
      <div className="footer-col">
        <h6>{sectionsLabel}</h6>
        {CAMP_SECTIONS.map(s => (
          <a key={s.id} href={`#camp/${s.id}`} onClick={(e) => { e.preventDefault(); onJump(s.id); }}>{s.label}</a>
        ))}
      </div>
      <div className="footer-col">
        <h6>Elsewhere</h6>
        <a href="#sorrel" onClick={(e) => { e.preventDefault(); onNav && onNav('sorrel'); }} style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          <SorrelMark size={12} tone="var(--forest-600)" /> Sorrel, the camp agent
        </a>
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
/* `pos` is object-position, and it is not optional thinking: half the
   library is portrait (733×1100) and a portrait source in a 16/9 frame is
   a thin horizontal slice taken from the middle of the picture — which on
   a photograph of a person is their chest. Where the subject's face is
   not in the middle of the frame, say where it is. */
const CampPhoto = ({ shot, alt, caption, ratio = '16 / 9', pos = 'center' }) => (
  <figure style={{ margin: '48px 0' }}>
    <div style={{ borderRadius: 16, overflow: 'hidden', aspectRatio: ratio }}>
      <img src={CPH(shot)} alt={alt} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: pos, display: 'block' }} />
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
/* The plate drifts inside its own frame as the spread crosses the
   viewport — a window onto the photograph rather than a print stuck to
   the page. Same scrubbed rAF loop as everything else that responds to
   scroll position here, so it also runs backwards. */
const cphPlateTick = {
  classes: ['cph-plate-live'],
  run: (el) => {
    const img = el.querySelector('.cph-plate-img');
    if (!img) return;
    // -1 below the fold → 1 above it, the same shape as CampBand
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight || 1;
    if (r.bottom < -200 || r.top > vh + 200) return;
    const p = ((r.top + r.height / 2) - vh / 2) / (vh / 2 + r.height / 2);
    img.style.translate = `0 ${(p * 7).toFixed(2)}%`;
  }
};

const CampAside = ({ shot, alt, caption, children, flip, ratio, index, style }) => {
  const fig = useCampScrub(cphPlateTick);
  const wipe = useCampReveal();
  return (
    <div className={`art-aside cph-spread${flip ? ' flip' : ''}`} style={style}>
      <div className="art-aside-body">{children}</div>
      <figure className="art-aside-fig cph-plate" ref={fig}>
        <div
          className="cph-plate-win" ref={wipe}
          style={ratio ? { '--ca-ratio': ratio } : null}
        >
          <div
            className="cph-plate-img" role="img" aria-label={alt}
            style={{ backgroundImage: `url(${CPH(shot)})` }}
          ></div>
        </div>
        {caption && (
          <figcaption className="cph-aside-cap">
            {index && <span className="cph-plate-idx">{index}</span>}
            {caption}
          </figcaption>
        )}
      </figure>
    </div>
  );
};

/* ─── Candour, consolidated ──────────────────────────────────────────────
   Moved down from §02 (see the note at its old site). Word for word the
   same block; the only changes are for the ground it now sits on. Their
   olive was lifted to OLIVE_LIFT to survive their dark green — on
   forest-050 that lift is a pale wash, so the citation goes to forest-800
   and the mark to their own dark green, which is how their brand sheet
   uses it on a light ground anyway. The olive stays on the rule, where a
   2px line has nothing to be legible about. */
const CampCandour = ({ onJump }) => (
  <div style={{ ...campNote, marginTop: 8 }}>
    <h6 style={campNoteH6}>What is tested, and what is still a hypothesis</h6>
    <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.6, color: 'var(--forest-900)', margin: '0 0 12px' }}>
      This has been run before, locally, more than once, and it delivers: friendships, organizational clarity, teams that formed, real collaborations. We hold the larger claims more carefully. Consistent continuity after the event, ecosystem-level impact, global governance, fair economics, inclusion and ecological standards — all still developing, and we say so.
    </p>
    <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.6, color: 'var(--forest-900)', margin: '0 0 12px' }}>
      Saying that out loud is the good sign, not the warning. It is also why we design so hard for the after: continuity is the open problem in the whole model, and we would rather help solve it than admire it. See <a href="#camp/the-week" onClick={(e) => { e.preventDefault(); onJump('the-week'); }} style={{ color: 'var(--forest-700)' }}>the coherence loop</a>.
    </p>
    <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.6, color: 'var(--forest-900)', margin: '0 0 20px' }}>
      The same applies to us. Our own camp is early: some of the roles above are still open, the ticket price is not fixed, and Sorrel is a working name attached to a prototype. You would be joining something at the stage where joining still changes it.
    </p>
    <blockquote style={{
      margin: 0, paddingLeft: 18, borderLeft: `2px solid ${GATHERING_OLIVE}`,
      fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 400,
      fontStyle: 'italic', lineHeight: 1.45, color: 'var(--forest-800)'
    }}>
      “The poetry is the promise of joyful interdependence. The machinery is camps, boundaries, roles, rhythms, governance, and follow-through. It will need both.”
      <footer style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 14 }}>
        <GatheringMark size={14} tone={GATHERING_DARK} />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, fontStyle: 'normal', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--forest-800)' }}>
          The Gathering, on itself
        </span>
      </footer>
    </blockquote>
  </div>
);

/* ─── The apply block ────────────────────────────────────────────────────
   §07 used to run price table → FAQ → a photograph, and end. Someone who
   has just read the costs and the seven questions is the most decided
   reader on the page, and there was no way to act from there — they had
   to scroll past the ribbon to the closing section to find a button. This
   is that button, at the point of highest intent, and it repeats the two
   facts that decide it: the dates and what joining actually does. */
const CampApply = () => (
  <div className="cph-apply">
    <h3>Still reading?</h3>
    <p>
      Then you are probably one of the five. Camp Navarro, 12–18 October 2026, seven days and six nights,
      with builders, entrepreneurs, investors, practitioners and wisdom keepers in one forest.
    </p>
    <div className="cph-apply-ctas">
      <Button size="lg" variant="join" icon="arrow-right" onClick={() => window.open(JOIN_URL, '_blank')}>{CAMP_CTA}</Button>
    </div>
  </div>
);

/* ─── Why come ───────────────────────────────────────────────────────────
   One ribbon of reasons, drifting left, with a pause control beside the
   label. Under it, three of the six said in full and still — so the
   moving half sells the mood and the still half carries the argument.

   The control is not decoration: content that moves for more than five
   seconds needs a way to stop it (WCAG 2.2.2), and hover cannot be that
   way — it does not exist on a touchscreen and it is not reachable from
   a keyboard. The chips themselves stay unfocusable, since half of them
   are the duplicate set that makes the loop seamless.

   Two earlier versions were tried and dropped. A reading-line list dimmed
   seven of its eight answers at any moment, which reads as withholding on
   the one section that has to be inviting; a grid of dealt cards was
   warmer but sat too close to the card grids further down the page.
   Horizontal drift is also the one direction the page does not already
   move in — the hero types down a line, everything below rises — so this
   answers the hero rather than repeating it.

   The track holds the list twice and travels -50% minus half a gap:
   twelve chips carry eleven gaps, so half the track is half a gap short
   of one full cycle, and without the correction the ribbon jumps 8px
   every lap. The second copy is aria-hidden so it is not read out twice.
   Under prefers-reduced-motion the animation is dropped and the track
   wraps into a plain stack. */
const CampWhyCome = ({ items }) => {
  const [paused, setPaused] = React.useState(false);
  const chip = (dup) => items.map(([title], i) => (
    <span className="cph-why-chip" key={(dup ? 'b' : 'a') + title}>
      <span className="n">{String(i + 1).padStart(2, '0')}</span>
      <span className="t">{title}</span>
    </span>
  ));
  // the three that answer "what is this, where is it, what do I leave with"
  const glosses = [0, 2, 5].map(i => items[i]).filter(Boolean);

  return (
    <section className="section-tight cph-why-sec">
      <div className="container cph-why-head">
        <CampKicker bottom={20}>Why come? &middot; {items.length} answers</CampKicker>
        <button
          type="button"
          className="cph-why-pause"
          onClick={() => setPaused(p => !p)}
          aria-pressed={paused}
        >{paused ? 'Play' : 'Pause'}</button>
      </div>
      <div className={`cph-why-ribbon${paused ? ' paused' : ''}`}>
        <div className="cph-why-track">
          {chip(false)}
          <span aria-hidden="true" style={{ display: 'contents' }}>{chip(true)}</span>
        </div>
      </div>
      <div className="container">
        <div className="cph-why-glosses">
          {glosses.map(([title, gloss]) => <p key={title}>{gloss}</p>)}
        </div>
      </div>
    </section>
  );
};

/* ─── Self-select strip ──────────────────────────────────────────────────
   The five profiles are where a reader decides the room is for them, and
   the full slider sits in §03 behind the whole argument — a dozen screens
   down. This is the same five, one line each, directly under the hero:
   whether you are invited should not cost you three thousand words to
   find out. Deliberately a teaser and not a second copy of the slider —
   every card lands on the real thing, which keeps §03 the place where the
   profiles are actually read. */
const CampProfileStrip = ({ profiles, onJump }) => (
  <section className="section-tight cph-strip-sec">
    <div className="container">
      <CampKicker bottom={20}>Five profiles, one room · one of these is you</CampKicker>
      {/* dealt left to right — see .cph-strip in site.css */}
      <CampCascade step={170} className="cph-strip">
        {profiles.map(p => (
          <button
            key={p.name} type="button" className="cph-strip-it"
            onClick={() => onJump('who-comes')}
          >
            <span className="n">{p.n}</span>
            <span className="nm">{p.name}</span>
            <span className="sh">{p.short}</span>
          </button>
        ))}
      </CampCascade>
      <p className="cph-strip-foot">
        Each brings something the others need, and the value is in all five being in one forest in one week.{' '}
        <button type="button" onClick={() => onJump('who-comes')}>Read the five in full ↓</button>
      </p>
    </div>
  </section>
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

const PageCamp = ({ onNav }) => {
  const [active, setActive] = React.useState(CAMP_SECTIONS[0].id);

  // Live team roster — see CAMP_TEAM_API above. Fetched once on mount;
  // no polling, so a visitor who leaves the tab open won't see a change
  // that happens on the server mid-visit, only on their next load.
  const [campTeam, setCampTeam] = React.useState(null);
  const [campTeamError, setCampTeamError] = React.useState(false);
  const tggIcons = useTggSprite();

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

  // No lucide pass needed when the team data lands: the social links are
  // inline <svg><use> against the fetched brand sprite now, so they render with
  // React rather than waiting on lucide.createIcons() to hydrate <i> tags.

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
        {/* Their reversed lockup, the one place at the top of the page where
            the host's brand belongs — the photo behind it is already dark,
            so the white mark sits on it without a card. It replaces the
            eyebrow outright, mark alone — the location and dates are in the
            meta lines under the lede anyway. */}
        <div className="cph-hero-tg">
          <img src={GATHERING_LOCKUP} alt="The Gathering" />
        </div>
        {/* The clause after "the people" cycles through CAMP_ROTATION on
            its own line. The hidden twin is the headline as a crawler and
            a screen reader get it — one settled sentence, since the live
            one is mid-word most of the time. */}
        <h1 className="display lg">
          Six days in the redwoods with the people
          <span className="cph-rot cph-nosplit" aria-hidden="true"></span>
          <span className="cph-sr cph-nosplit">building what&rsquo;s next.</span>
        </h1>
        <p className="lede" style={{ maxWidth: 620 }}>
          Builders, investors, ecosystem practitioners and wisdom keepers &mdash; one forest, one week &mdash; making AI serve a wiser, regenerative society.
        </p>
        <p className="cph-hero-meta">
          Camp Navarro, Northern California&nbsp; ·&nbsp; <span className="cph-date">12–18 October 2026</span>
        </p>
        <p className="cph-hero-meta cph-hero-meta-2">
          7 days, 6 nights · applications open soon
        </p>
        {/* One button in the hero, deliberately. The Sorrel page is still
            reached from the closing CTA, the FAQ and the footer; a second
            button beside the one action costs more than that page gains. */}
        <div className="hero-ctas" style={{ marginTop: 36 }}>
          <Button size="lg" variant="join" icon="arrow-right" onClick={() => window.open(JOIN_URL, '_blank')}>{CAMP_CTA}</Button>
        </div>
      </div>
    </CampHero>

    {/* Reasons first, then the room. See CampWhyCome. */}
    <CampWhyCome items={CAMP_WHY_COME} />

    {/* Self-selection, before the argument rather than twelve screens into
        it. See CampProfileStrip. */}
    <CampProfileStrip profiles={CAMP_PROFILES} onJump={jump} />

    {/* The door, first of three. See CampJoinBand. */}
    <CampJoinBand shot="crowd-white"
      tearTop={ART.wave} tearGroundTop="var(--surface-parchment)"
      tear={ART.crest} tearGround="var(--surface-parchment)">
      Six days. Five profiles. <em>One of them is you.</em>
    </CampJoinBand>

    {/* ─── 01 · WHY ─────────────────────────────────────────────────────────
         The argument, and now the very first thing under the hero: nothing
         gets to pre-empt it. It used to sit below the three promise cards,
         which meant a reader met the offer before they met the reason for
         it, and the reason is the more interesting half.

         Three movements. What twenty-five years of digital technology
         already settled; the responsibility that follows from it; and why
         that responsibility can only be met in a room which does not
         currently exist anywhere — the four rooms, see CAMP_ROOMS above.
         The fear paragraph and the quiet population then land as the
         consequence rather than as the opening move.

         Merges the old §09 Why now and §01 The theme. */}
    <section className="section" id="why" style={anchor}>
      <div className="container">
        <CampInk className="q-h1">
          <span className="num">01 · Why</span>
          The tools we build <em>become the society we live in.</em>
        </CampInk>
        <div className="q-body" style={{ maxWidth: 760 }}>
          <p>That is not a forecast. It is the finding of the last twenty-five years, and all of us sat through the experiment. Attention economies. Polarization. The steady fracturing of a shared reality. Nobody voted for any of it. It arrived as a long sequence of reasonable product decisions, taken by capable people, one release at a time — and then it was simply the water, and disagreeing with it had become the same thing as disagreeing with the world.</p>
          <p>So the lesson worth carrying forward is a blunt one. Technology is not neutral infrastructure that a society decides what to do with afterwards. It is society, arriving early, in a form that is very hard to argue with once it has shipped.</p>
        </div>

        <CampQuote>We do not predict the society our technology produces. <em>We build it.</em></CampQuote>

        <CampKicker top={56} bottom={8}>What follows from that</CampKicker>
        <CampAside
          shot="studio" alt="People working together at a materials table" index="Plate I"
          caption="A design brief, not a review gate."
          style={{ marginTop: 12 }}
        >
          <div className="q-body">
            <p>If the tools become the society, then building tools is world-making, and everyone with their hands on them is answerable for the world it makes — whether or not they ever accepted that job. We would rather say that out loud than inherit it by accident a second time.</p>
            <p>AI carries the same power at a greater scale and at far greater speed. New agents, protocols, capabilities and risks arrive weekly, faster than any person, team or institution can track alone. The defaults being set this year — what these systems optimize for, whom they answer to, what they are allowed to count as value, how much of a decision they are permitted to hold — will be about as easy to unpick in 2040 as the attention economy is today.</p>
            <p>Which is why we start from the other end. Name the society we actually want — regenerative rather than extractive, coordinated rather than fragmented, wiser and not merely faster — and then build backwards from it into the technology that would manifest it. Not ethics bolted on as a review gate at the end of a roadmap. The society we dream of as the design brief at the start of one.</p>
          </div>
        </CampAside>

        <CampKicker top={56} bottom={8}>Why it has to be gathered</CampKicker>
        <div className="q-body" style={{ maxWidth: 760 }}>
          <p>Nobody meets a brief like that alone, and at the moment nobody is meeting it together. The working dialogue between builders, entrepreneurs, investors and wisdom keepers is barely happening anywhere — not because these are hostile camps, but because each of them is already busy holding an excellent conversation of its own, in its own room, in its own vocabulary, on its own clock.</p>
        </div>
        <CampCascade className="cph-rooms">
          {CAMP_ROOMS.map(([n, room, holds, blind]) => (
            <div key={room} className="cph-room">
              <div className="cph-room-n">Room {n}</div>
              <h5>{room}</h5>
              <p className="cph-room-holds">{holds}</p>
              <div className="cph-room-blind">
                <div className="cph-room-lbl">Cannot see from inside</div>
                <p>{blind}</p>
              </div>
            </div>
          ))}
        </CampCascade>
        <div className="q-body" style={{ maxWidth: 760, marginTop: 28 }}>
          <p>Every one of those rooms is right about something. The difficulty is that the questions which actually decide the outcome fall in the gaps between them. So the builder ships without the frame. The practitioner inherits a tool that was specified without them. Capital follows a thesis that nobody in the other three rooms helped write. And the wisdom arrives, eloquently, as commentary on an architecture that has already set.</p>
          <p>Where the four do meet, it is usually for an hour, on a panel, in front of an audience — long enough to be agreeable, nowhere near long enough to build anything. We think the format is the problem. Six days, one forest, no main stage, and hands on the actual work is our attempt at the room that is missing.</p>
        </div>

        <div className="q-body" style={{ maxWidth: 760, marginTop: 28 }}>
          <p>There is a second reason to do it now. The story about AI traveling furthest at the moment runs on fear. Surveillance. Control. Job loss. Concentrated power. The companies building these systems sell on that fear with striking enthusiasm, given that they are also the ones sending the invoices.</p>
          <p>A large and quiet population sees something else in this technology. That voice barely registers in public, because it has never been gathered in one place, given shape, and spoken together.</p>
          <p>We are gathering that voice and putting it to work, grounded in shipped products, real organizations, deployed capital and hard-won practice. If it is your voice, this is where we would like it.</p>
        </div>

        <CampKicker top={56} bottom={8}>What we are gathering around</CampKicker>
        {/* the reading shot used to sit under this passage at full width, as
            one more interruption; beside the prose it does the same work of
            breaking the run and gives the section a composition. Flipped,
            because Plate I above it is figure-right and two figures down the
            same edge stack into a column and stop registering. */}
        <CampAside
          shot="reading" alt="Someone reading by the water" index="Plate II" flip
          caption="A large and quiet population is already asking these questions."
          style={{ marginTop: 12 }}
        >
          <div className="q-body">
            <p>We are exploring how AI helps individuals, teams, organizations, networks, movements and ecosystems collaborate at a level that was previously too complex, too slow, or too expensive to attempt.</p>
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
          <p>Our program is co-created, which means it is not finished without you. Bring your questions, your needs, your projects and your proposals.</p>
        </div>

        <CampQuote>A vision becomes credible the moment it is held <em>by people already building it.</em></CampQuote>
      </div>
    </section>

    {/* The three promises moved out of the hero — over a photograph they
        competed with the faces. They read better on parchment. Now they
        sit under §01 rather than over it, where they stop being the pitch
        you meet first and become the answer to the argument above them:
        this is what we are doing about it. */}
    <section className="section-tight">
      <div className="container">
        <CampCascade className="insight-grid">
          {[
            ['Be early', 'Help us define a field before it has a name — builders, capital, practitioners and wisdom keepers, in one room, for six days.'],
            ['Move from ideas to action', 'You will leave with at least one named next step, and our support in taking it.'],
            ['Continue beyond the Camp', 'Your journey with us starts before you arrive and carries on after you leave.']
          ].map(([h, p]) => (
            <article key={h} className="insight-card">
              <h4>{p}</h4>
              <p style={{ marginTop: 10, fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--forest-700)' }}>{h}</p>
            </article>
          ))}
        </CampCascade>
        <div className="q-body" style={{ maxWidth: 760, marginTop: 40 }}>
          <p>A Camp is a working village inside {GATHERING}. We are the one for people building, funding, applying and philosophically shaping AI for societal good: our crew, our program, our culture, held for six days inside a wider field of 500 people.</p>
          <p>Audax OS is developed through practice. Camp Audax is where we bring that practice into one forest — and this page is our invitation to bring yours.</p>
        </div>
      </div>
    </section>

    {/* pattern 02 — also the establishing shot for the section below.
        Its foot used to break into parchment; §02 is The Gathering's dark
        green now, so it breaks into that instead and the photograph, the
        brush edge and the section read as one continuous descent into
        their world rather than a dark slab bounced off a cream one. */}
    <CampBand shot="tents" kicker="Camp Navarro" numeral="II" label="A working village in the forest"
      tearTop={ART.crest} tearGroundTop="var(--surface-parchment)"
      tear={ART.spray} tearGround={GATHERING_DARK} rate={0.16} />

    {/* ─── 02 · THE GATHERING ───────────────────────────────────────────────
         The context every other section assumes. Camp Audax is a camp
         inside somebody else's village, and a reader who does not know
         what The Gathering is will read this whole page as our festival.
         Sits here, before Who comes, because the container has to exist
         before the room inside it means anything. Sources and the reasons
         for its restraint are at CAMP_GATHERING_PARTS above.

         The whole section runs on the host's ground — .cph-dark, at the
         end of site.css, which swaps the page's tokens for The Gathering's
         dark green and olive so every component inside inverts without
         being forked. For the length of one section the reader is inside
         somebody else's brand, which is the argument the section is
         making. It ends in a brush edge back to §03's paper. */}
    <section className="section cph-dark" id="the-gathering" style={anchor}>
      <div className="container">
        {/* Title block: our headline left, their mark and lineage right.
            The mark used to sit alone under the headline with half the
            width empty beside it; here the empty half carries the thing a
            reader could not otherwise know — that this is the fifth of
            these, and the first outside Europe and Latin America. */}
        <div className="cph-tg-masthead">
          <div>
            <CampInk className="q-h1">
              <span className="num">02 · Our host</span>
              About <em>The Gathering</em>
            </CampInk>
            {/* the opening claim rides up into the title block: the mark and
                the lineage stand about 380px tall, and a headline alone
                beside them leaves that much empty column under it */}
            <div className="q-body">
              <p>Camp Audax is not an event we are putting on. It is a camp inside {GATHERING} US: a temporary village of 500-odd people across twenty-plus camps, on 200 acres of redwood at Camp Navarro, for seven days in October 2026. The village is convened by <a href="https://regenworld.net/" target="_blank" rel="noreferrer" style={{ color: 'var(--forest-700)' }}>RegenWorld</a>. We are guests in it, with a camp to run and a share of the responsibility for the whole.</p>
            </div>
          </div>

          <div className="cph-tg-panel">
            <GatheringCredit />
            <div className="cph-tg-lineage">
              <h6>The fifth Gathering</h6>
              <p>The four before this one were held in Portugal, Guatemala and Czechia. California is the first in the United States.</p>
              <ol>
                {CAMP_GATHERING_LINEAGE.map((place, i) => (
                  <li key={place} className={i === CAMP_GATHERING_LINEAGE.length - 1 ? 'now' : undefined}>{place}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        <div className="q-body" style={{ maxWidth: 760 }}>
          <p>The Gathering is a co-created, camp-centered gathering in nature, built to help people and organizations across fragmented fields form belonging, trust, shared context, and pathways towards continued collaboration. Its visible form is a village: camps, shared meals, conversation, art, workshops, fire, ceremony, music, rest, celebration. Its deeper form is a social architecture — camps as the organizing cells, a Nest where camp leaders prepare together for months beforehand, a Council that senses across all of them, a welcome gate and ceremonies to mark the threshold, and a continuity layer built to carry what happens past the closing fire. That architecture is why we chose to be a camp rather than hire a venue.</p>
          <p>The shift is from audience to ecosystem. Nobody here is only a consumer of a program: participants are camp members, hosts, contributors and possible stewards, and organizations express their culture by building a camp rather than sponsoring a stage. This is emphatically not leaderless — it demands strong, visible, distributed leadership, and says so plainly in its own briefing — and co-creation means real agency, not unpaid labor.</p>
        </div>

        <CampKicker top={56}>What it runs on</CampKicker>
        <div className="q-body" style={{ maxWidth: 760, marginBottom: 24 }}>
          <p>The Gathering calls these six its DNA, and they are not house rules or values on a wall — they are what the format is made of. Read each one next to the thing it gets mistaken for: in every case the mistake is the cheaper version, and from outside the two look identical.</p>
        </div>
        <CampCascade style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
          {CAMP_GATHERING_DNA.map(([term, meaning, mistaken]) => (
            <div key={term} style={{
              display: 'flex', flexDirection: 'column',
              padding: '20px 22px', background: 'var(--surface-white)',
              border: '1px solid var(--border-1)', borderRadius: 12
            }}>
              {/* Their own mark for each element, in its native colour via a
                  plain <img> — what their brand page asks for: mask a box to
                  tint, <img> to keep the colour.

                  The dark-ground weight (#B9BB72), not the -600 (#989B4B):
                  this section redefines --surface-white to a 5% cream wash,
                  so despite the name these cards sit on the dark band, which
                  is the tile their brand page shows this weight on. */}
              <img
                src={`assets/gathering/dna/${term.toLowerCase()}.svg`}
                alt="" aria-hidden="true"
                style={{ width: 34, height: 34, display: 'block', marginBottom: 12 }}
              />
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
          None of it counts until it changes roles, budgets, spaces, schedules and who gets to decide. Put the six words on a poster while the organizers keep all the agency, and it's brand varnish, not Gathering architecture. Hold us to that test too.
        </p>

        {/* Was shot="mandala", which is not a mandala: that file is the
            same pale leaf-shadow frame §05 uses as `shadow`, so §02 ran a
            duplicate under an alt text describing a photograph that isn't
            there — and a cold blue-gray one, which is the last thing this
            ground wants. `carpet` is what the caption was always
            describing: a circle on a rug outside a bell tent with an altar
            of cut flowers and tealights laid on the ground at its centre. */}
        <CampPhoto shot="carpet" alt="A circle of people seated on a patterned rug outside a bell tent, around a small altar of flowers and candles" caption="Nothing on the property arrives finished. Somebody makes it, on the day, out of what is there." />

        <CampKicker>Four things it is not, and one thing it is</CampKicker>
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
        <p style={{ fontSize: 14, fontWeight: 300, color: 'var(--ink-500)', margin: '20px 0 0' }}>Camps, unconferences, ritual, festivals and network weaving are all older than this. The claim is only in the configuration: a nature-based village of organizational cells, wired to an explicit before and after.</p>

        <CampKicker top={56}>What else your ticket opens</CampKicker>
        <div className="q-body" style={{ maxWidth: 760, marginBottom: 24 }}>
          <p>We run our own program, and you are free to walk out of it. Every public session on the property is open to you, in every other camp — founders, facilitators, community resilience, identity work, circle practice, and whatever the other nineteen bring.</p>
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

        {/* "What is tested, and what is still a hypothesis" used to sit
            here. It is the most honest block on the page and it was doing
            damage where it stood: a reader met the caveats about continuity
            and governance eight screens in, before they had formed any
            positive commitment, and doubt landing before desire simply
            subtracts. It now sits with the FAQ in §07 — same words, read as
            integrity by someone already deciding rather than as hedging by
            someone still being persuaded. See CampCandour below. */}

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 40 }}>
          <Button variant="secondary" icon="arrow-right" onClick={() => window.open('https://regenworld.net/', '_blank')}>The Gathering US — regenworld.net</Button>
          <Button variant="ghost" onClick={() => window.open('https://the-gathering.earth/', '_blank')}>The wider network</Button>
        </div>

        <CampQuote>We did not want to run our own festival. <em>We wanted a village to be citizens of.</em></CampQuote>
      </div>

      {/* Leaving their ground. This join used to be a bare tone step
          relieved by a wash rule, but a wash rule composites its artwork
          with multiply — dark ink on a dark green ground is a black
          smudge — and it would now sit under a hard horizontal cut
          anyway. The brush edge does both jobs at once, and it is the
          same device every photographic slab on this page ends in.
          Literal #F7F5EC, not var(--surface-paper): inside .cph-dark that
          token has been redeclared as a translucent white. */}
      <CampTear image={ART.wave} edge="bottom" ground="#F7F5EC" deep />
    </section>

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
          shot="table" alt="Conversation around a stone table" flip index="Plate II"
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
          <p>Each brings something the others need. The value comes from all five being in the same room, in the same week, in the same forest. If you are deciding whether we are for you, this is the part to read — one of these is your invitation.</p>
        </div>

        <CampPersonaSlider profiles={CAMP_PROFILES} />

        <div className="q-body" style={{ maxWidth: 760, marginTop: 16 }}>
          <CampKicker bottom={12}>What we ask you to bring</CampKicker>
          <p>Something real: a project, a tool, a question, a practice, capital, a network, or a body of experience. We run on reciprocity, with all of us contributing to the program and to each other's work.</p>
          <p>We are for you if you hold both hope and responsibility around AI — if you see the danger clearly, and also sense the possibility of humanity coordinating at a level we have never reached.</p>
        </div>

        <CampQuote>Critique arrives after the architecture is poured. <em>We would like to be there for the pour.</em></CampQuote>
      </div>
    </section>

    {/* ─── 04 · THE WEEK ────────────────────────────────────────────────────
         Merges the old §05 The week, §06 The journey and §07 The loop.
         What happens, when it starts, and what keeps it going. */}
    {/* The door, second of three: the reader has just met the room.

        A WashRule stood here until the band arrived, and the two together
        were one brushstroke immediately followed by another — the rule's
        wash, then the band's own top tear, both ART.spray. The band is
        the relief now, and it bridges the same two grounds the rule did
        (paper above, parchment below), so the rule went. */}
    <CampJoinBand shot="furhat"
      tearTop={ART.spray} tearGroundTop="var(--surface-paper)"
      tear={ART.wave} tearGround="var(--surface-parchment)">
      That is who is in the forest. <em>Come and be one of them.</em>
    </CampJoinBand>

    <section className="section" id="the-week" style={anchor}>
      <div className="container">
        <CampInk className="q-h1">
          <span className="num">04 · The week</span>
          What actually <em>happens?</em>
        </CampInk>
        <div className="q-body" style={{ maxWidth: 760, marginBottom: 40 }}>
          <p>Our indicative rhythm, in seven movements. We co-create the program, so the detail arrives with the people — including you.</p>
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
            We are not only having a conversation about a better story for AI. We are making it. Our media team works across the six days with a small crew of partner organizations, producing recorded dialogue, published synthesis, and pieces co-authored with you rather than about you.
          </p>
          <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.6, color: 'var(--forest-900)', margin: 0 }}>
            If you flew across a continent, you should leave with something the world can read, watch or hear.
          </p>
        </div>

        <CampKicker top={64}>When does it begin for you?</CampKicker>
        <CampCascade className="contrast-grid" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
          <div className="contrast-col">
            <h6>Before</h6>
            <h3 style={{ fontSize: 26 }}>Prepare</h3>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.55, color: 'var(--ink-700)' }}>We start with a conversation, not a form: your intentions, offers, needs and questions. Pre-Camp Coherence Conversations, open to those coming and those still deciding. You arrive already knowing the room.</p>
          </div>
          <div className="contrast-col">
            <h6>During</h6>
            <h3 style={{ fontSize: 26 }}>Meet · Explore</h3>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.55, color: 'var(--ink-800)' }}>Six days in the forest. Dialogue, open space, project work, reflection, synthesis, declared commitments.</p>
          </div>
          <div className="contrast-col">
            <h6>After</h6>
            <h3 style={{ fontSize: 26 }}>Commit · Continue</h3>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.55, color: 'var(--ink-800)' }}>Personal and collective synthesis. Our post-Camp Coherence Conversations event for everyone who came, where each of us brings two or three more people into the field. We follow up on your commitments.</p>
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
          <h6 style={campNoteH6}>What we add</h6>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 19, fontWeight: 400, letterSpacing: '-0.01em', lineHeight: 1.35, color: 'var(--forest-900)', fontStyle: 'italic', margin: 0 }}>
            A facilitated path from arrival to commitment. We ask you before you come, at the start, during, and at the close: what connection do you need, what are you offering, and what happens next? We do not match people. We make the field visible, and let you find each other in it.
          </p>
        </div>

        <CampQuote>The gathering is the easy part. <em>The follow-up is the product.</em></CampQuote>
      </div>
    </section>

    {/* pattern 02 */}
    <CampBand shot="canopy" kicker="200 acres" numeral="III" label="Ancient redwood forest"
      tearTop={ART.spray} tearGroundTop="var(--surface-parchment)"
      tear={ART.crest} tearGround="var(--surface-paper)" rate={0.2} />

    {/* ─── 06 · WHAT YOU GET ────────────────────────────────────────────────
         Merges the old §08 What you leave with and §10 What may emerge. */}
    <section className="section" id="what-you-get" style={{ ...anchor, background: 'var(--surface-paper)' }}>
      <div className="container">
        <CampInk className="q-h1">
          <span className="num">05 · What you get</span>
          Come with a question. <em>Leave with movement.</em>
        </CampInk>

        <CampCascade as="ol" indent className="q-list">
          {CAMP_LEAVE_WITH.map(x => <li key={x} style={{ fontSize: 'clamp(16px, 1.4vw, 20px)' }}>{x}</li>)}
        </CampCascade>

        <CampPhoto shot="joy" alt="A woman dancing with her arms open" ratio="3 / 2" pos="center 12%" caption="Leave with movement — sometimes literally." />

        <CampKicker top={16}>What may emerge</CampKicker>
        <div className="q-body" style={{ maxWidth: 760, marginBottom: 24 }}>
          <p>Six days with us produce different things for different people. Among the paths we can already see:</p>
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
          <p>We will support you to identify and take the next meaningful step from wherever you actually are. Our responsibility as hosts is to help you find it and take it; the shape of it belongs to you. Founding a startup before breakfast remains entirely optional.</p>
        </div>

        <CampQuote>We hold the container. <em>You choose the direction.</em></CampQuote>
      </div>
    </section>

    {/* The door, third of three. It stands where the fourth chapter plate
        used to: two photographic bands back to back read as an ad break,
        and this is the more useful of the two at the point where the page
        turns from the offer to the small print. */}
    <CampJoinBand shot="hands-up"
      tearTop={ART.ribbons} tearGroundTop="var(--surface-paper)"
      tear={ART.wave} tearGround="var(--surface-parchment)">
      Everything above is the offer. <em>Below is the small print.</em>
    </CampJoinBand>

    {/* ─── 07 · PRACTICAL ───────────────────────────────────────────────────
         Merges the old §11 The place, §12 Who is convening and §13 Practical. */}
    <section className="section" id="practical" style={anchor}>
      <div className="container">
        <CampInk className="q-h1">
          <span className="num">06 · Practical</span>
          The place, the crew, <em>and the small print.</em>
        </CampInk>

        {/* the longest, driest section on the page, and the one actually about
            a place — it carried no photograph of that place at all. This
            paragraph describes the land, so the land runs beside it. */}
        <CampAside
          shot="path" alt="Someone walking a hedged path" index="Plate III"
          caption="Camp Navarro, between sessions."
        >
          <div className="q-body">
            <p>We will be on 200 acres of ancient redwood forest at Camp Navarro, Northern California, for seven days and six nights. Campfires in place of boardrooms, conversations in place of presentations, redwoods in place of hotel ballrooms.</p>
            <p>The land does something to people. It slows you down, opens you up, and creates the conditions for the kind of conversation that arrives when you step away from everything ordinary.</p>
            {/* The village itself is section 02 — no reason to describe it twice. */}
            <p>The village around us — the other twenty camps, the Council, the ceremonies, and everything your ticket opens beyond our own program — is <a href="#camp/the-gathering" onClick={(e) => { e.preventDefault(); jump('the-gathering'); }} style={{ color: 'var(--forest-700)' }}>The Gathering</a>, above.</p>
          </div>
        </CampAside>
        <div style={{ margin: '24px 0 56px' }}>
          <Button variant="secondary" icon="arrow-right" onClick={() => window.open('https://regenworld.net/', '_blank')}>Venue, lodging and meals — regenworld.net</Button>
        </div>

        <CampKicker>Who is convening</CampKicker>
        <div className="q-body" style={{ maxWidth: 760 }}>
          <p>We are hosted by <a href="https://coherence.tv/" target="_blank" rel="noreferrer" style={{ color: 'var(--forest-700)' }}>The Coherence Company</a>, the first living lab of Audax OS, alongside partner organizations building in this space. The Coherence Company is one participant among several. Our camp carries many goals, and every organization and person in it brings their own — yours included.</p>
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
              {person.bio && <CampPersonBio text={person.bio} />}
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', marginTop: 'auto' }}>
                {(person.links || []).map(s => (
                  <a key={s.key} href={campSocialHref(s)} target="_blank" rel="noreferrer" aria-label={s.label} style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: 30, height: 30, borderRadius: '50%',
                    color: 'var(--forest-700)', background: 'var(--forest-050)'
                  }}>
                    <CampBrandIcon name={campIconName(s)} icons={tggIcons} />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <CampKicker>Two ways to join</CampKicker>
        <CampCascade className="contrast-grid" style={{ gridTemplateColumns: '1fr 1fr', marginBottom: 56 }}>
          <div className="contrast-col">
            <h6>Co-Creator</h6>
            <h3 style={{ fontSize: 26 }}>Help build it</h3>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.55, color: 'var(--ink-700)' }}>You bring in more of the people who should be here, and help shape the program while it's still taking form. In return, you carry a share of the responsibility for it, with real input into the vision that's evolving. Co-Creators join by <strong>31 August</strong> — while there's still time for your hand to move it.</p>
          </div>
          <div className="contrast-col">
            <h6>Participant</h6>
            <h3 style={{ fontSize: 26 }}>Come and be here</h3>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.55, color: 'var(--ink-800)' }}>You come for the six days: the dialogue, the connections, the forest, the work. Nothing is expected of you beyond what's on this page, and that is a complete way to be here.</p>
          </div>
        </CampCascade>

        <CampKicker>Dates, cost and logistics</CampKicker>
        <table className="matrix" style={{ marginBottom: 56 }}>
          <tbody>
            {CAMP_PRACTICAL.map(([k, v]) => (
              <tr key={k}><th>{k}</th><td>{v}</td></tr>
            ))}
          </tbody>
        </table>

        {/* one paragraph, so a shallower figure than the square asides above —
            a square here would tower over four lines of type. Moved up from
            the end of the section to sit between the table and the FAQ: it
            still breaks the dry run, and it no longer stands between the
            last question and the button. Its last line — that we are in the
            experiment alongside you — is also the right thing to read
            immediately before the candour block. */}
        <CampAside
          shot="studio" alt="People working together at a materials table" flip index="Plate IV"
          ratio="4 / 3" caption="Real commitments, real tensions, real materials."
        >
          <div className="q-body">
            <p>We test the OS here too. Six days of real commitments, real tensions, real missions, real people, real agents, and real learning loops, in a forest, with the humidity and the mosquitoes and everything. We are not backstage. We are part of the experiment, alongside you.</p>
          </div>
        </CampAside>

        <CampKicker top={56}>FAQ</CampKicker>
        <CampCascade indent style={{ marginBottom: 48 }}>
          {CAMP_FAQ.map(([q, a]) => (
            <div key={q} style={{ padding: '20px 0', borderBottom: '1px solid var(--border-2)' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 19, fontWeight: 400, letterSpacing: '-0.015em', color: 'var(--ink-900)', margin: '0 0 8px' }}>{q}</p>
              <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.55, color: 'var(--ink-700)', margin: 0 }}>{a}</p>
            </div>
          ))}
        </CampCascade>

        {/* objections, then the last of them, then the button. The candour
            block is the final objection — it belongs here and not in §02. */}
        <CampKicker>What we are not sure about yet</CampKicker>
        <CampCandour onJump={jump} />

        <CampApply />
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
          The direction of AI is still being formed. The people we need are scattered across disciplines that rarely work together closely enough to shape what actually gets built. We think you are one of them.
        </p>
        <p className="cph-cta-lede" style={{ fontSize: 18, fontWeight: 300, lineHeight: 1.55, maxWidth: 680, margin: '0 auto 40px' }}>
          Come and share what you are learning. Come and test your questions. Come and find collaborators. Come and help us write a story about AI rooted in coordination, regeneration, wisdom and human possibility.
        </p>
        <CampReadLine style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontStyle: 'italic', color: 'var(--lichen-300)', maxWidth: 620, margin: '0 auto 40px' }}>
          The redwoods are 400 years old. They have watched a few technologies arrive. Let's give them something worth watching.
        </CampReadLine>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button size="lg" variant="join" icon="arrow-right" onClick={() => window.open(JOIN_URL, '_blank')}>{CAMP_CTA}</Button>
          <Button variant="ghost" onClick={() => onNav && onNav('sorrel')}>Meet Sorrel</Button>
        </div>
      </div>
    </section>

    <CampFooter onJump={jump} onNav={onNav} />
    </>
  );
};

window.PageCamp = PageCamp;
