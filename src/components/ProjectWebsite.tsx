import DoProjectTogether from "./DoProjectTogether";
import { Link, useParams } from "react-router-dom";
import projects from "./data";
import { projectProps } from "./types";
import Slider from "./Slider";

const ProjectWebsite = () => {
  const { projectId } = useParams();
  const project = projects.find(
    (project: projectProps) => projectId === project.id
  );

  return (
    <div className="mt-16">
      <img src={project?.image} />

      <hr className="my-10"></hr>
      <h1 className=" md:hidden text-black text-4xl font-bold ">
        {project?.name}
      </h1>
      <div className="md:flex md:justify-between">
        <p className="leading-7	w-[80%] my-7 md:order-2 md:w-[47%]">
          {project?.text}
        </p>
        <div className="md:order-1 md:w-[47%]">
          <h1 className=" hidden md:flex text-black text-4xl font-bold ">
            {project?.name}
          </h1>
          <p className="skills">{project?.skills}</p>
          <button className="btn p-3 my-4 text-xs">
            <a href={`${`https://teonateona12.github.io/${project?.url}`}`}>
              {" "}
              VIEW WEBSITE
            </a>
          </button>
        </div>
      </div>
      <hr className="my-6"></hr>
      <h1 className="text-black text-3xl  ">Project Background</h1>
      <p className="my-7 leading-7	w-[90%]">
        This project was a front-end challenge from Frontend Mentor. It’s a
        platform that enables you to practice building websites to a design and
        project brief. Each challenge includes mobile and desktop designs to
        show how the website should look at different screen sizes. Creating
        these projects has helped me refine my workflow and solve real-world
        coding problems. I’ve learned something new with each project, helping
        me to improve and adapt my style.
      </p>
      <h1 className="text-black text-3xl">Static Previews</h1>
      <img className="mt-7" src={project?.image} />
      <Slider />
      <DoProjectTogether />
    </div>
  );
};

export default ProjectWebsite;
