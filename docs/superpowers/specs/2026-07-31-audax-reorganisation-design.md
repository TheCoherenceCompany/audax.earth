# Audax OS site reorganisation — design

**Date:** 2026-07-31
**Sources:** `audax-os-re-frame.md`, `audax-labs.md`, `../ARK/README.md`

---

## 1 · The problem

The site currently claims to be a **finished framework, argued for and offered**. Three things
produce that reading:

1. `Why?` §11 is headed *"What does Audax OS **propose?**"* and reveals 5×5×3 as the proposal.
2. Spheres, Layers and Modes are three of six top-level nav items, so the framework *is* the site.
3. Nothing states that this is unfinished, unowned, or unresolved. `Why?` §10 gestures at
   openness, but as an aspiration about distribution — not a statement about the thing's nature.

The reframe says it should claim something else: **an invitation to shared inquiry.** We have
starting questions. We know the area is important. We know we need to gather the best people and
organisations in the world to work on it.

This is not a copy problem. A disclaimer placed above a complete-looking framework reads as false
modesty — readers believe the layout, not the caveat. The shape has to carry the claim.

---

## 2 · The through-line

Three claims, one per limb of the site. Every page serves one of them, and the site says all three
plainly rather than implying them.

| Claim | Limb | Pages |
|---|---|---|
| **We know this area is important** | The argument | `Why?` · `Who for?` |
| **We have starting questions, not answers** | The map | `The Map` → Spheres · Layers · Modes · `Influences` |
| **We need the best people and organisations in the world to develop it** | The practice | `Events` · `Labs` |

Operating principle, from `audax-labs.md`, used verbatim on the site:

> **The framework proposes. The Labs test. The commons learns.**

Register throughout: *invitation*, not offer. We are convening an inquiry, not shipping a system.

---

## 3 · Structure

```
Audax OS   Why? · Who for? · The Map · Influences · Events · Labs   [Join the inquiry]
```

Two pages per limb: *the argument* (Why? · Who for?), *the map* (The Map · Influences — what we are
charting, and whose charts we are reading), *the practice* (Events · Labs). Six items, the same
count as today.

`HOME` stays `why`. Spheres, Layers, Modes and Camp leave the top nav and keep their `footer`
entries — they remain fully reachable at their existing hashes, and every existing link keeps
working. Camp becomes the first entry on `Events`.

`build` is not a nav entry today: it is a hard-coded CTA button reading *"Join & Build the OS"* in
three places in `components.jsx` (top nav `:151`, mobile sheet `:117`, footer `:168`). All three
become **"Join the inquiry"**, still routing to `build`. *Build the OS* is a construction promise;
the site's claim is a convening one.

Demoting Spheres/Layers/Modes out of the nav is the single highest-leverage move: as three of six
top-level claims they read as a specification; reached by entering a map, the same pages read as
the current best charting of a space, which is what they are.

---

## 4 · The Map

### The inversion

The site's spine stops being the *answer* (5×5×3) and becomes the **space of needs**. The framework
is then what it honestly is — the current coordinate system laid over that space.

### Contents

Roughly a dozen **needs**, taken from `audax-os-re-frame.md` §"The intersection creates a distinct
organisational category": context that travels · work that is legible · commitments that stay
visible · value recognised across forms of contribution · relationships that survive distance and
change · learning that crosses organisations · purpose that guides real decisions · agents acting
within clear mandates · tools that interoperate rather than capture.

Each carries a state:

- **Charted** — a working account exists. Deep-links into Spheres/Layers/Modes at the relevant
  section.
- **Contested** — live but unsettled. The two meanings of purpose (developmental-inside vs
  purpose-led-outside). Whether "operating system" or "reference architecture" is the honest word.
  Whether the five conditions are requirements or tendencies. What we inherit from Teal for Startups
  and what has materially changed.
- **Blank** — the reframe's own missing list, published as missing. Who governs this. What is open
  and under what licence. What evidence exists that these organisations need it. What the smallest
  useful implementation is. **When Audax is the wrong answer.** How purpose is prevented from
  becoming unpaid-labour camouflage.

Regions carry an optional **date asked**. Some of these questions are years old, and showing that is
better evidence of an inquiry than any amount of framing — a question with time on it is not a
launch.

