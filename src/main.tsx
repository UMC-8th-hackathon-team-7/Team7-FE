import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "./styles/colors.css";
import "./styles/texts.css";
import GlobalStyle from "./styles/GlobalStyle";
import { BottomBarProvider } from "./contexts/BottomBarContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BottomBarProvider>
      <GlobalStyle />
      <App />
    </BottomBarProvider>
  </StrictMode>
);
