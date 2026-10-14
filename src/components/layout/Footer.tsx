import React from "react";
import Link from "next/link";
import Image from "next/image";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

const FOOTER_COLUMNS: { title: string; links: FooterLink[] }[] = [
  {
    title: "PRODUCT",
    links: [
      { label: "Prime Ads (DOOH)", href: "/advertisers/prime-ads" },
      { label: "mStream Cloud CMS", href: "/publishers/mstream" },
      { label: "Commercial Displays", href: "/publishers/hardware" },
      { label: "Touch Kiosks", href: "/publishers/hardware" },
      { label: "Digital Standees", href: "/publishers/hardware" },
    ],
  },
  {
    title: "SOLUTIONS",
    links: [
      { label: "Screen Franchise", href: "/publishers/franchise" },
      { label: "mWorld Marketplace", href: "/marketplace" },
      { label: "Retail & QSR Menus", href: "/publishers/mstream" },
      { label: "Healthcare Signage", href: "/publishers/mstream" },
      { label: "Case Studies", href: "/case-studies" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "About DMSG", href: "/about" },
      { label: "Leadership & Team", href: "/about" },
      { label: "Insights & Blog", href: "/blog" },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/dmsg-family", external: true },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "LEGAL",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Security & DPDPA", href: "/privacy-policy" },
      { label: "AI Docs (llms.txt)", href: "/llms.txt" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#08090A] text-[#F8FAFC] border-t border-white/[0.08] selection:bg-[#0052FF] selection:text-white">
      <div className="max-w-7xl mx-auto px-6 desktop:px-20 pt-20 pb-12">
        {/* Main Upper Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10">
          {/* Brand & Mission (Left Side) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link
              href="/"
              className="inline-block transition-opacity hover:opacity-90"
              aria-label="DMSG Private Limited (dms.family)"
            >
              <Image
                src="/logos/dms-logo-white.svg"
                alt="DMS"
                width={150}
                height={27}
                className="h-7 w-auto object-contain"
              />
            </Link>

            <p className="mt-6 text-sm text-zinc-400 leading-relaxed max-w-sm">
              Accredited AdTech provider and programmatic DOOH advertising network connecting high-growth brands to 130+ prime public displays across South India.
            </p>

            {/* Quiet Corporate Coordinates */}
            <div className="mt-8 text-xs text-zinc-500 font-sans space-y-1.5">
              <div>Pipeline Jn, Thrikkakara, Ernakulam, Kerala 682021, India</div>
              <div>
                <a
                  href="mailto:contact@dms.family"
                  className="hover:text-zinc-300 transition-colors"
                >
                  contact@dms.family
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Columns (Right Side) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.title} className="flex flex-col">
                <h4 className="text-[11px] font-sans uppercase tracking-[0.2em] text-zinc-400 font-semibold mb-4 select-none">
                  {column.title}
                </h4>
                <ul className="space-y-2.5 text-sm text-zinc-400">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-white transition-colors duration-150 inline-block"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="hover:text-white transition-colors duration-150 inline-block"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Razor-thin Divider */}
        <div className="border-t border-white/[0.08] mt-14 mb-8" />

        {/* Sub-Footer Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans tabular-nums text-zinc-500">
          <div>
            © {new Date().getFullYear()} DMSG Private Limited, all rights reserved.
          </div>
          <div>CIN: U82990KL2023PTC081371</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
