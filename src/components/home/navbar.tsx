"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";

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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out ${
        isScrolled
          ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5 py-4"
          : "bg-transparent py-8"
      }`}
    >
      <div className="container mx-auto px-8 md:px-16 flex items-center justify-between">
        
        {/* Abstract Minimal Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative w-6 h-6 border-[1.5px] border-white/80 rounded-sm flex items-center justify-center transition-transform duration-500 group-hover:rotate-90">
            <Plus className="w-3 h-3 text-white/50" />
          </div>
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-white/90">
            Nurulla
          </span>
        </Link>

        {/* Minimal Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[0.65rem] font-medium tracking-[0.2em] text-white/40 uppercase transition-colors duration-300 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/Nurulla-Hasan-CV.pdf"
            className="text-[0.65rem] font-medium tracking-[0.2em] text-black bg-white uppercase px-5 py-2 hover:bg-white/90 transition-colors"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Menu Toggle (Abstract) */}
        <button className="md:hidden flex flex-col gap-1.5 p-2">
          <span className="w-5 h-[1.5px] bg-white/80 block"></span>
          <span className="w-3 h-[1.5px] bg-white/80 block self-end"></span>
        </button>
      </div>
    </header>
  );
}
