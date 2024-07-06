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

const Designer = () => {
  return (
    <div>
      <NavBar />
      <ProjectHero
        image="https://framerusercontent.com/images/wOfARbIhJBKZ6JW4dbyItucZnlk.png"
        title="Hype4 Business"
        subtitle="An entrepreneur is a calm person, with our app"
      />
      <OverviewSection
        title1="Role"
        description1="As the Product Designer, I managed the entire UX and UI design process from start to finish."
        title2="Project duration"
        description2="3 weeks | Summer 2023"
        title3="Product"
        description3="Hype4 Business is a dashboard to monitor every sale, income and more in one or more businesses. On the home page, the user can easily see the money coming in and going out for their business with a simple login."
        title4="Goals"
        description4="Adding a mobile-friendly version will significantly increase the company's market reach. Increasing conversion rates. Improving usability"
      />
      <Project1Text2Image
        title="Persona"
        description="After reviewing user interview data, it became evident that I should develop a persona to represent the target end-user. To properly guide me through the design process, I wanted to ensure that this persona accurately portrayed a person who has numerous pain points and motivations."
        image1="https://framerusercontent.com/images/IlVYPLi9hCJJO1gKugFG9TTPwc.png"
        image2="https://framerusercontent.com/images/Be7HhLmd328aKVEm82dEOk6CIw.png"
      />
      <Project2Text1Image
        title1="Journey Map"
        description1="Once a persona was made, I created a user journey map to understand how potential users would operate and interact with this application."
        title2="Improvement"
        description2="Simplify the data source selection process to make it more intuitive. Offer in-app tutorials or tooltips for users new to data analysis. Ensure the app is responsive and fast, especially when working."
        image="https://framerusercontent.com/images/eiRtE4GWzWMHlY256tU68Oh0yY4.png"
      />
      <Project2Text1Image
        title1="Site Map"
        description1="Before starting the ideation and sketching process, I wanted to determine the most valuable features and pages for users based on their research findings."
        title2="How Might We"
        description2="How might we simplify the onboarding process for busy professionals? How might we improve the representation of business data for better user understanding?"
        image="https://framerusercontent.com/images/Vex9hohHIqCB1RDj6cimFMnKZOQ.png"
      />
      <Project1Text1Image
        title="Branding"
        description="As a brand, I needed to create a consistent visual identity and a strong brand platform."
        image="https://framerusercontent.com/images/XxV3DsK05gfqeA88hia0naCnHE.png"
      />
      <Project2Text1Image
        title1="Sketch"
        description1="I started with several basic sketches of how I wanted the overall layout to be structured to begin the design stage. This was reflected in the sketches shown below.  "
        title2="Wireframe"
        description2="After finalizing the sketch layout, the next step was to translate those concepts into low-fidelity wireframes to visualize the app's structure."
        image="https://framerusercontent.com/images/NrYLp9X9UMRxzBXwV44R5LaQf4.png?scale-down-to=1024"
      />

      <Project1Text2ImageReverse
        title="High Fidelity"
        description="Following initial user feedback and early iterations of the mockup, the preliminary design was completed. The aim was to establish a clear and simplified layout, ensuring an intuitive user experience."
        image1="https://framerusercontent.com/images/xHC7GGbfKnbT9awZSyVHfdeoEs.png"
        image2=""
      />
      <FeaturedProjectsSection />
      <Footer />
    </div>
  );
};

export default Designer;
