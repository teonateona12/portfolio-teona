import { ProjectProps } from "./types";
import { useRef } from "react";

const Project = ({ image, name, text, setCardProject }: ProjectProps) => {
  const btnHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    //setCardProject(true);
    console.log(e.target);
  };
  
  return (
    <div className="mt-14">
      <img src={image} />
      <hr className="mt-5"></hr>
      <div className="mt-5">
        <h1>{name}</h1>
        <p>{text}</p>
        {/* <button className="btn p-3 mt-4 text-xs" onClick={btnHandler}>
          VIEW PROJECT
        </button> */}
      </div>
    </div>
  );
};

export default Project;
