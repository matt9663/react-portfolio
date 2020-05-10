import React from "react";
import SectionContainer from "../section-container/section-container.component";
import Typewriter from "../Typewriter/typewriter.component";

const Main = () => {
  return (
    <main className="main">
      <SectionContainer>
        <Typewriter />
      </SectionContainer>
      <SectionContainer>2. Bio section</SectionContainer>
      <SectionContainer>3. Skills</SectionContainer>
      <SectionContainer>4. Projects</SectionContainer>
      <SectionContainer>5. Contact</SectionContainer>
    </main>
  );
};

export default Main;
