import React from "react";
import ReactDOM from "react-dom";
import "./App/index.scss";
import App from "./App/index.js";
import { LinkProvider } from "./providers/link.provider";
import { LocationProvider } from "./providers/location.provider";

ReactDOM.render(
  <React.StrictMode>
    <LocationProvider>
      <LinkProvider>
        <App />
      </LinkProvider>
    </LocationProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
