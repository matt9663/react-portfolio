import React from "react";
import "./nav-items.styles.scss";
import HamburgerToggleButton from "../hamburger-nav/hamburger-toggle-button";
import HamburgerNav from "../hamburger-nav/hamburger-nav.component";

const NavItems = ({ sideDrawerOpen, toggleSideDrawer }) => {
  return (
    <div className="nav-items-container">
      <HamburgerToggleButton
        toggleSideDrawer={toggleSideDrawer}
        sideDrawerOpen={sideDrawerOpen}
      />
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
      <HamburgerNav
        sideDrawerOpen={sideDrawerOpen}
        toggleSideDrawer={toggleSideDrawer}
      />
    </div>
  );
};

export default NavItems;
