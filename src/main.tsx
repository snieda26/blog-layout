import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App.tsx";

import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "providers/ThemeProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
