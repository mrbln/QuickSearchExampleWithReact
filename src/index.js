import React from "react";
import { render } from "react-dom";
import { SearchBarView } from "./components/SearchBar/SearchBarView.js";

const App = () => (
  <div align="center">
    <SearchBarView />
  </div>
);

render(<App />, document.getElementById("root"));
