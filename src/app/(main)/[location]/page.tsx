import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocationPage from "@/app/components/LocationPage";
import {
    PHONE_SCHEMA,
    SITE_NAME,
    SITE_URL,
    getLocation,
    locations,
} from "@/content/locations/locations";

/* City landing pages: /<city>-criminal-lawyer.
   Next can't match a partial segment like [city]-criminal-lawyer, so the
   segment is the whole slug. Only slugs in the registry exist (404 otherwise),
   and static routes (about, blog, …) always take precedence. */

type Params = Promise<{ location: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
    return locations.map((l) => ({ location: l.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
    const location = getLocation((await params).location);
    if (!location) return {};
    const url = `${SITE_URL}/${location.slug}`;
    const image = {
        url: location.hero.src,
        width: location.hero.width,
        height: location.hero.height,
        alt: location.hero.alt,
    };
    return {
        title: location.metaTitle,
        description: location.metaDescription,
        alternates: { canonical: url },
        openGraph: {
            type: "website",
            url,
            siteName: SITE_NAME,
            title: location.metaTitle,
            description: location.metaDescription,
            locale: "en_CA",
            images: [image],
        },
        twitter: {
            card: "summary_large_image",
            title: location.metaTitle,
            description: location.metaDescription,
            images: [image],
        },
    };
}

export default async function Page({ params }: { params: Params }) {
    const location = getLocation((await params).location);
    if (!location) notFound();

    const url = `${SITE_URL}/${location.slug}`;
    const pageName = `${location.city} Criminal Lawyer`;

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": `${url}#webpage`,
                url,
                name: pageName,
                description: location.metaDescription,
                inLanguage: "en-CA",
                datePublished: location.datePublished,
                dateModified: location.dateModified,
                primaryImageOfPage: { "@type": "ImageObject", url: location.hero.src },
                isPartOf: { "@type": "WebSite", name: SITE_NAME, url: `${SITE_URL}/` },
                breadcrumb: { "@id": `${url}#breadcrumb` },
                about: { "@id": `${url}#legalservice` },
            },
            {
                "@type": "LegalService",
                "@id": `${url}#legalservice`,
                name: `Nicholas Robinson, ${pageName}`,
                url,
                image: "https://imagedelivery.net/8au6u53Ph6mHP5o5AhlVXQ/7ee63c63-b679-4850-e564-11c72c526c00/public",
                telephone: PHONE_SCHEMA,
                description: location.metaDescription,
                // The real office. City pages never claim a local office.
                address: {
                    "@type": "PostalAddress",
                    streetAddress: "478 Richmond St W, Richmond Place",
                    addressLocality: "Toronto",
                    addressRegion: "ON",
                    postalCode: "M5V 1Y2",
                    addressCountry: "CA",
                },
                areaServed: [
                    { "@type": "City", name: location.city },
                    ...location.nearbyAreas.map((name) => ({ "@type": "City", name })),
                ],
                openingHours: "Mo-Su 00:00-23:59",
                parentOrganization: { "@id": "https://torontocriminallaw.net/#LegalService" },
                sameAs: [
                    "https://g.co/kgs/6SZDyc7",
                    "https://www.facebook.com/nicholasrobinsoncriminallawyer/",
                    "https://www.linkedin.com/company/nicholas-robinson-criminal-lawyer",
                ],
            },
            {
                "@type": "BreadcrumbList",
                "@id": `${url}#breadcrumb`,
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
                    { "@type": "ListItem", position: 2, name: pageName, item: url },
                ],
            },
        ],
    };

    return (
        <>
            <LocationPage location={location} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </>
    );
}
