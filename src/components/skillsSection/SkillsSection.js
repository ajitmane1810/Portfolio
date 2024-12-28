import React from 'react';
import SkillBar from './SkillBar.js'; 


const Skills = () => {
  const skillsLeft = [
    { skill: 'HTML', percentage: 80 },
    { skill: 'Javascript', percentage: 67 },
    { skill: 'Flutter', percentage: 77 },
    { skill: 'Firebase Realtime Database', percentage: 80 },
    { skill: 'RESTful APIs', percentage: 70 },
    { skill: 'Dart', percentage: 75 },
  ];

  const skillsRight = [
    { skill: 'Tailwind CSS', percentage: 80 },
    { skill: 'React', percentage: 75 },
    { skill: 'Spring Boot', percentage: 50 },
    { skill: 'MySQL', percentage: 65 },
    { skill: 'GitHub', percentage: 83 },
    { skill: 'Java', percentage: 65 },
  ];

  return (
    <div id='skills' className="md:min-h-screen  bg-black py-8 p-4  lg:p-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl uppercase text-center font-bold md:text-5xl text-white mb-8">
          My <span className="text-purple-700 text-3xl font-bold md:text-5xl">Skills</span>
        </h1>

        <div className="grid grid-cols-2  gap-4 lg:gap-16">
          <div className="space-y-6">
            {/* Linear Bars */}
            {skillsLeft.map((skill, index) => (
              <div key={index} className="block">
                <SkillBar {...skill} />
              </div>
            ))}
          </div>

          <div className="space-y-6">
            {/* Linear Bars */}
            {skillsRight.map((skill, index) => (
              <div key={index} className="block">
                <SkillBar {...skill} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
