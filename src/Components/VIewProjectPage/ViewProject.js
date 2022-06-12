import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
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
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === "") {
      window.scrollTo(0, 0);
    } else if (hash == id) {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const eleid = hash.replace("#", "");
        const element = document.getElementById(eleid);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 0);
    }
  }, [pathname, hash, key]);
  // extract item using params (id) passed through url

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
