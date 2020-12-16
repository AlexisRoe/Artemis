import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

setTimeout(() => {
  document
    .querySelector(".loader")
    .parentNode.removeChild(document.querySelector(".loader"));

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
}, 1500);
