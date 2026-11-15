import React from 'react';
//import Link from 'next/link';
import styles from "@/styles/PageHeader.module.css";
import Breadcrumbs, { type Breadcrumb } from './Breadcrumbs';

interface BreadcrumbProps {
    title: string,
    //breadcrumbs: [],
    /** Optional explicit breadcrumbs (blog pages). Omit to derive from the URL. */
    breadcrumbs?: Breadcrumb[],
    breadcrumbsClassName?: string,
}

const PageHeader = ({ title, breadcrumbs, breadcrumbsClassName }: BreadcrumbProps) => {
    return (
        <section className={styles.pageHeader}>
            <div className={styles.pageHeaderContainer}>
                    <h1 className={styles.pageTitle}>{title}</h1>
                    <hr className={styles.pageHeaderDivider} />
                    <Breadcrumbs items={breadcrumbs} className={breadcrumbsClassName} />
            </div>
        </section>
    )
}

export default PageHeader;
