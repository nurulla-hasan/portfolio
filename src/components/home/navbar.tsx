"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Outfit } from "next/font/google";

const uniqueFont = Outfit({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const NAV_LINKS = [
  { href: "#about", label: "01. About" },
  { href: "#projects", label: "02. Work" },
  { href: "#contact", label: "03. Contact" },
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
      className={`fixed top-0 left-0 w-full z-100 transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${
        isScrolled
          ? "bg-black/60 backdrop-blur-2xl border-b border-white/5 py-4"
          : "bg-transparent py-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-16 flex items-center justify-between overflow-hidden">
        
        {/* Abstract Minimal Logo */}
        <Link href="/" className={`group flex items-center gap-5 ${uniqueFont.className}`}>
          <div className="relative w-10 h-10 flex items-center justify-center">
            {/* Architectural Crosshairs */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-1 bg-white/40 group-hover:h-2 group-hover:bg-cyan-400 transition-all duration-500" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-1 bg-white/40 group-hover:h-2 group-hover:bg-cyan-400 transition-all duration-500" />
            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-px w-1 bg-white/40 group-hover:w-2 group-hover:bg-cyan-400 transition-all duration-500" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-px w-1 bg-white/40 group-hover:w-2 group-hover:bg-cyan-400 transition-all duration-500" />

            {/* Rotating Frames */}
            <div className="absolute inset-2 border border-white/20 rounded-md group-hover:border-cyan-400/50 transition-all duration-500 group-hover:rotate-90 group-hover:scale-110" />
            <div className="absolute inset-2 border border-white/10 rounded-md rotate-45 group-hover:border-indigo-400/50 transition-all duration-700 delay-100 group-hover:rotate-135" />
            
            {/* Kinetic Core */}
            <div className="relative w-1.5 h-1.5 bg-white rounded-full group-hover:bg-cyan-400 transition-all duration-500">
               <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping opacity-0 group-hover:opacity-100" />
               <div className="absolute -inset-1 border border-cyan-400/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-base font-black tracking-[0.4em] uppercase text-white group-hover:text-cyan-400 transition-colors duration-500 leading-none">
              Nurulla
            </span>
            <span className="text-[0.45rem] font-bold tracking-[0.5em] uppercase text-white/30 group-hover:text-white/60 transition-colors duration-500 mt-1">
              Creative Engineer
            </span>
          </div>
        </Link>

        {/* Minimal Nav */}
        <nav className={`hidden md:flex items-center gap-12 ${uniqueFont.className}`}>
          <div className="flex items-center gap-10 border-r border-white/5 pr-12">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group relative py-2 overflow-hidden"
              >
                <span className="text-[0.7rem] font-medium tracking-[0.2em] text-white/40 uppercase transition-all duration-500 group-hover:text-white group-hover:-translate-y-0.5 block">
                  {link.label}
                </span>
                {/* Neon Indicator */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-cyan-500 to-indigo-500 translate-x-[-105%] group-hover:translate-x-0 transition-transform duration-500 ease-out shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
              </Link>
            ))}
          </div>

          <a
            href="/Nurulla-Hasan-CV.pdf"
            className="relative group px-8 py-2.5 overflow-hidden border border-white/20 transition-all duration-700 glass-card"
          >
            {/* Iridescent Shifting Background */}
            <div className="absolute inset-0 bg-linear-to-r from-red-500/10 via-yellow-500/10 to-blue-500/10 opacity-30 group-hover:opacity-100 transition-opacity duration-700 animate-shimmer scale-150" />
            
            <span className="relative z-10 text-[0.7rem] font-black tracking-[0.3em] text-white group-hover:text-white uppercase transition-colors duration-500">
              Resume
            </span>

            {/* Glowing Edge on Hover */}
            <div className="absolute inset-0 border border-white/0 group-hover:border-white/40 transition-all duration-500" />
            
            {/* Internal Light Streak */}
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </a>
        </nav>

        {/* Mobile Menu Toggle (Abstract) */}
        <button className="md:hidden group flex flex-col items-end gap-1.5 p-2 bg-white/5 rounded-lg border border-white/10 glass-card">
          <span className="w-6 h-px bg-white group-hover:bg-cyan-400 transition-all duration-300"></span>
          <span className="w-3 h-px bg-white/60 group-hover:w-6 group-hover:bg-indigo-400 transition-all duration-300"></span>
        </button>
      </div>

      <style jsx>{`
        .glass-card {
          backdrop-filter: blur(15px);
          background: rgba(255, 255, 255, 0.03);
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
