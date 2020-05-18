import React, { useState } from "react";
import "./navbar.styles.scss";
import { useScrollPosition } from "../../hooks/scroll-position";
import NavItems from "../nav-items/nav-items.component";
import NavTitle from "../nav-title/nav-title.component";
import Backdrop from "../backdrop/backdrop.component";

const Navbar = () => {
  const [hideOnScroll, setHideOnScroll] = useState(false);
  const [sideDrawerOpen, setSideDrawer] = useState(false);
  function toggleSideDrawer() {
    const currState = sideDrawerOpen;
    setSideDrawer(!currState);
  }
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
  let navClass = !sideDrawerOpen && hideOnScroll ? "nav-hidden" : "nav-show";
  return (
    <nav className={`site-nav ${navClass}`}>
      <NavTitle />
      <NavItems
        toggleSideDrawer={toggleSideDrawer}
        sideDrawerOpen={sideDrawerOpen}
      />
      {sideDrawerOpen ? <Backdrop toggleSideDrawer={toggleSideDrawer} /> : null}
    </nav>
  );
};

export default Navbar;
