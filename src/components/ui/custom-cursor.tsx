"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { MousePointer2, Pointer } from "lucide-react";

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);



  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" || 
        target.closest("a, button, [role='button']") !== null
      );
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-10000 overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 flex items-center justify-center text-primary"
        style={{ 
          x: mouseX, 
          y: mouseY, 
          translateX: "-50%", 
          translateY: "-50%" 
        }}
        animate={{
          scale: isPointer ? 1.2 : 1,
          opacity: 1
        }}
        transition={{ type: "spring", damping: 20, stiffness: 200 }}
      >
        {/* The Icon-Driven Cursor */}
        {!isPointer ? (
          <MousePointer2 className="w-5 h-5 opacity-90" strokeWidth={1.5} />
        ) : (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="filter drop-shadow-[0_0_8px_var(--primary)] text-primary"
          >
            <Pointer className="w-5 h-5 fill-primary/10" strokeWidth={1.5} />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
