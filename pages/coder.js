import React from "react";
import { Footer } from "@components";
import { NavBar } from "@components";
import { Hero } from "@components";
import { ToolsSkills } from "@components";
import { CoderProjectsSection } from "@components";
import { Testimonials } from "@components";
import { FAQ } from "@components";
import { CTAContact } from "@components";

const Coder = () => {
  return (
    <div>
      <NavBar />
      <Hero
        title="Hi, I'm Gabi! 🚀"
        description="I'm a front-end developer specializing in creating responsive and interactive websites. I focus on enhancing the visual appeal and functionality of your projects, ensuring they are both beautiful and user-friendly."
        imageURL="./images/HeroCoder.png"
      />
      <ToolsSkills />
      <CoderProjectsSection />
      <Testimonials />
      <FAQ />
      <CTAContact />
      <Footer />
    </div>
  );
};

export default Coder