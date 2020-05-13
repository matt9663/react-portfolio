import React from "react";

import { projects } from "../../data";
import ProjectCard from "../ProjectCard/project-card.component";

const ProjectSection = () => {
  return (
    <div className="projects-grid" id="projects">
      <h2 className="section-title">Projects</h2>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectSection;
