import React from "react"
import styles from "@/styles/Subpage.module.css";
import LeadForm from "../../components/LeadForm";
import PageHeader from "../../components/PageHeader";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drug Charges | Toronto Criminal Lawyer",
  description: "Facing drug charges in Toronto? Click here to learn more about our criminal defence services.",
};

export default function Page() {
    return (
        <main className={styles.pageBody}>
            <PageHeader title="Drug Charges"/>
            <div className={`${styles.categoryContainer} ${styles.pageContainer}`}>
                <section className={`${styles.pageContent} ${styles.categoryBody}`}>
                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}><Link href="/practice-areas/drug-charges/possession-of-narcotics">Possession of Narcotics</Link></h2>
                        <p className={styles.categoryCopy}><strong><Link href="/practice-areas/drug-charges/possession-of-narcotics">Possession of Narcotics</Link></strong> is legally defined in <a href="https://laws-lois.justice.gc.ca/eng/acts/c-38.8/page-1.html#:~:text=PART%20IOffences%20and%20Punishment&text=4%20(1)%20Except%20as%20authorized,Schedule%20I%2C%20II%20or%20III.">Part 1, section 4(1)</a> of the CDSA as the act of having a substance listed in Schedule I, II, or III, unless authorized by regulations. To establish guilt, it is crucial for the prosecution to demonstrate that the accused had knowledge of the narcotic substance.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong><Link href="/practice-areas/drug-charges/possession-of-narcotics">Possession of Narcotics</Link></strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Possession for the Purpose of Trafficking</h2>
                        <p className={styles.categoryCopy}><strong>Possession for the Purpose of Trafficking</strong>, as outlined by the CDSA, involves having a substance listed in Schedule I, II, III, IV, or V with the intention of engaging in trafficking activities. The quantity of the substance found in the accused's possession is used to distinguish between possession for personal use and possession for the purpose of trafficking. The specific threshold amounts vary depending on the substance involved.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong>Possession for the Purpose of Trafficking</strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Drug Trafficking</h2>
                        <p className={styles.categoryCopy}><strong>Drug Trafficking</strong> refers to the act of trafficking a substance listed in Schedule I, II, III, IV, or V, or representing or claiming to possess such a substance. It is possible to be charged with drug trafficking even without being caught in the act of selling or distributing drugs. Mere possession of narcotics with the intent to sell or distribute can result in a drug trafficking charge.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong>Drug Trafficking</strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Drug Production</h2>
                        <p className={styles.categoryCopy}>The production of a substance listed in Schedule I, II, III, IV, or V without authorization is a criminal offence under <a href="https://laws-lois.justice.gc.ca/eng/acts/c-38.8/section-7.html">section 7(2) of the CDSA</a>. <strong>Drug production</strong> includes activities such as manufacturing, synthesizing, or altering the chemical or physical properties of the substance. It also encompasses cultivating, propagating, or harvesting the substance or any living organism from which the substance can be extracted or obtained by any other means.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong>Drug Production</strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Importing and Exporting Scheduled Substances</h2>
                        <p className={styles.categoryCopy}><strong>Importing and Exporting Scheduled Substances</strong> into Canada or exporting a scheduled substance from Canada, unless authorized by regulations, is a criminal offence.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong>Importing and Exporting Scheduled Substances</strong>
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