/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import { Send, MapPin, Mail, Globe, Activity, Zap, Radio } from "lucide-react";
import SectionLayout from "../layout/section-layout";
import { useState, useEffect } from "react";

const TickingData = ({ label }: { label: string }) => {
  const [val, setVal] = useState("0.00");
  useEffect(() => {
    const interval = setInterval(() => {
      setVal((Math.random() * 100).toFixed(2));
    }, 2500);
    return () => clearInterval(interval);
  }, []);
  return <span className="text-[0.55rem] font-mono text-primary/60 uppercase tracking-tighter">{label}: {val}</span>;
}

export default function Contact() {
  const [, setStatus] = useState("IDLE");

  return (
    <section id="contact" className="relative min-h-screen overflow-hidden bg-transparent border-t border-border/10 pb-20">
      {/* Background Section Identifier - Increased opacity slightly for depth */}
      <div className="absolute top-24 right-10 hidden lg:block opacity-[0.03] pointer-events-none">
        <span className="text-[20rem] font-black leading-none text-primary/10">04</span>
      </div>

      <SectionLayout className="mt-12 md:mt-32">
        {/* 1. Module Header */}
        <div className="mb-12 md:mb-20">
          <div className="flex items-center gap-4 mb-4">
             <div className="w-12 h-px bg-primary/40" />
             <span className="text-[0.7rem] font-bold tracking-[0.4em] text-primary uppercase">Module // Signal_Bridge</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="relative text-[clamp(2.5rem,6vw,5rem)] leading-[0.85] font-black tracking-tighter uppercase text-foreground">
              <span className="opacity-40 block mb-2">Protocol</span> 
              <span className="outline-glitch shimmer-text italic" data-text="Handshake">Handshake</span>
            </h2>
            
            <div className="flex flex-col gap-3 border-l-2 border-primary/20 pl-6 py-2">
               <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
                  <span className="text-[0.6rem] font-mono font-bold text-primary uppercase tracking-widest">Listening_State: SECURE</span>
               </div>
               <p className="text-[0.7rem] font-mono font-medium text-foreground/50 max-w-[250px] uppercase leading-relaxed">
                 Encryption actively monitoring incoming packets for structural synchronization.
               </p>
            </div>
          </div>
        </div>

        {/* 2. Horizontal Metadata Strip (Enhanced Visibility) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
           {[
             { icon: Mail, label: "Channel_Target", value: "hello@nurulla.hasan" },
             { icon: MapPin, label: "Source_Node", value: "Dhaka, Bangladesh" },
             { icon: Globe, label: "Network_Sync", value: "Remote_Connection" },
             { icon: Zap, label: "Signal_Uptime", value: "24/7_Connectivity" }
           ].map((item, idx) => (
             <motion.div 
               key={idx}
               whileHover={{ y: -4 }}
               className="bg-card/30 backdrop-blur-md border border-border/60 group/node p-8 flex flex-col gap-5 hover:border-primary/40 transition-all relative overflow-hidden"
             >
                <div className="flex items-center justify-between">
                   <div className="p-2 bg-primary/10 rounded-sm">
                      <item.icon className="w-5 h-5 text-primary group-hover/node:scale-110 transition-transform" />
                   </div>
                   <span className="text-[0.5rem] font-mono font-bold text-primary/40 uppercase tracking-tighter">NODE_0{idx + 1}</span>
                </div>
                <div className="space-y-2">
                   <span className="text-[0.6rem] font-mono font-black text-primary uppercase tracking-[0.2em]">{item.label}</span>
                   <p className="text-[0.9rem] font-bold text-foreground truncate tracking-tight">{item.value}</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-primary/40 to-transparent scale-x-0 group-hover/node:scale-x-100 transition-transform duration-500" />
             </motion.div>
           ))}
        </div>

        {/* 3. The Command Console (Improved Contrast Form) */}
        <div className="max-w-4xl mx-auto relative group/form">
           {/* Form HUD Overlay - Increased Contrast */}
           <div className="absolute -top-12 left-0 w-full flex items-center justify-between px-2 hidden md:flex opacity-60">
              <div className="flex items-center gap-6">
                 <TickingData label="PARITY_BIT" />
                 <TickingData label="LATENCY_MS" />
              </div>
              <div className="flex items-center gap-4">
                 <Activity className="w-4 h-4 text-primary animate-pulse" />
                 <span className="text-[0.55rem] font-mono text-primary uppercase tracking-[0.3em]">Module_Status: READY</span>
              </div>
           </div>

           {/* The Glass Terminal Form - Better Borders and Spacing */}
           <div className="relative glass-terminal border-2 border-border/40 p-10 md:p-16 lg:p-20 overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-dot-pattern opacity-[0.05] pointer-events-none" />
              
              <form className="relative z-10 space-y-16">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
                    <div className="relative group/input">
                       <label className="absolute -top-8 left-0 text-[0.65rem] font-mono font-black text-primary uppercase tracking-[0.3em] group-focus-within/input:text-foreground transition-colors">01. Source_Identity</label>
                       <input 
                         required
                         type="text" 
                         placeholder="INPUT_SERVICE_NAME..."
                         className="w-full bg-transparent border-b-2 border-border/60 py-5 text-base font-bold text-foreground focus:border-primary outline-hidden transition-all placeholder:text-foreground/20"
                       />
                       <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-focus-within/input:w-full transition-all duration-700" />
                    </div>
                    
                    <div className="relative group/input">
                       <label className="absolute -top-8 left-0 text-[0.65rem] font-mono font-black text-primary uppercase tracking-[0.3em] group-focus-within/input:text-foreground transition-colors">02. Signal_Channel</label>
                       <input 
                         required
                         type="email" 
                         placeholder="YOUR@RETURN.PROTOCOL..."
                         className="w-full bg-transparent border-b-2 border-border/60 py-5 text-base font-bold text-foreground focus:border-primary outline-hidden transition-all placeholder:text-foreground/20"
                       />
                       <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-focus-within/input:w-full transition-all duration-700" />
                    </div>
                 </div>

                 <div className="relative group/input">
                    <label className="absolute -top-8 left-0 text-[0.65rem] font-mono font-black text-primary uppercase tracking-[0.3em] group-focus-within/input:text-foreground transition-colors">03. Payload_Content_Data</label>
                    <textarea 
                      required
                      rows={6}
                      placeholder="INSERT_TRANSMISSION_DATA_HERE..."
                      className="w-full bg-transparent border-2 border-border/60 p-8 text-base font-bold text-foreground focus:border-primary outline-hidden transition-all placeholder:text-foreground/20 resize-none hover:bg-primary/[0.03] focus:bg-primary/[0.05]"
                    />
                    <div className="absolute bottom-4 right-4 opacity-20 group-focus-within/input:opacity-50 transition-opacity">
                       <Activity className="w-12 h-12 text-primary" />
                    </div>
                 </div>

                 <motion.button
                   whileHover={{ scale: 1.01 }}
                   whileTap={{ scale: 0.99 }}
                   onClick={(e) => { e.preventDefault(); setStatus("ACTIVE"); }}
                   className="w-full relative py-8 bg-primary border-2 border-primary hover:bg-primary/90 transition-all overflow-hidden group/btn shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)]"
                 >
                   <motion.div 
                     animate={{ left: ["-100%", "200%"] }}
                     transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                     className="absolute inset-y-0 w-40 bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12"
                   />
                   
                   <div className="relative z-10 flex items-center justify-center gap-8">
                      <Radio className="w-5 h-5 text-primary-foreground animate-pulse" />
                      <span className="text-[0.8rem] font-black tracking-[0.8em] uppercase text-primary-foreground">Initiate_Handshake</span>
                      <Send className="w-5 h-5 text-primary-foreground group-hover/btn:translate-x-3 transition-transform" />
                   </div>
                 </motion.button>
              </form>

              {/* Console Status Bar (High Visibility) */}
              <div className="mt-12 pt-10 border-t-2 border-border/20 flex flex-col sm:flex-row justify-between items-center gap-6">
                 <div className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                    <span className="text-[0.6rem] font-mono font-bold text-primary tracking-[0.2em] uppercase">Status: Connection_Stable</span>
                 </div>
                 <div className="flex gap-10">
                    <span className="text-[0.6rem] font-mono font-bold text-foreground/40 tracking-[0.1em] uppercase">Auth: GUEST_IDENTIFIED</span>
                    <span className="text-[0.6rem] font-mono font-bold text-foreground/40 tracking-[0.1em] uppercase">Packet: 1024_SIGNED</span>
                 </div>
              </div>
           </div>

           {/* Bold Frame Corner Accents */}
           <div className="absolute -top-3 -left-3 w-10 h-10 border-t-4 border-l-4 border-primary" />
           <div className="absolute -top-3 -right-3 w-10 h-10 border-t-4 border-r-4 border-primary" />
           <div className="absolute -bottom-3 -left-3 w-10 h-10 border-b-4 border-l-4 border-primary" />
           <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-4 border-r-4 border-primary" />
        </div>
      </SectionLayout>
    </section>
  );
}
