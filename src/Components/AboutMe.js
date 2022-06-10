import React from "react";
import Title from "./Title";
const AboutMe = () => {
  return (
    <section className="bg-s-light-grey">
      <div className="fluid-container py-28">
        <div className="max-w-4xl mx-auto">
          <Title value="About me" className="mb-16" />
          <p className="text-lg text-slate-700 text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
            officia ab expedita odit, iste neque aut? Esse inventore, enim
            tempora, pariatur laborum doloribus ullam et amet ducimus voluptatum
            exercitationem facilis. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Unde officia ab expedita odit, iste neque aut?
            Esse inventore, enim tempora, pariatur laborum doloribus ullam et
            amet ducimus voluptatum exercitationem facilis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
