// HeroSection.jsx
"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {

  // function to handle scrolling to Contact Me section
  const scrollToContactMe = () => {
    const contactMeSection = document.getElementById('contact-me');
    if (contactMeSection) {
      contactMeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className= "text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-500 ">Hello, I'm {" "}</span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Rachel",
                1000, 
                "an aspiring Engineer",
                1000,
                "a Developer",
                1000,
                "a Problem Solver",
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#C7C2D0] text-base sm:text-lg mb-6 lg:text-xl">
          I am actively seeking a co-op starting in January 2025, with a focus on 
          opportunities in software engineering, front-end development, web development,
           UX/UI development, and AI interfaces.
          </p>
          <div>
            <button 
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-white via-blue-400 to-purple-700 hover:bg-slate-200 text-white"
              onClick={() => window.open('https://drive.google.com/file/d/1sqZ-feCMG_CNgV8STfgnJ_a9VJGUiM2Z/view?usp=sharing', '_blank')}
            >
              <span className="block bg-[#121212} hover:bg-slate-800 rounded-full px-5 py-2"> Access Resume </span>
            </button>
            <button 
              className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-white via-blue-400 to-purple-700 hover:bg-slate-800 text-white mt-3"
              onClick={scrollToContactMe}
            > 
              <span className="block bg-[#121212} hover:bg-slate-800 rounded-full px-5 py-2"> Contact Me</span> 
            </button>
          </div>
        </div>
        <div className="col-span-5 flex place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#C7C2D0] w-[400px] h-[400px] lg:w-[400px] lg:h-[400px] flex justify-center items-center overflow-hidden">
            <Image 
              src="/images/ai-image1.png"
              alt="AI Image"
              width={350}
              height={350}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
