import { motion } from "motion/react";

interface IconProps {
  className?: string;
  isHovered?: boolean;
}

// Methanol = Droplet (thin line, fills from bottom with #2dabe2)
export function MethanolIcon({ className = "", isHovered = false }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="methanolFill" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#2dabe2" stopOpacity="1" />
          <stop
            offset={isHovered ? "100%" : "0%"}
            stopColor="#2dabe2"
            stopOpacity="1"
          />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"
        stroke="#2dabe2"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="url(#methanolFill)"
        initial={{ fillOpacity: 0 }}
        animate={{ fillOpacity: isHovered ? 0.35 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
    </svg>
  );
}

// Formaldehyde = Lab Flask
export function FormaldehydeIcon({ className = "", isHovered = false }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="formaldehydeFill" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#2dabe2" stopOpacity="1" />
          <stop
            offset={isHovered ? "100%" : "0%"}
            stopColor="#2dabe2"
            stopOpacity="1"
          />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g stroke="#2dabe2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <motion.path
          d="M9 2v6l-4 12h14l-4-12V2"
          fill="url(#formaldehydeFill)"
          initial={{ fillOpacity: 0 }}
          animate={{ fillOpacity: isHovered ? 0.35 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
        <path d="M6.6 20h10.8" />
        <path d="M9 2h6" />
      </g>
    </svg>
  );
}

// Derivatives = Chemical Beaker
export function DerivativesIcon({ className = "", isHovered = false }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="derivativesFill" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#2dabe2" stopOpacity="1" />
          <stop
            offset={isHovered ? "100%" : "0%"}
            stopColor="#2dabe2"
            stopOpacity="1"
          />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g stroke="#2dabe2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <motion.path
          d="M8 2v4M16 2v4M5 6h14a2 2 0 0 1 2 2v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8a2 2 0 0 1 2-2z"
          fill="url(#derivativesFill)"
          initial={{ fillOpacity: 0 }}
          animate={{ fillOpacity: isHovered ? 0.35 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
        <path d="M7 15h10" />
      </g>
    </svg>
  );
}

// Specialty = Test Tube Rack
export function SpecialtyIcon({ className = "", isHovered = false }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="specialtyFill" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#2dabe2" stopOpacity="1" />
          <stop
            offset={isHovered ? "100%" : "0%"}
            stopColor="#2dabe2"
            stopOpacity="1"
          />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g stroke="#2dabe2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <motion.path
          d="M9 3v12a3 3 0 1 0 6 0V3"
          fill="url(#specialtyFill)"
          initial={{ fillOpacity: 0 }}
          animate={{ fillOpacity: isHovered ? 0.35 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
        <path d="M9 3h6" />
        <circle cx="12" cy="16" r="1" fill="#2dabe2" />
      </g>
    </svg>
  );
}
