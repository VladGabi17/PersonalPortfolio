import React from "react";
import { HeroText, HeroButtons, HeroImage } from "@components";

const Hero = ({ title, description, imageURL }) => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 gap-12 text-gray-600 md:px-8 pt-48">
      <HeroText title={title} description={description} />
      <HeroButtons />
      <HeroImage imageURL={imageURL} />
    </section>
  );
};

export default Hero;