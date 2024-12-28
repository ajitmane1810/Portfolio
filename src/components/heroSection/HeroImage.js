import React from "react";
import HeroImage from "../../assets/ahad.svg";

const MainImage = () => {
  return (
    <div className=" md:w-1/2 md:ml-20 md:mb-20 relative">
      <img
        className="object-cover filter to-purple-700  md:w-10/12 "
        src={HeroImage}
        alt="Hero-Image"
      />
    </div>
  );
};

export default MainImage;
