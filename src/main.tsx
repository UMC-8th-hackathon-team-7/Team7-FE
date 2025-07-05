import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "./styles/colors.css";
import "./styles/texts.css";
import { BottomBarProvider } from "./contexts/BottomBarContext.tsx";
import { AuthProvider } from "./contexts/AuthContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <BottomBarProvider>
        <App />
      </BottomBarProvider>
    </AuthProvider>
  </StrictMode>
);
