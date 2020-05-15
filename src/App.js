import React from "react";
import "./App.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faServer,
  faLaptopCode,
  faTerminal,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import Navbar from "./components/Navbar/navbar.component";
import Main from "./components/main/main.component";

library.add(fab, faLaptopCode, faServer, faTerminal, faBars);

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
