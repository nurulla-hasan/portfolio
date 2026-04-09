import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Oswald } from "next/font/google";

const uniqueFont = Oswald({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

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
        @keyframes svg-walk-circle {
          from { stroke-dashoffset: 100; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes svg-walk-circle-reverse {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: 100; }
        }

        .anim-line {
          transform-origin: top;
          animation: line-draw 1.5s cubic-bezier(0.77, 0, 0.175, 1) forwards;
        }
        .anim-line-h {
          transform-origin: left;
          animation: line-draw-h 1.5s cubic-bezier(0.77, 0, 0.175, 1) forwards;
        }
        .anim-element {
          opacity: 0;
          animation: fade-slide 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .shimmer-text {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 0.9) 35%,
            rgba(34, 211, 238, 0.8) 50%,
            rgba(255, 255, 255, 0.9) 65%,
            rgba(255, 255, 255, 1) 100%
          );
          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: text-shimmer-subtle 7s ease-in-out infinite;
        }

        .outline-text {
          color: transparent;
          -webkit-text-stroke: 2px rgba(255, 255, 255, 0.8);
          position: relative;
        }
        .outline-text::after {
          /* Add a tiny subtle glow to the outline */
          content: 'Hasan.';
          position: absolute;
          left: 0;
          top: 0;
          color: transparent;
          -webkit-text-stroke: 2px rgba(34, 211, 238, 0.4);
          filter: blur(8px);
          z-index: -1;
        }

        .walk-path-circle-1 {
          stroke-dasharray: 2.5 100;
          animation: svg-walk-circle 15s linear infinite;
        }
        .walk-path-circle-2 {
          stroke-dasharray: 2 100;
          animation: svg-walk-circle-reverse 12s linear infinite;
        }
      `}</style>

      <main className="relative flex min-h-screen w-full items-center bg-[#0a0a0a] overflow-hidden selection:bg-white/20">
        
        {/* Abstract Background Elements & Neon Walking Circles */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Huge Right Circle */}
          <div className="absolute top-[50%] left-[80%] w-[60vw] h-[60vw] -translate-x-1/2 -translate-y-1/2">
             <svg className="w-full h-full" viewBox="0 0 1000 1000">
               <circle cx="500" cy="500" r="498" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
               <circle cx="500" cy="500" r="498" fill="none" stroke="#22d3ee" strokeWidth="1.5" className="walk-path-circle-1" strokeLinecap="round" pathLength="100" style={{ filter: 'drop-shadow(0 0 10px rgba(34,211,238,0.7))' }} />
             </svg>
          </div>
          
          {/* Huge Left Circle */}
          <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] -translate-x-1/2 -translate-y-1/2">
             <svg className="w-full h-full rotate-180" viewBox="0 0 1000 1000">
               <circle cx="500" cy="500" r="498" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
               <circle cx="500" cy="500" r="498" fill="none" stroke="#818cf8" strokeWidth="1.5" className="walk-path-circle-2" strokeLinecap="round" pathLength="100" style={{ filter: 'drop-shadow(0 0 10px rgba(129,140,248,0.7))' }} />
             </svg>
          </div>
          
          {/* Grain */ }
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
        </div>

        {/* Architectural grid lines with traveling CYAN light beams */}
        <div className="hidden lg:block absolute left-24 top-0 bottom-0 w-px bg-white/3 anim-line z-0 overflow-hidden">
          <div className="absolute left-0 w-px h-37.5 bg-linear-to-b from-transparent via-cyan-400/90 to-transparent blur-[1px] shadow-[0_0_10px_rgba(34,211,238,0.5)]" style={{ animation: 'walk-v 5s linear infinite' }} />
        </div>
        
        <div className="hidden lg:block absolute left-[40%] top-0 bottom-0 w-px bg-white/3 anim-line z-0 overflow-hidden" style={{ animationDelay: '0.2s' }}>
          <div className="absolute left-0 w-px h-62.5 bg-linear-to-b from-transparent via-indigo-400/80 to-transparent blur-[1px] shadow-[0_0_10px_rgba(129,140,248,0.5)]" style={{ animation: 'walk-v 7s linear infinite 1.5s' }} />
        </div>

        <div className="hidden lg:block absolute right-32 top-0 bottom-0 w-px bg-white/3 anim-line z-0 overflow-hidden" style={{ animationDelay: '0.4s' }}>
          <div className="absolute left-0 w-px h-50 bg-linear-to-b from-transparent via-cyan-300/80 to-transparent blur-[1px] shadow-[0_0_8px_rgba(103,232,249,0.5)]" style={{ animation: 'walk-v 6s linear infinite 3s' }} />
        </div>
        
        {/* Horizontal intersection lines */}
        <div className="hidden lg:block absolute left-0 right-0 top-[25%] h-px bg-white/3 anim-line-h z-0 overflow-hidden" style={{ animationDelay: '0.6s' }}>
          <div className="absolute top-0 h-px w-50 bg-linear-to-r from-transparent via-cyan-400/90 to-transparent blur-[1px] shadow-[0_0_10px_rgba(34,211,238,0.5)]" style={{ animation: 'walk-h 8s linear infinite 2s' }} />
        </div>
        
        <div className="hidden lg:block absolute left-0 right-0 top-[75%] h-px bg-white/3 anim-line-h z-0 overflow-hidden" style={{ animationDelay: '0.8s' }}>
          <div className="absolute top-0 h-px w-75 bg-linear-to-r from-transparent via-indigo-300/80 to-transparent blur-[1px]" style={{ animation: 'walk-h 10s linear infinite 0s' }} />
        </div>

        {/* Floating crosshair markers (Micro details) */}
        <div className="absolute left-[calc(40%-4px)] top-[25%] w-2 h-2 text-white/30 text-[10px] items-center justify-center hidden lg:flex font-mono" style={{ animation: 'blink-slow 4s ease-in-out infinite' }}>+</div>
        <div className="absolute right-31 top-[75%] w-2 h-2 text-white/30 text-[10px] items-center justify-center hidden lg:flex font-mono" style={{ animation: 'blink-slow 5s ease-in-out infinite 1s' }}>+</div>

        <section className="container mx-auto px-8 md:px-16 relative z-10 w-full mt-20 sm:mt-0">
          <div className="max-w-5xl lg:ml-[calc(40%-4rem)]">
            
            <div className="anim-element flex items-center gap-4 mb-8 md:mb-12">
              <span className="w-8 md:w-12 h-px bg-white/20 block" />
              <span className="text-[0.55rem] md:text-[0.65rem] font-medium tracking-[0.4em] text-white/40 uppercase">
                Portfolio &apos;26
              </span>
            </div>

            <h1 className={`anim-element relative z-10 ${uniqueFont.className} w-full`} style={{ animationDelay: '0.1s' }}>
              <span className="block text-[clamp(2.5rem,10vw,5rem)] lg:text-[clamp(4.5rem,8vw,9rem)] leading-[0.95] font-bold tracking-tight text-white mb-2 md:mb-4 w-full wrap-break-word">
                <span className="shimmer-text drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] uppercase block w-full">Nurulla</span>
              </span>
              <span className="block text-[clamp(2.5rem,10vw,5rem)] lg:text-[clamp(4.5rem,8vw,9rem)] leading-[0.9] font-medium tracking-wide text-white w-full wrap-break-word">
                <span className="outline-text uppercase block w-full">Hasan.</span>
              </span>
            </h1>

            <div className="anim-element mt-10 md:mt-12 grid lg:grid-cols-[1fr_1.2fr] gap-10 md:gap-12 items-start relative z-10 w-full" style={{ animationDelay: '0.2s' }}>
              <p className="text-[0.85rem] md:text-[0.95rem] font-light leading-relaxed text-white/40 max-w-full lg:max-w-sm">
                A minimalistic approach to engineering. Specializing in highly optimized, mathematically precise frontend experiences using the MERN stack. I build interfaces that feel alive, combining structural robustness with fluid motion.
              </p>

              <div className="flex flex-col gap-8 md:gap-10 items-start lg:border-l border-white/5 lg:pl-10 mt-4 lg:mt-0 w-full">
                {/* Expanded Micro-Stats / Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 md:gap-y-8 w-full max-w-full">
                  <div className="flex flex-col gap-2">
                    <span className="text-[0.55rem] md:text-[0.6rem] tracking-[0.2em] text-white/30 uppercase flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" /> Focus
                    </span>
                    <span className="text-[0.8rem] md:text-sm font-medium text-white/70 tracking-wide">React / Next.js / UX</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-[0.55rem] md:text-[0.6rem] tracking-[0.2em] text-white/30 uppercase flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" /> Status
                    </span>
                    <span className="text-[0.8rem] md:text-sm font-medium text-white/70 tracking-wide">Available for Work</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-[0.55rem] md:text-[0.6rem] tracking-[0.2em] text-white/30 uppercase">Experience</span>
                    <span className="text-[1rem] md:text-[1.1rem] font-semibold text-white/90">2+ Years</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-[0.55rem] md:text-[0.6rem] tracking-[0.2em] text-white/30 uppercase">Projects Delivered</span>
                    <span className="text-[1rem] md:text-[1.1rem] font-semibold text-white/90">40+ Digital Assets</span>
                  </div>
                </div>
                
                <Link 
                  href="#projects" 
                  className="group flex items-center gap-4 border-b border-white/20 pb-2 hover:border-cyan-400 transition-colors"
                >
                  <span className="text-[0.75rem] font-medium tracking-[0.2em] uppercase text-white group-hover:text-cyan-300 transition-colors">
                    Explore Ecosystem
                  </span>
                  <div className="relative overflow-hidden w-6 h-6 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-white/50 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* Abstract Scroll Indicator */}
        <div className="absolute right-8 md:right-16 bottom-0 anim-element" style={{ animationDelay: '0.4s' }}>
          <div className="flex flex-col items-center gap-4 pb-12">
            <span className="text-[0.55rem] font-medium tracking-[0.3em] uppercase text-white/30 rotate-90 origin-bottom translate-y-6">
              Scroll
            </span>
            <div className="w-px h-24 bg-linear-to-t from-white/20 to-transparent" />
          </div>
        </div>

      </main>
    </>
  );
}
