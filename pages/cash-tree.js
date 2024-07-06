import React from "react";
import { NavBar } from "@components";
import { ProjectHero } from "@components";
import { OverviewSection } from "@components";
import { Project1Text2Image } from "@components";
import { Project2Text1Image } from "@components";
import { Project1Text1Image } from "@components";
import { Project1Text2ImageReverse } from "@components";
import { FeaturedProjectsSection } from "@components";
import { Footer } from "@components";

const CashTree = () => {
  return (
    <div>
      <NavBar />
      <ProjectHero
        image="https://framerusercontent.com/images/hEUMYiAZLCbBUO5c94xQP5JCW0c.pnghttps://framerusercontent.com/images/ex1vpNVqx34IoFl6zHKw5GuawMk.png"
        title="Cash Tree"
        subtitle="Invest, send and save smarter now. One app for all your needs"
      />
      <OverviewSection
        title1="Role"
        description1="I worked as Product Designer and I have been responsible for the complete end-to-end UX process and UI design."
        title2="Project duration"
        description2="2 weeks | Summer"
        title3="Product"
        description3="I designed a Banking App that enables real-time management of account balance, transaction history, and various account details. It allows users to transfer funds between their accounts and send money to others."
        title4="Goals"
        description4="Include all of the necessary steps involved in the user's journey. Develop an app that provides a wider, more unique selection of crypto and stocks through a modern and easy-to-use interface."
      />
      <Project1Text2Image
        title="Persona"
        description="After reviewing user interview data, it became evident that I should develop a persona to represent the target end-user. To properly guide me through the design process, I wanted to ensure that this persona accurately portrayed a person who has numerous pain points and motivations."
        image1="https://framerusercontent.com/images/4iMBTXtqQLKYRRsQlLI7nV9jiw8.png"
        image2="https://framerusercontent.com/images/cUlo2BrtEBlpQySfZEeS5AbqQ.png"
      />
      <Project2Text1Image
        title1="Journey Map"
        description1="Mapping the user journey is a visual way for me to grasp the product from the user's standpoint. It serves as a valuable resource in answering the fundamental question: how do our users truly interact with the product?"
        title2="Improvement"
        description2="Simplify the money transfer process to make it more user-friendly. Improve app navigation to reduce user frustration. Enhance the speed of loading account balance information."
        image="https://framerusercontent.com/images/RxLJW90OgRwQ8s4sudA9gCsPqc.png"
      />
      <Project2Text1Image
        title1="Site Map"
        description1="Before starting the ideation and sketching process, I wanted to determine the most valuable features and pages for users based on their research findings."
        title2="How Might We"
        description2="How might we make transactions easy? How might we represent transactions better? How might we make it easy for users to access their cards?"
        image="https://framerusercontent.com/images/hyQOovOTA5rh2WMjxjURXZ7D4RU.png"
      />
      <Project1Text1Image
        title="Branding"
        description="As a brand, I aimed to establish a cohesive visual identity and a robust brand foundation. The style guide went through multiple revisions to integrate design principles and accessibility standards."
        image="https://framerusercontent.com/images/fTAghrTOSaN2uzst6WMLkxYk.png"
      />
      <Project2Text1Image
        title1="Sketch"
        description1="Sketching plays a significant role in my problem-solving process. When I encounter difficulties, I find that putting my thoughts on paper often leads to a solution."
        title2="Wireframe"
        description2="After finalizing the sketch layout, I proceeded to translate those concepts into low-fidelity wireframes, providing a visual representation of the app's structure."
        image="https://framerusercontent.com/images/XAbDv7I2TtqAUvxkRdjY5vkmvI.png?scale-down-to=1024"
      />

      <Project1Text2ImageReverse
        title="High Fidelity"
        description="Following user feedback and multiple iterations of the prototype, the final design was finished. The goal was to create a clean and streamlined website, ensuring a stress-free user experience."
        image1="https://framerusercontent.com/images/acnLYicyulgp3YhvKe0djUVbneA.png"
      />
      <FeaturedProjectsSection />
      <Footer />
    </div>
  );
};

export default CashTree;