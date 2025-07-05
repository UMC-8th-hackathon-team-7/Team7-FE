import { StrictMode } from "react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "./styles/colors.css";
import "./styles/texts.css";
import { BottomBarProvider } from "./contexts/BottomBarContext.tsx";
import { AuthProvider } from "./contexts/AuthContext.tsx";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BottomBarProvider>
          <App />
        </BottomBarProvider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
