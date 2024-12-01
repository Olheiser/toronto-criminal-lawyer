import React from "react"
import styles from "@/styles/Subpage.module.css";
import LeadForm from "../../components/LeadForm";
import PageHeader from "../../components/PageHeader";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Property Crimes | Toronto Criminal Lawyer",
  description: "We provide criminal defence services for all property-related criminal charges. Click here to learn more.",
};

export default function Page() {
    return (
       <main className={styles.pageBody}>
            <PageHeader title="Property Crimes"/>
            <div className={`${styles.categoryContainer} ${styles.pageContainer}`}>
                <section className={`${styles.pageContent} ${styles.categoryBody}`}>
                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Theft</h2>
                        <p className={styles.categoryCopy}><strong>Theft</strong> is the act of taking someone else&apos;s property without their consent, unless you genuinely believe that the property is rightfully yours. It does not matter if you only intend to possess the item temporarily. This offence also includes the act of converting someone else&apos;s property for your own benefit.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong>Theft</strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}><Link href="/practice-areas/property-crimes/robbery">Robbery</Link></h2>
                        <p className={styles.categoryCopy}><strong><Link href="/practice-areas/property-crimes/robbery">Robbery</Link></strong> is defined under <a href="https://laws-lois.justice.gc.ca/eng/acts/c-46/section-343.html">Section 343 of the Canadian Criminal Code</a> as a theft committed with violence or threats of violence. This sets robbery apart from other property crimes such as theft and break and enter (burglary).</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong><Link href="/practice-areas/property-crimes/robbery">Robbery</Link></strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Break and Enter</h2>
                        <p className={styles.categoryCopy}><strong>Break and Enter</strong> is defined as entering a residence, business, or other property without permission in order to commit a crime. Forced entry is not required. Even if there is no theft, harm to occupants, or damage to property, you can still face charges if you did not have permission to be there.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong>Break and Enter</strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Extortion</h2>
                        <p className={styles.categoryCopy}><strong>Extortion</strong> is a crime that involves using threats, accusations, menaces, or violence to force someone into surrendering something against their will. This could include money, sexual favours, promises, or tangible property.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong>Extortion</strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Mischief</h2>
                        <p className={styles.categoryCopy}><strong>Mischief</strong> is the intentional destruction of property, rendering it dangerous or useless to others. You can also be charged with mischief if you obstruct or interfere with others&apos; lawful use and enjoyment of property.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong>Mischief</strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Arson</h2>
                        <p className={styles.categoryCopy}><strong>Arson</strong> is the offence of intentionally or recklessly causing damage by fire or explosion to any type of property or structure. The Criminal Code outlines five different types of arson offences: disregard for human life, own property, damage to property, arson for fraudulent purposes, and arson by negligence.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong>Arson</strong>
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