import { createGlobalStyle, css } from "styled-components";

const fonts = css`
  ${import("./assets/fonts/fonts.css")}
`;

const GlobalStyle = createGlobalStyle`

/* import all fonts */
${fonts}

*, 
*::before, 
*::after {
    box-sizing: border-box;
}

:root {
    --color-bg-white: #fff;
    --color-bg-dark: #2d2c2a;
    --color-bg-sub: #b69e4f;
    --color-font-white: #fff;
    --color-font-sub: #8b8585;
    --color-font-disabled: #fcfbf9;
    --font-body-copy: #54534a;
    --color-golden: #b69e4f;
    --color-golden-dark: #9f8641;
    --font-family-header: "Poppins", sans-serif;
    --font-family-body: "Open Sans", sans-serif;
}

html {
    height: 100%;
}

body {
    height: 100%;
    margin: 0;
    padding: 0;
}

`;

export default GlobalStyle;
