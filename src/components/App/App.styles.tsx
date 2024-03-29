import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import "@fontsource/nunito-sans";
import "@fontsource/permanent-marker";

import { theme } from "../../values/theme";

// eslint-disable-next-line import/prefer-default-export
export const Global = createGlobalStyle`
  ${reset}

  body {
    font-family: ${theme.fonts.primary};
  }
`;
