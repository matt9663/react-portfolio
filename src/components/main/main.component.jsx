import React from "react";
import SectionContainer from "../section-container/section-container.component";
import Typewriter from "../Typewriter/typewriter.component";
import BioSection from "../bio-section/bio-section.component";
import SkillsSection from "../skills-section/skills-section.component";
import ProjectSection from "../project-section/project-section.component";
import ContactForm from "../contact-form/contact-form.component";

const Main = () => {
  return (
    <main className="main">
      <SectionContainer>
        <Typewriter />
      </SectionContainer>
      <SectionContainer>
        <BioSection />
      </SectionContainer>
      <SectionContainer>
        <SkillsSection />
      </SectionContainer>
      <SectionContainer>
        <ProjectSection />
      </SectionContainer>
      <SectionContainer>
        <ContactForm />
      </SectionContainer>
    </main>
  );
};

export default Main;
