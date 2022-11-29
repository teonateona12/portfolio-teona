import Project from "./Project";
import project1 from "../images/interactiveCard.jpg";
import project2 from "../images/githubUser.jpg";
import ProjectImgRight from "./ProjectImgRight";
import DoProjectTogether from "./DoProjectTogether";

const Portfolio = () => {
  return (
    <div>
      <Project
        name="Interactive card details"
        text="project 1"
        image={project1}
        path="/portfolio/cardProject"
      />

      <ProjectImgRight
        name="Interactive card details"
        text="project 1"
        image={project1}
        path="/portfolio/cardProject"
      />

      <Project
        name="Interactive card details"
        text="project 2"
        image={project2}
        path="/portfolio/githubUserProject"
      />

      <ProjectImgRight
        name="Interactive card details"
        text="project 1"
        image={project1}
        path="/portfolio/cardProject"
      />
      <DoProjectTogether />
    </div>
  );
};
export default Portfolio;
