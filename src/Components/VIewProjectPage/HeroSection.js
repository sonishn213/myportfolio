import React from "react";
import Button from "../Button";
const HeroSection = ({ data }) => {
  return (
    <section className="bg-s-light-grey">
      <div className=" fluid-container py-10 md:py-28 md:pt-36  flex justify-center md:flex-row flex-col-reverse">
        <div className=" pt-6 text-center">
          <div>
            <h1 className="uppercase mb-2    text-s-dark-blue font-medium">
              {data.projectName}
            </h1>
            <p className="uppercase text-xl text-s-dark-blue">
              {data.langs.map((item) => {
                return <span>{item + " "}</span>;
              })}
            </p>
          </div>
          <div className="space-x-4  mt-16 flex justify-center">
            <Button text="View Live" color="blue" link={data.liveLink} />
            <Button text="Github" color="white" link={data.gitLink} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
