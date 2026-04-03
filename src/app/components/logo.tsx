import { Link } from "react-router";
import { motion } from "motion/react";
import logoBlack from "@/assets/Black Variation.png";
import logoBlue from "@/assets/Blue Variation.png";
import logoWhite from "@/assets/White Variation.png";

interface LogoProps {
  variant?: "blue" | "white" | "black";
  size?: "sm" | "md" | "lg";
  className?: string;
  animate?: boolean;
}

export function Logo({ variant = "blue", size = "md", className = "", animate = true }: LogoProps) {
  const sizes = {
    sm: {
      width: 176,
      height: 46,
    },
    md: {
      width: 220,
      height: 56,
    },
    lg: {
      width: 268,
      height: 68,
    },
  };

  const currentSize = sizes[size];
  const logoMap = {
    black: logoBlack,
    blue: logoBlue,
    white: logoWhite,
  };
  const logoSrc = logoMap[variant];

  const logoContent = (
    <motion.div
      className={`flex items-center transition-all duration-500 ${className}`}
      whileHover={animate ? { scale: 1.05 } : undefined}
      transition={animate ? { type: "spring", stiffness: 400, damping: 20 } : undefined}
    >
      <img
        src={logoSrc}
        alt="Chemanol - Chemicals From Methanol"
        className="block h-auto w-auto object-contain object-left"
        style={{
          width: currentSize.width,
          height: currentSize.height,
        }}
      />
    </motion.div>
  );

  return (
    <Link to="/" className="flex shrink-0 items-center" aria-label="Chemanol home">
      {logoContent}
    </Link>
  );
}