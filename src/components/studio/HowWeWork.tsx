"use client";

import React, { useState } from "react";
import { motion } from "motion/react";

interface Step {
  number: string;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    number: "01",
    title: "Scoping Session",
    description:
      "A zero-cost call to understand what you need and whether we are the right fit.",
  },
  {
    number: "02",
    title: "Proposal",
    description:
      "Fixed scope, clear deliverables, milestone timeline. Delivered within 48 hours.",
  },
  {
    number: "03",
    title: "Kickoff",
    description:
      "Work begins after contract and advance. No ambiguity, no open billing.",
  },
  {
    number: "04",
    title: "Build",
    description:
      "Sprint delivery with daily staging updates. You review in real time through a shared channel.",
  },
  {
    number: "05",
    title: "Handoff",
    description:
      "Full source code, IP ownership, credentials, and documentation. Everything transferred, nothing held back.",
  },
];

export function HowWeWork() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#F8FAFC] min-h-[100dvh] mt-18 sm:mt-20 scroll-mt-18 sm:scroll-mt-20 flex flex-col justify-center py-16 md:py-24 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6">
        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-[#0F172A] font-sans leading-[1.08]">
            From first conversation to final handoff.
          </h2>
        </motion.div>

        {/* Steps track with thin connector line on desktop */}
        <div className="relative">
          {/* Thin #E2E8F0 connector line between steps on desktop */}
          <div
            className="hidden md:block absolute top-7 left-6 right-6 h-px bg-[#E2E8F0] z-0 pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-6 relative z-10">
            {STEPS.map((step, index) => {
              const isActive = activeStep === index;

              return (
                <div
                  key={step.number}
                  onMouseEnter={() => setActiveStep(index)}
                  onMouseLeave={() => setActiveStep(null)}
                  className="flex flex-col relative group cursor-default transition-transform duration-200"
                >
                  {/* Large, very muted step number behind the title text */}
                  <div
                    className={`text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight font-sans tabular-nums select-none leading-none -mb-4 md:-mb-5 transition-colors duration-200 ${
                      isActive ? "text-[#0052FF]/25" : "text-slate-200"
                    }`}
                  >
                    {step.number}
                  </div>

                  {/* Step title */}
                  <h3
                    className={`text-lg sm:text-xl font-semibold tracking-[-0.01em] font-sans relative z-10 transition-colors duration-150 ${
                      isActive ? "text-[#0052FF]" : "text-[#0F172A]"
                    }`}
                  >
                    {step.title}
                  </h3>

                  {/* Step description */}
                  <p className="mt-3 text-sm sm:text-base font-normal leading-[1.65] text-[#64748B] font-sans">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowWeWork;
