# Audax OS site

Static site: React 18 + Babel Standalone loaded in-browser (no build step). `index.html` pulls in each `.jsx` and `site.css` directly.

## Cache busting — ALWAYS bump the version

The `.jsx` and CSS files are served with a `?v=N` query in `index.html`. Browsers cache these aggressively, so changes won't reach visitors until the query changes.

**Whenever you edit any of these files, bump the `?v=N` number in `index.html` (same number for all):**

- `site.css`
- `components.jsx`, `diagrams.jsx`, `app.jsx`, `hero-canvas.jsx`
- `page-why.jsx`, `page-spheres.jsx`, `page-layers.jsx`, `page-modes.jsx`, `page-whofor.jsx`, `page-join.jsx`

Note: `colors_and_type.css` is `@import`ed inside `site.css`, so it has no version of its own — if you edit it, bump `site.css`'s `?v=` to force the import to refetch.
