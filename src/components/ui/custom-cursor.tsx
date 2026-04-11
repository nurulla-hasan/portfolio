"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [points, setPoints] = useState<{ x: number; y: number }[]>([]);
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for the core
  const springConfig = { damping: 25, stiffness: 300, mass: 0.2 };
  const coreX = useSpring(mouseX, springConfig);
  const coreY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Add point to trail
      setPoints((prev) => {
        const newPoints = [{ x: e.clientX, y: e.clientY }, ...prev];
        return newPoints.slice(0, 15); // Keep trailing points
      });

      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" || 
        target.closest("a, button") !== null
      );
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [mouseX, mouseY]);

  // Trail decay effect - gradually remove points when stopped
  useEffect(() => {
    const interval = setInterval(() => {
      setPoints((prev) => (prev.length > 0 ? prev.slice(0, -1) : prev));
    }, 40);
    return () => clearInterval(interval);
  }, []);

  // Create SVG path from points
  const createPath = () => {
    if (points.length < 2) return "";
    return `M ${points[0].x} ${points[0].y} ` + 
           points.map((p) => `L ${p.x} ${p.y}`).join(" ");
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-10000">
      {/* 1. The Light Trail (Ribbon) */}
      <svg className="absolute inset-0 w-full h-full opacity-50 overflow-visible">
        <motion.path
          d={createPath()}
          fill="none"
          stroke="var(--primary)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          style={{
            filter: "drop-shadow(0 0 8px var(--primary))",
          }}
        />
        {/* Secondary softer ghost trail */}
        <motion.path
          d={createPath()}
          fill="none"
          stroke="var(--primary)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-10"
        />
      </svg>

      {/* 2. The Core Neon Point */}
      <motion.div
        className="absolute top-0 left-0 w-2 h-2 bg-primary rounded-full shadow-[0_0_15px_var(--primary)]"
        style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
      >
        <div className="absolute inset-0 bg-white rounded-full animate-pulse blur-[1px]" />
      </motion.div>

      {/* 3. The Interactive Inverse Lens (On Hover) */}
      <motion.div
        className="absolute top-0 left-0 rounded-full border border-primary/40 mix-blend-difference bg-white"
        animate={{
          width: isPointer ? 60 : 0,
          height: isPointer ? 60 : 0,
          opacity: isPointer ? 1 : 0,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 200 }}
        style={{ x: coreX, y: coreY, translateX: "-50%", translateY: "-50%" }}
      >
        <div className="absolute inset-0 border-4 border-primary/20 rounded-full animate-[spin_4s_linear_infinite]" />
      </motion.div>

      {/* 4. Mouse Speed Interaction (Optional visual hint) */}
      <motion.div
        className="absolute bottom-10 right-10 flex-col items-end opacity-20 hidden md:flex"
      >
        <span className="text-[0.4rem] font-mono uppercase tracking-[0.5em] text-primary">Pointer_Stability: OK</span>
        <span className="text-[0.4rem] font-mono title-case text-primary/60">Tracing Active...</span>
      </motion.div>
    </div>
  );
}
