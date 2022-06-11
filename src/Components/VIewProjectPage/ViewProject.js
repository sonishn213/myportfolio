import React from "react";
import { useParams } from "react-router-dom";
import sliderData from "../../data";
import HeroSection from "./HeroSection";
import ScreenShotSection from "./ScreenShotSection";
import AboutProject from "./AboutProject";
import CtaSection from "./CtaSection";
const ViewProject = () => {
  const { id } = useParams();
  const itemData = sliderData.find((item) => {
    if (item.id == id) {
      return true;
    } else {
      return false;
    }
  });
  console.log(sliderData);

  return (
    <section>
      <HeroSection data={itemData} />
      <ScreenShotSection data={itemData.img} />
      <AboutProject data={itemData.aboutProject} />
      <CtaSection data={itemData} />
    </section>
  );
};

export default ViewProject;
