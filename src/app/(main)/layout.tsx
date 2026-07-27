import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
//import CalendlyWidget from "./components/CalendlyButton";
import Script from "next/script"; // Import Script from Next.js
//import CalendlyPopupButton from "./components/CalendlyPopupButton";
import "../globals.css"
import type { Metadata } from "next";

//import { PopupButton } from "react-calendly";

export const metadata: Metadata = {
  title: "Nicholas Robinson Toronto Criminal Lawyer | Criminal Defence Services",
  description: "Nicholas Robinson offers expert criminal defence services in Toronto for all criminal charges. Call (647) 697-2876 for a free consultation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KGMGGPD6');
            `,
          }}
        />
        {/* End Google Tag Manager */}

  {/* Google tag (gtag.js) */}
  <Script
    src="https://www.googletagmanager.com/gtag/js?id=AW-653876065"
    strategy="afterInteractive" // Ensures script runs after page load
  />
  <Script
    id="google-analytics"
    strategy="afterInteractive" // Runs after the page becomes interactive
    dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'AW-653876065');
      `,
    }}
  />
</head>
      <body id="root">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KGMGGPD6"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
          </noscript>
        <Header />
         {/* <PageHeader title="About" /> */}
        {children}
        <ScrollToTop />
        {/*<CalendlyWidget /> */}
        {/* <CalendlyPopupButton />*/}
        <Footer />
      </body>
    </html>
  );
}