The blanks are the invitation. A framework with visible holes cannot be mistaken for a product, and
every hole is somewhere a person can stand.

### Panel

Clicking a need opens a panel: the question in one line · our current account (→ framework page) ·
what is unresolved · **which lab is testing it** · **which conversation covers it** · a way to
contribute. That cross-linking is what makes Events and Labs structural rather than decorative — the
map is the index connecting *a need* → *our account of it* → *the lab testing it* → *the
conversation about it*.

### Visual treatment

**An ink chart**, not a fourth node graph (the site already has three: `hero-canvas.jsx`,
`NodeFieldVisual` in `page-why.jsx`, and fourteen SVG diagrams in `page-whofor.jsx`).

Old cartography: known coast in confident ink line, contested water hatched, unmapped interior left
as bare paper with the question sitting in it. The site's grounds are already `parchment` / `paper` /
`white` and its art is ink wash on near-white, so a blank region is *literally the page showing
through*. Nothing else says "we have not been here" as plainly.

---

## 5 · Page by page

### 5.1 `Why?` — `page-why.jsx`, 13 sections → 12

§2–§9 (core shift, old model, remote, fractional, agents, collaboration gap, human layer, living
systems) are the argument. They stay unchanged.

| § | Now | Becomes |
|---|---|---|
| 01 Hero | *"Audax OS is an open operating system for designing organisations…"* — a product sentence | The invitation register. Headline holds; subhead restated as an inquiry with a territory. States the three claims of §2 above. CTA → `#map`. |
| 10 Open OS | *"Audax OS **should become** a shared operating system"* | **"What this is, and what it isn't."** Promoted and made plain: not a product, not a company's methodology, not a finished spec. A shared map, openly developed and stewarded. |
| 11 The proposal | *"What does Audax OS **propose?**"* → 5×5×3 as the answer | **"How far we've got."** Keep the three-axis diagram — it is strong work — recast as the current coordinate system over the territory, ending in a handoff: *and here is what it does not yet cover* → `#map`. |
| 12 First living lab | Names The Coherence Company four times as first testbed / first steward / first living lab | **Cut.** The practice limb carries this. Per decision, nothing about Coherence Company is encoded in the page. |
| 13 Invitation | CTAs *Join to co-create* / *Explore the Spheres* | CTAs *Enter the map* / *Join the inquiry*. |

Language fixes from the reframe applied throughout: *not owned by anybody* → **openly developed and
stewarded as shared organisational infrastructure**.

### 5.2 `Who for?` — `page-whofor.jsx`

The page's current answer to "who would use Audax OS?" is twelve audience cards — a **breadth**
claim, where the reframe's central move is narrowing.

- **New spine, immediately after the hero:** the five conditions in three groups, so five unlike
  things stop being lined up as matching spoons.

  | Category | Conditions |
  |---|---|
  | Operating conditions | distributed · fractional |
  | Organisational commitments | developmental inside · purpose-led outside |
  | Emerging capability | agentic |

  With a self-test: *how many are true of you?* This is the entry condition and the page currently
  lacks it entirely.
- **The twelve cards stay, demoted** to examples beneath the conditions — different legal forms,
  same operating reality. Narrow by operating condition, not by legal form.
- **§5–§12 regrouped** under the three categories. They are already condition-shaped questions
  (remote-first, fractional, agentic, starting), so this is mostly reordering plus group headers.
- **New, short: "When this is not for you."** Absent today; the highest-credibility section
  available to the page. An inquiry that can say where it does not apply is not selling anything.
- Language fixes: *purposeful-looking internally* → **deliberately developmental and human-centred
  in how they work**; *purposeful outward-looking* → **purpose-led in the value they create beyond
  financial return**.
- §13 (lineage) stays, and links to the map's Teal contested region.

### 5.3 `The Map` — new, `page-map.jsx`

Renders `TERRITORY` (§6) as the ink chart, with panels and hash deep-linking. `PageMap` reads
`window.location.hash` itself and listens for `hashchange`, so no router change is needed.

### 5.4 `Events` — new, `page-events.jsx`

Slim. Opens with *why gatherings*, from the reframe: gatherings exist so practitioners can compare
real operating problems, not admire the framework from different chairs. Then:

