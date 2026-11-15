import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import BlogIndex from "../../../../components/BlogIndex";
import { SITE_NAME, SITE_URL, blogPagePath, getTotalPages } from "@/content/blog/posts";

type Params = Promise<{ page: string }>;

// Only pre-built page numbers exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
    // Page 1 lives at /blog; build /blog/page/1 too so it can redirect there.
    return Array.from({ length: getTotalPages() }, (_, i) => ({ page: String(i + 1) }));
}

function parsePage(raw: string): number | null {
    if (!/^\d+$/.test(raw)) return null;
    const n = Number(raw);
    return n >= 1 && n <= getTotalPages() ? n : null;
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
    const page = parsePage((await params).page);
    if (!page) return {};
    const title = `Blog – Page ${page} | Toronto Criminal Lawyer`;
    const description = `Page ${page} of articles from Toronto criminal defence lawyer Nicholas Robinson on criminal charges, bail, court and your rights in Ontario.`;
    const url = `${SITE_URL}${blogPagePath(page)}`;
    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: { type: "website", url, siteName: SITE_NAME, title, description, locale: "en_CA" },
        twitter: { card: "summary", title, description },
    };
}

export default async function Page({ params }: { params: Params }) {
    const page = parsePage((await params).page);
    if (!page) notFound();
    if (page === 1) redirect("/blog");
    return <BlogIndex page={page} />;
}
