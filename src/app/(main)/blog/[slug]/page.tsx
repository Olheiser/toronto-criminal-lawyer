import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import subpage from "@/styles/Subpage.module.css";
import styles from "@/styles/Blog.module.css";
import PageHeader from "../../../components/PageHeader";
import LeadForm from "../../../components/LeadForm";
import {
    AUTHOR,
    PUBLISHER,
    SITE_NAME,
    SITE_URL,
    formatPostDate,
    getPost,
    posts,
} from "@/content/blog/posts";

type Params = Promise<{ slug: string }>;

// Only slugs in the registry exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
    return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
    const post = getPost((await params).slug);
    if (!post) return {};
    const url = `${SITE_URL}/blog/${post.slug}`;
    const image = {
        url: post.image.src,
        width: post.image.width,
        height: post.image.height,
        alt: post.image.alt,
    };
    return {
        title: post.metaTitle,
        description: post.metaDescription,
        alternates: { canonical: url },
        openGraph: {
            type: "article",
            url,
            siteName: SITE_NAME,
            title: post.metaTitle,
            description: post.metaDescription,
            locale: "en_CA",
            publishedTime: post.datePublished,
            modifiedTime: post.dateModified,
            authors: [AUTHOR.url],
            images: [image],
        },
        twitter: {
            card: "summary_large_image",
            title: post.metaTitle,
            description: post.metaDescription,
            images: [image],
        },
    };
}

export default async function Page({ params }: { params: Params }) {
    const post = getPost((await params).slug);
    if (!post) notFound();

    const path = `/blog/${post.slug}`;
    const url = `${SITE_URL}${path}`;
    const { Body } = post;

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BlogPosting",
                "@id": `${url}#article`,
                headline: post.title,
                description: post.metaDescription,
                image: {
                    "@type": "ImageObject",
                    url: post.image.src,
                    width: post.image.width,
                    height: post.image.height,
                    caption: post.image.alt,
                },
                datePublished: post.datePublished,
                dateModified: post.dateModified,
                author: AUTHOR,
                publisher: PUBLISHER,
                mainEntityOfPage: { "@type": "WebPage", "@id": url },
                url,
                inLanguage: "en-CA",
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
                    { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
                    { "@type": "ListItem", position: 3, name: post.title, item: url },
                ],
            },
        ],
    };

    return (
        <>
            <main className={subpage.pageBody}>
                <PageHeader
                    title={post.title}
                    breadcrumbs={[
                        { name: "Home", href: "/" },
                        { name: "Blog", href: "/blog" },
                        { name: post.title, href: path },
                    ]}
                    breadcrumbsClassName={styles.breadcrumbsWrap}
                />
                <div className={subpage.pageContainer}>
                    <article className={subpage.pageContent}>
                        <p className={styles.postDate}>
                            Published <time dateTime={post.datePublished}>{formatPostDate(post.datePublished)}</time>
                            {post.dateModified !== post.datePublished && (
                                <> · Updated <time dateTime={post.dateModified}>{formatPostDate(post.dateModified)}</time></>
                            )}
                            {" "}by <Link href="/about">Nicholas Robinson</Link>
                        </p>
                        <Image
                            src={post.image.src}
                            alt={post.image.alt}
                            width={post.image.width}
                            height={post.image.height}
                            sizes="(min-width: 1100px) 800px, 100vw"
                            className={styles.postFeaturedImage}
                            priority
                        />
                        <div className={styles.postBody}>
                            <Body />
                        </div>
                        <p className={`${subpage.learnMoreLink} ${styles.backToBlog}`}>
                            <Link href="/blog">« Back to all articles</Link>
                        </p>
                    </article>
                    <aside className={subpage.form}>
                        <LeadForm />
                    </aside>
                </div>
            </main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
            />
        </>
    );
}
