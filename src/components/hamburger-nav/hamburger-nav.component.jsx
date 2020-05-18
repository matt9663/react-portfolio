import React from "react";
import "./hamburger-nav.styles.scss";

const HamburgerNav = ({ sideDrawerOpen, toggleSideDrawer }) => {
  return (
    <nav className={`hamburger-nav ${sideDrawerOpen ? "visible" : "hidden"}`}>
      <ul className="hamburger-nav-items">
        <li className="nav-item bio-item">
          <a href="#bio" onClick={() => toggleSideDrawer()}>
            BIO
          </a>
        </li>
        <li className="nav-item skills-item">
          <a href="#skills" onClick={() => toggleSideDrawer()}>
            SKILLS
          </a>
        </li>
        <li className="nav-item projects-item">
          <a href="#projects" onClick={() => toggleSideDrawer()}>
            PROJECTS
          </a>
        </li>
        <li className="nav-item contact-item">
          <a href="#contact" onClick={() => toggleSideDrawer()}>
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default HamburgerNav;
