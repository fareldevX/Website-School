import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./context/ThemeContext";
import AppRoutes from "./app/routes/AppRoutes";
import "./css/index.css";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <StrictMode>
      <AppRoutes />
    </StrictMode>
  </ThemeProvider>,
);
