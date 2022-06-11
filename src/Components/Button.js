import React from "react";

const Button = ({ color, text, link }) => {
  let BlueBtnStyle =
    "uppercase bg-s-dark-blue text-lg text-white py-3 px-7 rounded-full shadow-lg hover:bg-[#233A6C] active:shadow-none";
  let WhiteBtnStyle =
    "uppercase bg-white text-lg  text-s-dark py-3 px-7 rounded-full shadow-lg hover:bg-s-light-grey active:shadow-none";
  return (
    <a href={link} target="_blank" className="inline-block">
      <button className={color === "blue" ? BlueBtnStyle : WhiteBtnStyle}>
        {text}
      </button>
    </a>
  );
};

export default Button;
