import { useState } from "react";
import { Link } from "react-router";
import { GlasmorphicCard } from "./glassmorphic-card";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/language-context";
import { CardCornerCtaInline } from "./split-cta";

interface ProductCardProps {
  IconComponent: React.ComponentType<{ className?: string; isHovered?: boolean }>;
  title: string;
  desc: string;
  link: string;
  delay?: number;
  className?: string;
  forceHovered?: boolean;
}

export function ProductCard({ IconComponent, title, desc, link, delay = 0, className = "", forceHovered = false }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { t, isRTL } = useLanguage();
  const isActive = isHovered || forceHovered;

  return (
    <GlasmorphicCard delay={delay} className={className}>
      <Link
        to={link}
        className="group flex h-full flex-col"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div 
          className="w-14 h-14 mb-5"
          animate={{
            scale: isActive ? 1.1 : 1,
            rotate: isActive ? [0, -5, 5, 0] : 0,
          }}
          transition={{ 
            duration: 0.5,
            ease: "easeOut"
          }}
        >
          <IconComponent className="w-full h-full" isHovered={isActive} />
        </motion.div>
        
        <h3 className={`text-lg text-neutral-900 mb-2 transition-colors duration-300 ${isActive ? "text-[#0658a5]" : "group-hover:text-[#0658a5]"}`}>
          {title}
        </h3>
        
        <p className="mb-4 text-sm leading-relaxed text-neutral-600">
          {desc}
        </p>
        
        <motion.span 
          className="mt-auto inline-flex"
          animate={{
            x: isActive ? (isRTL ? -4 : 4) : 0,
          }}
        >
          <CardCornerCtaInline label={t("home.products.learnMore")} isRTL={isRTL} size="sm" />
        </motion.span>
      </Link>
    </GlasmorphicCard>
  );
}