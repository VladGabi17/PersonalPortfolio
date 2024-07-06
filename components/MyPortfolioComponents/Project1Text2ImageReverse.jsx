import React from "react";

const Project2Text1ImageReverse = ({ title, description, image1 }) => {
  return (
    <header className="bg-white">
      <div className="container flex flex-col lg:px-36 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row-reverse lg:items-center">
        <div className="w-full lg:w-1/2">
          <div className="lg:ml-14 lg:max-w-lg text-center lg:text-left">
            <h1 className="text-4xl text-slate-700 font-extrabold md:text-5xl">
              {title}
            </h1>
            <p className="mt-4 text-lg text-slate-500">{description}</p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-80 lg:w-1/2">
          <img
            className="object-cover w-full h-full max-w-2xl rounded-md"
            src={image1}
            alt="Description"
          ></img>
        </div>
      </div>
    </header>
  );
};

export default Project2Text1ImageReverse;
