// src/styles/GlobalStyle.tsx
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    /* 텍스트 변수 */
    --Size-Display: 48px;
    --Line-Height-Display: 70px;

    --Size-Title: 24px;
    --Line-Height-Title: 34px;

    --Size-Headline: 20px;
    --Line-Height-Headline: 28px;

    --Size-Subhead: 18px;
    --Line-Height-Subhead: 26px;

    --Size-Body: 16px;
    --Line-Height-Body: 24px;

    --Size-Paragraph-Large: 16px;
    --Line-Height-Paragraph-Large: 26.4px

    --Size-Paragraph-Small: 14px;
    --Line-Height-Paragraph-Small: 22px;

    --Size-Callout: 14px;
    --Line-Height-Callout: 20px;

    --Size-Footnote: 12px;
    --Line-Height-Footnote: 18px;

    /* 컬러 시스템 (라이트) */
    --background-root-regular: #FFFFFF;
    --background-root-strong: #F2F4F7;
    --background-fill-regular: #EEF0F2;
    --background-fill-strong: #EAECEFii;
    --background-fill-static: #FFFFFF;
    --background-fill-interactive: #FDFDFE;
    --background-fill-inverted: #111214;

    --content-base: #1D2633;
    --content-additive: #4A515C;
    --content-assistive: #777D85;
    --content-disabled: #A5A8AD;
    --content-iinverted: #EBEEF2;
    --content-elevated: #FFFFFF;

    /* semantic colors */
    --semantic-brand: #4288EB;
    --semantic-success: #16B874;
    --semantic-warning: #FFBF0F;
    --semantic-danger: #FF244B;

    /* border colors */
    --border-divider-regular: #E9EBEF;
    --border-divider-strong: #1D2633;
    --border-outline-regular: #EEEFF2;
    --border-outline-strong: #1D2633;
  }

  @font-face {
    font-family: 'SUIT';
    src: url('/fonts/SUIT-Variable.woff2') format('woff2');
    font-weight: 100 900;
    font-style: normal;
    font-display: swap;
  }

  * {
    font-family: 'SUIT', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--color-root-regular);
    color: var(--color-base);
  }
`;

export default GlobalStyle;
