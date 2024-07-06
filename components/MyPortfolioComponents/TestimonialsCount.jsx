import React from "react";

const TestimonialsCount = () => {
  return (
    <div className="mt-10 bg-white pb-12 sm:pb-16 lg:px-36">
      <div className="relative w-full">
        <div className="mx-auto">
          <div className="rounded-lg bg-white sm:grid sm:grid-cols-3">
            <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
              <p className="order-2 mt-2 text-slate-700 text-xl font-medium leading-6">
                Completed projects
              </p>
              <p className="text-5xl font-extrabold text-amber-500 md:text-6xl">
                30+
              </p>
            </div>
            <div className="flex flex-col border-b border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
              <p className="order-2 mt-2 text-slate-700 text-xl font-medium leading-6 ">
                Figma mockups
              </p>
              <p className="text-5xl font-extrabold text-amber-500 md:text-6xl">
                300
              </p>
            </div>
            <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
              <p className="order-2 mt-2 text-slate-700 text-xl font-medium leading-6 ">
                Tailwind components
              </p>
              <p className="order-1 text-5xl font-extrabold text-amber-500 md:text-6xl">
                120
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCount;