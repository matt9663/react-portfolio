import React, { useState } from "react";
import "./navbar.styles.scss";
import { useScrollPosition } from "../../hooks/scroll-position";
import NavItems from "../nav-items/nav-items.component";
import NavTitle from "../nav-title/nav-title.component";

const Navbar = () => {
  const [hideOnScroll, setHideOnScroll] = useState(false);
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y < prevPos.y;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll],
    false,
    false,
    250
  );
  let navClass = hideOnScroll ? "nav-hidden" : "nav-show";
  return (
    <nav className={`site-nav ${navClass}`}>
      <NavTitle />
      <NavItems />
    </nav>
  );
};

export default Navbar;
