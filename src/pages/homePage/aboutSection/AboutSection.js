import React from "react";

const AboutSection = () => {
  return (
    <div
      id="about"
      className=" md:h-[600px] px-7  md:px-0 text-center justify-start  bg-gray-800 dark:bg-slate-200 text-gray-100 bg-cover bg-center "
      // style={{ backgroundImage: "url('https://content.cdntwrk.com/mediaproxy?url=https%3A%2F%2Fres.cloudinary.com%2Fuf-555466%2Fimage%2Fupload%2Fv1731353110%2FHexagon_ALI_Design_Review_Issue_Mgmt_Blog_Thumb_500x272_acpfbl.jpg&size=1&version=1731594518&sig=9fc3e127f8af79dc3fbadc463aa6c294&default=hubs%2Ftilebg-blogs.jpg')" }}
    >

      {/* About  */}
      <div className=" flex flex-col md:flex-row items-center justify-center  py-[50px]  dark:text-black ">
        <div className="flex flex-col items-center md:items-start max-w-2xl text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">LET ME INTRODUCE MYSELF</h2>
          <p className="text-lg mb-6">
            We are a passionate team dedicated to creating amazing web
            experiences. With a focus on innovation, user experience, and
            design, we strive to bring the best to every project we take on.
          </p>
          <p className="text-lg">
            Our mission is to provide quality solutions that not only meet but
            exceed client expectations. We believe in collaboration,
            transparency, and creativity.
          </p>
        </div>
        <div className="mt-8 md:mt-0 md:ml-8">
          <img
            src="your-image-url-here.jpg"
            alt="About Us"
            className="w-72 h-72 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
