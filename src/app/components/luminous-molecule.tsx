import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useRef } from "react";

export function LuminousMolecule() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics for smooth parallax
  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const x = (e.clientX - centerX) / rect.width;
      const y = (e.clientY - centerY) / rect.height;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div ref={containerRef} className="relative w-[320px] h-[320px]">
      {/* Outer glassmorphic container with glow */}
      <div className="absolute inset-0 rounded-full backdrop-blur-xl bg-white/[0.04] border border-white/[0.1]">
        <div className="absolute inset-0 rounded-full shadow-[0_0_60px_rgba(45,171,226,0.2)]" />
      </div>

      {/* Rotating molecular structure with parallax */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        <svg viewBox="0 0 200 200" className="w-[260px] h-[260px]">
          <defs>
            {/* Glow filters for luminous effect */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            
            {/* Radial gradient for glowing cores */}
            <radialGradient id="atomGlow">
              <stop offset="0%" stopColor="#2dabe2" stopOpacity="1" />
              <stop offset="50%" stopColor="#2dabe2" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#2dabe2" stopOpacity="0.2" />
            </radialGradient>
          </defs>

          {/* Central atom - glowing core */}
          <motion.g filter="url(#glow)">
            <motion.circle
              cx="100"
              cy="100"
              r="18"
              fill="none"
              stroke="#2dabe2"
              strokeWidth="1.5"
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <circle cx="100" cy="100" r="10" fill="url(#atomGlow)" />
            <circle cx="100" cy="100" r="4" fill="#2dabe2" opacity="0.9" />
          </motion.g>

          {/* Orbital rings - slow rotation */}
          <motion.ellipse
            cx="100"
            cy="100"
            rx="70"
            ry="30"
            fill="none"
            stroke="rgba(45,171,226,0.25)"
            strokeWidth="0.8"
            filter="url(#glow)"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "100px 100px" }}
          />
          <motion.ellipse
            cx="100"
            cy="100"
            rx="65"
            ry="50"
            fill="none"
            stroke="rgba(45,171,226,0.2)"
            strokeWidth="0.8"
            filter="url(#glow)"
            animate={{ rotate: [60, 420] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "100px 100px" }}
          />
          <motion.ellipse
            cx="100"
            cy="100"
            rx="80"
            ry="35"
            fill="none"
            stroke="rgba(45,171,226,0.15)"
            strokeWidth="0.8"
            filter="url(#glow)"
            animate={{ rotate: [120, 480] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "100px 100px" }}
          />

          {/* Satellite atoms - CH₃OH (Methanol) - Translucent glass spheres with glowing cores */}
          {[
            { angle: 0, dist: 55, r: 8, color: "#2dabe2", label: "C" },
            { angle: 72, dist: 60, r: 6, color: "#FAC02F", label: "H" },
            { angle: 144, dist: 65, r: 6, color: "#FAC02F", label: "H" },
            { angle: 216, dist: 50, r: 7, color: "#A96448", label: "O" },
            { angle: 288, dist: 58, r: 6, color: "#FAC02F", label: "H" },
          ].map((atom, i) => {
            const rad = (atom.angle * Math.PI) / 180;
            const cx = 100 + Math.cos(rad) * atom.dist;
            const cy = 100 + Math.sin(rad) * atom.dist;
            return (
              <g key={i} filter="url(#glow)">
                {/* Bond line */}
                <line
                  x1="100"
                  y1="100"
                  x2={cx}
                  y2={cy}
                  stroke="rgba(45,171,226,0.2)"
                  strokeWidth="1"
                />
                {/* Glass sphere outer ring */}
                <motion.circle
                  cx={cx}
                  cy={cy}
                  r={atom.r}
                  fill="none"
                  stroke={atom.color}
                  strokeWidth="1.2"
                  animate={{ r: [atom.r, atom.r + 1.5, atom.r] }}
                  transition={{
                    duration: 2 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                {/* Glowing inner core */}
                <circle cx={cx} cy={cy} r={atom.r * 0.5} fill={atom.color} opacity="0.4" />
                <circle cx={cx} cy={cy} r={atom.r * 0.25} fill={atom.color} opacity="0.8" />
                {/* Element label */}
                <text
                  x={cx}
                  y={cy + 1}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill={atom.color}
                  fontSize="6"
                  opacity="0.8"
                  fontWeight="600"
                >
                  {atom.label}
                </text>
              </g>
            );
          })}

          {/* Outer luminous glow ring */}
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="rgba(45,171,226,0.08)"
            strokeWidth="16"
            filter="url(#glow)"
          />
        </svg>
      </motion.div>

      {/* Glassmorphic label - pulsing */}
      <motion.div
        className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1.5 backdrop-blur-md bg-white/[0.08] border border-white/[0.12] rounded-sm"
        animate={{ y: [-2, 2, -2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs text-white/50 tracking-wider">CH₃OH</span>
      </motion.div>
    </div>
  );
}
