import React from "react";
import Link from "next/link";
import subpage from "@/styles/Subpage.module.css";
import styles from "@/styles/Blog.module.css";
import PageHeader from "./PageHeader";
import BlogCard from "./BlogCard";
import BlogPagination from "./BlogPagination";
import { blogPagePath, getPagePosts, getTotalPages } from "@/content/blog/posts";

/** Shared body for /blog (page 1) and /blog/page/N */
const BlogIndex = ({ page }: { page: number }) => {
    const pagePosts = getPagePosts(page);
    const total = getTotalPages();

    const breadcrumbs = [
        { name: "Home", href: "/" },
        { name: "Blog", href: "/blog" },
        ...(page > 1 ? [{ name: `Page ${page}`, href: blogPagePath(page) }] : []),
    ];

    return (
        <main className={subpage.pageBody}>
            <PageHeader
                title={page > 1 ? `Blog – Page ${page}` : "Blog"}
                breadcrumbs={breadcrumbs}
                breadcrumbsClassName={styles.breadcrumbsWrap}
            />
            <div className={subpage.pageContainer}>
                <section className={`${subpage.pageContent} ${styles.indexContent}`}>
                    {pagePosts.length === 0 ? (
                        <div className={styles.emptyState}>
                            <h2>Articles Coming Soon</h2>
                            <p>
                                We&apos;re preparing practical articles on criminal charges, bail, court
                                and your rights in Ontario. In the meantime, learn about the{" "}
                                <Link href="/criminal-process">criminal process</Link> or our{" "}
                                <Link href="/practice-areas">practice areas</Link>.
                            </p>
                            <a href="tel:6473722661" className={`generalButtonLink ${styles.emptyCta}`}>
                                Free Consultation: (647) 372-2661
                            </a>
                        </div>
                    ) : (
                        <div className={styles.postGrid}>
                            {pagePosts.map((post) => (
                                <BlogCard key={post.slug} post={post} />
                            ))}
                        </div>
                    )}
                    <BlogPagination current={page} total={total} />
                </section>
            </div>
        </main>
    );
};

export default BlogIndex;
