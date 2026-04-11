"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import SectionLayout from "../layout/section-layout";


export default function Hero() {
  return (
    <>
      <main
        id="home"
        className="relative min-h-screen w-full bg-transparent overflow-hidden"
      >
        {/* ========================= */}
        {/* Abstract Background Elements & Neon Walking Circles */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Huge Right Circle */}
          {/* <div className="absolute top-[50%] left-[92%] w-[60vw] h-[60vw] -translate-x-1/2 -translate-y-1/2 rotate-45">
             <svg className="w-full h-full" viewBox="0 0 1000 1000">
               <defs>
                 <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                   <stop offset="0%" style={{ stopColor: 'rgba(255, 100, 100, 0.5)' }} />
                   <stop offset="25%" style={{ stopColor: 'rgba(255, 255, 150, 0.5)' }} />
                   <stop offset="50%" style={{ stopColor: 'rgba(150, 255, 150, 0.5)' }} />
                   <stop offset="75%" style={{ stopColor: 'rgba(150, 255, 255, 0.5)' }} />
                   <stop offset="100%" style={{ stopColor: 'rgba(150, 150, 255, 0.5)' }} />
                 </linearGradient>
               </defs>
               <circle cx="500" cy="500" r="498" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />
               <circle cx="500" cy="500" r="498" fill="none" stroke="url(#grad1)" strokeWidth="2.5" className="walk-path-circle-1" strokeLinecap="round" pathLength="200" style={{ filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.4))' }} />
             </svg>
          </div> */}

          {/* Large Left Circle */}
          {/* <div className="absolute top-[0%] left-[0%] w-[38vw] h-[38vw] -translate-x-1/2 -translate-y-1/2 rotate-45">
             <svg className="w-full h-full rotate-180" viewBox="0 0 1000 1000">
               <defs>
                 <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
                   <stop offset="0%" style={{ stopColor: 'rgba(150, 150, 255, 0.5)' }} />
                   <stop offset="25%" style={{ stopColor: 'rgba(150, 255, 255, 0.5)' }} />
                   <stop offset="50%" style={{ stopColor: 'rgba(150, 255, 150, 0.5)' }} />
                   <stop offset="75%" style={{ stopColor: 'rgba(255, 255, 150, 0.5)' }} />
                   <stop offset="100%" style={{ stopColor: 'rgba(255, 100, 100, 0.5)' }} />
                 </linearGradient>
               </defs>
               <circle cx="500" cy="500" r="498" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />
               <circle cx="500" cy="500" r="498" fill="none" stroke="url(#grad2)" strokeWidth="2.5" className="walk-path-circle-2" strokeLinecap="round" pathLength="150" style={{ filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.4))' }} />
             </svg>
          </div> */}

          {/* Grain */}
          {/* <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" /> */}
        </div>
        <div
          className="hidden lg:block absolute left-0 right-0 top-[88%] h-px bg-border/30 anim-line-h z-0 overflow-hidden"
          style={{ animationDelay: "0.8s" }}
        >
          <div
            className="absolute top-0 h-px w-16 bg-linear-to-r from-transparent to-primary"
            style={{ animation: "walk-h 40s linear infinite 0s" }}
          />
        </div>
        {/* ========================= */}

        <SectionLayout className="relative z-10 mt-12 md:mt-20">
          <div className="anim-element flex items-center gap-4 mb-8 md:mb-12">
            <span className="w-8 md:w-12 h-px bg-border block" />
            <span className="text-[0.55rem] md:text-[0.65rem] font-medium tracking-[0.4em] text-muted-foreground uppercase">
              Portfolio &apos;26
            </span>
          </div>
          <h1
            className="anim-element relative z-10 font-display w-full leading-none group text-foreground"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="block text-[clamp(3.5rem,15vw,6.5rem)] lg:text-[clamp(5.5rem,8vw,10rem)] leading-[0.95] font-bold tracking-tighter uppercase w-full wrap-break-word">
              <span className="shimmer-text block w-full">Nurulla</span>
            </span>
            <span className="block text-[clamp(3.5rem,15vw,6.5rem)] lg:text-[clamp(5.5rem,8vw,10rem)] leading-[0.8] font-bold tracking-tight uppercase w-full wrap-break-word">
              <span className="outline-glitch block w-full" data-text="Hasan">
                Hasan
              </span>
            </span>
          </h1>
          <div
            className="anim-element mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-[1fr_1.2fr] gap-10 md:gap-12 items-start relative z-10 w-full"
            style={{ animationDelay: "0.2s" }}
          >
            <p className="text-[0.85rem] md:text-[0.95rem] font-light leading-relaxed text-muted-foreground max-w-full lg:max-w-sm">
              A minimalistic approach to engineering. Specializing in highly
              optimized, mathematically precise frontend experiences using the
              MERN stack. I build interfaces that feel alive, combining
              structural robustness with fluid motion.
            </p>

            <div className="flex flex-col gap-8 md:gap-10 items-start lg:border-l border-border/40 lg:pl-10 mt-4 lg:mt-0 w-full">
              {/* Expanded Micro-Stats / Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 md:gap-y-8 w-full max-w-full">
                <div className="flex flex-col gap-2">
                  <span className="text-[0.55rem] md:text-[0.6rem] tracking-[0.2em] text-muted-foreground uppercase flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />{" "}
                    Focus
                  </span>
                  <span className="text-[0.8rem] md:text-sm font-medium text-foreground/70 tracking-wide">
                    React / Next.js / UX
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-[0.55rem] md:text-[0.6rem] tracking-[0.2em] text-muted-foreground uppercase flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/80 animate-pulse" />{" "}
                    Status
                  </span>
                  <span className="text-[0.8rem] md:text-sm font-medium text-foreground/70 tracking-wide">
                    Available for Work
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-[0.55rem] md:text-[0.6rem] tracking-[0.2em] text-muted-foreground uppercase">
                    Experience
                  </span>
                  <span className="text-[1rem] md:text-[1.1rem] font-semibold text-foreground">
                    2+ Years
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-[0.55rem] md:text-[0.6rem] tracking-[0.2em] text-muted-foreground uppercase">
                    Projects Delivered
                  </span>
                  <span className="text-[1rem] md:text-[1.1rem] font-semibold text-foreground">
                    40+ Digital Assets
                  </span>
                </div>
              </div>

              <Link
                href="#projects"
                className="group flex items-center gap-4 border-b border-border/40 pb-2 hover:border-primary transition-colors"
              >
                <span className="text-[0.75rem] font-medium tracking-[0.2em] uppercase text-foreground group-hover:text-primary transition-colors">
                  Explore Ecosystem
                </span>
                <div className="relative overflow-hidden w-6 h-6 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            </div>
          </div>
        </SectionLayout>
      </main>
    </>
  );
}
