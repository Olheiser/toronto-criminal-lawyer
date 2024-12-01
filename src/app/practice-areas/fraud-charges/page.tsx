import React from "react"
import styles from "@/styles/Subpage.module.css";
import LeadForm from "../../components/LeadForm";
import PageHeader from "../../components/PageHeader";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fraud Charges | Toronto Criminal Lawyer",
  description: "Facing fraud charges in Toronto? Click here to learn more about our criminal defence services.",
};

export default function Page() {
    return (
        <main className={styles.pageBody}>
            <PageHeader title="Fraud Charges"/>
            <div className={`${styles.categoryContainer} ${styles.pageContainer}`}>
                <section className={`${styles.pageContent} ${styles.categoryBody}`}>
                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}><Link href="/practice-areas/fraud-charges/fraud">Fraud</Link></h2>
                        <p className={styles.categoryCopy}><strong><Link href="/practice-areas/fraud-charges/fraud">Fraud</Link></strong> is the deliberate use of deceit, falsehood, or other fraudulent methods to deceive the public or individuals and gain personal benefit in terms of money or property. Examples of fraudulent activities include identity theft, tax evasion, insurance scams, telemarketing fraud, and embezzlement.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong><Link href="/practice-areas/fraud-charges/fraud">Fraud</Link></strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Counterfeiting</h2>
                        <p className={styles.categoryCopy}><strong>Counterfeiting</strong> is committed when an individual refuses or fails to provide a breath or bodily fluid sample for alcohol or drug testing when requested by a law enforcement officer pursuant to <a href="https://laws-lois.justice.gc.ca/eng/acts/c-46/section-320.2.html">Sections 320.27 or 320.28 of the Criminal Code.</a></p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong>Counterfeiting</strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Forgery</h2>
                        <p className={styles.categoryCopy}><strong>Forgery</strong> occurs when someone knowingly creates a false document with the intent to pass it off as genuine. This act is prohibited under <a href="https://laws-lois.justice.gc.ca/eng/acts/c-46/section-366.html">section 366 of the Criminal Code</a>, which covers actions such as adding, altering, or removing material from an authentic document. Examples of forgery include signing a fake signature on a check or creating fraudulent letters for insurance or healthcare purposes.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong>Forgery</strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Identity Theft</h2>
                        <p className={styles.categoryCopy}><strong>Identity Theft</strong> refers to the act of obtaining or possessing another person&apos;s personal identity information with the intention of committing a serious offence that involves fraud, deceit, or falsehood as an integral part of the crime.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong>Identity Theft</strong>
                        </p>
                    </article>
                </section>
                <aside className={styles.form}>
                    <LeadForm />
                </aside>
            </div>
        </main>
    )
}