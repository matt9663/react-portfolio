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
            {tech.imageUrl ? (
              <img
                className="tech-icon"
                alt={`${tech.name} logo`}
                src={tech.imageUrl}
              />
            ) : (
              <div className="tech-icon spacer"></div>
            )}
            {tech.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsCard;
