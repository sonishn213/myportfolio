import React, { useEffect } from "react";

import HeroSection from "./HeroSection";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import { useLocation } from "react-router-dom";

function Home() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === "") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 0);
    }
  }, [pathname, hash, key]);

  return (
    <main>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <AboutMe />
      <Contact />
    </main>
  );
}

export default Home;
