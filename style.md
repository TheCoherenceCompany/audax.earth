# Audax OS — Style Guide

Brand and design reference extracted from the live site at [audax.earth](https://audax.earth). For designers producing new assets, decks, or extensions of the brand. Source of truth is the codebase: `colors_and_type.css` and `site.css`.

---

## 1. Visual DNA

Four reference points the whole system is built from:

- **Sumi-e ink on parchment** — warm off-white grounds, ink-dark type. Weight is earned by sitting in whitespace, not by filling it.
- **Regenerative forest greens** — a deep ink-green that reads as both forest canopy and brushstroke. The brand's one committed hue.
- **Sacred geometry** — diagrams, nested circles, and matrix structures carry the systems-thinking content. Precise, not decorative.
- **Watercolor washes, calm light** — full-bleed gradient washes and painterly accent imagery. Motion is calm; nothing bounces.

---

## 2. Color

### Forest / emerald — primary brand

Drawn from the deep watercolor washes in the brand imagery. Use sparingly, like a brushstroke — it earns weight from the whitespace around it. `forest-700` is canonical: buttons, links, the accent italic inside headlines.

| Token | Hex | Use |
|---|---|---|
| forest-900 | `#0E2419` | sumi-e ink — bottom of a brushstroke |
| forest-800 | `#163322` | deep emerald — primary heading on light |
| **forest-700 ★** | `#1F4D2E` | canonical brand — buttons, links |
| forest-600 | `#2D6B41` | mid emerald — hover/active |
| forest-500 | `#3F8657` | leaf — accents, charts |
| forest-400 | `#6BA37C` | sage — secondary surfaces |
| forest-300 | `#9CBFA3` | pale sage |
| forest-200 | `#C8DBC9` | whisper sage |
| forest-100 | `#E2EBDD` | mist sage — backgrounds |
| forest-050 | `#F0F4EC` | parchment-sage |

### Lichen — secondary accent

The yellow-green at the edges of the brand imagery. Never on body copy, never a primary fill — a single moss-yellow highlight, used rarely (e.g. the primary CTA on a dark band).

| Token | Hex |
|---|---|
| **lichen-500 ★** | `#B8C766` |
| lichen-400 | `#C7D27B` |
| lichen-300 | `#D6DD96` |
| lichen-200 | `#E3E8B5` |
| lichen-100 | `#EEF0D2` |
| lichen-050 | `#F6F7E6` |

### Ink & parchment — neutrals

Ink is warm-black with a faint green tint, never cool grey. Parchment surfaces lean warm and quiet — never blue-cool white.

| Token | Hex | Use |
|---|---|---|
| ink-900 | `#14130E` | primary ink — headings, body |
| ink-800 | `#1F1E18` | |
| ink-700 | `#3A3830` | primary body text |
| ink-600 | `#5C5A50` | secondary body |
| ink-500 | `#807D72` | tertiary / captions |
| ink-400 | `#A8A59B` | hints, placeholder |
| ink-300 | `#C9C6BD` | disabled |
| ink-200 | `#E3E0D6` | borders |
| ink-100 | `#EFEDE4` | hairlines |
| ink-050 | `#F7F5EC` | warm inset surface |

### Surfaces & semantic

| Token | Hex | Use |
|---|---|---|
| surface-parchment | `#FBFAF3` | primary page background — warm off-white |
| surface-white | `#FFFFFF` | cards |
| surface-paper | `#F7F5EC` | alternate / inset surface |
| success | `#2D6B41` | = forest-600, on-brand |
| warning | `#B8884A` | warm honey, not gold |
| danger | `#9E3B2E` | iron-oxide, not pure red |
| info | `#3F8657` | = forest-500 |

---

## 3. Typography

A three-face system: an editorial serif for moments of arrival, a light humanist sans for everything else, and a mono for anything systemic. All three load from Google Fonts.

| Face | Role | Notes |
|---|---|---|
| **Instrument Serif** | Display — h1/h2, hero, big stats, ritual moments | Regular + italic only. Italic `em` inside a headline is the brand's one typographic accent. |
| **Hanken Grotesk** | Body — everything else | Light 300 by default, a warm humanist sans, less neutral than Inter; pairs with the painterly imagery. 400–700 for UI weight. |
| **JetBrains Mono** | Code, agent traces, system prompts, labels, captions | Anywhere the copy should read as system output. |

### Type scale

| Style | Face / weight | Size | Line-height | Tracking |
|---|---|---|---|---|
| Display / H1 | Instrument Serif 400 | 84px / 52px | 1.04–1.05 | −0.025em |
| H2 | Instrument Serif 400 | 38px | 1.04 | −0.025em |
| H3 | Hanken Grotesk 400 | 28px | 1.25 (snug) | tight |
| H4 | Hanken Grotesk 400 | 22px | 1.25 (snug) | tight |
| H5 | Hanken Grotesk 500 | 18px | 1.25 (snug) | normal |
| Body large | Hanken Grotesk 300 | 18px | 1.65 (relaxed) | −0.005em |
| Body | Hanken Grotesk 300 | 16px | 1.65 (relaxed) | −0.005em |
| Body small | Hanken Grotesk 300 | 14px | 1.5 (normal) | normal |
| Caption | Hanken Grotesk 300 | 12px | 1.5 (normal) | normal |
| Overline | Hanken Grotesk 500 | 11px | normal | +0.22em, uppercase |

Line-height scale: tight `1.05` · snug `1.25` · normal `1.5` · relaxed `1.65` · loose `1.8`.

Example headline treatment: *"The organisational OS for the __agentic age__"* — italic word in `forest-700`.

---

## 4. Washes & gradients

The signature move: full-bleed gradients that mirror the watercolor imagery. Always full-bleed, never a short decorative strip.

- **grad-hero** — `forest-800 → forest-600 → forest-400 → forest-200 → forest-100 → surface-parchment` (180deg). The primary hero wash.
- **grad-soft** — `forest-100 → surface-parchment` (180deg). Subtler section openers.
- **grad-lichen** — `lichen-100 → surface-parchment` (180deg).
- **grad-deep** — radial, `forest-700 → forest-900 → #060D09`. Full-bleed dark "ritual" / inverse surfaces.
- **grad-edge** — `forest-700 → forest-400` (180deg). Thin edge treatments.

---

## 5. Components

Buttons and cards: 10–18px radii, whisper-soft warm-tinted shadows (never cool grey), 1px hairline borders.

**Buttons**
- `.btn-primary` — background `forest-700`, white text; hover `forest-800` + forest shadow.
- `.btn-accent` — background `lichen-500`, `forest-900` text (rare — dark-band CTAs).
- `.btn-secondary` — transparent, `ink-900` text, `ink-300` border.
- `.btn-ghost` — transparent, `ink-700` text, no border.
- Padding `13px 22px`, radius `10px`; large variant `16px 28px` / `15px` font.

**Cards** — white surface, `border-1` hairline, radius `16–18px` for standard cards, `20–24px` for feature cards.

**Shadows** — warm-tinted, never colored except `shadow-forest` (used sparingly on primary CTA hover: `0 10px 28px rgba(31,77,46,0.30)`).

**Motion** — calm easing only (`ease-out`, `ease-in-out`, `ease-soft`), durations 120–720ms. Nothing bounces or overshoots.

---

## 6. Imagery

Abstract watercolor / sumi-e washes — misty greens, ink gradients, horizon-line abstractions. Used as full-bleed hero backgrounds, section-divider bands, and small accent art beside copy blocks. **Never** literal illustration, never stock photography.

### Hero / section backgrounds

- Layers hero — `https://audax.earth/assets/backgrounds/The_Gathering_httpss.mj.run4FR0A9JrbCs_horizontal_abstract_gr_a3a5ab50-ee9c-4167-ba9d-3c83591ce255_1.png`
- Spheres / Modes / Build / Who-for hero — `https://audax.earth/assets/backgrounds/The_Gathering_httpss.mj.runLwdlSY4QCLA_abstract_horizontal_in_3741fb5e-98d9-4e2e-9d21-50390f539a13_1.png`
- CTA band (`components.jsx`) / Modes hero — `https://audax.earth/assets/backgrounds/The_Gathering_httpss.mj.runqhIVc3YQOmg_abstract_horizontal_in_087652a0-f921-4a1b-a659-60280f755139_1.png`
- Modes divider — `https://audax.earth/assets/backgrounds/The_Gathering_httpss.mj.run4FR0A9JrbCs_horizontal_abstract_gr_ca2102c1-32f3-49e2-811c-9f046636f888_3.png`
- Layers divider — `https://audax.earth/assets/backgrounds/The_Gathering_httpss.mj.runqhIVc3YQOmg_abstract_horizontal_in_38ad27fc-5fb8-4666-ae30-81a3881a6893_3.png`
- Spheres divider (a) — `https://audax.earth/assets/backgrounds/The_Gathering_httpss.mj.runqhIVc3YQOmg_abstract_horizontal_in_98617e4b-7005-4e69-8ae6-612455128b0d_0.png`
- Spheres divider (b) — `https://audax.earth/assets/backgrounds/The_Gathering_httpss.mj.run4FR0A9JrbCs_horizontal_abstract_gr_f86772ab-5233-4a7c-a2ff-b9f7dcf7d9f8_0.png`

### Accent art (beside copy blocks)

- Spheres — `https://audax.earth/assets/accent-images/The_Gathering_httpss.mj.runC6iJti0L-5Q_abstract_horizontal_ca_144cfefb-78ad-48eb-a73c-6baaff85c98f_0.png`
- Modes / Layers — `https://audax.earth/assets/accent-images/The_Gathering_httpss.mj.runUUrabdnEXiY_abstract_landscape_cal_c9bf6229-f6fd-4195-a3ed-3d795594174d_0.png`
- Layers — `https://audax.earth/assets/accent-images/The_Gathering_httpss.mj.runC6iJti0L-5Q_abstract_horizontal_ca_665f5682-387b-4bfc-8d42-1ec3a675a53c_2.png`
- Why (node field bg) — `https://audax.earth/assets/accent-images/The_Gathering_httpss.mj.runC6iJti0L-5Q_abstract_horizontal_ca_89be8310-4193-4426-a643-b55ced9ca0f6_0.png`
- Spheres / Layers — `https://audax.earth/assets/accent-images/The_Gathering_httpss.mj.runC6iJti0L-5Q_abstract_horizontal_ca_2aa5eb38-0f5a-4f05-88cf-543d975b0cb1_3.png`
- Modes — `https://audax.earth/assets/accent-images/The_Gathering_httpss.mj.runN91XiUaHp8U_httpss.mj.runymEnd1koJ_35f5c6fc-fc1b-438c-b64e-1f39d340862f_1.png`
- Layers — `https://audax.earth/assets/accent-images/The_Gathering_httpss.mj.runN91XiUaHp8U_httpss.mj.runymEnd1koJ_da3bc6e8-30ff-4a17-a128-88483a0499f1_3.png`

Full library: `https://audax.earth/assets/backgrounds/` and `https://audax.earth/assets/accent-images/`.

### Logo marks

- Primary mark (light ground) — `https://audax.earth/assets/audax-os-logo-512.png` (also `-256.png`, `-128.png`)
- White mark (dark ground, e.g. `forest-800`) — `https://audax.earth/assets/audax-os-logo-white-512.png`
- Favicon — `https://audax.earth/assets/audax-os-logo-128.png`

---

## 7. System tokens

**Spacing** (4px base, generous — empty space is part of the brand)

| Token | Value |
|---|---|
| space-4 | 16px |
| space-6 | 24px |
| space-9 | 48px |
| space-11 | 80px |
| space-13 | 128px — standard section padding |

**Radii**

| Token | Value | Use |
|---|---|---|
| radius-1 | 4px | chips |
| radius-3 | 12px | controls |
| radius-4 | 16px | cards |
| radius-5 | 24px | feature cards |
| radius-pill | 999px | nav CTA |

**Containers** — narrow `720px` · base `1080px` · wide `1280px` · full `1440px` · gutter `32px`.

---

## 8. Rules of thumb

- Base is parchment (`#FBFAF3`), never pure white full-page — white is reserved for cards floating on parchment.
- Forest-700 carries all interactive weight — links, buttons, the italic accent word in a headline. It's a spend, not a default; keep it rare against the whitespace.
- Lichen is a highlight, not a palette — one CTA on a dark band, never body copy, never a primary fill.
- Headings are Instrument Serif; UI chrome, labels, and body copy are Hanken Grotesk, mostly at Light 300.
- Motion is calm — ease-out/ease-in-out curves only, 120–720ms, nothing bounces or overshoots.
- Imagery is abstract watercolor/sumi-e wash, full-bleed for heroes and dividers, cropped small for accent art beside copy. No stock photography, no literal illustration, no icon-heavy hero art.

---

*Compiled from `colors_and_type.css`, `site.css`, and the live asset library at `audax.earth/assets` — treat those files as the source of truth for any drift from this document.*
