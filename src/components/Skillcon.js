import React from 'react';

// This component will receive icon and color as props and display the icon
const SkillIcon = ({ icon, color }) => {
  return React.cloneElement(icon, {
    color: color,
  });
};

export default SkillIcon;
