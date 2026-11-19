import React from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import styles from "@/styles/Location.module.css";
import LeadForm from "./LeadForm";
import Breadcrumbs from "./Breadcrumbs";
import RevealOnView from "./RevealOnView";
import {
    PHONE_DISPLAY,
    PHONE_TEL,
    PRACTICE_AREAS,
    getSortedLocations,
    locationSlug,
    type Location,
} from "@/content/locations/locations";
import clientFocused from "../../../public/client-focused-representation.webp";
import availability from "../../../public/availability.webp";
import trackRecord from "../../../public/track-record.webp";
import paymentFlexibility from "../../../public/payment-flexibility.webp";
import evidenceReview from "../../../public/evidence-review.webp";
import service from "../../../public/service.webp";

const METRICS = [
    { value: "1,300+", label: "Clients Represented" },
    { value: "100+", label: "Successful Trial Matters" },
    { value: "15+", label: "Years Defending Canadians" },
    { value: "24/7", label: "Availability and Client Support" },
];

const REASONS: { icon: StaticImageData; label: string }[] = [
    { icon: clientFocused, label: "Client-focused Representation" },
    { icon: availability, label: "24/7 Availability" },
    { icon: trackRecord, label: "Proven Track Record" },
    { icon: paymentFlexibility, label: "Payment Flexibility" },
    { icon: evidenceReview, label: "Thorough Evidence Review" },
    { icon: service, label: "Committed to Excellence in Service" },
];

const STEPS = [
    {
        title: "Initial Consultation",
        text: "The free initial consultation is your first opportunity to discuss your case with a criminal lawyer. Explain your situation, ask questions, and receive preliminary advice on your legal options and the steps to take next.",
    },
    {
        title: "Disclosure Review",
        text: "Disclosure is the evidence the Crown intends to use against you. Your criminal defence lawyer reviews it in detail to identify weaknesses in the case, possible Charter violations, and the defence strategy best suited to your situation.",
    },
    {
        title: "Discuss Your Options",
        text: "After reviewing the disclosure, your lawyer explains your options, including potential defences, the likelihood of success at trial, and possible resolutions. Together, you decide on the best course of action.",
    },
];

