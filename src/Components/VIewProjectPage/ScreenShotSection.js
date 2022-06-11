import React, { useState } from "react";
import Title from "../Title";
import { FaCaretRight } from "react-icons/fa";
import { FaCaretLeft } from "react-icons/fa";
const ScreenShotSection = ({ data }) => {
  let [count, setCount] = useState(0);

  const nextBtn = () => {
    if (count < data.length - 1) setCount(++count);
  };
  const prevBtn = () => {
    if (count > 0) setCount(--count);
  };
  return (
    <section className="bg-white">
      <div className="fluid-container py-28">
        <Title value="ScreenShots" className={"pb-10"} />
        <div className="w-3/5 mx-auto flex ">
          <div className="flex justify-center items-center pr-6">
            <div
              style={{ opacity: count <= 0 ? 0 : 1 }}
              onClick={prevBtn}
              className="rounded-full  border-2 border-s-dark-blue p-1 text-xl hover:bg-s-light-grey cursor-pointer"
            >
              <div className="mr-1 my-0.5">
                <FaCaretLeft />
              </div>
            </div>
          </div>
          <div className="w-full rounded-lg overflow-hidden">
            <img className="max-w-full" src={data[count]} alt="screenshots" />
          </div>
          <div className="flex justify-center items-center pl-6">
            <div
              style={{ opacity: count >= data.length - 1 ? 0 : 1 }}
              onClick={nextBtn}
              className="rounded-full  border-2 border-s-dark-blue p-1 text-xl hover:bg-s-light-grey cursor-pointer"
            >
              <div className="ml-1 my-0.5">
                <FaCaretRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScreenShotSection;
