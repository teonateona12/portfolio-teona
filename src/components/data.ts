import project1 from "../images/interactiveCard.jpg";
import calculator from "../images/images/portfolio/calculator.jpg";
import ticTacToe from "../images/images/portfolio/tic-tac-toe.jpg";
import project2 from "../images/githubUser.jpg";
import { projectProps } from "./types";


const projects:projectProps[] = [
  {
    id: "interactive-card",
    url: "Interactive-card-details/",
    name: "Card detail project",
    image: project1,
    text: "This project required me to build a fully responsive interactive card details app. I used HTML5, tailwind and TypeScript.",
    skills:
      "Interaction Design / Front End Development HTML/TypeScript/Tailwind",
  },
  {
    name: "Github user project",
    image: project2,
    url: "Github-user-search/",
    text: "This project required me to build a fully responsive github user search app. I used HTML5, tailwind and TypeScript.",
    skills:
      "Interaction Design / Front End Development HTML/TypeScript/Tailwind",
    id: "github-user-project",
  },
  {
    id: "tip-calculator",
    url: "Tip-calculator-react/",
    name: "tip calculator",
    image: calculator,
    text: "This project required me to build a fully responsive tip calculator app. I used HTML5, tailwind and TypeScript.",
    skills:
      "Interaction Design / Front End Development HTML/TypeScript/Tailwind",
  },
  {
    id: "tic-tac-toe",
    url: "Tic-tac-toe/",
    name: "tic tac toe game",
    image: ticTacToe,
    text: "This project required me to build a fully responsive tic tac toe game. I used HTML5, css and TypeScript.",
    skills: "Interaction Design / Front End Development HTML/Css/JavaScript",
  },
];

export default projects;
