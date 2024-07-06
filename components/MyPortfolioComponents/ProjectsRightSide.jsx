import React from "react";

const ProjectsRightSide = ({
  title,
  description,
  imageUrl,
  buttonText,
  link,
}) => {
  return (
    <div className="container mx-auto flex lg:px-36 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-10 md:mb-0 items-center text-center">
        <h1 className="text-5xl text-slate-700 font-extrabold mb-4 md:text-6xl">
          {title}
        </h1>
        <p className="mb-4 text-slate-700 text-2xl py-3">{description}</p>
        <div className="flex justify-center">
          <a
            href={link}
            className="flex items-center justify-center relative h-[44px] w-36 overflow-hidden border border-amber-500 bg-white px-3 text-amber-500 rounded-lg transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-amber-500 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full"
          >
            <span className="flex text-lg font-semibold items-center relative z-10">
              {buttonText}
              <i className="text-sm ml-2 fa-solid fa-arrow-right"></i>
            </span>
          </a>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          className="object-cover object-center rounded-3xl"
          alt="case study"
          src={imageUrl}
        />
      </div>
    </div>
  );
};

export default ProjectsRightSide;