import { Download } from "lucide-react";
import React from "react";
import Resume from "../../assets/Ajit_Mane.pdf";
import StarsBackground from "../Layout/StarsBackground";

const AboutSection = () => {
  return (
    <div
      id="about"
      className="min-h-screen bg-[#1a1a2e] text-white py-4 pl-4 pr-7 md:p-8 lg:p-16 flex flex-row items-center justify-center gap-8 relative overflow-hidden"
    >
      <StarsBackground/>
      <div className="w-full space-y-6 relative z-10">
        <h1 className=" text-3xl uppercase text-start md:text-center font-bold md:text-5xl">
          About{" "}
          <span className="text-purple-700 text-3xl font-bold md:text-5xl">
            Me!
          </span>
        </h1>
        <p className="text-gray-300 text-base md:text-lg mb-5 text-start md:text-center">
          I'm a{" "}
          <span className="text-orange-500 text-base md:text-lg">Frontend Developer</span>{" "}
          and currently a{" "}
          <span className="text-orange-500 text-base md:text-lg">1+ year</span> undergrad,
          creating robust web apps across various platforms. I'm a dynamic
          developer with a strong command of{" "}
          <span className="text-orange-500 text-base md:text-lg">JavaScript</span>,
          <span className="text-orange-500 text-base md:text-lg"> ReactJS</span>, and
          <span className="text-orange-500 text-base md:text-lg"> Tailwind CSS</span>,
          focused on building fast, scalable, and visually appealing web
          applications. With expertise in{" "}
          <span className="text-orange-500 text-base md:text-lg">REST API integration</span>{" "}
          and real-time solutions using{" "}
          <span className="text-base md:text-lg">Firebase and Firestore</span>, I
          deliver seamless backend functionality. My proficiency in{" "}
          <span className="text-orange-500 text-base md:text-lg">Dart </span> and{" "}
          <span className="text-orange-500 text-base md:text-lg">Flutter</span> empowers me
          to create robust, cross-platform mobile apps that offer outstanding
          performance. I am driven by a passion for clean, efficient code and
          creating exceptional user experiences across all platforms.
        </p>

        <button className="mt-8 bg-indigo-500 text-white px-6 py-3 rounded-full flex items-center md:m-auto gap-2 w-auto md:w-16">
  <a href={Resume} download="Resume" className="flex items-center">
    <Download size={20} />
    <span className="ml-2 md:hidden inline-block">
      DOWNLOAD CV
    </span>
  </a>
</button>

      </div>
    </div>
  );
};

export default AboutSection;