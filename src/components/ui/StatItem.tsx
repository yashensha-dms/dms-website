import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const statItemVariants = cva(
  "group flex flex-col justify-start text-left py-6 sm:py-2 transition-transform duration-200 hover:-translate-y-0.5 cursor-default select-none",
  {
    variants: {
      align: {
        left: "text-left items-start",
        center: "text-center items-center",
      },
      size: {
        sm: "gap-0.5",
        md: "gap-1",
        lg: "gap-1.5",
      },
    },
    defaultVariants: {
      align: "left",
      size: "md",
    },
  }
);

/**
 * Props for the StatItem component.
 *
 * @interface StatItemProps
 */
export interface StatItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof statItemVariants> {
  /**
   * Optional two-digit monospace index indicator (e.g., "01", "02").
   */
  index?: string;

  /**
   * Primary metric display value (e.g., "150+", "130+", "2,500+").
   * Rendered in bold Geist Mono typography.
   */
  value: string;

  /**
   * Category label for the metric (e.g., "Active Customers", "DOOH Spaces").
   * Rendered in semi-bold Geist typography.
   */
  label: string;

  /**
   * Supporting credibility copy providing context on the metric.
   * Rendered in muted gray.
   */
  description?: string;

  /**
   * Optional custom Tailwind class names for layout overrides.
   */
  className?: string;
}

/**
 * StatItem - Architectural Metric Column Primitive
 *
 * Renders an authoritative Swiss/Scandinavian style metric display
 * featuring an architectural reference notch, monospace index, prominent
 * Geist Mono number, and supporting credibility copy.
 *
 * @param {StatItemProps} props - Component properties.
 * @returns {JSX.Element} The rendered StatItem component.
 *
 * @example
 * ```tsx
 * <StatItem
 *   index="01"
 *   value="150+"
 *   label="Active Customers"
 *   description="Direct brand and media planning partnerships across South India."
 * />
 * ```
 */
export const StatItem = React.forwardRef<HTMLDivElement, StatItemProps>(
  ({ index, value, label, description, align, size, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-index={index}
        className={cn(statItemVariants({ align, size }), className)}
        {...props}
      >

        {/* Metric Value in Geist Sans with Tabular Figures */}
        <div className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A] group-hover:text-black transition-colors duration-200 tabular-nums">
          {value}
        </div>

        {/* Primary Metric Label */}
        <div className="mt-1.5 text-sm sm:text-base font-semibold text-[#0F172A]">
          {label}
        </div>

        {/* Contextual Description */}
        {description && (
          <p className="mt-1 text-xs text-[#64748B] leading-relaxed group-hover:text-slate-700 transition-colors duration-200">
            {description}
          </p>
        )}
      </div>
    );
  }
);

StatItem.displayName = "StatItem";

export default StatItem;
