import "./App.scss";

import Header from "./components/Header/Header";
import { Home } from "./components/Home/Home";

import { Routes, Route } from "react-router-dom";
import Project from "./components/Projects/Project";
import Cat from "./components/Cat/Cat";

function App() {
  return (
    <div className="siteContainer">
      <div className="headerContainer">
        <Header />
      </div>
      <div className="mainContainer">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Project />} />
          <Route path="cat" element={<Cat />} />

          <Route path="*" element={<h1>Page not found!</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
