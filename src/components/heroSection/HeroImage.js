import React from "react";
import HeroImage from "../../assets/Image (1).png";

const MainImage = () => {
  return (
    <div className=" md:w-1/2 md:ml-[150px] md:mb-20 ">
      <img
        className="object-cover filter to-purple-700  md:w-10/12 "
        src={HeroImage}
        alt="Hero-Image"
      />
    </div>
  );
};

export default MainImage;
