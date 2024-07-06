import React from "react";
import FeaturedProjectsCard from "./FeaturedProjectsCard";

const FeaturedProjectsSection = () => {
  return (
    <section className="bg-white pt-16">
      <div className="h-[32rem] container px-6 py-5 mx-auto">
        <h1 className="text-4xl text-slate-700 font-extrabold md:text-5xl text-center">
          Featured Projects
        </h1>
      </div>
      <FeaturedProjectsCard />
    </section>
  );
};

export default FeaturedProjectsSection;