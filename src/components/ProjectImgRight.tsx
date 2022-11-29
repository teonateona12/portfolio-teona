import { ProjectProps } from "./types";
import { Link } from "react-router-dom";
import "../index.css";

const ProjectImgRight = ({ image, name, text, path }: ProjectProps) => {
  return (
    <div className="mt-14 md:flex md:gap-10 md:justify-between">
      <img className="md:w-[50%] md:order-2" src={image} />
      <hr className="mt-5 md:hidden"></hr>
      <div className="mt-5 md:order-1">
        <hr className="hidden md:flex md:mt-4"></hr>
        <h1 className="text-color text-4xl font-bold">{name}</h1>
        <p className="text-color">{text}</p>
        <button className="btn p-3 mt-4 text-xs">
          <Link to={path}> VIEW PROJECT</Link>
        </button>
        <hr className="hidden md:flex md:mt-4"></hr>
      </div>
    </div>
  );
};

export default ProjectImgRight;
