"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";

export function ClosingCTA() {
  return (
    <section className="relative w-full bg-[#030712] min-h-[100dvh] mt-18 sm:mt-20 scroll-mt-18 sm:scroll-mt-20 flex flex-col justify-center py-20 md:py-32 overflow-hidden">
      {/* Subtle deep cobalt radial glow (barely visible) */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,82,255,0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center flex flex-col items-center"
        >
          {/* Display Headline */}
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-[-0.035em] leading-[1.05] text-white font-sans text-balance">
            Ready to build something that lasts?
          </h2>

          {/* Body */}
          <p className="mt-8 text-lg sm:text-xl font-normal leading-[1.65] text-slate-300 font-sans max-w-xl">
            Start with a free scoping session. No pitch deck, no commitment.
            Just a conversation.
          </p>

          {/* Single white button, dark text, forward arrow */}
          <div className="mt-10 sm:mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#030712] text-base font-normal hover:bg-slate-100 transition-colors duration-200 group select-none font-sans"
            >
              <span>Book a Scoping Session</span>
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ClosingCTA;
