import React, { useState } from "react";
import Button from "../../components/Button";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../../components/data/projectsData";

const Projects = () => {
  const [filter, setFilter] = useState("ALL");

  const filterProjects = (category) => {
    setFilter(category);
  };

  // Filter the projects based on the selected filter
  const filteredProjects = projectsData.filter((project) => {
    if (filter === "ALL") return true; // Show all projects if "ALL" is selected
    return project.category === filter; // Show only matching category projects
  });

  return (
    <div className="p-4 dark:text-white">
      <div className="text-center">
        <h1 className="pt-4 text-3xl uppercase font-bold md:text-5xl">
          Recent{" "}
          <span className="text-purple-700 text-3xl font-bold md:text-5xl">
            Works!
          </span>
        </h1>
        <p className="py-2 font-mono text-slate-800 dark:text-slate-400 text-xl md:text-lg">
          Here are a few projects I've worked on recently.
        </p>
      </div>

      {/* Filter buttons */}
      <div className="flex justify-center gap-3 my-4 ">
        <Button
          text="HTML"
          onClick={() => filterProjects("HTML")}
          color="gray"
          size="small"  
          border="solid"
          className="px-2 py-2 text-xs md:px-16 md:py-3 md:text-base" // Adjust size for larger screens
        />
        <Button
          text="Javascript"
          onClick={() => filterProjects("Javascript")}
          color="gray"
          size="small"
          border="solid"
          className="px-2 py-2 text-xs md:px-16 md:py-3 md:text-base"
        />
        <Button
          text="ReactJS"
          onClick={() => filterProjects("React Website")}
          color="gray"
          size="small"
          border="solid"
          className="px-2 py-2 text-xs md:px-16 md:py-3 md:text-base"
        />
        <Button
          text="Flutter"
          onClick={() => filterProjects("Mobile App")}
          color="gray"
          size="small"
          border="solid"
          className="px-2 py-2 text-xs md:px-16 md:py-3 md:text-base"
        />
      </div>

      {/* Render filtered projects */}
      <div className="flex flex-wrap justify-center gap-8 md:gap-y-14 md:px-14 md:py-16 py-10">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            projectName={project.projectName}
            technology={project.technology}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
