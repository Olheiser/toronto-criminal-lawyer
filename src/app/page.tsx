import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import ladyJustice from "../../public/toronto-criminal-lawyer-lady-justice.webp";
import clientFocused from "../../public//client-focused-representation.webp";
import availability from "../../public/availability.webp";
import trackRecord from "../../public/track-record.webp";
import paymentFlexibility from "../../public/payment-flexibility.webp";
import evidenceReview from "../../public/evidence-review.webp";
import service from "../../public/service.webp";
import beatCharges from "../../public/beat-charges.webp";
import guilty from "../../public/guilty.webp";
import speakLawyer from "../../public/speak-to-criminal-lawyer.webp";
import firstStep from "../../public/first-step.webp";
import secondStep from "../../public/second-step.webp";
import thirdStep from "../../public/third-step.webp";
import criminalProcessPhoto from "../../public/criminal-lawyer-criminal-process.webp";
import LeadForm from "./components/LeadForm";
import FAQAccordion from "./components/FAQAccordion";

export default function Home() {
  return (
    <main>
      <section className={styles.introRow}>
        
        <div className={styles.featureRow}>
        <article className={styles.introContainer}>
          <div className={styles.headingContainer}>
            <h1 className={styles.title}>Toronto Criminal Lawyer</h1>
            <h2 className={styles.titleSubheading}>Criminal Defence Specialist</h2>
          </div>
          
          
          <p className={styles.introCopy}>Facing criminal charges? <strong><Link href="/about">Nicholas Robinson</Link></strong> is your dedicated <strong>criminal lawyer in Toronto, Ontario.</strong> With a focus on individualized and responsive representation, Nicholas provides tailored defence strategies to protect your rights and achieve the best possible outcome.</p>
          <div className={styles.metricsRow}>
            <div className={styles.metricItem}>
              <div className={styles.clientMetric}>1,300+</div>
              <div className={styles.clientLabel}>Clients<br/>Represented</div>
            </div>
            <div className={styles.metricItem}>
              <div className={styles.clientMetric}>100+</div>
              <div className={styles.clientLabel}>Successful<br/>Trial Matters</div>
            </div>
            <div className={styles.metricItem}>
              <div className={styles.clientMetric}>15+</div>
              <div className={styles.clientLabel}>Years Defending<br/>Canadians</div>
            </div>
            <div className={styles.metricItem}>
              <div className={styles.clientMetric}>60+</div>
              <div className={styles.clientLabel}>Ratings<br/>on Google</div>
            </div>
          </div>
          <div className={styles.introButtonRow}>
            <a href="tel:6476972876">
              <button className={styles.introButton}>Free Consultation</button>
            </a>
          </div>
        </article>
        <div className={styles.ladyJusticeContainer}>
          <Image 
            src={ladyJustice}
            alt="Toronto Criminal Lawyer Lady Justice"
            width={1150}
            height={645}
            className={styles.ladyJustice}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1150px"
            priority
          />
        </div>
        </div>
      </section>

      <section className={styles.bioRow}>
        <article className={styles.bioContainer}>
          <div className={styles.headingContainer}>
          <h2 className={`${styles.sectionHeading} ${styles.bioHeading}`}><Link href="/practice-areas">Nicholas Robinson, Toronto Criminal Lawyer</Link></h2>
          <h3 className={styles.sectionSubheading}>Legal Service With Compassion</h3>
          
          </div>
          <p className={styles.nickBio}>Nicholas Robinson is a seasoned criminal defence lawyer with a distinguished track record of serving clients in Ontario since 2014. Known for his approachable demeanor, relentless dedication, and commitment to ensuring clients feel understood, respected, and effectively defended, Nicholas provides personalized legal representation that is both strategic and compassionate. His expertise spans a broad spectrum of <Link href="/practice-areas">criminal charges</Link>, including <Link href="/practice-areas/driving-offences/impaired-driving">impaired driving</Link>, <Link href="/practice-areas/fraud-charges/fraud">fraud</Link>, <Link href="/practice-areas/sexual-offences/sexual-assault">sexual assault</Link>, <Link href="/practice-areas/criminal-harassment">criminal harassment</Link>, and <Link href="/practice-areas/drug-charges/possession-of-narcotics">possession of narcotics</Link>.</p>
          <div className={styles.aboutIconGrid}>
            <div className={styles.aboutIconItem}>
              <Image 
                src={clientFocused}
                alt="Client-focused Representation"
                //width={250}
                //height={75}
                className={styles.aboutIcon}
              />
              <p>Client-focused<br /> Representation</p>
            </div>
            <div className={styles.aboutIconItem}>
              <Image 
                src={availability}
                alt="24/7 Availability"
                //width={250}
                //height={75}
                className={styles.aboutIcon}
              />
              <p>24/7<br /> Availability</p>
            </div>
            <div className={styles.aboutIconItem}>
              <Image 
                src={trackRecord}
                alt="Proven Track Record"
                //width={250}
                //height={75}
                className={styles.aboutIcon}
              />
              <p>Proven<br /> Track Record</p>
            </div>
            <div className={styles.aboutIconItem}>
              <Image 
                src={paymentFlexibility}
                alt="Payment Flexibility"
                //width={250}
                //height={75}
                className={styles.aboutIcon}
              />
              <p>Payment<br /> Flexibility</p>
            </div>
            <div className={styles.aboutIconItem}>
              <Image 
                src={evidenceReview}
                alt="Thorough Evidence Review"
                //width={250}
                //height={75}
                className={styles.aboutIcon}
              />
              <p>Thorough<br /> Evidence Review</p>
            </div>
            <div className={styles.aboutIconItem}>
              <Image 
                src={service}
                alt="Committed to Excellence in Service"
                //width={250}
                //height={75}
                className={styles.aboutIcon}
              />
              <p>Committed to<br /> Excellence in Service</p>
            </div>
          </div>
          <div className={styles.introButtonRow}>
            <a href="tel:6476972876">
              <button className={styles.introButton}>Free Consultation</button>
            </a>
          </div>
        </article>
      </section>

      <section className={styles.practiceRow}>
        <div className={styles.practiceContainer}>
          <div className={styles.leftHeadingContainer}>
            <h2 className={`${styles.sectionHeading} ${styles.practiceHeading}`}><Link href="/practice-areas">Practice Areas</Link></h2>
            <h3 className={`${styles.sectionSubheading} ${styles.practiceSubheading}`}>We Defend All Criminal Charges</h3>
            
          </div>
          <div className={styles.practiceCardContainer}>
            <article className={styles.practiceCard}>
              <h3><Link href="/practice-areas/sexual-offences/sexual-assault">Sexual Assault</Link></h3>
              <p><strong><Link href="/practice-areas/sexual-offences/sexual-assault">Sexual Assault</Link></strong> involves the unauthorized, intentional touching of another person in circumstances of a sexual nature, violating their sexual integrity.</p>
              <span className={styles.readMore}>
              <Link href="/practice-areas/sexual-offences/sexual-assault">Learn more about <strong>Sexual Assault Charges</strong></Link>
              </span><br/>
              <hr className={styles.blockEnd}></hr>
            </article>

            <article className={styles.practiceCard}>
              <h3><Link href="/practice-areas/driving-offences/impaired-driving">Impaired Driving</Link></h3>
              <p><strong><Link href="/practice-areas/driving-offences/impaired-driving">Impaired Driving</Link></strong> refers to the operation of a motor vehicle while under the influence of alcohol, drugs, or a combination of both, affecting one&apos;s ability to drive safely.</p>
              <span className={styles.readMore}>
              <Link href="/practice-areas/driving-offences/impaired-driving">Learn more about <strong>Impaired Driving Charges</strong></Link>
              </span><br/>
              <hr className={styles.blockEnd}></hr>
            </article>

            <article className={styles.practiceCard}>
              <h3><Link href="/practice-areas/assault-charges/assault">Assault</Link></h3>
              <p><strong><Link href="/practice-areas/assault-charges/assault">Assault</Link></strong> occurs when an individual intentionally applies force to another person without their consent, threatens to do so, or impedes someone while carrying a weapon.</p>
              <span className={styles.readMore}>
                <Link href="/practice-areas/assault-charges/assault">Assault<strong>Assault Charges</strong></Link>
              </span><br/>
              <hr className={styles.blockEnd}></hr>
            </article>

            <article className={styles.practiceCard}>
              <h3><Link href="/practice-areas/fraud-charges/fraud">Fraud</Link></h3>
              <p><strong><Link href="/practice-areas/fraud-charges/fraud">Fraud</Link></strong> involves the intentional use of deceit, falsehood, or other fraudulent means to deprive someone of property, money, or services.</p>
              <span className={styles.readMore}>
               <Link href="/practice-areas/fraud-charges/fraud">Learn more about <strong>Fraud Charges</strong></Link>
              </span><br/>
              <hr className={styles.blockEnd}></hr>
            </article>

            <article className={styles.practiceCard}>
              <h3>Uttering Threats</h3>
              <p><strong>Uttering threats</strong> involves knowingly making threats to cause death, bodily harm, damage property, or harm animals.</p>
              <span className={styles.readMore}>
                <a href="https://torontocriminallaw.net/practice-areas/sexual-assault/">Learn more about <strong>Uttering Threats Charges</strong>
                </a>
              </span><br/>
              <hr className={styles.blockEnd}></hr>
            </article>

            <article className={styles.practiceCard}>
              <h3><Link href="/practice-areas/criminal-harassment">Criminal Harassment</Link></h3>
              <p><strong><Link href="/practice-areas/criminal-harassment">Criminal Harassment</Link></strong> occurs when an individual, without lawful authority, engages in threatening or harassing behavior that causes someone to reasonably fear for their safety.</p>
              <span className={styles.readMore}>
              <Link href="/practice-areas/criminal-harassment">Learn more about <strong>Criminal Harassment Charges</strong></Link>
              </span><br/>
              <hr className={styles.blockEnd}></hr>
            </article>
            
            <article className={styles.practiceCard}>
              <h3><Link href="/practice-areas/young-offenders">Young Offenders</Link></h3>
              <p><strong><Link href="/practice-areas/young-offenders">Young Offenders</Link></strong> are individuals aged 12 to 17 who are accused of committing a crime. The Youth Criminal Justice Act (YCJA) ensures that the rights of young offenders are upheld by governing the legal process.</p>
              <span className={styles.readMore}>
              <Link href="/practice-areas/young-offenders">Learn more about <strong>Young Offender Charges</strong></Link>
              </span><br/>
              <hr className={styles.blockEnd}></hr>
            </article>

            <article className={styles.practiceCard}>
              <h3><Link href="/practice-areas/drug-charges/possession-of-narcotics">Possession of Narcotics</Link></h3>
              <p><strong><Link href="/practice-areas/drug-charges/possession-of-narcotics">Possession of narcotics</Link></strong> involves having control or custody of illegal substances. This can include personal possession, constructive possession (where the drugs are in a place controlled by the accused), or joint possession with others.</p>
              <span className={styles.readMore}>
              <Link href="/practice-areas/drug-charges/possession-of-narcotics">Learn more about <strong>Possession of Narcotics Charges</strong></Link>
              </span><br/>
              <hr className={styles.blockEnd}></hr>
            </article>

            <article className={styles.practiceCard}>
              <h3><Link href="/practice-areas/property-crimes/robbery">Robbery</Link></h3>
              <p><strong><Link href="/practice-areas/property-crimes/robbery">Robbery</Link></strong> involves theft combined with the use or threat of violence. This can include physical assaults, the use of a weapon, or actions intended to prevent resistance during the theft.</p>
              <span className={styles.readMore}>
              <Link href="/practice-areas/property-crimes/robbery">Learn more about <strong>Robbery Charges</strong></Link>
              </span><br/>
              <hr className={styles.blockEnd}></hr>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.infoRow}>
        <div className={styles.infoContainer}>
          <div className={styles.infoColumn}>
            <div className={styles.infoIconWrapper}>
                <Link href="/criminal-process/should-i-plead-guilty">
                  <Image 
                    src={guilty}
                    alt="Scales of justice icon"
                    //width={250}
                    //height={75}
                    className={styles.infoImage}
                  />
                </Link>
            </div>
            <div className={styles.infoContent}>
                <Link href="/criminal-process/should-i-plead-guilty">
                <h2 className={styles.infoHeading}>Should I Plead Guilty?</h2></Link>
                <p>Deciding whether to plead guilty is a significant choice that should not be taken lightly. It is crucial to understand the implications and possible outcomes of a guilty plea, including any penalties or long-term consequences. Consulting with a criminal lawyer can help you make an informed decision.</p>
            </div>
            <div className={styles.infoButtonContainer}>
              <Link href="/criminal-process/should-i-plead-guilty/" className={styles.infoButtonLink}>
                  <button className={`${styles.introButton} ${styles.infoButton}`}>Outcomes of a Guilty Plea</button>
              </Link>
            </div>
          </div>
          <div className={styles.infoColumn}>
            <div className={styles.infoIconWrapper}>
                <Link href="/criminal-process/can-i-beat-the-charges">
                  <Image 
                    src={beatCharges}
                    alt="Breaking free of chains icon"
                    //width={250}
                    //height={75}
                    className={styles.infoImage}
                  />
                </Link>
            </div>
            <div className={styles.infoContent}>
                <Link href="/criminal-process/can-i-beat-the-charges">
                <h2 className={styles.infoHeading}>Can I Beat The Charges?</h2></Link>
                <p>Facing criminal charges is daunting, but it is possible to challenge and potentially beat the charges against you. Key factors include whether your rights were violated, the strength of the prosecution&apos;s evidence, and available defences. A skilled criminal lawyer can provide the expertise needed to navigate these complexities and build a robust defence strategy.</p>
            </div>
            <div className={styles.infoButtonContainer}>
              <Link href="/criminal-process/can-i-beat-the-charges" className={styles.infoButtonLink}>
                <button className={`${styles.introButton} ${styles.infoButton}`}>Beating Criminal Charges</button>
              </Link>
            </div>
          </div>
          <div className={styles.infoColumn}>
            <div className={styles.infoIconWrapper}>
                <a href="tel:6476972876">
                  <Image 
                    src={speakLawyer}
                    alt="Speak to a criminal lawyer icon"
                    //width={250}
                    //height={75}
                    className={styles.infoImage}
                  />
                </a>
            </div>
            <div className={styles.infoContent}>
                <a href="tel:6476972876">
                <h2 className={styles.infoHeading}>Speak to a Criminal Lawyer Now</h2></a>
                <p>Speaking with an experienced criminal lawyer in Toronto as soon as possible is vital when faced with criminal charges. A Toronto criminal lawyer can provide immediate assistance, guide you through the legal process, and work to achieve the best possible outcome for your case.</p>
            </div>
            <div className={styles.infoButtonContainer}>
              <a href="tel:6476972876" className={styles.infoButtonLink}>
                <button className={`${styles.introButton} ${styles.infoButton}`}>Call Now</button>
            </a>
            </div>
            
          </div>
        </div>
      </section>

      <section className={styles.processRow}>
        <div className={styles.processContainer}>
        <div className={styles.leftHeadingContainer}>
          <h2 className={`${styles.sectionHeading} ${styles.criminalProcessh2}`}><Link href="/criminal-process">Criminal Process</Link></h2>
          <h3 className={styles.sectionSubheading}>Take The First Step Toward Your Defence</h3>
          </div>

          <article>
            <div className={styles.processPhotoContainer}>
              <Link href="/criminal-process">
                <Image 
                  src={criminalProcessPhoto}
                  alt="Committed to Excellence in Service"
                  //width={250}
                  //height={75}
                  className={styles.processImage}
                />
              </Link>
            </div>
            <div className={styles.processContentContainer}>
              <div className={styles.processContentBlock}>
                <div className={styles.processStepHeadingContainer}>
                  <Image 
                    src={firstStep}
                    alt="First Step - Initial Consultation"
                    //width={250}
                    //height={75}
                    className={styles.processIcon}
                  />
                  <div className={styles.processHeadingWrap}>
                    <h3><a href="tel:6476972876">Initial Consultation</a></h3>
                  </div>
                  
                </div>
                <p>The initial consultation is your first opportunity to discuss your case with a criminal lawyer. During this meeting you can explain your situation, ask questions, and receive preliminary advice on your legal options and the steps to take next.</p>
              </div>
              <div className={styles.processContentBlock}>
                <div className={styles.processStepHeadingContainer}>
                  <Image 
                    src={secondStep}
                    alt="Second Step - Disclosure Review"
                    //width={250}
                    //height={75}
                    className={styles.processIcon}
                  />
                  <div className={styles.processHeadingWrap}>
                  <h3><a href="tel:6476972876">Disclosure Review</a></h3>
                  </div>
                </div>
                <p>A thorough review of the disclosure, which includes all evidence the prosecution intends to use against you, is critical. Your criminal lawyer will analyze this information to identify any weaknesses in the case and develop a defence strategy tailored to your situation.</p>
              </div>
              <div className={styles.processContentBlock}>
                <div className={styles.processStepHeadingContainer}>
                  <Image 
                    src={thirdStep}
                    alt="Third Step - Discuss Your Options"
                    //width={250}
                    //height={75}
                    className={styles.processIcon}
                  />
                  <div className={styles.processHeadingWrap}>
                  <h3><a href="tel:6476972876">Discuss Your Options</a></h3>
                  </div>
                </div>
                <p>Your criminal lawyer will discuss your legal options with you after reviewing the disclosure. This includes potential defences, the likelihood of success, and the possible outcomes of your case. Together, you will determine the best course of action.</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className={styles.ctaRow}>
        <div className={styles.ctaContainer}>
          <article className={styles.ctaCopySection}>
            <div className={styles.leftHeadingContainer}>
              <h2 className={`${styles.sectionHeading} ${styles.ctaHeading}`}>The Benefits of Hiring a Criminal Lawyer</h2>
              <h3 className={styles.sectionSubheading}>Don&apos;t Wait. Speak to a Criminal Lawyer Today</h3>
            </div>
            <div className={styles.ctaContentContainer}>
              <div className={styles.ctaCopyBlock}>
                <p>When charged with a crime, having a criminal lawyer on your side makes all the difference. Your criminal lawyer will build a defence strategy tailored to your situation, challenge improper evidence, uncover new evidence, and identify witnesses who may help support your defence.<br/><br/>
                Additionally, your criminal lawyer will handle all the legal complexities, from taking care of administrative procedures to negotiating with prosecutors for reduced charges or a favorable plea bargain. Their goal is to protect your rights and get the best possible outcome for your case.</p>
                {/* Map widget */}
              </div>
            </div>
          </article>
          <div className={styles.ctaFormContainer}>
            <LeadForm />
          </div>
        </div>
      </section>

      <section className={styles.faqRow}>
        <div className={styles.faqContainer}>
          <div className={`${styles.FAQTitleRow} ${styles.headingContainer}`}>
            <h2 className={`${styles.sectionHeading}`}><Link href="/criminal-process/faq">Frequently Asked Questions</Link></h2>
            <h3 className={`${styles.sectionSubheading}`}>Got a Question? Give us a call</h3>
          </div>
          <FAQAccordion />
          <div className={styles.FAQButtonContainer}>
              <Link href="/criminal-process/faq" className={styles.infoButtonLink}>
                <button className={styles.faqButton}>View Our FAQ</button>
            </Link>
            </div>
        </div>
      </section>
    </main>
  );
}
