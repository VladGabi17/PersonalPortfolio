import React from "react";

const ToolsSkillsButtons = ({ selected, setSelected }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center p-1 border border-amber-500 rounded-xl">
        <button
          onClick={() => setSelected("tools")}
          className={`px-4 py-2 text-base font-medium  transition-colors duration-300 md:py-3 rounded-xl md:px-12 ${
            selected === "tools"
              ? "bg-amber-500 text-white"
              : "text-amber-500 hover:bg-amber-500 hover:text-white"
          }`}
        >
          Tools
        </button>
        <button
          onClick={() => setSelected("skills")}
          className={`ml-2 px-4 py-2 text-base font-medium  transition-colors duration-300 md:py-3 rounded-xl md:px-12 ${
            selected === "skills"
              ? "bg-amber-500 text-white"
              : "text-amber-500 hover:bg-amber-500 hover:text-white"
          }`}
        >
          Skills
        </button>
      </div>
    </div>
  );
};

export default ToolsSkillsButtons;