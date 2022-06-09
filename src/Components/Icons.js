import React from "react";

const Icons = ({ imgsrc, width }) => {
  return (
    <div className={`${width}`}>
      <img className="max-w-full " src={imgsrc} alt="img" />
    </div>
  );
};

export default Icons;
