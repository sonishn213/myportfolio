import React from "react";

const Title = ({ value, className }) => {
  return (
    <section className={className}>
      <div className="text-center">
        <h2 className="inline border-b-4 hover:border-b-5 border-b-s-dark-blue pb-1 uppercase lg:text-4xl text-3xl">
          {value}
        </h2>
      </div>
    </section>
  );
};

export default Title;
