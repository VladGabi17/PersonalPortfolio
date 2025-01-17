import { Footer } from "@components";
import { NavBar } from "@components";
import { Portfolio } from "@components";
import { HomeHero } from "@components";

const Page = () => {
  return (
    <div>
      <NavBar />
      <HomeHero />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default Page;