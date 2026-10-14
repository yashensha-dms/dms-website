"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Monitor,
  Layers,
  Smartphone,
  Cpu,
  CheckCircle,
} from "lucide-react";

interface ProductTab {
  id: string;
  tag: string;
  title: string;
  category: string;
  headline: string;
  description: string;
  features: string[];
  metrics: { label: string; value: string }[];
  ctaText: string;
  ctaHref: string;
  icon: React.ComponentType<{ className?: string }>;
}

const TABS: ProductTab[] = [
  {
    id: "prime-ads",
    tag: "[ 01 / ADVERTISERS ]",
    title: "Prime Ads",
    category: "Programmatic DOOH Network",
    headline: "High-Impact Commercial Screen Advertising Across South India",
    description:
      "Broadcast programmatic campaigns across 130+ verified commercial digital displays in premium malls, dining lounges, and transit centers with 100% verified playback proof.",
    features: [
      "Dynamic dayparting and audience footfall scheduling",
      "Cryptographic proof-of-play delivery logs",
      "Instant programmatic slot reservation",
      "Multi-screen synchronized burst campaigns",
    ],
    metrics: [
      { label: "Prime Screens", value: "130+" },
      { label: "Daily Impressions", value: "850K+" },
      { label: "Campaign SLA", value: "99.9%" },
    ],
    ctaText: "Explore Prime Ads",
    ctaHref: "/advertisers/prime-ads",
    icon: Monitor,
  },
  {
    id: "mstream-cms",
    tag: "[ 02 / SCREEN OWNERS ]",
    title: "mStream CMS",
    category: "AI Cloud Digital Signage OS",
    headline: "Centralized Screen Control with Zero-Downtime Offline Playback",
    description:
      "Empower your digital displays with mStream cloud signage OS. Schedule multi-zone layouts, deploy firmware over-the-air, and monitor real-time node health.",
    features: [
      "Multi-zone screen division (Video, Ticker, QR, Weather)",
      "Continuous offline playback with local media caching",
      "Automated screen reboot and hardware diagnostics",
      "Emergency broadcast triggers and remote overrides",
    ],
    metrics: [
      { label: "Active Displays", value: "3,500+" },
      { label: "Uptime SLA", value: "99.98%" },
      { label: "Sync Latency", value: "< 2.0s" },
    ],
    ctaText: "Discover mStream CMS",
    ctaHref: "/publishers/mstream",
    icon: Layers,
  },
  {
    id: "mworld-apps",
    tag: "[ 03 / INTERACTIVE ]",
    title: "mWorld Apps",
    category: "Touch & Mobile Engagement",
    headline: "Bridge DOOH Displays Directly to Consumer Mobile Devices",
    description:
      "Transform passive screens into interactive brand experiences. Deploy instant QR triggered landing pages, live surveys, coupon redemptions, and interactive retail catalogs.",
    features: [
      "Instant zero-friction mobile QR code triggers",
      "Live audience polling and gamified brand contests",
      "Real-time retail coupon delivery and CRM sync",
      "Engagement conversion tracking and analytics",
    ],
    metrics: [
      { label: "Scan Conversion", value: "14.2%" },
      { label: "Session Time", value: "1m 45s" },
      { label: "Mobile Sync", value: "Instant" },
    ],
    ctaText: "See Interactive Demos",
    ctaHref: "/contact",
    icon: Smartphone,
  },
  {
    id: "hardware",
    tag: "[ 04 / HARDWARE ]",
    title: "Commercial Hardware",
    category: "Displays & Media Players",
    headline: "Commercial-Grade Totems and SoC Media Engines Built for 24/7 Reliability",
    description:
      "Industrial-grade ultra-bright digital totems, wall-mount displays, and media engines engineered to operate continuously in high-ambient-light commercial settings.",
    features: [
      "2,500+ nit sunlight-readable outdoor totems",
      "Industrial thermal management with dust filtration",
      "Integrated quad-core media processing engines",
      "Comprehensive on-site warranty and maintenance",
    ],
    metrics: [
      { label: "Brightness", value: "2500+ nits" },
      { label: "Operation", value: "24/7/365" },
      { label: "Warranty", value: "3 Years" },
    ],
    ctaText: "View Hardware Catalog",
    ctaHref: "/publishers/hardware",
    icon: Cpu,
  },
];

