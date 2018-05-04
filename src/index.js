import React from "react";
import { render } from "react-dom";
import { SearchBar } from "./SearchBar.js";

const App = () => (
  <div align="center">
    <SearchBar />
  </div>
);

render(<App />, document.getElementById("root"));
