import React, { useState, useEffect, useMemo } from "react";

const Typewriter = () => {

  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentString, setCurrentString] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const strings = useMemo(()=> [
    "Front End Developer",
    "ReactJS Developer",
    "Mobile App Developer",
    "Problem Solver!",
    "Continuous Learning!",
   ],[]);  //  array ensures this is memoized once and not recreated on every render

  useEffect(() => {
    if (isTyping) {
      if (currentString === strings[currentStringIndex]) {
        setTimeout(() => {
          setIsTyping(false);
        }, 500); // Adjust the pause duration before erasing (in milliseconds)
      } else {
        const timeout = setTimeout(() => {
          setCurrentString(
            strings[currentStringIndex].slice(0, currentString.length + 1)
          );
        }, 100); // Adjust the typing speed here (in milliseconds)

        return () => clearTimeout(timeout);
      }
    } else {
      if (currentString === "") {
        setCurrentStringIndex((prevIndex) => (prevIndex + 1) % strings.length);
        setIsTyping(true);
      } else {
        const timeout = setTimeout(() => {
          setCurrentString(currentString.slice(0, currentString.length - 1));
        }, 50); // Adjust the erasing speed here (in milliseconds)

        return () => clearTimeout(timeout);
      }
    }
  }, [currentString, currentStringIndex, isTyping,strings]);

  return (
    <span className="text-4xl font-semibold text-purple-700 md:tracking-[2px]">
      {currentString}
    </span>
  );
};

export default Typewriter;
