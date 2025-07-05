// src/styles/DarkThemeStyle.tsx
import { createGlobalStyle } from "styled-components";

const DarkThemeStyle = createGlobalStyle`
  .dark {
    --color-root-regular: #101112;
    --color-root-strong: #0b0c0d;
    --color-fill-regular: rgba(235, 238, 242, 0.08);
    --color-fill-strong: rgba(235, 238, 242, 0.04);
    --color-fill-static: #101112;
    --color-fill-interactive: rgba(235, 238, 242, 0.04);
    --color-fill-inverted: #ebeef2;

    --color-base: #ebeef2;
    --color-additive: rgba(235, 238, 242, 0.8);
    --color-assistive: rgba(235, 238, 242, 0.6);
    --color-disabled: rgba(235, 238, 242, 0.4);
    --color-inverted: #1d2633;
  }
`;

export default DarkThemeStyle;
