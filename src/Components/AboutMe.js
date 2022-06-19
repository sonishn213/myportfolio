import React from "react";
import Title from "./Title";
const AboutMe = () => {
  return (
    <section className="bg-s-light-grey" id="aboutme">
      <div className="fluid-container py-28">
        <div className="max-w-4xl mx-auto">
          <Title value="About me" className="mb-16" />
          <p className="text-lg text-slate-700 text-center">
            Hi, Im shwanees. Im a bca graduate, graduated in 2021-22.
            <br /> Im currently studying frontend webdevelopment using Reactjs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
