import React from "react";
import Link from "next/link";
import styles from "@/styles/Subpage.module.css";
import LeadForm from "@/app/components/LeadForm";
import PageHeader from "@/app/components/PageHeader";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uttering Threats | Toronto Criminal Lawyer",
  description: "Charged with uttering threats in Toronto? Learn about Section 264.1 penalties, possible defences and your options. Call for a free consultation.",
};

export default function Page() {
    return (
        <main className={styles.pageBody}>
            <PageHeader title="Uttering Threats"/>
            <div className={styles.pageContainer}>
                <article className={styles.pageContent}>
                    <p>Under <a href="https://laws-lois.justice.gc.ca/eng/acts/c-46/section-264.1.html">Section 264.1 of the Criminal Code</a>, <strong>uttering threats</strong> is a criminal offence involving knowingly making or communicating a threat to:</p>
                    <ul className={styles.contentList}>
                        <li>Cause death or bodily harm to another person.</li>
                        <li>Burn, destroy, or damage property.</li>
                        <li>Kill, poison, or injure an animal or bird belonging to someone.</li>
                    </ul>
                    <p>A threat does not have to be made directly to the person targeted. It can also be communicated through another person.</p>
                    <p>To establish the offence, the Crown must prove that the accused intended their words to intimidate or be taken seriously as a threat. The words must also be understood as threatening when considered objectively in the circumstances.</p>
                    <p className={styles.contentBreak}><Link href="/about">N.P. Robinson Law</Link> provides criminal defence representation for individuals facing uttering threats charges in Toronto. Dial <a href="tel:6473722661">(647) 372-2661</a> for a free consultation with a criminal lawyer.</p>

                    <h2>Potential Penalties for an Uttering Threats Charge</h2>
                    <p className={styles.contentH3Break}>Uttering threats is a <strong>hybrid offence</strong>, meaning the Crown can choose to proceed by summary conviction or by indictment. This decision affects the potential penalties and how the case proceeds.</p>

                    <h3>Summary Conviction Penalties</h3>
                    <p>If the Crown proceeds by summary conviction, the maximum penalties are:</p>
                    <ul className={`${styles.contentList} ${styles.contentH3Break}`}>
                        <li><strong>Threats to cause death or bodily harm:</strong> Up to 18 months in prison.</li>
                        <li><strong>Threats to damage property or harm animals:</strong> Up to two years less a day in prison and/or a $5,000 fine.</li>
                    </ul>

                    <h3>Indictable Offence Penalties</h3>
                    <p>If the Crown proceeds by indictment, the maximum penalties are:</p>
                    <ul className={styles.contentList}>
                        <li><strong>Threats to cause death or bodily harm:</strong> Up to five years in prison.</li>
                        <li><strong>Threats to damage property or harm animals:</strong> Up to two years in prison.</li>
                    </ul>
                    <p>There is no mandatory minimum sentence for uttering threats, whether the Crown proceeds by summary conviction or indictment. Depending on the circumstances, other sentencing options may include a discharge, suspended sentence, fine, probation combined with another sentence, or a conditional sentence.</p>
                    <p className={styles.contentBreak}><strong>Concerned about the penalties for uttering threats?</strong> Call <a href="tel:6473722661">(647) 372-2661</a> to discuss the possible consequences of your charge and your legal options with a criminal lawyer.</p>

                    <h2>Potential Defences Against Uttering Threats Charges</h2>
                    <p>Depending on the circumstances, several defence arguments may be available to someone charged with uttering threats:</p>
                    <ul className={styles.contentList}>
                        <li><strong>Lack of Intent:</strong> The accused may argue that their words were not intended to intimidate or be taken seriously as a threat. Statements made in jest or during an emotional outburst may lack the required intent.</li>
                        <li><strong>Ambiguous Language:</strong> Words that have a reasonably credible alternative meaning may not meet the legal definition of a criminal threat.</li>
                        <li><strong>Context of the Statement:</strong> The defence may argue that a reasonable person, considering the words and surrounding circumstances, would not interpret the statement as a genuine threat.</li>
                    </ul>
                    <p>It is important to understand that a person does not have to intend to carry out a threat to be convicted. Likewise, the person targeted does not have to experience fear or intimidation.</p>
                    <p><strong>Believe you never intended to threaten anyone?</strong> Call <a href="tel:6473722661">(647) 372-2661</a> to discuss whether a lack of intent could be relevant to your defence.</p>
                    <p className={styles.contentBreak}>The circumstances of each case determine which defence arguments may be available. Speaking with a criminal defence lawyer can help you understand the allegations and your legal options.</p>

                    <h2>Facing Uttering Threats Charges? Understand Your Legal Options</h2>
                    <p className={styles.contentH3Break}>Being charged with uttering threats can be overwhelming, but understanding your rights and legal options is an important first step. A criminal defence lawyer can review the allegations, explain the legal process, and help you develop a defence strategy based on the circumstances of your case.</p>

                    <h3>Speak With a Toronto Criminal Defence Lawyer</h3>
                    <p className={styles.contentBreak}>If you&apos;re facing uttering threats charges in Toronto, N.P. Robinson Law is here to help you understand your options and the next steps. Call <a href="tel:6473722661">(647) 372-2661</a> to request a free consultation and discuss your case with a criminal defence lawyer.</p>

                    <p><em>Disclaimer: This page provides general legal information only and does not constitute legal advice. Every case is different. Speak with a qualified criminal defence lawyer about your specific circumstances.</em></p>
                </article>
                <aside className={styles.form}>
                    <LeadForm />
                </aside>
            </div>
        </main>
    );
}
