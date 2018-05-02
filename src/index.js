import React from "react";
import { render } from "react-dom";
import { SearchBar } from "./SearchBar.js";

const App = () => (
  <div>
    <SearchBar />
  </div>
);

render(<App />, document.getElementById("root"));
