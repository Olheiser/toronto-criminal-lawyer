import Script from "next/script";

export default function GoogleBusinessProfileWidget() {
  return (
    <>
      <Script
        src="https://elfsightcdn.com/platform.js"
        strategy="lazyOnload"
      />
      <div
        className="elfsight-app-ea78fd6c-55f6-4bed-8b37-18393f9109ed"
        data-elfsight-app-lazy
      />
    </>
  );
}