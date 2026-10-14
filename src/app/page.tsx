import React from "react";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import InteractiveShowcase from "@/components/home/InteractiveShowcase";
import NetworkExplorer from "@/components/home/NetworkExplorer";
import CaseStudiesGrid from "@/components/home/CaseStudiesGrid";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://dms.family/#organization",
        name: "DMSG Private Limited",
        url: "https://dms.family",
        logo: "https://dms.family/logos/dms-logo.svg",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Pipeline Jn, Thrikkakara",
          addressLocality: "Ernakulam",
          addressRegion: "Kerala",
          postalCode: "682021",
          addressCountry: "IN",
        },
        sameAs: [
          "https://www.linkedin.com/company/dmsg",
          "https://startups.startupmission.in/startups/8L5v5",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://dms.family/#website",
        url: "https://dms.family",
        name: "DMSG",
        publisher: {
          "@id": "https://dms.family/#organization",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="w-full">
        <Hero />
        <TrustBar />
        <InteractiveShowcase />
        <NetworkExplorer />
        <CaseStudiesGrid />
        <CTASection />
      </main>
    </>
  );
}
