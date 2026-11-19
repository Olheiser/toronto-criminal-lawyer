# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing / lead-generation website for a Toronto criminal defence lawyer (production domain: `torontocriminallaw.net`). Next.js App Router + TypeScript, managed with **pnpm** (`pnpm-lock.yaml`). There is no test suite and no backend/API routes.

## Commands

```bash
pnpm dev      # dev server (Turbopack) at http://localhost:3000
pnpm build    # production build — also the de facto type check
pnpm start    # serve the production build
pnpm lint     # BROKEN on Next 16 (`next lint` was removed) — use `pnpm exec eslint <paths>`
```

## Architecture

### Two route groups, each with its own root layout
`src/app/` has no top-level `layout.tsx`. Instead there are two route groups, each rendering its own `<html>`/`<body>`:

- `(main)/` — the full organic site (home, `about/`, `criminal-process/`, `practice-areas/...`). Layout wraps pages in `Header` + `Footer`.
- `(criminal)/` — paid-ad landing pages (`criminal-lawyer`, `newmarket-criminal-defence`). Layout uses `AdFooter` and no site header; pages use `AdNav`, `AdForm`, and `PracticeAreaDynamic` instead. Separate metadata. `newmarket-criminal-defence` is `noindex` (it moved from `/newmarket-criminal-lawyer` to free that URL for the organic city page; `next.config.ts` temporarily redirects the old URL until the Newmarket city page is published).

Because each group is a root layout, navigating between groups triggers a full page load. Tracking scripts (Google Tag Manager `GTM-KGMGGPD6` and Google Ads gtag `AW-653876065`) are duplicated in **both** layouts — change both when editing analytics.

### Components and styling
- Shared components live in `src/app/components/` (imported via relative paths or the `@/*` → `src/*` alias).
- Styling is mostly **CSS Modules** in `src/styles/*.module.css` (one per component/page type, e.g. `Subpage.module.css` for content subpages, `adSubpage*.module.css` for ad landing pages). Tailwind is configured but `globals.css` and modules carry most styles.
- Fonts (Optima, Roboto) are self-hosted from `public/`.
- Images are served from Cloudflare Images (`imagedelivery.net`), whitelisted in `next.config.ts` `remotePatterns`.

### Lead capture
`LeadForm` (main site) and `AdForm` (ad pages) are client components that POST directly to Lawmatics form endpoints (different form IDs per form). `react-calendly` components exist but are currently commented out of the layouts. `@emailjs/browser` is a dependency but not currently used.

### SEO
- `src/app/sitemap.ts` is a **hand-maintained** list of URLs — add new `(main)` pages there (blog URLs are appended automatically). Ad landing pages are intentionally not listed.
- `src/app/robots.txt` is static.
- Per-page `metadata` exports supply titles/descriptions.

### Blog
Data-driven from `src/content/blog/posts.ts` (registry + helpers + author/publisher schema constants). Each post body is a component in `src/content/blog/posts/<slug>.tsx`.
- `(main)/blog/page.tsx` → `/blog` (page 1), `(main)/blog/page/[page]/page.tsx` → `/blog/page/N` (9 per page, `/blog/page/1` redirects to `/blog`), `(main)/blog/[slug]/page.tsx` → post template (metadata, canonical, OG/Twitter, BlogPosting JSON-LD). All use `dynamicParams = false`, so unknown slugs/pages 404.
- Shared UI: `components/BlogIndex.tsx`, `BlogCard.tsx`, `BlogPagination.tsx`; styles in `src/styles/Blog.module.css` layered on `Subpage.module.css`.
- Blog pages pass explicit `breadcrumbs` to `PageHeader` (optional prop; other pages still derive crumbs from the URL).
- URLs have no trailing slash (Next default), matching the rest of the site.

### Adding a content page
Use `/new-page` (`.claude/commands/new-page.md`). Content pages aren't data-driven: besides `src/app/(main)/<path>/page.tsx` (template: `practice-areas/drug-charges/possession-of-narcotics/page.tsx`), update `HamburgerMenu.tsx` (submenu), `sitemap.ts`, the category hub page (link a placeholder card or add one), `practice-areas/page.tsx`, `Breadcrumbs.tsx` `specialCases` if the slug won't title-case cleanly, and optionally `Footer.tsx`.

### Adding a blog post
Use `/new-post` (`.claude/commands/new-post.md`), or manually:
1. Collect: title, slug (kebab-case, unique, not `page`), metaTitle (≤60 chars), metaDescription (≤160), excerpt, datePublished/dateModified (`YYYY-MM-DD`), featured image (imagedelivery.net URL, alt, width, height), body.
2. Create `src/content/blog/posts/<slug>.tsx` — body JSX only, **no H1** (start at H2), Subpage classes (`contentList`, `contentBreak`), escape `'` as `&apos;`. Publish only the user's text — don't add CTA/closing paragraphs. Link cited sources. Phone number, where the text uses it, is **(647) 372-2661** (`tel:6473722661`); (647) 697-2876 on some older pages is outdated.
3. Import it and add an entry to `posts` in `src/content/blog/posts.ts`.
4. `pnpm lint && pnpm build` — confirm `/blog/<slug>` is built. Index, pagination and sitemap update automatically.

### Location (city) pages
City landing pages live at `/<city>-criminal-lawyer` and are data-driven: `src/content/locations/locations.ts` (registry, `Location` interface, shared `PRACTICE_AREAS`) + one data file per city in `src/content/locations/<slug>.ts`. The `(main)/[location]/page.tsx` route (`dynamicParams = false`; the segment is the full slug because Next can't match partial segments) renders `components/LocationPage.tsx` (styles: `src/styles/Location.module.css`; the lead form is `position: sticky` beside the content at ≥1100px). Sitemap, footer "Service Areas", the homepage "Surrounding Areas We Serve" block and cross-links between cities are generated from the registry.
- Add one with `/new-location` (`.claude/commands/new-location.md`) — one city per run, drafted copy is approved by the user before files are written.
- No Toronto page: the homepage is the Toronto page. Never claim a local office (schema uses the real Toronto address).

### Middleware caveat
`src/app/middleware.ts` builds a nonce-based CSP, but Next.js only loads middleware from `src/middleware.ts` (or `src/proxy.ts` in Next 16), so this file is **not currently active**. If it is moved into place, its CSP (`script-src 'self' 'nonce-…'`, `img-src 'self'`, `connect-src` defaulting to self) would block GTM/gtag, Cloudflare images, and the Lawmatics fetch unless extended.

## Versions note
`next` is being upgraded (16.x in the working tree) while `eslint-config-next` is still 15.x and React is a 19 RC — keep these in mind if builds or lint break after dependency changes.
