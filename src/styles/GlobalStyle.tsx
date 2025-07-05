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
    --color-root-regular: #fff;
    --color-root-strong: #f2f4f7;
    --color-fill-regular: rgba(146, 157, 173, 0.92);
    --color-fill-strong: rgba(146, 157, 173, 0.88);
    --color-fill-static: #fff;
    --color-fill-interactive: rgba(255, 255, 255, 0.8);
    --color-fill-inverted: #111214;

    --color-base: #1d2633;
    --color-additive: rgba(29, 38, 51, 0.8);
    --color-assistive: rgba(29, 38, 51, 0.6);
    --color-disabled: rgba(29, 38, 51, 0.4);
    --color-inverted: #ebeef2;
    --color-elevated: #fff;

    /* semantic colors */
    --semantic-brand: #4288EB;
    --semantic-success: #16B874;
    --semantic-warning: #FFBF0F;
    --semantic-danger: #FF244B;
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
