import { Link, useNavigate, useLocation } from "react-router";
import { Search, Menu } from "lucide-react";
import { LanguageSwitcher } from "./language-switcher";
import { MobileMenu } from "./mobile-menu";
import { StockTicker } from "./stock-ticker";
import { useLanguage } from "../contexts/language-context";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Logo } from "./logo";

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(() => window.innerWidth);
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth >= 1380 && mobileOpen) {
      setMobileOpen(false);
    }
  }, [windowWidth, mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Entrance animation
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const isTransparent = isHome && !scrolled;
  const showDesktopNav = windowWidth >= 1380;

  const navLinks = [
    { path: "/", label: t("header.home") },
    { path: "/products", label: t("header.products") },
    { path: "/industries", label: t("header.industries") },
    { path: "/sustainability", label: t("header.sustainability") },
    { path: "/innovation", label: t("header.innovation") },
    { path: "/about", label: t("header.about") },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        background: isTransparent
          ? "transparent"
          : "rgba(255,255,255,0.82)",
        backdropFilter: isTransparent ? "none" : "blur(24px) saturate(1.8)",
        WebkitBackdropFilter: isTransparent ? "none" : "blur(24px) saturate(1.8)",
        borderBottom: isTransparent ? "1px solid transparent" : "1px solid rgba(6,88,165,0.08)",
        boxShadow: isTransparent ? "none" : "0 1px 24px rgba(6,88,165,0.06)",
      }}
    >
      {/* Stock ticker - only on home, not scrolled */}
      <div
        className="overflow-hidden transition-all duration-500"
        style={{
          maxHeight: isHome && !scrolled ? 40 : 0,
          opacity: isHome && !scrolled ? 1 : 0,
        }}
      >
        <StockTicker />
      </div>

      <div className="w-full max-w-[1440px] mx-auto">
        <motion.div
          className="flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 min-[1380px]:px-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: visible ? 1 : 0,
            y: visible ? 0 : -20,
            height: scrolled ? 60 : 72,
          }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Logo
            variant={isTransparent ? "white" : "blue"}
            size={showDesktopNav ? (windowWidth >= 1500 ? (scrolled ? "md" : "lg") : "md") : "sm"}
          />

          {showDesktopNav ? (
            <nav className="flex min-w-0 flex-1 items-center justify-center gap-4 min-[1500px]:gap-5 xl:gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -12 }}
                  transition={{ delay: 0.3 + i * 0.06, duration: 0.5 }}
                >
                  <Link
                    to={link.path}
                    className="group inline-flex py-2 text-[12px] uppercase transition-colors duration-300 min-[1500px]:text-[13px]"
                    style={{
                      fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                      color: isActive(link.path)
                        ? "#2DABE2"
                        : isTransparent
                          ? "rgba(255,255,255,0.92)"
                          : "#0658A5",
                      fontWeight: isActive(link.path) ? 700 : 500,
                      letterSpacing: "0.06em",
                    }}
                  >
                    <span className="relative inline-flex whitespace-nowrap pb-1.5">
                      {link.label}
                      <span
                        className="absolute bottom-0 left-0 h-[2px] rounded-full transition-all duration-300"
                        style={{
                          width: isActive(link.path) ? "100%" : "0%",
                          background: "#2DABE2",
                        }}
                      />
                      {!isActive(link.path) && (
                        <span
                          className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full transition-all duration-300 group-hover:w-full"
                          style={{ background: "#2DABE2" }}
                        />
                      )}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>
          ) : (
            <div className="flex-1" />
          )}

          {showDesktopNav ? (
            <motion.div
              className="flex shrink-0 items-center gap-2 min-[1500px]:gap-3"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -12 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <button
                onClick={() => navigate("/search")}
                className="shrink-0 rounded-full p-2 transition-all duration-300 cursor-pointer"
                style={{
                  color: isTransparent ? "rgba(255,255,255,0.85)" : "#0658A5",
                  background: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = isTransparent
                    ? "rgba(255,255,255,0.1)"
                    : "rgba(6,88,165,0.06)";
                  e.currentTarget.style.color = "#2DABE2";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = isTransparent
                    ? "rgba(255,255,255,0.85)"
                    : "#0658A5";
                }}
                aria-label={t("header.search")}
              >
                <Search className="h-[18px] w-[18px]" strokeWidth={1.8} />
              </button>

              <LanguageSwitcher />

              <Link to="/contact" className="shrink-0">
                <motion.button
                  className="relative flex min-w-[136px] shrink-0 items-center justify-center overflow-hidden rounded-full border px-4 py-2 text-[12px] uppercase tracking-[0.12em] whitespace-nowrap transition-all duration-300 cursor-pointer min-[1500px]:min-w-[154px] min-[1500px]:px-5 min-[1500px]:text-[13px] min-[1500px]:tracking-wider"
                  style={{
                    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                    background: isTransparent
                      ? "rgba(255,255,255,0.08)"
                      : "#0658A5",
                    color: "white",
                    borderColor: isTransparent
                      ? "rgba(255,255,255,0.25)"
                      : "#0658A5",
                    fontWeight: 600,
                  }}
                  whileHover={{
                    scale: 1.04,
                    boxShadow: "0 0 28px rgba(45,171,226,0.3)",
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 hover:translate-x-full" />
                  <span className="relative whitespace-nowrap">{t("header.cta")}</span>
                </motion.button>
              </Link>
            </motion.div>
          ) : (
            <motion.button
              className="shrink-0 rounded-lg p-2 transition-colors cursor-pointer"
              style={{
                color: isTransparent ? "white" : "#0658A5",
              }}
              onClick={() => setMobileOpen(!mobileOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label={mobileOpen ? t("header.closeMenu") : t("header.openMenu")}
            >
              <Menu className="h-6 w-6" />
            </motion.button>
          )}
        </motion.div>
      </div>

      {!showDesktopNav && (
        <MobileMenu
          isOpen={mobileOpen}
          onClose={() => setMobileOpen(false)}
          navLinks={navLinks}
          isActive={isActive}
        />
      )}
    </header>
  );
}