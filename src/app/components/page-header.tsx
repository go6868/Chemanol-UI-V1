import { motion } from "motion/react";

interface PageHeaderProps {
  title: string;
  description: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="relative bg-[#0658a5] overflow-hidden">
      {/* Line pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "repeating-linear-gradient(90deg, white 0px, white 1px, transparent 1px, transparent 60px)",
      }} />
      <div className="relative max-w-[1440px] mx-auto px-12 py-14">
        <motion.h1
          className="text-3xl text-white tracking-tight mb-3"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="text-white/65 max-w-3xl"
          style={{ lineHeight: 1.6 }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
        >
          {description}
        </motion.p>
      </div>
      {/* Swoosh */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 24" fill="none" className="w-full" preserveAspectRatio="none" style={{ display: "block" }}>
          <path d="M0,24 L0,16 Q360,0 720,12 Q1080,24 1440,6 L1440,24 Z" fill="white" />
        </svg>
      </div>
    </div>
  );
}
