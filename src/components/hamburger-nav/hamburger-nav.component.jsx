import React from "react";

export default class HamburgerNav extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }
  render() {
    const { open } = this.state;

    return (
      <div className={`hamburger-nav ${open ? "visible" : "hidden"}`}>
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
  }
}
