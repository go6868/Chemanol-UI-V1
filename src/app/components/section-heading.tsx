import type { ReactNode } from "react";
import { cn } from "@/app/components/ui/utils";

type SectionHeadingProps = {
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  align?: "start" | "center";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  contentClassName?: string;
  accentClassName?: string;
  actionClassName?: string;
};

const titleSizeClassNames = {
  sm: "text-xl sm:text-2xl",
  md: "text-2xl sm:text-[2rem]",
  lg: "text-3xl sm:text-[2.35rem]",
  xl: "text-4xl sm:text-[2.75rem]",
};

export function SectionHeading({
  title,
  description,
  action,
  align = "start",
  size = "md",
  className,
  titleClassName,
  descriptionClassName,
  contentClassName,
  accentClassName,
  actionClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        action ? "flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between" : align === "center" ? "flex justify-center" : "",
        className,
      )}
    >
      <div className={cn("flex items-stretch gap-5", align === "center" ? "max-w-3xl justify-center text-center" : "")}>
        <div className={cn("w-1 shrink-0 bg-[#2dabe2]", accentClassName)} />
        <div className={cn("py-1", contentClassName)}>
          <h2 className={cn("text-neutral-900", titleSizeClassNames[size], description ? "mb-3" : "", titleClassName)}>{title}</h2>
          {description ? (
            <p className={cn("text-base text-neutral-500 sm:text-lg", descriptionClassName)}>{description}</p>
          ) : null}
        </div>
      </div>
      {action ? <div className={cn("lg:shrink-0 lg:self-center", actionClassName)}>{action}</div> : null}
    </div>
  );
}