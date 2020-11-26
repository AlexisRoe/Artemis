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
    /* 
    for storybook there is another color needed
    background-color: var(--color-bg-white); 
    */
    background-color: lightgray;
    font-family: var(--font-family-body);
    font-weight: 500;
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
