import React from "react"
import styles from "@/styles/Subpage.module.css";
import LeadForm from "../../../components/LeadForm";
import PageHeader from "../../../components/PageHeader";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sexual Assault | Toronto Criminal Lawyer",
  description: "Have you been charged with sexual assault? Call (647) 697-2876 to receive a free consultation with a Toronto criminal defence lawyer.",
};

export default function Page() {
    return (
        <main className={styles.pageBody}>
            <PageHeader title="Sexual Assault"/>
            <div className={styles.pageContainer}>
                <article className={styles.pageContent}>
                    <p className={styles.contentBreak}><strong>Sexual assault</strong> involves any non-consensual touching of a sexual nature. Understanding the legal and personal implications of such charges is crucial for anyone involved.</p>

                    <h2>Sexual Assault: Criminal Code Definition</h2>
                    <p><strong>Sexual assault</strong> is defined under <a href="https://laws-lois.justice.gc.ca/eng/acts/c-46/section-271.html">Section 271 of the Criminal Code.</a></p>
                    <p><em>271 Everyone who commits a sexual assault is guilty of</em></p>
                    <p><em>(a) an indictable offence and is liable to imprisonment for a term of not more than 10 years or, if the complainant is under the age of 16 years, to imprisonment for a term of not more than 14 years and to a minimum punishment of imprisonment for a term of one year; or</em></p>
                    <p className={styles.contentBreak}><em>(b) an offence punishable on summary conviction and is liable to imprisonment for a term of not more than 18 months or, if the complainant is under the age of 16 years, to imprisonment for a term of not more than two years less a day and to a minimum punishment of imprisonment for a term of six months.</em></p>

                    <h2>Elements of Sexual Assault</h2>
                    <ul className={`${styles.contentBreak} ${styles.contentList}`}>
                        <li>The identity of the accused.</li>
                        <li>The date and location of the incident.</li>
                        <li>That there was intentional touching.</li>
                        <li>That the touching was of a sexual nature.</li>
                        <li>That the complainant did not consent to the touching.</li>
                        <li>That the accused knew or was reckless or willfully blind to the lack of consent.</li>
                    </ul>

                    <h2>Potential Penalties for Sexual Assault</h2>
                    <ul className={`${styles.contentBreak} ${styles.contentList}`}>
                        <li><strong>Summary Conviction:</strong> Up to 18 months in prison and/or a fine.</li>
                        <li><strong>Indictable Offence:</strong> Up to 10 years in prison.</li>
                        <li><strong>Aggravated Sexual Assault:</strong> Up to life imprisonment.</li>
                    </ul>

                    <h2>Defences Available for Sexual Assault</h2>
                    <ul className={`${styles.contentBreak} ${styles.contentList}`}>
                        <li>Consent</li>
                        <li>Mistaken belief in consent</li>
                        <li>Alibi</li>
                        <li>Insufficient evidence</li>
                        <li>Charter violations</li>
                    </ul>

                    <h2>Speak to a Criminal Lawyer Today</h2>
                    <p>If you are facing charges of sexual assault, securing representation from a knowledgeable criminal lawyer is crucial. They can defend your rights and navigate the complexities of the legal system. Call <a href="tel:6476972876">(647) 697-2876</a> for a free consultation today.</p>

                </article>
                <aside className={styles.form}>
                    <LeadForm />
                </aside>
            </div>
        </main>
    )
}