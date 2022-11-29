import "./App.css";
import project1 from "./images/interactiveCard.jpg";
import calculator from "./images/images/portfolio/calculator.jpg";
import ticTacToe from "./images/images/portfolio/tic-tac-toe.jpg";
import project2 from "./images/githubUser.jpg";
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
            path="/portfolio/interactive-card"
            element={
              <ProjectWebsite
                name="Card detail project"
                image={project1}
                text="This project required me to build a fully responsive interactive card details app. I used HTML5, tailwind and TypeScript."
                skills="Interaction Design / Front End Development
                HTML/TypeScript/Tailwind"
              />
            }
          />
          <Route
            path="/portfolio/github-user-project"
            element={
              <ProjectWebsite
                name="Github user project"
                image={project2}
                text="This project required me to build a fully responsive github user search app. I used HTML5, tailwind and TypeScript."
                skills="Interaction Design / Front End Development
                HTML/TypeScript/Tailwind"
              />
            }
          />
          <Route
            path="/portfolio/tip-calculator"
            element={
              <ProjectWebsite
                name="tip calculator"
                image={calculator}
                text="This project required me to build a fully responsive tip calculator app. I used HTML5, tailwind and TypeScript."
                skills="Interaction Design / Front End Development
                HTML/TypeScript/Tailwind"
              />
            }
          />
          <Route
            path="/portfolio/tic-tac-toe"
            element={
              <ProjectWebsite
                name="tic tac toe game"
                image={ticTacToe}
                text="This project required me to build a fully responsive tic tac toe game. I used HTML5, css and TypeScript."
                skills="Interaction Design / Front End Development
                HTML/Css/JavaScript"
              />
            }
          />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
