import React from "react";
import Background from "./components/Background/index.js";
import Footer from "./components/Footer/index.js";
import Links from "./components/Links/index.js";
import Settings from "./components/Settings/index.js";

function App() {
  return (
    <div className="App">
      <Background>
        <Links />
        <Footer />
        <Settings />
      </Background>
    </div>
  );
}

export default App;
