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
