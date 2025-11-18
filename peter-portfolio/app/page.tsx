import Hero from "./(sections)/hero";
import About from "./(sections)/about";
import Skills from "./(sections)/skills";
import Projects from "./(sections)/projects";
import Experience from "./(sections)/experience";
import Testimonials from "./(sections)/testimonials";
import Blog from "./(sections)/blog";
import Contact from "./(sections)/contact";
import { WhatsAppFloat } from "@/components/whatsapp-float";

export default function Home() {
  return (
    <div className="font-sans">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Testimonials />
      <Blog />
      <Contact />
      <WhatsAppFloat />
    </div>
  );
}
