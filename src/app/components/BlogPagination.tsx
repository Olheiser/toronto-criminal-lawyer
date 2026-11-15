import React from "react";
import Link from "next/link";
import styles from "@/styles/Blog.module.css";
import { blogPagePath } from "@/content/blog/posts";

/** Plain crawlable links: /blog, /blog/page/2, ... Renders nothing when there's only one page. */
const BlogPagination = ({ current, total }: { current: number; total: number }) => {
    if (total <= 1) return null;

    const pages = Array.from({ length: total }, (_, i) => i + 1);

    return (
        <nav className={styles.pagination} aria-label="Blog pages">
            {current > 1 && (
                <Link href={blogPagePath(current - 1)} rel="prev">« Newer</Link>
            )}
            {pages.map((page) =>
                page === current ? (
                    <span key={page} className={styles.pageCurrent} aria-current="page">{page}</span>
                ) : (
                    <Link key={page} href={blogPagePath(page)} aria-label={`Page ${page}`}>{page}</Link>
                )
            )}
            {current < total && (
                <Link href={blogPagePath(current + 1)} rel="next">Older »</Link>
            )}
        </nav>
    );
};

export default BlogPagination;
