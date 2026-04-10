/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { User, Cpu, Briefcase, FolderGit2, Mail } from "lucide-react";


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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-1/2 -translate-x-1/2 z-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled
            ? "top-4 md:top-6 w-[95%] md:w-[90%] max-w-5xl bg-background/60 backdrop-blur-2xl py-1.5 md:py-2 px-4 md:px-6 border border-border/50 shadow-md rounded-full"
            : "top-0 w-full bg-transparent py-4 md:py-6 px-4 border-transparent shadow-none rounded-none"
        }`}
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
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-120 md:hidden transition-all duration-500 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        {/* Backdrop Backdrop */}
        <div 
          className="absolute inset-0 bg-background/40 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Slide-in Panel */}
        <div className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-background border-l border-border/40 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          
          {/* Panel Header */}
          <div className="flex items-center justify-between p-6 border-b border-border/20">
            <span className="text-[0.6rem] font-bold tracking-[0.4em] uppercase text-muted-foreground">Navigation</span>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-border/40 hover:bg-muted transition-colors"
            >
              <div className="relative w-4 h-4">
                <span className="absolute top-1/2 left-0 w-full h-px bg-foreground rotate-45"></span>
                <span className="absolute top-1/2 left-0 w-full h-px bg-foreground -rotate-45"></span>
              </div>
            </button>
          </div>

          {/* Menu Links */}
          <nav className="flex-1 flex flex-col p-8 gap-8">
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  if ((window as any).lenis) {
                    e.preventDefault();
                    (window as any).lenis.scrollTo(link.href, { duration: 2 });
                  }
                  setIsMenuOpen(false);
                }}
                className="group flex flex-col gap-1"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <span className="text-[0.55rem] font-bold tracking-[0.3em] text-primary">0{i+1}</span>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <link.icon className="w-6 h-6 text-primary/60 group-hover:text-primary transition-colors" />
                    <span className="text-2xl sm:text-3xl font-medium tracking-tight uppercase text-foreground group-hover:pl-2 transition-all duration-300">
                      {link.label}
                    </span>
                  </div>                  <div className="w-8 h-px bg-border group-hover:w-12 group-hover:bg-primary transition-all duration-300" />
                </div>
              </Link>
            ))}
          </nav>

          {/* Panel Footer */}
          <div className="p-8 border-t border-border/20 bg-muted/10">
            <a
              href="/resume"
              className="flex items-center justify-center w-full py-4 rounded-xl border border-primary/30 bg-primary/5 text-[0.7rem] font-bold tracking-[0.3em] uppercase text-primary hover:bg-primary hover:text-white transition-all duration-500"
            >
              Resume
            </a>
            <div className="mt-8 flex flex-col gap-2">
               <span className="text-[0.5rem] font-bold tracking-[0.2em] text-muted-foreground/40 uppercase">© 2026 Nurulla Hasan</span>
               <span className="text-[0.5rem] font-medium tracking-widest text-muted-foreground/30 uppercase">Built with Next.js & TypeScript</span>
            </div>
          </div>

          {/* Aesthetic background elements for panel */}
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-primary/5 to-transparent pointer-events-none" />
        </div>
      </div>

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
