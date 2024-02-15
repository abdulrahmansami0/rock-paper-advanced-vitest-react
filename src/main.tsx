import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { OptionsProviders } from "./context/optionsContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <OptionsProviders>
      <App />
    </OptionsProviders>
  </React.StrictMode>
);
