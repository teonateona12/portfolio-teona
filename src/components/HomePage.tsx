import image from "../images/images/homepage/mobile/image-homepage-hero.jpg";
import imagetab from "../images/images/homepage/tablet/image-homepage-hero.jpg";
import imagedes from "../images/images/homepage/desktop/image-homepage-hero.jpg";
import image1 from "../images/Group 3.png";
import myimage from "../images/myimage.jpg";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div className="mt-8">
        <img className="sm:hidden	" src={image} />
        <img className="hidden md:flex lg:hidden" src={imagetab} />
        <img className="hidden lg:flex" src={imagedes} />
        <div>
          <h1 className="text-color mt-5 text-4xl font-bold tracking-wide ">
            Hey, I’m Teona Piranishvili and I love building beautiful websites
          </h1>
          <div className="backgrnd-color w-[55%] flex justify-between p-4 mt-7">
            <img src={image1} />
            <button className="text-white text-xs tracking-widest ">
              ABOUT ME
            </button>
          </div>
        </div>
        <div className="mt-10 md:flex md:gap-10 xl:gap-28">
          <img className="md:w-[50%]" src={myimage} />
          <div className="mt-5 md:mt-0">
            <hr></hr>
            <h1 className="text-color text-4xl font-bold tracking-wide mt-3">
              About Me
            </h1>
            <p>
              I started learning web development few month ago.I devote all my
              time to programming and building projects. I love solving problems
              and I am very motivated.
            </p>
            <button className="btn p-3 mt-4 text-xs">
              <Link to="/portfolio">GO TO PORTFOLIO</Link>
            </button>
            <hr className="mt-5"></hr>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
