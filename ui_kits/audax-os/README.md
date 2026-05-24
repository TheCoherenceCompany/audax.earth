# Audax OS — Workspace UI Kit

A small interactive recreation of the **Audax OS workspace** — the calm desk where humans and AI agents collaborate, hold threads of work, and tend circles together.

This kit is a high-fidelity *visual* prototype: chrome is real, components are reusable, but the data is in-memory. Use it as the canonical reference for how the operating system looks and feels — colours, type, spacing, the rhythm between a human and an agent.

## Components

| File | Role |
| --- | --- |
| `primitives.jsx` | `Logo`, `Button`, `IconBtn`, `Eyebrow`, `Who` (humans + agents avatar stack). |
| `Sidebar.jsx` | Left rail. Brand, view nav (Today / Circles / Practice / Library / Pulse), circles list, user. |
| `Topbar.jsx` | Sticky breadcrumb, search, settings, agent-rail toggle. |
| `TodayView.jsx` | The default landing — sumi-e wash banner, held threads, your circles. |
| `CirclesView.jsx` | A grid of circles, each with painterly art and a humans+agents avatar stack. |
| `AgentRail.jsx` | Right rail. The persistent agent (Iris) — collapsed to a sigil, or expanded with conversation + composer. |
| `PlaceholderView.jsx` | Stand-in for Practice / Library / Pulse — kept on-brand. |
| `app.jsx` | Composes the shell, holds view state, fakes agent replies. |
| `site.css` | Kit-specific styles. Imports `colors_and_type.css`. |

## Run

Open `index.html`. The page is a static prototype:
- Sidebar nav switches views.
- The agent rail (right) is a real chat surface — type something, the agent will reply with a calm canned line after a beat.
- Filter chips, hovers, and reveals all work.
- No backend.

## What's intentionally cut

- Search (`⌘K`) is wired as an icon button but does not open a palette.
- Practice / Library / Pulse render placeholder content. The brand vocabulary continues, but the surfaces are not built.
- Circle interiors aren't built — clicking a circle row just routes to the Circles index.
- All threads, circles, and avatars are sample data.
