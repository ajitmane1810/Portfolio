import React, { useEffect, useRef } from "react";

const Model = ({ project, onClose }) => {
  // Create a ref to refer to the modal content
  const modalRef = useRef(null);

  // Handle clicks outside the modal content to close the modal
  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose(); // Close modal when clicked outside
    }
  };

  // Attach the event listener on mount and clean up on unmount
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      {/* Modal content container */}
      <div
        ref={modalRef} // Attach the ref to modal content
        className="bg-slate-400 w-11/12 md:w-3/4 lg:w-1/2 p-6 rounded-lg shadow-lg relative"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl font-bold text-white"
        >
          X
        </button>

        {/* Layout Structure for mobile and desktop */}
        <div className="flex flex-col items-center md:items-start mb-4">
          {/* Project Name (Centered on mobile and left-aligned on desktop) */}
          <h2 className="text-2xl font-semibold text-center md:text-left mb-4">{project.projectName}</h2>

          {/* Image and Technologies on desktop, stacked on mobile */}
          <div className="flex flex-col md:flex-row items-center md:items-start w-full mb-4">
            {/* Image */}
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
              <img
                src={project.image}
                alt={project.projectName}
                className="w-32 h-32 object-cover rounded-md"
              />
            </div>

            {/* Technologies and View Project Button */}
            <div className="text-center md:text-left">
              <p className="text-lg font-semibold mb-4">{project.technology}</p>
              <a
                href={project.link || null}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-6   bg-blue-500 text-black rounded-xl"
              >
                Demo
              </a>
            </div>
          </div>
        </div>

        {/* Project Description */}
        <div className="text-lg">
          <p>{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Model;
