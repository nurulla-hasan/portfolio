import Navbar from "@/components/home/navbar";
import Hero from "@/components/home/hero";
import About from "@/components/home/about";
import Skills from "@/components/home/skills";
import Experience from "@/components/home/experience";
import SmoothScrollProvider from "@/components/providers/smooth-scroll";
import Projects from "@/components/home/projects";
// import Contact from "@/components/home/contact";
// import Footer from "@/components/home/footer";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <main>
        <div className="relative z-10 font-sans">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          {/* <Contact /> */}
          {/* <Footer /> */}
        </div>
      </main>
    </SmoothScrollProvider>
  );
}
