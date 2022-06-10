import React from "react";

import HeroSection from "./HeroSection";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
function Home() {
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
