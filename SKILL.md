---
name: audax-os-design
description: Use this skill to generate well-branded interfaces and assets for Audax OS — the operating system for human + AI agent collaboration. Either for production, throwaway prototypes, decks, or mocks. Contains essential design guidelines, colors, type, fonts, brand imagery (sumi-e + watercolor backgrounds), and a UI kit recreating the Audax OS workspace.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files (`colors_and_type.css`, `assets/`, `ui_kits/audax-os/`, `preview/`).

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out of this skill into the target project and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules in `README.md` to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick rules of thumb

- **Palette.** Warm parchment (`#FBFAF3`) and white do 70%+ of the work. Deep forest (`--forest-700` = `#1F4D2E`) is the only primary accent. Lichen yellow-green (`--lichen-500` = `#B8C766`) is the only secondary highlight — use rarely.
- **Type.** Pairing — **Instrument Serif** (regular + italic) for display, **Hanken Grotesk Light (300)** for body. Italic in deep forest is the only accent.
- **Gradient.** Vertical deep-forest → sage → parchment. Full-bleed. Generous height. Top of hero / section opener / slide masthead only.
- **Imagery.** Sumi-e brushstrokes + watercolor washes in `assets/backgrounds/` and `assets/accent-images/`. Always paired with whitespace. Never tinted, never tiled.
- **Whitespace.** Treat empty as content. Section padding 96–160px vertical. Card padding 32–48px.
- **Decoration.** None — no emoji, no illustrated UI, no colored shadows, no extra gradients.
- **Mark.** Always pure black on light, white on forest. Never tint, recolor, or use under 32px.
- **Motion.** 200–320ms, ease-out, 12px upward fades. **No bounce, no spring, no slide-from-side.**

## How AI agents are represented

- Agents are **coaches, connectors, companions** — never supervisors.
- Agent surfaces are calm. Their voice is plain, lowercase first-person, full stops, no emoji.
- Agents have a single visual marker: a soft `--forest-300` left edge on their message bubbles, and the brand sigil (smaller) above their name on first appearance. Never a robot avatar, never a cartoon face.

## What this brand is NOT

- Not a SaaS landing page. No "AI-powered" framing.
- Not playful. No emoji, no bounce, no rainbow gradients.
- Not clinical. No cold blue-greys, no high-contrast black/white, no Inter.
- Not corporate. No "leverage", no "supercharge", no "transform your workflow".