export default function LocationPage({ location }: { location: Location }) {
    const { city } = location;
    // Every other published city page is linked; nearby areas without a page are listed as text.
    const otherCities = getSortedLocations().filter((l) => l.slug !== location.slug);
    const publishedSlugs = new Set(otherCities.map((l) => l.slug));
    const nearbyUnpublished = location.nearbyAreas.filter((area) => !publishedSlugs.has(locationSlug(area)));
    const courtLabel = location.courthouses.length > 1 ? "Courthouses" : "Courthouse";

    return (
        <main className={styles.pageBody}>
            {/* ---------- Hero ---------- */}
            <section className={styles.hero}>
                <Image
                    src={location.hero.src}
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    className={styles.heroImage}
                />
                <div className={styles.heroOverlay} />
                <div className={styles.heroContent}>
                    <p className={styles.heroEyebrow}>Practicing Exclusively Criminal Law</p>
                    <h1 className={styles.heroTitle}>{city} Criminal Lawyer</h1>
                    <p className={styles.heroTagline}>{location.tagline}</p>
                    <ul className={styles.metrics}>
                        {METRICS.map((m) => (
                            <li key={m.label}>
                                <span className={styles.metricValue}>{m.value}</span>
                                <span className={styles.metricLabel}>{m.label}</span>
                            </li>
                        ))}
                    </ul>
                    <div className={styles.heroButtons}>
                        <a href={PHONE_TEL} className={styles.primaryButton}>Call {PHONE_DISPLAY}</a>
                        <a href="#consultation" className={styles.secondaryButton}>Free Consultation</a>
                    </div>
                </div>
            </section>

            <div className={styles.breadcrumbRow}>
                <Breadcrumbs
                    items={[
                        { name: "Home", href: "/" },
                        { name: `${city} Criminal Lawyer`, href: `/${location.slug}` },
                    ]}
                />
            </div>

            {/* ---------- Body: content + sticky form ---------- */}
            <div className={styles.pageContainer}>
                <article className={styles.pageContent}>
                    <section className={styles.section}>
                        <h2>Charged With a Crime in {city}?</h2>
                        {location.intro.map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                    </section>

                    <section className={styles.section}>
                        <h2>Why Hire Nicholas Robinson for Your {city} Case</h2>
                        <p>
                            <Link href="/about">Nicholas Robinson</Link> has been practicing law in Ontario since
                            2010. As your criminal defence lawyer, he provides personalized, strategic and
                            compassionate representation, from the first court appearance in {city} through to
                            trial. If you or someone close to you has been arrested, help is a phone call away.
                        </p>
                        <ul className={styles.reasonGrid}>
                            {REASONS.map((r) => (
                                <li key={r.label}>
                                    <Image src={r.icon} alt="" className={styles.reasonIcon} />
                                    <span>{r.label}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2>Criminal Charges We Defend in {city}</h2>
                        <p>
                            Nicholas Robinson defends <Link href="/practice-areas">all criminal charges</Link> in{" "}
                            {city}, including:
                        </p>
                        <div className={styles.practiceGrid}>
                            {PRACTICE_AREAS.map((area) => (
                                <div key={area.href} className={styles.practiceCard}>
                                    <h3>
                                        <Link href={area.href}>{city} {area.name} Lawyer</Link>
                                    </h3>
                                    <p>{area.description}</p>
                                    <Link href={area.href} className={styles.learnMore}>
                                        Learn more about {area.name.toLowerCase()} charges →
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2>{city} {courtLabel}</h2>
                        <p>
                            Criminal charges laid by the {location.policeService} are heard at the following{" "}
                            {courtLabel.toLowerCase()}:
                        </p>
                        {location.courthouses.map((court) => (
                            <div key={court.name} className={styles.courtCard}>
                                {court.image && (
                                    <div className={styles.courtImageWrap}>
                                        <Image
                                            src={court.image.src}
                                            alt={court.image.alt}
                                            fill
                                            sizes="(max-width: 599px) 100vw, 280px"
                                            className={styles.courtImage}
                                        />
                                    </div>
                                )}
                                <div className={styles.courtBody}>
                                    <h3>{court.name}</h3>
                                    <address className={styles.courtAddress}>
                                        {court.addressLines.map((line) => (
                                            <span key={line}>{line}</span>
                                        ))}
                                        <span>Phone: {court.phone}</span>
                                    </address>
                                    <p>{court.note}</p>
                                    <a href={court.mapsUrl} target="_blank" rel="noopener noreferrer">
                                        Get directions
                                    </a>
                                </div>
                            </div>
                        ))}
                    </section>

                    <section className={styles.section}>
                        <h2>The Criminal Process in {city}</h2>
                        <p>
                            Every case is different, but working with a criminal lawyer generally follows three
                            steps. Learn more about the <Link href="/criminal-process">criminal process</Link>.
                        </p>
                        <ol className={styles.steps}>
                            {STEPS.map((step, i) => (
                                <li key={step.title}>
                                    <span className={styles.stepNumber}>{i + 1}</span>
                                    <div>
                                        <h3>{step.title}</h3>
                                        <p>{step.text}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </section>

                    <section className={styles.section}>
                        <h2>{city} Criminal Lawyer FAQ</h2>
                        <div className={styles.faqList}>
                            {location.faqs.map((faq) => (
                                <details key={faq.q} className={styles.faqItem}>
                                    <summary>
                                        <h3>{faq.q}</h3>
                                    </summary>
                                    <div className={styles.faqAnswer}>
                                        <p>{faq.a}</p>
                                    </div>
                                </details>
                            ))}
                        </div>
                        <p>
                            More answers are in our <Link href="/criminal-process/faq">criminal law FAQ</Link>.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2>Areas We Serve Near {city}</h2>
                        <ul className={styles.areaList}>
                            {nearbyUnpublished.map((area) => (
                                <li key={area}>{area}</li>
                            ))}
                            {otherCities.map((l) => (
                                <li key={l.slug}>
                                    <Link href={`/${l.slug}`}>{l.city} Criminal Lawyer</Link>
                                </li>
                            ))}
                            <li>
                                <Link href="/">Toronto Criminal Lawyer</Link>
                            </li>
                        </ul>
                    </section>

                    <section className={styles.ctaBox}>
                        <h2>Speak to {/^[aeiou]/i.test(city) ? "an" : "a"} {city} Criminal Lawyer Today</h2>
                        <p>
                            The sooner you get advice, the more options you have. If you have been arrested or
                            charged, call <a href={PHONE_TEL}>{PHONE_DISPLAY}</a> for a free and confidential
                            consultation.
                        </p>
                    </section>
                </article>

                <aside id="consultation" className={styles.formColumn}>
                    <RevealOnView className={styles.formReveal} visibleClassName={styles.formRevealed}>
                        <LeadForm />
                    </RevealOnView>
                </aside>
            </div>
        </main>
    );
}
