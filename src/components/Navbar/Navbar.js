import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Theme from "../theme/Theme.js";
import Logo from "../../assets/Logo.gif"; 
import MenuItems from "./MenuItems.js";
import MobileNavbar from "./MobileNavbar.js";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleHomeClick = (e) => {
    e.preventDefault();
    navigate("/"); // Navigate to home
  };

  const isHomePage = location.pathname === "/";
  const isProjectsPage = location.pathname === "/projects";
  const isExperiencePage = location.pathname === "/experience";

  return (
    <div>
      <nav className="max-w-full text-white py-3 bg-slate-100 dark:bg-slate-950 fixed top-0 left-0 right-0 z-50 shadow-lg">
        <div className="flex justify-between items-center px-8 md:px-16">
          {/* Mobile Menu Icon */}
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
            <Link to="/" onClick={handleHomeClick}>
              <img
                src={Logo}
                alt="Logo"
                className="w-12 h-12 object-cover rounded-md cursor-pointer"
              />
            </Link>
          </div>

          {/* Desktop Navbar */}
          <div className="hidden md:flex space-x-8 text-base text-black dark:text-white">
            <MenuItems
              isHomePage={isHomePage}
              isProjectsPage={isProjectsPage}
              isExperiencePage={isExperiencePage}
              closeMenu={() => {}}
            />
          </div>

          {/* Theme Toggle */}
          <Theme />
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <MobileNavbar
        isHomePage={isHomePage}
        isProjectsPage={isProjectsPage}
        isExperiencePage={isExperiencePage}
        isOpen={isOpen}
        closeMenu={setIsOpen}
      />

      <div className="pt-20"></div>
    </div>
  );
};

export default Navbar;
