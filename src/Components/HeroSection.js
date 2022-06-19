import React from "react";
import Button from "./Button";

const HeroSection = () => {
  return (
    <section className="bg1 bg-paralax">
      <div className="fluid-container py-16 md:py-28 md:pt-36 relative md:text-center">
        <h1 className="leading-tight mb-16 ">
          Hello, I’m <span className="text-s-orange">Shwanees Gowda</span>
          <br /> I’m a Frontend Developer
        </h1>
        <div className=" space-y-4  md:flex md:space-x-4 md:space-y-0 md:justify-center">
          <Button
            text="View Projects"
            color="blue"
            link="#projects"
            target="_self"
          />
          <Button
            text="Contact me"
            color="white"
            link="#contact"
            target="_self"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