- **Camp Audax** — 12–18 October 2026, Camp Navarro. Dates, place, one paragraph, routes to `#camp`.
- **Audax OS Conversations** — recorded and published dialogues. Format, who is in them, the
  archive, how to propose one or suggest a guest.

Each entry tagged with the map regions it works on.

### 5.5 `Labs` — new, `page-labs.jsx`

`audax-labs.md` makes this the site's evidence that the inquiry is real. Structured on its
five-level decomposition, which turns a verbal nesting doll into something people can join:

| Level | Instance |
|---|---|
| Umbrella programme | **Audax Labs** — the experimental engine |
| Domain lab | **Agentic Collaboration Lab** — Lab №1 |
| Experimental track | **Cross-Organisational Knowledge and Memory** |
| Activation | **Founding hackathon** |
| Living artifact | **The Lab Agent** |

Page sections:

1. **What a lab is** — time-boxed, public, tests one proposition, leaves an honest trail. The
   framework proposes; the Labs test; the commons learns.
2. **Lab №1 — Agentic Collaboration** → `ark.audax.earth`. Proposition, track, current activation,
   the loop, the CC0 commons note. ARK's README is CC0 and can be quoted directly.
3. **Labs being considered** — Value and Contribution · Relational Infrastructure · Organisational
   Learning · Legal and Governance. Marked explicitly as *proposed, not endorsed* — `audax-labs.md`
   is clear that fewer labs with sharper mandates beat a botanical garden of departments.
4. **Partners** — from METIS (§7).
5. **How to propose or join a lab.**

Each lab tagged with the map regions it tests.

### 5.6 `Influences & References` — new, `page-influences.jsx`

The reframe argues that **integration may be Audax's most defensible role**: *"The world does not
lack organisational methodologies. It lacks a coherent way to navigate and integrate them without
requiring founders to become part-time anthropologists of governance."* If that is the claim, this
page is its proof — the mosaic made into an artifact. It is also the most credible available way to
say *not a product*: products do not publish their debts.

Every entry carries two lines, and the second is the point:

> **Name** — what it is, in a sentence
> **What we take:** …
> **Where it stops:** …
> *Touches:* → map regions

A page that only praises its ancestors is a shrine, and a shrine cannot be contributed to. The
reframe is willing to say Teal "proved naïve, culturally narrow, difficult to adopt, or weak on
power and accountability"; that register holds throughout.

Sections: **why this page exists** (integration over invention) · **lineage** — Teal for Startups,
where the retrospective properly lands · **bodies of practice** grouped by what they serve
(organisational form · human development · value & ownership · commons & governance · distributed
practice · agentic protocols · purpose & economics · systems & patterns) · **people and
organisations working this territory** · and last, **what we haven't read yet** — an open call.

That final section is the same move as the blanks on the map: a page that admits its gaps receives
contributions a complete one never does. It names what is missing — organising traditions outside
Europe and North America, union and mutual-aid knowledge of commitment and obligation, indigenous
governance of a commons across generations — and asks for references *with their limits stated*.

**Draft content:** `audax-influences-draft.md` at repo root, ~25 entries, each tagged **[yours]**
(named or clearly implied in the source documents) or **[candidate]** (inference, cut freely).
Awaiting review. The tags are a review scaffold and do not ship.

### 5.7 `Spheres` / `Layers` / `Modes` — light touch, high leverage

Each gains a top strip (*charted region · current draft* + link back to the map) and a foot (*what
is still unresolved here*, drawn from `TERRITORY`). One shared component, ~15 lines per page. This
is what stops a reader arriving from a shared link at `#spheres` from meeting a specification.

### 5.8 `Camp` — untouched

No edits to `page-camp.jsx`. It loses only its `nav` entry in `app.jsx`.

---

## 6 · Data model

One `TERRITORY` array in `components.jsx` drives the chart, the panels, and the unresolved-strips
on the framework pages.

```js
{ id:        'context-travels',
  need:      'Context that travels',
  question:  'How does what a team knows reach someone who was not there?',
  state:     'charted',                        // charted | contested | blank
  x, y,                                        // position on the chart
  charted:   { page: 'spheres', section: 'communication' },
  labs:      ['agentic-collaboration'],
  events:    ['conversations'],
  unresolved:['…', '…'] }
```

`LABS` and `EVENTS` arrays live in their own page files and are keyed by the same ids, so the
cross-links resolve in both directions without a second source of truth.

