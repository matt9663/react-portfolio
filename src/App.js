import React from "react";
import "./App.scss";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faServer,
  faLaptopCode,
  faTerminal,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import Navbar from "./components/Navbar/navbar.component";
import Main from "./components/main/main.component";

library.add(faLaptopCode, faServer, faTerminal, faBars, faTimes);

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
