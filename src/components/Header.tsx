import combined from "../images/Combined.png";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import { useState } from "react";

const Header = () => {
  const [isTrue, setTsTrue] = useState<boolean>(false);
  const btnClick = () => {
    setTsTrue(!isTrue);
  };
  return (
    <div className="flex justify-between">
      <img src={combined} />
      <div className="hidden md:flex">
        <p className=" text-center">
          <Link to="/">HOME</Link>
        </p>
        <p className=" text-center ml-5">
          <Link to="/portfolio">PORTFOLIO</Link>
        </p>
        <p className=" text-center ml-5">
          <Link to="/contact">CONTACT ME</Link>
        </p>
      </div>
      <div className="block md:hidden " onClick={btnClick}>
        <div
          style={
            isTrue
              ? { transform: "rotate(55deg)", position: "absolute" }
              : { transform: "rotate(0deg)" }
          }
          className="bg-black w-6 h-1  top-8"
        ></div>
        <div
          style={isTrue ? { display: "none" } : { display: "flex" }}
          className="bg-black w-6 h-1 mt-1"
        ></div>
        <div
          style={
            isTrue
              ? { marginTop: "0px", transform: "rotate(-55deg)" }
              : { marginTop: "4px", transform: "rotate(0deg)" }
          }
          className="bg-black w-6 h-1 mt-1"
        ></div>
      </div>

      {isTrue ? <MobileNav /> : null}
    </div>
  );
};

export default Header;
