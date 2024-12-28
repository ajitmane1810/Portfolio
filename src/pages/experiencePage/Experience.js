import React, { useState } from 'react';

const Experience = ({ org, title, date,description, imageUrl, link }) => {
  const [isExpanded, setIsExpanded] = useState(false);


  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex items-center justify-center dark:text-white mx-2 hover:shadow-[0px_-2px_20px_10px_rgba(128,0,128,0.5)] transform hover:scale-105 transition-all duration-300">
      <div className="group bg-gray-700 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl w-full max-w-lg md:max-w-2xl ">
        {/* flex Row / flex Column (depend on screen size) */}
        <div className="flex flex-col md:flex-row items-center ">
          {/* Image Container */}
          <div className="relative w-full md:w-1/2 h-48 md:h-48 overflow-hidden">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 p-4"
            />
           
          </div>

          {/* Content */}
          <div className="p-6 md:p-2 md:py-4 md:w-3/4">
            <h1 className="text-2xl md:text-xl font-bold text-purple-700 mb-1">{org}</h1>
            <h3 className="text-xl md:text-base font-semibold text-orange-500 mb-1 leading-tight">{title}</h3>
            <p className="text-lg  md:text-base font-medium text-white mb-1">{date}</p>

            {/* Truncate description if not expanded */}
            <p
              className={`text-gray-300 text-sm leading-relaxed ${
                !isExpanded ? 'line-clamp-4' : '' 
              } text-gray-300`}
            >
              {description}
            </p>

            {/* "See more" link */}
            {description.length > 200 && (
              <button
                className="text-blue-500 text-sm mt-2"
                onClick={toggleDescription}
              >
                {isExpanded ? 'See less' : 'See more'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
