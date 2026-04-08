import { Link, useNavigate } from "react-router";
import { Leaf, ArrowRight, Search } from "lucide-react";
import { useLanguage } from "../contexts/language-context";
import { AnimatedSection } from "../components/animated-section";
import { motion, useReducedMotion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ProductCard } from "../components/product-card";
import heroBackgroundVideo from "../../assets/integrated-loop-optimized.mp4";
import constructionIcon from "../../assets/Contruction.svg";
import automobileIcon from "../../assets/Automobile.svg";
import pharmaceuticalIcon from "../../assets/Pharmacuticle.svg";
import chemanolBlueLogo from "../../assets/Blue Variation.png";
import sectionBackgroundImage from "../../assets/Section BG.jpg";
import { SplitCtaLink } from "../components/split-cta";
import { SectionHeading } from "../components/section-heading";
import { SingleButton, SingleButtonDot, SingleButtonInline } from "@/app/components/ui/single-button";
import { getProductCardImage } from "@/app/data/product-card-images";

const labImg = "https://images.unsplash.com/photo-1707944745891-922795a805dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVtaWNhbCUyMGxhYm9yYXRvcnklMjByZXNlYXJjaCUyMHNjaWVudGlzdHxlbnwxfHx8fDE3NzQ4NjA4NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const sustainImg = "https://images.unsplash.com/photo-1763451327779-6c7f7e60d151?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGVuZXJneSUyMGdyZWVuJTIwZmFjdG9yeXxlbnwxfHx8fDE3NzQ4Njg1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const heroImg2 = "https://images.unsplash.com/photo-1625759882923-ef3ba987701b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVtaWNhbCUyMHBsYW50JTIwYWVyaWFsJTIwbmlnaHQlMjBibHVlJTIwaW5kdXN0cmlhbCUyMHJlZmluZXJ5fGVufDF8fHx8MTc3NDg3MjI2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

type NavigatorWithConnection = Navigator & {
  connection?: {
    saveData?: boolean;
  };
};

/* ── Animated Counter Hook ── */
function useAnimatedCounter(target: number, duration: number = 2000, shouldStart: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    const start = Date.now();
    const step = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [shouldStart, target, duration]);

  return count;
}

/* ── Thin-line stat icons ── */
function FactoryIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M2 20h20" /><path d="M5 20V8l5 4V8l5 4V4h4v16" /><path d="M3 20h18" />
    </svg>
  );
}
function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
function PeopleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
function CertIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="8" r="6" /><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
    </svg>
  );
}

function PackageSearchIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M12 22V12" />
      <path d="M20.27 18.27 22 20" />
      <path d="M21 10.498V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l.98-.559" />
      <path d="M3.29 7 12 12l8.71-5" />
      <path d="m7.5 4.27 8.997 5.148" />
      <circle cx="18.5" cy="16.5" r="2.5" />
    </svg>
  );
}

function ShieldCheckIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

/* ── Carbon-Link Molecular Grid Pattern ── */
function CarbonLinkGrid() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Primary molecular grid */}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.1 }}>
        <defs>
          <pattern id="carbonGrid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <circle cx="40" cy="40" r="1.5" fill="white" opacity="0.6" />
            <circle cx="0" cy="0" r="1" fill="white" opacity="0.3" />
            <circle cx="80" cy="0" r="1" fill="white" opacity="0.3" />
            <circle cx="0" cy="80" r="1" fill="white" opacity="0.3" />
            <circle cx="80" cy="80" r="1" fill="white" opacity="0.3" />
            <line x1="0" y1="0" x2="40" y2="40" stroke="white" strokeWidth="0.3" opacity="0.4" />
            <line x1="80" y1="0" x2="40" y2="40" stroke="white" strokeWidth="0.3" opacity="0.4" />
            <line x1="0" y1="80" x2="40" y2="40" stroke="white" strokeWidth="0.3" opacity="0.4" />
            <line x1="80" y1="80" x2="40" y2="40" stroke="white" strokeWidth="0.3" opacity="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#carbonGrid)" />
      </svg>

      {/* Animated floating molecular nodes */}
      {[
        { x: "10%", y: "20%", size: 4, delay: 0, dur: 8 },
        { x: "25%", y: "65%", size: 3, delay: 1.5, dur: 10 },
        { x: "45%", y: "15%", size: 5, delay: 0.8, dur: 12 },
        { x: "60%", y: "50%", size: 3, delay: 2, dur: 9 },
        { x: "80%", y: "25%", size: 4, delay: 0.3, dur: 11 },
        { x: "35%", y: "80%", size: 3, delay: 3, dur: 7 },
        { x: "90%", y: "60%", size: 4, delay: 1, dur: 13 },
        { x: "15%", y: "45%", size: 3, delay: 2.5, dur: 8 },
        { x: "70%", y: "75%", size: 3, delay: 0.5, dur: 10 },
      ].map((dot, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/30"
          style={{ left: dot.x, top: dot.y, width: dot.size, height: dot.size }}
          animate={{ y: [-10, 10, -10], opacity: [0.15, 0.5, 0.15] }}
          transition={{ duration: dot.dur, delay: dot.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Connecting bond lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.04 }}>
        <line x1="10%" y1="20%" x2="25%" y2="65%" stroke="white" strokeWidth="0.8" />
        <line x1="25%" y1="65%" x2="45%" y2="15%" stroke="white" strokeWidth="0.8" />
        <line x1="45%" y1="15%" x2="60%" y2="50%" stroke="white" strokeWidth="0.8" />
        <line x1="60%" y1="50%" x2="80%" y2="25%" stroke="white" strokeWidth="0.8" />
        <line x1="80%" y1="25%" x2="90%" y2="60%" stroke="white" strokeWidth="0.8" />
        <line x1="35%" y1="80%" x2="60%" y2="50%" stroke="white" strokeWidth="0.8" />
        <line x1="15%" y1="45%" x2="45%" y2="15%" stroke="white" strokeWidth="0.8" />
        <line x1="70%" y1="75%" x2="90%" y2="60%" stroke="white" strokeWidth="0.8" />
      </svg>
    </div>
  );
}

/* ── Liquid Text Component ── */
function LiquidText({ text, className }: { text: string; className?: string }) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="invisible">{text}</span>
      <span
        className="absolute inset-0"
        style={{
          backgroundImage: "linear-gradient(135deg, #2dabe2 0%, #6dd5fa 25%, #2dabe2 50%, #0658a5 75%, #2dabe2 100%)",
          backgroundSize: "300% 300%",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: "liquidFlow 4s ease-in-out infinite",
        }}
      >
        {text}
      </span>
    </span>
  );
}

