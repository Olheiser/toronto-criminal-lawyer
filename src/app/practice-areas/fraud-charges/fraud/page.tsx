import React from "react"
import styles from "@/styles/Subpage.module.css";
import LeadForm from "../../../components/LeadForm";
import PageHeader from "../../../components/PageHeader";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fraud | Toronto Criminal Lawyer",
  description: "Are you facing fraud charges? Call (647) 697-2876 to receive a free consultation with a Toronto criminal lawyer.",
};

export default function Page() {
    return (
        <main className={styles.pageBody}>
            <PageHeader title="Fraud"/>
            <div className={styles.pageContainer}>
                <article className={styles.pageContent}>
                    <p className={styles.contentBreak}><strong>Fraud</strong> is defined as the act of dishonestly obtaining property, money, or valuable services by deception, falsehood, or other fraudulent means. The Criminal Code of Canada outlines fraud-related offences under <a href="https://laws-lois.justice.gc.ca/eng/acts/C-46/page-51.html#h-122424">sections 380 to 382 of the Criminal Code</a>.</p>

                    <h2>Types of Fraud</h2>
                    <p>Each type of fraud has its unique complexities and may involve different investigative authorities such as the police, Canada Revenue Agency, or provincial regulatory bodies.</p>
                    <p>There are several types of fraud, including:</p>
                    <ul className={`${styles.contentBreak} ${styles.contentList}`}>
                        <li>Identity theft,</li>
                        <li>Credit card,</li>
                        <li>Insurance,</li>
                        <li>Mortgage,</li>
                        <li>Securities,</li>
                        <li>Investment,</li>
                        <li>and tax fraud.</li>
                    </ul>

                    <h2>Importance of Legal Representation</h2>
                    <p className={styles.contentBreak}>A skilled criminal defence lawyer is essential when facing fraud charges. They can help you navigate the complexities of the legal system, protect your rights, and develop a strong defence strategy tailored to your specific case.</p>

                    <h2>Get a Free Consultation With a Skilled Criminal Defence Lawyer</h2>
                    <p className={styles.contentBreak}>We are available 24/7 to discuss your case, explore your options, and provide the guidance and support you need during this challenging time. Call <a href="tel:6476972876">(647) 697-2876</a> for a free consultation with a criminal lawyer.</p>

                </article>
                <aside className={styles.form}>
                    <LeadForm />
                </aside>
            </div>
        </main>
    )
}