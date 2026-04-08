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

export function InnerPageHero({ title, description, backgroundImage: _backgroundImage, breadcrumbs }: InnerPageHeroProps) {
  return (
    <section className="relative mt-[72px] overflow-hidden bg-[#0658A5]">
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "repeating-linear-gradient(90deg, white 0px, white 1px, transparent 1px, transparent 60px)",
        }}
      />

      <div className="mx-auto max-w-[1440px] px-3 sm:px-5 lg:px-8">
        <div className="relative z-10 px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
          <div className="flex min-h-[200px] flex-col justify-center">
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
        </div>
      </div>
    </section>
  );
}
