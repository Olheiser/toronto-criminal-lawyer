import React from "react"
import styles from "@/styles/Subpage.module.css";
import LeadForm from "../components/LeadForm";
import PageHeader from "../components/PageHeader";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Practice Areas | Toronto Criminal Lawyer",
  description: "Have you been charged with a criminal offence in Toronto? Click here to learn about the extent of our criminal defence services.",
};

export default function Page() {
    return (
    <main className={styles.pageBody}>
        <PageHeader title="Practice Areas"/>
        <div className={styles.pageContainer}>
            <article className={styles.pageContent}>
                <h2>Driving Offences</h2>
                <p>Driving offences encompass a range of illegal activities related to the operation of motor vehicles. Individuals convicted of a driving offence may face significant consequences, including driving prohibitions, fines, or even imprisonment.</p>
                <p><strong>Driving Offences Include</strong></p>
                <ul className={`${styles.contentList} ${styles.contentBreak}`}>
                    <li><Link href="/practice-areas/driving-offences/impaired-driving">Impaired Driving</Link></li>
                    <li>Refusing a Breathalyzer or Drug Test</li>
                    <li>Driving Over .08</li>
                    <li>Dangerous Driving</li>
                    <li>Failure to Stop at an Accident</li>
                    <li>Operation While Prohibited</li>
                    <li>Flight From a Peace Officer</li>
                </ul>

                <h2>Sexual Offences</h2>
                <p>Sexual offences cover a spectrum of illegal acts involving non-consensual sexual activities and exploitation. Convictions can result in severe penalties, including imprisonment and mandatory registration as a sex offender.</p>
                <p><strong>Sexual Offences Include</strong></p>
                <ul className={`${styles.contentList} ${styles.contentBreak}`}>
                    <li><Link href="/practice-areas/sexual-offences/sexual-assault">Sexual Assault</Link></li>
                    <li>Soliciting</li>
                    <li>Sexual Interference</li>
                    <li>Invitation to Sexual Touching</li>
                    <li>Sexual Exploitation</li>
                    <li>Procuring Sexual Services</li>
                    <li>Voyeurism</li>
                    <li>Obscenity</li>
                </ul>

                <h2>Assault Charges</h2>
                <p>Assault charges relate to acts of physical violence or threats against others. Depending on the severity, consequences can include restraining orders, fines, and prison terms, highlighting the importance of personal security and legal protection against harm.</p>
                <p><strong>Assault Charges Include</strong></p>
                <ul className={`${styles.contentList} ${styles.contentBreak}`}>
                    <li><Link href="/practice-areas/assault-charges/assault">Assault</Link></li>
                    <li>Uttering Threats</li>
                    <li>Aggravated Assault</li>
                    <li>Assault with a Weapon</li>
                    <li>Spousal Assault</li>
                    <li>Assaulting a Peace Officer</li>
                    <li>Assault Causing Bodily Harm</li>
                </ul>

                <h2>Drug Charges</h2>
                <p>Drug charges range from possession to trafficking of illegal substances. Convictions often lead to hefty fines, mandatory treatment programs, or imprisonment, underlining the emphasis on public health and safety.</p>
                <p><strong>Drug Charges Include</strong></p>
                <ul className={`${styles.contentList} ${styles.contentBreak}`}>
                    <li><Link href="/practice-areas/drug-charges/possession-of-narcotics">Possession of Narcotics</Link></li>
                    <li>Possession for the Purpose of Trafficking</li>
                    <li>Drug Trafficking</li>
                    <li>Drug Production</li>
                    <li>Importing and Exporting Scheduled Substances</li>
                </ul>

                <h2>Property Crimes</h2>
                <p>Property crimes encompass offences such as burglary, theft, and vandalism, targeting tangible assets. Penalties vary widely but can include fines, community service, and jail time, aimed at compensating loss and deterring future violations.</p>
                <p><strong>Property Crimes Include</strong></p>
                <ul className={`${styles.contentList} ${styles.contentBreak}`}>
                    <li><Link href="/practice-areas/property-crimes/robbery">Robbery</Link></li>
                    <li>Theft</li>
                    <li>Break and Enter</li>
                    <li>Extortion</li>
                    <li>Mischief</li>
                    <li>Arson</li>
                </ul>

                <h2>Fraud Charges</h2>
                <p>Fraud charges apply to deceitful activities intended to result in financial or personal gain. Those found guilty may face substantial fines, restitution orders, and incarceration, reflecting the seriousness of undermining trust in financial and personal transactions.</p>
                <p><strong>Fraud Charges Include</strong></p>
                <ul className={`${styles.contentList} ${styles.contentBreak}`}>
                    <li><Link href="/practice-areas/fraud-charges/fraud">Fraud</Link></li>
                    <li>Counterfeiting</li>
                    <li>Identity Theft</li>
                    <li>Forgery</li>
                </ul>

                <h2>We also Defend the Following Criminal Charges</h2>
                <ul className={`${styles.contentList}`}>
                    <li><Link href="/practice-areas/criminal-harassment">Criminal Harassment</Link></li>
                    <li>Homicide</li>
                    <li>Highway Traffic Offences</li>
                    <li><Link href="/practice-areas/young-offenders">Young Offender Crimes</Link></li>
                </ul>
            </article>
            <aside className={styles.form}>
                <LeadForm />
            </aside>
        </div>
    </main>
    )
}