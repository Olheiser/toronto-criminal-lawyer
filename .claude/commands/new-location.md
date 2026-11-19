---
description: Publish a new city landing page at /<city>-criminal-lawyer
argument-hint: [city name, optionally followed by hero image URL / notes]
---

Publish ONE new city landing page. Input from the user (city name, plus optional images and notes): $ARGUMENTS

City pages are data-driven. A city is **one data file** in `src/content/locations/<slug>.ts` plus **one registry entry** in `src/content/locations/locations.ts`. The following are all generated from the registry, so do NOT hand-edit them:
- the page itself, via the `src/app/(main)/[location]/page.tsx` route and `src/app/components/LocationPage.tsx`
- its metadata and JSON-LD
- `/sitemap.xml`
- the footer "Service Areas" list
- the homepage "Surrounding Areas We Serve" block
- the "Areas We Serve Near …" links on other city pages

Publish only the city the user named in this run. Never create extra cities.

## 1. Validate

- Slug: `<city>-criminal-lawyer`, built with `locationSlug(city)` rules (lowercase, spaces become `-`). Example: "Richmond Hill" becomes `richmond-hill-criminal-lawyer`.
- **Refuse `toronto`**: the homepage is the Toronto page, and a Toronto page would compete with it. Toronto districts with their own courthouse (Scarborough, Etobicoke, North York) are fine.
- **Refuse a slug that is already taken.** Check both:
  - the `locations` registry
  - any folder named `<slug>` under `src/app/(main)/` or `src/app/(criminal)/`

  Say which one it clashes with and stop.
- **Exception: Newmarket.** The old ad page moved to `/newmarket-criminal-defence`, and `next.config.ts` temporarily redirects `/newmarket-criminal-lawyer` there. When publishing Newmarket, **delete that redirect** (otherwise the city page is unreachable). Tell the user that any ads still pointing at `/newmarket-criminal-lawyer` should use `/newmarket-criminal-defence`.

## 2. Research and draft (show the draft, write nothing yet)

Read `src/content/locations/locations.ts` (the field docs are in the `Location` interface) and one existing city file, if there is one, for tone.

Research with web search. Prefer official sources (ontario.ca court locations, the police service's own site), and verify every fact:
- **Courthouse(s)** that hear criminal matters for the city (Ontario Court of Justice, and Superior Court if relevant): official name, street address, postal code, phone, and a Google Maps link. Many cities have no courthouse of their own; use the regional courthouse where their charges are heard (for example, Whitby/Ajax charges go to the Durham Region Courthouse in Oshawa).
- **Police service** that lays most charges there (regional, municipal or OPP).
- **Nearby areas**: 4–8 neighbouring communities a searcher in that city might also be in. Don't include Toronto (it is linked automatically).

Draft these fields:

| Field | Rule |
|---|---|
| `metaTitle` | ≤ 60 chars, default `"<City> Criminal Lawyer \| Nicholas Robinson"` |
| `metaDescription` | 120–160 chars, unique, contains "<City> criminal lawyer", free consultation and (647) 372-2661 |
| `tagline` | One sentence under the H1, mentioning the city |
| `intro` | 2–3 paragraphs. The first answers the searcher right away ("Charged with a crime in <City>?…"). Include real local context: which court the case will go to, which police service laid the charge, what happens next. |
| `courthouses[].note` | 1–3 sentences of practical local detail (what's heard there, first appearances, parking/transit if notable). |
| `faqs` | 4–6 questions **specific to this city**: where the first appearance is, which police service, bail hearings at that courthouse, how soon to call a lawyer, whether Nicholas represents clients there. Plain text answers, 2–4 sentences each. |
| `hero` | Use the image the user supplied. If none was given, ask for one: an imagedelivery.net URL, alt text, and the real width and height. |
| `courthouses[].image` | Optional. Only if the user supplies an imagedelivery.net photo. Never reuse another city's courthouse photo. |
| `datePublished` / `dateModified` | Today, `YYYY-MM-DD` |

Content rules (these matter for SEO and accuracy):
- **Every page must be substantially unique.** Don't copy another city's intro, FAQs or notes with the name swapped; Google treats near-identical city pages as doorway pages. The template already supplies the shared sections (bio, practice areas, process), so the data fields must carry the local value.
- **Never claim a local office** or say Nicholas is "based in", "located in" or "has an office in" the city. He represents clients there; the office is in Toronto.
- No invented statistics, case results or reviews. No guarantees of outcome.
- The phone number is **(647) 372-2661**. Never use (647) 697-2876.
- Plain text only in data fields (no JSX/HTML). Apostrophes are fine in `.ts` strings.

Present the full draft in one message: every field, the sources used for the courthouse and police facts, and the metaTitle/metaDescription character counts. Then ask the user to approve or edit it (AskUserQuestion). **Do not write files until the user approves.**

## 3. Create and register

1. Create `src/content/locations/<slug>.ts`:
   ```ts
   import type { Location } from "./locations";

   const <camelCity>: Location = {
       city: "<City>",
       slug: "<slug>",
       // …every field…
   };

   export default <camelCity>;
   ```
2. In `src/content/locations/locations.ts`, add `import <camelCity> from "./<slug>";` with the other imports, and add `<camelCity>,` to the `locations` array.
3. Newmarket only: remove the redirect from `next.config.ts` (see step 1).

## 4. Verify

- Lint the touched files: `pnpm exec eslint src/content/locations "src/app/(main)/[location]"`. The `pnpm lint` script runs `next lint`, which was removed in Next 16.
- Run `pnpm build`, and confirm the route list shows `/<slug>` under `● /[location]`.
- Report:
  - the URL `https://torontocriminallaw.net/<slug>`
  - the metaTitle/metaDescription lengths
  - where it is now linked from (sitemap, footer, homepage, other city pages)

  Remind the user to request indexing in Google Search Console after deploying. Do not commit unless asked.
