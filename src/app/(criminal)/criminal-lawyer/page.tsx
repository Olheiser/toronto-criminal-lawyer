import React from "react"
import styles from "../../../styles/adSubpage.module.css";
//import updateStyles from "@/styles/Ad.module.css";
import LeadForm from "../../components/LeadForm";
import Image from "next/image";
import clientFocused from "../../../../public/client-focused-representation.webp";
import availability from "../../../../public/availability.webp";
import trackRecord from "../../../../public/track-record.webp";
import paymentFlexibility from "../../../../public/payment-flexibility.webp";
import FAQAccordion from "@/app/components/FAQAccordion";
import logo from "../../../../public/logo-white-type.png";
import pro from "../../../../public/professional.jpg";
import AdForm from "@/app/components/AdForm";

//import ctaImage from "../../../../public/cta-row.avif";
// test
import type { Metadata } from "next";  // ← Keep this one only

export const metadata: Metadata = {
  title: "Nicholas Robinson | Toronto Criminal Lawyer",
  description: "Explore your defence options for your criminal charge with expert guidance from a Toronto criuminal lawyer. Call (647) 372-2661 for a free consultation today.",
};

export default function Page() {
    return (
        <>
        <main className={styles.pageBody}>

            <div className={styles.pageContainer}>
                <article className={styles.pageContent}>
                <h2>Nicholas Robinson, Criminal Lawyer</h2>
                <h4>Strategic Defence for All Criminal Charges</h4>
                <h3>Experienced Advocacy Backed by a Strong Trial Record</h3>
                <p>Nicholas Robinson represents clients facing a wide spectrum of criminal charges, with offices in Toronto, Ontario, and Regina, Saskatchewan.</p>
                <p>With over 1,300 cases under his belt over the last 17 years, Nicholas brings unparalleled experience to every client he serves. Drawing on a history of over 100 trials successfully concluded, Nicholas brings a proven record of victory and assurance to the clients he serves.</p>
                <p>Nicholas has a broad range of experience, from litigating complex legal disputes against major corporations to providing robust defence for clients facing legal challenges. No case is too complex or too simple &#x2d; Nicholas is unwavering in his commitment to safeguard your rights and protect your future. </p>
                <p>Call Nicholas today to experience the difference that a veteran criminal defence lawyer, with a proven record of victory, can make in your case.</p>
                <div className={styles.ppcCards}>
                    <div className={styles.ppcCard}>
                        <Image 
                            src={availability}
                            alt="24/7 Availability"
                            width={40}
                            height={40}
                            className={styles.aboutIcon}
                        />
                        <h3>24/7 Availability</h3>
                    </div>
                    <div className={styles.ppcCard}>
                        <Image 
                            src={paymentFlexibility}
                            alt="Payment Flexibility"
                            width={40}
                            height={40}
                            className={styles.aboutIcon}
                        />
                        <h3>Flexible Payment Plans</h3>
                    </div>
                    <div className={styles.ppcCard}>
                        <Image 
                            src={clientFocused}
                            alt="Client-focused Representation"
                            width={40}
                            height={40}
                            className={styles.aboutIcon}
                        />
                        <h3>Client-focused Representation</h3>
                    </div>
                    <div className={styles.ppcCard}>
                        <Image 
                            src={trackRecord}
                            alt="Proven Track Record"
                            width={40}
                            height={40}
                            className={styles.aboutIcon}
                        />
                        <h3>Proven Track Record</h3>
                    </div>
                </div>
                </article>
                <aside className={styles.form}>
                    <LeadForm />
                </aside>
            </div>
        </main>
        <section className={styles.duiSection}>
            <div className={styles.duiContainer}>

                <h2 className={styles.sectionTitle}>Practice Areas</h2>
                <h3 className={styles.sectionSubheading}>We Get Winning Results</h3>
                <div className={styles.duiGrid}>
                    <div className={`${styles.duiCard} ${styles.card1}`}>
                        <h3>Assault</h3>
                    </div> 
                    <div className={`${styles.duiCard} ${styles.card2}`}>
                        <h3>Sexual Assault</h3>
                    </div> 
                    <div className={`${styles.duiCard} ${styles.card3}`}>
                        <h3>Impaired Driving</h3>
                    </div> 
                    <div className={`${styles.duiCard} ${styles.card4}`}>
                        <h3>Fraud</h3>
                    </div> 
                    <div className={`${styles.duiCard} ${styles.card5}`}>
                        <h3>Drug Charges</h3>
                    </div> 
                    <div className={`${styles.duiCard} ${styles.card6}`}>
                        <h3>Theft</h3>
                    </div> 
                    <div className={`${styles.duiCard} ${styles.card7}`}>
                        <h3>Young Offenders</h3>
                    </div>
                    <div className={`${styles.duiCard} ${styles.card8}`}>
                        <h3>Firearm Offences</h3>
                    </div>
                    <div className={`${styles.duiCard} ${styles.card9}`}>
                        <h3>Homicide</h3>
                    </div>
                </div>
            </div>
        </section>

        


        <section className={styles.duiLawyerSection}>
      <div className={styles.splitContainer}>
        {/* Left side - Image */}
        <div className={styles.imageWrapper}>
          <Image
            src={pro} // Replace with your image path
            alt="Experienced DUI Lawyer in Toronto"
            fill
            className={styles.image}
            priority
          />
        </div>

        {/* Right side - Text Content */}
        <div className={styles.contentWrapper}>
          <h2 className={styles.sectionTitle}>Why Hire a Criminal Lawyer?</h2>
          
          <div className={styles.introText}>
            <p>
              Facing a criminal charge can have serious and lasting consequences. A conviction may result in:
            </p>
            <ul className={styles.consequencesList}>
              <li>A permanent criminal record</li>
              <li>Jail time or probation</li>
              <li>Significant fines and court-ordered conditions</li>
              <li>Loss of employment or difficulty finding work</li>
              <li>Restrictions on travel</li>
              <li>Complications in family or custody matters</li>
              <li>Immigration consequences, including loss of status or deportation</li>
              
            </ul>
            <p>
              When your future is at stake, having an experienced criminal defence lawyer on your side can make a meaningful difference. The right legal strategy can help protect your rights, your record, and your opportunities moving forward.
            </p>
          </div>

          <div className={styles.benefitsGrid}>
            <div className={styles.benefitItem}>
              <h3>Reduce the Impact</h3>
              <p>
                A skilled criminal lawyer works to lessen the severity of charges against you. Whether negotiating for reduced penalties, securing alternative sentencing options, or having charges dismissed entirely, we leverage our deep understanding of the justice system to minimize how a criminal charge affects your life, both now and in the years ahead.
              </p>
            </div>

            <div className={styles.benefitItem}>
              <h3>Specialized Knowledge Matters</h3>
              <p>
                With over 17 years of experience and more than 1,300 cases handled, Nicholas Robinson understands how the criminal justice system works in practice. From first appearance through to trial, your case benefits from informed decision-making, careful preparation, and strong courtroom advocacy.
              </p>
            </div>

            <div className={styles.benefitItem}>
              <h3>Your Rights, Our Priority</h3>
              <p>
                Your rights aren&apos;t just important, they&apos;re the foundation of your defence. An experienced criminal lawyer scrutinizes every step law enforcement took in your case. From unlawful searches to procedural errors , we identify violations that can lead to evidence being suppressed or charges being thrown out entirely.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

      <section className={styles.consultRow}>
        <div className={styles.consultContent}>
          <h2>Receive a Free Consultation</h2>
          <h3>We&apos;ll Develop a Tailored Legal Strategy For Your Unique Circumstances</h3>
          <div className={styles.introButtonRow}>
            <a href="tel:6473722661">
            <button className={styles.ctaButton}>Call Now</button>
            </a>
          </div>
        </div>

      </section>




        <section className={styles.faqRow}>
            <div className={styles.faqContainer}>
            <div className={`${styles.FAQTitleRow} ${styles.headingContainer}`}>
                <h2 className={`${styles.sectionHeading}`}>Frequently Asked Questions</h2>
                <h3 className={`${styles.sectionSubheading}`}>Have Questions About Your Charge? Give Us a Call</h3>
            </div>
            <FAQAccordion />
            </div>
        </section>
    

        <section className={styles.contactSection}>
      <div className={styles.contactOverlay}>
        <div className={styles.contactContainer}>
          {/* Logo */}
          <div className={styles.logoWrapper}>
            <Image
              src={logo}
              alt="Nicholas Robinson Criminal Lawyer Logo"
              width={200}
              height={60}
              className={styles.logo}
              priority
            />
          </div>

          {/* Heading */}
          <h2 className={styles.contactHeading}>Contact Nicholas Robinson</h2>

          {/* Paragraph */}
          <p className={styles.contactParagraph}>
            With 14+ years of DUI defence experience, Nicholas Robinson is one of Toronto&apos; most trusted impaired driving lawyers. He has a proven track record of success in trials and negotiations, helping clients avoid licence suspensions, fines, and criminal records. Serving Toronto and the GTA, Nicholas provides aggressive, strategic defence when you need it most.
          </p>

          {/* Form */}
          <AdForm />
        </div>
      </div>
    </section>
        </>
    )
}