import "./App.css";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [portfolioPage, setPortfolioPage] = useState(true);
  const [cardProject, setCardProject] = useState(false);

  return (
    <div>
      <div className="p-8">
        <Header />
        {portfolioPage ? (
          <Portfolio
            setCardProject={setCardProject}
            cardProject={cardProject}
            setPortfolioPage={setPortfolioPage}
          />
        ) : (
          <HomePage setPortfolioPage={setPortfolioPage} />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
