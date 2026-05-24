# Audax OS — Design System

A design system for **Audax OS** — the operating system for a wise society bringing together AI agents and humans into thriving collaboration. The visual language is **regenerative, calm, intelligent, and quietly alive** — drawn from living systems, mycelial networks, constellations, neural pathways, and human ritual.

This system is forked from the structural skeleton of [`TheCoherenceCompany/audax.earth`](https://github.com/TheCoherenceCompany/audax.earth) — the same spacing rhythm, type pairing, motion principles, and component vocabulary — and re-pigmented for Audax OS using the deep forest watercolor / sumi‑e brand imagery dropped into `assets/`. If you are picking this system up to design new product surfaces, **explore that repo for the original component scaffolding and reasoning**; this README explains everything we changed and why.

> Audax OS is not a productivity app with AI bolted on. It is a calm, ritualised workspace where humans and AI agents collaborate across every scale: individual, team, organisation, network, ecosystem. The design language must **express AI as coach, connector, and companion — never supervisor.**

---

## Sources

| Source | Path | Notes |
| --- | --- | --- |
| Structural origin | github.com/TheCoherenceCompany/audax.earth | Coherence design system — provided the spacing, type pairing, motion, component vocabulary. Adapted, not copied. |
| Audax OS brand mark | `assets/audax-os-logo.png` (1254×1254) + 128/256/512 variants + white | Calligraphic sacred‑geometry sigil: a vesica‑piscis "eye" inside a circle, with a vertical seed‑drop above and a teardrop / flame below. Reads as eye, seed, gathering, and constellation simultaneously. Always set in `--ink-900` on light, `--surface-white` on dark/forest. Never tinted, never recoloured. |
| Backgrounds | `assets/backgrounds/` (12 images) | Wide horizontal sumi‑e + watercolor washes in deep forest green. Use **full‑bleed** at the top of heroes or large ritual moments. The brand earns its weight here. |
| Accent images | `assets/accent-images/` (12 images) | Smaller painterly fragments — enso circles, calligraphic gestures, tree clusters, halftone moons. Use as **embedded illustration** inside cards, section openers, dividers — never stretched, always with breathing room. |

> **Substitutions / open items (flag for the user):**
> - **Type.** *Instrument Serif* (display) and *Hanken Grotesk* (body) are loaded from Google Fonts. If you have licensed `.woff2` files for either — especially a bespoke Audax display face — drop them in `/fonts` and swap the `@import` for a local `@font-face`. **We swapped Lexend (in the Coherence source) for Hanken Grotesk** — slightly warmer, less corporate, pairs better with the painterly imagery. Flagging in case you want Lexend back.
> - **Icon set.** No icons were provided. We use **Lucide** (1.5px stroke) from CDN — matches the linework of the calligraphic brand mark. Swap to a bespoke set once it exists.
> - **Bg image filenames.** The Midjourney URLs are kept verbatim for traceability. Rename freely if you'd rather see `forest-wash-01.png` etc.

---

## At a glance

- **Mark.** A dense calligraphic sigil — vesica‑piscis eye inside a circle, vertical seed above, teardrop below. Reads as a gathering, a seed of life, a watchful eye. Always pure black on light, white on forest. Never tinted, recoloured, or set below 32px.
- **Palette.** Warm parchment and white carry 70%+ of any surface. Deep forest green — `#1F4D2E` — is the primary accent. A muted lichen yellow‑green — `#B8C766` — is the only secondary highlight, used rarely.
- **Gradient.** The signature wash: deep forest at top, fading down through sage to warm parchment. Vertical, full‑bleed, generous height. Hero, section opener, ritual masthead.
- **Type.** **Instrument Serif** (regular + italic) for display, **Hanken Grotesk Light (300)** for body. Italic in deep forest is the brand's only typographic accent.
- **Imagery.** Sumi‑e brushstrokes and watercolor washes from `assets/`. Painterly, hand‑made, monochromatic forest green. Never combined with photography; never tinted.
- **Whitespace.** A constraint, not a leftover. Page gutters 64–96px on desktop. Card padding 32–48px. Hero/section openers use 128–160px vertical padding.
- **Decoration.** None. No emoji, no illustrated UI, no extra gradients, no colored shadows.

---

## Content fundamentals

The voice is **calm, precise, present, and unhurried.** AI agents are coaches, connectors, and companions — never assistants, never supervisors. Humans are practitioners, not "users." The brand sounds like a thoughtful operator at a quiet desk, not a SaaS landing page.

**Tone**
- Declarative, never promotional. Statements over slogans.
- Sentence case for almost everything. Title Case only for product names and proper nouns. UPPERCASE reserved for tracked overline labels.
- "We" for the studio/team building Audax. "You" for the reader. The agent uses "I" sparingly and never refers to itself as "we" or "the assistant."
- No exclamation marks. No rhetorical questions. No "delight." No "AI‑powered."
- Lean into systems language: **practice, ritual, circle, gathering, pulse, weave, tend, hold, attend.** Avoid SaaS verbs: leverage, unlock, supercharge, transform.

**Length**
- Headlines: 3–8 words. One idea per heading. No wordplay.
- Sub‑copy: one or two sentences, sentence case, full stops.
- Buttons: 1–3 words, sentence case. *Start a circle*, *Open the agent*, *Hold this thought*. Never *Click here*, never *Get started →*.
- Empty states are a sentence. Loading is a single verb in present tense (*Listening.*, *Weaving.*, *Holding.*).

**How agents talk**
- The agent speaks in plain language, in lowercase first‑person, with full stops. No emoji, no "Sure!", no "I'm an AI and don't have feelings."
- Asks one question at a time. Reflects back what it heard before suggesting.
- Names what it cannot do plainly: *I haven't seen the meeting notes yet — share them when you can.*
- Never apologises for being slow. Never says "as an AI language model."

**Examples (drop‑in copy)**
- Hero: *An operating system for the work that matters.*
- Sub: *Audax OS is the calm desk where humans and AI agents practise, decide, and build together — across teams, circles, and ecosystems.*
- CTA: *Open the OS* · *Start a circle* · *Talk to an agent*
- Section eyebrow: `THE PRACTICE` · `THE AGENTS` · `THE ECOSYSTEM`
- Agent opener: *good morning. a few things have moved since you stepped away. shall we look at them together?*

**What we don't do**
- No emoji anywhere — product, marketing, internal.
- No exclamation marks outside genuine errors.
- No "amazing / incredible / game‑changing / revolutionary / supercharged".
- No "AI" as adjective ("AI‑first", "AI‑driven"). Say what the agent actually does.
- No corporate filler ("at the end of the day", "leverage", "synergize").

---

## Visual foundations

### Color

- **Parchment and white do the work.** `#FBFAF3` (`--surface-parchment`) is the canonical page background — warm, off‑white, slightly green‑tinted to harmonise with the forest palette. `#FFFFFF` (`--surface-card`) for cards and panels. `#F7F5EC` (`--surface-paper`) for inset / sidebar surfaces.
- **Forest is the only primary accent.** `--forest-700` (`#1F4D2E`) is canonical — buttons, links, primary states. `--forest-800` for hover, `--forest-900` (sumi‑e ink) for the deepest moments. Lighter steps (`forest-100`–`forest-300`) carry the brand's mood without overpowering.
- **Lichen yellow‑green is the *only* secondary highlight.** `--lichen-500` (`#B8C766`) — never on body text, never on long surfaces. Use sparingly: a single highlighted tag, the active node in a constellation graph, a "now" indicator. It earns weight by being rare.
- **Ink is warm, slightly green‑black.** `--ink-900` (`#14130E`) for headings and body. The whole neutral ramp leans warm to harmonise with parchment. Avoid bluish or cool greys — the system reads earthy, not clinical.
- **Semantic states are restrained.** `--success` is on‑brand forest. `--warning` is a warm honey, not gold. `--danger` is iron‑oxide, not pure red. Used only when functionally required.

### Type

- **A pairing, not a single family.**
  - **Display — Instrument Serif** (regular 400 + italic). Used for h1 / h2, hero, big stat numbers, ritual moments. Negative tracking (−0.025em), tight line‑height (1.04).
  - **Body — Hanken Grotesk Light (300)** everywhere else. Loaded weights 300, 400, 500, 600, 700. Smaller headings (h3+) stay sans, usually at 400. Body carries a global `-0.005em` letter‑spacing tighten.
- **Italic is the accent.** When a display heading needs emphasis, italicise 1–2 words in `--forest-700`. This is the brand's only typographic flourish — don't reach for bold, all‑caps, or hue shifts on the sans side.
- **Tracking.** Negative on display (−0.025em). Near‑normal on body (−0.005em). Wide (+0.22em) and uppercase for overline labels — also how product‑level wordmarks (`AUDAX OS`) are set.
- **Line height.** Body 1.5–1.65. Display 1.0–1.15. Never set body lower than 1.5.

### Spacing & layout

- **4px base.** Whole scale is multiples (`--space-1` … `--space-14`).
- **Sections breathe.** Vertical rhythm between sections is `--space-12` (96px) and up. Hero/section openers commonly use 128–160px top padding.
- **Containers.** `--container-narrow` (720px) for long‑form text, `--container-base` (1080px) for primary content, `--container-wide` (1280px) for grids, `--container-full` (1440px) cap.
- **Gutter.** 32px desktop, 20px tablet, 16px mobile.

### Backgrounds

- **Default surface.** Warm parchment (`--surface-parchment`). The brand is comfortable with empty.
- **The signature gradient** (`--grad-hero`). Vertical, deep forest → sage → parchment. Always full‑bleed. Used at the top of a hero, a section opener, or the masthead of a slide. Never as a card background, never short — the gradient must have room to fade.
- **The signature imagery.** Sumi‑e brushstrokes and watercolor washes from `assets/backgrounds/` and `assets/accent-images/`. **Always paired with whitespace** — never tiled, never cropped, never tinted away from the painterly green. Used at low opacity (40–80%) as a section background, or at full opacity inside a card as an accent illustration. The brushstroke should always feel like it could keep going past the frame.
- **Watermark.** The mark, scaled large (60–80% of section height), set in `rgba(20,19,14,0.05–0.08)` and parked in a corner. Decoration only.
- **Inverse / "ritual" surfaces.** Deep forest (`--bg-deep`) with white text. Reserved for moments of focus — a Today opening, a meditation, an end‑of‑day reflection. Never default product chrome.

### Borders & dividers

- 1px hairlines in `--ink-200` or `--ink-100` for whisper separation.
- **Whitespace over rules.** If a border can be replaced by spacing, replace it.
- Accent borders (`--forest-300`) only on focus, selected items, and the "agent has spoken" marker.

### Shadows & elevation

- **Whisper‑soft, warm‑tinted.** Long blur, low opacity, vertical offset only. Shadow base is warm ink (`rgba(20,19,14,…)`), not cold black. Four steps: `--shadow-1` (resting card) → `--shadow-4` (modal).
- **No coloured shadows** except `--shadow-forest`, used sparingly on the primary CTA hover.
- Most surfaces are *flat with a hairline* — shadow is a last‑resort affordance.

### Radii

- Cards: 12–16px (`--radius-3`, `--radius-4`).
- Inputs, small buttons: 8px (`--radius-2`).
- Chips, pills, tags: 999px (`--radius-pill`).
- Hard corners (`--radius-0`) for full‑bleed sections, modals on tablet+.

### Hover, press, focus

- **Hover.** Text links: border darkens from `forest-300` to `forest-700`, color shifts to `forest-800`. Filled buttons: background steps to `forest-800`. Cards: `--shadow-2` + `translateY(-1px)`. No scale.
- **Press.** Drop one shadow step and `translateY(0)`. Color shifts to `forest-900`. Never scale below 1.0.
- **Focus.** Always `--ring-focus` (3px forest at 35% alpha). Never remove the ring.
- **Disabled.** 40% opacity OR `--ink-300` fill. Cursor `not-allowed`.

### Motion

- Duration short. `--dur-2` (200ms) default; `--dur-3` (320ms) for layered states; `--dur-4`/`--dur-5` for hero / ritual reveals.
- Easing is `--ease-out` for entrances, `--ease-soft` for state changes. **No bounce, no elastic, no spring.** The brand does not spring.
- Default entrance: 12px upward fade. Cascade siblings at 80–120ms intervals — like sequential brushstrokes settling.
- **Watercolor reveal** (special): for ritual moments, fade a sumi‑e brush image in at ease‑out 720ms with `mask: linear-gradient(left)`. Used sparingly — agent introductions, end‑of‑day summaries.

### Transparency & blur

- Sticky headers use translucent parchment (`rgba(251,250,243,0.82)`) with `backdrop-filter: blur(14px)` — only on scroll.
- **Glass / frosted UI is not part of the brand.** Stick to solid parchment surfaces and rely on shadow + spacing for depth.

### Cards

- White surface, 12–16px radius, 1px `--border-1` hairline, **no shadow at rest**. On hover, `--shadow-2` and `translateY(-1px)`.
- Internal padding 32–48px. Headings stay Light. Avoid stacking colored chips inside cards — chips are for navigation, not for tagging cards.
- A card may contain a sumi‑e accent image — placed top‑right or full‑bleed across the card's header band, never as a watermark behind body text.

### Layout rules

- 12‑column grid at 1080–1280px max. Vertical rhythm matters more than horizontal alignment — keep section paddings consistent across the page.
- Fixed elements: the top nav (translucent on scroll), and the **agent rail** in the OS workspace (right edge, collapsible). Nothing else floats.

---

## Iconography

No icon set was delivered with the brand. We use **Lucide** (1.5px stroke, rounded line caps) — matches the calm, line‑based, organic feel and pairs cleanly with the calligraphic brand mark.

- **Loaded from CDN** in `ui_kits/audax-os/index.html` via `https://unpkg.com/lucide@latest`.
- **Size scale:** 14, 16, 20, 24, 32, 48.
- **Stroke width:** 1.5px (one step lighter than Lucide's default 2) — matches Hanken Light's stroke contrast.
- **Color:** `--ink-700` default, `--forest-700` active, `--ink-400` disabled.
- **Padding inside buttons:** 8px on each side of the icon.

**No emoji.** The brand uses no emoji or unicode pictographs anywhere — in product, marketing, or internal copy. AI agents do not use them in their responses either.

**The mark is not an icon.** Do not shrink the sigil below 32px or use it as a UI glyph. The mark exists at three layers only: hero (80–120px), nav (28–32px), favicon (16×16, hand‑traced — pending).

**The painterly imagery is not iconography.** It is illustration. Treat as the band of art — never as inline glyphs.

> If Lucide doesn't have an icon you need, prefer a missing icon (or a single Hanken glyph in a circle) over drawing one in a foreign style. Don't mix icon families. **Never** draw a custom icon as inline SVG — copy an existing one from `lucide` or substitute.

---

## Index — what's in this folder

```
README.md                         ← you are here
SKILL.md                          ← cross-compatible with Agent Skills
colors_and_type.css               ← all design tokens + semantic element styles

assets/
  audax-os-logo.png               ← primary mark, 1254×1254 (master)
  audax-os-logo-128.png           ← nav-scale optimised
  audax-os-logo-256.png           ← mid-scale
  audax-os-logo-512.png           ← hero-scale
  audax-os-logo-white-512.png     ← white-on-forest variant
  backgrounds/                    ← 12 wide sumi-e + watercolor washes (full-bleed)
  accent-images/                  ← 12 painterly fragments (in-card illustrations)

fonts/                            ← empty — Instrument Serif + Hanken Grotesk via Google Fonts

preview/                          ← Design System tab cards
  _base.css
  brand-mark.html
  color-brand.html · color-neutrals.html · color-lichen.html · color-semantic.html
  type-display.html · type-body.html · type-overline.html · type-scale.html
  spacing-scale.html · radii.html · shadows.html
  gradient.html · imagery.html · imagery-accent.html
  buttons.html · inputs.html · chips-and-tags.html · card.html
  nav-and-footer.html · motion.html · iconography.html
  agent-bubble.html · circle-row.html

ui_kits/
  audax-os/                       ← the product (workspace) — primary kit
    README.md
    index.html · site.css
    primitives.jsx                ← Logo, Button, IconBtn, Eyebrow, Who
    Sidebar.jsx · Topbar.jsx
    TodayView.jsx · CirclesView.jsx · PlaceholderView.jsx
    AgentRail.jsx                 ← right-side agent (Iris) + composer
    app.jsx                       ← shell + state + canned agent replies
```
