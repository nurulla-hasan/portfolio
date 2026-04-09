import Navbar from "@/components/home/navbar";
import Hero from "@/components/home/hero";
import About from "@/components/home/about";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      {/* 
      <Skills />
      <Projects />
      <Contact />
      <Footer /> 
      */}
    </>
  );
}
