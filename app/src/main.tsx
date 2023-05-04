import React from "react";
import ReactDOM from "react-dom/client";
import MainRoutes from "@/routes";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./styles/global";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <MainRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
