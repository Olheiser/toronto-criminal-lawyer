import React from "react"
import styles from "@/styles/Subpage.module.css";
import LeadForm from "../components/LeadForm";
import PageHeader from "../components/PageHeader";
import Image from "next/image";
import Link from "next/link";
import CourtHouse from "../../../public/criminal-lawyer-courthouse.webp";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Toronto Criminal Lawyer",
  description: "Nicholas Robinson is a criminal lawyer in Toronto who provides tailored criminal defence services. Call (647) 697-2876 for a free consultation.",
};

export default function Page() {
    return (
        <main className={styles.pageBody}>
            <PageHeader title="About"/>
            <div className={styles.pageContainer}>
                <article className={styles.pageContent}>
                <h2>Seasoned Criminal Lawyer Available 24/7 to Provide Expert Legal Counsel</h2>
                    <p>Nicholas P. Robinson has spent years managing criminal matters ranging from <Link href="/practice-areas/assault-charges/assault">simple assaults</Link> and <Link href="/practice-areas/driving-offences/impaired-driving">impaired driving</Link> to manslaughter cases. His litigation practice is focused on <Link href="/practice-areas">criminal law</Link> though he has handled matters as varied as complex <Link href="/about/reported-cases">class action lawsuits to employment disputes</Link>.</p>
                    <p>He is a member of the <a href="https://www.lawsociety.sk.ca/">Law Society of Saskatchewan</a> and the <a href="https://lso.ca/home">Law Society of Upper Canada</a> and has appeared in the Courts of <a href="https://www.bccourts.ca/">British Columbia</a>, <a href="https://sasklawcourts.ca/">Saskatchewan</a> and <a href="https://www.ontariocourts.ca/">Ontario</a>. He has worked on cases in all 9 common law provinces and has appeared on appeal matters in the Courts of <a href="https://sasklawcourts.ca/">Saskatchewan</a> and <a href="https://www.ontariocourts.ca/">Ontario</a>.</p>
                    <p>A graduate of <a href="https://www.mcgill.ca/law/">McGill University’s Faculty of Law</a>, Mr. Robinson would be pleased to speak with you today! Reach us at <a href="tel:6476972876">(647) 697-2876</a> day or night.</p>
                    <Image 
                        alt="Criminal lawyer courthouse lamp and columns"
                        width={800}
                        height={532}
                        src={CourtHouse}
                        className={styles.courtHousePhoto}
                    />
                    <ul>
                        <li>
                            <div className={styles.aboutListItem}>
                                <h3 className={styles.aboutH3}>– 2008, McGill University Faculty of Law</h3>
                                <p className={styles.aboutListDesc}>Graduates with Bachelor of Civil Laws & Bachelor of Common Laws.</p>
                            </div>
                        </li>
                        <li>
                            <div className={styles.aboutListItem}>
                                <h3 className={styles.aboutH3}>– 2009, Law Society of Saskatchewan</h3>
                                <p className={styles.aboutListDesc}>Called to <a href="https://www.cbasask.org/Home">Bar of Saskatchewan</a>.</p>
                            </div>
                        </li>
                        <li>
                            <div className={styles.aboutListItem}>
                                <h3 className={styles.aboutH3}>– 2010, Law Society of Upper Canada</h3>
                                <p className={styles.aboutListDesc}>Called to <a href="https://www.oba.org/Home">Bar of Ontario.</a></p>
                            </div>
                        </li>
                        <li>
                            <div className={styles.aboutListItem}>
                                <h3 className={styles.aboutH3}>– 2014, Opening of Regina Office</h3>
                                <p className={styles.aboutListDesc}>Our Smith Street office, conveniently located across from the <a href="https://sasklawcourts.ca/#provincial">Provincial Court of Saskatchewan</a>, opens.</p>
                            </div>
                        </li>
                        <li>
                            <div className={styles.aboutListItem}>
                                <h3 className={styles.aboutH3}>– 2016, Opening of Toronto Office</h3>
                            </div>
                        </li>
                    </ul>
                </article>
                <aside className={styles.form}>
                    <LeadForm />
                </aside>
            </div>
        </main>
    )
}