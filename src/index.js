import React from "react";
import { render } from "react-dom";
import { SearchBarContainer } from "./components/SearchBar/SearchBarContainer.js";

const App = () => (
  <div align="center">
    <SearchBarContainer />
  </div>
);

render(<App />, document.getElementById("root"));
