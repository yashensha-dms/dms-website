"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";

interface CaseStudy {
  id: string;
  index: string;
  client: string;
  industry: string;
  metric: string;
  metricLabel: string;
  headline: string;
  summary: string;
  tags: string[];
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "lulu-group",
    index: "01",
    client: "Lulu Group",
    industry: "Retail & Hypermarket",
    metric: "+34% Lift",
    metricLabel: "In-Store Footfall Lift",
    headline: "Festive Multi-Mall Synchronized Broadcast",
    summary:
      "Deployed high-frequency programmatic video bursts across 24 digital totems in premier mall corridors, driving verified consumer footfall to anchor retail outlets.",
    tags: ["Programmatic Burst", "24 Displays", "Retail Activation"],
  },
  {
    id: "kalyan-jewellers",
    index: "02",
    client: "Kalyan Jewellers",
    industry: "Luxury & Jewellery",
    metric: "4.2M Reach",
    metricLabel: "Verified Public Impressions",
    headline: "High-Street Urban Transit Blitz",
    summary:
      "Synchronized unskippable 4K commercial reels across high-density dining lounges and transit nodes during prime evening commute and weekend dwell hours.",
    tags: ["Prime DOOH", "4K Video", "Transit Corridors"],
  },
  {
    id: "federal-bank",
    index: "03",
    client: "Federal Bank",
    industry: "Banking & Financial Services",
    metric: "18,500+",
    metricLabel: "Direct QR Mobile Scans",
    headline: "Interactive Digital Banking Trigger Campaign",
    summary:
      "Combined dynamic screen triggers with instant QR mobile redirects, driving immediate consumer digital loan and account activations directly from commercial screens.",
    tags: ["mWorld Interactive", "QR Trigger", "Direct Conversion"],
  },
];

export function CaseStudiesGrid() {
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);

  return (
    <section className="relative w-full bg-[#FFFFFF] py-20 lg:py-24 border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-6 border-b border-slate-200">
          <div>
            <Badge variant="accent" size="sm" className="mb-3">
              [ 05 / VERIFIED CASE STUDIES ]
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A]">
              Measured Impact,{" "}
              <span className="text-[#0052FF]">Real Commercial Outcomes</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#64748B] max-w-2xl">
              Discover how leading enterprises achieve unskippable reach and verified footfall conversion across the DMS DOOH screen network.
            </p>
          </div>

          <Button href="/contact" variant="secondary">
            View All Case Studies
          </Button>
        </div>

        {/* 3-Column Numbered Card Grid (Diacon Slide 4 Pattern) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {CASE_STUDIES.map((study, idx) => {
            const isFeatured = idx === activeCardIndex;

            return (
              <div
                key={study.id}
                onMouseEnter={() => setActiveCardIndex(idx)}
                className={`relative group flex flex-col justify-between p-8 rounded-none border transition-all duration-200 select-none cursor-pointer ${
                  isFeatured
                    ? "bg-[#0052FF] text-white border-[#0052FF] -translate-y-0.5"
                    : "bg-[#FFFFFF] text-[#0F172A] border-slate-200 hover:border-[#0052FF] hover:-translate-y-0.5"
                }`}
              >
                {/* Top Row: Client Name and Arrow Trigger */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span
                      className={`text-xs uppercase tracking-wider font-semibold ${
                        isFeatured ? "text-blue-100" : "text-slate-500"
                      }`}
                    >
                      {study.client} · {study.industry}
                    </span>
                    <div
                      className={`p-1.5 rounded-full transition-colors ${
                        isFeatured
                          ? "bg-white/20 text-white"
                          : "bg-slate-100 text-slate-600 group-hover:text-black"
                      }`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Big Impact Metric with Tabular Figures */}
                  <div className="text-3xl sm:text-4xl font-bold tracking-tight leading-none tabular-nums">
                    {study.metric}
                  </div>
                  <div
                    className={`mt-1 text-xs font-semibold ${
                      isFeatured ? "text-blue-100" : "text-slate-500"
                    }`}
                  >
                    {study.metricLabel}
                  </div>

                  {/* Headline */}
                  <h3
                    className={`mt-6 text-lg sm:text-xl font-bold leading-snug ${
                      isFeatured ? "text-white" : "text-[#0F172A]"
                    }`}
                  >
                    {study.headline}
                  </h3>

                  {/* Summary */}
                  <p
                    className={`mt-3 text-xs sm:text-sm leading-relaxed ${
                      isFeatured ? "text-blue-50/90" : "text-[#64748B]"
                    }`}
                  >
                    {study.summary}
                  </p>
                </div>

                {/* Bottom Row: Numbered Index (Diacon Slide 4 Style: 01, 02, 03) and Tag Chips */}
                <div
                  className={`mt-8 pt-4 border-t flex items-center justify-between ${
                    isFeatured ? "border-white/20 text-white" : "border-slate-100 text-slate-400"
                  }`}
                >
                  <div className="flex flex-wrap gap-1.5">
                    {study.tags.slice(0, 2).map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className={`text-[10px] px-2 py-0.5 rounded font-medium ${
                          isFeatured
                            ? "bg-white/15 text-white"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="text-base font-bold tabular-nums">
                    {study.index}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CaseStudiesGrid;
