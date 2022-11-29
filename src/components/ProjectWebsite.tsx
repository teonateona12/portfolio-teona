import { ProjectWebsiteProps } from "./types";
import DoProjectTogether from "./DoProjectTogether";

const ProjectWebsite = ({ name }: ProjectWebsiteProps) => {
  return (
    <div>
      <h1 className="text-black">{name}</h1>
      <DoProjectTogether />
    </div>
  );
};

export default ProjectWebsite;
