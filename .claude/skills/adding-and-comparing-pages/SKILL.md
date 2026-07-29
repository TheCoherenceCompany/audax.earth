---
name: adding-and-comparing-pages
description: Use when adding a page to the audax.earth site, or when creating a second version of an existing page (A/B variant, redesign, "show me two options") so both can be opened and compared in the browser.
---

# Adding & Comparing Pages

## Overview

This site has no build step. `index.html` loads each `.jsx` with `<script type="text/babel">`; Babel Standalone compiles them in the browser. **Every file shares one global scope**, and every page is registered in the `ROUTES` object at the top of `app.jsx`.

Two consequences drive everything below:

1. A page needs **two registrations**: a `<script>` tag and a `ROUTES` entry. Nothing else — the nav, mobile sheet, footer and `<title>`/OG tags are all derived from `ROUTES`.
2. Copying a page file verbatim **breaks the site** — duplicate top-level `const` names collide.

## Registration points

Create the page file first — component plus `window.PageX = PageX;` as the last line — then register it:

| # | File | What to add | Line ref |
|---|---|---|---|
| 1 | `index.html` | `<script type="text/babel" src="page-<key>.jsx?v=N">` **before** `app.jsx` | `index.html:37-48` |
| 2 | `app.jsx` | One `ROUTES` entry | `app.jsx:21-70` |

A `ROUTES` entry:

```jsx
camp: {
  view: (p) => <PageCamp {...p} />,          // required
  title: 'Camp Audax — Audax OS',            // required — <title> + og:title
  description: 'AI as the coordination…',    // required — meta description
  nav: 'Camp',                               // optional — label in top nav + mobile sheet
  footer: 'Camp Audax',                      // optional — footer label, defaults to `nav`
},
```

**Omit both `nav` and `footer` and the page is unlisted**: reachable at `#<key>`, absent from every menu. That one-line switch is what keeps a variant under review private — no separate file to edit, nothing to remember to undo.

Do **not** edit `components.jsx` to add a page. `Nav`, `BottomSheet` and `Footer` read `navPages()` / `footerPages()`, which derive from `ROUTES` at render time.

## The collision trap

Page files declare top-level `const`s (`HERO_CAMP`, `Section`, `ROLES`…). Two scripts declaring the same top-level `const` throw `SyntaxError: Identifier 'X' has already been declared`, and the **whole second file silently fails to execute** — the page renders blank with only a console error.

So when you copy a page, rename *every* top-level binding, not just the component.

Verify before loading the page:

```bash
grep -hoE '^const [A-Za-z0-9_]+' *.jsx | sort | uniq -d   # must print nothing
```

## Creating a variant to compare

```bash
cp page-camp.jsx page-camp-b.jsx
grep -nE '^const [A-Za-z0-9_]+' page-camp-b.jsx           # list what needs renaming
```

1. Suffix every top-level `const` in the copy (`HERO_CAMP` → `HERO_CAMP_B`, `PageCamp` → `PageCampB`).
2. Last line: `window.PageCampB = PageCampB;`
3. Add the script tag, and a `camp-b` entry in `ROUTES` **with no `nav` and no `footer`** so it stays unlisted.
4. Run `grep … uniq -d` above — expect no output.
5. Bump `?v=N` on every versioned file in `index.html` (see `CLAUDE.md`).
6. Serve and open both: `./web_view.sh` → `localhost:8080/#camp` and `localhost:8080/#camp-b`, one per browser window. (`./web_view.sh <port>` takes a port, so you can run two servers if you want the versions on separate origins.)

Nav links in the variant still point at the canonical keys — that is fine for review, and means clicking nav exits the variant.

## Promoting or dropping a variant

**Promote:** point the canonical entry's `view` at the new component (`view: (p) => <PageCampB {...p} />` under `camp:`), check it, then move the variant's contents into `page-camp.jsx` (dropping the `_B` suffixes) and delete the variant file, its script tag and its `ROUTES` entry.

**Drop:** delete the `ROUTES` entry, the script tag and the file.

Either way, leaving a dead script tag in `index.html` costs every visitor a download and a Babel compile.

## Gotchas

- **Bump `?v=N`.** Nothing reaches the browser otherwise. Same number on all files.
- **`ROUTES` order is menu order.** The nav, mobile sheet and footer all render entries in declaration order, so put a new page where it belongs rather than appending out of habit.
- **`build` is in the footer but not the top nav** — it has `footer` but no `nav`, because the nav renders it as the standalone CTA button instead.
- **Unknown hashes fall back to `why`** (`HOME` in `app.jsx`). A page that renders as Why usually means its `ROUTES` key is missing or misspelled; a page that renders *blank* usually means a const collision.
- **Deep links are `#page/section`**, where `section` is a DOM id the page renders (e.g. `#spheres/value`).
- Script **order matters**: `components.jsx` and `diagrams.jsx` first, pages next, `app.jsx` last. `ROUTES` lives in `app.jsx` precisely because it loads last, when every `window.PageX` exists.

## Common mistakes

| Mistake | Symptom |
|---|---|
| Copied file, renamed only the component | Blank page, `Identifier 'X' has already been declared` in console |
| Forgot the `ROUTES` entry | Variant URL renders the Why page |
| Forgot `window.PageX = PageX` | `PageX is not defined` |
| Forgot the `?v=` bump | Old page keeps rendering after a hard-looking edit |
| Gave a draft variant a `nav` label | Draft appears in the public nav and footer |
| Edited `components.jsx` to add a nav link | Redundant — menus derive from `ROUTES` |
