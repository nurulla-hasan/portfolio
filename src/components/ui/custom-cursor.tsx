"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { Pointer } from "lucide-react";

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Springs for the "Magnetic Frame" - slower than the core for a physical feel
  const springConfig = { damping: 30, stiffness: 200, mass: 0.5 };
  const frameX = useSpring(mouseX, springConfig);
  const frameY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" || 
        target.closest("a, button") !== null
      );
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-10000 overflow-hidden">
      {/* 1. The Magnetic Architectural Frame */}
      <motion.div
        className="absolute top-0 left-0 flex items-center justify-center"
        style={{ x: frameX, y: frameY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          rotate: isPointer ? 90 : 0,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 150 }}
      >
        <div className="relative w-8 h-8 flex items-center justify-center opacity-40">
          {/* Top Left Corner */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary" />
          {/* Top Right Corner */}
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary" />
          {/* Bottom Left Corner */}
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary" />
          {/* Bottom Right Corner */}
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary" />
        </div>
      </motion.div>

      {/* 2. The Core Pinpoint / Hand Pointer */}
      <motion.div
        className="absolute top-0 left-0 flex items-center justify-center"
        style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
      >
        {!isPointer ? (
          <motion.div 
            className="w-1 h-1 bg-primary rounded-full shadow-[0_0_10px_var(--primary)]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          />
        ) : (
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            className="text-primary filter drop-shadow-[0_0_12px_var(--primary)]"
          >
            <Pointer className="w-5 h-5 fill-primary/20" />
          </motion.div>
        )}
      </motion.div>

      {/* 3. Coordinates Info (Minimalist HUD) */}
      {!isPointer && (
        <motion.div
          className="absolute top-0 left-0 pl-4 pt-4 flex flex-col gap-0 shadow-sm"
          style={{ x: frameX, y: frameY }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
        >
        </motion.div>
      )}
    </div>
  );
}
