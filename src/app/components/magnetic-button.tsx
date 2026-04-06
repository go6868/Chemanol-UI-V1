import { motion } from "motion/react";
import { useState, useRef, MouseEvent, ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  onBlueBackground?: boolean;
  className?: string;
  onClick?: () => void;
  href?: string;
  ariaLabel?: string;
}

export function MagneticButton({ 
  children, 
  onBlueBackground = false, 
  className = "", 
  onClick,
  href,
  ariaLabel 
}: MagneticButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    
    // Magnetic attraction within 30px radius
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    
    // Apply magnetic effect
    if (distance < 30) {
      const strength = 1 - (distance / 30);
      const x = (distanceX / rect.width) * 30 * strength;
      const y = (distanceY / rect.height) * 30 * strength;
      setPosition({ x, y });
    } else {
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 15;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 15;
      setPosition({ x, y });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Color switching logic
  const baseStyles = onBlueBackground
    ? "bg-white text-[#0658a5] border-white"
    : "bg-[#0658a5] text-white border-[#0658a5]";

  const hoverColor = onBlueBackground ? "#FAC02F" : "#2dabe2";

  return (
    <motion.button
      ref={buttonRef}
      className={`relative overflow-hidden px-8 py-3.5 border-2 rounded-sm transition-all duration-300 group ${baseStyles} ${className}`}
      style={{
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
        fontWeight: 600,
        letterSpacing: "0.05em",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={{
        x: position.x,
        y: position.y,
      }}
      whileHover={{
        boxShadow: onBlueBackground 
          ? "0 0 40px rgba(250, 192, 47, 0.5)" 
          : "0 0 40px rgba(45, 171, 226, 0.5)",
      }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      aria-label={ariaLabel}
    >
      {/* Liquid fill effect */}
      <motion.div
        className="absolute inset-0"
        style={{ backgroundColor: hoverColor }}
        initial={{ scale: 0, borderRadius: "50%" }}
        animate={{
          scale: isHovered ? 2.5 : 0,
          borderRadius: isHovered ? "0%" : "50%",
        }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      />

      {/* Golden glow pulse when hovered on blue background */}
      {onBlueBackground && isHovered && (
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle, rgba(250,192,47,0.3) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}

      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2 text-sm">
        {children}
      </span>
    </motion.button>
  );
}