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
        image="https://framerusercontent.com/images/nrx55z5YkQrF0g56sjM69B7typU.png"
        title="Shopit"
        subtitle="The home of personal electronics"
      />
      <OverviewSection
        title1="Role"
        description1="As the solo Product Designer, I handled the entire UX process and UI design from start to finish."
        title2="Project duration"
        description2="2 weeks | Summer"
        title3="Product"
        description3="'Shopit' allows users to browse product catalogs, create wish lists, add items to a cart, and complete purchases. Focusing on the environment where customers do not have time to go to shops and buy their products due to work and stress."
        title4="Goals"
        description4="Include all of the necessary steps involved in the user's journey and document some of the most common emotions and problems. Increasing conversion rates. Improving usability"
      />
      <Project1Text2Image
        title="Persona"
        description="After reviewing user interview data, it became evident that I should develop a persona to represent the target end-user. To properly guide me through the design process, I wanted to ensure that this persona accurately portrayed a person who has numerous pain points and motivations."
        image1="https://framerusercontent.com/images/x6NYLlAVpBnc2VxYqKl5ih12E.png"
        image2="https://framerusercontent.com/images/pu9YU17dFXAb9RGXxJlHUeIPJI.png"
      />
      <Project2Text1Image
        title1="Journey Map"
        description1="I mapped out the users’ steps to help tell the story of their experience with the brand from original engagement into a potential long-term relationship."
        title2="Improvement"
        description2="Enhance the payment process for smoother transactions. Consider offering a guest checkout option for users who don't want to create an account. Continuously update product images and descriptions to match the actual product."
        image="https://framerusercontent.com/images/4zKh992DXqs7qJDhDhNQFBgpNQ.png"
      />
      <Project2Text1Image
        title1="Site Map"
        description1="I structured my ideas and categorized key features and functions using a sitemap. This helped me create a top-level view of the screens, enabling me to visualize the navigation structure and screen hierarchy."
        title2="How Might We"
        description2="How might we simplify the product search? How might we streamline the checkout process and improve transaction ease? How might we ensure quick and user-friendly access to customer accounts?"
        image="https://framerusercontent.com/images/t7EuY2Yt0psSHIbp4qifQ0XLS8.png"
      />
      <Project1Text1Image
        title="Branding"
        description="I needed to establish a unified visual identity and a robust brand foundation as a brand."
        image="https://framerusercontent.com/images/dhjfjLMdTjSgXtnynyeBt08qls.png"
      />
      <Project2Text1Image
        title1="Sketch"
        description1="To initiate the design stage, I began with basic sketches outlining the desired layout structure, which is illustrated in the accompanying sketches."
        title2="Wireframe"
        description2="I prioritized creating detailed wireframes. This decision was made with the expectation that it would lead to improved usability testing compared to using hand-drawn sketches."
        image="https://framerusercontent.com/images/VFILRmnzYpa0Omiz2lVuQuqsY.png?scale-down-to=1024"
      />

      <Project1Text2ImageReverse
        title="High Fidelity"
        description="Following initial user feedback and early iterations of the mockup, the preliminary design was completed. The aim was to establish a clear and simplified layout, ensuring an intuitive user experience."
        image1="https://framerusercontent.com/images/acnLYicyulgp3YhvKe0djUVbneA.png"
        image2=""
      />
      <FeaturedProjectsSection />
      <Footer />
    </div>
  );
};

export default Designer;