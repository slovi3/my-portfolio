import Navbar from "@/components/Navbar";
import MouseGlow from "@/components/MouseGlow";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import CurrentFocus from "@/components/sections/CurrentFocus";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import HowIBuild from "@/components/sections/HowIBuild";
import GitHub from "@/components/sections/GitHub";
import Mindset from "@/components/sections/Mindset";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <MouseGlow />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <CurrentFocus />
        <TechStack />
        <Projects />
        <HowIBuild />
        <GitHub />
        <Mindset />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
