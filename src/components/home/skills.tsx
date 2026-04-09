"use client";

import { Outfit } from "next/font/google";

const uniqueFont = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const SKILL_CATEGORIES = [
  {
    id: "01",
    title: "Core Ecosystem",
    colorClass: "text-primary",
    bgHover: "hover:bg-primary/[0.03]",
    borderHover: "hover:border-primary/50",
    glow: "group-hover:shadow-[inset_0_0_80px_rgba(34,211,238,0.05)]", // using raw rgba for generic glow roughly matching primary
    items: [
      { name: "React.js", level: "95%" },
      { name: "Next.js (App Router)", level: "90%" },
      { name: "TypeScript", level: "85%" },
      { name: "JavaScript (ES6+)", level: "95%" },
    ],
  },
  {
    id: "02",
    title: "State & Data Layer",
    colorClass: "text-sidebar-primary",
    bgHover: "hover:bg-sidebar-primary/[0.03]",
    borderHover: "hover:border-sidebar-primary/50",
    glow: "group-hover:shadow-[inset_0_0_80px_rgba(99,102,241,0.05)]",
    items: [
      { name: "Redux Toolkit", level: "90%" },
      { name: "RTK Query", level: "88%" },
      { name: "TanStack Query", level: "85%" },
      { name: "Context API", level: "95%" },
    ],
  },
  {
    id: "03",
    title: "UI & Validation",
    colorClass: "text-destructive",
    bgHover: "hover:bg-destructive/[0.03]",
    borderHover: "hover:border-destructive/50",
    glow: "group-hover:shadow-[inset_0_0_80px_rgba(244,63,94,0.05)]",
    items: [
      { name: "Tailwind CSS", level: "98%" },
      { name: "Shadcn UI", level: "95%" },
      { name: "React Hook Form", level: "90%" },
      { name: "Zod", level: "90%" },
    ],
  },
  {
    id: "04",
    title: "Architecture & Tools",
    colorClass: "text-foreground",
    bgHover: "hover:bg-foreground/[0.03]",
    borderHover: "hover:border-foreground/50",
    glow: "group-hover:shadow-[inset_0_0_80px_rgba(255,255,255,0.05)]",
    items: [
      { name: "Feature-Based Structure", level: "SYS" },
      { name: "Custom Hooks", level: "SYS" },
      { name: "Git & GitHub", level: "ENV" },
      { name: "Vercel / Deployment", level: "ENV" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative flex min-h-screen w-full items-center bg-background overflow-hidden"
    >
      <style suppressHydrationWarning>{`
        .outline-wipe {
          color: transparent;
          -webkit-text-stroke: 1px var(--border);
          position: relative;
          display: inline-block;
        }
        .outline-wipe::before, .outline-wipe::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          color: transparent;
          pointer-events: none;
        }
        .outline-wipe::before {
          -webkit-text-stroke: 1.5px var(--sidebar-primary);
          filter: drop-shadow(0 0 6px var(--sidebar-primary));
          animation: laser-wipe 4.5s ease-in-out infinite;
        }
        .outline-wipe::after {
          -webkit-text-stroke: 1.5px var(--primary);
          filter: drop-shadow(0 0 6px var(--primary));
          animation: laser-wipe 4.5s ease-in-out infinite 0.2s;
        }
        @keyframes laser-wipe {
          0%, 15% { clip-path: polygon(-20% 0, -5% 0, -15% 100%, -30% 100%); }
          85%, 100% { clip-path: polygon(120% 0, 135% 0, 125% 100%, 110% 100%); }
        }
      `}</style>

      {/* Vertical Lines */}
      <div className="hidden lg:block absolute left-24 top-0 bottom-0 w-px bg-border/50 overflow-hidden">
        <div
          className="absolute left-0 w-px h-16 bg-linear-to-b from-transparent to-primary"
          style={{ animation: "walk-v 20s linear infinite 2s" }}
        />
      </div>
      <div className="hidden lg:block absolute right-24 top-0 bottom-0 w-px bg-border/50 overflow-hidden">
        <div
          className="absolute left-0 w-px h-16 bg-linear-to-b from-transparent to-primary"
          style={{ animation: "walk-v 20s linear infinite 7s" }}
        />
      </div>

      {/* Abstract Horizontal Intersections */}
      <div className="hidden lg:block absolute left-0 right-0 top-[10%] h-px bg-border/30 overflow-hidden">
        <div
          className="absolute top-0 h-px w-16 bg-linear-to-r from-transparent to-primary"
          style={{ animation: "walk-h 30s linear infinite 10s" }}
        />
      </div>
      <div className="hidden lg:block absolute left-0 right-0 bottom-[10%] h-px bg-border/30 overflow-hidden">
        <div
          className="absolute top-0 h-px w-16 bg-linear-to-r from-transparent to-primary"
          style={{ animation: "walk-h 30s linear infinite 1s" }}
        />
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

            <h2
              className={`${uniqueFont.className} text-[clamp(2rem,3.5vw,3.5rem)] leading-none font-extrabold tracking-tighter uppercase text-foreground`}
            >
              <span className="shimmer-text block mb-1 drop-shadow-[0_0_15px_var(--primary-foreground)]">System</span>
              <span className="outline-wipe mt-2 block" data-text="Architecture">
                Architecture
              </span>
            </h2>
          </div>

          <div className="hidden md:flex flex-col items-end gap-2 text-right">
            <span className="text-[0.6rem] tracking-[0.3em] font-medium uppercase text-muted-foreground">
              Status: Optimal
            </span>
            <span className="text-[0.6rem] tracking-[0.3em] font-medium uppercase text-primary animate-pulse">
              Running Diagnostic...
            </span>
          </div>
        </div>

        {/* Ultra Minimal Blueprint Grid with Colorful Hovers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-border/50 relative">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className={`relative flex flex-col border-r border-b border-border/50 p-8 transition-all duration-700 group overflow-hidden ${category.bgHover} ${category.glow}`}
            >
              {/* Animated Gradient Sweep on Hover */}
              <div className="absolute inset-0 bg-linear-to-br from-transparent to-transparent group-hover:via-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Category Header */}
              <div className="flex items-center justify-between mb-10 relative z-10">
                <span
                  className={`text-[0.65rem] font-black tracking-[0.3em] uppercase text-muted-foreground group-hover:${category.colorClass} transition-colors duration-500`}
                >
                  SEQ_{category.id}
                </span>
                <div
                  className={`w-1.5 h-1.5 rounded-full bg-muted-foreground group-hover:animate-pulse transition-colors duration-500`}
                />
              </div>

              <h3
                className={`${uniqueFont.className} text-lg font-bold text-foreground mb-8 uppercase tracking-widest group-hover:${category.colorClass} transition-colors duration-500 relative z-10 drop-shadow-md`}
              >
                {category.title}
              </h3>

              {/* Skill List */}
              <div className="flex flex-col gap-6 mt-auto relative z-10">
                {category.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between group/skill cursor-default"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-1 h-px bg-border group-hover/skill:w-3 group-hover/skill:bg-current transition-all duration-300" />
                      <span
                        className={`text-[0.8rem] font-medium text-muted-foreground group-hover/skill:${category.colorClass} group-hover/skill:translate-x-1 transition-all duration-300`}
                      >
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-[0.6rem] font-mono text-muted-foreground/30 group-hover/skill:text-foreground transition-colors duration-300 backdrop-blur-sm">
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
