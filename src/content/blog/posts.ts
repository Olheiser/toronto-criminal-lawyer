import type { ComponentType } from "react";

/* =====================================================================
   BLOG POST REGISTRY
   ---------------------------------------------------------------------
   Every blog post is ONE entry in the `posts` array below plus ONE body
   component in `src/content/blog/posts/<slug>.tsx`.

   The blog index (/blog), pagination (/blog/page/N), each post page
   (/blog/<slug>) and /sitemap.xml are all generated from this list —
   nothing else needs editing when a post is added.

   See "Adding a blog post" in CLAUDE.md or run /new-post.
   ===================================================================== */

// To add a post: import its body component here...
// import WhatHappensAtABailHearing from "./posts/what-happens-at-a-bail-hearing";
import CanadaWideWarrantsEtobicokeShooting from "./posts/canada-wide-warrants-etobicoke-shooting";

export interface BlogPost {
    /** URL slug: lowercase-kebab-case, unique. Becomes /blog/<slug> */
    slug: string;
    /** Visible title — rendered as the page's single <h1> and on the card */
    title: string;
    /** <title> tag. Keep ≤ 60 chars; usually ends in "| Toronto Criminal Lawyer" */
    metaTitle: string;
    /** Meta description. Keep ≤ 160 chars and unique */
    metaDescription: string;
    /** 1–2 sentence teaser shown on the blog index card */
    excerpt: string;
    /** ISO date, e.g. "2026-11-15" */
    datePublished: string;
    /** ISO date; same as datePublished until the post is edited */
    dateModified: string;
    /** Featured image — Cloudflare imagedelivery.net URL with real pixel size */
    image: {
        src: string;
        alt: string;
        width: number;
        height: number;
    };
    /** The post body (H2 and below — the H1 comes from the template) */
    Body: ComponentType;
}

export const posts: BlogPost[] = [
    // ...then add an entry here (order doesn't matter; sorted by date):
    // {
    //     slug: "what-happens-at-a-bail-hearing",
    //     title: "What Happens at a Bail Hearing in Ontario?",
    //     metaTitle: "What Happens at a Bail Hearing? | Toronto Criminal Lawyer",
    //     metaDescription: "…",
    //     excerpt: "…",
    //     datePublished: "2026-11-15",
    //     dateModified: "2026-11-15",
    //     image: { src: "https://imagedelivery.net/…/public", alt: "…", width: 1200, height: 675 },
    //     Body: WhatHappensAtABailHearing,
    // },
    {
        slug: "canada-wide-warrants-etobicoke-shooting",
        title: "Canada-Wide Warrants Issued Following Fatal Etobicoke Shooting",
        metaTitle: "Canada-Wide Warrants Issued in Etobicoke Shooting",
        metaDescription: "Toronto police have issued Canada-wide warrants for two suspects following the fatal shooting of 18-year-old Malik Abass in Etobicoke.",
        excerpt: "Toronto police have issued Canada-wide arrest warrants for a 19-year-old man and a 17-year-old boy in connection with the fatal shooting of 18-year-old Malik Abass in Etobicoke.",
        datePublished: "2026-11-15",
        dateModified: "2026-11-15",
        image: {
            src: "https://imagedelivery.net/8au6u53Ph6mHP5o5AhlVXQ/8725e73c-5b6c-443f-5b4e-ef83187d6f00/public",
            alt: "Etobicoke waterfront condo towers seen from Lake Ontario",
            width: 1151,
            height: 768,
        },
        Body: CanadaWideWarrantsEtobicokeShooting,
    },
];

/* ---------- Site / schema constants (match homepage JSON-LD) ---------- */

export const SITE_URL = "https://torontocriminallaw.net";
export const SITE_NAME = "Nicholas Robinson Toronto Criminal Lawyer";
export const POSTS_PER_PAGE = 9;

export const AUTHOR = {
    "@type": "Person",
    name: "Nicholas Robinson",
    url: `${SITE_URL}/about`,
    jobTitle: "Criminal Defence Lawyer",
};

export const PUBLISHER = {
    "@type": "Organization",
    name: "N.P. Robinson Law Professional Corporation",
    url: `${SITE_URL}/`,
    logo: {
        "@type": "ImageObject",
        url: "https://imagedelivery.net/8au6u53Ph6mHP5o5AhlVXQ/7ee63c63-b679-4850-e564-11c72c526c00/public",
    },
};

/* ------------------------------ Helpers ------------------------------ */

/** All posts, newest first */
export function getSortedPosts(): BlogPost[] {
    return [...posts].sort((a, b) => b.datePublished.localeCompare(a.datePublished));
}

export function getPost(slug: string): BlogPost | undefined {
    return posts.find((p) => p.slug === slug);
}

/** Total number of index pages (at least 1, so /blog always exists) */
export function getTotalPages(): number {
    return Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
}

/** Posts for a 1-based index page */
export function getPagePosts(page: number): BlogPost[] {
    const start = (page - 1) * POSTS_PER_PAGE;
    return getSortedPosts().slice(start, start + POSTS_PER_PAGE);
}

/** URL path for a 1-based index page: page 1 is /blog */
export function blogPagePath(page: number): string {
    return page <= 1 ? "/blog" : `/blog/page/${page}`;
}

/** "November 15, 2026" — parsed as a calendar date, so no timezone drift */
export function formatPostDate(iso: string): string {
    const [y, m, d] = iso.split("-").map(Number);
    return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-CA", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
    });
}
