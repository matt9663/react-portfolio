import React from "react";
import "./section-container.style.scss";

const SectionContainer = ({ children }) => {
  return <section className="section-container">{children}</section>;
};

export default SectionContainer;
