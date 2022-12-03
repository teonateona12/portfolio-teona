import pre from "../images/images/icons/arrow-left.svg";
import next from "../images/images/icons/arrow-right.svg";
import { SliderProps } from "./types";
import { Link } from "react-router-dom";
import "../index.css";

const SliderOne = ({ setValue }: SliderProps) => {
  return (
    <div className="flex justify-between w-full ">
      <div className="py-5">
        <img
          className="mb-3"
          onClick={() => {
            setValue(1);
          }}
          src={pre}
        />

        <Link className="text-2xl" to="/portfolio/github-user-project">
          Github User
        </Link>
        <p
          onClick={() => {
            setValue(1);
          }}
          className="mt-2"
        >
          Previous Project
        </p>
      </div>
      <hr className="h-full w-0.5 bgc"></hr>
      <div className="py-5">
        <img
          className="ml-[90%] mb-3"
          onClick={() => {
            setValue(2);
          }}
          src={next}
        />
        <Link className="text-2xl" to="/portfolio/interactive-card">
          Interactive Card
        </Link>
        <p
          onClick={() => {
            setValue(2);
          }}
          className="ml-[45%] mt-2"
        >
          Next Project
        </p>
      </div>
    </div>
  );
};

export default SliderOne;
