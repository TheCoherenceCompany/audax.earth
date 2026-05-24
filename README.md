# Coherence Design System

A design system for **The Coherence Company** — built from the brand mark, the hero reference, and the brief: *primarily white, light, teal-accented, simple, minimal, generous whitespace.*

---

## Sources

| Source | Path | Notes |
| --- | --- | --- |
| Brand mark (vector) | `uploads/coherence.svg` → `assets/coherence-logo.svg` | Calligraphic mark — intertwined flowing strokes forming a sphere. Original artwork on a 2000×2000 canvas. |
| Wordmark/logo PNG | (mentioned in brief, not delivered) | Listed in the prompt as `Coherence Logo - transparent.png` but not present in `uploads/`. Flagged below. |
| Brand reference | `uploads/2.png` → `assets/coherence-hero-reference.png` | 1920×1080 hero — vibrant teal at top fading through pale teal to white, ghost watermark on the right, vertical "THE COHERENCE COMPANY" wordmark in the right margin. This was the primary input for color, gradient direction, and layout cadence. |
| Brand brief | conversation | "Primarily white, light colours, with teal accents — simple, professional, minimal, good use of whitespace. Noto Sans Light for body text." |

> **Substitutions / open items**
> - Both **Instrument Serif** (display) and **Lexend** (body) are loaded from Google Fonts. If you have licensed `.woff2` files for either, drop them in `fonts/` and we'll swap the `@import` for a local `@font-face`.
> - The high-res wordmark PNG is in `assets/coherence-logo-hd.png` and used in the site hero.

---

## At a glance

- **Mark.** A dense calligraphic cluster — intertwined organic strokes with floating dots. Reads as a sphere, a knot, a constellation. Always set in pure black (`--ink-900`) on light, or white on teal. Never tinted. Never recolored.
- **Palette.** White and near-whites carry 80%+ of any surface. Teal — `#4BDBDB` — is the single accent. No secondary brand hues.
- **Gradient.** The signature wash: teal at top, fading to white. Vertical, full-bleed, generous height. Used for hero, headers, section openers.
- **Type.** A pairing: **Instrument Serif** (regular + italic) for display, **Lexend Light (300)** for body. Italic-in-teal is the brand's only typographic accent.
- **Whitespace.** A constraint, not a leftover. Default page gutters are 64–96px on desktop. Cards prefer 32–48px internal padding.
- **Decoration.** None. No emoji, no illustration system, no gradients other than the signature wash, no colored shadows.

---

## Content fundamentals

The brand voice is **calm, precise, and unhurried** — the visual quietness extends to copy.

**Tone**
- Declarative, not promotional. Statements over slogans.
- Lowercase / sentence-case in most UI. Title Case for product names. UPPERCASE only for tracked overline labels (e.g. the vertical wordmark, section eyebrows).
- "We" for the company, "you" for the reader. Never "us / our team / our customers" — keep the frame on the work, not the company.
- No exclamation marks. No rhetorical questions. No "delight."

**Length**
- Headlines: 3–8 words. One idea. No wordplay.
- Sub-copy: one or two sentences. Sentence-case. Full stops.
- Buttons: 1–2 words, sentence-case. "Get in touch", "Read more", "Start project". Never "Click here", never "→ Learn more!".

**What we do**
- Lead with the work or the outcome, not the company.
  > "Quiet systems for complicated work." (✓)
  > "We are a leading provider of…" (✗)
- Use precise nouns over adjectives.
  > "A weekly digest. One page. Plain text." (✓)
  > "Beautiful, modern, intuitive insights." (✗)

**What we don't do**
- No emoji in product or marketing copy.
- No exclamation marks outside genuine errors.
- No "amazing / incredible / game-changing / revolutionary".
- No corporate filler ("at the end of the day", "leverage", "synergize").

**Examples (drop-in copy)**
- Hero: *Coherent work, by design.*
- Sub: *A small studio building quiet systems for teams that take their craft seriously.*
- CTA: *Start a project* · *Read the journal* · *Get in touch*
- Section eyebrow: `WHAT WE MAKE` · `RECENT WORK` · `OUR APPROACH`

---

## Visual foundations

### Color

