import Project from "./Project";
import project1 from "../images/interactiveCard.jpg";
import project2 from "../images/githubUser.jpg";
import { PortfolioProps } from "./types";
import ProjectWebsite from "./ProjectWebsite";
import { useEffect, useState } from "react";

const Portfolio = ({ cardProject, setCardProject }: PortfolioProps) => {
  const [github, setGithub] = useState(false);
  const btnHandler = () => {
    setCardProject(true);
  };
  
  return (
    <div>
      {cardProject ? (
        <ProjectWebsite name="proj1"/>
      ) : (
        <div>
          <div className="card">
            <Project
              name="Interactive card details"
              text="project 1"
              image={project1}
              setCardProject={setCardProject}
            />
            <button className="btn p-3 mt-4 text-xs" onClick={btnHandler}>
              VIEW PROJECT
            </button>
          </div>
          <div>
            <Project
              name="Interactive card details"
              text="project 2"
              image={project2}
              setCardProject={setCardProject}
            />
            <button className="btn p-3 mt-4 text-xs" onClick={btnHandler}>
              VIEW PROJECT
            </button>
          </div>
        </div>
      )}

      
    </div>
  );
};
export default Portfolio;
