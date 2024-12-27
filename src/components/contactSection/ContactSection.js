import React from 'react'
import { Github, Twitter, Linkedin } from 'lucide-react';
import StarsBackground from '../Layout/StarsBackground';
import myImage from '../../assets/profile-avatar.png'

const ContactSection = () => {
  return (
    <div id='contact' className="min-h-screen bg-[#1a1a2e] flex flex-col items-center justify-center p-4 md:p-8 relative overflow-hidden">
      {/* Stars background */}
      <StarsBackground />

      <div className="relative z-10 flex flex-col items-center">
        <div className="w-32 h-32 md:w-40 md:h-40 bg-purple-600 rounded-full overflow-hidden mb-8">
          <img
            src={myImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">FIND ME ON</h1>
        <p className="text-gray-300 mb-8">
          Feel free to <span className="text-purple-400">connect</span> with me
        </p>

        <div className="flex space-x-6">
          <a href="#" className="social-icon">
            <Github className="w-8 h-8 text-white hover:text-purple-400 transition-colors" />
          </a>
          <a href="#" className="social-icon">
            <Twitter className="w-8 h-8 text-white hover:text-purple-400 transition-colors" />
          </a>
          <a href="#" className="social-icon">
            <Linkedin className="w-8 h-8 text-white hover:text-purple-400 transition-colors" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactSection