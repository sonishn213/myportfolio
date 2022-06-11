import React from "react";
import Title from "./Title";
import Icons from "./Icons";
import htmlImg from "../images/html5-brands.svg";
import cssImg from "../images/css3-alt-brands.svg";
import jsImg from "../images/js-square-brands.svg";
import scssImg from "../images/sass-brands.svg";
import tailcssImg from "../images/tailwind-css.svg";
import reactImg from "../images/react-brands.svg";
import phpImg from "../images/php-brands.svg";
import mysqlImg from "../images/mysql.svg";
import figmaImg from "../images/figma-brands.svg";
import gitImg from "../images/git-alt-brands.svg";

const SkillsSection = () => {
  return (
    <section className="bg-s-light-grey" id="skills">
      <div className="fluid-container py-28">
        <Title value="Skills" className="mb-16" />
        <div className="grid grid-cols-5  gap-6 gap-y-10  items-center justify-items-center text-5xl max-w-xl mx-auto text-white">
          <Icons imgsrc={htmlImg} width="w-10" />
          <Icons imgsrc={cssImg} width="w-10" />
          <Icons imgsrc={jsImg} width="w-10" />
          <Icons imgsrc={scssImg} width="w-12" />
          <Icons imgsrc={reactImg} width="w-12" />
          <Icons imgsrc={tailcssImg} width="w-12" />
          <Icons imgsrc={phpImg} width="w-14" />
          <Icons imgsrc={mysqlImg} width="w-16" />
          <Icons imgsrc={figmaImg} width="w-8" />
          <Icons imgsrc={gitImg} width="w-10" />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
