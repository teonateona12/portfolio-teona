import { ProjectWebsiteProps } from "./types";
import DoProjectTogether from "./DoProjectTogether";
import { Link } from "react-router-dom";

const ProjectWebsite = ({ name, image, text, skills }: ProjectWebsiteProps) => {
  return (
    <div className="mt-16">
      <img src={image} />
      <hr className="my-10"></hr>
      <h1 className=" md:hidden text-black text-4xl font-bold ">{name}</h1>
      <div className="md:flex">
        <p className="leading-7	w-[80%] my-7">{text}</p>
        <div>
          <h1 className=" hidden md:flex text-black text-4xl font-bold ">
            {name}
          </h1>
          <p className="skills">{skills}</p>
          <button className="btn p-3 my-4 text-xs">
            <Link to=""> VIEW WEBSITE</Link>
          </button>
        </div>
      </div>
      <hr></hr>
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
      <img className="mt-7" src={image} />
      <DoProjectTogether />
    </div>
  );
};

export default ProjectWebsite;
