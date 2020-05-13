import React from "react";
import "./nav-items.styles.scss";

const NavItems = () => {
  return (
    <div className="nav-items-container">
      <ul className="nav-items">
        <li className="nav-item bio-item">
          <a href="#bio">BIO</a>
        </li>
        <li className="nav-item skills-item">
          <a href="#skills">SKILLS</a>
        </li>
        <li className="nav-item projects-item">
          <a href="#projects">PROJECTS</a>
        </li>
        <li className="nav-item contact-item">
          <a href="#contact">CONTACT</a>
        </li>
      </ul>
    </div>
  );
};

export default NavItems;
