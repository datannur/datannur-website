# datannur-website

Official website of [datannur](https://datannur.com), the open-source,
lightweight and sovereign data catalog. Static site built with
[Astro](https://astro.build), all content in markdown, trilingual (EN/FR/DE):
English at the root, translated slugs under `/fr/` and `/de/`.

## Architecture in short

- **Static output, zero client-side framework.** The build produces plain
  HTML/CSS. The only JavaScript shipped is ~30 inline lines for the theme
  toggle and scroll preservation across language switches. Dropdown menus,
  the mobile burger, the screenshot viewer and the header scroll transition
  are pure CSS.
- **Why Astro:** markdown content collections, built-in i18n with translated
  slugs, sitemap generation, and no hydration by default — plain HTML from
  markdown, with shared layout and components at build time only.
- **Hosting:** any static file server. Production runs on Infomaniak shared
  hosting (Apache) — `public/.htaccess` handles https redirects, caching and
  the 404 page. No PHP, no Node at runtime. Note: the root of
  docs.datannur.com carries a manually uploaded `.htaccess` (not in any
  deployed repo) that 301-redirects only `/` to `/documentation/` on this
  site; `/app/` and `/builder/` stay served by VitePress.
- **Dark mode:** header toggle, system preference by default, choice persisted
  in `localStorage`, no flash on load. Every color is a CSS variable defined
  in `src/styles/global.css` (`:root` for light, `[data-theme='dark']` for
  dark) — any new color must go through these variables.

## Commands

```sh
npm install       # once
npm run dev       # dev server at http://localhost:4321
npm run build     # generates the static site in dist/
npm run preview   # serves dist/ locally
```

## Editing content

All content lives in `src/content/pages/<lang>/<slug>.md` — one file per page
per language. **The file name is the URL slug** (`fonctionnalites.md` →
`/fr/fonctionnalites/`, `home.md` → the language root).

Each page's frontmatter:

```yaml
---
key: features        # shared key linking translations across languages
title: Features — Explore and use the catalog   # <title> + H1
description: ...     # meta description (SEO)
icon: screwdriver-wrench   # title icon (file name in src/icons/)
---
Page body in markdown…
```

The `key` field drives everything multilingual: it generates the crossed
`hreflang` tags and makes the EN/FR/DE switcher point to the translated page
(`/features/` → `/fr/fonctionnalites/`, not `/fr/`). Inner-page titles follow
the `Section — Subtitle` pattern: the part before the em dash is rendered as
a small teal kicker line, the rest as the main heading — inside a single
`<h1>` whose text content stays complete for SEO.

### Optional frontmatter blocks

- `bg: city` — city photo background (contact page, homepage bottom)
- `contactBlock: true` — email / phone / GitHub block after the content
- `plainImages: true` — body images without shadow or border radius
- `plans:` — support plan cards (support page)
- `hero:`, `pillars:`, `gallery:`, `partners:` — rich homepage sections

### Markdown conventions

- An image followed by an `*italic*` line = centered gray caption
- A link alone in its paragraph = button (demo page)
- `<div class="grid-2">…</div>` = two columns
- `![alt](/images/x.png "w=310")` = fixed display width in px
- `![alt](diagram:name)` = embeds the diagram
  `src/diagrams/<lang>/<name>.html` (see below)

### Structure diagrams

The diagrams on the structure page are the app's own HTML/SVG (extracted from
the about page of dev.datannur.com) stored in `src/diagrams/<lang>/`, with
their styles in `src/styles/diagrams.css`: crisp at any resolution, localized
labels, colors that adapt to both themes, entity-colored icons. If the app's
diagrams evolve, re-extract the `.simple-diagram-block` elements and replace
the corresponding files.

### Dark mode images

Drop a dark variant in `public/images/` and it is picked up automatically at
build time (hero, gallery, markdown body):

- `x.dark.jpg` = variant shared by all languages (for `x.en.jpg`,
  `x.fr.jpg`…); the extension may differ from the light one
- `x.fr.dark.jpg` = language-specific variant, takes precedence
- Without a variant, screenshots stay light in dark mode; `plainImages`
  diagrams are inverted via a CSS filter

The hidden variant is `loading="lazy"`, so only the active theme's images are
downloaded.

### Adding a page

1. Create `src/content/pages/<lang>/<slug>.md` for every language with the
   same `key`
2. Add it to the menu in [src/i18n/ui.ts](src/i18n/ui.ts) (`nav` + `navLabels`)

### Adding a language

Add the locale to `langs` in [src/i18n/ui.ts](src/i18n/ui.ts) and to
`astro.config.mjs`, create `src/pages/<lang>/[...slug].astro` (copy of the
`fr` one), then add the content folder. Everything else (hreflang, switcher,
sitemap) follows automatically.

## SEO

Handled by the base layout on every page: unique title and meta description,
absolute canonical, `hreflang` for en/fr/de + `x-default` (EN), Open Graph and
Twitter card, `og:locale` per language, JSON-LD Organization on the home
pages, sitemap with i18n alternates, `robots.txt`, custom 404. Single `<h1>`
per page, `alt` on all meaningful images, `width`/`height` attributes and lazy
loading to avoid CLS. No browser-language redirect — bad for crawlers; the
visitor chooses via the switcher.

## Project layout

- `src/content/pages/` — markdown content (the only thing to edit day to day)
- `src/i18n/ui.ts` — nav/footer labels + contact details
- `src/layouts/Base.astro` — SEO `<head>` (canonical, hreflang, OG, JSON-LD)
- `src/components/` — header, footer, hero, gallery, plans…
- `src/diagrams/<lang>/` — structure diagrams extracted from the app
- `src/icons/` — Font Awesome 6 SVG icons, inlined at build time
- `src/lib/dark-image.mjs` — build-time dark image variant resolution
- `src/styles/global.css` — the whole design system (colors as variables)
- `src/styles/diagrams.css` — diagram styles ported from the app
- `public/images/` — logo, screenshots (`.en`/`.fr` suffix when localized,
  `.dark` for dark variants)
- `public/.htaccess` — https, cache, 404 (Apache shared hosting)
- `astro.config.mjs` — i18n, sitemap, markdown sugar (buttons, image widths,
  dark variants, `diagram:` embeds)

## Deployment

Automatic: every push to `main` builds and syncs `dist/` to Infomaniak over
rsync/SSH ([.github/workflows/deploy.yml](.github/workflows/deploy.yml) —
`SSH_HOST`, `SSH_USER`, `SSH_PRIVATE_KEY` and `DEPLOY_PATH` secrets must be
set on the repository). Manual runs are available from the Actions tab.

Manual fallback: `npm run build`, then upload the contents of `dist/` to the
web root (SFTP/rsync). No PHP or Node required server-side.
