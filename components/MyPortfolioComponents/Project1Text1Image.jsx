import React from "react";

function Project1Text1Image({ title, description, image }) {
  return (
    <header className="bg-white pt-16">
      <div className="container mx-auto flex flex-col lg:px-36 py-10 space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <div className="lg:max-w-lg">
            <h1 className="text-4xl text-slate-700 font-extrabold md:text-5xl">
              {title}
            </h1>
            <p className="mt-4 text-lg text-slate-500">{description}</p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-80 lg:w-1/2">
          <img
            className="object-cover w-full h-full max-w-2xl rounded-md"
            src={image}
            alt="Description"
          />
        </div>
      </div>
    </header>
  );
}
export default Project1Text1Image;