import React, { useRef } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import ProjectCard from "./ProjectCard";
const ProjectSlider = ({ title, data }) => {
  const slideContainerRef = useRef(null);
  let count = 0;
  function next() {
    const slideContainer = slideContainerRef.current;
    let positionSlideContainer = slideContainer.getBoundingClientRect();

    if (positionSlideContainer.right <= 0) return;
    count++;
    let size = slideContainer.clientWidth;
    size -= 200;
    let move = -size * count;
    slideContainer.style.transition = "transform 0.5s ease-in-out";
    slideContainer.style.transform = "translateX(" + move + "px";
  }
  function prev() {
    const slideContainer = slideContainerRef.current;
    let positionSlideContainer = slideContainer.getBoundingClientRect();

    if (count <= 0) return;
    count--;

    let size = slideContainer.clientWidth;
    size -= 200;
    let move = -size * count;
    slideContainer.style.transition = "transform 0.5s ease-in-out";
    slideContainer.style.transform = "translateX(" + move + "px";
  }
  return (
    <div className="mt-10">
      {/* header */}

      <div className="flex justify-between ">
        <h2 className="uppercase">{title}</h2>
        <div className="flex space-x-4 items-center">
          <button className="text-3xl bg-s-dark-grey border-4 border-transparent hover:bg-s-light-grey active:border-s-orange">
            <IoMdArrowDropleft onClick={prev} />
          </button>
          <button className="text-3xl bg-s-dark-grey border-4 border-transparent  hover:bg-s-light-grey active:border-s-orange">
            <IoMdArrowDropright onClick={next} />
          </button>
        </div>
      </div>
      <div className="overflow-hidden">
        <div
          className="flex mt-10 space-x-6 flex-1  mb-10"
          ref={slideContainerRef}
        >
          {data.map((item) => {
            return <ProjectCard key={item.id} data={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectSlider;