- **White and near-whites do the work.** `#FFFFFF` on most surfaces, `#FAFBFB` (`--surface-off`) for an alternate page background, `#F8F8F8` (`--ink-050`) for a subtle inset surface (sidebar, code, inline tag).
- **Teal is the only accent.** `#4BDBDB` is canonical. Its softer steps (`teal-200`, `teal-100`, `teal-050`) carry the brand's mood without overpowering. `teal-700` (`#2BB8B8`) and deeper are hover/active states only — never set headlines or large fields in them.
- **Ink is true black-leaning.** `--ink-900` (`#0F0F0F`) for body and headings; lower steps for hierarchy and disabled states. Avoid bluish or warm grays — the system reads cold-neutral.
- **No secondary brand hue.** Semantic states (success/warning/danger) exist as tokens but are used sparingly, only when functionally required.

### Type

- **A pairing, not a single family.**
  - **Display — Instrument Serif** (regular 400 + italic). Used for h1 / h2, hero, big stat numbers, and any editorial moment. The brand's quietness sits well with a soft, contemporary serif rather than a thin sans.
  - **Body — Lexend Light (300)** everywhere else. Loaded weights 200, 300, 400, 500, 600, 700. Smaller headings (h3+) stay sans, usually at 400. Body carries a global `-0.005em` letter-spacing tighten to compensate for Lexend's generous x-height.
- **Italic is the accent.** Whenever a display heading needs emphasis, italicise 1–2 words in `--teal-800`. This is the brand's only typographic flourish — don't reach for bold, all-caps, or color shifts on the sans side.
- **Tracking.** Negative on display (−0.02em). Near-normal on body (−0.005em). Wide (+0.22em) and uppercase for overline labels — this is also how the vertical wordmark in the hero is set.
- **Line height.** Body lives at 1.5–1.65. Display lives at 1.0–1.15. Never set body lower than 1.5.

### Spacing & layout

- **4px base.** The whole scale is multiples (`--space-1` … `--space-14`).
- **Sections breathe.** Vertical rhythm between sections is `--space-12` (96px) and up. Hero/section openers commonly use 128–160px top padding.
- **Containers.** `--container-narrow` (720px) for long-form text, `--container-base` (1080px) for primary content, `--container-wide` (1280px) for grids, `--container-full` (1440px) cap.
- **Gutter.** 32px standard on desktop, 20px on tablet, 16px on mobile.

### Backgrounds

- **Default surface.** Solid white. The brand is comfortable with empty.
- **The signature gradient** (`--grad-hero`). Vertical, teal → white. Always full-bleed across the section. Used at the top of a hero, a section opener, or the masthead of a slide. Never as a card background, never short and squat — the gradient must have room to actually fade.
- **Watermark.** The mark, scaled large (60–80% of section height), set in `rgba(15,15,15,0.05–0.08)` and parked in a corner. It is decoration, not content. Don't overlap it with body copy.
- **No images by default.** When photography is used, it skews **cool-neutral, soft, slightly desaturated** — no warm filters, no grain, no high contrast. Plenty of negative space in the composition.

### Borders & dividers

- 1px hairlines in `--ink-200` (`#E6E6E6`) or `--ink-100` for whisper-level separation.
- The brand prefers **whitespace over rules**. If a border can be replaced by spacing, replace it.
- Accent borders (`--teal-200`) only on focus states and selected items.

### Shadows & elevation

- **Whisper-soft.** Long blur, low opacity, vertical offset only. No spread. No colored shadows except `--shadow-teal` (used sparingly on the primary CTA hover).
- Four steps: `--shadow-1` (resting card) → `--shadow-4` (modal). Most surfaces are *flat with a hairline* — shadow is a last-resort affordance.
- Inner shadows (`--shadow-inset`) optionally on filled buttons to add a 1px white top edge.

### Radii

- Cards: 12–16px (`--radius-3`, `--radius-4`).
- Inputs and small buttons: 8px (`--radius-2`).
- Chips, pills, tags: 999px (`--radius-pill`).
- Hard corners (`--radius-0`) for full-bleed sections and modals on tablet+. We are not playful — small radii read serious.

### Hover, press, focus

