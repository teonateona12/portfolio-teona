import linkedin from "../images/images/icons/linkedin.svg";
import twitter from "../images/images/icons/twitter.svg";
import github from "../images/images/icons/github.svg";
import "../index.css";
const ContactMe = () => {
  return (
    <div className="mt-12">
      <hr></hr>
      <div className="xl:flex justify-between">
        <h1 className="text-color text-4xl font-bold mt-8 xl:w-[50%]">
          Get in Touch
        </h1>
        <div className="xl:w-[50%]">
          <p className="mt-5">
            I’d love to hear about what you’re working on and how I could help.
            I’m currently looking for a new role and am open to a wide range of
            opportunities. My preference would be to find a position in a
            company in London. But I’m also happy to hear about opportunites
            that don’t fit that description. I’m a hard-working and positive
            person who will always approach each task with a sense of purpose
            and attention to detail. Please do feel free to check out my online
            profiles below and get in touch using the form.
          </p>
          <div className="flex gap-4 mt-7">
            <img src={github} />
            <img src={twitter} />
            <img src={linkedin} />
          </div>
        </div>
      </div>
      <hr className="mt-6 mb-6"></hr>
      <div className="xl:flex xl:justify-between">
        <h1 className="text-color text-4xl font-bold mt-8">Contact Me</h1>
        <form className="mt-7 xl:w-[50%]">
          <label className="text-color font-bold">Name</label> <br />
          <input
            className="inp p-3 mt-2 w-full mb-7"
            placeholder="Jane Appleseed"
          ></input>
          <label className="text-color font-bold mt-14">Email Address</label>{" "}
          <br />
          <input
            className="inp p-3 mt-2 w-full  mb-7"
            placeholder="email@example.com"
          ></input>
          <label className="text-color font-bold">Message</label> <br />
          <input
            className="inp p-3 pb-20 mt-2 w-full"
            placeholder="How can I help?"
          ></input>
          <button className="backgrnd-color text-white p-5 mt-5">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
