import React from "react"
import styles from "@/styles/Subpage.module.css";
import LeadForm from "../components/LeadForm";
import PageHeader from "../components/PageHeader";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Criminal Process | Toronto Criminal Lawyer",
  description: "Are you facing criminal charges in Toronto? Click here to learn about how a criminal lawyer can guide you through the process.",
};

export default function Page() {
    return (
        <main className={styles.pageBody}>
            <PageHeader title="Criminal Process"/>
            <div className={styles.pageContainer}>
                <article className={styles.pageContent}>
                    <h2>Dealing with a Criminal Charge Can Be Complicated</h2>
                    <p className={styles.contentBreak}>In order to help you navigate the process, we have included some general information below. This is not a substitute for legal advice and we ask that you please contact us at <a href="tel:6476972876">(647) 697-2876</a> for specific information.</p>
                    <h2>First Appearance</h2>
                    <p>Most often, individuals charged with an offence will be asked to agree (in one form or another) to attend Court on a specific future date. A Promise to Appear or Undertaking may specify that you attend Court on a certain date. If the prosecutor’s office believes that you will not appear or thinks that you pose a danger to the public they may ask the Court to hold you in custody (“remand”). In these circumstances a bail hearing (or “show cause” hearing) becomes necessary.</p>
                    <p className={styles.contentBreak}>You will normally be required to be personally present in Court on your first court date. In some situations a lawyer may appear for you but a Designation of Counsel document must be signed and filed with the Court first.</p>

                    <h2>Disclosure Review</h2>
                    <p className={styles.contentBreak}>Before entering a plea of guilty or not guilty we attempt to obtain all evidence that is relevant to your case. The Crown is required to provide evidence and other material that is relevant to your matter. Before any actions are taken in Court we will review pertinent disclosure and provide you with an initial opinion on possible avenues that can be followed in dealing with your case. You will be required to provide a retainer for the disclosure review and Court appearances that occur while waiting for full disclosure.</p>

                    <h2>Plea or Election</h2>
                    <p className={styles.contentBreak}>After reviewing your disclosure we will enter a plea of guilty or not guilty. In some cases no plea is entered until after an additional Court hearing called a “preliminary hearing”. It is important that a plea only be entered after all disclosure has been received so as to ensure that the appropriate actions are taken in defending you against the charges.</p>

                    <h2>Trial</h2>
                    <p className={styles.contentBreak}>Trial dates are normally set several months after the last Court appearance. You will be required to provide an additional retainer or deposit against legal fees for trial before the trial date is set. At trial, the Judge considers all evidence before him (including verbal testimony from witnesses including the police). In situations where your rights have been violated, we may choose to make a Charter Application to seek the exclusion of evidence. Charter issues are normally dealt with on the same day as the trial day.</p>

                    <h2>Sentencing</h2>
                    <p>If you are convicted at trial sentencing may occur the same day or another date might be set for a sentencing hearing. Appeals are possible in some cases but are dependent on the particular circumstances of your case and what occurred at trial.</p>
                </article>
                <aside className={styles.form}>
                    <LeadForm />
                </aside>
            </div>
        </main>
    )
}