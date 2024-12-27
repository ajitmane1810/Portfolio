import { FaHtml5, FaReact, FaNodeJs, FaGithub, FaDatabase, FaJava } from 'react-icons/fa'; // Import necessary icons

// Define a mapping from skill name to icon and color
export const skillIcons = {
  HTML: { icon: <FaHtml5 size={40} />, color: 'orange' },
  Javascript: { icon: <FaReact size={40} />, color: 'yellow' },
  Flutter: { icon: <FaReact size={40} />, color: 'blue' },
  'Firebase Console': { icon: <FaDatabase size={40} />, color: 'red' },
  'RESTful APIs': { icon: <FaNodeJs size={40} />, color: 'green' },
  Dart: { icon: <FaReact size={40} />, color: 'purple' },
  'Tailwind CSS': { icon: <FaReact size={40} />, color: 'teal' },
  React: { icon: <FaReact size={40} />, color: 'cyan' },
  'Firebase Realtime Database': { icon: <FaDatabase size={40} />, color: 'red' },
  MySQL: { icon: <FaDatabase size={40} />, color: 'blue' },
  GitHub: { icon: <FaGithub size={40} />, color: 'yellow' },
  Java: { icon: <FaJava size={40} />, color: 'brown' }
};

// This function returns the icon and color for the given skill
export const getSkillIcon = (skill) => {
  return skillIcons[skill] || { icon: <FaReact size={40} color="gray" />, color: 'gray' }; // Default icon and color
};
