# Camp page — what remains

Follow-up to a review of `page-camp.jsx` read top to bottom against how
people actually decide to attend something. The page is arranged
**argument-first** — thesis → host context → audience → mechanism →
payoff → price. That order teaches well and it is why the page reads as
trustworthy. It converts badly, because proof, people, price and action
all sit at the bottom.

Four of the eight fixes are in (`?v=87`). Four remain: two are blocked on
content only Victor has, two are ready to run.

---

## Done

| # | Change | Where |
|---|--------|-------|
| 1 | Honest CTAs — six buttons said "Apply to join Camp Audax" while opening a Telegram group | `CAMP_CTA` / `CAMP_CTA_SHORT` / `CAMP_CTA_NOTE` at `page-camp.jsx:126`, plus the *How to join* row in `CAMP_PRACTICAL` |
| 3 | Self-selection moved under the hero | `CampProfileStrip`, and the `short` field on `CAMP_PROFILES` |
| 5 | Apply block at the foot of §07, after the FAQ | `CampApply`; §07 now runs table → Plate IV → FAQ → candour → apply |
| 7 | Candour consolidated out of §02 into §07 | `CampCandour`, with a note at the old site in §02 so it does not get moved back |

When a real application form exists: repoint `JOIN_URL`, change the three
`CAMP_CTA*` strings and the *How to join* row. Nothing else on the page
hard-codes the wording.

---

## Blocked on content

### 2 · Pricing anchor and a real deadline

**The single biggest remaining blocker.** `CAMP_PRACTICAL` carries camp
ticket TBC and capacity TBC; the hero says "applications open soon". A
reader is asked to total accommodation ($35–50/night × 6), meals
($150/$300), bedding ($50) and flights — with the largest number missing.
A rough number decides; a TBC defers, and deferral twenty-five screens
deep means never.

**Needed:** a provisional all-in range, even ±30% ("expect $1,400–2,200
before travel"), and a date applications open or close.

**Then:** ten minutes of edits. This is also the only thing that can give
the page an urgency mechanism — right now there is no deadline, no
capacity figure, and no cohort-filling signal anywhere.

### 4 · Third-party proof

The page contains no voice from outside the camp except The Gathering
quoting its own briefing. For a six-day, cross-continent, four-figure
commitment, "who else is in the room" is the top decision driver, and the
page's answer is a `Team` grid that renders TBC when the roster API is
empty.

**Needed, in order of value:**

1. Three attendee quotes from prior Gatherings (Portugal, Guatemala,
   Czechia) with names and roles.
2. Or three named people already committed to Camp Audax.
3. Which of the five `CAMP_CONVENING` roles are genuinely open. Four of
   five currently read TBC, which lands as *unfinished* rather than
   *open*; named as invitations ("this role is open — talk to us") the
   same fact becomes an engagement hook.

---

## Ready to run

### 6 · Cut §02 by ~60%, and stop the leak

§02 is ~1,300 words of the host's brand, on the host's dark green, at the
point the reader is warmest — and it ends in two buttons pointing off-site
to regenworld.net and the-gathering.earth. Legitimacy work, but the reader
at that depth needs "we are a camp inside a 500-person village convened by
RegenWorld, and here is the architecture that made us choose to be a camp
rather than hire a venue" and not much more.

- Compress to the architecture that justifies the choice.
- Demote the two outbound buttons to text links.
- Push the wider-network material to the FAQ.

Judgment-heavy edit on somebody else's material, and the source discipline
in `the-gathering/` matters — **show the cut before committing it.**

### 8 · A day at Camp Audax

§04's seven movements are the hardest thing on the page to picture and
still abstract: nobody can see Tuesday. One 06:30-to-midnight narrative
would do more for excitement than the whole movement sequence, and it is
where the joy material (music, fire, feast, dancing) can finally carry
weight — at present that lives almost entirely in photographs, one list
item, and a ribbon that appears after the last section.

Draftable from what is already on the page (Camp Navarro's kitchen, open
space, fire circles, Coherence Conversations, project studios), **but it
will contain invented detail about the shape of the day.** To be corrected
by Victor, not approved blind.

---

## Still open, from the longer review

### 9 · Sorrel's placement

§05 is ~1,400 words on the agent, sitting *before* "what you get", and the
hero's secondary CTA still points at it. For the wisdom keeper and the
ecosystem practitioner — the two profiles the page argues hardest to
include — a long product section about an AI companion arriving before any
statement of outcomes is the likeliest place to lose them. The
"help raise it" framing is the right defence; it is currently the
section's fourth move rather than its first.

The self-select strip now gives those readers somewhere else to go first,
which softens it. The section order is unchanged. Options, if wanted:

- Lead §05 with the invitation rather than the description.
- Swap §05 and §06, so outcomes precede the mechanism.
- Point the hero's secondary CTA at *Who comes* or *The week*.

---

## Not on the list, worth noting

- **No sticky mobile CTA.** The nav `Join us` button scrolls away with the
  bar. On a page this long that is the whole mobile conversion path.
- **`CAMP_PRACTICAL` capacity is TBC.** A number here doubles as scarcity
  and as reassurance about scale; it is one field.
- **The ribbon sits after §07 and before the closing CTA**, which is the
  right place for motion, but it means the page's most joyful material is
  also its last — see item 8.
