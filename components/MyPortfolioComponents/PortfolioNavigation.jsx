import React from "react";

const PortfolioNavigation = ({ sections, activeSection, setActiveSection }) => {
  return (
    <div className="lg:mx-12">
      <h1 className="text-2xl font-bold text-slate-700">Categories</h1>
      <div className="mt-4 space-y-4 lg:mt-8">
        {Object.keys(sections).map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`group text-base transition duration-300 block text-left ${
              activeSection === section ? "text-amber-600 " : "text-slate-800 "
            }`}
          >
            {section}
            <span className="mt-1 block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-amber-500"></span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PortfolioNavigation;



