import React from "react";
import Title from "./Title";
import ProjectSlider from "./ProjectSlider";
// import SliderCpy from "./SliderCpy";
import sliderData from "../data";
const ProjectsSection = () => {
  console.log(sliderData);
  return (
    <section id="projects">
      <div className="fluid-container py-28">
        <Title value="Projects" className="mb-16" />
        <ProjectSlider
          title="css/scss/javascript"
          data={sliderData}
          from="0"
          to="6"
        />
        <ProjectSlider title="reactjs" data={sliderData} from="7" to="8" />
      </div>
    </section>
  );
};

export default ProjectsSection;