export function Home() {
  const { t, isRTL } = useLanguage();
  const navigate = useNavigate();
  const prefersReducedMotion = useReducedMotion();
  const statsIconStroke = "#111827";
  const [searchFocused, setSearchFocused] = useState(false);
  const [enableAmbientEffects, setEnableAmbientEffects] = useState(false);
  const [isCompactHomeLayout, setIsCompactHomeLayout] = useState(false);
  const [activeMobileProductIndex, setActiveMobileProductIndex] = useState(0);
  const [mobileProductSlideWidth, setMobileProductSlideWidth] = useState(0);
  const [statsInView, setStatsInView] = useState(false);
  const statsSectionRef = useRef<HTMLDivElement>(null);
  const mobileProductCarouselRef = useRef<HTMLDivElement>(null);
  const mobileProductTrackRef = useRef<HTMLDivElement>(null);
  const mobileTouchStartXRef = useRef<number | null>(null);
  const mediaCarouselRef = useRef<HTMLDivElement>(null);

  // Animated counters for stats bar
  const counter1 = useAnimatedCounter(1300000, 2500, statsInView);
  const counter2 = useAnimatedCounter(40, 1800, statsInView);
  const counter3 = useAnimatedCounter(500, 2000, statsInView);

  useEffect(() => {
    const navigatorWithConnection = navigator as NavigatorWithConnection;

    const updateAmbientEffects = () => {
      const saveDataEnabled = navigatorWithConnection.connection?.saveData === true;
      const lowCoreDevice = navigator.hardwareConcurrency <= 4;
      const compactViewport = window.innerWidth < 1024;

      setEnableAmbientEffects(!prefersReducedMotion && !saveDataEnabled && !lowCoreDevice && !compactViewport);
    };

    updateAmbientEffects();
    window.addEventListener("resize", updateAmbientEffects);

    return () => window.removeEventListener("resize", updateAmbientEffects);
  }, [prefersReducedMotion]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 869px)");
    const updateCompactHomeLayout = (event?: MediaQueryListEvent) => {
      setIsCompactHomeLayout(event ? event.matches : mediaQuery.matches);
    };

    updateCompactHomeLayout();
    mediaQuery.addEventListener("change", updateCompactHomeLayout);

    return () => mediaQuery.removeEventListener("change", updateCompactHomeLayout);
  }, []);

  useEffect(() => {
    if (!statsSectionRef.current || statsInView) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(statsSectionRef.current);

    return () => observer.disconnect();
  }, [statsInView]);

  const formatCount = (n: number) => {
    if (n >= 1000000) return (n / 1000000).toFixed(1) + "M+";
    if (n >= 1000) return (n / 1000).toFixed(0) + "K+";
    return n.toString() + "+";
  };

  const industryCards = [
    {
      number: "01.",
      href: "/industries/construction",
      icon: constructionIcon,
      iconMode: "image",
      title: t("home.industries.construction.title"),
      desc: t("home.industries.construction.description"),
      color: "#D7D7D6",
      textColor: "#273236",
    },
    {
      number: "02.",
      href: "/industries/automotive",
      icon: automobileIcon,
      title: t("home.industries.automotive.title"),
      desc: t("home.industries.automotive.description"),
      color: "#92B6C5",
      textColor: "#173746",
    },
    {
      number: "03.",
      href: "/industries/pharmaceuticals",
      icon: pharmaceuticalIcon,
      title: t("home.industries.pharmaceuticals.title"),
      desc: t("home.industries.pharmaceuticals.description"),
      color: "#30ABE1",
      textColor: "#08344B",
    },
  ];

  const productCards = [
    { imageSrc: getProductCardImage("methanol"), imageAlt: t("home.products.methanol.title"), title: t("home.products.methanol.title"), desc: t("home.products.methanol.description"), link: "/products#methanol" },
    { imageSrc: getProductCardImage("formaldehyde"), imageAlt: t("home.products.formaldehyde.title"), title: t("home.products.formaldehyde.title"), desc: t("home.products.formaldehyde.description"), link: "/products#formaldehyde" },
    { imageSrc: getProductCardImage("derivatives"), imageAlt: t("home.products.derivatives.title"), title: t("home.products.derivatives.title"), desc: t("home.products.derivatives.description"), link: "/products#derivatives" },
    { imageSrc: getProductCardImage("specialty"), imageAlt: t("home.products.specialty.title"), title: t("home.products.specialty.title"), desc: t("home.products.specialty.description"), link: "/products#specialty" },
  ];

  const mediaItems = [
    { date: t("home.media.items.first.date"), title: t("home.media.items.first.title"), desc: t("home.media.items.first.description"), img: heroImg2 },
    { date: t("home.media.items.second.date"), title: t("home.media.items.second.title"), desc: t("home.media.items.second.description"), img: labImg },
    { date: t("home.media.items.third.date"), title: t("home.media.items.third.title"), desc: t("home.media.items.third.description"), img: sustainImg },
    { date: "DECEMBER 08, 2025", title: "Chemanol Expands Export Distribution Network", desc: "New logistics partnerships are improving regional product reach and delivery speed.", img: heroImg2 },
    { date: "NOVEMBER 26, 2025", title: "Operational Excellence Program Reaches New Milestone", desc: "Process improvements continue to strengthen reliability, safety, and plant efficiency.", img: labImg },
  ];

  useEffect(() => {
    if (!isCompactHomeLayout || prefersReducedMotion) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveMobileProductIndex((currentIndex) => (currentIndex + 1) % productCards.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [isCompactHomeLayout, prefersReducedMotion, productCards.length]);

  const goToNextMobileProduct = () => {
    setActiveMobileProductIndex((currentIndex) => (currentIndex + 1) % productCards.length);
  };

  const goToPreviousMobileProduct = () => {
    setActiveMobileProductIndex((currentIndex) => (currentIndex - 1 + productCards.length) % productCards.length);
  };

  const handleMobileProductTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    mobileTouchStartXRef.current = event.touches[0]?.clientX ?? null;
  };

  const handleMobileProductTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const touchStartX = mobileTouchStartXRef.current;
    const touchEndX = event.changedTouches[0]?.clientX;

    mobileTouchStartXRef.current = null;

    if (touchStartX === null || touchEndX === undefined) {
      return;
    }

    const swipeDistance = touchEndX - touchStartX;
    const swipeThreshold = Math.max(36, mobileProductSlideWidth * 0.1);

    if (swipeDistance <= -swipeThreshold) {
      goToNextMobileProduct();
      return;
    }

    if (swipeDistance >= swipeThreshold) {
      goToPreviousMobileProduct();
    }
  };

  useEffect(() => {
    if (!isCompactHomeLayout) {
      setMobileProductSlideWidth(0);
      return;
    }

    const updateMobileProductSlideWidth = () => {
      if (!mobileProductCarouselRef.current) {
        return;
      }

      setMobileProductSlideWidth(mobileProductCarouselRef.current.offsetWidth * 0.8);
    };

    updateMobileProductSlideWidth();
    window.addEventListener("resize", updateMobileProductSlideWidth);

    return () => window.removeEventListener("resize", updateMobileProductSlideWidth);
  }, [isCompactHomeLayout]);

  useEffect(() => {
    if (!mobileProductTrackRef.current || !mobileProductSlideWidth) {
      return;
    }

    gsap.to(mobileProductTrackRef.current, {
      x: -(activeMobileProductIndex * mobileProductSlideWidth),
      duration: prefersReducedMotion ? 0 : 0.75,
      ease: "power3.out",
      overwrite: true,
    });
  }, [activeMobileProductIndex, mobileProductSlideWidth, prefersReducedMotion]);

  useEffect(() => {
    const carouselElement = mediaCarouselRef.current;

    if (!carouselElement) {
      return;
    }

    const handleWheel = (event: WheelEvent) => {
      const canScrollHorizontally = carouselElement.scrollWidth > carouselElement.clientWidth;

      if (!canScrollHorizontally) {
        return;
      }

      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX) && event.deltaX === 0) {
        return;
      }

      event.preventDefault();
      carouselElement.scrollBy({
        left: event.deltaY !== 0 ? event.deltaY : event.deltaX,
        behavior: "smooth",
      });
    };

    carouselElement.addEventListener("wheel", handleWheel, { passive: false });

    return () => carouselElement.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="overflow-x-clip bg-white">
      {/* Liquid flow animation keyframes */}
      <style>{`
        @keyframes liquidFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes pulseGold {
          0%, 100% { box-shadow: 0 0 0 0 rgba(250, 192, 47, 0.6); }
          50% { box-shadow: 0 0 0 6px rgba(250, 192, 47, 0); }
        }
        @keyframes pulseBlue {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
      `}</style>

      {/* ═══════════════════════════════════════════════════════
          PRECISION 50vh TECHNICAL HERO STAGE
         ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        {/* ── Background with Industrial gradient ── */}
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            style={{ filter: "brightness(0.7) saturate(0.92) contrast(1.02)" }}
          >
            <source src={heroBackgroundVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/30" />
          {/* Deep Blue gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#021a32]/58 via-[#0658a5]/46 to-[#02111f]/62" />
        </div>

        {/* ── Hero Content ── */}
        <div className="relative z-10">
          <div className="max-w-[1500px] mx-auto w-full px-6 sm:px-12 pt-[112px] pb-12 sm:pt-[124px] sm:pb-14 md:pt-[132px] md:pb-16 lg:pt-[144px] lg:pb-20 min-[1380px]:px-10">
            <div className="grid grid-cols-1 gap-6 items-center justify-items-center min-[1380px]:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] min-[1380px]:justify-items-stretch min-[1380px]:gap-8">
              {/* LEFT SIDE: Title and Description */}
              <div className="w-full mx-auto max-w-[680px] text-center text-white min-[1380px]:mx-0 min-[1380px]:max-w-none min-[1380px]:pt-0 min-[1380px]:text-left">
                {/* Clean Headline - Helvetica Neue */}
                <motion.h1
                  className="mb-5 sm:mb-6 tracking-tight text-white"
                  style={{ 
                    fontSize: "clamp(2.6rem, 6vw, 4.8rem)", 
                    lineHeight: 1.1,
                    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                >
                  <span className="block">{t("home.hero.headlineLine1")}</span>
                  <span className="block" style={{ color: "#2DABE2" }}>{t("home.hero.headlineLine2")}</span>
                  <span className="block">{t("home.hero.headlineLine3")}</span>
                </motion.h1>

                {/* Subtitle - Helvetica Neue */}
                <motion.p
                  className="mx-auto mb-6 w-full max-w-2xl text-base text-white/75 sm:text-lg min-[1380px]:mx-0 min-[1380px]:max-w-none"
                  style={{ 
                    letterSpacing: "0.3px", 
                    lineHeight: 1.7,
                    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
                >
                  {t("home.hero.title")}
                </motion.p>

                {/* Learn More Button */}
                <motion.div
                  className="flex justify-center min-[1380px]:justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
                >
                  <SingleButton
                    label={t("home.hero.learnMore")}
                    isRTL={isRTL}
                    className="min-w-[148px] px-8 py-3 sm:min-h-[48px] sm:px-8 sm:py-3"
                    onClick={() => navigate("/contact")}
                  />
                </motion.div>
              </div>

              {/* RIGHT SIDE: Search Box */}
              <motion.div
                className="flex w-full"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              >
                <div
                  className="flex w-full max-w-none flex-col gap-5 rounded-[18px] border border-white/35 px-[30px] py-[40px] min-[1380px]:rounded-[22px]"
                  style={{
                    background: "rgba(255, 255, 255, 0.8)",
                    boxShadow: "0px 20px 50px rgba(6, 88, 165, 0.08), 0px 4px 12px rgba(6, 88, 165, 0.03), 0px 1px 4px rgba(6,88,165,0.02)",
                  }}
                >
                  {/* Search Section Header */}
                  <motion.div
                    className="w-full rounded-[20px] p-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
                  >
                    <h3 
                      className="mb-2 text-[1.4rem] font-bold text-[#0658A5] sm:text-[1.5rem]"
                      style={{ 
                        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                        fontWeight: 700,
                      }}
                    >
                      {t("home.hero.searchTitle")}
                    </h3>
                    <p className="mb-3 text-base font-semibold text-neutral-600 min-[1380px]:mb-3.5">
                      {t("home.hero.searchSubtitle")}
                    </p>
                    <div
                      className="flex items-center gap-3 rounded-xl px-4 py-3.5 sm:px-5 transition-all duration-300"
                      style={{
                        border: searchFocused ? "2px solid #2DABE2" : "2px solid #E5E7EB",
                        boxShadow: searchFocused ? "0 0 0 3px rgba(45,171,226,0.1)" : "none",
                        background: "#F9FAFB",
                      }}
                    >
                      <Search className="w-5 h-5 text-[#0658A5]/60 shrink-0" strokeWidth={2} />
                      <input
                        type="text"
                        placeholder={t("home.hero.searchPlaceholder")}
                        className="flex-1 bg-transparent text-base font-semibold text-[#0658A5] outline-none utility-text placeholder:font-medium placeholder:text-neutral-500"
                        style={{ letterSpacing: "0.2px" }}
                        onFocus={() => setSearchFocused(true)}
                        onBlur={() => setSearchFocused(false)}
                      />
                    </div>
                  </motion.div>

                  {/* CTA Button */}
                  <motion.div
                    className="w-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
                  >
                    <SingleButtonDot
                      label={t("home.hero.exploreProducts")}
                      isRTL={isRTL}
                      fullWidth
                      animateDot={enableAmbientEffects}
                      onClick={() => navigate("/products")}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          GLASSMORPHIC DASHBOARD STATS BAR
         ═══════════════════════════════════════════════════════ */}
      <section className="relative bg-[#F5F5F5] py-0">
        {/* Top accent line */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#2DABE2]/30 to-transparent" />
        
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
          <motion.div
            ref={statsSectionRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="grid grid-cols-2 border border-[#2DABE2]/14 bg-transparent lg:grid-cols-4">
              {[
                { 
                  icon: (
                    <motion.svg 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      className="h-[3.25rem] w-[3.25rem]"
                      animate={enableAmbientEffects ? {
                        y: [0, -3, 0],
                      } : undefined}
                      transition={enableAmbientEffects ? {
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      } : undefined}
                    >
                      <motion.path 
                        d="M3 21h18M6 21V9l3 2.5V7l3 2.5V3h6v18" 
                        stroke={statsIconStroke}
                        strokeWidth="1.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                      />
                      <motion.rect 
                        x="15" 
                        y="7" 
                        width="2" 
                        height="2" 
                        fill="#FAC02F"
                        animate={enableAmbientEffects ? { opacity: [0.3, 1, 0.3] } : undefined}
                        transition={enableAmbientEffects ? { duration: 1.5, repeat: Infinity } : undefined}
                      />
                      <motion.rect 
                        x="15" 
                        y="12" 
                        width="2" 
                        height="2" 
                        fill="#FAC02F"
                        animate={enableAmbientEffects ? { opacity: [0.3, 1, 0.3] } : undefined}
                        transition={enableAmbientEffects ? { duration: 1.5, repeat: Infinity, delay: 0.3 } : undefined}
                      />
                      <motion.rect 
                        x="15" 
                        y="17" 
                        width="2" 
                        height="2" 
                        fill="#FAC02F"
                        animate={enableAmbientEffects ? { opacity: [0.3, 1, 0.3] } : undefined}
                        transition={enableAmbientEffects ? { duration: 1.5, repeat: Infinity, delay: 0.6 } : undefined}
                      />
                    </motion.svg>
                  ),
                  value: formatCount(counter1), 
                  label: t("home.stats.production") 
                },
                { 
                  icon: (
                    <motion.svg 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      className="h-[3.25rem] w-[3.25rem]"
                      animate={enableAmbientEffects ? {
                        rotate: [0, 360],
                      } : undefined}
                      transition={enableAmbientEffects ? {
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                      } : undefined}
                    >
                      <motion.circle 
                        cx="12" 
                        cy="12" 
                        r="10" 
                        stroke={statsIconStroke}
                        strokeWidth="1.5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                      />
                      <motion.path 
                        d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" 
                        stroke={statsIconStroke}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <motion.circle 
                        cx="6" 
                        cy="12" 
                        r="1.5" 
                        fill="#FAC02F"
                        animate={enableAmbientEffects ? { scale: [1, 1.3, 1] } : undefined}
                        transition={enableAmbientEffects ? { duration: 2, repeat: Infinity } : undefined}
                      />
                      <motion.circle 
                        cx="18" 
                        cy="12" 
                        r="1.5" 
                        fill="#FAC02F"
                        animate={enableAmbientEffects ? { scale: [1, 1.3, 1] } : undefined}
                        transition={enableAmbientEffects ? { duration: 2, repeat: Infinity, delay: 0.5 } : undefined}
                      />
                    </motion.svg>
                  ),
                  value: `${counter2}+`, 
                  label: t("home.stats.countries") 
                },
                { 
                  icon: (
                    <motion.svg 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      className="h-[3.25rem] w-[3.25rem]"
                    >
                      <motion.circle 
                        cx="9" 
                        cy="7" 
                        r="4" 
                        stroke={statsIconStroke}
                        strokeWidth="1.5"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                      />
                      <motion.path 
                        d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" 
                        stroke={statsIconStroke}
                        strokeWidth="1.5" 
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                      />
                      <motion.circle 
                        cx="17" 
                        cy="7" 
                        r="2.5" 
                        stroke="#FAC02F" 
                        strokeWidth="1.5"
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.2, 1] }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                      />
                      <motion.path 
                        d="M16 15h4a2 2 0 0 1 2 2v2" 
                        stroke="#FAC02F" 
                        strokeWidth="1.5" 
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                      />
                    </motion.svg>
                  ),
                  value: `${counter3}+`, 
                  label: t("home.stats.employees") 
                },
                { 
                  icon: (
                    <motion.svg 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      className="h-[3.25rem] w-[3.25rem]"
                    >
                      <motion.circle 
                        cx="12" 
                        cy="8" 
                        r="6" 
                        stroke={statsIconStroke}
                        strokeWidth="1.5"
                        initial={{ pathLength: 0, rotate: -90 }}
                        animate={{ pathLength: 1, rotate: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      />
                      <motion.path 
                        d="M15 11l-4-3v6l4-3z" 
                        fill="#FAC02F"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 1 }}
                      />
                      <motion.path 
                        d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" 
                        stroke={statsIconStroke}
                        strokeWidth="1.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                      />
                    </motion.svg>
                  ),
                  value: "ISO", 
                  label: t("home.stats.iso") 
                },
              ].map((stat, i) => (
                <motion.div 
                  key={i} 
                  className={`group flex min-h-[150px] px-4 py-6 transition-colors duration-300 sm:min-h-[176px] sm:px-5 sm:py-7 lg:min-h-[260px] lg:px-10 lg:py-10 ${
                    i < 2 ? "border-b border-[#2DABE2]/14 lg:border-b-0" : ""
                  } ${
                    i === 0 || i === 2 ? "border-r border-[#2DABE2]/14" : ""
                  } ${i < 3 ? "lg:border-r lg:border-[#2DABE2]/14" : "lg:border-r-0"}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <div className="flex w-full flex-col items-center justify-center gap-3 text-center sm:gap-4 lg:gap-7">
                    {/* <motion.div
                      className="flex shrink-0 items-center justify-center text-neutral-900"
                      whileHover={{ 
                        scale: 1.05,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {stat.icon}
                    </motion.div> */}
                    <div className="min-w-0">
                      <motion.div 
                        className="mb-1 text-[2.2rem] leading-none tracking-tight text-[#0658A5] sm:mb-2 sm:text-[2.8rem] lg:text-[4rem]" 
                        style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 700 }}
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.08 + 0.2, type: "spring", stiffness: 200 }}
                      >
                        {stat.value}
                      </motion.div>
                      <div className="utility-text text-[0.7rem] font-bold leading-snug text-neutral-500 sm:text-[0.82rem] lg:text-base">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#2DABE2]/30 to-transparent" />
      </section>

      {/* ═══════════════════════════════════════════════════════
          OUR PRODUCTS — Layered Glass Cards
         ═══════════════════════════════════════════════════════ */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
        <section className="relative py-16 min-[870px]:py-24">
          <AnimatedSection>
            <SectionHeading
              className="mb-8 min-[870px]:mb-12"
              title={t("home.products.title")}
              description={t("home.products.subtitle")}
              action={
                <div className="hidden min-[870px]:block">
                  <SplitCtaLink
                    to="/products"
                    label={t("home.products.viewPortfolio")}
                    isRTL={isRTL}
                    labelClassName="bg-[#0F57A4] text-white"
                  />
                </div>
              }
              size="xl"
              titleClassName="text-[clamp(1.9rem,7.8vw,3.5rem)] leading-[0.96]"
              descriptionClassName="text-sm leading-6 sm:text-base min-[870px]:text-lg"
            />
          </AnimatedSection>

          <div className="relative">
            <div className="pointer-events-none relative mb-2 h-px w-full bg-[#D9E2EC]" />
            <div className="hidden min-[870px]:grid min-[870px]:grid-cols-2 lg:grid-cols-4 gap-2">
              {productCards.map((product, i) => (
                <ProductCard
                  key={i}
                  imageSrc={product.imageSrc}
                  imageAlt={product.imageAlt}
                  title={product.title}
                  desc={product.desc}
                  link={product.link}
                  showCta={false}
                  delay={i * 0.1}
                  className={[
                    "min-h-full",
                    i === 0 ? "min-[870px]:border-r min-[870px]:border-[#D9E2EC]" : "",
                    i === 2 ? "min-[870px]:border-r min-[870px]:border-[#D9E2EC] lg:border-r lg:border-[#D9E2EC]" : "",
                    i === 1 ? "lg:border-r lg:border-[#D9E2EC]" : "",
                  ].join(" ")}
                />
              ))}
            </div>
            <div className="min-[870px]:hidden">
              <div
                ref={mobileProductCarouselRef}
                className="overflow-hidden"
                style={{ touchAction: "pan-y" }}
                onTouchStart={handleMobileProductTouchStart}
                onTouchEnd={handleMobileProductTouchEnd}
              >
                <div
                  ref={mobileProductTrackRef}
                  className="flex"
                >
                  {productCards.map((product, i) => (
                    <div
                      key={i}
                      className="shrink-0 pr-3"
                      style={{ width: mobileProductSlideWidth ? `${mobileProductSlideWidth}px` : "80%" }}
                    >
                    <ProductCard
                      imageSrc={product.imageSrc}
                      imageAlt={product.imageAlt}
                      title={product.title}
                      desc={product.desc}
                      link={product.link}
                        showCta={false}
                      delay={0}
                      className="min-h-full"
                      forceHovered={activeMobileProductIndex === i}
                    />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="pointer-events-none relative mt-2 hidden h-px w-full bg-[#D9E2EC] min-[870px]:block" />
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            INDUSTRIES & APPLICATIONS — Immersive Tiles
           ═══════════════════════════════════════════════════════ */}
        <section className="py-16 min-[870px]:py-20">
          <div className="mx-auto max-w-[1440px]">
            <AnimatedSection>
              <SectionHeading
                className="mb-8 min-[870px]:mb-14"
                title={t("home.industries.title")}
                description={t("home.industries.subtitle")}
                action={
                  <div className="hidden min-[870px]:block">
                    <SplitCtaLink
                      to="/industries"
                      label={t("home.industries.exploreAll")}
                      isRTL={isRTL}
                      labelClassName="bg-[#0F57A4] text-white"
                    />
                  </div>
                }
                size="lg"
                contentClassName={`max-w-2xl ${isRTL ? "text-right" : "text-left"}`}
              />
            </AnimatedSection>

            <AnimatedSection delay={0.12}>
              <div className="-mx-6 grid grid-cols-1 overflow-hidden sm:-mx-12 min-[870px]:mx-0 min-[870px]:grid-cols-3">
                {industryCards.map((industry) => (
                  <div key={industry.number} className="w-full">
                    <Link to={industry.href} className="group block h-full">
                      <div
                        className="relative h-[18rem] overflow-hidden px-6 pb-7 pt-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(6,88,165,0.12)] sm:h-[21rem] sm:px-8 sm:pb-9 sm:pt-8 lg:h-[30rem]"
                        style={{ backgroundColor: industry.color, color: industry.textColor }}
                      >
                        <div className="relative z-10 flex h-full flex-col">
                          <div className="flex items-start justify-between">
                            {industry.iconMode === "image" ? (
                              <img
                                src={industry.icon}
                                alt=""
                                aria-hidden="true"
                                className="h-16 w-16 shrink-0 object-contain transition-transform duration-300 group-hover:scale-[1.03] sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                              />
                            ) : (
                              <div
                                aria-hidden="true"
                                className="h-16 w-16 shrink-0 transition-transform duration-300 group-hover:scale-[1.03] sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                                style={{
                                  backgroundColor: industry.textColor,
                                  WebkitMaskImage: `url(${industry.icon})`,
                                  maskImage: `url(${industry.icon})`,
                                  WebkitMaskRepeat: "no-repeat",
                                  maskRepeat: "no-repeat",
                                  WebkitMaskPosition: "center",
                                  maskPosition: "center",
                                  WebkitMaskSize: "contain",
                                  maskSize: "contain",
                                }}
                              />
                            )}
                            <span className="text-xs tracking-[0.18em] opacity-80 transition-colors duration-300 group-hover:text-white">{industry.number}</span>
                          </div>
                          <div className="mt-auto max-w-[28rem]">
                            <h3 className="mb-3 text-[1.7rem] leading-none transition-colors duration-300 group-hover:text-white sm:text-[2rem] lg:text-[2.2rem]">{industry.title}</h3>
                            <p className="text-[0.95rem] leading-relaxed opacity-90 transition-colors duration-300 group-hover:text-white sm:text-base lg:text-lg">{industry.desc}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <div className="mt-6 flex justify-center min-[870px]:hidden">
              <SplitCtaLink
                to="/industries"
                label={t("home.industries.exploreAll")}
                isRTL={isRTL}
                labelClassName="bg-[#0F57A4] text-white"
              />
            </div>
          </div>
        </section>
      </div>

      {/* ═══════════════════════════════════════════════════════
          TECHNICAL RESOURCES — Horizontal Authority Cards
         ═══════════════════════════════════════════════════════ */}
      <section className="bg-neutral-50 py-16 min-[870px]:py-24">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
          <AnimatedSection>
            <SectionHeading className="mb-10" title={t("home.technical.title")} size="lg" />
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-6 min-[870px]:grid-cols-2">
            {[
              { icon: PackageSearchIcon, title: t("home.technical.tds.title"), desc: t("home.technical.tds.description"), link: "/technical-resources#tds", cta: t("home.technical.tds.action") },
              { icon: ShieldCheckIcon, title: t("home.technical.sds.title"), desc: t("home.technical.sds.description"), link: "/technical-resources#sds", cta: t("home.technical.sds.action") },
            ].map((resource, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div
                  className="group flex h-full flex-col gap-5 rounded-[15px] bg-white p-6 transition-all duration-400 hover:-translate-y-1 min-[870px]:gap-6 min-[870px]:p-8"
                  style={{ boxShadow: "0px 20px 50px rgba(6, 88, 165, 0.06)" }}
                >
                  <div className="w-14 h-14 rounded-[12px] bg-[#2dabe2]/[0.08] flex items-center justify-center shrink-0">
                    <resource.icon
                      className="w-7 h-7 text-[#2dabe2]"
                      style={{ animation: enableAmbientEffects ? "pulseBlue 3s ease-in-out infinite" : "none" }}
                    />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col">
                    <h3 className="text-lg mb-2 text-neutral-900">{resource.title}</h3>
                    <p className="text-sm text-neutral-500 mb-4">{resource.desc}</p>
                    <Link to={resource.link} className="mt-auto inline-flex w-full pt-4">
                      <SingleButtonInline
                        label={resource.cta}
                        isRTL={isRTL}
                        fullWidth
                        variant="single-button-dot"
                        className="w-full px-5 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.18em] sm:px-6"
                      />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SUSTAINABILITY — Cinematic Overlay
         ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-16 min-[870px]:py-28">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${sectionBackgroundImage})` }} />
        <div className="absolute inset-0 bg-[#0658a5]/85" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "repeating-linear-gradient(90deg, white 0px, white 1px, transparent 1px, transparent 40px)",
        }} />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-12">
          <AnimatedSection>
            <div className="max-w-3xl text-white max-[869px]:mx-auto max-[869px]:text-center">
              <div className="mb-6 flex items-center gap-3 max-[869px]:justify-center">
                <Leaf className="w-8 h-8 text-[#2dabe2]" strokeWidth={1.5} />
                <h2 className="text-3xl">{t("home.sustainability.title")}</h2>
              </div>
              <p className="mb-10 text-base leading-relaxed text-white/70 min-[870px]:mb-12 min-[870px]:text-lg">
                {t("home.sustainability.description")}
              </p>
              <div className="mb-10 grid grid-cols-1 gap-6 min-[640px]:grid-cols-3 min-[870px]:mb-12 min-[870px]:gap-10 max-[869px]:justify-items-center">
                {[
                  { value: "30%", label: t("home.sustainability.emissions") },
                  { value: t("home.sustainability.wasteValue"), label: t("home.sustainability.waste") },
                  { value: "100%", label: t("home.sustainability.energy") },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.6 }}
                    className="max-[869px]:w-full max-[869px]:max-w-[220px]"
                  >
                    <div
                      className="mb-3 text-white max-[869px]:text-center"
                      style={{
                        fontSize: "clamp(3.5rem, 6vw, 5.5rem)",
                        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                        fontWeight: 700,
                        lineHeight: 1,
                      }}
                    >
                      {item.value}
                    </div>
                    <div className="inline-flex w-full items-center justify-start gap-2 text-left text-sm text-white/80">
                      <span
                        className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#FAC02F]"
                        style={{ animation: "pulseGold 2s ease-in-out infinite" }}
                      />
                      <span>{item.label}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="max-[869px]:flex max-[869px]:justify-center">
                <Link to="/sustainability">
                  <button className="group relative overflow-hidden rounded-sm bg-[#2dabe2] px-10 py-4 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:bg-white hover:text-[#0658a5] hover:shadow-xl">
                    <span className="relative flex items-center gap-2">
                      Our Commitments
                      <ArrowRight
                        className={`h-4 w-4 transition-transform duration-300 ${isRTL ? "rotate-180 group-hover:rotate-[135deg]" : "group-hover:-rotate-45"}`}
                      />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          ABOUT CHEMANOL
         ═══════════════════════════════════════════════════════ */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
        <section className="py-24">
          <div className="grid grid-cols-1 gap-10 min-[1260px]:grid-cols-[1.08fr_0.92fr] min-[1260px]:items-stretch">
            <AnimatedSection className="order-2 min-[1260px]:order-1">
              <div className="relative h-full overflow-hidden rounded-[28px] border border-[#D9E6F0] bg-[linear-gradient(180deg,#FFFFFF_0%,#F3F8FC_100%)] p-7 shadow-[0_24px_64px_rgba(6,88,165,0.08)] sm:p-10">
                <div className="pointer-events-none absolute -right-16 top-0 h-44 w-44 rounded-full bg-[#2DABE2]/10 blur-3xl" />
                <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-32 rounded-full bg-[#0658A5]/8 blur-3xl" />

                <div className="relative z-10">
                  <SectionHeading className="mb-6" title={t("home.about.title")} size="lg" />
                  <p className="max-w-[62ch] text-[1.02rem] leading-8 text-neutral-600">
                    {t("home.about.description")}
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    { title: t("home.about.facility"), sub: t("home.about.facilityDesc") },
                    { title: t("home.about.iso"), sub: t("home.about.isoDesc") },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="group relative overflow-hidden rounded-none border border-[#D6E3EE] bg-white/92 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(6,88,165,0.10)]"
                    >
                      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0658A5] via-[#2DABE2] to-[#8FD9FF]" />
                      <div className="text-left">
                        <div className="flex items-center gap-3">
                          <span
                            className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#2DABE2]"
                            style={{ animation: enableAmbientEffects ? "pulseBlue 2.4s ease-in-out infinite" : "none" }}
                          />
                          <div className="text-[0.96rem] font-semibold text-neutral-900">{item.title}</div>
                        </div>
                        <div className="mt-3 text-[0.82rem] leading-6 text-neutral-500">{item.sub}</div>
                      </div>
                    </div>
                  ))}
                  </div>

                  <div className="mt-8">
                    <Link to="/about" className="inline-flex">
                      <SingleButtonInline
                        label={t("home.about.action")}
                        isRTL={isRTL}
                        variant="single-button-dot"
                        className="px-6 py-3"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="order-1 min-[1260px]:order-2">
              <motion.div
                className="relative min-h-[260px] sm:min-h-[320px] min-[1260px]:h-full min-[1260px]:min-h-[520px]"
                animate={enableAmbientEffects ? { x: [0, 8, 0, -8, 0], y: [0, -10, 0, 10, 0] } : undefined}
                transition={enableAmbientEffects ? { duration: 20, repeat: Infinity, ease: "easeInOut" } : undefined}
              >
                <div className="pointer-events-none absolute -right-10 top-6 h-40 w-40 rounded-full bg-[#2DABE2]/10 blur-3xl" />
                <div className="pointer-events-none absolute bottom-6 left-0 h-28 w-28 rounded-full bg-[#0658A5]/8 blur-3xl" />
                <div className="relative flex h-full min-h-[260px] w-full items-center justify-center overflow-hidden rounded-[28px] border border-[#D9E6F0] bg-[linear-gradient(180deg,#FFFFFF_0%,#F3F8FC_100%)] p-7 shadow-[0_24px_64px_rgba(6,88,165,0.08)] sm:min-h-[320px] sm:p-10 min-[1260px]:min-h-[520px]">
                  <div className="relative flex w-full flex-1 px-6 py-10 sm:px-10 sm:py-14">
                    <div className="flex flex-1 items-center justify-center">
                      <ImageWithFallback
                        src={chemanolBlueLogo}
                        alt="Chemanol logo"
                        className="h-auto w-full max-w-[360px] object-contain sm:max-w-[460px]"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            MEDIA CENTER
           ═══════════════════════════════════════════════════════ */}
        <section className="overflow-hidden py-12 pb-14 min-[870px]:py-16 min-[870px]:pb-20">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-center lg:gap-8">
            <AnimatedSection className="lg:pr-2">
              <div className="flex flex-col items-start justify-center lg:min-h-[400px] lg:py-4">
                <h2 className="text-[2rem] font-semibold tracking-tight text-[#173746] sm:text-[2.3rem]">
                  Media Center
                </h2>
                <Link
                  to="/media-center"
                  className="group mt-8 inline-flex items-center gap-2 text-[1.02rem] text-[#173746] transition-colors duration-300 hover:text-[#0F57A4]"
                >
                  <span>View all</span>
                  <ArrowRight
                    className={`h-5 w-5 transition-transform duration-300 ${isRTL ? "rotate-180 group-hover:translate-x-[-4px]" : "group-hover:translate-x-1"}`}
                  />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.08}>
              <div
                ref={mediaCarouselRef}
                className="-mr-6 overflow-x-auto pb-2 pl-0 pr-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mr-12 sm:pr-12"
              >
                <div className="flex min-w-max gap-4 sm:gap-6">
                  {mediaItems.map((news, i) => {
                    const opacityClass = ["opacity-100", "opacity-90", "opacity-[0.72]", "opacity-[0.52]", "opacity-[0.34]"][i] ?? "opacity-[0.34]";

                    return (
                      <Link
                        key={news.title}
                        to="/media-center"
                        className={`group flex h-[400px] w-[78vw] max-w-[360px] shrink-0 flex-col border border-[#D8DEE7] bg-[#ECEFF4] transition-all duration-300 hover:-translate-y-1 hover:opacity-100 sm:w-[58vw] md:w-[44vw] lg:w-[360px] ${opacityClass}`}
                      >
                        <div className="h-[164px] overflow-hidden border-b border-[#D8DEE7]">
                          <ImageWithFallback
                            src={news.img}
                            alt={news.title}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                          />
                        </div>
                        <div className="flex flex-1 flex-col px-5 py-5 sm:px-6 sm:py-5">
                          <div className="mb-4 text-xs font-semibold tracking-[0.01em] text-[#24406F]">
                            <span>{news.date}</span>
                            <span className="mx-2 text-[#F28A30]">•</span>
                            <span>&lt; 1min read</span>
                          </div>
                          <h3 className="mb-3 text-[1rem] font-medium leading-8 text-[#173746] sm:text-[1.05rem]">
                            {news.title}
                          </h3>
                          <p className="line-clamp-2 text-sm leading-7 text-[#5C6773]">
                            {news.desc}
                          </p>
                          <div className="mt-auto pt-6 text-[#0658A5]">
                            <ArrowRight
                              className={`h-9 w-9 transition-transform duration-300 ${isRTL ? "rotate-180 group-hover:translate-x-[-4px]" : "group-hover:translate-x-1"}`}
                              strokeWidth={1.5}
                            />
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>

      {/* ═══════════════════════════════════════════════════════
          BOTTOM CTA
         ═══════════════════════════════════════════════════════ */}
      <section className="bg-[#0658a5] py-16">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 text-center">
          <AnimatedSection>
            <h2 className="text-3xl text-white mb-4">{t("home.bottomCta.title")}</h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              {t("home.bottomCta.description")}
            </p>
            <Link to="/contact">
              <button className="group relative overflow-hidden px-10 py-4 bg-[#2dabe2] text-white rounded-sm cursor-pointer transition-all duration-300 hover:bg-white hover:text-[#0658a5] hover:shadow-xl text-sm tracking-wide">
                <span className="relative flex items-center gap-2">
                  {t("home.bottomCta.action")}
                  <ArrowRight
                    className={`w-4 h-4 transition-transform duration-300 ${isRTL ? "rotate-180 group-hover:rotate-[135deg]" : "group-hover:-rotate-45"}`}
                  />
                </span>
              </button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}