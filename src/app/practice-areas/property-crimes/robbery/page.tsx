import React from "react"
import styles from "@/styles/Subpage.module.css";
import LeadForm from "../../../components/LeadForm";
import PageHeader from "../../../components/PageHeader";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Robbery | Toronto Criminal Lawyer",
  description: "Have you been charged with robbery? Call (647) 697-2876 to receive a complimentary consultation with a Toronto criminal lawyer.",
};

export default function Page() {
    return (
        <main className={styles.pageBody}>
            <PageHeader title="Robbery"/>
            <div className={styles.pageContainer}>
                <article className={styles.pageContent}>
                <p className={styles.contentBreak}><strong>Robbery</strong> is defined under <a href="https://laws-lois.justice.gc.ca/eng/acts/C-46/section-343.html">Section 343 of the Canadian Criminal Code</a> as a theft committed with violence or threats of violence. This distinguishes robbery from other property crimes like theft and break and enter (burglary).</p>

                <h2>Types of Robbery Charges</h2>
                <ul className={`${styles.contentBreak} ${styles.contentList}`}>
                    <li><strong>Robbery:</strong> Theft that is committed using violence or threats of violence.</li>
                    <li><strong>Armed Robbery:</strong> Robberies committed with the use of a deadly weapon. This can include everyday objects that can cause serious harm such as a brick or baseball bat.</li>
                    <li><strong>Aggravated Robbery:</strong> When the accused causes non-fleeting bodily harm to the victim during the robbery.</li>
                </ul>

                <h2>Aggravating Factors</h2>
                <p>Aggravating factors can lead to more severe charges or increased penalties. Some common aggravating factors include:</p>
                <ul className={`${styles.contentBreak} ${styles.contentList}`}>
                    <li>Use of a weapon, particularly a firearm.</li>
                    <li>Causing bodily harm or death to the victim.</li>
                    <li>Acting as part of a group or criminal organisation.</li>
                    <li>Prior criminal convictions, especially for similar offences.</li>
                    <li>Targeting a vulnerable victim, such as a child or an elderly person.</li>
                </ul>

                <h2>Importance of Legal Representation</h2>
                <p className={styles.contentBreak}>A skilled criminal defence lawyer is essential when facing robbery charges. They can help you navigate the complexities of the legal system, protect your rights, and develop a strong defence strategy tailored to your specific case.</p>

                <h2>Get a Free Consultation</h2>
                <p className={styles.contentBreak}>We are available 24/7 to discuss your case, explore your options, and provide the guidance and support you need during this challenging time. Call <a href="tel:6476972876">(647) 697-2876</a> for a free consultation with a criminal lawyer today.</p>

                </article>
                <aside className={styles.form}>
                    <LeadForm />
                </aside>
            </div>
        </main>
    )
}