import React from "react"
import styles from "@/styles/Subpage.module.css";
import LeadForm from "../../components/LeadForm";
import PageHeader from "../../components/PageHeader";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Driving Offences | Toronto Criminal Lawyer",
  description: "Are you facing criminal charges stemming from a driving offence in Toronto? Learn about our criminal defence services.",
};

export default function Page() {
    return (
        <main className={styles.pageBody}>
            <PageHeader title="Driving Offences"/>
            <div className={`${styles.categoryContainer} ${styles.pageContainer}`}>
                <section className={`${styles.pageContent} ${styles.categoryBody}`}>
                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}><Link href="/practice-areas/driving-offences/impaired-driving">Impaired Driving</Link></h2>
                        <p className={styles.categoryCopy}><strong><Link href="/practice-areas/driving-offences/impaired-driving">Impaired Driving</Link></strong> refers to the operation of a motor vehicle while impaired by alcohol, drugs, or both. It's a charge based on evidence (indicia) of impairment, like irregular driving patterns, blood shot eyes, coordination issues or slurred speech.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong><Link href="/practice-areas/driving-offences/impaired-driving">Impaired Driving</Link></strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Refusing a Breathalyzer or Drug Test</h2>
                        <p className={styles.categoryCopy}><strong><span className={styles.learnMoreLink}>Refusing a Breathalyzer or Drug Test</span></strong> is committed when an individual refuses or fails to provide a breath or bodily fluid sample for alcohol or drug testing when requested by a law enforcement officer pursuant to Sections 320.27 or 320.28 of the Criminal Code.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong><span className={styles.learnMoreLink}>Refusing a Breathalyzer or Drug Test</span></strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Driving Over .08</h2>
                        <p className={styles.categoryCopy}>It is a criminal offence to have a blood alcohol concentration (BAC) of .08 percent or higher within 2 hours of operating a conveyance.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong><span className={styles.learnMoreLink}>Driving Over .08</span></strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Dangerous Driving</h2>
                        <p className={styles.categoryCopy}>Operating a conveyance in a manner that endangers the public given the circumstances (e.g., traffic, road conditions, visibility). Reckless driving, excessive speeding, racing, and ignoring traffic signs or signals are examples of dangerous driving.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong><span className={styles.learnMoreLink}>Dangerous Driving</span></strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Failure to Stop at an Accident</h2>
                        <p className={styles.categoryCopy}><strong><span className={styles.learnMoreLink}>Failure to Stop at an Accident</span></strong> involves knowingly or recklessly driving a vehicle involved in an accident and failing to stop, provide identification, and offer assistance when needed, without a valid reason.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong><span className={styles.learnMoreLink}>Failure to Stop at an Accident</span></strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Operation While Prohibited</h2>
                        <p className={styles.categoryCopy}>Operating a vehicle while legally prohibited from doing so, due to a directive under any legal restriction under federal or provincial law related to a conviction or discharge.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong><span className={styles.learnMoreLink}>Operation While Prohibited</span></strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Flight From a Peace Officer</h2>
                        <p className={styles.categoryCopy}>The <strong><span className={styles.learnMoreLink}>Flight From a Peace Officer</span></strong> charge is issued when an individual operates a vehicle or vessel while being pursued by a peace officer and does not stop as soon as it's reasonable to do so without a valid reason.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong><span className={styles.learnMoreLink}>Flight From a Peace Officer</span></strong>
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