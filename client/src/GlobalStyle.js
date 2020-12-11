import { createGlobalStyle } from "styled-components";
import Poppins500 from "./assets/fonts/Poppins/poppins-v15-latin-500.woff2";
import Poppins600 from "./assets/fonts/Poppins/poppins-v15-latin-600.woff2";
import Poppins700 from "./assets/fonts/Poppins/poppins-v15-latin-700.woff2";
import OpenSans600 from "./assets/fonts/Open_Sans/open-sans-v18-latin-600.woff2";
import OpenSans700 from "./assets/fonts/Open_Sans/open-sans-v18-latin-700.woff2";

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: "Poppins";
    font-style: swap;
    font-weight: 500;
    src: url(${Poppins500});
  }
@font-face {
    font-family: "Poppins";
    font-style: swap;
    font-weight: 600;
    src: url(${Poppins600});
  }
@font-face {
    font-family: "Poppins";
    font-style: swap;
    font-weight: 700;
    src: url(${Poppins700});
  }
@font-face {
    font-family: "Open Sans";
    font-style: swap;
    font-weight: 600;
    src: url(${OpenSans600});
  }
@font-face {
    font-family: "Open Sans";
    font-style: swap;
    font-weight: 700;
    src: url(${OpenSans700});
  }

*, 
*::before, 
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

:root {
    --color-bg-white: #fff;
    --color-bg-dark: #2d2c2a;
    --color-bg-sub: rgba(182, 158, 79, .24);
    --color-golden: #b69e4f;
    --color-alarm: #c32020;
    --color-golden-dark: #9f8641;

    --color-state-default: rgb(208, 179, 86);
    --color-state-error: rgb(182, 99,79);
    --color-highlight-bg: rgba(182,158, 79, 13);

    --animation-curve: cubic-bezier(0.6, 0.04, 0.98, 0.335);

    --color-font-white: #fff;
    --color-font-sub: #8b8585;
    --color-font-disabled: #737373;
    --font-body-copy: #54534a;
    --font-family-header: "Poppins", sans-serif;
    --font-family-body: "Open Sans", sans-serif;
}

html {
    height: 100%;
}

body {
    height: 100%;
    font-size: 16px;
    font-family: var(--font-family-body);
    font-weight: 500;
    color: var(--font-body-copy);
    display: grid;
    grid-template-rows: 150px 1fr;
}

header {
    position: fixed;
    width: 100%;
    z-index: 100;
    grid-row: 1/2;
}

main {
    grid-row: 2/3;
}

h1, h2 {
    font-family: var(--font-family-header);
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
