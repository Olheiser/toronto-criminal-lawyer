import React from "react"
import Image from "next/image";
import styles from "@/styles/Subpage.module.css";
import LeadForm from "../../components/LeadForm";
import PageHeader from "../../components/PageHeader";

import NicholasRobinson from "../../../../public/nicholas-robinson-criminal-lawyer.webp";
import TannerOlheiser from "../../../../public/tanner-olheiser.webp";
import AlexanderSurgenor from "../../../../public/alexander-surgenor-criminal-lawyer.webp";
import MariiaTsyliuryk from "../../../../public/mariia-tsyliuryk.webp";
import GeorgeBalabanian from "../../../../public/george-balabanian-criminal-lawyer.jpg"
import HazelWood from "../../../../public/hazel-wood.avif";
import MaksymKachurovsky from "../../../../public/maksym-kachurovsky.avif";
import YosefAsmat from "../../../../public/yosef-asmat.avif";

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
                        <p className={styles.teamCopy}>A proud member of both the Law Society of Saskatchewan and the Law Society of Upper Canada, Nicholas graduated from McGill University&apos;s Faculty of Law in 2008, earning Bachelor degrees in both Civil and Common Laws. He was called to the Bar of Saskatchewan in 2009 and to the Bar of Ontario in 2010. In 2014, he expanded his practice by opening an office in Regina, Saskatchewan.</p>
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
                        <p className={styles.teamCopy}>George was born and raised in Montreal and was called to the bar in Saskatchewan in 2013 and British Columbia in 2015. He holds two law degrees and a Ph.D. in historical linguistics from the University of Pennsylvania, where he also lectured on Western Armenian. Before focusing on criminal law, George&apos;s practice centered on class actions. A polyglot and avid hiker, he has explored dozens of countries, 45 U.S. states, and 9 Canadian provinces. In his spare time, Dr. Balabanian writes scholarly articles and stays engaged with research.</p>
                    </article>

                    <article className={styles.teamCard}>
                        <Image 
                            alt="Hazel Wood, Articling Student"
                            width={300}
                            height={206}
                            src={HazelWood}
                            className={styles.teamPhoto}
                        />
                        <h2 className={styles.teamHeading}>Hazel Wood 木柔雅</h2>
                        <h3 className={styles.teamSubheading}>Articling Student</h3>
                        <p className={styles.teamCopy}>Hazel Wood graduated with a Bachelor of Science with Honours in Psychology and Law (Qualifying Law Degree) from the University of Kent in the United Kingdom in 2018. She has gained over six years of experience in personal injury, criminal law, and police matters. She has worked in a wide range of legal and administrative roles with the Toronto Police Association and in plaintiff personal injury firms in Toronto. Hazel brings strong skills in client relations, case management, and legal research. She is currently completing her articles and is a candidate with the Law Society of Ontario. Hazel is originally from Hong Kong and is fluent in both English and Cantonese.</p>
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
                        <p className={styles.teamCopy}>Mariia Tsyliuryk, an Executive Assistant with a Master&apos;s Degree from the Kyiv National Academy of Internal Affairs of Ukraine, has a decade of experience as an Assistant Judge and has expanded her legal expertise as a lawyer in 2022. Mariia&apos;s wealth of knowledge in legal affairs strengthens the operational capabilities of Nicholas Robinson&apos;s Criminal Defence practice.</p>
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
                        <p className={styles.teamCopy}>Tanner Olheiser, with a diploma in Interactive Design & Technology from Saskatchewan Polytechnic, previously worked as a Business Intelligence Assistant at sMedia. He currently leverages his knowledge of internet marketing and analytics to advance Nicholas Robinson&apos;s marketing strategies and enhance brand awareness.</p>
                    </article>

                    <article className={styles.teamCard}>
                        <Image 
                            alt="Yosef Asmat, Criminal Law Legal Draftsman & Marketing Expert"
                            width={300}
                            height={206}
                            src={YosefAsmat}
                            className={styles.teamPhoto}
                        />
                        <h2 className={styles.teamHeading}>Yosef Asmat</h2>
                        <h3 className={styles.teamSubheading}>Legal Draftsman & Marketing Expert</h3>
                        <p className={styles.teamCopy}>Yosef completed a legal clinic at a full-service corporate law firm in downtown Toronto, and worked as an intern for a class action law firm. He also brings over five years of business development experience in the consulting, SAAS, and home services industries. Drawing on his background in sales, Yosef he currently advances the firm&apos;s client acquisition strategy whilst also contributing to case management and legal research.</p>
                    </article>

                    <article className={styles.teamCard}>
                        <Image 
                            alt="Maksym Kachurovsky, Criminal Law Receivables & Finance Manager"
                            width={300}
                            height={206}
                            src={MaksymKachurovsky}
                            className={styles.teamPhoto}
                        />
                        <h2 className={styles.teamHeading}>Maksym Kachurovsky</h2>
                        <h3 className={styles.teamSubheading}>Receivables & Finance Manager</h3>
                        <p className={styles.teamCopy}>Maksym Kachurovskyi is pursuing a Bachelor of Commerce (Honors) degree with a concentration in International Business from Carleton University&apos;s Sprott School of Business. Fluent in English, Ukrainian, and Russian, Maksym brings a global perspective and strong financial acumen to his work. He contributes through careful financial reporting and supporting operational planning, helping strengthen the firm&apos;s fiscal management and efficiency.</p>
                    </article>
                    


                </section>
                <aside className={styles.form}>
                    <LeadForm />
                </aside>
            </div>
        </main>
    )
}