---

## 7 · Technical

- `app.jsx` — `ROUTES` reordered to Why · Who for · Map · Influences · Events · Labs; `spheres`,
  `layers`, `modes`, `camp` drop `nav` and keep `footer`; four new entries; `HOME` stays `why`.
- `index.html` — four new `<script type="text/babel">` tags before `app.jsx`; `?v=96` → `?v=97` on
  every versioned file, per `CLAUDE.md`.
- `components.jsx` — `TERRITORY`, plus `RegionStrip` and `RegionUnresolved`; the three CTA strings
  at `:117`, `:151`, `:168` change to *"Join the inquiry"*.
- New top-level consts prefixed `MAP_`, `INF_`, `EV_`, `LAB_` — all `.jsx` files share one global
  scope.
- **Partners API.** Verified 2026-07-31. `app.the-gathering.earth/holon/1727/` is the authenticated
  view and 302s to `/accounts/login/` — a static page cannot read it. The public read API is
  `https://view.the-gathering.earth/public/orgs/<slug>/`, same origin and response shape the camp
  page already uses:

  ```json
  { "org":  { "id": 1080, "name": "The Coherence Company",
              "slug": "coherence", "class_slug": "the-coherence-company" },
    "links": [{ "key": "website", "url": "…", "icon": "globe", "label": "Website" }],
    "info_field_groups": [], "team_memberships": [{ "id", "name", "photo_url", "socials" }],
    "gatherings": [], "camps": [] }
  ```

  Confirmed resolving: `coherence`, `regenworld`. The route is **slug-only** — numeric ids 404 — and
  it returns **one org, not a list**. Blocked on the slug for holon 1727 (§8). If no list route
  exists, the Labs page holds an array of partner slugs and fetches each; adding a partner then
  means a code edit rather than a METIS edit, which is a tradeoff worth naming before it is chosen.

  Follow the existing live-roster pattern at `page-camp.jsx:1808`: fetch once on mount, no polling,
  graceful failure. On error the partner strip renders **absent**, not "TBC".
- **Imagery** — per `CLAUDE.md`, no run of text-only sections beyond ~3000px. Events and Labs are
  short enough to need one `WashRule` each; the Map is imagery. WebP only. `ART` keys, not pasted
  filenames.

---

## 8 · Blocked on content

Neither blocks starting. Each surface renders absent until its content arrives.

1. **Partners** — the slug for holon 1727, and whether it returns a list or a single org (§7).
2. **Audax OS Conversations** — format, cadence, participants, anything recorded so far.
3. **Teal for Startups** — no longer blocked. It sits on `Influences` as one entry among the others,
   not as a lineage section. **No individuals are named** in connection with it, by decision — the
   entry describes the project and what it did and did not produce, and nothing about who was in it.
4. **Influences review** — `audax-influences-draft.md`. The **[candidate]** entries are inference and
   need a yes or no each; publishing an influence that is not actually claimed is worse than
   omitting one, and it writes other people's work into a story they are not part of.

---

## 9 · Out of scope

- Any edit to `page-camp.jsx`.
- `page-build.jsx` and `page-join.jsx` beyond repointed CTAs.
- The `Spheres` / `Layers` / `Modes` body copy — only the strips are added.
- Governance, licensing and stewardship *decisions*. The site publishes them as open questions; it
  does not answer them.

---

## 10 · Risks

**The map becomes an ornament.** A beautiful index nobody passes through. Mitigation: every region
panel ends in a destination — a framework section, a lab, or a conversation — never in itself.

**Publishing the blanks is real exposure.** Stating that governance, licensing and evidence are
unresolved is honest, and it is also readable by funders and sceptics. This is accepted: it is the
claim the site is making, and hedging it would restore the problem in §1.

**Naming collision.** The repo is **ARK** (*Audax Lab №1*); the network its hackathon serves is
**ARC** (*ARC Community Agent*). One letter apart on a public page. The Labs page should name the
lab by its domain — *Agentic Collaboration Lab* — and treat ARK as the commons repository and ARC as
the participating network, never using the two initialisms in adjacent sentences.

**Stale map.** A map that stops matching the work is worse than no map. Each region carries a
last-revised date, and the framework pages read their unresolved items from the same array, so the
two cannot silently drift apart.
