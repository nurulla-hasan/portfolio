/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Mail, Globe, MapPin, Phone, Printer, ArrowLeft } from "lucide-react";

const GithubIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58V22" />
  </svg>
);
import Link from "next/link";

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="min-h-screen bg-zinc-50 print:bg-white pb-20 font-sans">
      {/* Navbar for Resume Page (Hidden in Print) */}
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-zinc-200 px-6 py-4 flex items-center justify-between print:hidden">
        <Link href="/" className="flex items-center gap-2 text-zinc-600 hover:text-zinc-900 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-xs font-bold tracking-widest uppercase">Back to Portfolio</span>
        </Link>
        <div className="flex items-center gap-4">
          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 px-6 py-2 bg-zinc-900 text-white rounded-full text-[0.7rem] font-bold tracking-widest uppercase hover:bg-zinc-800 transition-all shadow-lg active:scale-95"
          >
            <Printer className="w-4 h-4" />
            Print / Save PDF
          </button>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto mt-10 p-8 md:p-12 lg:p-16 bg-white shadow-2xl shadow-zinc-200/50 min-h-264 print:shadow-none print:mt-0 print:p-0">
        
        {/* Header Section */}
        <header className="border-b-2 border-zinc-900 pb-8 mb-10">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 uppercase mb-4">
            Nurulla Hasan
          </h1>
          <p className="text-xl font-medium text-zinc-600 mb-6 uppercase tracking-wider">
            Frontend-Focused MERN Stack Developer
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
            <div className="flex items-center gap-3 text-sm text-zinc-500">
              <MapPin className="w-4 h-4 text-zinc-400" />
              <span>Dhaka, Bangladesh (On-site)</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-zinc-500">
              <Phone className="w-4 h-4 text-zinc-400" />
              <span>+880 1XXX-XXXXXX</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-zinc-500">
              <Mail className="w-4 h-4 text-zinc-400" />
              <a href="mailto:nurullahasan.dev@gmail.com" className="hover:text-zinc-900 underline underline-offset-4">nurullahasan.dev@gmail.com</a>
            </div>
            <div className="flex items-center gap-3 text-sm text-zinc-500">
              <GithubIcon className="w-4 h-4 text-zinc-400" />
              <a href="https://github.com/nurullahasan" target="_blank" className="hover:text-zinc-900 underline underline-offset-4">github.com/nurullahasan</a>
            </div>
            <div className="flex items-center gap-3 text-sm text-zinc-500">
              <Globe className="w-4 h-4 text-zinc-400" />
              <a href="https://nurulla-portfolio.vercel.app" target="_blank" className="hover:text-zinc-900 underline underline-offset-4">nurulla-portfolio.vercel.app</a>
            </div>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-10">
          <h2 className="text-xs font-black tracking-[0.3em] uppercase text-zinc-400 mb-4 border-l-4 border-zinc-900 pl-4">
            Professional Summary
          </h2>
          <p className="text-[0.95rem] leading-relaxed text-zinc-700 font-light">
            Frontend-focused MERN Stack Developer with professional experience building authenticated, API-driven web applications and dashboard systems using React, Next.js, TypeScript, Tailwind CSS, Redux Toolkit, and modern data-fetching patterns. Strong in reusable component architecture, custom hooks, protected routing, validated forms, and feature-based frontend structure.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-10">
          <h2 className="text-xs font-black tracking-[0.3em] uppercase text-zinc-400 mb-4 border-l-4 border-zinc-900 pl-4">
            Technical Skills
          </h2>
          <div className="space-y-4">
            <div className="flex flex-wrap items-baseline gap-x-2">
              <span className="font-bold text-sm text-zinc-900">Frontend: </span>
              <span className="text-sm text-zinc-600">React.js, Next.js (App Router), TypeScript, JavaScript (ES6+), Tailwind CSS, Shadcn UI</span>
            </div>
            <div className="flex flex-wrap items-baseline gap-x-2">
              <span className="font-bold text-sm text-zinc-900">State & Data: </span>
              <span className="text-sm text-zinc-600">Redux Toolkit, RTK Query, TanStack Query, React Hook Form, Zod</span>
            </div>
            <div className="flex flex-wrap items-baseline gap-x-2">
              <span className="font-bold text-sm text-zinc-900">Tools: </span>
              <span className="text-sm text-zinc-600">Git, GitHub, Vercel</span>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-10">
          <h2 className="text-xs font-black tracking-[0.3em] uppercase text-zinc-400 mb-4 border-l-4 border-zinc-900 pl-4">
            Professional Experience
          </h2>
          <div className="space-y-8">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-black text-zinc-900">Frontend Developer | Betopia Group</h3>
                <span className="text-[0.7rem] font-bold tracking-widest text-zinc-400 uppercase">March 2025 - Present</span>
              </div>
              <p className="text-[0.8rem] font-bold text-zinc-500 uppercase mb-4 tracking-widest">Dhaka, Bangladesh (On-site)</p>
              <ul className="list-disc ml-4 space-y-2 text-[0.9rem] text-zinc-700 leading-relaxed font-light">
                <li>Built API-driven frontend modules and dashboard interfaces using React, Next.js, TypeScript, and Tailwind CSS for product-style applications.</li>
                <li>Designed reusable abstractions including custom hooks, data tables, modal systems, search and filter utilities, infinite-loading patterns, and shared layout components.</li>
                <li>Implemented authenticated user flows, protected routing, validated forms, and backend-integrated features for scalable web applications.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-10">
          <h2 className="text-xs font-black tracking-[0.3em] uppercase text-zinc-400 mb-4 border-l-4 border-zinc-900 pl-4">
            Selected Projects
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-black text-zinc-900 mb-1">Wedding Marketplace & Vendor Platform</h3>
              <p className="text-[0.7rem] font-bold text-zinc-400 mb-3 tracking-widest uppercase">Next.js, TypeScript, Tailwind CSS, Shadcn UI</p>
              <ul className="list-disc ml-4 space-y-1.5 text-[0.9rem] text-zinc-700 leading-relaxed font-light">
                <li>Architected a feature-based App Router structure with route groups, modular layouts, typed schemas, reusable UI systems, checkout flows, and vendor and user dashboard experiences.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-black text-zinc-900 mb-1">Admin & Management Dashboard</h3>
              <p className="text-[0.7rem] font-bold text-zinc-400 mb-3 tracking-widest uppercase">React, TypeScript, Vite, Redux Toolkit, RTK Query</p>
              <ul className="list-disc ml-4 space-y-1.5 text-[0.9rem] text-zinc-700 leading-relaxed font-light">
                <li>Built management modules for admins, trainers, subscriptions, products, tickets, reviews, notifications, and settings with charts, filters, data tables, modals, and rich-text workflows.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-black text-zinc-900 mb-1">Cookbook Recipe & Meal Planner</h3>
              <p className="text-[0.7rem] font-bold text-zinc-400 mb-3 tracking-widest uppercase">React, Redux, JavaScript, Shadcn UI</p>
              <ul className="list-disc ml-4 space-y-1.5 text-[0.9rem] text-zinc-700 leading-relaxed font-light">
                <li>Developed meal planning, grocery, favorites, and profile features with protected and public routes, shared tools, debounce utilities, pagination, and error-handling wrappers.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education & Training */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <section>
            <h2 className="text-xs font-black tracking-[0.3em] uppercase text-zinc-400 mb-4 border-l-4 border-zinc-900 pl-4">
              Education
            </h2>
            <div className="space-y-1">
              <h3 className="text-sm font-black text-zinc-900 uppercase tracking-tight">Diploma in Engineering</h3>
              <p className="text-sm text-zinc-500">Dinajpur Polytechnic Institute | 2021 - 2024</p>
            </div>
          </section>
          <section>
            <h2 className="text-xs font-black tracking-[0.3em] uppercase text-zinc-400 mb-4 border-l-4 border-zinc-900 pl-4">
              Additional Training
            </h2>
            <div className="space-y-1">
              <h3 className="text-sm font-black text-zinc-900 uppercase tracking-tight">Programming Hero</h3>
              <p className="text-sm text-zinc-500">Level 1 completed | Currently continuing Level 2</p>
            </div>
          </section>
        </div>

        {/* Footer Area */}
        <footer className="mt-20 pt-8 border-t border-zinc-100 text-center print:hidden">
          <p className="text-[0.6rem] font-bold tracking-[0.5em] text-zinc-300 uppercase">
            © 2026 Nurulla Hasan // Crafted with Code
          </p>
        </footer>

      </div>
    </main>
  );
}
