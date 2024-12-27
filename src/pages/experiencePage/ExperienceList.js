import React from "react";
import Experience from "./Experience.js";
import experienceData from "../../components/data/experienceData.js";
import Skills from "../../components/skillsSection/SkillsSection.js";

const ExperienceList = () => {
  return (
    <div className="">
      <div className="pt-4 text-center mx-0 sm:mx-40 lg:mx-44">
        <h1 className="text-purple-700 text-3xl uppercase font-bold md:text-5xl p-4">
          Experience
        </h1>
        <p className="text-gray-500 dark:text-gray-300 px-4">
          With a strong foundation in Frontend Development and Flutter
          Development, I have 1 year of experience in frontend technologies and
          6 months of expertise in building mobile applications using Flutter. I
          am passionate about creating seamless, responsive user interfaces and
          delivering high-quality solutions that meet both user needs and
          business objectives.
        </p>
      </div>

      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-10 md:mx-28 p-4 md:py-20  ">
        {experienceData.map((experience) => (
          <Experience
            key={experience.id}
            org={experience.org}
            title={experience.title}
            date={experience.date}
            description={experience.description}
            imageUrl={experience.imageUrl}
            link={experience.link}
          />
        ))}
      </div>
      <Skills/>
    </div>
  );
};

export default ExperienceList;
