import React from "react";
import "./project-card.style.scss";

const ProjectCard = ({
  title,
  subtitle,
  img,
  liveUrl,
  clientRepo,
  techIcons,
}) => {
  return (
    <div className="project-card" style={{ backgroundImage: `url(${img})` }}>
      <div className="card-info">
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <div className="class-icons-holder">
          {techIcons.map((icon, index) => (
            <img className="tech-icon" key={index} src={icon} alt="tech icon" />
          ))}
        </div>
        <div className="project-button-holder">
          <a className="project-link" href={liveUrl}>
            <button className="project-button">Live Site</button>
          </a>
          <a className="project-link" href={clientRepo}>
            <button className="project-button">Github Repo</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
