"use client";

import { Outfit } from "next/font/google";

const uniqueFont = Outfit({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

const SKILL_CATEGORIES = [
  {
    id: "01",
    title: "Core Ecosystem",
    color: "var(--primary)",
    items: [
      { name: "React.js", level: "95%" },
      { name: "Next.js (App Router)", level: "90%" },
      { name: "TypeScript", level: "85%" },
      { name: "JavaScript (ES6+)", level: "95%" }
    ]
  },
  {
    id: "02",
    title: "State & Data Layer",
    color: "var(--sidebar-primary)",
    items: [
      { name: "Redux Toolkit", level: "90%" },
      { name: "RTK Query", level: "88%" },
      { name: "TanStack Query", level: "85%" },
      { name: "Context API", level: "95%" }
    ]
  },
  {
    id: "03",
    title: "UI & Validation",
    color: "var(--destructive)",
    items: [
      { name: "Tailwind CSS", level: "98%" },
      { name: "Shadcn UI", level: "95%" },
      { name: "React Hook Form", level: "90%" },
      { name: "Zod", level: "90%" }
    ]
  },
  {
    id: "04",
    title: "Architecture & Tools",
    color: "var(--foreground)",
    items: [
      { name: "Feature-Based Structure", level: "SYS" },
      { name: "Custom Hooks", level: "SYS" },
      { name: "Git & GitHub", level: "ENV" },
      { name: "Vercel / Deployment", level: "ENV" }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative flex min-h-screen w-full items-center bg-background overflow-hidden">
      
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none display-none lg:block">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
        
        {/* Abstract Vertical Intersections */}
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-border/30" />
        <div className="absolute left-2/4 top-0 bottom-0 w-px bg-border/30" />
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-border/30" />
      </div>

      {/* Abstract Horizontal Intersections */}
        <div className="hidden lg:block absolute left-0 right-0 top-[10%] h-px bg-border/30 overflow-hidden">
          <div className="absolute top-0 h-px w-16 bg-linear-to-r from-transparent to-primary" style={{ animation: 'walk-h 30s linear infinite 5s' }} />
        </div>
        <div className="hidden lg:block absolute left-0 right-0 bottom-[10%] h-px bg-border/30 overflow-hidden">
          <div className="absolute top-0 h-px w-16 bg-linear-to-r from-transparent to-primary" style={{ animation: 'walk-h 30s linear infinite 1s' }} />
        </div>

      <div className="max-w-7xl mx-auto px-8 md:px-16 relative z-10 w-full py-24">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-16 md:mb-24 relative">
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 md:w-12 h-px bg-border block" />
              <span className="text-[0.55rem] md:text-[0.65rem] font-bold tracking-[0.4em] text-primary uppercase">
                02. Capabilities
              </span>
            </div>
            
            <h2 className={`${uniqueFont.className} text-[clamp(2rem,3.5vw,3.5rem)] leading-none font-extrabold tracking-tighter uppercase text-foreground`}>
              System <br />
              <span className="text-muted-foreground line-through decoration-primary/50">Architecture</span>
            </h2>
          </div>
          
          <div className="hidden md:flex flex-col items-end gap-2 text-right">
            <span className="text-[0.6rem] tracking-[0.3em] font-medium uppercase text-muted-foreground">Status: Optimal</span>
            <span className="text-[0.6rem] tracking-[0.3em] font-medium uppercase text-primary animate-pulse">Running Diagnostic...</span>
          </div>
        </div>

        {/* Ultra Minimal Blueprint Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-border/50">
          
          {SKILL_CATEGORIES.map((category) => (
             <div key={category.id} className="flex flex-col border-r border-b border-border/50 p-6 md:p-8 hover:bg-muted/5 transition-colors duration-500 group">
               
               {/* Category Header */}
               <div className="flex items-center justify-between mb-10">
                 <span className="text-[0.6rem] font-bold tracking-[0.3em] uppercase text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                   SEQ_{category.id}
                 </span>
                 <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: category.color, opacity: 0.5 }} />
               </div>

               <h3 className={`${uniqueFont.className} text-base font-bold text-foreground mb-8 uppercase tracking-widest`}>
                 {category.title}
               </h3>

               {/* Skill List */}
               <div className="flex flex-col gap-5 mt-auto">
                 {category.items.map((skill) => (
                   <div key={skill.name} className="flex items-center justify-between group/skill cursor-default">
                     <span className="text-[0.75rem] font-medium text-muted-foreground group-hover/skill:text-foreground transition-colors duration-300">
                       {skill.name}
                     </span>
                     <span className="text-[0.6rem] font-mono text-muted-foreground/40 group-hover/skill:text-primary transition-colors duration-300">
                       [{skill.level}]
                     </span>
                   </div>
                 ))}
               </div>

             </div>
          ))}

        </div>

      </div>
    </section>
  );
}
