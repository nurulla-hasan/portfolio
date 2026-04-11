/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { User, Cpu, Briefcase, FolderGit2, Mail, ArrowUpRight } from "lucide-react";
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

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    // Only handle internal hash links
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const targetElement = document.getElementById(targetId);
      
      const lenis = (window as any).lenis;
      if (targetElement && lenis) {
        lenis.scrollTo(targetElement, {
          offset: 0,
          duration: 1.5,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      } else if (targetElement) {
        // Fallback if lenis is not available
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
      
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          top: isScrolled ? (isMobile ? 0 : 20) : 0,
          width: isScrolled ? (isMobile ? "100%" : "65%") : "100%",
          paddingTop: isScrolled ? (isMobile ? 8 : 12) : (isMobile ? 10 : 20),
          paddingBottom: isScrolled ? (isMobile ? 8 : 12) : (isMobile ? 10 : 20),
          paddingLeft: isScrolled ? (isMobile ? 20 : 32) : (isMobile ? 20 : 40),
          paddingRight: isScrolled ? (isMobile ? 20 : 32) : (isMobile ? 20 : 40),
          borderRadius: isScrolled ? (isMobile ? 0 : 100) : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 25,
          mass: 1.2
        }}
        className={cn(
          "fixed left-0 right-0 mx-auto transition-colors duration-700 overflow-hidden",
          isMenuOpen ? "z-50" : "z-30",
          isScrolled
            ? "bg-background/60 border-border/50 shadow-2xl backdrop-blur-2xl"
            : "bg-transparent border-transparent shadow-none"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link 
            href="#home" 
            onClick={(e) => handleScroll(e, "#home")}
            className="group flex items-center gap-3 md:gap-5"
          >
            <div className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
              <div className="absolute inset-0 border border-border/40 rounded-md group-hover:border-primary/50 transition-all duration-500 group-hover:rotate-90 group-hover:scale-110" />
              <div className="relative w-1 h-1 md:w-1.5 md:h-1.5 bg-foreground rounded-full group-hover:bg-primary transition-all duration-500" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm md:text-base font-black tracking-[0.3em] uppercase leading-none">Nurulla</span>
              <span className="text-[0.4rem] font-bold tracking-[0.4em] uppercase text-muted-foreground mt-1">Creative Engineer</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="group relative py-2 text-[0.7rem] font-medium tracking-[0.2em] text-muted-foreground uppercase transition-all duration-500 hover:text-foreground"
              >
                {link.label}
                <div className="absolute bottom-0 left-0 w-full h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </Link>
            ))}
            <a href="/resume" className="px-5 py-1.5 rounded-full border bg-primary text-primary-foreground text-[0.65rem] font-bold tracking-[0.2em] uppercase hover:bg-transparent hover:text-primary transition-all duration-500 shadow-lg shadow-primary/20 hover:shadow-none">
              Resume
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          >
            <motion.span 
              animate={isMenuOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
              className={cn("w-6 h-[1.5px] transition-colors", isMenuOpen ? "bg-primary" : "bg-foreground")}
            />
            <motion.span 
              animate={isMenuOpen ? { opacity: 0, x: 10 } : { opacity: 1, x: 0 }}
              className="w-4 h-[1.5px] bg-foreground ml-auto"
            />
            <motion.span 
              animate={isMenuOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
              className={cn("w-6 h-[1.5px] transition-colors", isMenuOpen ? "bg-primary" : "bg-foreground")}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu - Liquid Sidebar */}
      <AnimatePresence>
        {isMenuOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="absolute inset-0 bg-background/20 backdrop-blur-sm"
            />

            {/* Sidebar */}
            <motion.div 
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 150 }}
              className="absolute right-0 top-0 h-full w-[75%] max-w-[320px] bg-background/90 backdrop-blur-3xl border-l border-border/40 shadow-[-20px_0_50px_rgba(0,0,0,0.1)] flex flex-col"
            >
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `radial-gradient(var(--foreground) 1px, transparent 1px)`, backgroundSize: '20px 20px' }} />
              
              <div className="relative z-10 flex-1 flex flex-col justify-center px-8 gap-6 pt-20">
                <span className="text-[0.6rem] font-bold tracking-[0.5em] uppercase text-primary mb-2">Navigation</span>
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => handleScroll(e, link.href)}
                      className="group flex items-center gap-4 py-2"
                    >
                      <div className="w-10 h-10 rounded-2xl bg-muted/30 border border-border/20 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-500">
                        <link.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[0.55rem] font-mono font-bold text-primary/40 uppercase tracking-widest leading-none mb-1">Step_0{i+1}</span>
                        <span className="text-xl font-bold tracking-tight uppercase text-foreground/80 group-hover:text-primary transition-colors">{link.label}</span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Info Section */}
              <div className="relative z-10 p-8 border-t border-border/10 bg-muted/10">
                <div className="flex flex-col gap-6">
                  <a href="/resume" className="flex items-center justify-between p-4 rounded-2xl bg-foreground text-background transition-all hover:scale-[1.02] active:scale-95">
                    <span className="text-[0.6rem] font-black uppercase tracking-[0.2em]">Resume</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  
                  <div className="flex justify-between items-center px-2">
                    <div className="flex gap-5">
                      <span className="text-[0.6rem] font-bold text-muted-foreground hover:text-primary transition-colors cursor-pointer">GH</span>
                      <span className="text-[0.6rem] font-bold text-muted-foreground hover:text-primary transition-colors cursor-pointer">LI</span>
                      <span className="text-[0.6rem] font-bold text-muted-foreground hover:text-primary transition-colors cursor-pointer">X</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <span className="text-[0.5rem] font-bold text-muted-foreground/40 uppercase tracking-tighter">Live</span>
                       <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .glass-card {
          backdrop-filter: blur(15px);
          background: var(--border);
        }
      `}</style>
    </>
  );
}
