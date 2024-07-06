import React from "react";

const HeroText = ({ title, description }) => {
  return (
    <div className="space-y-5 max-w-4xl mx-auto text-center">
      <h2 className="text-5xl text-slate-700 font-extrabold mx-auto md:text-6xl">
        {title}
      </h2>
      <p className="py-5 text-slate-700 text-xl max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
};

export default HeroText;