import React from "react";
import "./skills-card.style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SkillsCard = ({ headerIcon, title, technologies, underline }) => {
  return (
    <div className={`skills-card ${underline}-underline`}>
      <FontAwesomeIcon className="skill-icon" icon={headerIcon} />
      <h3 className="card-header">{title}</h3>
      <ul className="tech-list">
        {technologies.map((tech, index) => (
          <li className="tech" key={index}>
            {Array.isArray(tech.logo) ? (
              <FontAwesomeIcon className="tech-icon" icon={tech.logo} />
            ) : null}
            {tech.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsCard;
