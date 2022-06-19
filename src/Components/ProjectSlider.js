import React, { useRef, useEffect } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";

import ProjectCard from "./ProjectCard";
const ProjectSlider = ({ title, data, from, to }) => {
  const slideContainerRef = useRef(null);
  const slideSectionRef = useRef(null);
  let containerRight = "";
  useEffect(() => {
    containerRight = slideContainerRef.current.getBoundingClientRect().right;
  }, []);
  let count = 0;
  function next() {
    const slideContainer = slideContainerRef.current;

    const LastElement = slideContainer.lastElementChild;

    let positionLastElement = LastElement.getBoundingClientRect();

    if (containerRight >= positionLastElement.right) {
      return;
    } else ++count;
    let size = slideContainer.clientWidth;
    if (size < 900) {
      size = LastElement.clientWidth;
      size += 24;
    } else {
      size -= 200;
    }

    let move = -size * count;
    slideContainer.style.transition = "transform 0.4s ease-in-out";
    slideContainer.style.transform = "translateX(" + move + "px";
  }
  function prev() {
    const slideContainer = slideContainerRef.current;
    const LastElement = slideContainer.lastElementChild;

    let positionSlideContainer = slideContainer.getBoundingClientRect();

    if (count <= 0) return;
    --count;

    let size = slideContainer.clientWidth;
    if (size < 900) {
      size = LastElement.clientWidth;
      size += 24;
    } else {
      size -= 200;
    }

    let move = -size * count;
    slideContainer.style.transition = "transform 0.5s ease-in-out";
    slideContainer.style.transform = "translateX(" + move + "px";
  }
  return (
    <div className="mt-10">
      {/* header */}

      <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:justify-between ">
        <h2 className="uppercase">{title}</h2>
        <div className="flex space-x-4 items-center  ">
          <button
            onClick={prev}
            className="text-3xl bg-s-dark-grey border-4 border-transparent hover:bg-s-light-grey active:border-s-orange"
          >
            <IoMdArrowDropleft />
          </button>
          <button
            onClick={next}
            className="text-3xl bg-s-dark-grey border-4 border-transparent  hover:bg-s-light-grey active:border-s-orange"
          >
            <IoMdArrowDropright />
          </button>
        </div>
      </div>
      <div>
        <div ref={slideSectionRef} className="w-full overflow-hidden ">
          <div
            className="flex mt-10 space-x-6 flex-1  mb-10 "
            ref={slideContainerRef}
          >
            {data.map((item) => {
              if (item.id >= from && item.id <= to)
                return <ProjectCard key={item.id} data={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSlider;
