// src/components/Theme.js
import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const Theme = () => {
  // Check if a theme preference is saved in localStorage or use the system default
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark' ||
    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)||true
  );

  useEffect(() => {
    // Apply dark or light class to the <html> element
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div
      onClick={() => setDarkMode(!darkMode)}
      className="cursor-pointer flex items-center justify-center p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {darkMode ? (
        <FaSun className="text-white" size={24} />
      ) : (
        <FaMoon className="text-black" size={24} />
      )}
    </div>
  );
};

export default Theme;
