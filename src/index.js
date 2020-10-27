import React from "react";
import ReactDOM from "react-dom";
import "./App/styles/scss/index.scss";
import App from "./App/index.js";
import { LinkProvider } from "./providers/link.provider";
import { WeatherProvider } from "./providers/weather.provider";
import { NameProvider } from "./providers/name.provider";
import { ModalProvider } from "./providers/modal.provider";

ReactDOM.render(
  <React.StrictMode>
    <ModalProvider>
      <NameProvider>
        <WeatherProvider>
          <LinkProvider>
            <App />
          </LinkProvider>
        </WeatherProvider>
      </NameProvider>
    </ModalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
