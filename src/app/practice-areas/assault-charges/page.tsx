import React from "react"
import styles from "@/styles/Subpage.module.css";
import LeadForm from "../../components/LeadForm";
import PageHeader from "../../components/PageHeader";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Assault Charges | Toronto Criminal Lawyer",
  description: "Are you facing assault charges in Toronto? Click here to learn about the extent of our criminal defence services.",
};

export default function Page() {
    return (
        <main className={styles.pageBody}>
            <PageHeader title="Assault Charges"/>
            <div className={`${styles.categoryContainer} ${styles.pageContainer}`}>
                <section className={`${styles.pageContent} ${styles.categoryBody}`}>
                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}><Link href="/practice-areas/assault-charges/assault">Assault</Link></h2>
                        <p className={styles.categoryCopy}><strong><Link href="/practice-areas/assault-charges/assault">Assault</Link></strong> is the deliberate act of applying force, whether directly or indirectly, to another person without their consent.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong><Link href="/practice-areas/assault-charges/assault">Assault</Link></strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Aggravated Assualt</h2>
                        <p className={styles.categoryCopy}><strong>Aggravated assault</strong> charges are applicable when the accused causes serious harm, permanent injury, disfigurement, or endangers the life of the victim. The resulting injury is typically severe and long-lasting in nature.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong>Aggravated assault</strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Assault with a Weapon</h2>
                        <p className={styles.categoryCopy}>The charge of <strong>assault with a weapon</strong> applies when an individual uses or threatens to use a weapon, resulting in bodily harm. Weapons can include not only firearms and knives but also everyday objects.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong>Assault with a Weapon</strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Spousal Assault</h2>
                        <p className={styles.categoryCopy}><strong>Spousal Assault</strong> refers to any intentional act of non-consensual force against an intimate partner within the same household, such as a current or former spouse, common-law partner, or dating partner. While not a distinct criminal offense under the Canadian Criminal Code, individuals often face charges related to various other criminal code offences, including the charge of simple assault <a href="https://laws-lois.justice.gc.ca/eng/acts/c-46/section-266.html">(section 266)</a>.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong>Spousal Assault</strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Assaulting a Peace Officer</h2>
                        <p className={styles.categoryCopy}><strong>Assaulting a Peace Officer</strong> involves intentionally applying force to a police officer, resisting arrest by assaulting a police officer, or assaulting a police officer during a lawful search or seizure.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong>Assaulting a Peace Officer</strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Assault Causing Bodily Harm</h2>
                        <p className={styles.categoryCopy}><strong>Assault Causing Bodily Harm</strong> occurs when physical force is used, resulting in bodily harm to the victim. Bodily harm can range from minor injuries such as scratches or a black eye to more severe injuries like sprains or broken bones.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong>Assault Causing Bodily Harm</strong>
                        </p>
                    </article>

                    <article className={styles.categoryCard}>
                        <h2 className={styles.categoryHeading}>Uttering Threats</h2>
                        <p className={styles.categoryCopy}><strong>Uttering Threats</strong> involves communicating an intention to cause harm or damage to a person or property.</p>
                        <p className={styles.categoryLearnMore}>
                            Learn more about <strong>Uttering Threats</strong>
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