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
    <section className="bg-white" id="screenshots">
      <div className="fluid-container py-28">
        <Title value="ScreenShots" className={"pb-10"} />
        <div className="lg:w-3/5 md:w-full mx-auto flex flex-wrap md:flex-nowrap">
          <div className="flex justify-end md:justify-center items-center pr-2 w-1/2 md:w-auto order-2 md:order-1">
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
          {/* image goes here */}
          <div className="w-full rounded-lg overflow-hidden order-1 shrink-0 mb-6 md:shrink md:mb-0  md:order-1 bg-slate-200">
            <img
              className="max-w-full"
              src={"/myportfolio/" + data[count]}
              alt="screenshots"
            />
          </div>
          <div className="flex justify-start md:justify-center items-center pl-2  w-1/2 md:w-auto order-3  md:order-1">
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
