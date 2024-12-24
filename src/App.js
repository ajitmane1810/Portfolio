// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/homePage/Home.js";
import Projects from "./pages/projectPage/Projects.js";
import Experience from "./pages/experiencePage/Experience.js";
import BackgroundView from "./components/Layout/BackgroundView.js";

const App = () => {
  return (
    <div className=" bg-slate-200 dark:bg-gray-800  ">
      <Router>
        <Navbar />
        <BackgroundView>
          <div className="h-screen ">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
            </Routes>
          </div>
        </BackgroundView>
      </Router>
    </div>
  );
};

export default App;
