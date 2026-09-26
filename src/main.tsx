import "./phone-console.ts";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { BASE } from "./base.ts";
import { App } from "./App.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={BASE}>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
