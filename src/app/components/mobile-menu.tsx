import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { useLanguage } from "../contexts/language-context";
import { LanguageSwitcher } from "./language-switcher";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: Array<{ path: string; label: string }>;
  isActive: (path: string) => boolean;
}

export function MobileMenu({ isOpen, onClose, navLinks, isActive }: MobileMenuProps) {
  const { isRTL, t } = useLanguage();

  if (typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            className={`fixed top-0 ${isRTL ? "left-0" : "right-0"} bottom-0 z-50 w-[320px] max-w-[88vw] overflow-y-auto bg-white shadow-2xl`}
            initial={{ x: isRTL ? -300 : 300 }}
            animate={{ x: 0 }}
            exit={{ x: isRTL ? -300 : 300 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-neutral-200">
              <h3 className="text-lg font-semibold text-[#0658A5]">{t("mobileMenu.title")}</h3>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-neutral-100 transition-colors"
                aria-label={t("header.closeMenu")}
              >
                <X className="w-5 h-5 text-neutral-600" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="p-6">
              <div className="space-y-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    <Link
                      to={link.path}
                      onClick={onClose}
                      className={`block px-4 py-3 rounded-lg transition-all duration-200 ${
                        isActive(link.path)
                          ? "bg-[#2DABE2]/10 text-[#0658A5] font-semibold"
                          : "text-neutral-700 hover:bg-neutral-50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Language Switcher */}
              <div className="mt-6 pt-6 border-t border-neutral-200">
                <div className="flex justify-center">
                  <LanguageSwitcher />
                </div>
              </div>

              {/* Contact CTA */}
              <motion.div
                className="mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  to="/contact"
                  onClick={onClose}
                  className="block w-full px-6 py-3 bg-[#0658A5] text-white text-center rounded-lg hover:bg-[#2DABE2] transition-colors duration-300 font-semibold"
                >
                  {t("header.cta")}
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
