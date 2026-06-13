import Hero from "@/components/sections/Hero";
import WhatISolve from "@/components/sections/WhatISolve";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import TechStack from "@/components/sections/TechStack";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import NewsBlogs from "@/components/sections/NewsBlogs";
import Contact from "@/components/sections/Contact";
import ClientLogos from "@/components/sections/ClientLogos";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatISolve />
      <Projects />
      <Experience />
      <TechStack />
      <About />
      <Testimonials />
      <Pricing />
      <NewsBlogs />
      <Contact />
      <ClientLogos />
    </>
  );
}
