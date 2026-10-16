"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronDown,
  Menu,
  X,
  Tv,
  MonitorPlay,
  Layers,
  Store,
  Palette,
  FileText,
  Building2,
  BookOpen,
  PhoneCall,
} from "lucide-react";

interface SubItem {
  title: string;
  description: string;
  href: string;
  icon: React.ElementType;
  tag?: string;
}

interface NavItem {
  label: string;
  href?: string;
  children?: SubItem[];
}

const NAV_ITEMS: NavItem[] = [
  {
    label: "Products",
    children: [
      {
        title: "Prime Ads",
        description: "Programmatic DOOH network across 130+ prime screens",
        href: "/advertisers/prime-ads",
        icon: Tv,
        tag: "DOOH",
      },
      {
        title: "mStream CMS",
        description: "AI-driven cloud digital signage scheduling and management",
        href: "/publishers/mstream",
        icon: MonitorPlay,
        tag: "SaaS",
      },
      {
        title: "Commercial Hardware",
        description: "Commercial 24/7 standees, wall mounts and touch kiosks",
        href: "/publishers/hardware",
        icon: Layers,
      },
    ],
  },
  {
    label: "Solutions",
    children: [
      {
        title: "Franchise Program",
        description: "Partner business model for commercial screen owners",
        href: "/publishers/franchise",
        icon: Store,
        tag: "Revenue Share",
      },
      {
        title: "mWorld Marketplace",
        description: "Custom 3D anamorphic and DOOH motion graphics",
        href: "/marketplace",
        icon: Palette,
      },
      {
        title: "Case Studies",
        description: "Proven results for Aster Medcity, Volkswagen and more",
        href: "/case-studies",
        icon: FileText,
      },
    ],
  },
  {
    label: "Company",
    children: [
      {
        title: "About DMSG",
        description: "Kerala Startup Mission accredited AdTech technology team",
        href: "/about",
        icon: Building2,
      },
      {
        title: "Insights & Blog",
        description: "Topical playbooks, DOOH benchmarks and CMS guides",
        href: "/blog",
        icon: BookOpen,
      },
      {
        title: "Contact & Demo",
        description: "Book an interactive session with our specialists",
        href: "/contact",
        icon: PhoneCall,
      },
    ],
  },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Detect scroll to toggle subtle elevation border and shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  const prevPathnameRef = useRef(pathname);
  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;
      const timer = setTimeout(() => {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  // Lock scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <>
      {/* Plain, Full-Width White Navbar */}
      <header
        className={`fixed top-0 inset-x-0 z-50 w-full bg-white transition-all duration-200 ${
          isScrolled
            ? "border-b border-slate-200 shadow-xs shadow-slate-900/5"
            : "border-b border-slate-200/80"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* 1. Left: Official Brand Logo (Vector SVG) */}
          <div className="flex items-center shrink-0">
            <Link
              href="/"
              className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-lg transition-opacity hover:opacity-85"
              aria-label="dms.family"
            >
              <Image
                src="/logos/dms-logo.svg"
                alt="DMS"
                width={136}
                height={26}
                priority
                className="h-6 w-auto object-contain"
              />
            </Link>
          </div>

          {/* 2. Center: Navigation Items with Dropdowns */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_ITEMS.map((item) => {
              const isOpen = activeDropdown === item.label;

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    onClick={() => setActiveDropdown(isOpen ? null : item.label)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                      isOpen
                        ? "text-slate-950 bg-slate-100"
                        : "text-slate-600 hover:text-slate-950 hover:bg-slate-50"
                    }`}
                    aria-expanded={isOpen}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-slate-700" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown Card */}
                  <AnimatePresence>
                    {isOpen && item.children && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-84 xl:w-92 z-50"
                      >
                        <div className="bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-900/10 p-2.5 flex flex-col gap-1">
                          {item.children.map((sub) => {
                            const IconComponent = sub.icon;
                            return (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                onClick={() => setActiveDropdown(null)}
                                className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                              >
                                <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 shadow-xs group-hover:bg-[#0052FF] group-hover:text-white transition-colors">
                                  <IconComponent className="w-4 h-4" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between gap-1.5">
                                    <span className="text-sm font-semibold text-slate-900 group-hover:text-[#0052FF] transition-colors truncate">
                                      {sub.title}
                                    </span>
                                    {sub.tag && (
                                      <span className="text-[10px] font-sans font-semibold uppercase px-1.5 py-0.5 rounded bg-blue-50 text-blue-600 border border-blue-200/60 shrink-0">
                                        {sub.tag}
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-xs text-slate-500 mt-0.5 line-clamp-2 leading-relaxed">
                                    {sub.description}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* 3. Right: Case Studies, Primary CTA & Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Direct Case Studies Action */}
            <Button
              href="/case-studies"
              variant="outline"
              size="md"
              className="hidden sm:inline-flex"
            >
              Case Studies
            </Button>

            {/* Primary Action Button (Canonical Button with CVA) */}
            <Button
              href="/contact"
              variant="primary"
              size="md"
              showArrow
            >
              Book a Consultant
            </Button>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand cursor-pointer"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* 4. Full-Screen Mobile Drawer Overlay (Clean White) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="lg:hidden fixed inset-x-0 top-18 sm:top-20 bottom-0 z-40 bg-white border-t border-slate-200 px-6 py-6 overflow-y-auto flex flex-col justify-between shadow-2xl"
          >
            <div className="flex flex-col gap-6">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="border-b border-slate-100 pb-4">
                  <span className="text-xs font-sans uppercase tracking-wider text-slate-400 font-bold block mb-3">
                    {item.label}
                  </span>
                  <div className="flex flex-col gap-2.5">
                    {item.children?.map((sub) => {
                      const IconComp = sub.icon;
                      return (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors"
                        >
                          <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center shrink-0">
                            <IconComp className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                              <span>{sub.title}</span>
                              {sub.tag && (
                                <span className="text-[9px] font-sans font-semibold uppercase px-1 py-0.2 bg-blue-50 text-blue-600 rounded">
                                  {sub.tag}
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-slate-500 line-clamp-1">{sub.description}</p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Bottom Actions */}
            <div className="pt-6 border-t border-slate-200 flex flex-col gap-3 mt-6">
              <Button
                href="/case-studies"
                variant="outline"
                size="md"
                className="w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Case Studies
              </Button>
              <Button
                href="/contact"
                variant="primary"
                size="md"
                className="w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a Consultant
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
