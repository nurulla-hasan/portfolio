/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { User, Cpu, Briefcase, FolderGit2, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";


const NAV_LINKS = [
  { href: "#about", label: "About", icon: User },
  { href: "#skills", label: "Skills", icon: Cpu },
  { href: "#experience", label: "Experience", icon: Briefcase },
  { href: "#projects", label: "Projects", icon: FolderGit2 },
  { href: "#contact", label: "Contact", icon: Mail },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleScroll();
    handleResize();
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          top: isScrolled ? (isMobile ? 0 : 20) : 0,
          width: isScrolled ? (isMobile ? "100%" : "65%") : "100%",
          paddingTop: isScrolled ? (isMobile ? 12 : 12) : (isMobile ? 14 : 20),
          paddingBottom: isScrolled ? (isMobile ? 12 : 12) : (isMobile ? 14 : 20),
          paddingLeft: isScrolled ? (isMobile ? 24 : 32) : (isMobile ? 24 : 40),
          paddingRight: isScrolled ? (isMobile ? 24 : 32) : (isMobile ? 24 : 40),
          borderRadius: isScrolled ? (isMobile ? 0 : 100) : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 25,
          mass: 1.2
        }}
        className={cn(
          "fixed left-0 right-0 mx-auto z-100 transition-colors duration-700 overflow-hidden",
          isScrolled
            ? "bg-background/60 border-border/50 shadow-2xl backdrop-blur-2xl"
            : "bg-transparent border-transparent shadow-none"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between overflow-hidden">
          
          {/* Abstract Minimal Logo */}
          <Link 
            href="#home" 
            onClick={(e) => {
              if ((window as any).lenis) {
                e.preventDefault();
                (window as any).lenis.scrollTo("#home", {
                  duration: 2.5,
                });
              }
              setIsMenuOpen(false);
            }}
          className="group flex items-center gap-3 md:gap-5"
          >
            <div className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
              {/* Architectural Crosshairs */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-1 bg-muted-foreground/40 group-hover:h-2 group-hover:bg-primary transition-all duration-500" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-1 bg-muted-foreground/40 group-hover:h-2 group-hover:bg-primary transition-all duration-500" />
              <div className="absolute left-0 top-1/2 -translate-y-1/2 h-px w-1 bg-muted-foreground/40 group-hover:w-2 group-hover:bg-primary transition-all duration-500" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 h-px w-1 bg-muted-foreground/40 group-hover:w-2 group-hover:bg-primary transition-all duration-500" />

              {/* Rotating Frames */}
              <div className="absolute inset-1.5 md:inset-2 border border-border/40 rounded-md group-hover:border-primary/50 transition-all duration-500 group-hover:rotate-90 group-hover:scale-110" />
              <div className="absolute inset-1.5 md:inset-2 border border-border/20 rounded-md rotate-45 group-hover:border-sidebar-primary/50 transition-all duration-700 delay-100 group-hover:rotate-135" />
              
              {/* Kinetic Core */}
              <div className="relative w-1 h-1 md:w-1.5 md:h-1.5 bg-foreground rounded-full group-hover:bg-primary transition-all duration-500">
                 <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-0 group-hover:opacity-100" />
                 <div className="absolute -inset-1 border border-primary/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm md:text-base font-black tracking-[0.3em] md:tracking-[0.4em] uppercase text-foreground group-hover:text-primary transition-colors duration-500 leading-none">
                Nurulla
              </span>
              <span className="text-[0.4rem] md:text-[0.45rem] font-bold tracking-[0.4em] md:tracking-[0.5em] uppercase text-muted-foreground group-hover:text-foreground transition-colors duration-500 mt-1">
                Creative Engineer
              </span>
            </div>
          </Link>

          {/* Minimal Nav */}
          <nav className="hidden md:flex items-center gap-12">
            <div className="flex items-center gap-10 border-r border-border/40 pr-12">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    if ((window as any).lenis) {
                      e.preventDefault();
                      (window as any).lenis.scrollTo(link.href, {
                        duration: 2.5, // Even slower and more elegant
                      });
                    }
                  }}
                  className="group relative py-2 overflow-hidden"
                >
                  <span className="text-[0.7rem] font-medium tracking-[0.2em] text-muted-foreground uppercase transition-all duration-500 group-hover:text-foreground group-hover:-translate-y-0.5 block">
                    {link.label}
                  </span>
                  {/* Neon Indicator */}
                  <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-primary to-sidebar-primary translate-x-[-105%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                </Link>
              ))}
            </div>

            <a
              href="/resume"
              className="relative group px-6 py-1 overflow-hidden border border-border/60 hover:border-primary/50 transition-all duration-700 glass-card rounded-full"
            >
              <div className="absolute inset-0 bg-linear-to-r from-destructive/10 via-primary/10 to-sidebar-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-shimmer scale-150" />
              <span className="relative z-10 text-[0.65rem] font-bold tracking-[0.25em] text-foreground/80 group-hover:text-primary uppercase transition-colors duration-500">
                Resume
              </span>
              <div className="absolute inset-0 border border-transparent group-hover:border-primary/30 transition-all duration-500" />
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden group relative z-110 flex flex-col items-end gap-1 p-2 transition-all duration-300 active:scale-95"
          >
            <span className={`h-px bg-foreground transition-all duration-300 ${isMenuOpen ? "w-5 rotate-45 translate-y-1.5 bg-primary" : "w-5"}`}></span>
            <span className={`w-3 h-px bg-muted-foreground transition-all duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}></span>
            <span className={`h-px bg-foreground transition-all duration-300 ${isMenuOpen ? "w-5 -rotate-45 -translate-y-0.5 bg-primary" : "w-2 group-hover:w-5"}`}></span>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-120 md:hidden"
          >
            {/* Backdrop with extreme blur */}
            <motion.div 
              initial={{ backdropFilter: "blur(0px)", backgroundColor: "rgba(0,0,0,0)" }}
              animate={{ backdropFilter: "blur(12px)", backgroundColor: "rgba(0,0,0,0.6)" }}
              exit={{ backdropFilter: "blur(0px)", backgroundColor: "rgba(0,0,0,0)" }}
              className="absolute inset-0"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Slide-in Panel */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 180, mass: 0.8 }}
              className="absolute right-0 top-0 h-full w-[85%] sm:w-112.5 bg-background/95 backdrop-blur-xl border-l border-border/50 shadow-[-30px_0_80px_rgba(0,0,0,0.4)] flex flex-col overflow-hidden"
            >
              {/* Architectural Pattern Background */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="absolute h-full w-px left-12 bg-foreground" />
                <div className="absolute h-full w-px left-24 bg-foreground" />
                <div className="absolute w-full h-px top-24 bg-foreground" />
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, var(--foreground) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
              </div>

              {/* Panel Header */}
              <div className="relative z-10 flex items-center justify-between p-8 md:p-10 border-b border-border/10">
                <div className="flex flex-col">
                  <span className="text-[0.6rem] font-black tracking-[0.5em] uppercase text-primary mb-1">Navigation</span>
                  <span className="text-[0.45rem] font-bold tracking-[0.3em] uppercase text-muted-foreground/60">System Version 2.0.4</span>
                </div>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="group relative w-12 h-12 flex items-center justify-center rounded-full border border-border/20 hover:border-primary/50 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <div className="relative w-4 h-4 text-foreground group-hover:text-primary transition-colors">
                    <span className="absolute top-1/2 left-0 w-full h-px bg-current rotate-45"></span>
                    <span className="absolute top-1/2 left-0 w-full h-px bg-current -rotate-45"></span>
                  </div>
                </button>
              </div>

              {/* Menu Links */}
              <nav className="relative z-10 flex-1 flex flex-col justify-center p-8 md:p-12 gap-6">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => {
                        if ((window as any).lenis) {
                          e.preventDefault();
                          (window as any).lenis.scrollTo(link.href, { duration: 2 });
                        }
                        setIsMenuOpen(false);
                      }}
                      className="group flex flex-col"
                    >
                      <div className="flex items-baseline gap-4">
                         <span className="text-[0.6rem] font-mono font-bold text-primary/40 group-hover:text-primary transition-colors duration-500">
                           0{i+1}_
                         </span>
                         <div className="flex items-center gap-6 overflow-hidden">
                           <span className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-muted-foreground group-hover:text-foreground transition-all duration-500 inline-block group-hover:translate-x-1">
                             {link.label}
                           </span>
                           <div className="h-px w-0 bg-primary group-hover:w-20 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                         </div>
                      </div>
                      <div className="mt-1 h-px w-full bg-border/10 overflow-hidden">
                        <div className="h-full w-full bg-linear-to-r from-primary/20 via-primary to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Panel Footer */}
              <div className="relative z-10 p-8 md:p-12 border-t border-border/10 bg-muted/5">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <a
                    href="/resume"
                    className="relative group flex items-center justify-center w-full py-5 rounded-2xl border border-primary/20 bg-primary/5 overflow-hidden transition-all duration-500"
                  >
                    <div className="absolute inset-0 bg-linear-to-r from-primary/10 via-primary/20 to-primary/10 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <span className="relative z-10 text-[0.7rem] font-black tracking-[0.4em] uppercase text-primary group-hover:text-foreground transition-colors">
                      Download_Resume.PDF
                    </span>
                  </a>
                  
                  <div className="mt-10 flex flex-col gap-3">
                    <div className="flex items-center gap-2 mb-2">
                       <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                       <span className="text-[0.55rem] font-black tracking-[0.3em] uppercase text-muted-foreground/80">Available for projects</span>
                    </div>
                     <span className="text-[0.5rem] font-bold tracking-[0.2em] text-muted-foreground/30 uppercase">© 2026 Crafted with precision_</span>
                  </div>
                </motion.div>
              </div>

              {/* Architectural accent */}
              <div className="absolute bottom-0 right-0 w-32 h-32 opacity-[0.05] pointer-events-none translate-x-12 translate-y-12">
                 <div className="absolute inset-0 border-20 border-primary rounded-full" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .glass-card {
          backdrop-filter: blur(15px);
          background: var(--border);
        }
        @keyframes shimmer-slow {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shimmer {
          background-size: 300% 100%;
          animation: shimmer-slow 15s linear infinite;
        }
      `}</style>
    </>
  );
}
