"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CheckCircle2, ShieldCheck } from "lucide-react";

export function CTASection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    objective: "advertise",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative w-full bg-[#030712] text-white py-20 lg:py-24 overflow-hidden border-t border-white/10">
      {/* Subtle Luminous Radial Gradient Glow in Background */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#0052FF]/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading and Value Prop */}
          <div className="lg:col-span-6 text-left">
            <Badge variant="dark" size="sm" className="mb-4">
              [ DIRECT CONSULTATION ]
            </Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Ready to Launch Your{" "}
              <span className="text-[#0052FF]">DOOH Campaign</span> or Scale Your Network?
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-lg">
              Book a targeted consultation session with our AdTech engineers and screen media strategists in Ernakulam, Kerala.
            </p>

            {/* Quick Guarantees */}
            <div className="mt-8 space-y-3 font-sans text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                <span>Same-day campaign slot availability and rate card</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                <span>Live interactive demo of mStream AI cloud CMS</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                <span>Full hardware deployment quote and on-site warranty plan</span>
              </div>
            </div>

            {/* Live Indicator */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3 text-xs font-sans text-slate-400">
              <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
              <span>DMSG Private Limited · KSUM Accredited 2026</span>
            </div>
          </div>

          {/* Right Column: Lead Capture Card */}
          <div className="lg:col-span-6">
            <div className="p-8 sm:p-10 rounded-none bg-white/[0.04] border border-white/15 backdrop-blur-md">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-12 h-12 rounded-full bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Consultation Request Received
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">
                    Our team will reach out to you within 2 business hours with availability and custom campaign options.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div>
                    <label
                      htmlFor="cta-name"
                      className="block text-xs font-sans font-medium uppercase tracking-wider text-slate-300 mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      id="cta-name"
                      type="text"
                      required
                      placeholder="e.g. Rahul Menon"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-none bg-white/[0.08] border border-white/15 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-[#0052FF] focus:ring-1 focus:ring-[#0052FF]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="cta-email"
                        className="block text-xs font-sans font-medium uppercase tracking-wider text-slate-300 mb-1"
                      >
                        Business Email
                      </label>
                      <input
                        id="cta-email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-none bg-white/[0.08] border border-white/15 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-[#0052FF] focus:ring-1 focus:ring-[#0052FF]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="cta-phone"
                        className="block text-xs font-sans font-medium uppercase tracking-wider text-slate-300 mb-1"
                      >
                        Phone Number
                      </label>
                      <input
                        id="cta-phone"
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-none bg-white/[0.08] border border-white/15 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-[#0052FF] focus:ring-1 focus:ring-[#0052FF]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="cta-objective"
                      className="block text-xs font-sans font-medium uppercase tracking-wider text-slate-300 mb-1"
                    >
                      Primary Interest
                    </label>
                    <select
                      id="cta-objective"
                      value={formData.objective}
                      onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
                      className="w-full px-4 py-3 rounded-none bg-[#0F172A] border border-white/15 text-white text-sm focus:outline-none focus:border-[#0052FF] focus:ring-1 focus:ring-[#0052FF]"
                    >
                      <option value="advertise">Book DOOH Advertising Space (Prime Ads)</option>
                      <option value="cms">Deploy Digital Signage CMS (mStream)</option>
                      <option value="hardware">Commercial Display Hardware Procurement</option>
                      <option value="franchise">Screen Network Franchise Opportunity</option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <Button type="submit" variant="brand" size="lg" className="w-full" showArrow>
                      Confirm Consultation Request
                    </Button>
                  </div>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 font-sans mt-3">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Direct NDA Protected · No spam guarantee</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
