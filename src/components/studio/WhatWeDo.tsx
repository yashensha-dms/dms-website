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
      "The visual foundation of your company. Logo, guidelines, typography, color, and design tokens, built to hold from a business card to a software interface.",
  },
  {
    id: "product",
    number: "02",
    title: "Digital Products",
    description:
      "Websites, web applications, mobile backends, e-commerce, APIs, and admin panels. Built to your needs, ready for production, delivered with full documentation.",
  },
  {
    id: "infra",
    number: "03",
    title: "Operations Infrastructure",
    description:
      "CRM and infrastructure on your own server. You own it and control it. We set it up, document it, and hand you the keys.",
  },
];

export function WhatWeDo() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const activeDiscipline = DISCIPLINES[selectedIndex];

  return (
    <section className="w-full bg-[#FFFFFF] min-h-[100dvh] flex flex-col">
      <div className="w-full flex-1 flex flex-col h-full">
        {/* Desktop: Zero border-radius, 50/50 architectural split layout */}
        <div className="hidden lg:grid lg:grid-cols-2 items-stretch h-full flex-1">
          {/* Left Column: Sharp architectural selector list (50%) */}
          <div className="flex flex-col justify-center border-r border-[#E2E8F0] h-full">
            <div className="divide-y divide-[#E2E8F0] border-y border-[#E2E8F0] w-full">
              {DISCIPLINES.map((discipline, index) => {
                const isSelected = selectedIndex === index;

                return (
                  <button
                    key={discipline.id}
                    type="button"
                    onClick={() => setSelectedIndex(index)}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`w-full text-left py-6 px-8 sm:px-12 lg:px-16 transition-all duration-200 cursor-pointer select-none group flex items-center justify-between rounded-none border-l-2 ${
                      isSelected
                        ? "bg-[#F8FAFC] border-l-[#0052FF]"
                        : "bg-transparent hover:bg-slate-50/60 border-l-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-2">
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
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Free, dominating open area (50%) */}
          <div className="flex flex-col justify-center pl-8 sm:pl-12 lg:pl-16 pr-8 sm:pr-12 lg:pr-16 h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDiscipline.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="flex flex-col justify-center max-w-xl"
              >
                <span className="text-xs uppercase tracking-[0.14em] font-medium text-[#0052FF] font-sans tabular-nums select-none">
                  {activeDiscipline.number}
                </span>

                <h2 className="mt-5 text-4xl sm:text-5xl md:text-6xl xl:text-[68px] font-bold text-[#0F172A] tracking-[-0.035em] leading-[1.02] font-sans text-balance">
                  {activeDiscipline.title}
                </h2>

                <p className="mt-6 text-lg sm:text-xl md:text-2xl font-normal leading-[1.5] text-[#64748B] font-sans">
                  {activeDiscipline.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile & Tablet: Free, open architectural stacked view (zero border-radius) */}
        <div className="lg:hidden flex flex-col divide-y divide-[#E2E8F0] border-y border-[#E2E8F0] px-6 py-12">
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
