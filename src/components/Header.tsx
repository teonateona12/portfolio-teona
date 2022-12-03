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
          style={{
            transform: isTrue ? "rotate(55deg)" : "rotate(0deg)",
          }}
          className="bg-black w-6 h-1  top-8 absolute"
        ></div>
        <div
          style={isTrue ? { display: "none" } : { display: "flex" }}
          className="bg-black w-6 h-1 mt-2"
        ></div>
        <div
          style={{
            marginTop: isTrue ? "0px" : "4px",
            transform: isTrue ? "rotate(-55deg)" : "rotate(0deg)",
          }}
          className="bg-black w-6 h-1 mt-1"
        ></div>
      </div>

      {isTrue ? <MobileNav /> : null}
    </div>
  );
};

export default Header;
