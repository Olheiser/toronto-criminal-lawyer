import type { Metadata } from "next";
import BlogIndex from "../../components/BlogIndex";
import { SITE_NAME, SITE_URL } from "@/content/blog/posts";

const title = "Blog | Toronto Criminal Lawyer";
const description =
    "Articles from Toronto criminal defence lawyer Nicholas Robinson on criminal charges, bail, court and your rights in Ontario.";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/blog` },
    openGraph: {
        type: "website",
        url: `${SITE_URL}/blog`,
        siteName: SITE_NAME,
        title,
        description,
        locale: "en_CA",
    },
    twitter: { card: "summary", title, description },
};

export default function Page() {
    return <BlogIndex page={1} />;
}
