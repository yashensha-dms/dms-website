"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Building2,
  Train,
  Coffee,
  Briefcase,
  Users,
  Eye,
  Clock,
  CheckCircle2,
} from "lucide-react";

interface VenueCategory {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
  headline: string;
  description: string;
  dailyFootfall: string;
  dwellTime: string;
  screenSpec: string;
  keyLocations: string[];
  sampleVenues: string;
}

const VENUE_CATEGORIES: VenueCategory[] = [
  {
    id: "malls",
    name: "Shopping Malls",
    icon: Building2,
    tag: "[ VENUE TIER 01 / PREMIUM RETAIL ]",
    headline: "Flagship Shopping Centers and Entertainment Malls",
    description:
      "Position your brand directly in front of shoppers at the final point of purchase. Unskippable, high-luminance vertical displays situated at central atriums, escalators, and anchor store entrances.",
    dailyFootfall: "45,000+ / Day",
    dwellTime: "85 Minutes Avg",
    screenSpec: "4K UHD · 75-85 Inch Totems · 2500 nits",
    keyLocations: ["Kochi Commercial Atriums", "Trivandrum City Centers", "Calicut Retail Hubs"],
    sampleVenues: "Lulu Mall Kochi, Mall of Travancore, Center Square",
  },
  {
    id: "transit",
    name: "Transit & Metro",
    icon: Train,
    tag: "[ VENUE TIER 02 / HIGH FREQUENCY TRANSIT ]",
    headline: "Metro Stations, Rail Corridors, and Transit Terminals",
    description:
      "Deliver repetitive, high-frequency impressions to daily commuters, professionals, and domestic travelers navigating high-density urban transit nodes.",
    dailyFootfall: "68,000+ / Day",
    dwellTime: "18 Minutes Avg",
    screenSpec: "Full HD 1080p · Synchronized Network Wall",
    keyLocations: ["Metro Interchange Stations", "Railway Concourse Terminals", "Airport Lounges"],
    sampleVenues: "Kochi Metro Concourse, South Railway Terminal Hubs",
  },
  {
    id: "dining",
    name: "High-Street & Dining",
    icon: Coffee,
    tag: "[ VENUE TIER 03 / LIFESTYLE & DINING ]",
    headline: "Upscale Commercial Dining Lounges and Cafeterias",
    description:
      "Engage affluent consumers during extended leisure and social hours. Long dwell times ensure high message retention and direct mobile trigger interactions.",
    dailyFootfall: "14,000+ / Day",
    dwellTime: "45 Minutes Avg",
    screenSpec: "1080x1920 Vertical Displays · Audio Capable",
    keyLocations: ["Pipeline Jn Commercial Zone", "MG Road Retail Mile", "Panampilly Nagar"],
    sampleVenues: "Signature Restaurant Lounges, Premium Cafeterias",
  },
  {
    id: "tech-parks",
    name: "Tech Parks & Corporate",
    icon: Briefcase,
    tag: "[ VENUE TIER 04 / CORPORATE & B2B ]",
    headline: "Major IT Parks and Corporate Headquarters",
    description:
      "Target tech executives, software engineers, and high-income professionals within campus cafeterias, lobby entrances, and central innovation walkways.",
    dailyFootfall: "32,000+ / Day",
    dwellTime: "25 Minutes Avg",
    screenSpec: "Ultra Slim Commercial Totems · AI Audience Sensor",
    keyLocations: ["Infopark Phase 1 & 2", "Technopark Campus Corridors", "SmartCity Kochi"],
    sampleVenues: "IT Innovation Atriums, Campus Dining Complexes",
  },
];

