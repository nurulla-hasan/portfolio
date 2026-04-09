"use client";

import { Outfit } from "next/font/google";

const uniqueFont = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const SKILL_GROUPS = [
  {
    id: "01",
    title: "Core Ecosystem",
    color: "hsl(187, 80%, 55%)", // cyan / primary
    skills: ["React.js", "Next.js (App Router)", "TypeScript", "JavaScript (ES6+)"],
  },
  {
    id: "02",
    title: "State & Data Layer",
    color: "hsl(239, 84%, 67%)", // indigo / sidebar-primary
    skills: ["Redux Toolkit", "RTK Query", "TanStack Query", "Context API"],
  },
  {
    id: "03",
    title: "UI & Validation",
    color: "hsl(350, 89%, 60%)", // rose / destructive
    skills: ["Tailwind CSS", "Shadcn UI", "React Hook Form", "Zod"],
  },
  {
    id: "04",
    title: "Architecture & Tools",
    color: "hsl(0, 0%, 85%)", // near-white / foreground
    skills: ["Feature-Based Structure", "Custom Hooks", "Git & GitHub", "Vercel"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative flex min-h-screen w-full items-center bg-transparent overflow-hidden"
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
          top: 0; left: 0;
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
        @keyframes progress-slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
        .skill-card {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .skill-card:hover {
          transform: translateY(-4px);
        }
      `}</style>

      {/* Horizontal Intersections */}
      <div className="hidden lg:block absolute left-0 right-0 top-[10%] h-px bg-border/30 overflow-hidden z-0 pointer-events-none">
        <div
          className="absolute top-0 h-px w-16 bg-linear-to-r from-transparent to-primary"
          style={{ animation: "walk-h 30s linear infinite 10s" }}
        />
      </div>
      <div className="hidden lg:block absolute left-0 right-0 bottom-[10%] h-px bg-border/30 overflow-hidden z-0 pointer-events-none">
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
              <span className="shimmer-text block mb-1 drop-shadow-[0_0_15px_var(--primary-foreground)]">
                System
              </span>
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

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.id}
              className="skill-card relative rounded-2xl border border-border/50 bg-background/30 backdrop-blur-sm p-7 flex flex-col gap-6 overflow-hidden group cursor-default"
              style={{
                boxShadow: `inset 0 -60px 60px -60px ${group.color}08`,
              }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${group.color}, transparent)` }}
              />

              {/* Idle scanning bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div
                  className="h-full w-1/4 rounded-full"
                  style={{
                    background: group.color,
                    boxShadow: `0 0 12px ${group.color}`,
                    animation: "progress-slide 2s ease-in-out infinite",
                  }}
                />
              </div>

              {/* Header */}
              <div className="flex items-center justify-between">
                <span
                  className="text-[0.6rem] font-bold tracking-[0.3em] uppercase opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ color: group.color }}
                >
                  SEQ_{group.id}
                </span>
                <div className="flex items-center gap-2">
                  <div
                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{ backgroundColor: group.color, boxShadow: `0 0 6px ${group.color}` }}
                  />
                </div>
              </div>

              <h3
                className={`${uniqueFont.className} text-base font-bold uppercase tracking-widest transition-colors duration-500`}
                style={{ color: "var(--foreground)" }}
              >
                {group.title}
              </h3>

              {/* Divider */}
              <div className="w-full h-px bg-border/30 relative overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 w-0 group-hover:w-full transition-all duration-700 ease-out"
                  style={{ backgroundColor: group.color, opacity: 0.5 }}
                />
              </div>

              {/* Skills list */}
              <div className="flex flex-col gap-4 mt-auto">
                {group.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center justify-between group/item"
                  >
                    <div className="flex items-center gap-3">
                      {/* Dot that glows on hover */}
                      <div
                        className="w-1 h-1 rounded-full bg-border transition-all duration-300 group-hover/item:scale-150"
                        style={{
                          boxShadow: "none",
                        }}
                        onMouseEnter={(e) => {
                          (e.target as HTMLElement).style.backgroundColor = group.color;
                          (e.target as HTMLElement).style.boxShadow = `0 0 8px ${group.color}`;
                        }}
                        onMouseLeave={(e) => {
                          (e.target as HTMLElement).style.backgroundColor = "";
                          (e.target as HTMLElement).style.boxShadow = "none";
                        }}
                      />
                      <span className="text-[0.8rem] font-medium text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                        {skill}
                      </span>
                    </div>
                    <span
                      className="text-[0.55rem] font-mono opacity-0 group-hover/item:opacity-60 transition-opacity duration-300 tracking-wider"
                      style={{ color: group.color }}
                    >
                      ●
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom ambient glow */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
                style={{ backgroundColor: group.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
