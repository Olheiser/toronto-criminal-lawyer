---
description: Publish a new blog post (content + SEO) to /blog
argument-hint: [post content, or a path to a file containing it]
---

Publish a new blog post on this site. Input from the user (may be empty, partial, or a file path to read): $ARGUMENTS

The blog is data-driven. A post is **one registry entry** in `src/content/blog/posts.ts` plus **one body component** in `src/content/blog/posts/<slug>.tsx`. The index (`/blog`), pagination (`/blog/page/N`), the post page (`/blog/<slug>`), all meta/OG/Twitter/canonical tags, the BlogPosting JSON-LD and `/sitemap.xml` are generated from the registry. Do NOT hand-edit the blog index, pagination or `sitemap.ts`.

## 1. Gather the fields

Read `src/content/blog/posts.ts` first (field docs are in the `BlogPost` interface). You need:

| Field | Rule / default |
|---|---|
| `title` | Visible headline (the page's only H1). Required. |
| `slug` | lowercase-kebab-case from the title, stop-words trimmed sensibly. Must be unique in `posts` and must not be `page`. |
| `metaTitle` | ≤ 60 chars, unique; default `"<Short title> \| Toronto Criminal Lawyer"`. |
| `metaDescription` | 120–160 chars, unique, includes the main keyword. Draft one if not supplied and show it. |
| `excerpt` | 1–2 sentences (~25–40 words) for the index card. Draft from the intro if not supplied. |
| `datePublished` | `YYYY-MM-DD`; default today. |
| `dateModified` | `YYYY-MM-DD`; default = `datePublished`. |
| `image.src` | Cloudflare `https://imagedelivery.net/...` URL (only allowed remote image host, see `next.config.ts`). Required. |
| `image.alt` | Descriptive alt text. Required. |
| `image.width` / `image.height` | Real pixel size of the image. Required (ask if unknown). |
| body | The article content. Required. |

Ask for everything that is **missing and required** in a single AskUserQuestion round (title, image URL/alt/size, body). For fields you drafted (slug, metaTitle, metaDescription, excerpt), show the drafts and let the user accept or change them. Warn if a supplied metaTitle > 60 or metaDescription > 160 chars, or if the slug already exists.

## 2. Create the body component

Create `src/content/blog/posts/<slug>.tsx`, following the content pages (e.g. `src/app/(main)/practice-areas/young-offenders/page.tsx`):

```tsx
import React from "react";
import Link from "next/link";
import styles from "@/styles/Subpage.module.css";

export default function PostBody() {
    return (
        <>
            <p className={styles.contentBreak}>Intro…</p>
            <h2>Section heading</h2>
            <p>…</p>
            <ul className={styles.contentList}>
                <li>…</li>
            </ul>
        </>
    );
}
```

Rules:
- **No `<h1>`** — the template renders the title as the H1. Start sections at `<h2>`, sub-sections `<h3>`; never skip levels.
- Preserve the author's wording. Convert Markdown/Word formatting to JSX; escape `'` as `&apos;` and `"` as `&quot;` in text (ESLint `react/no-unescaped-entities`).
- Internal links use `<Link href="/practice-areas/...">` (no trailing slash, no domain). External links use `<a href="...">`. Link to relevant existing practice-area / criminal-process pages where natural.
- Inline images in the body use `next/image` with an imagedelivery.net URL, alt text, width and height.
- Lists use `className={styles.contentList}`; give the paragraph before a new `<h2>` `className={styles.contentBreak}`.
- **Do not add content the user didn't write** — no closing call-to-action, summary or disclaimer paragraphs. Publish only the supplied text (the post template already shows the lead form beside it).
- If the user's text mentions the firm's phone number, it is **(647) 372-2661** (`<a href="tel:6473722661">(647) 372-2661</a>`) — some older pages still show (647) 697-2876; don't copy that one.
- If the post cites a source (e.g. a news report), link the source name to the URL the user provides; ask for the URL if it's missing rather than leaving it unlinked.
- Use the featured image the user provides as-is; don't suggest substitutes.
- Remove the `Link` import if the body has no internal links (lint fails on unused imports).

## 3. Register the post

In `src/content/blog/posts.ts`: add the `import <PascalName> from "./posts/<slug>";` line and append an entry to `posts` with every field, `Body: <PascalName>`. Order in the array doesn't matter (sorted by `datePublished`).

## 4. Verify

- Run `pnpm lint` and `pnpm build`; fix any errors in the new files.
- Confirm the build output lists `/blog/<slug>` (and a new `/blog/page/N` if the post count crossed a multiple of 9).
- Report: the post URL (`https://torontocriminallaw.net/blog/<slug>`), which index page it appears on, metaTitle/metaDescription lengths, and that the sitemap now includes it. Do not commit unless asked.
