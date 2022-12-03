import HomePage from "./components/HomePage";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Header from "./components/Header";
import { Route, Routes, useParams } from "react-router-dom";
import ProjectWebsite from "./components/ProjectWebsite";
function App() {
  const { projectId } = useParams();

  return (
    <div>
      <div className="p-8 md:py-20 md:mx-10 xl:px-28">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:projectId" element={<ProjectWebsite />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
