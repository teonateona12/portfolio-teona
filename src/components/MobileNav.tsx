import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <div className="bg-black absolute mt-10 p-8 right-8	">
      <div className="">
        <p className=" text-center text-white">
          <Link to="/">HOME</Link>
        </p>
        <p className=" text-center mt-5 text-white">
          <Link to="/portfolio">PORTFOLIO</Link>
        </p>
        <p className=" text-center mt-5 text-white">
          <Link to="/contact">CONTACT ME</Link>
        </p>
      </div>
    </div>
  );
};

export default MobileNav;
