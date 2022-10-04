import { homedir } from "os";
import React from "react";
import "./App.scss";

import Header from "./components/Header/Header";
import { Home } from "./components/Home/Home";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Home />
      </div>
    </>
  );
}

export default App;
