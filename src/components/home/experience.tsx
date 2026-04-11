"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import SectionLayout from "../layout/section-layout";

const EXPERIENCE_DATA = [
  {
    company: "Betopia Group",
    role: "Frontend Developer",
    location: "Dhaka, BD (On-site)",
    duration: "March 2025 - Present",
    description:
      "Building API-driven frontend modules and dashboard interfaces. Designing reusable abstractions including custom hooks, data tables, and modal systems. Implementing authenticated user flows and protected routing.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
    status: "active",
  },
  // {
  //   company: "Digital Horizon Studio",
  //   role: "Full Stack Engineer",
  //   location: "USA (Contract)",
  //   duration: "2021 - 2023",
  //   description:
  //     "Built scalable e-commerce platforms and automated deployment pipelines. Focused on UI/UX precision and backend optimization.",
  //   tech: ["React", "Express", "MongoDB", "Docker"],
  //   status: "closed",
  // },
  // {
  //   company: "Creative Logic Ltd",
  //   role: "Junior Frontend Developer",
  //   location: "Dhaka, BD",
  //   duration: "2019 - 2021",
  //   description:
  //     "Assisted in building internal ERP tools and client-facing dashboards. Mastered the fundamentals of the MERN ecosystem.",
  //   tech: ["JavaScript", "React", "Node.js", "MongoDB"],
  //   status: "closed",
  // },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative min-h-screen overflow-hidden bg-transparent"
    >
      {/* Synchronized Horizontal Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
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
      </div>
      {/* ======================== */}

      <SectionLayout className="relative z-10 mt-12 md:mt-33">
        {/* Section Header */}
        <div className="mb-10 md:mb-16">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-6 md:w-12 h-px bg-border" />
            <span className="text-[0.55rem] md:text-[0.65rem] font-bold tracking-[0.3em] md:tracking-[0.4em] text-primary uppercase">
              03. History_Log
            </span>
          </div>
          <h2 className="text-[clamp(2.5rem,6vw,4rem)] leading-[0.9] font-bold tracking-wide uppercase text-foreground">
            Experience{" "}
            <span className="text-sm font-mono text-muted-foreground tracking-widest">
              [RECORD_01]
            </span>
          </h2>
        </div>

        {/* Timeline Path */}
        <div className="relative">
          {/* Central Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border/40 -translate-x-1/2 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-20 bg-linear-to-b from-transparent via-primary to-transparent animate-[walk-v_30s_linear_infinite]" />
          </div>

          <div className="space-y-12">
            {EXPERIENCE_DATA.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-12 ${idx % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Node Anchor */}
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 z-20">
                  <div
                    className={`w-4 h-4 rounded-full border-2 ${exp.status === "active" ? "border-primary bg-primary shadow-[0_0_12px_var(--primary)]" : "border-primary/40 bg-background"} transition-all duration-500`}
                  >
                    {exp.status === "active" && (
                      <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-60" />
                    )}
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-primary/10 scale-150 rotate-45" />
                </div>

                {/* Content Side */}
                <div className="w-full md:w-[45%] pl-8 md:pl-0">
                  <div
                    className={`glass-terminal p-8 rounded-2xl relative group overflow-hidden border border-border/40 hover:border-primary/30 transition-all duration-500 bg-background/30 backdrop-blur-sm`}
                  >
                    {/* Background Sweep */}
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-primary/3 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />

                    {/* Role & Company */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[0.6rem] font-bold tracking-[0.3em] uppercase opacity-40 group-hover:opacity-100 transition-opacity duration-500 text-primary">
                          SEQ_{idx + 1}
                        </span>
                        <span className="text-[10px] font-mono text-muted-foreground/40">
                          {idx + 1}.0_XP
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-black text-foreground uppercase group-hover:text-primary transition-colors mb-1 tracking-tight">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
                        {exp.company}
                      </p>
                    </div>

                    {/* Metadata */}
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground/60">
                        <Calendar size={12} className="text-primary/60" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground/60">
                        <MapPin size={12} className="text-primary/60" />
                        {exp.location}
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed text-muted-foreground/80 mb-8">
                      {exp.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 bg-primary/5 border border-primary/20 rounded-full text-[10px] font-mono text-primary uppercase font-bold tracking-widest"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Corner Detail */}
                    <div className="absolute bottom-2 right-2 opacity-10 group-hover:opacity-30 transition-opacity">
                      <ExternalLink size={16} />
                    </div>
                  </div>
                </div>

                {/* Empty Side (For Layout Balance on Desktop) */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </SectionLayout>
      {/* Finishing Texture */}
      <div className="absolute inset-0 bg-radial-gradient(circle at 50% 50%, rgba(var(--primary), 0.02), transparent) pointer-events-none" />
    </section>
  );
}
