import Hero from "@/components/hero";
import Marquee from "@/components/marquee";
import Experience from "@/components/experience";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Stats from "@/components/stats";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Experience />
      <About />
      <Projects />
      <Skills />
      <Stats />
      <Contact />
    </main>
  );
}
