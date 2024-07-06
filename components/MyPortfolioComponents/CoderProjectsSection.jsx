import React from "react";
import CoderProjects from "./CoderProjects";

const CoderProjectsSection = () => {
  return (
    <section className="pt-32 pb-20">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-5xl text-slate-700 font-extrabold mx-auto md:text-6xl">
            Portfolio
          </h3>
          <p className="py-10 text-slate-700 text-xl max-w-2xl mx-auto">
            Welcome to my portfolio! These projects showcases my skills in
            Tailwind and React, highlighting my ability to create visually
            stunning and highly functional websites. Explore my projects to see
            how I bring ideas to life.
          </p>
        </div>
        <div className="mt-12">
          <CoderProjects />
        </div>
      </div>
    </section>
  );
};

export default CoderProjectsSection;