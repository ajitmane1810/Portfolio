import { FaHtml5, FaReact, FaGithub, FaDatabase, FaJava, FaJsSquare, FaPlug } from 'react-icons/fa'; 
import { FaDartLang, FaFlutter } from 'react-icons/fa6';

// Define a mapping from skill name to icon and color
export const skillIcons = {
  HTML: { icon: <FaHtml5 size={30} />,  },
  Javascript: { icon: <FaJsSquare size={30} />, },
  Flutter: { icon: <FaFlutter size={30} />, },
  Dart: { icon: <FaDartLang size={30} />, },
  React: { icon: <FaReact size={30} />, },
  MySQL: { icon: <FaDatabase size={30} />,},
  GitHub: { icon: <FaGithub size={30} />, },
  Java: { icon: <FaJava size={30} />, color: '' },
  'RESTful APIs': { icon: <FaPlug size={30} />,  },
  'Spring Boot': { icon:  <img src='https://static.vaadin.com/directory/user49/icon/file5671607802446826209_1427109326211_spring-icon.png' alt='Spring' style={{width:30 , height: 30}}/> },
  'Firebase Realtime Database': { icon:<img src='https://avatars.githubusercontent.com/u/3211871?v=4' alt='Firebase-R-D' style={{width:30 , height: 30}}/> },
  'Tailwind CSS': { icon:  <img src='https://www.loopple.com/img/tailwind-logo.png' alt='T-CSS' style={{width:30 , height: 30}}/> },
};

// This function returns the icon and color for the given skill
export const getSkillIcon = (skill) => {
  return skillIcons[skill] || { icon: <FaReact size={40} color='blue'/>,}; // Default icon and color
};
