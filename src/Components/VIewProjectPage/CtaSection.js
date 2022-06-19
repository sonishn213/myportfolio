import React from "react";
import Title from "../Title";
import Button from "../Button";
const CtaSection = ({ data }) => {
  return (
    <section className="bg2 bg-paralax">
      <div className="fluid-container py-28">
        <div className="text-center">
          <div className="space-x-4  ">
            <Button text="View Live" color="blue" link={data.liveLink} />
            <Button text="Github" color="white" link={data.gitLink} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
