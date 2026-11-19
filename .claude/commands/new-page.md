---
description: Publish a new content page and add it to the site nav, sitemap and hub pages
argument-hint: [page content, or a path to a file containing it]
---

Publish a new content page in the `(main)` site. Input from the user (may be empty, partial, or a file path to read): $ARGUMENTS

Unlike the blog, content pages are **not** data-driven. A new page means one new `page.tsx` **plus** hand edits to the nav menu, the sitemap and the parent hub/index pages. Every touchpoint below must be handled (or explicitly skipped with a reason in the final report).

## 1. Gather the fields

Read these first so placement suggestions match the current site: `src/app/components/HamburgerMenu.tsx`, `src/app/sitemap.ts`, `src/app/(main)/practice-areas/page.tsx`, and the relevant category hub page.

| Field | Rule / default |
|---|---|
| `title` | Visible heading — rendered as the page's only H1 by `PageHeader`. Required. |
| placement | Where the page lives. One of: **(a)** under About (`/about/<slug>`), under Criminal Process (`/criminal-process/<slug>`), or as a flat practice area (`/practice-areas/<slug>`); **(b)** inside an existing practice-area category (`/practice-areas/<category>/<slug>` — categories: `assault-charges`, `driving-offences`, `fraud-charges`, `drug-charges`, `property-crimes`, `sexual-offences`); **(c)** inside a **new** practice-area category (also creates the category hub page). Infer from the topic, then confirm. |
| `slug` | lowercase-kebab-case from the title. The folder must not already exist. |
| `metaTitle` | ≤ 60 chars; default `"<Title> \| Toronto Criminal Lawyer"`. |
| `metaDescription` | 120–160 chars, includes the main keyword. Draft one if not supplied and show it. |
| menu label | Text in the nav; default = title. |
| footer | Add to the footer link list? Default **no**. |
| body | The page content. Required. |
| new category only | Category title, category slug, a 1–2 sentence category intro for `practice-areas/page.tsx`. |

Ask for everything that is **missing and required** in a single AskUserQuestion round (title, placement, body, footer yes/no). Show drafted fields (slug, metaTitle, metaDescription) for acceptance. Warn if metaTitle > 60 or metaDescription > 160 chars, or if the slug already exists.

## 2. Create the page

Create `src/app/(main)/<path>/page.tsx`, following `src/app/(main)/practice-areas/drug-charges/possession-of-narcotics/page.tsx`. Use the `@/` alias for imports (avoids getting `../../..` depth wrong):

```tsx
import React from "react";
import Link from "next/link";
import styles from "@/styles/Subpage.module.css";
import LeadForm from "@/app/components/LeadForm";
import PageHeader from "@/app/components/PageHeader";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "<metaTitle>",
  description: "<metaDescription>",
};

export default function Page() {
    return (
        <main className={styles.pageBody}>
            <PageHeader title="<title>"/>
            <div className={styles.pageContainer}>
                <article className={styles.pageContent}>
                    <p className={styles.contentBreak}>Intro…</p>

                    <h2>Section heading</h2>
                    <p>…</p>
                    <ul className={styles.contentList}>
                        <li>…</li>
                    </ul>

                    <h2>Section with sub-sections</h2>
                    <h3>Sub-section</h3>
                    <p className={styles.contentH3Break}>…</p>
                </article>
                <aside className={styles.form}>
                    <LeadForm />
                </aside>
            </div>
        </main>
    );
}
```

Rules:
- **No `<h1>` in the body** — `PageHeader` renders it. Sections are `<h2>`, sub-sections `<h3>`; never skip levels.
- Give the paragraph before a new `<h2>` `className={styles.contentBreak}`; the last paragraph of an `<h3>` sub-section that is followed by another `<h3>` gets `className={styles.contentH3Break}`. Lists use `className={styles.contentList}`.
- Preserve the author's wording. Convert Markdown/Word formatting to JSX; escape `'` as `&apos;` and `"` as `&quot;` (ESLint `react/no-unescaped-entities`).
- **Do not add content the user didn't write** — no extra CTA, summary or disclaimer paragraphs.
- The firm's phone number is **(647) 372-2661** (`<a href="tel:6473722661">(647) 372-2661</a>`). Older pages still show (647) 697-2876 — never copy that one, even when using an old page as a template.
- Internal links use `<Link href="/practice-areas/...">` (no trailing slash, no domain); external links use `<a href="...">`. If the text cites a source (statute, case, news report), link it; ask for the URL if missing.
- Inline images use `next/image` with an `imagedelivery.net` URL, alt, width and height.
- Remove the `Link` import if the body has no internal links (lint fails on unused imports).

