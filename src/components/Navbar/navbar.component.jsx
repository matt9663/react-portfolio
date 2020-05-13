import React from "react";
import "./navbar.styles.scss";

import NavItems from "../nav-items/nav-items.component";
import NavTitle from "../nav-title/nav-title.component";

const Navbar = ({ theme }) => {
  return (
    <nav className={`site-nav ${theme}`}>
      <NavTitle />
      <NavItems />
    </nav>
  );
};

export default Navbar;
