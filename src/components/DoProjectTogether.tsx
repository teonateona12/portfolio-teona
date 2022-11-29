import { Link } from "react-router-dom";
import "../index.css";

const DoProjectTogether = () => {
  return (
    <div className="mt-20 p-8 md:flex md:justify-between md:px-16 xl:px-36">
      <h1 className="text-color text-4xl font-bold tracking-wide m-auto text-center w-[70%] md:w-[50%] md:m-0 md:text-left ">
        Interested in doing a project together?
      </h1>
      <button className="btn p-3 mt-8 text-xs m-auto flex md:m-0 md:h-12 ">
        <Link to="/contact">CONTACT ME</Link>
      </button>
    </div>
  );
};

export default DoProjectTogether;
