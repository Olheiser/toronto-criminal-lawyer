import React from "react"
import Image from "next/image";
import styles from "@/styles/Subpage.module.css";
import LeadForm from "../../components/LeadForm";
import PageHeader from "../../components/PageHeader";

import NicholasRobinson from "../../../../public/nicholas-robinson-criminal-lawyer.webp";
import TannerOlheiser from "../../../../public/tanner-olheiser.webp";
import BaileyJohnson from "../../../../public/bailey-johnson.webp";
import AlexanderSurgenor from "../../../../public/alexander-surgenor-criminal-lawyer.webp";
import ChrisMacleod from "../../../../public/chris-macleod-criminal-lawyer.webp";
import MariiaTsyliuryk from "../../../../public/mariia-tsyliuryk.webp";
import GeorgeBalabanian from "../../../../public/george-balabanian-criminal-lawyer.jpg"

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | Toronto Criminal Lawyer",
  description: "Do you need a criminal lawyer in Toronto? Click here to learn about the team fighting for the best possible outcome for your case.",
};

export default function Page() {
    return (
        <main className={styles.pageBody}>
            <PageHeader title="Team"/>
            <div className={`${styles.categoryContainer} ${styles.pageContainer}`}>
                <section className={`${styles.pageContent} ${styles.teamBody}`}>
                    <article className={styles.teamCard}>
                        <Image 
                            alt="Nicholas Robinson, Criminal Lawyer"
                            width={300}
                            height={206}
                            src={NicholasRobinson}
                            className={styles.teamPhoto}
                        />
                        <h2 className={styles.teamHeading}>Nicholas Robinson</h2>
                        <h3 className={styles.teamSubheading}>Criminal Defence Lawyer</h3>
                        <p className={styles.teamCopy}>A proud member of both the Law Society of Saskatchewan and the Law Society of Upper Canada, Nicholas graduated from McGill University’s Faculty of Law in 2008, earning Bachelor degrees in both Civil and Common Laws. He was called to the Bar of Saskatchewan in 2009 and to the Bar of Ontario in 2010. In 2014, he expanded his practice by opening an office in Regina, Saskatchewan.</p>
                    </article>

                    <article className={styles.teamCard}>
                        <Image 
                            alt="Alexander Surgenor, Criminal Lawyer"
                            width={300}
                            height={206}
                            src={AlexanderSurgenor}
                            className={styles.teamPhoto}
                        />
                        <h2 className={styles.teamHeading}>Alexander Surgenor</h2>
                        <h3 className={styles.teamSubheading}>Criminal Defence Lawyer</h3>
                        <p className={styles.teamCopy}>Alexander graduated from Osgoode Hall Law School in 2022 after attending the University of Toronto, where he earned his Honours Bachelor of Arts in 2018. He was called to the bar in Ontario in 2024. He joins us after articling at a boutique firm in Yorkville, Toronto where he sharpened his client service skills.</p>
                    </article>

                    <article className={styles.teamCard}>
                        <Image 
                            alt="George Balabanian, Criminal Lawyer"
                            width={300}
                            height={206}
                            src={GeorgeBalabanian}
                            className={styles.teamPhoto}
                        />
                        <h2 className={styles.teamHeading}>George Balabanian</h2>
                        <h3 className={styles.teamSubheading}>Criminal Defence Lawyer</h3>
                        <p className={styles.teamCopy}>Bio coming soon.</p>
                    </article>

                    <article className={styles.teamCard}>
                        <Image 
                            alt="Chris MacLeod, Criminal Lawyer"
                            width={300}
                            height={206}
                            src={ChrisMacleod}
                            className={styles.teamPhoto}
                        />
                        <h2 className={styles.teamHeading}>Chris MacLeod</h2>
                        <h3 className={styles.teamSubheading}>Criminal Lawyer</h3>
                        <p className={styles.teamCopy}>A distinguished member of the Law Society of Saskatchewan, Chris MacLeod has been a dedicated legal professional since his admission to the Bar of Saskatchewan in 1984. He holds a Bachelor of Administration from the University of Regina, graduating in 1983, and earned his LL.B. from the University of Saskatchewan the same year. Chris brings decades of experience and a profound commitment to the practice of criminal law.</p>
                    </article>

                    <article className={styles.teamCard}>
                        <Image 
                            alt="Mariia Tsyliuryk, Criminal Law Executive Assistant"
                            width={300}
                            height={206}
                            src={MariiaTsyliuryk}
                            className={styles.teamPhoto}
                        />
                        <h2 className={styles.teamHeading}>Mariia Tsyliuryk</h2>
                        <h3 className={styles.teamSubheading}>Office Manager & Executive Assistant</h3>
                        <p className={styles.teamCopy}>Mariia Tsyliuryk, an Executive Assistant with a Master’s Degree from the Kyiv National Academy of Internal Affairs of Ukraine, has a decade of experience as an Assistant Judge and has expanded her legal expertise as a lawyer in 2022. Mariia’s wealth of knowledge in legal affairs strengthens the operational capabilities of Nicholas Robinson’s Criminal Defence practice.</p>
                    </article>

                    <article className={styles.teamCard}>
                        <Image 
                            alt="Bailey Johnson, Criminal Law Research Assistant"
                            width={300}
                            height={206}
                            src={BaileyJohnson}
                            className={styles.teamPhoto}
                        />
                        <h2 className={styles.teamHeading}>Bailey Johnson</h2>
                        <h3 className={styles.teamSubheading}>Research Assistant</h3>
                        <p className={styles.teamCopy}>Bailey Johnson is pursuing his Honours Degree in Political Science, specializing in Constitutional Law and Canadian Federalism. His analytical skills and in-depth knowledge in political science bring valuable insights to research projects and drive understanding of complex legal concepts.</p>
                    </article>

                    <article className={styles.teamCard}>
                        <Image 
                            alt="Tanner Olheiser, Criminal Law Marketing Manager"
                            width={300}
                            height={206}
                            src={TannerOlheiser}
                            className={styles.teamPhoto}
                        />
                        <h2 className={styles.teamHeading}>Tanner Olheiser</h2>
                        <h3 className={styles.teamSubheading}>Marketing Manager</h3>
                        <p className={styles.teamCopy}>Tanner Olheiser, with a diploma in Interactive Design & Technology from Saskatchewan Polytechnic, previously worked as a Business Intelligence Assistant at sMedia. He currently leverages his knowledge of internet marketing and analytics to advance Nicholas Robinson’s marketing strategies and enhance brand awareness.</p>
                    </article>
                </section>
                <aside className={styles.form}>
                    <LeadForm />
                </aside>
            </div>
        </main>
    )
}