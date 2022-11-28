import Project from "./Project";
import project1 from "../images/interactiveCard.jpg";
import project2 from "../images/githubUser.jpg";

import { useState } from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div>
      <div>
        <div>
          <Project
            name="Interactive card details"
            text="project 1"
            image={project1}
          />
          <button className="btn p-3 mt-4 text-xs">
            <Link to="/portfolio/cardProject"> VIEW PROJECT</Link>
          </button>
        </div>
        <div>
          <Project
            name="Interactive card details"
            text="project 2"
            image={project2}
          />
          <button className="btn p-3 mt-4 text-xs">
            <Link to="/portfolio/githubUserProject"> VIEW PROJECT</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
