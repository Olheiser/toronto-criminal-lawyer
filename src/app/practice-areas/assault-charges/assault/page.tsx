import React from "react"
import styles from "@/styles/Subpage.module.css";
import LeadForm from "../../../components/LeadForm";
import PageHeader from "../../../components/PageHeader";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Assault | Toronto Criminal Lawyer",
  description: "Have you been charged with assault? Call (647) 697-2876 to receive a free consultation with a Toronto criminal lawyer.",
};

export default function Page() {
    return (
        <main className={styles.pageBody}>
            <PageHeader title="Assault"/>
            <div className={styles.pageContainer}>
                <article className={styles.pageContent}>
                    <p className={styles.contentBreak}><strong>Assault</strong> is a fundamental criminal offence in Canada involving the application or threat of force without consent. This page provides an overview of the offence, potential penalties, and the importance of seeking legal representation if charged.</p>

                    <h2>Assault: Criminal Code Definition</h2>
                    <p><strong>Assault</strong> is defined under <a href="https://laws-lois.justice.gc.ca/eng/acts/c-46/section-265.html">Section 265 of the Criminal Code.</a></p>
                    <p><em>265 (1) A person commits an assault when</em></p>
                    <p><em>(a) without the consent of another person, he applies force intentionally to that other person, directly or indirectly;</em></p>
                    <p><em>(b) he attempts or threatens, by an act or a gesture, to apply force to another person, if he has, or causes that other person to believe on reasonable grounds that he has, present ability to effect his purpose; or</em></p>
                    <p><em>(c) while openly wearing or carrying a weapon or an imitation thereof, he accosts or impedes another person or begs.</em></p>
                    <p className={styles.contentBreak}><em>(2) This section applies to all forms of assault, including sexual assault, sexual assault with a weapon, threats to a third party or causing bodily harm and aggravated sexual assault.</em></p>

                    <h2>Elements of Assault</h2>
                    <p>To prove assault, the Crown must establish:</p>
                    <ul className={`${styles.contentBreak} ${styles.contentList}`}>
                        <li>The identity of the accused.</li>
                        <li>The date and location of the incident.</li>
                        <li>That there was intentional application of force or an attempt/threat to apply force.</li>
                        <li>That the complainant did not consent to the action.</li>
                    </ul>

                    <h2>Potential Penalties for Assault</h2>
                    <p>Penalties for assault can vary based on the circumstances and severity of the offence:</p>
                    <ul className={styles.contentBreak}>
                        <li><strong>Summary Conviction:</strong> Up to 6 months in prison and/or a fine of up to $5,000.</li>
                        <li><strong>Indictable Offence:</strong> Up to 5 years in prison.</li>
                    </ul>

                    <h2>Defences Available for Assault</h2>
                    <p>Possible defences include:</p>
                    <ul className={`${styles.contentBreak} ${styles.contentList}`}>
                        <li>Self-defence</li>
                        <li>Consent</li>
                        <li>Lack of intent</li>
                        <li>Mistaken identity</li>
                        <li>Fabrication or false accusation</li>
                    </ul>

                    <h2>Speak to a Criminal Lawyer Today</h2>
                    <p>A skilled criminal lawyer can provide essential guidance, challenge evidence, and develop a robust defence strategy. They ensure your rights are protected and work towards the best possible outcome for your case. Call <a href="tel:6476972876">(647) 697-2876</a> to receive a free consultation with a criminal lawyer.</p>
                </article>
                <aside className={styles.form}>
                    <LeadForm />
                </aside>
            </div>
        </main>
    )
}