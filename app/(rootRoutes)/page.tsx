"use server"
import About from "@/components/mainCompo/About";
import Experiance from "@/components/mainCompo/Experiance";
import HeroSection from "@/components/mainCompo/HeroSection";
import Services from "@/components/mainCompo/Services";
import Skills from "@/components/mainCompo/Skills";

export default async function Home() {
  return (
    <>
    <div className="">
      <HeroSection/>
      <About/>
      <Experiance/>
      <Skills/>
      <Services/>
    </div>
    </>
  );
}
