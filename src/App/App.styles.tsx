import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

// eslint-disable-next-line import/prefer-default-export
export const Global = createGlobalStyle`
  ${reset}

  body {
    font-family: "Roboto";
  }
`;
