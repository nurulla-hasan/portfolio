"use client";

import { Outfit } from "next/font/google";
import { Terminal } from "lucide-react";

const uniqueFont = Outfit({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

export default function About() {
  return (
    <section id="about" className="relative flex min-h-screen w-full items-center bg-background overflow-hidden">
      <style suppressHydrationWarning>{`
        .outline-scan {
          color: transparent;
          -webkit-text-stroke: 1px var(--border);
          position: relative;
        }
        .outline-scan::before, .outline-scan::after {
          content: attr(data-text);
          position: absolute;
          top: 0; left: 0;
          width: 100%;
          color: transparent;
          pointer-events: none;
        }
        .outline-scan::before {
          -webkit-text-stroke: 1.5px var(--primary);
          animation: text-scan 3s cubic-bezier(0.85, 0, 0.15, 1) infinite alternate;
        }
        .outline-scan::after {
          -webkit-text-stroke: 1.5px var(--destructive);
          animation: text-scan-rev 4.5s cubic-bezier(0.85, 0, 0.15, 1) infinite alternate;
          z-index: 10;
        }
        @keyframes text-scan {
          0% { clip-path: inset(0 100% 0 0); }
          100% { clip-path: inset(0 0 0 0); }
        }
        @keyframes text-scan-rev {
          0% { clip-path: inset(0 0 0 100%); }
          100% { clip-path: inset(0 0 0 0); }
        }
      `}</style>
      
      {/* Background Architectural Grid (Continued) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Grain */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
        
        {/* Vertical Lines */}
        <div className="hidden lg:block absolute left-24 top-0 bottom-0 w-px bg-border/50 overflow-hidden">
          <div className="absolute left-0 w-px h-16 bg-linear-to-b from-transparent to-primary" style={{ animation: 'walk-v 20s linear infinite 2s' }} />
        </div>
        <div className="hidden lg:block absolute right-24 top-0 bottom-0 w-px bg-border/50 overflow-hidden">
          <div className="absolute left-0 w-px h-16 bg-linear-to-b from-transparent to-primary" style={{ animation: 'walk-v 20s linear infinite 7s' }} />
        </div>
        
        {/* Abstract Horizontal Intersections */}
        <div className="hidden lg:block absolute left-0 right-0 top-[10%] h-px bg-border/30 overflow-hidden">
          <div className="absolute top-0 h-px w-16 bg-linear-to-r from-transparent to-primary" style={{ animation: 'walk-h 30s linear infinite 5s' }} />
        </div>
        <div className="hidden lg:block absolute left-0 right-0 bottom-[10%] h-px bg-border/30 overflow-hidden">
          <div className="absolute top-0 h-px w-16 bg-linear-to-r from-transparent to-primary" style={{ animation: 'walk-h 30s linear infinite 1s' }} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 md:px-16 relative z-10 w-full py-24">
        
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Text & Profile */}
          <div className="flex flex-col items-start w-full">
            <div className="flex items-center gap-4 mb-8 md:mb-12">
              <span className="w-8 md:w-12 h-px bg-border block" />
              <span className="text-[0.55rem] md:text-[0.65rem] font-bold tracking-[0.4em] text-primary uppercase">
                01. About Me
              </span>
            </div>

            <h2 className={`${uniqueFont.className} text-[clamp(2.5rem,4vw,4rem)] leading-[1.05] font-semibold tracking-widest uppercase text-foreground mb-6`}>
              <span className="shimmer-text block mb-2 drop-shadow-[0_0_15px_var(--primary-foreground)]">Frontend Focused</span>
              <span className="block outline-scan text-[clamp(2.5rem,4vw,3rem)]" data-text="MERN Engineer">
                MERN Engineer
              </span>
            </h2>

            <p className="text-[0.9rem] md:text-[1rem] font-light leading-relaxed text-muted-foreground max-w-xl mb-12 text-justify">
              Professional experience building authenticated, API-driven web applications and dashboard systems using React, Next.js, TypeScript, Tailwind CSS, and Redux Toolkit. I specialize in reusable component architecture, custom hooks, protected routing, validated forms, and feature-based frontend structures to deliver scalable codebases.
            </p>

            {/* Micro Details Grid */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-8 border-l border-border/50 pl-8">
              <div className="flex flex-col gap-2">
                <span className="text-[0.55rem] tracking-[0.2em] text-muted-foreground uppercase flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> Platform
                </span>
                <span className="text-[0.85rem] font-medium text-foreground tracking-wide">Web Applications</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[0.55rem] tracking-[0.2em] text-muted-foreground uppercase flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sidebar-primary animate-pulse" /> Current Location
                </span>
                <span className="text-[0.85rem] font-medium text-foreground tracking-wide">Dhaka, BD (On-site)</span>
              </div>
            </div>

          </div>

          {/* Right Column: Technical Skills Matrix */}
          <div className="w-full h-full flex items-center justify-center relative mt-10 lg:mt-0">
            
            {/* Ambient Background Glowing Orbs */}
            <div className="absolute inset-0 bg-linear-to-tr from-primary/5 to-transparent rounded-3xl opacity-50 border border-border/20" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 blur-[60px] rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-70 h-70 bg-destructive/10 blur-[60px] rounded-full" />

            {/* Glass Terminal Interface */}
            <div className="relative z-10 w-full p-8 md:p-10 rounded-2xl border border-border/60 flex flex-col gap-8 shadow-2xl backdrop-blur-xl bg-background/40">
               
               {/* Terminal Header */}
               <div className="flex items-center justify-between border-b border-border/60 pb-5">
                 <div className="flex items-center gap-3">
                   <Terminal className="w-4 h-4 text-primary" />
                   <span className="text-[0.65rem] tracking-[0.3em] font-medium uppercase text-muted-foreground">Sys.Skills_Matrix</span>
                 </div>
                 <div className="flex gap-1.5">
                   <div className="w-2 h-2 rounded-full bg-border" />
                   <div className="w-2 h-2 rounded-full bg-border" />
                   <div className="w-2 h-2 rounded-full bg-primary" />
                 </div>
               </div>

               {/* Skills Body */}
               <div className="flex flex-col gap-8">
                 
                 {/* Block 1 */}
                 <div className="flex flex-col gap-3">
                   <span className="text-[0.55rem] font-bold tracking-[0.25em] text-primary/80 uppercase">01 / Core Frontend</span>
                   <div className="flex flex-wrap gap-2.5">
                     {["React.js", "Next.js (App Router)", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Shadcn UI"].map(skill => (
                       <span key={skill} className="text-[0.7rem] font-medium px-3.5 py-1.5 bg-foreground/5 border border-border/50 text-foreground/90 rounded-md hover:border-primary/50 transition-colors cursor-default">
                         {skill}
                       </span>
                     ))}
                   </div>
                 </div>

                 {/* Block 2 */}
                 <div className="flex flex-col gap-3">
                   <span className="text-[0.55rem] font-bold tracking-[0.25em] text-sidebar-primary/80 uppercase">02 / State & Data Layer</span>
                   <div className="flex flex-wrap gap-2.5">
                     {["Redux Toolkit", "RTK Query", "TanStack Query", "React Hook Form", "Zod"].map(skill => (
                       <span key={skill} className="text-[0.7rem] font-medium px-3.5 py-1.5 bg-foreground/5 border border-border/50 text-foreground/90 rounded-md hover:border-sidebar-primary/50 transition-colors cursor-default">
                         {skill}
                       </span>
                     ))}
                   </div>
                 </div>
                 
                 {/* Block 3 */}
                 <div className="flex flex-col gap-3">
                   <span className="text-[0.55rem] font-bold tracking-[0.25em] text-destructive/80 uppercase">03 / Tools & Environment</span>
                   <div className="flex flex-wrap gap-2.5">
                     {["Git", "GitHub", "Vercel"].map(skill => (
                       <span key={skill} className="text-[0.7rem] font-medium px-3.5 py-1.5 bg-foreground/5 border border-border/50 text-foreground/90 rounded-md hover:border-destructive/50 transition-colors cursor-default">
                         {skill}
                       </span>
                     ))}
                   </div>
                 </div>

               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
