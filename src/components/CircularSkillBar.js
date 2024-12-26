import React, { useState, useEffect, useRef } from 'react';
import { getSkillIcon } from '../components/utils/skillIcons';

const CircularSkillBar = ({ skill, percentage }) => {
  const [currentPercentage, setCurrentPercentage] = useState(0);
  const skillRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCurrentPercentage(0);
          setTimeout(() => {
            setCurrentPercentage(percentage);
          }, 100);
        }
      },
      { threshold: 0.5 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, [percentage]);

  const { icon, color } = getSkillIcon(skill); // Get the icon and color

  return (
    <div ref={skillRef} className="flex flex-col items-center mb-6 m-auto">
      <div className="relative w-32 h-32">
        <svg className="w-full h-full transform rotate-90">
          <circle cx="50%" cy="50%" r="45%" stroke="gray" strokeWidth="10" fill="none" />
          <circle
            cx="50%"
            cy="50%"
            r="45%"
            stroke="green"
            strokeWidth="10"
            fill="none"
            strokeDasharray={`${currentPercentage}, 100`}
            strokeDashoffset="25"
            className="transition-all duration-[5000ms]"
          />
        </svg>
        <div className="absolute inset-0 flex justify-center items-center z-10">
          {React.cloneElement(icon, { color })} {/* Render the icon with the correct color */}
        </div>
      </div>
      <div className="mt-2">
        <span className="text-green-500 text-lg font-semibold">{currentPercentage}%</span>
      </div>
    </div>
  );
};

export default CircularSkillBar;
