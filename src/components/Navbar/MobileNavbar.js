import React from "react";
import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";
import Logo from '../../assets/Logo.gif' ;

const MobileNavbar = ({ isHomePage, isProjectsPage, isExperiencePage, isOpen, closeMenu }) => {
  const handleLogoClick = () => {
    closeMenu(false); 
  };

  return (
    isOpen && (
      <div className="md:hidden fixed inset-0 bg-slate-200 dark:bg-gray-900 w-1/2 z-50">
        <div className="flex justify-end p-4">
          <button
            onClick={() => closeMenu(false)} // Close the menu when clicking the 'X' button
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

        {/* Logo */}
        <div className="flex justify-center p-4">
          <Link to="/" onClick={handleLogoClick}> 
            <img
              src={Logo}
              alt="Logo"
              className="w-16 h-16 object-cover rounded-md cursor-pointer"
            />
          </Link>
        </div>

        {/* Navbar Links */}
        <div className="flex flex-col items-center space-y-4 p-4 text-black dark:text-white">
          <MenuItems
            isHomePage={isHomePage}
            isProjectsPage={isProjectsPage}
            isExperiencePage={isExperiencePage}
            closeMenu={closeMenu} // Pass closeMenu to MenuItems
          />
        </div>
      </div>
    )
  );
};

export default MobileNavbar;
