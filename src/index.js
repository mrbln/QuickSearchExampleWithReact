import React from "react";
import { render } from "react-dom";
import { InputView } from "./InputView.js";

const App = () => (
  <div>
    <InputView />
  </div>
);

render(<App />, document.getElementById("root"));
