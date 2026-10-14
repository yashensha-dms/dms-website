import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const badgeVariants = cva(
  "inline-flex items-center gap-1.5 font-sans select-none transition-colors duration-150",
  {
    variants: {
      variant: {
        accent:
          "bg-[#EFF6FF] text-[#0052FF] border border-[#BFDBFE]/80 font-medium",
        neutral:
          "bg-[#F1F5F9] text-[#475569] border border-[#E2E8F0] font-medium",
        dark:
          "bg-[#030712] text-[#F8FAFC] border border-white/10 font-medium",
        brand:
          "bg-[#EFF6FF] text-[#0052FF] border border-[#BFDBFE]/80 font-medium",
        success:
          "bg-[#F0FDF4] text-[#16A34A] border border-[#DCFCE7] font-medium",
        outline:
          "bg-transparent text-[#64748B] border border-dashed border-slate-300 font-normal",
      },
      size: {
        sm: "px-2 py-0.5 text-[11px] rounded-full",
        md: "px-3 py-1 text-xs rounded-full",
        square: "px-2 py-0.5 text-[11px] rounded-md",
      },
    },
    defaultVariants: {
      variant: "accent",
      size: "md",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  children: React.ReactNode;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(badgeVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export default Badge;
