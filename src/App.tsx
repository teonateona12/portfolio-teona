import "./App.css";
import HomePage from "./components/HomePage";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import ProjectWebsite from "./components/ProjectWebsite";
function App() {
  return (
    <div>
      <div className="p-8 md:py-20 md:mx-10 xl:px-28">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route
            path="/portfolio/cardProject"
            element={<ProjectWebsite name="Card detail project" />}
          />
          <Route
            path="/portfolio/githubUserProject"
            element={<ProjectWebsite name="Github user project" />}
          />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
