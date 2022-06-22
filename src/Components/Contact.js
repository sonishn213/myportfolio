import React from "react";
import Title from "./Title";
import { FaLinkedin } from "react-icons/fa";
const Contact = () => {
  return (
    <section className="bg2 bg-paralax" id="contact">
      <div className="fluid-container  py-28">
        <Title value="Contact" className="mb-16" />
        <div className="text-center text-2xl space-y-4 text-s-dark-blue tracking-wider">
          <p>sonishn213@gmail.com</p>
          <p>+91 9632340567</p>
        </div>
        <div className="flex justify-center items-center w-full text-2xl mt-8 cursor-pointer text-s-orange">
          <a href="https://www.linkedin.com/in/shwanees213/">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
