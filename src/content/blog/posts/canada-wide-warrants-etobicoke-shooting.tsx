import React from "react";
import styles from "@/styles/Subpage.module.css";

export default function PostBody() {
    return (
        <>
            <p>Toronto police have issued Canada-wide arrest warrants for two suspects in connection with the fatal shooting of 18-year-old Malik Abass in Etobicoke.</p>
            <p className={styles.contentBreak}>According to a November 14 report by the <a href="https://www.thestar.com/news/gta/canada-wide-warrants-issued-for-two-suspects-in-fatal-shooting-of-18-year-old/article_c492625c-7f9d-4e8c-a1b9-f54856e869e4.html">Toronto Star</a>, the suspects are a 19-year-old man and a 17-year-old boy, both from Toronto. Each faces four charges, including second-degree murder, attempted murder, and two firearms-related offences.</p>

            <h2>Fatal Shooting Near Rathburn Road and The East Mall</h2>
            <p>On November 7, 2026, shortly before 4:30 pm, Toronto police responded to a shooting near Rathburn Road and The East Mall in Etobicoke.</p>
            <p>Officers located Abass suffering from gunshot wounds. He was transported to hospital, where he later died. His death was Toronto&apos;s 33rd reported homicide of 2026.</p>
            <p>Abass, a Mississauga resident and Grade 12 student at Silverthorn Collegiate Institute, had aspirations of becoming a lawyer. Family and friends gathered for a vigil on November 12 to remember him.</p>
        </>
    );
}
