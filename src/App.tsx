import "./App.css";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Header from "./components/Header";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import ProjectWebsite from "./components/ProjectWebsite";
function App() {
 

  return (
    <div>
      <div className="p-8">
        <Header />
        <Routes>
          <Route
            path="/"
            element={<HomePage  />}
          />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route
            path="/portfolio/cardProject"
            element={<ProjectWebsite name="Card detail project" />}
          />
          <Route
            path="/portfolio/githubUserProject"
            element={<ProjectWebsite name="Github user project" />}
          />
        </Routes>
      </div>

     
      <Footer />
    </div>
  );
}

export default App;
