import React, { useContext } from "react";
import Background from "./components/Background/index.js";
import Footer from "./components/Footer/index.js";
import Links from "./components/Links/index.js";
import Weather from "./components/Weather/index.js";
import Settings from "./components/Settings/index.js";
import { ModalContext } from "../providers/modal.provider.js";

function App() {
  const { isOpen } = useContext(ModalContext);
  return (
    <div className="App">
      <Background>
        <Links />
        {localStorage.getItem("location") && <Weather />}
        <Footer />
        <Settings />
      </Background>
    </div>
  );
}

export default App;
