import React from "react";
import "./backdrop.styles.scss";

const Backdrop = ({ toggleSideDrawer }) => {
  return <div className="backdrop" onClick={() => toggleSideDrawer()}></div>;
};

export default Backdrop;
