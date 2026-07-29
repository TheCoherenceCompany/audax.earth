# Audax OS site

Static site: React 18 + Babel Standalone loaded in-browser (no build step). `index.html` pulls in each `.jsx` and `site.css` directly.

## Cache busting — ALWAYS bump the version

The `.jsx` and CSS files are served with a `?v=N` query in `index.html`. Browsers cache these aggressively, so changes won't reach visitors until the query changes.

**Whenever you edit any of these files, bump the `?v=N` number in `index.html` (same number for all):**

- `site.css`
- `components.jsx`, `diagrams.jsx`, `app.jsx`, `hero-canvas.jsx`
- `page-why.jsx`, `page-spheres.jsx`, `page-layers.jsx`, `page-modes.jsx`, `page-whofor.jsx`, `page-camp.jsx`, `page-build.jsx`, `page-join.jsx`

Note: `colors_and_type.css` is `@import`ed inside `site.css`, so it has no version of its own — if you edit it, bump `site.css`'s `?v=` to force the import to refetch.

## Adding a page, or a second version of a page

Use the `adding-and-comparing-pages` skill (`.claude/skills/adding-and-comparing-pages/SKILL.md`).

Every page is registered in the `ROUTES` object at the top of `app.jsx` — that entry drives the router, the `<title>`/OG tags, the top nav, the mobile sheet and the footer. Adding a page means a `<script>` tag in `index.html` plus one `ROUTES` entry; **don't** add nav or footer links to `components.jsx`, they're derived. An entry with no `nav` and no `footer` is unlisted — reachable at `#<key>` but absent from every menu, which is how a page variant under review is kept private.

Copying a page file without renaming its top-level `const`s breaks the page silently (all `.jsx` files share one global scope).
