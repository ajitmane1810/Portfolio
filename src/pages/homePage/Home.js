import React from "react";

import "../../index.css";
import HeroSection from "../homePage/heroSection/HeroSection.js";
import AboutSection from "./aboutSection/AboutSection.js";
import MainImage from "../homePage/heroSection/HeroImage.js";
import ContactSection from "./ContactSection.js";
import Skills from "./SkillsSection.js";

const Home = () => {
  return (
    <div className="">
      <div className="md:h-screen lg:h-screen pt-4 flex flex-col md:flex-row items-center  md:ml-[150px] pb-[50px]  md:pb-[40px]  px-8 dark:text-white  ">
        <HeroSection />
        <MainImage />
      </div>
        <AboutSection/>
        <Skills />
        <ContactSection/>
    </div>
  );
};

export default Home;
