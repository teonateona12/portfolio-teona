import image from "../images/Combined Shape 2.png";
import image1 from "../images/Group 4.png";
import linkedin from "../images/images/icons/linkedin.svg";
import twitter from "../images/images/icons/twitter.svg";
import github from "../images/images/icons/github.svg";

import { Link } from "react-router-dom";
import "../index.css";

const Footer = () => {
  return (
    <div>
      <div className="mt-20 p-8 md:flex md:justify-between md:px-16 xl:px-36">
        <h1 className="text-color text-4xl font-bold tracking-wide m-auto text-center w-[70%] md:w-[50%] md:m-0 md:text-left ">
          Interested in doing a project together?
        </h1>
        <button className="btn p-3 mt-8 text-xs m-auto flex md:m-0 md:h-12 ">
          <Link to="/contact">CONTACT ME</Link>
        </button>
      </div>
      <footer className="backgrnd-color mt-20">
        <div className="flex justify-center py-10">
          <div className="div gap-6 flex-col flex md:justify-between md:flex md:w-[90%] xl:w-[77%]">
            <img src={image} />
            <p className="text-white text-center">
              <Link to="/">HOME</Link>
            </p>
            <p className="text-white text-center">
              <Link to="/portfolio">PORTFOLIO</Link>
            </p>
            <p className="text-white text-center">
              <Link to="/contact">CONTACT ME</Link>
            </p>
            <img src={image1} />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
