// src/components/Navbar.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Theme from "./theme/Theme.js";
import Logo from "../assets/Logo.gif"

const Navbar = () => {
 
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  
  const scrollToTop = () => {
    
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleHomeClick = (e) => {
    e.preventDefault(); 
    scrollToTop(); 
    navigate("/"); 
  };

  return (
    <div>
       {/* navbar */}
      <nav className='max-w-full  text-white py-3 bg-slate-100 dark:bg-transparent fixed top-0 left-0 right-0 z-50 shadow-lg'
      // style={{ boxShadow: '0px 0px 10px rgba(0, 123, 255, 0.5)' }}
      >
        <div className="flex justify-between items-center px-8 md:px-16">
          {/* Menu Icon for Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none dark:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Logo */}
          <div>
            <Link
              to="/"
              onClick={(e) => handleHomeClick(e)}
            >
              <img src={Logo} alt="Logo" 
              className=" w-12 h-12 object-cover rounded-md cursor-pointer"
              />
            </Link>
          </div>

          {/* Navbar for Desktop */}
          <div className="hidden md:flex space-x-8 text-base text-black dark:text-white  ">
            <Link
              to="/"
              className="hover:text-orange-400"
              onClick={handleHomeClick}
            >
              Home
            </Link>

            {/* Link to scroll to the About  */}
            <a href="#about" className="hover:text-orange-400">
              About
            </a>
            <Link to="/projects" className="hover:text-orange-400">
              Projects
            </Link>
            <Link to="/experience" className="hover:text-orange-400">
              Experience
            </Link>
             {/* Link to scroll to the Contact  */}
             <a href="#contact" className="hover:text-orange-400">
              Contact
            </a>
          </div>

          {/* Theme Toggle */}
          <Theme />
        </div>

        {/* Sidebar (Mobile View) */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 bg-slate-200 dark:bg-gray-900  w-1/2  z-50">
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-600 dark:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex flex-col items-start space-y-4 p-4 text-black dark:text-white">
              <Link
                to="/"
                className="text-xl hover:text-gray"
                onClick={(e) => {
                  handleHomeClick(e);
                  setIsOpen(false);
                }}
              >
                Home
              </Link>
              <a
                href="#about"
                className="text-xl hover:text-gray"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <Link
                to="/projects"
                className=" text-xl hover:text-gray"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link
                to="/experience"
                className=" text-xl hover:text-gray"
                onClick={() => setIsOpen(false)}
              >
                Experience
              </Link>

              <a
                href="#contact"
                className="text-xl hover:text-gray"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
      <div className="pt-20"></div>
    </div>
  );
};

export default Navbar;
