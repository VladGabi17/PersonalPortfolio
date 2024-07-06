import React from "react";

const PortfolioContent = ({ activeSection, sections }) => {
  return (
    <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {sections[activeSection].map((item, index) => (
          <div key={index}>
            <a href={item.link}>
              <img
                className="object-cover w-full rounded-lg h-96 shadow-lg transition-shadow duration-300 hover:shadow-2xl"
                src={item.imageUrl}
              />
              <h2 className="mt-6 text-3xl font-bold text-slate-700">
                {item.title}
              </h2>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioContent;