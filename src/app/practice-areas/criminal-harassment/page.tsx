import React from "react"
import styles from "@/styles/Subpage.module.css";
import LeadForm from "../../components/LeadForm";
import PageHeader from "../../components/PageHeader";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Criminal Harassment | Toronto Criminal Lawyer",
  description: "Are you facing criminal harassment charges? Call (647) 697-2876 to receive a free consultation with a Toronto Criminal Lawyer.",
};

export default function Page() {
    return (
        <main className={styles.pageBody}>
            <PageHeader title="Criminal Harassment"/>
            <div className={styles.pageContainer}>
                <article className={styles.pageContent}>
                <p className={styles.contentBreak}><strong>Criminal harassment</strong> is defined under <a href="https://laws-lois.justice.gc.ca/Search/Search.aspx?txtS3archA11=harassment&txtT1tl3=%22Criminal+Code%22&h1ts0n1y=0&ddC0nt3ntTyp3=Acts#:~:text=264%20(1)%20No%20person%20shall,or%20the%20safety%20of%20anyone">section 264 (1) of the Canadian Criminal Code</a> as engaging in conduct without lawful authority that causes another person to reasonably, in all circumstances, fear for their safety or the safety of anyone known to them.</p>

                <h2>Prohibited Conduct</h2>
                <ul className={`${styles.contentBreak} ${styles.contentList}`}>
                    <li>Continuously pursuing or shadowing the other individual or individuals they are acquainted with, moving from one location to another.</li>
                    <li>Persistently establishing communication, whether through direct or indirect means, with the other person or individuals they are acquainted with.</li>
                    <li>Persistently loitering or observing the residence, workplace, business premises, or any location where the other person or individuals they are acquainted with reside, work, conduct business, or happen to be.</li>
                    <li>Partaking in intimidating behaviour specifically targeted at the other person or any member of their family.</li>
                </ul>

                <h2>Understanding the Elements of Criminal Harassment</h2>
                <ul className={`${styles.contentBreak} ${styles.contentList}`}>
                    <li><strong>Harassed:</strong> The crown must prove that the prohibited conduct troubled, tormented, plagued, worried continually or chronologically, bedevilled, or badgered the complainant.</li>
                    <li><strong>Fear for safety:</strong> This involves feelings of anxiety or apprehension regarding the potential for significant psychological harm or emotional distress in addition to the presence of physical danger or harm.</li>
                    <li><strong>Repeated Communications:</strong> It takes as little as two instances (depending on the circumstances) for the accused to satisfy the requirement of repeatedly communicating with the victim under s. 264(2)(b).</li>
                    <li><strong>Threatening Conduct:</strong> Consists of conduct that is intended to create a sense of fear in the recipient and serves as a tool of intimidation.</li>
                    <li><strong>Besetting or watching:</strong> Besetting is an active act that involves persistently or insistently soliciting, urging, or pressing someone in an improper manner. Watching is the passive act of continually observing another person for a purpose.</li>
                </ul>

                <h2>Potential Penalties for Criminal Harassment</h2>
                <p>Criminal harassment is a hybrid offence. This means that the crown may choose to prosecute this offence summarily or by way of indictment.</p>
                <h3>Criminal Harassment: Summary Outcomes</h3>
                <ul className={`${styles.contentBreak} ${styles.contentList}`}>
                    <li><strong>Minimum:</strong> None</li>
                    <li><strong>Maximum:</strong> 2 years less a day imprisonment and/or a $5,000 fine</li>
                </ul>
                <h3>Criminal Harassment: Indictment Outcomes</h3>
                <ul className={`${styles.contentBreak} ${styles.contentList}`}>
                    <li><strong>Minimum:</strong> None</li>
                    <li><strong>Maximum:</strong> 10 years imprisonment</li>
                </ul>

                <h2>Aggravating Factors in Criminal Harassment Cases Include:</h2>
                <ul className={`${styles.contentList}`}>
                    <li>Violating the terms of a peace bond as outlined under <a href="https://laws-lois.justice.gc.ca/eng/acts/C-46/section-810.html">s. 810 of the Criminal Code</a></li>
                    <li>Violating an order of prohibition under <a href="https://laws-lois.justice.gc.ca/eng/acts/C-46/section-161.html">s. 161 of the Criminal Code</a></li>
                    <li>Violating the terms or conditions of any other order or recognizance</li>
                    <li>The offence was committed in a domestic context</li>
                </ul>

                <p className={styles.contentBreak}>Call <a href="tel:6476972876">(647) 697-2876</a> to consult a lawyer if you&apos;re concerned about the potential penalties associated with a criminal harassment charge.</p>

                <h2>Don&apos;t Face Your Criminal Harassment Charge Alone</h2>
                <p className={styles.contentBreak}>An experienced criminal defence lawyer is essential when facing a criminal harassment charge. A lawyer will navigate the complexities of the legal system, protect your rights, and develop a defence strategy tailored to your specific circumstances.</p>

                <h2>Need a Lawyer? Get a Free Consultation With a Skilled Criminal Lawyer</h2>
                <p>Don&apos;t hesitate to reach out to us if you have been charged with criminal harassment. Call <a href="tel:6476972876">(647) 697-2876</a> to discuss your options with a criminal lawyer.</p>

                </article>
                <aside className={styles.form}>
                    <LeadForm />
                </aside>
            </div>
        </main>
    )
}