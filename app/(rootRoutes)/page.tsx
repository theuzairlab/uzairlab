"use server"
import About from "@/components/mainCompo/About";
import Contact from "@/components/mainCompo/Contact";
import Experiance from "@/components/mainCompo/Experiance";
import HeroSection from "@/components/mainCompo/HeroSection";
import Projects from "@/components/mainCompo/Projects";
import Services from "@/components/mainCompo/Services";
import Skills from "@/components/mainCompo/Skills";
import Testimonials from "@/components/mainCompo/Testimonials";

export default async function Home() {
  return (
    <>
    <div className="">
      <section id="home">
        <HeroSection/>
      </section>
      <section id="about">
        <About/>
      </section>
      <section id="experience">
        <Experiance/>
      </section>
      <section id="skills">
        <Skills/>
      </section>
      <section id="services">
        <Services/>
      </section>
      <section id="projects">
        <Projects/>
      </section>
      <section id="testimonials">
        <Testimonials/>
      </section>
      <section id="contact">
        <Contact/>
      </section>
    </div>
    </>
  );
}
