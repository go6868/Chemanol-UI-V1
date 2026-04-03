import { motion } from "motion/react";
import { Link } from "react-router";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface InnerPageHeroProps {
  title: string;
  description: string;
  backgroundImage: string;
  breadcrumbs: BreadcrumbItem[];
}

export function InnerPageHero({ title, description, backgroundImage, breadcrumbs }: InnerPageHeroProps) {
  return (
    <section className="relative h-[320px] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0658a5]/90 via-[#0658a5]/70 to-[#0658a5]/50" />

      {/* Line pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "repeating-linear-gradient(90deg, white 0px, white 1px, transparent 1px, transparent 60px)",
      }} />

      {/* Brand swoosh bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 48" fill="none" className="w-full" preserveAspectRatio="none" style={{ display: "block" }}>
          <path d="M0,48 L0,35 Q360,0 720,20 Q1080,40 1440,10 L1440,48 Z" fill="white" />
          <path d="M0,35 Q360,0 720,20 Q1080,40 1440,10" stroke="rgba(45,171,226,0.25)" strokeWidth="1" fill="none" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-[1440px] mx-auto px-12 flex flex-col justify-center">
        {/* Apple-style breadcrumbs */}
        <motion.nav
          className="flex items-center gap-1.5 mb-5"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          <Link to="/" className="text-xs tracking-wide text-white/60 hover:text-white/90 transition-colors">
            Home
          </Link>
          {breadcrumbs.map((item, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <ChevronRight className="w-3 h-3 text-white/30" strokeWidth={1.5} />
              {item.href ? (
                <Link to={item.href} className="text-xs tracking-wide text-white/60 hover:text-white/90 transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-xs tracking-wide text-white/90">{item.label}</span>
              )}
            </span>
          ))}
        </motion.nav>

        <motion.h1
          className="text-4xl text-white tracking-tight mb-4 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="text-white/75 max-w-2xl"
          style={{ lineHeight: 1.6 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
