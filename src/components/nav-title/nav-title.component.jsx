import React from "react";
import { debounce } from "../../utils";

const NavTitle = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 700;
  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", debounce(handleResize, 80));
    return () =>
      window.removeEventListener("resize", debounce(handleResize, 80));
  }, []);
  return width > breakpoint ? (
    <h2>
      <a href="/">Matt Wood</a>
    </h2>
  ) : (
    <h2>
      <a href="/">Matt Wood</a>
    </h2>
  );
};

export default NavTitle;
