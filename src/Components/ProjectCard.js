import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
const ProjectCard = ({ data }) => {
  return (
    <div className="rounded-2xl overflow-x-hidden max-w-[350px] w-72 shadow-lg flex-shrink-0  relative">
      <div className="max-w-full">
        <img src={data.tmbImg} alt={data.projectName} />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap space-x-2 mb-5">
          {data.langs.map((lang) => {
            if (lang.length <= 0) {
              return;
            }
            return (
              <div className=" text-slate-500 bg-s-dark-grey px-2 rounded-md uppercase">
                {lang}
              </div>
            );
          })}
        </div>
        <Link to={`/${data.id}`}>
          <h4 className="uppercase hover:underline hover:underline-offset-4 cursor-pointer">
            {data.projectName}
          </h4>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
