import React, { useState } from "react";
import Button from "../../components/Button";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../../components/data/projectsData";

const Projects = () => {
  const [filter, setFilter] = useState("ALL");

  const filterProjects = (category) => {
    setFilter(category);
  };

  // filter the projects based on the selected filter
  const filteredProjects = projectsData.filter((project) => {
    if (filter === "ALL") return true;
    return project.category === filter;
  });

  return (
    <div className="bg-slate-200 dark:bg-gray-800  dark:text-white p-4">
      <div className="text-center">
        <h1 className="pt-4 text-3xl uppercase font-bold md:text-5xl">
          Recent
          <span className="text-purple-700 text-3xl font-bold md:text-5xl">
            {" "}
            Works!
          </span>
        </h1>
        <p className="py-2 font-mono text-slate-800 dark:text-slate-400 text-xl md:text-2xl">
          Here are a few projects I've worked on recently.
        </p>
      </div>

      {/* Filter buttons */}
      <div className="flex flex-col md:flex-row justify-center gap-3 my-3">
        <Button
          text="Web Applications"
          onClick={() => filterProjects("Web")}
          color="gray"
          size="medium"
          border="solid"
        />
        <Button
          text="ALL"
          onClick={() => filterProjects("ALL")}
          color="gray"
          size="medium"
          border="solid"
          className="hidden sm:block"
        />
        <Button
          text="Mobile Applications"
          onClick={() => filterProjects("Mobile")}
          color="gray"
          size="medium"
          border="solid"
        />
      </div>

      {/* Render filtered projects */}
      <div className="flex flex-wrap justify-center gap-8 md:gap-y-14 md:px-9 md:py-20 py-10">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            projectName={project.projectName}
            technology={project.technology}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
