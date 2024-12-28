import React, { useState, useEffect, useRef } from 'react';
import { getSkillIcon } from './skillIcons';

const SkillBar = ({ skill, percentage }) => {
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
    <div ref={skillRef} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-white flex items-center">
          {React.cloneElement(icon, { color })} 
        </span>
          <span className='text-white mx-3 text-start flex-1 hidden md:block'>{skill}</span>
        <span className="text-green-500">{currentPercentage}%</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2.5">
        <div
          className="bg-green-500 h-2.5 rounded-full transition-all duration-[5000ms]"
          style={{ width: `${currentPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
