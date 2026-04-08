import { useState } from "react";
import { Link } from "react-router";
import { GlasmorphicCard } from "./glassmorphic-card";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/language-context";
import { ProductCardImageFrame } from "./product-card-image-frame";
import { SingleButtonInline } from "./ui/single-button";
import { cn } from "./ui/utils";

interface ProductCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  desc: string;
  link: string;
  industries?: string[];
  applications?: string[];
  ctaLabel?: string;
  showCta?: boolean;
  delay?: number;
  className?: string;
  forceHovered?: boolean;
  mode?: "default" | "portfolio";
}

function ProductTagGroup({
  heading,
  tags,
}: {
  heading: string;
  tags: string[];
}) {
  if (!tags.length) {
    return null;
  }

  const shouldShowOverflowHint = tags.length > 2;

  return (
    <div className="group/tag relative min-w-0">
      <div className="mb-2 text-[11px] uppercase tracking-[0.16em] text-neutral-400">{heading}</div>
      <div className="relative overflow-hidden">
        <div className="flex flex-nowrap gap-2 overflow-hidden whitespace-nowrap pr-8">
          {tags.map((tag) => (
            <span
              key={tag}
              className="shrink-0 border border-[#D8DCE2] bg-[#F3F4F6] px-3 py-1 text-xs text-neutral-600"
            >
              {tag}
            </span>
          ))}
        </div>
        {shouldShowOverflowHint ? (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center bg-gradient-to-l from-[#F5F7FA] via-[#F5F7FA] to-transparent pl-6 text-xs font-medium tracking-[0.08em] text-neutral-400">
            ...
          </div>
        ) : null}
      </div>
      <div className="pointer-events-none absolute left-0 top-full z-20 mt-2 hidden w-full border border-[#D9E6F0] bg-white p-3 shadow-[0_18px_44px_rgba(6,88,165,0.12)] group-hover/tag:block">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="border border-[#D8DCE2] bg-[#F3F4F6] px-3 py-1 text-xs text-neutral-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProductCard({
  imageSrc,
  imageAlt,
  title,
  desc,
  link,
  industries,
  applications,
  ctaLabel,
  showCta = true,
  delay = 0,
  className = "",
  forceHovered = false,
  mode = "default",
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { isRTL } = useLanguage();
  const isPortfolioMode = mode === "portfolio";
  const isActive = isPortfolioMode ? false : isHovered || forceHovered;

  const content = (
    <Link
      to={link}
      className="group flex h-full flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="w-full"
        animate={{
          scale: isActive ? 1.02 : 1,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        <ProductCardImageFrame
          src={imageSrc}
          alt={imageAlt}
          className={cn(
            "mb-8 h-[220px] sm:h-[240px] lg:h-[260px]",
            isPortfolioMode && "mb-6 h-[200px] bg-white sm:h-[220px] lg:h-[240px]",
          )}
        />
      </motion.div>

      <div className={cn("flex flex-col pt-3", isPortfolioMode && "pt-0")}>
        <h3 className={`mb-2 text-lg text-neutral-900 transition-colors duration-300 ${isActive ? "text-[#0658a5]" : "group-hover:text-[#0658a5]"}`}>
          {title}
        </h3>

        {isPortfolioMode && (industries?.length || applications?.length) ? (
          <div className="mb-4 space-y-3">
            <ProductTagGroup heading="Industries" tags={industries ?? []} />
            <ProductTagGroup heading="Applications" tags={applications ?? []} />
          </div>
        ) : null}

        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-neutral-600">
          {desc}
        </p>

        {!isPortfolioMode && (industries?.length || applications?.length) ? (
          <div className="space-y-4">
            {industries?.length ? (
              <div>
                <div className="mb-2 text-xs uppercase tracking-[0.16em] text-neutral-400">Industries</div>
                <div className="flex flex-wrap gap-2">
                  {industries.map((industry) => (
                    <span
                      key={industry}
                      className="border border-[#D8DCE2] bg-[#F3F4F6] px-3 py-1 text-xs text-neutral-600"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}

            {applications?.length ? (
              <div>
                <div className="mb-2 text-xs uppercase tracking-[0.16em] text-neutral-400">Applications</div>
                <div className="flex flex-wrap gap-2">
                  {applications.map((application) => (
                    <span
                      key={application}
                      className="border border-[#D8DCE2] bg-[#F3F4F6] px-3 py-1 text-xs text-neutral-600"
                    >
                      {application}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        ) : null}

        {showCta ? (
          <motion.span
            className={cn("inline-flex w-full pt-2", isPortfolioMode && "mt-auto pt-4")}
            animate={{
              x: isActive ? (isRTL ? -4 : 4) : 0,
            }}
          >
            <SingleButtonInline
              label={isPortfolioMode ? "Get a Quote" : ctaLabel ?? "Get a Quote"}
              isRTL={isRTL}
              fullWidth
              appearance={isPortfolioMode ? "solid" : "outline-brand"}
              className={cn(
                "min-h-[42px] w-full px-4 py-2 text-xs sm:min-h-[42px] sm:px-4 sm:py-2 sm:text-xs",
                isPortfolioMode && "justify-center px-5 py-3 text-sm font-semibold",
              )}
            />
          </motion.span>
        ) : null}
      </div>
    </Link>
  );

  if (isPortfolioMode) {
    return (
      <motion.div
        className={cn(
          "h-full border border-[#D9E6F0] bg-[#F5F7FA] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(6,88,165,0.06)]",
          className,
        )}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
      >
        {content}
      </motion.div>
    );
  }

  return <GlasmorphicCard delay={delay} className={className}>{content}</GlasmorphicCard>;
}