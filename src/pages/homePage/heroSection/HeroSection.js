import React from "react";
import Typewriter from "../../../components/typewriter/Typewriter"; 
import "../../../index.css"; 

const HeroSection = () => {
  return (
    <div className=" flex flex-col justify-center sm:w-[30%] w-full gap-3 sm:mr-5 ">
      {/* Welcome Message */}
      <h1 className="font-normal text-2xl uppercase md:text-3xl tm:text-2xl sm:text-lg">
        Hi There! <span className="animate-wave">👋🏻</span>
      </h1>

      {/* Name */}
      <blockquote className="font-extrabold text-2xl text-[#ec6e59] mt-[-10px] lg:text-3xl md:text-2xl tm:text-2.5xl sm:text-base">
        I'm
        <span className="before:block mx-4 mb-6 mt-4 before:absolute before:-inset-2 before:-skew-y-[3deg] before:bg-[#ec6e59] relative inline-block">
          <span className="relative text-white dark:text-[#20262E]">Ajit Mane</span>
        </span>
      </blockquote>

      {/* Typewriter Component */}
      <div className="h-12 w-[270px] md:w-[500px] mb-20 md:mb-0">
        <Typewriter />
      </div>
    </div>
  );
};

export default HeroSection;
