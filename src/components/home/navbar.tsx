/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Outfit } from "next/font/google";

const uniqueFont = Outfit({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-1/2 -translate-x-1/2 z-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isScrolled
          ? "top-6 w-[90%] max-w-5xl bg-background/60 backdrop-blur-2xl py-2 px-6 border border-border/50 shadow-md rounded-full"
          : "top-0 w-full bg-transparent py-6 px-4 border-transparent shadow-none rounded-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between overflow-hidden">
        
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
          }}
          className={`group flex items-center gap-5 ${uniqueFont.className}`}
        >
          <div className="relative w-10 h-10 flex items-center justify-center">
            {/* Architectural Crosshairs */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-1 bg-muted-foreground/40 group-hover:h-2 group-hover:bg-primary transition-all duration-500" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-1 bg-muted-foreground/40 group-hover:h-2 group-hover:bg-primary transition-all duration-500" />
            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-px w-1 bg-muted-foreground/40 group-hover:w-2 group-hover:bg-primary transition-all duration-500" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-px w-1 bg-muted-foreground/40 group-hover:w-2 group-hover:bg-primary transition-all duration-500" />

            {/* Rotating Frames */}
            <div className="absolute inset-2 border border-border/40 rounded-md group-hover:border-primary/50 transition-all duration-500 group-hover:rotate-90 group-hover:scale-110" />
            <div className="absolute inset-2 border border-border/20 rounded-md rotate-45 group-hover:border-sidebar-primary/50 transition-all duration-700 delay-100 group-hover:rotate-135" />
            
            {/* Kinetic Core */}
            <div className="relative w-1.5 h-1.5 bg-foreground rounded-full group-hover:bg-primary transition-all duration-500">
               <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-0 group-hover:opacity-100" />
               <div className="absolute -inset-1 border border-primary/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-base font-black tracking-[0.4em] uppercase text-foreground group-hover:text-primary transition-colors duration-500 leading-none">
              Nurulla
            </span>
            <span className="text-[0.45rem] font-bold tracking-[0.5em] uppercase text-muted-foreground group-hover:text-foreground transition-colors duration-500 mt-1">
              Creative Engineer
            </span>
          </div>
        </Link>

        {/* Minimal Nav */}
        <nav className={`hidden md:flex items-center gap-12 ${uniqueFont.className}`}>
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
            href="/Nurulla-Hasan-CV.pdf"
            className="relative group px-6 py-1 overflow-hidden border border-border/60 hover:border-primary/50 transition-all duration-700 glass-card rounded-full"
          >
            {/* Iridescent Shifting Background */}
            <div className="absolute inset-0 bg-linear-to-r from-destructive/10 via-primary/10 to-sidebar-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-shimmer scale-150" />
            
            <span className="relative z-10 text-[0.65rem] font-bold tracking-[0.25em] text-foreground/80 group-hover:text-primary uppercase transition-colors duration-500">
              Resume
            </span>

            {/* Glowing Edge on Hover */}
            <div className="absolute inset-0 border border-transparent group-hover:border-primary/30 transition-all duration-500" />
            
            {/* Internal Light Streak */}
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </a>
        </nav>

        {/* Mobile Menu Toggle (Abstract) */}
        <button className="md:hidden group flex flex-col items-end gap-1.5 p-2 bg-muted/50 rounded-lg border border-border/40 glass-card">
          <span className="w-6 h-px bg-foreground group-hover:bg-primary transition-all duration-300"></span>
          <span className="w-3 h-px bg-muted-foreground group-hover:w-6 group-hover:bg-sidebar-primary transition-all duration-300"></span>
        </button>
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
    </header>
  );
}
