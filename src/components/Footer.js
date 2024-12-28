import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.gif";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleHomeClick = (e) => {
    e.preventDefault();
    navigate("/");
  };


  return (
    <div className="relative max-w-full text-white bg-slate-100 dark:bg-slate-950 ">
      <div className="flex justify-between items-center px-8 md:px-16">
        <div className="text-black font-bold dark:text-white">
          <h1>
            Made by Ajit Mane<span className="">💖</span>
          </h1>
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
      </div>
    </div>
  );
};

export default Footer;
