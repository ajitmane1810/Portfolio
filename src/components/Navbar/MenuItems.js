import React from "react";
import { Link } from "react-router-dom";

const MenuItems = ({ isHomePage, isProjectsPage, isExperiencePage, closeMenu }) => {
  const handleClick = () => {
    closeMenu(false); // Close the sidebar when a link is clicked
  };

  return (
    <>
      {isHomePage ? (
        <>
          <Link to="/" className="hover:text-orange-400" onClick={handleClick}>Home</Link>
          <a href="#about" className="hover:text-orange-400" onClick={handleClick}>About</a>
          <a href="#skills" className="hover:text-orange-400" onClick={handleClick}>Skills</a>
          <Link to="/projects" className="hover:text-orange-400" onClick={handleClick}>Projects</Link>
          <Link to="/experience" className="hover:text-orange-400" onClick={handleClick}>Experience</Link>
          <a href="#contact" className="hover:text-orange-400" onClick={handleClick}>Contact</a>
        </>
      ) : isProjectsPage ? (
        <>
          <Link to="/" className="hover:text-orange-400" onClick={handleClick}>Home</Link>
          <Link to="/projects" className="hover:text-orange-400" onClick={handleClick}>Projects</Link>
          <Link to="/experience" className="hover:text-orange-400" onClick={handleClick}>Experience</Link>
        </>
      ) : isExperiencePage ? (
        <>
          <Link to="/" className="hover:text-orange-400" onClick={handleClick}>Home</Link>
          <a href="#skills" className="hover:text-orange-400" onClick={handleClick}>Skills</a>
          <Link to="/projects" className="hover:text-orange-400" onClick={handleClick}>Projects</Link>
          <Link to="/experience" className="hover:text-orange-400" onClick={handleClick}>Experience</Link>
        </>
      ) : (
        <>
          <Link to="/" className="hover:text-orange-400" onClick={handleClick}>Home</Link>
          <Link to="/projects" className="hover:text-orange-400" onClick={handleClick}>Projects</Link>
          <Link to="/experience" className="hover:text-orange-400" onClick={handleClick}>Experience</Link>
          <a href="#contact" className="hover:text-orange-400" onClick={handleClick}>Contact</a>
        </>
      )}
    </>
  );
};

export default MenuItems;