export function InteractiveShowcase() {
  const [activeTabId, setActiveTabId] = useState<string>("prime-ads");
  const activeTab = TABS.find((t) => t.id === activeTabId) || TABS[0];

  return (
    <section className="relative w-full bg-[#FFFFFF] py-20 lg:py-24 border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-6 border-b border-slate-200">
          <div>
            <Badge variant="accent" size="sm" className="mb-3">
              [ 03 / PLATFORM CAPABILITIES ]
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A]">
              Unified AdTech Infrastructure,{" "}
              <span className="text-[#0052FF]">Built for Commercial Scale</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#64748B] max-w-2xl">
              Whether you are an advertiser buying unskippable DOOH impressions or a venue owner monetizing commercial displays, DMS provides the operating stack.
            </p>
          </div>
        </div>

        {/* Interactive Tab Navigation Bar */}
        <div className="w-full overflow-x-auto bg-white border border-slate-200 rounded-none mb-10 p-1.5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="grid grid-cols-4 gap-2 min-w-[580px] sm:min-w-0 w-full">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = tab.id === activeTabId;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTabId(tab.id)}
                  className={`flex items-center justify-center gap-2 py-2.5 px-3 sm:px-4 rounded-none text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer select-none whitespace-nowrap ${
                    isActive
                      ? "bg-[#0052FF] text-white"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{tab.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Tab Content with Motion Transitions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch"
          >
            {/* Left Column: Product Value Proposition and Bulleted Features */}
            <div className="lg:col-span-7 flex flex-col justify-between p-8 sm:p-10 rounded-none bg-[#FFFFFF] border border-slate-200">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#0052FF] font-semibold mb-3">
                  <span>{activeTab.tag}</span>
                  <span className="text-slate-300">·</span>
                  <span className="text-slate-500">{activeTab.category}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A] leading-snug">
                  {activeTab.headline}
                </h3>

                <p className="mt-4 text-sm sm:text-base text-[#64748B] leading-relaxed">
                  {activeTab.description}
                </p>

                {/* Feature Checklist */}
                <div className="mt-8 space-y-3">
                  {activeTab.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                      <span className="text-sm text-[#0F172A] font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-10 pt-6 border-t border-slate-100 flex items-center gap-4">
                <Button href={activeTab.ctaHref} variant="primary" showArrow>
                  {activeTab.ctaText}
                </Button>
                <Button href="/contact" variant="secondary">
                  Schedule Consultation
                </Button>
              </div>
            </div>

            {/* Right Column: Sinesubs-Style Ambient Radial Aura Telemetry Card */}
            <div className="lg:col-span-5 relative overflow-hidden flex flex-col justify-between p-8 sm:p-10 rounded-none bg-[#FFFFFF] border-l-4 border-[#0052FF] border border-slate-200">
              {/* Luminous Radial Aura in Corner (Sinesubs Inspiration) */}
              <div
                aria-hidden="true"
                className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-[#0052FF]/15 blur-3xl pointer-events-none"
              />
              <div
                aria-hidden="true"
                className="absolute -left-16 -bottom-16 w-52 h-52 rounded-full bg-[#00D8F0]/10 blur-2xl pointer-events-none"
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                    Live Telemetry Summary
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-none text-[11px] bg-[#F0FDF4] text-[#16A34A] border border-[#DCFCE7] font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
                    Verified
                  </span>
                </div>

                {/* Prominent Metric Display with Tabular Figures */}
                <div className="mt-8 space-y-6">
                  {activeTab.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-none bg-slate-50 border border-slate-200/70 hover:border-slate-300 transition-colors"
                    >
                      <div className="text-xs uppercase text-slate-500 font-semibold">
                        {metric.label}
                      </div>
                      <div className="mt-1 text-3xl font-bold tracking-tight text-[#0052FF] tabular-nums">
                        {metric.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Security and SLA Note */}
              <div className="relative z-10 mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span>Accredited: KSUM 2026</span>
                <span>Tier-1 Infrastructure</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default InteractiveShowcase;
