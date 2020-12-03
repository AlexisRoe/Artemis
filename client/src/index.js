import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

document.querySelector(".loader").classList.add("loader--hide");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
