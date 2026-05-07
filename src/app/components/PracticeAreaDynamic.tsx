"use client"

import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/PracticeAreas.module.css";

interface PracticeArea {
  id: number;
  title: string;
  heading: string;
  paragraph: string;
  buttonLabel: string;
  buttonHref: string;
  image: string;
}

const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 1,
    title: "Assault",
    heading: "Self-Defence, Consent, or False Allegation? Let’s Talk.",
    paragraph:
      "Assault charges in Canada can arise from allegations of intentional force, threats, gestures, or other conduct that causes another person to believe force may be used. A conviction can affect your employment, travel, reputation, family relationships, and future opportunities. Our firm will carefully review the disclosure, witness statements, police conduct, and available defences to help you understand your options and respond strategically to the charge. ",
    buttonLabel: "Free Case Review",
    buttonHref: "tel:6473722661",
    image: "https://imagedelivery.net/8au6u53Ph6mHP5o5AhlVXQ/f6218b1a-69f0-43d2-1746-b70edde0b900/public",
  },
  {
    id: 2,
    title: "Sexual Assault",
    heading: "Charged with Historic or Recent Sexual Assault? Don’t Speak Alone",
    paragraph:
      "A sexual assault charge is one of the most serious allegations a person can face. These cases often involve complex issues such as consent, credibility, communication, intoxication, digital evidence, prior communications, and the surrounding circumstances of the allegation. A conviction can carry severe criminal penalties, registration consequences, and lasting personal and professional harm. Our team approaches sexual assault cases with discretion, preparation, and a focused defence strategy from the earliest stage of the proceedings.",
    buttonLabel: "Free Case Review",
    buttonHref: "tel:6473722661",
    image: "https://imagedelivery.net/8au6u53Ph6mHP5o5AhlVXQ/724b9776-f786-47f1-b405-8d0bc5cb3100/public",
  },
  {
    id: 3,
    title: "Impaired Driving",
    heading: "Protect Your Licence, Job, and Criminal Record",
    paragraph:
      "Impaired driving charges can involve alcohol, drugs, or a combination of both. You may be charged if police allege that your ability to operate a conveyance was impaired, or if your blood alcohol concentration was at or above the legal limit within two hours of driving. These charges can affect your licence, employment, insurance, travel, and criminal record. Our team will do a comprehensive review of the traffic stop, breath or blood testing process, police observations, Charter issues, and technical evidence to identify the strongest available defence.",
    buttonLabel: "Free Case Review",
    buttonHref: "tel:6473722661",
    image: "https://imagedelivery.net/8au6u53Ph6mHP5o5AhlVXQ/37bfa81c-8140-4ffc-aa6e-3f042a2d2800/public",
  },
  {
    id: 4,
    title: "Fraud",
    heading: "Criminal Fraud: Intent, Proof, and Expert Defence",
    paragraph:
      "Fraud charges can arise from allegations involving deceit, falsehood, dishonest conduct, financial loss, misuse of funds, false documents, employee theft, online transactions, business dealings, or other financial disputes. These cases often depend on detailed records, intent, communications, banking evidence, and whether the Crown can prove dishonest conduct beyond a reasonable doubt. We'll build a sound defence by reviewing the evidence throughly, identifying weaknesses in the Crown’s theory, and helping you respond to the charge with a clear defence strategy.",
    buttonLabel: "Free Case Review",
    buttonHref: "tel:6473722661",
    image: "https://imagedelivery.net/8au6u53Ph6mHP5o5AhlVXQ/b531a92d-badc-4ede-d0f9-efff6d681300/public",
  },
  {
    id: 5,
    title: "Drug Charges",
    heading: "Facing CDSA Charges? Don’t Plea Without a Defence Lawyer",
    paragraph:
      "Drug charges in Canada can include possession, trafficking, possession for the purpose of trafficking, production, importing, or exporting controlled substances. These cases often involve search and seizure issues, police surveillance, confidential informants, vehicle or home searches, cellphone evidence, and whether the Crown can prove knowledge, control, and intent. At N.P. Robinson Law, our seasoned defence counsel will examine the legality of the investigation, the handling of the evidence, and the specific facts surrounding the allegation to help build a strong defence.",
    buttonLabel: "Free Case Review",
    buttonHref: "tel:6473722661",
    image: "https://imagedelivery.net/8au6u53Ph6mHP5o5AhlVXQ/58d0ccd1-31fe-4baf-605e-53d8604caf00/public",
  },
  {
    id: 6,
    title: "Firearm Offences",
    heading: "Unsafe Storage, Unlicensed Possession, or Weapon Trafficking",
    paragraph:
      "Firearm offences in Canada can involve allegations of unauthorized possession, possession of a restricted or prohibited firearm, possession with ammunition, careless storage, weapons trafficking, or possession of a weapon for a dangerous purpose. These charges often involve complex questions about licensing, registration, knowledge, possession, search warrants, vehicle searches, and whether the accused had actual control over the firearm. Our team will carefully review the police investigation, search and seizure issues, forensic evidence, and the specific firearm-related allegations to help protect your rights and future.",
    buttonLabel: "Free Case Review",
    buttonHref: "tel:6473722661",
    image: "https://imagedelivery.net/8au6u53Ph6mHP5o5AhlVXQ/f14271ca-c55c-431b-fda1-9f47e2be1400/public",
  },
];