- **Hover.** Text links: border-bottom darkens from `teal-200` to `teal-500`. Filled buttons: background steps down to `teal-700`. Cards: a subtle lift via `--shadow-2` and a 1–2px upward translate (`transform: translateY(-1px)`); no scale.
- **Press.** Drop one shadow step and `translateY(0)` — never scale below 1.0. Color shifts to a slightly deeper teal (`teal-800`).
- **Focus.** Always `--ring-focus` (3px teal at 35% alpha). Never remove the focus ring.
- **Disabled.** 40% opacity OR `--ink-300` for fills. Cursor `not-allowed`. Don't remove the element.

### Motion

- Duration is short. `--dur-2` (180ms) is the default; `--dur-3` (260ms) for layered states. Anything over 400ms is reserved for hero/section reveals.
- Easing is `--ease-out` (`cubic-bezier(0.22, 0.61, 0.36, 1)`) for entrances, `--ease-soft` for state changes. Bounces and elastic curves are out of voice.
- Default entrance: 12px upward fade. No slides from the side, no scale-from-zero.

### Transparency & blur

- Used sparingly. Sticky headers can use a translucent white (`rgba(255,255,255,0.78)`) with `backdrop-filter: blur(12px)` — only on scroll, not at rest.
- Glass / frosted UI is not part of the brand. Stick to solid white surfaces and rely on shadow + spacing for depth.

### Cards

- White surface, 12–16px radius, 1px `--border-1` hairline, **no shadow at rest**. On hover, `--shadow-2` and `translateY(-1px)`.
- Internal padding 32–48px. Headings stay Light. Avoid stacking colored chips inside cards — chips are for navigation, not for tagging cards.

### Layout rules

- Stick to a 12-column grid at 1080–1280px max.
- Vertical rhythm is more important than horizontal alignment — keep section paddings consistent (96–160px) across the page.
- Fixed elements: the top nav (translucent on scroll), nothing else. No floating action buttons. No chat widgets in the design system.

---

## Iconography

The brand was delivered without an icon set. The chosen system is **Lucide** (1.5px stroke, rounded line caps) — it matches the brand's calm, line-based, organic feel and pairs cleanly with the calligraphic logomark.

- **Loaded from CDN** in `ui_kits/coherence/index.html` via `https://unpkg.com/lucide@latest`.
- **Size scale:** 16, 20, 24, 32, 48.
- **Stroke width:** 1.5px (one step lighter than Lucide's default 2) — matches Lexend Light's stroke contrast.
- **Color:** `--ink-700` for default, `--accent` for active, `--ink-400` for disabled.
- **Padding inside buttons:** 8px on each side of the icon.

**No emoji.** The brand does not use emoji or unicode pictographs anywhere — in product, marketing, or internal copy.

**The mark itself is not an icon.** Don't shrink the calligraphic logo below 32px or use it as a UI glyph. For favicons we recommend a simplified single-stroke abstraction (pending — flagged for a follow-up).

> If Lucide doesn't have an icon you need, prefer a missing icon (or a single Lexend glyph in a circle) over drawing one in a foreign style. Don't mix icon families.

---

## Index — what's in this folder

```
README.md                         ← you are here
SKILL.md                          ← cross-compatible with Agent Skills
colors_and_type.css               ← all design tokens + semantic element styles

assets/
  coherence-logo.svg              ← primary mark (black)
  coherence-logo-white.svg        ← white version for teal/dark surfaces
  coherence-logo-teal.svg         ← teal accent variant (deep teal)
  coherence-hero-reference.png    ← original brand reference

fonts/                            ← (empty — Lexend + Instrument Serif loaded via Google Fonts)

preview/                          ← Design System tab cards
  brand-mark.html
  color-brand.html
  color-neutrals.html
  color-semantic.html
  type-display.html
  type-body.html
  type-overline.html
  type-scale.html
  spacing-scale.html
  radii.html
  shadows.html
  gradient.html
  buttons.html
  inputs.html
  chips-and-tags.html
  card.html
  nav-and-footer.html
  motion.html
  iconography.html

ui_kits/
  coherence/
    README.md
    index.html                    ← interactive marketing site
    Hero.jsx · Nav.jsx · Footer.jsx
    SectionOpener.jsx · WorkGrid.jsx · JournalList.jsx
    Button.jsx · Field.jsx · Chip.jsx · Card.jsx
```
