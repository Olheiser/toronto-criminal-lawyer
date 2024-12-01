import React from "react"
import styles from "@/styles/Subpage.module.css";
import LeadForm from "../../components/LeadForm";
import PageHeader from "../../components/PageHeader";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Young Offenders | Toronto Criminal Lawyer",
  description: "Are you the parent of a young offender? Call (647) 697-2876 to receive a free consultation with a criminal lawyer in Toronto.",
};

export default function Page() {
    return (
        <main className={styles.pageBody}>
            <PageHeader title="Young Offenders"/>
            <div className={styles.pageContainer}>
                <article className={styles.pageContent}>
                    <p className={styles.contentBreak}>Young offenders are individuals aged 12 to 17 who are accused of committing a crime. The <a href="https://laws-lois.justice.gc.ca/eng/acts/y-1.5/">Youth Criminal Justice Act (YCJA)</a> ensures that the rights of young offenders are upheld by governing the legal process.</p>

                    <h2>Rights of Young Offenders</h2>
                    <p>Under the YCJA, young offenders have specific rights and protections that differ from those of adult offenders. These rights include:</p>
                    <ul className={`${styles.contentList}`}>
                        <li><strong>Age of Criminal Responsibility:</strong> The YCJA applies to young persons who are between the ages of 12 and 17 years old.</li>
                        <li><strong>Youth Justice Court:</strong> The YCJA provides a separate youth justice court system which has different procedures and rules than adult criminal courts.</li>
                        <li><strong>Privacy Protection:</strong> The identity of young persons accused of a crime is protected under the YCJA. This means that their name cannot be published in the media, and their court records are sealed.</li>
                        <li><strong>Custody and Detention:</strong> Young persons can only be held in custody or detention for a limited period, and the conditions of their confinement must be appropriate for their age and developmental stage.</li>
                    </ul>
                    <p className={styles.contentBreak}>The YCJA recognizes that young people who commit crimes need guidance, support, and treatment to prevent them from becoming entrenched in the criminal justice system. For this reason, the primary focus of the legal process for young offenders is on rehabilitation and reintegration.</p>

                    <h2>Importance of Legal Representation</h2>
                    <p className={styles.contentBreak}>Hiring an experienced criminal lawyer who specializes in young offender cases is crucial to ensuring that your child&apos;s rights are protected and that they receive the best possible outcome.</p>

                    <h2>Need a Lawyer? Get a Free Consultation With a Skilled Defence Attorney</h2>
                    <p>We are available 24/7 to discuss your case, explore your options, and provide the guidance and support you need during this challenging time. If your child has been accused of a crime, don&apos;t hesitate to call us at <a href="tel:6476972876">(647) 697-2876</a>.</p>

                </article>
                <aside className={styles.form}>
                    <LeadForm />
                </aside>
            </div>
        </main>
    )
}