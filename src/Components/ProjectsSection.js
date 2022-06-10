import React from "react";
import Title from "./Title";
import ProjectSlider from "./ProjectSlider";
import { slider1 } from "../data";
const ProjectsSection = () => {
  console.log(slider1);
  return (
    <section>
      <div className="fluid-container py-28">
        <Title value="Projects" className="mb-16" />
        <ProjectSlider title="css/scss/javascript" data={slider1} />
        <ProjectSlider title="tailwindcss/reactjs" data={slider1} />
      </div>
    </section>
  );
};

export default ProjectsSection;
