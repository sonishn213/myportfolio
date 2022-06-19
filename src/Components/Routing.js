import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout1 from "../Layout1";
import Layout2 from "../Layout2";
import Home from "./Home";
import Resume from "./Resume/Resume";
import ViewProject from "./VIewProjectPage/ViewProject";
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout1 />}>
        <Route index element={<Home />} />
        <Route path="resume" element={<Resume />} />
      </Route>
      <Route path=":id" element={<Layout2 />}>
        <Route index element={<ViewProject />} />
        <Route path="resume" element={<Resume />} />
      </Route>
    </Routes>
  );
};

export default Routing;
