import React from "react";
import { Footer } from "@components";
import { NavBar } from "@components";
import { Portfolio } from "@components";
import { HomeHero } from "@components";

const Home = () => {
  return (
    <div>
      <NavBar />
      <HomeHero />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default Home;