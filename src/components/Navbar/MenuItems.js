import React from "react";
import { Link } from "react-router-dom";

const MenuItems = ({ isHomePage, isProjectsPage, isExperiencePage, closeMenu }) => {
  return (
    <>
      {isHomePage ? (
        <>
          <Link to="/" className="hover:text-orange-400" onClick={() => closeMenu(false)}>Home</Link>
          <a href="#about" className="hover:text-orange-400" onClick={() => closeMenu(false)}>About</a>
          <a href="#skills" className="hover:text-orange-400" onClick={() => closeMenu(false)}>Skills</a>
          <Link to="/projects" className="hover:text-orange-400" onClick={() => closeMenu(false)}>Projects</Link>
          <Link to="/experience" className="hover:text-orange-400" onClick={() => closeMenu(false)}>Experience</Link>
          <a href="#contact" className="hover:text-orange-400" onClick={() => closeMenu(false)}>Contact</a>
        </>
      ) : isProjectsPage ? (
        <>
          <Link to="/" className="hover:text-orange-400" onClick={() => closeMenu(false)}>Home</Link>
          <Link to="/projects" className="hover:text-orange-400" onClick={() => closeMenu(false)}>Projects</Link>
          <Link to="/experience" className="hover:text-orange-400" onClick={() => closeMenu(false)}>Experience</Link>
        </>
      ) : isExperiencePage ? (
        <>
          <Link to="/" className="hover:text-orange-400" onClick={() => closeMenu(false)}>Home</Link>
          <a href="#skills" className="hover:text-orange-400" onClick={() => closeMenu(false)}>Skills</a>
          <Link to="/projects" className="hover:text-orange-400" onClick={() => closeMenu(false)}>Projects</Link>
          <Link to="/experience" className="hover:text-orange-400" onClick={() => closeMenu(false)}>Experience</Link>
        </>
      ) : (
        <>
          <Link to="/" className="hover:text-orange-400" onClick={() => closeMenu(false)}>Home</Link>
          <Link to="/projects" className="hover:text-orange-400" onClick={() => closeMenu(false)}>Projects</Link>
          <Link to="/experience" className="hover:text-orange-400" onClick={() => closeMenu(false)}>Experience</Link>
          <a href="#contact" className="hover:text-orange-400" onClick={() => closeMenu(false)}>Contact</a>
        </>
      )}
    </>
  );
};

export default MenuItems;
