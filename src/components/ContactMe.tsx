import linkedin from "../images/images/icons/linkedin.svg";
import twitter from "../images/images/icons/twitter.svg";
import github from "../images/images/icons/github.svg";
import "../index.css";
import { useState } from "react";
const ContactMe = () => {
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [messageError, setMessageError] = useState<string>("");

  const btnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (message === "") {
      setMessageError("This field is required");
    } else {
      setMessageError("");
    }

    if (email === "") {
      setEmailError("This field is required");
    } else if (
      !email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      setEmailError("Please use a valid email address");
    } else {
      setEmailError("");
    }

    if (name === "") {
      setNameError("This field is required");
    } else {
      setNameError("");
    }
  };
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
          <div>
            <label className="text-color font-bold">Name</label> <br />
            <input
              value={name}
              className="inp p-3 mt-2 w-full "
              placeholder="Jane Appleseed"
              onChange={(e) => setName(e.target.value)}
            ></input>
            <small className="text-red-600">{nameError}</small>
          </div>
          <div>
            <br />
            <label className="text-color font-bold ">Email Address</label>{" "}
            <br />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="inp p-3 mt-2 w-full  "
              placeholder="email@example.com"
            ></input>
            <small className="text-red-600">{emailError}</small>
          </div>
          <div>
            <br />
            <label className="text-color font-bold">Message</label> <br />
            <input
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              className="inp p-3 pb-20 mt-2 w-full"
              placeholder="How can I help?"
            ></input>
            <small className="text-red-600">{messageError}</small> <br />
          </div>
          <button
            onClick={btnClick}
            className="backgrnd-color text-white p-5 mt-5"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
