/* =====================================================================
   LOCATION (CITY) PAGE REGISTRY
   ---------------------------------------------------------------------
   Every city page is ONE data file in `src/content/locations/<slug>.ts`
   plus ONE entry in the `locations` array below.

   The page (/<city>-criminal-lawyer), its metadata + JSON-LD, the
   sitemap entry, the footer "Service Areas" list and the homepage
   "Surrounding Areas We Serve" block are all generated from this list —
   nothing else needs editing when a city is added.

   Run /new-location (see .claude/commands/new-location.md).
   No Toronto page: the homepage is the Toronto page.
   ===================================================================== */

// To add a city: import its data file here...
import oshawa from "./oshawa-criminal-lawyer";

export { SITE_URL, SITE_NAME } from "@/content/blog/posts";

export const PHONE_DISPLAY = "(647) 372-2661";
export const PHONE_TEL = "tel:6473722661";
export const PHONE_SCHEMA = "+1-647-372-2661";

export interface Courthouse {
    /** e.g. "Durham Region Courthouse" */
    name: string;
    /** Street address, one line per entry, e.g. ["150 Bond St E", "Oshawa, ON L1G 0A2"] */
    addressLines: string[];
    /** Courthouse phone, as displayed */
    phone: string;
    /** Google Maps link to the courthouse */
    mapsUrl: string;
    /** 1–3 sentences of genuinely local detail (what's heard there, first appearances, etc.) */
    note: string;
    /** Optional photo — Cloudflare imagedelivery.net URL with real pixel size */
    image?: { src: string; alt: string; width: number; height: number };
}

export interface LocationFAQ {
    q: string;
    a: string;
}

export interface Location {
    /** Display name, e.g. "Oshawa" */
    city: string;
    /** `<city>-criminal-lawyer` — becomes the URL /<slug>. Unique. */
    slug: string;
    /** <title>, ≤ 60 chars, e.g. "Oshawa Criminal Lawyer | Nicholas Robinson" */
    metaTitle: string;
    /** 120–160 chars, unique, includes "<City> criminal lawyer" */
    metaDescription: string;
    /** One sentence under the H1 — the value proposition, mentioning the city */
    tagline: string;
    /** Hero background image — Cloudflare imagedelivery.net URL with real pixel size */
    hero: { src: string; alt: string; width: number; height: number };
    /** Unique local intro paragraphs (plain text). The first should answer the search intent. */
    intro: string[];
    /** Local courthouse(s) where the city's criminal matters are heard */
    courthouses: Courthouse[];
    /** Police service that lays charges in the city, e.g. "Durham Regional Police Service" */
    policeService: string;
    /** Nearby communities served. Any that have their own city page are linked automatically. */
    nearbyAreas: string[];
    /** 4–6 locally specific questions and answers (plain text) */
    faqs: LocationFAQ[];
    /** ISO date, e.g. "2026-11-19" */
    datePublished: string;
    /** ISO date; same as datePublished until the page is edited */
    dateModified: string;
}

export const locations: Location[] = [
    // ...then add it here (order doesn't matter; lists are sorted by city name):
    oshawa,
];

export function getLocation(slug: string): Location | undefined {
    return locations.find((l) => l.slug === slug);
}

/** All city pages, alphabetical by city name. */
export function getSortedLocations(): Location[] {
    return [...locations].sort((a, b) => a.city.localeCompare(b.city));
}

/** Slug for a city name, e.g. "Richmond Hill" → "richmond-hill-criminal-lawyer". */
export function locationSlug(city: string): string {
    return `${city.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}-criminal-lawyer`;
}

/** Practice areas shown on every city page as "<City> <name> Lawyer" cards. */
export const PRACTICE_AREAS: { name: string; href: string; description: string }[] = [
    {
        name: "Sexual Assault",
        href: "/practice-areas/sexual-offences/sexual-assault",
        description: "Sexual assault involves the unauthorized, intentional touching of another person in circumstances of a sexual nature, violating their sexual integrity.",
    },
    {
        name: "Impaired Driving",
        href: "/practice-areas/driving-offences/impaired-driving",
        description: "Impaired driving refers to operating a motor vehicle while under the influence of alcohol, drugs, or a combination of both, affecting one's ability to drive safely.",
    },
    {
        name: "Assault",
        href: "/practice-areas/assault-charges/assault",
        description: "Assault occurs when an individual intentionally applies force to another person without their consent, threatens to do so, or impedes someone while carrying a weapon.",
    },
    {
        name: "Fraud",
        href: "/practice-areas/fraud-charges/fraud",
        description: "Fraud involves the intentional use of deceit, falsehood, or other fraudulent means to deprive someone of property, money, or services.",
    },
    {
        name: "Uttering Threats",
        href: "/practice-areas/assault-charges/uttering-threats",
        description: "Uttering threats involves knowingly making threats to cause death or bodily harm, damage property, or harm animals.",
    },
    {
        name: "Criminal Harassment",
        href: "/practice-areas/criminal-harassment",
        description: "Criminal harassment occurs when someone, without lawful authority, engages in conduct that causes another person to reasonably fear for their safety.",
    },
    {
        name: "Possession of Narcotics",
        href: "/practice-areas/drug-charges/possession-of-narcotics",
        description: "Possession of narcotics involves having control or custody of a controlled substance, including personal, constructive, or joint possession.",
    },
    {
        name: "Robbery",
        href: "/practice-areas/property-crimes/robbery",
        description: "Robbery is theft combined with the use or threat of violence, including the use of a weapon or actions intended to prevent resistance.",
    },
    {
        name: "Young Offender",
        href: "/practice-areas/young-offenders",
        description: "Youths aged 12 to 17 accused of a crime are dealt with under the Youth Criminal Justice Act, which provides distinct procedures and sentences.",
    },
];
