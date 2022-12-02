import Project from "./Project";
import project1 from "../images/interactiveCard.jpg";
import calculator from "../images/images/portfolio/calculator.jpg";
import ticTacToe from "../images/images/portfolio/tic-tac-toe.jpg";
import project2 from "../images/githubUser.jpg";
import ProjectImgRight from "./ProjectImgRight";
import DoProjectTogether from "./DoProjectTogether";

const Portfolio = () => {
  return (
    <div>
      <Project
        name="Interactive card details"
        text="This project required me to build a fully responsive interactive card details app
        . I used HTML5, tailwind and TypeScript."
        image={project1}
        path="/portfolio/interactive-card"
      />

      <ProjectImgRight
        name="Github user search"
        text="This project required me to build a fully responsive github user search app
        . I used HTML5, tailwind and TypeScript."
        image={project2}
        path="/portfolio/github-user-project"
      />

      <Project
        name="Tip calculator app"
        text="This project required me to build a fully responsive tip calculator app
        . I used HTML5, tailwind and TypeScript."
        image={calculator}
        path="/portfolio/tip-calculator"
      />

      <ProjectImgRight
        name="Tic tac toe game"
        text="This project required me to build a fully responsive tic tac toe game
        . I used HTML5, css and TypeScript."
        image={ticTacToe}
        path="/portfolio/tic-tac-toe"
      />
      <DoProjectTogether />
    </div>
  );
};
export default Portfolio;
