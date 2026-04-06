import { useLanguage } from "../contexts/language-context";
import { motion } from "motion/react";
import { Languages } from "lucide-react";

export function LanguageSwitcher() {
  const { language, toggleLanguage, isRTL } = useLanguage();

  return (
    <motion.button 
      onClick={toggleLanguage}
      className="relative flex min-w-[108px] shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full px-4 py-2 transition-all duration-300 cursor-pointer"
      style={{
        background: "#2DABE2",
        color: "white",
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "#0658A5";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "#2DABE2";
      }}
    >
      {/* Liquid fill effect on hover */}
      <motion.div
        className="absolute inset-0 bg-[#FAC02F]"
        initial={{ x: "-100%" }}
        whileHover={{ x: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />
      
      {/* Icon */}
      <Languages className="w-4 h-4 relative z-10" strokeWidth={2} />
      
      {/* Language text */}
      <span 
        className="relative z-10 whitespace-nowrap text-sm font-bold" 
        dir={language === "en" ? "rtl" : "ltr"} 
        style={{ 
          fontFamily: language === "en" ? "'Cairo', sans-serif" : '"Helvetica Neue", Helvetica, Arial, sans-serif',
          letterSpacing: language === "en" ? "0" : "0.03em"
        }}
      >
        {language === "en" ? "عربي" : "EN"}
      </span>
    </motion.button>
  );
}