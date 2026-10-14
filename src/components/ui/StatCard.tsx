import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const statCardVariants = cva(
  "relative group flex flex-col justify-between transition-all duration-200 cursor-default select-none",
  {
    variants: {
      variant: {
        performance:
          "bg-[#FFFFFF] border border-[#E2E8F0] rounded-none p-6 sm:p-8 hover:border-[#0052FF] hover:-translate-y-0.5 transition-all duration-200",
        notch:
          "bg-[#FFFFFF] border border-[#E2E8F0] rounded-none p-6 sm:p-8 hover:border-[#0052FF] hover:-translate-y-0.5 transition-all duration-200 overflow-hidden",
        featured:
          "bg-[#0052FF] text-white border border-[#0052FF] rounded-none p-6 sm:p-8 hover:-translate-y-0.5 transition-all duration-200",
        subtle:
          "bg-[#F8FAFC] border border-[#E2E8F0] rounded-none p-6 sm:p-8 hover:border-[#0052FF] hover:-translate-y-0.5 transition-all duration-200",
      },
    },
    defaultVariants: {
      variant: "performance",
    },
  }
);

export interface StatCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof statCardVariants> {
  category?: string;
  index?: string;
  value: string;
  label?: string;
  delta?: string;
  deltaType?: "positive" | "negative";
  description?: string;
  showNotch?: boolean;
}

export const StatCard = React.forwardRef<HTMLDivElement, StatCardProps>(
  (
    {
      className,
      variant = "performance",
      category,
      index,
      value,
      label,
      delta,
      deltaType = "positive",
      description,
      showNotch = false,
      ...props
    },
    ref
  ) => {
    const isFeatured = variant === "featured";

    return (
      <div
        ref={ref}
        className={cn(statCardVariants({ variant }), className)}
        {...props}
      >
        {/* Geometric Corner Notch Accent (Diacon Pattern) */}
        {(showNotch || variant === "notch") && !isFeatured && (
          <div
            aria-hidden="true"
            className="absolute top-0 left-0 w-3.5 h-3.5 bg-[#0052FF] notch-accent opacity-80 pointer-events-none"
          />
        )}

        {/* Top Meta: Category or Sequential Index */}
        {(category || index) && (
          <div className="flex items-center justify-between gap-2">
            {category && (
              <span
                className={cn(
                  "text-xs font-sans uppercase tracking-wider font-semibold",
                  isFeatured ? "text-blue-100" : "text-[#64748B]"
                )}
              >
                {category}
              </span>
            )}

            {index && (
              <span
                className={cn(
                  "text-xs font-sans font-semibold ml-auto",
                  isFeatured ? "text-blue-200" : "text-[#94A3B8]"
                )}
              >
                {index}
              </span>
            )}
          </div>
        )}

        {/* Hero Numeral in Geist Sans with Tabular Figures */}
        <div className="mt-3">
          <div
            className={cn(
              "font-sans text-3xl sm:text-4xl font-bold tracking-tight tabular-nums",
              isFeatured
                ? "text-white"
                : variant === "performance"
                ? "text-[#0052FF]"
                : "text-[#0F172A] group-hover:text-[#0052FF] transition-colors"
            )}
          >
            {value}
          </div>

          {/* Primary Label (if present) */}
          {label && (
            <div
              className={cn(
                "mt-1 text-sm sm:text-base font-semibold",
                isFeatured ? "text-blue-50" : "text-[#0F172A]"
              )}
            >
              {label}
            </div>
          )}
        </div>

        {/* Bottom Context: Delta Pill or Description */}
        <div className="mt-4 pt-3 border-t border-slate-100/80">
          {delta && (
            <div className="flex items-center gap-1.5 mb-1.5">
              <span
                className={cn(
                  "inline-flex items-center text-xs font-sans font-medium px-2 py-0.5 rounded-md",
                  isFeatured
                    ? "bg-white/20 text-white"
                    : deltaType === "positive"
                    ? "bg-[#F0FDF4] text-[#16A34A] border border-[#DCFCE7]"
                    : "bg-[#FEF2F2] text-[#DC2626] border border-[#FEE2E2]"
                )}
              >
                {deltaType === "positive" ? "▲" : "▼"} {delta}
              </span>
            </div>
          )}

          {description && (
            <p
              className={cn(
                "text-xs leading-relaxed",
                isFeatured ? "text-blue-100/90" : "text-[#64748B]"
              )}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    );
  }
);

StatCard.displayName = "StatCard";

export default StatCard;
