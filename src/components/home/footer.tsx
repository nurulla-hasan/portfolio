/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import { ArrowUp, Terminal, Radio } from "lucide-react";
import SectionLayout from "../layout/section-layout";

const Github = ({ className }: { className?: string }) => (
  <svg
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

const Linkedin = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Twitter = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border/10 bg-transparent pt-16 pb-8">
      <SectionLayout>
        <div className="flex flex-col gap-12">
          {/* Main Footer Logic */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-primary/5 rounded-full animate-ping" />
                    <Terminal className="w-4 h-4 text-primary" />
                 </div>
                 <span className="text-xl font-black tracking-tighter uppercase italic">NH<span className="text-primary italic">.Architect</span></span>
              </div>
              <p className="text-[0.65rem] font-mono text-muted-foreground/60 uppercase tracking-[0.3em] leading-relaxed max-w-xs">
                "Designing digital high-performance systems with structural integrity and creative engineering."
              </p>
            </div>

            {/* Social Signal Chain */}
            <div className="flex flex-col gap-4">
               <span className="text-[0.45rem] font-mono text-primary/40 uppercase tracking-[0.5em] pb-2 border-b border-primary/10">Signal_Chains // Socials</span>
               <div className="flex items-center gap-6">
                 {[
                   { icon: Github, label: "GitHub", href: "https://github.com/nurulla-hasan" },
                   { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/nurulla-hasan" },
                   { icon: Twitter, label: "Twitter", href: "https://twitter.com/nurulla-hasan" }
                 ].map((social, idx) => (
                   <motion.a 
                     key={idx}
                     href={social.href}
                     target="_blank"
                     rel="noopener noreferrer"
                     whileHover={{ y: -4, color: 'var(--primary)' }}
                     className="text-muted-foreground/40 transition-colors flex items-center gap-2 group"
                   >
                     <social.icon className="w-4 h-4" />
                     <span className="text-[0.45rem] font-mono opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">{social.label}</span>
                   </motion.a>
                 ))}
               </div>
            </div>
          </div>

          {/* Bottom Terminal Bar */}
          <div className="pt-12 border-t border-border/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-8">
               <div className="flex items-center gap-2">
                  <Radio className="w-3 h-3 text-primary/40 animate-pulse" />
                  <span className="text-[0.4rem] font-mono text-primary/30 uppercase tracking-[0.2em]">Platform: Vercel // Edge_Ready</span>
               </div>
               <span className="text-[0.4rem] font-mono text-muted-foreground/30 uppercase tracking-[0.2em]">Build: v1.0.42_STABLE</span>
            </div>

            <p className="text-[0.4rem] font-mono text-muted-foreground/30 uppercase tracking-[0.3em]">
              © 2024 Nurulla Hasan. Built at Source_Node. All Rights Reserved.
            </p>

            <motion.button 
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-3 group border border-primary/20 bg-primary/5 px-4 py-2 hover:border-primary transition-all"
            >
              <span className="text-[0.5rem] font-mono text-primary/60 uppercase tracking-widest">Return_Top</span>
              <ArrowUp className="w-3 h-3 text-primary" />
            </motion.button>
          </div>
        </div>
      </SectionLayout>

      {/* Extreme Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />
    </footer>
  );
}
