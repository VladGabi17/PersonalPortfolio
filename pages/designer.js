import React from "react";
import { NavBar } from "@components";
import { Hero } from "@components";
import { ToolsSkills } from "@components";
import { Projects } from "@components";
import { Testimonials } from "@components";
import { FAQ } from "@components";
import { CTAContact } from "@components";
import { Footer } from "@components";

const Designer = () => {
  return (
    <div>
      <NavBar />
      <Hero
        title="Hi, I'm Gabi! 🎨"
        description="I'm a UI/UX designer specializing in creating visually stunning and user-friendly websites. I focus on enhancing the visual quality and overall user experience of your projects, making sure they stand out and engage your audience."
        imageURL="./images/HeroDesigner.png"
      />
      <ToolsSkills />
      <Projects />
      <Testimonials />
      <FAQ />
      <CTAContact />
      <Footer />
    </div>
  );
};

export default Designer;