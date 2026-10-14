"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Discipline {
  id: string;
  number: string;
  title: string;
  description: string;
}

const DISCIPLINES: Discipline[] = [
  {
    id: "brand",
    number: "01",
    title: "Brand Systems",
    description:
      "We build the visual foundation your company stands on. Logo, guidelines, typography, color, and design tokens that scale from a business card to a full software interface.",
  },
  {
    id: "product",
    number: "02",
    title: "Digital Products",
    description:
      "Websites, web applications, mobile backends, e-commerce systems, APIs, and admin panels. Custom built, production ready, handed over with full documentation.",
  },
  {
    id: "infra",
    number: "03",
    title: "Operations Infrastructure",
    description:
      "CRM configuration and infrastructure set up on your own server. You own it. You control it. We configure it, document it, and hand over the keys.",
  },
];

export function WhatWeDo() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const activeDiscipline = DISCIPLINES[selectedIndex];

  return (
    <section className="w-full bg-[#FFFFFF] min-h-[100dvh] mt-18 sm:mt-20 scroll-mt-18 sm:scroll-mt-20 flex flex-col justify-center py-8 sm:py-12 md:py-16">
      <div className="w-full max-w-7xl mx-auto px-6 flex-1 flex flex-col justify-center">
        {/* Desktop: Zero border-radius, full-section architectural split layout */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-12 xl:gap-20 items-stretch min-h-[520px]">
          {/* Left Column: Sharp architectural selector list */}
          <div className="lg:col-span-5 flex flex-col justify-center border-r border-[#E2E8F0] pr-10 xl:pr-14">
            <div className="divide-y divide-[#E2E8F0] border-y border-[#E2E8F0] w-full">
              {DISCIPLINES.map((discipline, index) => {
                const isSelected = selectedIndex === index;

                return (
                  <button
                    key={discipline.id}
                    type="button"
                    onClick={() => setSelectedIndex(index)}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`w-full text-left py-8 px-6 transition-all duration-200 cursor-pointer select-none group flex items-center justify-between rounded-none border-l-2 ${
                      isSelected
                        ? "bg-[#F8FAFC] border-l-[#0052FF]"
                        : "bg-transparent hover:bg-slate-50/60 border-l-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-6">
                      <span
                        className={`text-sm uppercase tracking-[0.08em] font-sans tabular-nums transition-colors ${
                          isSelected
                            ? "text-[#0052FF] font-semibold"
                            : "text-slate-400 group-hover:text-slate-600 font-normal"
                        }`}
                      >
                        {discipline.number}
                      </span>
                      <span
                        className={`text-2xl xl:text-3xl font-semibold tracking-[-0.02em] font-sans transition-colors ${
                          isSelected
                            ? "text-[#0F172A]"
                            : "text-slate-500 group-hover:text-[#0F172A]"
                        }`}
                      >
                        {discipline.title}
                      </span>
                    </div>

                    <span
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        isSelected
                          ? "bg-[#0052FF] scale-100"
                          : "bg-transparent scale-0"
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Free, dominating open area with zero card wrappers */}
          <div className="lg:col-span-7 flex flex-col justify-center pl-4 xl:pl-8 py-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDiscipline.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="flex flex-col justify-center max-w-2xl"
              >
                <span className="text-xs uppercase tracking-[0.14em] font-medium text-[#0052FF] font-sans tabular-nums select-none">
                  {activeDiscipline.number}
                </span>

                <h2 className="mt-5 text-4xl sm:text-6xl md:text-7xl xl:text-[80px] font-bold text-[#0F172A] tracking-[-0.035em] leading-[0.98] font-sans text-balance">
                  {activeDiscipline.title}
                </h2>

                <p className="mt-8 text-xl sm:text-2xl md:text-[26px] font-normal leading-[1.5] text-[#64748B] font-sans">
                  {activeDiscipline.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile & Tablet: Free, open architectural stacked view (zero border-radius) */}
        <div className="lg:hidden flex flex-col divide-y divide-[#E2E8F0] border-y border-[#E2E8F0]">
          {DISCIPLINES.map((discipline) => (
            <div key={discipline.id} className="py-10 flex flex-col">
              <span className="text-xs uppercase tracking-[0.12em] font-medium text-[#0052FF] font-sans tabular-nums select-none">
                {discipline.number}
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-[-0.03em] font-sans">
                {discipline.title}
              </h2>
              <p className="mt-4 text-base sm:text-lg font-normal leading-[1.6] text-[#64748B] font-sans">
                {discipline.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
