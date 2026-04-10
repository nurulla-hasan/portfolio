/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

const SOCIALS = [
  { 
    label: "GitHub", 
    href: "https://github.com",
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58V22" />
      </svg>
    )
  },
  { 
    label: "LinkedIn", 
    href: "https://linkedin.com",
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    )
  },
  { 
    label: "X (Twitter)", 
    href: "https://x.com",
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
      </svg>
    )
  },
  { 
    label: "Instagram", 
    href: "https://instagram.com",
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    )
  },
];

export default function SocialSidebar() {
  return (
    <div className="fixed right-6 md:right-10 bottom-0 z-50 hidden md:flex flex-col items-center gap-8">
      {/* Decorative Line */}
      <div className="flex flex-col gap-6">
        {SOCIALS.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center p-2 transition-all duration-300 hover:-translate-y-1"
          >
            {/* Glow Background */}
            <div className="absolute inset-0 bg-primary/0 rounded-full blur-md group-hover:bg-primary/20 transition-all duration-500" />
            
            <social.icon 
              className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300 relative z-10" 
              strokeWidth={1.5}
            />

            {/* Tooltip */}
            <span className="absolute right-12 px-3 py-1.5 rounded-md bg-background border border-border/40 text-[0.6rem] font-bold tracking-widest uppercase text-foreground opacity-0 pointer-events-none group-hover:opacity-100 group-hover:right-14 transition-all duration-300 whitespace-nowrap">
              {social.label}
            </span>
          </a>
        ))}
      </div>

      {/* Vertical architectural line matching the site's grid style */}
      <div className="w-px h-32 bg-linear-to-b from-primary/60 via-primary/20 to-transparent" />
    </div>
  );
}
