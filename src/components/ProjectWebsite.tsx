import { ProjectWebsiteProps } from "./types";

const ProjectWebsite = ({ name }: ProjectWebsiteProps) => {
  return (
    <div>
      <h1 className="text-black">{name}</h1>
    </div>
  );
};

export default ProjectWebsite;
