import { motion } from "motion/react";
import { ReactNode, useState } from "react";

interface GlasmorphicCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function GlasmorphicCard({ children, className = "", delay = 0 }: GlasmorphicCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative transition-transform duration-300 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "#0F57A4",
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? "translate(8px, 8px)" : "translate(0px, 0px)",
          zIndex: 0,
          transition: "transform 240ms ease-out, opacity 240ms ease-out",
        }}
      />

      <div
        className="relative z-10 h-full bg-white p-7"
        style={{
          transform: isHovered ? "translate(-8px, -8px)" : "translate(0px, 0px)",
          transition: "transform 240ms ease-out",
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}