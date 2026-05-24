# Coherence — Marketing UI Kit

A small, interactive recreation of the marketing website for **The Coherence Company**. Built from the brand brief and the hero reference (`assets/coherence-hero-reference.png`) — there is no production codebase to copy from, so this kit is the canonical reference for screens, layout, and component composition.

## Components

| File | Role |
| --- | --- |
| `Nav.jsx` | Sticky top nav. Translucent on scroll. Logo mark + wordmark, 4 links, contact CTA. |
| `Hero.jsx` | Full-bleed signature gradient. Logo, headline, sub, CTAs. Vertical wordmark in the right margin. |
| `SectionOpener.jsx` | Eyebrow + heading + intro paragraph block. The brand's section rhythm. |
| `WorkGrid.jsx` | Filterable 2-up grid of work cards. Resting hairline, hover lift. |
| `JournalList.jsx` | Long-form list of journal entries. Date on the left, title + dek on the right. |
| `Capabilities.jsx` | Three minimal capability cards with Lucide icons. |
| `ContactBlock.jsx` | Final section: contact prompt + form. |
| `Footer.jsx` | Closing footer. Mark, location, contact. |
| `primitives.jsx` | `Button`, `Chip`, `Field`, `Card`, `Overline`, `Eyebrow`, `Logo`. |

## Run

Open `index.html`. The page is a static prototype — the filter chips actually filter, the form actually submits to a small inline toast, but everything is local. No backend.
