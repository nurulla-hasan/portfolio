"use client"

import React from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function BlueprintBackground() {
  const { scrollYProgress } = useScroll()

  // High-depth parallax array for a multi-layered effect
  const yDeep = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])
  const yMid = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const yNear = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const scrollRotate = useTransform(scrollYProgress, [0, 1], [0, 20])

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden select-none bg-background">
      {/* 1. Deep Texture Layer */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]" 
        style={{ 
          backgroundImage: `radial-gradient(var(--primary) 0.8px, transparent 0.8px), linear-gradient(var(--border) 0.5px, transparent 0.5px)`,
          backgroundSize: '30px 30px, 150px 150px'
        }} 
      />

      {/* 2. Peripheral HUD Overlay (Stays fixed to screen edges) */}
      <div className="absolute inset-0 border border-primary/5 pointer-events-none">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/4 h-px bg-linear-to-r from-transparent via-primary/10 to-transparent" />
         {/* Corner Brackets */}
         <div className="absolute top-0 left-0 w-10 h-10 border-t border-l border-primary/20" />
         <div className="absolute top-0 right-0 w-10 h-10 border-t border-r border-primary/20" />
         <div className="absolute bottom-0 left-0 w-10 h-10 border-b border-l border-primary/20" />
         <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-primary/20" />
      </div>

      {/* 3. The Exploded Architectural Schematic */}
      <div className="absolute inset-0">
        
        {/* Cluster A: Top Left - Processor Stack */}
        <motion.div style={{ y: yMid, rotate: -scrollRotate }} className="absolute top-[10%] left-[5%] opacity-20">
           <div className="w-20 h-32 border border-primary/40" />
           <div className="absolute -top-6 left-0 text-[8px] font-mono tracking-widest text-primary uppercase">Proc_Stack // V01</div>
           <div className="flex flex-col gap-1 mt-2">
              <div className="w-16 h-1 bg-primary/40" />
              <div className="w-10 h-1 bg-primary/20" />
              <div className="w-14 h-1 bg-primary/30" />
           </div>
        </motion.div>

        {/* Cluster B: Center Right - Data Core */}
        <motion.div style={{ y: yNear, rotate: scrollRotate }} className="absolute top-[30%] right-[10%] w-125 h-125">
           <div className="absolute inset-0 border border-primary/10 rounded-full" />
           <div className="absolute inset-10 border border-dashed border-primary/20 rounded-full animate-[spin_60s_linear_infinite]" />
           <div className="absolute inset-24 border border-primary/5 rounded-full" />
           {/* Connecting Schematic Lines */}
           <div className="absolute top-1/2 -left-37.5 w-full h-px bg-linear-to-r from-transparent via-primary/20 to-transparent rotate-12" />
           <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] font-mono tracking-[0.5em] text-primary/40 uppercase font-black">Core_Logic_Stable</span>
        </motion.div>

        {/* Cluster D: Bottom Right - Perspective Frame */}
        <motion.div style={{ y: yDeep, rotate: -scrollRotate }} className="absolute bottom-[10%] right-[5%] w-96 h-52">
           <div className="absolute inset-0 border border-primary/15 skew-x-[-15deg] rotate-[5deg]" />
           <div className="absolute inset-6 border border-primary/10 skew-x-15" />
           <span className="absolute top-1/2 right-4 text-[7px] font-mono text-primary/20 rotate-90 origin-right">COORD_REF: 102.Z</span>
           <div className="absolute -bottom-8 right-0 w-32 h-px bg-primary/30" />
        </motion.div>

      </div>

      {/* 4. Peripheral HUD Markers & Radar */}
      <div className="absolute top-12 left-12 opacity-30 animate-pulse">
         <span className="text-[0.5rem] font-mono tracking-[0.7em] text-primary uppercase underline underline-offset-4">Recon_Active</span>
      </div>

      <div className="absolute bottom-12 right-12 text-right opacity-20">
         <span className="text-[0.4rem] font-mono tracking-widest text-primary block">AXIS_Y: SCROLL_ENABLED</span>
         <span className="text-[0.4rem] font-mono tracking-widest text-primary block mt-1">LOC: 23.8°N 90.4°E</span>
      </div>

      {/* Cinematic Radar Sweeps & Gradients */}
      <div 
        className="absolute inset-0 bg-linear-to-r from-transparent via-primary/4 to-transparent -translate-x-full" 
        style={{ animation: 'radar-sweep 15s linear infinite' }}
      />
      <div className="absolute inset-0 bg-radial-gradient(circle at 50% 50%, rgba(var(--primary), 0.05), transparent)" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02]" />

      <style jsx>{`
        @keyframes radar-sweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  )
}
