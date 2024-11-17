import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { DesignSystem } from "@styles/design-system";
import { GlobalStyles } from "@styles/global-styles";
import "react-toastify/dist/ReactToastify.css";
import { Start } from "@pages/start/start";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={DesignSystem}>
      <GlobalStyles />
      <Start />
    </ThemeProvider>
  </StrictMode>
);
