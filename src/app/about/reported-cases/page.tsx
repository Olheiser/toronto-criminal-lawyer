import React from "react"
import styles from "@/styles/Subpage.module.css";
import LeadForm from "../../components/LeadForm";
import PageHeader from "../../components/PageHeader";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reported Cases | Toronto Criminal Lawyer",
  description: "Nicholas Robinson is a criminal lawyer in Toronto with reported cases in numerous courts. Click here to learn about his reported cases.",
};

export default function Page() {
    return (
        <main className={styles.pageBody}>
            <PageHeader title="Reported Cases"/>
            <div className={styles.pageContainer}>
                <article className={styles.pageContent}>
                    <h2 className={styles.caseHeading}>Court of Appeal for Saskatchewan</h2>
                    <ul className={styles.casesList}>
                        <li>Telus Corporation v. Frey, <a href="https://www.canlii.org/en/sk/skca/doc/2010/2010skca32/2010skca32.html?searchUrlHash=AAAAAQAWcm9iaW5zb24gYW5kIG5pY2hvbGFzIAAAAAAB&resultIndex=5">2010 SKCA 32</a></li>
                        <li>Bell Mobility Inc. v. Frey, <a href="https://www.canlii.org/en/sk/skca/doc/2010/2010skca30/2010skca30.html?searchUrlHash=AAAAAQAWcm9iaW5zb24gYW5kIG5pY2hvbGFzIAAAAAAB&resultIndex=8">2010 SKCA 30</a></li>
                        <li>Frey v. Bell Mobility Inc., <a href="https://www.canlii.org/en/sk/skca/doc/2010/2010skca38/2010skca38.html?searchUrlHash=AAAAAQAWcm9iaW5zb24gYW5kIG5pY2hvbGFzIAAAAAAB&resultIndex=12">2010 SKCA 38</a></li>
                        <li>R v Boehmer, <a href="https://www.canlii.org/en/sk/skca/doc/2019/2019skca74/2019skca74.html?searchUrlHash=AAAAAQAWcm9iaW5zb24gYW5kIG5pY2hvbGFzIAAAAAAB&resultIndex=14">2010 SKCA 74</a></li>
                        <li>Saskatchewan Telecommunication v. Frey, <a href="https://www.canlii.org/en/sk/skca/doc/2010/2010skca35/2010skca35.html?searchUrlHash=AAAAAQAWcm9iaW5zb24gYW5kIG5pY2hvbGFzIAAAAAAB&resultIndex=16">2019 SKCA 35</a></li>
                        <li>Microcell Communications Inc. v. Frey, <a href="https://www.canlii.org/en/sk/skca/doc/2010/2010skca31/2010skca31.html?searchUrlHash=AAAAAQAWcm9iaW5zb24gYW5kIG5pY2hvbGFzIAAAAAAB&resultIndex=24">2010 SKCA 31</a></li>
                        <li>Bell Mobility Inc. v. Frey, <a href="https://www.canlii.org/en/sk/skca/doc/2010/2010skca36/2010skca36.html?searchUrlHash=AAAAAQAWcm9iaW5zb24gYW5kIG5pY2hvbGFzIAAAAAAB&resultIndex=26">2010 SKCA 36</a></li>
                        <li>Bell Aliant Regional Communications v. Frey, <a href="https://www.canlii.org/en/sk/skca/doc/2010/2010skca37/2010skca37.html?searchUrlHash=AAAAAQAWcm9iaW5zb24gYW5kIG5pY2hvbGFzIAAAAAAB&resultIndex=27">2010 SKCA 37</a></li>
                        <li>Bell Aliant Regional Communications Limited Partnership v. Frey,<a href="https://www.canlii.org/en/sk/skca/doc/2010/2010skca33/2010skca33.html?searchUrlHash=AAAAAQAWcm9iaW5zb24gYW5kIG5pY2hvbGFzIAAAAAAB&resultIndex=28">2010 SKCA 33</a></li>
                        <li>MTS Communications Inc. V Frey, <a href="https://www.canlii.org/en/sk/skca/doc/2010/2010skca34/2010skca34.html?searchUrlHash=AAAAAQAWcm9iaW5zb24gYW5kIG5pY2hvbGFzIAAAAAAB&resultIndex=30">2010 SKCA 34</a></li>
                    </ul>
                    <h2 className={styles.caseHeading}>King&apos;s Bench for Saskatchewan</h2>
                    <ul className={styles.casesList}>
                        <li>Driediger v. Ashley Furniture Industries Inc., <a href="https://www.canlii.org/en/sk/skqb/doc/2010/2010skqb437/2010skqb437.html?searchUrlHash=AAAAAQAWcm9iaW5zb24gYW5kIG5pY2hvbGFzIAAAAAAB&resultIndex=4">2010 SKQB 437</a></li>
                        <li>White v. Glaxosmithkline Inc., <a href="https://www.canlii.org/en/sk/skqb/doc/2010/2010skqb174/2010skqb174.html?searchUrlHash=AAAAAQAWcm9iaW5zb24gYW5kIG5pY2hvbGFzIAAAAAAB&resultIndex=13">2010 SKQB 174</a></li>
                        <li>Palsich v Williams, <a href="https://www.canlii.org/en/sk/skqb/doc/2012/2012skqb367/2012skqb367.html?searchUrlHash=AAAAAQAWcm9iaW5zb24gYW5kIG5pY2hvbGFzIAAAAAAB&resultIndex=18">2012 SKQB 367</a></li>
                        <li>McGhie v R, <a href="https://www.canlii.org/en/sk/skqb/doc/2014/2014skqb295/2014skqb295.html?searchUrlHash=AAAAAQAWcm9iaW5zb24gYW5kIG5pY2hvbGFzIAAAAAAB&resultIndex=20">2014 SKQB 295</a></li>
                        <li>White v. Glaxosmithkline, Inc., <a href="https://www.canlii.org/en/sk/skqb/doc/2010/2010skqb108/2010skqb108.html?searchUrlHash=AAAAAQAWcm9iaW5zb24gYW5kIG5pY2hvbGFzIAAAAAAB&resultIndex=21">2010 SKQB 108</a></li>
                        <li>R v Bielawski, <a href="https://www.canlii.org/en/sk/skqb/doc/2012/2012skqb288/2012skqb288.html?searchUrlHash=AAAAAQAWcm9iaW5zb24gYW5kIG5pY2hvbGFzIAAAAAAB&resultIndex=34">2012 SKQB 288</a></li>
                        <li>R v Wingenbach, <a href="https://www.canlii.org/en/sk/skqb/doc/2012/2012skqb237/2012skqb237.html?searchUrlHash=AAAAAQAWcm9iaW5zb24gYW5kIG5pY2hvbGFzIAAAAAAB&resultIndex=35">2012 SKQB 237</a></li>
                        <li>R. v. Medvid, <a href="https://ca.vlex.com/vid/medvid-v-sask-681054165">2010 SKQB 22</a></li>
                    </ul>
                    <h2 className={styles.caseHeading}>Superior Court of Ontario</h2>
                    <ul className={styles.casesList}>
                        <li>Duong v. Fisher-Price, Wal-Mart et al. <a href="https://www.canlii.org/en/on/onsc/doc/2011/2011onsc5618/2011onsc5618.html">2011 ONSC 5618</a></li>
                        <li>Wiggins v. Mattel <a href="https://www.canlii.org/en/on/onsc/doc/2011/2011onsc2964/2011onsc2964.html?searchUrlHash=AAAAAQAVTmljaG9sYXMgYW5kIFJvYmluc29uAAAAAAE&resultIndex=16">2011 ONSC 2964</a></li>
                    </ul>
                    <h2 className={styles.caseHeading}>Provincial Court of Saskatchewan</h2>
                    <ul className={styles.casesList}>
                        <li>R v Rutherford, <a href="https://www.canlii.org/en/sk/skpc/doc/2014/2014skpc73/2014skpc73.html?searchUrlHash=AAAAAQAWcm9iaW5zb24gYW5kIG5pY2hvbGFzIAAAAAAB&resultIndex=17">2014 SKPC 73</a></li>
                        <li>R v Bartholomew Franklynn Besplug, <a href="https://www.canlii.org/en/sk/skpc/doc/2018/2018skpc41/2018skpc41.html?searchUrlHash=AAAAAQAWcm9iaW5zb24gYW5kIG5pY2hvbGFzIAAAAAAB&resultIndex=36">2018 SKPC 41</a></li>
                        <li>R v Wiebe <a href="https://www.canlii.org/en/sk/skpc/doc/2018/2018skpc38/2018skpc38.html?searchUrlHash=AAAAAQAQUm9iaW5zb24gYW5kIE4uIAAAAAAB&resultIndex=11">2018 SKPC 38</a></li>
                        <li>R v Sweeney, <a href="https://www.canlii.org/en/sk/skpc/doc/2016/2016skpc63/2016skpc63.html?searchUrlHash=AAAAAQAWcm9iaW5zb24gYW5kIG5pY2hvbGFzIAAAAAAB&resultIndex=37">2016 SKPC 63</a></li>
                        <li>R v Rachner, <a href="https://www.canlii.org/en/sk/skpc/doc/2013/2013skpc143/2013skpc143.html?searchUrlHash=AAAAAQAWcm9iaW5zb24gYW5kIG5pY2hvbGFzIAAAAAAB&resultIndex=38">2013 SKPC 143</a></li>
                        <li>R v Franke, <a href="https://www.canlii.org/en/sk/skpc/doc/2013/2013skpc86/2013skpc86.html?searchUrlHash=AAAAAQAWcm9iaW5zb24gYW5kIG5pY2hvbGFzIAAAAAAB&resultIndex=22">2013 SKPC 86</a></li>
                        <li>R v Kukurudz <a href="https://www.canlii.org/en/sk/skpc/doc/2011/2011skpc141/2011skpc141.html?searchUrlHash=AAAAAQAQUm9iaW5zb24gYW5kIE4uIAAAAAAB&resultIndex=5">2011 SKPC 141</a></li>
                    </ul>
                </article>
                <aside className={styles.form}>
                    <LeadForm />
                </aside>
            </div>
        </main>
    )
}