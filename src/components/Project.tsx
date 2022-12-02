import { ProjectProps } from "./types";
import { Link } from "react-router-dom";

const Project = ({ image, name, text, path }: ProjectProps) => {
  return (
    <div className="mt-14 md:flex md:gap-10 md:justify-between">
      <img className="md:w-[50%]" src={image} />
      <hr className="mt-5 md:hidden"></hr>
      <div className="mt-5 md:w-[50%] md:m-0">
        <hr className="hidden md:flex "></hr>
        <h1 className="text-color text-4xl font-bold md:mt-4	">{name}</h1>
        <p className="text-color w-[80%] mt-5 leading-7 ">{text}</p>
        <button className="btn p-3 mt-4 text-xs">
          <Link to={path}> VIEW PROJECT</Link>
        </button>
        <hr className="hidden md:flex md:mt-4"></hr>
      </div>
    </div>
  );
};

export default Project;
