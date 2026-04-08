import * as React from "react";
import { ArrowRight } from "lucide-react";

import { cn } from "./utils";

type SingleButtonVariant = "single-button" | "single-button-dot";
type SingleButtonAppearance = "solid" | "outline-light" | "outline-brand";

type SingleButtonBaseProps = {
  label: string;
  isRTL?: boolean;
  fullWidth?: boolean;
  animateDot?: boolean;
  variant?: SingleButtonVariant;
  appearance?: SingleButtonAppearance;
};

type SingleButtonProps = React.ComponentProps<"button"> & SingleButtonBaseProps;

const baseClassName =
  "group relative inline-flex min-h-[48px] items-center justify-center overflow-hidden whitespace-nowrap rounded-sm px-5 py-3 text-sm font-semibold transition-all duration-300 sm:min-h-[54px] sm:px-7 sm:py-3.5";

const appearanceClassNames: Record<SingleButtonAppearance, string> = {
  solid:
    "bg-[#0658A5] text-white shadow-[0_4px_12px_rgba(6,88,165,0.2)] hover:-translate-y-0.5 hover:bg-[#2DABE2] hover:shadow-[0_8px_20px_rgba(45,171,226,0.3)]",
  "outline-light":
    "border-2 border-white/30 bg-transparent text-white shadow-none hover:border-[#2DABE2] hover:bg-white/15 hover:text-white hover:shadow-none",
  "outline-brand":
    "border-2 border-[#0658A5] bg-transparent text-[#0658A5] shadow-none hover:-translate-y-0.5 hover:border-[#2DABE2] hover:bg-[#2DABE2] hover:text-white hover:shadow-[0_8px_20px_rgba(45,171,226,0.2)]",
};

const contentClassName = "relative flex items-center justify-center text-sm sm:text-[0.95rem]";

const arrowClassName = "h-4 w-4 shrink-0 transition-transform duration-300";

function SingleButtonVisual({
  className,
  label,
  isRTL = false,
  fullWidth = false,
  animateDot = false,
  variant = "single-button",
  appearance = "solid",
}: SingleButtonBaseProps & { className?: string }) {
  const showDot = variant === "single-button-dot";

  return (
    <span
      className={cn(baseClassName, appearanceClassNames[appearance], fullWidth && "w-full", showDot ? "gap-3" : "gap-2", className)}
      style={{
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      }}
    >
      {showDot ? (
        <span
          className={cn(
            "h-2 w-2 shrink-0 rounded-full bg-[#FAC02F] sm:h-2.5 sm:w-2.5",
            animateDot && "animate-pulse",
          )}
          aria-hidden="true"
        />
      ) : null}
      <span className={cn(contentClassName, showDot ? "gap-2" : "gap-1.5 sm:gap-2")}>
        {label}
        <ArrowRight
          className={cn(arrowClassName, isRTL ? "rotate-180 group-hover:rotate-[135deg]" : "group-hover:-rotate-45")}
          strokeWidth={2}
          aria-hidden="true"
        />
      </span>
    </span>
  );
}

const SingleButtonBase = React.forwardRef<HTMLButtonElement, SingleButtonProps>(function SingleButtonBase(
  {
    className,
    label,
    isRTL = false,
    fullWidth = false,
    animateDot = false,
    variant = "single-button",
    appearance = "solid",
    ...props
  },
  ref,
) {
  return (
    <button
      ref={ref}
      {...props}
    >
      <SingleButtonVisual
        className={className}
        label={label}
        isRTL={isRTL}
        fullWidth={fullWidth}
        animateDot={animateDot}
        variant={variant}
        appearance={appearance}
      />
    </button>
  );
});

export const SingleButton = React.forwardRef<HTMLButtonElement, Omit<SingleButtonProps, "variant">>(function SingleButton(
  props,
  ref,
) {
  return <SingleButtonBase ref={ref} variant="single-button" {...props} />;
});

export const SingleButtonDot = React.forwardRef<HTMLButtonElement, Omit<SingleButtonProps, "variant">>(function SingleButtonDot(
  props,
  ref,
) {
  return <SingleButtonBase ref={ref} variant="single-button-dot" {...props} />;
});

export function SingleButtonInline(props: SingleButtonBaseProps & { className?: string }) {
  return <SingleButtonVisual {...props} />;
}
