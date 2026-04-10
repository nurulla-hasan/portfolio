"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="fixed left-6 md:left-10 bottom-8 z-50 flex items-center gap-6 group cursor-default">
      {/* Power Button Element */}
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="relative w-12 h-12 flex items-center justify-center transition-all duration-700"
      >
        {/* Outer Rotating Frame */}
        <div className="absolute inset-0 border border-primary/20 rounded-lg rotate-45 group-hover:rotate-135 group-hover:scale-110 transition-all duration-1000" />
        <div className="absolute inset-0 border border-primary/40 rounded-lg -rotate-45 group-hover:-rotate-90 group-hover:scale-125 transition-all duration-700" />
        
        {/* Glow Core */}
        <div className="absolute inset-2 bg-primary/5 rounded-full blur-md group-hover:bg-primary/20 transition-all duration-500" />
        
        {/* Icons */}
        <div className="relative z-10">
          {theme === "dark" ? (
            <Sun className="w-5 h-5 text-primary animate-in fade-in zoom-in duration-500" />
          ) : (
            <Moon className="w-5 h-5 text-primary animate-in fade-in zoom-in duration-500" />
          )}
        </div>

        {/* Status Pulse */}
        <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_var(--primary)]" />
      </button>

      {/* Vertical Metadata Label */}
      <div className="flex flex-col gap-1 items-start">
        <div className="flex items-center gap-2">
           <span className="text-[0.45rem] font-black tracking-[0.4em] uppercase text-primary">System_Core</span>
           <div className="h-px w-8 bg-primary/20 group-hover:w-12 transition-all duration-700" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[0.6rem] font-bold tracking-[0.2em] uppercase text-foreground/60 group-hover:text-foreground transition-colors duration-500">
            Mode: {theme === "dark" ? "Stealth" : "Bright"}
          </span>
          <span className="text-[0.5rem] font-mono text-primary/40 group-hover:text-primary transition-colors">
            {theme === "dark" ? "0x01" : "0x00"}
          </span>
        </div>
      </div>
    </div>
  )
}
