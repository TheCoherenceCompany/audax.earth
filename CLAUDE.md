# Audax OS site

Static site: React 18 + Babel Standalone loaded in-browser (no build step). `index.html` pulls in each `.jsx` and `site.css` directly.

## Cache busting — ALWAYS bump the version

The `.jsx` and CSS files are served with a `?v=N` query in `index.html`. Browsers cache these aggressively, so changes won't reach visitors until the query changes.

**Whenever you edit any of these files, bump the `?v=N` number in `index.html` (same number for all):**

- `site.css`
- `components.jsx`, `diagrams.jsx`, `app.jsx`, `hero-canvas.jsx`
- `page-why.jsx`, `page-spheres.jsx`, `page-layers.jsx`, `page-modes.jsx`, `page-whofor.jsx`, `page-camp.jsx`, `page-sorrel.jsx`, `page-build.jsx`, `page-join.jsx`

Note: `colors_and_type.css` is `@import`ed inside `site.css` **with its own `?v=` in the import URL**. Bumping `site.css` alone does NOT refetch it — the import URL is what the browser caches against, so a new token stays undefined and every rule using it silently drops (a `background: var(--missing)` renders as no background at all). If you edit `colors_and_type.css`, bump the `?v=` inside the `@import` line as well, to the same number.

## Adding a page, or a second version of a page

Use the `adding-and-comparing-pages` skill (`.claude/skills/adding-and-comparing-pages/SKILL.md`).

Every page is registered in the `ROUTES` object at the top of `app.jsx` — that entry drives the router, the `<title>`/OG tags, the top nav, the mobile sheet and the footer. Adding a page means a `<script>` tag in `index.html` plus one `ROUTES` entry; **don't** add nav or footer links to `components.jsx`, they're derived. An entry with no `nav` and no `footer` is unlisted — reachable at `#<key>` but absent from every menu, which is how a page variant under review is kept private.

Copying a page file without renaming its top-level `const`s breaks the page silently (all `.jsx` files share one global scope).

Watch out for `*/` inside a `/* */` comment (e.g. writing `HERO_*/BAND_*`) — it closes the comment early and takes the whole file down, which surfaces as an unrelated `X is not defined` at render.

## Breaking up text with imagery

No page should read as an unbroken wall of text. The rule of thumb: **no run of text-only sections longer than about 3000px** (~3 screens). The devices, all in `components.jsx`, all drawing on the `ART` map:

- `<WashRule image={ART.wave} from="paper" to="parchment" />` — slim wordless full-bleed wash between two sections. The default relief. Pass `from`/`to` when the sections above and below have different grounds (`parchment` / `paper` / `white`), or a hard tone step shows at its edge. `tall` and `flip` also available.
- `<ArtAside image={ART.orbHalf}>…</ArtAside>` — prose beside an orb; turns a paragraph stack into a spread. `flip` mirrors it (figure left, and the column widths swap with it). Alternate sides down a page or the figures stack into a column and stop registering.
- `<ChapterBand image={…} numeral="I" label="…" />` — the loud one, for real chapter breaks only.

Never put a wash behind type. A device that bloomed a wash under a pull quote was built and removed: at any opacity where the art read at all, it cost the quote its readability — which is why `PullQuote` deliberately takes no art prop. Imagery goes beside prose or between sections.

Two devices are the camp page's own, in `page-camp.jsx`, because that page's material is photographic rather than sumi-e:

- `<CampAside shot="path" alt="…" caption="…" flip ratio="4 / 3">…</CampAside>` — the photographic `ArtAside`. Reuses the same `.art-aside` grid with a square photo where the orb goes, so the camp page gets the OS pages' spreads in its own material. `ratio` for a shallower figure when the prose beside it is only a paragraph. `CampPhoto` interrupts a run; this turns it into a spread — prefer it where the prose can carry a figure beside it.
- `<CampTear image={…} edge="bottom" ground="…" />` — dissolves the straight cut where a photographic slab meets the page ground, by masking a ground-filled overlay with a wash read as **luminance**. `mask-mode: luminance` is required — a raster `mask-image` defaults to the alpha channel, and these WebPs are fully opaque, so without it the mask silently does nothing. `ground` must match the section on that side of the slab.

`WashRule` works on the camp page too, and is the right relief at a bare section-to-section join there (the washes are already on that page as tear masks). Use `ART.wave` / `ART.spray` / `ART.crest` / `ART.ribbons` / `ART.burst`. Avoid `ART.tide` and `ART.thicket` as visible ink: tide is a scan with the paper's own cut edge in frame, which lands as a hard vertical line across the band, and both are a teal that fights the forest palette. They are fine as masks.

To check a page, measure it rather than eyeballing. Collect every `img` / `url(` background over ~60px in `#root`, sort by document position, merge overlapping ones, and look at the longest gap between them — imagery lives inside sections as often as between them, so walking only the section children misses it. One caveat: the camp page's sticky diptych pins one image beside its whole seven-movement column, so treat `.cph-dip-grid`'s full height as covered or it reads as a 5000px wall of text.

### Art assets — always WebP, never the PNGs

`assets/backgrounds/` (horizontal washes) and `assets/accent-images/` (square orbs) each hold both the original Midjourney `.png` (1.6–2.2 MB each) and a `.webp` re-encode (~100 KB). **The site must only ever reference the `.webp` files.** A single page pulls up to a dozen of these, which at PNG weight is ~20 MB. The PNGs stay on disk as the source art. `ART` in `components.jsx` points at the right files — prefer it over pasting a filename. Regenerate with:

```
cwebp -q 82 -resize 1456 0 in.png -o out.webp   # backgrounds
cwebp -q 84 -resize 800 0  in.png -o out.webp   # accent images
```

Both folders' images are ink on a near-white ground, so the CSS composites them with `mix-blend-mode: multiply` and dissolves their edges with a mask rather than cropping them into a frame. The orbs sit on `#ECEEED`, not white, so they also need the `brightness(1.06)` lift — see the `INK RELIEF` block at the end of `site.css`.
