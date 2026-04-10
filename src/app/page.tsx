import Navbar from "@/components/home/navbar";
import Hero from "@/components/home/hero";
import About from "@/components/home/about";
import Skills from "@/components/home/skills";
import Experience from "@/components/home/experience";
import SmoothScrollProvider from "@/components/providers/smooth-scroll";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <main>
        {/* Global Architectural HUD Grid */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          {/* Noise overlay */}
          {/* <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" /> */}
          
          {/* Vertical Lines */}
          <div className="hidden lg:block absolute left-24 top-0 bottom-0 w-px bg-border/30 overflow-hidden">
            <div className="absolute left-0 w-px h-16 bg-linear-to-b from-transparent to-primary/80" style={{ animation: 'walk-v 20s linear infinite 2s' }} />
          </div>
          <div className="hidden lg:block absolute right-24 top-0 bottom-0 w-px bg-border/30 overflow-hidden">
            <div className="absolute left-0 w-px h-16 bg-linear-to-b from-transparent to-primary/80" style={{ animation: 'walk-v 20s linear infinite 7s' }} />
          </div>
        </div>

        <div className="relative z-10 font-sans">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Experience />
          {/* 
          <Projects />
          <Contact />
          <Footer /> 
          */}
        </div>
      </main>
    </SmoothScrollProvider>
  );
}
