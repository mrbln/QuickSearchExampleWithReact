import React from "react";
import { render } from "react-dom";
import { SearchBar } from "./SearchBar.js";
import { VideoContainer } from "./VideoContainer.js";

const App = () => (
  <div>
    <SearchBar />
    <VideoContainer videoLink="https://www.youtube.com/embed/FxbzRzc_xbQ" />
  </div>
);

render(<App />, document.getElementById("root"));
