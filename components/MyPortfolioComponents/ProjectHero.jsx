import React from "react";

const ProjectHero = ({ image, title, subtitle }) => {
  return (
    <div
      className="w-full bg-center bg-cover h-screen"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="flex items-center justify-center w-full h-full bg-gray-900/50">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-white lg:text-8xl">
            {title}
          </h1>
          <p className="py-8 text-2xl font-md text-white lg:text-2xl">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectHero;