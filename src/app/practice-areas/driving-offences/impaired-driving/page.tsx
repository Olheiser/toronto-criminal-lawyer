import React from "react"
import styles from "@/styles/Subpage.module.css";
import LeadForm from "../../../components/LeadForm";
import PageHeader from "../../../components/PageHeader";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impaired Driving | Toronto Criminal Lawyer",
  description: "Have you been charged with impaired driving? Call (647) 697-2876 to receive a free consultation with a Toronto criminal lawyer.",
};

export default function Page() {
    return (
        <main className={styles.pageBody}>
            <PageHeader title="Impaired Driving"/>
            <div className={styles.pageContainer}>
                <article className={styles.pageContent}>
                    <p className={styles.contentBreak}><strong>Impaired driving</strong> is a serious criminal offence that poses significant risks to public safety. It involves operating a motor vehicle while under the influence of alcohol or drugs, which can severely impair one&apos;s ability to drive safely.</p>

                    <h2>Impaired Driving: Criminal Code Definition</h2>
                    <p><strong>Impaired driving</strong> is defined under <a href="https://laws-lois.justice.gc.ca/eng/acts/c-46/section-320.14.html">Section 320.14 of the Criminal Code.</a></p>
                    <p><em>320.14 (1) Everyone commits an offence who</em></p>
                    <p><em>(a) operates a conveyance while the person&apos;s ability to operate it is impaired to any degree by alcohol or a drug or by a combination of alcohol and a drug;</em></p>
                    <p><em>(b) subject to subsection (5), has, within two hours after ceasing to operate a conveyance, a blood alcohol concentration that is equal to or exceeds 80 mg of alcohol in 100 mL of blood;</em></p>
                    <p><em>(c) subject to subsection (6), has, within two hours after ceasing to operate a conveyance, a blood drug concentration that is equal to or exceeds the blood drug concentration for the drug that is prescribed by regulation; or</em></p>
                    <p className={styles.contentBreak}><em>(d) subject to subsection (7), has, within two hours after ceasing to operate a conveyance, a blood alcohol concentration and a blood drug concentration that is equal to or exceeds the blood alcohol concentration and the blood drug concentration for the drug that are prescribed by regulation for instances where alcohol and that drug are combined.</em></p>

                    <h2>Elements of Impaired Driving</h2>
                    <p>To prove impaired driving, the Crown must establish:</p>
                    <ul className={`${styles.contentBreak} ${styles.contentList}`}>
                        <li>The identity of the accused.</li>
                        <li>The date and location of the incident.</li>
                        <li>That the accused was operating a vehicle.</li>
                        <li>That the accused&apos;s ability to operate the vehicle was impaired by alcohol or drugs.</li>
                    </ul>

                    <h2>Potential Penalties for Impaired Driving</h2>
                    <p>Penalties for impaired driving vary depending on the severity of the offence and whether it is a first or subsequent offence:</p>
                    <ul className={`${styles.contentBreak} ${styles.contentList}`}>
                        <li><strong>First Offence:</strong> Minimum fine of $1,000.</li>
                        <li><strong>Second Offence:</strong> Minimum 30 days imprisonment.</li>
                        <li><strong>Subsequent Offences:</strong> Minimum 120 days imprisonment.</li>
                        <li><strong>Indictable Offence:</strong> Up to 10 years in prison.</li>
                    </ul>

                    <h2>Defences Available for Impaired Driving</h2>
                    <p>Possible defences against impaired driving charges include:</p>
                    <ul className={`${styles.contentBreak} ${styles.contentList}`}>
                        <li><strong>Improper Stop or Arrest:</strong> Challenging the legality of the vehicle stop or the arrest procedures.</li>
                        <li><strong>Faulty Breathalyzer or Drug Test:</strong> Demonstrating inaccuracies or errors in the administration or calibration of tests.</li>
                        <li><strong>Medical Conditions:</strong> Arguing that symptoms attributed to impairment were actually due to a medical condition.</li>
                        <li><strong>No Impairment:</strong> Presenting evidence that the accused was not impaired at the time of driving.</li>
                    </ul>

                    <h2>Speak to a Criminal Lawyer Today</h2>
                    <p>Facing impaired driving charges requires expert guidance to navigate the complexities of the legal system. A skilled criminal lawyer can challenge the evidence, develop a robust defence strategy, and ensure your rights are protected throughout the process. Call <a href="tel:6476972876">(647) 697-2876</a> to receive a free consultation with a criminal lawyer today.</p>

                </article>
                <aside className={styles.form}>
                    <LeadForm />
                </aside>
            </div>
        </main>
    )
}