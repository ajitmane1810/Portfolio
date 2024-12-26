import { ExternalLink } from "lucide-react";
import React from "react";

const ProjectCard = ({ image, projectName, description, technology, link }) => {

  const handleImageClick = () => {
    if (link) {
      
      window.open(link, "_blank");
    } else {
      return ;
    }
  };

  return (
    <div className="w-72 h-96 rounded-lg overflow-hidden shadow-lg bg-gray-700 text-center hover:shadow-[0px_-2px_20px_10px_rgba(128,0,128,0.5)] transform hover:scale-105 transition-all duration-300 relative">
      <div className="relative group">
        {/* Image with hover effect */}
        <img
          src={image}
          alt={projectName}
          className="w-64 h-48 object-cover m-auto mt-3 rounded-md cursor-pointer"
          onClick={handleImageClick} 
        />
        {/* External Link icon appears only on image hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <a
            href={link || null}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
          >
            <ExternalLink className="w-5 h-5 text-gray-800" />
          </a>
        </div>
      </div>
      <hr className="mt-5"/>
      <div className="px-6 py-4">
        <h2 className="text-xl font-semibold text-white">{projectName}</h2>
        <h3 className="text-purple-700 font-semibold text-[18px] mt-2">{technology}</h3>
        <p className="text-gray-600 mt-2 text-base">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
