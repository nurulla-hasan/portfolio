"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Outfit } from "next/font/google";

const uniqueFont = Outfit({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

export default function Hero() {
  return (
    <>
      <style suppressHydrationWarning>{`
        @keyframes line-draw {
          from { transform: scaleY(0); }
          to { transform: scaleY(1); }
        }
        @keyframes line-draw-h {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes fade-slide {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes walk-v {
          0% { top: -20%; }
          100% { top: 120%; }
        }
        @keyframes walk-h {
          0% { left: -20%; }
          100% { left: 120%; }
        }
        @keyframes text-shimmer-subtle {
          0% { background-position: -200% 50%; }
          100% { background-position: 200% 50%; }
        }
        @keyframes blink-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.8; }
        }
        @keyframes horror-flicker {
          0%, 100% { opacity: 1; }
          32% { opacity: 1; }
          33% { opacity: 0; }
          34% { opacity: 0.8; }
          35% { opacity: 0.2; }
          36% { opacity: 1; }
          70% { opacity: 1; }
          71% { opacity: 0.5; }
          72% { opacity: 1; }
        }
        @keyframes svg-walk-circle {
          from { stroke-dashoffset: 100; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes svg-walk-circle-reverse {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: 100; }
        }
        @keyframes slow-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .anim-line {
          transform-origin: top;
          animation: line-draw 2.5s cubic-bezier(0.77, 0, 0.175, 1) forwards;
        }
        .anim-line-h {
          transform-origin: left;
          animation: line-draw-h 2.5s cubic-bezier(0.77, 0, 0.175, 1) forwards;
        }
        .anim-element {
          opacity: 0;
          animation: fade-slide 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes cyber-glitch-1 {
          0% { clip-path: inset(20% 0 80% 0); transform: translate(-2px, 1px); }
          20% { clip-path: inset(60% 0 10% 0); transform: translate(2px, -1px); }
          40% { clip-path: inset(40% 0 50% 0); transform: translate(-2px, 2px); }
          60% { clip-path: inset(80% 0 5% 0); transform: translate(2px, -2px); }
          80% { clip-path: inset(10% 0 70% 0); transform: translate(-1px, 1px); }
          100% { clip-path: inset(30% 0 50% 0); transform: translate(1px, -1px); }
        }

        .shimmer-text {
          background: linear-gradient(
            90deg,
            var(--primary) 0%,
            var(--sidebar-primary) 25%,
            var(--foreground) 50%,
            var(--sidebar-primary) 75%,
            var(--primary) 100%
          );
          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: text-shimmer-subtle 30s linear infinite;
        }

        .outline-glitch {
          color: transparent;
          -webkit-text-stroke: 1.5px var(--border);
          position: relative;
        }

        .outline-glitch::before,
        .outline-glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          color: transparent; 
          opacity: 0;
          pointer-events: none;
        }

        .outline-glitch::before {
          opacity: 1;
          animation: cyber-glitch-1 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
          -webkit-text-stroke: 2px var(--primary);
          z-index: 10;
        }
        
        .outline-glitch::after {
          opacity: 1;
          animation: cyber-glitch-1 4s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse infinite;
          -webkit-text-stroke: 2px var(--sidebar-primary);
          z-index: 10;
        }

        .walk-path-circle-1 {
          stroke-dasharray: 4 100;
          animation: svg-walk-circle 30s linear infinite;
        }
        .walk-path-circle-2 {
          stroke-dasharray: 3 100;
          animation: svg-walk-circle-reverse 25s linear infinite;
        }
        .animate-slow-rotate {
          animation: slow-rotate 60s linear infinite;
        }
      `}</style>
      <main id="home" className="relative flex h-screen min-h-175 w-full items-center bg-transparent overflow-hidden selection:bg-primary/20">
        
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

          {/* Abstract Architectural Mesh (Left-Center) */}
          {/* <div className="absolute top-[53.5%] left-[22%] w-[35vw] h-[35vw] -translate-x-1/2 -translate-y-1/2 opacity-60 pointer-events-none">
            <svg viewBox="0 0 400 400" className="w-full h-full animate-slow-rotate">
              <defs>
                <linearGradient id="mesh-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#818cf8" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              <g fill="none" stroke="url(#mesh-grad)" strokeWidth="1" style={{ filter: 'drop-shadow(0 0 8px rgba(34,211,238,0.4))' }}>
                {[...Array(12)].map((_, i) => {
                  const x = (200 + 150 * Math.cos(i * Math.PI / 6)).toFixed(3);
                  const y = (200 + 150 * Math.sin(i * Math.PI / 6)).toFixed(3);
                  return <path key={i} d={`M ${x},${y} L 200,200`} />;
                })}
                <circle cx="200" cy="200" r="152" strokeDasharray="10 20" />
                <circle cx="200" cy="200" r="100" />
                <path d="M 50,200 L 350,200 M 200,50 L 200,350" strokeDasharray="5 5" opacity="0.6" />
                <rect x="100" y="100" width="200" height="200" strokeDasharray="15 15" transform="rotate(25 200 200)" />
                <circle cx="200" cy="200" r="5" fill="#22d3ee" />
                <rect x="195" y="45" width="10" height="10" stroke="#22d3ee" strokeWidth="0.5" />
                <rect x="195" y="345" width="10" height="10" stroke="#818cf8" strokeWidth="0.5" />
              </g>
            </svg>
          </div> */}
          
          {/* Grain */ }
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
        </div>

          {/* Horizontal intersection lines */}
        {/* <div className="hidden lg:block absolute left-0 right-0 top-[12%] h-px bg-border/30 anim-line-h z-0 overflow-hidden" style={{ animationDelay: '0.6s' }}>
          <div className="absolute top-0 h-px w-16 bg-linear-to-r from-transparent to-primary" style={{ animation: 'walk-h 40s linear infinite 2s' }} />
        </div> */}
        
        <div className="hidden lg:block absolute left-0 right-0 top-[88%] h-px bg-border/30 anim-line-h z-0 overflow-hidden" style={{ animationDelay: '0.8s' }}>
          <div className="absolute top-0 h-px w-16 bg-linear-to-r from-transparent to-primary" style={{ animation: 'walk-h 40s linear infinite 0s' }} />
        </div>

        <section className="max-w-7xl mx-auto px-8 md:px-16 relative z-10 w-full mt-20 sm:mt-0">
          <div className="w-full">
            
            <div className="anim-element flex items-center gap-4 mb-8 md:mb-12">
              <span className="w-8 md:w-12 h-px bg-border block" />
              <span className="text-[0.55rem] md:text-[0.65rem] font-medium tracking-[0.4em] text-muted-foreground uppercase">
                Portfolio &apos;26
              </span>
            </div>

            <h1 
              className={`anim-element relative z-10 ${uniqueFont.className} w-full leading-none group`} 
              style={{ animationDelay: '0.1s' }}
            >
              <span className="block text-[clamp(4.5rem,12vw,6.5rem)] lg:text-[clamp(5.5rem,8vw,10rem)] leading-[0.95] font-extrabold tracking-tighter uppercase w-full wrap-break-word">
                <span className="shimmer-text block w-full">Nurulla</span>
              </span>
              <span className="block text-[clamp(4.5rem,12vw,6.5rem)] lg:text-[clamp(5.5rem,8vw,10rem)] leading-[0.8] font-bold tracking-tight uppercase w-full wrap-break-word">
                <span className="outline-glitch block w-full" data-text="Hasan">Hasan</span>
              </span>
            </h1>

            <div className="anim-element mt-10 md:mt-12 grid lg:grid-cols-[1fr_1.2fr] gap-10 md:gap-12 items-start relative z-10 w-full" style={{ animationDelay: '0.2s' }}>
              <p className="text-[0.85rem] md:text-[0.95rem] font-light leading-relaxed text-muted-foreground max-w-full lg:max-w-sm">
                A minimalistic approach to engineering. Specializing in highly optimized, mathematically precise frontend experiences using the MERN stack. I build interfaces that feel alive, combining structural robustness with fluid motion.
              </p>

              <div className="flex flex-col gap-8 md:gap-10 items-start lg:border-l border-border/40 lg:pl-10 mt-4 lg:mt-0 w-full">
                {/* Expanded Micro-Stats / Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 md:gap-y-8 w-full max-w-full">
                  <div className="flex flex-col gap-2">
                    <span className="text-[0.55rem] md:text-[0.6rem] tracking-[0.2em] text-muted-foreground uppercase flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> Focus
                    </span>
                    <span className="text-[0.8rem] md:text-sm font-medium text-foreground/70 tracking-wide">React / Next.js / UX</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-[0.55rem] md:text-[0.6rem] tracking-[0.2em] text-muted-foreground uppercase flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/80 animate-pulse" /> Status
                    </span>
                    <span className="text-[0.8rem] md:text-sm font-medium text-foreground/70 tracking-wide">Available for Work</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-[0.55rem] md:text-[0.6rem] tracking-[0.2em] text-muted-foreground uppercase">Experience</span>
                    <span className="text-[1rem] md:text-[1.1rem] font-semibold text-foreground">2+ Years</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-[0.55rem] md:text-[0.6rem] tracking-[0.2em] text-muted-foreground uppercase">Projects Delivered</span>
                    <span className="text-[1rem] md:text-[1.1rem] font-semibold text-foreground">40+ Digital Assets</span>
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

          </div>
        </section>

        {/* Abstract Scroll Indicator */}
        {/* <div className="absolute right-8 md:right-14 bottom-0 anim-element" style={{ animationDelay: '0.4s' }}>
          <div className="flex flex-col items-center gap-6 pb-12">
            <span className="text-[0.65rem] md:text-[0.7rem] font-bold tracking-[0.4em] uppercase text-muted-foreground [writing-mode:vertical-rl] transform rotate-180 transition-colors hover:text-foreground cursor-default">
              Scroll
            </span>
            <div className="w-px h-16 bg-gradient-to-b from-border to-transparent" />
          </div>
        </div> */}

        {/* Left Side Technical Metadata & Socials */}
        {/* <div className="absolute left-8 md:left-14 bottom-0 anim-element hidden sm:block" style={{ animationDelay: '0.5s' }}>
          <div className="flex flex-col items-start gap-10 pb-12">
            
            <div className="flex flex-col gap-8 mb-4">
              <a href="https://github.com/nurullahasan" target="_blank" rel="noopener noreferrer" className="group relative">
                <span className="text-[0.7rem] font-bold tracking-[0.25em] uppercase text-muted-foreground/80 group-hover:text-primary transition-all [writing-mode:vertical-rl] transform rotate-180">
                  GitHub
                </span>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="group relative">
                <span className="text-[0.7rem] font-bold tracking-[0.25em] uppercase text-muted-foreground/80 group-hover:text-primary transition-all [writing-mode:vertical-rl] transform rotate-180">
                  LinkedIn
                </span>
              </a>
            </div>

            <div className="flex flex-col items-start gap-6">
              <div className="w-px h-16 bg-gradient-to-t from-border to-transparent" />
              <div className="flex flex-col gap-4">
                <span className="text-[0.6rem] font-black tracking-[0.4em] uppercase text-muted-foreground [writing-mode:vertical-rl] transform rotate-180 mb-2">
                  Dhaka, Bangladesh
                </span>
                <a href="mailto:nurullahasan.dev@gmail.com" className="group/mail relative cursor-pointer">
                  <span className="text-[0.55rem] font-bold tracking-[0.25em] uppercase text-muted-foreground group-hover/mail:text-primary transition-all [writing-mode:vertical-rl] transform rotate-180">
                    nurullahasan.dev@gmail.com
                  </span>
                </a>
              </div>
            </div>

          </div>
        </div> */}
      </main>
    </>
  );
}
