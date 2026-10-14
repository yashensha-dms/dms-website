"use client";

import React from "react";
import { StatCard } from "@/components/ui/StatCard";

export function TrustBar() {
  return (
    <section
      id="telemetry"
      className="relative w-full bg-[#F8FAFC] py-20 lg:py-24 border-b border-slate-200/80 overflow-hidden"
    >
      {/* Background Architectural Grid Texture */}
      <div className="absolute inset-0 bg-dotted-grid opacity-25 pointer-events-none" />

      {/* Background Luminous Radial Glow (Sinesubs style) */}
      <div
        aria-hidden="true"
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#0052FF]/[0.06] rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A]">
            Proven Numbers,{" "}
            <span className="text-[#0052FF]">Verified Commercial Reach</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#64748B] leading-relaxed">
            Every broadcast slot, impression count, and display uptime metric is monitored with cloud cryptographic playback proof.
          </p>
        </div>

        {/* 4-Column Metric Grid with d.local and Diacon Patterns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            variant="performance"
            category="Direct Advertisers"
            value="150+"
            label="Active Customers"
            description="National brands and regional retail enterprises scheduling programmatic DOOH space."
            showNotch
          />

          <StatCard
            variant="performance"
            category="Commercial Inventory"
            value="130+"
            label="Prime DOOH Spaces"
            description="High-footfall digital screens across premier shopping malls, transit hubs, and tech corridors."
            showNotch
          />

          <StatCard
            variant="performance"
            category="Campaign SLA"
            value="2,500+"
            label="Executed Campaigns"
            description="Programmatic bursts and continuous broadcast deliveries across Kerala and South India."
            showNotch
          />

          <StatCard
            variant="performance"
            category="Software Footprint"
            value="3,500+"
            label="CMS Subscriptions"
            description="Commercial screens managed by mStream AI signage OS with instant cloud failover."
            showNotch
          />
        </div>
      </div>
    </section>
  );
}

export default TrustBar;