**New category (placement c) only:** also create `src/app/(main)/practice-areas/<category>/page.tsx` modelled on `practice-areas/drug-charges/page.tsx` — `metadata` (`"<Category> | Toronto Criminal Lawyer"`), `<PageHeader title="<Category>"/>`, `div` with `` `${styles.categoryContainer} ${styles.pageContainer}` ``, `section` with `` `${styles.pageContent} ${styles.categoryBody}` ``, one `article.categoryCard` per offence (see step 3c), and the `aside.form` with `LeadForm`. Ask the user for any card copy beyond the new page itself rather than inventing it.

## 3. Wire it into the site

### 3a. Nav menu — `src/app/components/HamburgerMenu.tsx`
The same component renders desktop and mobile nav. New items always get the active-state class.

- **Placement (a)** — add a flat item to the matching top-level dropdown (`activeDropdown === 0` About, `=== 1` Criminal Process, `=== 2` Practice Areas). Flat practice areas go next to Criminal Harassment / Young Offenders at the end of the Practice Areas dropdown.
  ```tsx
  <li><Link href="/<path>" className={pathname === "/<path>" ? styles.active : ""}><Menu Label></Link></li>
  ```
- **Placement (b)** — add the same `<li>` inside that category's `<ul className={styles.subDropdown ...}>`.
- **Placement (c)** — add a new category block **before** the flat Criminal Harassment item, using the next unused sub-index (check the highest `handleSubMouseEnter(N)` in the file; currently 5, so the next is 6). Use `N` consistently in all three places:
  ```tsx
  {/* Submenu Level 1 -> <Category>*/}
  <li
      onMouseEnter={typeof window !== "undefined" && window.innerWidth >= 1000 ? () => handleSubMouseEnter(N) : undefined}
      onMouseLeave={typeof window !== "undefined" && window.innerWidth >= 1000 ? handleSubMouseLeave : undefined}
  >
      <div className={styles.submenuItemRow}>
          <Link href="/practice-areas/<category>" className={pathname === "/practice-areas/<category>" ? styles.active : ""}><Category></Link>
          <span
              className={styles.dropdownArrow}
              onClick={() => handleSubDropdownToggle(N)}
          >
              ▾
          </span>
      </div>
      <ul className={`${styles.subDropdown} ${
                  activeSubDropdown === N ? styles.showSubDropdown : ""
              }`}>
          <li><Link href="/practice-areas/<category>/<slug>" className={pathname === "/practice-areas/<category>/<slug>" ? styles.active : ""}><Menu Label></Link></li>
      </ul>
  </li>
  ```

### 3b. Sitemap — `src/app/sitemap.ts`
Add an entry in the matching section (About / Criminal Process / Practice Areas), next to its siblings:
```ts
{
  url: `${baseUrl}/<path>`,
  lastModified: new Date(),
  changeFrequency: 'weekly',   // 'monthly' for About pages
  priority: 0.7,               // 0.8 for a category hub or flat practice area
},
```
For a new category, add the hub URL too (priority 0.8).

### 3c. Category hub page — `src/app/(main)/practice-areas/<category>/page.tsx` (placement b/c)
Each offence is an `article.categoryCard`. Many cards are unlinked placeholders (e.g. "Drug Trafficking"). If one matches the new page, **link it** the way the Possession of Narcotics card is linked: wrap the `h2.categoryHeading` text, the first `<strong>` in `categoryCopy`, and the `<strong>` in `categoryLearnMore` in `<Link href="/practice-areas/<category>/<slug>">`. Add a `Link` import if the file lacks one. If no card matches, add a new card in the same structure, using copy the user supplies (ask — don't invent).

### 3d. Practice-areas index — `src/app/(main)/practice-areas/page.tsx` (any practice-area placement)
Each category has an `<h2>`, an intro `<p>`, and a `<ul>` listing its offences, some plain text. If the offence is listed as plain text, wrap it in `<Link href="/practice-areas/...">`; otherwise add a linked `<li>`. For a new category, add a new `<h2>` / intro / `<p><strong><Category> Include</strong></p>` / `<ul className={`${styles.contentList} ${styles.contentBreak}`}>` block in the same style. Flat practice areas are linked near the end of the page (Criminal Harassment, Young Offenders).

### 3e. Breadcrumbs — `src/app/components/Breadcrumbs.tsx`
Crumb labels are derived by title-casing URL segments (only `a`, `of`, `the` stay lowercase). If the new slug (or new category slug) wouldn't render correctly — acronyms (`DUI`), punctuation (`?`), lowercase words like `and`/`for`/`to`, or a label that differs from the slug — add it to `specialCases`.

### 3f. Footer — `src/app/components/Footer.tsx` (only if the user said yes)
Add `<li><Link href="/<path>"><Label></Link></li>` to the Criminal Process / About list or the Practice Areas list.

## 4. Verify

- Run `pnpm lint` and `pnpm build`; fix any errors in touched files.
- Confirm the build output lists the new route (and the category hub for placement c).
- Report: the page URL (`https://torontocriminallaw.net/<path>`), where it appears in the menu, metaTitle/metaDescription lengths, and a checklist of every touchpoint (3a–3f) with what was changed or why it was skipped. Do not commit unless asked.
