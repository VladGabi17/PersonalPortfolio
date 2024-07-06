import React from "react";
import {
  ProjectsHeader,
  ProjectsRightSide,
  ProjectsLeftSide,
} from "@components";

function Projects() {
  return (
    <div className="pt-32">
      <ProjectsHeader />
      <ProjectsRightSide
        title="CashTree"
        description="UX/UI Design | Banking App | Mobile Design"
        imageUrl="https://framerusercontent.com/images/acnLYicyulgp3YhvKe0djUVbneA.png"
        buttonText="Case Study"
        link="/cash-tree"
      />
      <ProjectsLeftSide
        title="Hype4 Business"
        description="UX/UI Design | Dashboard | Responsive Design"
        imageUrl="https://framerusercontent.com/images/xHC7GGbfKnbT9awZSyVHfdeoEs.png"
        buttonText="Case Study"
        link="/hype4"
      />
      <ProjectsRightSide
        title="Shopit"
        description="UX/UI Design | E-Commerce | Responsive Design"
        imageUrl="https://framerusercontent.com/images/c47j5C5xgsIXgH1f6NGlDaGq7wA.png"
        buttonText="Case Study"
        link="/shopit"
      />
      <ProjectsLeftSide
        title="Chess Coders"
        description="UX/UI Design | Business | Responsive Design"
        imageUrl="data:image/png;base64,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"
        buttonText="Case Study"
        link="https://streamlined-input-896370.framer.app/"
      />
      <ProjectsRightSide
        title="Atelier Alina"
        description="Logo Design | Typography"
        imageUrl="./images/AtelierAlina.png"
        buttonText="Case Study"
        link="https://www.atelieralina.art/"
      />
      <ProjectsLeftSide
        title="Edu Sah"
        description="Review | Feedback"
        imageUrl="https://framerusercontent.com/images/mp8DVmeuw6obFWdcYgIG4Ztwo.png?scale-down-to=1024"
        buttonText="Case Study"
        link="https://www.edusah.ro/"
      />
    </div>
  );
}

export default Projects;