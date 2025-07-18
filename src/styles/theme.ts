// src/styles/theme.ts
export const fontSize = {
    display: "48px",
    title: "24px",
    headline: "20px",
    subhead: "18px",
    body: "16px",
    small: "14px",
    callout: "14px",
    footnote: "12px",
    caption: "10px",
  };
  
  export const lineHeight = {
    display: "70px",
    title: "34px",
    headline: "28px",
    subhead: "26px",
    body: "24px",
    small: "24px",
    callout: "20px",
    footnote: "18px",
    caption: "14px",
  };
  
  export const letterSpacing = {
    display: "-1.44px",
    title: "-0.48px",
    headline: "-0.4px",
    subhead: "-0.36px",
    body: "-0.32px",
    small: "-0.42px",
    callout: "-0.28px",
    footnote: "-0.24px",
    caption: "-0.2px",
  };
  
  export const font = {
    Weak: 400,
    Regular: 500,
    Strong: 700,
  };
  
  export const theme = {
    fontSize,
    lineHeight,
    letterSpacing,
    font,
  };
  export type ThemeType = typeof theme;
