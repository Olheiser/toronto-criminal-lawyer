import React from "react"
import styles from "@/styles/Subpage.module.css";
import LeadForm from "../../../components/LeadForm";
import PageHeader from "../../../components/PageHeader";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Possession of Narcotics| Toronto Criminal Lawyer",
  description: "Learn about your options when facing Possession of Narcotics charges. Call (647) 697-2876 to speak with a Toronto Criminal Lawyer.",
};

export default function Page() {
    return (
        <main className={styles.pageBody}>
            <PageHeader title="Possession of Narcotics"/>
            <div className={styles.pageContainer}>
                <article className={styles.pageContent}>
                    <p className={styles.contentBreak}>Drug offences diverge from crimes outlined in the Criminal Code because they are regulated by the <strong>Controlled Drugs and Substances Act (CDSA)</strong>. <a href="https://laws-lois.justice.gc.ca/eng/acts/c-38.8/page-1.html">Part 1 s. 4(1)</a> defines possession of narcotics as possessing a substance included in Schedule I, II, or III - except as authorized under the regulations.</p>

                    <h2>Possession of Narcotics Laws Explained</h2>
                    <p>Although the CDSA is separate from the Criminal Code, a possession of narcotics charge can result in a criminal record and severe penalties. The schedule of the drug and the quantity of the illicit substance in your possession are crucial factors in determining the progression of your case.</p>
                    <ul className={`${styles.contentList}`}>
                        <li><strong>Schedule I:</strong> Drugs include street drugs such as heroin, cocaine and fentanyl.</li>
                        <li><strong>Schedule II:</strong> Synthetic cannabinoid receptor type 1 agonists, their salts, derivatives, isomers, and salts of derivatives and isomers.</li>
                        <li><strong>Schedule III:</strong> Amphetamines, including LSD and magic mushrooms.</li>
                        <li><strong>Schedule IV:</strong> Drugs include diazepam, benzodiazepine and anabolic steroids.</li>
                        <li><strong>Schedule V:</strong> Lists analogues and derivatives of N-Phenyl-4-piperidinamine and its salts.</li>
                    </ul>
                    <p>Being discovered with a significant quantity of an illicit substance can lead to drug trafficking charges if authorities believe you intended to share or distribute the substance.</p>
                    <p className={styles.contentBreak}>Dial <a href="tel:6476972876">(647) 697-2876</a> for a free consultation with a criminal lawyer to learn about the potential penalties of your possession of narcotics charge.</p>

                    <h2>Possession of Narcotics: The Three Types of Possession</h2>
                    <h3>Personal Possession of Narcotics</h3>
                    <p className={styles.contentH3Break}>Prosecutors must demonstrate that you physically had control over the illicit substance at the time of your arrest and that you were aware of its illegal nature. For instance, if narcotics are discovered in your pocket, home, or vehicle, it falls under the category of &quot;personal possession&quot;.</p>

                    <h3>Constructive Possession of Narcotics</h3>
                    <p className={styles.contentH3Break}>Constructive possession arises when you exert some level of control over the illicit substance and transfer it into someone else&apos;s possession. An example of this is when you possess a key to a locker that contains a scheduled substance.</p>

                    <h3>Joint Possession of Narcotics</h3>
                    <p className={styles.contentBreak}>Joint possession occurs when multiple individuals have the same substance and each of them exercises some degree of control over it.</p>

                    <h2>Possession of Narcotics Sentencing</h2>
                    <p>Possession of narcotics is treated as a hybrid offence, meaning that it can be dealt with summarily or by way of indictment. Summary offences are designated for less severe crimes where indictable offences have more severe penalties.</p>
                    <p>Factors that affect possession of narcotics sentencing:</p>
                    <ul className={`${styles.contentList}`}>
                        <li>Prior criminal record</li>
                        <li>Quantity of illicit substances</li>
                        <li>Schedule of narcotic(s) involved</li>
                    </ul>
                    <p className={styles.contentBreak}>Call <a href="tel:6476972876">(647) 697-2876</a> to consult a criminal lawyer if you have questions about sentencing and how it relates to your possession of narcotics charge.</p>

                    <h2>Don&apos;t Face Your Possession of Narcotics Charge Alone</h2>
                    <p className={styles.contentBreak}>An experienced criminal defence lawyer is essential when facing a possession of narcotics charge. They can help you navigate the complexities of the legal system, protect your rights, and develop a strong defence strategy tailored to your specific case.</p>

                    <h2>Need a Lawyer? Get a Free Consultation With a Skilled Defence Lawyer</h2>
                    <p>Don&apos;t hesitate to reach out to us if you have been charged with possession of narcotics. Call <a href="tel:6476972876">(647) 697-2876</a> and a skilled defence lawyer will discuss your case with you and explore your options.</p>

                </article>
                <aside className={styles.form}>
                    <LeadForm />
                </aside>
            </div>
        </main>
    )
}