import React, { useState } from "react";
import {
  ToolsSkillsHeader,
  ToolsSkillsButtons,
  ToolsSkillsContent,
} from "@components";

function ToolsSkills() {
  const [selected, setSelected] = useState("tools");

  return (
    <div className="max-w-screen-xl mx-auto px-4 gap-12 text-gray-600 md:px-8 pt-36">
      <ToolsSkillsHeader />
      <ToolsSkillsButtons selected={selected} setSelected={setSelected} />
      <ToolsSkillsContent selected={selected} />
    </div>
  );
}

export default ToolsSkills;