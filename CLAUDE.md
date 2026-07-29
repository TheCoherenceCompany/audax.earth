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

Watch out for `*/` inside a `/* */` comment (e.g. writing `HERO_*/BAND_*`) — it closes the comment early and takes the whole file down, which surfaces as an unrelated `X is not defined` at render.

## Breaking up text with imagery

No page should read as an unbroken wall of text. The rule of thumb: **no run of text-only sections longer than about 3000px** (~3 screens). The devices, all in `components.jsx`, all drawing on the `ART` map:

- `<WashRule image={ART.wave} from="paper" to="parchment" />` — slim wordless full-bleed wash between two sections. The default relief. Pass `from`/`to` when the sections above and below have different grounds (`parchment` / `paper` / `white`), or a hard tone step shows at its edge. `tall` and `flip` also available.
- `<ArtAside image={ART.orbHalf}>…</ArtAside>` — prose beside an orb; turns a paragraph stack into a spread. `flip` puts the figure left.
- `<PullQuote art={ART.ensoOpen} side="left">` — blooms a wash out past one edge of an existing pull quote. Cheapest win, since every page already has several. Use on roughly half of them, alternating sides, or it becomes a tic.
- `<ChapterBand image={…} numeral="I" label="…" />` — the loud one, for real chapter breaks only.

Never put a wash behind type. A fourth device that bloomed a wash under a pull quote was built and removed: at any opacity where the art read at all, it cost the quote its readability. Imagery goes beside prose or between sections.

On the camp page only, `<CampTear image={…} edge="bottom" ground="…" />` does a different job: it dissolves the straight cut where a photographic slab meets the page ground, by masking a ground-filled overlay with a wash read as **luminance**. `mask-mode: luminance` is required — a raster `mask-image` defaults to the alpha channel, and these WebPs are fully opaque, so without it the mask silently does nothing. `ground` must match the section on that side of the slab.

To check a page, measure it rather than eyeballing: walk `#root`'s section children, sum the heights of consecutive ones that contain no `img` and no `url(` background, and look at the longest run.

### Art assets — always WebP, never the PNGs

`assets/backgrounds/` (horizontal washes) and `assets/accent-images/` (square orbs) each hold both the original Midjourney `.png` (1.6–2.2 MB each) and a `.webp` re-encode (~100 KB). **The site must only ever reference the `.webp` files.** A single page pulls up to a dozen of these, which at PNG weight is ~20 MB. The PNGs stay on disk as the source art. `ART` in `components.jsx` points at the right files — prefer it over pasting a filename. Regenerate with:

```
cwebp -q 82 -resize 1456 0 in.png -o out.webp   # backgrounds
cwebp -q 84 -resize 800 0  in.png -o out.webp   # accent images
```

Both folders' images are ink on a near-white ground, so the CSS composites them with `mix-blend-mode: multiply` and dissolves their edges with a mask rather than cropping them into a frame. The orbs sit on `#ECEEED`, not white, so they also need the `brightness(1.06)` lift — see the `INK RELIEF` block at the end of `site.css`.
