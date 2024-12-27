import React from "react";

import "../../index.css";
import HeroSection from "../../components/heroSection/HeroSection.js";
import AboutSection from "../../components/aboutSection/AboutSection.js";
import MainImage from "../../components/heroSection/HeroImage.js";
import ContactSection from "../../components/contactSection/ContactSection.js";
import Skills from "../../components/skillsSection/SkillsSection.js";

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
