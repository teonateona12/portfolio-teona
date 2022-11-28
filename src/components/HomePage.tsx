import image from "../images/Group 16.png";
import image1 from "../images/Group 3.png";
import myimage from "../images/myimage.jpg";
import { HomePageProps } from "./types";

const HomePage = ({ setHome }: HomePageProps) => {
  const click = () => {
    setHome(false);
  };
  return (
    <div>
      <div className="mt-8">
        <img src={image} />
        <h1 className="text-color mt-5 text-4xl font-bold tracking-wide ">
          Hey, I’m Teona Piranishvili and I love building beautiful websites
        </h1>
        <div className="backgrnd-color w-[55%] flex justify-between p-4 mt-7">
          <img src={image1} />
          <button className="text-white text-xs tracking-widest ">
            ABOUT ME
          </button>
        </div>
        <div className="mt-10">
          <img src={myimage} />
          <div className="mt-5">
            <hr></hr>
            <h1 className="text-color text-4xl font-bold tracking-wide mt-3">
              About Me
            </h1>
            <p>
              I started learning web development few month ago.I devote all my
              time to programming and building projects. I love solving problems
              and I am very motivated.
            </p>
            <button className="btn p-3 mt-4 text-xs" onClick={click}>
              GO TO PORTFOLIO
            </button>
            <hr className="mt-5"></hr>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
