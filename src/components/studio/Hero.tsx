"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative w-full bg-[#FFFFFF] min-h-[calc(100dvh-4.5rem)] sm:min-h-[calc(100dvh-5rem)] flex flex-col justify-center py-12 md:py-16 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-start max-w-5xl">
          {/* Display Headline: Renders immediately with zero delay (preserves LCP) */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[88px] font-bold tracking-[-0.035em] leading-[0.98] text-[#0F172A] font-sans text-balance">
            Brand, product, and infrastructure. One studio.
          </h1>

          {/* Subheadline: Fades in at 0.3s */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="mt-8 text-lg sm:text-xl md:text-2xl text-[#64748B] font-normal leading-[1.5] max-w-[640px] font-sans"
          >
            We design brand systems, build digital products, and engineer the
            infrastructure that runs your business. One team. One brief. One
            outcome.
          </motion.p>

          {/* Primary CTA: Fades in at 0.5s */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            className="mt-10 sm:mt-12"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#0052FF] text-white text-base font-normal hover:bg-[#0043CC] transition-colors duration-200 group select-none font-sans"
            >
              <span>Start a Conversation</span>
              <svg
                className="w-4 h-4 shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-1"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M3.333 8h9.334M8.667 4l4 4-4 4" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
