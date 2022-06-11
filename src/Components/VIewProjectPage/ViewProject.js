import React from "react";
import { useParams } from "react-router-dom";
import sliderData from "../../data";
import HeroSection from "./HeroSection";
const ViewProject = () => {
  console.log(sliderData);
  const { id } = useParams();
  return (
    <section>
      <HeroSection />
    </section>
  );
};

export default ViewProject;
