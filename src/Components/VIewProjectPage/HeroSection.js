import React from "react";
import Button from "../Button";
const HeroSection = ({ data }) => {
  return (
    <section className="bg-s-light-grey">
      <div className=" py-28 pt-36 fluid-container flex ">
        <div className="w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="uppercase mb-2">{data.projectName}</h2>
            <p className="uppercase text-lg text-s-dark-blue">
              {data.langs.map((item) => {
                return <span>{item + " "}</span>;
              })}
            </p>
          </div>
          <div className="space-x-4  mt-16">
            <Button text="View Live" color="blue" link={data.liveLink} />
            <Button text="View On Github" color="white" link={data.gitLink} />
          </div>
        </div>
        <div>
          <div className="px-20 h-80 overflow-y-hidden">
            <img src={data.tmbImg} alt="tumbimg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
