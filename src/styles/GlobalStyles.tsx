import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./ThemeProvider";

const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.colors.background} ;
    font-family: ${({ theme }) => theme.fonts.primary};
  }
`;

export default GlobalStyles;
