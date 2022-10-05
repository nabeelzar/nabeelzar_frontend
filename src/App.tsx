import { homedir } from "os";
import React from "react";
import "./App.scss";

import Header from "./components/Header/Header";
import { Home } from "./components/Home/Home";

import { Routes, Route, Link } from "react-router-dom";
import Project from "./components/Projects/Project";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Project />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
