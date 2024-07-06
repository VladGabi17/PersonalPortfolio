import React, { useState } from "react";

import { PortfolioNavigation, PortfolioContent } from "@components";

const sections = {
  "UI/UX Design": [
    {
      title: "Chess Coders",
      link: "https://streamlined-input-896370.framer.app/",
      imageUrl:
        "https://framerusercontent.com/images/mnVZBLZy3Eamtx1nofjDIdDq0k.jpg?scale-down-to=1024",
    },
    {
      title: "Cash Tree",
      link: "/cash-tree",
      imageUrl:
        "https://framerusercontent.com/images/acnLYicyulgp3YhvKe0djUVbneA.png",
    },
    {
      title: "Hype4 Business",
      link: "/hype4",
      imageUrl:
        "https://framerusercontent.com/images/xHC7GGbfKnbT9awZSyVHfdeoEs.png",
    },
  ],
  Code: [
    {
      title: "Sidebar Layout",
      link: "https://github.com/sebiamr22/chesscoders-ui/tree/gabi",
      imageUrl: "./images/Sidebar.png",
    },
    {
      title: "Home Page",
      link: "https://github.com/sebiamr22/chesscoders-ui/tree/CC-17",
      imageUrl: "./images/HomePage.png",
    },
    {
      title: "Sign-In Page",
      link: "https://github.com/sebiamr22/chesscoders-ui/tree/gabi",
      imageUrl: "./images/SignIn.png",
    },
  ],
  Wireframe: [
    {
      title: "E-commerce Tracking",
      link: "/wireframe-gallery",
      imageUrl:
        "https://framerusercontent.com/images/7h2JqfD60wQbP7q0Sqnr8i7d8.png?scale-down-to=1024",
    },
    {
      title: "E-commerce Page",
      link: "/wireframe-gallery",
      imageUrl:
        "https://framerusercontent.com/images/RKftxhCoHSytKTeZN5lbbHPKQ5g.png?scale-down-to=1024",
    },
    {
      title: "E-commerce Product",
      link: "/wireframe-gallery",
      imageUrl:
        "https://framerusercontent.com/images/8u8vNZCXdBK0JQ4gDjRuNV6fhE.png?scale-down-to=1024",
    },
  ],
  "Logo Design": [
    {
      title: "Atelier Alina",
      link: "https://www.atelieralina.art/",
      imageUrl: "./images/AtelierAlina.png",
    },
  ],
};

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("UI/UX Design");

  return (
    <section className="max-w-screen-xl flex flex-wrap justify-between mx-auto p-7">
      <div className=" py-32">
        <h1 className="text-5xl text-slate-700 font-extrabold md:text-6xl">
          Latest work
        </h1>
        <div className="mt-8 xl:mt-16 lg:flex lg:-mx-12">
          <PortfolioNavigation
            sections={sections}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
          <PortfolioContent activeSection={activeSection} sections={sections} />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
