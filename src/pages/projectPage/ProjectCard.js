import React, { useState } from "react";

const ProjectCard = ({ image, projectName, description, technology }) => {
  return (
    <div className=" w-72 h-96 rounded-lg overflow-hidden shadow-lg bg-gray-700  text-center hover:shadow-[0px_-2px_20px_10px_rgba(128,0,128,0.5)] transform hover:scale-105 transition-all duration-300">
      <img
        src={image}
        alt={projectName}
        className="w-52 h-52 object-cover m-auto mt-3 rounded-md"
        onClick=""
      />
      <div className="px-6 py-4">
        <h2 className="text-xl font-semibold text-white">{projectName}</h2>
        <h3 className="text-purple-700  font-semibold text-[18px] mt-2 ">
          {technology}
        </h3>
        <p className="text-gray-600 mt-2 text-base">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
