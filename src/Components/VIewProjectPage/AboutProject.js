import React, { useEffect } from "react";
import Title from "../Title";
const AboutProject = ({ data }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="bg-s-light-grey">
      <div className="fluid-container py-28">
        <div className="max-w-3xl mx-auto">
          <Title value="About project" className="mb-16" />
          <p className="text-lg text-slate-700 text-center">{data}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
