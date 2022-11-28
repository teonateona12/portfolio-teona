import React from "react";
import logo from "./logo.svg";
import "./App.css";

import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [home, setHome] = useState(true);
  return (
    <div>
      <div className="p-8">
        <Header />
        {home ? <HomePage setHome={setHome} /> : <Projects />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
