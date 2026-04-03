import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

type SplitCtaSize = "sm" | "md";

interface SplitCtaBaseProps {
  label: string;
  isRTL?: boolean;
  size?: SplitCtaSize;
  className?: string;
  labelClassName?: string;
  iconBoxClassName?: string;
}

interface SplitCtaLinkProps extends SplitCtaBaseProps {
  to: string;
}

interface CardCtaLinkProps extends SplitCtaBaseProps {
  to: string;
}

const sizeClasses: Record<SplitCtaSize, { container: string; label: string; iconBox: string; icon: string }> = {
  sm: {
    container: "gap-1.5",
    label: "min-h-[36px] rounded-[12px] px-4 text-xs",
    iconBox: "h-9 w-9 rounded-[12px]",
    icon: "h-3.5 w-3.5",
  },
  md: {
    container: "gap-1.5",
    label: "min-h-[48px] rounded-[14px] px-6 text-sm",
    iconBox: "h-12 w-12 rounded-[14px]",
    icon: "h-4 w-4",
  },
};

function buildClassName(...values: Array<string | undefined>) {
  return values.filter(Boolean).join(" ");
}

const cardSizeClasses: Record<SplitCtaSize, { wrapper: string; label: string; iconBox: string; icon: string }> = {
  sm: {
    wrapper: "pt-4",
    label: "text-[11px] tracking-[0.18em] leading-none",
    iconBox: "h-10 w-10 rounded-[14px]",
    icon: "h-4.5 w-4.5",
  },
  md: {
    wrapper: "pt-5",
    label: "text-xs tracking-[0.2em] leading-none",
    iconBox: "h-12 w-12 rounded-[16px]",
    icon: "h-5 w-5",
  },
};

function SplitCtaVisual({
  label,
  isRTL = false,
  size = "md",
  className,
  labelClassName,
  iconBoxClassName,
}: SplitCtaBaseProps) {
  const styles = sizeClasses[size];
  const usesCustomLabelStyle = Boolean(labelClassName);
  const usesLightIconBox = iconBoxClassName?.includes("bg-white");
  const arrowClassName = isRTL
    ? "rotate-180 group-hover:rotate-[135deg]"
    : "group-hover:-rotate-45";

  return (
    <span className={buildClassName("inline-flex items-center", styles.container, className)}>
      <span
        className={buildClassName(
          usesCustomLabelStyle
            ? "inline-flex items-center transition-colors duration-300"
            : "inline-flex items-center border border-[#D5DEE6] bg-white text-[#233132] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] transition-colors duration-300 group-hover:text-[#0F57A4]",
          styles.label,
          labelClassName,
        )}
      >
        {label}
      </span>
      <span
        className={buildClassName(
          usesLightIconBox
            ? "relative inline-flex items-center justify-center overflow-hidden transition-colors duration-500"
            : "relative inline-flex items-center justify-center overflow-hidden border border-[#D5DEE6] bg-[#EEF3F7] text-[#0F57A4] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] transition-colors duration-500",
          styles.iconBox,
          iconBoxClassName,
        )}
      >
        {usesLightIconBox ? null : (
          <>
            <span className="pointer-events-none absolute inset-0 translate-y-[112%] bg-gradient-to-br from-[#78D8F5] via-[#30ABE1] to-[#0F57A4] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
            <span className="pointer-events-none absolute -left-1/3 top-0 h-full w-1/2 translate-y-[140%] rotate-12 bg-white/25 blur-md transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[260%] group-hover:translate-y-0" />
          </>
        )}
        <span className={buildClassName("relative z-10 inline-flex items-center justify-center transition-colors duration-500", usesLightIconBox ? undefined : "group-hover:text-white")}>
          <ArrowRight className={buildClassName(styles.icon, "transition-transform duration-300", arrowClassName)} strokeWidth={1.5} />
        </span>
      </span>
    </span>
  );
}

export function SplitCtaLink({
  to,
  label,
  isRTL = false,
  size = "md",
  className,
  labelClassName,
  iconBoxClassName,
}: SplitCtaLinkProps) {
  return (
    <Link to={to} className={buildClassName("group inline-flex items-center", className)}>
      <SplitCtaVisual
        label={label}
        isRTL={isRTL}
        size={size}
        labelClassName={labelClassName}
        iconBoxClassName={iconBoxClassName}
      />
    </Link>
  );
}

export function SplitCtaInline({ label, isRTL = false, size = "md", className, labelClassName, iconBoxClassName }: SplitCtaBaseProps) {
  return (
    <SplitCtaVisual
      label={label}
      isRTL={isRTL}
      size={size}
      className={className}
      labelClassName={labelClassName}
      iconBoxClassName={iconBoxClassName}
    />
  );
}

function CardCtaVisual({ label, isRTL = false, size = "md", className }: SplitCtaBaseProps) {
  const styles = cardSizeClasses[size];
  const arrowClassName = isRTL
    ? "rotate-180 group-hover:rotate-[135deg]"
    : "group-hover:-rotate-45";

  return (
    <span className={buildClassName("flex w-full items-center justify-between", styles.wrapper, className)}>
      <span className={buildClassName("inline-flex min-h-full items-center font-semibold uppercase text-[#233132]", styles.label)}>
        {label}
      </span>
      <span className={buildClassName("relative inline-flex items-center justify-center overflow-hidden border border-[#D5DEE6] bg-[#EEF3F7] text-[#0F57A4] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] transition-colors duration-500", styles.iconBox)}>
        <span className="pointer-events-none absolute inset-0 translate-y-[112%] bg-gradient-to-br from-[#78D8F5] via-[#30ABE1] to-[#0F57A4] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
        <span className="pointer-events-none absolute -left-1/3 top-0 h-full w-1/2 translate-y-[140%] rotate-12 bg-white/25 blur-md transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[260%] group-hover:translate-y-0" />
        <span className="relative z-10 inline-flex items-center justify-center transition-colors duration-500 group-hover:text-white">
          <ArrowRight className={buildClassName(styles.icon, "transition-transform duration-300", arrowClassName)} strokeWidth={1.8} />
        </span>
      </span>
    </span>
  );
}

export function CardCornerCtaLink({ to, label, isRTL = false, size = "md", className }: CardCtaLinkProps) {
  return (
    <Link to={to} className={buildClassName("group inline-flex w-full", className)}>
      <CardCtaVisual label={label} isRTL={isRTL} size={size} />
    </Link>
  );
}

export function CardCornerCtaInline({ label, isRTL = false, size = "md", className }: SplitCtaBaseProps) {
  return <CardCtaVisual label={label} isRTL={isRTL} size={size} className={className} />;
}