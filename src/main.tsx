import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { EthProvider } from "./providers/EthProvider";
import App from "./App";
import "./styles/index.css";
import "./styles/global.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <EthProvider>
        <App />
      </EthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
