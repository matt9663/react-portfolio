import React from "react";

const ProjectCard = ({ title, subtitle }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
};

export default ProjectCard;
