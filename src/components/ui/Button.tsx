import React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer select-none group",
  {
    variants: {
      variant: {
        primary:
          "bg-[#0052FF] text-white hover:bg-[#0043CC] shadow-sm active:scale-[0.98]",
        brand:
          "bg-[#0052FF] text-white hover:bg-[#0043CC] shadow-sm active:scale-[0.98]",
        dark:
          "bg-[#030712] text-white hover:bg-[#1E293B] shadow-sm active:scale-[0.98]",
        secondary:
          "bg-transparent border border-slate-200 text-slate-800 hover:border-slate-400 hover:bg-slate-50 active:scale-[0.98]",
        outline:
          "bg-transparent border border-slate-200 text-slate-800 hover:border-slate-400 hover:bg-slate-50 active:scale-[0.98]",
        white:
          "bg-white text-[#0A0E17] hover:bg-slate-100 hover:shadow-lg active:scale-[0.98]",
        ghost:
          "bg-transparent text-slate-800 hover:text-[#0052FF] hover:bg-slate-100/60",
      },
      size: {
        sm: "px-4 py-1.5 text-xs gap-1.5",
        md: "px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm gap-1.5 sm:gap-2",
        lg: "px-7 py-3 text-base gap-2.5",
      },
      shape: {
        pill: "rounded-full",
        rounded: "rounded-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      shape: "pill",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  showArrow?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      shape,
      href,
      icon,
      iconPosition = "right",
      showArrow = false,
      children,
      ...props
    },
    ref
  ) => {
    const combinedClasses = cn(buttonVariants({ variant, size, shape }), className);

    const renderedIcon = showArrow ? (
      <ArrowRight className="w-3.5 h-3.5 shrink-0 transition-transform duration-150 group-hover:translate-x-0.5" />
    ) : icon ? (
      <span className="shrink-0 transition-transform duration-150">
        {icon}
      </span>
    ) : null;

    const content = (
      <>
        {renderedIcon && iconPosition === "left" && renderedIcon}
        <span>{children}</span>
        {renderedIcon && iconPosition === "right" && renderedIcon}
      </>
    );

    if (href) {
      return (
        <Link href={href} className={combinedClasses}>
          {content}
        </Link>
      );
    }

    return (
      <button ref={ref} className={combinedClasses} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
