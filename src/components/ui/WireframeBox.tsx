import React from "react";
import { cn } from "@/lib/utils";

export interface WireframeBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  tag?: string;
  showBrackets?: boolean;
  borderStyle?: "solid" | "dashed" | "hairline";
  children: React.ReactNode;
}

export const WireframeBox = React.forwardRef<HTMLDivElement, WireframeBoxProps>(
  (
    {
      className,
      tag,
      showBrackets = true,
      borderStyle = "hairline",
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative",
          borderStyle === "hairline" && "border border-slate-200/90",
          borderStyle === "dashed" && "border border-dashed border-slate-300",
          borderStyle === "solid" && "border-2 border-slate-200",
          className
        )}
        {...props}
      >
        {/* Corner Brackets */}
        {showBrackets && (
          <>
            <span
              aria-hidden="true"
              className="absolute -top-1.5 -left-1.5 text-xs font-sans text-slate-400 select-none pointer-events-none"
            >
              ┌
            </span>
            <span
              aria-hidden="true"
              className="absolute -top-1.5 -right-1.5 text-xs font-sans text-slate-400 select-none pointer-events-none"
            >
              ┐
            </span>
            <span
              aria-hidden="true"
              className="absolute -bottom-1.5 -left-1.5 text-xs font-sans text-slate-400 select-none pointer-events-none"
            >
              └
            </span>
            <span
              aria-hidden="true"
              className="absolute -bottom-1.5 -right-1.5 text-xs font-sans text-slate-400 select-none pointer-events-none"
            >
              ┘
            </span>
          </>
        )}

        {/* Optional Architectural Tag */}
        {tag && (
          <div className="absolute -top-3 left-4 px-2 bg-white text-[10px] font-sans uppercase tracking-wider text-slate-500 select-none">
            {tag}
          </div>
        )}

        {children}
      </div>
    );
  }
);

WireframeBox.displayName = "WireframeBox";

export default WireframeBox;
