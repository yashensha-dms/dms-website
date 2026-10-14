"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Interface representing an individual partner logo item.
 *
 * @interface LogoItem
 */
export interface LogoItem {
  /** Descriptive brand or partner name for accessibility */
  name: string;
  /** SVG or icon JSX element */
  svg: React.ReactNode;
}

/**
 * Props for the LogoTicker component.
 *
 * @interface LogoTickerProps
 */
export interface LogoTickerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Array of logos to display in the continuous marquee loop */
  logos: LogoItem[];
  /** Duration in seconds for one complete loop (default: 30) */
  duration?: number;
  /** Background gradient color token for left/right edge fade masks (default: "#F8FAFC") */
  fadeColor?: string;
  /** Optional custom styling classes */
  className?: string;
}

/**
 * LogoTicker - Continuous Passive Marquee Primitive (Powered by Framer Motion)
 *
 * Renders an infinite horizontal scrolling logo ticker using Framer Motion
 * with smooth gradient edge fade masks, designed for passive enterprise social proof.
 *
 * @param {LogoTickerProps} props - Component properties.
 * @returns {JSX.Element} The rendered LogoTicker component.
 *
 * @example
 * ```tsx
 * <LogoTicker logos={PARTNER_LOGOS} duration={30} fadeColor="#F8FAFC" />
 * ```
 */
export const LogoTicker = React.forwardRef<HTMLDivElement, LogoTickerProps>(
  ({ logos, duration = 30, fadeColor = "#F8FAFC", className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("relative w-full overflow-hidden", className)}
        {...props}
      >
        {/* Left and Right Smooth Edge Fade Masks */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 z-10"
          style={{
            background: `linear-gradient(to right, ${fadeColor}, transparent)`,
          }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 z-10"
          style={{
            background: `linear-gradient(to left, ${fadeColor}, transparent)`,
          }}
        />

        {/* Framer Motion Continuous Marquee Track */}
        <div className="flex w-max">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: duration,
              repeat: Infinity,
            }}
            className="flex items-center gap-14 sm:gap-20 text-slate-400 shrink-0"
          >
            {/* First Set of Logos */}
            {logos.map((logo, index) => (
              <div
                key={`ticker-1-${index}`}
                className="shrink-0 flex items-center justify-center opacity-60 hover:opacity-100 hover:text-slate-800 transition-all duration-300 grayscale select-none cursor-default"
              >
                {logo.svg}
              </div>
            ))}

            {/* Second Set of Logos (Identical duplicate for seamless looping) */}
            {logos.map((logo, index) => (
              <div
                key={`ticker-2-${index}`}
                className="shrink-0 flex items-center justify-center opacity-60 hover:opacity-100 hover:text-slate-800 transition-all duration-300 grayscale select-none cursor-default"
              >
                {logo.svg}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    );
  }
);

LogoTicker.displayName = "LogoTicker";

export default LogoTicker;
