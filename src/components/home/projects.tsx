/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

import SectionLayout from "../layout/section-layout";
import Link from "next/link";

const SAVED_PROJECTS = [
  {
    id: "01",
    title: "Aether OS",
    description:
      "Architecting cloud-native interfaces with gesture-driven logic and low-latency virtual kernels. Designed for high-performance virtual environments.",
    tech: ["Next.js", "WebRTC", "Three.js"],
    image: "/projects/aether.png",
    links: { github: "#", demo: "#" },
    status: "v2.0_STABLE",
    year: "2024",
  },
  {
    id: "02",
    title: "Nexus Core",
    description:
      "High-performance orchestration for distributed data nodes with real-time 3D telemetry and low-latency orchestration pipelines.",
    tech: ["React", "D3.js", "GraphQL"],
    image: "/projects/nexus.png",
    links: { github: "#", demo: "#" },
    status: "PROD_READY",
    year: "2024",
  },
  {
    id: "03",
    title: "Spectral UI",
    description:
      "AI-synthesized design systems using semantic mathematical models for UI component generation. Focus on pixel-perfect architectural precision.",
    tech: ["OpenAI", "Framer", "TypeScript"],
    image: "/projects/spectral.png",
    links: { github: "#", demo: "#" },
    status: "BETA_TEST",
    year: "2023",
  },
  {
    id: "04",
    title: "Lumina Engine",
    description:
      "Physics-based web lighting engine implementing real-time ray-marching and caustics for immersive browser-based 3D simulations.",
    tech: ["GLSL", "WebGL", "WASM"],
    image: "/projects/lumina.png",
    links: { github: "#", demo: "#" },
    status: "EXPERIMENTAL",
    year: "2023",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen overflow-hidden bg-transparent"
    >
      <SectionLayout className="mt-12 md:mt-33">
        {/* Section Header - Synchronized with Experience/Skills */}
        <div className="mb-10 md:mb-16">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-6 md:w-12 h-px bg-border" />
            <span className="text-[0.55rem] md:text-[0.65rem] font-bold tracking-[0.3em] md:tracking-[0.4em] text-primary uppercase">
              02. Project_Vault
            </span>
          </div>

          <h2 className="relative text-[clamp(2.5rem,6vw,4rem)] leading-[0.85] font-bold tracking-tighter uppercase text-foreground group">
            <span className="block opacity-60 group-hover:opacity-100 transition-opacity duration-700">
              Refined Digital
            </span>
            <div className="relative mt-2 italic text-primary">
              Assets Showcase
            </div>
          </h2>
        </div>

        <div className="flex flex-col gap-24 md:gap-48">
          {SAVED_PROJECTS.map((project, index) => (
            <ProjectRow key={project.id} project={project} index={index} />
          ))}
        </div>
      </SectionLayout>
    </section>
  );
}

function ProjectRow({ project, index }: { project: any; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      className={`relative flex flex-col items-center gap-12 lg:gap-24 ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}
    >
      {/* 1. Perspective Viewport Frame */}
      <div className="w-full lg:w-1/2">
        <div className="relative group/viewport">
          {/* Blueprint markings */}
          <div className="absolute -top-4 -left-4 w-8 h-8 border-t border-l border-primary/40 opacity-40 group-hover/viewport:opacity-100 transition-opacity" />
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b border-r border-primary/40 opacity-40 group-hover/viewport:opacity-100 transition-opacity" />

          {/* Viewport Image */}
          <div className="relative aspect-video overflow-hidden bg-muted/20 border border-border/40 grayscale group-hover/viewport:grayscale-0 transition-all duration-1000">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover scale-105 group-hover/viewport:scale-100 transition-transform duration-1000"
            />

            {/* Scan Effects */}
            <div className="scan-line absolute inset-x-0 w-full opacity-10" />
          </div>

          {/* Coordinate HUD */}
          <div className="absolute -bottom-8 left-0 flex items-center gap-6 text-[0.45rem] font-mono text-primary/40 uppercase tracking-[0.2em]">
            <span>LOC: {index + 1} // 04</span>
            <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
            <span>{project.status}</span>
          </div>
        </div>
      </div>

      {/* 2. Architectural Data Section */}
      <div className="w-full lg:w-1/2">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-[0.6rem] font-mono font-bold text-primary opacity-40 uppercase tracking-[0.3em]">
              UNIT_{project.id} // {project.year}
            </span>
            <div className="w-12 h-px bg-primary/20" />
          </div>

          <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          <p className="text-sm leading-relaxed text-muted-foreground/80 max-w-md">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-2">
            {project.tech.map((t: string) => (
              <span
                key={t}
                className="px-3 py-1 bg-primary/5 border border-primary/20 rounded-full text-[10px] font-mono text-primary uppercase font-bold tracking-widest"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-8 mt-4">
            <a
              href="#"
              className="group/link flex items-center gap-4 text-[0.6rem] font-bold tracking-[0.4em] uppercase text-foreground hover:text-primary transition-all"
            >
              Analysis
              <div className="w-8 h-px bg-border group-hover/link:w-16 group-hover/link:bg-primary transition-all duration-500" />
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <div className="flex gap-4 opacity-40 hover:opacity-100 transition-opacity">
              <Link href={project.links.github}>
                <GithubIcon className="w-4 h-4 text-foreground hover:text-primary cursor-pointer transition-colors" />
              </Link>
              <Link href={project.links.demo}>
                <ExternalLink className="w-4 h-4 text-foreground hover:text-primary cursor-pointer transition-colors" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
