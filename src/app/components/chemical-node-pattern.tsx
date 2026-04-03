import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState, useRef } from "react";

/**
 * Chemical Node Pattern - Animated grid of dots connected by 45° diagonal lines
 * Features parallax mouse tracking and optimized performance
 */
export function ChemicalNodePattern() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse position tracking for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 100 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate normalized position (-1 to 1)
      const xPos = (e.clientX - centerX) / (rect.width / 2);
      const yPos = (e.clientY - centerY) / (rect.height / 2);
      
      // Apply subtle parallax
      mouseX.set(xPos * 15);
      mouseY.set(yPos * 15);
    };
    
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  // Generate grid of nodes (optimized for performance)
  const gridSize = 6;
  const nodes = [];
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      nodes.push({ row, col, id: `node-${row}-${col}` });
    }
  }

  return (
    null
  );
}