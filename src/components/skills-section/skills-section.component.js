import React from "react";
import "./skills-section.style.scss";
import SkillsCard from "../SkillsCard/skills-card.component";

import { skills } from "../../data";

const SkillsSection = () => {
  const underlines = ["red", "yellow", "green"];
  return (
    <div className="skills-section" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skill-card-section">
        {skills.map((skill, index) => (
          <SkillsCard key={index} underline={underlines[index]} {...skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
