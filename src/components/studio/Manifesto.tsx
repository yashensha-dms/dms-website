"use client";

import React from "react";
import { motion } from "motion/react";

const LEAD_WORDS = [
  "Most",
  "companies",
  "juggle",
  "three",
  "vendors",
  "to",
  "do",
  "what",
  "one",
  "studio",
  "should.",
];

export function Manifesto() {
  return (
    <section className="relative w-full bg-[#030712] min-h-[100dvh] mt-18 sm:mt-20 scroll-mt-18 sm:scroll-mt-20 flex flex-col justify-center py-16 md:py-24 overflow-hidden">
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
        <div className="mx-auto max-w-[760px] text-center flex flex-col items-center">
          {/* Lead statement: Pinned word-by-word progressive illumination */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold leading-[1.12] tracking-[-0.03em] font-sans text-balance">
            {LEAD_WORDS.map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                initial={{ opacity: 0.2, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.045,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="inline-block mr-[0.28em] text-white"
              >
                {word}
              </motion.span>
            ))}
          </h2>

          {/* Paragraph 2 */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-10 text-base sm:text-lg md:text-xl font-normal leading-[1.65] text-slate-300 font-sans max-w-[680px]"
          >
            A branding agency that never talks to the developer. A developer who
            ignores the brand. A hosting setup nobody fully understands. Three
            invoices, zero accountability, and a product that feels like it was
            built by strangers.
          </motion.p>

          {/* Paragraph 3 */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-8 text-base sm:text-lg md:text-xl font-normal leading-[1.65] text-slate-300 font-sans max-w-[680px]"
          >
            DMS Studio is the other kind. Brand systems, digital products, and
            operations infrastructure under one roof. The same people from first
            brief to final handoff.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export default Manifesto;
