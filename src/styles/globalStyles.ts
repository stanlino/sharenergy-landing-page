import { darken } from "polished";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    --accent-color: #00A2A2;
    --accent-color-darken: ${darken(0.1, "#00A2A2")};
    --heading-color: #161C2D;
    --text-color: #6E727D;
  }

  body, #__next {
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    flex: 1;

    font-family: inter, sans-serif;
  }
`;
