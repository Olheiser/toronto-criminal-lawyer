import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import CalendlyWidget from "./components/CalendlyButton";
//import CalendlyPopupButton from "./components/CalendlyPopupButton";
import "./globals.css"
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
      <body id="root">
        <Header />
         {/* <PageHeader title="About" /> */}
        {children}
        <ScrollToTop />
        <CalendlyWidget /> 
        {/* <CalendlyPopupButton />*/}
        <Footer />
      </body>
    </html>
  );
}