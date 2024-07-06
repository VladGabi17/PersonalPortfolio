import React from "react";

const Project2Text1Image = ({ title, description, image1, image2 }) => {
  return (
    <header className="bg-white">
      <div className="container flex flex-col lg:px-36 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg text-center lg:text-left">
            <h1 className="text-4xl text-slate-700 font-extrabold md:text-5xl">
              {title}
            </h1>
            <p className="mt-6 text-lg text-slate-500">{description}</p>
          </div>
        </div>
        <div className="items-center justify-center w-full h-80 lg:w-1/2 hidden lg:block">
          <img
            className="object-cover w-full h-full max-w-2xl rounded-md"
            src={image1}
            alt="Description"
          />
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <img
          className="object-cover w-full h-full rounded-xl lg:w-3/5"
          src={image2}
          alt="Description"
        />
      </div>
    </header>
  );
};

export default Project2Text1Image;