import React from "react";
import Link from "next/link";
import Image from "next/image";
import subpage from "@/styles/Subpage.module.css";
import styles from "@/styles/Blog.module.css";
import { type BlogPost, formatPostDate } from "@/content/blog/posts";

const BlogCard = ({ post }: { post: BlogPost }) => {
    const href = `/blog/${post.slug}`;
    return (
        <article className={`${subpage.categoryCard} ${styles.postCard}`}>
            <Link href={href} className={styles.postCardImageLink} tabIndex={-1} aria-hidden="true">
                <Image
                    src={post.image.src}
                    alt={post.image.alt}
                    width={post.image.width}
                    height={post.image.height}
                    sizes="(min-width: 1100px) 410px, (min-width: 800px) 50vw, 100vw"
                    className={styles.postCardImage}
                />
            </Link>
            <div className={styles.postCardBody}>
                <h2 className={`${subpage.categoryHeading} ${styles.postCardTitle}`}>
                    <Link href={href}>{post.title}</Link>
                </h2>
                <time className={styles.postDate} dateTime={post.datePublished}>
                    {formatPostDate(post.datePublished)}
                </time>
                <p className={styles.postCardExcerpt}>{post.excerpt}</p>
                <p className={subpage.learnMoreLink}>
                    <Link href={href} aria-label={`Read more: ${post.title}`}>
                        <strong>Read more »</strong>
                    </Link>
                </p>
            </div>
        </article>
    );
};

export default BlogCard;
