import React from "react";

const OverviewSection = ({
  title1,
  description1,
  title2,
  description2,
  title3,
  description3,
  title4,
  description4,
}) => {
  return (
    <section className="bg-white container pt-20 pb-10">
      <div className="container lg:px-36 py-10 mx-auto">
        <h1 className="text-4xl text-slate-700 font-extrabold md:text-5xl">
          Project Overview
        </h1>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2">
          <div className="p-6 border rounded-xl border-r-gray-200">
            <div className="md:flex md:items-start md:-mx-4">
              <span className="inline-block text-center px-3 py-2 text-amber-500 bg-amber-100 rounded-xl md:mx-4">
                <i className="text-xl fa-solid fa-user"></i>
              </span>
              <div className="mt-4 md:mx-4 md:mt-0">
                <h1 className="text-2xl font-medium text-slate-700">
                  {title1}
                </h1>
                <p className="mt-3 text-lg text-slate-500">{description1}</p>
              </div>
            </div>
          </div>

          <div className="p-6 border rounded-xl border-r-gray-200">
            <div className="md:flex md:items-start md:-mx-4">
              <span className="inline-block text-center px-3 py-2 text-amber-500 bg-amber-100 rounded-xl md:mx-4">
                <i className="text-xl fa-solid fa-calendar-days"></i>
              </span>
              <div className="mt-4 md:mx-4 md:mt-0">
                <h1 className="text-2xl font-medium text-slate-700">
                  {title2}
                </h1>
                <p className="mt-3 text-lg text-slate-500 ">{description2}</p>
              </div>
            </div>
          </div>

          <div className="p-6 border rounded-xl border-r-gray-200">
            <div className="md:flex md:items-start md:-mx-4">
              <span className="inline-block text-center px-3 py-2 text-amber-500 bg-amber-100 rounded-xl md:mx-4">
                <i className="text-xl fa-solid fa-desktop"></i>
              </span>
              <div className="mt-4 md:mx-4 md:mt-0">
                <h1 className="text-2xl font-medium text-slate-700">
                  {title3}
                </h1>
                <p className="mt-3 text-lg text-slate-500">{description3}</p>
              </div>
            </div>
          </div>

          <div className="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700">
            <div className="md:flex md:items-start md:-mx-4">
              <span className="inline-block text-center px-3 py-2 text-amber-500 bg-amber-100 rounded-xl md:mx-4">
                <i className="text-xl fa-solid fa-bullseye"></i>
              </span>
              <div className="mt-4 md:mx-4 md:mt-0">
                <h1 className="text-2xl font-medium text-slate-700">
                  {title4}
                </h1>
                <p className="mt-3 text-lg text-slate-500">{description4}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;