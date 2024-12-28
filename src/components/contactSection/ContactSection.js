import React from "react";
import StarsBackground from "../Layout/StarsBackground";
import myImage from "../../assets/profile-avatar.png";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div
      id="contact"
      className="min-h-screen bg-[#1a1a2e] flex flex-col items-center justify-center p-4 md:p-8 relative overflow-hidden"
    >
      {/* Stars background */}
      <StarsBackground />

      <div className="relative z-10 flex flex-col items-center">
        <div className="w-32 h-32 md:w-40 md:h-40 bg-purple-400 rounded-full overflow-hidden mb-8">
          <img
            src={myImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          FIND ME ON
        </h1>
        <p className="text-center text-xl md:text-xl text-gray-300 mb-8 px-12">
          Feel free to <span className="text-purple-400">connect</span> with me
        </p>

        <div className="flex space-x-6">
          
          <a href="#" className="social-icon group">
            <FaFacebook className="w-8 h-8 text-white group-hover:text-orange-400 transition-colors group-hover:animate-bounce " />
          </a>
          <a href="https://www.linkedin.com/in/ajitmane/" className="social-icon group">
            <FaLinkedin className="w-8 h-8 text-white group-hover:text-orange-400 transition-colors group-hover:animate-bounce " />
          </a>
          <a href="#" className="social-icon group">
            <FaGithub className="w-8 h-8 text-white group-hover:text-orange-400 transition-colors group-hover:animate-bounce " />
          </a>
          
          <a href="#" className="social-icon group">
            <FaTwitter className="w-8 h-8 text-white group-hover:text-orange-400 transition-colors group-hover:animate-bounce " />
          </a>
          <a href="#" className="social-icon group">
            <FaInstagram className="w-8 h-8 text-white group-hover:text-orange-400 transition-colors group-hover:animate-bounce " />
          </a>

        </div>
      </div>
    </div>
  );
};

export default ContactSection;
