import React from "react";
import "./project-section.style.scss";

import { projects } from "../../data";
import ProjectCard from "../ProjectCard/project-card.component";

const ProjectSection = () => {
  return (
    <div className="projects-section" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