export function NetworkExplorer() {
  const [selectedVenueId, setSelectedVenueId] = useState<string>("malls");
  const selectedVenue =
    VENUE_CATEGORIES.find((v) => v.id === selectedVenueId) || VENUE_CATEGORIES[0];

  return (
    <section
      id="explorer"
      className="relative w-full bg-[#F8FAFC] py-20 lg:py-24 border-b border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-6 border-b border-slate-200">
          <div>
            <Badge variant="accent" size="sm" className="mb-3">
              [ 04 / COMMERCIAL INVENTORY SIMULATOR ]
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A]">
              Explore Screen Locations,{" "}
              <span className="text-[#0052FF]">Plan Targeted DOOH Reach</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#64748B] max-w-2xl">
              Inspect real verified venue categories across Kerala, examine average dwell times, and simulate your campaign delivery slots.
            </p>
          </div>
        </div>

        {/* Venue Category Tabs - Single Line Full Width Container */}
        <div className="w-full overflow-x-auto bg-white border border-slate-200 rounded-none mb-8 p-1.5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="grid grid-cols-4 gap-2 min-w-[580px] sm:min-w-0 w-full">
            {VENUE_CATEGORIES.map((venue) => {
              const Icon = venue.icon;
              const isSelected = venue.id === selectedVenueId;

              return (
                <button
                  key={venue.id}
                  type="button"
                  onClick={() => setSelectedVenueId(venue.id)}
                  className={`flex items-center justify-center gap-2 py-2.5 px-3 sm:px-4 rounded-none text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer select-none whitespace-nowrap ${
                    isSelected
                      ? "bg-[#0052FF] text-white"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{venue.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Detail Frame with Motion */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedVenue.id}
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.99 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch p-8 sm:p-10 rounded-none bg-white border border-slate-200"
          >
            {/* Left Column: Venue Context and Spec Breakdown */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="text-xs text-[#0052FF] font-semibold mb-2">
                  {selectedVenue.tag}
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A]">
                  {selectedVenue.headline}
                </h3>

                <p className="mt-3 text-sm sm:text-base text-[#64748B] leading-relaxed">
                  {selectedVenue.description}
                </p>

                {/* Key Representative Venues */}
                <div className="mt-6 p-4 rounded-none bg-slate-50 border border-slate-200/80">
                  <div className="text-xs uppercase text-slate-500 font-semibold mb-1">
                    Representative Network Venues:
                  </div>
                  <div className="text-sm font-semibold text-[#0F172A]">
                    {selectedVenue.sampleVenues}
                  </div>
                </div>

                {/* Footprint Badges */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {selectedVenue.keyLocations.map((loc, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none text-xs bg-slate-100 text-slate-700 border border-slate-200 font-medium"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E]" />
                      {loc}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-4">
                <Button href="/contact" variant="brand" showArrow>
                  Check Slot Availability
                </Button>
                <Button href="/advertisers/prime-ads" variant="secondary">
                  Download Venue Sheet
                </Button>
              </div>
            </div>

            {/* Right Column: 3 Live Telemetry Cards (d.local Pattern) */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-4 p-6 sm:p-8 rounded-none bg-[#F8FAFC] border border-slate-200">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                  Audience Telemetry
                </span>
                <span className="text-xs text-emerald-600 font-medium flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                  Active Space
                </span>
              </div>

              {/* Metric 1: Daily Footfall */}
              <div className="p-4 rounded-none bg-white border border-slate-200">
                <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span>ESTIMATED FOOTFALL</span>
                  <Users className="w-3.5 h-3.5 text-[#0052FF]" />
                </div>
                <div className="mt-1 text-2xl sm:text-3xl font-bold text-[#0052FF] tabular-nums">
                  {selectedVenue.dailyFootfall}
                </div>
              </div>

              {/* Metric 2: Dwell Time */}
              <div className="p-4 rounded-none bg-white border border-slate-200">
                <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span>AVERAGE DWELL TIME</span>
                  <Clock className="w-3.5 h-3.5 text-[#0052FF]" />
                </div>
                <div className="mt-1 text-2xl sm:text-3xl font-bold text-[#0F172A] tabular-nums">
                  {selectedVenue.dwellTime}
                </div>
              </div>

              {/* Metric 3: Screen Technical Specs */}
              <div className="p-4 rounded-none bg-white border border-slate-200">
                <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span>HARDWARE CALIBRATION</span>
                  <Eye className="w-3.5 h-3.5 text-[#0052FF]" />
                </div>
                <div className="mt-1 text-sm font-semibold text-[#0F172A] leading-snug">
                  {selectedVenue.screenSpec}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default NetworkExplorer;
