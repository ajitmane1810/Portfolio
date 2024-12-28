import React, { useState, useEffect, useMemo } from "react";

const Typewriter = () => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentString, setCurrentString] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [cursorVisible, setCursorVisible] = useState(true);  // Add cursor visibility state

  const strings = useMemo(() => [
    "Front End Developer",
    "ReactJS Developer",
    "Mobile App Developer",
    "Problem Solver!",
    "Continuous Learning!",
  ], []);  // Array ensures this is memoized once and not recreated on every render

  useEffect(() => {
    if (isTyping) {
      if (currentString === strings[currentStringIndex]) {
        setTimeout(() => {
          setIsTyping(false);
        }, 1000); // Adjust the pause duration before erasing (in milliseconds)
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
  }, [currentString, currentStringIndex, isTyping, strings]);

  // Cursor blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev);  // Toggle cursor visibility every 500ms
    }, 500);

    return () => clearInterval(interval);  // Clean up on component unmount
  }, []);

  return (
    <span className="text-4xl font-semibold text-purple-700 md:tracking-[2px]">
      {currentString}
      {cursorVisible && <span className="font-semibold text-purple-700">|</span>} {/* Display cursor */}
    </span>
  );
};

export default Typewriter;
