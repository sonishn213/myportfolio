import React from "react";
import Title from "./Title";
import ProjectSlider from "./ProjectSlider";
import sliderData from "../data";
const ProjectsSection = () => {
  console.log(sliderData);
  return (
    <section>
      <div className="fluid-container py-28">
        <Title value="Projects" className="mb-16" />
        <ProjectSlider title="css/scss/javascript" data={sliderData} />
        <ProjectSlider title="tailwindcss/reactjs" data={sliderData} />
      </div>
    </section>
  );
};

export default ProjectsSection;
