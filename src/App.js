import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js";
import Home from "./pages/homePage/Home.js";
import Projects from "./pages/projectPage/Projects.js";
import BackgroundView from "./components/Layout/BackgroundView.js";
import ExperienceList from "./pages/experiencePage/ExperienceList.js";
import Footer from "./components/Footer.js";

const App = () => {
  return (
    <div className=" bg-slate-100 dark:bg-slate-950  ">
      <Router>
        <Navbar />
        <BackgroundView>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<ExperienceList />} />
            </Routes>
          </div>
        </BackgroundView>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;
