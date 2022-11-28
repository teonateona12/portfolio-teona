import image from "../images/Combined Shape 2.png";
import image1 from "../images/Group 4.png";

const Footer = () => {
  return (
    <div>
      <div className="mt-20">
        <h1 className="text-color text-4xl font-bold tracking-wide m-auto text-center w-[70%] ">
          Interested in doing a project together?
        </h1>
        <button className="btn p-3 mt-8 text-xs m-auto flex ">
          CONTACT ME
        </button>
      </div>
      <footer className="backgrnd-color mt-20">
        <div className="flex justify-center py-10">
          <div className="gap-6 flex-col flex">
            <img src={image} />
            <p className="text-white text-center">HOME</p>
            <p className="text-white text-center">PORTFOLIO</p>
            <p className="text-white text-center">CONTACT ME</p>
            <img src={image1} />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
