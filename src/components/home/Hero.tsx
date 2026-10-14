"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { LogoTicker, type LogoItem } from "@/components/ui/LogoTicker";

const ENTERPRISE_LOGOS: LogoItem[] = [
  {
    name: "Lulu Group",
    svg: (
      <span className="text-sm sm:text-base font-bold tracking-widest text-slate-600 font-sans uppercase">
        LuLu Group
      </span>
    ),
  },
  {
    name: "Kalyan Jewellers",
    svg: (
      <span className="text-sm sm:text-base font-bold tracking-widest text-slate-600 font-sans uppercase">
        Kalyan Jewellers
      </span>
    ),
  },
  {
    name: "Aster Medcity",
    svg: (
      <span className="text-sm sm:text-base font-bold tracking-widest text-slate-600 font-sans uppercase">
        Aster Medcity
      </span>
    ),
  },
  {
    name: "Federal Bank",
    svg: (
      <span className="text-sm sm:text-base font-bold tracking-widest text-slate-600 font-sans uppercase">
        Federal Bank
      </span>
    ),
  },
  {
    name: "Muthoot Finance",
    svg: (
      <span className="text-sm sm:text-base font-bold tracking-widest text-slate-600 font-sans uppercase">
        Muthoot Finance
      </span>
    ),
  },
  {
    name: "Jos Alukkas",
    svg: (
      <span className="text-sm sm:text-base font-bold tracking-widest text-slate-600 font-sans uppercase">
        Jos Alukkas
      </span>
    ),
  },
];

export function Hero() {
  return (
    <>
      {/* 100vh Full-Height Hero Section */}
      <section className="relative w-full bg-[#FFFFFF] min-h-[100dvh] lg:h-[100dvh] pt-18 sm:pt-20 flex flex-col border-b border-slate-200/80 overflow-hidden">
        {/* Background Architectural Dotted Texture (Faint) */}
        <div className="absolute inset-0 bg-dotted-grid opacity-30 pointer-events-none" />

        {/* 2-Column Split: Full Height */}
        <div className="w-full h-full flex-1 grid grid-cols-1 lg:grid-cols-12 min-h-0 items-stretch">
          {/* Left Column: Typography, Propositions, CTAs */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center px-6 sm:px-10 lg:pl-12 lg:pr-8 xl:pl-20 xl:pr-14 py-10 lg:py-12 z-10">
            <div className="max-w-xl xl:max-w-2xl">
              {/* Two-Tone Headline (Dark Slate + Electric Cobalt Blue) */}
              <h1 className="text-4xl sm:text-5xl lg:text-[46px] xl:text-[54px] font-bold tracking-tight text-[#0F172A] leading-[1.08]">
                Next-Generation DOOH Network{" "}
                <span className="text-[#0052FF]">& Digital Signage Software</span>
              </h1>

              {/* Plain Speech Body */}
              <p className="mt-5 text-base sm:text-lg text-[#64748B] leading-relaxed max-w-xl">
                Broadcast programmatic campaigns across 130+ high-footfall commercial spaces in South India, or manage your screen network with mStream AI cloud CMS.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button href="/contact" variant="brand" size="lg" showArrow>
                  Request a Demo
                </Button>
                <Button href="#telemetry" variant="secondary" size="lg">
                  View Network Scale
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: Single Full-Height Commercial Visual */}
          <div className="lg:col-span-5 xl:col-span-5 relative w-full h-full min-h-[420px] lg:min-h-0 overflow-hidden border-t lg:border-t-0 lg:border-l border-slate-200/80 bg-slate-950">
            <Image
              src="/images/hero-display.jpg"
              alt="Commercial DOOH screen network in premier restaurant venue"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Enterprise Partner Marquee Strip (Seamless Transition to Telemetry) */}
      <div className="w-full bg-[#FFFFFF] border-b border-slate-200/80 py-6 sm:py-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-4 sm:mb-5">
            <span className="text-[11px] uppercase tracking-[0.22em] text-slate-400 font-semibold select-none font-sans">
              Trusted by Leading Advertisers and Commercial Venues
            </span>
          </div>
          <LogoTicker logos={ENTERPRISE_LOGOS} fadeColor="#FFFFFF" />
        </div>
      </div>
    </>
  );
}

export default Hero;
