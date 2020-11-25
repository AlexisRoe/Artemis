import { createGlobalStyle } from "styled-components";
import { fonts } from "./assets/fonts/fonts";

const GlobalStyle = createGlobalStyle`

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
    font-size: 16px;
    background-color: var(---color-bg-white);
    font-family: var(--font-body-copy);
}

h1, h2 {
    font-family: var(---font-family-header);
    text-transform: uppercase;
}

h1 {
    font-weight:600;
    font-size: 24px;
    letter-spacing: 1rem;
}

h2 {
    font-weight:600;
    font-size:20px;
}

h3 {
    font-weight:700;
    font-size:20px;
}

h4 {
    font-weight:700;
    font-size:16px;
}

button, button:hover, button:focus {
    outline:none;
}

`;

export default GlobalStyle;
