import HeroSection from "@/app/components/HeroSection";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import AboutSection from "@/app/components/AboutSection";
import Experience from "@/app/components/Experience";
import ProjectSection from "@/app/components/ProjectSection";
import ContactMe from "@/app/components/Contact";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar/>
      <div class= "container mt-24 mx-auto px-12 py-4">
        <HeroSection/>
        <AboutSection/>
        <Experience/>
        <ProjectSection/>
        <ContactMe/>
      </div>
    </main>
  );
}