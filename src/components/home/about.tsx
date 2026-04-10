"use client";

import { Outfit } from "next/font/google";
import { Terminal, ShieldCheck, Database, Layout } from "lucide-react";

const uniqueFont = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex items-center bg-transparent overflow-hidden"
    >
      <style suppressHydrationWarning>{`
        .glass-terminal {
          background: rgba(var(--background), 0.2);
          backdrop-filter: blur(20px);
          border: 1px solid var(--border);
          box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);
        }
        .skill-tag {
          background: var(--border);
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .skill-tag:hover {
          background: var(--primary);
          color: var(--primary-foreground);
          transform: translateY(-2px);
          box-shadow: 0 0 15px var(--primary);
        }
        @keyframes scan-line {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(400%); }
        }
        .scan-line {
          height: 100px;
          background: linear-gradient(to bottom, transparent, var(--primary), transparent);
          opacity: 0.1;
          animation: scan-line 8s linear infinite;
        }

        .outline-glitch {
          color: transparent;
          -webkit-text-stroke: 1.5px var(--border);
          position: relative;
          display: inline-block;
          line-height: 1;
        }
        .outline-glitch::before, .outline-glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0; left: 0;
          width: 100%;
          height: 100%;
          color: transparent;
          pointer-events: none;
          opacity: 1;
          z-index: 10;
          display: block;
        }
        .outline-glitch::before {
          -webkit-text-stroke: 2px var(--primary);
          animation: cyber-glitch-1 3.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
        }
        .outline-glitch::after {
          -webkit-text-stroke: 2px var(--sidebar-primary);
          animation: cyber-glitch-1 4.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse infinite;
        }
        @keyframes cyber-glitch-1 {
          0% { clip-path: inset(20% 0 80% 0); transform: translate(-1px, 0.5px); }
          20% { clip-path: inset(60% 0 10% 0); transform: translate(1px, -0.5px); }
          40% { clip-path: inset(40% 0 50% 0); transform: translate(-1px, 1px); }
          60% { clip-path: inset(80% 0 5% 0); transform: translate(1px, -1px); }
          80% { clip-path: inset(10% 0 70% 0); transform: translate(-0.5px, 0.5px); }
          100% { clip-path: inset(30% 0 50% 0); transform: translate(0.5px, -0.5px); }
        }
      `}</style>

      {/* Background Architectural HUD & Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Horizontal Lines matched with Hero */}
        <div className="absolute left-0 right-0 top-[12%] h-px bg-border/20 overflow-hidden">
          <div
            className="absolute top-0 h-px w-16 bg-linear-to-r from-transparent to-primary"
            style={{ animation: "walk-h 35s linear infinite 5s" }}
          />
        </div>
        <div className="absolute left-0 right-0 top-[88%] h-px bg-border/20 overflow-hidden">
          <div
            className="absolute top-0 h-px w-16 bg-linear-to-r from-transparent to-primary"
            style={{ animation: "walk-h 35s linear infinite 1s" }}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-32 items-center">
          {/* Left Column: Story & Identity */}
          <div className="flex flex-col items-start w-full">
            <div className="group flex items-center gap-5 mb-6 overflow-hidden">
              <div className="w-12 h-px bg-primary/40 group-hover:w-20 transition-all duration-700" />
              <span className="text-[0.7rem] font-black tracking-[0.5em] text-primary uppercase">
                01. Core_Profile
              </span>
            </div>

            <h2
              className={`${uniqueFont.className} text-[clamp(2rem,4vw,4rem)] leading-[0.95] font-black tracking-wide uppercase mb-4 text-foreground`}
            >
              Building <br />
              <span className="shimmer-text">Robust</span> <br />
              <span className="outline-glitch" data-text="Systems">
                Systems
              </span>
            </h2>

            <div className="relative border-l border-border/40 pl-8 py-1 space-y-4">
              <p className="text-[0.9rem] md:text-[1rem] font-light leading-relaxed text-foreground/80 max-w-xl">
                I am a{" "}
                <span className="text-primary font-medium">
                  Frontend-Focused MERN Stack Developer
                </span>{" "}
                with a passion for building high-performance, scalable web
                systems. My expertise lies in creating mathematically precise
                interfaces that are as robust as they are beautiful.
              </p>
              <p className="text-[0.85rem] md:text-[0.9rem] font-medium leading-relaxed text-muted-foreground/60 max-w-lg">
                Specializing in authenticated dashboard systems, complex state
                management, and reusable enterprise-grade architectures using
                React, Next.js, and TypeScript.
              </p>

              {/* Quick Metrics */}
              <div className="pt-4 grid grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-foreground">
                    2+
                  </span>
                  <span className="text-[0.5rem] tracking-[0.3em] font-bold uppercase text-muted-foreground">
                    Years Experience
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-primary">40+</span>
                  <span className="text-[0.5rem] tracking-[0.3em] font-bold uppercase text-muted-foreground">
                    Projects Delivered
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Technical Matrix */}
          <div className="relative group perspective-1000 scale-95 origin-right">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full scale-150 group-hover:bg-primary/10 transition-colors duration-1000" />

            {/* Terminal Interface */}
            <div className="glass-terminal relative z-10 p-8 rounded-3xl overflow-hidden">
              {/* Scanning Effect Overlay */}
              <div className="absolute inset-0 scan-line pointer-events-none z-0" />

              {/* Header */}
              <div className="flex items-center justify-between mb-8 border-b border-border/40 pb-4 relative z-10">
                <div className="flex items-center gap-4">
                  <Terminal className="w-5 h-5 text-primary" />
                  <div className="flex flex-col">
                    <span className="text-[0.6rem] font-bold tracking-[0.3em] uppercase text-foreground">
                      Tech_Matrix.sys
                    </span>
                    <span className="text-[0.4rem] font-medium tracking-[0.2em] uppercase text-muted-foreground/60">
                      Version 4.0.2 // Build Active
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full border border-border/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-primary/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                </div>
              </div>

              {/* Grid Layout for Skills */}
              <div className="grid gap-6 relative z-10">
                {/* Category 1 */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Layout className="w-3 h-3 text-primary/50" />
                    <span className="text-[0.55rem] font-black tracking-[0.4em] uppercase text-primary">
                      01. UI_Foundations
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Next.js", "React", "TypeScript", "Tailwind"].map((s) => (
                      <span
                        key={s}
                        className="skill-tag text-[0.65rem] px-3 py-1.5 font-bold tracking-wider text-muted-foreground rounded-lg border border-border/40"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Category 2 */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Database className="w-3 h-3 text-sidebar-primary/50" />
                    <span className="text-[0.55rem] font-black tracking-[0.4em] uppercase text-sidebar-primary">
                      02. State_Logic
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Redux", "RTK Query", "Zod", "Zustand"].map((s) => (
                      <span
                        key={s}
                        className="skill-tag text-[0.65rem] px-3 py-1.5 font-bold tracking-wider text-muted-foreground rounded-lg border border-border/40 hover:bg-sidebar-primary! hover:shadow-sidebar-primary!"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Category 3 */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-3 h-3 text-primary/50" />
                    <span className="text-[0.55rem] font-black tracking-[0.4em] uppercase text-primary">
                      03. Environments
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Git", "Vercel", "REST APIs"].map((s) => (
                      <span
                        key={s}
                        className="skill-tag text-[0.65rem] px-3 py-1.5 font-bold tracking-wider text-muted-foreground rounded-lg border border-border/40 hover:bg-primary! hover:shadow-primary!"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Details */}
              <div className="mt-8 pt-4 border-t border-border/20 flex justify-between items-center opacity-40">
                <span className="text-[0.45rem] tracking-[0.4em] uppercase font-bold">
                  Encrypted Connection
                </span>
                <span className="text-[0.45rem] tracking-[0.4em] uppercase font-bold">
                  Node: 26//DHAKA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
