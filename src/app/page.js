
//import Navbar from "./components/Navbar";
import index from "./public/index";
import Apps from "./components/Apps";
import Styles from "./components/Styles";
//import Image from "next/image";
//import AboutSection from "./components/AboutSection";
//import Experience from "./components/Experience";
//import ProjectSection from "./components/ProjectSection";
//import ContactMe from "./components/Contact";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar/>
      <div class= "container mt-24 mx-auto px-12 py-4">
        <Apps/>
        <Styles/>
        <index/>
        
      </div>
    </main>
  );
}