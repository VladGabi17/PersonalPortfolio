import React from "react";

const HomeHero = () => {
  return (
    <header className="pt-32 flex items-center justify-center">
      <div className="container mx-auto">
        <div className="flex items-center justify-center w-full h-full">
          <div className="w-1/2 h-full">
            <a href="/coder" className="w-full h-full block">
              <img
                className="w-full h-full object-cover opacity-30 hover:opacity-100 duration-200"
                src="./images/Test11.png"
              />
            </a>
          </div>
          <div className="w-1/2 h-full">
            <a href="/designer" className="w-full h-full block">
              <img
                className="w-full h-full object-cover opacity-30 hover:opacity-100 duration-200"
                src="./images/Test12.png"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeHero;