"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "Who works on my project?",
    answer:
      "The person building it. No outsourcing, no junior handoffs. The same senior team, from brief to delivery.",
  },
  {
    question: "Do you publish pricing?",
    answer:
      "No. Every project is scoped after a conversation. Pricing reflects requirements, not geography.",
  },
  {
    question: "How fast can we start?",
    answer:
      "Most projects start within 10 business days of signing.",
  },
  {
    question: "Who owns the code and assets?",
    answer:
      "You do. Every engagement includes full IP transfer, without exception.",
  },
  {
    question: "Can we engage for just one discipline?",
    answer:
      "Yes. Brand, product, or infrastructure on its own. Expand when you are ready.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#FFFFFF] min-h-[100dvh] mt-18 sm:mt-20 scroll-mt-18 sm:scroll-mt-20 flex flex-col justify-center py-16 md:py-24">
      <div className="w-full max-w-4xl mx-auto px-6">
        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-[#0F172A] font-sans leading-[1.08]">
            Straight answers.
          </h2>
        </motion.div>

        {/* Clean Hairline Accordion */}
        <div className="divide-y divide-[#E2E8F0] border-y border-[#E2E8F0]">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question} className="overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full py-6 sm:py-7 flex items-center justify-between text-left group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0052FF] focus-visible:ring-offset-2"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-lg sm:text-xl md:text-2xl font-semibold tracking-[-0.015em] font-sans pr-6 transition-colors duration-150 ${
                      isOpen
                        ? "text-[#0052FF]"
                        : "text-[#0F172A] group-hover:text-[#0052FF]"
                    }`}
                  >
                    {faq.question}
                  </span>

                  {/* Minimalist rotating chevron: turns cobalt when active */}
                  <span
                    className={`shrink-0 transition-transform duration-300 ease-out ${
                      isOpen ? "rotate-180 text-[#0052FF]" : "text-[#64748B] group-hover:text-[#0F172A]"
                    }`}
                    aria-hidden="true"
                  >
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 7.5L10 12.5L15 7.5" />
                    </svg>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-7 text-base sm:text-lg font-normal leading-[1.65] text-[#64748B] font-sans max-w-3xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
