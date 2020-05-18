import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./hamburger-toggle-button.style.scss";

const HamburgerToggleButton = ({ sideDrawerOpen, toggleSideDrawer }) => {
  const icon = sideDrawerOpen ? "times" : "bars";
  return (
    <div className="hamburger">
      <button className="toggle-button" onClick={() => toggleSideDrawer()}>
        <FontAwesomeIcon icon={icon} />
      </button>
    </div>
  );
};

export default HamburgerToggleButton;
