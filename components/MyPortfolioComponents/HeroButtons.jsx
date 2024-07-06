import React from "react";

const HeroButtons = () => {
  return (
    <div className="mt-4 flex flex-row items-center justify-center gap-x-3">
      <a
        href="https://dribbble.com/BuiltByG"
        className="block sm:w-auto py-2 px-4 text-center hover:text-white text-pink-500 font-medium duration-150 hover:bg-pink-500 rounded-lg shadow-lg"
      >
        <i className="text-3xl fa-brands fa-dribbble"></i>
      </a>
      <a
        href="https://github.com/VladGabi17"
        className="block sm:w-auto py-2 px-4 text-center hover:text-white text-slate-700 font-medium duration-150 hover:bg-slate-700 rounded-lg shadow-lg"
      >
        <i className="text-3xl fa-brands fa-github"></i>
      </a>
    </div>
  );
};

export default HeroButtons;
