import React from "react";
import Globalstyle from "../src/Globalstyle";

export const decorators = [
  (Story) => {
    <>
      <Globalstyle />
      <Story />
    </>;
  },
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
};
