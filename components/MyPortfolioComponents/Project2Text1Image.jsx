import React from "react";

const Project2Text1Image = ({
  title1,
  description1,
  title2,
  description2,
  image,
}) => {
  return (
    <section className="bg-white pt-16">
      <div className="container lg:px-36 py-16 mx-auto">
        <div className="pb-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <h1 className="mt-4 text-4xl text-slate-700 font-extrabold md:text-5xl">
              {title1}
            </h1>
            <p className="mt-6 text-lg text-slate-500">{description1}</p>
          </div>

          <div className="text-center lg:text-left">
            <h1 className="mt-4 text-4xl text-slate-700 font-extrabold md:text-5xl">
              {title2}
            </h1>
            <p className="mt-6 text-lg text-slate-500">{description2}</p>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <img
            className="object-cover w-full h-full rounded-xl lg:w-4/5"
            src={image}
            alt="Section"
          />
        </div>
      </div>
    </section>
  );
};

export default Project2Text1Image;