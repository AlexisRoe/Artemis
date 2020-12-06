import React from "react";
import GlobalStyle from "../src/GlobalStyle";
import { BrowserRouter as Router } from "react-router-dom";

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Router>
        <Story />
      </Router>
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
};