const ROW_TOP = PRACTICE_AREAS.slice(0, 3);  // First 3 items (ids 1-3)
const ROW_BOT = PRACTICE_AREAS.slice(3);     // Remaining items (ids 4-6)

function SectionHeader() {
  return (
    <div className={styles["section-header"]}>
      <span className={styles["header-rule"]} />
      <h2 className={styles["section-h2"]}>Practice Areas</h2>
      <h3 className={styles["section-h3"]}>We Get Winning Results</h3>
    </div>
  );
}
 
// ─── Desktop Component ────────────────────────────────────────────────────────
 
function DesktopPracticeAreas() {
  const [activeId, setActiveId] = useState<number>(1);
  const active = PRACTICE_AREAS.find((p) => p.id === activeId)!;
 
  function Thumbnail({ area }: { area: PracticeArea }) {
    const isActive = area.id === activeId;
    return (
      <button
        onClick={() => setActiveId(area.id)}
        className={
          isActive
            ? `${styles["thumbnail-btn"]} ${styles["is-active"]}`
            : styles["thumbnail-btn"]
        }
        aria-pressed={isActive}
      >
        <Image
          src={area.image}
          alt={area.title}
          fill
          sizes="33vw"
          className={styles["thumb-img"]}
          priority={area.id === 1}
        />
        <span className={styles["thumb-overlay"]} />
        <span className={styles["thumb-title"]}>{area.title}</span>
        <span className={styles["thumb-active-bar"]} />
      </button>
    );
  }
 
  return (
    <section className={styles["pa-section"]}>
      <div className={styles["pa-inner"]}>
        <SectionHeader />
 
        {/* Row 1 — three thumbnails */}
        <div className={styles["thumb-row"]}>
          {ROW_TOP.map((area) => (
            <Thumbnail key={area.id} area={area} />
          ))}
        </div>
 
        {/* Row 2 — featured image + content */}
        {/* To add padding above/below this row, uncomment padding in .featured-row-wrap */}
        <div className={styles["featured-row-wrap"]}>
          <div className={styles["featured-row"]}>
            <div className={styles["featured-image-wrap"]}>
              <Image
                src={active.image}
                alt={active.title}
                fill
                sizes="50vw"
                className={styles["featured-img"]}
                priority
              />
              <div className={styles["featured-img-overlay"]} />
            </div>
            <div className={styles["featured-content"]}>
              <p className={styles["featured-practice-label"]}>{active.title}</p>
              <h2 className={styles["featured-heading"]}>{active.heading}</h2>
              <p className={styles["featured-paragraph"]}>{active.paragraph}</p>
              <a href={active.buttonHref} className={styles["featured-btn"]}>
                {active.buttonLabel}
              </a>
            </div>
          </div>
        </div>
 
        {/* Row 3 — three thumbnails */}
        <div className={styles["thumb-row"]}>
          {ROW_BOT.map((area) => (
            <Thumbnail key={area.id} area={area} />
          ))}
        </div>
      </div>
    </section>
  );
}
 
// ─── Mobile Accordion Component ───────────────────────────────────────────────
 
function MobilePracticeAreas() {
  const [openId, setOpenId] = useState<number | null>(null);
 
  const toggle = (id: number) =>
    setOpenId((prev) => (prev === id ? null : id));
 
  return (
    <section className={styles["pa-section-mobile"]}>
      <SectionHeader />
 
      <div className={styles["accordion-list"]}>
        {PRACTICE_AREAS.map((area) => {
          const isOpen = openId === area.id;
          return (
            <div
              key={area.id}
              className={
                isOpen
                  ? `${styles["accordion-item"]} ${styles["is-open"]}`
                  : styles["accordion-item"]
              }
            >
              <button
                className={styles["accordion-trigger"]}
                onClick={() => toggle(area.id)}
                aria-expanded={isOpen}
              >
                <span className={styles["accordion-title"]}>{area.title}</span>
                <span
                  className={
                    isOpen
                      ? `${styles["accordion-icon"]} ${styles["rotated"]}`
                      : styles["accordion-icon"]
                  }
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M4 6.5L9 11.5L14 6.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
 
              {/* Collapsible body — grid-template-rows trick for smooth animation */}
              <div className={styles["accordion-body"]}>
                <div>
                  <div className={styles["accordion-image-wrap"]}>
                    <Image
                      src={area.image}
                      alt={area.title}
                      fill
                      sizes="100vw"
                      className={styles["accordion-img"]}
                    />
                    <div className={styles["accordion-img-overlay"]} />
                  </div>
                  <div className={styles["accordion-content"]}>
                    <h3 className={styles["accordion-heading"]}>{area.heading}</h3>
                    <p className={styles["accordion-paragraph"]}>{area.paragraph}</p>
                    <a href={area.buttonHref} className={styles["featured-btn"]}>
                      {area.buttonLabel}
                      <span className={styles["btn-arrow"]}>→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
 
// ─── Root Export ──────────────────────────────────────────────────────────────
// Both components mount; CSS controls which is visible based on screen width.
 
export default function PracticeAreasSection() {
  return (
    <>
      <div className={styles["desktop-only"]}>
        <DesktopPracticeAreas />
      </div>
      <div className={styles["mobile-only"]}>
        <MobilePracticeAreas />
      </div>
    </>
  );
}







