import { ProjectProps } from "./types";

const Project = ({ image, name, text }: ProjectProps) => {
 
  return (
    <div className="mt-14">
      <img src={image} />
      <hr className="mt-5"></hr>
      <div className="mt-5">
        <h1>{name}</h1>
        <p>{text}</p>
       
      </div>
    </div>
  );
};

export default Project;
