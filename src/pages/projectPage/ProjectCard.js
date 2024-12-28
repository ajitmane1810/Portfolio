import { ExternalLink } from "lucide-react";
import React from "react";

const ProjectCard = ({
  image,
  projectName,
  link,
  onDetailClick,
}) => {
  const handleImageClick = () => {
    if (link) {
      window.open(link, "_blank");
    } else {
      return;
    }
  };

  return (
    <div className="w-72 h-80 rounded-lg overflow-hidden shadow-lg bg-gray-700 text-center hover:shadow-[0px_-2px_20px_10px_rgba(128,0,128,0.5)] transform hover:scale-105 transition-all duration-300 relative">
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
      <hr className="mt-5" />
      <div className="px-6 py-2">
        <h2 className="text-xl font-semibold text-white mb-2">{projectName}</h2>
        {/* The Detail button is positioned at the bottom and centered */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <button
            onClick={onDetailClick}
            className="bg-blue-500 text-white px-4 py-2 rounded shadow-md hover:bg-blue-600 transform hover:scale-105 transition-all duration-300"
          >
            Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
