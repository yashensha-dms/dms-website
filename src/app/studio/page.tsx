import type { Metadata } from "next";
import Hero from "@/components/studio/Hero";
import Manifesto from "@/components/studio/Manifesto";
import WhatWeDo from "@/components/studio/WhatWeDo";
import HowWeWork from "@/components/studio/HowWeWork";
import FAQ from "@/components/studio/FAQ";
import ClosingCTA from "@/components/studio/ClosingCTA";

export const metadata: Metadata = {
  title: "DMS Studio | DMSG, Brand, Product & Engineering",
  description:
    "DMS Studio designs brand systems, builds digital products, and engineers operations infrastructure for international founders and companies.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://dms.family"}/studio`,
  },
};

export default function StudioPage() {
  return (
    <main className="w-full bg-[#FFFFFF] pt-18 sm:pt-20">
      <Hero />
      <Manifesto />
      <WhatWeDo />
      <HowWeWork />
      <FAQ />
      <ClosingCTA />
    </main>
  );
}


