import React from "react"
import styles from "@/styles/Subpage.module.css";
import LeadForm from "../../components/LeadForm";
import PageHeader from "../../components/PageHeader";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sexual Offences | Toronto Criminal Lawyer",
  description: "Confronted with criminal charges stemming from a sexual offence? Click here to learn how to proceed.",
};

export default function Page() {
    return (
        
        
        <main className={styles.pageBody}>
            <PageHeader title="Sexual Offences"/>
            <div className={`${styles.categoryContainer} ${styles.pageContainer}`}>
                <section className={`${styles.pageContent} ${styles.categoryBody}`}>
                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}><Link href="/practice-areas/sexual-offences/sexual-assault">Sexual Assault</Link></h2>
                        <p className={styles.categoryCopy}><strong><Link href="/practice-areas/sexual-offences/sexual-assault">Sexual Assault</Link></strong> is defined by the Criminal Code of Canada as any form of non-consensual sexual contact or activity that violates the victim's sexual integrity, regardless of the specific body part involved.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong><Link href="/practice-areas/sexual-offences/sexual-assault">Sexual Assault</Link></strong>
                        </p>
                    </article>
                    
                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Soliciting</h2>
                        <p className={styles.categoryCopy}><strong>Soliciting</strong> encompasses two distinct charges: obstructing or impeding traffic and communicating for the purpose of obtaining sexual services in exchange for something of value. It is illegal to disrupt the flow of pedestrian or vehicular traffic in public places or visible areas, with the intention of offering, providing, or procuring sexual services for consideration.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong>Soliciting</strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Sexual Interference</h2>
                        <p className={styles.categoryCopy}><strong>Sexual Interference</strong> refers to the act of touching, either directly or indirectly with any part of the body or an object, the body of a person under the age of 16 for a sexual purpose.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong>Sexual Interference</strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Invitation to Sexual Touching</h2>
                        <p className={styles.categoryCopy}><strong>Invitation to Sexual Touching</strong> is a criminal offence that occurs when a person under the age of 16 is encouraged, counselled, or incited to touch, either directly or indirectly with any part of the body or an object, the body of any person, including themselves, for a sexual purpose.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong>Invitation to Sexual Touching</strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Sexual Exploitation</h2>
                        <p className={styles.categoryCopy}>Under <a href="https://laws-lois.justice.gc.ca/eng/acts/c-46/section-153.html">Section 153(1) of the Criminal Code</a>, it is a criminal offence for a person in a position of trust or authority towards a young person to touch them or encourage them to touch others for a sexual purpose.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong>Sexual Exploitation</strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Procuring Sexual Services</h2>
                        <p className={styles.categoryCopy}><strong>Procuring Sexual Services</strong> is the act of enticing or coercing someone to provide sexual services in exchange for money, drugs, or other incentives. This behaviour is considered a criminal offence under Section 286.3 of the Criminal Code. Additionally, concealing or harbouring a person who sells sexual services for payment or exercising control over their movements are also considered crimes.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong>Procuring Sexual Services</strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Voyeurism</h2>
                        <p className={styles.categoryCopy}><strong>Voyeurism</strong> involves deriving pleasure from observing or recording individuals engaged in private activities without their consent. Voyeurs typically experience sexual arousal by watching people undress, naked, or involved in sexual activities.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong>Voyeurism</strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Obscenity</h2>
                        <p className={styles.categoryCopy}><strong>Obscenity</strong> is defined under <a href="https://laws-lois.justice.gc.ca/eng/acts/c-46/section-163.html">section 163 of the Criminal Code</a> and encompasses the creation, distribution, or possession of material, such as photos, videos, or audio recordings, that is considered obscene. This includes material that unreasonably exploits sex, crime, horror, cruelty, or violence.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong>Obscenity</strong>
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