import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            Hello, I'm Rachel
          </h1>
          <p className="text-[#ADB7BE] text-lg mb-6 lg:text-xl">
            A third-year Computer Engineering major at Northeastern University on the Boston campus, pursuing a path in Software Engineering.
          </p>
          <div>
          <button className= "px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black">
            Hire Me
          </button>
           <button className= "px-6 py-3 rounded-full bh-transparent hover: bg-slate-800 text-white border border-white mt-3">
              Download CV
            </button>
          </div>
        </div>
        <div className="col-span-5 flex justify-center items-center mt-4 lg:mt-0">
          <div className="rounded-full overflow-hidden w-[96px] h-[90px] bg-[#808080] lg:w-[40px] lg:h-[40px] flex justify-center items-center">
            <Image 
              src="/images/ai-image1.png"
              alt="ai image1"
              className= "absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;