import React from "react";
import { ThemeProvider as StyledComponentsProvider } from "styled-components";

const colors = {
  primary: "#202125",
  secondry: "#FFFFFF",
  text: "#A1A2A4",
  info: "#5BCB02",
  background: "#F8F8F8",
  border: "#EEEEEE",
};

const fonts = {
  primary: "roboto, sans-serif",
};

const fontSize = {
  fs10: "10px",
  fs12: "12px",
  fs14: "14px",
  fs16: "16px",
  fs20: "20px",
  fs24: "24px",
  fs32: "32px",
};

const lineHeights = {
  lh24: "24px",
  lh27: "27px",
  lh34: "34px",
  lh41: "41px",
  lh51: "54px",
};

const fontWeight = {
  fw400: 400,
  fw600: 600,
  fw700: 700,
  fw900: 900,
};

const shadows = {
  sm: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
  md: "0 2px 4px 0 rgba(0, 0, 0, 0.15)",
  lg: "0 3px 8px 0 rgba(0, 0, 0, 0.15)",
  xl: "0 6px 12px 0 rgba(0, 0, 0, 0.10)",
};

const paddings = {
  p16: "16px",
  p20: "20px",
  p30: "30px",
  p40: "40px",
  p80: "80px",
};

const radii = {
  r8: "8px",
  r10: "10px",
  r12: "12px",
};

const borderWidths = {
  sm: "1px",
  md: "2px",
};

export const theme = {
  colors,
  fonts,
  fontSize,
  lineHeights,
  fontWeight,
  shadows,
  borderWidths,
  paddings,
  radii,
};

const ThemeProvider: React.FC = ({ children }) => {
  return (
    <StyledComponentsProvider theme={theme}>
      {children}
    </StyledComponentsProvider>
  );
};

type ThemeType = typeof theme;
export type { ThemeType };

export default ThemeProvider;
