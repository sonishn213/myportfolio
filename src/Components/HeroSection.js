import React from "react";
import Button from "./Button";

const HeroSection = () => {
  return (
    <section className="heroSection">
      <div className="fluid-container py-28 relative">
        <h1 className="leading-tight mb-16 ">
          Hello, I’m <span className="text-s-orange">Shwanees Gowda</span>
          <br /> I’m a Frontend Developer
        </h1>
        <div className="space-x-4">
          <Button text="View Projects" color="blue" />
          <Button text="Contact me" color="white" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
