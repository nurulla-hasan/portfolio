"use client";

import SectionLayout from "../layout/section-layout";
import { Layout, Database, ShieldCheck, Zap } from "lucide-react";


const SKILL_GROUPS = [
  {
    id: "01",
    title: "Core Ecosystem",
    color: "var(--primary)",
    icon: Layout,
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript"],
  },
  {
    id: "02",
    title: "State & Data",
    color: "var(--sidebar-primary)",
    icon: Database,
    skills: ["Redux Toolkit", "RTK Query", "TanStack Query", "Zustand"],
  },
  {
    id: "03",
    title: "UI & Validation",
    color: "var(--destructive)",
    icon: ShieldCheck,
    skills: ["Tailwind CSS", "Shadcn UI", "Hook Form", "Zod"],
  },
  {
    id: "04",
    title: "Tools & Arch",
    color: "var(--foreground)",
    icon: Zap,
    skills: ["Feature-Arch", "Custom Hooks", "Git", "Vercel"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen w-full bg-transparent overflow-hidden border"
    >
      {/* ======================== */}
      {/* Synchronized Horizontal Lines */}
      {/* <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute left-0 right-0 top-[12%] h-px bg-border/20 overflow-hidden">
          <div
            className="absolute top-0 h-px w-16 bg-linear-to-r from-transparent to-primary"
            style={{ animation: "walk-h 35s linear infinite 10s" }}
          />
        </div>
        <div className="absolute left-0 right-0 top-[88%] h-px bg-border/20 overflow-hidden">
          <div
            className="absolute top-0 h-px w-16 bg-linear-to-r from-transparent to-primary"
            style={{ animation: "walk-h 35s linear infinite 1s" }}
          />
        </div>
      </div> */}
      {/* ======================== */}

      <SectionLayout className="relative z-10 mt-12 md:mt-33">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-10 md:mb-16 relative">
          <div className="flex flex-col">
            <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
              <span className="w-6 md:w-12 h-px bg-border block" />
              <span className="text-[0.55rem] md:text-[0.65rem] font-bold tracking-[0.3em] md:tracking-[0.4em] text-primary uppercase">
                02. Capabilities
              </span>
            </div>

            <h2
              className="text-[clamp(2.5rem,6vw,4rem)] leading-[0.9] font-bold tracking-wide uppercase text-foreground"
            >
              <span className="shimmer-text block mb-1">System</span>
              <span
                className="outline-wipe mt-2 block"
                data-text="Architecture"
              >
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.id}
              className="skill-card relative rounded-2xl border bg-background/30 backdrop-blur-sm p-6 flex flex-col gap-5 overflow-hidden group cursor-default"
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(90deg, transparent, ${group.color}, transparent)`,
                }}
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
                  <group.icon className="w-4 h-4 opacity-100 group-hover:scale-110 transition-transform" style={{ color: group.color }} />
                  <div
                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{
                      backgroundColor: group.color,
                      boxShadow: `0 0 6px ${group.color}`,
                    }}
                  />
                </div>
              </div>

              <h3
                className="text-base font-bold uppercase tracking-widest transition-colors duration-500"
                style={{ color: "var(--foreground)" }}
              >
                {group.title}
              </h3>

              {/* Divider */}
              <div className="w-full h-px bg-border/20 relative overflow-hidden">
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
                          (e.target as HTMLElement).style.backgroundColor =
                            group.color;
                          (e.target as HTMLElement).style.boxShadow =
                            `0 0 8px ${group.color}`;
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
      </SectionLayout>
    </section>
  );
}
