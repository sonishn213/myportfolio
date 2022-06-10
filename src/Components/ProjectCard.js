import React from "react";

const ProjectCard = ({ data }) => {
  const imgSrc =
    "https://images.unsplash.com/photo-1534939618208-e604c88fcffb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80";
  return (
    <div className="rounded-2xl overflow-x-hidden max-w-[350px] w-72 shadow-lg flex-shrink-0  relative">
      <div className="max-w-full">
        <img src={data.imgUrl} alt={data.projectName} />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap space-x-2 mb-5">
          {data.langs.map((lang) => {
            return (
              <div className=" text-slate-500 bg-s-dark-grey px-2 rounded-md uppercase">
                {lang}
              </div>
            );
          })}
        </div>
        <h4 className="uppercase hover:underline hover:underline-offset-4 cursor-pointer">
          {data.projectName}
        </h4>
      </div>
    </div>
  );
};

export default ProjectCard;
